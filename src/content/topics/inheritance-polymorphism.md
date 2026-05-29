---
topicId: inheritance-polymorphism
moduleId: m1
title: Inheritance & Polymorphism
examWeight: 5-6 marks
keywords: [inheritance, polymorphism, override, overload]
---

# Inheritance & Polymorphism

## Inheritance (IS-A Relationship)

### Definition
Inheritance allows a class to **acquire properties** (fields + methods) of another class. Promotes **code reusability**.

### Terminology
- **Parent/Super/Base Class** - Class whose properties are inherited
- **Child/Sub/Derived Class** - Class that inherits

### Types of Inheritance in Java

| Type | Description | Java Supported? |
|------|-------------|------------------|
| Single | A extends B | Yes |
| Multilevel | A extends B extends C | Yes |
| Hierarchical | A extends B, A extends C | Yes |
| Multiple | A extends B, C | No (use interface) |
| Hybrid | Mix of above | No (use interface) |

### Code Example

```java
// Single Inheritance
class Animal {           // Super/Parent class
    String name;
    
    void eat() {
        System.out.println(name + " is eating");
    }
}

class Dog extends Animal {  // Sub/Child class
    String breed;
    
    void bark() {
        System.out.println(name + " is barking");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.name = "Tommy";
        d.breed = "Labrador";
        d.eat();    // Inherited method
        d.bark();   // Own method
    }
}
```

### Multilevel Inheritance

```java
class Grandfather {
    void house() {
        System.out.println("Old house");
    }
}

class Father extends Grandfather {
    void car() {
        System.out.println("Father's car");
    }
}

class Son extends Father {
    void bike() {
        System.out.println("Son's bike");
    }
}
// Son can access: bike(), car(), house()
```

---

## Polymorphism (Many Forms)

### Types:

1. **Compile-time (Static) Polymorphism** - Method Overloading
2. **Runtime (Dynamic) Polymorphism** - Method Overriding

### Method Overloading (Compile-time)

**Same name, different parameters** (number, type, or order)

```java
class Calculator {
    // Overloaded methods
    int add(int a, int b) {
        System.out.println("int add");
        return a + b;
    }
    
    double add(double a, double b) {  // Different parameter type
        System.out.println("double add");
        return a + b;
    }
    
    int add(int a, int b, int c) {    // Different number of params
        System.out.println("3 int add");
        return a + b + c;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator c = new Calculator();
        c.add(5, 10);              // Calls: int add(int, int)
        c.add(5.5, 10.5);         // Calls: double add(double, double)
        c.add(1, 2, 3);           // Calls: int add(int, int, int)
    }
}
```

### Method Overriding (Runtime)

**Same signature in parent and child class**

```java
class Bank {
    double rate() {
        return 5.0;
    }
}

class SBI extends Bank {
    @Override
    double rate() {    // Overriding parent's method
        return 6.5;
    }
}

class HDFC extends Bank {
    @Override
    double rate() {
        return 7.0;
    }
}

public class Main {
    public static void main(String[] args) {
        Bank b;
        b = new SBI();      // Runtime decision
        System.out.println("SBI Rate: " + b.rate());   // 6.5
        
        b = new HDFC();
        System.out.println("HDFC Rate: " + b.rate());  // 7.0
    }
}
```

---

## Overloading vs Overriding (Very Important!)

| Feature | Overloading | Overriding |
|---------|-------------|------------|
| Method name | Same | Same |
| Parameters | Different | Same |
| Classes | Same class | Different classes (parent-child) |
| Access modifier | Can be different | Cannot reduce visibility |
| Return type | Can be different | Same or covariant |
| static methods | Can be overloaded | Cannot override (hides) |
| private methods | Can be overloaded | Cannot override |
| Binding | Compile-time (static) | Runtime (dynamic) |

---

## 5-6 Mark Questions

**Q1: Explain inheritance with its types. Why doesn't Java support multiple inheritance?**

**Answer:**

**Inheritance** is the process where a class acquires properties of another class.

**Types in Java:**
1. **Single:** Class B extends Class A
2. **Multilevel:** Class C extends Class B extends Class A
3. **Hierarchical:** Class B and C extend Class A

**Why Multiple Inheritance not supported?**
```
class A { void show() {} }
class B { void show() {} }
class C extends A, B {  // Which show() to call? AMBIGUITY!
    void display() { show(); }  // Compiler confused
}
```
This creates **Diamond Problem** - ambiguity in method resolution.

**Solution:** Use interfaces (a class can implement multiple interfaces)

---

**Q2: What is polymorphism? Explain compile-time and runtime polymorphism with examples.**

**Answer:**

**Polymorphism** = "Many Forms" - Same name behaves differently in different contexts.

**1. Compile-time (Method Overloading):**
```java
class Math {
    int add(int a, int b) { return a + b; }
    int add(int a, int b, int c) { return a + b + c; } // Overloaded
}
```
Decision made at **compile time** by compiler based on parameters.

**2. Runtime (Method Overriding):**
```java
class Parent { void display() { System.out.println("Parent"); }}
class Child extends Parent { void display() { System.out.println("Child"); }}

Parent p = new Child();  // Upcasting
p.display();  // Output: Child (decided at runtime)
```
Decision made at **runtime** by JVM based on actual object type.
