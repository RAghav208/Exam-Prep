---
topicId: encapsulation-abstraction
moduleId: m1
title: Encapsulation & Abstraction
examWeight: 5-6 marks
keywords: [encapsulation, abstraction, data hiding, access modifiers]
---

# Encapsulation & Abstraction

## Encapsulation (Data Hiding + Bundling)

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

### Code Example

```java
class BankAccount {
    // Data Hiding - private
    private double balance;
    private String accountHolder;
    
    // Public getter (read access)
    public double getBalance() {
        return balance;
    }
    
    // Public setter (controlled write with validation)
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: " + amount);
        } else {
            System.out.println("Invalid amount!");
        }
    }
    
    // Withdraw with validation
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: " + amount);
        } else {
            System.out.println("Insufficient funds!");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        BankAccount acc = new BankAccount();
        // acc.balance = 10000;  // ERROR! Can't access directly
        
        acc.deposit;       // OK - controlled access
        acc.withdraw;      // OK - with validation
        System.out.println("Balance: " + acc.getBalance());
    }
}
```

### Advantages
- Data security (can't modify directly)
- Validation possible before setting values
- Flexibility (can change internal implementation)
- Easy maintenance

---

## Abstraction (Hiding Complexity)

### Definition
Abstraction = Showing **essential** details, hiding **complex** implementation.

**Real World Example:**
- ATM: You see screen + buttons, internal banking system is hidden
- Phone call: You dial number, internal network is hidden

### Abstraction vs Encapsulation

| Feature | Abstraction | Encapsulation |
|---------|-------------|---------------|
| Focus | What an object does | How it stores data |
| Hides | Implementation details | Internal data |
| Purpose | Simplify complexity | Data protection |
| Achieved | Using abstract classes/interfaces | Using private + getters/setters |
| Real Example | ATM interface | Data members in capsule |

### Code Example

```java
// Abstraction - User doesn't know HOW payment happens
abstract class Payment {
    abstract void pay(double amount);  // What to do (abstract)
    
    // Common implementation
    void logTransaction() {
        System.out.println("Transaction logged");
    }
}

class CreditCardPayment extends Payment {
    void pay(double amount) {  // HOW - hidden from user
        System.out.println("Processing via Credit Card...");
        // Complex logic hidden
        System.out.println("Paid: Rs." + amount);
    }
}

class UPIPayment extends Payment {
    void pay(double amount) {
        System.out.println("Processing via UPI...");
        // Different complex logic hidden
        System.out.println("Paid: Rs." + amount);
    }
}

public class Main {
    public static void main(String[] args) {
        Payment p = new CreditCardPayment();
        p.pay(500);  // User just calls pay(), doesn't know HOW
        
        p = new UPIPayment();
        p.pay(300);  // Same simple interface, different implementation
    }
}
```

---

## 5-6 Mark Questions

**Q1: Explain Encapsulation and Abstraction with examples. How do they differ?**

**Answer:**

**Encapsulation:**
- Wrapping data (variables) and code (methods) together in a single unit
- Data hiding achieved through access modifiers (private)
- Example: BankAccount class where balance is private, accessed only through methods
- Benefits: Security, validation, maintainability

**Abstraction:**
- Hiding complex implementation details, showing only essential features
- Achieved through abstract classes and interfaces
- Example: ATM machine - user knows how to use buttons, doesn't know internal processing
- Benefits: Simplicity, flexibility

**Difference:**
- Encapsulation is about DATA hiding; Abstraction is about IMPLEMENTATION hiding
- Encapsulation focuses on HOW; Abstraction focuses on WHAT

---

**Q2: How do you achieve encapsulation in Java? Explain with a program.**

**Answer:**

Encapsulation in Java is achieved by:
1. Declaring instance variables as `private`
2. Providing public getter and setter methods

```java
class Student {
    private int rollNo;      // Step 1: Make private
    private String name;
    private double marks;
    
    // Step 2: Public getter
    public int getRollNo() {
        return rollNo;
    }
    
    public String getName() {
        return name;
    }
    
    public double getMarks() {
        return marks;
    }
    
    // Step 3: Public setter with validation
    public void setRollNo(int r) {
        if (r > 0) {
            rollNo = r;
        }
    }
    
    public void setName(String n) {
        if (n != null && !n.isEmpty()) {
            name = n;
        }
    }
    
    public void setMarks(double m) {
        if (m >= 0 && m <= 100) {
            marks = m;
        }
    }
}
```

**Output:** Data is protected from invalid values; direct access is prevented.
