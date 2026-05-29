// Predicted exam material derived from the student's REAL previous-year important questions.
// Course: 25MCAC203 - Machine Learning.
//
// Every entry below maps to an actual previous-year question supplied by the student.
// "frequency" is therefore set to "Previous-year question".
//
// CO mapping:
//   CO1 = ML principles / types of learning
//   CO2 = Data pre-processing / feature engineering
//   CO3 = Probability / Bayes
//   CO4 = Model evaluation metrics + supervised models
//   CO5 = Building models / unsupervised learning

export type PredictedQuestion = {
  id: string;
  moduleId: string;        // "m1".."m5"
  topicId?: string;        // optional link to a topic id
  co?: string;             // e.g. "CO2"
  marks: string;           // e.g. "5 marks" | "9 marks" | "6 marks"
  frequency?: string;      // e.g. "Previous-year question"
  question: string;        // the theory question
  answer: string;          // markdown model answer
};

export type PredictedProgram = {
  id: string;
  moduleId: string;
  topicId?: string;
  co?: string;
  marks: string;
  frequency?: string;
  title: string;
  statement: string;       // the numerical problem with the given data
  code: string;            // the full step-by-step worked solution
  explanation: string;     // short markdown note on the method / takeaway
};

export const predictedQuestions: PredictedQuestion[] = [
  // ===================== 9-MARK QUESTIONS =====================
  {
    id: "pq-bayesian-naive-bayes",
    moduleId: "m3",
    topicId: "bayes-naive-bayes",
    co: "CO3",
    marks: "9 marks",
    frequency: "Previous-year question",
    question: "Explain the Bayesian Algorithm and the Naive Bayes Algorithm.",
    answer: `## Bayesian Learning

Bayesian learning treats every hypothesis as having a **probability** and uses **Bayes' theorem** to update that probability as new evidence (data) arrives.

\`\`\`text
P(c|x) = P(x|c) * P(c) / P(x)
\`\`\`

| Term | Name | Meaning |
|------|------|---------|
| \`P(c)\` | Prior | Belief in class c before seeing data |
| \`P(x\\|c)\` | Likelihood | Probability of evidence x given class c |
| \`P(c\\|x)\` | Posterior | Updated belief in c after seeing x |
| \`P(x)\` | Evidence | Total probability of x |

### Bayes Optimal Classifier
Predicts the class with the highest posterior probability:
\`\`\`text
predict = argmax_c  P(c|x)
\`\`\`
It is the most accurate classifier on average but is often costly because it sums over all hypotheses.

---

## Naive Bayes Algorithm

Naive Bayes is a practical, fast classifier built on Bayes' theorem with one **"naive" assumption**: all features are **conditionally independent** given the class.

\`\`\`text
P(c | x1,x2,...,xn) ∝ P(c) * P(x1|c) * P(x2|c) * ... * P(xn|c)
\`\`\`

### Steps
1. Compute the **prior** \`P(c)\` for each class from training counts.
2. Compute the **likelihood** \`P(xi|c)\` for every feature value per class.
3. For a new record, multiply prior x all likelihoods for each class.
4. Pick the class with the **highest product** (apply Laplace smoothing to avoid zero probabilities).

### Variants
- **Multinomial** - word/term counts (text classification).
- **Bernoulli** - binary present/absent features.
- **Gaussian** - continuous features assumed Normal.

### Why it works
Even though the independence assumption is rarely true, Naive Bayes is fast, needs little data, and works very well for spam filtering, sentiment analysis, and document categorisation.`,
  },
  {
    id: "pq-ml-workflow",
    moduleId: "m2",
    topicId: "model-selection-training",
    co: "CO5",
    marks: "9 marks",
    frequency: "Previous-year question",
    question: "Explain the workflow of ML model building and its importance.",
    answer: `## ML Model-Building Workflow

A disciplined pipeline that turns raw data into a deployed, reliable model.

### Stages

| # | Stage | What happens |
|---|-------|--------------|
| 1 | Problem definition | State the task, target, and success metric |
| 2 | Data collection | Gather relevant, representative data |
| 3 | Data preprocessing | Clean, handle missing values, remove outliers |
| 4 | Feature engineering | Transform/select features; encode and scale |
| 5 | Train-test split | Hold out data for honest evaluation |
| 6 | Model selection | Choose algorithm(s) suited to the data |
| 7 | Training | Fit the model on training data |
| 8 | Evaluation | Measure accuracy/precision/recall/F1 on test set |
| 9 | Tuning | Adjust hyperparameters, fix over/underfitting |
| 10 | Deployment & monitoring | Serve predictions; watch for drift |

\`\`\`text
Data -> Preprocess -> Features -> Split -> Train -> Evaluate -> Tune -> Deploy -> Monitor
                                          ^___________________________|
\`\`\`

### Importance
- **Reproducibility** - a clear workflow makes results repeatable.
- **Avoids leakage** - splitting before fitting keeps evaluation honest.
- **Quality control** - each stage catches its own class of error (dirty data, bad features, overfitting).
- **Maintainability** - monitoring detects drift so the model stays accurate over time.

A good workflow is the difference between a demo and a production-grade model.`,
  },
  {
    id: "pq-reinforcement-learning",
    moduleId: "m1",
    topicId: "ml-intro",
    co: "CO1",
    marks: "9 marks",
    frequency: "Previous-year question",
    question: "Explain Reinforcement Learning and its components.",
    answer: `## Reinforcement Learning (RL)

RL is a learning paradigm where an **agent** learns to act by **interacting** with an **environment**, receiving **rewards** for good actions and **penalties** for bad ones. The goal is to learn a **policy** that maximises long-term cumulative reward. There is no labelled dataset - the agent learns by **trial and error**.

\`\`\`text
        action a_t
Agent  ----------->  Environment
   ^                      |
   |  reward r_t, state s_t+1
   |______________________|
\`\`\`

### Core Components

| Component | Symbol | Meaning |
|-----------|--------|---------|
| Agent | - | The learner / decision maker |
| Environment | - | The world the agent acts in |
| State | \`s\` | Current situation |
| Action | \`a\` | A choice the agent can make |
| Reward | \`r\` | Scalar feedback signal |
| Policy | \`π(a\\|s)\` | Strategy: which action in each state |
| Value function | \`V(s)\` | Expected long-term reward from state s |

### Key idea
The agent balances **exploration** (try new actions) and **exploitation** (use known good actions). Reward is often **delayed**, so the agent must learn which earlier actions led to later success.

### Examples
- Game playing (Chess, Go, Atari).
- Robotics (walking, grasping).
- Self-driving cars, recommendation tuning.

RL differs from supervised learning: there is **no correct answer given**, only rewards that the agent must maximise over time.`,
  },
  {
    id: "pq-statistical-tools",
    moduleId: "m3",
    topicId: "probability-basics",
    co: "CO3",
    marks: "9 marks",
    frequency: "Previous-year question",
    question: "Explain the importance of statistical tools in Machine Learning.",
    answer: `## Importance of Statistical Tools in ML

Statistics is the mathematical foundation of machine learning - it lets us **describe data, quantify uncertainty, and validate models**.

### 1. Describing data (Descriptive statistics)
- **Mean, median, mode** - central tendency.
- **Variance, standard deviation** - spread.
- **Correlation** - relationship between features (helps feature selection).

### 2. Quantifying uncertainty (Probability)
- Models output **probabilities** (e.g. Naive Bayes, logistic regression).
- \`P(c|x) = P(x|c)*P(c)/P(x)\` underlies Bayesian methods.

### 3. Inference & estimation
- **Maximum Likelihood Estimation (MLE)** fits model parameters.
- **Confidence intervals** express how sure we are about an estimate.

### 4. Distributions
- Normal, Bernoulli, Binomial, Multinomial describe how data/targets behave.
- Choosing the right distribution improves model assumptions.

### 5. Model validation (Hypothesis testing)
- **t-test, chi-square, ANOVA** check whether results are significant or just chance.
- Cross-validation and statistical metrics confirm a model generalises.

### Summary table

| Statistical tool | Use in ML |
|------------------|-----------|
| Mean/variance | Standardization, scaling |
| Correlation | Feature selection |
| Probability distributions | Model assumptions |
| MLE | Parameter estimation |
| Hypothesis tests | Validate significance |

Without statistics, ML would have no rigorous way to learn from data or to know whether a model is genuinely good.`,
  },
  {
    id: "pq-svm",
    moduleId: "m4",
    topicId: "random-forest-svm",
    co: "CO4",
    marks: "9 marks",
    frequency: "Previous-year question",
    question: "Explain the Support Vector Machine (SVM) Algorithm.",
    answer: `## Support Vector Machine (SVM)

SVM is a powerful **supervised** classifier that finds the **optimal hyperplane** separating two classes with the **maximum margin**.

### Key concepts

| Term | Meaning |
|------|---------|
| Hyperplane | Decision boundary separating classes |
| Margin | Distance between hyperplane and nearest points |
| Support vectors | The closest points that define the margin |
| Maximum margin | SVM chooses the boundary with the widest margin |

\`\`\`text
   o   o          | <- margin ->|        x   x
     o    o   o  [H-]   H   [H+]   x   x
   o    o          |             |     x    x
                support       support
                vectors        vectors
\`\`\`

A wider margin means better **generalisation** to unseen data.

### Linear SVM
Find weights \`w\` and bias \`b\` such that:
\`\`\`text
w·x + b = 0        (the hyperplane)
maximize margin = 2 / ||w||
subject to  y_i (w·x_i + b) >= 1
\`\`\`

### Non-linear data: the Kernel Trick
When classes are not linearly separable, SVM maps data to a higher dimension using a **kernel**:
- **Linear** kernel
- **Polynomial** kernel
- **RBF / Gaussian** kernel: \`K(x,z)=exp(-gamma*||x-z||^2)\`

### Soft margin
Parameter **C** allows some misclassification to avoid overfitting (trade-off between margin width and errors).

### Advantages / Limitations
- **Pros:** effective in high dimensions, robust, works with kernels.
- **Cons:** slow on very large datasets, sensitive to choice of C and kernel.

SVM is widely used for text classification, image recognition, and bioinformatics.`,
  },
  {
    id: "pq-recommendation-systems",
    moduleId: "m5",
    topicId: "association-apriori",
    co: "CO5",
    marks: "9 marks",
    frequency: "Previous-year question",
    question: "Explain recommendation systems using Machine Learning.",
    answer: `## Recommendation Systems

A recommendation system predicts **what a user will like** and suggests relevant items (products, movies, songs).

### Types

| Type | Idea | Example |
|------|------|---------|
| Content-based | Recommend items similar to what the user liked | "You liked sci-fi -> here is more sci-fi" |
| Collaborative filtering | Recommend what similar users liked | "Users like you also bought..." |
| Hybrid | Combine both | Netflix, Amazon |

### 1. Content-Based Filtering
- Build a **profile** of item features (genre, brand, keywords).
- Recommend items whose features match the user's history.
- Uses similarity measures like **cosine similarity**.

### 2. Collaborative Filtering
- **User-based:** find users with similar tastes, recommend their liked items.
- **Item-based:** find items frequently liked together.
- Often uses **matrix factorization** on the user x item rating matrix.

### 3. Association-rule / Market-basket
- "People who bought X also bought Y" using support, confidence, lift.

### ML role
- **Clustering** groups similar users/items.
- **Classification/regression** predicts ratings.
- **Matrix factorization** discovers latent factors.

### Challenges
- **Cold start** (new users/items with no history).
- **Sparsity** of the rating matrix.
- **Scalability** for millions of users.

Recommendation systems power Amazon, Netflix, Spotify, and YouTube, driving engagement and sales.`,
  },
  {
    id: "pq-dt-vs-rf",
    moduleId: "m4",
    topicId: "random-forest-svm",
    co: "CO4",
    marks: "9 marks",
    frequency: "Previous-year question",
    question: "Compare the Decision Tree and Random Forest algorithms.",
    answer: `## Decision Tree vs Random Forest

### Decision Tree
A single tree that splits data on the feature giving the best **information gain** (or lowest Gini) at each node, ending in leaf predictions.

### Random Forest
An **ensemble** of many decision trees built on random subsets of data (bagging) and random subsets of features; predictions are combined by **majority vote** (classification) or **average** (regression).

### Comparison

| Aspect | Decision Tree | Random Forest |
|--------|---------------|---------------|
| Structure | Single tree | Many trees (ensemble) |
| Overfitting | High (memorises data) | Low (averaging reduces variance) |
| Accuracy | Lower | Higher / more robust |
| Interpretability | Easy to read | Harder (black-box) |
| Training speed | Fast | Slower (many trees) |
| Stability | Sensitive to small data changes | Very stable |
| Randomness | None | Random data + feature subsets |

\`\`\`text
Random Forest:
  Tree1 -> A
  Tree2 -> B   --> majority vote --> A
  Tree3 -> A
\`\`\`

### Why Random Forest is usually better
- **Bagging** (bootstrap sampling) reduces variance.
- **Random feature selection** de-correlates trees.
- Resistant to overfitting and noise.

### When to use which
- **Decision Tree:** when you need a simple, explainable model.
- **Random Forest:** when you need accuracy and robustness and can sacrifice interpretability.`,
  },
  {
    id: "pq-supervised-examples",
    moduleId: "m4",
    topicId: "supervised-classification-intro",
    co: "CO4",
    marks: "9 marks",
    frequency: "Previous-year question",
    question: "Explain supervised learning with suitable examples.",
    answer: `## Supervised Learning

In supervised learning the model is trained on a **labelled dataset** - each input \`x\` comes with its correct output \`y\`. The model learns a mapping \`y = f(x)\` and then predicts \`y\` for new inputs.

\`\`\`text
Training data:  (x1,y1), (x2,y2), ..., (xn,yn)
Goal:           learn f so that f(x) ≈ y for unseen x
\`\`\`

### Two main types

| Type | Output | Example |
|------|--------|---------|
| Classification | Discrete class label | Spam / not-spam, disease / no-disease |
| Regression | Continuous value | House price, temperature |

### Classification example
- **Email spam filter:** inputs are email features, label is spam/ham. Algorithms: Naive Bayes, SVM, Decision Tree, kNN.

### Regression example
- **House price prediction:** inputs are area, bedrooms, location; output is price. Algorithm: Linear Regression.

### Workflow
1. Collect labelled data.
2. Split into train/test.
3. Train model on training labels.
4. Predict and compare with true labels.
5. Measure accuracy / error.

### Common algorithms
kNN, Decision Tree, Random Forest, SVM, Naive Bayes, Linear/Logistic Regression.

### Advantages / Limitations
- **Pros:** accurate, clear evaluation against known labels.
- **Cons:** needs large labelled datasets, which can be expensive to obtain.`,
  },
  {
    id: "pq-dimensionality-reduction",
    moduleId: "m2",
    topicId: "feature-transformation-selection",
    co: "CO2",
    marks: "9 marks",
    frequency: "Previous-year question",
    question: "Explain dimensionality reduction and its importance.",
    answer: `## Dimensionality Reduction

Dimensionality reduction reduces the number of **features (dimensions)** in a dataset while keeping as much useful information as possible.

### Why high dimensions are a problem (Curse of Dimensionality)
- More features -> data becomes **sparse**, distances lose meaning.
- More computation and memory.
- Higher risk of **overfitting**.
- Hard to visualise.

### Two approaches

| Approach | Idea | Examples |
|----------|------|----------|
| Feature selection | Keep a subset of original features | Filter, wrapper, embedded methods |
| Feature extraction | Build new combined features | PCA, LDA, t-SNE |

### Principal Component Analysis (PCA)
- Finds new axes (**principal components**) that capture **maximum variance**.
- Projects data onto the top few components.
- Steps: standardize -> covariance matrix -> eigenvectors/eigenvalues -> pick top k -> project.

### Importance
1. **Less overfitting** - fewer, more informative features.
2. **Faster training** - smaller data.
3. **Removes redundancy / correlated features.**
4. **Easier visualisation** (reduce to 2D/3D).
5. **Reduces noise.**

### Example
A dataset with 100 correlated features may be reduced to 10 principal components that retain 95% of the variance - smaller, faster, and often more accurate.`,
  },
  {
    id: "pq-model-representation-interpretability",
    moduleId: "m2",
    topicId: "model-representation-interpretability",
    co: "CO4",
    marks: "9 marks",
    frequency: "Previous-year question",
    question: "Explain model representation and interpretability in Machine Learning.",
    answer: `## Model Representation and Interpretability

### Model Representation
**Representation** is *how a model stores the knowledge it has learned* - the form of \`f(x)\`.

| Model | Representation |
|-------|----------------|
| Linear regression | Weights on each feature: \`y = w0 + w1x1 + ... \` |
| Decision tree | Tree of if-then rules |
| Naive Bayes | Probability tables |
| Neural network | Weights across layers of neurons |
| kNN | The stored training points themselves |

The choice of representation decides what patterns a model **can** learn (its hypothesis space).

### Interpretability
**Interpretability** is *how easily a human can understand why the model made a prediction*.

| High interpretability | Low interpretability (black-box) |
|-----------------------|----------------------------------|
| Linear regression | Random forest |
| Decision tree | SVM with RBF kernel |
| Naive Bayes | Deep neural networks |

### Why interpretability matters
- **Trust** - users accept models they understand.
- **Debugging** - find why a model errs.
- **Fairness / compliance** - explain decisions in finance, healthcare, law.

### Trade-off
There is usually a trade-off: **simple models are interpretable but less accurate; complex models are accurate but opaque.** Techniques like **feature importance, LIME, and SHAP** add interpretability to black-box models.

A good ML practitioner balances **accuracy** and **interpretability** based on the application's needs.`,
  },
  {
    id: "pq-data-types-bias-quality",
    moduleId: "m1",
    topicId: "ml-data-types",
    co: "CO2",
    marks: "9 marks",
    frequency: "Previous-year question",
    question: "Describe the basic types of data, bias in data, data-quality issues, and preprocessing techniques.",
    answer: `## Data in Machine Learning

### 1. Basic Types of Data

| Type | Sub-type | Example |
|------|----------|---------|
| Numerical | Discrete | Number of children |
| Numerical | Continuous | Height, temperature |
| Categorical | Nominal (no order) | Colour, city |
| Categorical | Ordinal (ordered) | Low/Medium/High |

Data may also be **structured** (tables), **semi-structured** (JSON), or **unstructured** (text, images).

### 2. Bias in Data
Bias is a systematic error that makes a model unfair or wrong.
- **Sampling bias** - data not representative of the population.
- **Label bias** - incorrect or prejudiced labels.
- **Measurement bias** - faulty instruments.
- **Confirmation bias** - data chosen to confirm a belief.

### 3. Data-Quality Issues

| Issue | Description |
|-------|-------------|
| Missing values | Empty fields |
| Outliers | Extreme abnormal values |
| Noise | Random errors |
| Duplicates | Repeated records |
| Inconsistency | Same thing recorded differently |
| Imbalance | One class dominates |

### 4. Preprocessing Techniques
1. **Handle missing values** - delete, or impute (mean/median/mode).
2. **Remove duplicates / fix inconsistencies.**
3. **Outlier treatment** - cap, remove, or transform.
4. **Encoding** - label/one-hot encoding for categorical data.
5. **Scaling** - min-max normalization, z-score standardization.
6. **Discretization / binning** of continuous features.
7. **Balancing** - oversampling/undersampling (e.g. SMOTE).

> "Garbage in, garbage out" - good preprocessing is essential because model quality can never exceed data quality.`,
  },
  {
    id: "pq-bayesian-importance",
    moduleId: "m3",
    topicId: "bayesian-concept-learning",
    co: "CO3",
    marks: "9 marks",
    frequency: "Previous-year question",
    question: "Explain the importance of Bayesian methods in Machine Learning.",
    answer: `## Importance of Bayesian Methods in ML

Bayesian methods apply **probability theory** to learning, using **Bayes' theorem** to update beliefs as data arrives.

\`\`\`text
P(c|x) = P(x|c) * P(c) / P(x)
posterior = likelihood * prior / evidence
\`\`\`

### Why they are important

1. **Handle uncertainty** - outputs are probabilities, not just labels, so we know *how confident* the model is.
2. **Incorporate prior knowledge** - the **prior** \`P(c)\` lets us include expert/domain knowledge before seeing data.
3. **Update incrementally** - posteriors become priors for the next batch (online learning).
4. **Work with small data** - priors stabilise estimates when data is scarce.
5. **Principled foundation** - the **Bayes optimal classifier** is the theoretical best classifier.

### Practical Bayesian models

| Model | Use |
|-------|-----|
| Naive Bayes | Spam filtering, text classification |
| Bayesian networks | Reasoning under uncertainty |
| Bayesian linear regression | Regression with uncertainty bounds |

### Example
A medical test interpreted with Bayes' theorem combines the test's accuracy (**likelihood**) with how common the disease is (**prior**) to give the true probability of being ill (**posterior**) - far more informative than a raw "positive" result.

Bayesian thinking is central to ML because it gives a rigorous, uncertainty-aware way to learn from evidence.`,
  },
  {
    id: "pq-classification-regression",
    moduleId: "m4",
    topicId: "supervised-classification-intro",
    co: "CO4",
    marks: "9 marks",
    frequency: "Previous-year question",
    question: "Explain classification and regression in supervised learning.",
    answer: `## Classification and Regression

Both are **supervised** learning tasks (they use labelled data), but they differ in the **type of output**.

### Classification
Predicts a **discrete class label**.

| Property | Detail |
|----------|--------|
| Output | Category (Yes/No, A/B/C) |
| Goal | Assign input to a class |
| Examples | Spam detection, disease diagnosis, image labelling |
| Algorithms | kNN, Decision Tree, SVM, Naive Bayes, Logistic Regression |
| Metrics | Accuracy, Precision, Recall, F1 |

\`\`\`text
Input email -> [Classifier] -> "Spam" or "Not Spam"
\`\`\`

### Regression
Predicts a **continuous numeric value**.

| Property | Detail |
|----------|--------|
| Output | Real number |
| Goal | Estimate a quantity |
| Examples | House price, temperature, sales forecast |
| Algorithms | Linear Regression, Polynomial Regression, Random Forest Regressor |
| Metrics | MAE, MSE, RMSE, R^2 |

\`\`\`text
Input house features -> [Regressor] -> Price = 45.6 lakh
\`\`\`

### Key difference

| Aspect | Classification | Regression |
|--------|----------------|------------|
| Output type | Discrete | Continuous |
| Question | "Which category?" | "How much / how many?" |
| Error metric | Accuracy, F1 | RMSE, R^2 |

Both learn \`y = f(x)\` from labelled data; the nature of \`y\` decides which task it is.`,
  },
  {
    id: "pq-ml-in-domains",
    moduleId: "m1",
    topicId: "ml-applications-issues",
    co: "CO1",
    marks: "9 marks",
    frequency: "Previous-year question",
    question: "Explain how ML models are used in healthcare, finance, business, and education.",
    answer: `## ML Applications Across Domains

### Healthcare
- **Disease diagnosis** from scans/images (cancer, pneumonia).
- **Predicting patient risk** and readmission.
- **Drug discovery** and personalised treatment.
- *Models:* CNNs, Naive Bayes, Random Forest.

### Finance
- **Fraud detection** on transactions (anomaly detection).
- **Credit scoring / loan approval.**
- **Algorithmic trading** and stock prediction.
- **Risk assessment.**
- *Models:* Logistic Regression, SVM, Random Forest.

### Business
- **Customer segmentation** (clustering) for targeted marketing.
- **Recommendation systems** (Amazon, Netflix).
- **Churn prediction** - who will leave.
- **Demand forecasting** (regression).
- *Models:* k-means, collaborative filtering, regression.

### Education
- **Adaptive learning** - personalise content to each student.
- **Performance prediction** - flag at-risk students.
- **Automated grading** of answers.
- **Recommending courses/resources.**
- *Models:* classification, regression, recommendation.

### Summary table

| Domain | ML use | Typical task |
|--------|--------|--------------|
| Healthcare | Diagnosis, risk | Classification |
| Finance | Fraud, credit | Classification/anomaly |
| Business | Segmentation, recommend | Clustering/recommendation |
| Education | Personalise, predict | Classification/regression |

Across all domains, ML turns large data into **predictions and decisions** that improve outcomes and efficiency.`,
  },
  {
    id: "pq-knn",
    moduleId: "m4",
    topicId: "knn-decision-tree",
    co: "CO4",
    marks: "9 marks",
    frequency: "Previous-year question",
    question: "Explain the K-Nearest Neighbors (KNN) Algorithm.",
    answer: `## K-Nearest Neighbors (kNN)

kNN is a simple **supervised**, **instance-based** (lazy) algorithm. It stores all training data and classifies a new point by looking at its **k nearest neighbours**.

### Algorithm
1. Choose **k** (number of neighbours).
2. Compute **distance** from the query point to every training point.
3. Pick the **k closest** points.
4. **Classification:** majority class among the k. **Regression:** average of their values.

### Distance measures
\`\`\`text
Euclidean:  d = sqrt( (x1-x2)^2 + (y1-y2)^2 + ... )
Manhattan:  d = |x1-x2| + |y1-y2| + ...
\`\`\`

### Choosing k
- Small k -> sensitive to noise (overfitting).
- Large k -> over-smooth (underfitting).
- Use an **odd** k for two classes to avoid ties; tune with cross-validation.

\`\`\`text
        ? (query, k=3)
   A         A
        B
3 nearest = {A, A, B} -> majority A -> predict A
\`\`\`

### Pros / Cons
- **Pros:** simple, no training phase, works for multi-class.
- **Cons:** slow at prediction (computes all distances), needs **feature scaling**, struggles in high dimensions.

### Note
Because there is no real "training", kNN is called a **lazy learner**; all the work happens at prediction time. Always **normalize features** so no single feature dominates the distance.`,
  },
  {
    id: "pq-unsupervised-examples",
    moduleId: "m5",
    topicId: "unsupervised-clustering",
    co: "CO5",
    marks: "9 marks",
    frequency: "Previous-year question",
    question: "Explain unsupervised learning with suitable examples.",
    answer: `## Unsupervised Learning

In unsupervised learning the data has **no labels**. The model discovers **hidden structure, patterns, or groups** on its own.

\`\`\`text
Input:  x1, x2, ..., xn   (no y)
Goal:   find structure / groupings in the data
\`\`\`

### Main tasks

| Task | Idea | Algorithm | Example |
|------|------|-----------|---------|
| Clustering | Group similar items | k-means, hierarchical, DBSCAN | Customer segmentation |
| Association | Find item relationships | Apriori, FP-growth | Market basket analysis |
| Dimensionality reduction | Compress features | PCA, t-SNE | Data visualisation |

### Clustering example
- **Customer segmentation:** group customers by spending/age so marketing can target each group. No labels are given; k-means finds the groups.

### Association example
- **Market basket analysis:** "customers who buy bread also buy butter" - discovered from transaction data with Apriori.

### Dimensionality-reduction example
- **PCA** compresses 100 features to 2 for visualisation.

### Advantages / Limitations
- **Pros:** no labelling needed, finds unknown patterns, good for exploration.
- **Cons:** harder to evaluate (no ground truth), results can be ambiguous.

Unsupervised learning is used when labelled data is unavailable but we still want insight from the data.`,
  },
  {
    id: "pq-anomaly-detection",
    moduleId: "m5",
    topicId: "unsupervised-clustering",
    co: "CO5",
    marks: "9 marks",
    frequency: "Previous-year question",
    question: "Explain anomaly detection and its applications.",
    answer: `## Anomaly Detection

Anomaly (outlier) detection finds data points that **deviate significantly** from normal behaviour.

### Types of anomalies

| Type | Meaning |
|------|---------|
| Point anomaly | A single unusual value (huge transaction) |
| Contextual anomaly | Unusual in context (high AC use in winter) |
| Collective anomaly | A group of points abnormal together |

### Approaches

| Approach | Idea |
|----------|------|
| Statistical | Points far from mean (z-score, > 3 std dev) |
| Distance-based | Far from neighbours (kNN distance) |
| Density-based | In low-density regions (LOF, DBSCAN noise) |
| Clustering-based | Points not fitting any cluster |
| ML-based | Isolation Forest, One-Class SVM, autoencoders |

\`\`\`text
   o o o o          normal cluster
  o o o o o
                x  <- anomaly (far away)
\`\`\`

### Applications
- **Fraud detection** - unusual credit-card transactions.
- **Network intrusion detection** - abnormal traffic / cyber-attacks.
- **Fault detection** - failing machines/sensors.
- **Healthcare** - abnormal vital signs.
- **Quality control** - defective products.

### Challenge
Anomalies are **rare**, so data is highly **imbalanced**; choosing the right threshold to balance false alarms and missed cases is the key difficulty.

Anomaly detection is often **unsupervised** because labelled anomalies are scarce.`,
  },
  {
    id: "pq-data-models-structure",
    moduleId: "m1",
    topicId: "ml-data-types",
    co: "CO2",
    marks: "9 marks",
    frequency: "Previous-year question",
    question: "Explain the different types of data models in ML and how data structure influences model selection.",
    answer: `## Data Models and Model Selection

### Types of data (data models)

| Form | Description | Example |
|------|-------------|---------|
| Structured | Rows/columns, fixed schema | Database tables, CSV |
| Semi-structured | Tags/keys, flexible | JSON, XML |
| Unstructured | No schema | Text, images, audio, video |

By value type:
- **Numerical** (discrete, continuous)
- **Categorical** (nominal, ordinal)
- **Time-series** (ordered by time)

### How data structure influences model choice

| Data type | Suitable models |
|-----------|-----------------|
| Tabular numeric/categorical | Decision Tree, Random Forest, SVM, kNN |
| Text | Naive Bayes, RNN/Transformers |
| Images | CNN |
| Time-series | ARIMA, LSTM |
| Unlabelled data | Clustering (k-means), PCA |
| Sequential/sparse transactions | Apriori (association rules) |

### Factors that guide selection
1. **Labelled vs unlabelled** -> supervised vs unsupervised.
2. **Output type** -> classification (discrete) vs regression (continuous).
3. **Feature count / dimensionality** -> may need PCA first.
4. **Data size** -> large data favours scalable models.
5. **Linearity** -> linear models vs kernel/tree models.
6. **Interpretability need** -> simple vs black-box.

### Example
- Customer table with a "churn" label -> **classification** (Random Forest).
- Same table without labels -> **clustering** (k-means) for segmentation.

The **structure and nature of the data** is the first thing that decides which family of models is even applicable.`,
  },
  {
    id: "pq-classification-process",
    moduleId: "m4",
    topicId: "supervised-classification-intro",
    co: "CO4",
    marks: "9 marks",
    frequency: "Previous-year question",
    question: "Explain the classification process in supervised learning.",
    answer: `## Classification Process in Supervised Learning

Classification assigns an input to one of several **predefined classes** using labelled training data.

### Step-by-step process

| Step | Activity |
|------|----------|
| 1 | **Data collection** - gather labelled records |
| 2 | **Preprocessing** - clean, encode, scale |
| 3 | **Feature selection** - keep informative features |
| 4 | **Train-test split** - e.g. 80/20 |
| 5 | **Model training** - learn from training labels |
| 6 | **Prediction** - classify test data |
| 7 | **Evaluation** - accuracy, precision, recall, F1 |
| 8 | **Tuning & deployment** |

\`\`\`text
Labelled data -> Preprocess -> Train classifier -> Predict class -> Evaluate
\`\`\`

### Two phases
1. **Learning (training) phase** - the algorithm builds a model \`y=f(x)\` from labelled examples.
2. **Classification (testing) phase** - the model predicts class labels for new inputs and is evaluated against known labels.

### Common classifiers
kNN, Decision Tree, Random Forest, SVM, Naive Bayes, Logistic Regression.

### Evaluation with a confusion matrix
\`\`\`text
                Predicted +   Predicted -
Actual +          TP            FN
Actual -          FP            TN

Accuracy  = (TP+TN)/(TP+TN+FP+FN)
\`\`\`

### Example
Spam filter: emails labelled spam/ham are preprocessed and used to train Naive Bayes; new emails are then classified and accuracy measured.

The whole process is iterative - poor evaluation sends us back to improve features or tune the model.`,
  },
  {
    id: "pq-classification-metrics",
    moduleId: "m2",
    topicId: "model-evaluation-improvement",
    co: "CO4",
    marks: "9 marks",
    frequency: "Previous-year question",
    question: "Explain the performance metrics used in classification models.",
    answer: `## Classification Performance Metrics

All metrics build on the **confusion matrix**:

\`\`\`text
                Predicted Positive   Predicted Negative
Actual Positive       TP                  FN
Actual Negative       FP                  TN
\`\`\`

### Core metrics

| Metric | Formula | Meaning |
|--------|---------|---------|
| Accuracy | \`(TP+TN)/(TP+TN+FP+FN)\` | Overall correctness |
| Precision | \`TP/(TP+FP)\` | Of predicted positives, how many correct |
| Recall (Sensitivity) | \`TP/(TP+FN)\` | Of actual positives, how many caught |
| Specificity | \`TN/(TN+FP)\` | Of actual negatives, how many caught |
| F1-score | \`2PR/(P+R)\` | Harmonic mean of precision & recall |

### When to use which
- **Accuracy** - fine for **balanced** classes; misleading on imbalanced data.
- **Precision** - matters when **false positives** are costly (spam flagged wrongly).
- **Recall** - matters when **false negatives** are costly (missing a disease).
- **F1** - best single number when classes are **imbalanced**.

### Other metrics
- **ROC curve & AUC** - trade-off between TPR and FPR across thresholds; AUC closer to 1 is better.
- **Log loss** - penalises confident wrong probabilities.

### Example
A cancer test with 95% accuracy but low **recall** is dangerous - it misses real patients. So we must choose metrics that match the **cost of each error type**.

No single metric is enough; report several to judge a classifier fairly.`,
  },
  {
    id: "pq-association-rule-learning",
    moduleId: "m5",
    topicId: "association-apriori",
    co: "CO5",
    marks: "9 marks",
    frequency: "Previous-year question",
    question: "Explain association rule learning and its applications.",
    answer: `## Association Rule Learning

Association rule learning is an **unsupervised** technique that finds **relationships (rules)** between items in large transaction datasets. A rule has the form \`A -> B\` ("if A is bought, B is likely bought").

### Key measures

| Measure | Formula | Meaning |
|---------|---------|---------|
| Support | \`support(A)=count(A)/N\` | How frequent the itemset is |
| Confidence | \`conf(A->B)=support(A,B)/support(A)\` | Reliability of the rule |
| Lift | \`lift(A->B)=conf(A->B)/support(B)\` | Strength vs random; >1 = positive |

### Process
1. Set minimum **support** and **confidence** thresholds.
2. Find **frequent itemsets** (those meeting min support).
3. Generate **rules** from frequent itemsets.
4. Keep rules meeting min **confidence** (and check **lift**).

### Algorithms
- **Apriori** - generates candidate itemsets level by level using the *Apriori property* (subsets of frequent sets are frequent).
- **FP-Growth** - uses an FP-tree, faster on large data.

\`\`\`text
{Bread, Butter} -> {Milk}
support = 0.4, confidence = 0.8, lift = 1.6
\`\`\`

### Applications
- **Market basket analysis** - product placement, bundling.
- **Recommendation systems** - "frequently bought together".
- **Cross-selling** and store layout.
- **Web usage mining**, medical symptom-disease links.

Association rules turn raw transaction logs into actionable "if-then" business insights.`,
  },
  {
    id: "pq-feature-selection-role",
    moduleId: "m2",
    topicId: "feature-transformation-selection",
    co: "CO2",
    marks: "9 marks",
    frequency: "Previous-year question",
    question: "Explain the role of feature selection in improving ML models.",
    answer: `## Role of Feature Selection in ML

**Feature selection** chooses the most relevant subset of the original features and discards irrelevant or redundant ones (unlike feature extraction, it keeps original features).

### Methods

| Method | Idea | Examples |
|--------|------|----------|
| Filter | Rank features by statistics, independent of model | Correlation, chi-square, information gain |
| Wrapper | Use model performance to evaluate subsets | Forward selection, backward elimination, RFE |
| Embedded | Selection happens during training | Lasso (L1), tree feature importance |

### How it improves models
1. **Reduces overfitting** - fewer irrelevant features means less noise fitting.
2. **Improves accuracy** - keeps only informative signals.
3. **Faster training & prediction** - smaller data.
4. **Better interpretability** - simpler model, clearer reasons.
5. **Less storage & cost.**

\`\`\`text
100 features -> [feature selection] -> 12 key features
   slower, noisy             faster, accurate, clearer
\`\`\`

### Example
In medical diagnosis, selecting the 10 most predictive tests out of 50 gives a faster, cheaper, and often **more accurate** model than using all 50.

### Note
Feature selection addresses the **curse of dimensionality** and is a core step of feature engineering. It differs from PCA (extraction) because it preserves the **original meaning** of each feature, aiding interpretability.`,
  },
  {
    id: "pq-discrete-vs-continuous-dist",
    moduleId: "m3",
    topicId: "random-variables-distributions",
    co: "CO3",
    marks: "9 marks",
    frequency: "Previous-year question",
    question: "Distinguish between discrete and continuous probability distributions.",
    answer: `## Discrete vs Continuous Probability Distributions

A **probability distribution** describes how probabilities are spread over the values of a random variable.

### Discrete distribution
- Variable takes **countable / separate** values (0, 1, 2, ...).
- Described by a **Probability Mass Function (PMF)**: \`P(X = x)\`.
- Probabilities at exact points are non-zero.
- \`sum of P(X=x) = 1\`.

**Examples:** Bernoulli, Binomial, Poisson, Multinomial.

\`\`\`text
Die roll: P(X=1)=P(X=2)=...=P(X=6)=1/6
\`\`\`

### Continuous distribution
- Variable takes **infinitely many** values in a range (real numbers).
- Described by a **Probability Density Function (PDF)**: \`f(x)\`.
- \`P(X = exact value) = 0\`; we compute probability over an **interval** as area under the curve.
- \`integral of f(x) over all x = 1\`.

**Examples:** Normal (Gaussian), Uniform, Exponential.

\`\`\`text
P(a <= X <= b) = area under f(x) from a to b
\`\`\`

### Comparison

| Aspect | Discrete | Continuous |
|--------|----------|------------|
| Values | Countable | Uncountable (range) |
| Function | PMF \`P(X=x)\` | PDF \`f(x)\` |
| P(exact value) | Can be > 0 | Always 0 |
| Total | Sum = 1 | Integral = 1 |
| Examples | Binomial, Poisson | Normal, Exponential |

### ML relevance
Naive Bayes uses **Multinomial/Bernoulli** (discrete) for text and **Gaussian** (continuous) for numeric features - choosing the right distribution matters.`,
  },
  {
    id: "pq-improve-model-performance",
    moduleId: "m2",
    topicId: "model-evaluation-improvement",
    co: "CO4",
    marks: "9 marks",
    frequency: "Previous-year question",
    question: "Explain the methods to improve the performance of ML models.",
    answer: `## Improving ML Model Performance

### 1. Better data
- Collect **more** and **higher-quality** data.
- Clean missing values, outliers, duplicates.
- Balance classes (oversampling / SMOTE).

### 2. Feature engineering
- **Feature selection** - drop irrelevant features.
- **Feature extraction** - PCA to reduce dimensions.
- **Scaling / normalization** so features are comparable.
- Create new informative features.

### 3. Model & hyperparameter tuning
- Try different algorithms.
- **Grid search / random search** for hyperparameters.
- Adjust k (kNN), depth (trees), C and gamma (SVM).

### 4. Fix over/underfitting

| Problem | Symptom | Fix |
|---------|---------|-----|
| Overfitting | High train, low test | Regularization, more data, prune, dropout |
| Underfitting | Low train and test | More features, complex model, train longer |

### 5. Cross-validation
- **k-fold CV** gives a reliable performance estimate and reduces variance in evaluation.

### 6. Ensemble methods
- **Bagging** (Random Forest) reduces variance.
- **Boosting** (AdaBoost, XGBoost) reduces bias.
- **Stacking** combines diverse models.

### 7. Regularization
- **L1 (Lasso)** and **L2 (Ridge)** penalise large weights to curb overfitting.

\`\`\`text
Data quality -> Features -> Tuning -> CV -> Ensembles -> Better model
\`\`\`

The right combination depends on whether the model currently suffers from **bias** (underfit) or **variance** (overfit).`,
  },
  {
    id: "pq-frequentist-vs-bayesian-9",
    moduleId: "m3",
    topicId: "probability-basics",
    co: "CO3",
    marks: "9 marks",
    frequency: "Previous-year question",
    question: "Explain the Frequentist and Bayesian interpretations of probability.",
    answer: `## Frequentist vs Bayesian Probability

Two philosophies for what "probability" means.

### Frequentist interpretation
- Probability = **long-run relative frequency** of an event over many repetitions.
- \`P(heads) = 0.5\` means heads appear 50% of the time in infinite tosses.
- Parameters are **fixed but unknown** constants.
- Uses **MLE**, confidence intervals, hypothesis testing.
- **No prior** belief is used.

### Bayesian interpretation
- Probability = **degree of belief** in an event, updated with evidence.
- Parameters are **random variables** with distributions.
- Uses **Bayes' theorem**: \`P(c|x)=P(x|c)*P(c)/P(x)\`.
- Combines a **prior** with data to get a **posterior**.

### Comparison

| Aspect | Frequentist | Bayesian |
|--------|-------------|----------|
| Probability means | Long-run frequency | Degree of belief |
| Parameters | Fixed unknown | Random with distribution |
| Prior knowledge | Not used | Explicitly used (prior) |
| Output | Point estimate + CI | Full posterior distribution |
| Tools | MLE, p-values | Bayes' theorem, MAP |
| Small data | Less reliable | Prior helps |

### Example
Coin flipped 10 times, 7 heads:
- **Frequentist:** estimate \`P(head)=7/10=0.7\` (just the data).
- **Bayesian:** combine a prior belief of fairness (0.5) with the data to get a posterior between 0.5 and 0.7.

In ML, **Naive Bayes** and Bayesian networks follow the Bayesian view; **MLE-trained** models follow the frequentist view.`,
  },
  {
    id: "pq-three-learning-types",
    moduleId: "m1",
    topicId: "ml-intro",
    co: "CO1",
    marks: "9 marks",
    frequency: "Previous-year question",
    question: "Explain supervised, unsupervised, and reinforcement learning.",
    answer: `## Three Types of Machine Learning

### 1. Supervised Learning
- Trained on **labelled data** (input + correct output).
- Learns mapping \`y = f(x)\`.
- **Tasks:** classification (discrete), regression (continuous).
- **Examples:** spam detection, house-price prediction.
- **Algorithms:** kNN, Decision Tree, SVM, Naive Bayes, Linear Regression.

### 2. Unsupervised Learning
- Data has **no labels**; finds hidden structure.
- **Tasks:** clustering, association, dimensionality reduction.
- **Examples:** customer segmentation, market-basket analysis.
- **Algorithms:** k-means, hierarchical, Apriori, PCA.

### 3. Reinforcement Learning
- An **agent** learns by **interacting** with an environment via **rewards/penalties**.
- No labelled data; learns by **trial and error** to maximise reward.
- **Examples:** game playing, robotics, self-driving cars.
- **Components:** agent, environment, state, action, reward, policy.

### Comparison

| Aspect | Supervised | Unsupervised | Reinforcement |
|--------|------------|--------------|---------------|
| Data | Labelled | Unlabelled | Reward feedback |
| Goal | Predict output | Find structure | Maximise reward |
| Feedback | Direct (labels) | None | Delayed (reward) |
| Example | Spam filter | Segmentation | Game AI |

\`\`\`text
Supervised   : learn from answers
Unsupervised : find patterns yourself
Reinforcement: learn from rewards
\`\`\`

These three paradigms cover most ML problems depending on what data and feedback are available.`,
  },
  {
    id: "pq-data-quality-remediation",
    moduleId: "m1",
    topicId: "ml-data-preprocessing",
    co: "CO2",
    marks: "9 marks",
    frequency: "Previous-year question",
    question: "Explain the importance of data quality, remediation techniques, and preprocessing steps in ML.",
    answer: `## Data Quality, Remediation & Preprocessing

### Why data quality matters
Model accuracy can **never exceed** data quality - "garbage in, garbage out". Good data gives reliable, fair, generalisable models.

### Dimensions of data quality

| Dimension | Question |
|-----------|----------|
| Accuracy | Are values correct? |
| Completeness | Any missing values? |
| Consistency | Same thing recorded the same way? |
| Timeliness | Is data up to date? |
| Validity | In the allowed range/format? |
| Uniqueness | No duplicates? |

### Remediation techniques

| Issue | Remediation |
|-------|-------------|
| Missing values | Delete rows, or impute (mean/median/mode) |
| Outliers | Cap, remove, or transform |
| Duplicates | De-duplicate |
| Inconsistency | Standardise formats/units |
| Noise | Smoothing, binning |
| Imbalance | Oversample/undersample (SMOTE) |

### Preprocessing steps
1. **Data cleaning** - fix missing/noisy/duplicate data.
2. **Data integration** - combine sources.
3. **Data transformation** - scaling, normalization, encoding.
4. **Data reduction** - feature selection / PCA.
5. **Discretization** - bin continuous values.

\`\`\`text
Raw data -> Clean -> Integrate -> Transform -> Reduce -> Ready for ML
\`\`\`

### Example
A customer dataset with missing incomes, mixed date formats, and duplicate rows must be cleaned, standardised, and scaled before any model is trained - otherwise the model learns errors.

High-quality, well-preprocessed data is the single biggest factor in a model's real-world success.`,
  },

  // ===================== 6-MARK QUESTIONS =====================
  {
    id: "pq-pmf-pdf-cdf",
    moduleId: "m3",
    topicId: "random-variables-distributions",
    co: "CO3",
    marks: "6 marks",
    frequency: "Previous-year question",
    question: "Explain PMF, PDF, and CDF.",
    answer: `## PMF, PDF and CDF

### PMF - Probability Mass Function
- For **discrete** random variables.
- Gives probability of an **exact value**: \`P(X = x)\`.
- All values sum to 1: \`sum P(X=x) = 1\`.
- *Example:* fair die, \`P(X=k)=1/6\`.

### PDF - Probability Density Function
- For **continuous** random variables.
- \`f(x)\` is a **density**, not a probability; \`P(X = exact) = 0\`.
- Probability over an interval = **area** under the curve: \`P(a<=X<=b) = integral of f(x) from a to b\`.
- Total area = 1.
- *Example:* Normal distribution bell curve.

### CDF - Cumulative Distribution Function
- Works for **both** discrete and continuous.
- \`F(x) = P(X <= x)\` - probability up to x.
- Discrete: \`F(x) = sum of P(X=k) for k<=x\`.
- Continuous: \`F(x) = integral of f(t) from -inf to x\`.
- Non-decreasing, from 0 to 1.

### Comparison

| Function | Variable | Gives |
|----------|----------|-------|
| PMF | Discrete | P(X = x) |
| PDF | Continuous | density f(x) |
| CDF | Both | P(X <= x) |

\`\`\`text
CDF is the running total of PMF (discrete) or integral of PDF (continuous).
\`\`\``,
  },
  {
    id: "pq-apriori-explain",
    moduleId: "m5",
    topicId: "association-apriori",
    co: "CO5",
    marks: "6 marks",
    frequency: "Previous-year question",
    question: "Explain the Apriori Algorithm up to association rule generation.",
    answer: `## Apriori Algorithm

Apriori finds **frequent itemsets** and generates **association rules** from transaction data.

### Apriori property
> Any subset of a frequent itemset must also be frequent.
> So if an itemset is infrequent, all its supersets are infrequent and can be pruned.

### Measures
\`\`\`text
support(A) = count(A) / N
confidence(A->B) = support(A,B) / support(A)
\`\`\`

### Steps
1. Set **minimum support** and **minimum confidence**.
2. **C1 -> L1:** count single items; keep those >= min support.
3. **Join** L1 with itself to form candidate pairs C2; count; prune below min support -> L2.
4. Repeat: generate C(k) from L(k-1), prune infrequent subsets, count -> L(k).
5. Stop when no more frequent itemsets.
6. **Generate rules** from each frequent itemset and keep those with confidence >= min confidence.

\`\`\`text
C1 -> L1 -> C2 -> L2 -> C3 -> L3 -> ... -> rules
        (prune by support each level)
\`\`\`

### Rule generation
For frequent itemset {A,B}: candidate rules \`A->B\` and \`B->A\`; compute confidence; keep rules meeting the threshold.

### Use
Market-basket analysis ("bread -> butter"), recommendations, cross-selling. Apriori is simple but can be slow due to many candidate scans (FP-Growth is faster).`,
  },
  {
    id: "pq-train-test-split",
    moduleId: "m2",
    topicId: "model-selection-training",
    co: "CO4",
    marks: "6 marks",
    frequency: "Previous-year question",
    question: "Explain the train-test split process in ML.",
    answer: `## Train-Test Split

To check whether a model **generalises**, the dataset is divided so the model is **trained** on one part and **tested** on unseen data.

### The split

| Set | Purpose | Typical size |
|-----|---------|--------------|
| Training set | Fit the model | 70-80% |
| Test set | Evaluate on unseen data | 20-30% |
| (Validation set) | Tune hyperparameters | optional |

\`\`\`text
Full data (100%)
 ├── Train (80%)  -> model learns here
 └── Test  (20%)  -> measure real performance here
\`\`\`

### Process
1. **Shuffle** the data (avoid order bias).
2. **Split** into train and test.
3. **Fit** the model only on the training set.
4. **Predict** on the test set.
5. **Compare** predictions with true test labels (accuracy, F1, RMSE).

### Why it matters
- Tests **generalisation** on data the model has never seen.
- Detects **overfitting** (good on train, poor on test).
- Gives an **honest** performance estimate.

### Important rules
- **Never** fit or peek at the test set during training (avoids **data leakage**).
- Fit scalers/encoders on **train only**, then apply to test.
- Use **stratified** split for imbalanced classes to keep class ratios.
- For small data, prefer **k-fold cross-validation** instead of a single split.`,
  },
  {
    id: "pq-evaluation-metrics-6",
    moduleId: "m2",
    topicId: "model-evaluation-improvement",
    co: "CO4",
    marks: "6 marks",
    frequency: "Previous-year question",
    question: "Explain the evaluation metrics in Machine Learning.",
    answer: `## Evaluation Metrics in ML

Metrics depend on whether the task is **classification** or **regression**.

### Classification metrics (from the confusion matrix)

| Metric | Formula | Meaning |
|--------|---------|---------|
| Accuracy | \`(TP+TN)/Total\` | Overall correctness |
| Precision | \`TP/(TP+FP)\` | Correct among predicted positives |
| Recall | \`TP/(TP+FN)\` | Correct among actual positives |
| F1-score | \`2PR/(P+R)\` | Balance of precision & recall |
| AUC-ROC | area under ROC | Ranking quality |

- Use **F1** for imbalanced data; **recall** when missing positives is costly.

### Regression metrics

| Metric | Formula | Meaning |
|--------|---------|---------|
| MAE | \`mean(\\|y - y_hat\\|)\` | Average absolute error |
| MSE | \`mean((y - y_hat)^2)\` | Penalises large errors |
| RMSE | \`sqrt(MSE)\` | Error in original units |
| R^2 | \`1 - SSres/SStot\` | Variance explained (1 = perfect) |

### Choosing metrics
- Balanced classes -> **accuracy** is fine.
- Imbalanced classes -> **precision/recall/F1**.
- Regression -> **RMSE / R^2**.

\`\`\`text
Always report more than one metric to judge a model fairly.
\`\`\``,
  },
  {
    id: "pq-mle",
    moduleId: "m3",
    topicId: "probability-basics",
    co: "CO3",
    marks: "6 marks",
    frequency: "Previous-year question",
    question: "Explain Maximum Likelihood Estimation (MLE).",
    answer: `## Maximum Likelihood Estimation (MLE)

MLE is a method to **estimate the parameters** of a model by choosing the values that make the **observed data most probable**.

### Idea
Given data and a model with parameter \`θ\`, the **likelihood** \`L(θ)\` is the probability of the data under \`θ\`:
\`\`\`text
L(θ) = P(data | θ) = product of P(xi | θ)
\`\`\`
MLE picks the \`θ\` that **maximises** this likelihood:
\`\`\`text
θ_MLE = argmax L(θ)
\`\`\`

### Log-likelihood
Because products are hard to maximise, we take the **log** (turns product into sum):
\`\`\`text
log L(θ) = sum of log P(xi | θ)
\`\`\`
Then set the derivative to 0 to find the maximum.

### Example - coin
Flip a coin n=10 times, get h=7 heads. With \`P(head)=p\`:
\`\`\`text
L(p) = p^7 * (1-p)^3
d/dp [log L] = 7/p - 3/(1-p) = 0
=> p = 7/10 = 0.7
\`\`\`
So the MLE of p is **0.7** - exactly the observed proportion.

### Use in ML
- Estimates parameters in **logistic regression, Naive Bayes, Gaussians**.
- It is a **frequentist** method (uses only data, no prior).
- Bayesian MAP adds a prior; MLE is the special case with a flat prior.`,
  },
  {
    id: "pq-feature-extraction-selection",
    moduleId: "m2",
    topicId: "feature-transformation-selection",
    co: "CO2",
    marks: "6 marks",
    frequency: "Previous-year question",
    question: "Explain feature extraction and feature selection.",
    answer: `## Feature Extraction vs Feature Selection

Both reduce dimensionality but in different ways.

### Feature Selection
Choose a **subset of the original features**; discard the rest. Original meaning is preserved.

| Method | Idea |
|--------|------|
| Filter | Rank by stats (correlation, chi-square) |
| Wrapper | Evaluate subsets with the model (RFE) |
| Embedded | Selection during training (Lasso, tree importance) |

\`\`\`text
[f1,f2,f3,f4,f5] -> select -> [f1,f3,f5]
\`\`\`

### Feature Extraction
**Create new features** by combining/transforming the originals into a smaller set. Original features are replaced.

| Method | Idea |
|--------|------|
| PCA | New axes capturing max variance |
| LDA | Axes maximising class separation |
| t-SNE | Non-linear, for visualisation |

\`\`\`text
[f1,f2,f3,f4,f5] -> transform -> [PC1, PC2]
\`\`\`

### Comparison

| Aspect | Selection | Extraction |
|--------|-----------|------------|
| Output | Original features (subset) | New combined features |
| Interpretability | High (meaning kept) | Lower |
| Example | RFE, Lasso | PCA, LDA |

### Why use them
Both cut the **curse of dimensionality**: faster training, less overfitting, less noise. Use **selection** when interpretability matters, **extraction** when correlated features can be compressed.`,
  },
  {
    id: "pq-customer-segmentation-clustering",
    moduleId: "m5",
    topicId: "unsupervised-clustering",
    co: "CO5",
    marks: "6 marks",
    frequency: "Previous-year question",
    question: "Explain customer segmentation using clustering.",
    answer: `## Customer Segmentation using Clustering

**Customer segmentation** groups customers with similar behaviour so a business can target each group differently. Because there are **no labels**, it is an **unsupervised clustering** task.

### Common features
- Age, income, annual spending.
- Purchase frequency, recency, basket size (RFM analysis).

### Process
1. Collect customer data.
2. **Normalize** features (so income does not dominate age).
3. Choose number of clusters **k** (Elbow method).
4. Run **k-means** to assign each customer to a cluster.
5. **Profile** each cluster and design marketing.

\`\`\`text
Customers -> normalize -> k-means(k=3) -> Segments:
   Cluster 1: young, low spend
   Cluster 2: middle-age, high income, high spend
   Cluster 3: budget shoppers
\`\`\`

### Algorithms used
- **k-means** (most common).
- **Hierarchical** clustering.
- **DBSCAN** for arbitrary shapes.

### Business benefits
- **Targeted marketing** and personalised offers.
- **Better retention** - treat high-value customers specially.
- **Product recommendations** per segment.
- **Resource allocation.**

### Example
A supermarket finds three segments and sends premium offers to high-spenders and discount coupons to budget shoppers - increasing sales and loyalty.`,
  },
  {
    id: "pq-regression-applications",
    moduleId: "m4",
    topicId: "linear-regression",
    co: "CO4",
    marks: "6 marks",
    frequency: "Previous-year question",
    question: "Explain the applications of regression models.",
    answer: `## Applications of Regression Models

**Regression** predicts a **continuous numeric value** from input features (\`y = f(x)\`). It is widely used wherever we need to estimate a quantity.

### Key applications

| Domain | Prediction |
|--------|-----------|
| Real estate | House price from area, location, rooms |
| Finance | Stock price, risk, returns |
| Sales/Business | Demand and sales forecasting |
| Healthcare | Disease progression, dosage, blood pressure |
| Marketing | Effect of ad spend on revenue |
| Weather | Temperature, rainfall prediction |
| Economics | GDP, inflation estimation |
| Energy | Electricity load forecasting |

### Example - house price
\`\`\`text
Price = w0 + w1*(area) + w2*(rooms) + w3*(location)
\`\`\`
The model learns weights from past sales and predicts price for a new house.

### Types of regression used
- **Linear / Multiple linear** - linear relationships.
- **Polynomial** - curved relationships.
- **Logistic** - probability (classification, despite the name).
- **Ridge / Lasso** - regularised, avoid overfitting.

### Why regression is valuable
It supports **forecasting and decision-making** by quantifying *how much* something will be, and it shows the **influence of each feature** (via its weight). Evaluated with MAE, MSE, RMSE, R^2.`,
  },
  {
    id: "pq-feature-transformation",
    moduleId: "m2",
    topicId: "feature-transformation-selection",
    co: "CO2",
    marks: "6 marks",
    frequency: "Previous-year question",
    question: "Explain feature transformation techniques.",
    answer: `## Feature Transformation Techniques

Feature transformation **changes the form or scale** of features so models learn better.

### 1. Scaling / Normalization
Brings features to a common range so none dominates.
\`\`\`text
Min-Max:   x' = (x - min) / (max - min)        -> [0,1]
Z-score:   x' = (x - mean) / std                -> mean 0, std 1
\`\`\`

### 2. Log / Power transforms
Reduce **skewness** of long-tailed data.
\`\`\`text
x' = log(x)      (compresses large values)
\`\`\`

### 3. Encoding categorical data
- **Label encoding** - categories -> integers.
- **One-hot encoding** - one binary column per category.

### 4. Discretization (binning)
Convert continuous values into categories (e.g. age -> child/adult/senior).

### 5. Polynomial features
Create \`x^2, x*y\` to capture non-linear relationships.

### Summary

| Technique | Purpose |
|-----------|---------|
| Min-max / z-score | Equalise scale |
| Log transform | Reduce skew |
| Encoding | Make categories numeric |
| Binning | Group continuous values |
| Polynomial | Add non-linearity |

### Why it helps
Distance-based models (kNN, k-means, SVM) and gradient methods are **scale-sensitive**, so transformation improves accuracy and convergence. Fit transformations on **training data only** to avoid leakage.`,
  },
  {
    id: "pq-bernoulli-normal-multinomial",
    moduleId: "m3",
    topicId: "random-variables-distributions",
    co: "CO3",
    marks: "6 marks",
    frequency: "Previous-year question",
    question: "Explain the Bernoulli, Normal, and Multinomial distributions.",
    answer: `## Bernoulli, Normal, and Multinomial Distributions

### Bernoulli distribution
- **Discrete**, single trial with **two outcomes** (success=1, failure=0).
- One parameter \`p\` = probability of success.
\`\`\`text
P(X=1)=p ,  P(X=0)=1-p
\`\`\`
- *Example:* one coin flip; spam/not-spam.
- Used in **Bernoulli Naive Bayes** (binary features).

### Normal (Gaussian) distribution
- **Continuous**, symmetric **bell curve**.
- Parameters: mean \`mu\`, standard deviation \`sigma\`.
\`\`\`text
f(x) = (1/(sigma*sqrt(2*pi))) * exp(-(x-mu)^2 / (2*sigma^2))
\`\`\`
- 68% within 1 std, 95% within 2 std.
- *Example:* heights, measurement errors.
- Used in **Gaussian Naive Bayes** (continuous features).

### Multinomial distribution
- **Discrete**, generalises Bernoulli/Binomial to **more than two outcomes** over n trials.
- Counts how many times each of k categories occurs.
- *Example:* word counts in a document; rolling a die n times.
- Used in **Multinomial Naive Bayes** (text classification).

### Comparison

| Distribution | Type | Outcomes | ML use |
|--------------|------|----------|--------|
| Bernoulli | Discrete | 2 (0/1) | Binary features |
| Normal | Continuous | range | Numeric features |
| Multinomial | Discrete | k categories | Word/count features |

Choosing the right distribution is exactly how the **Naive Bayes** variants are selected.`,
  },
  {
    id: "pq-clustering-unsupervised",
    moduleId: "m5",
    topicId: "unsupervised-clustering",
    co: "CO5",
    marks: "6 marks",
    frequency: "Previous-year question",
    question: "Explain clustering in unsupervised learning.",
    answer: `## Clustering in Unsupervised Learning

**Clustering** groups data points so that points in the **same cluster are similar** and points in **different clusters are dissimilar** - all **without labels**.

### Goal
\`\`\`text
Maximise intra-cluster similarity, minimise inter-cluster similarity.
\`\`\`

### Types of clustering

| Type | Idea | Algorithm |
|------|------|-----------|
| Partitional | Divide into k groups | k-means, k-medoids |
| Hierarchical | Build a tree (dendrogram) | Agglomerative |
| Density-based | Dense regions = clusters | DBSCAN |
| Distribution-based | Fit probability models | GMM |

### k-means (most common)
1. Choose **k** centroids.
2. **Assign** each point to nearest centroid.
3. **Recompute** centroids as cluster means.
4. **Repeat** until centroids stop moving.

\`\`\`text
Points -> assign to nearest centroid -> update centroids -> repeat
\`\`\`

### Choosing k
- **Elbow method** (plot within-cluster SSE vs k).
- **Silhouette score.**

### Applications
- Customer segmentation, image compression, document grouping, anomaly detection.

### Evaluation
No labels, so use **internal** measures: silhouette, Davies-Bouldin, inertia.

Clustering is the core unsupervised tool for discovering natural groupings in data.`,
  },
  {
    id: "pq-feature-engineering-workflow",
    moduleId: "m2",
    topicId: "feature-transformation-selection",
    co: "CO2",
    marks: "6 marks",
    frequency: "Previous-year question",
    question: "Explain the workflow of feature engineering.",
    answer: `## Feature Engineering Workflow

**Feature engineering** is the process of creating, transforming, and selecting features to improve model performance. It is often the **most impactful** step in ML.

### Workflow stages

| # | Stage | Activity |
|---|-------|----------|
| 1 | Understand data | Study features and target |
| 2 | Feature creation | Build new features (ratios, dates, aggregates) |
| 3 | Transformation | Scale, normalize, log, encode |
| 4 | Handle missing/outliers | Impute, cap |
| 5 | Feature selection | Keep relevant features |
| 6 | Feature extraction | PCA to reduce dimensions |
| 7 | Validate | Check impact on model |

\`\`\`text
Raw features -> Create -> Transform -> Clean -> Select -> Extract -> Validate
\`\`\`

### Key activities
- **Encoding:** label / one-hot for categorical data.
- **Scaling:** min-max, z-score.
- **Binning:** group continuous values.
- **Selection:** filter/wrapper/embedded.
- **Extraction:** PCA, LDA.

### Importance
- Good features can make a simple model beat a complex one on raw data.
- Reduces overfitting and training time.
- Improves accuracy and interpretability.

### Best practice
Fit all transformations on **training data only** and apply to test data to avoid **data leakage**. Feature engineering is iterative - revisit it after each evaluation.`,
  },
  {
    id: "pq-market-basket-recommendation",
    moduleId: "m5",
    topicId: "association-apriori",
    co: "CO5",
    marks: "6 marks",
    frequency: "Previous-year question",
    question: "Explain Market Basket Analysis / Recommendation Systems.",
    answer: `## Market Basket Analysis & Recommendation

### Market Basket Analysis (MBA)
MBA studies **what items customers buy together** using **association rules**.

\`\`\`text
{Bread, Butter} -> {Milk}
\`\`\`

Measures:
\`\`\`text
support(A)       = count(A) / N
confidence(A->B) = support(A,B) / support(A)
lift(A->B)       = confidence(A->B) / support(B)
\`\`\`
- **Support** - how often the items appear together.
- **Confidence** - reliability of the rule.
- **Lift > 1** - items appear together more than by chance.

Algorithm: **Apriori** or **FP-Growth**.

### Uses of MBA
- Product placement and bundling.
- Cross-selling / "frequently bought together".
- Store layout, promotions.

### Recommendation Systems
Suggest items a user will like:
- **Content-based** - items similar to past likes.
- **Collaborative filtering** - what similar users liked.
- **Association-based** - MBA rules ("bought X -> recommend Y").

### Link between them
MBA association rules feed directly into recommendations: a strong rule \`A -> B\` becomes "customers who bought A may also want B".

### Example
Amazon's "Customers who bought this also bought..." is association-based recommendation built on basket analysis - directly increasing sales.`,
  },
  {
    id: "pq-standardization-scaling",
    moduleId: "m2",
    topicId: "feature-transformation-selection",
    co: "CO2",
    marks: "6 marks",
    frequency: "Previous-year question",
    question: "Explain standardization and scaling techniques in ML and how they affect model performance.",
    answer: `## Standardization and Scaling

Features often have different ranges (age 0-100 vs income 0-1,000,000). Scaling brings them to a comparable range so no feature dominates.

### Min-Max Normalization
\`\`\`text
x' = (x - min) / (max - min)
\`\`\`
- Rescales to **[0, 1]**.
- Good when bounds are known; sensitive to outliers.

### Z-score Standardization
\`\`\`text
x' = (x - mean) / std
\`\`\`
- Produces **mean 0, std 1**.
- Robust when data is roughly Normal; handles outliers better than min-max.

### Comparison

| Technique | Range | Best for |
|-----------|-------|----------|
| Min-max | [0,1] | Bounded data, neural nets |
| Z-score | mean 0, std 1 | Gaussian-like data, SVM, kNN |

### Effect on model performance
- **Distance-based models** (kNN, k-means, SVM) depend on distances - unscaled features bias results toward large-range features.
- **Gradient-descent models** converge **faster** when features are scaled.
- **Regularization** (Lasso/Ridge) needs scaled features to penalise fairly.
- **Tree-based models** (Decision Tree, Random Forest) are **not** affected by scaling.

### Best practice
Fit the scaler on the **training set only**, then transform train and test - fitting on all data causes **data leakage**.

Proper scaling often gives a large, easy accuracy boost for scale-sensitive models.`,
  },
  {
    id: "pq-support-confidence",
    moduleId: "m5",
    topicId: "association-apriori",
    co: "CO5",
    marks: "6 marks",
    frequency: "Previous-year question",
    question: "Explain support and confidence in association rules.",
    answer: `## Support and Confidence

These two measures decide whether an association rule \`A -> B\` is **interesting**.

### Support
How **frequently** the itemset appears in all transactions.
\`\`\`text
support(A) = count(transactions containing A) / N
support(A,B) = count(A and B together) / N
\`\`\`
- High support = the items are common.
- Used to find **frequent itemsets**.

### Confidence
How **reliable** the rule is - given A, how often B also appears.
\`\`\`text
confidence(A->B) = support(A,B) / support(A)
\`\`\`
- High confidence = strong rule.

### Example
Out of N=10 transactions:
- 4 contain {Bread, Butter} -> \`support = 4/10 = 0.4\`
- 5 contain Bread -> \`support(Bread)=0.5\`
- \`confidence(Bread->Butter) = 0.4/0.5 = 0.8\` (80%)

So 80% of customers who buy bread also buy butter.

### Adding Lift
Confidence alone can mislead if B is very common, so we also use:
\`\`\`text
lift(A->B) = confidence(A->B) / support(B)
\`\`\`
- lift > 1 -> positive association
- lift = 1 -> independent
- lift < 1 -> negative association

### Use
Apriori keeps itemsets above **min support**, then keeps rules above **min confidence** (and checks lift) to find the strongest, most useful rules.`,
  },
  {
    id: "pq-supervised-vs-unsupervised",
    moduleId: "m1",
    topicId: "ml-intro",
    co: "CO1",
    marks: "6 marks",
    frequency: "Previous-year question",
    question: "Compare supervised and unsupervised learning.",
    answer: `## Supervised vs Unsupervised Learning

### Supervised Learning
- Uses **labelled** data (input + correct output).
- Learns \`y = f(x)\`.
- Tasks: **classification** and **regression**.
- Feedback is **direct** (compare with labels).

### Unsupervised Learning
- Uses **unlabelled** data.
- Finds **hidden patterns / structure**.
- Tasks: **clustering, association, dimensionality reduction**.
- **No** direct feedback.

### Comparison

| Aspect | Supervised | Unsupervised |
|--------|------------|--------------|
| Data | Labelled | Unlabelled |
| Goal | Predict output | Discover structure |
| Tasks | Classification, regression | Clustering, association |
| Feedback | Yes (labels) | No |
| Evaluation | Accuracy, F1, RMSE | Silhouette, inertia |
| Examples | Spam filter, price prediction | Customer segmentation, MBA |
| Algorithms | kNN, SVM, Decision Tree | k-means, Apriori, PCA |

\`\`\`text
Supervised   : "Here are answers, learn to predict them."
Unsupervised : "No answers - find the patterns yourself."
\`\`\`

### When to use which
- **Supervised** - when labelled data is available and you must predict a known target.
- **Unsupervised** - when labels are missing and you want to explore or group data.

Many real systems combine both (e.g. cluster first, then classify).`,
  },
  {
    id: "pq-feature-subset-selection",
    moduleId: "m2",
    topicId: "feature-transformation-selection",
    co: "CO2",
    marks: "6 marks",
    frequency: "Previous-year question",
    question: "Explain feature subset selection and its importance.",
    answer: `## Feature Subset Selection

Feature subset selection chooses the **smallest set of features** that gives the **best model performance**, removing irrelevant and redundant features.

### Methods

| Method | How | Examples |
|--------|-----|----------|
| Filter | Score features by statistics, model-independent | Correlation, chi-square, info gain |
| Wrapper | Search subsets, evaluate with the model | Forward selection, backward elimination, RFE |
| Embedded | Selection during training | Lasso (L1), tree importance |

### Search strategies (wrapper)
- **Forward selection** - start empty, add the best feature each step.
- **Backward elimination** - start with all, remove the weakest each step.
- **Stepwise** - combination of both.

\`\`\`text
All features -> evaluate subsets -> keep best-performing subset
\`\`\`

### Importance
1. **Reduces overfitting** - fewer noisy features.
2. **Improves accuracy** - keeps only relevant signals.
3. **Faster** training and prediction.
4. **Better interpretability** - simpler model.
5. **Tackles curse of dimensionality.**
6. **Lower storage / cost.**

### Example
From 30 medical features, selecting the 8 most predictive can match or beat the full-feature model while being faster and easier to explain.

Unlike PCA (which creates new features), subset selection keeps **original features**, preserving their meaning.`,
  },
  {
    id: "pq-unsupervised-applications",
    moduleId: "m5",
    topicId: "unsupervised-clustering",
    co: "CO5",
    marks: "6 marks",
    frequency: "Previous-year question",
    question: "Explain the applications of unsupervised learning.",
    answer: `## Applications of Unsupervised Learning

Unsupervised learning finds structure in **unlabelled** data. Its main applications:

### 1. Clustering applications
- **Customer segmentation** - group customers for targeted marketing.
- **Image segmentation** - group similar pixels.
- **Document/topic grouping** - cluster news articles.
- **Anomaly/fraud detection** - points outside clusters.

### 2. Association applications
- **Market basket analysis** - "bread -> butter".
- **Recommendation systems** - frequently bought together.
- **Web usage / clickstream mining.**

### 3. Dimensionality-reduction applications
- **Data visualisation** - reduce to 2D/3D (PCA, t-SNE).
- **Noise reduction / compression** - image compression.
- **Preprocessing** before supervised models.

### Summary table

| Task | Application | Algorithm |
|------|-------------|-----------|
| Clustering | Customer segmentation | k-means |
| Clustering | Anomaly detection | DBSCAN |
| Association | Market basket | Apriori |
| Reduction | Visualisation | PCA, t-SNE |

### Why valuable
- Works when **labels are unavailable or expensive**.
- Reveals **hidden patterns** humans might miss.
- Supports exploration, recommendation, and anomaly detection across retail, finance, healthcare, and security.

Example: a bank clusters transactions and flags ones that fit no cluster as possible fraud - no labelled fraud data needed.`,
  },
  {
    id: "pq-model-validation",
    moduleId: "m2",
    topicId: "model-evaluation-improvement",
    co: "CO4",
    marks: "6 marks",
    frequency: "Previous-year question",
    question: "Explain model validation in Machine Learning.",
    answer: `## Model Validation

**Model validation** checks how well a trained model **generalises** to unseen data, so we trust it before deployment.

### Why validate
- Detect **overfitting** (great on train, poor on new data).
- Get an **honest** performance estimate.
- **Compare** models / tune hyperparameters.

### Validation techniques

| Technique | Idea |
|-----------|------|
| Hold-out (train/test) | Split once (e.g. 80/20) |
| Train/validation/test | Separate set for tuning |
| k-fold cross-validation | Split into k folds; each fold tests once |
| Stratified k-fold | Keeps class ratios (imbalanced data) |
| Leave-One-Out (LOOCV) | k = n; one sample tested at a time |

### k-fold cross-validation
\`\`\`text
Split data into k folds.
For each fold:
  train on the other k-1 folds, test on this fold.
Final score = average of k test scores.
\`\`\`
- Uses all data for both training and testing.
- Reduces variance of the estimate; great for small datasets.

### Validation metrics
- Classification: accuracy, precision, recall, F1.
- Regression: MAE, MSE, RMSE, R^2.

### Best practice
Keep a **final test set** untouched during tuning; tune only on validation/CV. This prevents **data leakage** and overly optimistic results.

Validation is what turns "it works on my training data" into "it will work in the real world".`,
  },
  {
    id: "pq-data-transformation-discretization",
    moduleId: "m1",
    topicId: "ml-data-preprocessing",
    co: "CO2",
    marks: "6 marks",
    frequency: "Previous-year question",
    question: "Explain data transformation and discretization techniques.",
    answer: `## Data Transformation and Discretization

### Data Transformation
Converting data into a form better suited for modelling.

| Technique | Purpose |
|-----------|---------|
| Normalization (min-max) | Rescale to [0,1] |
| Standardization (z-score) | Mean 0, std 1 |
| Log/power transform | Reduce skewness |
| Encoding | Categorical -> numeric (label, one-hot) |
| Aggregation | Combine values (daily -> monthly) |

\`\`\`text
Min-max:  x' = (x - min)/(max - min)
Z-score:  x' = (x - mean)/std
\`\`\`

### Discretization (Binning)
Converting **continuous** values into **discrete intervals (bins/categories)**.

| Method | Idea |
|--------|------|
| Equal-width | Equal-size ranges |
| Equal-frequency | Each bin has equal count |
| Clustering-based | Bins from clusters |
| Entropy-based | Splits that maximise info gain |

\`\`\`text
Age: 0-12 -> Child, 13-19 -> Teen, 20-59 -> Adult, 60+ -> Senior
\`\`\`

### Why discretize
- Some algorithms (Naive Bayes, decision rules) work better with categories.
- Reduces effect of noise/outliers.
- Improves interpretability.

### Summary
- **Transformation** changes scale/format (numeric -> numeric).
- **Discretization** changes continuous -> categorical.

Both are key **preprocessing** steps that make data cleaner and models more accurate.`,
  },
  {
    id: "pq-build-prediction-model",
    moduleId: "m2",
    topicId: "model-selection-training",
    co: "CO5",
    marks: "6 marks",
    frequency: "Previous-year question",
    question: "Explain the process of building a prediction model.",
    answer: `## Building a Prediction Model

A prediction model learns from past data to forecast outcomes for new data.

### Step-by-step

| # | Step | Activity |
|---|------|----------|
| 1 | Define problem | What to predict + success metric |
| 2 | Collect data | Gather relevant historical data |
| 3 | Preprocess | Clean, handle missing, encode, scale |
| 4 | Feature engineering | Select/transform features |
| 5 | Split data | Train / test (and validation) |
| 6 | Choose model | Classification or regression algorithm |
| 7 | Train | Fit model on training data |
| 8 | Evaluate | Accuracy/F1 or RMSE/R^2 on test |
| 9 | Tune | Hyperparameters, fix over/underfit |
| 10 | Deploy & monitor | Serve predictions; watch drift |

\`\`\`text
Problem -> Data -> Preprocess -> Features -> Split -> Train -> Evaluate -> Tune -> Deploy
\`\`\`

### Example - predicting house price
1. Target = price (regression).
2. Features = area, rooms, location.
3. Clean and scale data; split 80/20.
4. Train **Linear Regression**.
5. Evaluate with RMSE and R^2.
6. Tune and deploy.

### Key points
- **Classification** for category outputs, **regression** for numeric outputs.
- Always **validate** on unseen data to confirm generalisation.
- Monitor after deployment because data can **drift** over time.

This iterative process is the practical core of applied machine learning.`,
  },
  {
    id: "pq-normalization-encoding",
    moduleId: "m2",
    topicId: "feature-transformation-selection",
    co: "CO2",
    marks: "6 marks",
    frequency: "Previous-year question",
    question: "Explain normalization and encoding techniques in feature engineering.",
    answer: `## Normalization and Encoding

Two essential feature-engineering steps that prepare data for ML.

### Normalization (for numeric features)
Brings features onto a common scale.

| Technique | Formula | Range |
|-----------|---------|-------|
| Min-max | \`x' = (x-min)/(max-min)\` | [0,1] |
| Z-score | \`x' = (x-mean)/std\` | mean 0, std 1 |
| Decimal scaling | \`x' = x/10^j\` | small values |

- Needed for **distance-based** (kNN, k-means, SVM) and **gradient** methods.
- Not needed for tree-based models.

### Encoding (for categorical features)
Converts categories into numbers a model can use.

| Technique | Idea | Example |
|-----------|------|---------|
| Label encoding | Category -> integer | Red=0, Green=1, Blue=2 |
| One-hot encoding | One binary column per category | Red->[1,0,0] |
| Ordinal encoding | Ranked integers (ordered) | Low=1, Med=2, High=3 |

\`\`\`text
Nominal (no order)  -> one-hot (avoid false order)
Ordinal (has order) -> label/ordinal encoding
\`\`\`

### Caution
- **Label encoding** on nominal data can invent a false order; prefer **one-hot** there.
- One-hot can explode columns if there are many categories.

### Why both matter
Models cannot use raw text categories, and scale-sensitive models are biased by unscaled numbers. Normalization + encoding together turn raw data into clean numeric input - fit on **training data only** to avoid leakage.`,
  },
  {
    id: "pq-clustering-scalability-interpretability",
    moduleId: "m5",
    topicId: "unsupervised-clustering",
    co: "CO5",
    marks: "6 marks",
    frequency: "Previous-year question",
    question: "Explain different clustering techniques based on scalability and interpretability.",
    answer: `## Clustering Techniques: Scalability & Interpretability

Clustering groups similar unlabelled data. Techniques differ in how well they **scale** to big data and how **interpretable** their results are.

### Main techniques

| Technique | Idea | Scalability | Interpretability |
|-----------|------|-------------|------------------|
| k-means | Partition into k centroids | High (fast) | High (clear centroids) |
| Hierarchical | Build dendrogram tree | Low (O(n^2)) | High (visual tree) |
| DBSCAN | Density-based regions | Medium | Medium (no k needed) |
| GMM | Probabilistic soft clusters | Medium | Medium (probabilities) |
| BIRCH | Tree summary for large data | Very high | Medium |

### Scalability
- **High:** k-means, BIRCH, Mini-batch k-means - handle large datasets.
- **Low:** hierarchical clustering - costly on big data.

### Interpretability
- **High:** k-means (centroid = average customer), hierarchical (dendrogram shows structure).
- **Lower:** GMM gives probabilities; DBSCAN shapes can be harder to summarise.

### Choosing a technique
- **Large data + speed** -> k-means / BIRCH.
- **Need a clear hierarchy / small data** -> hierarchical.
- **Arbitrary shapes + outliers** -> DBSCAN.
- **Soft (overlapping) clusters** -> GMM.

\`\`\`text
Big data, simple groups  -> k-means
Small data, structure    -> hierarchical
Noisy, odd shapes        -> DBSCAN
\`\`\`

The trade-off: scalable methods (k-means) assume simple cluster shapes, while flexible methods (DBSCAN/GMM) cost more compute.`,
  },

  // ===================== 5-MARK QUESTIONS =====================
  {
    id: "pq-what-is-preprocessing",
    moduleId: "m1",
    topicId: "ml-data-preprocessing",
    co: "CO2",
    marks: "5 marks",
    frequency: "Previous-year question",
    question: "What is preprocessing in ML?",
    answer: `## Data Preprocessing

**Preprocessing** is the step of cleaning and transforming **raw data** into a form suitable for an ML model. Real data is often noisy, incomplete, and inconsistent, so preprocessing is essential - *garbage in, garbage out*.

### Main steps

| Step | Activity |
|------|----------|
| Data cleaning | Handle missing values, remove noise/duplicates |
| Data integration | Combine multiple sources |
| Data transformation | Normalize, standardize, encode |
| Data reduction | Feature selection, PCA |
| Discretization | Bin continuous values |

### Common techniques
- **Missing values:** impute with mean/median/mode, or drop.
- **Encoding:** label / one-hot for categorical data.
- **Scaling:** min-max or z-score.
- **Outlier handling:** cap or remove.

\`\`\`text
Raw data -> Clean -> Transform -> Reduce -> Ready for ML
\`\`\`

### Importance
Good preprocessing improves **accuracy**, speeds up training, and prevents the model from learning errors. Model quality can never exceed data quality.`,
  },
  {
    id: "pq-define-association-rule",
    moduleId: "m5",
    topicId: "association-apriori",
    co: "CO5",
    marks: "5 marks",
    frequency: "Previous-year question",
    question: "Define association rule learning.",
    answer: `## Association Rule Learning

**Association rule learning** is an **unsupervised** technique that discovers **relationships between items** in large transaction datasets. Rules have the form \`A -> B\` ("if A is bought, B is likely bought too").

### Key measures
\`\`\`text
support(A)        = count(A) / N
confidence(A->B)  = support(A,B) / support(A)
lift(A->B)        = confidence(A->B) / support(B)
\`\`\`

| Measure | Meaning |
|---------|---------|
| Support | How frequent the itemset is |
| Confidence | How reliable the rule is |
| Lift | Strength vs chance (>1 positive) |

### Process
1. Find **frequent itemsets** (>= min support).
2. Generate **rules** from them.
3. Keep rules with **confidence** >= threshold.

Algorithm: **Apriori** (or FP-Growth).

### Example
\`{Bread, Butter} -> {Milk}\` with support 0.4, confidence 0.8.

### Use
Market-basket analysis, recommendations ("frequently bought together"), cross-selling.`,
  },
  {
    id: "pq-what-is-dimensionality-reduction",
    moduleId: "m2",
    topicId: "feature-transformation-selection",
    co: "CO2",
    marks: "5 marks",
    frequency: "Previous-year question",
    question: "What is dimensionality reduction?",
    answer: `## Dimensionality Reduction

**Dimensionality reduction** reduces the number of **features (dimensions)** in a dataset while keeping as much useful information as possible.

### Why needed (Curse of Dimensionality)
- Too many features -> sparse data, slow training, **overfitting**, hard to visualise.

### Two approaches

| Approach | Idea | Examples |
|----------|------|----------|
| Feature selection | Keep best original features | RFE, Lasso |
| Feature extraction | Create new combined features | PCA, LDA, t-SNE |

### PCA (most common)
Finds new axes (principal components) capturing **maximum variance**, then keeps the top few.
\`\`\`text
100 features -> PCA -> 10 components (95% variance kept)
\`\`\`

### Benefits
- Less overfitting, faster training.
- Removes redundancy and noise.
- Enables 2D/3D visualisation.

It is a key preprocessing step when data has many correlated features.`,
  },
  {
    id: "pq-well-posed-learning",
    moduleId: "m1",
    topicId: "ml-intro",
    co: "CO1",
    marks: "5 marks",
    frequency: "Previous-year question",
    question: "Explain Well-Posed Learning in ML.",
    answer: `## Well-Posed Learning Problem

A learning problem is **well-posed** when it can be clearly defined in terms of **Task (T), Performance (P), and Experience (E)** - Tom Mitchell's definition.

> "A program learns from experience **E** with respect to task **T** and performance measure **P**, if its performance at T, measured by P, improves with E."

### The three components

| Symbol | Meaning |
|--------|---------|
| **T** (Task) | What the program must do |
| **P** (Performance) | How success is measured |
| **E** (Experience) | The data it learns from |

### Example: Spam filter
- **T** = classify email as spam / not spam
- **P** = classification accuracy
- **E** = labelled past emails

As E grows, P on T improves - that is learning.

### Another example: Checkers
- **T** = play checkers, **P** = games won, **E** = playing practice games.

### Why "well-posed"
If T, P, and E are clearly stated, the problem is solvable and measurable - the starting point for any ML solution.`,
  },
  {
    id: "pq-frequentist-vs-bayesian-5",
    moduleId: "m3",
    topicId: "probability-basics",
    co: "CO3",
    marks: "5 marks",
    frequency: "Previous-year question",
    question: "Differentiate Frequentist and Bayesian approaches.",
    answer: `## Frequentist vs Bayesian Approach

Two interpretations of probability used in ML.

### Frequentist
- Probability = **long-run frequency** of an event.
- Parameters are **fixed but unknown**.
- Uses **MLE**, p-values, confidence intervals.
- **No prior** belief.

### Bayesian
- Probability = **degree of belief**, updated with data.
- Parameters are **random variables**.
- Uses **Bayes' theorem**: \`P(c|x)=P(x|c)*P(c)/P(x)\`.
- Combines a **prior** with data -> **posterior**.

### Comparison

| Aspect | Frequentist | Bayesian |
|--------|-------------|----------|
| Probability | Frequency | Belief |
| Parameters | Fixed | Random |
| Prior | Not used | Used |
| Output | Point estimate | Posterior distribution |
| Small data | Weaker | Prior helps |

### Example
Coin: 7 heads in 10 tosses.
- Frequentist: \`p = 7/10 = 0.7\`.
- Bayesian: combine prior (0.5) with data -> posterior between 0.5 and 0.7.

In ML, Naive Bayes is **Bayesian**; MLE-trained models are **frequentist**.`,
  },
  {
    id: "pq-what-is-classification-model",
    moduleId: "m4",
    topicId: "supervised-classification-intro",
    co: "CO4",
    marks: "5 marks",
    frequency: "Previous-year question",
    question: "What is a classification model?",
    answer: `## Classification Model

A **classification model** is a **supervised** ML model that assigns an input to one of several **predefined discrete classes** (categories). It learns from labelled data and predicts the class of new inputs.

\`\`\`text
Input -> [Classifier] -> Class label (e.g. Spam / Not Spam)
\`\`\`

### Types
- **Binary** - two classes (yes/no).
- **Multi-class** - more than two (cat/dog/bird).
- **Multi-label** - multiple labels per input.

### Common algorithms
kNN, Decision Tree, Random Forest, SVM, Naive Bayes, Logistic Regression.

### Evaluation (confusion matrix)
\`\`\`text
Accuracy  = (TP+TN)/(TP+TN+FP+FN)
Precision = TP/(TP+FP)
Recall    = TP/(TP+FN)
F1        = 2PR/(P+R)
\`\`\`

### Examples
- Spam detection, disease diagnosis, image recognition, sentiment analysis.

The key feature: the output is a **category**, not a number (which would be regression).`,
  },
  {
    id: "pq-define-reinforcement-learning",
    moduleId: "m1",
    topicId: "ml-intro",
    co: "CO1",
    marks: "5 marks",
    frequency: "Previous-year question",
    question: "Define reinforcement learning.",
    answer: `## Reinforcement Learning (RL)

**Reinforcement Learning** is a type of ML where an **agent** learns to make decisions by **interacting** with an **environment**, receiving **rewards** for good actions and **penalties** for bad ones. The goal is to learn a **policy** that maximises long-term reward. There is **no labelled data** - the agent learns by **trial and error**.

\`\`\`text
Agent --action--> Environment --reward + new state--> Agent
\`\`\`

### Components

| Component | Meaning |
|-----------|---------|
| Agent | The learner/decision maker |
| Environment | The world it acts in |
| State (s) | Current situation |
| Action (a) | A choice |
| Reward (r) | Feedback signal |
| Policy | Strategy mapping state -> action |

### Key idea
Balance **exploration** (try new actions) and **exploitation** (use known good ones); rewards may be **delayed**.

### Examples
Game playing (Chess, Go), robotics, self-driving cars.

RL differs from supervised learning - no correct answers are given, only rewards to maximise.`,
  },
  {
    id: "pq-what-is-anomaly-detection",
    moduleId: "m5",
    topicId: "unsupervised-clustering",
    co: "CO5",
    marks: "5 marks",
    frequency: "Previous-year question",
    question: "What is anomaly detection?",
    answer: `## Anomaly Detection

**Anomaly (outlier) detection** identifies data points that **differ significantly** from normal patterns. Because anomalies are rare and often unlabelled, it is usually an **unsupervised** task.

\`\`\`text
   o o o o o        <- normal cluster
                x   <- anomaly (far from normal)
\`\`\`

### Types
- **Point anomaly** - a single unusual value.
- **Contextual anomaly** - unusual in a context.
- **Collective anomaly** - a group abnormal together.

### Approaches

| Approach | Idea |
|----------|------|
| Statistical | Far from mean (z-score > 3) |
| Distance-based | Far from neighbours (kNN) |
| Density-based | Low-density region (LOF, DBSCAN) |
| ML-based | Isolation Forest, One-Class SVM |

### Applications
- Fraud detection, network intrusion, fault/sensor monitoring, medical abnormalities.

### Challenge
Anomalies are rare, so data is **imbalanced** and thresholds must balance false alarms vs missed cases.`,
  },
  {
    id: "pq-define-clustering",
    moduleId: "m5",
    topicId: "unsupervised-clustering",
    co: "CO5",
    marks: "5 marks",
    frequency: "Previous-year question",
    question: "Define clustering.",
    answer: `## Clustering

**Clustering** is an **unsupervised** learning technique that groups data points so that points in the **same group (cluster) are similar**, and points in **different clusters are dissimilar** - all **without labels**.

\`\`\`text
Goal: maximise similarity within clusters,
      minimise similarity between clusters.
\`\`\`

### Types

| Type | Algorithm |
|------|-----------|
| Partitional | k-means |
| Hierarchical | Agglomerative (dendrogram) |
| Density-based | DBSCAN |
| Distribution-based | GMM |

### k-means (most common)
1. Pick k centroids.
2. Assign each point to nearest centroid.
3. Recompute centroids.
4. Repeat until stable.

### Choosing k
Elbow method or silhouette score.

### Applications
Customer segmentation, image compression, document grouping, anomaly detection.

The key idea: discover **natural groupings** in data when no labels exist.`,
  },
  {
    id: "pq-what-is-random-forest",
    moduleId: "m4",
    topicId: "random-forest-svm",
    co: "CO4",
    marks: "5 marks",
    frequency: "Previous-year question",
    question: "What is the Random Forest algorithm?",
    answer: `## Random Forest

**Random Forest** is a **supervised ensemble** algorithm that builds **many decision trees** and combines their outputs - **majority vote** for classification, **average** for regression.

\`\`\`text
Tree1 -> A
Tree2 -> B   --> majority vote --> A
Tree3 -> A
\`\`\`

### How it works
1. **Bagging:** each tree is trained on a random bootstrap sample of the data.
2. **Random features:** each split considers a random subset of features.
3. Combine all trees' predictions.

### Why it works
- Averaging many trees **reduces variance** and **overfitting**.
- Random features **de-correlate** the trees.

### Advantages
- High accuracy and robustness.
- Handles missing data and large feature sets.
- Gives **feature importance**.

### Limitations
- Less interpretable than a single tree.
- Slower (many trees).

Random Forest is one of the most reliable general-purpose ML algorithms.`,
  },
  {
    id: "pq-overfitting-underfitting",
    moduleId: "m2",
    topicId: "model-evaluation-improvement",
    co: "CO4",
    marks: "5 marks",
    frequency: "Previous-year question",
    question: "What is overfitting and underfitting?",
    answer: `## Overfitting and Underfitting

These describe how well a model fits the data.

### Overfitting
- Model learns the training data **too well**, including noise.
- **High** training accuracy, **low** test accuracy.
- High **variance**, too complex.
- **Fixes:** more data, regularization (L1/L2), pruning, dropout, simpler model, cross-validation.

### Underfitting
- Model is **too simple** to capture the pattern.
- **Low** accuracy on **both** train and test.
- High **bias**.
- **Fixes:** more features, complex model, train longer, less regularization.

### Comparison

| Aspect | Overfitting | Underfitting |
|--------|-------------|--------------|
| Train accuracy | High | Low |
| Test accuracy | Low | Low |
| Problem | High variance | High bias |
| Model | Too complex | Too simple |

\`\`\`text
Underfit  ---- Good fit ---- Overfit
(too simple)  (balanced)   (memorised)
\`\`\`

### Goal
Find the **bias-variance balance** - a model that generalises well to unseen data.`,
  },
  {
    id: "pq-what-is-naive-bayes",
    moduleId: "m3",
    topicId: "bayes-naive-bayes",
    co: "CO3",
    marks: "5 marks",
    frequency: "Previous-year question",
    question: "What is the Naive Bayes classifier?",
    answer: `## Naive Bayes Classifier

**Naive Bayes** is a **supervised** classifier based on **Bayes' theorem** with the "naive" assumption that all features are **conditionally independent** given the class.

\`\`\`text
P(c|x) = P(x|c) * P(c) / P(x)

P(c | x1,...,xn) ∝ P(c) * P(x1|c) * ... * P(xn|c)
\`\`\`

### Steps
1. Compute **prior** \`P(c)\` from class counts.
2. Compute **likelihood** \`P(xi|c)\` per feature.
3. Multiply prior x likelihoods for each class.
4. Predict the class with the **highest** product (use Laplace smoothing for zero counts).

### Variants
- **Multinomial** - word counts (text).
- **Bernoulli** - binary features.
- **Gaussian** - continuous features.

### Advantages
- Fast, simple, works with little data, great for text/spam.

### Limitation
- The independence assumption is rarely fully true, but it still performs well.`,
  },
  {
    id: "pq-five-applications-ml",
    moduleId: "m1",
    topicId: "ml-applications-issues",
    co: "CO1",
    marks: "5 marks",
    frequency: "Previous-year question",
    question: "Explain five applications of Machine Learning.",
    answer: `## Five Applications of Machine Learning

### 1. Email Spam Filtering
Classifies emails as spam or not using **Naive Bayes** on email features.

### 2. Recommendation Systems
Amazon, Netflix, and Spotify suggest products/movies/songs using **collaborative filtering** and association rules.

### 3. Healthcare / Medical Diagnosis
Detects diseases from scans and predicts patient risk using **classification** models (CNNs, Random Forest).

### 4. Fraud Detection (Finance)
Banks flag unusual transactions using **anomaly detection** and classification.

### 5. Image & Speech Recognition
Face unlock, object detection, and voice assistants (Siri, Alexa) use **deep learning** models.

### Summary

| Application | Task type | Example |
|-------------|-----------|---------|
| Spam filtering | Classification | Gmail |
| Recommendation | Clustering/collab | Netflix |
| Diagnosis | Classification | Cancer detection |
| Fraud detection | Anomaly | Banks |
| Image/speech | Deep learning | Siri, Face ID |

ML turns large amounts of data into useful predictions across almost every industry.`,
  },
  {
    id: "pq-training-vs-testing-set",
    moduleId: "m2",
    topicId: "model-selection-training",
    co: "CO4",
    marks: "5 marks",
    frequency: "Previous-year question",
    question: "Differentiate between training set and testing set.",
    answer: `## Training Set vs Testing Set

A dataset is split so the model can be trained on one part and **evaluated** on unseen data.

### Training Set
- Data used to **train (fit)** the model.
- The model **learns patterns** here.
- Usually **70-80%** of the data.

### Testing Set
- Data used to **evaluate** the trained model.
- Kept **unseen** during training.
- Usually **20-30%** of the data.

### Comparison

| Aspect | Training set | Testing set |
|--------|--------------|-------------|
| Purpose | Train/fit model | Evaluate model |
| Used during | Learning | Final evaluation |
| Size | Larger (70-80%) | Smaller (20-30%) |
| Model sees it? | Yes | No |

\`\`\`text
Full data -> Train (80%) [learn]  +  Test (20%) [check]
\`\`\`

### Why separate
- Tests **generalisation** to new data.
- Detects **overfitting**.
- Never train or peek at the test set (avoids **data leakage**).

A validation set may also be used to **tune** hyperparameters.`,
  },
  {
    id: "pq-why-problems-solved-by-ml",
    moduleId: "m1",
    topicId: "ml-applications-issues",
    co: "CO1",
    marks: "5 marks",
    frequency: "Previous-year question",
    question: "Why are certain problems solved using Machine Learning?",
    answer: `## Why Some Problems Need Machine Learning

Some problems are hard or impossible to solve with **fixed, hand-written rules**. ML is used when:

### 1. Rules are too complex or unknown
- e.g. recognising a face or handwriting - too many variations to code by hand. ML **learns** the patterns from data.

### 2. Patterns change over time
- e.g. spam keeps evolving. ML models can be **retrained** as data changes.

### 3. Huge amounts of data
- Humans cannot manually analyse millions of records; ML finds patterns automatically.

### 4. Personalisation is needed
- Recommendations differ per user; ML adapts to each user's behaviour.

### 5. Prediction / uncertainty
- Forecasting sales, prices, or risk - ML estimates outcomes from past data.

### Examples

| Problem | Why ML |
|---------|--------|
| Spam filtering | Rules can't keep up |
| Face recognition | Too complex to hand-code |
| Recommendations | Needs personalisation |
| Fraud detection | Patterns hidden in big data |

In short, ML is chosen when problems are **data-rich, pattern-based, and too complex for explicit programming**.`,
  },
  {
    id: "pq-what-is-regression-analysis",
    moduleId: "m4",
    topicId: "linear-regression",
    co: "CO4",
    marks: "5 marks",
    frequency: "Previous-year question",
    question: "What is regression analysis?",
    answer: `## Regression Analysis

**Regression analysis** is a **supervised** technique that models the relationship between a **dependent variable (target)** and one or more **independent variables (features)** to predict a **continuous numeric value**.

\`\`\`text
y = w0 + w1*x1 + w2*x2 + ... + wn*xn
\`\`\`
- \`y\` = predicted value, \`w\` = weights (learned), \`x\` = features.

### Types

| Type | Idea |
|------|------|
| Simple linear | One feature, straight line |
| Multiple linear | Many features |
| Polynomial | Curved relationship |
| Ridge / Lasso | Regularised (avoid overfit) |
| Logistic | Predicts probability (classification) |

### Goal
Find weights that **minimise error** (least squares):
\`\`\`text
minimise sum of (y_actual - y_predicted)^2
\`\`\`

### Evaluation
MAE, MSE, RMSE, R^2.

### Applications
House-price, sales, temperature, and stock prediction.

Regression answers **"how much / how many"**, unlike classification which predicts categories.`,
  },
  {
    id: "pq-classification-vs-regression-5",
    moduleId: "m4",
    topicId: "supervised-classification-intro",
    co: "CO4",
    marks: "5 marks",
    frequency: "Previous-year question",
    question: "Differentiate classification and regression.",
    answer: `## Classification vs Regression

Both are **supervised** learning, but differ in the **output type**.

### Classification
- Predicts a **discrete class label**.
- Output: category (Yes/No, A/B/C).
- Examples: spam detection, disease diagnosis.
- Metrics: accuracy, precision, recall, F1.

### Regression
- Predicts a **continuous numeric value**.
- Output: a real number.
- Examples: house price, temperature.
- Metrics: MAE, MSE, RMSE, R^2.

### Comparison

| Aspect | Classification | Regression |
|--------|----------------|------------|
| Output | Discrete (category) | Continuous (number) |
| Question | "Which class?" | "How much?" |
| Examples | Spam, diagnosis | Price, demand |
| Algorithms | kNN, SVM, Naive Bayes | Linear Regression |
| Metrics | Accuracy, F1 | RMSE, R^2 |

\`\`\`text
Classification: email -> "Spam"
Regression:     house -> 45.6 lakh
\`\`\`

### Key point
If the target is a **label**, it is classification; if it is a **number**, it is regression.`,
  },
];

