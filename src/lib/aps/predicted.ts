// Predicted exam material - Advanced Probability and Statistics (25MCAAIE2041).
// JAIN University, MCA-AIML, 2nd Semester.
//
// Built from: the teacher's "IMP Points" notes, the IA1 (Mar-2026) & IA2 (May-2026)
// papers, and the GCR "ALL IMP Qs" bank (+ the continuous-RV PDFs with answer keys).
//
// Exam format:
//   Sec-A  5-mark questions  — all modules
//   Sec-B  9-mark questions  — modules 1, 2, 3
//   Sec-C  12-mark (6+6)     — modules 4, 5
// CO mapping (confirmed by the IA papers):
//   CO1 = Probability & applications            (Module 1)
//   CO2 = Random variables                      (Module 2)
//   CO3 = Statistical distributions             (Module 3)
//   CO4 = Hypothesis testing (Z-tests)          (Module 4)
//   CO5 = Inferential statistics (t / F / ANOVA)(Module 5)
//
// `predictedPrograms` = worked, step-by-step NUMERICALS (the `code` field holds the
//                       monospace working; programLang for APS is "text").
// `predictedQuestions` = concept / derivation answers (markdown; math in ```text).

export type PredictedQuestion = {
  id: string;
  moduleId: string;
  topicId?: string;
  co?: string;
  marks: string;
  frequency?: string;
  question: string;
  answer: string;
};

export type PredictedProgram = {
  id: string;
  moduleId: string;
  topicId?: string;
  co?: string;
  marks: string;
  frequency?: string;
  title: string;
  statement: string;
  code: string;
  explanation: string;
};

/* ============================================================ MODULE 1 ===== */
/* Probability: sample space, addition theorem, conditional/independence, Bayes */

const m1Programs: PredictedProgram[] = [
  {
    id: "pp-aps-addition-dice",
    moduleId: "m1",
    topicId: "aps-probability-theorems",
    co: "CO1",
    marks: "9 marks",
    frequency: "Asked in IA1",
    title: "Addition theorem — two dice, P(E ∪ F)",
    statement:
      "A pair of dice is rolled. Let E = 'the sum of the numbers is even' and F = 'a 5 appears on at least one die'. Find P(E ∪ F) using the addition theorem.",
    code: `Sample space: two dice  ->  n(S) = 6 x 6 = 36

E = "sum is even"  (both even OR both odd)
   n(E) = 18        P(E) = 18/36

F = "a 5 on at least one die"
   {(5,1),(5,2),(5,3),(5,4),(5,5),(5,6),(1,5),(2,5),(3,5),(4,5),(6,5)}
   n(F) = 11        P(F) = 11/36

E ∩ F = "at least one 5 AND sum even"
   5 is odd, so the other die must also be odd for an even sum
   {(5,1),(5,3),(5,5),(1,5),(3,5)}
   n(E ∩ F) = 5     P(E ∩ F) = 5/36

Addition theorem:
   P(E ∪ F) = P(E) + P(F) − P(E ∩ F)
            = 18/36 + 11/36 − 5/36
            = 24/36
            = 2/3   ≈ 0.667`,
    explanation:
      "Count n(E), n(F) and the overlap n(E ∩ F) from the 36-point sample space, then subtract the overlap once. Key step for E ∩ F: a 5 is odd, so an even sum forces the *other* die to be odd — that leaves only 5 outcomes.",
  },
  {
    id: "pp-aps-conditional-independence",
    moduleId: "m1",
    topicId: "aps-conditional-probability",
    co: "CO1",
    marks: "9 marks",
    frequency: "Asked in IA1",
    title: "Independence check + conditional probabilities",
    statement:
      "For events E and F, P(E) = 0.6, P(F) = 0.3 and P(E ∩ F) = 0.18. Test whether E and F are independent, and find P(E|F), P(F|E), P(E ∪ F) and P((E ∪ F)').",
    code: `Given:  P(E) = 0.6,   P(F) = 0.3,   P(E ∩ F) = 0.18

Independence test:  is  P(E ∩ F) = P(E)·P(F) ?
   P(E)·P(F) = 0.6 × 0.3 = 0.18 = P(E ∩ F)   ->  YES, independent

P(E | F) = P(E ∩ F)/P(F) = 0.18/0.3 = 0.6     (= P(E), confirms indep.)
P(F | E) = P(E ∩ F)/P(E) = 0.18/0.6 = 0.3     (= P(F))

P(E ∪ F)    = P(E) + P(F) − P(E ∩ F) = 0.6 + 0.3 − 0.18 = 0.72
P((E ∪ F)') = 1 − P(E ∪ F) = 1 − 0.72 = 0.28`,
    explanation:
      "**Independence** holds because P(E ∩ F) = P(E)·P(F). Note: the IA1 sheet printed P(E ∩ F) = 0.018; with that value the same steps give P(E|F) = 0.06 and the events are *not* independent. But the wording 'illustrate the independence' expects 0.18 (which makes them independent), so that is almost certainly the intended value.",
  },
  {
    id: "pp-aps-bayes-medical",
    moduleId: "m1",
    topicId: "aps-bayes-theorem",
    co: "CO1",
    marks: "9 marks",
    frequency: "Asked in IA1",
    title: "Bayes' theorem — disease test (T+, F+, F−, T−)",
    statement:
      "A disease affects 1 in 1000 people. The test is positive for 99% of those who have the disease and gives a false positive for 0.2% of those who do not. Find (a) P(disease | positive), (b) P(no disease | positive), (c) P(disease | negative), (d) P(no disease | negative).",
    code: `Let D = disease, D' = no disease, + = positive, − = negative.
   P(D)  = 0.001     P(D')  = 0.999
   P(+|D)  = 0.99    P(−|D)  = 0.01
   P(+|D') = 0.002   P(−|D') = 0.998

Total probability of a positive test:
   P(+) = P(+|D)P(D) + P(+|D')P(D')
        = 0.99(0.001) + 0.002(0.999)
        = 0.00099 + 0.001998 = 0.002988

(a) T+   P(D | +) = 0.00099 / 0.002988 = 0.3313   ≈ 33.1%
(b) F+   P(D'| +) = 1 − 0.3313         = 0.6687   ≈ 66.9%

Total probability of a negative test:
   P(−) = P(−|D)P(D) + P(−|D')P(D')
        = 0.01(0.001) + 0.998(0.999)
        = 0.00001 + 0.997002 = 0.997012

(c) F−   P(D | −) = 0.00001 / 0.997012 = 0.0000100 ≈ 0.001%
(d) T−   P(D'| −) = 1 − 0.0000100      = 0.99999   ≈ 99.999%`,
    explanation:
      "Headline result: even after a **positive** test the chance of actually being ill is only ~33%, because the disease is rare. Build P(+) by total probability, then divide each branch. Parts (b) and (d) are just the complements of (a) and (c).",
  },
  {
    id: "pp-aps-bayes-spam",
    moduleId: "m1",
    topicId: "aps-bayes-theorem",
    co: "CO1",
    marks: "9 marks",
    frequency: "High priority",
    title: "Bayes' theorem — spam filter",
    statement:
      "30% of mails are spam. A filter flags a spam mail as spam with probability 0.989, and flags a non-spam mail as spam with probability 0.02. A mail is flagged as spam — find the probability that it is actually not spam.",
    code: `S = spam, S' = not spam, T = tagged as spam.
   P(S) = 0.3      P(S') = 0.7
   P(T|S) = 0.989  P(T|S') = 0.02

P(T) = P(T|S)P(S) + P(T|S')P(S')
     = 0.989(0.3) + 0.02(0.7)
     = 0.2967 + 0.014 = 0.3107

P(S' | T) = P(T|S')P(S') / P(T)
          = 0.014 / 0.3107
          = 0.0451   ≈ 4.5%`,
    explanation:
      "A flagged mail is only ~4.5% likely to be legitimate, so the filter is trustworthy. Standard two-cause Bayes (spam vs not-spam) with 'tagged as spam' as the evidence.",
  },
  {
    id: "pp-aps-bayes-insurance",
    moduleId: "m1",
    topicId: "aps-bayes-theorem",
    co: "CO1",
    marks: "9 marks",
    frequency: "High priority",
    title: "Bayes' theorem — insurance (which group?)",
    statement:
      "An insurer has 5600 doctors, 6400 teachers and 13000 businessmen. The chance of dying before 60 is 3.5%, 4% and 8% respectively. One insured person dies before 60 — find the probability the person was a doctor.",
    code: `Total = 5600 + 6400 + 13000 = 25000

Priors:    P(Dr) = 5600/25000  = 0.224
           P(Te) = 6400/25000  = 0.256
           P(Bu) = 13000/25000 = 0.520
Likelihoods (death before 60):
           P(X|Dr) = 0.035   P(X|Te) = 0.040   P(X|Bu) = 0.080

P(X) = 0.224(0.035) + 0.256(0.040) + 0.520(0.080)
     = 0.00784 + 0.01024 + 0.04160
     = 0.05968

P(Dr | X) = 0.00784 / 0.05968 = 0.1314   ≈ 13.1%`,
    explanation:
      "Three-cause Bayes. Turn the head-counts into prior probabilities, weight each by its death rate, sum to get P(death), then divide the doctor branch by that total.",
  },
  {
    id: "pp-aps-bayes-flu",
    moduleId: "m1",
    topicId: "aps-bayes-theorem",
    co: "CO1",
    marks: "9 marks",
    frequency: "High priority",
    title: "Bayes' theorem — flu vs measles (rash)",
    statement:
      "75% of sick children have flu and 25% have measles. A rash appears with probability 0.97 for measles and 0.03 for flu. A child develops a rash — find the probability the child has flu.",
    code: `F = flu, M = measles, R = rash.
   P(F) = 0.75    P(M) = 0.25
   P(R|F) = 0.03  P(R|M) = 0.97

P(R) = P(R|F)P(F) + P(R|M)P(M)
     = 0.03(0.75) + 0.97(0.25)
     = 0.0225 + 0.2425 = 0.265

P(F | R) = P(R|F)P(F) / P(R)
         = 0.0225 / 0.265
         = 0.0849   ≈ 8.5%`,
    explanation:
      "Although flu is 3× more common, a rash points strongly to measles, so P(flu | rash) is only ~8.5%. Classic 'base rate vs strong evidence' Bayes problem.",
  },
];

