// Topic content data - Advanced Probability and Statistics (25MCAAIE2041)
// JAIN University, MCA-AIML, 2nd Semester. Built from the teacher's "IMP Points"
// notes, the IA1/IA2 papers, and the GCR question bank.
//
// `content`       = short "Quick Summary" shown under the topic header.
// `detailedNotes` = markdown method/formula notes (math in ```text fences so it
//                   renders as plain monospace, not code-highlighted).
// Worked step-by-step numericals live in ./predicted.ts.

export type TopicContent = {
  topicId: string;
  moduleId: string;
  title: string;
  examWeight: string;
  keywords: string[];
  content: string;
  detailedNotes: string;
};

/* ===================================================== Module 1: Probability == */

const m1: Record<string, TopicContent> = {
  "aps-sample-space-events": {
    topicId: "aps-sample-space-events",
    moduleId: "m1",
    title: "Sample Space, Events & Probability Axioms",
    examWeight: "5 marks",
    keywords: ["sample space", "events", "axioms", "experiment", "outcomes"],
    content:
      "A random experiment is one whose outcome cannot be predicted with certainty. The sample space S is the set of all possible outcomes; an event E is any subset of S. Classical probability: P(E) = (favourable outcomes) / (total outcomes), and it always lies between 0 and 1.",
    detailedNotes: `## Key definitions

- **Experiment** — any process that produces an observation (tossing a coin).
- **Random experiment** — all possible outcomes are known but the actual outcome is uncertain in advance.
- **Outcome / sample point** — a single result of the experiment.
- **Sample space (S)** — the set of *all* outcomes. The number of sample points is written n(S).
- **Event (E)** — any subset of S. It "occurs" if the actual outcome belongs to E.

## Rolling two six-sided dice (the standard exam example)

\`\`\`text
S = { (1,1), (1,2), ... , (6,6) }      n(S) = 6 x 6 = 36
Each ordered pair (first die, second die) is one sample point.
Event "sum = 7" = {(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)}  ->  n = 6
P(sum = 7) = 6 / 36 = 1/6
\`\`\`

## Types of events

- **Simple** (one sample point) vs **compound** (more than one).
- **Sure event** = S (P = 1); **impossible event** = empty set (P = 0).
- **Mutually exclusive** — cannot occur together (A ∩ B = empty).
- **Exhaustive** — together they cover S.

## The three axioms (Kolmogorov)

\`\`\`text
1.  P(E) >= 0           for every event E
2.  P(S) = 1            something must happen
3.  If A, B mutually exclusive:  P(A ∪ B) = P(A) + P(B)
\`\`\`

**Exam tip:** when asked to "explain with two dice", always *write the sample space size (36)* and give one event with its probability.`,
  },

  "aps-probability-theorems": {
    topicId: "aps-probability-theorems",
    moduleId: "m1",
    title: "Probability Theorems & Counting",
    examWeight: "5–9 marks",
    keywords: ["addition rule", "complement", "total probability", "permutations", "combinations"],
    content:
      "The addition theorem gives P(A ∪ B) = P(A) + P(B) − P(A ∩ B). For mutually exclusive events the last term is 0. The complement rule gives P(A') = 1 − P(A). Counting uses permutations (order matters) and combinations (order does not).",
    detailedNotes: `## Addition theorem

\`\`\`text
Two events:   P(A ∪ B) = P(A) + P(B) − P(A ∩ B)
Mutually excl.:  P(A ∪ B) = P(A) + P(B)            (A ∩ B = empty)
Three events: P(A ∪ B ∪ C) = P(A)+P(B)+P(C)
                              − P(A∩B) − P(B∩C) − P(A∩C)
                              + P(A∩B∩C)
\`\`\`

## Complement rule

\`\`\`text
P(A') = 1 − P(A)        useful for "at least one" problems
\`\`\`

## Worked pattern (IA1): dice, E ∪ F

For two dice, E = "sum is even", F = "a 5 shows on at least one die".
Write the sample space (36 points), count n(E), n(F), n(E ∩ F), then

\`\`\`text
P(E ∪ F) = n(E)/36 + n(F)/36 − n(E∩F)/36
\`\`\`

## Counting

\`\`\`text
Permutations (order matters):   nPr = n! / (n−r)!
Combinations (order ignored):   nCr = n! / [ r!(n−r)! ]
\`\`\`

## Total probability theorem

If B1, B2, …, Bn are mutually exclusive and exhaustive, then for any event A

\`\`\`text
P(A) = P(A|B1)P(B1) + P(A|B2)P(B2) + … + P(A|Bn)P(Bn)
\`\`\`

This is the denominator used in Bayes' theorem.`,
  },

  "aps-conditional-probability": {
    topicId: "aps-conditional-probability",
    moduleId: "m1",
    title: "Conditional Probability & Independence",
    examWeight: "5–9 marks",
    keywords: ["conditional", "independence", "multiplication rule", "P(A|B)"],
    content:
      "Conditional probability P(A|B) = P(A ∩ B) / P(B) is the probability of A given that B has happened. Two events are independent when P(A ∩ B) = P(A) · P(B); equivalently P(A|B) = P(A).",
    detailedNotes: `## Conditional probability

\`\`\`text
P(A | B) = P(A ∩ B) / P(B),     provided P(B) > 0
\`\`\`

## Multiplication rule (rearranged)

\`\`\`text
P(A ∩ B) = P(A) · P(B | A) = P(B) · P(A | B)
\`\`\`

## Independence — the test

Events A and B are **independent** iff

\`\`\`text
P(A ∩ B) = P(A) · P(B)
\`\`\`

Equivalently P(A|B) = P(A) and P(B|A) = P(B).

## Worked pattern (IA1): given P(E), P(F), P(E ∩ F)

The exam gives three numbers and asks you to "illustrate independence" and find
P(E|F), P(F|E), P(E ∪ F), P((E ∪ F)'). Method:

\`\`\`text
1. Independence check:  is P(E ∩ F) = P(E)·P(F)?
2. P(E|F) = P(E ∩ F)/P(F)        P(F|E) = P(E ∩ F)/P(E)
3. P(E ∪ F) = P(E) + P(F) − P(E ∩ F)
4. P((E ∪ F)') = 1 − P(E ∪ F)        (complement)
\`\`\`

**Trap:** P(E)·P(F) decides independence; do not assume the events are independent just because the numbers look round.`,
  },

  "aps-bayes-theorem": {
    topicId: "aps-bayes-theorem",
    moduleId: "m1",
    title: "Bayes' Theorem",
    examWeight: "9 marks (high priority)",
    keywords: ["bayes", "prior", "posterior", "likelihood", "total probability"],
    content:
      "Bayes' theorem reverses a conditional probability: it updates a prior P(Bi) into a posterior P(Bi|A) after observing evidence A. The denominator is the total probability of A.",
    detailedNotes: `## Statement

\`\`\`text
            P(A | Bi) · P(Bi)
P(Bi | A) = ----------------------------------------
            Σ  P(A | Bj) · P(Bj)      (over all j)
\`\`\`

- **Prior** P(Bi) — what you believe before the evidence.
- **Likelihood** P(A|Bi) — chance of the evidence under cause Bi.
- **Posterior** P(Bi|A) — updated belief after seeing A.

## Method (works for every Bayes problem)

\`\`\`text
1. Name the partition B1, B2, … (disease/no disease, the 3 applicants, …).
2. Write each prior P(Bi) and each likelihood P(A|Bi) from the wording.
3. Total probability:  P(A) = Σ P(A|Bj) P(Bj)   <- the denominator.
4. Posterior:  P(Bi|A) = P(A|Bi)P(Bi) / P(A).
\`\`\`

## The four medical questions (T+, F+, F−, T−)

For a test with sensitivity P(+|D) and specificity P(−|D'):

\`\`\`text
T+  = P(D  | +)     "+ and actually has disease"
F+  = P(D' | +) = 1 − T+
F−  = P(D  | −)
T−  = P(D' | −) = 1 − F−
\`\`\`

**Exam tip:** lay the numbers out as prior × likelihood for each branch, add them
to get P(evidence), then divide. The famously *small* answer (a positive test can
still mean a low chance of disease) is the whole point of the question.`,
  },
};

