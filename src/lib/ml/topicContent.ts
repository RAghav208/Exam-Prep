// Topic content data - Detailed Machine Learning exam notes in simple English

export type TopicContent = {
  topicId: string;
  moduleId: string;
  title: string;
  examWeight: string;
  keywords: string[];
  content: string;
  detailedNotes: string;
};

export const topicContents: Record<string, TopicContent> = {
  "ml-intro": {
    topicId: "ml-intro",
    moduleId: "m1",
    title: "Introduction, Well-Posed Problems & Types of ML",
    examWeight: "5-6 marks",
    keywords: ["machine learning", "mitchell", "well-posed", "supervised", "unsupervised", "reinforcement", "semi-supervised"],
    content: `## Definition (What It Is)

**Machine Learning (ML)** is a branch of Artificial Intelligence where a computer **learns patterns from data** and improves at a task **without being explicitly programmed** for every rule.

**Tom Mitchell's well-posed definition (very important):**

> A computer program is said to learn from experience **E** with respect to some task **T** and performance measure **P**, if its performance at task **T**, as measured by **P**, improves with experience **E**.

So every learning problem has three parts: **Task (T), Performance (P), Experience (E)**.

## Key Points (Exam Points)

- ML learns from **data (examples)**, not hard-coded rules.
- It is used when rules are too complex to write by hand (e.g. spam, image recognition).
- Mitchell's definition splits any problem into **T, P, E**.
- Main types: **Supervised, Unsupervised, Reinforcement** (plus **Semi-supervised**).

## Mitchell's T / P / E Example (Spam Filter)

| Part | Meaning | Spam Filter Example |
|---|---|---|
| **T (Task)** | What we want the program to do | Classify an email as spam or not-spam |
| **P (Performance)** | How we measure success | Percentage of emails classified correctly (accuracy) |
| **E (Experience)** | The data it learns from | A set of emails already labelled spam / not-spam |

## Types of Machine Learning

| Type | Data Used | Goal | Example |
|---|---|---|---|
| **Supervised** | Labelled (input + correct output) | Predict output for new input | Spam detection, price prediction |
| **Unsupervised** | Unlabelled (only inputs) | Find hidden structure / groups | Customer segmentation, clustering |
| **Reinforcement** | Reward / penalty signals | Learn best actions by trial and error | Game playing, robot control |
| **Semi-supervised** | Small labelled + large unlabelled | Use cheap unlabelled data to help | Web page classification |

## Frequently Asked Exam Questions

**Q1: State Mitchell's definition of a well-posed learning problem.**

A program learns from experience **E** with respect to task **T** and performance measure **P**, if its performance at **T**, measured by **P**, improves with experience **E**.

**Q2: Differentiate supervised and unsupervised learning (1 line).**

Supervised uses **labelled data** to predict outputs; unsupervised uses **unlabelled data** to find groups/patterns.`,
    detailedNotes: `## Introduction to ML - Detailed Explanation

### Why Machine Learning?

Traditional programming = **Rules + Data → Answers**. The programmer writes every rule.

Machine Learning = **Data + Answers → Rules (Model)**. The machine *learns* the rules itself.

We use ML when:
- The rules are too many or too complex to write by hand.
- The data keeps changing and rules must adapt.
- A human cannot easily explain how they do the task (e.g. recognising a face).

### Mitchell's Definition Broken Down

For a **handwriting recognition** system:
- **T** = recognising and classifying handwritten characters.
- **P** = percent of characters classified correctly.
- **E** = a database of handwritten characters with their correct labels.

As we feed it more correctly-labelled examples (E grows), its accuracy (P) on the task (T) goes up. That is "learning".

### The Four Learning Types in Detail

**1. Supervised Learning**
- Training data has **inputs and known correct outputs (labels)**.
- The model learns the mapping \`input -> output\`.
- Two sub-types:
  - **Classification** -> output is a category (spam / not-spam).
  - **Regression** -> output is a number (house price).

**2. Unsupervised Learning**
- Training data has **only inputs, no labels**.
- The model finds hidden structure.
- Main tasks: **Clustering** (group similar items) and **Association** (find item relationships).

**3. Reinforcement Learning**
- An **agent** interacts with an **environment**.
- It takes **actions**, receives **rewards** or **penalties**, and learns a **policy** that maximises total reward.
- Learning is by **trial and error** over time.

**Components of Reinforcement Learning (important 9-mark question):**

| Component | Meaning |
|---|---|
| **Agent** | The learner/decision-maker that takes actions |
| **Environment** | The world the agent interacts with |
| **State (s)** | The current situation of the environment the agent observes |
| **Action (a)** | A choice the agent makes from the allowed set of moves |
| **Reward (r)** | A numeric feedback signal (positive or negative) after an action |
| **Policy (pi)** | The agent's strategy: a mapping from state to action |
| **Value function** | Expected long-term total reward from a state (how good a state is) |

Flow: the agent observes the **state**, picks an **action** using its **policy**, the **environment** returns a **reward** and a new **state**, and the agent updates its **policy/value function** to maximise long-term reward.

**4. Semi-Supervised Learning**
- Sits between supervised and unsupervised.
- Uses a **small amount of labelled data** plus a **large amount of unlabelled data**.
- Useful because labelling data is expensive but raw data is cheap.

### Simple Pseudocode View

\`\`\`python
# Supervised learning idea
model = train(inputs, labels)        # learn from labelled examples
prediction = model.predict(new_input)  # predict for unseen input
\`\`\`

### Frequently Asked Exam Questions

**Q1: What is Machine Learning? How is it different from traditional programming?**

ML is a field of AI where machines learn patterns from data to make decisions without explicit programming. Traditional programming takes rules + data to produce answers; ML takes data + answers to produce the rules (a model).

**Q2: Explain the three main types of ML with one example each.**

- Supervised - learns from labelled data (spam detection).
- Unsupervised - finds groups in unlabelled data (customer segmentation).
- Reinforcement - learns by reward/penalty (game-playing agent).

**Q3: What is reinforcement learning?**

An agent learns the best sequence of actions by interacting with an environment and receiving rewards or penalties, aiming to maximise long-term reward.`
  },

  "ml-applications-issues": {
    topicId: "ml-applications-issues",
    moduleId: "m1",
    title: "Applications, Tools, Problems Not to Solve & Issues in ML",
    examWeight: "3-4 marks",
    keywords: ["applications", "tools", "python", "issues", "limitations", "when not to use ml"],
    content: `## Definition (What It Is)

This topic covers **where ML is used**, the **tools and languages** that support it, the situations where ML is **not the right choice**, and the **practical issues** that make ML hard.

## Applications of ML (Key Points)

- **Image and speech recognition** (face unlock, voice assistants)
- **Spam / fraud detection** (email spam, credit-card fraud)
- **Recommendation systems** (movies, products)
- **Medical diagnosis** (detecting disease from scans)
- **Self-driving cars** and robotics
- **Natural Language Processing** (translation, chatbots)
- **Stock / sales forecasting**

## Tools and Languages

| Category | Examples |
|---|---|
| **Languages** | Python, R |
| **ML libraries** | scikit-learn, TensorFlow, PyTorch, Keras |
| **Data handling** | NumPy, Pandas |
| **Visualisation** | Matplotlib, Seaborn |
| **Big-data tools** | Spark, Hadoop |

## Problems NOT to Solve with ML

- When **simple fixed rules** already solve it perfectly (no need for ML).
- When you have **very little or poor-quality data**.
- When you need a **100% guaranteed, explainable** answer (e.g. safety-critical legal rules).
- When the **cost of errors** is unacceptable and patterns are unstable.

## Issues / Challenges in ML

| Issue | Meaning |
|---|---|
| **Poor data quality** | Missing, noisy, or biased data hurts the model |
| **Insufficient data** | Too few examples to learn from |
| **Overfitting** | Model memorises training data, fails on new data |
| **Underfitting** | Model too simple, misses patterns |
| **Non-representative data** | Training data does not match the real world |
| **Interpretability** | Hard to explain why the model decided something |

## Frequently Asked Exam Questions

**Q1: List four real-world applications of ML.**

Spam detection, image/face recognition, recommendation systems, medical diagnosis.

**Q2: Name two situations where ML should NOT be used.**

When simple deterministic rules already solve the problem, and when there is too little or poor-quality data.`,
    detailedNotes: `## Applications & Issues - Detailed Explanation

### Where ML Shines

ML is best for problems that are:
- **Pattern-heavy** (images, text, sound).
- **Data-rich** (lots of examples available).
- **Hard to code by hand** (no clear rules).

Examples by domain:
- **Healthcare** - tumour detection, drug discovery.
- **Finance** - fraud detection, credit scoring.
- **Retail** - recommendations, demand forecasting.
- **Transport** - route optimisation, self-driving.

### Why Python Dominates ML

- Simple, readable syntax.
- Huge ecosystem: \`scikit-learn\` (classic ML), \`TensorFlow\`/\`PyTorch\` (deep learning), \`pandas\`/\`numpy\` (data).
- Strong community and free libraries.

### When NOT to Use ML

ML adds complexity. Avoid it when:
1. A **fixed formula or rule** is exact and cheap (e.g. computing tax = income * rate).
2. Data is **scarce or unreliable** - the model will just learn noise.
3. You need **full transparency** by law and cannot accept a black box.
4. The environment changes so fast that yesterday's data is useless.

### Major Issues Explained

- **Data quality** - "garbage in, garbage out". Bad data is the number-one problem.
- **Quantity of data** - small datasets cause unstable, unreliable models.
- **Overfitting vs underfitting** - the core balance every model fights (see bias-variance topic).
- **Bias and fairness** - if training data is biased, predictions will be biased.
- **Generalisation** - the model must work on *unseen* data, not just training data.
- **Computational cost** - large models need a lot of time and hardware.

### Frequently Asked Exam Questions

**Q1: What are the main issues faced in applying ML?**

Poor/insufficient data, non-representative training data, overfitting, underfitting, bias/fairness problems, and poor interpretability.

**Q2: Why is Python popular for ML?**

It has simple syntax and a rich set of free libraries (scikit-learn, TensorFlow, pandas) plus a large support community.

**Q3: Give two problems that should NOT be solved with ML.**

Tasks that simple exact rules already solve perfectly, and tasks where you have too little or unreliable data.`
  },

  "ml-data-types": {
    topicId: "ml-data-types",
    moduleId: "m1",
    title: "ML Activities & Basic Types of Data",
    examWeight: "4-5 marks",
    keywords: ["qualitative", "quantitative", "nominal", "ordinal", "interval", "ratio", "data types"],
    content: `## Definition (What It Is)

Before modelling, we must understand the **activities of ML** (the steps) and the **types of data** we feed in. Data type decides which operations and which algorithms make sense.

## ML Activities (Steps to Build a Model)

1. **Define the problem** (what to predict).
2. **Collect / prepare data**.
3. **Explore the data** (understand it).
4. **Pre-process** (clean, transform).
5. **Select and train a model**.
6. **Evaluate** the model.
7. **Deploy and monitor**.

## Basic Types of Data

Data is broadly **Qualitative (categorical)** or **Quantitative (numeric)**.

| Main Type | Sub-Type | Meaning | Example |
|---|---|---|---|
| **Qualitative** | **Nominal** | Names/labels, no order | Gender, colour, city |
| **Qualitative** | **Ordinal** | Categories WITH order | Ratings (low/med/high), grades |
| **Quantitative** | **Interval** | Numeric, no true zero | Temperature in Celsius, dates |
| **Quantitative** | **Ratio** | Numeric, true zero exists | Height, weight, age, salary |

## Key Difference: Interval vs Ratio

- **Interval** has equal gaps but **no true zero** (0 C does not mean "no temperature"); ratios are meaningless (20 C is not "twice as hot" as 10 C).
- **Ratio** has a **true zero** (0 kg means no weight); ratios are valid (20 kg is twice 10 kg).

## Frequently Asked Exam Questions

**Q1: Differentiate nominal and ordinal data.**

Nominal = labels with **no order** (colours). Ordinal = categories **with a meaningful order** but unequal/unknown gaps (small/medium/large).

**Q2: Why can't we multiply interval data meaningfully?**

Interval data has **no true zero**, so ratios (like "twice as much") have no meaning.`,
    detailedNotes: `## ML Activities & Data Types - Detailed Explanation

### The Four Measurement Scales (NOIR)

A common memory trick is **N-O-I-R**: Nominal, Ordinal, Interval, Ratio. As we go down the list, the data carries **more information**.

**1. Nominal (Categorical, no order)**
- Just names or labels.
- Allowed: counting, mode, checking equality.
- Examples: blood group (A, B, O), gender, country.

**2. Ordinal (Ordered categories)**
- Order matters, but the gaps between values are **not equal/known**.
- Allowed: order comparisons, median.
- Examples: customer satisfaction (poor < average < good), exam grades (A > B > C).

**3. Interval (Equal gaps, no true zero)**
- Differences are meaningful, but **zero is arbitrary**.
- Allowed: addition/subtraction, mean.
- Examples: temperature in Celsius/Fahrenheit, calendar years.

**4. Ratio (Equal gaps, true zero)**
- Has everything interval has, **plus a true zero**, so multiplication/division make sense.
- Allowed: all arithmetic, including ratios.
- Examples: weight, height, age, income, distance.

### Why Data Type Matters in ML

- **Nominal/Ordinal** data usually needs **encoding** (turning categories into numbers) before a model can use it.
- **Quantitative** data may need **scaling/normalisation**.
- Statistics differ: you can take a **mean** of ratio data, but only a **median/mode** of ordinal data.

### Quick Comparison Table

| Scale | Order? | Equal Gaps? | True Zero? | Central Value |
|---|---|---|---|---|
| Nominal | No | No | No | Mode |
| Ordinal | Yes | No | No | Median |
| Interval | Yes | Yes | No | Mean |
| Ratio | Yes | Yes | Yes | Mean |

### Frequently Asked Exam Questions

**Q1: List and explain the four types of data with examples.**

Nominal (labels: colour), Ordinal (ordered: grades), Interval (no true zero: Celsius), Ratio (true zero: weight). Information increases from nominal to ratio.

**Q2: Give the difference between qualitative and quantitative data.**

Qualitative (categorical) describes categories/labels and is non-numeric (nominal, ordinal); quantitative is numeric and measurable (interval, ratio).

**Q3: Which central tendency suits ordinal data and why?**

The **median**, because ordinal values can be ordered but their gaps are not equal, so the mean is not meaningful.`
  },

  "ml-data-preprocessing": {
    topicId: "ml-data-preprocessing",
    moduleId: "m1",
    title: "Exploring Data, Data Quality & Pre-Processing",
    examWeight: "5-6 marks",
    keywords: ["missing values", "outliers", "noise", "normalization", "standardization", "encoding", "dimensionality reduction"],
    content: `## Definition (What It Is)

**Data pre-processing** is cleaning and transforming raw data into a form a model can use well. Real data is messy: it has **missing values, outliers, noise, and different scales**. Good pre-processing strongly improves model accuracy.

## Exploring the Structure of Data

- Check **size** (rows, columns), **data types**, and **summary statistics** (mean, median, min, max).
- Look at **distributions** and **relationships** using plots (histogram, box plot, scatter plot).

## Data Quality Problems & Remedies

| Problem | What It Means | Common Remedy |
|---|---|---|
| **Missing values** | Some cells are empty | Delete rows, or **impute** (fill with mean/median/mode) |
| **Outliers** | Extreme, unusual values | Detect (box plot, Z-score) then cap, remove, or transform |
| **Noise** | Random errors in data | Smoothing, binning, filtering |
| **Duplicate data** | Repeated records | Remove duplicates |
| **Inconsistent data** | Different formats/units | Standardise format and units |

## Key Pre-Processing Techniques

**Normalization (Min-Max scaling)** - rescales values to a fixed range, usually 0 to 1:

\`x_new = (x - min) / (max - min)\`

**Standardization (Z-score scaling)** - rescales so mean = 0 and standard deviation = 1:

\`z = (x - mean) / std_dev\`

**Encoding** - turns categories into numbers:
- **Label encoding** - each category gets an integer (good for ordinal).
- **One-hot encoding** - one 0/1 column per category (good for nominal).

**Dimensionality reduction** - reduce the number of features (e.g. **PCA**) to remove redundancy and speed up training.

## Worked Example: Min-Max Normalization

Values: 10, 20, 30, 40, 50. Here min = 10, max = 50.

- For x = 30: \`(30 - 10) / (50 - 10) = 20 / 40 = 0.5\`
- For x = 10: \`(10 - 10) / 40 = 0\`
- For x = 50: \`(50 - 10) / 40 = 1\`

## Frequently Asked Exam Questions

**Q1: Differentiate normalization and standardization.**

Normalization scales data to a fixed range (0-1) using min/max. Standardization rescales to mean 0 and SD 1 using the Z-score.

**Q2: How do you handle missing values?**

Either delete the affected rows/columns, or **impute** them with the mean, median, or mode (mode for categorical data).`,
    detailedNotes: `## Data Pre-Processing - Detailed Explanation

### Why Pre-Process?

Models are only as good as the data. "Garbage in, garbage out." Clean, well-scaled data leads to faster training and better accuracy.

### Step 1: Exploratory Data Analysis (EDA)

- **Summary stats** - mean, median, standard deviation, min, max for each numeric column.
- **Visual checks**:
  - **Histogram** - shape of a single variable's distribution.
  - **Box plot** - shows median, quartiles, and **outliers**.
  - **Scatter plot** - relationship between two variables.
  - **Correlation matrix** - how features relate to each other.

### Step 2: Handling Missing Values

- **Deletion** - drop rows/columns with too many missing values (only if data is large).
- **Imputation** - fill gaps:
  - Numeric -> mean or median.
  - Categorical -> mode (most frequent value).

\`\`\`python
# Fill missing numeric values with the column mean
df["age"] = df["age"].fillna(df["age"].mean())
\`\`\`

### Step 3: Handling Outliers and Noise

- **Outliers** - detect using box plots or the **Z-score** (|z| > 3 is often an outlier). Then remove, cap, or transform.
- **Noise** - random error. Reduce with:
  - **Binning** - group values into bins and smooth (by mean/median).
  - **Smoothing/filtering** - average nearby values.

### Step 4: Scaling Features

Many algorithms (k-NN, SVM, gradient descent) are sensitive to feature scale.

| Technique | Formula | Result Range | Use When |
|---|---|---|---|
| Normalization | (x - min)/(max - min) | 0 to 1 | Data not normally distributed |
| Standardization | (x - mean)/std | mean 0, SD 1 | Data roughly normal / has outliers |

### Step 5: Encoding Categorical Data

| Method | How | Best For |
|---|---|---|
| Label encoding | Category -> integer (red=0, green=1) | Ordinal data |
| One-hot encoding | One 0/1 column per category | Nominal data |

### Step 6: Dimensionality Reduction (Intro)

- Too many features cause slow training and the "curse of dimensionality".
- **PCA (Principal Component Analysis)** combines correlated features into fewer "principal components" that keep most of the variance.
- This removes redundancy and can reduce overfitting.

### Frequently Asked Exam Questions

**Q1: What is data pre-processing and why is it important?**

It is cleaning and transforming raw data (handling missing values, outliers, noise, scaling, encoding) so models train better. Important because data quality directly controls model quality.

**Q2: Explain min-max normalization with the formula.**

It rescales a value to [0,1] using \`x_new = (x - min)/(max - min)\`. Example: for values 10..50, the value 30 becomes 0.5.

**Q3: When do you use label encoding vs one-hot encoding?**

Label encoding for **ordinal** data (order matters); one-hot encoding for **nominal** data (no order), to avoid implying a false order.`
  },

  "feature-transformation-selection": {
    topicId: "feature-transformation-selection",
    moduleId: "m2",
    title: "Feature Engineering: Transformation, Extraction & Selection",
    examWeight: "6 marks",
    keywords: ["feature engineering", "feature selection", "feature extraction", "filter", "wrapper", "embedded", "PCA", "LDA", "dimensionality reduction"],
    content: `## Definition (What It Is)

**Feature engineering** is the process of creating, transforming, and selecting the **input variables (features)** that a model learns from. Better features usually beat a fancier algorithm, so this step strongly controls model quality.

## Key Points (Exam Points)

- A **feature** is a measurable property of the data (a column).
- **Feature transformation** = changing existing features (construction, scaling).
- **Feature extraction** = creating *new, fewer* features from the old ones (e.g. PCA).
- **Feature selection** = *picking a subset* of the existing features and dropping the rest.

## Feature Transformation

- **Feature construction** - build new features from existing ones (e.g. \`BMI = weight / height^2\`, or extract "day of week" from a date).
- **Feature scaling** - normalization (0-1) or standardization (mean 0, SD 1) so all features are comparable.

## Feature Extraction vs Feature Selection

| Aspect | Feature Extraction | Feature Selection |
|---|---|---|
| What it does | Creates **new** features by combining old ones | **Keeps a subset** of original features |
| Original features | Transformed/lost | Preserved (some dropped) |
| Interpretability | Lower (new combined features) | Higher (original meaning kept) |
| Example | PCA, LDA | Filter / wrapper / embedded methods |

## Feature Subset Selection Methods

| Method | How It Works | Speed / Cost | Example |
|---|---|---|---|
| **Filter** | Rank features by a statistical score independent of the model | Fast, cheap | Correlation, chi-square, information gain |
| **Wrapper** | Try feature subsets by training the model and checking accuracy | Slow, expensive | Forward selection, backward elimination, RFE |
| **Embedded** | Selection happens *inside* model training | Medium | LASSO (L1), decision-tree importance |

## Dimensionality Reduction & Its Importance

**Dimensionality reduction** reduces the number of features while keeping most information.

- **PCA (Principal Component Analysis)** - **unsupervised**; finds new axes (principal components) that capture maximum **variance**.
- **LDA (Linear Discriminant Analysis)** - **supervised**; finds axes that best **separate the classes**.

Why it matters: avoids the **curse of dimensionality**, removes redundancy, speeds up training, reduces overfitting, and helps visualisation.

## Frequently Asked Exam Questions

**Q1: Differentiate feature extraction and feature selection.**

Extraction creates **new** combined features (PCA/LDA); selection **keeps a subset** of the original features and drops the rest.

**Q2: Name the three feature selection methods.**

Filter (statistical ranking), Wrapper (model-based subset search), Embedded (selection during training, e.g. LASSO).

**Q3: Why is feature selection important?**

It removes irrelevant/redundant features, which improves accuracy, reduces overfitting, and speeds up training.`,
    detailedNotes: `## Feature Engineering - Detailed Explanation

### What Is a Feature and Why Engineer It?

A **feature** is one input column the model uses. Real data often has too many, irrelevant, or badly-scaled features. Feature engineering fixes this so the model learns the true signal, not noise.

### Feature Transformation in Detail

**1. Feature Construction** - make useful new features:
- Combine: \`income_per_person = total_income / family_size\`.
- Decompose: split a timestamp into year, month, hour.
- Domain knowledge often drives the best features.

**2. Feature Scaling** - put features on a comparable scale:
- **Normalization**: \`x_new = (x - min)/(max - min)\` -> range 0 to 1.
- **Standardization**: \`z = (x - mean)/std\` -> mean 0, SD 1.

### Feature Selection Methods in Detail

**Filter methods**
- Score each feature with a statistic (correlation, chi-square, \`information gain = entropy(before) - entropy(after)\`).
- Independent of the model -> very fast, but ignores feature interactions.

**Wrapper methods**
- Treat selection as a search: train the model on different subsets and keep the best.
- **Forward selection** - start empty, add the best feature each step.
- **Backward elimination** - start with all, remove the worst each step.
- **RFE (Recursive Feature Elimination)** - repeatedly remove the weakest feature.
- Accurate but slow (trains many models).

**Embedded methods**
- Selection is built into training.
- **LASSO (L1 regularization)** shrinks some coefficients to exactly **zero**, dropping those features.
- **Tree-based importance** ranks features by how much they reduce impurity.

### Dimensionality Reduction in Detail

| Technique | Type | Goal |
|---|---|---|
| PCA | Unsupervised | Maximise variance captured in fewer components |
| LDA | Supervised | Maximise class separation |

**PCA steps (intuition):**
1. Standardise the data.
2. Compute the covariance matrix.
3. Find eigenvectors/eigenvalues.
4. Keep the top components (largest eigenvalues).
5. Project the data onto them.

### Frequently Asked Exam Questions

**Q1: Explain filter, wrapper, and embedded methods.**

Filter ranks features statistically before modelling (fast); wrapper searches subsets by training the model (accurate, slow); embedded selects during training (e.g. LASSO, tree importance).

**Q2: Compare PCA and LDA.**

Both reduce dimensions. PCA is unsupervised and maximises variance; LDA is supervised and maximises class separation.

**Q3: Why is dimensionality reduction important in ML?**

It fights the curse of dimensionality, removes redundant features, speeds up training, reduces overfitting, and aids visualisation.`
  },

  "model-selection-training": {
    topicId: "model-selection-training",
    moduleId: "m2",
    title: "Model Selection, Training & Validation",
    examWeight: "5-6 marks",
    keywords: ["model selection", "train test split", "cross validation", "k-fold", "holdout", "bootstrap", "validation", "ml workflow"],
    content: `## Definition (What It Is)

This topic covers **how we choose a model, train it, and check it honestly** before trusting it. The key idea: a model must be tested on **data it has not seen** so we know it will generalise.

## Selecting a Model

Choose based on:
- The **task** (classification vs regression vs clustering).
- **Data size and type** (small data -> simple models; lots of data -> complex models).
- **Interpretability** needs (white-box vs black-box).
- Accuracy vs speed trade-offs.

## Training a Model

The model **learns parameters** from the **training set** by minimising an error/cost function. We then test on data kept aside.

## Splitting the Data

| Method | How It Works | Notes |
|---|---|---|
| **Holdout / Train-Test split** | Split once, e.g. 70% train, 30% test (sometimes a 3-way train/validation/test) | Simple, fast; result depends on the one split |
| **k-Fold Cross-Validation** | Split into k parts; train on k-1, test on 1; repeat k times; average | Reliable, uses all data; more compute |
| **Bootstrap** | Sample rows **with replacement** to make many training sets | Good for small datasets |

## k-Fold Cross-Validation (Important)

1. Split data into **k** equal folds (commonly k = 5 or 10).
2. For each fold: use it as the **test** set, the other k-1 folds as **train**.
3. Record the score each time.
4. **Average** the k scores = final, more trustworthy estimate.

## Model Validation

A separate **validation set** is used to **tune hyperparameters** and compare models, so the **test set** stays untouched for the final, honest score.

## Workflow of Building an ML Model

\`\`\`text
1. Define problem
2. Collect data
3. Pre-process (clean, scale, encode)
4. Feature engineering
5. Train model (on training set)
6. Validate & tune (validation / cross-validation)
7. Evaluate (test set)
8. Deploy & monitor
\`\`\`

## Frequently Asked Exam Questions

**Q1: What is k-fold cross-validation?**

Data is split into k folds; the model trains on k-1 folds and tests on the remaining fold, repeated k times; the k scores are averaged for a reliable estimate.

**Q2: Why split data into train and test sets?**

To check the model on **unseen data** and confirm it **generalises**, instead of just memorising the training data.`,
    detailedNotes: `## Model Selection, Training & Validation - Detailed Explanation

### The Core Problem: Generalisation

We do not care how well a model fits the data it was trained on. We care how well it works on **new, unseen** data. So we must hold some data back for honest testing.

### Train / Validation / Test - Three Roles

| Set | Used For |
|---|---|
| **Training set** | Model learns its parameters |
| **Validation set** | Tune hyperparameters, choose between models |
| **Test set** | Final, one-time, honest performance estimate |

A common split is 60% train / 20% validation / 20% test.

### Holdout Method

- Split once into train and test.
- **Pro**: fast and simple.
- **Con**: the score depends a lot on *which* rows landed in the test set (high variance).

### k-Fold Cross-Validation

\`\`\`text
Data split into 5 folds: [F1][F2][F3][F4][F5]
Round 1: test=F1, train=F2..F5
Round 2: test=F2, train=F1,F3..F5
... and so on for all 5 rounds
Final score = average of the 5 test scores
\`\`\`

- Every row is used for both training and testing (across rounds).
- More reliable than a single holdout, at the cost of more computation.
- **Stratified k-fold** keeps class proportions equal in each fold (good for imbalanced data).
- **Leave-One-Out (LOOCV)** is k-fold with k = number of rows.

### Bootstrap

- Build training sets by sampling rows **with replacement**.
- Rows not picked (about 37%) form the **out-of-bag** test set.
- Especially useful when data is small; it is also the basis of **bagging / random forests**.

### Hyperparameters vs Parameters

- **Parameters** are learned from data (e.g. weights in regression).
- **Hyperparameters** are set by us before training (e.g. k in kNN, tree depth) and tuned using the validation set / cross-validation.

### Frequently Asked Exam Questions

**Q1: Differentiate holdout and k-fold cross-validation.**

Holdout splits the data once (fast but score varies with the split). k-fold splits into k parts and averages k train/test rounds, giving a more reliable estimate using all data.

**Q2: What is the purpose of a validation set?**

To tune hyperparameters and compare models without touching the test set, keeping the final test score honest.

**Q3: Describe the workflow of building an ML model.**

Define problem -> collect data -> pre-process -> feature engineering -> train -> validate/tune -> evaluate on test set -> deploy and monitor.`
  },

  "model-representation-interpretability": {
    topicId: "model-representation-interpretability",
    moduleId: "m2",
    title: "Model Representation & Interpretability",
    examWeight: "9 marks",
    keywords: ["model representation", "geometric", "probabilistic", "logical", "interpretability", "white-box", "black-box"],
    content: `## Definition (What It Is)

**Model representation** is *how a model stores the knowledge it learned* from data. **Interpretability** is *how easily a human can understand why the model made a prediction*.

## How Models Represent Knowledge

| Representation | Idea | Example Models |
|---|---|---|
| **Geometric** | Data as points in space; learn boundaries/distances | kNN, SVM, linear regression |
| **Probabilistic** | Learn probability distributions; predict the most likely class | Naive Bayes, Bayesian networks |
| **Logical / Rule-based** | Knowledge as IF-THEN rules or logic | Decision trees, association rules |

## Interpretability: White-Box vs Black-Box

| Aspect | White-Box (Interpretable) | Black-Box (Opaque) |
|---|---|---|
| Can we explain a decision? | Yes, easily | No, hard |
| Examples | Decision tree, linear/logistic regression, rule lists | Neural networks, random forest, SVM with kernels |
| Accuracy (typical) | Sometimes lower | Often higher |
| Trust / debugging | Easy | Hard |

## Why Interpretability Matters

- **Trust** - users and doctors must trust a decision.
- **Legal / ethical** - some domains (finance, healthcare) require explanations.
- **Debugging** - if we see the reasoning, we can find errors and bias.
- **Fairness** - we can check the model is not discriminating.

There is often an **accuracy vs interpretability trade-off**: simpler models are easier to explain; complex models are more accurate but harder to understand.

## Frequently Asked Exam Questions

**Q1: What is model interpretability and why is it important?**

It is how easily a human can understand why a model predicted something. It matters for trust, legal compliance, debugging, and fairness.

**Q2: Differentiate white-box and black-box models.**

White-box models (decision trees, linear regression) are transparent and explainable; black-box models (neural nets, random forests) are accurate but hard to interpret.`,
    detailedNotes: `## Model Representation & Interpretability - Detailed Explanation

### Knowledge Representation Approaches

**1. Geometric models**
- Treat each data point as a **point in n-dimensional space**.
- Learning = finding **lines, planes, distances, or boundaries**.
- Examples: linear regression (fits a line), SVM (a separating hyperplane), kNN (distance to neighbours).

**2. Probabilistic models**
- Learn the **probability distribution** of the data.
- Use **Bayes' theorem** to compute \`P(class | features)\` and pick the highest.
- Examples: Naive Bayes, Bayesian networks, Hidden Markov Models.

**3. Logical / rule-based models**
- Represent knowledge as human-readable **IF-THEN rules** or tree branches.
- Easy to read and explain.
- Examples: decision trees, rule learners, association rules.

### Interpretability in Depth

**White-box (transparent) models**
- The internal logic is visible.
- A decision tree shows the exact path of conditions that led to a prediction.
- Linear regression shows each feature's weight (coefficient).

**Black-box (opaque) models**
- Internal logic is too complex to follow directly.
- A deep neural network has millions of weights -> no simple explanation.
- We often use **post-hoc explanation tools** (e.g. LIME, SHAP, feature importance) to peek inside.

### The Accuracy vs Interpretability Trade-off

\`\`\`text
Interpretability  HIGH  <-------------------->  LOW
Models:           Linear/Tree   Random Forest   Deep Neural Nets
Accuracy(typical) Lower         Medium-High      High
\`\`\`

- In **high-stakes** fields (medicine, credit, law) we often prefer a slightly less accurate but **explainable** model.
- In low-risk fields (movie recommendation) a black box is fine.

### Why It Matters (Expanded)

1. **Trust** - people accept decisions they can understand.
2. **Accountability / law** - regulations (e.g. "right to explanation") demand it.
3. **Debugging & improvement** - visible logic reveals mistakes.
4. **Bias detection** - we can check for unfair use of features like gender or race.

### Frequently Asked Exam Questions

**Q1: Explain the different ways models represent knowledge.**

Geometric (points and boundaries in space - SVM, kNN), probabilistic (distributions and Bayes - Naive Bayes), and logical/rule-based (IF-THEN rules - decision trees).

**Q2: Compare white-box and black-box models with examples.**

White-box (decision tree, linear regression) are interpretable and easy to explain; black-box (neural networks, random forest) are accurate but opaque.

**Q3: Discuss the accuracy-interpretability trade-off.**

Simple models are easy to explain but may be less accurate; complex models are more accurate but hard to interpret. The choice depends on how critical explanations are in the domain.`
  },

  "model-evaluation-improvement": {
    topicId: "model-evaluation-improvement",
    moduleId: "m2",
    title: "Model Evaluation & Performance Improvement",
    examWeight: "9 marks",
    keywords: ["confusion matrix", "accuracy", "precision", "recall", "f1 score", "roc", "auc", "bias variance", "overfitting", "underfitting"],
    content: `## Definition (What It Is)

**Model evaluation** measures how well a model performs using clear metrics. **Improvement** is the set of techniques used to raise that performance. For classification, almost everything starts from the **confusion matrix**.

## Confusion Matrix

|  | Predicted Positive | Predicted Negative |
|---|---|---|
| **Actual Positive** | TP (True Positive) | FN (False Negative) |
| **Actual Negative** | FP (False Positive) | TN (True Negative) |

## Key Metrics (with Formulas)

| Metric | Formula | Meaning |
|---|---|---|
| **Accuracy** | \`(TP+TN)/(TP+TN+FP+FN)\` | Overall fraction correct |
| **Precision (P)** | \`TP/(TP+FP)\` | Of predicted positives, how many are right |
| **Recall / Sensitivity (R)** | \`TP/(TP+FN)\` | Of actual positives, how many were caught |
| **Specificity** | \`TN/(TN+FP)\` | Of actual negatives, how many were caught |
| **F1 Score** | \`F1 = 2PR/(P+R)\` | Harmonic mean of precision and recall |

## ROC and AUC

- **ROC curve** plots **True Positive Rate (recall)** vs **False Positive Rate** at different thresholds.
- **AUC (Area Under Curve)** = single number; **1.0 = perfect**, **0.5 = random guessing**.

## Bias-Variance Tradeoff

- **Bias** = error from wrong/too-simple assumptions (model misses the pattern).
- **Variance** = error from being too sensitive to the training data (model memorises noise).
- **High bias -> underfitting; high variance -> overfitting.** We want a balance (low total error).

## Overfitting vs Underfitting

| | Underfitting | Overfitting |
|---|---|---|
| Cause | Model too simple | Model too complex |
| Training error | High | Very low |
| Test error | High | High |
| Linked to | High bias | High variance |

## Methods to Improve Performance

1. **More / better data** - clean, balanced, larger datasets.
2. **Feature selection / engineering** - remove noise, add useful features.
3. **Regularization** - L1/L2 penalties to reduce overfitting.
4. **Ensembles** - combine models (bagging, boosting, random forest).
5. **Hyperparameter tuning** - grid/random search.
6. **Cross-validation** - more reliable evaluation and tuning.

## Worked Example

Confusion matrix: TP = 40, FP = 10, FN = 5, TN = 45.

- Accuracy = \`(40+45)/100 = 0.85\`
- Precision = \`40/(40+10) = 0.80\`
- Recall = \`40/(40+5) = 0.889\`
- F1 = \`2*0.80*0.889/(0.80+0.889) = 0.842\`

## Frequently Asked Exam Questions

**Q1: Define precision, recall, and F1 score with formulas.**

Precision = \`TP/(TP+FP)\`; Recall = \`TP/(TP+FN)\`; F1 = \`2PR/(P+R)\` (harmonic mean).

**Q2: Explain overfitting and underfitting.**

Underfitting = model too simple, high error everywhere (high bias). Overfitting = model memorises training data, low train error but high test error (high variance).`,
    detailedNotes: `## Model Evaluation & Improvement - Detailed Explanation

### Why Accuracy Alone Is Not Enough

If 95% of emails are not spam, a model that says "never spam" gets **95% accuracy** but is useless. So we need precision, recall, and F1, especially for **imbalanced** data.

### Confusion Matrix Terms

- **TP** - predicted positive, actually positive (correct hit).
- **TN** - predicted negative, actually negative (correct reject).
- **FP** - predicted positive, actually negative (**false alarm / Type I error**).
- **FN** - predicted negative, actually positive (**miss / Type II error**).

### Precision vs Recall - When Each Matters

- **High precision needed** when false alarms are costly (e.g. flagging a good email as spam).
- **High recall needed** when misses are costly (e.g. missing a cancer diagnosis).
- **F1** balances both - use when you need one combined number.

\`\`\`text
Precision = TP / (TP + FP)
Recall    = TP / (TP + FN)
F1        = 2 * P * R / (P + R)
\`\`\`

### ROC / AUC

- Vary the decision threshold; plot TPR vs FPR.
- A curve hugging the **top-left** is good.
- **AUC**: 1.0 perfect, 0.9 excellent, 0.5 random, < 0.5 worse than random.

### Bias-Variance in Depth

\`\`\`text
Total Error = Bias^2 + Variance + Irreducible Error
\`\`\`

- **High bias (underfit)**: simple model -> high train AND test error.
- **High variance (overfit)**: complex model -> low train error, high test error.
- The goal is the **sweet spot** with lowest total test error.

### Detecting Overfitting

- Big gap: **low training error but high test error** -> overfitting.
- Both errors high -> underfitting.
- Use a **validation curve** or cross-validation to spot it.

### Methods to Improve a Model (Detailed)

| Method | How It Helps |
|---|---|
| More / cleaner data | Reduces variance, better generalisation |
| Feature engineering / selection | Removes noise, adds signal |
| Regularization (L1/L2) | Penalises complexity -> less overfitting |
| Ensembles (bagging/boosting) | Combine many models -> lower error |
| Hyperparameter tuning | Finds best settings (grid/random search) |
| Cross-validation | Reliable evaluation and tuning |
| Early stopping (for iterative models) | Stops before it overfits |

### Frequently Asked Exam Questions

**Q1: What is a confusion matrix? Derive accuracy, precision, recall, F1 from it.**

A 2x2 table of TP, FP, FN, TN. Accuracy = (TP+TN)/total; Precision = TP/(TP+FP); Recall = TP/(TP+FN); F1 = 2PR/(P+R).

**Q2: Explain the bias-variance tradeoff.**

Bias is error from oversimplification (underfitting); variance is error from over-sensitivity to training data (overfitting). Total error is minimised by balancing the two.

**Q3: List methods to improve model performance.**

More/better data, feature selection, regularization, ensembles, hyperparameter tuning, and cross-validation.`
  },

  "probability-basics": {
    topicId: "probability-basics",
    moduleId: "m3",
    title: "Statistics in ML & Interpretations of Probability",
    examWeight: "9 marks",
    keywords: ["statistics", "probability", "frequentist", "bayesian", "descriptive statistics", "mean", "variance"],
    content: `## Definition (What It Is)

**Statistics** is the science of collecting, summarising, and drawing conclusions from data. **Probability** measures how likely an event is (a number between 0 and 1). ML uses both to learn from data and quantify uncertainty.

## Importance of Statistical Tools in ML

- **Summarise data** (mean, variance) to understand it.
- **Quantify uncertainty** in predictions (probabilities, confidence).
- **Model relationships** between variables.
- Underpin many algorithms (Naive Bayes, regression, hypothesis testing).
- Help **evaluate** models and detect significant differences.

## Frequentist vs Bayesian Interpretation

| Aspect | Frequentist | Bayesian |
|---|---|---|
| Meaning of probability | **Long-run frequency** of an event | **Degree of belief** in an event |
| Prior knowledge | Not used | Uses a **prior** that updates with data |
| Parameters | Fixed but unknown | Treated as random with a distribution |
| Example | "Coin lands heads 50% over many tosses" | "I am 70% sure this coin is fair" |
| ML link | MLE | MAP, Bayesian methods |

## Basic Descriptive Statistics

| Measure | What It Tells | Formula (idea) |
|---|---|---|
| **Mean** | Average | \`sum(x)/n\` |
| **Median** | Middle value | middle of sorted data |
| **Mode** | Most frequent value | - |
| **Variance** | Spread around the mean | \`var = sum((x - mean)^2)/n\` |
| **Std deviation** | Spread (same units) | \`sd = sqrt(variance)\` |

## Worked Example

Data: 2, 4, 4, 6, 8.

- Mean = \`(2+4+4+6+8)/5 = 24/5 = 4.8\`
- Mode = 4
- Variance = \`((2-4.8)^2+(4-4.8)^2+(4-4.8)^2+(6-4.8)^2+(8-4.8)^2)/5 = (7.84+0.64+0.64+1.44+10.24)/5 = 4.16\`

## Frequently Asked Exam Questions

**Q1: Why are statistical tools important in ML?**

They summarise data, quantify uncertainty, model relationships, drive algorithms, and help evaluate models.

**Q2: Differentiate frequentist and Bayesian interpretations of probability.**

Frequentist sees probability as a long-run frequency with fixed parameters; Bayesian sees it as a degree of belief that updates from a prior using data.`,
    detailedNotes: `## Statistics & Probability in ML - Detailed Explanation

### What Is Probability?

A number from **0 (impossible)** to **1 (certain)** measuring how likely an event is. For a fair coin, \`P(heads) = 0.5\`.

Basic rules:
- \`0 <= P(A) <= 1\`
- \`P(sure event) = 1\`
- \`P(A or B) = P(A) + P(B) - P(A and B)\`
- For independent events: \`P(A and B) = P(A) * P(B)\`

### Why Statistics Matters in ML

1. **Understanding data** - central tendency (mean/median/mode) and spread (variance/SD).
2. **Uncertainty** - models output probabilities, not just labels.
3. **Inference** - decide whether a result is real or due to chance.
4. **Foundations** - Naive Bayes, linear regression, and many methods are statistical at heart.

### Frequentist View (Detailed)

- Probability = **relative frequency** over many repetitions.
- Parameters (like the true mean) are **fixed but unknown**.
- Estimation uses **Maximum Likelihood Estimation (MLE)**.
- No prior belief is included.

### Bayesian View (Detailed)

- Probability = **degree of belief**, updated as evidence arrives.
- Uses **Bayes' theorem**: \`posterior ∝ likelihood * prior\`.
- Parameters are **random variables** with distributions.
- Estimation uses **MAP** (maximum a posteriori).

### Descriptive Statistics in Depth

**Measures of central tendency:** mean, median, mode.

**Measures of spread:**
- **Range** = max - min.
- **Variance** = average squared distance from the mean.
- **Standard deviation** = \`sqrt(variance)\` (same units as data).

\`\`\`text
mean     = (sum of all values) / n
variance = sum((x - mean)^2) / n
std dev  = sqrt(variance)
\`\`\`

### Frequently Asked Exam Questions

**Q1: Explain the importance of statistics/probability in machine learning.**

They summarise and describe data, quantify uncertainty in predictions, model relationships between variables, form the basis of algorithms like Naive Bayes and regression, and support model evaluation.

**Q2: Compare frequentist and Bayesian probability with an example.**

Frequentist: long-run frequency, fixed parameters, MLE ("heads come up 50% over many tosses"). Bayesian: degree of belief, prior updated by data, MAP ("70% sure the coin is fair, update after tosses").

**Q3: Define mean, variance, and standard deviation.**

Mean is the average; variance is the average squared deviation from the mean; standard deviation is the square root of variance (spread in original units).`
  },

  "random-variables-distributions": {
    topicId: "random-variables-distributions",
    moduleId: "m3",
    title: "Random Variables & Probability Distributions",
    examWeight: "6 marks",
    keywords: ["random variable", "discrete", "continuous", "pmf", "pdf", "cdf", "bernoulli", "binomial", "normal", "multinomial"],
    content: `## Definition (What It Is)

A **random variable (RV)** is a variable whose value is a numerical outcome of a random experiment. A **probability distribution** describes how probabilities are spread over the values of the RV.

## Types of Random Variables

| Type | Values | Example |
|---|---|---|
| **Discrete** | Countable (0,1,2,...) | Number of heads in 3 coin tosses |
| **Continuous** | Any value in a range | Height, weight, time |

## PMF, PDF, CDF

| Term | Applies To | Meaning |
|---|---|---|
| **PMF** (Probability Mass Function) | Discrete RV | Gives \`P(X = x)\` for each exact value |
| **PDF** (Probability Density Function) | Continuous RV | Gives density; probability = **area under the curve** over a range |
| **CDF** (Cumulative Distribution Function) | Both | Gives \`P(X <= x)\` (running total) |

For a continuous RV, \`P(X = exact value) = 0\`; we only talk about ranges.

## Important Distributions

| Distribution | Type | Describes | Key Parameter(s) |
|---|---|---|---|
| **Bernoulli** | Discrete | Single yes/no trial | p (success prob) |
| **Binomial** | Discrete | Number of successes in n trials | n, p |
| **Multinomial** | Discrete | Counts over >2 categories in n trials | n, p1..pk |
| **Normal (Gaussian)** | Continuous | Bell curve, many natural quantities | mean (mu), SD (sigma) |

## Discrete vs Continuous Distributions

| Aspect | Discrete | Continuous |
|---|---|---|
| Values | Countable | Uncountable (range) |
| Uses | PMF | PDF |
| \`P(X = x)\` | Can be > 0 | Always 0 |
| Example | Binomial, Poisson | Normal, Exponential |

## Worked Example (Binomial)

Toss a fair coin (p = 0.5) **3 times**. Probability of exactly 2 heads:

\`P(X=2) = C(3,2) * 0.5^2 * 0.5^1 = 3 * 0.25 * 0.5 = 0.375\`

## Frequently Asked Exam Questions

**Q1: Differentiate PMF and PDF.**

PMF gives the probability of an exact value for a **discrete** RV; PDF gives the probability **density** for a **continuous** RV, where probability is the area under the curve over a range.

**Q2: What is a CDF?**

The Cumulative Distribution Function gives \`P(X <= x)\` - the probability the RV is at most x.`,
    detailedNotes: `## Random Variables & Distributions - Detailed Explanation

### Random Variables

A random variable maps outcomes of an experiment to numbers.
- **Discrete**: e.g. \`X = number of heads in 3 tosses\` -> X in {0,1,2,3}.
- **Continuous**: e.g. \`Y = time to run 100m\` -> any positive real number.

### PMF (Discrete)

- Lists \`P(X = x)\` for each value.
- All probabilities sum to 1: \`sum P(X=x) = 1\`.
- Example (one fair die): \`P(X=k) = 1/6\` for k = 1..6.

### PDF (Continuous)

- A curve \`f(x)\`; probability over [a,b] is the **area** under it.
- \`P(a <= X <= b) = area under f(x) from a to b\`.
- Total area = 1.
- \`P(X = single point) = 0\`.

### CDF (Both)

- \`F(x) = P(X <= x)\`.
- Non-decreasing, goes from 0 to 1.
- For discrete RVs it steps up; for continuous it rises smoothly.

### The Key Distributions

**Bernoulli** - one trial, two outcomes.
\`\`\`text
P(X=1) = p   (success)
P(X=0) = 1-p (failure)
\`\`\`

**Binomial** - n independent Bernoulli trials.
\`\`\`text
P(X=k) = C(n,k) * p^k * (1-p)^(n-k)
mean = n*p
\`\`\`

**Multinomial** - extension of binomial to **more than two** outcomes across n trials (e.g. rolling a die n times and counting each face).

**Normal (Gaussian)** - the bell curve.
- Symmetric about the mean; defined by mean (mu) and SD (sigma).
- **Empirical rule**: ~68% within 1 SD, ~95% within 2 SD, ~99.7% within 3 SD.
- Extremely common because of the Central Limit Theorem.

### Frequently Asked Exam Questions

**Q1: Define discrete and continuous random variables with examples.**

Discrete take countable values (number of heads); continuous take any value in a range (height). Discrete use a PMF, continuous use a PDF.

**Q2: Explain Bernoulli, Binomial, and Normal distributions.**

Bernoulli models one yes/no trial (parameter p); Binomial counts successes in n trials (n, p); Normal is the continuous bell curve defined by mean and standard deviation.

**Q3: What is the difference between PDF and CDF?**

PDF gives the density at a point (probability is area under it over a range); CDF gives the cumulative probability \`P(X <= x)\`.`
  },

  "bayesian-concept-learning": {
    topicId: "bayesian-concept-learning",
    moduleId: "m3",
    title: "Bayesian Concept Learning: Prior, Likelihood, Posterior",
    examWeight: "6 marks",
    keywords: ["bayesian", "prior", "likelihood", "posterior", "map", "mle", "concept learning"],
    content: `## Definition (What It Is)

**Bayesian concept learning** is learning a concept (hypothesis) from data by **updating beliefs** using Bayes' theorem. We start with a **prior** belief, see **data**, and compute an updated **posterior** belief.

## The Three Key Terms

| Term | Symbol | Meaning |
|---|---|---|
| **Prior** | \`P(H)\` | Belief in hypothesis H **before** seeing data |
| **Likelihood** | \`P(D \\| H)\` | How well H explains the observed data D |
| **Posterior** | \`P(H \\| D)\` | Updated belief in H **after** seeing data |

**Bayes' rule:** \`posterior = (likelihood * prior) / evidence\`, i.e. \`P(H|D) = P(D|H) * P(H) / P(D)\`.

## MAP vs MLE

| Aspect | MLE (Maximum Likelihood) | MAP (Maximum A Posteriori) |
|---|---|---|
| Maximises | \`P(D \\| H)\` (likelihood only) | \`P(D \\| H) * P(H)\` (likelihood × prior) |
| Uses prior? | No | Yes |
| Best when | Lots of data | Limited data / useful prior |
| Result if prior is flat | Same as MAP | Reduces to MLE |

So **MAP = MLE + prior**. When the prior is uniform, MAP equals MLE.

## Importance of Bayesian Methods in ML

- Naturally handle **uncertainty** (give probabilities, not just answers).
- Can **include prior knowledge**.
- Update beliefs as **new data** arrives (online learning).
- Basis of **Naive Bayes**, Bayesian networks, and probabilistic models.
- Work well with **small datasets** thanks to the prior.

## Frequently Asked Exam Questions

**Q1: Define prior, likelihood, and posterior.**

Prior \`P(H)\` is belief before data; likelihood \`P(D|H)\` is how well the hypothesis explains the data; posterior \`P(H|D)\` is the updated belief after data.

**Q2: Differentiate MAP and MLE.**

MLE maximises only the likelihood; MAP maximises likelihood times the prior. With a uniform prior, MAP reduces to MLE.`,
    detailedNotes: `## Bayesian Concept Learning - Detailed Explanation

### The Big Idea

We **learn by updating beliefs**. Before data, we have a prior. Data gives a likelihood. Bayes' rule combines them into a posterior, which becomes our new belief.

\`\`\`text
                 P(D | H) * P(H)
P(H | D)  =  ---------------------
                     P(D)

posterior  =  (likelihood * prior) / evidence
\`\`\`

### Each Term Explained

- **Prior P(H)** - what we believe about hypothesis H before any data (can come from past experience).
- **Likelihood P(D|H)** - if H were true, how probable is the observed data?
- **Evidence P(D)** - total probability of the data over all hypotheses (a normaliser).
- **Posterior P(H|D)** - the final, updated belief.

### MLE in Detail

- Picks the hypothesis/parameter that makes the **observed data most likely**.
- \`H_MLE = argmax P(D | H)\`.
- Ignores any prior -> good when data is plentiful, but can overfit small data.

### MAP in Detail

- Picks the hypothesis with the **highest posterior**.
- \`H_MAP = argmax P(D | H) * P(H)\`.
- Includes prior knowledge -> more robust with small data.
- Acts like **regularization** (the prior pulls estimates toward sensible values).

### Tiny Example (Coin)

You see 8 heads in 10 tosses.
- **MLE** says \`p = 8/10 = 0.8\`.
- **MAP** with a prior that coins are usually fair pulls the estimate toward 0.5 (e.g. ~0.65), which is more reasonable for so few tosses.

### Why Bayesian Methods Are Important

1. Output **probabilities** -> express confidence.
2. **Combine prior knowledge** with data.
3. **Update incrementally** as new data arrives.
4. Robust on **small datasets**.
5. Foundation of Naive Bayes and probabilistic graphical models.

### Frequently Asked Exam Questions

**Q1: Explain Bayesian concept learning with prior, likelihood, and posterior.**

We start with a prior belief P(H), observe data with likelihood P(D|H), and use Bayes' rule to get the posterior P(H|D) = P(D|H)P(H)/P(D), our updated belief.

**Q2: Compare MAP and MLE estimation.**

MLE maximises the likelihood P(D|H) only; MAP maximises P(D|H)P(H), adding a prior. MAP equals MLE when the prior is uniform; MAP is better for small data.

**Q3: Why are Bayesian methods important in ML?**

They model uncertainty as probabilities, incorporate prior knowledge, update with new data, and work well with small datasets - the basis of Naive Bayes and Bayesian networks.`
  },

  "bayes-naive-bayes": {
    topicId: "bayes-naive-bayes",
    moduleId: "m3",
    title: "Bayes' Theorem & Naive Bayes Classifier",
    examWeight: "9 marks",
    keywords: ["bayes theorem", "naive bayes", "conditional probability", "independence", "classifier"],
    content: `## Definition (What It Is)

**Bayes' theorem** lets us reverse a conditional probability - compute \`P(A|B)\` from \`P(B|A)\`. The **Naive Bayes classifier** applies it to predict the class of an item, assuming all features are **independent** given the class.

## Bayes' Theorem

\`\`\`text
P(A | B) = P(B | A) * P(A) / P(B)
\`\`\`

In classification terms:

\`\`\`text
P(class | features) = P(features | class) * P(class) / P(features)
\`\`\`

We pick the class with the **highest** \`P(class | features)\`.

## Why "Naive"?

It **naively assumes all features are independent** of each other given the class. This is rarely fully true, but it simplifies the maths hugely and still works very well in practice (e.g. spam filtering).

With independence:

\`\`\`text
P(features | class) = P(f1|class) * P(f2|class) * ... * P(fn|class)
\`\`\`

## Steps of Naive Bayes

1. Compute the **prior** \`P(class)\` for each class.
2. Compute the **likelihood** \`P(feature | class)\` for each feature/class.
3. For a new item, multiply prior × all feature likelihoods for each class.
4. Pick the class with the **highest** product.

## Worked Example (Play Tennis?)

Training (Outlook only): of 5 "Yes" days, Sunny appeared 2 times; of 3 "No" days, Sunny appeared 2 times. Priors: \`P(Yes)=5/8\`, \`P(No)=3/8\`.

New day = Sunny:
- \`Yes score = P(Yes) * P(Sunny|Yes) = (5/8)*(2/5) = 0.25\`
- \`No score  = P(No)  * P(Sunny|No)  = (3/8)*(2/3) = 0.25\`

Here they tie; with more features (humidity, wind) the products separate and we pick the larger one.

## Frequently Asked Exam Questions

**Q1: State Bayes' theorem.**

\`P(A|B) = P(B|A) * P(A) / P(B)\` - it computes the probability of A given B from the reverse conditional.

**Q2: Why is the Naive Bayes classifier called "naive"?**

Because it assumes all features are **conditionally independent** given the class, which is a simplifying (often unrealistic) assumption.`,
    detailedNotes: `## Bayes' Theorem & Naive Bayes - Detailed Explanation

### Bayes' Theorem Derivation (Intuition)

From conditional probability:
\`\`\`text
P(A and B) = P(A|B) * P(B) = P(B|A) * P(A)
=> P(A|B) = P(B|A) * P(A) / P(B)
\`\`\`

- \`P(A)\` = prior, \`P(B|A)\` = likelihood, \`P(A|B)\` = posterior, \`P(B)\` = evidence.

### Naive Bayes Classifier

Goal: given features \`x = (f1, f2, ..., fn)\`, find the class c that maximises \`P(c | x)\`.

\`\`\`text
P(c | x) ∝ P(c) * P(f1|c) * P(f2|c) * ... * P(fn|c)
\`\`\`

We drop \`P(x)\` because it is the same for every class (just a normaliser). We pick the class with the largest product - this is the **MAP** decision.

### The Independence Assumption

- "Naive" because it pretends features do not affect each other given the class.
- Reality: features often correlate, but the classifier still performs surprisingly well.

### Handling Zero Probabilities - Laplace Smoothing

If a feature value never appears with a class, its likelihood is 0 and zeroes the whole product. **Laplace (add-one) smoothing** fixes this:
\`\`\`text
P(feature|class) = (count + 1) / (total + number_of_values)
\`\`\`

### Types of Naive Bayes

| Type | Used For |
|---|---|
| **Gaussian NB** | Continuous features (assumes normal distribution) |
| **Multinomial NB** | Counts (e.g. word frequencies in text) |
| **Bernoulli NB** | Binary features (word present / absent) |

### Worked Spam Example (Intuition)

- Prior: \`P(spam) = 0.4\`, \`P(not-spam) = 0.6\`.
- Email contains "free" and "win".
- Multiply \`P(spam) * P(free|spam) * P(win|spam)\` and compare to the not-spam product.
- Larger product wins -> classify accordingly.

### Advantages and Limitations

**Advantages:** fast, simple, works with small data, great for text/spam.
**Limitations:** the independence assumption is unrealistic; needs smoothing for unseen values.

### Frequently Asked Exam Questions

**Q1: Explain the Naive Bayes classifier with the independence assumption.**

It uses Bayes' theorem to compute P(class|features) and assumes features are conditionally independent given the class, so P(features|class) is the product of individual P(feature|class). It picks the class with the highest product.

**Q2: Derive/explain Bayes' theorem and its terms.**

\`P(A|B) = P(B|A)P(A)/P(B)\`: prior P(A), likelihood P(B|A), evidence P(B), posterior P(A|B).

**Q3: What is Laplace smoothing and why is it needed?**

It adds 1 to each count so unseen feature/class combinations do not get zero probability, which would otherwise zero out the entire product.`
  },

  "supervised-classification-intro": {
    topicId: "supervised-classification-intro",
    moduleId: "m4",
    title: "Supervised Learning: Classification & Regression",
    examWeight: "9 marks",
    keywords: ["supervised learning", "classification", "regression", "classification process", "regression analysis", "applications"],
    content: `## Definition (What It Is)

**Supervised learning** trains a model on **labelled data** (inputs with known correct outputs) so it can predict the output for new inputs. Its two branches are **classification** (predict a category) and **regression** (predict a number).

## Examples of Supervised Learning

- Email -> spam / not-spam (classification).
- Image -> cat / dog (classification).
- House features -> price (regression).
- Hours studied -> exam score (regression).

## The Classification Process / Model

1. **Collect labelled data** (inputs + class labels).
2. **Pre-process** and split into train/test.
3. **Train** a classifier to learn the input -> class mapping.
4. **Test/evaluate** (accuracy, precision, recall).
5. **Deploy** to classify new, unseen inputs.

## Classification vs Regression

| Aspect | Classification | Regression |
|---|---|---|
| Output | **Category / class** | **Continuous number** |
| Example | Spam or not | House price |
| Algorithms | kNN, decision tree, SVM, Naive Bayes | Linear regression, regression trees |
| Evaluation | Accuracy, precision, recall, F1 | MSE, RMSE, R-squared |

## Regression Analysis

**Regression** models the relationship between input(s) and a **numeric output**. The simplest is **linear regression**: \`y = a + b*x\`. It finds the best-fit line that minimises prediction error.

## Applications of Regression

- Predicting **house/stock prices**.
- **Sales / demand forecasting**.
- Estimating **temperature** or rainfall.
- **Risk** and trend analysis in finance and medicine.

## Frequently Asked Exam Questions

**Q1: Differentiate classification and regression.**

Classification predicts a **category** (spam/not-spam); regression predicts a **continuous value** (price). They use different algorithms and evaluation metrics.

**Q2: List applications of regression.**

Price prediction, sales forecasting, weather estimation, and risk/trend analysis.`,
    detailedNotes: `## Supervised Learning - Detailed Explanation

### What Makes It "Supervised"?

Like a student with an answer key, the model learns from **inputs paired with correct outputs (labels)**. It adjusts itself to reduce the gap between its predictions and the known answers.

\`\`\`python
model = train(X_train, y_train)   # X = inputs, y = known labels
y_pred = model.predict(X_test)    # predict for unseen inputs
\`\`\`

### Two Types

**1. Classification** - output is a **discrete class**.
- **Binary**: two classes (spam / not-spam).
- **Multiclass**: more than two (digit 0-9).
- Algorithms: kNN, decision tree, random forest, SVM, Naive Bayes, logistic regression.

**2. Regression** - output is a **continuous number**.
- Algorithms: linear/multiple regression, regression trees, SVR.

### The Classification Workflow (Detailed)

1. **Problem definition** - what classes exist?
2. **Data collection & labelling**.
3. **Pre-processing** - clean, encode, scale.
4. **Train-test split** (e.g. 70/30) or cross-validation.
5. **Model training** - learn the decision boundary.
6. **Evaluation** - confusion matrix, accuracy, precision, recall, F1.
7. **Deployment** - classify new data.

### Regression Analysis (Detailed)

- Finds a function \`y = f(x)\` mapping inputs to a numeric output.
- **Simple linear**: one input, \`y = a + b*x\`.
- **Multiple linear**: many inputs, \`y = a + b1*x1 + b2*x2 + ...\`.
- Fit by **least squares** (minimise sum of squared errors).

### Classification vs Regression - Summary

| Feature | Classification | Regression |
|---|---|---|
| Target | Discrete | Continuous |
| Question | "Which class?" | "How much?" |
| Error metric | Accuracy/F1 | MSE/RMSE/R-squared |
| Boundary | Decision boundary | Best-fit curve/line |

### Frequently Asked Exam Questions

**Q1: What is supervised learning? Give examples.**

Learning from labelled data (inputs + correct outputs) to predict outputs for new inputs - e.g. spam detection (classification) and house-price prediction (regression).

**Q2: Explain the classification process/model.**

Collect labelled data -> pre-process & split -> train classifier -> evaluate (accuracy, precision, recall) -> deploy to classify unseen inputs.

**Q3: Compare classification and regression with examples and metrics.**

Classification predicts categories (spam/not-spam), evaluated by accuracy/F1; regression predicts numbers (price), evaluated by MSE/R-squared.`
  },

  "knn-decision-tree": {
    topicId: "knn-decision-tree",
    moduleId: "m4",
    title: "kNN & Decision Tree Classifiers",
    examWeight: "9 marks",
    keywords: ["knn", "k nearest neighbors", "decision tree", "entropy", "information gain", "gini index", "distance"],
    content: `## Definition (What It Is)

**kNN (k-Nearest Neighbours)** classifies a new point by looking at the **k closest** labelled points and taking a majority vote. A **Decision Tree** splits data using feature questions into a tree of IF-THEN rules ending in class predictions.

## kNN: How It Works

1. Choose **k** (number of neighbours).
2. Compute **distance** from the new point to all training points.
3. Pick the **k nearest** points.
4. **Majority class** among them = prediction (for regression, average their values).

**Distance (Euclidean):** \`dist = sqrt((x1-x2)^2 + (y1-y2)^2 + ...)\`

**Choosing k:**
- Small k -> sensitive to noise (overfit).
- Large k -> smoother but may miss detail (underfit).
- Often pick an **odd** k (avoids ties) via cross-validation.

kNN is a **lazy learner**: no real training; it just stores the data and computes at prediction time.

## Decision Tree: How It Works

A tree of decisions:
- **Root/internal nodes** = feature tests.
- **Branches** = outcomes.
- **Leaves** = class labels.

At each node it picks the feature that **best splits** the data, measured by:

| Measure | Formula (idea) | Goal |
|---|---|---|
| **Entropy** | \`entropy = -Σ p*log2(p)\` | Measures impurity/disorder (0 = pure) |
| **Information Gain** | \`IG = entropy(parent) - weighted entropy(children)\` | Pick the split with the **highest** IG |
| **Gini Index** | \`gini = 1 - Σ p^2\` | Impurity; pick split with **lowest** Gini |

## Tiny Decision Tree Example (Entropy)

A node with 10 samples: 5 Yes, 5 No.
- \`entropy = -(0.5*log2(0.5) + 0.5*log2(0.5)) = -(0.5*(-1)+0.5*(-1)) = 1.0\` (maximum impurity).

If a split makes a child all-Yes (5 Yes, 0 No): \`entropy = 0\` (pure). High information gain -> good split.

## Frequently Asked Exam Questions

**Q1: How does the kNN algorithm work?**

Compute the distance from the new point to all training points, take the k nearest, and assign the majority class among them (average for regression).

**Q2: What are entropy and information gain in a decision tree?**

Entropy \`= -Σ p*log2(p)\` measures impurity; information gain is the reduction in entropy after a split. The tree chooses the split with the highest information gain.`,
    detailedNotes: `## kNN & Decision Trees - Detailed Explanation

### kNN in Depth

**Idea:** "You are like your neighbours." Similar inputs have similar outputs.

**Algorithm:**
\`\`\`text
1. Pick k.
2. For a new point, compute distance to every training point.
3. Sort and take the k nearest.
4. Classification: majority vote. Regression: average.
\`\`\`

**Distance metrics:**
- **Euclidean**: \`sqrt(Σ (a_i - b_i)^2)\` (most common).
- **Manhattan**: \`Σ |a_i - b_i|\`.

**Important:** scale features first (normalize), or large-range features dominate the distance.

**Pros:** simple, no training, works for multi-class.
**Cons:** slow at prediction (checks all points), needs scaling, struggles in high dimensions.

### Decision Trees in Depth

**Structure:** root node -> internal test nodes -> leaf (class) nodes.

**How a split is chosen:**
- Try each feature; measure how "pure" the resulting groups are.
- Use **entropy/information gain** (ID3, C4.5) or **Gini index** (CART).
- Keep splitting until pure leaves or a stopping rule (max depth, min samples).

**Entropy:**
\`\`\`text
entropy = - Σ p_i * log2(p_i)
\`\`\`
- 0 = perfectly pure (one class), 1 = maximally mixed (2 equal classes).

**Information Gain:**
\`\`\`text
IG = entropy(parent) - Σ (n_child/n_parent) * entropy(child)
\`\`\`
- Choose the feature with the **maximum IG**.

**Gini Index:**
\`\`\`text
gini = 1 - Σ p_i^2
\`\`\`
- 0 = pure; choose the split with the **lowest Gini**.

**Pros:** easy to understand (white-box), handles numeric & categorical, no scaling needed.
**Cons:** can **overfit** (deep trees); fixed by **pruning** or using a random forest.

### Worked Information Gain (Intuition)

Parent: 14 samples (9 Yes, 5 No), entropy ≈ 0.94.
A feature splits into groups whose weighted entropy ≈ 0.69.
\`\`\`text
IG = 0.94 - 0.69 = 0.25
\`\`\`
The feature with the highest such IG becomes the node.

### Frequently Asked Exam Questions

**Q1: Explain the kNN algorithm and how to choose k.**

Classify a new point by majority vote of its k nearest neighbours (by distance). Small k overfits (noise-sensitive); large k underfits; choose an odd k via cross-validation, and scale features first.

**Q2: Explain how a decision tree selects splits using entropy and information gain.**

Entropy measures impurity \`(-Σ p*log2 p)\`; information gain is the drop in entropy after a split. The tree greedily picks the feature with the highest information gain (or lowest Gini) at each node.

**Q3: State advantages and disadvantages of decision trees.**

Advantages: interpretable, no scaling, handles mixed data. Disadvantages: prone to overfitting (needs pruning) and unstable to small data changes.`
  },

  "random-forest-svm": {
    topicId: "random-forest-svm",
    moduleId: "m4",
    title: "Random Forest & Support Vector Machine (SVM)",
    examWeight: "9 marks",
    keywords: ["random forest", "bagging", "ensemble", "svm", "hyperplane", "margin", "support vectors", "kernel"],
    content: `## Definition (What It Is)

A **Random Forest** is an **ensemble** of many decision trees whose votes are combined for a more accurate, stable result. **SVM (Support Vector Machine)** finds the **best separating hyperplane** that divides classes with the **maximum margin**.

## Random Forest

- Builds **many decision trees**, each on a random sample of data (**bagging**) and a random subset of features.
- **Classification**: majority vote of trees. **Regression**: average of trees.
- The randomness makes trees diverse, so combining them **reduces overfitting and variance**.

**Bagging (Bootstrap Aggregating):** train each tree on a bootstrap sample (sampled with replacement); aggregate predictions.

## SVM

Key terms:

| Term | Meaning |
|---|---|
| **Hyperplane** | The decision boundary separating classes |
| **Margin** | Distance between the hyperplane and the nearest points |
| **Support vectors** | The closest points that define the margin |
| **Kernel** | A function that maps data to higher dimensions for non-linear separation |

SVM picks the hyperplane with the **maximum margin** (best gap between classes). For non-linearly separable data, **kernels** (linear, polynomial, RBF) let it separate in higher dimensions (the "kernel trick").

## Decision Tree vs Random Forest

| Aspect | Decision Tree | Random Forest |
|---|---|---|
| Structure | Single tree | Many trees (ensemble) |
| Overfitting | High | Low (averaging reduces it) |
| Accuracy | Lower | Higher |
| Interpretability | High (white-box) | Lower (many trees) |
| Speed | Fast | Slower (many trees) |
| Stability | Sensitive to data changes | Stable |

## Frequently Asked Exam Questions

**Q1: What is a Random Forest and how does bagging help?**

It is an ensemble of decision trees, each trained on a random bootstrap sample and feature subset; combining their votes reduces variance and overfitting.

**Q2: Define hyperplane, margin, and support vectors in SVM.**

Hyperplane = the separating boundary; margin = gap to the nearest points; support vectors = those nearest points that define the margin. SVM maximises the margin.`,
    detailedNotes: `## Random Forest & SVM - Detailed Explanation

### Ensemble Learning (Background)

An **ensemble** combines many models to beat any single one. Two main styles:
- **Bagging** - train models in parallel on random samples, then average/vote (reduces **variance**). Random Forest uses this.
- **Boosting** - train models in sequence, each fixing the last one's errors (reduces **bias**). e.g. AdaBoost, Gradient Boosting.

### Random Forest in Depth

**Build steps:**
\`\`\`text
1. Take B bootstrap samples of the training data.
2. For each, grow a decision tree, but at each split consider
   only a random subset of features.
3. To predict: majority vote (classification) or average (regression).
\`\`\`

- Two sources of randomness: **random rows** (bootstrap) + **random features** at each split.
- This **decorrelates** the trees, so their errors cancel out.
- **Out-of-bag (OOB)** samples (rows not used for a tree) give a free validation estimate.

**Pros:** high accuracy, resists overfitting, gives feature importance.
**Cons:** less interpretable, slower, larger memory.

### SVM in Depth

**Goal:** find the hyperplane that separates classes with the **largest margin**.

\`\`\`text
   o o            |  margin  |            x x
  o o o      <----| hyperplane |---->     x x x
   o o            |          |            x x
         support vectors are the points
         touching the margin edges
\`\`\`

- **Maximum margin** -> better generalisation.
- **Support vectors** are the only points that matter; moving other points doesn't change the boundary.

**Kernels (the kernel trick):** when data isn't linearly separable, map it to a higher dimension where it is.
| Kernel | Use |
|---|---|
| Linear | Linearly separable data |
| Polynomial | Curved boundaries |
| RBF / Gaussian | Complex, non-linear boundaries (most popular) |

**Soft margin (C parameter):** allows some misclassification to avoid overfitting; C controls the trade-off.

**Pros:** effective in high dimensions, works with clear margins.
**Cons:** slow on very large datasets, sensitive to kernel/parameter choice, less interpretable.

### Decision Tree vs Random Forest (Detailed)

| Aspect | Decision Tree | Random Forest |
|---|---|---|
| Models | One | Many trees |
| Variance | High (overfits) | Low |
| Bias | Low | Slightly higher but balanced |
| Interpretable | Yes | No (black-box-ish) |
| Use when | Need explanation, quick model | Need accuracy and robustness |

### Frequently Asked Exam Questions

**Q1: Explain the working of Random Forest.**

It builds many decision trees on random bootstrap samples with random feature subsets (bagging), then combines them by voting (classification) or averaging (regression), reducing overfitting and variance.

**Q2: Explain SVM with hyperplane, margin, support vectors, and kernels.**

SVM finds the maximum-margin hyperplane separating classes; the nearest points are support vectors that define the margin; kernels (linear, polynomial, RBF) map data to higher dimensions to separate non-linear data.

**Q3: Compare decision tree and random forest.**

A single decision tree is interpretable but overfits; a random forest is an ensemble of trees that is more accurate and stable but less interpretable and slower.`
  },

  "linear-regression": {
    topicId: "linear-regression",
    moduleId: "m4",
    title: "Linear Regression: Simple & Multiple",
    examWeight: "6-9 marks",
    keywords: ["linear regression", "least squares", "mse", "cost function", "r squared", "multiple regression"],
    content: `## Definition (What It Is)

**Linear regression** is a supervised algorithm that models a **straight-line relationship** between input feature(s) and a **continuous output**. It predicts a number by fitting the best line through the data.

## Simple Linear Regression

One input, one output:

\`\`\`text
y = a + b*x
\`\`\`

- \`y\` = predicted output, \`x\` = input.
- \`a\` = intercept (value of y when x = 0).
- \`b\` = slope (change in y per unit x).

## Multiple Linear Regression

Many inputs:

\`\`\`text
y = a + b1*x1 + b2*x2 + ... + bn*xn
\`\`\`

Each \`b\` is the effect of that feature on the output.

## Least Squares (Finding the Line)

We choose \`a\` and \`b\` to **minimise the sum of squared errors** between predicted and actual values - the "least squares" method.

## Cost Function (MSE)

\`\`\`text
MSE = (1/n) * Σ (y_actual - y_predicted)^2
\`\`\`

Lower MSE = better fit. Training minimises MSE (often via gradient descent).

## R-Squared (Goodness of Fit)

\`\`\`text
R^2 = 1 - (SS_residual / SS_total)
\`\`\`

- Ranges 0 to 1; closer to **1 = better fit**.
- E.g. R^2 = 0.85 means the model explains **85%** of the variation in y.

## Worked Example

Line fitted: \`y = 2 + 3*x\`. Predict y when x = 4:

\`y = 2 + 3*4 = 14\`

## Applications

- House / car **price prediction**.
- **Sales and demand forecasting**.
- Predicting **exam scores**, salary, temperature.
- Trend analysis in business and science.

## Frequently Asked Exam Questions

**Q1: Write the equation of simple linear regression and explain its terms.**

\`y = a + b*x\`, where a is the intercept, b is the slope, x is the input, and y is the predicted output.

**Q2: What is the cost function in linear regression?**

The Mean Squared Error \`MSE = (1/n) Σ (actual - predicted)^2\`; training minimises it to find the best-fit line.`,
    detailedNotes: `## Linear Regression - Detailed Explanation

### The Goal

Fit a **straight line** that best predicts a numeric output from inputs. "Best" = smallest total squared error.

### Simple Linear Regression

\`\`\`text
y = a + b*x
\`\`\`
- The line passes through the data to minimise vertical distances (errors).
- **Slope b** = how much y changes when x increases by 1.
- **Intercept a** = predicted y when x = 0.

### Least Squares Method

We minimise the **sum of squared errors (SSE)**:
\`\`\`text
SSE = Σ (y_i - (a + b*x_i))^2
\`\`\`
Squaring avoids positive/negative cancelling and punishes big errors more. The values of a and b that minimise SSE give the best-fit line.

### Multiple Linear Regression

\`\`\`text
y = a + b1*x1 + b2*x2 + ... + bn*xn
\`\`\`
- Used when several features influence the output.
- Each coefficient shows that feature's individual effect (holding others fixed).

### Cost Function and Training

- **MSE** \`= (1/n) Σ (actual - predicted)^2\` is the cost.
- **Gradient descent** iteratively adjusts a and b to reduce MSE:
\`\`\`text
repeat:
  predict y for all points
  compute error
  nudge a and b in the direction that lowers MSE
until MSE stops improving
\`\`\`

### Evaluating Fit

| Metric | Meaning |
|---|---|
| **MSE / RMSE** | Average (root) squared error - lower is better |
| **MAE** | Average absolute error |
| **R-squared** | Fraction of variance explained (0-1, higher better) |

### Assumptions of Linear Regression

1. **Linear** relationship between inputs and output.
2. Errors are **independent**.
3. Constant error variance (homoscedasticity).
4. Errors roughly **normally distributed**.
5. Little **multicollinearity** between features.

### Worked Numeric Example

Given best-fit \`y = 2 + 3x\`:
- x = 0 -> y = 2 (intercept).
- x = 4 -> y = 14.
- Slope 3 means each +1 in x raises y by 3.

### Frequently Asked Exam Questions

**Q1: Explain simple and multiple linear regression.**

Simple uses one input (\`y = a + b*x\`); multiple uses several (\`y = a + b1*x1 + ... + bn*xn\`). Both fit coefficients to predict a continuous output.

**Q2: What is the least squares method?**

It finds the line that minimises the sum of squared errors between actual and predicted values.

**Q3: What does R-squared tell us?**

It is the proportion of variance in the output explained by the model (0 to 1); higher means a better fit (e.g. 0.9 = 90% explained).`
  },

  "unsupervised-clustering": {
    topicId: "unsupervised-clustering",
    moduleId: "m5",
    title: "Unsupervised Learning & Clustering",
    examWeight: "9 marks",
    keywords: ["unsupervised", "clustering", "k-means", "hierarchical", "dbscan", "anomaly detection", "recommendation", "segmentation"],
    content: `## Definition (What It Is)

**Unsupervised learning** finds hidden patterns in **unlabelled data** (no correct outputs given). The main task is **clustering** - grouping similar data points together.

## Examples of Unsupervised Learning

- **Customer segmentation** (group shoppers by behaviour).
- **Anomaly detection** (find unusual transactions).
- **Recommendation systems** (group similar users/items).
- **Document/topic grouping**.

## Supervised vs Unsupervised

| Aspect | Supervised | Unsupervised |
|---|---|---|
| Data | Labelled (inputs + outputs) | Unlabelled (inputs only) |
| Goal | Predict output | Find hidden structure |
| Tasks | Classification, regression | Clustering, association |
| Example | Spam detection | Customer segmentation |

## Clustering Algorithms

| Algorithm | Idea | Notes |
|---|---|---|
| **k-Means** | Partition into k clusters around centroids | Fast, needs k in advance |
| **Hierarchical** | Build a tree (dendrogram) of nested clusters | No need to fix k; slower |
| **DBSCAN** | Group dense regions; mark sparse points as noise | Finds odd shapes, detects outliers |

### k-Means Steps

1. Choose **k** and place k random **centroids**.
2. **Assign** each point to its nearest centroid.
3. **Recompute** each centroid as the mean of its points.
4. **Repeat** steps 2-3 until centroids stop moving.

**Scalability/interpretability:** k-means scales well and is easy to interpret; hierarchical is interpretable (dendrogram) but slow on big data; DBSCAN handles noise and odd shapes.

## Key Applications

- **Customer segmentation** - target marketing per group.
- **Anomaly detection** - fraud, network intrusion, faulty machines.
- **Recommendation systems** - suggest items based on similar users (collaborative filtering).

## Frequently Asked Exam Questions

**Q1: Differentiate supervised and unsupervised learning.**

Supervised uses labelled data to predict outputs; unsupervised uses unlabelled data to find hidden structure (clusters/associations).

**Q2: Explain the steps of the k-means algorithm.**

Pick k centroids -> assign points to nearest centroid -> recompute centroids as cluster means -> repeat until centroids stabilise.`,
    detailedNotes: `## Unsupervised Learning & Clustering - Detailed Explanation

### What Is Unsupervised Learning?

No teacher, no labels. The algorithm explores the data and finds structure on its own. Two main jobs:
- **Clustering** - group similar points.
- **Association** - find rules/relationships (see Apriori topic).

### Supervised vs Unsupervised (Detailed)

| Feature | Supervised | Unsupervised |
|---|---|---|
| Labels | Yes | No |
| Output known? | Yes | No |
| Aim | Predict | Discover groups/patterns |
| Evaluation | Accuracy, MSE | Harder (silhouette, inertia) |

### k-Means in Depth

\`\`\`text
1. Choose k (number of clusters).
2. Initialise k centroids randomly.
3. Repeat:
   a. Assign each point to the nearest centroid (by distance).
   b. Move each centroid to the mean of its assigned points.
4. Stop when centroids no longer move.
\`\`\`
- **Choosing k**: the **Elbow method** plots within-cluster error vs k and looks for the "elbow".
- **Pros**: simple, fast, scalable.
- **Cons**: must pick k, sensitive to initial centroids and outliers, assumes round clusters.

### Hierarchical Clustering

- **Agglomerative** (bottom-up): start with each point as its own cluster, merge the closest pairs repeatedly.
- Produces a **dendrogram** (tree); cut it at a level to get clusters.
- No need to choose k upfront, but **slow** for large data.

### DBSCAN

- Groups points in **dense** regions; labels low-density points as **noise/outliers**.
- Parameters: \`eps\` (radius) and \`minPts\` (min neighbours).
- **Pros**: finds arbitrary shapes, no need to set k, detects outliers.
- **Cons**: struggles with varying densities.

### Real-World Applications (Detailed)

**Customer segmentation** - cluster customers by spending/behaviour for targeted marketing.

**Anomaly detection** - points far from any cluster are anomalies; used for:
- **Fraud detection** (unusual transactions).
- **Network intrusion** detection.
- **Fault detection** in machines/sensors.

**Recommendation systems** - group similar users or items:
- **Collaborative filtering** - "users like you also bought...".
- **Content-based** - recommend items similar to ones you liked.

### Frequently Asked Exam Questions

**Q1: Explain clustering and describe k-means, hierarchical, and DBSCAN.**

Clustering groups similar unlabelled points. k-means partitions into k centroid-based clusters; hierarchical builds a dendrogram of nested clusters; DBSCAN groups dense regions and marks sparse points as noise.

**Q2: Describe applications of unsupervised learning.**

Customer segmentation, anomaly/fraud detection, recommendation systems, and document/topic grouping.

**Q3: What is anomaly detection and where is it used?**

Finding rare points that differ greatly from the rest; used in fraud detection, network intrusion, and machine fault detection.`
  },

  "association-apriori": {
    topicId: "association-apriori",
    moduleId: "m5",
    title: "Association Rule Learning & Apriori Algorithm",
    examWeight: "9 marks",
    keywords: ["association rules", "support", "confidence", "lift", "apriori", "market basket analysis", "frequent itemsets"],
    content: `## Definition (What It Is)

**Association rule learning** finds **relationships between items** in large datasets - "if a customer buys A, they often buy B". It is the engine behind **Market Basket Analysis**.

## Applications

- **Market Basket Analysis** (which products sell together).
- **Recommendation systems** ("frequently bought together").
- Store **shelf layout** and cross-selling.
- Web usage and medical symptom patterns.

## Key Metrics

For a rule \`A -> B\`:

| Metric | Formula | Meaning |
|---|---|---|
| **Support** | \`support(A->B) = transactions with A and B / total transactions\` | How frequent the itemset is |
| **Confidence** | \`confidence(A->B) = support(A and B) / support(A)\` | How often B appears when A does |
| **Lift** | \`lift(A->B) = confidence(A->B) / support(B)\` | Strength vs chance: >1 positive, =1 none, <1 negative |

## Apriori Algorithm Steps

**Apriori principle:** if an itemset is frequent, all its subsets are frequent; so if a subset is *infrequent*, drop all its supersets.

1. Set a **minimum support** threshold.
2. Find frequent **1-itemsets** (meet min support).
3. **Combine** them into candidate 2-itemsets; keep frequent ones.
4. Repeat to grow itemsets (3-itemsets, ...) until none qualify.
5. From frequent itemsets, **generate rules** that meet **minimum confidence**.

## Worked Example

5 transactions; {bread, milk} appears in 3 of them; {bread} appears in 4.

- \`support(bread, milk) = 3/5 = 0.6\`
- \`confidence(bread -> milk) = support(bread,milk)/support(bread) = (3/5)/(4/5) = 0.75\`

So 75% of customers who buy bread also buy milk.

## Frequently Asked Exam Questions

**Q1: Define support, confidence, and lift.**

Support = how often the itemset occurs; Confidence = P(B|A), how often B follows A; Lift = confidence/support(B), strength vs random chance (>1 means positive association).

**Q2: State the Apriori principle.**

If an itemset is frequent, all its subsets are frequent; equivalently, any superset of an infrequent itemset is also infrequent (so it can be pruned).`,
    detailedNotes: `## Association Rules & Apriori - Detailed Explanation

### What Are Association Rules?

Patterns of the form \`{items} -> {items}\`, e.g. \`{diapers} -> {beer}\`. They reveal which items co-occur in transactions.

A rule has two parts:
- **Antecedent (LHS)** - the "if" items.
- **Consequent (RHS)** - the "then" items.

### The Three Metrics in Depth

**Support** - popularity of an itemset.
\`\`\`text
support(A) = (transactions containing A) / (total transactions)
\`\`\`

**Confidence** - reliability of the rule.
\`\`\`text
confidence(A -> B) = support(A and B) / support(A)
\`\`\`

**Lift** - how much more likely B is given A, vs B in general.
\`\`\`text
lift(A -> B) = confidence(A -> B) / support(B)
\`\`\`
- lift > 1: A and B occur together more than expected (positive).
- lift = 1: independent.
- lift < 1: negatively associated.

### Apriori Algorithm (Detailed)

**Aim:** efficiently find all **frequent itemsets**, then strong rules.

**The Apriori property (pruning trick):** any superset of an infrequent itemset is also infrequent - so we never test it. This avoids checking every possible combination.

\`\`\`text
1. Choose min_support and min_confidence.
2. L1 = frequent 1-itemsets (support >= min_support).
3. k = 2
4. Repeat:
   a. Generate candidate k-itemsets by joining L(k-1).
   b. Prune candidates whose (k-1)-subsets aren't frequent.
   c. Count support; keep those >= min_support -> Lk.
   d. k = k + 1
   until no more frequent itemsets.
5. From all frequent itemsets, generate rules with
   confidence >= min_confidence.
\`\`\`

### Market Basket Analysis

- Analyses shopping baskets to find products bought together.
- Classic (folklore) example: "beer and diapers".
- Used for **product placement, bundling, cross-selling, and recommendations**.

### Worked Example (Expanded)

Transactions:
\`\`\`text
T1: bread, milk
T2: bread, milk, eggs
T3: bread, butter
T4: bread, milk
T5: butter, eggs
\`\`\`
- support(bread) = 4/5 = 0.8
- support(bread, milk) = 3/5 = 0.6
- confidence(bread -> milk) = 0.6 / 0.8 = 0.75
- If support(milk) = 3/5 = 0.6, then lift = 0.75 / 0.6 = 1.25 (>1 -> positive association).

### Frequently Asked Exam Questions

**Q1: Explain association rule mining with support, confidence, and lift.**

It finds item co-occurrence rules A->B. Support is the itemset frequency; confidence is P(B|A); lift compares confidence to B's overall frequency (>1 = positive association).

**Q2: Explain the Apriori algorithm and its principle.**

It iteratively finds frequent itemsets using the Apriori property (supersets of infrequent itemsets are infrequent, so prune them), then generates rules meeting a minimum confidence.

**Q3: What is Market Basket Analysis?**

Using association rules to discover products frequently bought together, used for cross-selling, bundling, store layout, and recommendations.`
  },

  "learning-theory": {
    topicId: "learning-theory",
    moduleId: "m5",
    title: "Learning Theory: Well-Posed Problems & ML Suitability",
    examWeight: "5-6 marks",
    keywords: ["well-posed", "hypothesis space", "version space", "pac learning", "no free lunch", "learning theory"],
    content: `## Definition (What It Is)

**Learning theory** studies *when and why* a problem can be learned from data, and how data structure guides model choice. It explains what makes a learning problem **well-posed** and bounds how much data we need.

## Well-Posed Learning Problem

A learning problem is **well-posed** when its three parts are clearly defined (Mitchell):
- **Task (T)** - what to do.
- **Performance (P)** - how to measure success.
- **Experience (E)** - the data to learn from.

If all three are clear and performance improves with experience, the problem is well-posed and suitable for ML.

## Why Some Problems Are Solved Using ML

- Rules are **too complex** to hand-code (image, speech).
- There is **plenty of data** to learn from.
- Patterns are **stable enough** to generalise.
- The task tolerates **statistical (not exact)** answers.

## How Data Type/Structure Influences Model Choice

| Data / Situation | Suitable Approach |
|---|---|
| Labelled data | Supervised (classification/regression) |
| Unlabelled data | Unsupervised (clustering/association) |
| Numeric output | Regression |
| Category output | Classification |
| Many features | Dimensionality reduction first |
| Small data | Simple models / Bayesian (prior helps) |

## Core Theory Concepts (Exam Level)

| Concept | Meaning |
|---|---|
| **Hypothesis space (H)** | All candidate models/functions the learner can choose from |
| **Version space** | The subset of H consistent with all training examples seen |
| **PAC learning** | "Probably Approximately Correct": with enough data, the model is *probably* (high prob) *approximately* correct (low error) |
| **No Free Lunch theorem** | No single algorithm is best for all problems; the right choice depends on the problem |

## Frequently Asked Exam Questions

**Q1: When is a learning problem said to be well-posed?**

When its Task (T), Performance measure (P), and Experience (E) are all clearly defined and performance improves with experience.

**Q2: State the No Free Lunch theorem.**

No single learning algorithm works best for every problem; performance depends on the problem, so model choice must suit the data and task.`,
    detailedNotes: `## Learning Theory - Detailed Explanation

### Well-Posed Problems (Recap + Theory)

A problem is well-posed (Mitchell) when T, P, and E are defined. This makes it learnable: we know the goal, how to score it, and what data to use. An ill-posed problem (vague task or no measurable performance) cannot be reliably learned.

### Why Use ML for Certain Problems

ML fits problems that are:
1. **Hard to specify by rules** (no clean formula).
2. **Data-rich** (enough examples to learn the pattern).
3. **Pattern-based** and reasonably **stable**.
4. **Tolerant of approximate** answers.

Problems that are exact, rule-based, or data-poor are better solved without ML.

### Data Structure Drives Model Selection

- **Labels present?** -> supervised; else unsupervised.
- **Output numeric?** -> regression; **categorical?** -> classification.
- **High dimensions?** -> reduce features (PCA) first.
- **Small data?** -> simpler or Bayesian models (the prior compensates).
- **Need explanation?** -> white-box models.

### Hypothesis Space and Version Space

- **Hypothesis space (H)** - the set of all functions/models the learner could pick. A bigger H can fit more but risks overfitting.
- **Version space** - the part of H still consistent with the training data seen so far. As more examples arrive, the version space **shrinks** toward the true concept.

### PAC Learning (Exam-Appropriate)

- **Probably Approximately Correct.**
- A concept is PAC-learnable if, given enough samples, the algorithm finds a hypothesis that is:
  - **Approximately correct** - error below a small \`epsilon\`.
  - **Probably** - with confidence at least \`1 - delta\`.
- It links **sample size** to desired accuracy and confidence: more accuracy/confidence -> more data needed.

### No Free Lunch (NFL) Theorem

- Averaged over **all possible problems**, every algorithm performs the same.
- Practically: **no universally best algorithm** - you must match the model to the problem and try several.
- This justifies experimentation, cross-validation, and model comparison.

### Frequently Asked Exam Questions

**Q1: Explain the concepts of hypothesis space and version space.**

The hypothesis space is all models the learner can choose from; the version space is the subset still consistent with the training examples seen, shrinking as more data arrives.

**Q2: What is PAC learning?**

Probably Approximately Correct learning: with enough data, the learner produces a hypothesis that is approximately correct (small error) with high probability, linking sample size to accuracy and confidence.

**Q3: How does data type influence the choice of ML model?**

Labelled data -> supervised; unlabelled -> unsupervised; numeric target -> regression; categorical -> classification; high dimensions -> reduce features first; small data -> simpler/Bayesian models.`
  }
};

export function getTopicContent(topicId: string): string | null { return topicContents[topicId]?.content ?? null; }
export function getDetailedNotes(topicId: string): string | null { return topicContents[topicId]?.detailedNotes ?? null; }
export function getTopicMeta(topicId: string): { title: string; examWeight: string; keywords: string[] } | null {
  const c = topicContents[topicId];
  return c ? { title: c.title, examWeight: c.examWeight, keywords: c.keywords } : null;
}