const m1Questions: PredictedQuestion[] = [
  {
    id: "pq-aps-experiment-samplespace",
    moduleId: "m1",
    topicId: "aps-sample-space-events",
    co: "CO1",
    marks: "5 marks",
    frequency: "Asked in IA1",
    question:
      "Explain the terms experiment, random experiment, sample space and event, using the example of rolling two six-sided dice.",
    answer: `## Definitions

- **Experiment** — any process that gives an observation (here, rolling two dice).
- **Random experiment** — all possible outcomes are known beforehand, but the actual result is uncertain.
- **Sample space (S)** — the set of all possible outcomes.
- **Event** — any subset of S; it occurs if the actual outcome lies in it.

## Two-dice example

\`\`\`text
S = { (1,1), (1,2), ... , (6,6) }      n(S) = 6 x 6 = 36
\`\`\`

Each outcome is an ordered pair (first die, second die).

\`\`\`text
Event A = "sum = 7" = {(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)}
P(A) = n(A)/n(S) = 6/36 = 1/6
\`\`\`

**Answer shape:** define each term in one line, then *write the 36-point sample space size* and give one event with its probability — that is what earns the marks.`,
  },
  {
    id: "pq-aps-bayes-statement",
    moduleId: "m1",
    topicId: "aps-bayes-theorem",
    co: "CO1",
    marks: "9 marks",
    frequency: "High priority",
    question: "State and prove Bayes' theorem.",
    answer: `## Statement

If B1, B2, …, Bn are mutually exclusive and exhaustive events with P(Bi) > 0, then for any event A with P(A) > 0:

\`\`\`text
            P(A | Bi) · P(Bi)
P(Bi | A) = -----------------------------
            Σ  P(A | Bj) · P(Bj)
\`\`\`

## Proof

From the definition of conditional probability:

\`\`\`text
P(Bi | A) = P(A ∩ Bi) / P(A)            ... (1)
P(A | Bi) = P(A ∩ Bi) / P(Bi)
   =>  P(A ∩ Bi) = P(A | Bi) · P(Bi)    ... (2)
\`\`\`

By the **total probability theorem**, since the Bj partition the sample space:

\`\`\`text
P(A) = Σ P(A ∩ Bj) = Σ P(A | Bj) · P(Bj)   ... (3)
\`\`\`

Substituting (2) and (3) into (1):

\`\`\`text
P(Bi | A) = P(A | Bi)·P(Bi) / Σ P(A | Bj)·P(Bj)        [proved]
\`\`\`

**In words:** the posterior is proportional to prior × likelihood, normalised by the total probability of the evidence.`,
  },
  {
    id: "pq-aps-bayes-balls",
    moduleId: "m1",
    topicId: "aps-bayes-theorem",
    co: "CO1",
    marks: "9 marks",
    frequency: "Likely",
    question:
      "A bag contains 4 balls. Two balls are drawn at random without replacement and are found to be blue. What is the probability that all 4 balls in the bag are blue?",
    answer: `## Set up the prior

The number of blue balls in the bag, k, is unknown. Assume it is equally likely to be 0, 1, 2, 3 or 4:

\`\`\`text
P(k) = 1/5   for k = 0,1,2,3,4
\`\`\`

## Likelihood of drawing 2 blue, given k blue

\`\`\`text
P(2 blue | k) = C(k,2) / C(4,2) = C(k,2) / 6
   k = 0,1 : 0       k = 2 : 1/6
   k = 3   : 3/6     k = 4 : 6/6
\`\`\`

## Total probability of "2 blue drawn"

\`\`\`text
P(2 blue) = (1/5)(1/6 + 3/6 + 6/6) = (1/5)(10/6) = 1/3
\`\`\`

## Bayes — posterior that all 4 are blue

\`\`\`text
P(k=4 | 2 blue) = (1/5)(1) / (1/3) = (1/5)·3 = 3/5 = 0.6
\`\`\`

**Answer: 0.6.** The crucial modelling step is stating the prior over how many blue balls the bag could contain.`,
  },
];

/* ============================================================ MODULE 2 ===== */
/* Random variables: discrete PMF, continuous PDF (find-constant + conditional) */

