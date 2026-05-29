---
topicId: generics-intro
moduleId: m4
title: Generics (Generic Class, Two Type Params)
examWeight: 5-6 marks
keywords: [generics, type parameter, generic class, pair]
---

# Generics (Generic Class, Two Type Params)

## What are Generics?

**Type-safe** programming. Allows classes, interfaces to work with any data type while providing **compile-time type checking**.

### Before Generics (Raw Types)
```java
// Problem: No type checking, need casting
ArrayList list = new ArrayList();
list.add("Hello");
list.add(123);  // No error!

String s = (String) list.get(1);  // Runtime error! (Integer can't cast to String)
```

### With Generics
```java
// Solution: Type safety at compile time
ArrayList<String> list = new ArrayList<>();
list.add("Hello");
// list.add(123);  // COMPILER ERROR!

String s = list.get(0);  // No casting needed
```

---

## Generic Class

### Definition
```java
class ClassName<T> {
    T data;  // Type parameter
    
    ClassName(T d) {
        data = d;
    }
    
    T getData() {
        return data;
    }
}

// Usage
ClassName<String> obj1 = new ClassName<>("Hello");
ClassName<Integer> obj2 = new ClassName<>(100);

String s = obj1.getData();  // No cast
Integer i = obj2.getData(); // No cast
```

### Generic Class with Two Type Parameters

```java
class Pair<K, V> {
    private K key;
    private V value;
    
    Pair(K k, V v) {
        key = k;
        value = v;
    }
    
    K getKey() { return key; }
    V getValue() { return value; }
}

// Usage
Pair<String, Integer> p1 = new Pair<>("Age", 25);
System.out.println(p1.getKey());   // Age
System.out.println(p1.getValue()); // 25

Pair<Integer, String> p2 = new Pair<>(1, "One");
System.out.println(p2.getKey());   // 1
System.out.println(p2.getValue()); // One
```

---

## Generic Methods

```java
class Util {
    // Generic method - type parameter before return type
    static <T> void print(T element) {
        System.out.println(element);
    }
    
    // Generic method with array
    static <T> void printArray(T[] arr) {
        for (T element : arr) {
            System.out.print(element + " ");
        }
    }
}

// Usage
Util.print("Hello");           // Hello
Util.print(123);              // 123

String[] names = {"A", "B", "C"};
Util.printArray(names);       // A B C
```

---

## Bounded Type Parameters

Restrict what types can be used.

### Upper Bound
```java
// T must be Number or subclass (Integer, Double, etc.)
class Calculator<T extends Number> {
    T value;
    
    Calculator(T v) {
        value = v;
    }
    
    double doubleValue() {
        return value.doubleValue();
    }
}

Calculator<Integer> c1 = new Calculator<>(10);  // OK
Calculator<Double> c2 = new Calculator<>(3.14); // OK
// Calculator<String> c3;  // ERROR: String not Number
```

### Multiple Bounds
```java
class Data<T extends Comparable<T> & Serializable> {
    T value;
}
```

---

## Wildcards

### Unbounded Wildcard
```java
void printList(List<?> list) {
    for (Object o : list) {
        System.out.println(o);
    }
}
```

### Upper Bounded Wildcard
```java
// Accepts List of Integer, Double, Number, etc.
double sum(List<? extends Number> list) {
    double sum = 0;
    for (Number n : list) {
        sum += n.doubleValue();
    }
    return sum;
}

sum(Arrays.asList(1, 2, 3));       // OK (Integer)
sum(Arrays.asList(1.5, 2.5));     // OK (Double)
```

### Lower Bounded Wildcard
```java
// Accepts Integer, Number, Object
void addNumbers(List<? super Integer> list) {
    list.add(10);
}
```

---

## Generic Interface

```java
interface Container<T> {
    void add(T item);
    T get(int index);
    int size();
}

class StringContainer implements Container<String> {
    private List<String> list = new ArrayList<>();
    
    @Override
    public void add(String item) {
        list.add(item);
    }
    
    @Override
    public String get(int index) {
        return list.get(index);
    }
    
    @Override
    public int size() {
        return list.size();
    }
}
```

---

## Complete Example: Generic Pair Class

```java
// Generic Pair class with two type parameters
class Pair<K, V> {
    private K first;
    private V second;
    
    Pair(K f, V s) {
        first = f;
        second = s;
    }
    
    public K getFirst() { return first; }
    public V getSecond() { return second; }
    
    public void setFirst(K f) { first = f; }
    public void setSecond(V s) { second = s; }
    
    @Override
    public String toString() {
        return "(" + first + ", " + second + ")";
    }
}

// Usage
public class Main {
    public static void main(String[] args) {
        // String and Integer pair
        Pair<String, Integer> student = new Pair<>("Rahul", 101);
        System.out.println(student);  // (Rahul, 101)
        
        // Integer and String pair (reversed)
        Pair<Integer, String> rollName = new Pair<>(1, "Amit");
        System.out.println(rollName);  // (1, Amit)
        
        // Student database
        Map<String, Pair<String, Integer>> db = new HashMap<>();
        db.put("CS101", new Pair<>("Data Structures", 4));
        db.put("CS102", new Pair<>("Algorithms", 4));
        
        for (Map.Entry<String, Pair<String, Integer>> entry : db.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
    }
}
```

---

## 5-6 Mark Questions

**Q1: What are generics in Java? Explain with an example of a generic class with two type parameters.**

**Answer:**

**Generics** enable type-safe programming with **type parameters**. They provide compile-time type checking and eliminate need for casting.

**Generic Class with Two Type Parameters:**

```java
// Box with two types: K (key) and V (value)
class KeyValue<K, V> {
    private K key;
    private V value;
    
    KeyValue(K k, V v) {
        key = k;
        value = v;
    }
    
    K getKey() { return key; }
    V getValue() { return value; }
}
```

**Usage:**
```java
// String-Integer pair
KeyValue<String, Integer> kv1 = new KeyValue<>("Age", 25);
System.out.println(kv1.getKey());    // Age
System.out.println(kv1.getValue()); // 25

// Integer-String pair (different types)
KeyValue<Integer, String> kv2 = new KeyValue<>(101, "Student");
System.out.println(kv2.getKey());    // 101
System.out.println(kv2.getValue()); // Student
```

**Benefits:**
1. Type safety - compiler checks types
2. No casting required
3. Reusability - same class for different types
4. Early error detection (compile time)

---

**Q2: Explain bounded type parameters in generics with an example.**

**Answer:**

**Bounded type parameters** restrict the types that can be used as type arguments.

**Syntax:**
```java
class ClassName<T extends UpperBound> { }
```

**Example: Number Calculator**
```java
class NumberBox<T extends Number> {
    private T number;
    
    NumberBox(T n) {
        number = n;
    }
    
    double toDouble() {
        return number.doubleValue();
    }
    
    int toInt() {
        return number.intValue();
    }
}
```

**Usage:**
```java
NumberBox<Integer> box1 = new NumberBox<>(100);  // OK
NumberBox<Double> box2 = new NumberBox<>(3.14);   // OK
NumberBox<Long> box3 = new NumberBox<>(1000L);   // OK

// These would cause COMPILE ERROR:
// NumberBox<String> box4;  // ERROR: String not subclass of Number
// NumberBox<Number> box5; // Can store any Number
```

**Why use bounds?**
- Access methods of the bound type
- Ensure type safety
- Example: `T.doubleValue()` only works because T extends Number