export const predictedPrograms: PredictedProgram[] = [
  {
    id: "pp-naive-bayes-play-tennis",
    moduleId: "m3",
    topicId: "bayes-naive-bayes",
    co: "CO3",
    marks: "9 marks",
    frequency: "Previous-year question",
    title: "Naive Bayes Classification (Play Tennis)",
    statement: `Given the Play Tennis training data below, use **Naive Bayes** to classify the new day:
**Outlook = Sunny, Temperature = Cool, Humidity = High, Wind = Strong**.

| Day | Outlook | Temp | Humidity | Wind | Play |
|-----|---------|------|----------|------|------|
| 1 | Sunny | Hot | High | Weak | No |
| 2 | Sunny | Hot | High | Strong | No |
| 3 | Overcast | Hot | High | Weak | Yes |
| 4 | Rain | Mild | High | Weak | Yes |
| 5 | Rain | Cool | Normal | Weak | Yes |
| 6 | Rain | Cool | Normal | Strong | No |
| 7 | Overcast | Cool | Normal | Strong | Yes |
| 8 | Sunny | Mild | High | Weak | No |
| 9 | Sunny | Cool | Normal | Weak | Yes |
| 10 | Rain | Mild | Normal | Weak | Yes |
| 11 | Sunny | Mild | Normal | Strong | Yes |
| 12 | Overcast | Mild | High | Strong | Yes |
| 13 | Overcast | Hot | Normal | Weak | Yes |
| 14 | Rain | Mild | High | Strong | No |`,
    code: `\`\`\`text
STEP 1: PRIORS (count Play over 14 days)
  Yes = 9 , No = 5
  P(Yes) = 9/14 = 0.643
  P(No)  = 5/14 = 0.357

STEP 2: LIKELIHOODS for query
  Query = (Sunny, Cool, High, Strong)

Outlook = Sunny:
  P(Sunny|Yes) = 2/9 = 0.222   (days 9,11)
  P(Sunny|No)  = 3/5 = 0.600   (days 1,2,8)

Temp = Cool:
  P(Cool|Yes)  = 3/9 = 0.333   (days 5,7,9)
  P(Cool|No)   = 1/5 = 0.200   (day 6)

Humidity = High:
  P(High|Yes)  = 3/9 = 0.333   (days 3,4,12)
  P(High|No)   = 4/5 = 0.800   (days 1,2,8,14)

Wind = Strong:
  P(Strong|Yes)= 3/9 = 0.333   (days 7,11,12)
  P(Strong|No) = 3/5 = 0.600   (days 2,6,14)

STEP 3: POSTERIOR SCORES (prior x all likelihoods)
  Yes: 0.643 * 0.222 * 0.333 * 0.333 * 0.333
     = 0.643 * 0.222 * 0.333 * 0.333 * 0.333
     = 0.00527

  No : 0.357 * 0.600 * 0.200 * 0.800 * 0.600
     = 0.357 * 0.600 * 0.200 * 0.800 * 0.600
     = 0.02056

STEP 4: COMPARE
  Score(No)  = 0.02056   <-- HIGHER
  Score(Yes) = 0.00527

STEP 5: NORMALISE (optional)
  P(No)  = 0.02056 / (0.02056 + 0.00527) = 0.796
  P(Yes) = 0.00527 / (0.02056 + 0.00527) = 0.204

DECISION: PLAY = No  (about 80% confidence)
\`\`\``,
    explanation: `## Method
Naive Bayes computes \`P(class) * P(f1|class) * ... * P(fn|class)\` for each class and picks the largest. Each likelihood is a simple frequency count from the training table. Here **No** scores higher (0.0206 vs 0.0053), so the new day is classified **Play = No**. If any count were 0 we would apply **Laplace smoothing** (add 1) to avoid wiping out the whole product.`,
  },
  {
    id: "pp-bayes-disease-test",
    moduleId: "m3",
    topicId: "probability-basics",
    co: "CO3",
    marks: "6 marks",
    frequency: "Previous-year question",
    title: "Bayes' Theorem - Disease Test",
    statement: `A disease affects **1%** of a population. A test is **99% accurate** for sick people (sensitivity) and gives a **5% false positive** rate for healthy people. If a person tests **positive**, what is the probability they actually have the disease?

Given:
- \`P(Disease) = 0.01\`
- \`P(Pos | Disease) = 0.99\`
- \`P(Pos | Healthy) = 0.05\`
- \`P(Healthy) = 0.99\``,
    code: `\`\`\`text
GOAL: P(Disease | Positive)

Bayes' theorem:
  P(D|Pos) = P(Pos|D) * P(D) / P(Pos)

STEP 1: numerator = P(Pos|D) * P(D)
  = 0.99 * 0.01
  = 0.0099

STEP 2: total probability of a positive test P(Pos)
  P(Pos) = P(Pos|D)*P(D) + P(Pos|Healthy)*P(Healthy)
         = (0.99 * 0.01) + (0.05 * 0.99)
         = 0.0099 + 0.0495
         = 0.0594

STEP 3: posterior
  P(D|Pos) = 0.0099 / 0.0594
           = 0.1667

ANSWER: P(Disease | Positive) = 0.167 = about 16.7%
\`\`\``,
    explanation: `## Method & takeaway
Even with a 99% accurate test, a positive result means only a **16.7%** chance of disease, because the disease is **rare** (1% prior). The many healthy people (99%) produce more **false positives** (0.0495) than the few sick people produce **true positives** (0.0099). This is the classic **base-rate fallacy** - the prior \`P(Disease)\` heavily affects the posterior, showing why Bayes' theorem matters in medical testing.`,
  },
  {
    id: "pp-knn-classify",
    moduleId: "m4",
    topicId: "knn-decision-tree",
    co: "CO4",
    marks: "6 marks",
    frequency: "Previous-year question",
    title: "kNN Classification (k=3, Euclidean)",
    statement: `Classify the query point **P = (6, 6)** using **kNN with k=3** and **Euclidean distance**.

| Point | x | y | Class |
|-------|---|---|-------|
| A | 7 | 7 | Red |
| B | 7 | 4 | Red |
| C | 3 | 4 | Blue |
| D | 1 | 4 | Blue |
| E | 5 | 5 | Blue |
| F | 8 | 6 | Red |`,
    code: `\`\`\`text
Query P = (6,6)
Euclidean distance d = sqrt((x-6)^2 + (y-6)^2)

A (7,7): sqrt((7-6)^2 + (7-6)^2) = sqrt(1+1) = sqrt(2)  = 1.414
B (7,4): sqrt((7-6)^2 + (4-6)^2) = sqrt(1+4) = sqrt(5)  = 2.236
C (3,4): sqrt((3-6)^2 + (4-6)^2) = sqrt(9+4) = sqrt(13) = 3.606
D (1,4): sqrt((1-6)^2 + (4-6)^2) = sqrt(25+4)= sqrt(29) = 5.385
E (5,5): sqrt((5-6)^2 + (5-6)^2) = sqrt(1+1) = sqrt(2)  = 1.414
F (8,6): sqrt((8-6)^2 + (6-6)^2) = sqrt(4+0) = sqrt(4)  = 2.000

SORT by distance:
  A = 1.414  (Red)
  E = 1.414  (Blue)
  F = 2.000  (Red)
  B = 2.236  (Red)
  C = 3.606  (Blue)
  D = 5.385  (Blue)

k = 3 nearest = { A(Red), E(Blue), F(Red) }
  Red  = 2 votes
  Blue = 1 vote

DECISION: P is classified as RED (majority of 3 nearest).
\`\`\``,
    explanation: `## Method
kNN computes the distance from the query to every point, sorts ascending, takes the **k closest**, and assigns the **majority class**. With k=3 the neighbours are A, E, F -> Red wins 2 to 1, so P = **Red**. Note: features should be **scaled** first so one axis does not dominate the distance, and an **odd k** avoids ties in two-class problems.`,
  },
  {
    id: "pp-decision-tree-entropy-gain",
    moduleId: "m4",
    topicId: "knn-decision-tree",
    co: "CO4",
    marks: "9 marks",
    frequency: "Previous-year question",
    title: "Decision Tree - Entropy & Information Gain",
    statement: `A dataset of 14 records has target **Play = {9 Yes, 5 No}**. The attribute **Outlook** splits it as:

| Outlook | Yes | No | Total |
|---------|-----|----|-------|
| Sunny | 2 | 3 | 5 |
| Overcast | 4 | 0 | 4 |
| Rain | 3 | 2 | 5 |

Compute the **entropy** of the dataset and the **Information Gain** of splitting on Outlook.
(Use \`Entropy = -sum p*log2(p)\`.)`,
    code: `\`\`\`text
STEP 1: ENTROPY of full dataset S  (9 Yes, 5 No, N=14)
  p(Yes) = 9/14 = 0.643 ,  p(No) = 5/14 = 0.357
  Entropy(S) = -0.643*log2(0.643) - 0.357*log2(0.357)
             = -0.643*(-0.637) - 0.357*(-1.486)
             =  0.410 + 0.530
             =  0.940

STEP 2: ENTROPY of each branch

Sunny (2 Yes, 3 No), n=5:
  p(Yes)=2/5=0.4 , p(No)=3/5=0.6
  E(Sunny) = -0.4*log2(0.4) - 0.6*log2(0.6)
           = -0.4*(-1.322) - 0.6*(-0.737)
           = 0.529 + 0.442 = 0.971

Overcast (4 Yes, 0 No), n=4:
  pure node -> E(Overcast) = 0

Rain (3 Yes, 2 No), n=5:
  p(Yes)=3/5=0.6 , p(No)=2/5=0.4
  E(Rain) = 0.971   (same as Sunny by symmetry)

STEP 3: WEIGHTED entropy after split on Outlook
  = (5/14)*0.971 + (4/14)*0 + (5/14)*0.971
  = 0.347 + 0 + 0.347
  = 0.694

STEP 4: INFORMATION GAIN
  Gain(Outlook) = Entropy(S) - Weighted entropy
                = 0.940 - 0.694
                = 0.246

ANSWER:
  Entropy(S) = 0.940
  Gain(Outlook) = 0.246
\`\`\``,
    explanation: `## Method
A decision tree (ID3) chooses the attribute with the **highest information gain**. **Entropy** measures impurity (0 = pure, 1 = maximally mixed for two classes). We compute the dataset entropy (0.940), the weighted entropy after splitting on Outlook (0.694), and their difference is the **gain (0.246)**. The pure **Overcast** branch (entropy 0) is what reduces impurity most. The attribute with the largest gain becomes the root split.`,
  },
  {
    id: "pp-linear-regression-least-squares",
    moduleId: "m4",
    topicId: "linear-regression",
    co: "CO4",
    marks: "9 marks",
    frequency: "Previous-year question",
    title: "Simple Linear Regression (Least Squares)",
    statement: `Fit a simple linear regression line \`y = a + b*x\` by **least squares** for the data below, then **predict y when x = 6**.

| x | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| y | 2 | 4 | 5 | 4 | 5 |`,
    code: `\`\`\`text
n = 5
x: 1,2,3,4,5     y: 2,4,5,4,5

STEP 1: sums
  sum_x  = 1+2+3+4+5 = 15
  sum_y  = 2+4+5+4+5 = 20
  mean_x = 15/5 = 3
  mean_y = 20/5 = 4

STEP 2: sum_xy and sum_x2
  x*y: 1*2=2, 2*4=8, 3*5=15, 4*4=16, 5*5=25
  sum_xy = 2+8+15+16+25 = 66
  x^2 : 1,4,9,16,25
  sum_x2 = 1+4+9+16+25 = 55

STEP 3: slope b
  b = (n*sum_xy - sum_x*sum_y) / (n*sum_x2 - (sum_x)^2)
    = (5*66 - 15*20) / (5*55 - 15^2)
    = (330 - 300) / (275 - 225)
    = 30 / 50
    = 0.6

STEP 4: intercept a
  a = mean_y - b*mean_x
    = 4 - 0.6*3
    = 4 - 1.8
    = 2.2

REGRESSION LINE:  y = 2.2 + 0.6*x

STEP 5: predict y at x = 6
  y = 2.2 + 0.6*6 = 2.2 + 3.6 = 5.8

ANSWER: line y = 2.2 + 0.6x ;  predicted y(6) = 5.8
\`\`\``,
    explanation: `## Method
Least squares finds the line minimising the sum of squared errors. The slope \`b\` uses \`(n*Sxy - Sx*Sy)/(n*Sx2 - Sx^2)\` and the intercept is \`a = mean_y - b*mean_x\`. Here the fitted line is \`y = 2.2 + 0.6x\`, giving a prediction of **5.8** at x = 6. The positive slope (0.6) shows y rises with x.`,
  },
  {
    id: "pp-confusion-matrix-metrics",
    moduleId: "m2",
    topicId: "model-evaluation-improvement",
    co: "CO4",
    marks: "6 marks",
    frequency: "Previous-year question",
    title: "Confusion Matrix -> Accuracy / Precision / Recall / F1",
    statement: `A classifier on 100 test samples produced the confusion matrix below. Compute **accuracy, precision, recall, specificity, and F1-score**.

|  | Predicted Positive | Predicted Negative |
|--|--------------------|--------------------|
| **Actual Positive** | TP = 40 | FN = 10 |
| **Actual Negative** | FP = 5 | TN = 45 |`,
    code: `\`\`\`text
GIVEN:
  TP = 40 , FN = 10 , FP = 5 , TN = 45
  Total = 40+10+5+45 = 100

ACCURACY = (TP + TN) / Total
         = (40 + 45) / 100
         = 85 / 100
         = 0.85   (85%)

PRECISION = TP / (TP + FP)
          = 40 / (40 + 5)
          = 40 / 45
          = 0.889  (88.9%)

RECALL (Sensitivity) = TP / (TP + FN)
       = 40 / (40 + 10)
       = 40 / 50
       = 0.80   (80%)

SPECIFICITY = TN / (TN + FP)
            = 45 / (45 + 5)
            = 45 / 50
            = 0.90   (90%)

F1-SCORE = 2 * P * R / (P + R)
         = 2 * 0.889 * 0.80 / (0.889 + 0.80)
         = 1.4224 / 1.689
         = 0.842   (84.2%)

SUMMARY:
  Accuracy    = 0.85
  Precision   = 0.889
  Recall      = 0.80
  Specificity = 0.90
  F1-score    = 0.842
\`\`\``,
    explanation: `## Method
All metrics come from the four cells of the confusion matrix. **Accuracy** is overall correctness, **precision** asks "of predicted positives, how many were right", **recall** asks "of actual positives, how many we caught", **specificity** is recall for the negative class, and **F1** balances precision and recall via their harmonic mean. Here recall (0.80) is the weakest - the model misses some real positives (10 FN), which matters in cases like disease detection.`,
  },
  {
    id: "pp-apriori-frequent-itemsets",
    moduleId: "m5",
    topicId: "association-apriori",
    co: "CO5",
    marks: "9 marks",
    frequency: "Previous-year question",
    title: "Apriori - Frequent Itemsets & Rules",
    statement: `Apply **Apriori** to the 5 transactions below with **minimum support = 2** (count). Find the frequent itemsets, then compute **support and confidence** for the rule **{Milk, Bread} -> {Butter}**.

| TID | Items |
|-----|-------|
| T1 | Milk, Bread, Butter |
| T2 | Milk, Bread |
| T3 | Milk, Butter |
| T4 | Bread, Butter |
| T5 | Milk, Bread, Butter |`,
    code: `\`\`\`text
N = 5 transactions , min support count = 2

STEP 1: C1 -> L1 (single items)
  Milk   in T1,T2,T3,T5     = 4  >= 2  keep
  Bread  in T1,T2,T4,T5     = 4  >= 2  keep
  Butter in T1,T3,T4,T5     = 4  >= 2  keep
  L1 = {Milk, Bread, Butter}

STEP 2: C2 -> L2 (pairs)
  {Milk,Bread}   in T1,T2,T5     = 3  >= 2  keep
  {Milk,Butter}  in T1,T3,T5     = 3  >= 2  keep
  {Bread,Butter} in T1,T4,T5     = 3  >= 2  keep
  L2 = all three pairs

STEP 3: C3 -> L3 (triples)
  {Milk,Bread,Butter} in T1,T5   = 2  >= 2  keep
  L3 = {Milk, Bread, Butter}

FREQUENT ITEMSETS:
  L1: Milk(4), Bread(4), Butter(4)
  L2: {M,B}(3), {M,Bu}(3), {B,Bu}(3)
  L3: {M,B,Bu}(2)

STEP 4: RULE {Milk,Bread} -> {Butter}
  support(Milk,Bread,Butter) = 2/5 = 0.4
  support(Milk,Bread)        = 3/5 = 0.6

  confidence = support(M,B,Bu) / support(M,B)
             = (2/5) / (3/5)
             = 2/3
             = 0.667

ANSWER:
  Rule support    = 0.4
  Rule confidence = 0.667 (66.7%)
\`\`\``,
    explanation: `## Method
Apriori builds frequent itemsets level by level, pruning any set below **min support** (the Apriori property: subsets of frequent sets must be frequent). After finding \`{Milk,Bread,Butter}\` is frequent (count 2), the rule \`{Milk,Bread} -> {Butter}\` has **support 0.4** and **confidence 0.667** - so 67% of customers who buy milk and bread also buy butter, a usable cross-selling rule.`,
  },
  {
    id: "pp-association-rule-lift",
    moduleId: "m5",
    topicId: "association-apriori",
    co: "CO5",
    marks: "6 marks",
    frequency: "Previous-year question",
    title: "Association Rule - Confidence & Lift",
    statement: `From 1000 transactions: **Diapers** appear in 200, **Beer** in 250, and **{Diapers, Beer}** together in 120. For the rule **Diapers -> Beer**, compute **support, confidence, and lift**, and interpret the lift.`,
    code: `\`\`\`text
N = 1000
count(Diapers)        = 200
count(Beer)           = 250
count(Diapers, Beer)  = 120

STEP 1: supports
  support(Diapers)      = 200/1000 = 0.20
  support(Beer)         = 250/1000 = 0.25
  support(Diapers,Beer) = 120/1000 = 0.12

STEP 2: confidence(Diapers -> Beer)
  = support(Diapers,Beer) / support(Diapers)
  = 0.12 / 0.20
  = 0.60   (60%)

STEP 3: lift(Diapers -> Beer)
  = confidence / support(Beer)
  = 0.60 / 0.25
  = 2.4

ANSWER:
  support    = 0.12
  confidence = 0.60
  lift       = 2.4   ( > 1 => positive association)
\`\`\``,
    explanation: `## Method & interpretation
**Support (0.12)** is how often the pair occurs; **confidence (0.60)** means 60% of diaper buyers also buy beer; **lift (2.4)** compares this with random chance. Because **lift > 1**, diapers and beer are **positively associated** - buying diapers makes beer 2.4x more likely than baseline. Lift corrects confidence for popular items, so it is the better measure of a rule's real strength.`,
  },
  {
    id: "pp-kmeans-one-iteration",
    moduleId: "m5",
    topicId: "unsupervised-clustering",
    co: "CO5",
    marks: "6 marks",
    frequency: "Previous-year question",
    title: "k-means - One Iteration (k=2)",
    statement: `Run **one iteration of k-means** (k=2) on the 1-D points **{2, 4, 10, 12, 3, 20, 30, 11, 25}** with initial centroids **C1 = 2** and **C2 = 10**. Assign points and recompute the centroids.`,
    code: `\`\`\`text
Points = {2, 4, 10, 12, 3, 20, 30, 11, 25}
Initial: C1 = 2 , C2 = 10

STEP 1: ASSIGN each point to nearest centroid
  (distance = |point - centroid|)

  Point 2 : |2-2|=0  , |2-10|=8   -> C1
  Point 4 : |4-2|=2  , |4-10|=6   -> C1
  Point 10: |10-2|=8 , |10-10|=0  -> C2
  Point 12: |12-2|=10, |12-10|=2  -> C2
  Point 3 : |3-2|=1  , |3-10|=7   -> C1
  Point 20: |20-2|=18, |20-10|=10 -> C2
  Point 30: |30-2|=28, |30-10|=20 -> C2
  Point 11: |11-2|=9 , |11-10|=1  -> C2
  Point 25: |25-2|=23, |25-10|=15 -> C2

  Cluster 1 (C1): {2, 4, 3}
  Cluster 2 (C2): {10, 12, 20, 30, 11, 25}

STEP 2: RECOMPUTE centroids (mean of each cluster)
  New C1 = (2+4+3)/3 = 9/3 = 3.0
  New C2 = (10+12+20+30+11+25)/6 = 108/6 = 18.0

RESULT after iteration 1:
  C1 = 3.0  with {2,3,4}
  C2 = 18.0 with {10,11,12,20,25,30}
\`\`\``,
    explanation: `## Method
k-means alternates two steps: **assign** each point to its nearest centroid, then **update** centroids to the mean of their assigned points. After one iteration the centroids moved from (2, 10) to **(3.0, 18.0)**. Repeating these steps until centroids stop changing gives the final clusters - here a "low" group near 3 and a "high" group near 18.`,
  },
  {
    id: "pp-supermarket-segmentation",
    moduleId: "m5",
    topicId: "unsupervised-clustering",
    co: "CO5",
    marks: "6 marks",
    frequency: "Previous-year question",
    title: "Supermarket Customer Segmentation (k-means)",
    statement: `A supermarket has the customers below (Age, Annual Income in k, Spending score 1-100). **Normalize the features (min-max), then run one k-means iteration (k=2)** with the first two customers (C1, C2) as initial centroids to form two segments.

| Cust | Age | Income(k) | Spending |
|------|-----|-----------|----------|
| C1 | 25 | 40 | 80 |
| C2 | 50 | 80 | 20 |
| C3 | 30 | 45 | 75 |
| C4 | 48 | 78 | 25 |
| C5 | 28 | 42 | 85 |`,
    code: `\`\`\`text
STEP 1: MIN-MAX NORMALIZE each feature to [0,1]
  x' = (x - min) / (max - min)

Age:      min=25, max=50, range=25
  C1=(25-25)/25=0.00  C2=(50-25)/25=1.00  C3=(30-25)/25=0.20
  C4=(48-25)/25=0.92  C5=(28-25)/25=0.12
Income:   min=40, max=80, range=40
  C1=(40-40)/40=0.00  C2=(80-40)/40=1.00  C3=(45-40)/40=0.125
  C4=(78-40)/40=0.95  C5=(42-40)/40=0.05
Spending: min=20, max=85, range=65
  C1=(80-20)/65=0.923 C2=(20-20)/65=0.00  C3=(75-20)/65=0.846
  C4=(25-20)/65=0.077 C5=(85-20)/65=1.00

Normalized points (Age,Income,Spend):
  C1=(0.00,0.00,0.923)   C2=(1.00,1.00,0.00)
  C3=(0.20,0.125,0.846)  C4=(0.92,0.95,0.077)  C5=(0.12,0.05,1.00)

STEP 2: INITIAL CENTROIDS
  K1 = C1 = (0.00,0.00,0.923)
  K2 = C2 = (1.00,1.00,0.00)

STEP 3: ASSIGN by squared Euclidean distance (no need for sqrt)

C3=(0.20,0.125,0.846):
  to K1: 0.20^2+0.125^2+(0.846-0.923)^2 = 0.04+0.0156+0.0059 = 0.062
  to K2: 0.80^2+0.875^2+0.846^2         = 0.64+0.766+0.716   = 2.122
  -> K1

C4=(0.92,0.95,0.077):
  to K1: 0.92^2+0.95^2+(0.077-0.923)^2  = 0.846+0.9025+0.716 = 2.465
  to K2: 0.08^2+0.05^2+0.077^2          = 0.0064+0.0025+0.0059= 0.015
  -> K2

C5=(0.12,0.05,1.00):
  to K1: 0.12^2+0.05^2+(1.00-0.923)^2   = 0.0144+0.0025+0.0059= 0.023
  to K2: 0.88^2+0.95^2+1.00^2           = 0.774+0.9025+1.00  = 2.677
  -> K1

ASSIGNMENT:
  Cluster 1 (K1): {C1, C3, C5}  -> young, low income, HIGH spenders
  Cluster 2 (K2): {C2, C4}      -> older, high income, LOW spenders

STEP 4: RECOMPUTE centroids (mean of normalized values)
  K1 = mean(C1,C3,C5)
     = ((0+0.20+0.12)/3, (0+0.125+0.05)/3, (0.923+0.846+1.00)/3)
     = (0.107, 0.058, 0.923)
  K2 = mean(C2,C4)
     = ((1.00+0.92)/2, (1.00+0.95)/2, (0.00+0.077)/2)
     = (0.96, 0.975, 0.039)

SEGMENTS FOUND:
  Segment A: young, modest income, high spenders (target with offers)
  Segment B: older, high income, low spenders (target to increase spend)
\`\`\``,
    explanation: `## Method & takeaway
Features (Age, Income, Spending) are on very different scales, so we **min-max normalize** first - otherwise Income (up to 80) would dominate the distance over Spending. Using the first two customers as seeds, one k-means iteration cleanly separates **high-spending young customers** from **high-income low-spending older customers**. The recomputed centroids summarise each segment, which the supermarket uses for **targeted marketing**.`,
  },
  {
    id: "pp-minmax-zscore",
    moduleId: "m1",
    topicId: "ml-data-preprocessing",
    co: "CO2",
    marks: "5 marks",
    frequency: "Previous-year question",
    title: "Min-Max Normalization & Z-score Standardization",
    statement: `For the feature values **{20, 40, 60, 80, 100}**, compute the **min-max normalized** values (range [0,1]) and the **z-score standardized** values.`,
    code: `\`\`\`text
Data = {20, 40, 60, 80, 100}

PART A: MIN-MAX NORMALIZATION
  x' = (x - min) / (max - min)
  min = 20 , max = 100 , range = 80

  20 -> (20-20)/80  = 0.00
  40 -> (40-20)/80  = 20/80  = 0.25
  60 -> (60-20)/80  = 40/80  = 0.50
  80 -> (80-20)/80  = 60/80  = 0.75
 100 -> (100-20)/80 = 80/80  = 1.00

  Result: {0.00, 0.25, 0.50, 0.75, 1.00}

PART B: Z-SCORE STANDARDIZATION
  x' = (x - mean) / std

  mean = (20+40+60+80+100)/5 = 300/5 = 60

  variance = mean of (x-mean)^2
    (20-60)^2 = 1600
    (40-60)^2 = 400
    (60-60)^2 = 0
    (80-60)^2 = 400
    (100-60)^2= 1600
    sum = 4000 ; variance = 4000/5 = 800
  std = sqrt(800) = 28.28

  z-scores:
    20 -> (20-60)/28.28  = -1.414
    40 -> (40-60)/28.28  = -0.707
    60 -> (60-60)/28.28  =  0.000
    80 -> (80-60)/28.28  = +0.707
   100 -> (100-60)/28.28 = +1.414

  Result: {-1.414, -0.707, 0.000, +0.707, +1.414}
\`\`\``,
    explanation: `## Method
**Min-max** rescales data to a fixed **[0,1]** range using \`(x-min)/(max-min)\` - good when bounds are known. **Z-score** rescales to **mean 0, std 1** using \`(x-mean)/std\` - better when data is roughly Normal and robust to outliers. Both put features on a comparable scale so distance-based and gradient-based models are not biased by large-range features. Fit these on **training data only** to avoid data leakage.`,
  },
];

export function getPredictedQuestionsForTopic(topicId: string) {
  return predictedQuestions.filter((q) => q.topicId === topicId);
}

export function getPredictedProgramsForTopic(topicId: string) {
  return predictedPrograms.filter((p) => p.topicId === topicId);
}

export function getPredictedQuestionsForModule(moduleId: string) {
  return predictedQuestions.filter((q) => q.moduleId === moduleId);
}

export function getPredictedProgramsForModule(moduleId: string) {
  return predictedPrograms.filter((p) => p.moduleId === moduleId);
}