const m2Programs: PredictedProgram[] = [
  {
    id: "pp-aps-discrete-find-c",
    moduleId: "m2",
    topicId: "aps-pmf-cdf-pdf",
    co: "CO2",
    marks: "9 marks",
    frequency: "Asked in IA1",
    title: "Discrete PMF — find the constant C, then a conditional",
    statement:
      "The PMF of X is P(X=0) = 3C², P(X=1) = 4C − 10C², P(X=2) = 5C − 1 (C > 0), and 0 otherwise. Find C and P(0 < X < 2 | X > 0).",
    code: `These three probabilities must sum to 1:

   3C² + (4C − 10C²) + (5C − 1) = 1
   −7C² + 9C − 1 = 1
   7C² − 9C + 2 = 0

Quadratic formula:  C = [9 ± √(81 − 56)]/14 = [9 ± 5]/14
   C = 1   or   C = 2/7

C = 1 makes P(0) = 3 (> 1, impossible)   ->   C = 2/7

PMF:  P(0) = 3(2/7)²            = 12/49
      P(1) = 4(2/7) − 10(2/7)²  = 56/49 − 40/49 = 16/49
      P(2) = 5(2/7) − 1         = 21/49
      check: 12 + 16 + 21 = 49  ✓

P(0 < X < 2 | X > 0) = P(X = 1 | X ∈ {1, 2})
   = P(X=1) / [P(X=1) + P(X=2)]
   = (16/49) / (37/49)
   = 16/37 ≈ 0.432`,
    explanation:
      "Use Σ P = 1 to get a quadratic in C, and reject the root that makes any probability exceed 1. The event {0 < X < 2} is just X = 1; conditioning on X > 0 restricts the sample space to {1, 2}.",
  },
  {
    id: "pp-aps-discrete-kr3",
    moduleId: "m2",
    topicId: "aps-expectation-variance",
    co: "CO2",
    marks: "9 marks",
    frequency: "Asked in IA1",
    title: "Discrete PMF kr³ — find k, mean, median, mode",
    statement:
      "The PMF of X is P(X = r) = k·r³ for r = 1, 2, 3, 4. Find k and the mean, median and mode of X.",
    code: `Σ P(x) = 1:
   k(1³ + 2³ + 3³ + 4³) = k(1 + 8 + 27 + 64) = 100k = 1
   k = 1/100 = 0.01

PMF:  P(1)=1/100   P(2)=8/100   P(3)=27/100   P(4)=64/100

Mean  E(X) = Σ r·P(r)
           = [1(1) + 2(8) + 3(27) + 4(64)] / 100
           = (1 + 16 + 81 + 256)/100 = 354/100 = 3.54

Mode = value with the largest probability  ->  r = 4   (P = 64/100)

Median: cumulative F(r):
   F(1)=0.01   F(2)=0.09   F(3)=0.36   F(4)=1.00
   smallest r with F(r) ≥ 0.5   ->   median = 4`,
    explanation:
      "Find k from Σ P = 1. Mean = Σ r·P(r); mode = the most-probable value; median = the first r whose cumulative probability reaches 0.5. Here the heavy weight on r = 4 pulls mode and median both to 4.",
  },
  {
    id: "pp-aps-discrete-table-b",
    moduleId: "m2",
    topicId: "aps-pmf-cdf-pdf",
    co: "CO2",
    marks: "9 marks",
    frequency: "High priority",
    title: "Discrete PMF table — find b, then P(X ≤ 4)",
    statement:
      "A discrete RV X has P(X) = b, 2b, 4b, 6b, 8b, 10b, 12b, 14b, 16b for X = 1, 2, …, 9 respectively. Find b and P(X ≤ 4).",
    code: `X    : 1    2    3    4    5    6    7    8    9
P(X) : b   2b   4b   6b   8b  10b  12b  14b  16b

Σ P(X) = 1:
   b(1 + 2 + 4 + 6 + 8 + 10 + 12 + 14 + 16) = 73b = 1
   b = 1/73

P(X ≤ 4) = P(1) + P(2) + P(3) + P(4)
         = b + 2b + 4b + 6b = 13b
         = 13/73 ≈ 0.178`,
    explanation:
      "Lay the PMF out as a table, add the coefficients (= 73), so b = 1/73, then sum the first four probabilities. This is the worked example straight from the teacher's notes.",
  },
  {
    id: "pp-aps-continuous-hx4",
    moduleId: "m2",
    topicId: "aps-pmf-cdf-pdf",
    co: "CO2",
    marks: "9 marks",
    frequency: "Asked in IA1",
    title: "Continuous PDF h·x⁴ — find h, then a conditional",
    statement:
      "A continuous RV has PDF f(x) = h·x⁴ for −1 < x < 0 and 0 elsewhere. Find h and P(x > −0.5 | x < −0.25).",
    code: `Find h from  ∫ f(x) dx = 1:
   ∫(−1 to 0) h x⁴ dx = h [x⁵/5](−1 to 0) = h(0 − (−1/5)) = h/5 = 1
   h = 5

P(x > −1/2 | x < −1/4) = P(−1/2 < x < −1/4) / P(x < −1/4)

 numerator   = ∫(−1/2 to −1/4) 5x⁴ dx = [x⁵](−1/2 to −1/4)
             = (−1/4)⁵ − (−1/2)⁵ = −1/1024 + 1/32 = 31/1024
 denominator = ∫(−1 to −1/4) 5x⁴ dx = [x⁵](−1 to −1/4)
             = (−1/4)⁵ − (−1)⁵ = −1/1024 + 1 = 1023/1024

P = (31/1024) / (1023/1024) = 31/1023 ≈ 0.0303`,
    explanation:
      "∫ f = 1 gives h = 5. The conditional numerator integrates over the overlap (−1/2, −1/4); the denominator over all of x < −1/4. Antiderivative of 5x⁴ is x⁵, so both are one-liners. Matches the shared-PDF key, 31/1023.",
  },
  {
    id: "pp-aps-continuous-r2x",
    moduleId: "m2",
    topicId: "aps-pmf-cdf-pdf",
    co: "CO2",
    marks: "9 marks",
    frequency: "Asked in IA1",
    title: "Continuous PDF r(2 − x) — find r, then a conditional",
    statement:
      "A continuous RV has PDF f(x) = r(2 − x) for 0 < x < 2 and 0 elsewhere. Find r and P(x > 1/2 | x < 3/2).",
    code: `Find r from  ∫ f(x) dx = 1:
   ∫(0 to 2) r(2 − x) dx = r [2x − x²/2](0 to 2) = r(4 − 2) = 2r = 1
   r = 1/2

P(x > 1/2 | x < 3/2) = P(1/2 < x < 3/2) / P(x < 3/2)

 Let G(x) = (1/2)[2x − x²/2].
   G(3/2) = (1/2)(3 − 9/8) = (1/2)(15/8) = 15/16
   G(1/2) = (1/2)(1 − 1/8) = (1/2)(7/8)  = 7/16
   G(0)   = 0

 numerator   = G(3/2) − G(1/2) = 15/16 − 7/16 = 8/16 = 1/2
 denominator = G(3/2) − G(0)   = 15/16

P = (1/2) / (15/16) = 8/15 ≈ 0.533`,
    explanation:
      "∫ f = 1 gives r = 1/2. Define the antiderivative G(x) once, then conditional = overlap / condition. The numerator region (1/2, 3/2) is fully inside x < 3/2, so it is just the overlap.",
  },
  {
    id: "pp-aps-continuous-kx2",
    moduleId: "m2",
    topicId: "aps-pmf-cdf-pdf",
    co: "CO2",
    marks: "9 marks",
    frequency: "Practice (GCR)",
    title: "Continuous PDF kx²(1 − x) — find k, then a conditional",
    statement:
      "A continuous RV has PDF f(x) = k·x²(1 − x) for 0 ≤ x ≤ 1. Find k and P(0.2 < x < 0.8 | x > 0.5).",
    code: `Find k from  ∫ f(x) dx = 1:
   ∫(0 to 1) k(x² − x³) dx = k[x³/3 − x⁴/4](0 to 1) = k(1/3 − 1/4) = k/12 = 1
   k = 12

P(0.2 < x < 0.8 | x > 0.5) = P(0.5 < x < 0.8) / P(x > 0.5)
   (the part of 0.2 < x < 0.8 with x > 0.5 is 0.5 < x < 0.8)

 Let G(x) = ∫ 12(x² − x³) dx = 4x³ − 3x⁴.
   G(0.8) = 4(0.512) − 3(0.4096) = 2.048 − 1.2288 = 0.8192
   G(0.5) = 4(0.125) − 3(0.0625) = 0.5 − 0.1875   = 0.3125
   G(1)   = 4 − 3 = 1

 numerator   = G(0.8) − G(0.5) = 0.8192 − 0.3125 = 0.5067
 denominator = G(1)   − G(0.5) = 1 − 0.3125      = 0.6875

P = 0.5067 / 0.6875 ≈ 0.7370`,
    explanation:
      "k = 12 from ∫ f = 1. Conditioning on x > 0.5 raises the lower limit from 0.2 to 0.5. The antiderivative G(x) = 4x³ − 3x⁴ makes both integrals one-liners. Matches the shared-PDF key, 0.7370.",
  },
  {
    id: "pp-aps-expectation-discrete",
    moduleId: "m2",
    topicId: "aps-expectation-variance",
    co: "CO2",
    marks: "5 marks",
    frequency: "High priority",
    title: "E(X), Var(X) and SD for a discrete RV",
    statement:
      "X takes values 0, 1, 2, 3 with probabilities 0.1, 0.2, 0.5, 0.2. Compute E(X), E(X²), Var(X) and the standard deviation.",
    code: `X    : 0     1     2     3
P(X) : 0.1   0.2   0.5   0.2

E(X)  = Σ x·P(x)  = 0(0.1) + 1(0.2) + 2(0.5) + 3(0.2)
      = 0 + 0.2 + 1.0 + 0.6 = 1.8

E(X²) = Σ x²·P(x) = 0 + 1(0.2) + 4(0.5) + 9(0.2)
      = 0 + 0.2 + 2.0 + 1.8 = 4.0

Var(X) = E(X²) − [E(X)]² = 4.0 − (1.8)² = 4.0 − 3.24 = 0.76
SD(X)  = √0.76 ≈ 0.872`,
    explanation:
      "Tabulate x·P(x) and x²·P(x), sum the columns, then Var = E(X²) − [E(X)]². Always that order — never [E(X)]² − E(X²).",
  },
];

const m2Questions: PredictedQuestion[] = [
  {
    id: "pq-aps-discrete-vs-continuous",
    moduleId: "m2",
    topicId: "aps-random-variables",
    co: "CO2",
    marks: "5 marks",
    frequency: "High priority",
    question:
      "Distinguish between discrete and continuous random variables, and state the conditions a PMF and a PDF must satisfy.",
    answer: `## Discrete vs continuous

| | Discrete | Continuous |
|---|---|---|
| Values | countable (0, 1, 2, …) | an interval of real numbers |
| Described by | PMF P(x) | PDF f(x) |
| Probability | P(X = x) read directly | area under f over a range |
| Example | number of heads in 10 tosses | height of a student |

## Conditions on a PMF

\`\`\`text
1.  P(x) ≥ 0  for every x
2.  Σ P(x) = 1
\`\`\`

## Conditions on a PDF

\`\`\`text
1.  f(x) ≥ 0  for every x
2.  ∫ f(x) dx = 1   (over the whole range)
\`\`\`

For a continuous variable P(X = a) = 0, so probability comes only from an **interval** (an area under the curve), and < vs ≤ make no difference.`,
  },
];

