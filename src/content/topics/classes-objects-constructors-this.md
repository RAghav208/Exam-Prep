---
topicId: classes-objects-constructors-this
moduleId: m2
title: Classes, Objects, Constructors, this, Garbage Collection
examWeight: 5-6 marks
keywords: [class, object, constructor, this, gc, garbage collection]
---

# Classes, Objects, Constructors, this, Garbage Collection

## Constructors

### What is Constructor?
Special method that runs when object is created. Used to initialize objects.

**Rules:**
1. Same name as class
2. No return type (not even void)
3. Called automatically when `new` is used

### Types of Constructors

**1. Default Constructor (No-arg)**
```java
class Student {
    String name;
    int age;
    
    // Default constructor
    Student() {
        name = "Unknown";
        age = 0;
    }
}

// Usage
Student s = new Student();  // Calls Student()
System.out.println(s.name); // Unknown
```

**2. Parameterized Constructor**
```java
class Student {
    String name;
    int age;
    
    Student(String n, int a) {
        name = n;
        age = a;
    }
}

// Usage
Student s = new Student("Rahul", 21);
System.out.println(s.name); // Rahul
System.out.println(s.age);  // 21
```

**3. Copy Constructor**
```java
class Student {
    String name;
    int age;
    
    Student(String n, int a) {
        name = n;
        age = a;
    }
    
    // Copy constructor
    Student(Student s) {
        this.name = s.name;
        this.age = s.age;
    }
}

// Usage
Student s1 = new Student("Rahul", 21);
Student s2 = new Student(s1);  // Copy s1 to s2
System.out.println(s2.name);   // Rahul
```

---

## The 'this' Keyword

`this` refers to current object.

### Uses:

**1. To resolve variable shadowing**
```java
class Student {
    String name;
    
    Student(String name) {  // Parameter same as instance variable
        this.name = name;    // this.name = instance variable
    }                        // name = parameter
}
```

**2. To call another constructor**
```java
class Student {
    String name;
    int age;
    
    Student() {              // Calls parameterized constructor
        this("Unknown", 0);
    }
    
    Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
```

**3. To pass current object**
```java
class A {
    void method() {
        System.out.println("Method of A");
    }
}

class B {
    void callMethod(A obj) {
        obj.method();
    }
    
    void process() {
        callMethod(this);  // Pass current object of B
    }
}
```

---

## Garbage Collection

### What is GC?
Automatic memory management in Java. Removes unreferenced objects from heap.

### How Objects Become Eligible for GC?

```java
// Object becomes eligible when:
Student s = new Student("Rahul");

// 1. Reference assigned to null
s = null;  // Object eligible for GC

// 2. Reference reassigned
s = new Student("Priya");  // Old object eligible for GC

// 3. Local variable goes out of scope
void method() {
    Student s = new Student();
}  // s becomes eligible here
```

### GC Methods

```java
// Request JVM to run GC (not guaranteed)
System.gc();

// Or
Runtime.getRuntime().gc();
```

### finalize() Method
Called before object is garbage collected (deprecated in Java 9+)

```java
class Student {
    protected void finalize() {
        System.out.println("Object being garbage collected");
    }
}
```

---

## Example: Complete Class

```java
class BankAccount {
    private String accountNumber;
    private String holderName;
    private double balance;
    
    // Default constructor
    BankAccount() {
        accountNumber = "XXXX";
        holderName = "Unknown";
        balance = 0;
    }
    
    // Parameterized constructor
    BankAccount(String acc, String name, double bal) {
        accountNumber = acc;
        holderName = name;
        balance = bal;
    }
    
    // Copy constructor
    BankAccount(BankAccount other) {
        this.accountNumber = other.accountNumber;
        this.holderName = other.holderName;
        this.balance = other.balance;
    }
    
    void display() {
        System.out.println("Acc: " + accountNumber);
        System.out.println("Name: " + holderName);
        System.out.println("Balance: " + balance);
    }
}

public class Main {
    public static void main(String[] args) {
        BankAccount b1 = new BankAccount("ACC001", "Rahul", 5000);
        BankAccount b2 = new BankAccount(b1);  // Copy
        BankAccount b3 = new BankAccount();     // Default
        
        b1.display();
        System.out.println("---");
        b2.display();
    }
}
```

---

## 5-6 Mark Questions

**Q1: Explain constructors in Java. What are the different types of constructors?**

**Answer:**

**Constructor** is a special method used to initialize objects when they are created.

**Properties:**
- Name same as class
- No return type (not even void)
- Called automatically with `new`

**Types:**

1. **Default Constructor (No-arg)**
```java
class A {
    A() {  // No parameters
        System.out.println("Default");
    }
}
```
Initializes with default values.

2. **Parameterized Constructor**
```java
class A {
    int x;
    A(int val) {  // With parameters
        x = val;
    }
}
```
Initializes with given values.

3. **Copy Constructor**
```java
class A {
    int x;
    A(A obj) {  // Copies from another object
        x = obj.x;
    }
}
```
Creates copy of another object.

---

**Q2: What is garbage collection in Java? How does an object become eligible for GC?**

**Answer:**

**Garbage Collection** is automatic memory management that removes objects no longer in use from heap memory.

**How to make object eligible for GC:**

1. **Assigning null:**
```java
Student s = new Student();
s = null;  // Object now eligible for GC
```

2. **Reassigning reference:**
```java
Student s1 = new Student();
Student s2 = new Student();
s1 = s2;  // First object now eligible
```

3. **Local variable going out of scope:**
```java
void method() {
    Student s = new Student();
}  // s eligible after method ends
```

**Advantages:**
- No manual memory deallocation
- Prevents memory leaks
- Automatic and efficient