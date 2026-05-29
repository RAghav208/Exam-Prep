---
topicId: methods-overloading-access-static-final-cli
moduleId: m2
title: Methods: Overloading, Passing Objects, Access Control, static/final, CLI Args
examWeight: 5-6 marks
keywords: [overloading, parameters, access modifiers, static, final, command line]
---

# Methods: Overloading, Passing Objects, Access Control, static/final, CLI Args

## Method Overloading

**Same name, different parameters** within the same class.

```java
class Calculator {
    // Same name, different parameter count
    int add(int a, int b) {
        System.out.println("2 params");
        return a + b;
    }
    
    int add(int a, int b, int c) {
        System.out.println("3 params");
        return a + b + c;
    }
    
    // Same name, different parameter type
    double add(double a, double b) {
        System.out.println("double params");
        return a + b;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator c = new Calculator();
        System.out.println(c.add(5, 10));          // int add
        System.out.println(c.add(1, 2, 3));        // 3 param
        System.out.println(c.add(5.5, 3.2));      // double add
    }
}
```

**Why Method Overloading?**
- Same operation, different data types
- Better readability
- No need to remember multiple method names

---

## Passing Objects to Methods

### Pass by Value (Primitive)
```java
void change(int x) {
    x = 100;  // Only local copy changed
}

int num = 10;
change(num);
System.out.println(num);  // 10 (unchanged)
```

### Pass by Reference (Objects)
```java
void change(Student s) {
    s.name = "Changed";  // Original object modified
}

Student s = new Student();
s.name = "Original";
change(s);
System.out.println(s.name);  // Changed
```

### Returning Objects
```java
class Factory {
    Student createStudent(String name) {
        Student s = new Student();
        s.name = name;
        return s;  // Returns object
    }
}

// Usage
Factory f = new Factory();
Student s = f.createStudent("Rahul");
```

---

## Access Modifiers

| Modifier | Same Class | Same Package | Subclass | Everywhere |
|----------|------------|--------------|----------|------------|
| `private` | Yes | No | No | No |
| `default` | Yes | Yes | No | No |
| `protected` | Yes | Yes | Yes | No |
| `public` | Yes | Yes | Yes | Yes |

### Examples

```java
public class AccessDemo {
    public int publicVar = 1;
    protected int protectedVar = 2;
    int defaultVar = 3;        // default (no keyword)
    private int privateVar = 4;
    
    public void method() {
        // All accessible within class
        System.out.println(publicVar);
        System.out.println(protectedVar);
        System.out.println(defaultVar);
        System.out.println(privateVar);
    }
}
```

**When to use?**
- `private`: Hide internal data (encapsulation)
- `protected`: Allow subclass access
- `public`: API for external use
- `default`: Package-level access

---

## static Keyword

### Static Variable (Class Variable)
```java
class Student {
    static String schoolName = "ABC College";  // Shared by all
    String name;  // Instance variable (unique per object)
}

Student s1 = new Student();
s1.name = "Rahul";

Student s2 = new Student();
s2.name = "Priya";

System.out.println(s1.schoolName);  // ABC College
System.out.println(s2.schoolName);  // ABC College (same)

Student.schoolName = "XYZ College";  // Changes for all
```

### Static Method
```java
class MathUtils {
    static int add(int a, int b) {
        return a + b;
    }
    
    // Can be called without object
    static double pi = 3.14;
}

// Usage
int sum = MathUtils.add(5, 10);
double p = MathUtils.pi;
```

**Rules for static methods:**
- Can access static members directly
- Cannot use `this` or `super`
- Cannot be overridden (can be hidden)

---

## final Keyword

### final Variable (Constant)
```java
final int MAX = 100;
// MAX = 200;  // ERROR: Cannot modify

final double PI = 3.14159;
```

### final Method (Cannot Override)
```java
class Parent {
    final void display() {
        System.out.println("Parent display");
    }
}

class Child extends Parent {
    // void display() {}  // ERROR: Cannot override
}
```

### final Class (Cannot Extend)
```java
final class String {
    // Cannot be extended
}
```

---

## Command Line Arguments

```java
public class ArgsDemo {
    public static void main(String[] args) {
        System.out.println("Number of args: " + args.length);
        
        for (int i = 0; i < args.length; i++) {
            System.out.println("Arg " + i + ": " + args[i]);
        }
    }
}
```

**Execution:**
```bash
javac ArgsDemo.java
java ArgsDemo Hello World 123
```

**Output:**
```
Number of args: 3
Arg 0: Hello
Arg 1: World
Arg 2: 123
```

**Type Conversion:**
```java
public class Sum {
    public static void main(String[] args) {
        int a = Integer.parseInt(args[0]);
        int b = Integer.parseInt(args[1]);
        System.out.println("Sum: " + (a + b));
    }
}
```
```
java Sum 10 20
Sum: 30
```

---

## 5-6 Mark Questions

**Q1: Explain method overloading with examples. How does it differ from method overriding?**

**Answer:**

**Method Overloading (Compile-time/Static Polymorphism)**

Same method name, different parameters in same class.

```java
class Math {
    int add(int a, int b) { return a + b; }
    int add(int a, int b, int c) { return a + b + c; }
    double add(double a, double b) { return a + b; }
}
```

**Differences:**

| Aspect | Overloading | Overriding |
|--------|-------------|------------|
| Classes | Same class | Different (parent-child) |
| Parameters | Must differ | Must be same |
| Return type | Can differ | Same or covariant |
| Access modifier | Can differ | Cannot be more restrictive |
| Binding | Compile-time | Runtime |
| Purpose | Different functionality, same name | Modify inherited behavior |

---

**Q2: Explain static and final keywords in Java with their uses.**

**Answer:**

**static:**
- Shared among all objects of class
- No object needed to access
- Stored in method area (shared memory)

```java
class Counter {
    static int count = 0;  // Shared
    
    Counter() {
        count++;
    }
}
```

**final:**
- Cannot be changed
- For constants and preventing inheritance/modification

```java
final int MAX = 100;           // Cannot modify
final void display() {}        // Cannot override
final class A {}               // Cannot extend
```

**Static vs Instance:**

| Feature | Static | Instance |
|---------|--------|----------|
| Keyword | static | (none) |
| Memory | One per class | One per object |
| Access | ClassName.variable | object.variable |
| When created | Class load time | Object creation |
| Use | Shared data | Object-specific data |