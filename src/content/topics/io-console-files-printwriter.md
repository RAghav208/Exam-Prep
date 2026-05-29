---
topicId: io-console-files-printwriter
moduleId: m5
title: I/O: Console + Files + PrintWriter
examWeight: 5-6 marks
keywords: [io, file, printwriter, read, write]
---

# I/O: Console + Files + PrintWriter

## Java I/O Overview

```
┌─────────────┐         ┌─────────────┐
│   Input     │  ─────→  │   Output    │
│  (Stream)   │          │  (Stream)   │
└─────────────┘          └─────────────┘
       │                        │
       ▼                        ▼
  Byte Stream              Byte Stream
  (InputStream)           (OutputStream)
       │                        │
       ▼                        ▼
 Character Stream        Character Stream
  (Reader)               (Writer)
```

### Types of Streams

| Type | Input | Output | Example |
|------|-------|--------|---------|
| Byte | InputStream | OutputStream | FileInputStream |
| Character | Reader | Writer | FileReader, BufferedWriter |

---

## Console Input

### Using Scanner (Recommended)

```java
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
        
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Marks: " + marks);
        
        sc.close();
    }
}
```

### Scanner Methods

| Method | Returns |
|--------|---------|
| `next()` | Single token (space-separated) |
| `nextLine()` | Full line |
| `nextInt()` | Integer |
| `nextDouble()` | Double |
| `nextBoolean()` | Boolean |
| `hasNext()` | Check more input |

### BufferedReader (Fast Input)

```java
import java.io.*;

BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

System.out.print("Enter text: ");
String text = br.readLine();  // Returns String

System.out.print("Enter number: ");
int num = Integer.parseInt(br.readLine());  // Convert to int
```

---

## Console Output

### System.out

```java
System.out.println("Prints with newline");
System.out.print("No newline");
System.out.printf("Formatted: %d %.2f %s", 10, 3.14, "Hello");
```

### PrintWriter

```java
import java.io.PrintWriter;

PrintWriter pw = new PrintWriter(System.out);
pw.println("Hello");
pw.printf("Value: %d", 100);
pw.flush();  // Force output
pw.close();
```

---

## File Operations

### Writing to File (PrintWriter)

```java
import java.io.*;

public class WriteFile {
    public static void main(String[] args) throws IOException {
        // Create PrintWriter for file
        PrintWriter pw = new PrintWriter("output.txt");
        
        pw.println("Hello, World!");
        pw.println("This is line 2");
        pw.printf("Number: %d", 42);
        
        pw.close();  // Important: closes file
        System.out.println("Written to file");
    }
}
```

### Reading from File (BufferedReader + FileReader)

```java
import java.io.*;

public class ReadFile {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new FileReader("input.txt"));
        
        String line;
        while ((line = br.readLine()) != null) {  // null = EOF
            System.out.println(line);
        }
        
        br.close();
    }
}
```

### FileReader vs BufferedReader

| Feature | FileReader | BufferedReader |
|---------|------------|----------------|
| Speed | Slower (reads char by char) | Faster (buffered) |
| Method | read() | readLine() |
| Buffer | No | Yes (default 8KB) |

---

## Complete File Example

```java
import java.io.*;
import java.util.*;

public class StudentFile {
    public static void main(String[] args) throws IOException {
        String filename = "students.txt";
        
        // Write student data
        PrintWriter pw = new PrintWriter(filename);
        pw.println("Rahul,101,85.5");
        pw.println("Priya,102,92.0");
        pw.println("Amit,103,78.5");
        pw.close();
        System.out.println("Data written");
        
        // Read and display
        BufferedReader br = new BufferedReader(new FileReader(filename));
        String line;
        System.out.println("\nStudent Records:");
        while ((line = br.readLine()) != null) {
            String[] parts = line.split(",");
            System.out.println("Name: " + parts[0] + 
                             ", Roll: " + parts[1] + 
                             ", Marks: " + parts[2]);
        }
        br.close();
    }
}
```

---

## FileInputStream & FileOutputStream (Byte Streams)

### Byte Stream for Images/Files