/* ================================================ Module 2: Random Variables == */

const m2: Record<string, TopicContent> = {
  "aps-random-variables": {
    topicId: "aps-random-variables",
    moduleId: "m2",
    title: "Discrete vs Continuous Random Variables",
    examWeight: "5 marks",
    keywords: ["discrete", "continuous", "PMF", "PDF", "random variable"],
    content:
      "A random variable X assigns a number to each outcome. Discrete X takes countable values and is described by a PMF P(x) with Σ P(x) = 1. Continuous X takes values over an interval and is described by a PDF f(x) with ∫ f(x) dx = 1.",
    detailedNotes: `## Discrete vs continuous

| | Discrete | Continuous |
|---|---|---|
| Values | countable (0,1,2,…) | an interval of real numbers |
| Described by | PMF P(x) | PDF f(x) |
| Total = 1 | Σ P(x) = 1 | ∫ f(x) dx = 1 |
| Probability | P(X = x) directly | area: ∫ over a range |

## The single most important fact

\`\`\`text
Discrete:    Σ P(x) = 1            (sum of all probabilities)
Continuous:  ∫ f(x) dx = 1         (integral over the whole range)
\`\`\`

Almost every Module-2 question starts by using this to **find an unknown
constant** in P(x) or f(x).

## Probability over a range

\`\`\`text
Discrete:    P(X ≤ a) = P(x0) + … + P(a)
             P(X ≥ b) = P(b) + … + P(last)
Continuous:  P(X ≤ a) = ∫ from (start) to a  f(x) dx
             P(X ≥ b) = ∫ from b to (end)    f(x) dx
\`\`\`

For a continuous variable P(X = a) = 0, so < and ≤ give the same answer.`,
  },

  "aps-pmf-cdf-pdf": {
    topicId: "aps-pmf-cdf-pdf",
    moduleId: "m2",
    title: "PMF, PDF & CDF — Finding the Constant",
    examWeight: "9 marks",
    keywords: ["PMF", "PDF", "CDF", "find the constant", "conditional"],
    content:
      "The standard 9-mark question gives a PMF or PDF containing an unknown constant. You find the constant from Σ P(x) = 1 (discrete) or ∫ f(x) dx = 1 (continuous), then use it to compute a probability — often a conditional one.",
    detailedNotes: `## Discrete: find the constant

\`\`\`text
Given P(x) in terms of k, set  Σ P(x) = 1,  solve for k.
Then any probability is a sum of the relevant P(x) values.
\`\`\`

## Continuous: find the constant

\`\`\`text
Set  ∫ f(x) dx = 1  over the stated range, solve for the constant.
∫ x^n dx = x^(n+1)/(n+1),  evaluated between the limits.
\`\`\`

## Conditional probability for a continuous RV (the exam favourite)

\`\`\`text
P(X > a | X < b) = P(a < X < b) / P(X < b)

 numerator   = ∫ from a to b  f(x) dx
 denominator = ∫ from (start) to b  f(x) dx
\`\`\`

Worked check (from the shared PDF): f(x) = 5x⁴ on (−1, 0) gives
P(x > −1/2 | x < −1/4) = (31/1024) / (1023/1024) = **31/1023**.

## CDF (cumulative distribution function)

\`\`\`text
F(x) = P(X ≤ x)
Discrete:    add up P(x) up to x (a step function).
Continuous:  F(x) = ∫ from start to x  f(t) dt.
Always: F(−∞)=0, F(+∞)=1, and F is non-decreasing.
\`\`\`

**Method reminder:** *constant first, probability second.* You cannot compute any
probability until the PMF/PDF is fully known.`,
  },

  "aps-expectation-variance": {
    topicId: "aps-expectation-variance",
    moduleId: "m2",
    title: "Expectation, Variance, Mean / Median / Mode",
    examWeight: "9 marks",
    keywords: ["expectation", "E(X)", "variance", "standard deviation", "median", "mode"],
    content:
      "Expectation E(X) is the long-run average. Variance Var(X) = E(X²) − [E(X)]² measures spread, and SD = √Var. For a distribution you may also be asked for the median (middle value) and mode (most likely value).",
    detailedNotes: `## Expectation (mean μ)

\`\`\`text
Discrete:    E(X) = Σ x · P(x)
Continuous:  E(X) = ∫ x · f(x) dx        (over the range)
General:     E(g(X)) = Σ g(x)P(x)  or  ∫ g(x) f(x) dx
\`\`\`

## Variance and standard deviation

\`\`\`text
E(X²) = Σ x² P(x)        or   ∫ x² f(x) dx
Var(X) = σ² = E(X²) − [E(X)]²
SD(X)  = σ  = √Var(X)
\`\`\`

**Always** use Var = E(X²) − [E(X)]², never [E(X)]² − E(X²).

## Mean / Median / Mode (discrete PMF)

\`\`\`text
Mean   = E(X) = Σ x P(x)
Mode   = the value of x with the largest P(x)
Median = smallest x where the cumulative probability F(x) ≥ 0.5
\`\`\`

## Worked check (teacher's notes)

P(X) = m, 2m, …, 16m for X = 1…9. From Σ P = 1: 73m = 1 → m = 1/73.
Then P(X ≤ 4) = m + 2m + 4m + 6m = 13m = **13/73**.

**Exam tip:** build a small table (x, P(x), x·P(x), x²·P(x)) and sum the columns —
it keeps E(X) and E(X²) tidy and earns method marks.`,
  },
};

