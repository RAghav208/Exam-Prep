// Topic content data - Detailed Java exam notes in simple English

export type TopicContent = {
  topicId: string;
  moduleId: string;
  title: string;
  examWeight: string;
  keywords: string[];
  content: string;
  detailedNotes: string;
};

export const topicContents: Record<string, TopicContent> = {
  "oop-paradigm": {
    topicId: "oop-paradigm",
    moduleId: "m1",
    title: "OOP Paradigm + Structured vs OOP",
    examWeight: "5-6 marks",
    keywords: ["oop", "structured", "procedural", "paradigm", "features"],
    content: `## Definition (What It Is)

**OOP** is a programming paradigm where everything revolves around **objects**. An object = data (properties) + behavior (methods) together.

In structured/procedural programming we write **functions** that manipulate data. In OOP, data and functions (methods) are bundled together in one unit (an object).

## Key Points (Exam Points)

- **Classes** = Blueprint/template for objects
- **Objects** = Runtime instances of classes
- **4 Pillars of OOP:**
  - **Encapsulation** - Data hiding + bundling
  - **Abstraction** - Making complex reality simple
  - **Inheritance** - Reusability of code
  - **Polymorphism** - Same name, different behavior

## Elements of OOP

The basic building blocks of object-oriented programming are:

- **Class** - The blueprint/template that defines a type
- **Object** - A runtime instance created from a class
- **Data members / Attributes** - The variables that store the object's state
- **Methods / Behaviour** - The functions that define what the object can do
- **Message passing** - Calling a method on an object (objects communicate by calling each other's methods)

## Structured vs OOP Comparison (Very Common Exam Question)

| Feature | Structured Programming | OOP |
|---------|----------------------|-----|
| Focus | Functions/Procedures | Objects |
| Data | Separate from functions | Bundled with methods |
| Access | Global data common | Data encapsulation |
| Reusability | Low (copy-paste code) | High (inheritance) |
| Maintenance | Difficult | Easier |
| Security | Less secure | More secure |
| Examples | C, Pascal | Java, C++, Python |`,
    detailedNotes: `## OOP - Detailed Explanation

### Understand What OOP Is

**OOP = Object Oriented Programming**

Think of it like building a **car**:
- The car's **blueprint** = Class
- A real car = Object
- The car's features (steering, speed) = Methods
- The car's properties (color, model) = Variables

**Example Program:**

\`\`\`java
class Student {
    // Data members (properties)
    private String name;
    private int rollNo;
    private double marks;

    // Member methods (behaviors)
    public void display() {
        System.out.println("Name: " + name);
        System.out.println("Roll No: " + rollNo);
        System.out.println("Marks: " + marks);
    }

    // Getter and Setter
    public String getName() { return name; }
    public void setName(String n) { name = n; }
}
\`\`\`

### 4 Pillars of OOP - Detailed

**1. Encapsulation (Data Wrap + Hide)**

Encapsulation means keeping your data **private** and accessing it only through **public methods**. This keeps the data safe.

**Real Life Example:**
- Bank ATM - you cannot see your balance directly, it is shown on the screen
- Capsule medicine - the medicine and container are packed together

\`\`\`java
class BankAccount {
    private double balance; // Data hidden

    public void deposit(double amount) {
        if(amount > 0) {
            balance += amount;
        }
    }

    public double getBalance() {
        return balance; // Controlled access
    }
}
\`\`\`

**2. Abstraction (Hiding Complexity)**

Abstraction means **hiding** complex things and showing only **what is necessary**.

**Real Life Example:**
- Driving a car - you know how to press the pedal, but you do not know how the engine works
- ATM - you press buttons, but you do not know what processing happens inside

**3. Inheritance (Code Reuse)**

One class can **inherit** the properties of another class.

**Real Life Example:**
- A child receives the father's property
- A Tiger class is built from a Lion class

\`\`\`java
class Animal {
    void eat() {
        System.out.println("Eating");
    }
}

class Dog extends Animal { // Dog inherits from Animal
    void bark() {
        System.out.println("Barking");
    }
}
\`\`\`

**4. Polymorphism (Many Forms)**

A method has the **same name**, but **different behavior**.

**Example:**
- The "+" operator both adds numbers and joins strings
- The "play" button plays music in a music player, and video in a video player

## Elements of OOP

OOP is built from a few core building blocks. Knowing these names helps in theory questions.

- **Class** - The blueprint/template that defines a new type (e.g. \`class Student\`)
- **Object** - A real instance created from a class at runtime (e.g. \`new Student()\`)
- **Data members / Attributes** - The variables that hold the object's state (e.g. \`name\`, \`marks\`)
- **Methods / Behaviour** - The functions that define what the object can do (e.g. \`display()\`)
- **Message passing** - One object calls a method on another object. Calling \`s.display()\` is sending a "display" message to the object \`s\`.

### Frequently Asked Exam Questions

**Q: List the 4 pillars of OOP and give one example of each.**

**Answer:**
1. **Encapsulation** - Data hiding + bundling. Example: a BankAccount class where balance is private.
2. **Abstraction** - Hiding complexity. Example: an ATM machine.
3. **Inheritance** - A child class receives the properties of a parent class. Example: Dog extends Animal.
4. **Polymorphism** - Same method, different behavior. Example: the + operator with int and String.

### Trick to Remember the Structured vs OOP Table

**Structured = POP = Functions Focus**
**OOP = Objects Focus**

| Feature | Structured (C) | OOP (Java) |
|---------|---------------|-------------|
| Approach | Top-down | Bottom-up |
| Data | Stays separate | With the object |
| Reuse | Copy-paste | Inheritance |
| Security | Low | High |

**Exam Tip:** Remember - "In POP data moves freely, in OOP data is bound inside objects."`
  },

  "object-class": {
    topicId: "object-class",
    moduleId: "m1",
    title: "Object vs Class + Object Class Methods",
    examWeight: "5-6 marks",
    keywords: ["object", "class", "instance", "blueprint", "tostring", "equals", "hashcode"],
    content: `## Definition

**Class:** Blueprint or template for creating objects. It's a logical entity.

**Object:** Real-world entity with state and behavior. It's a physical entity. Runtime instance of class.

## Key Differences (Exam Table)

| Feature | Class | Object |
|---------|-------|--------|
| Definition | Blueprint/template | Instance of class |
| Existence | Logical (doesn't occupy memory) | Physical (occupies memory) |
| Declaration | \`class ClassName{}\` | \`ClassName obj = new ClassName();\` |
| Memory | No memory allocated | Memory allocated in heap |
| Creation | Once | Multiple objects possible |
| Example | Car design | Actual car |

## Methods of the Object Class

Every class extends \`Object\`, so every object inherits these methods:

- **toString()** - readable text form of the object
- **equals(Object o)** - compare two objects (override for content comparison)
- **hashCode()** - integer used by HashMap/HashSet (override together with equals)`,
    detailedNotes: `## Class and Object - Detailed Explanation

### What Is a Class?

A class is a **design/blueprint**, like an architect's plan.

**Think of it:**
- The architect made a drawing - this is the class
- An actual building made from that drawing - this is the object

**Creating a Class in Java:**

\`\`\`java
// This is a blueprint
class Car {
    // Properties (instance variables)
    String color = "Red";
    int speed = 0;
    String model = "Swift";

    // Behaviors (methods)
    void drive() {
        System.out.println(model + " driving at " + speed + " km/h");
    }

    void brake() {
        speed = 0;
        System.out.println("Braked!");
    }
}
\`\`\`

### What Is an Object?

An **actual thing** created from a class that you can use.

**Creating an Object in Java:**

\`\`\`java
public class Main {
    public static void main(String[] args) {
        // new Car() creates an object
        Car myCar = new Car();

        // Set the object's properties
        myCar.color = "Blue";
        myCar.speed = 100;
        myCar.model = "Honda City";

        // Call the object's methods
        myCar.drive();   // Output: Honda City driving at 100 km/h
        myCar.brake();   // Output: Braked!
    }
}
\`\`\`

### How Is It Stored in Memory?

When you write \`new Car()\`:

\`\`\`
Memory Layout:

Stack Memory:                Heap Memory:
┌─────────┐               ┌─────────────────────┐
│ myCar   │──────────────→│ Car Object          │
│ (ref)   │              │ color = "Blue"     │
└─────────┘               │ speed = 100        │
┌─────────┐               │ model = "Honda"   │
│ yourCar │──────────────→│ (myCar and yourCar │
└─────────┘               │  different objects)│
                          └─────────────────────┘
\`\`\`

### Important Points for the Exam

**1. You can create many objects from one class:**
\`\`\`java
Car car1 = new Car();
Car car2 = new Car();
Car car3 = new Car();
// All are separate objects
\`\`\`

**2. Each object has its own copy of the variables:**
\`\`\`java
car1.color = "Red";
car2.color = "Blue";
// car1.color = "Red", car2.color = "Blue"
\`\`\`

**3. Methods are shared (memory efficient):**
\`\`\`java
car1.drive();  // car1's drive
car2.drive();  // car2's drive
// There is only one copy of the drive method in memory
\`\`\`

### Methods of the Object Class

Every class in Java automatically extends the **Object** class. So every object inherits these useful methods. The three most important ones for exams are \`toString()\`, \`equals()\`, and \`hashCode()\`.

| Method | Default Behavior | Why You Override It |
|--------|------------------|---------------------|
| \`toString()\` | Returns ClassName@hashcode | To print a readable description of the object |
| \`equals(Object o)\` | Compares references (==) | To compare objects by their content |
| \`hashCode()\` | Returns an int based on the address | To work correctly in HashMap/HashSet |

**1. toString() - readable text for an object:**

\`\`\`java
class Student {
    String name;
    int roll;

    Student(String name, int roll) {
        this.name = name;
        this.roll = roll;
    }

    @Override
    public String toString() {
        return "Student{name=" + name + ", roll=" + roll + "}";
    }
}

public class Main {
    public static void main(String[] args) {
        Student s = new Student("Rahul", 101);
        System.out.println(s);  // Student{name=Rahul, roll=101}
        // Without overriding it would print: Student@1b6d3586
    }
}
\`\`\`

**2. equals() - compare objects by content:**

\`\`\`java
@Override
public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    Student other = (Student) o;
    return this.roll == other.roll && this.name.equals(other.name);
}
\`\`\`

**3. hashCode() - must match equals():**

\`\`\`java
@Override
public int hashCode() {
    return java.util.Objects.hash(name, roll);
}
\`\`\`

**Important rule:** If you override \`equals()\`, you **must** also override \`hashCode()\`. Two objects that are equal must return the same hash code, otherwise they break in HashMap and HashSet.

### Frequently Asked Exam Questions

**Q1: Describe the methods of the Object class (toString, equals, hashCode).**

**Answer:**
Every class extends the Object class, so it inherits these methods.
- \`toString()\` returns a readable String. Override it to print object data instead of \`ClassName@hashcode\`.
- \`equals(Object o)\` compares two objects. By default it compares references (==); override it to compare by content.
- \`hashCode()\` returns an int used by HashMap/HashSet. If you override \`equals()\`, you must also override \`hashCode()\`.

**Q2: Explain the difference between a Class and an Object.**

**Answer:**
| Feature | Class | Object |
|---------|-------|--------|
| Nature | Logical (blueprint) | Physical (real) |
| Memory | No space | Space in the heap |
| Creation | Defined once | Can be created many times |
| Example | Car design | Actual car |

**Simple Answer:** A Class = blueprint/template (like an architect's drawing), an Object = the actual thing built from the blueprint (like the building made from the drawing).`
  },

  "encapsulation-abstraction": {
    topicId: "encapsulation-abstraction",
    moduleId: "m1",
    title: "Encapsulation & Abstraction",
    examWeight: "5-6 marks",
    keywords: ["encapsulation", "abstraction", "data hiding", "access modifiers"],
    content: `## Encapsulation (Data Hiding + Bundling)

### Definition
Encapsulation = **Data Hiding** + **Bundling**
- Bundling: Data and methods together in one class
- Hiding: Restricting direct access to internal data

### Real World Example
**Capsule** medicine - all ingredients packed inside, you can't see them directly.

**Car** - Steering wheel hides internal mechanism, you just drive.

### How to Achieve in Java
1. Make data members **private**
2. Provide **public getter/setter** methods
3. Validation in setters

## Abstraction (Hiding Complexity)

### Definition
Abstraction = Showing **essential** details, hiding **complex** implementation.

### Real World Example:
- ATM: You see screen + buttons, internal banking system is hidden
- Phone call: You dial number, internal network is hidden

### Abstraction vs Encapsulation

| Feature | Abstraction | Encapsulation |
|---------|-------------|---------------|
| Focus | What an object does | How it stores data |
| Hides | Implementation details | Internal data |
| Purpose | Simplify complexity | Data protection |`,
    detailedNotes: `## Encapsulation and Abstraction - Deep Explanation

### Encapsulation (Wrap + Protect Your Data)

**The simple meaning of encapsulation:**
- Keep your data **private**
- Access it only through **public methods**
- This way no outsider can directly modify the data

**Real Life Example:**
- In a bank your PIN is private
- You can take money from the bank, but you cannot open the bank's locker directly

**How to Implement It in Java:**

\`\`\`java
class BankAccount {
    // Step 1: Make the data private
    private double balance;
    private String accountHolder;
    private String pin;

    // Step 2: Create public methods
    public BankAccount(String name, String p, double initialBalance) {
        accountHolder = name;
        pin = p;
        balance = initialBalance;
    }

    // Getter - you can read
    public double getBalance() {
        return balance;
    }

    // Setter with validation - controlled write
    public void deposit(double amount) {
        if (amount > 0 && amount <= 50000) {
            balance += amount;
            System.out.println("Deposited: Rs." + amount);
        } else {
            System.out.println("Invalid deposit amount!");
        }
    }

    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance && amount <= 20000) {
            balance -= amount;
            System.out.println("Withdrawn: Rs." + amount);
        } else {
            System.out.println("Invalid or insufficient funds!");
        }
    }
}
\`\`\`

**If You Do Not Make It Private:**
\`\`\`java
// This is wrong - anyone could make the balance negative
balance = -10000; // It would not give an ERROR, but it is wrong

// With private:
private double balance; // Now this line would give an error
\`\`\`

---

### Abstraction (Hiding Complex Things)

**The simple meaning of abstraction:**
- Keep complex things **inside**
- Show the user only a **simple interface**
- Hide how it actually works

**Real Life Example:**

1. **Car Steering:**
   - You turn the steering, the car turns
   - You do not know how the gearbox works

2. **ATM Machine:**
   - You press buttons, you get money
   - You do not know how it connects to the database

3. **TV Remote:**
   - You press the buttons on the remote
   - You do not know how the infrared signals are sent

**How to Implement It in Java:**

\`\`\`java
// Abstract class - an incomplete plan
abstract class Vehicle {
    String color;
    int speed;

    // Concrete method - has an implementation
    void fuelType() {
        System.out.println("Uses fuel");
    }

    // Abstract method - only declaration, no implementation
    abstract void start();
    abstract void stop();
}

// Concrete class - provides the implementation
class Car extends Vehicle {
    @Override
    void start() {
        System.out.println("Car started with key/button");
        // The complex internal process is hidden
    }

    @Override
    void stop() {
        System.out.println("Car stopped");
    }
}
\`\`\`

---

### Encapsulation vs Abstraction - Simple Table

| Point | Encapsulation | Abstraction |
|-------|---------------|-------------|
| Main Focus | Protect the data | Hide the complexity |
| How | private variables | abstract classes |
| Real Example | Bank balance is private | The ATM interface is simple |
| Purpose | Security | Simplicity |
| Focus On | HOW (how it is stored) | WHAT (how it works) |

---

### Frequently Asked Exam Questions

**Q1: Explain the difference between Encapsulation and Abstraction with examples.**

**Answer:**

**Encapsulation:**
- Keep data private and access it through public methods
- Example: a BankAccount class where balance is private, accessed only through deposit/withdraw methods
- **Purpose:** Data security

**Abstraction:**
- Hide the complex implementation, show only what is necessary
- Example: an ATM - you can take money, but you do not know the internal process
- **Purpose:** Reducing complexity

**Key Difference:**
- Encapsulation = "Protect where the data is stored"
- Abstraction = "Hide how it works"

**Q2: How do you achieve encapsulation in Java?**

**Answer:**
\`\`\`java
class Demo {
    // 1. Data members private
    private int data;

    // 2. Public getter
    public int getData() {
        return data;
    }

    // 3. Public setter with validation
    public void setData(int value) {
        if (value >= 0) {
            data = value;
        }
    }
}
\`\`\``
  },

  "inheritance-polymorphism": {
    topicId: "inheritance-polymorphism",
    moduleId: "m1",
    title: "Inheritance & Polymorphism",
    examWeight: "5-6 marks",
    keywords: ["inheritance", "polymorphism", "override", "overload"],
    content: `## Inheritance (IS-A Relationship)

### Definition
Inheritance allows a class to **acquire properties** (fields + methods) of another class. Promotes **code reusability**.

### Types of Inheritance in Java

| Type | Description | Java Supported? |
|------|-------------|------------------|
| Single | A extends B | Yes |
| Multilevel | A extends B extends C | Yes |
| Hierarchical | A extends B, A extends C | Yes |
| Multiple | A extends B, C | No (use interface) |
| Hybrid | Mix of above | No (use interface) |

## Polymorphism (Many Forms)

### Types:

1. **Compile-time (Static) Polymorphism** - Method Overloading
2. **Runtime (Dynamic) Polymorphism** - Method Overriding

### Method Overloading (Compile-time)

**Same name, different parameters**

### Method Overriding (Runtime)

**Same signature in parent and child class**

## Overloading vs Overriding (Very Important!)

| Feature | Overloading | Overriding |
|---------|-------------|------------|
| Method name | Same | Same |
| Parameters | Different | Same |
| Classes | Same class | Different classes (parent-child) |
| Binding | Compile-time (static) | Runtime (dynamic) |`,
    detailedNotes: `## Inheritance and Polymorphism - Deep Explanation

### Inheritance (Parent-Child Relationship)

**The meaning of inheritance:**
- One class **can take the properties** of another class
- Code gets **reused**
- It is an **IS-A** relationship

**Real Life Example:**
- A child receives the father's property
- The Samsung Galaxy was built from the Samsung phone
- The Dog class was built from the Animal class

**Inheritance in Java:**

\`\`\`java
// Parent/Base/Super Class
class Animal {
    String name = "Animal";
    int age = 5;

    void eat() {
        System.out.println(name + " is eating");
    }

    void sleep() {
        System.out.println(name + " is sleeping");
    }
}

// Child/Derived/Sub Class
class Dog extends Animal {
    String breed = "Labrador";

    void bark() {
        System.out.println(name + " is barking");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.name = "Tommy";  // Parent's property
        d.eat();            // Parent's method - inherited
        d.sleep();          // Parent's method - inherited
        d.bark();           // Its own method
        System.out.println("Breed: " + d.breed);  // Its own property
    }
}
\`\`\`

### Types of Inheritance in Java

**1. Single Inheritance:**
\`\`\`
A → B (B inherits from A)
Animal → Dog
\`\`\`

**2. Multilevel Inheritance:**
\`\`\`
A → B → C (C inherits from B, B inherits from A)
Animal → Mammal → Dog
\`\`\`

**3. Hierarchical Inheritance:**
\`\`\`
A → B
A → C
(Dog built from Animal, Cat built from Animal)
\`\`\`

**4. Multiple Inheritance (NOT Supported):**
\`\`\`
A → B
C → B (One class inheriting from two classes)
Java does not support this - because of the Diamond Problem
\`\`\`

**Diamond Problem Example:**
\`\`\`
    A (has method show())
   / \\
  B     C (both inherit from A)
   \\ /
    D (which show() to call? - AMBIGUITY!)
\`\`\`

---

### Polymorphism (One Name, Many Jobs)

**The meaning of polymorphism:**
- A method has the **same name**
- But **different behavior** based on context

**Real Life Example:**
- The "+" operator:
  - 5 + 3 = 8 (addition)
  - "Hello" + " World" = "Hello World" (concatenation)
- The "Play" button:
  - In a music player = plays music
  - In a video player = plays video

---

### Method Overloading (Compile-time Polymorphism)

**Same method name, different parameters**

\`\`\`java
class Calculator {
    // int version
    int add(int a, int b) {
        System.out.println("int add called");
        return a + b;
    }

    // double version - different parameter type
    double add(double a, double b) {
        System.out.println("double add called");
        return a + b;
    }

    // 3 parameters - different number of parameters
    int add(int a, int b, int c) {
        System.out.println("3 param add called");
        return a + b + c;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator();

        calc.add(5, 10);              // int version
        calc.add(3.5, 2.5);         // double version
        calc.add(1, 2, 3);          // 3 param version

        // The compiler decides which version to call
    }
}
\`\`\`

---

### Method Overriding (Runtime Polymorphism)

**Same method signature, different implementation**

\`\`\`java
class Bank {
    double getRate() {
        return 5.0;  // Base rate
    }

    void display() {
        System.out.println("Bank's rate: " + getRate());
    }
}

class SBI extends Bank {
    @Override
    double getRate() {
        return 6.5;  // SBI's rate is different
    }
}

class HDFC extends Bank {
    @Override
    double getRate() {
        return 7.0;  // HDFC's rate is different
    }
}

public class Main {
    public static void main(String[] args) {
        Bank b;

        // Which method is called is decided at runtime
        b = new SBI();
        b.display();  // Output: Bank's rate: 6.5

        b = new HDFC();
        b.display();  // Output: Bank's rate: 7.0

        // This is Polymorphism!
    }
}
\`\`\`

---

### Overloading vs Overriding - Important Table

| Feature | Overloading | Overriding |
|---------|-------------|------------|
| Method Name | Same | Same |
| Parameters | **Different** | **Same** |
| Classes | Same class | Different classes |
| Binding | Compile-time | Runtime |
| Access Modifier | Can be different | Cannot be more restrictive |
| Return Type | Can be different | Same or Covariant |
| Purpose | Same operation, different data | Modify inherited behavior |

---

### Frequently Asked Exam Questions

**Q1: What is inheritance? List its types and state which one is not supported in Java.**

**Answer:**
Inheritance = One class acquires the properties of another class.

**Supported Types:**
1. Single: A → B
2. Multilevel: A → B → C
3. Hierarchical: A → B, A → C

**Not Supported:**
- Multiple: A → B, C → B (Diamond Problem)
- Hybrid: Mix of the above

**Q2: What is polymorphism? Explain compile-time and runtime polymorphism.**

**Answer:**
Polymorphism = "Many Forms" - Same name, different behavior.

**Compile-time (Overloading):**
- In the same class, same name, different parameters
- The compiler decides
\`\`\`java
add(int, int)
add(double, double)
\`\`\`

**Runtime (Overriding):**
- In parent-child classes, same signature
- The JVM/runtime decides
\`\`\`java
Parent p = new Child();
p.method(); // The Child's method is called
\`\`\``
  },

  "java-evolution-jvm": {
    topicId: "java-evolution-jvm",
    moduleId: "m2",
    title: "Java Evolution, Bytecode & JVM Architecture",
    examWeight: "3-4 marks",
    keywords: ["jvm", "bytecode", "jre", "jdk", "architecture"],
    content: `## Java Evolution (History)

| Year | Version | Key Features |
|------|---------|--------------|
| 1996 | Java 1.0 | First release |
| 2004 | Java 5.0 | Generics, Annotations, AutoBoxing |
| 2014 | Java 8 | Lambda, Streams, Optional |
| 2017 | Java 9 | Modules, JShell |

## Features of Java (Buzzwords)

Java is **Simple, Object-Oriented, Platform-Independent (Write Once, Run Anywhere), Secure, Robust, Multithreaded, Architecture-Neutral/Portable, Distributed, Dynamic, High-Performance (JIT), and Interpreted**. (Explained in detail in the notes below.)

## Java Architecture (Compilation Flow)

Source Code (.java) → [javac compiler] → Bytecode (.class) → [JVM] → Machine Code

## JVM Architecture

1. **Class Loader** - Loads .class files
2. **Method Area** - Stores class metadata, static variables
3. **Heap** - Stores all objects
4. **Stack** - Stores local variables, method calls
5. **PC Register** - Points to current instruction
6. **Execution Engine** - Interpreter, JIT Compiler, GC

## JDK vs JRE vs JVM

| Component | Full Form | Purpose |
|-----------|-----------|---------|
| JDK | Java Development Kit | Development (compiler, tools) |
| JRE | Java Runtime Environment | Running apps (JVM + libraries) |
| JVM | Java Virtual Machine | Executes bytecode |`,
    detailedNotes: `## Features of Java

These are the famous Java "buzzwords". Each one explains why Java became so popular.

- **Simple** - Easy syntax based on C/C++ but with confusing parts (pointers, manual memory) removed.
- **Object-Oriented** - Everything is built around classes and objects.
- **Platform-Independent (Write Once, Run Anywhere)** - The same bytecode runs on any OS that has a JVM.
- **Secure** - No direct pointers, plus a bytecode verifier and security manager protect the system.
- **Robust** - Strong type checking, automatic garbage collection, and exception handling prevent crashes.
- **Multithreaded** - A program can run many tasks (threads) at the same time.
- **Architecture-Neutral / Portable** - Fixed data type sizes mean code behaves the same on every machine.
- **Distributed** - Built-in networking support (sockets, RMI) makes it easy to build network applications.
- **Dynamic** - Classes can be loaded at runtime as needed.
- **High-Performance (JIT)** - The Just-In-Time compiler turns frequently used bytecode into fast native code.
- **Interpreted** - The JVM interprets bytecode, which makes Java portable and easy to debug.

---

## JVM Architecture - Deep Explanation

### How Java Works

**Step by Step Flow:**

\`\`\`
1. Write:   Hello.java (source code)
              ↓
2. Compile:  javac Hello.java
              ↓
3. Bytecode: Hello.class (platform-independent code)
              ↓
4. Execute: java Hello
              ↓
5. JVM:      Converts bytecode to machine code
\`\`\`

### Why Is Java Platform Independent?

**Normal Programming (C/C++):**
\`\`\`
C Code → Compiler → Machine Code (Windows exe)
                              ↓
C Code → Compiler → Machine Code (Linux exe)
Different outputs for different OS
\`\`\`

**Java Programming:**
\`\`\`
Java Code → javac → Bytecode (.class)
                           ↓
              ┌─────────┬─────────┬─────────┐
              │Windows  │ Linux   │ Mac     │
              │JVM     │ JVM     │ JVM     │
              │Machine  │Machine  │Machine  │
              └─────────┴─────────┴─────────┘
Same bytecode runs everywhere!
\`\`\`

---

### JVM Architecture - Components

**1. Class Loader Subsystem:**

\`\`\`
┌─────────────────────────────────┐
│       Class Loader              │
│  ┌───────────────────────────┐   │
│  │ Bootstrap ClassLoader   │   │ ← Loads core Java classes
│  │ Extension ClassLoader   │   │ ← Loads extension classes
│  │ Application ClassLoader│   │ ← Loads your classes
│  └───────────────────────────┘   │
└─────────────────────────────────┘
\`\`\`

**2. Memory Areas:**

\`\`\`
┌─────────────────────────────────────┐
│            JVM Memory               │
│  ┌─────────────┐  ┌─────────────┐  │
│  │Method Area │  │    Heap     │  │
│  │(static)    │  │ (objects)  │  │
│  └─────────────┘  └─────────────┘  │
│  ┌─────────────┐  ┌─────────────┐  │
│  │Java Stack  │  │Native Method│  │
│  │(local vars)│  │   Stack     │  │
│  └─────────────┘  └─────────────┘  │
│  ┌─────────────┐                     │
│  │PC Register │  ← Current instruction│
│  └─────────────┘                     │
└─────────────────────────────────────┘
\`\`\`

**What is stored in the Method Area:**
- Class name
- Parent class name
- Methods and constructors
- Static variables

**What is stored in the Heap:**
- All objects
- Arrays
- Instance variables

**What is stored in the Stack:**
- Method calls
- Local variables
- Intermediate results

**3. Execution Engine:**

\`\`\`
┌─────────────────────────┐
│   Execution Engine      │
│  ┌─────────────────┐   │
│  │   Interpreter   │   │ ← Bytecode line by line
│  └─────────────────┘   │
│  ┌─────────────────┐   │
│  │  JIT Compiler  │   │ ← Frequently used bytecode → Native code
│  └─────────────────┘   │
│  ┌─────────────────┐   │
│  │Garbage Collector│   │ ← Removes unused objects
│  └─────────────────┘   │
└─────────────────────────┘
\`\`\`

---

### JDK vs JRE vs JVM

| Component | Full Form | Contains |
|-----------|-----------|---------|
| **JDK** | Java Development Kit | JRE + javac + debugger + tools |
| **JRE** | Java Runtime Environment | JVM + Libraries |
| **JVM** | Java Virtual Machine | Interpreter + JIT + GC |

**Simple Analogy:**
- JVM = Engine (runs the car)
- JRE = Car with engine (ready to run)
- JDK = Full car with tools (design + build + drive)

---

### Frequently Asked Exam Questions

**Q1: Explain the Java compilation and execution process.**

**Answer:**
1. **Write:** The developer writes the Hello.java file
2. **Compile:** \`javac Hello.java\` converts it into bytecode
3. **Load:** The ClassLoader loads the bytecode into memory
4. **Verify:** The BytecodeVerifier does a security check
5. **Execute:** The JVM Interpreter converts the bytecode into machine code

**Q2: Why is Java platform independent?**

**Answer:**
The Java compiler generates bytecode (not machine code). The bytecode runs on the JVM, and each OS has its own JVM. That is why "Write Once, Run Anywhere" - the same bytecode can run on every platform.`
  },

  "java-program-structure": {
    topicId: "java-program-structure",
    moduleId: "m2",
    title: "Structure of a Java Program",
    examWeight: "2-3 marks",
    keywords: ["class", "main", "public static void main", "syntax"],
    content: `## Basic Structure

\`\`\`java
// 1. Package declaration (optional)
package myapp;

// 2. Import statements (optional)
import java.util.Scanner;

// 3. Class declaration
public class HelloWorld {

    // 4. Main method - Entry point
    public static void main(String[] args) {
        // 5. Statements
        System.out.println("Hello World!");
    }
}
\`\`\`

## Components Explained

### Main Method (Entry Point)
| Part | Meaning |
|------|---------|
| public | Accessible from everywhere |
| static | No object needed to call |
| void | Returns nothing |
| main | Method name (reserved) |
| String[] args | Command line arguments |`,
    detailedNotes: `## Java Program Structure - Deep Explanation

### Complete Program Structure

\`\`\`java
// 1. Package Declaration (Optional)
// Which package to put this file in
package com.college.exam;

// 2. Import Statements (Optional)
// To use other classes
import java.util.Scanner;        // Single class
import java.io.*;                // Wildcard - all classes

// 3. Class Declaration
public class Student {
    // Data members (variables)
    String name;
    int rollNo;
    double marks;

    // Member methods
    void display() {
        System.out.println("Name: " + name);
        System.out.println("Roll: " + rollNo);
    }

    // 4. Main Method - The program starts here
    public static void main(String[] args) {
        // Write statements here
        System.out.println("Hello World!");

        // Create and use the object
        Student s = new Student();
        s.name = "Rahul";
        s.display();
    }
}
\`\`\`

---

### Main Method - Understand Each Part

\`\`\`java
public static void main(String[] args)
\`\`\`

| Keyword | What It Does | Why |
|---------|---------------|------|
| **public** | Can be called from anywhere | The JVM needs access from outside |
| **static** | No need to create an object | So the JVM can call it directly |
| **void** | Returns nothing | main does not return anything |
| **main** | The method's name | The JVM recognizes this name |
| **String[] args** | Command line arguments | To take input from the user |

---

### Compilation and Execution

\`\`\`bash
# Step 1: Write it
nano Student.java

# Step 2: Compile it
javac Student.java
# This creates Student.class

# Step 3: Run it
java Student
\`\`\`

---

### Command Line Arguments Example

\`\`\`java
public class ArgsDemo {
    public static void main(String[] args) {
        // The args array holds the command line arguments
        System.out.println("Total Arguments: " + args.length);

        for (int i = 0; i < args.length; i++) {
            System.out.println("Arg " + i + ": " + args[i]);
        }
    }
}
\`\`\`

\`\`\`bash
javac ArgsDemo.java
java ArgsDemo Hello World 2024
\`\`\`

**Output:**
\`\`\`
Total Arguments: 3
Arg 0: Hello
Arg 1: World
Arg 2: 2024
\`\`\`

---

### Taking Input with Scanner

\`\`\`java
import java.util.Scanner;

public class InputDemo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter name: ");
        String name = sc.nextLine();

        System.out.print("Enter age: ");
        int age = sc.nextInt();

        System.out.print("Enter marks: ");
        double marks = sc.nextDouble();

        System.out.println("\\nStudent Details:");
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Marks: " + marks);

        sc.close();
    }
}
\`\`\`

---

### Frequently Asked Exam Questions

**Q: Why do we keep the main method as public static void?**

**Answer:**
- **public:** The JVM needs access from anywhere, so it is public
- **static:** So the JVM can call it without creating an object, so it is static
- **void:** main does not return anything to the operating system, so it is void`
  },

  "datatypes-casting-arrays": {
    topicId: "datatypes-casting-arrays",
    moduleId: "m2",
    title: "Data Types, Type Casting & Arrays",
    examWeight: "5-6 marks",
    keywords: ["datatypes", "primitive", "casting", "widening", "narrowing", "arrays"],
    content: `## Primitive Data Types (8 types)

| Type | Size | Default | Range |
|------|------|---------|-------|
| byte | 1 byte | 0 | -128 to 127 |
| short | 2 bytes | 0 | -32768 to 32767 |
| int | 4 bytes | 0 | -2B to 2B |
| long | 8 bytes | 0L | Large |
| float | 4 bytes | 0.0f | Decimal |
| double | 8 bytes | 0.0d | Large decimal |
| char | 2 bytes | '\\u0000' | 0 to 65535 (Unicode) |
| boolean | 1 bit | false | true/false |

## Type Casting

### Widening (Implicit) - Automatic
Smaller to larger type - no data loss

### Narrowing (Explicit) - Manual
Larger to smaller type - may lose data

## Arrays

\`\`\`java
int[] arr = {10, 20, 30, 40, 50};
arr[0] = 10;  // First element
arr.length;     // Size = 5
\`\`\``,
    detailedNotes: `## Data Types and Arrays - Deep Explanation

### Primitive Data Types

Java has 8 primitive data types:

| Type | Size | What It Stores | Example |
|------|------|---------------------|---------|
| **byte** | 1 byte | Small integers (-128 to 127) | byte b = 100; |
| **short** | 2 bytes | Medium integers | short s = 1000; |
| **int** | 4 bytes | Integers (most common) | int i = 50000; |
| **long** | 8 bytes | Large integers | long l = 9999999L; |
| **float** | 4 bytes | Decimals (less precise) | float f = 3.14f; |
| **double** | 8 bytes | Decimals (more precise) | double d = 3.14159; |
| **char** | 2 bytes | Single character | char c = 'A'; |
| **boolean** | 1 bit | true or false | boolean b = true; |

---

### Type Casting (Conversion)

#### 1. Widening (Automatic - Small to Large)

Converts from a smaller type to a larger type. **No data loss.**

\`\`\`
byte → short → int → long → float → double
\`\`\`

\`\`\`java
byte b = 50;
int i = b;    // Automatic - byte to int
long l = i;   // Automatic - int to long
double d = l; // Automatic - long to double

// Example
byte smallNum = 100;
int bigNum = smallNum;  // No problem
System.out.println(bigNum);  // 100
\`\`\`

#### 2. Narrowing (Manual - Large to Small)

Converts from a larger type to a smaller type. **Data loss can happen.**

\`\`\`
double → float → long → int → short → byte
\`\`\`

\`\`\`java
double d = 99.9;
int i = (int) d;   // A manual cast is required

System.out.println(i);  // 99 (decimal part lost!)

// Another example
int bigNum = 300;
byte smallNum = (byte) bigNum;
System.out.println(smallNum);  // Overflow! (300 % 256 = 44)
\`\`\`

---

### Arrays - Store More Than One Value

#### What Is an Array?
Array = A way to store **multiple values** of the same type together.

#### Creating an Array (3 Ways)

\`\`\`java
// Way 1: Define the size
int[] marks = new int[5];
marks[0] = 90;
marks[1] = 85;
marks[2] = 78;

// Way 2: Declare with values
int[] nums = {10, 20, 30, 40, 50};

// Way 3: new with values
String[] names = new String[]{"Rahul", "Priya", "Amit"};
\`\`\`

#### Accessing an Array

\`\`\`java
int[] arr = {100, 200, 300, 400, 500};

System.out.println(arr[0]);     // 100 (first)
System.out.println(arr[4]);      // 500 (last)
System.out.println(arr.length);  // 5 (size)

arr[0] = 999;  // You can modify it
System.out.println(arr[0]);  // 999
\`\`\`

#### Ways to Traverse an Array

\`\`\`java
int[] arr = {10, 20, 30, 40, 50};

// Way 1: Normal for loop
for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}

// Way 2: Enhanced for loop (for-each)
for (int num : arr) {
    System.out.println(num);
}
\`\`\`

#### 2D Array (Table/Jagged)

\`\`\`java
// Create a 3x3 Matrix
int[][] matrix = new int[3][3];

// With values
int[][] grid = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Access
System.out.println(grid[0][0]);  // 1
System.out.println(grid[2][2]);  // 9
\`\`\`

---

### Frequently Asked Exam Questions

**Q1: Explain the difference between Widening and Narrowing.**

**Answer:**

| Point | Widening | Narrowing |
|-------|----------|-----------|
| Direction | Small to Large | Large to Small |
| Data Loss | Does not happen | Can happen |
| Cast Operator | Not required | Required |
| Example | byte → int | double → int |

**Q2: What is an array? Explain how to create and access an array.**

**Answer:**
Array = A data structure that stores multiple values of the same type.

\`\`\`java
// Create
int[] arr = new int[5];  // An array of size 5

// Initialize
int[] nums = {10, 20, 30};  // Direct values

// Access
arr[0] = 100;  // First element
System.out.println(arr[0]);  // 100
System.out.println(nums.length);  // 3
\`\`\``
  },

  "classes-objects-constructors-this": {
    topicId: "classes-objects-constructors-this",
    moduleId: "m2",
    title: "Classes, Objects, Constructors, this",
    examWeight: "5-6 marks",
    keywords: ["class", "object", "constructor", "this", "gc", "garbage collection"],
    content: `## Constructors

### What is Constructor?
Special method that runs when object is created. Used to initialize objects.

**Rules:**
1. Same name as class
2. No return type (not even void)
3. Called automatically when \`new\` is used

### Types of Constructors

**1. Default Constructor** - No parameters

**2. Parameterized Constructor** - With parameters

**3. Copy Constructor** - Copies from another object

## this Keyword

\`this\` refers to current object.

**Uses:**
1. Resolve variable shadowing
2. Call another constructor
3. Pass current object

## Garbage Collection

Automatic memory management. Removes unreferenced objects from heap.

Objects become eligible for GC when:
- Assigned to null
- Reassigned to new object
- Local variable goes out of scope

## Assigning Object Reference Variables

Writing \`Box b2 = b1;\` does **not** create a new object. Both \`b1\` and \`b2\` point to the **same** object, so a change through one is visible through the other. Primitive assignment copies the value instead.

## Stack Application (A Stack Class)

A classic example: a \`Stack\` class (using \`int[] stck\` and \`int tos\`) shows how a class bundles data and methods together. A stack is **LIFO** (Last In, First Out).`,
    detailedNotes: `## Constructors and the this Keyword - Deep Explanation

### What Is a Constructor?

A constructor is a **special method** that is called when an object is created with \`new\`.

**Characteristics:**
1. The constructor's name is the same as the class name
2. It has **no** return type (not even void)
3. It is called automatically as soon as you write \`new\`

\`\`\`java
class Student {
    String name;
    int rollNo;

    // Constructor - same name as class
    Student() {
        System.out.println("Constructor called!");
        name = "Unknown";
        rollNo = 0;
    }
}

public class Main {
    public static void main(String[] args) {
        Student s = new Student();
        // Output: Constructor called!
    }
}
\`\`\`

---

### Types of Constructors

#### 1. Default Constructor (No-arg Constructor)

It never has any parameters.

\`\`\`java
class Student {
    String name;
    int marks;

    // Default constructor
    Student() {
        name = "NA";
        marks = 0;
    }
}
\`\`\`

#### 2. Parameterized Constructor

It has parameters to initialize the object.

\`\`\`java
class Student {
    String name;
    int marks;

    // Parameterized constructor
    Student(String n, int m) {
        name = n;
        marks = m;
    }

    void display() {
        System.out.println(name + ": " + marks);
    }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student("Rahul", 85);  // Parameterized
        Student s2 = new Student("Priya", 92);
        s1.display();  // Rahul: 85
        s2.display();  // Priya: 92
    }
}
\`\`\`

#### 3. Copy Constructor

It creates one object from another object.

\`\`\`java
class Student {
    String name;
    int marks;

    Student(String n, int m) {
        name = n;
        marks = m;
    }

    // Copy constructor
    Student(Student other) {
        name = other.name;
        marks = other.marks;
    }
}
\`\`\`

---

### this Keyword - Refer to the Current Object

#### The Problem Without this:

\`\`\`java
class Student {
    String name;  // instance variable
    int marks;

    Student(String name, int marks) {  // parameters with the same name
        name = name;    // What is being assigned here? Confusion!
        marks = marks;
    }
}
\`\`\`

#### The Solution With this:

\`\`\`java
class Student {
    String name;  // instance variable
    int marks;

    Student(String name, int marks) {  // parameters
        this.name = name;    // this.name = instance variable
        this.marks = marks;  // this.marks = instance variable
    }
}
\`\`\`

#### Uses of this:

**1. Resolving Variable Shadowing:**
\`\`\`java
this.name = name;  // this.name = instance, name = parameter
\`\`\`

**2. Calling One Constructor from Another:**
\`\`\`java
class Student {
    String name;
    int marks;

    Student() {
        this("Unknown", 0);  // Calls the other constructor
    }

    Student(String n, int m) {
        name = n;
        marks = m;
    }
}
\`\`\`

**3. Passing the Current Object:**
\`\`\`java
void display(Student other) {
    System.out.println(other.name);
}
\`\`\`

---

### Garbage Collection (Automatic Memory Cleanup)

#### What Is It?
Java automatically removes unreferenced objects from the heap memory.

#### When Does an Object Become Eligible for Garbage Collection?

**1. Assigning null:**
\`\`\`java
Student s = new Student();
s = null;  // Now this object is eligible for GC
\`\`\`

**2. Reassigning:**
\`\`\`java
Student s1 = new Student();
Student s2 = new Student();
s1 = s2;  // s1's first object is eligible for GC
\`\`\`

**3. Local Variable Goes Out of Scope:**
\`\`\`java
void method() {
    Student s = new Student();
}  // s is now out of scope here, eligible for GC
\`\`\`

#### To Request GC:
\`\`\`java
System.gc();  // Requests the JVM to run GC
// It is not guaranteed, but the request is sent
\`\`\`

---

## Assigning Object Reference Variables

When you assign one object reference to another, Java does **not** copy the object. It only copies the **reference** (the address). Both variables then point to the **same** object in the heap.

\`\`\`java
class Box {
    int width;
}

public class Main {
    public static void main(String[] args) {
        Box b1 = new Box();
        b1.width = 10;

        Box b2 = b1;   // b2 does NOT get a new object - it shares b1's object

        b2.width = 99;                       // change through b2
        System.out.println(b1.width);        // 99 - visible through b1 too!

        b2 = null;                           // only detaches b2
        System.out.println(b1.width);        // 99 - b1 still points to the object
    }
}
\`\`\`

**Contrast with primitives** - a primitive assignment copies the actual value, so the two variables are independent:

\`\`\`java
int x = 10;
int y = x;   // y gets a COPY of the value
y = 99;
System.out.println(x);  // 10 - x is unchanged
\`\`\`

**Key point:** Object reference assignment shares the same object; primitive assignment copies the value.

---

## Stack Application (A Stack Class)

A **stack** works on the **LIFO** rule - **Last In, First Out** (like a pile of plates: the last plate placed on top is the first one removed). This classic example shows how a class bundles **data** (the array and the top pointer) and **methods** (\`push\` and \`pop\`) into one unit.

\`\`\`java
// A Stack class
class Stack {
    int[] stck = new int[10];  // array to hold the stack
    int tos;                   // top of stack

    // Constructor - initialize top of stack
    Stack() {
        tos = -1;  // -1 means the stack is empty
    }

    // Push an item onto the stack
    void push(int item) {
        if (tos == stck.length - 1) {
            System.out.println("Stack is full.");
        } else {
            stck[++tos] = item;
        }
    }

    // Pop an item from the stack
    int pop() {
        if (tos < 0) {
            System.out.println("Stack underflow.");
            return 0;
        } else {
            return stck[tos--];
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Stack s = new Stack();

        // Push values
        for (int i = 0; i < 5; i++) {
            s.push(i);
        }

        // Pop values - they come out in reverse order (LIFO)
        System.out.print("Popped: ");
        for (int i = 0; i < 5; i++) {
            System.out.print(s.pop() + " ");
        }
        // Output: Popped: 4 3 2 1 0
    }
}
\`\`\`

---

### Frequently Asked Exam Questions

**Q1: What is a constructor? List the types with examples.**

**Answer:**

Constructor = A special method to initialize an object.

**Types:**
1. **Default:** No parameters
\`\`\`java
Student() { name = "Unknown"; }
\`\`\`

2. **Parameterized:** With parameters
\`\`\`java
Student(String n, int m) { name = n; marks = m; }
\`\`\`

3. **Copy:** Copies from another object
\`\`\`java
Student(Student other) { name = other.name; }
\`\`\`

**Q2: What does the this keyword do?**

**Answer:**
- Refers to the current object
- Distinguishes between an instance variable and a parameter when they have the same name
- Can call one constructor from another constructor`
  },

  "methods-overloading-access-static-final-cli": {
    topicId: "methods-overloading-access-static-final-cli",
    moduleId: "m2",
    title: "Methods: Overloading, Objects as Parameters, Access Control, static/final, CLI",
    examWeight: "5-6 marks",
    keywords: ["overloading", "parameters", "pass by value", "access modifiers", "static", "final", "command line"],
    content: `## Method Overloading

**Same name, different parameters** within the same class.

## Access Modifiers

| Modifier | Same Class | Same Package | Subclass | Everywhere |
|----------|------------|--------------|----------|------------|
| private | Yes | No | No | No |
| default | Yes | Yes | No | No |
| protected | Yes | Yes | Yes | No |
| public | Yes | Yes | Yes | Yes |

## static Keyword

- Shared among all objects of class
- No object needed to access

## final Keyword

- final variable = Cannot modify (constant)
- final method = Cannot override
- final class = Cannot extend

## Using Objects as Parameters

A method can take an **object** as a parameter, not just primitives.

\`\`\`java
void compare(Box b) { ... }   // Box object passed in
\`\`\`

## Argument Passing (Java is Pass-by-Value)

Java is **always pass-by-value**:
- **Primitives:** the value is copied. Changes inside the method do not affect the caller.
- **Objects:** the reference (address) is copied. Both refer to the same object, so field changes are visible to the caller, but reassigning the parameter does not change the caller's variable.

## Returning Objects

A method can also **return an object**. A new object created inside is returned to the caller.

## Command Line Arguments

\`\`\`java
public static void main(String[] args)
args[0], args[1], etc.
\`\`\``,
    detailedNotes: `## Method Overloading, Access Modifiers, static/final - Deep Explanation

### Method Overloading (Compile-time Polymorphism)

**Same method name, different parameters.**

\`\`\`java
class Calculator {
    // 1. Add two integers
    int add(int a, int b) {
        System.out.println("int version");
        return a + b;
    }

    // 2. Add two doubles - DIFFERENT parameter type
    double add(double a, double b) {
        System.out.println("double version");
        return a + b;
    }

    // 3. Add three integers - DIFFERENT number of parameters
    int add(int a, int b, int c) {
        System.out.println("3 param version");
        return a + b + c;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator c = new Calculator();

        c.add(5, 10);              // calls int version
        c.add(3.5, 2.5);         // calls double version
        c.add(1, 2, 3);          // calls 3 param version
    }
}
\`\`\`

**What Can Be Overloaded?**
- Parameter count
- Parameter type
- Parameter order

**What Cannot Be Overloaded?**
- Changing only the return type
\`\`\`java
int getValue() { return 5; }
double getValue() { return 5.0; }  // ERROR! Only return type different
\`\`\`

---

### Using Objects as Parameters

A method can accept an **object** as an argument, just like a primitive. This lets you pass whole records (state + behavior) into a method.

\`\`\`java
class Box {
    int width, height;

    Box(int w, int h) {
        width = w;
        height = h;
    }

    // Object passed as a parameter
    boolean sameSize(Box other) {
        return this.width == other.width && this.height == other.height;
    }
}

public class Main {
    public static void main(String[] args) {
        Box b1 = new Box(10, 20);
        Box b2 = new Box(10, 20);
        System.out.println(b1.sameSize(b2));  // true
    }
}
\`\`\`

---

### Argument Passing (Java Is Always Pass-by-Value)

Java passes **a copy of the value** of the argument. There are two cases:

**1. Primitives - the value is copied:**

\`\`\`java
class Test {
    void change(int x) {
        x = 100;  // Only the local copy changes
    }
}

public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        int a = 5;
        t.change(a);
        System.out.println(a);  // 5 (unchanged)
    }
}
\`\`\`

**2. Object references - the reference (address) is copied:**

\`\`\`java
class Box {
    int width;
}

class Test {
    void modify(Box b) {
        b.width = 999;      // Changes the SAME object - visible to caller
    }

    void reassign(Box b) {
        b = new Box();      // Only the local copy points elsewhere
        b.width = 50;       // Does NOT affect the caller's object
    }
}

public class Main {
    public static void main(String[] args) {
        Test t = new Test();
        Box box = new Box();
        box.width = 10;

        t.modify(box);
        System.out.println(box.width);   // 999 (object was changed)

        t.reassign(box);
        System.out.println(box.width);   // 999 (reassign did not affect caller)
    }
}
\`\`\`

**Key point:** Java is **not** pass-by-reference. With objects, the *reference value* is copied. You can change the object's fields, but you cannot make the caller's variable point to a new object.

---

### Returning Objects

A method can return an object. A new object created inside the method survives because the returned reference keeps it alive.

\`\`\`java
class Box {
    int size;

    Box(int s) { size = s; }

    // Returns a new Box object
    Box doubleSize() {
        return new Box(this.size * 2);
    }
}

public class Main {
    public static void main(String[] args) {
        Box b1 = new Box(5);
        Box b2 = b1.doubleSize();   // Receives the returned object
        System.out.println(b2.size);  // 10
    }
}
\`\`\`

---

### Access Modifiers - Who Can Access From Where

#### Visual Representation:

\`\`\`
┌──────────────────────────────────────────────┐
│                 Everywhere (public)          │
│  ┌──────────────────────────────────────┐   │
│  │          Subclass + Package           │   │
│  │  ┌──────────────────────────────┐   │   │
│  │  │      Package (default)        │   │   │
│  │  │  ┌────────────────────┐     │   │   │
│  │  │  │  Class (private)   │     │   │   │
│  │  │  └────────────────────┘     │   │   │
│  │  └──────────────────────────────┘   │   │
│  └──────────────────────────────────────┘   │
└──────────────────────────────────────────────┘
\`\`\`

#### Practical Examples:

\`\`\`java
public class Parent {
    public int pub = 1;       // Accessible from everywhere
    protected int prot = 2;    // Same package + subclass
    int def = 3;               // Same package only (default)
    private int priv = 4;       // Only in this class

    public void showAll() {
        System.out.println(pub);   // ✓
        System.out.println(prot);  // ✓
        System.out.println(def);    // ✓
        System.out.println(priv);  // ✓
    }
}
\`\`\`

---

### static Keyword - Shared By All

#### static Variable:

\`\`\`java
class Student {
    String name;            // Instance variable - separate for each object
    static String school;     // Static variable - shared by all objects

    Student(String n) {
        name = n;
    }
}

public class Main {
    public static void main(String[] args) {
        Student.school = "ABC College";  // Accessed via the class name

        Student s1 = new Student("Rahul");
        Student s2 = new Student("Priya");

        System.out.println(s1.name);    // Rahul
        System.out.println(s2.name);    // Priya
        System.out.println(s1.school); // ABC College
        System.out.println(s2.school); // ABC College (same!)
    }
}
\`\`\`

#### static Method:

\`\`\`java
class MathHelper {
    static int add(int a, int b) {
        return a + b;
    }

    static double PI = 3.14159;
}

public class Main {
    public static void main(String[] args) {
        // No object needed, call directly via the class
        int sum = MathHelper.add(5, 10);
        double pi = MathHelper.PI;
    }
}
\`\`\`

**Rules for static Methods:**
- Can only access static members
- Cannot use \`this\` and \`super\`

---

### final Keyword - Cannot Change

#### final Variable (Constant):

\`\`\`java
class Constants {
    final int MAX_SIZE = 100;
    final double PI = 3.14159;
}

// Constants.MAX_SIZE = 200;  // ERROR!
\`\`\`

#### final Method (Cannot Override):

\`\`\`java
class Parent {
    final void show() {
        System.out.println("Parent show");
    }
}

class Child extends Parent {
    // void show() {}  // ERROR! Cannot override
}
\`\`\`

#### final Class (Cannot Extend):

\`\`\`java
final class String {
    // No class can extend this
}

// class MyString extends String {}  // ERROR!
\`\`\`

---

### Command Line Arguments

\`\`\`java
public class ArgsDemo {
    public static void main(String[] args) {
        System.out.println("Arguments:");
        for (int i = 0; i < args.length; i++) {
            System.out.println(args[i]);
        }
    }
}
\`\`\`

\`\`\`bash
javac ArgsDemo.java
java ArgsDemo Hello World 2024
\`\`\`

**Output:**
\`\`\`
Arguments:
Hello
World
2024
\`\`\`

**Type Conversion:**
\`\`\`java
int num = Integer.parseInt(args[0]);    // String to int
double price = Double.parseDouble(args[1]);
\`\`\`

---

### Frequently Asked Exam Questions

**Q: Explain access modifiers with a table.**

**Answer:**

| Modifier | Class | Package | Subclass | Everywhere |
|----------|-------|---------|----------|------------|
| private | ✓ | ✗ | ✗ | ✗ |
| default | ✓ | ✓ | ✗ | ✗ |
| protected | ✓ | ✓ | ✓ | ✗ |
| public | ✓ | ✓ | ✓ | ✓ |

**Practical Example:**
- **private:** A BankAccount password - accessible only within the class
- **default:** A package-level helper - accessible from the same package
- **protected:** Parent class methods - accessible in a subclass
- **public:** Main class/methods - accessible from everywhere`
  },

  "inheritance-super-overriding-dispatch": {
    topicId: "inheritance-super-overriding-dispatch",
    moduleId: "m3",
    title: "Inheritance: super, overriding, dynamic dispatch",
    examWeight: "5-6 marks",
    keywords: ["inheritance", "super", "override", "dynamic dispatch", "runtime polymorphism"],
    content: `## super Keyword

\`super\` refers to parent class.

**Uses:**
1. Call parent's constructor
2. Access parent's methods
3. Access parent's variables

## Dynamic Method Dispatch (Runtime Polymorphism)

JVM decides which method to call at **RUNTIME** based on actual object type.

\`\`\`java
Bank b = new SBI();
b.getRate();  // SBI's rate() will be called
\`\`\`

## Method Overriding Rules

- Same method signature
- Cannot reduce access modifier
- Cannot override static methods`,
    detailedNotes: `## Inheritance: super, Overriding, Dynamic Dispatch - Deep Explanation

### super Keyword - Access the Parent

#### 1. Calling the Parent Constructor:

\`\`\`java
class Parent {
    Parent() {
        System.out.println("Parent Constructor");
    }
}

class Child extends Parent {
    Child() {
        super();  // Calls the parent's constructor
        System.out.println("Child Constructor");
    }
}

public class Main {
    public static void main(String[] args) {
        new Child();
        // Output:
        // Parent Constructor
        // Child Constructor
    }
}
\`\`\`

**Important:** \`super()\` must be on the first line!

#### 2. Calling a Parent Method:

\`\`\`java
class Parent {
    void display() {
        System.out.println("Parent display");
    }
}

class Child extends Parent {
    @Override
    void display() {
        super.display();  // Also calls the parent's display
        System.out.println("Child display");
    }
}

// Output:
// Parent display
// Child display
\`\`\`

#### 3. Accessing a Parent Variable:

\`\`\`java
class Parent {
    int x = 10;
}

class Child extends Parent {
    int x = 20;

    void show() {
        System.out.println(x);        // 20 (local)
        System.out.println(super.x);  // 10 (parent)
    }
}
\`\`\`

---

### Method Overriding - Same Method, Different Implementation

#### Basic Override:

\`\`\`java
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
\`\`\`

#### Overriding Rules:

| Rule | Explanation |
|------|-------------|
| Method signature must be same | Same name, same parameters |
| Cannot reduce visibility | private → public not allowed |
| static methods cannot be overridden | They are hidden |
| final methods cannot be overridden | Already locked |

**Wrong Override:**
\`\`\`java
class Parent {
    public void show() { }
}

class Child extends Parent {
    // ERROR! Cannot reduce visibility
    private void show() { }  // ✗
}
\`\`\`

---

### Dynamic Method Dispatch - Runtime Polymorphism

#### What Is It?
The JVM decides **at runtime** which method to call based on the actual object type.

#### Example:

\`\`\`java
class Bank {
    double getRate() {
        return 5.0;
    }
}

class SBI extends Bank {
    @Override
    double getRate() {
        return 6.5;
    }
}

class HDFC extends Bank {
    @Override
    double getRate() {
        return 7.0;
    }
}

public class Main {
    public static void main(String[] args) {
        Bank b;  // Reference variable

        // Which getRate() is called is decided at runtime
        b = new SBI();
        System.out.println(b.getRate());  // 6.5

        b = new HDFC();
        System.out.println(b.getRate());  // 7.0

        b = new Bank();
        System.out.println(b.getRate());  // 5.0
    }
}
\`\`\`

#### How Does It Work?

\`\`\`
Reference Type: Bank b
                  │
                  ▼
         ┌─────────────────┐
         │ b = new SBI();  │
         │                 │
         │ The JVM sees    │
         │ the actual      │
         │ object type=SBI │
         │                 │
         │ SBI's          │
         │ getRate()      │
         │ is called      │
         └─────────────────┘
\`\`\`

---

### Real World Use Case - Payment System:

\`\`\`java
abstract class Payment {
    abstract void pay(double amount);
}

class CreditCardPayment extends Payment {
    @Override
    void pay(double amount) {
        System.out.println("Paid " + amount + " via Credit Card");
    }
}

class UPIPayment extends Payment {
    @Override
    void pay(double amount) {
        System.out.println("Paid " + amount + " via UPI");
    }
}

class NetBankingPayment extends Payment {
    @Override
    void pay(double amount) {
        System.out.println("Paid " + amount + " via Net Banking");
    }
}

public class Main {
    public static void main(String[] args) {
        Payment p;

        p = new UPIPayment();
        p.pay(500);  // UPIPayment's pay is called

        p = new CreditCardPayment();
        p.pay(1000);  // CreditCardPayment's pay is called
    }
}
\`\`\`

---

### Frequently Asked Exam Questions

**Q1: What is dynamic method dispatch?**

**Answer:**
At runtime, the JVM decides which overridden method to call based on the actual object type (not the reference type).

\`\`\`java
Bank b = new SBI();
b.getRate();  // SBI's method is called (decided at runtime)
\`\`\`

**Q2: List the uses of the super keyword.**

**Answer:**
1. \`super()\` - Calls the parent constructor
2. \`super.method()\` - Calls a parent method
3. \`super.variable\` - Accesses a parent variable`
  },

  "abstract-final-in-inheritance": {
    topicId: "abstract-final-in-inheritance",
    moduleId: "m3",
    title: "Abstract Classes + final",
    examWeight: "5-6 marks",
    keywords: ["abstract class", "abstract method", "final"],
    content: `## Abstract Class

A class declared with \`abstract\` that **cannot be instantiated**.

## Abstract Method

Method declared with \`abstract\` **without body**. Must be implemented by subclasses.

## Rules

- Cannot instantiate abstract class
- Abstract methods must be implemented by concrete subclasses
- Can have both abstract and concrete methods
- Can have constructors

## final in Inheritance

- **final class** = Cannot extend
- **final method** = Cannot override
- **final variable** = Cannot modify`,
    detailedNotes: `## Abstract Classes and final - Deep Explanation

### Abstract Class - Creating a Blueprint (Plan)

#### What Is It?
Abstract class = A class that has **no complete implementation**. You cannot create an object from it.

#### Example:

\`\`\`java
// Abstract class - incomplete
abstract class Shape {
    String color;

    // Concrete method - has an implementation
    void setColor(String c) {
        color = c;
    }

    // Abstract method - only declaration, no body
    abstract void draw();    // No implementation
    abstract double area();  // No implementation
}

// Concrete class - provides the implementation
class Circle extends Shape {
    double radius;

    Circle(double r) {
        radius = r;
    }

    @Override
    void draw() {
        System.out.println("Drawing Circle");
    }

    @Override
    double area() {
        return Math.PI * radius * radius;
    }
}

class Rectangle extends Shape {
    double length, width;

    Rectangle(double l, double w) {
        length = l;
        width = w;
    }

    @Override
    void draw() {
        System.out.println("Drawing Rectangle");
    }

    @Override
    double area() {
        return length * width;
    }
}
\`\`\`

---

### Abstract vs Concrete Class

| Feature | Abstract Class | Concrete Class |
|---------|----------------|---------------|
| Can you create an object? | No | Yes |
| Methods | Abstract + Concrete | Concrete only |
| Constructor | Yes | Yes |
| Use | For a blueprint | Full implementation |

---

### Rules for Abstract Methods

1. An abstract method has **no body**
2. An abstract class **must have abstract methods** (this is not optional)
3. A concrete subclass **must implement all abstract methods**

\`\`\`java
abstract class Animal {
    abstract void sound();  // Abstract - no body
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Bark");
    }
}

// class Cat extends Animal { }  // ERROR! Cat did not implement sound()
\`\`\`

---

### final Keyword - Lock It

#### final Variable (Constant):

\`\`\`java
class Constants {
    static final double PI = 3.14159;
    final int MAX_RETRY = 3;
}

// Constants.PI = 3.14;  // ERROR!
// MAX_RETRY = 5;      // ERROR!
\`\`\`

#### final Method (Cannot Override):

\`\`\`java
class Parent {
    final void show() {
        System.out.println("Parent show");
    }
}

class Child extends Parent {
    // ERROR! Cannot override final method
    // void show() { }
}
\`\`\`

#### final Class (Cannot Extend):

\`\`\`java
final class String {
    // No class can extend this class
}

// class MyString extends String { }  // ERROR!
\`\`\`

---

### Abstract + final Together?

**You cannot do this!**

\`\`\`java
abstract final class Test { }  // ERROR!
// abstract = "must be extended"
// final = "cannot be extended"
This is contradictory!
\`\`\`

---

### Real World Example - Shape Drawing App:

\`\`\`java
abstract class Shape {
    abstract void draw();
    abstract double calculateArea();
}

class Circle extends Shape {
    double radius;

    Circle(double r) { radius = r; }

    void draw() {
        System.out.println("Drawing Circle with radius " + radius);
    }

    double calculateArea() {
        return Math.PI * radius * radius;
    }
}

class Rectangle extends Shape {
    double length, width;

    Rectangle(double l, double w) { length = l; width = w; }

    void draw() {
        System.out.println("Drawing Rectangle");
    }

    double calculateArea() {
        return length * width;
    }
}

public class Main {
    public static void main(String[] args) {
        Shape[] shapes = {
            new Circle(5),
            new Rectangle(4, 6)
        };

        for (Shape s : shapes) {
            s.draw();
            System.out.println("Area: " + s.calculateArea());
        }
    }
}
\`\`\`

---

### Frequently Asked Exam Questions

**Q1: Explain the difference between an abstract class and an interface.**

**Answer:**

| Feature | Abstract Class | Interface |
|---------|---------------|-----------|
| Methods | Abstract + Concrete | Abstract + default + static |
| Variables | Any type | public static final only |
| Constructor | Yes | No |
| Multiple | Only one | Can implement multiple |
| When to Use | For related classes | For capabilities |

**Q2: What is an abstract method? Give an example.**

**Answer:**
Abstract method = Only a declaration, no implementation.

\`\`\`java
abstract class Vehicle {
    abstract void start();  // Abstract - no body
    void fuelType() { }      // Concrete - has a body
}
\`\`\``
  },

  "packages-import-member-access": {
    topicId: "packages-import-member-access",
    moduleId: "m3",
    title: "Packages, import, and member access",
    examWeight: "3-4 marks",
    keywords: ["package", "import", "access"],
    content: `## Packages

**Package** = Group of related classes.

## import Statement

1. **Single class:** import java.util.Scanner;
2. **Wildcard:** import java.util.*;
3. **Static:** import static java.lang.Math.*;

## Access Modifiers

| Modifier | Same Class | Same Package | Subclass | Everywhere |
|----------|------------|--------------|----------|------------|
| private | ✓ | ✗ | ✗ | ✗ |
| default | ✓ | ✓ | ✗ | ✗ |
| protected | ✓ | ✓ | ✓ | ✗ |
| public | ✓ | ✓ | ✓ | ✓ |`,
    detailedNotes: `## Packages and Access Modifiers - Deep Explanation

### Packages - Organize Your Classes

#### What Is a Package?
Package = A group of related classes (like a folder/directory).

#### Creating a Package:

\`\`\`java
// File: com/college/student/Student.java
package com.college.student;

public class Student {
    String name;
    int rollNo;
}
\`\`\`

#### Benefits of Packages:
1. Organize your classes
2. Avoid name conflicts
3. Access control
4. Encapsulation

---

### import Statement - Use Other Classes

#### 1. Single Class Import:
\`\`\`java
import java.util.Scanner;      // Only the Scanner class
import java.util.ArrayList;    // Only ArrayList
\`\`\`

#### 2. Wildcard Import (*):
\`\`\`java
import java.util.*;   // All classes in the util package
// Scanner, ArrayList, HashMap, etc. are all available
\`\`\`

#### 3. Static Import:
\`\`\`java
import static java.lang.Math.PI;   // Just PI instead of Math.PI
import static java.lang.System.out; // Just out instead of System.out

public class Main {
    public static void main(String[] args) {
        out.println(PI);  // System.out.println(Math.PI)
    }
}
\`\`\`

---

### Access Modifiers - Visibility Control

#### Complete Table:

\`\`\`
┌────────────────────────────────────────────────┐
│                  PUBLIC                        │
│  ┌────────────────────────────────────────┐  │
│  │               PROTECTED                 │  │
│  │  ┌─────────────────────────────────┐   │  │
│  │  │     DEFAULT (Package-private)    │   │  │
│  │  │  ┌─────────────────────────┐    │   │  │
│  │  │  │        PRIVATE         │    │   │  │
│  │  │  └─────────────────────────┘    │   │  │
│  │  └─────────────────────────────────┘   │  │
│  └────────────────────────────────────────┘  │
└────────────────────────────────────────────────┘
\`\`\`

#### Practical Example:

\`\`\`java
// com.college package
package com.college;

public class Student {
    public int publicVar = 1;       // From everywhere
    protected int protectedVar = 2;   // Package + Subclass
    int defaultVar = 3;               // Package only
    private int privateVar = 4;        // This class only

    public void show() {
        // Everything is accessible within this class
        System.out.println(publicVar);
        System.out.println(protectedVar);
        System.out.println(defaultVar);
        System.out.println(privateVar);
    }
}
\`\`\`

\`\`\`java
// Same package - com.college
package com.college;

class Test {
    void test() {
        Student s = new Student();
        System.out.println(s.publicVar);      // ✓
        System.out.println(s.protectedVar);  // ✓
        System.out.println(s.defaultVar);     // ✓
        System.out.println(s.privateVar);      // ✗ ERROR
    }
}
\`\`\`

---

### Frequently Asked Exam Questions

**Q: Explain access modifiers with examples.**

**Answer:**

| Modifier | Class | Package | Subclass | Everywhere |
|----------|-------|---------|----------|------------|
| private | ✓ | ✗ | ✗ | ✗ |
| (default) | ✓ | ✓ | ✗ | ✗ |
| protected | ✓ | ✓ | ✓ | ✗ |
| public | ✓ | ✓ | ✓ | ✓ |

**Example:**
- **private:** A BankAccount password - accessible only within the class
- **default:** A helper method - accessible from the same package
- **protected:** A parent method - accessible to a subclass
- **public:** Main methods - accessible from everywhere`
  },

  "interfaces-default-static-private-methods": {
    topicId: "interfaces-default-static-private-methods",
    moduleId: "m3",
    title: "Interfaces (default/static methods)",
    examWeight: "5-6 marks",
    keywords: ["interface", "default method", "implements"],
    content: `## Interface

**Interface** = 100% abstract class. Classes **implement** interfaces.

## Java 8+ Features

### default Methods
Methods with implementation in interface. Backward compatibility.

### static Methods
Utility methods in interface, called by the interface name.

### private Methods (Java 9+)
Helper methods used only inside the interface (by default/static methods). Not visible to implementing classes.

## Interface vs Abstract Class

| Feature | Interface | Abstract Class |
|---------|-----------|----------------|
| Methods | Abstract, default, static | All types |
| Variables | public static final only | Any type |
| Multiple | Supported | Not supported |
| Keyword | implements | extends |`,
    detailedNotes: `## Interfaces - Deep Explanation

### What Is an Interface?

Interface = A contract/blueprint that says **what to do**, but **not how to do it**.

#### Basic Interface:

\`\`\`java
// Declare an interface
interface Drawable {
    void draw();  // Abstract method - no body
}

// Implement the interface
class Circle implements Drawable {
    @Override
    public void draw() {
        System.out.println("Drawing Circle");
    }
}

class Rectangle implements Drawable {
    @Override
    public void draw() {
        System.out.println("Drawing Rectangle");
    }
}
\`\`\`

---

### Interface Rules

1. Interface methods are **public abstract** by default
2. Interface variables are **public static final** by default
3. You cannot create an object of an interface
4. A class can implement **multiple interfaces**

\`\`\`java
interface Printable {
    void print();
}

interface Showable {
    void show();
}

class Demo implements Printable, Showable {
    @Override
    public void print() {
        System.out.println("Printing");
    }

    @Override
    public void show() {
        System.out.println("Showing");
    }
}
\`\`\`

---

### Java 8 Features - default Methods

#### The Problem Without default:
If you added a new method to an interface, all implementing classes would break.

#### The Solution With default:
\`\`\`java
interface Drawable {
    void draw();

    // default method - available for every class
    default void printMessage() {
        System.out.println("Default message");
    }
}

class Circle implements Drawable {
    @Override
    public void draw() {
        System.out.println("Drawing Circle");
    }
    // printMessage() is automatically available!
}
\`\`\`

---

### Java 8 Features - static Methods

\`\`\`java
interface MathOperation {
    int add(int a, int b);

    // static method - called via the interface name
    static int multiply(int a, int b) {
        return a * b;
    }
}

public class Main {
    public static void main(String[] args) {
        // Call the static method via the interface
        int result = MathOperation.multiply(5, 3);
        System.out.println(result);  // 15
    }
}
\`\`\`

---

### Java 9 Features - private Interface Methods

From **Java 9**, an interface can have **private methods**. These are helper methods used **only inside** the interface (by default or static methods). They cannot be called by the classes that implement the interface, so they keep shared logic in one place without exposing it.

There are two kinds:
- **private** method - a helper for default methods
- **private static** method - a helper for static methods

\`\`\`java
interface Logger {
    // public abstract method
    void logError(String msg);

    // default methods that reuse a private helper
    default void logInfo(String msg) {
        log("INFO", msg);
    }

    default void logWarning(String msg) {
        log("WARN", msg);
    }

    // private method - hidden helper, only usable inside this interface
    private void log(String level, String msg) {
        System.out.println("[" + level + "] " + msg);
    }
}

class ConsoleLogger implements Logger {
    @Override
    public void logError(String msg) {
        System.out.println("[ERROR] " + msg);
    }
}

public class Main {
    public static void main(String[] args) {
        Logger logger = new ConsoleLogger();
        logger.logInfo("Server started");     // [INFO] Server started
        logger.logWarning("Low memory");      // [WARN] Low memory
        // logger.log(...);  // ERROR! private method, not accessible outside
    }
}
\`\`\`

**Why private interface methods?** Before Java 9, two default methods that shared the same code had to duplicate it. A private method lets them share one helper while keeping it hidden from the outside.

---

### Summary - Method Types Allowed in an Interface

| Method Type | Since | Body? | Who Can Call It |
|-------------|-------|-------|-----------------|
| abstract | Java 1.0 | No | Implementing class provides body |
| default | Java 8 | Yes | Object of implementing class |
| static | Java 8 | Yes | Interface name |
| private | Java 9 | Yes | Only other methods in the interface |
| private static | Java 9 | Yes | Only static methods in the interface |

---

### Interface vs Abstract Class

| Feature | Interface | Abstract Class |
|---------|-----------|---------------|
| Methods | Abstract + default + static | All including concrete |
| Variables | public static final only | Any type |
| Constructors | No | Yes |
| Multiple Inheritance | Supported | Not supported |
| Access Modifiers | public only | All |

---

### Multiple Inheritance with Interfaces

\`\`\`java
interface A {
    void methodA();
}

interface B {
    void methodB();
}

// Class C can implement both A and B
class C implements A, B {
    @Override
    public void methodA() {
        System.out.println("Method A");
    }

    @Override
    public void methodB() {
        System.out.println("Method B");
    }
}
\`\`\`

---

### Frequently Asked Exam Questions

**Q1: What is an interface? Explain the difference from an abstract class.**

**Answer:**
Interface = A contract that defines what to do.

**Difference:**
| Feature | Interface | Abstract Class |
|---------|-----------|---------------|
| Methods | Abstract, default, static | Abstract + concrete |
| Variables | Only constants | Any type |
| Multiple | Yes | No |

**Q2: Why is multiple inheritance not supported through classes in Java?**

**Answer:**
Because of the Diamond Problem. Multiple inheritance is supported through interfaces because interfaces only have declarations, not implementations.`
  },

  "exception-handling-core": {
    topicId: "exception-handling-core",
    moduleId: "m4",
    title: "Exception Handling (core + user-defined)",
    examWeight: "5-6 marks",
    keywords: ["exception", "try", "catch", "throw", "throws", "finally"],
    content: `## Exception Hierarchy

\`\`\`
Throwable
  ├── Error (fatal)
  └── Exception
        ├── IOException (Checked)
        └── RuntimeException (Unchecked)
              ├── ArithmeticException
              ├── NullPointerException
              └── ArrayIndexOutOfBoundsException
\`\`\`

## try-catch Block

\`\`\`java
try {
    // risky code
} catch (ExceptionType e) {
    // handle
}
\`\`\`

## throw vs throws

| Keyword | Purpose |
|---------|---------|
| throw | Manually throw exception |
| throws | Declare exception in method signature |

## finally Block

**Always executes** - cleanup code.

## Nested try & Uncaught Exceptions

A **nested try** is a try-catch inside another try-catch; if the inner catch does not match, the exception goes to the outer try. An **uncaught exception** travels up the call stack to the JVM's default handler, which prints the stack trace and ends the program.

## Custom Exception

\`\`\`java
class MyException extends Exception {
    MyException(String msg) { super(msg); }
}
\`\`\``,
    detailedNotes: `## Exception Handling - Deep Explanation

### What Is an Exception?

Exception = An event/error that disrupts the program flow.

**Types:**
1. **Checked Exception** - The compiler forces you to handle it
2. **Unchecked Exception** - Happens at runtime

#### Common Exceptions:

| Exception | When It Happens |
|-----------|---------------|
| ArithmeticException | Division by zero |
| NullPointerException | Using a null reference |
| ArrayIndexOutOfBoundsException | Going beyond the array's bounds |
| NumberFormatException | Wrong number format |
| IOException | Input/Output error |

---

### try-catch - Catching an Exception

\`\`\`java
try {
    // Code that may throw an exception
    int result = 10 / 0;  // ArithmeticException

} catch (ArithmeticException e) {
    // If an exception occurs, it comes here
    System.out.println("Cannot divide by zero!");
    System.out.println("Error: " + e.getMessage());

} catch (Exception e) {
    // General exception handler
    System.out.println("Some error occurred");

} finally {
    // This always runs
    System.out.println("Cleanup code");
}
\`\`\`

---

### Multiple catch Blocks

\`\`\`java
try {
    int[] arr = {1, 2, 3};
    System.out.println(arr[5]);  // ArrayIndexOutOfBoundsException

    String s = null;
    s.length();  // NullPointerException

} catch (ArithmeticException e) {
    System.out.println("Math error");

} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Wrong array index");

} catch (NullPointerException e) {
    System.out.println("Null reference");

} catch (Exception e) {
    // Parent exception - handles everything
    System.out.println("General error");
}
\`\`\`

**Important:** Child exceptions first, parent last!

---

### throw vs throws

#### throw - Throw an Exception Yourself

\`\`\`java
void validate(int age) {
    if (age < 0) {
        throw new ArithmeticException("Age cannot be negative");
    }
    System.out.println("Valid age: " + age);
}

// Usage
validate(-5);  // An exception will be thrown
\`\`\`

#### throws - Declare an Exception in the Method

\`\`\`java
void readFile() throws IOException {
    // An exception may occur here
    throw new IOException("File not found");
}

// The caller must handle it
public static void main(String[] args) {
    try {
        readFile();
    } catch (IOException e) {
        System.out.println("Handled: " + e);
    }
}
\`\`\`

---

### finally Block - Always Runs

\`\`\`java
try {
    System.out.println("In try");
    int x = 10 / 2;

} catch (Exception e) {
    System.out.println("In catch");

} finally {
    System.out.println("In finally - ALWAYS runs");
}

// Output:
// In try
// In finally - ALWAYS runs
\`\`\`

---

### Uncaught Exceptions

If an exception is **not caught** by any try-catch, it **propagates up the call stack**. When it reaches the JVM's **default exception handler**, the handler **prints the stack trace** and **terminates the program** abnormally.

\`\`\`java
public class Main {
    public static void main(String[] args) {
        int x = 10 / 0;   // No try-catch around this
        System.out.println("This line never runs");
    }
}
\`\`\`

**Output (the default handler prints this, then the program ends):**

\`\`\`
Exception in thread "main" java.lang.ArithmeticException: / by zero
    at Main.main(Main.java:3)
\`\`\`

Here the \`ArithmeticException\` is never handled, so the JVM prints the stack trace and stops the program. The line after the division never runs.

---

### Nested try Statements

A **nested try** is a try-catch placed **inside** another try-catch. If the **inner** catch does not match the exception type, the exception **propagates to the outer** try, which gets a chance to handle it.

\`\`\`java
public class Main {
    public static void main(String[] args) {
        try {
            System.out.println("Outer try start");

            try {
                System.out.println("Inner try start");
                int[] arr = {1, 2, 3};
                System.out.println(arr[5]);   // ArrayIndexOutOfBoundsException

            } catch (ArithmeticException e) {
                // Inner catch handles only ArithmeticException - does NOT match
                System.out.println("Inner catch: arithmetic problem");
            }

        } catch (ArrayIndexOutOfBoundsException e) {
            // The exception propagated out to the outer try
            System.out.println("Outer catch: array index problem");
        }
    }
}
\`\`\`

**Output:**

\`\`\`
Outer try start
Inner try start
Outer catch: array index problem
\`\`\`

The inner catch only handles \`ArithmeticException\`, so the \`ArrayIndexOutOfBoundsException\` is not caught there. It propagates to the outer try, where the matching catch handles it.

---

### Custom Exception - Create Your Own Exception

\`\`\`java
// Create a custom exception
class InvalidAgeException extends Exception {
    InvalidAgeException(String msg) {
        super(msg);  // Call the parent constructor
    }
}

// Use it
class Voter {
    static void checkAge(int age) throws InvalidAgeException {
        if (age < 18) {
            throw new InvalidAgeException("Age " + age + " is invalid. Must be 18+.");
        }
        System.out.println("Valid voter");
    }
}

public class Main {
    public static void main(String[] args) {
        try {
            Voter.checkAge(15);
        } catch (InvalidAgeException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
\`\`\`

---

### Frequently Asked Exam Questions

**Q1: Explain try-catch-finally with an example.**

**Answer:**
\`\`\`java
try {
    // Risky code - may throw an exception
    int result = 10 / 0;

} catch (Exception e) {
    // If an exception occurs, handle it here

} finally {
    // This always runs - for cleanup
}
\`\`\`

**Q2: Explain the difference between throw and throws.**

**Answer:**
| Keyword | Job | Where |
|---------|------|-------|
| throw | Throw an exception yourself | Inside the method |
| throws | Declare an exception | In the method signature |`
  },

  "strings-stringbuffer": {
    topicId: "strings-stringbuffer",
    moduleId: "m4",
    title: "String Handling: String + StringBuffer",
    examWeight: "5-6 marks",
    keywords: ["string", "immutable", "stringbuffer"],
    content: `## String

**String** = Sequence of characters. **Immutable** (cannot change).

**String constructors** let you build a String from another String, a \`char[]\`, or a \`byte[]\`. **Character extraction** methods like \`charAt()\`, \`getChars()\`, and \`toCharArray()\` read individual characters out of a String.

## StringBuffer

**Mutable**. Thread-safe. Slower due to synchronization.

## Key Difference

| Feature | String | StringBuilder/Buffer |
|---------|--------|---------------------|
| Mutable | No | Yes |
| Thread-safe | No | Yes (Buffer) / No (Builder) |
| Performance | Slow (new objects) | Fast |
| When Use | Never changes | Frequent changes |`,
    detailedNotes: `## String Handling - Deep Explanation

### What Is a String?

String = A sequence of characters. In Java, a String is an **object** (not a primitive).

#### Creating a String:

\`\`\`java
// Way 1: String literal (preferred)
String s1 = "Hello";

// Way 2: Using the new keyword
String s2 = new String("Hello");
\`\`\`

---

### String Constructors

The \`String\` class provides several constructors to build a String from different sources.

\`\`\`java
// 1. Empty string
String s1 = new String();                 // ""

// 2. From another String
String s2 = new String("Hello");           // "Hello"

// 3. From a char array
char[] chars = {'J', 'a', 'v', 'a'};
String s3 = new String(chars);             // "Java"

// 4. From part of a char array (start index, count)
String s4 = new String(chars, 1, 3);       // "ava"

// 5. From a byte array (bytes decoded as characters)
byte[] bytes = {65, 66, 67};
String s5 = new String(bytes);             // "ABC"
\`\`\`

---

### Character Extraction

Strings are not character arrays, so you cannot index them like \`s[0]\`. Java gives special methods to read characters out of a String.

\`\`\`java
String s = "Java";

// 1. charAt(int) - get one character at an index
char c = s.charAt(0);              // 'J'

// 2. getChars(srcBegin, srcEnd, dst, dstBegin) - copy a range into a char array
char[] dst = new char[2];
s.getChars(1, 3, dst, 0);          // dst = {'a', 'v'}

// 3. toCharArray() - convert the whole String into a char array
char[] all = s.toCharArray();      // {'J', 'a', 'v', 'a'}

// 4. Iterate over every character with a for loop
for (int i = 0; i < s.length(); i++) {
    System.out.print(s.charAt(i) + " ");   // J a v a
}
\`\`\`

**Note:** \`charAt()\` reads a single character, \`getChars()\` copies a range, and \`toCharArray()\` copies everything.

---

### Why Is a String Immutable?

Once it is created, it **cannot be changed**. Every change creates a **new object**.

\`\`\`java
String s = "Hello";
s = s + " World";
// The "Hello" object becomes eligible for GC
// A new "Hello World" object is created
\`\`\`

**Why Immutable?**
1. **Security** - Passwords and usernames stay secure
2. **Thread Safety** - Can be shared without synchronization
3. **HashMap** - Keys work properly
4. **String Pool** - Saves memory

---

### String Methods

\`\`\`java
String s = "  Hello World  ";

s.length();                    // 15
s.charAt(0);                   // ' ' (space)
s.charAt(3);                   // 'H'
s.substring(2, 7);            // "Hello"
s.toUpperCase();              // "  HELLO WORLD  "
s.toLowerCase();              // "  hello world  "
s.trim();                     // "Hello World"
s.replace("World", "Java");   // "  Hello Java  "
s.indexOf("o");                // 5
s.lastIndexOf("o");           // 9
s.contains("Hello");           // true
s.startsWith("  ");          // true
s.endsWith("  ");            // true
s.equals("hello");           // false
s.equalsIgnoreCase("hello"); // true
\`\`\`

---

### StringBuilder (Mutable, Fast)

Best for frequent modifications.

\`\`\`java
StringBuilder sb = new StringBuilder("Hello");

sb.append(" World");      // "Hello World"
sb.insert(5, ",");       // "Hello, World"
sb.delete(5, 6);         // "HelloWorld"
sb.replace(0, 5, "Hi");  // "HiWorld"
sb.reverse();             // "dlroW iH"
sb.length();              // 8
sb.capacity();            // 16 + initial length 5 = 21 (capacity set at creation)
\`\`\`

---

### StringBuffer (Mutable + Thread-Safe)

Like StringBuilder, but **synchronized** (thread-safe).

\`\`\`java
StringBuffer sb = new StringBuffer("Hello");

sb.append(" World");    // Same as StringBuilder
sb.insert(5, ",");
sb.reverse();

// Multiple threads can use it at the same time
// A little slower than StringBuilder
\`\`\`

---

### StringBuilder vs StringBuffer

| Feature | StringBuilder | StringBuffer |
|---------|---------------|---------------|
| Thread-safe | No | Yes |
| Performance | Fast | Slow (synchronization) |
| Use When | Single thread | Multiple threads |

**When to Use:**
- **String:** When the data will never change
- **StringBuilder:** Single thread, frequent changes
- **StringBuffer:** Multiple threads, frequent changes

---

### Frequently Asked Exam Questions

**Q1: Why is a String immutable?**

**Answer:**
Once created, it cannot be changed. Every modification creates a new object.

**Benefits:**
1. Security (passwords stay safe)
2. Thread safety
3. HashMap keys work properly
4. The String pool saves memory

**Q2: Explain the difference between String, StringBuilder, and StringBuffer.**

**Answer:**
| Type | Mutable | Thread-Safe | Speed |
|------|---------|-------------|-------|
| String | No | N/A | Slow |
| StringBuilder | Yes | No | Fast |
| StringBuffer | Yes | Yes | Medium |`
  },

  "generics-intro": {
    topicId: "generics-intro",
    moduleId: "m4",
    title: "Generics (Generic Class, Type Parameters)",
    examWeight: "5-6 marks",
    keywords: ["generics", "type parameter", "generic class"],
    content: `## What are Generics?

**Type-safe** programming. Compile-time type checking.

## Generic Class

\`\`\`java
class Box<T> {
    T value;
    void set(T v) { value = v; }
    T get() { return value; }
}

Box<String> b = new Box<>();
b.set("Hello");
String s = b.get();  // No casting needed
\`\`\`

## Bounded Type

\`\`\`java
class Calculator<T extends Number> {
    T value;
}
\`\`\`

## Wildcards

- \`? extends Number\` - Number and subclasses
- \`? super Integer\` - Integer and superclasses`,
    detailedNotes: `## Generics - Deep Explanation

### The Problem Without Generics

\`\`\`java
// Without Generics - no type safety
ArrayList list = new ArrayList();
list.add("Hello");
list.add(123);  // No error, but problematic

// Casting is required when retrieving
String s = (String) list.get(0);  // OK
Integer i = (Integer) list.get(1);  // OK

// But:
String s = (String) list.get(1);  // Runtime error! (an Integer was stored)
\`\`\`

### The Solution With Generics

\`\`\`java
// With Generics - type safe
ArrayList<String> list = new ArrayList<>();
list.add("Hello");
// list.add(123);  // COMPILE ERROR! Type safety

String s = list.get(0);  // No casting needed
\`\`\`

---

### Creating a Generic Class

#### Single Type Parameter:

\`\`\`java
class Box<T> {
    private T item;

    public void set(T item) {
        this.item = item;
    }

    public T get() {
        return item;
    }
}

// Usage
Box<String> stringBox = new Box<>();
stringBox.set("Hello");
String value = stringBox.get();  // No casting

Box<Integer> intBox = new Box<>();
intBox.set(123);
int num = intBox.get();  // No casting
\`\`\`

#### Two Type Parameters:

\`\`\`java
class Pair<K, V> {
    private K key;
    private V value;

    public Pair(K k, V v) {
        key = k;
        value = v;
    }

    public K getKey() { return key; }
    public V getValue() { return value; }
}

// Usage
Pair<String, Integer> student = new Pair<>("Rahul", 101);
String name = student.getKey();   // "Rahul"
int roll = student.getValue();    // 101
\`\`\`

---

### Bounded Type Parameters

Restrict the type.

\`\`\`java
// T can only be Number or its subclasses
class Calculator<T extends Number> {
    private T value;

    Calculator(T val) {
        value = val;
    }

    double toDouble() {
        return value.doubleValue();  // Can access the Number class's method
    }
}

// Valid
Calculator<Integer> c1 = new Calculator<>(10);
Calculator<Double> c2 = new Calculator<>(3.14);

// Invalid
// Calculator<String> c3;  // ERROR! String is not a Number
\`\`\`

---

### Wildcards (?)

For an unknown type.

#### Unbounded Wildcard:
\`\`\`java
void printList(List<?> list) {
    for (Object o : list) {
        System.out.println(o);
    }
}
\`\`\`

#### Upper Bounded Wildcard:
\`\`\`java
// Integer, Double, Number, etc. are all allowed
double sum(List<? extends Number> list) {
    double total = 0;
    for (Number n : list) {
        total += n.doubleValue();
    }
    return total;
}
\`\`\`

#### Lower Bounded Wildcard:
\`\`\`java
// Integer, Number, Object are all allowed
void addNumbers(List<? super Integer> list) {
    list.add(10);  // You can add an Integer
}
\`\`\`

---

### Frequently Asked Exam Questions

**Q1: What are generics? Explain how to create a generic class.**

**Answer:**
Generics = Type-safe programming at compile time.

\`\`\`java
class Box<T> {
    T item;
    void set(T item) { this.item = item; }
    T get() { return item; }
}

Box<String> b = new Box<>();
b.set("Hello");
String s = b.get();  // No casting
\`\`\`

**Q2: What is a bounded type parameter?**

**Answer:**
Restricting the type.

\`\`\`java
class Calc<T extends Number> {
    // T can only be Number or its subclasses
}
Calc<Integer> ok;    // Valid
Calc<Double> ok2;   // Valid
Calc<String> bad;   // Error!
\`\`\``
  },

  "threads-model-creation-join-sync": {
    topicId: "threads-model-creation-join-sync",
    moduleId: "m5",
    title: "Multithreading: model, creation, join, priorities, synchronization",
    examWeight: "5-6 marks",
    keywords: ["thread", "runnable", "join", "isalive", "priority", "synchronized"],
    content: `## Creating Thread

### Way 1: Extending Thread Class
\`\`\`java
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread running");
    }
}
new MyThread().start();
\`\`\`

### Way 2: Implementing Runnable (Preferred)
\`\`\`java
class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Runnable thread");
    }
}
new Thread(new MyRunnable()).start();
\`\`\`

## Thread Methods

- **start()** - Calls run() in a new thread
- **join()** - Wait until the thread completes
- **isAlive()** - Whether the thread is running or not

## Thread Priorities

Each thread has a priority from 1 to 10. The scheduler gives more CPU time to higher-priority threads.

| Constant | Value |
|----------|-------|
| Thread.MIN_PRIORITY | 1 |
| Thread.NORM_PRIORITY | 5 (default) |
| Thread.MAX_PRIORITY | 10 |

\`\`\`java
t.setPriority(Thread.MAX_PRIORITY);
int p = t.getPriority();
\`\`\`

## Synchronization

\`\`\`java
synchronized void withdraw() {
    // Only one thread at a time
}
\`\`\``,
    detailedNotes: `## Multithreading - Deep Explanation

### What Is a Thread?

Thread = A lightweight subprocess. **Parallel tasks** are executed within a program.

**Single Thread vs Multi Thread:**
\`\`\`
Single Thread:          Multi Thread:
Task1 ──────→          Task1 ──→
Task2 ──────→          Task2 ──────────→
Task3 ──────→          Task3 ──→
                        (Parallel execution)
\`\`\`

---

### The Java Thread Model and the Main Thread

Java was built with multithreading in mind. Older systems used **event-loop polling** where a single loop checked everything. Java instead lets you run many threads, each doing its own work, controlled by the JVM thread scheduler.

**The Main Thread:**
- When a Java program starts, the JVM automatically creates one thread called the **main thread**.
- The \`main()\` method runs on this main thread.
- It is the thread from which all other (child) threads are spawned.
- It is usually the last thread to finish, because it often performs shutdown work.

\`\`\`java
public class MainThreadDemo {
    public static void main(String[] args) {
        // Get a reference to the main thread
        Thread t = Thread.currentThread();
        System.out.println("Current thread: " + t.getName());  // main
        System.out.println("Priority: " + t.getPriority());    // 5

        t.setName("MyMainThread");
        System.out.println("Renamed to: " + t.getName());
    }
}
\`\`\`

---

### Creating a Thread (Two Ways)

#### Way 1: Extend the Thread Class

\`\`\`java
class MyThread extends Thread {
    @Override
    public void run() {
        // Write the work here that will run in the thread
        for (int i = 1; i <= 5; i++) {
            System.out.println("Thread: " + i);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        MyThread t = new MyThread();
        t.start();  // Call start(), NOT run()

        // The main thread's work
        for (int i = 1; i <= 5; i++) {
            System.out.println("Main: " + i);
        }
    }
}
\`\`\`

**Output (Interleaved):**
\`\`\`
Thread: 1
Main: 1
Thread: 2
Main: 2
...
\`\`\`

#### Way 2: Implement Runnable (Preferred)

\`\`\`java
class MyRunnable implements Runnable {
    @Override
    public void run() {
        System.out.println("Runnable thread running");
    }
}

public class Main {
    public static void main(String[] args) {
        Thread t = new Thread(new MyRunnable());
        t.start();

        // You can also do it with a lambda
        Thread t2 = new Thread(() -> {
            System.out.println("Lambda thread");
        });
        t2.start();
    }
}
\`\`\`

**Why Is Runnable Preferred?**
- Java supports single inheritance only
- With Runnable, the class can still extend another class

---

### start() vs run()

| Method | What It Does |
|--------|---------------|
| start() | Creates a new thread and calls run() in it |
| run() | Just a method call - no new thread |

\`\`\`java
Thread t = new Thread(() -> System.out.println("Task"));
t.run();    // A normal method call - in the main thread
t.start();  // Creates a new thread - parallel execution
\`\`\`

---

### Thread Methods

#### join() - Wait for the Thread

\`\`\`java
Thread t = new Thread(() -> {
    for (int i = 1; i <= 3; i++) {
        System.out.println("Thread: " + i);
    }
});

t.start();        // Thread starts
t.join();         // The main thread waits up to here

System.out.println("Main continues after thread");
// This prints after the thread completes
\`\`\`

#### isAlive() - Check Whether the Thread Is Running or Not

\`\`\`java
Thread t = new Thread(() -> {
    try { Thread.sleep(1000); } catch (Exception e) {}
});

t.start();
System.out.println(t.isAlive());  // true

t.join();
System.out.println(t.isAlive());  // false
\`\`\`

---

### Creating Multiple Threads

You can start several threads at once. They run in parallel, and their output usually interleaves.

\`\`\`java
class Worker extends Thread {
    Worker(String name) {
        super(name);   // Set the thread's name
    }

    @Override
    public void run() {
        for (int i = 1; i <= 3; i++) {
            System.out.println(getName() + " - count " + i);
        }
    }
}

public class Main {
    public static void main(String[] args) throws InterruptedException {
        Worker t1 = new Worker("Thread-A");
        Worker t2 = new Worker("Thread-B");
        Worker t3 = new Worker("Thread-C");

        t1.start();
        t2.start();
        t3.start();

        // Wait for all three to finish
        t1.join();
        t2.join();
        t3.join();

        System.out.println("All threads finished");
    }
}
\`\`\`

---

### Thread Priorities

Every thread has a **priority** (an int from 1 to 10). The thread scheduler uses it as a hint: higher-priority threads tend to get more CPU time. Priority does **not** guarantee order - it depends on the OS scheduler.

| Constant | Value | Meaning |
|----------|-------|---------|
| \`Thread.MIN_PRIORITY\` | 1 | Lowest |
| \`Thread.NORM_PRIORITY\` | 5 | Default |
| \`Thread.MAX_PRIORITY\` | 10 | Highest |

**Methods:**
- \`setPriority(int p)\` - set the priority (1 to 10)
- \`getPriority()\` - read the current priority

\`\`\`java
public class PriorityDemo {
    public static void main(String[] args) {
        Thread high = new Thread(() -> System.out.println("High priority"));
        Thread low = new Thread(() -> System.out.println("Low priority"));

        high.setPriority(Thread.MAX_PRIORITY);  // 10
        low.setPriority(Thread.MIN_PRIORITY);   // 1

        System.out.println("High = " + high.getPriority());  // 10
        System.out.println("Low = " + low.getPriority());    // 1

        high.start();
        low.start();
    }
}
\`\`\`

---

### Synchronization - Only One Thread at a Time

#### The Problem Without Synchronization:

\`\`\`java
class Counter {
    int count = 0;

    void increment() {
        count++;  // 3 operations: read, add, write
    }
}

// Two threads are using the same object
Counter c = new Counter();

Thread t1 = new Thread(() -> {
    for (int i = 0; i < 1000; i++) {
        c.increment();
    }
});

Thread t2 = new Thread(() -> {
    for (int i = 0; i < 1000; i++) {
        c.increment();
    }
});

t1.start();
t2.start();
t1.join();
t2.join();

System.out.println(c.count);  // 2000 expected, but LESS due to race condition!
\`\`\`

#### The Solution: synchronized Keyword

\`\`\`java
class Counter {
    int count = 0;

    synchronized void increment() {
        count++;
    }
}
\`\`\`

---

### Synchronized Block

A specific block instead of the whole method:

\`\`\`java
class Counter {
    int count = 0;
    Object lock = new Object();

    void increment() {
        synchronized(lock) {  // Fine-grained locking
            count++;
        }
    }
}
\`\`\`

---

### Frequently Asked Exam Questions

**Q1: How do you create a thread? Explain the two ways.**

**Answer:**

**1. Extend the Thread Class:**
\`\`\`java
class MyThread extends Thread {
    public void run() { }
}
new MyThread().start();
\`\`\`

**2. Implement Runnable (Preferred):**
\`\`\`java
class MyRunnable implements Runnable {
    public void run() { }
}
new Thread(new MyRunnable()).start();
\`\`\`

**Q2: Why is synchronization necessary?**

**Answer:**
When multiple threads share the same object, data inconsistency can occur. With synchronized, only one thread can access it at a time.`
  },

  "io-console-files-printwriter": {
    topicId: "io-console-files-printwriter",
    moduleId: "m5",
    title: "I/O: Console + Files + PrintWriter",
    examWeight: "5-6 marks",
    keywords: ["io", "file", "printwriter", "bufferedreader"],
    content: `## Scanner (Console Input)

\`\`\`java
Scanner sc = new Scanner(System.in);
String name = sc.nextLine();
int age = sc.nextInt();
\`\`\`

## Writing to File

\`\`\`java
PrintWriter pw = new PrintWriter("file.txt");
pw.println("Hello");
pw.close();
\`\`\`

## Reading from File

\`\`\`java
BufferedReader br = new BufferedReader(new FileReader("file.txt"));
String line = br.readLine();
\`\`\`

## BufferedReader vs FileReader

| Feature | FileReader | BufferedReader |
|---------|------------|----------------|
| Speed | Slow | Fast (buffered) |
| Method | read() | readLine() |`,
    detailedNotes: `## File I/O - Deep Explanation

### Scanner - Taking Input From the User

\`\`\`java
import java.util.Scanner;

public class InputDemo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter name: ");
        String name = sc.nextLine();

        System.out.print("Enter age: ");
        int age = sc.nextInt();

        System.out.print("Enter marks: ");
        double marks = sc.nextDouble();

        System.out.println("\\nDetails:");
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Marks: " + marks);

        sc.close();  // Close the Scanner
    }
}
\`\`\`

**Scanner Methods:**

| Method | What It Does |
|--------|---------------|
| next() | A single word (up to a space) |
| nextLine() | A full line |
| nextInt() | An integer |
| nextDouble() | A double |
| nextBoolean() | A boolean |
| hasNext() | Whether there is input or not |

---

### Writing to a File (Output)

#### Using PrintWriter:

\`\`\`java
import java.io.*;

public class WriteDemo {
    public static void main(String[] args) throws IOException {
        // To write to a file
        PrintWriter pw = new PrintWriter("output.txt");

        pw.println("Hello, World!");
        pw.println("Line 2");
        pw.printf("Number: %d", 42);

        pw.close();  // Important! Close the file

        System.out.println("Written to file");
    }
}
\`\`\`

---

### Reading From a File (Input)

#### Using BufferedReader + FileReader:

\`\`\`java
import java.io.*;

public class ReadDemo {
    public static void main(String[] args) throws IOException {
        // To read a file
        BufferedReader br = new BufferedReader(new FileReader("input.txt"));

        String line;
        while ((line = br.readLine()) != null) {  // null = End of File
            System.out.println(line);
        }

        br.close();  // Close it
    }
}
\`\`\`

---

### Complete Example - Student Records:

\`\`\`java
import java.io.*;
import java.util.*;

public class StudentFile {
    public static void main(String[] args) throws IOException {
        String filename = "students.txt";

        // Write Student Data
        PrintWriter pw = new PrintWriter(filename);
        pw.println("Rahul,101,85.5");
        pw.println("Priya,102,92.0");
        pw.println("Amit,103,78.5");
        pw.close();

        // Read and Display
        BufferedReader br = new BufferedReader(new FileReader(filename));
        String line;
        System.out.println("Student Records:");
        while ((line = br.readLine()) != null) {
            String[] parts = line.split(",");
            System.out.println("Name: " + parts[0] +
                             ", Roll: " + parts[1] +
                             ", Marks: " + parts[2]);
        }
        br.close();
    }
}
\`\`\`

**Output:**
\`\`\`
Student Records:
Name: Rahul, Roll: 101, Marks: 85.5
Name: Priya, Roll: 102, Marks: 92.0
Name: Amit, Roll: 103, Marks: 78.5
\`\`\`

---

### Try-with-Resources (Java 7+)

Automatic resource cleanup:

\`\`\`java
// Traditional way
PrintWriter pw = null;
try {
    pw = new PrintWriter("file.txt");
    pw.println("Hello");
} finally {
    if (pw != null) pw.close();  // Manual close
}

// Try-with-resources (Better)
try (PrintWriter pw = new PrintWriter("file.txt")) {
    pw.println("Hello");
}  // Auto-close!

// Multiple resources
try (BufferedReader br = new BufferedReader(new FileReader("a.txt"));
     PrintWriter pw = new PrintWriter("b.txt")) {
    String line;
    while ((line = br.readLine()) != null) {
        pw.println(line);
    }
}  // All are closed automatically
\`\`\`

---

### Frequently Asked Exam Questions

**Q1: How do you read from and write to a file?**

**Answer:**

**Write (Output):**
\`\`\`java
PrintWriter pw = new PrintWriter("file.txt");
pw.println("Hello");
pw.close();
\`\`\`

**Read (Input):**
\`\`\`java
BufferedReader br = new BufferedReader(new FileReader("file.txt"));
String line = br.readLine();
br.close();
\`\`\`

**Q2: Why is BufferedReader better than FileReader?**

**Answer:**
- BufferedReader uses an 8KB buffer
- Fewer system calls = Faster performance
- The readLine() method is convenient`
  },
};

// Export functions
export function getTopicContent(topicId: string): string | null {
  return topicContents[topicId]?.content || null;
}

export function getDetailedNotes(topicId: string): string | null {
  return topicContents[topicId]?.detailedNotes || null;
}

export function getTopicMeta(topicId: string): { title: string; examWeight: string; keywords: string[] } | null {
  const content = topicContents[topicId];
  if (!content) return null;
  return {
    title: content.title,
    examWeight: content.examWeight,
    keywords: content.keywords,
  };
}
