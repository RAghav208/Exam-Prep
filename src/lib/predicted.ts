// Predicted exam material derived from past papers + the official syllabus.
// Course: 25MCAC201 - Object Oriented Programming Using Java (JAIN University, MCA-AIML).
// Reference: Herbert Schildt, "Java: The Complete Reference".
//
// Exam format:
//   Section A - answer any 4 of 5 (5 marks each)
//   Section B - answer any 2 of 3 (9 marks each)
//   Section C - compulsory (12 marks, two parts)
// CO mapping:
//   CO1 = OOP basics / classes / constructors / Object class
//   CO2 = Inheritance / Polymorphism / Packages
//   CO3 = Exceptions / Generics / Strings
//   CO4 = Multithreading / I/O
//   CO5 = Develop a complete program

export type PredictedQuestion = {
  id: string;
  moduleId: string;        // "m1".."m5"
  topicId?: string;        // optional link to a topic id
  co?: string;             // e.g. "CO2"
  marks: string;           // e.g. "5 marks" | "9 marks" | "6 marks"
  frequency?: string;      // e.g. "Appeared in 2/3 papers" | "High likelihood"
  question: string;        // the theory question
  answer: string;          // markdown model answer
};

export type PredictedProgram = {
  id: string;
  moduleId: string;
  topicId?: string;
  co?: string;
  marks: string;
  frequency?: string;
  title: string;
  statement: string;       // the program question as it would be asked
  code: string;            // a complete, compilable Java program
  explanation: string;     // short markdown explanation of approach/output
};