/* ============================================================ MODULE 3 ===== */
/* Distributions: uniform, binomial, negative binomial, geometric, Poisson, normal */

const m3Programs: PredictedProgram[] = [
  {
    id: "pp-aps-uniform-mean-var",
    moduleId: "m3",
    topicId: "aps-uniform-bernoulli-binomial",
    co: "CO3",
    marks: "6 marks",
    frequency: "Asked in IA2",
    title: "Uniform — recover a, b from mean & variance, then P(X < 0)",
    statement:
      "X is a uniformly distributed continuous RV with mean 1 and variance 4/3. Find P(X < 0).",
    code: `mean = (a + b)/2 = 1        =>  a + b = 2
var  = (b − a)²/12 = 4/3    =>  (b − a)² = 16  =>  b − a = 4

Solve:  a + b = 2,  b − a = 4   ->   b = 3,  a = −1
Density:  f(x) = 1/(b − a) = 1/4   on (−1, 3)

P(X < 0) = ∫(−1 to 0) (1/4) dx = (1/4)[x](−1 to 0)
         = (1/4)(0 − (−1)) = 1/4 = 0.25`,
    explanation:
      "Recover a and b by solving the mean and variance equations together, then integrate the constant density 1/4. (The teacher's notes do the same setup for P(X < 2) = 3/4; IA2 asks P(X < 0) = 1/4.)",
  },
  {
    id: "pp-aps-uniform-abs",
    moduleId: "m3",
    topicId: "aps-uniform-bernoulli-binomial",
    co: "CO3",
    marks: "6 marks",
    frequency: "Practice (GCR)",
    title: "Uniform — an absolute-value event",
    statement: "X is uniformly distributed on −2 ≤ X ≤ 2. Find P(|X − 1| ≥ 1/2).",
    code: `f(x) = 1/(2 − (−2)) = 1/4   on [−2, 2]

Work via the complement:
   |X − 1| < 1/2   <=>   1/2 < X < 3/2
   P(1/2 < X < 3/2) = ∫(1/2 to 3/2) (1/4) dx = (1/4)(1) = 1/4

P(|X − 1| ≥ 1/2) = 1 − 1/4 = 3/4 = 0.75`,
    explanation:
      "Convert the absolute-value event into an interval. The complement |X − 1| < 1/2 is the short interval (1/2, 3/2) of length 1; on a width-4 uniform its probability is 1/4, so the answer is 3/4.",
  },
  {
    id: "pp-aps-binomial-drivers",
    moduleId: "m3",
    topicId: "aps-uniform-bernoulli-binomial",
    co: "CO3",
    marks: "9 marks",
    frequency: "Asked in IA2",
    title: "Binomial — drivers in an accident",
    statement:
      "In a city 4% of licensed drivers have at least one accident a year. Among 7 randomly chosen drivers, find the probability that (i) exactly 5, and (ii) at most 3, have an accident in a year.",
    code: `n = 7, p = 0.04, q = 0.96.   P(X = r) = 7Cr (0.04)^r (0.96)^(7−r)

(i) Exactly 5:
    P(X=5) = 7C5 (0.04)^5 (0.96)^2 = 21 × 1.024e−7 × 0.9216
           ≈ 1.98 × 10^−6        (about 0.0000020)

(ii) At most 3:  P(X ≤ 3) = P(0) + P(1) + P(2) + P(3)
    P(0) = 0.96^7            = 0.7514
    P(1) = 7(0.04)(0.96^6)   = 0.2192
    P(2) = 21(0.04)²(0.96^5) = 0.0274
    P(3) = 35(0.04)³(0.96^4) = 0.0019
    P(X ≤ 3) ≈ 0.9999`,
    explanation:
      "Binomial with a small p. 'Exactly 5' is almost impossible; 'at most 3' is almost certain. Add P(0)…P(3) directly (or note P(X ≤ 3) = 1 − P(X ≥ 4)).",
  },
  {
    id: "pp-aps-binomial-petdogs",
    moduleId: "m3",
    topicId: "aps-uniform-bernoulli-binomial",
    co: "CO3",
    marks: "9 marks",
    frequency: "Asked in IA2",
    title: "Binomial — families with a pet dog",
    statement:
      "20% of families own a pet dog. Out of 10 randomly selected families, find the probability that (i) exactly 2, and (ii) at most 1, own a dog.",
    code: `n = 10, p = 0.2, q = 0.8.

(i) Exactly 2:
    P(X=2) = 10C2 (0.2)² (0.8)^8 = 45 × 0.04 × 0.16777 = 0.3020

(ii) At most 1:  P(X ≤ 1) = P(0) + P(1)
    P(0) = 0.8^10         = 0.1074
    P(1) = 10(0.2)(0.8)^9 = 0.2684
    P(X ≤ 1) = 0.3758`,
    explanation:
      "Fixed n = 10 independent families, constant p = 0.2 → Binomial. 'At most 1' = P(0) + P(1).",
  },
  {
    id: "pp-aps-binomial-mcq",
    moduleId: "m3",
    topicId: "aps-uniform-bernoulli-binomial",
    co: "CO3",
    marks: "9 marks",
    frequency: "Practice (GCR)",
    title: "Binomial — guessing an MCQ exam (with E(X), SD)",
    statement:
      "A 5-question MCQ exam has 5 options per question; a student guesses randomly. Find (i) P(exactly 4 correct), (ii) P(at least 2 correct), and (iii) the expected number correct and its standard deviation.",
    code: `n = 5, p = 1/5 = 0.2, q = 0.8.

(i) Exactly 4 correct:
    P(X=4) = 5C4 (0.2)^4 (0.8)^1 = 5 × 0.0016 × 0.8 = 0.0064

(ii) At least 2 correct:  P(X ≥ 2) = 1 − P(0) − P(1)
    P(0) = 0.8^5         = 0.32768
    P(1) = 5(0.2)(0.8)^4 = 0.4096
    P(X ≥ 2) = 1 − 0.32768 − 0.4096 = 0.2627

(iii) Expected number correct:
    E(X) = n·p = 5(0.2) = 1
    SD   = √(n·p·q) = √(5·0.2·0.8) = √0.8 ≈ 0.894`,
    explanation:
      "Three standard binomial asks at once: an exact probability, an 'at least' via the complement, and the mean/SD from E = np and SD = √(npq).",
  },
  {
    id: "pp-aps-negbin-bulb",
    moduleId: "m3",
    topicId: "aps-geometric-negbinomial-poisson",
    co: "CO3",
    marks: "6 marks",
    frequency: "High priority",
    title: "Negative binomial — 5th defective bulb on the 15th",
    statement:
      "A factory's bulbs are defective with probability 0.1 ('success' = defective). Find the probability that the 5th defective bulb is produced on exactly the 15th bulb.",
    code: `Negative binomial: r-th success on the n-th trial (r = 5, n = 15):
   P(X = n) = (n−1)C(r−1) · p^r · (1−p)^(n−r)

   P(X = 15) = 14C4 · (0.1)^5 · (0.9)^10
   14C4    = 1001
   (0.1)^5  = 0.00001
   (0.9)^10 = 0.3487

   P = 1001 × 0.00001 × 0.3487 = 0.00349   ≈ 0.349%`,
    explanation:
      "The 5th defective is fixed on the last (15th) trial, so the other 4 are chosen among the first 14 — hence 14C4. This is the teacher's worked example.",
  },
  {
    id: "pp-aps-negbin-basketball",
    moduleId: "m3",
    topicId: "aps-geometric-negbinomial-poisson",
    co: "CO3",
    marks: "6 marks",
    frequency: "Practice (GCR)",
    title: "Negative binomial — 10th basket on the 12th attempt",
    statement:
      "A player makes 80% of free throws. Find the probability that they need exactly 12 attempts to make their 10th basket.",
    code: `Negative binomial (r = 10, n = 12, p = 0.8):
   P(X = 12) = 11C9 · (0.8)^10 · (0.2)^2
   11C9     = 11C2 = 55
   (0.8)^10  = 0.10737
   (0.2)^2   = 0.04
   P = 55 × 0.10737 × 0.04 = 0.2362   ≈ 23.6%`,
    explanation:
      "Same template as the bulb problem: the 10th success sits on the 12th trial, so choose the other 9 among the first 11 → 11C9.",
  },
  {
    id: "pp-aps-geometric-target",
    moduleId: "m3",
    topicId: "aps-geometric-negbinomial-poisson",
    co: "CO3",
    marks: "5 marks",
    frequency: "Low (not in exam)",
    title: "Geometric — target destroyed on the 3rd shot",
    statement:
      "The probability of destroying a target on any one shot is 1/3. Find the probability that it is destroyed on the 3rd shot and not before.",
    code: `Geometric: first success on the k-th trial,  P(X = k) = q^(k−1) · p
   p = 1/3,  q = 2/3,  k = 3
   P(X = 3) = (2/3)² · (1/3) = (4/9)(1/3) = 4/27 ≈ 0.148`,
    explanation:
      "The first two shots miss (q²) and the third hits (p). The teacher's notes say a geometric question is unlikely in the exam, but the formula P(X = k) = q^(k−1)p is easy marks if it appears.",
  },
  {
    id: "pp-aps-poisson-bulbs",
    moduleId: "m3",
    topicId: "aps-geometric-negbinomial-poisson",
    co: "CO3",
    marks: "6 marks",
    frequency: "High priority",
    title: "Poisson — defective bulbs (λ = np)",
    statement:
      "5% of bulbs are defective. In a sample of 100 bulbs use the Poisson distribution to find the probability that (a) none are defective, (b) exactly 5 are defective.",
    code: `Large n, small p  ->  Poisson with  λ = n·p = 100(0.05) = 5
   P(X = x) = e^(−λ) λ^x / x!,    e^(−5) = 0.006738

(a) None defective:  P(0) = e^(−5) = 0.006738   ≈ 0.0067
(b) Exactly 5:       P(5) = e^(−5) · 5^5 / 5!
                          = 0.006738 × 3125 / 120
                          = 0.006738 × 26.042 = 0.1755`,
    explanation:
      "When n is large and p is small, Binomial ≈ Poisson with λ = np = 5. Then substitute into e^(−λ)λ^x/x!.",
  },
  {
    id: "pp-aps-poisson-callcenter",
    moduleId: "m3",
    topicId: "aps-geometric-negbinomial-poisson",
    co: "CO3",
    marks: "6 marks",
    frequency: "Practice (GCR)",
    title: "Poisson — call centre (rate given)",
    statement:
      "A call centre receives on average 10 calls per hour. Use the Poisson distribution to find the probability of (a) no calls in an hour, (b) exactly 7 calls in an hour.",
    code: `Rate given directly  ->  λ = 10.    e^(−10) = 0.0000454

(a) No calls:   P(0) = e^(−10) = 0.0000454   ≈ 0.000045
(b) Exactly 7:  P(7) = e^(−10) · 10^7 / 7!
                     = 0.0000454 × 10,000,000 / 5040
                     = 0.0000454 × 1984.1 = 0.0901`,
    explanation:
      "When an average rate is given (calls per hour), λ is that rate. No n or p needed — just plug into the Poisson formula.",
  },
  {
    id: "pp-aps-poisson-carhire",
    moduleId: "m3",
    topicId: "aps-geometric-negbinomial-poisson",
    co: "CO3",
    marks: "6 marks",
    frequency: "Practice (GCR)",
    title: "Poisson — car-hire firm with 2 cars",
    statement:
      "A firm has 2 cars hired out day by day. Daily demand follows Poisson(1.5). Find the proportion of days on which (i) neither car is used, (ii) some demand is not fulfilled.",
    code: `λ = 1.5,   e^(−1.5) = 0.2231

(i) Neither car used  ->  X = 0:
    P(0) = e^(−1.5) = 0.2231        (about 22.3% of days)

(ii) Some demand not fulfilled  ->  X > 2  (more than 2 cars wanted):
    P(0) = 0.2231
    P(1) = 1.5 · e^(−1.5)        = 0.3347
    P(2) = (1.5²/2!) · e^(−1.5)  = 0.2510
    P(X > 2) = 1 − (0.2231 + 0.3347 + 0.2510) = 0.1912   (about 19.1%)`,
    explanation:
      "With only 2 cars, demand is unfulfilled when X > 2 (i.e. X ≥ 3). Compute P(0) + P(1) + P(2) and subtract from 1.",
  },
  {
    id: "pp-aps-normal-marks",
    moduleId: "m3",
    topicId: "aps-normal-distribution",
    co: "CO3",
    marks: "9 marks",
    frequency: "High priority",
    title: "Normal — exam marks (count + percentile)",
    statement:
      "Marks are Normal with mean 70 and SD 12, for 800 students. (i) How many scored above 85? (ii) What was the highest mark of the lowest 15%?",
    code: `Marks ~ Normal(μ = 70, σ = 12),  N = 800.

(i) Above 85:
    z = (85 − 70)/12 = 1.25
    Φ(1.25) = 0.8944          (area to the LEFT, from the Z-table)
    P(X > 85) = 1 − 0.8944 = 0.1056
    Expected number = 0.1056 × 800 = 84.48 ≈ 84 students

(ii) Highest mark of the lowest 15%  (the 15th percentile):
    find z with Φ(z) = 0.15   ->   z = −1.04
    x = μ + z·σ = 70 + (−1.04)(12) = 70 − 12.48 = 57.52`,
    explanation:
      "Type (a): value → z → area → × N. Type (b) is the reverse: percentile → z → x = μ + zσ. Uses the full-CDF Z-table (Φ(1.25) = 0.8944). This is the exact worked answer from the GCR bank (84 students, 57.52).",
  },
  {
    id: "pp-aps-normal-bulbs",
    moduleId: "m3",
    topicId: "aps-normal-distribution",
    co: "CO3",
    marks: "9 marks",
    frequency: "Practice (GCR)",
    title: "Normal — bulb lifetimes (expected counts)",
    statement:
      "Bulb lifetimes are Normal with mean 1000 hours and SD 200 hours, for 10,000 bulbs. How many are expected to fail (i) within the first 800 hours, (ii) between 800 and 1200 hours?",
    code: `Lifetime ~ Normal(μ = 1000, σ = 200),  N = 10,000.

(i) Within 800 hours (X < 800):
    z = (800 − 1000)/200 = −1
    P(X < 800) = Φ(−1) = 1 − Φ(1) = 1 − 0.8413 = 0.1587
    Expected number = 0.1587 × 10,000 = 1587 bulbs

(ii) Between 800 and 1200 hours:
    z1 = −1,  z2 = (1200 − 1000)/200 = +1
    P(800 < X < 1200) = Φ(1) − Φ(−1) = 0.8413 − 0.1587 = 0.6826
    Expected number = 0.6826 × 10,000 = 6826 bulbs`,
    explanation:
      "Standardize each bound, read Φ from the Z-table, multiply by N. Symmetry: Φ(−1) = 1 − Φ(1). The ±1σ band holding ~68% is the empirical rule in action.",
  },
];

