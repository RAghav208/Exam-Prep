---
topicId: threads-model-creation-join-sync
moduleId: m5
title: Multithreading: model, creation, join/isAlive, priorities, synchronization
examWeight: 5-6 marks
keywords: [thread, runnable, join, isAlive, priority, synchronized]
---

# Multithreading: model, creation, join/isAlive, priorities, synchronization

## What is Multithreading?

Running **multiple threads** concurrently within a single program. Each thread executes independently but shares resources.

### Benefits
- **Better CPU utilization** (idle time reduced)
- **Responsive UI** (background tasks don't block)
- **Parallel execution** (faster completion)

### Thread vs Process

| Feature | Process | Thread |
|---------|---------|--------|
| Memory | Separate memory space | Shares memory with other threads |
| Communication | IPC needed | Direct communication |
| Creation | Heavy (slow) | Lightweight (fast) |
| Independence | Independent | Shares resources |

---

## Thread States (Lifecycle)

```
┌──────────┐     start()      ┌─────────────┐
│  NEW     │ ──────────────→  │  RUNNABLE   │
└──────────┘                  └─────────────┘
                                   │
              ┌────────────────────┼────────────────────┐
              │                    │                    │
         run() completes     yield()              sleep()/wait()
              │                    │                    │
              ▼                    ▼                    ▼
         ┌────────┐         ┌──────────┐        ┌────────────┐
         │TERMINATED│         │ RUNNABLE │        │  BLOCKED   │
         └────────┘         └──────────┘        │  (WAITING) │
                                                └────────────┘
```

### Thread States
1. **New** - Created but not started
2. **Runnable -** Ready to run (running or waiting for CPU)
3. **Blocked/Waiting** - Waiting for resources
4. **Terminated** - Completed execution

---

## Creating Threads (Two Ways)

### Way 1: Extending Thread Class

```java
class MyThread extends Thread {
    @Override
    public void run() {
        // Task to perform
        for (int i = 1; i <= 5; i++) {
            System.out.println("Thread: " + i);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        MyThread t = new MyThread();
        t.start();  // start() NOT run()
        
        for (int i = 1; i <= 5; i++) {
            System.out.println("Main: " + i);
        }
    }
}
```

**Output (interleaved):**
```
Thread: 1
Main: 1
Thread: 2
Main: 2
...
```

### Way 2: Implementing Runnable (Recommended)

```java
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
        
        // Using lambda (Java 8+)
        Thread t2 = new Thread(() -> {
            System.out.println("Lambda thread running");
        });
        t2.start();
    }
}
```

---

## Thread Methods

### start() vs run()

| Method | What it does |
|--------|-------------|
| `start()` | Creates new thread, calls run() in new thread |
| `run()` | Executes in current thread (no new thread) |

```java
Thread t = new Thread(() -> System.out.println("Task"));
t.start();  // New thread
t.run();    // Same thread (like normal method call)
```

### join() - Wait for Thread to Complete

```java
Thread t = new Thread(() -> {
    System.out.println("Thread starting");
    try { Thread.sleep; } catch (Exception e) {}
    System.out.println("Thread ending");
});

t.start();
t.join();  // Main waits for t to finish
System.out.println("Main continues after thread");
```

### isAlive() - Check if Thread Running

```java
Thread t = new Thread(() -> {
    try { Thread.sleep(500); } catch (Exception e) {}
});

t.start();
System.out.println(t.isAlive());  // true (during execution)
try { t.join(); } catch (Exception e) {}
System.out.println(t.isAlive());  // false (finished)
```

---

## Thread Priority

```java
Thread t1 = new Thread(() -> System.out.println("Low priority"));
Thread t2 = new Thread(() -> System.out.println("High priority"));

t1.setPriority(Thread.MIN_PRIORITY);  // 1
t2.setPriority(Thread.MAX_PRIORITY);  // 10

t1.start();
t2.start();

// Constants: MIN_PRIORITY(1), NORM_PRIORITY(5), MAX_PRIORITY(10)
```

**Note:** Priority is just a hint, not guaranteed.

---

## Synchronization (synchronized)

### Problem: Race Condition

```java
class Counter {
    int count = 0;
    
    void increment() {
        count++;  // Not atomic - 3 operations!
    }
}

Counter c = new Counter();

// Thread 1 and Thread 2 both call increment()
// May lose updates - count might be 1 instead of 2
```

### Solution: synchronized keyword

**1. Synchronized Method**
```java
class Counter {
    int count = 0;
    
    synchronized void increment() {  // Lock on this object
        count++;
    }
}
```

**2. Synchronized Block**
```java
class Counter {
    int count = 0;
    Object lock = new Object();
    
    void increment() {
        synchronized(lock) {  // Fine-grained locking
            count++;
        }
    }
}
```

### How synchronized Works

```
Thread 1 enters synchronized method
        │
        ▼
    Gets lock on object
        │
        ▼
    Executes critical section
        │
        ▼
    Releases lock
        │
        ▼
Thread 2 can now enter
```

### Static Synchronization

```java
class Counter {
    static int count = 0;
    
    // Locks on class object (Counter.class)
    static synchronized void increment() {
        count++;
    }
}
```

---

## Complete Example: Bank Account

```java
class BankAccount {
    private double balance;
    
    BankAccount(double initial) {
        balance = initial;
    }
    
    synchronized void withdraw(double amount) {
        if (balance >= amount) {
            System.out.println(Thread.currentThread().getName() + " withdrawing " + amount);
            try { Thread.sleep(100); } catch (Exception e) {}
            balance -= amount;
            System.out.println(Thread.currentThread().getName() + " new balance: " + balance);
        } else {
            System.out.println("Insufficient balance for " + Thread.currentThread().getName());
        }
    }
}

public class Main {
    public static void main(String[] args) {
        BankAccount account = new BankAccount;
        
        Thread t1 = new Thread(() -> account.withdraw(500), "Thread-1");
        Thread t2 = new Thread(() -> account.withdraw(600), "Thread-2");
        
        t1.start();
        t2.start();
    }
}
```

---

## 5-6 Mark Questions

**Q1: Explain multithreading in Java. How do you create a thread? Differentiate between Thread and Runnable.**

**Answer:**

**Multithreading** allows concurrent execution of two or more threads (parts of a program).

**Creating a Thread (Two Ways):**

**1. Extending Thread class:**
```java
class MyThread extends Thread {
    @Override
    public void run() {
        System.out.println("Thread running");
    }
}
new MyThread().start();
```

**2. Implementing Runnable (preferred):**
```java
class MyRunnable implements Runnable {
    @Override
    public void run() {
        System.out.println("Runnable thread");
    }
}
new Thread(new MyRunnable()).start();
```

**Differences:**

| Feature | Thread | Runnable |
|---------|--------|----------|
| Inheritance | Extends Thread class | Implements Runnable |
| Multiple inheritance | Cannot extend another class | Can implement other interfaces |
| Coupling | Tight | Loose |
| Recommended | Rarely used | Preferred way |

**Why Runnable preferred?**
- Java doesn't support multiple inheritance
- Runnable can be used with Executor framework
- Better separation of task from execution

---

**Q2: What is synchronization in Java? Explain synchronized keyword with examples.**

**Answer:**

**Synchronization** ensures that only one thread accesses shared resource at a time, preventing race conditions.

**Problem without synchronization:**
```java
class Counter {
    int count = 0;
    void increment() { count++; }  // Not thread-safe
}
// Two threads calling increment() may lose updates
```

**Solution 1: Synchronized Method**
```java
class Counter {
    int count = 0;
    synchronized void increment() {
        count++;
    }
}
```

**Solution 2: Synchronized Block**
```java
class Counter {
    int count = 0;
    Object lock = new Object();
    
    void increment() {
        synchronized(lock) {
            count++;
        }
    }
}
```

**Synchronized Instance Method:** Locks on `this` object
**Synchronized Static Method:** Locks on class object

**Example:**
```java
class Bank {
    private int balance = 1000;
    
    synchronized void withdraw(int amt) {
        if (balance >= amt) {
            balance -= amt;
            System.out.println("Withdrawn: " + amt);
        }
    }
}
// Only one thread can execute withdraw() at a time
```

**Key Points:**
- Prevents data inconsistency
- Causes performance overhead
- Use synchronized only on critical sections