export const predictedQuestions: PredictedQuestion[] = [
  {
    id: "pq-object-tostring",
    moduleId: "m1",
    topicId: "object-class",
    co: "CO1",
    marks: "5 marks",
    frequency: "Appeared in 2/3 papers",
    question: "Describe the use of toString() and the other methods of the Object class with an example.",
    answer: `## Methods of the Object Class

Every class in Java automatically extends the **Object** class. So every object inherits its methods. The three most asked are \`toString()\`, \`equals()\`, and \`hashCode()\`.

| Method | Default Behavior | Why Override |
|--------|------------------|--------------|
| \`toString()\` | Returns ClassName@hashcode | Print a readable object description |
| \`equals(Object o)\` | Compares references (==) | Compare objects by content |
| \`hashCode()\` | Int based on memory address | Work correctly in HashMap/HashSet |

### toString() Example

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
        // Without overriding: Student@1b6d3586
    }
}
\`\`\`

**Key rule:** if you override \`equals()\`, you must also override \`hashCode()\` so that equal objects produce the same hash code.`,
  },
  {
    id: "pq-access-specifiers",
    moduleId: "m3",
    topicId: "packages-import-member-access",
    co: "CO2",
    marks: "5 marks",
    frequency: "Appeared in 2/3 papers",
    question: "Classify and explain the role of access specifiers in Java.",
    answer: `## Access Specifiers (Access Modifiers)

Access specifiers decide **from where** a class member can be used. Java has four levels.

| Modifier | Same Class | Same Package | Subclass | Everywhere |
|----------|------------|--------------|----------|------------|
| private | Yes | No | No | No |
| default (no keyword) | Yes | Yes | No | No |
| protected | Yes | Yes | Yes | No |
| public | Yes | Yes | Yes | Yes |

### Role of Each

- **private** - the most restrictive. Used for data hiding (encapsulation), e.g. a bank \`balance\`.
- **default** - package-private. Visible only inside the same package.
- **protected** - visible in the same package and to subclasses in other packages. Used for inheritance.
- **public** - visible everywhere. Used for APIs and the \`main\` method.

\`\`\`java
public class Account {
    private double balance;     // hidden
    protected String type;      // for subclasses
    int branchCode;             // package only
    public String owner;        // open to all
}
\`\`\``,
  },
  {
    id: "pq-super-constructors",
    moduleId: "m3",
    topicId: "inheritance-super-overriding-dispatch",
    co: "CO1",
    marks: "5 marks",
    frequency: "Appeared in 2/3 papers",
    question: "Outline the significance of the super keyword when working with constructors.",
    answer: `## super with Constructors

The \`super\` keyword refers to the **parent class**. When used as \`super(...)\` it calls the **parent class constructor**.

### Why It Matters

- A subclass object also contains the parent's fields. Those fields must be initialized first.
- \`super(args)\` lets the child pass values to the parent constructor.
- If you do not write \`super(...)\`, the compiler inserts a hidden \`super()\` (no-arg) call automatically.
- \`super(...)\` **must be the first statement** in the child constructor.

\`\`\`java
class Person {
    String name;
    Person(String name) {
        this.name = name;
        System.out.println("Person constructor");
    }
}

class Student extends Person {
    int roll;
    Student(String name, int roll) {
        super(name);   // must be first line - initializes parent
        this.roll = roll;
        System.out.println("Student constructor");
    }
}

public class Main {
    public static void main(String[] args) {
        Student s = new Student("Rahul", 101);
        // Output:
        // Person constructor
        // Student constructor
    }
}
\`\`\`

**Significance:** the parent is always built before the child, ensuring inherited fields are ready before the child uses them.`,
  },
  {
    id: "pq-method-overriding",
    moduleId: "m3",
    topicId: "inheritance-super-overriding-dispatch",
    co: "CO2",
    marks: "5 marks",
    frequency: "Appeared in 2/3 papers",
    question: "Demonstrate method overriding in Java.",
    answer: `## Method Overriding

Method overriding = a subclass provides its **own version** of a method that is already defined in the parent class, with the **same name and same parameters**. It is the basis of **runtime polymorphism**.

### Rules

- Same method signature (name + parameters).
- Cannot reduce visibility (e.g. public to private is not allowed).
- \`static\` and \`final\` methods cannot be overridden.
- Use \`@Override\` to let the compiler verify it.

\`\`\`java
class Animal {
    void sound() {
        System.out.println("Some generic sound");
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

public class Main {
    public static void main(String[] args) {
        Animal a = new Dog();
        a.sound();   // Bark  (decided at runtime)

        a = new Cat();
        a.sound();   // Meow
    }
}
\`\`\`

**Output:** \`Bark\` then \`Meow\`. The JVM picks the method based on the **actual object**, not the reference type.`,
  },
  {
    id: "pq-exception-vs-error",
    moduleId: "m4",
    topicId: "exception-handling-core",
    co: "CO3",
    marks: "5 marks",
    frequency: "Appeared in 2/3 papers",
    question: "Differentiate between Exception and Error with an example.",
    answer: `## Exception vs Error

Both \`Exception\` and \`Error\` are subclasses of \`Throwable\`, but they are very different.

| Point | Exception | Error |
|-------|-----------|-------|
| Cause | Problem in program logic / input | Serious problem in the JVM/system |
| Recoverable? | Yes - can be handled | No - usually fatal |
| Handle with try/catch? | Yes, should | No, not meant to |
| Examples | IOException, ArithmeticException | OutOfMemoryError, StackOverflowError |

### Example - Exception (recoverable)

\`\`\`java
try {
    int x = 10 / 0;   // ArithmeticException
} catch (ArithmeticException e) {
    System.out.println("Handled: " + e.getMessage());
}
\`\`\`

### Example - Error (not recoverable)

\`\`\`java
public class Demo {
    static void recurse() {
        recurse();   // infinite recursion -> StackOverflowError
    }
    public static void main(String[] args) {
        recurse();
    }
}
\`\`\`

**Summary:** Exceptions are conditions a program can catch and recover from; Errors signal severe failures the program should not try to handle.`,
  },
  {
    id: "pq-multithreading-ways",
    moduleId: "m5",
    topicId: "threads-model-creation-join-sync",
    co: "CO4",
    marks: "5 marks",
    frequency: "Appeared in 2/3 papers",
    question: "Discuss the ways to implement multithreading in Java.",
    answer: `## Ways to Create Threads in Java

There are two main ways to implement multithreading.

### 1. Extending the Thread class

\`\`\`java
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread by extending Thread");
    }
}
new MyThread().start();
\`\`\`

### 2. Implementing the Runnable interface (preferred)

\`\`\`java
class MyTask implements Runnable {
    public void run() {
        System.out.println("Thread by implementing Runnable");
    }
}
new Thread(new MyTask()).start();
\`\`\`

### Comparison

| Point | Extends Thread | Implements Runnable |
|-------|----------------|---------------------|
| Inheritance | Uses up the single \`extends\` slot | Class is free to extend another class |
| Reuse | Less flexible | More flexible (preferred) |
| Start | \`obj.start()\` | \`new Thread(obj).start()\` |

**Note:** always call \`start()\`, never \`run()\` directly. \`start()\` creates a new thread; \`run()\` would just run on the current thread. A lambda \`new Thread(() -> {...})\` is a short form of Runnable.`,
  },
  {
    id: "pq-import-packages",
    moduleId: "m3",
    topicId: "packages-import-member-access",
    co: "CO2",
    marks: "5 marks",
    frequency: "High likelihood",
    question: "Explain the various ways to import packages, with examples.",
    answer: `## Ways to Import Packages

A package is a group of related classes. The \`import\` statement lets you use classes from another package without writing the full name each time.

### 1. Single Class Import

\`\`\`java
import java.util.Scanner;
import java.util.ArrayList;
\`\`\`

Brings in exactly one class.

### 2. Wildcard Import

\`\`\`java
import java.util.*;   // all classes of java.util
\`\`\`

Brings in every class of the package (but not sub-packages). It does **not** make the program slower; only the names that are used are loaded.

### 3. Static Import (Java 5+)

\`\`\`java
import static java.lang.Math.PI;
import static java.lang.Math.sqrt;

public class Demo {
    public static void main(String[] args) {
        System.out.println(PI);        // instead of Math.PI
        System.out.println(sqrt(16));  // instead of Math.sqrt(16)
    }
}
\`\`\`

### 4. Fully Qualified Name (no import)

\`\`\`java
java.util.Scanner sc = new java.util.Scanner(System.in);
\`\`\`

You can skip \`import\` by writing the full package path. Note: classes in \`java.lang\` (like String, System, Math) are imported automatically.`,
  },
  {
    id: "pq-final-keyword",
    moduleId: "m3",
    topicId: "abstract-final-in-inheritance",
    co: "CO2",
    marks: "9 marks",
    frequency: "High likelihood",
    question: "Illustrate the role of the final keyword on data, methods and class with examples.",
    answer: `## The final Keyword

\`final\` means "cannot be changed". It behaves differently on a variable, a method, and a class.

### 1. final Variable (Constant)

Once assigned, its value cannot change.

\`\`\`java
class Circle {
    final double PI = 3.14159;   // constant
    double area(double r) {
        // PI = 3.14;  // ERROR - cannot reassign
        return PI * r * r;
    }
}
\`\`\`

A \`final\` reference variable cannot point to a new object, but the object's fields can still change.

### 2. final Method (Cannot Override)

\`\`\`java
class Parent {
    final void show() {
        System.out.println("Parent show");
    }
}

class Child extends Parent {
    // void show() { }   // ERROR - cannot override a final method
}
\`\`\`

Use it to lock important behavior that subclasses must not change.

### 3. final Class (Cannot Extend)

\`\`\`java
final class Helper {
    // no class can extend Helper
}

// class Sub extends Helper { }   // ERROR
\`\`\`

\`String\`, \`Integer\`, and the other wrapper classes are final in Java.

### Summary

| Used On | Meaning |
|---------|---------|
| variable | value becomes a constant |
| method | cannot be overridden |
| class | cannot be inherited |

A class cannot be both \`abstract\` and \`final\` - they contradict each other.`,
  },
  {
    id: "pq-inheritance-benefits-forms",
    moduleId: "m3",
    topicId: "inheritance-super-overriding-dispatch",
    co: "CO2",
    marks: "9 marks",
    frequency: "Appeared in 2/3 papers",
    question: "Describe the benefits of inheritance and sketch the various forms of inheritance with code.",
    answer: `## Inheritance - Benefits and Forms

**Inheritance** lets one class acquire the fields and methods of another class using the \`extends\` keyword. It models an **IS-A** relationship.

### Benefits

1. **Code reuse** - the child reuses the parent's code instead of rewriting it.
2. **Method overriding** - the child can customize inherited behavior (runtime polymorphism).
3. **Extensibility** - new classes are added by extending existing ones.
4. **Maintainability** - common code stays in one place (the parent).

### Forms of Inheritance

**1. Single Inheritance** (A -> B)

\`\`\`java
class Animal { void eat() { System.out.println("eat"); } }
class Dog extends Animal { void bark() { System.out.println("bark"); } }
\`\`\`

**2. Multilevel Inheritance** (A -> B -> C)

\`\`\`java
class Animal { void eat() {} }
class Mammal extends Animal { void walk() {} }
class Dog extends Mammal { void bark() {} }
\`\`\`

**3. Hierarchical Inheritance** (one parent, many children)

\`\`\`java
class Animal { void eat() {} }
class Dog extends Animal { void bark() {} }
class Cat extends Animal { void meow() {} }
\`\`\`

**4. Multiple Inheritance (NOT supported with classes)**

Java does not allow \`class C extends A, B\` because of the **Diamond Problem** (ambiguity over which inherited method to use). It is achieved using **interfaces** instead.

| Form | Supported by classes? |
|------|----------------------|
| Single | Yes |
| Multilevel | Yes |
| Hierarchical | Yes |
| Multiple | No (use interfaces) |
| Hybrid | No (use interfaces) |`,
  },
  {
    id: "pq-exception-techniques",
    moduleId: "m4",
    topicId: "exception-handling-core",
    co: "CO3",
    marks: "9 marks",
    frequency: "Appeared in 2/3 papers",
    question: "Compose the various techniques to handle exceptions in Java.",
    answer: `## Exception Handling Techniques

Java uses five keywords: \`try\`, \`catch\`, \`finally\`, \`throw\`, \`throws\`.

### 1. try-catch

\`\`\`java
try {
    int x = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero");
}
\`\`\`

### 2. Multiple catch

Handle different exception types separately. Child exceptions come first, parent last.

\`\`\`java
try {
    int[] a = {1, 2};
    System.out.println(a[5]);
} catch (ArithmeticException e) {
    System.out.println("Math error");
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Bad index");
} catch (Exception e) {
    System.out.println("General error");
}
\`\`\`

### 3. Nested try

A \`try\` block inside another \`try\` block.

### 4. finally

Always runs - used for cleanup (closing files, connections).

\`\`\`java
try { /* risky */ }
catch (Exception e) { /* handle */ }
finally { System.out.println("Always runs"); }
\`\`\`

### 5. throw and throws

- \`throw\` - manually raise an exception inside a method.
- \`throws\` - declare that a method may raise an exception.

\`\`\`java
void check(int age) throws Exception {
    if (age < 0) throw new Exception("Negative age");
}
\`\`\`

### 6. User-defined Exception

\`\`\`java
class MyException extends Exception {
    MyException(String msg) { super(msg); }
}
\`\`\`

| Keyword | Role |
|---------|------|
| try | wrap risky code |
| catch | handle a thrown exception |
| finally | always execute (cleanup) |
| throw | raise an exception manually |
| throws | declare possible exceptions |`,
  },
  {
    id: "pq-packages-scenario",
    moduleId: "m3",
    topicId: "packages-import-member-access",
    co: "CO2",
    marks: "9 marks",
    frequency: "High likelihood",
    question: "Develop a scenario where packages are crucial for code organization.",
    answer: `## Scenario - A College Management System

Imagine a large **College Management System**. If all classes sit in one folder with no packages, names clash and the code becomes hard to navigate. Packages solve this by grouping related classes.

### Package Layout

\`\`\`
com.college.student   -> Student, StudentDAO
com.college.teacher   -> Teacher, TeacherDAO
com.college.exam      -> Exam, Result
com.college.util      -> DateUtil, Validator
\`\`\`

### Code

\`\`\`java
// File: com/college/student/Student.java
package com.college.student;

public class Student {
    public String name;
    public int roll;
    public Student(String name, int roll) {
        this.name = name;
        this.roll = roll;
    }
}
\`\`\`

\`\`\`java
// File: com/college/exam/Result.java
package com.college.exam;

import com.college.student.Student;   // import from another package

public class Result {
    public void publish(Student s, double marks) {
        System.out.println(s.name + " scored " + marks);
    }
}
\`\`\`

### Why Packages Are Crucial Here

1. **No name clashes** - two teams can both have a class named \`Result\` in different packages.
2. **Organization** - related classes are grouped logically.
3. **Access control** - \`public\`/\`protected\`/default decide what other packages can use.
4. **Reuse** - the \`util\` package is shared across the whole project.
5. **Easier maintenance** - changes stay local to a package.`,
  },
  {
    id: "pq-init-object",
    moduleId: "m2",
    topicId: "classes-objects-constructors-this",
    co: "CO1",
    marks: "6 marks",
    frequency: "High likelihood",
    question: "Explain the various ways to initialize an object of a class.",
    answer: `## Ways to Initialize an Object

After creating an object with \`new\`, its fields can be initialized in several ways.

### 1. Using a Constructor

\`\`\`java
class Student {
    String name;
    int roll;
    Student(String name, int roll) {
        this.name = name;
        this.roll = roll;
    }
}
Student s = new Student("Rahul", 101);   // via constructor
\`\`\`

### 2. Direct Field Assignment

\`\`\`java
Student s = new Student();
s.name = "Priya";
s.roll = 102;
\`\`\`

### 3. Instance Initializer Block

Runs every time an object is created, before the constructor body.

\`\`\`java
class Demo {
    int x;
    { x = 10; }      // instance initializer block
}
\`\`\`

### 4. Default Values

If you do not initialize, Java gives defaults: \`0\` for numbers, \`false\` for boolean, \`null\` for objects.

### 5. Using a Method (Setter)

\`\`\`java
Student s = new Student();
s.setName("Amit");   // setter method
\`\`\`

| Way | When Used |
|-----|-----------|
| Constructor | most common, set values at creation |
| Direct assignment | quick, for public fields |
| Initializer block | shared init for all constructors |
| Default values | when nothing is assigned |
| Setter method | controlled, with validation |`,
  },
  {
    id: "pq-constructor-types",
    moduleId: "m2",
    topicId: "classes-objects-constructors-this",
    co: "CO1",
    marks: "6 marks",
    frequency: "Appeared in 2/3 papers",
    question: "Paraphrase the different types of constructors in Java.",
    answer: `## Types of Constructors

A **constructor** is a special method, with the same name as the class and no return type, that runs automatically when an object is created.

### 1. Default (No-arg) Constructor

\`\`\`java
class Student {
    String name;
    Student() {           // no parameters
        name = "Unknown";
    }
}
\`\`\`

If you write no constructor at all, Java provides an invisible default one.

### 2. Parameterized Constructor

\`\`\`java
class Student {
    String name;
    int roll;
    Student(String name, int roll) {   // takes parameters
        this.name = name;
        this.roll = roll;
    }
}
\`\`\`

### 3. Copy Constructor

Creates a new object by copying another object's values.

\`\`\`java
class Student {
    String name;
    int roll;
    Student(String name, int roll) { this.name = name; this.roll = roll; }
    Student(Student other) {            // copy constructor
        this.name = other.name;
        this.roll = other.roll;
    }
}
\`\`\`

| Type | Parameters | Purpose |
|------|------------|---------|
| Default | none | set default values |
| Parameterized | yes | set custom values at creation |
| Copy | another object | duplicate an existing object |

Constructors can be overloaded - a class can have many constructors with different parameter lists. \`this()\` can call one constructor from another.`,
  },
  {
    id: "pq-dynamic-dispatch",
    moduleId: "m3",
    topicId: "inheritance-super-overriding-dispatch",
    co: "CO2",
    marks: "9 marks",
    frequency: "High likelihood",
    question: "Explain dynamic method dispatch in Java with an example.",
    answer: `## Dynamic Method Dispatch

**Dynamic method dispatch** is the mechanism by which a call to an overridden method is resolved at **runtime**, not at compile time. It is how Java implements **runtime polymorphism**.

### How It Works

- A parent reference can point to a child object.
- When you call an overridden method, the **JVM looks at the actual object** (not the reference type) and runs that object's version.

\`\`\`java
class Shape {
    void draw() { System.out.println("Drawing a shape"); }
}

class Circle extends Shape {
    @Override
    void draw() { System.out.println("Drawing a circle"); }
}

class Square extends Shape {
    @Override
    void draw() { System.out.println("Drawing a square"); }
}

public class Main {
    public static void main(String[] args) {
        Shape s;          // parent reference

        s = new Circle();
        s.draw();         // Drawing a circle

        s = new Square();
        s.draw();         // Drawing a square
    }
}
\`\`\`

### Key Points

- The **reference type** decides which methods can be called.
- The **object type** decides which version actually runs.
- Only overridden (non-static, non-final) instance methods are dispatched dynamically.

This lets you write code against a general type (\`Shape\`) and still get specific behavior at runtime.`,
  },
  {
    id: "pq-abstract-vs-interface",
    moduleId: "m3",
    topicId: "interfaces-default-static-private-methods",
    co: "CO2",
    marks: "9 marks",
    frequency: "High likelihood",
    question: "Compare an abstract class and an interface. When should each be used?",
    answer: `## Abstract Class vs Interface

Both let you define methods without bodies, but they serve different purposes.

| Feature | Abstract Class | Interface |
|---------|----------------|-----------|
| Methods | abstract + concrete | abstract + default + static + private |
| Variables | any type | public static final only (constants) |
| Constructor | Yes | No |
| Multiple inheritance | No (one parent) | Yes (many interfaces) |
| Keyword | \`extends\` | \`implements\` |
| Access modifiers on methods | any | public (default) |

### Abstract Class Example

\`\`\`java
abstract class Animal {
    String name;                 // normal field
    Animal(String n) { name = n; }
    abstract void sound();       // no body
    void sleep() { System.out.println("sleeping"); }   // concrete
}
\`\`\`

### Interface Example

\`\`\`java
interface Drawable {
    void draw();                                  // abstract
    default void info() { System.out.println("a shape"); }  // default (Java 8)
    static String version() { return "1.0"; }     // static (Java 8)
}
\`\`\`

### When to Use Which

- **Abstract class** - when classes are closely related and share common state/code (e.g. \`Animal\` -> \`Dog\`, \`Cat\`).
- **Interface** - when unrelated classes share a capability, or you need multiple inheritance of type (e.g. \`Drawable\`, \`Comparable\`).

**Rule of thumb:** abstract class models an **IS-A** relationship with shared code; an interface models a **CAN-DO** capability.`,
  },
  {
    id: "pq-string-immutability",
    moduleId: "m4",
    topicId: "strings-stringbuffer",
    co: "CO3",
    marks: "9 marks",
    frequency: "High likelihood",
    question: "Explain String immutability and compare String, StringBuffer, and StringBuilder.",
    answer: `## String Immutability

A \`String\` object **cannot be changed** after it is created. Any operation that looks like a change actually creates a **new** String object.

\`\`\`java
String s = "Hello";
s = s + " World";   // a NEW object is created; "Hello" is left for GC
\`\`\`

### Why Strings Are Immutable

1. **Security** - safe to use for passwords, file paths, network connections.
2. **Thread safety** - can be shared between threads without locking.
3. **String pool** - identical literals are reused, saving memory.
4. **Hashing** - the hash code is cached, so Strings work well as HashMap keys.

## String vs StringBuffer vs StringBuilder

| Feature | String | StringBuffer | StringBuilder |
|---------|--------|--------------|---------------|
| Mutable | No | Yes | Yes |
| Thread-safe | Yes (immutable) | Yes (synchronized) | No |
| Speed | slow for many edits | medium | fast |
| Since | Java 1.0 | Java 1.0 | Java 5 |

### When to Use

- **String** - text that never changes.
- **StringBuilder** - many modifications in a single thread (most common).
- **StringBuffer** - many modifications shared across multiple threads.

\`\`\`java
StringBuilder sb = new StringBuilder("Hello");
sb.append(" World");   // modifies the same object, no new object
System.out.println(sb);  // Hello World
\`\`\``,
  },
  {
    id: "pq-generics-bounded",
    moduleId: "m4",
    topicId: "generics-intro",
    co: "CO3",
    marks: "9 marks",
    frequency: "High likelihood",
    question: "Explain generics and bounded type parameters with examples.",
    answer: `## Generics

**Generics** let a class, interface, or method work with a **type parameter** chosen by the user, giving **compile-time type safety** and removing the need for casts.

### Generic Class

\`\`\`java
class Box<T> {
    private T item;
    public void set(T item) { this.item = item; }
    public T get() { return item; }
}

Box<String> b = new Box<>();
b.set("Hello");
String s = b.get();   // no cast needed
\`\`\`

### Two Type Parameters

\`\`\`java
class Pair<K, V> {
    private K key;
    private V value;
    public Pair(K k, V v) { key = k; value = v; }
    public K getKey() { return key; }
    public V getValue() { return value; }
}

Pair<String, Integer> p = new Pair<>("Rahul", 101);
\`\`\`

## Bounded Type Parameters

A bound restricts which types are allowed using \`extends\`.

\`\`\`java
// T must be Number or a subclass of Number
class Stats<T extends Number> {
    private T value;
    Stats(T v) { value = v; }
    double asDouble() { return value.doubleValue(); }  // Number method available
}

Stats<Integer> a = new Stats<>(10);   // valid
Stats<Double> c = new Stats<>(3.14);  // valid
// Stats<String> d;                   // ERROR - String is not a Number
\`\`\`

### Wildcards

- \`? extends Number\` - upper bound: Number and its subtypes.
- \`? super Integer\` - lower bound: Integer and its supertypes.

**Benefit:** errors are caught at compile time, code is reusable across types, and no manual casting is needed.`,
  },
  {
    id: "pq-synchronization",
    moduleId: "m5",
    topicId: "threads-model-creation-join-sync",
    co: "CO4",
    marks: "9 marks",
    frequency: "High likelihood",
    question: "What is a race condition? Explain synchronization in Java with an example.",
    answer: `## Race Condition

A **race condition** happens when two or more threads access **shared data** at the same time, and the final result depends on the unpredictable timing of their operations. Because \`count++\` is really three steps (read, add, write), threads can overwrite each other's work.

\`\`\`java
class Counter {
    int count = 0;
    void increment() { count++; }   // not atomic -> race condition
}
\`\`\`

If two threads each call \`increment()\` 1000 times, the result may be **less than 2000**.

## Synchronization

**Synchronization** allows only **one thread at a time** to enter a critical section, using a lock (monitor) on an object.

### 1. Synchronized Method

\`\`\`java
class Counter {
    int count = 0;
    synchronized void increment() {   // only one thread at a time
        count++;
    }
}
\`\`\`

### 2. Synchronized Block

\`\`\`java
class Counter {
    int count = 0;
    final Object lock = new Object();
    void increment() {
        synchronized (lock) {
            count++;
        }
    }
}
\`\`\`

### Result

With synchronization, two threads each incrementing 1000 times always give exactly **2000**, because only one thread can update \`count\` at any instant.

| Without sync | With sync |
|--------------|-----------|
| race condition | safe |
| result < 2000 | result = 2000 |
| fast but wrong | correct |`,
  },
  {
    id: "pq-type-casting",
    moduleId: "m2",
    topicId: "datatypes-casting-arrays",
    co: "CO1",
    marks: "6 marks",
    frequency: "High likelihood",
    question: "Explain type conversion and casting (widening and narrowing) in Java.",
    answer: `## Type Conversion and Casting

Java can convert one data type to another in two ways.

### 1. Widening (Implicit / Automatic)

Converting a **smaller** type to a **larger** type. The compiler does it automatically; **no data is lost**.

\`\`\`
byte -> short -> int -> long -> float -> double
\`\`\`

\`\`\`java
int i = 100;
long l = i;       // int -> long, automatic
double d = l;     // long -> double, automatic
System.out.println(d);   // 100.0
\`\`\`

### 2. Narrowing (Explicit / Manual)

Converting a **larger** type to a **smaller** type. You must use a **cast operator**; **data may be lost**.

\`\`\`java
double d = 99.99;
int i = (int) d;     // cast required
System.out.println(i);   // 99  (decimal part lost)

int big = 300;
byte b = (byte) big;
System.out.println(b);   // 44  (overflow)
\`\`\`

### Comparison

| Point | Widening | Narrowing |
|-------|----------|-----------|
| Direction | small -> large | large -> small |
| Cast needed | No | Yes |
| Data loss | No | Possible |
| Example | \`int\` to \`double\` | \`double\` to \`int\` |

**Note:** \`boolean\` cannot be converted to or from any other primitive type.`,
  },
];

