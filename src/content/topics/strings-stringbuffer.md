---
topicId: strings-stringbuffer
moduleId: m4
title: String Handling: String operations + StringBuffer
examWeight: 5-6 marks
keywords: [string, immutable, stringbuffer, mutable]
---

# String Handling: String operations + StringBuffer

## String Basics

### What is String?
A sequence of characters. In Java, String is an **object** (not primitive).

### Declaration
```java
// Method 1: Using string literal (preferred)
String s1 = "Hello";

// Method 2: Using new keyword
String s2 = new String("Hello");
```

### Why String is Immutable?

Once created, **cannot be changed**. Every modification creates new String object.

```java
String s = "Hello";
s = s + " World";  // New object created
// Original "Hello" becomes eligible for GC
```

**Why immutable?**
- Security (usernames, passwords)
- Thread safety (shared between threads)
- HashMap keys work correctly
- ClassLoader works correctly

---

## String Methods

### Common Methods

```java
String s = "Hello World";

s.length();                    // 11
s.charAt(0);                   // H
s.charAt(6);                   // W
s.substring(0, 5);             // Hello
s.toUpperCase();               // HELLO WORLD
s.toLowerCase();               // hello world
s.trim();                      // Removes leading/trailing spaces
s.replace('o', 'x');           // Hellx Wxrld
s.replace("World", "Java");    // Hello Java
s.indexOf('o');                // 4
s.lastIndexOf('o');            // 7
s.contains("World");           // true
s.startsWith("Hello");        // true
s.endsWith("World");          // true
s.equals("hello world");      // false (case sensitive)
s.equalsIgnoreCase("hello world"); // true
s.isEmpty();                   // false
s.isBlank();                   // false (Java 11+)
```

### String Comparison

```java
String s1 = "Hello";
String s2 = "Hello";
String s3 = new String("Hello");

s1 == s2;                      // true (same object in pool)
s1 == s3;                      // false (different objects)
s1.equals(s3);                 // true (same content)
```

---

## String Pool (Memory Optimization)

```
String s1 = "Hello";
String s2 = "Hello";  // Reuses s1 from pool

String s3 = new String("Hello");  // Creates new object in heap
```

**String Pool:** JVM maintains a pool of unique string literals to save memory.

---

## StringBuilder (Mutable)

**Why?** String is immutable, every change creates new object (slow).

### StringBuilder Methods

```java
StringBuilder sb = new StringBuilder("Hello");

// Append
sb.append(" World");    // Hello World

// Insert
sb.insert(5, ",");      // Hello, World

// Delete
sb.delete(5, 6);        // HelloWorld
sb.deleteCharAt(0);     // elloWorld

// Replace
sb.replace(0, 5, "Hi"); // Hi World

// Reverse
sb.reverse();           // dlroW iH

// Capacity
sb.capacity();          // Default 16 + current length
sb.ensureCapacity(100);  // Minimum capacity
```

---

## StringBuffer (Thread-Safe)

Same as StringBuilder but **synchronized** (thread-safe).

```java
StringBuffer sb = new StringBuffer("Hello");

sb.append(" World");    // Thread-safe
sb.insert(5, ",");
sb.reverse();
```

### StringBuilder vs StringBuffer

| Feature | StringBuilder | StringBuffer |
|---------|---------------|--------------|
| Thread-safe | No | Yes |
| Performance | Faster | Slower (synchronization) |
| Use when | Single thread | Multiple threads |

---

## String Operations Examples

### Finding Substring
```java
String s = "Hello World World";

s.indexOf("World");        // 6
s.lastIndexOf("World");    // 12
s.indexOf("World", 8);     // 12 (search from index 8)
```

### Splitting String
```java
String s = "apple,banana,mango";

String[] fruits = s.split(",");  // [apple, banana, mango]
for (String f : fruits) {
    System.out.println(f);
}

// Split with limit
String[] parts = s.split(",", 2);  // [apple, banana,mango]
```

### String to Number
```java
String num = "123";
int n = Integer.parseInt(num);     // String to int
double d = Double.parseDouble("3.14");
boolean b = Boolean.parseBoolean("true");

// Number to String
int x = 100;
String s1 = String.valueOf(x);     // "100"
String s2 = Integer.toString(x); // "100"
```

### StringBuilder Example
```java
StringBuilder sb = new StringBuilder();

for (int i = 1; i <= 10; i++) {
    sb.append(i).append(" ");  // 1 2 3 4 5 6 7 8 9 10
}

System.out.println(sb);  // 1 2 3 4 5 6 7 8 9 10
```

---

## 5-6 Mark Questions

**Q1: Explain the difference between String, StringBuilder, and StringBuffer with examples.**

**Answer:**

| Feature | String | StringBuilder | StringBuffer |
|---------|--------|---------------|--------------|
| Mutable | No | Yes | Yes |
| Thread-safe | No | No | Yes |
| Performance | Slow (new object) | Fast | Slower (synchronized) |
| Storage | String Pool | Heap | Heap |

**String (Immutable):**
```java
String s = "Hello";
s = s + " World";  // Creates new object
// String cannot be modified in place
```

**StringBuilder (Mutable, Not Thread-Safe):**
```java
StringBuilder sb = new StringBuilder("Hello");
sb.append(" World");  // Modifies same object
// Faster, use in single-threaded code
```

**StringBuffer (Mutable, Thread-Safe):**
```java
StringBuffer sb = new StringBuffer("Hello");
sb.append(" World");  // Synchronized, thread-safe
// Slower, use in multi-threaded code
```

**When to use?**
- **String:** When content never changes
- **StringBuilder:** When frequent modifications, single thread
- **StringBuffer:** When frequent modifications, multiple threads

---

**Q2: Why are Strings immutable in Java? Explain with an example.**

**Answer:**

**Strings are immutable** because once created, their content cannot be changed.

```java
String s = "Hello";
s.concat(" World");  // Creates NEW string, doesn't modify s
System.out.println(s);  // Still "Hello"
```

**Why immutability?**

1. **Security:** Passwords, usernames stored as Strings shouldn't change
2. **Thread Safety:** Can be shared between threads without synchronization
3. **HashMap Keys:** Work correctly as immutable keys
4. **String Pool:** Saves memory by reusing Strings
5. **ClassLoader:** Works correctly with immutable Strings

**Example showing memory optimization:**
```java
String s1 = "Java";          // Created in pool
String s2 = "Java";          // Reuses s1 (same reference)
String s3 = new String("Java");  // New object in heap

System.out.println(s1 == s2);   // true (same object)
System.out.println(s1 == s3);  // false (different objects)
System.out.println(s1.equals(s3)); // true (same content)
```