/* ============================================ Module 3: Statistical Distributions == */

const m3: Record<string, TopicContent> = {
  "aps-uniform-bernoulli-binomial": {
    topicId: "aps-uniform-bernoulli-binomial",
    moduleId: "m3",
    title: "Uniform, Bernoulli & Binomial",
    examWeight: "5–9 marks",
    keywords: ["uniform", "binomial", "nCr", "at most", "at least"],
    content:
      "Uniform (continuous) spreads probability evenly on (a, b). Bernoulli is a single success/failure trial. Binomial counts the number of successes in n independent trials with success probability p.",
    detailedNotes: `## Continuous Uniform on (a, b)

\`\`\`text
f(x) = 1/(b − a),   a < x < b
E(X) = (a + b)/2          Var(X) = (b − a)² / 12
P(X < c) = (c − a)/(b − a)
\`\`\`

A common exam twist gives the mean and variance and asks you to recover a and b:
solve (a+b)/2 = mean and (b−a)²/12 = variance simultaneously.

## Bernoulli (one trial)

\`\`\`text
P(success) = p,  P(failure) = q = 1 − p
E(X) = p          Var(X) = p·q
\`\`\`

## Binomial(n, p) — "r successes out of n"

\`\`\`text
P(X = r) = nCr · p^r · q^(n−r),     q = 1 − p,  r = 0,1,…,n
E(X) = n·p        Var(X) = n·p·q        SD = √(npq)

At most r :  P(X ≤ r) = P(0) + P(1) + … + P(r)
At least r:  P(X ≥ r) = P(r) + P(r+1) + … + P(n)   [ = 1 − P(X ≤ r−1) ]
\`\`\`

## "Expected number of …" problems

If each item independently has probability P of an event, then out of **N** items
the expected number showing it is **N × P**. (Used for "how many boxes/packets …".)

**Use Binomial when:** a fixed number of independent trials n, each with the same
success probability p, and you count successes.`,
  },

  "aps-geometric-negbinomial-poisson": {
    topicId: "aps-geometric-negbinomial-poisson",
    moduleId: "m3",
    title: "Geometric, Negative Binomial & Poisson",
    examWeight: "5–9 marks",
    keywords: ["geometric", "negative binomial", "poisson", "rare events", "lambda"],
    content:
      "Geometric counts trials up to the first success. Negative binomial counts trials up to the r-th success. Poisson counts rare events in a fixed interval and is the limit of the binomial when n is large and p is small (λ = np).",
    detailedNotes: `## Geometric — first success on the k-th trial

\`\`\`text
P(X = k) = q^(k−1) · p,     q = 1 − p,   k = 1, 2, 3, …
E(X) = 1/p          Var(X) = q / p²
\`\`\`
(Teacher's note: a geometric *exam* question is unlikely, but it is in the practice
bank, so know the formula.)

## Negative Binomial — r-th success on the n-th trial

\`\`\`text
P(X = n) = (n−1)C(r−1) · p^r · q^(n−r),    n = r, r+1, …
\`\`\`
The r-th success is fixed at the last position, so the remaining r−1 successes are
chosen among the first n−1 trials. Mean = r/p, Var = r·q/p².

## Poisson(λ) — count of rare events

\`\`\`text
P(X = x) = e^(−λ) · λ^x / x!,    x = 0, 1, 2, …
λ = mean = n · p          E(X) = Var(X) = λ          e ≈ 2.718
\`\`\`

**Use Poisson when** the question says "n is large and p is small", or gives an
average rate (calls/hour, defects/sample). For "expected number of samples with k
events out of N", multiply: N × P(X = k).`,
  },

  "aps-normal-distribution": {
    topicId: "aps-normal-distribution",
    moduleId: "m3",
    title: "Normal (Gaussian) Distribution",
    examWeight: "5–9 marks (1 question, Z-table given)",
    keywords: ["normal", "gaussian", "z-score", "Z-table", "standardize"],
    content:
      "The Normal distribution N(μ, σ²) is symmetric and bell-shaped. To find any probability, convert the value to a Z-score z = (x − μ)/σ and read the area from the standard normal (Z) table.",
    detailedNotes: `## Standardizing

\`\`\`text
z = (x − μ) / σ
\`\`\`
This turns N(μ, σ²) into the standard Normal N(0, 1).

## Reading the Z-table (full-CDF convention used in class)

The table gives Φ(z) = P(Z ≤ z), the area to the **left**.

\`\`\`text
P(X < x)      = Φ(z)
P(X > x)      = 1 − Φ(z)
P(x1<X<x2)    = Φ(z2) − Φ(z1)
By symmetry:    Φ(−z) = 1 − Φ(z)
\`\`\`

Useful values: Φ(1) = 0.8413, Φ(1.25) = 0.8944, Φ(1.96) = 0.975, Φ(2) = 0.9772.

## Two question types

\`\`\`text
(a) Value -> probability -> count:
    z = (x−μ)/σ ; look up Φ(z) ; multiply probability by N items.

(b) Percentile -> value (reverse):
    find z with Φ(z) = required area (e.g. 15th percentile -> z = −1.04),
    then x = μ + z·σ.
\`\`\`

## Empirical (68–95–99.7) rule

About 68% of values lie within 1σ of μ, 95% within 2σ, 99.7% within 3σ.

**Exam tip:** always draw the bell curve, mark μ and shade the region you want — it
stops sign errors when deciding between Φ(z) and 1 − Φ(z).`,
  },
};

