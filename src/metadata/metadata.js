module.exports = {
  name: 'Giuseppe Petrosino',
  title: 'Computer Scientist & Engineer',
  facts: {
    'home': 'Parma, Italy',
    'mail me': '<a href="mailto:parsleyjoe@gmail.com">parsleyjoe@gmail.com</a>'
  },
  descr: "",
  skills: [
    ['Kotlin', '++++'],
    ['Java', '++++'],
    ['C++', '+++'],
    ['macOS', '++++'],
    ['Android', '++++'],
    ['TypeScript', '++'],
  ],
  research: [
    {
      title: 'Jadescript',
      written: '2017 - now',
      badges: ['Agent-Oriented Programming', 'Programming Language Design', 'Java', 'Xtext'],
      contents: 'Jadescript is a novel programming language for _Multi Agent Systems_ (MASs) development for the [JADE Platform](https://jade.tilab.com/). Started in collaboration with [AI Lab](https://www.ailab.unipr.it) of University of Parma, this project aims to design an agent-oriented programming language. It also contemplates the implementation of a set of tools built in Java and the Xtext Framework to ease the development in this new language. This set of tools includes a compiler and an Eclipse IDE plugin. The language provides a new way of programming easily scalable, performant and intelligent distributed systems by encouraging the use of the behavioral agent model of computation, which defines a new paradigm to realize event-driven programming with asynchronous communication and naming/location transparency of processing nodes. The language is enriched by some advanced features like declarative pattern matching, expression type and variable declaration inferring, flow-sensitive typing, semantically relevant whitespace parsing _à la Python_.'
    },
    {
      title: 'ActoDatA',
      written: '2020 - now',
      badges: ['Actor-based programming', 'Data Analysis', 'Machine Learning', 'Java', 'Kotlin'],
      contents: 'ActoDatA (Actor Data Analysis) is a novel actor-based software library for Java and Kotlin, built on top of [ActoDeS](http://sowide.unipr.it/node/50), created in collaboration with [SoWIDE](http://sowide.unipr.it/en/node/1) research group. ActoDatA proposes a new design model oriented to the development of data analysis (DA) and machine learning (ML) applications, and it is specifically designed to lift some of the programmer’s burden when creating complex distributed DA and ML applications in Java and Kotlin. It does so by modeling distributed systems around the concepts of _acquirer_, _preprocessor_, _engine_, _controller_, _dataset manager_, _reporter_ and _master_ actors, which generalize and bring into the actor-based world some known concepts from other widely adopted distributed DA and ML technologies.'
    },
    {
      title: 'SmcGP-Islands',
      written: '2021 - now',
      badges: ['Genetic programming', 'Evolutionary Computing', 'Machine learning'],
      contents: 'SmcGP-Islands is an ensemble machine learning system used to evolve efficient classifiers of low-resolution binary images of characters. Its name comes from _Sub-machine code_ (Smc, i.e., a technique that uses the intrinsic parallelism of bitwise low-level instructions in modern CPUs to significantly increase computation speed), _Genetic Programming_ (GP, i.e., an evolutionary computation paradigm where individuals that encode LISP-like programs are iteratively improved by evaluating their _fitnesses_, _selecting_ the fittest individuals and generating new populations via _crossover_ and _mutation_ operations) and the Island Model (it organizes the evolution of individuals in isolated sub-populations in which migratory phenomena can occur between iterations, in order to decrease execution time and better explore the solution space in an optimization problem).'
    }
  ],
  experience: [
    {
      header: 'Short Research Fellow @ Future Technology Lab (University of Parma)',
      contents: 'mar 2021 - now'
    },
    {
      header: 'Department student tutor for "Programming Fundamentals A+B" and "Algorithms and Data Structures 1" @ Dpt. of Mathematical, Physical and Computer Sciences',
      contents: '4 semesters, 2018 - 2020'
    },
  ],
  papers: [
    {
      title: 'Island Model in ActoDatA: an actor-based Implementation of a classical Distributed Evolutionary Computation Paradigm',
      when: 'in 2021 Genetic and Evolutionary Computation Conference Companion (GECCO ’21 Companion)',
      authors: 'G. Petrosino, F. Bergenti, G. Lombardo, M. Mordonini, A. Poggi, M. Tomaiuolo, S. Cagnoni',
      meta: '_ACM Press_'
    },
    {
      title: 'Exploratory Experiments on Programming Autonomous Robots in Jadescript',
      when: 'in Procs. AREA 2020',
      authors: 'E. Iotti, G. Petrosino, S. Monica, F. Bergenti',
      // language=Markdown
      meta: ' '
    },
    {
      title: 'Two Agent-Oriented Programming Approaches Checked Against a Coordination Problem',
      when: 'in Procs. DCAI 2020',
      authors: 'E. Iotti, G. Petrosino, S. Monica, F. Bergenti',
      // language=Markdown
      meta: '_Advances in Intelligent Systems and Computing_, Springer'
    },
    {
      title: 'Extending Message Handlers with Pattern Matching in the Jadescript Programming Language',
      when: 'in Procs. 20th Workshop ”From Objects to Agents” WOA 2019',
      authors: 'G. Petrosino, F. Bergenti',
      // language=Markdown
      meta: '_CEUR Workshop Proceedings_'
    },
    {
      title: 'A Scripting Language for Practical Agent-Oriented Programming',
      when: 'in Procs. AGERE! 2018',
      authors: 'F. Bergenti, S. Monica, G. Petrosino',
      // language=Markdown
      meta: '_ACM Press_'
    },
    {
      title: 'An Introduction to the Major Features of a Scripting Language for JADE Agents',
      when: 'in Procs. AI*IA 2018 - Main Track',
      authors: 'G. Petrosino, F. Bergenti',
      // language=Markdown
      meta: '_Advances in Artificial Intelligence, Springer_'
    },
    {
      title: 'Overview of a Scripting Language for JADE-Based Multi-Agent Systems',
      when: 'in Procs. 19th Workshop ”From Objects to Agents” WOA 2020',
      authors: 'F. Bergenti, G. Petrosino',
      // language=Markdown
      meta: '_CEUR Workshop Proceedings_'
    },
  ]
};