const m3Questions: PredictedQuestion[] = [
  {
    id: "pq-aps-distribution-choice",
    moduleId: "m3",
    topicId: "aps-uniform-bernoulli-binomial",
    co: "CO3",
    marks: "5 marks",
    frequency: "High priority",
    question:
      "State the Binomial, Poisson and Normal distributions (formula, mean, variance) and explain when each is used.",
    answer: `## The three distributions

| Distribution | Formula | Mean | Variance |
|---|---|---|---|
| Binomial(n, p) | P(r) = nCr p^r q^(n−r) | np | npq |
| Poisson(λ) | P(x) = e^(−λ) λ^x / x! | λ | λ |
| Normal(μ, σ²) | bell curve, use z = (x−μ)/σ | μ | σ² |

## When to use each

\`\`\`text
Binomial : fixed number of independent trials n, each with the same success
           probability p; you count successes.
Poisson  : rare events (n large, p small) or a given average rate; λ = np.
Normal   : continuous data that is symmetric/bell-shaped; standardize and read
           the Z-table.
\`\`\`

## Link between them

For large n and small p, Binomial(n, p) ≈ Poisson(λ = np). For large n, Binomial is also approximated by the Normal distribution. Choosing the right model is usually signalled by the wording: "out of n trials" (Binomial), "on average / per hour" (Poisson), "normally distributed" (Normal).`,
  },
];

/* ============================================================ MODULE 4 ===== */
/* Inferential I: Z-tests for means and proportions */

