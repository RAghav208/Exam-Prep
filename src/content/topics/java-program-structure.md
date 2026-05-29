---
topicId: java-program-structure
moduleId: m2
title: Structure of a Java Program
examWeight: 2-3 marks
keywords: [class, main, public static void main, syntax]
---

# Structure of a Java Program

## Basic Structure

```java
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
```

---

## Components Explained

### 1. Package Declaration
```java
package com.college.exam;
```
- Groups related classes
- Must be first line (before imports)
- Follows naming: com.company.project

### 2. Import Statements
```java
import java.util.Scanner;      // Single class
import java.util.*;           // All classes in package
```
- Brings classes from other packages
- Placed after package, before class

### 3. Class Declaration
```java
public class ClassName {
    // class members
}
```
- Must match filename: ClassName.java
- `public` - accessible everywhere
- `class` - keyword

### 4. Main Method (Entry Point)
```java
public static void main(String[] args)
```
| Part | Meaning |
|------|---------|
| `public` | Accessible from anywhere |
| `static` | No object needed to call |
| `void` | Returns nothing |
| `main` | Method name (reserved) |
| `String[] args` | Command line arguments |

---

## Execution Steps

```
1. Write:    Hello.java
2. Compile:  javac Hello.java → Hello.class
3. Run:      java Hello
4. Output:   Hello World!
```

### Using Scanner for Input

```java
import java.util.Scanner;

public class InputDemo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter name: ");
        String name = sc.nextLine();
        
        System.out.print("Enter age: ");
        int age = sc.nextInt();
        
        System.out.println("Hello " + name + ", Age: " + age);
        
        sc.close();
    }
}
```

**Input/Output:**
```
Enter name: Rahul
Enter age: 21
Hello Rahul, Age: 21
```

---

## Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Class | PascalCase | `StudentInfo` |
| Method | camelCase | `calculateTotal()` |
| Variable | camelCase | `totalMarks` |
| Constant | UPPER_SNAKE | `MAX_VALUE` |
| Package | lowercase | `com.college` |

---

## 2-3 Mark Questions

**Q1: Explain the structure of a Java program with an example.**

**Answer:**

A Java program has following structure:

1. **Package declaration** (optional): Groups classes
   ```java
   package college.exam;
   ```

2. **Import statements** (optional): Use other classes
   ```java
   import java.util.*;
   ```

3. **Class definition:** Blueprint containing data and methods
   ```java
   public class Student {
       // data members
       // member methods
   }
   ```

4. **Main method:** Execution starts here
   ```java
   public static void main(String[] args) {
       // statements
   }
   ```

**Example:**
```java
public class Addition {
    public static void main(String[] args) {
        int a = 10, b = 20;
        int sum = a + b;
        System.out.println("Sum = " + sum);
    }
}
```

---

**Q2: Why is main method declared as public static void?**

**Answer:**

- **public:** JVM must call it from outside the class, hence public
- **static:** JVM calls it without creating object, hence static
- **void:** Main returns nothing to JVM, hence void
- **String[] args:** Accepts command line arguments as array of strings

```java
public static void main(String[] args)
//   ↑      ↑      ↑        ↑
// public    static  return  arguments
// accessible  no object   nothing
// from JVM    needed      returned
```