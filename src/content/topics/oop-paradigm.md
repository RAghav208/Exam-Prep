---
topicId: oop-paradigm
moduleId: m1
title: OOP Paradigm + Structured vs OOP
examWeight: 5-6 marks
keywords: [oop, structured, procedural, paradigm, features]
---

# OOP Paradigm (Object Oriented Programming)

## Definition (What It Is)

**OOP** is a programming paradigm where everything revolves around **objects**. Object = data (properties) + behavior (methods) together.

In Structured/Procedural programming we write **functions** that manipulate data. In OOP, data and functions (methods) are bundled together in a single unit (object).

## Key Points (Exam Points)

1. **Classes** = Blueprint/template for objects
2. **Objects** = Runtime instances of classes
3. **4 Pillars of OOP:**
   - **Encapsulation** - Data hiding + bundling
   - **Abstraction** - Making complex reality simple
   - **Inheritance** - Reusability of code
   - **Polymorphism** - Same name, different behavior

## Structured vs OOP Comparison (Very Common Exam Question)

| Feature | Structured Programming | OOP |
|---------|----------------------|-----|
| Focus | Functions/Procedures | Objects |
| Data | Separate from functions | Bundled with methods |
| Access | Global data common | Data encapsulation |
| Reusability | Low (copy-paste code) | High (inheritance) |
| Maintenance | Difficult | Easier |
| Security | Less secure | More secure |
| Top-down approach | Yes | No |
| Bottom-up approach | No | Yes |
| Examples | C, Pascal | Java, C++, Python |

## Code Example

```java
// Structured Approach (C-style)
int marks = 85;
String name = "Rahul";
printResult(name, marks);

// OOP Approach
class Student {
    private int marks;      // Data hiding
    private String name;
    
    public void printResult() {  // Behavior with data
        System.out.println(name + ": " + marks);
    }
}

Student s = new Student();
s.printResult();
```

## 5-6 Mark Questions

**Q1: Explain OOP concepts. Why is OOP preferred over structured programming?**

**Answer:**

**Object Oriented Programming (OOP)** is a programming paradigm based on the concept of "objects" which contain data (attributes) and code (methods).

**Four Pillars of OOP:**

1. **Encapsulation:** Wrapping data and methods into a single unit (class). It also means data hiding using access modifiers.

2. **Abstraction:** Hiding complex implementation details and showing only essential features. Example: Car - we know how to drive but internal engine working is hidden.

3. **Inheritance:** Mechanism where one class acquires properties of another class. Promotes code reusability.

4. **Polymorphism:** Ability to exist in many forms. Same method name behaves differently based on input (overloading) or object type (overriding).

**Why OOP is Preferred:**
- Better code organization and modularity
- Easy maintenance and updates
- Higher security (data hiding)
- Code reusability through inheritance
- Real-world modeling capability
- Reduces complexity in large projects

---

**Q2: Differentiate between Object-Oriented and Procedure-Oriented Programming.**

**Answer:**

| Basis | POP | OOP |
|-------|-----|-----|
| Division | Programs divided into functions | Programs divided into objects |
| Approach | Top-down | Bottom-up |
| Data Security | Less secure (global) | More secure (private) |
| Data Hiding | Not possible | Possible via encapsulation |
| Reusability | Copy-paste code | Through inheritance |
| Overloading | Not supported | Supported |
| Error Handling | Difficult | Easier with exception handling |
| Examples | C, Pascal | Java, C++, Python |
| Complexity | Difficult for large projects | Manages complexity well |

**Key Difference:** In POP, data moves freely; in OOP, data is bound to objects and protected from external access.