const m4Programs: PredictedProgram[] = [
  {
    id: "pp-aps-z-onesample-bulbs",
    moduleId: "m4",
    topicId: "aps-z-test",
    co: "CO4",
    marks: "6 marks",
    frequency: "High priority",
    title: "One-sample Z (mean) — bulb lifespan claim",
    statement:
      "A maker claims bulbs last 1000 hours on average. A sample of 40 bulbs has mean 980 hours with population SD 50 hours. Test the claim at 5%.",
    code: `Claim: μ = 1000.  n = 40, x̄ = 980, σ = 50, α = 5% (two-tailed).
H0: μ = 1000      H1: μ ≠ 1000

Z = (x̄ − μ) / (σ/√n) = (980 − 1000) / (50/√40)
  = −20 / (50/6.3246) = −20 / 7.9057 = −2.53

Critical (5%, two-tailed) = ±1.96.
|Z| = 2.53 > 1.96  ->  reject H0.
Conclusion: the mean lifespan differs from 1000 h — the claim is not supported.`,
    explanation:
      "Large sample (n = 40), σ known → Z-test. The test statistic beyond ±1.96 rejects the claim at 5%.",
  },
  {
    id: "pp-aps-z-onesample-battery",
    moduleId: "m4",
    topicId: "aps-z-test",
    co: "CO4",
    marks: "6 marks",
    frequency: "Practice (GCR)",
    title: "One-sample Z (mean) — battery life (fail to reject)",
    statement:
      "A maker claims a phone battery lasts 20 hours. A sample of 50 phones has mean 19.5 hours with population SD 2 hours. Test the claim at 5%.",
    code: `Claim: μ = 20.  n = 50, x̄ = 19.5, σ = 2, α = 5% (two-tailed).
H0: μ = 20      H1: μ ≠ 20

Z = (19.5 − 20) / (2/√50) = −0.5 / (2/7.071) = −0.5 / 0.2828 = −1.77

Critical (5%, two-tailed) = ±1.96.
|Z| = 1.77 < 1.96  ->  do NOT reject H0.
Conclusion: not enough evidence to reject the 20-hour claim.`,
    explanation:
      "Contrast with the bulb problem: here |Z| < 1.96, so we fail to reject. 'Fail to reject' means the data are consistent with the claim — it does not prove the claim true.",
  },
  {
    id: "pp-aps-z-twosample-hours",
    moduleId: "m4",
    topicId: "aps-z-test",
    co: "CO4",
    marks: "6 marks",
    frequency: "Practice (GCR)",
    title: "Two-sample Z (means) — weekly work hours",
    statement:
      "Company A: 50 employees, mean 40 h, SD 6. Company B: 55 employees, mean 38 h, SD 5. At 10%, is there a significant difference in average weekly hours?",
    code: `A: n1=50, x̄1=40, s1=6.   B: n2=55, x̄2=38, s2=5.   α = 10% (two-tailed).
H0: μ1 = μ2      H1: μ1 ≠ μ2

SE = √(s1²/n1 + s2²/n2) = √(36/50 + 25/55) = √(0.72 + 0.4545) = √1.1745 = 1.0838
Z  = (x̄1 − x̄2)/SE = (40 − 38)/1.0838 = 2/1.0838 = 1.845

Critical (10%, two-tailed) = ±1.645.
|Z| = 1.845 > 1.645  ->  reject H0.
Conclusion: a significant difference in average weekly hours at the 10% level.`,
    explanation:
      "Two large samples comparing means → two-sample Z with SE = √(s1²/n1 + s2²/n2). Watch the level: the 10% two-tailed critical value is ±1.645, not ±1.96.",
  },
  {
    id: "pp-aps-z-prop-typhoid",
    moduleId: "m4",
    topicId: "aps-z-test",
    co: "CO4",
    marks: "6 marks",
    frequency: "Practice (GCR)",
    title: "One-sample proportion — typhoid fatality rate",
    statement:
      "The typhoid fatality rate is believed to be 17.26%. In a hospital, 63 of 640 treated patients died. Examine whether the hospital is efficient in managing typhoid.",
    code: `Claimed P = 0.1726.  n = 640, deaths = 63  ->  p̂ = 63/640 = 0.0984.
H0: P = 0.1726      H1: P ≠ 0.1726      α = 5%

SE = √(P·Q/n) = √(0.1726 × 0.8274 / 640) = √0.00022314 = 0.01494
Z  = (p̂ − P)/SE = (0.0984 − 0.1726)/0.01494 = −4.97

|Z| = 4.97 > 1.96  ->  reject H0.
The fatality rate is significantly BELOW 17.26%, so the hospital can be
considered efficient in managing typhoid cases.`,
    explanation:
      "One-sample proportion test: the SE uses the *claimed* P, not p̂. A large negative Z shows the observed fatality is significantly lower than claimed → efficient.",
  },
  {
    id: "pp-aps-z-prop-dice",
    moduleId: "m4",
    topicId: "aps-z-test",
    co: "CO4",
    marks: "6 marks",
    frequency: "Practice (GCR)",
    title: "One-sample proportion — is the die biased? (+ confidence limits)",
    statement:
      "A die is thrown 9000 times and a 3 or 4 turns up 3240 times. Show the die cannot be regarded as unbiased, and find the limits within which the probability of a 3 or 4 lies.",
    code: `Fair die: P(3 or 4) = 2/6 = 1/3.   p̂ = 3240/9000 = 0.36.
H0: P = 1/3      H1: P ≠ 1/3      α = 5%

SE = √(P·Q/n) = √((1/3)(2/3)/9000) = √0.00002469 = 0.004969
Z  = (0.36 − 0.3333)/0.004969 = 5.37
|Z| = 5.37 > 1.96  ->  reject H0  ->  the die is biased.

95% confidence limits for the true P (use p̂, q̂ in the SE):
   p̂ ± 1.96·√(p̂q̂/n) = 0.36 ± 1.96·√(0.36×0.64/9000)
                      = 0.36 ± 1.96(0.005060) = 0.36 ± 0.00992
   P lies in (0.350, 0.370).`,
    explanation:
      "Reject → the die is not fair. Note the two different SEs: the *test* uses the hypothesised P = 1/3, while the *confidence interval* uses the observed p̂.",
  },
  {
    id: "pp-aps-z-twoprop-machine",
    moduleId: "m4",
    topicId: "aps-z-test",
    co: "CO4",
    marks: "6 marks",
    frequency: "Asked in IA2",
    title: "Two-sample proportion (IMP) — has the machine improved?",
    statement:
      "A machine puts out 16 imperfect articles in 500. After an overhaul it puts out 3 imperfect in 100. Examine whether the machine has improved.",
    code: `Before: x1=16, n1=500  ->  p̂1 = 0.032
After:  x2=3,  n2=100  ->  p̂2 = 0.030
H0: P1 = P2      H1: P1 ≠ P2      α = 5%

Pooled  P̂ = (x1+x2)/(n1+n2) = 19/600 = 0.03167,  Q̂ = 0.96833
SE = √(P̂Q̂(1/n1 + 1/n2)) = √(0.03067 × (0.002 + 0.01)) = √0.000368 = 0.01918
Z  = (p̂1 − p̂2)/SE = (0.032 − 0.030)/0.01918 = 0.104

|Z| = 0.104 < 1.96  ->  do NOT reject H0.
Conclusion: no significant change — the machine has NOT improved.`,
    explanation:
      "The IMP exam type. **Pool** the proportion from the combined counts (19/600), then SE uses (1/n1 + 1/n2). The tiny Z shows the drop 0.032 → 0.030 is not significant.",
  },
  {
    id: "pp-aps-z-twoprop-blueeyed",
    moduleId: "m4",
    topicId: "aps-z-test",
    co: "CO4",
    marks: "6 marks",
    frequency: "Asked in IA2",
    title: "Two-sample proportion (IMP) — known population proportions",
    statement:
      "Two large populations have 30% and 25% blue-eyed people. Examine whether this difference is likely to be hidden in samples of 1200 and 900 respectively.",
    code: `Population proportions are KNOWN: P1 = 0.30, P2 = 0.25.
Samples n1 = 1200, n2 = 900.
H0: P1 = P2      H1: P1 ≠ P2      α = 5%

Since the population proportions are given, use them in the SE (no pooling):
SE = √(P1Q1/n1 + P2Q2/n2)
   = √(0.30·0.70/1200 + 0.25·0.75/900)
   = √(0.000175 + 0.000208) = √0.000383 = 0.01958
Z  = (P1 − P2)/SE = 0.05/0.01958 = 2.55

|Z| = 2.55 > 1.96  ->  significant.
Conclusion: the 5% gap is NOT likely to be hidden — samples this large detect it.`,
    explanation:
      "Subtle variant: when the population proportions are *known*, the SE uses P1, P2 directly (no pooled estimate). A significant Z means the true difference would show up in samples of this size.",
  },
  {
    id: "pp-aps-z-twoprop-alcohol",
    moduleId: "m4",
    topicId: "aps-z-test",
    co: "CO4",
    marks: "6 marks",
    frequency: "Asked in IA2",
    title: "Two-sample proportion (IMP) — alcohol in two villages",
    statement:
      "In village A, 60 of 100 men consume alcohol; in village B, 100 of 200 do. Demonstrate whether the two villages differ significantly in the proportion of men who consume alcohol.",
    code: `A: x1=60, n1=100  ->  p̂1 = 0.60
B: x2=100, n2=200 ->  p̂2 = 0.50
H0: P1 = P2      H1: P1 ≠ P2      α = 5%

Pooled  P̂ = (60+100)/(100+200) = 160/300 = 0.5333,  Q̂ = 0.4667
SE = √(P̂Q̂(1/n1 + 1/n2)) = √(0.2489 × (0.01 + 0.005)) = √0.003733 = 0.06110
Z  = (0.60 − 0.50)/0.06110 = 1.637

|Z| = 1.637 < 1.96  ->  do NOT reject H0.
Conclusion: the villages do NOT differ significantly at the 5% level.`,
    explanation:
      "Pooled two-sample proportion. The estimated proportions differ (0.60 vs 0.50), but |Z| = 1.64 falls just short of 1.96 — not significant at 5%. With larger samples the same gap could become significant.",
  },
  {
    id: "pp-aps-z-twoprop-tea",
    moduleId: "m4",
    topicId: "aps-z-test",
    co: "CO4",
    marks: "6 marks",
    frequency: "High priority",
    title: "Two-sample proportion (IMP) — tea consumption (one-tailed)",
    statement:
      "Before a duty rise, 800 of 1000 people were tea drinkers; after, 800 of 1200 were. Test whether there is a significant decrease in tea consumption.",
    code: `Before: x1=800, n1=1000 ->  p̂1 = 0.80
After:  x2=800, n2=1200 ->  p̂2 = 0.6667
"DECREASE?"  ->  one-tailed.
H0: P1 = P2      H1: P1 > P2      α = 5% (one-tailed)

Pooled  P̂ = 1600/2200 = 0.7273,  Q̂ = 0.2727
SE = √(P̂Q̂(1/n1 + 1/n2)) = √(0.1983 × (0.001 + 0.000833)) = √0.000364 = 0.01907
Z  = (0.80 − 0.6667)/0.01907 = 6.99

Critical (5%, one-tailed) = 1.645.
Z = 6.99 > 1.645  ->  reject H0.
Conclusion: a significant DECREASE in tea consumption after the duty rise.`,
    explanation:
      "'Decrease' makes this one-tailed, so the critical value is 1.645 (not 1.96). The very large Z gives a clear, significant drop.",
  },
];