/* =========================================== Module 4: Inferential Statistics I == */

const m4: Record<string, TopicContent> = {
  "aps-population-sample": {
    topicId: "aps-population-sample",
    moduleId: "m4",
    title: "Populations, Samples & Sampling",
    examWeight: "5 marks (concept)",
    keywords: ["population", "sample", "parameter", "statistic", "standard error"],
    content:
      "The population is the whole group of interest; a sample is the subset we measure. A parameter (μ, σ, P) describes the population; a statistic (x̄, s, p̂) describes the sample and estimates the parameter.",
    detailedNotes: `## Vocabulary

| Population | Sample |
|---|---|
| whole group | subset actually measured |
| parameter: μ, σ, P | statistic: x̄, s, p̂ |
| usually unknown | computed from data |

## Sampling distribution & standard error

The sample mean x̄ varies from sample to sample. Its standard deviation is the
**standard error**:

\`\`\`text
SE of mean       = σ / √n
SE of proportion = √( P·Q / n ),   Q = 1 − P
\`\`\`

## Which test? (decides the whole question)

\`\`\`text
n > 30  (large) ............... Z-test   (Module 4)
n < 30  (small), σ unknown .... t-test   (Module 5)
comparing two variances ....... F-test   (Module 5)
comparing 3 or more means ..... ANOVA    (Module 5)
\`\`\`

Reading the sample size first tells you immediately whether you are in Z-test or
t-test territory.`,
  },

  "aps-hypothesis-testing": {
    topicId: "aps-hypothesis-testing",
    moduleId: "m4",
    title: "Hypothesis Testing: H0, H1, Errors, Tails",
    examWeight: "6 marks",
    keywords: ["null hypothesis", "alternative", "type I error", "type II error", "tailed"],
    content:
      "A hypothesis test sets a null H0 (no effect / claim true) against an alternative H1, computes a test statistic, and compares it with a critical value at significance level α. If the statistic is more extreme than the critical value, reject H0.",
    detailedNotes: `## The 5-step procedure (write these steps every time)

\`\`\`text
1. State H0 and H1.
2. Choose α (5% unless told otherwise) and decide 1- or 2-tailed.
3. Compute the test statistic (Z, t, F …).
4. Find the critical value from the table.
5. Decision: |statistic| > critical  ->  reject H0;  else  do not reject.
\`\`\`

## One-tailed vs two-tailed

\`\`\`text
"difference / not equal / changed"  ->  TWO-tailed  (split α in both tails)
"greater / improved / less / decreased" -> ONE-tailed (all of α in one tail)
\`\`\`

## Z critical values (large-sample tests)

| α | One-tailed | Two-tailed |
|---|---|---|
| 10% | 1.282 | ±1.645 |
| 5% | 1.645 | ±1.960 |
| 1% | 2.326 | ±2.576 |

## Errors

\`\`\`text
Type I  error (α): reject H0 when it is actually TRUE   (false positive)
Type II error (β): accept H0 when it is actually FALSE  (false negative)
\`\`\`
Example: convicting an innocent person = Type I; letting a guilty person go = Type II.

**Exam tip:** the phrase in the question ("is there a difference" vs "has it
improved") fixes whether the test is two-tailed or one-tailed — read it carefully.`,
  },

  "aps-z-test": {
    topicId: "aps-z-test",
    moduleId: "m4",
    title: "Z-Test: Means & Proportions",
    examWeight: "6–12 marks",
    keywords: ["z-test", "proportion", "two-sample", "pooled proportion", "critical value"],
    content:
      "Use a Z-test when the sample is large (n > 30) or σ is known. There are four forms: one- and two-sample tests for means, and one- and two-sample tests for proportions. The two-sample proportion test is the most-asked type in IA.",
    detailedNotes: `## Means

\`\`\`text
One-sample:   Z = (x̄ − μ) / (σ/√n)        (use s if σ unknown, n large)

Two-sample:   Z = (x̄1 − x̄2) / √( s1²/n1 + s2²/n2 )
\`\`\`

## Proportions

\`\`\`text
One-sample:   Z = (p̂ − P) / √( P·Q / n ),     Q = 1 − P,  p̂ = x/n

Two-sample (IMP):
   pooled  P̂ = (x1 + x2) / (n1 + n2),    Q̂ = 1 − P̂
   Z = (p̂1 − p̂2) / √( P̂·Q̂·(1/n1 + 1/n2) )
\`\`\`

## Method

\`\`\`text
1. H0: μ1 = μ2  (or P1 = P2);  H1 from the wording (≠, >, <).
2. Compute p̂'s / means; build the standard error in the denominator.
3. Z = (difference) / (standard error).
4. Compare |Z| with the critical value (5% two-tailed = 1.96).
5. |Z| > critical -> reject H0 (significant difference / not improved …).
\`\`\`

**Two-sample proportion checklist:** pool the proportion P̂ from the *combined*
counts, use it in the SE, and remember (1/n1 + 1/n2). "Improved / decreased" is
one-tailed; "differ significantly" is two-tailed.`,
  },
};

