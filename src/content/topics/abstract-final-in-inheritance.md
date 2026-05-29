---
topicId: abstract-final-in-inheritance
moduleId: m3
title: Abstract Classes + final with Inheritance
examWeight: 5-6 marks
keywords: [abstract class, abstract method, final]
---

# Abstract Classes + final with Inheritance

## Abstract Class

### Definition
A class declared with `abstract` keyword that **cannot be instantiated** (cannot create objects). Used as a blueprint for subclasses.

### Abstract Method
A method declared with `abstract` keyword **without body**. Must be implemented by subclasses.

### Rules

| Feature | Rule |
|---------|------|
| Objects | Cannot create instance of abstract class |
| Methods | Can have abstract methods (no body) |
| Constructors | Can have constructors (for initialization) |
| Variables | Can have any type of variables |
| Inheritance | Can extend one class only |
| Implementation | Subclass must implement ALL abstract methods |

### Syntax

```java
// Abstract class
abstract class Animal {
    String name;
    
    // Abstract method (no body)
    abstract void sound();
    
    // Concrete method (with body)
    void eat() {
        System.out.println(name + " is eating");
    }
    
    // Constructor
    Animal(String n) {
        name = n;
    }
}

// Concrete class - MUST implement abstract methods
class Dog extends Animal {
    Dog(String n) {
        super(n);
    }
    
    @Override
    void sound() {
        System.out.println(name + " says: Bark!");
    }
}

public class Main {
    public static void main(String[] args) {
        // Animal a = new Animal();  // ERROR: Cannot instantiate
        Animal a = new Dog("Tommy");  // OK: Parent ref, child object
        a.sound();  // Polymorphic call
        a.eat();
    }
}
```

### Abstract Class with Partial Implementation

```java
abstract class Shape {
    String color;
    
    Shape(String c) {
        color = c;
    }
    
    // Abstract methods - subclasses MUST implement
    abstract double area();
    abstract void draw();
    
    // Concrete method - optional override
    void displayColor() {
        System.out.println("Color: " + color);
    }
}

class Circle extends Shape {
    double radius;
    
    Circle(String c, double r) {
        super(c);
        this.radius = r;
    }
    
    @Override
    double area() {
        return Math.PI * radius * radius;
    }
    
    @Override
    void draw() {
        System.out.println("Drawing Circle");
    }
}
```

---

## Abstract vs Concrete Class

| Feature | Abstract Class | Concrete Class |
|---------|---------------|----------------|
| Instantiation | Cannot | Can |
| Methods | Can have abstract + concrete | All concrete |
| Purpose | Blueprint for subclasses | Full implementation |
| Can have constructor | Yes | Yes |
| Can have variables | Yes | Yes |
| Inheritance | Can extend one | Can extend one |

---

## final with Inheritance

### final Class - Cannot Extend
```java
final class MathHelper {
    static int add(int a, int b) {
        return a + b;
    }
}

// class Advanced extends MathHelper {}  // ERROR: Cannot extend
```

**Examples of final classes:** String, System, Scanner, Math

### final Method - Cannot Override
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

### final Variable - Cannot Modify
```java
class Constants {
    static final double PI = 3.14159;
    final int MAX_SIZE = 100;
}
```

---

## Abstract + final Combination

**Can you combine?** NO!

```java
abstract final class Test { }  // ERROR!
```
- `abstract` = "must be subclassed"
- `final` = "cannot be subclassed"
- **Contradictory!**

---

## Complete Example

```java
// Abstract class
abstract class Vehicle {
    String brand;
    int speed;
    
    Vehicle(String b, int s) {
        brand = b;
        speed = s;
    }
    
    // Abstract methods
    abstract void start();
    abstract void stop();
    
    // Concrete method
    void showDetails() {
        System.out.println(brand + " at " + speed + " km/h");
    }
}

// Car extends Vehicle
class Car extends Vehicle {
    Car(String brand, int speed) {
        super(brand, speed);
    }
    
    @Override
    void start() {
        System.out.println(brand + " car started with key");
    }
    
    @Override
    void stop() {
        System.out.println(brand + " car stopped");
    }
}

// Bike extends Vehicle
class Bike extends Vehicle {
    Bike(String brand, int speed) {
        super(brand, speed);
    }
    
    @Override
    void start() {
        System.out.println(brand + " bike started with kick");
    }
    
    @Override
    void stop() {
        System.out.println(brand + " bike stopped");
    }
}

public class Main {
    public static void main(String[] args) {
        Vehicle[] vehicles = {
            new Car("Toyota", 80),
            new Bike("Honda", 60),
            new Car("Ford", 100)
        };
        
        for (Vehicle v : vehicles) {
            v.showDetails();
            v.start();
            v.stop();
            System.out.println();
        }
    }
}
```

---

## 5-6 Mark Questions

**Q1: What is an abstract class? How does it differ from interface? When should you use each?**

**Answer:**

**Abstract Class:**
- Declared with `abstract` keyword
- Can have both abstract and concrete methods
- Can have constructors
- Can have instance variables
- A class can extend only one abstract class
- Used when you need shared implementation

**Interface:**
- 100% abstract (before Java 8)
- Can have default, static methods (Java 8+)
- Cannot have constructors
- Variables are public static final by default
- A class can implement multiple interfaces
- Used for multiple inheritance

**When to use Abstract Class:**
- When subclasses share code/constructors
- When you need non-public members
- When creating a family of related classes

**When to use Interface:**
- When defining capabilities (like Cloneable)
- When multiple inheritance needed
- When unrelated classes implement same behavior

---

**Q2: Explain abstract class and abstract method with a suitable example.**

**Answer:**

**Abstract Method:** A method declared without body (implementation), must be overridden by subclasses.

**Abstract Class:** A class declared with `abstract` keyword, cannot be instantiated directly.

```java
abstract class Bank {
    String name;
    
    Bank(String n) {
        name = n;
    }
    
    // Abstract method - no body
    abstract double getInterestRate();
    
    // Concrete method
    void displayBank() {
        System.out.println("Bank: " + name);
    }
}

class SBI extends Bank {
    SBI() {
        super("SBI");
    }
    
    @Override
    double getInterestRate() {
        return 6.5;
    }
}

class HDFC extends Bank {
    HDFC() {
        super("HDFC");
    }
    
    @Override
    double getInterestRate() {
        return 7.0;
    }
}

public class Main {
    public static void main(String[] args) {
        Bank b = new SBI();
        System.out.println(b.getInterestRate());  // 6.5
        
        b = new HDFC();
        System.out.println(b.getInterestRate());  // 7.0
    }
}
```

**Key Points:**
- Abstract class cannot be instantiated
- All abstract methods must be implemented
- Concrete methods can be optionally overridden