const m4Questions: PredictedQuestion[] = [
  {
    id: "pq-aps-type-errors",
    moduleId: "m4",
    topicId: "aps-hypothesis-testing",
    co: "CO4",
    marks: "6 marks",
    frequency: "High priority",
    question:
      "Explain Type I and Type II errors with examples, and the difference between a one-tailed and a two-tailed test.",
    answer: `## Type I and Type II errors

\`\`\`text
                       H0 is actually TRUE      H0 is actually FALSE
Reject H0          ->  Type I error (α)         correct decision
Do not reject H0   ->  correct decision          Type II error (β)
\`\`\`

- **Type I error (α)** — rejecting H0 when it is true (a *false positive*). Example: convicting an innocent person; flagging a healthy patient as diseased.
- **Type II error (β)** — failing to reject H0 when it is false (a *false negative*). Example: letting a guilty person go free; missing a real disease.

α is the significance level we set (often 5%). Lowering α reduces Type I errors but raises Type II errors.

## One-tailed vs two-tailed

\`\`\`text
Wording "difference / not equal / changed"  ->  TWO-tailed
   reject if |Z| > Z(α/2)      (5% -> 1.96)

Wording "greater / improved / less / decreased"  ->  ONE-tailed
   reject if Z is beyond Z(α) in that one direction  (5% -> 1.645)
\`\`\`

**Exam tip:** read the question's verb. "Differ significantly" is two-tailed; "has it improved / decreased" is one-tailed — and that changes the critical value you compare against.`,
  },
];

/* ============================================================ MODULE 5 ===== */
/* Inferential II: t-test, F-test, ANOVA */