export const predictedPrograms: PredictedProgram[] = [
  {
    id: "pp-userdefined-exception-age",
    moduleId: "m4",
    topicId: "exception-handling-core",
    co: "CO3",
    marks: "9 marks",
    frequency: "Appeared in 2/3 papers — very likely",
    title: "User-defined exception for negative age",
    statement:
      "Write a Java program that reads a name and age. If the age is negative, throw a user-defined exception; otherwise print the details.",
    code: `import java.util.Scanner;

// User-defined (custom) exception
class NegativeAgeException extends Exception {
    public NegativeAgeException(String message) {
        super(message);
    }
}

public class AgeValidation {
    static void validate(String name, int age) throws NegativeAgeException {
        if (age < 0) {
            throw new NegativeAgeException("Age cannot be negative: " + age);
        }
        System.out.println("Name: " + name + ", Age: " + age);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter name: ");
        String name = sc.nextLine();

        System.out.print("Enter age: ");
        int age = sc.nextInt();

        try {
            validate(name, age);
            System.out.println("Valid record.");
        } catch (NegativeAgeException e) {
            System.out.println("Error: " + e.getMessage());
        } finally {
            sc.close();
        }
    }
}`,
    explanation: `## Approach

1. Define \`NegativeAgeException\` by extending \`Exception\` and passing the message to \`super()\`.
2. \`validate()\` declares \`throws NegativeAgeException\` and uses \`throw\` when age is negative.
3. \`main()\` reads input with \`Scanner\`, calls \`validate()\` inside try-catch, and \`finally\` closes the scanner.

## Sample Output

\`\`\`
Enter name: Rahul
Enter age: -5
Error: Age cannot be negative: -5
\`\`\`

For a valid age it prints the name and age followed by "Valid record."`,
  },
  {
    id: "pp-abstract-shapes-area",
    moduleId: "m3",
    topicId: "abstract-final-in-inheritance",
    co: "CO3",
    marks: "6 marks",
    frequency: "High likelihood",
    title: "Abstract class TwoDShapes with area",
    statement:
      "Create an abstract class TwoDShapes with subclasses Rectangle and Circle that compute and display the area.",
    code: `abstract class TwoDShapes {
    double dim1;
    double dim2;

    TwoDShapes(double a, double b) {
        dim1 = a;
        dim2 = b;
    }

    // Abstract method - each shape defines its own area
    abstract double area();
}

class Rectangle extends TwoDShapes {
    Rectangle(double length, double width) {
        super(length, width);
    }

    @Override
    double area() {
        return dim1 * dim2;
    }
}

class Circle extends TwoDShapes {
    Circle(double radius) {
        super(radius, radius);   // only one dimension is needed
    }

    @Override
    double area() {
        return Math.PI * dim1 * dim1;
    }
}

public class ShapeArea {
    public static void main(String[] args) {
        TwoDShapes[] shapes = {
            new Rectangle(4, 6),
            new Circle(5)
        };

        for (TwoDShapes s : shapes) {
            System.out.println(s.getClass().getSimpleName()
                + " area = " + s.area());
        }
    }
}`,
    explanation: `## Approach

1. \`TwoDShapes\` is abstract and holds two dimensions plus an abstract \`area()\` method.
2. \`Rectangle\` returns \`length * width\`; \`Circle\` returns \`PI * r * r\`.
3. An array of \`TwoDShapes\` holds both objects; the loop uses **dynamic dispatch** to call each shape's \`area()\`.

## Sample Output

\`\`\`
Rectangle area = 24.0
Circle area = 78.53981633974483
\`\`\``,
  },
  {
    id: "pp-forms-of-inheritance",
    moduleId: "m3",
    topicId: "inheritance-super-overriding-dispatch",
    co: "CO2",
    marks: "9 marks",
    frequency: "High likelihood",
    title: "Forms of inheritance (single, multilevel, hierarchical)",
    statement:
      "Write a Java program to demonstrate single, multilevel, and hierarchical inheritance.",
    code: `// Base class
class Animal {
    void eat() {
        System.out.println("Animal eats food");
    }
}

// --- Single inheritance: Dog -> Animal ---
class Dog extends Animal {
    void bark() {
        System.out.println("Dog barks");
    }
}

// --- Multilevel inheritance: Puppy -> Dog -> Animal ---
class Puppy extends Dog {
    void weep() {
        System.out.println("Puppy weeps");
    }
}

// --- Hierarchical inheritance: Cat -> Animal (same parent as Dog) ---
class Cat extends Animal {
    void meow() {
        System.out.println("Cat meows");
    }
}

public class InheritanceForms {
    public static void main(String[] args) {
        System.out.println("Single inheritance:");
        Dog d = new Dog();
        d.eat();    // inherited
        d.bark();

        System.out.println("\\nMultilevel inheritance:");
        Puppy p = new Puppy();
        p.eat();    // from Animal
        p.bark();   // from Dog
        p.weep();   // own

        System.out.println("\\nHierarchical inheritance:");
        Cat c = new Cat();
        c.eat();    // inherited
        c.meow();
    }
}`,
    explanation: `## Approach

- **Single:** \`Dog extends Animal\`.
- **Multilevel:** \`Puppy extends Dog extends Animal\` (a chain).
- **Hierarchical:** \`Dog\` and \`Cat\` both extend the same parent \`Animal\`.

## Sample Output

\`\`\`
Single inheritance:
Animal eats food
Dog barks

Multilevel inheritance:
Animal eats food
Dog barks
Puppy weeps

Hierarchical inheritance:
Animal eats food
Cat meows
\`\`\``,
  },
  {
    id: "pp-overload-override",
    moduleId: "m1",
    topicId: "inheritance-polymorphism",
    co: "CO2",
    marks: "9 marks",
    frequency: "High likelihood",
    title: "Method overloading and method overriding",
    statement:
      "Write a Java program to demonstrate both method overloading (compile-time polymorphism) and method overriding (runtime polymorphism).",
    code: `class Calculator {
    // Overloading - same name, different parameters
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }
}

class Shape {
    void draw() {
        System.out.println("Drawing a generic shape");
    }
}

class Circle extends Shape {
    // Overriding - same signature, new behavior
    @Override
    void draw() {
        System.out.println("Drawing a circle");
    }
}

public class PolymorphismDemo {
    public static void main(String[] args) {
        System.out.println("--- Overloading ---");
        Calculator calc = new Calculator();
        System.out.println(calc.add(5, 10));        // int version
        System.out.println(calc.add(2.5, 3.5));     // double version
        System.out.println(calc.add(1, 2, 3));      // three-arg version

        System.out.println("--- Overriding ---");
        Shape s = new Shape();
        s.draw();              // generic shape
        s = new Circle();
        s.draw();              // circle (runtime dispatch)
    }
}`,
    explanation: `## Approach

- **Overloading:** three \`add\` methods in the same class differ by parameter list. The compiler picks the right one (compile-time polymorphism).
- **Overriding:** \`Circle\` redefines \`draw()\`. The JVM picks the version based on the actual object (runtime polymorphism).

## Sample Output

\`\`\`
--- Overloading ---
15
6.0
6
--- Overriding ---
Drawing a generic shape
Drawing a circle
\`\`\``,
  },
  {
    id: "pp-thread-runnable-join",
    moduleId: "m5",
    topicId: "threads-model-creation-join-sync",
    co: "CO4",
    marks: "9 marks",
    frequency: "High likelihood",
    title: "Threads via Thread class and Runnable with join/isAlive",
    statement:
      "Write a Java program that creates threads using both the Thread class and the Runnable interface, and uses join() and isAlive().",
    code: `// Way 1: extend Thread
class ThreadOne extends Thread {
    public void run() {
        for (int i = 1; i <= 3; i++) {
            System.out.println("ThreadOne: " + i);
        }
    }
}

// Way 2: implement Runnable
class TaskTwo implements Runnable {
    public void run() {
        for (int i = 1; i <= 3; i++) {
            System.out.println("TaskTwo: " + i);
        }
    }
}

public class ThreadDemo {
    public static void main(String[] args) throws InterruptedException {
        ThreadOne t1 = new ThreadOne();
        Thread t2 = new Thread(new TaskTwo());

        t1.start();
        t2.start();

        System.out.println("t1 alive? " + t1.isAlive());

        // Wait for both threads to finish
        t1.join();
        t2.join();

        System.out.println("t1 alive after join? " + t1.isAlive());
        System.out.println("Both threads finished.");
    }
}`,
    explanation: `## Approach

1. \`ThreadOne\` extends \`Thread\`; \`TaskTwo\` implements \`Runnable\` and is wrapped in a \`Thread\`.
2. \`start()\` launches both. \`isAlive()\` checks whether a thread is still running.
3. \`join()\` makes \`main\` wait until both threads complete before printing the final message.

## Sample Output (order may vary)

\`\`\`
ThreadOne: 1
TaskTwo: 1
t1 alive? true
ThreadOne: 2
...
t1 alive after join? false
Both threads finished.
\`\`\``,
  },
  {
    id: "pp-synchronization-counter",
    moduleId: "m5",
    topicId: "threads-model-creation-join-sync",
    co: "CO4",
    marks: "9 marks",
    frequency: "High likelihood",
    title: "Fix a race condition with synchronization",
    statement:
      "Write a Java program where two threads increment a shared counter, and fix the race condition using synchronization.",
    code: `class Counter {
    private int count = 0;

    // synchronized: only one thread can run this at a time
    synchronized void increment() {
        count++;
    }

    int getCount() {
        return count;
    }
}

public class SyncDemo {
    public static void main(String[] args) throws InterruptedException {
        Counter counter = new Counter();

        Runnable task = () -> {
            for (int i = 0; i < 100000; i++) {
                counter.increment();
            }
        };

        Thread t1 = new Thread(task);
        Thread t2 = new Thread(task);

        t1.start();
        t2.start();

        t1.join();
        t2.join();

        // With synchronization this is always 200000
        System.out.println("Final count: " + counter.getCount());
    }
}`,
    explanation: `## Approach

1. \`increment()\` is declared \`synchronized\`, so only one thread updates \`count\` at a time.
2. Both threads run the same task 100000 times each.
3. \`join()\` ensures \`main\` reads the count only after both threads finish.

## Why It Works

\`count++\` is not atomic (read-add-write). Without \`synchronized\`, threads overwrite each other and the result is **less than 200000** (a race condition). With \`synchronized\`, the result is always exactly **200000**.`,
  },
  {
    id: "pp-file-printwriter-bufferedreader",
    moduleId: "m5",
    topicId: "io-console-files-printwriter",
    co: "CO4",
    marks: "9 marks",
    frequency: "High likelihood",
    title: "Write a file with PrintWriter, read it with BufferedReader",
    statement:
      "Write a Java program to write lines to a file using PrintWriter and then read them back using BufferedReader.",
    code: `import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintWriter;

public class FileReadWrite {
    public static void main(String[] args) {
        String fileName = "data.txt";

        // Write to the file using PrintWriter
        try (PrintWriter pw = new PrintWriter(fileName)) {
            pw.println("Hello, World!");
            pw.println("Java File I/O");
            pw.println("Line three");
        } catch (IOException e) {
            System.out.println("Write error: " + e.getMessage());
        }

        // Read it back using BufferedReader
        try (BufferedReader br = new BufferedReader(new FileReader(fileName))) {
            String line;
            System.out.println("File contents:");
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.out.println("Read error: " + e.getMessage());
        }
    }
}`,
    explanation: `## Approach

1. \`PrintWriter\` writes three lines; try-with-resources auto-closes it (which flushes the data to disk).
2. \`BufferedReader\` wraps a \`FileReader\` and reads line by line until \`readLine()\` returns \`null\` (end of file).

## Sample Output

\`\`\`
File contents:
Hello, World!
Java File I/O
Line three
\`\`\``,
  },
  {
    id: "pp-generic-pair",
    moduleId: "m4",
    topicId: "generics-intro",
    co: "CO3",
    marks: "6 marks",
    frequency: "High likelihood",
    title: "Generic class Pair<K,V> with two type parameters",
    statement:
      "Write a generic class Pair with two type parameters K and V, and demonstrate it with different types.",
    code: `class Pair<K, V> {
    private K key;
    private V value;

    public Pair(K key, V value) {
        this.key = key;
        this.value = value;
    }

    public K getKey() {
        return key;
    }

    public V getValue() {
        return value;
    }

    @Override
    public String toString() {
        return "(" + key + ", " + value + ")";
    }
}

public class GenericPairDemo {
    public static void main(String[] args) {
        Pair<String, Integer> student = new Pair<>("Rahul", 101);
        Pair<Integer, String> rank = new Pair<>(1, "Gold");

        System.out.println("Student: " + student);
        System.out.println("Name = " + student.getKey()
            + ", Roll = " + student.getValue());

        System.out.println("Rank: " + rank);
    }
}`,
    explanation: `## Approach

1. \`Pair<K, V>\` declares two type parameters set when an object is created.
2. \`getKey()\`/\`getValue()\` return the stored values with no casting.
3. The demo creates a \`Pair<String, Integer>\` and a \`Pair<Integer, String>\` to show reuse across types.

## Sample Output

\`\`\`
Student: (Rahul, 101)
Name = Rahul, Roll = 101
Rank: (1, Gold)
\`\`\``,
  },
  {
    id: "pp-constructor-types",
    moduleId: "m2",
    topicId: "classes-objects-constructors-this",
    co: "CO1",
    marks: "6 marks",
    frequency: "High likelihood",
    title: "Types of constructors with this()",
    statement:
      "Write a Java program to demonstrate default, parameterized, and copy constructors, and the use of this().",
    code: `class Student {
    String name;
    int roll;

    // Default constructor - calls the parameterized one using this()
    Student() {
        this("Unknown", 0);
        System.out.println("Default constructor");
    }

    // Parameterized constructor
    Student(String name, int roll) {
        this.name = name;
        this.roll = roll;
        System.out.println("Parameterized constructor");
    }

    // Copy constructor
    Student(Student other) {
        this.name = other.name;
        this.roll = other.roll;
        System.out.println("Copy constructor");
    }

    void show() {
        System.out.println("Name: " + name + ", Roll: " + roll);
    }
}

public class ConstructorDemo {
    public static void main(String[] args) {
        Student s1 = new Student();              // default
        Student s2 = new Student("Rahul", 101);  // parameterized
        Student s3 = new Student(s2);            // copy

        s1.show();
        s2.show();
        s3.show();
    }
}`,
    explanation: `## Approach

1. The **default** constructor calls the **parameterized** one with \`this("Unknown", 0)\` - constructor chaining.
2. The **parameterized** constructor sets fields using \`this\` to resolve name conflicts.
3. The **copy** constructor copies values from another \`Student\`.

## Sample Output

\`\`\`
Parameterized constructor
Default constructor
Parameterized constructor
Copy constructor
Name: Unknown, Roll: 0
Name: Rahul, Roll: 101
Name: Rahul, Roll: 101
\`\`\``,
  },
  {
    id: "pp-scanner-cli-args",
    moduleId: "m2",
    topicId: "methods-overloading-access-static-final-cli",
    co: "CO2",
    marks: "6 marks",
    frequency: "High likelihood",
    title: "Read input via Scanner and command-line arguments",
    statement:
      "Write a Java program that reads numbers using command-line arguments and also reads a number using Scanner, then prints the sum.",
    code: `import java.util.Scanner;

public class InputDemo {
    public static void main(String[] args) {
        int sum = 0;

        // 1. Read from command-line arguments
        System.out.println("Command-line arguments: " + args.length);
        for (int i = 0; i < args.length; i++) {
            int n = Integer.parseInt(args[i]);   // String -> int
            sum += n;
            System.out.println("args[" + i + "] = " + n);
        }

        // 2. Read from the console using Scanner
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter one more number: ");
        int extra = sc.nextInt();
        sum += extra;

        System.out.println("Total sum = " + sum);
        sc.close();
    }
}`,
    explanation: `## Approach

1. Command-line arguments arrive in \`args[]\` as Strings; \`Integer.parseInt\` converts each to an int.
2. \`Scanner\` reads one more integer from the console.
3. All values are added into \`sum\`.

## Sample Run

\`\`\`
> java InputDemo 10 20
Command-line arguments: 2
args[0] = 10
args[1] = 20
Enter one more number: 5
Total sum = 35
\`\`\``,
  },
  {
    id: "pp-stringbuffer-ops",
    moduleId: "m4",
    topicId: "strings-stringbuffer",
    co: "CO3",
    marks: "6 marks",
    frequency: "High likelihood",
    title: "StringBuffer operations: append, insert, reverse, delete",
    statement:
      "Write a Java program to demonstrate StringBuffer operations: append, insert, reverse, and delete.",
    code: `public class StringBufferDemo {
    public static void main(String[] args) {
        StringBuffer sb = new StringBuffer("Hello");

        // append
        sb.append(" World");
        System.out.println("After append: " + sb);   // Hello World

        // insert
        sb.insert(5, ",");
        System.out.println("After insert: " + sb);    // Hello, World

        // delete (removes chars from index 5 to 6)
        sb.delete(5, 6);
        System.out.println("After delete: " + sb);    // Hello World

        // length and capacity
        System.out.println("Length: " + sb.length());

        // reverse
        sb.reverse();
        System.out.println("After reverse: " + sb);    // dlroW olleH
    }
}`,
    explanation: `## Approach

\`StringBuffer\` is mutable, so each operation changes the same object (no new objects are created).

- \`append\` adds text at the end.
- \`insert(index, str)\` inserts at a position.
- \`delete(start, end)\` removes a range.
- \`reverse\` reverses the characters.

## Sample Output

\`\`\`
After append: Hello World
After insert: Hello, World
After delete: Hello World
Length: 11
After reverse: dlroW olleH
\`\`\``,
  },
];

export function getPredictedQuestionsForTopic(topicId: string): PredictedQuestion[] {
  return predictedQuestions.filter((q) => q.topicId === topicId);
}

export function getPredictedProgramsForTopic(topicId: string): PredictedProgram[] {
  return predictedPrograms.filter((p) => p.topicId === topicId);
}

export function getPredictedQuestionsForModule(moduleId: string): PredictedQuestion[] {
  return predictedQuestions.filter((q) => q.moduleId === moduleId);
}

export function getPredictedProgramsForModule(moduleId: string): PredictedProgram[] {
  return predictedPrograms.filter((p) => p.moduleId === moduleId);
}
