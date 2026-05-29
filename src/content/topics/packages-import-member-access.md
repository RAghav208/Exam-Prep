---
topicId: packages-import-member-access
moduleId: m3
title: Packages, import, and member access
examWeight: 3-4 marks
keywords: [package, import, access, visibility]
---

# Packages, import, and member access

## Packages

### What is Package?
A **group of related classes and interfaces**. Like folders organizing files.

### Benefits
- **Organization:** Group related classes
- **Naming Conflict:** Prevent class name clashes
- **Access Control:** Package-level protection
- **Encapsulation:** Hide implementation details

### Creating a Package
```java
// File: com/college/student/Student.java
package com.college.student;

public class Student {
    private String name;
    private int rollNo;
    
    public void display() {
        System.out.println(name + ": " + rollNo);
    }
}
```

### Compiling with Package
```bash
# From parent directory of com
javac com/college/student/Student.java
javac -d . com/college/student/Student.java    # . = current dir

# Run with full package name
java com.college.student.Student
```

---

## import Statement

### Types of Import

**1. Single Class Import (Recommended)**
```java
import java.util.Scanner;
import java.util.ArrayList;
```

**2. Wildcard Import**
```java
import java.util.*;  // All classes in util package
```

**3. Static Import**
```java
import static java.lang.Math.PI;
import static java.lang.System.out;

public class Main {
    public static void main(String[] args) {
        out.println(PI);  // Without Math prefix
    }
}
```

### java.lang Package
**Automatically imported** - no need to import:
```java
// These are automatically available:
String, Object, System, Math, Integer, etc.
```

---

## Member Access Control

### Access Levels (Most to Least Restrictive)

| Modifier | Same Class | Same Package | Subclass | Everywhere |
|----------|------------|--------------|----------|------------|
| `private` | ✓ | ✗ | ✗ | ✗ |
| `default` | ✓ | ✓ | ✗ | ✗ |
| `protected` | ✓ | ✓ | ✓ | ✗ |
| `public` | ✓ | ✓ | ✓ | ✓ |

### private
```java
class Account {
    private String password;  // Only accessible in Account
    
    private void validate() {
        // Internal logic
    }
}
```
- Only within same class
- Maximum restriction

### default (Package-private)
```java
// In same package: com.college
class Student {
    int rollNo;  // default - accessible to all in same package
    
    void display() {}  // default - accessible to same package
}
```
- No keyword needed
- Accessible to classes in same package

### protected
```java
class Parent {
    protected int data;  // Accessible in subclass even if different package
    
    protected void show() {}
}
```
- Accessible in same package
- Accessible in subclass (even different package)

### public
```java
public class Main {
    public static void main(String[] args) {}
}
```
- Accessible everywhere

---

## Access Summary Table

```java
package com.college;

public class Parent {
    public int pub = 1;
    protected int prot = 2;
              int pack = 3;  // default
    private int priv = 4;
}
```

```java
package com.college;  // Same package
class SamePackage {
    void access(Parent p) {
        p.pub;    // ✓
        p.prot;  // ✓
        p.pack;  // ✓
        // p.priv; // ✗
    }
}
```

```java
package com.other;    // Different package
import com.college.Parent;

class Subclass extends Parent {  // Different package, subclass
    void access(Parent p) {
        // p.pub;    // ✓ (through inheritance)
        // p.prot;  // ✓ (through inheritance)
        // p.pack;  // ✗
        // p.priv;  // ✗
    }
}
```

---

## Common Packages in Java

| Package | Purpose |
|---------|---------|
| `java.lang` | Core classes (String, Object, Math) |
| `java.util` | Collections, Date, Scanner |
| `java.io` | Input/Output streams |
| `java.net` | Networking |
| `java.applet` | Applets |
| `java.awt` | GUI components |
| `java.text` | Text formatting |

---

## 3-4 Mark Questions

**Q1: Explain the different access modifiers in Java with examples.**

**Answer:**

Java has 4 access modifiers controlling visibility:

**1. private:**
- Accessible only within same class
```java
class A {
    private int x = 10;
    void show() {
        System.out.println(x);  // ✓ OK
    }
}
class B {
    void show() {
        A a = new A();
        // a.x;  // ✗ ERROR: not accessible
    }
}
```

**2. default (package-private):**
- Accessible within same package
```java
// No keyword - default
int x = 10;  // Package-private
```

**3. protected:**
- Same package + subclasses
```java
protected int x = 10;  // Accessible in subclass
```

**4. public:**
- Accessible everywhere
```java
public int x = 10;  // Accessible from any class
```

---

**Q2: What are packages in Java? Explain with an example. How do you use classes from a package?**

**Answer:**

**Package** is a namespace that organizes classes and interfaces.

**Creating a package:**
```java
// File: com/college/Student.java
package com.college;

public class Student {
    private String name;
    public Student(String n) {
        name = n;
    }
    public void display() {
        System.out.println(name);
    }
}
```

**Using classes from a package:**

1. **Import single class:**
```java
import com.college.Student;

public class Main {
    public static void main(String[] args) {
        Student s = new Student("Rahul");
        s.display();
    }
}
```

2. **Import entire package:**
```java
import com.college.*;
```

3. **Fully qualified name:**
```java
public class Main {
    public static void main(String[] args) {
        com.college.Student s = new com.college.Student("Rahul");
    }
}
```

**Common packages:** java.util, java.io, java.lang (auto-imported)