const m5Programs: PredictedProgram[] = [
  {
    id: "pp-aps-t-onesample-teacher",
    moduleId: "m5",
    topicId: "aps-t-test",
    co: "CO5",
    marks: "6 marks",
    frequency: "High priority",
    title: "One-sample t — class average claim (fail to reject)",
    statement:
      "A teacher claims the class average is 50. A sample of 10 students has mean 54 with SD 8. Test the claim at 5%.",
    code: `Small sample (n = 10), σ unknown  ->  t-test.
Claim: μ = 50.  x̄ = 54, s = 8, α = 5%.
H0: μ = 50      H1: μ ≠ 50

t = (x̄ − μ)/(s/√n) = (54 − 50)/(8/√10) = 4/(8/3.162) = 4/2.530 = 1.581
df = n − 1 = 9

t-critical (df = 9, two-tailed 5%) = 2.262   [from the t-table]
|t| = 1.581 < 2.262  ->  do NOT reject H0.
Conclusion: the teacher's claim of an average of 50 is supported.`,
    explanation:
      "Small sample with unknown σ → one-sample t with df = n − 1 = 9. |t| below the table value means the claim cannot be rejected.",
  },
  {
    id: "pp-aps-t-onesample-battery",
    moduleId: "m5",
    topicId: "aps-t-test",
    co: "CO5",
    marks: "6 marks",
    frequency: "Practice (GCR)",
    title: "One-sample t — battery life (reject)",
    statement:
      "The average life of a battery is said to be 100 hours. A sample of 25 batteries shows mean 95 hours with SD 10 hours. Test at 5%.",
    code: `Claim: μ = 100.  n = 25, x̄ = 95, s = 10, α = 5%.
H0: μ = 100      H1: μ ≠ 100

t = (95 − 100)/(10/√25) = −5/(10/5) = −5/2 = −2.5
df = 24

t-critical (df = 24, two-tailed 5%) = 2.064   [from the t-table]
|t| = 2.5 > 2.064  ->  reject H0.
Conclusion: the mean battery life differs significantly from 100 hours.`,
    explanation:
      "Same one-sample t recipe, but here |t| exceeds the table value, so the claimed mean is rejected. df = n − 1 = 24.",
  },
  {
    id: "pp-aps-t-twosample-bolts",
    moduleId: "m5",
    topicId: "aps-t-test",
    co: "CO5",
    marks: "6 marks",
    frequency: "Asked in IA2",
    title: "Two-sample t — bolts from two machines",
    statement:
      "Group A: n1=12, mean 50, s1=5. Group B: n2=12, mean 47, s2=4. Test at 5% whether the two machine means differ.",
    code: `H0: μ1 = μ2      H1: μ1 ≠ μ2      α = 5%

Pooled SD:
   Sp = √[ ((n1−1)s1² + (n2−1)s2²) / (n1+n2−2) ]
      = √[ (11·25 + 11·16) / 22 ] = √[ (275 + 176)/22 ] = √20.5 = 4.528

t = (x̄1 − x̄2) / [ Sp·√(1/n1 + 1/n2) ]
  = 3 / (4.528 · √(1/12 + 1/12)) = 3 / (4.528 · 0.4082) = 3/1.848 = 1.623
df = n1 + n2 − 2 = 22

t-critical (df = 22, two-tailed 5%) = 2.074   [from the t-table]
|t| = 1.623 < 2.074  ->  do NOT reject H0.
Conclusion: no significant difference between the two machines' bolt diameters.`,
    explanation:
      "Two small samples → pooled-variance two-sample t. The pooled SD uses (n1−1)s1² + (n2−1)s2² over (n1+n2−2), and df = 22. This is exactly IA2 Q8 — note it looks almost identical to the F-test question, but here the *means* are given, so it is a t-test.",
  },
  {
    id: "pp-aps-t-twosample-teaching",
    moduleId: "m5",
    topicId: "aps-t-test",
    co: "CO5",
    marks: "6 marks",
    frequency: "Practice (GCR)",
    title: "Two-sample t — two teaching methods (reject)",
    statement:
      "Group 1: n1=10, mean 75, s1=8. Group 2: n2=10, mean 68, s2=6. Test at 5% whether the means differ (assume equal variances).",
    code: `H0: μ1 = μ2      H1: μ1 ≠ μ2      α = 5%

Sp = √[ (9·64 + 9·36)/18 ] = √[ (576 + 324)/18 ] = √50 = 7.071
t  = (75 − 68) / (7.071·√(1/10 + 1/10)) = 7/(7.071·0.4472) = 7/3.162 = 2.214
df = 18

t-critical (df = 18, two-tailed 5%) = 2.101   [from the t-table]
|t| = 2.214 > 2.101  ->  reject H0.
Conclusion: a significant difference between the two teaching methods' means.`,
    explanation:
      "Same pooled-t method; here |t| just exceeds 2.101, so the difference is significant. df = n1 + n2 − 2 = 18.",
  },
  {
    id: "pp-aps-f-bolts-variance",
    moduleId: "m5",
    topicId: "aps-f-test",
    co: "CO5",
    marks: "6 marks",
    frequency: "Asked in IA2",
    title: "F-test — are two variances equal? (bolts)",
    statement:
      "Sample 1: n1=12, s1=6. Sample 2: n2=10, s2=4. Test at 5% whether the population variances are equal.",
    code: `H0: σ1² = σ2²      H1: σ1² ≠ σ2²      α = 5%

F = larger variance / smaller variance = s1²/s2² = 36/16 = 2.25
df1 = n1 − 1 = 11   (numerator)
df2 = n2 − 1 = 9    (denominator)

F-critical F(11, 9) at 5% ≈ 3.10   [read from the provided F-table]
F = 2.25 < 3.10  ->  do NOT reject H0.
Conclusion: the two population variances can be regarded as equal.`,
    explanation:
      "An F-test compares spreads, not means. Put the larger variance on top so F ≥ 1, take the df *separately* (11 and 9), and compare with the F-table. The give-away: the question lists SDs but no means. This is IA2 Q8 — contrast it with the look-alike two-sample t (Q7), which does give means.",
  },
  {
    id: "pp-aps-f-variance-2",
    moduleId: "m5",
    topicId: "aps-f-test",
    co: "CO5",
    marks: "6 marks",
    frequency: "Practice (GCR)",
    title: "F-test — variances (a borderline case)",
    statement:
      "Sample 1: n1=9, s1=4. Sample 2: n2=7, s2=2. Test at 5% whether the population variances are equal.",
    code: `H0: σ1² = σ2²      H1: σ1² ≠ σ2²      α = 5%

F = s1²/s2² = 16/4 = 4.0
df1 = 8,  df2 = 6

F-critical F(8, 6) at 5% ≈ 4.15   [from the F-table]
F = 4.0 < 4.15  ->  do NOT reject H0 (only just).
Conclusion: the variances can be considered equal at 5% — but it is a close call.`,
    explanation:
      "A borderline result: F = 4.0 sits just under the table value 4.15, so we narrowly fail to reject. Always compare against the exact tabulated F(df1, df2) — round numbers can mislead.",
  },
  {
    id: "pp-aps-anova-teaching",
    moduleId: "m5",
    topicId: "aps-anova",
    co: "CO5",
    marks: "12 marks",
    frequency: "High priority",
    title: "One-way ANOVA — three teaching methods",
    statement:
      "Marks under three teaching methods — A: 8, 9, 7; B: 7, 6, 8; C: 6, 5, 4. Test at 5% whether the mean marks are equal.",
    code: `Group sums/means:  A: 24, mean 8    B: 21, mean 7    C: 15, mean 5
Grand total = 60,  N = 9,  grand mean = 6.667,  k = 3 groups.
H0: μA = μB = μC      H1: at least one mean differs.

SSB = Σ nj(x̄j − grand)²
    = 3(8−6.667)² + 3(7−6.667)² + 3(5−6.667)²
    = 3(1.778) + 3(0.111) + 3(2.778) = 14.0
SSW = Σ(x − x̄j)² = 2 + 2 + 2 = 6
SST = SSB + SSW = 20    (check)

Source     SS    df   MS      F
Between    14     2   7.0     F = 7.0 / 1.0 = 7.0
Within      6     6   1.0
Total      20     8

F-critical F(2, 6) at 5% = 5.14
F = 7.0 > 5.14  ->  reject H0  ->  the methods' mean marks are NOT all equal.`,
    explanation:
      "One-way ANOVA compares between-group spread (MSB) with within-group spread (MSW). Build the table from group sums; df = (k−1, N−k) = (2, 6). F beyond 5.14 rejects equal means.",
  },
  {
    id: "pp-aps-anova-ads",
    moduleId: "m5",
    topicId: "aps-anova",
    co: "CO5",
    marks: "12 marks",
    frequency: "High priority",
    title: "One-way ANOVA — three advertisements",
    statement:
      "Sales under three adverts — A: 12, 14, 13; B: 10, 11, 9; C: 8, 9, 7. Test at 5% whether mean sales differ.",
    code: `Group sums/means:  A: 39, mean 13   B: 30, mean 10   C: 24, mean 8
Grand total = 93,  N = 9,  grand mean = 10.333,  k = 3.
H0: μA = μB = μC

SSB = 3(13−10.333)² + 3(10−10.333)² + 3(8−10.333)²
    = 3(7.111) + 3(0.111) + 3(5.444) = 38.0
SSW = 2 + 2 + 2 = 6
SST = 44

Source     SS    df   MS       F
Between    38     2   19.0     F = 19.0 / 1.0 = 19.0
Within      6     6    1.0
Total      44     8

F-critical F(2, 6) at 5% = 5.14
F = 19.0 > 5.14  ->  reject H0  ->  a significant difference in mean sales.`,
    explanation:
      "Identical machinery to the teaching-methods problem. The large F (19) reflects widely separated group means (13, 10, 8) against tiny within-group variation.",
  },
  {
    id: "pp-aps-anova-athletes",
    moduleId: "m5",
    topicId: "aps-anova",
    co: "CO5",
    marks: "12 marks",
    frequency: "Practice (GCR)",
    title: "ANOVA (repeated) — before / during / after training",
    statement:
      "Four athletes scored Before/During/After — A1: 5,6,7; A2: 6,7,8; A3: 4,5,6; A4: 5,6,7. Test at 5% whether the phase means differ.",
    code: `Treat the three phases as groups:
   Before: 5,6,4,5  (sum 20, mean 5)
   During: 6,7,5,6  (sum 24, mean 6)
   After : 7,8,6,7  (sum 28, mean 7)
Grand total = 72,  N = 12,  grand mean = 6,  k = 3.
H0: phase means are equal.

SSB = 4(5−6)² + 4(6−6)² + 4(7−6)² = 4 + 0 + 4 = 8
SSW = 2 + 2 + 2 = 6
SST = 14

Source     SS    df   MS       F
Between     8     2   4.000    F = 4.000 / 0.667 = 6.0
Within      6     9   0.667
Total      14    11

F-critical F(2, 9) at 5% = 4.26
F = 6.0 > 4.26  ->  reject H0  ->  scores differ significantly across phases.`,
    explanation:
      "Same one-way calculation with df = (2, 9). A full repeated-measures ANOVA would further split the within-group variation by athlete (making the test even more sensitive), but the one-way analysis already detects the rising trend 5 → 6 → 7.",
  },
];

const m5Questions: PredictedQuestion[] = [
  {
    id: "pq-aps-test-selection",
    moduleId: "m5",
    topicId: "aps-t-test",
    co: "CO5",
    marks: "5 marks",
    frequency: "High priority",
    question:
      "Compare the Z-test, t-test, F-test and ANOVA: what does each compare, and when is each used?",
    answer: `## Choosing the right test

| Test | Compares | Use when |
|---|---|---|
| **Z-test** | 1 or 2 means / proportions | large sample (n > 30) or σ known |
| **t-test** | 1 or 2 means | small sample (n < 30), σ unknown |
| **F-test** | 2 variances | comparing spreads (normal data) |
| **ANOVA** | 3 or more means | one factor, several groups |

## Quick decision guide

\`\`\`text
How many groups?
   1 or 2 means  ->  n > 30 ? Z-test : t-test
   2 variances   ->  F-test
   3+ means      ->  ANOVA  (F = MS_between / MS_within)
\`\`\`

## The t vs F look-alike (exam trap)

Two-sample data quoted as (n, mean, SD) → **t-test** (means given).
Data quoted as (n, SD) with **no means** → **F-test** (variances only).

**Tip:** the first thing to check is the sample size (Z vs t) and whether *means*
or only *variances* are supplied (t vs F).`,
  },
];

/* ----------------------------------------------------------------- assembly -- */

export const predictedQuestions: PredictedQuestion[] = [
  ...m1Questions,
  ...m2Questions,
  ...m3Questions,
  ...m4Questions,
  ...m5Questions,
];

export const predictedPrograms: PredictedProgram[] = [
  ...m1Programs,
  ...m2Programs,
  ...m3Programs,
  ...m4Programs,
  ...m5Programs,
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