```java
import java.io.*;

public class CopyFile {
    public static void main(String[] args) throws IOException {
        FileInputStream fis = new FileInputStream("source.jpg");
        FileOutputStream fos = new FileOutputStream("dest.jpg");
        
        int byteData;
        while ((byteData = fis.read()) != -1) {  // -1 = EOF
            fos.write(byteData);
        }
        
        fis.close();
        fos.close();
        System.out.println("File copied");
    }
}
```

---

## Buffered Streams (Efficient)

### BufferedReader (Input)

```java
BufferedReader br = new BufferedReader(new FileReader("file.txt"));
// Uses 8KB buffer - faster reading
```

### BufferedWriter (Output)

```java
BufferedWriter bw = new BufferedWriter(new FileWriter("file.txt"));
bw.write("Line 1");
bw.newLine();  // Platform-independent newline
bw.write("Line 2");
bw.close();
```

---

## Try-with-Resources (Java 7+)

**Automatically closes resources** - no need for finally.

```java
// Traditional (requires finally)
PrintWriter pw = null;
try {
    pw = new PrintWriter("file.txt");
    pw.println("Hello");
} finally {
    if (pw != null) pw.close();
}

// Try-with-resources (automatic)
try (PrintWriter pw = new PrintWriter("file.txt")) {
    pw.println("Hello");
}  // Auto-closed
```

### Multiple Resources

```java
try (BufferedReader br = new BufferedReader(new FileReader("a.txt"));
     PrintWriter pw = new PrintWriter("b.txt")) {
    
    String line;
    while ((line = br.readLine()) != null) {
        pw.println(line);
    }
}  // Both auto-closed
```

---

## 5-6 Mark Questions

**Q1: Explain how to read from and write to a file in Java with suitable examples.**

**Answer:**

**Writing to File (Using PrintWriter):**
```java
import java.io.*;

PrintWriter pw = new PrintWriter("data.txt");
pw.println("Line 1");
pw.println("Line 2");
pw.close();
```

**Reading from File (Using BufferedReader):**
```java
import java.io.*;

BufferedReader br = new BufferedReader(new FileReader("data.txt"));
String line;
while ((line = br.readLine()) != null) {
    System.out.println(line);
}
br.close();
```

**Complete Example:**
```java
import java.io.*;
import java.util.*;

public class FileDemo {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        
        // Write
        System.out.print("Enter filename: ");
        String filename = sc.next();
        
        PrintWriter pw = new PrintWriter(filename);
        System.out.println("Enter 3 lines:");
        for (int i = 0; i < 3; i++) {
            pw.println(sc.nextLine());
        }
        pw.close();
        
        // Read
        BufferedReader br = new BufferedReader(new FileReader(filename));
        System.out.println("\nFile contents:");
        String line;
        while ((line = br.readLine()) != null) {
            System.out.println(line);
        }
        br.close();
        
        sc.close();
    }
}
```

---

**Q2: Differentiate between FileReader and BufferedReader. Why is BufferedReader preferred for file reading?**

**Answer:**

| Feature | FileReader | BufferedReader |
|---------|------------|----------------|
| Buffer | No | Yes (8KB default) |
| Speed | Slower | Faster |
| Method | read() - single char | readLine() - full line |
| Memory | Reads char by char | Reads large chunks |

**Why BufferedReader is preferred:**

1. **Performance:** Reads large chunks into buffer, reduces I/O operations
2. **Convenience:** readLine() method reads entire line at once
3. **Efficiency:** Fewer system calls

**Example showing difference:**
```java
// FileReader - reads one char at a time (slow)
FileReader fr = new FileReader("file.txt");
int ch;
while ((ch = fr.read()) != -1) {
    System.out.print((char)ch);
}

// BufferedReader - reads line at a time (fast + convenient)
BufferedReader br = new BufferedReader(new FileReader("file.txt"));
String line;
while ((line = br.readLine()) != null) {
    System.out.println(line);
}
```

**Best Practice:**
```java
// Always wrap FileReader in BufferedReader
BufferedReader br = new BufferedReader(new FileReader("file.txt"));
```