/* ========================================== Module 5: Inferential Statistics II == */

const m5: Record<string, TopicContent> = {
  "aps-t-test": {
    topicId: "aps-t-test",
    moduleId: "m5",
    title: "T-Test: One-Sample & Two-Sample",
    examWeight: "6 marks",
    keywords: ["t-test", "degrees of freedom", "pooled SD", "small sample", "t-table"],
    content:
      "Use a t-test when the sample is small (n < 30) and the population SD is unknown. The one-sample t compares a sample mean with a claimed value; the two-sample t compares two means using a pooled standard deviation.",
    detailedNotes: `## One-sample t

\`\`\`text
t = (x̄ − μ) / (s / √n)            df = n − 1
\`\`\`

## Two-sample t (independent, equal variances)

\`\`\`text
t = (x̄1 − x̄2) / [ Sp · √(1/n1 + 1/n2) ]

         ( (n1−1)s1² + (n2−1)s2² )
Sp = √( ----------------------------- )        df = n1 + n2 − 2
         (      n1 + n2 − 2        )
\`\`\`
Note the pooled SD uses a **plus** sign, and pairs (n1−1) with s1².

## Method

\`\`\`text
1. H0: μ = μ0 (one-sample) or μ1 = μ2 (two-sample).
2. Compute t with the right formula; get df.
3. Critical t from the t-table at df, 5% (two-tailed unless stated).
4. |t| > t-critical -> reject H0.
\`\`\`

## Degrees of freedom

\`\`\`text
One-sample: df = n − 1
Two-sample: df = n1 + n2 − 2
\`\`\`

**Exam note:** the T and F tables are *provided* in the exam — you only need to know
which value to look up (df and α), not memorise the table.`,
  },

  "aps-f-test": {
    topicId: "aps-f-test",
    moduleId: "m5",
    title: "F-Test for Equality of Variances",
    examWeight: "6 marks",
    keywords: ["f-test", "variance ratio", "degrees of freedom", "F-table"],
    content:
      "The F-test compares two variances. The statistic is the ratio of the two sample variances, always put with the larger variance on top so F ≥ 1. Compare with the F-table value at the two separate degrees of freedom.",
    detailedNotes: `## Statistic

\`\`\`text
F = s1² / s2²,     with s1² ≥ s2²  (larger variance on top)
\`\`\`

If the data give sample SDs, the unbiased population-variance estimate is
S² = n·s² /(n−1); many exam questions use the s² values directly — follow the
method shown in class. Either way the larger estimate goes on top.

## Degrees of freedom (taken separately)

\`\`\`text
df1 = n1 − 1     (numerator, the larger-variance sample)
df2 = n2 − 1     (denominator)
\`\`\`

## Method

\`\`\`text
1. H0: σ1² = σ2²   vs   H1: σ1² ≠ σ2² (variances differ).
2. F = larger variance / smaller variance.
3. F-critical from the F-table at (df1, df2), 5%.
4. F > F-critical -> reject H0 (variances are unequal).
\`\`\`

**How to spot it:** an F-test question gives sample sizes and standard
deviations/variances but **no means** — because it is about spread, not averages.`,
  },

  "aps-anova": {
    topicId: "aps-anova",
    moduleId: "m5",
    title: "ANOVA: One-Way & Repeated",
    examWeight: "6–12 marks",
    keywords: ["ANOVA", "between groups", "within groups", "F-statistic", "ANOVA table"],
    content:
      "ANOVA (Analysis of Variance) tests whether three or more group means are equal by comparing the variation between groups with the variation within groups. The statistic is F = MS(between) / MS(within).",
    detailedNotes: `## Hypotheses

\`\`\`text
H0: μ1 = μ2 = μ3 = …        (all means equal)
H1: at least one mean differs
\`\`\`

## One-way ANOVA table

\`\`\`text
Source     SS    df      MS = SS/df       F
Between    SSB   k−1     MSB = SSB/(k−1)   F = MSB / MSW
Within     SSW   N−k     MSW = SSW/(N−k)
Total      SST   N−1
\`\`\`
k = number of groups, N = total observations.

\`\`\`text
Grand mean  = (sum of all values) / N
SSB = Σ nj (x̄j − grand mean)²       (between groups)
SSW = Σ Σ (xij − x̄j)²               (within each group)
SST = SSB + SSW                      (check)
\`\`\`

## Decision

\`\`\`text
F-critical from the F-table at (k−1, N−k), 5%.
F > F-critical  ->  reject H0  (the group means are not all equal).
\`\`\`

## Repeated-measures (same subjects, e.g. before/during/after)

Same idea, but the within-subject variation is separated out, which makes the test
more sensitive. State it as one-way unless the data clearly pair the subjects.

**Exam tip:** keep a tidy table of group sums and means first; every SS value comes
from those sums.`,
  },
};

/* ----------------------------------------------------------------- assembly -- */

export const topicContents: Record<string, TopicContent> = {
  ...m1,
  ...m2,
  ...m3,
  ...m4,
  ...m5,
};

export function getTopicContent(topicId: string): string | null {
  return topicContents[topicId]?.content ?? null;
}
export function getDetailedNotes(topicId: string): string | null {
  return topicContents[topicId]?.detailedNotes ?? null;
}
export function getTopicMeta(
  topicId: string
): { title: string; examWeight: string; keywords: string[] } | null {
  const c = topicContents[topicId];
  return c ? { title: c.title, examWeight: c.examWeight, keywords: c.keywords } : null;
}
