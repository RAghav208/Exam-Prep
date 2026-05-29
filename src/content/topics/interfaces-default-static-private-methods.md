---
topicId: interfaces-default-static-private-methods
moduleId: m3
title: Interfaces (default/static/private methods)
examWeight: 5-6 marks
keywords: [interface, default method, static method, private method]
---

# Interfaces (default/static/private methods)

## What is Interface?

A **100% abstract** class (before Java 8) that defines a contract. Classes **implement** interfaces.

### Before Java 8
```java
interface Drawable {
    void draw();  // Abstract - no body
}

class Circle implements Drawable {
    @Override
    public void draw() {
        System.out.println("Drawing Circle");
    }
}
```

### Key Points
- Interface methods are `public abstract` by default
- Interface variables are `public static final` by default
- Cannot instantiate interface
- Class can implement multiple interfaces
- Used for multiple inheritance

---

## Interface Evolution (Java 8+)

### default Methods (Java 8)

Allow adding methods **with default implementation** without breaking existing code.

```java
interface Drawable {
    void draw();  // Abstract method
    
    // default method - with implementation
    default void show() {
        System.out.println("Showing drawable");
    }
    
    // static method in interface
    static void info() {
        System.out.println("Interface info");
    }
}

class Circle implements Drawable {
    @Override
    public void draw() {
        System.out.println("Drawing Circle");
    }
    // show() inherited automatically
}

public class Main {
    public static void main(String[] args) {
        Circle c = new Circle();
        c.draw();  // Drawing Circle
        c.show();  // Showing drawable
        Drawable.info();  // Interface info
    }
}
```

### Why default Methods?

**Problem:** Adding method to interface breaks existing implementing classes.

**Solution:** default methods provide backward compatibility.

```java
interface Vehicle {
    void start();  // Old method
    
    // Java 8: Add new method without breaking old classes
    default void stop() {
        System.out.println("Stopping...");
    }
}

// Old class doesn't need to implement stop()
class Car implements Vehicle {
    @Override
    public void start() {
        System.out.println("Car started");
    }
    // stop() already has default implementation
}
```

### Multiple default Methods (Conflict Resolution)

```java
interface A {
    default void show() {
        System.out.println("A's show");
    }
}

interface B {
    default void show() {
        System.out.println("B's show");
    }
}

class C implements A, B {
    @Override
    public void show() {
        // Must override to resolve conflict
        A.super.show();  // Call A's show
        B.super.show();  // Or B's show
    }
}
```

---

## static Methods in Interface (Java 8)

```java
interface MathOperation {
    int add(int a, int b);
    
    // static method - belongs to interface, not implementing class
    static int multiply(int a, int b) {
        return a * b;
    }
}

class Calc implements MathOperation {
    @Override
    public int add(int a, int b) {
        return a + b;
    }
}

public class Main {
    public static void main(String[] args) {
        Calc c = new Calc();
        System.out.println(c.add(5, 3));  // 8
        
        // Call static method using interface name
        System.out.println(MathOperation.multiply(5, 3));  // 15
    }
}
```

**Use:** Utility/helper methods related to interface.

---

## private Methods (Java 9+)

Used to reduce code duplication in default methods.

```java
interface Database {
    default void save() {
        connect();
        execute();
        disconnect();
    }
    
    default void load() {
        connect();
        fetch();
        disconnect();
    }
    
    // Private method - shared logic
    private void connect() {
        System.out.println("Connecting...");
    }
    
    private void disconnect() {
        System.out.println("Disconnecting...");
    }
    
    abstract void execute();
    abstract void fetch();
}
```

---

## Interface vs Abstract Class

| Feature | Interface | Abstract Class |
|---------|-----------|----------------|
| Methods | Abstract, default, static | All types |
| Variables | public static final only | Any type |
| Constructors | Not allowed | Allowed |
| Access modifiers | public only | All |
| Multiple inheritance | Supported | Not supported |
| Keyword | implements | extends |
| Speed | Slower | Faster |

---

## Complete Example

```java
// Interface
interface Printable {
    void print();
    
    default void show() {
        System.out.println("Default show");
    }
    
    static void info() {
        System.out.println("Printable interface");
    }
}

interface Showable {
    default void show() {
        System.out.println("Showable's show");
    }
}

// Class implementing multiple interfaces
class Document implements Printable, Showable {
    private String content;
    
    Document(String c) {
        content = c;
    }
    
    @Override
    public void print() {
        System.out.println("Printing: " + content);
    }
    
    @Override
    public void show() {
        Printable.super.show();  // Resolve conflict
        System.out.println("Document's show");
    }
}

public class Main {
    public static void main(String[] args) {
        Document doc = new Document("Hello World");
        
        Printable p = doc;  // Interface reference
        p.print();          // Document's print
        p.show();           // Document's show
        
        Showable s = doc;
        s.show();           // Document's show
        
        Printable.info();   // Static method
    }
}
```

---

## 5-6 Mark Questions

**Q1: Explain interfaces in Java. How have they evolved since Java 8?**

**Answer:**

**Interface** is a blueprint of a class that defines what a class must do (not how).

**Before Java 8:**
- Only abstract methods
- Variables are public static final
- Cannot have constructors
- Cannot have concrete methods

**After Java 8:**

1. **default methods:**
```java
interface A {
    default void show() {
        System.out.println("Default implementation");
    }
}
```
- Provide backward compatibility
- Classes can use default or override

2. **static methods:**
```java
interface A {
    static void info() {
        System.out.println("Utility method");
    }
}
A.info();  // Called without implementing class
```

3. **private methods (Java 9):**
```java
interface A {
    default void method1() {
        helper();  // Reduce code duplication
    }
    private void helper() { }
}
```

**Why use interfaces?**
- Achieve multiple inheritance
- Define contracts/APIs
- Loose coupling
- Polymorphism

---

**Q2: Can a class implement multiple interfaces? Explain with an example.**

**Answer:**

Yes! Java allows a class to implement multiple interfaces.

```java
interface Printable {
    void print();
}

interface Showable {
    void show();
}

class Document implements Printable, Showable {
    @Override
    public void print() {
        System.out.println("Printing...");
    }
    
    @Override
    public void show() {
        System.out.println("Showing...");
    }
}

public class Main {
    public static void main(String[] args) {
        Document doc = new Document();
        doc.print();  // Printable's method
        doc.show();   // Showable's method
        
        // Using interface references
        Printable p = doc;
        p.print();
        
        Showable s = doc;
        s.show();
    }
}
```

**Multiple Inheritance Example:**
```java
interface A { void methodA(); }
interface B { void methodB(); }
interface C extends A, B { }  // Interface can extend multiple

class D implements C {
    @Override
    public void methodA() { }
    @Override
    public void methodB() { }
}
```

**Why classes can't extend multiple but can implement multiple?**
- Multiple class inheritance causes diamond problem
- Interfaces don't have implementation, so no conflict
