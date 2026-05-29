---
topicId: inheritance-super-overriding-dispatch
moduleId: m3
title: Inheritance: super, constructors, overriding, dynamic dispatch
examWeight: 5-6 marks
keywords: [inheritance, super, overriding, dynamic dispatch, runtime polymorphism]
---

# Inheritance: super, constructors, overriding, dynamic dispatch

## super Keyword

`super` refers to **parent class**. Used to:
1. Call parent's constructor
2. Access parent's methods
3. Access parent's variables

### 1. Call Parent Constructor
```java
class Parent {
    Parent() {
        System.out.println("Parent constructor");
    }
}

class Child extends Parent {
    Child() {
        super();  // Calls Parent() - must be first line
        System.out.println("Child constructor");
    }
}

// Output:
// Parent constructor
// Child constructor
```

### 2. super with Parameterized Constructor
```java
class Parent {
    Parent(String msg) {
        System.out.println("Parent: " + msg);
    }
}

class Child extends Parent {
    Child() {
        super("Hello");  // Call with argument
        System.out.println("Child");
    }
}

new Child();
// Output:
// Parent: Hello
// Child
```

### 3. Access Parent's Methods
```java
class Parent {
    void display() {
        System.out.println("Parent display");
    }
}

class Child extends Parent {
    @Override
    void display() {
        super.display();  // Call parent's display
        System.out.println("Child display");
    }
}

Child c = new Child();
c.display();
// Output:
// Parent display
// Child display
```

---

## Constructor in Inheritance

**Important Rule:** Parent constructor always runs before child constructor.

```java
class A {
    A() {
        System.out.println("A's constructor");
    }
}

class B extends A {
    B() {
        System.out.println("B's constructor");
    }
}

class C extends B {
    C() {
        System.out.println("C's constructor");
    }
}

new C();
// Output:
// A's constructor
// B's constructor
// C's constructor
```

**Why?** Parent needs to be fully initialized before child can use it.

---

## Method Overriding

**Same method signature** in child class as parent.

```java
class Animal {
    void sound() {
        System.out.println("Some sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Bark");
    }
}

class Cat extends Animal {
    @Override
    void sound() {
        System.out.println("Meow");
    }
}
```

### Rules for Overriding

| Rule | Explanation |
|------|-------------|
| Method signature | Must be exactly same |
| Return type | Same or covariant |
| Access modifier | Cannot be more restrictive |
| static methods | Cannot be overridden (only hidden) |
| private methods | Cannot be overridden |
| final methods | Cannot be overridden |

### Covariant Return Type
```java
class Parent {
    Parent getObject() {
        return new Parent();
    }
}

class Child extends Parent {
    @Override
    Child getObject() {  // Can return subtype
        return new Child();
    }
}
```

---

## Dynamic Method Dispatch (Runtime Polymorphism)

**JVM decides which method to call at RUNTIME** based on actual object type.

```java
class Bank {
    double rate() {
        return 0.0;
    }
}

class SBI extends Bank {
    @Override
    double rate() {
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
        Bank b;  // Reference variable
        
        b = new SBI();    // Actual object is SBI
        System.out.println(b.rate());  // 6.5
        
        b = new HDFC();   // Actual object is HDFC
        System.out.println(b.rate());  // 7.0
        
        // Array of banks
        Bank[] banks = {new SBI(), new HDFC(), new Bank()};
        for (Bank bank : banks) {
            System.out.println(bank.rate());  // Polymorphic call
        }
    }
}
```

### How it Works?

```
Reference Type: Bank b
                  │
                  ▼
┌─────────────────────────────────┐
│ b = new SBI();                  │
│          │                      │
│          ▼                      │
│     Actual Object: SBI          │
│     rate() → 6.5                │
│          │                      │
│          ▼                      │
│     JVM calls SBI's rate()      │  ← Decided at RUNTIME
└─────────────────────────────────┘
```

---

## Complete Example

```java
class Shape {
    String color;
    
    Shape(String color) {
        this.color = color;
    }
    
    double area() {
        return 0;
    }
}

class Rectangle extends Shape {
    double length, width;
    
    Rectangle(double l, double w) {
        super("Red");  // Call parent constructor
        this.length = l;
        this.width = w;
    }
    
    @Override
    double area() {
        return length * width;
    }
}

class Circle extends Shape {
    double radius;
    
    Circle(double r) {
        super("Blue");
        this.radius = r;
    }
    
    @Override
    double area() {
        return Math.PI * radius * radius;
    }
}

public class Main {
    static void printArea(Shape s) {  // Polymorphic method
        System.out.println("Area: " + s.area());
    }
    
    public static void main(String[] args) {
        Shape s;
        
        s = new Rectangle(5, 3);
        printArea(s);  // 15.0
        
        s = new Circle(7);
        printArea(s);  // 153.94
        
        // Using Shape reference with subclass objects
        Shape[] shapes = {
            new Rectangle(4, 5),
            new Circle(3),
            new Rectangle(2, 8)
        };
        
        for (Shape shape : shapes) {
            System.out.println(shape.area());
        }
    }
}
```

---

## 5-6 Mark Questions

**Q1: What is dynamic method dispatch? How does Java achieve runtime polymorphism?**

**Answer:**

**Dynamic Method Dispatch** is the process where the JVM decides which version of an overridden method to call at **runtime** based on the **actual object type** (not reference type).

**How it works:**

1. Parent reference points to child object
2. Method call is made through reference
3. JVM checks actual object type at runtime
4. Calls the appropriate (overridden) method

```java
class Parent {
    void display() { System.out.println("Parent"); }
}

class Child extends Parent {
    @Override
    void display() { System.out.println("Child"); }
}

Parent p = new Child();  // Parent ref, Child object
p.display();  // Output: Child (decided at runtime)
```

**Why needed?**
- Achieves runtime polymorphism
- Allows flexible code
- Enables method overriding to work properly

---

**Q2: Explain the use of 'super' keyword in Java with examples.**

**Answer:**

**super** keyword refers to the **immediate parent class**.

**Three uses:**

**1. To call parent constructor:**
```java
class Parent {
    Parent(int x) { System.out.println("Parent: " + x); }
}

class Child extends Parent {
    Child() {
        super(100);  // Call Parent(int)
        System.out.println("Child");
    }
}
```

**2. To access parent method:**
```java
class Parent {
    void show() { System.out.println("Parent show"); }
}

class Child extends Parent {
    void show() {
        super.show();  // Calls Parent's show
        System.out.println("Child show");
    }
}
```

**3. To access parent variable:**
```java
class Parent {
    int x = 10;
}

class Child extends Parent {
    int x = 20;
    
    void display() {
        System.out.println(super.x);  // 10
        System.out.println(this.x);  // 20
    }
}
```

**Note:** `super()` or `super(arg)` must be the **first statement** in constructor.
