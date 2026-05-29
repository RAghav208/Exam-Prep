---
topicId: object-class
moduleId: m1
title: Object vs Class
examWeight: 2-3 marks
keywords: [object, class, instance, blueprint]
---

# Object vs Class

## Definition

**Class:** Blueprint or template for creating objects. It's a logical entity.

**Object:** Real-world entity with state and behavior. It's a physical entity. Runtime instance of class.

## Key Differences (Exam Table)

| Feature | Class | Object |
|---------|-------|--------|
| Definition | Blueprint/template | Instance of class |
| Existence | Logical (doesn't occupy memory) | Physical (occupies memory) |
| Declaration | `class ClassName{}` | `ClassName obj = new ClassName();` |
| Memory | No memory allocated | Memory allocated in heap |
| Creation | Once | Multiple objects possible |
| Keyword | class | new |
| Example | Car design | Actual car |

## Code Example

```java
// Class - Blueprint (logical)
class Car {
    String color;     // attribute
    int speed;
    
    void drive() {   // method
        System.out.println("Driving at " + speed + " km/h");
    }
}

// Objects - Instances (physical)
public class Main {
    public static void main(String[] args) {
        Car car1 = new Car();  // Object 1
        car1.color = "Red";
        car1.speed = 100;
        
        Car car2 = new Car();  // Object 2
        car2.color = "Blue";
        car2.speed = 120;
        
        car1.drive();  // Output: Driving at 100 km/h
        car2.drive();  // Output: Driving at 120 km/h
    }
}
```

## Memory Allocation

```
Class Definition (in method area):
┌─────────────────────┐
│ Car class          │
│  - color: String   │
│  - speed: int      │
│  - drive() method  │
└─────────────────────┘

Heap Memory:
┌─────────────────────┐
│ car1 object        │     Stack: car1 ref → 0x100
│ color = "Red"      │
│ speed = 100        │
└─────────────────────┘
┌─────────────────────┐
│ car2 object        │     Stack: car2 ref → 0x200
│ color = "Blue"     │
│ speed = 120        │
└─────────────────────┘
```

## Important Points

1. **Multiple objects** can be created from one class
2. Each object has **own copy** of instance variables
3. Methods are **shared** (one copy in memory)
4. `new` keyword creates object in heap memory
5. Object reference stored in stack

## 3 Mark Question

**Q: What is the relationship between class and object?**

**Answer:** Class is a blueprint/template for creating objects. Object is an instance of a class. Class defines properties (attributes) and behaviors (methods); objects are concrete realizations with actual values. One class can create multiple objects.

---

**Q: How is an object created in Java?**

**Answer:** Objects are created using `new` keyword:
```java
ClassName objectName = new ClassName();
```
This does three things:
1. **Declaration:** Creates reference variable in stack
2. **Instantiation:** Creates object in heap memory
3. **Initialization:** Calls constructor to initialize object
