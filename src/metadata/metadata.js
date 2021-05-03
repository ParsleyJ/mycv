module.exports = {
  name: 'Giuseppe Petrosino',
  title: 'Computer Scientist & Engineer',
  facts: {
    'home': 'Parma, Italy',
    'mail': '<a href="mailto:parsleyjoe@gmail.com">parsleyjoe@gmail.com</a>',
    'text': '<a href="https://t.me/parsleyjoe">Telegram</a>'
  },
  skills: [
    'Kotlin',
    'Java',
    'C++',
    'macOS',
    'Android',
    'TypeScript',
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
      contents: 'SmcGP-Islands is an ensemble machine learning system used to evolve efficient classifiers of low-resolution binary images of characters. Its name comes from _Sub-machine code_ (Smc, i.e., a technique that uses the intrinsic parallelism of bitwise low-level instructions in modern CPUs to significantly increase computation speed), _Genetic Programming_ (GP, i.e., an evolutionary computation paradigm where individuals that encode LISP-like programs are iteratively improved by evaluating their _fitnesses_, _selecting_ the fittest individuals and generating new populations via _crossover_ and _mutation_ operations) and the Island Model (it organizes the evolution of individuals in isolated sub-populations in which migratory phenomena can occur between iterations, in order to decrease execution time and better explore the solution space in an optimization problem). Several versions of the system were created and compared, one of which was created with ActoDatA.'
    }
  ],
  experience: [
    {
      header: 'Short Research Fellow @ Future Technology Lab (University of Parma)',
      contents: 'mar 2021 - now'
    },
    {
      header: 'Department student Tutor for "Programming Fundamentals A+B" and "Algorithms and Data Structures 1" @ Dpt. of Mathematical, Physical and Computer Sciences',
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
  ],
  education:[
    {
      // language=Markdown
      title: 'M.Sc. in Computer Engineering (cum laude)',
      at: 'University of Parma (Academic Year 2019-20)'
    },
    {
      // language=Markdown
      title: 'B.Sc. in Computer Science',
      at: 'University of Parma (Academic Year 2017-18)'
    },
    {
      // language=Markdown
      title: 'High School Diploma (Maturità Scientifica)',
      at: 'Liceo Publio Virgilio Marone (Vico del Gargano) (School Year 2011-12)'
    }
  ],
  otherProjects:[
    {
      title:'ArUcoSLAM-Android',
      when:'August 2020',
      badges:['Android', 'Computer Vision', 'JNI', 'Kotlin', 'C++', 'Java', 'OpenCV'],
      content:'An Android app that implements a SLAM system (Simultaneous Localization And Mapping) using ArUco markers and computer vision. The camera acquires frames that are processed in real time. By analyzing the perspective of the marker images that appear on each frame, relative 3D poses of the markers and of the phone camera are estimated. The app saves new discovered markers in memory, and uses all the discovered markers to continue to detect the pose of the phone while it moves away from the old markers. A 3D map with a view from the top is rendered on the right-bottom corner, which displays the pose of the camera, the poses of the markers, and a track which represents an approximation of the history of the positions of the phone. A complex data analysis system performs real time checks on new detected phone poses (by taking into account how such an estimate is computed, along with the history of the previous poses) and ensures that only valid estimates are considered, while invalid estimates (in red) are discarded. Written in Kotlin, Java and C++. Image processing and computer vision tasks are implemented with the help of OpenCV native libraries loaded by the Java runtime via JNI. To ensure good performances and responsiveness, the processing of the stream of frames is parallelized by using workers that run on Kotlin\'s coroutines, which are launched on the Android main background dispatcher. Moreover, all big data structures (like the openCV Mat objects that contain the frames) are recycled for each worker, to avoid heavy allocation jobs and GC invocations as most as possible.',
      media:'![](arucoslam1.gif)',
      url:'https://github.com/ParsleyJ/ArUcoSLAM-Android'
    },
    {
      title:'LogKomoTiv',
      when:'September 2020',
      badges: ['Logic Programming', 'Kotlin', 'DSL'],
      content:'A Kotlin Multiplatform Logic Programming DSL Library, which allows to write logic-programming-style declarative rules and query a knowledge base, directly in Kotlin. Since it\'s _pure_ Kotlin, it can be used as common library in a Multiplatform project, so it can used it on the JVM, on Android, compiled to binary code, executed in the browser.',
      media:'',
      url:'https://github.com/ParsleyJ/LogKomoTiv'
    },
    {
      title:'Simple-rules',
      when:'June 2020',
      badges: ['Rule-based programming', 'Java'],
      content: 'A simple rule engine and symbolic forward reasoning library, written in Java. This library can be used to write Java software that make use of symbolic reasoning to solve problems and to be reactive to the environment. This library provides a set of classes and methods that can be used to build knowledge bases with declarative rules. Feed the reasoning engine with structured knowledge and watch it automatically draw conclusions and react to events, using the power of sound logical inference by forward-chaining and unification.',
      media:'',
      url:'https://github.com/ParsleyJ/simple-rules'
    },
    {
      title:'CLIptic',
      when:'July 2020',
      badges: ['macOS', 'Swift'],
      content: 'CLIptic is a command line utility for macOS 10.14 that triggers haptic feedback on MacBook (for fource-touch enabled trackpads). Written in Swift. Ideal to provide haptic feedback to system events, using other tools (like Hammerspoon or Automator).',
      media:'',
      url:'https://github.com/ParsleyJ/CLIptic'
    }
  ],
  lastBook:{
    title:'Why Everyone (else) Is a Hypocrite',
    by:'Robert Kurzban',
    summary:'The author advances the theory of the _modular mind_, i.e., human minds are made of concurrent and, sometimes, conflicting modules that are evolved to efficiently fulfill very simple tasks. He provides a series of anecdotes based on studies in evolutionary psychology, and argues that if we think our mind as an administration team, then the parts of our brain that we _feel_ as _our selves_ are more similar to a Press Secretary than to a President.'
  }
};
