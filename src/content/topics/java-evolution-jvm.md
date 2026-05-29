---
topicId: java-evolution-jvm
moduleId: m2
title: Java Evolution, Bytecode & JVM Architecture
examWeight: 3-4 marks
keywords: [jvm, bytecode, jre, jdk, architecture]
---

# Java Evolution, Bytecode & JVM Architecture

## Java Evolution (History)

| Year | Version | Key Features |
|------|---------|--------------|
| 1996 | Java 1.0 | First release |
| 1998 | Java 1.2 | Collections framework |
| 2004 | Java 5.0 | Generics, Annotations, AutoBoxing |
| 2014 | Java 8 | Lambda, Streams, Optional |
| 2017 | Java 9 | Modules, JShell |
| 2021 | Java 17 | Records, Sealed Classes |
| 2024 | Java 22 | Record Patterns, String Templates |

**Current Version:** Java 22 (as of 2024)

---

## Java Architecture (Compilation Flow)

```
Source Code (.java)
        ↓ [javac compiler]
Bytecode (.class)
        ↓ [JVM]
Machine Code (Native)
```

### Step by Step:

1. **Write** - Write .java file
2. **Compile** - `javac` converts .java to .class (bytecode)
3. **Load** - ClassLoader loads bytecode into memory
4. **Verify** - BytecodeVerifier checks for security
5. **Execute** - Interpreter/ JIT Compiler runs bytecode

---

## JVM Architecture

```
┌─────────────────────────────────────────────────────┐
│                    JVM                             │
│  ┌────────────────────────────────────────────┐  │
│  │            Class Loader Subsystem           │  │
│  │  • Bootstrap ClassLoader                   │  │
│  │  • Extension ClassLoader                   │  │
│  │  • Application ClassLoader                 │  │
│  └────────────────────────────────────────────┘  │
│                                                     │
│  ┌────────────────────────────────────────────┐  │
│  │            Memory Areas                    │  │
│  │  ┌──────────┐  ┌───────────┐  ┌──────────┐ │  │
│  │  │Method Area│ │Heap      │  │Java Stacks│ │  │
│  │  │(static)   │ │(objects)  │  │(local vars)│ │  │
│  │  └──────────┘  └───────────┘  └──────────┘ │  │
│  │  ┌──────────┐  ┌───────────┐              │  │
│  │  │PC Registers│ │Native     │              │  │
│  │  │(pointer)  │  │Method Area│              │  │
│  │  └──────────┘  └───────────┘              │  │
│  └────────────────────────────────────────────┘  │
│                                                     │
│  ┌────────────────────────────────────────────┐  │
│  │         Execution Engine                   │  │
│  │  • Interpreter                            │  │
│  │  • JIT Compiler (Just-In-Time)            │  │
│  │  • Garbage Collector                      │  │
│  └────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
```

### Components:

**1. Class Loader:**
- Loads .class files into memory
- Three types: Bootstrap, Extension, Application

**2. Method Area:**
- Stores class metadata (name, superclass, interfaces)
- Stores static variables

**3. Heap:**
- Stores all objects
- Divided into: Young Generation, Old Generation

**4. Stack:**
- Stores local variables and method calls
- Each thread has its own stack

**5. PC Register:**
- Points to current instruction

**6. Native Method Stack:**
- For native (C/C++) methods

---

## JDK vs JRE vs JVM

| Component | Full Form | Purpose |
|-----------|-----------|---------|
| **JDK** | Java Development Kit | Development (compiler, tools) |
| **JRE** | Java Runtime Environment | Running apps (JVM + libraries) |
| **JVM** | Java Virtual Machine | Executes bytecode |

```
JDK = JRE + Development Tools (javac, debugger)
JRE = JVM + Runtime Libraries
JVM = Execution Engine
```

---

## Platform Independent

**Write Once, Run Anywhere (WORA)**

Java is platform independent because:
1. Compiler generates bytecode (.class)
2. JVM is platform-specific (Windows JVM, Linux JVM, etc.)
3. Same bytecode runs on any OS with JVM

**Contrast with C/C++:**
- C/C++ produces machine-specific code
- Windows exe won't run on Linux

---

## 3-4 Mark Questions

**Q1: Explain the Java compilation and execution process.**

**Answer:**

1. **Write:** Developer writes .java source file
2. **Compile:** `javac` compiler converts .java to .class (bytecode)
3. **Load:** ClassLoader subsystem loads bytecode into JVM
4. **Verify:** BytecodeVerifier checks for illegal operations
5. **Interpret:** JVM Interpreter converts bytecode to machine code
6. **Execute:** Machine code runs on OS

Bytecode is not machine-specific, hence Java is portable.

---

**Q2: Draw and explain JVM architecture.**

**Answer:**

**JVM has 3 main components:**

1. **Class Loader Subsystem:** Loads .class files using Bootstrap, Extension, and Application classloaders

2. **Runtime Memory Areas:**
   - Method Area: Stores class info, static variables
   - Heap: Stores objects
   - Stack: Stores local variables, method calls
   - PC Register: Instruction pointer
   - Native Method Stack: Native code

3. **Execution Engine:**
   - Interpreter: Runs bytecode line by line
   - JIT Compiler: Compiles frequently used bytecode to native for speed
   - Garbage Collector: Removes unreferenced objects

**Key benefit:** Platform independence - same bytecode runs on any OS with JVM.