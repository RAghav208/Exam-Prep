---
topicId: exception-handling-core
moduleId: m4
title: Exception Handling (core + user-defined)
examWeight: 5-6 marks
keywords: [exception, try, catch, throw, throws, finally, custom exception]
---

# Exception Handling (core + user-defined)

## What is Exception?

An **event** that disrupts normal program flow. Objects that represent errors.

### Exception Hierarchy

```
Throwable
   ├── Error (VirtualMachineError, OutOfMemoryError)
   └── Exception
         ├── IOException
         ├── SQLException
         ├── RuntimeException (Unchecked)
         │      ├── ArithmeticException
         │      ├── NullPointerException
         │      ├── ArrayIndexOutOfBoundsException
         │      └── ...
         └── Other exceptions (Checked)
```

### Types of Exceptions

| Type | Description | Example |
|------|-------------|---------|
| **Checked** | Compiled checks, handle or declare | IOException, SQLException |
| **Unchecked** | Runtime, programming errors | NullPointerException, ArithmeticException |

---

## try-catch Block

```java
try {
    // Code that might throw exception
    int result = 10 / 0;  // ArithmeticException
} catch (ArithmeticException e) {
    // Handle exception
    System.out.println("Cannot divide by zero: " + e.getMessage());
}
```

### Multiple catch Blocks

```java
try {
    int[] arr = {1, 2, 3};
    System.out.println(arr[5]);  // ArrayIndexOutOfBoundsException
    
    String s = null;
    s.length();  // NullPointerException
} catch (ArithmeticException e) {
    System.out.println("Math error: " + e);
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Array error: " + e);
} catch (Exception e) {  // Parent of all
    System.out.println("General error: " + e);
}
```

**Important:** Catch specific exceptions first, general last.

---

## throw vs throws

| Keyword | Purpose | Where |
|---------|---------|-------|
| `throw` | Manually throw an exception | Inside method |
| `throws` | Declare that method may throw | Method signature |

### throw - Explicitly Throwing

```java
void validate(int age) {
    if (age < 18) {
        throw new ArithmeticException("Age must be 18+");
    }
    System.out.println("Valid age");
}

// Usage
validate(15);  // throws ArithmeticException
```

### throws - Declaring Exceptions

```java
void readFile() throws IOException {
    // This method can throw IOException
    // Caller must handle it
    throw new IOException("File not found");
}

// Caller must handle
try {
    readFile();
} catch (IOException e) {
    System.out.println("Handled: " + e);
}
```

---

## finally Block

**Always executes** - whether exception occurs or not.

```java
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
```

### finally without catch

```java
try {
    // Open resource
    FileReader f = new FileReader("file.txt");
} finally {
    // Cleanup - ALWAYS runs
    // Close resource
}
```

---

## try-with-resources (Java 7+)

**Automatically closes resources.**

```java
try (FileReader f = new FileReader("file.txt");
     BufferedReader br = new BufferedReader(f)) {
    
    String line = br.readLine();
    System.out.println(line);
    
} // Resources auto-closed

// No need for finally to close
```

### Another Example

```java
try (Scanner sc = new Scanner(System.in)) {
    int num = sc.nextInt();
}  // Scanner auto-closed
```

---

## Custom Exception (User-Defined)

```java
// Define exception
class InvalidAgeException extends Exception {
    InvalidAgeException(String msg) {
        super(msg);  // Pass message to Exception
    }
}

// Use custom exception
class Voter {
    static void checkAge(int age) throws InvalidAgeException {
        if (age < 18) {
            throw new InvalidAgeException("Age " + age + " is invalid");
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
```

---

## Exception Methods

```java
try {
    int[] arr = {1, 2, 3};
    System.out.println(arr[10]);
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println(e.getMessage());       // Index 10 out of bounds
    System.out.println(e.toString());        // Full exception info
    e.printStackTrace();                      // Stack trace
}
```

---

## Common Exceptions

| Exception | When occurs |
|-----------|-------------|
| ArithmeticException | Division by zero |
| ArrayIndexOutOfBoundsException | Invalid array index |
| NullPointerException | Accessing null reference |
| NumberFormatException | Invalid number format |
| ClassCastException | Invalid type casting |
| IOException | I/O operation failure |
| FileNotFoundException | File doesn't exist |

---

## 5-6 Mark Questions

**Q1: Explain exception handling in Java with try, catch, throw, throws, and finally with examples.**

**Answer:**

**try-catch:**
```java
try {
    int result = 10 / 0;  // May throw exception
} catch (ArithmeticException e) {
    System.out.println("Error: " + e.getMessage());
}
```

**throw:** Manually throw exception
```java
void check(int age) {
    if (age < 0) {
        throw new IllegalArgumentException("Age can't be negative");
    }
}
```

**throws:** Declare exception in method signature
```java
void readFile() throws IOException {
    // May throw IOException
}
```

**finally:** Always executes
```java
try {
    // Risky code
} catch (Exception e) {
    // Handle
} finally {
    // Cleanup - ALWAYS runs
}
```

**Example with all:**
```java
void divide(int a, int b) throws ArithmeticException {
    if (b == 0) {
        throw new ArithmeticException("Cannot divide by zero");
    }
    System.out.println("Result: " + (a / b));
}

public static void main(String[] args) {
    try {
        divide(10, 0);
    } catch (ArithmeticException e) {
        System.out.println("Caught: " + e);
    } finally {
        System.out.println("Finally block");
    }
}
```

---

**Q2: What is the difference between checked and unchecked exceptions?**

**Answer:**

| Feature | Checked Exception | Unchecked Exception |
|---------|------------------|---------------------|
| Compiler | Compiler forces handling | No compiler check |
| Inheritance | extends Exception (not RuntimeException) | extends RuntimeException |
| Compile time | Checked at compile time | Occurs at runtime |
| Examples | IOException, SQLException | ArithmeticException, NullPointerException |
| Handling | Must handle or declare | Optional handling |

**Checked Example:**
```java
void readFile() throws IOException {
    // Compiler error if not handled
    throw new IOException();
}

// Must handle:
try {
    readFile();
} catch (IOException e) { }
```

**Unchecked Example:**
```java
void display() {
    String s = null;
    s.length();  // NullPointerException - runtime
}
```

**Rule:** RuntimeException and its subclasses are unchecked; all others are checked.
