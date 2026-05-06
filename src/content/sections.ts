import type { PageType, Section } from './types'

type SectionSeed = {
  id: string
  title: string
  subtitle: string
  cluster: string
  clusterOrder: number
  sectionOrder: number
  studentProblem: string
  sectionPurpose: string
  pageType: PageType
  body?: Section['body']
  glossaryTerms?: string[]
  relatedTools?: string[]
  relatedSections?: string[]
}

const sectionSeeds: SectionSeed[] = [
 {
  id: 'start-here-what-vitalnotes-is',
  title: 'Start Here - What VitalNotes Is',
  subtitle: 'A guide for learning paramedicine with more structure and less noise.',
  cluster: '00 Start Here',
  clusterOrder: 0,
  sectionOrder: 0,
  studentProblem:
    'I am trying to get through paramedic school, but I do not always understand why studying, labs, scenarios, and OSCEs feel so difficult.',
  sectionPurpose:
    'Introduce VitalNotes as a student-facing learning guide that helps paramedic students understand how learning behaves in this field and how to build better systems for studying, reasoning, practicing, reflecting, and performing.',
  pageType: 'orientation',
  body: [
    {
      type: 'paragraph',
      text: 'Paramedic school is hard, but not always in the way students expect.',
    },
    {
      type: 'paragraph',
      text: 'Most students know there will be a lot to learn. The workload is obvious enough from the beginning: medications, directives, anatomy, physiology, assessments, scenarios, OSCEs, documentation, placement expectations, and everything else that gets layered on as the program moves forward. Nobody really enters the field thinking it will be light.',
    },
    {
      type: 'paragraph',
      text: 'What tends to catch students off guard is not just the amount of information. It is how unreliable that information can feel once it has to be used.',
    },
    {
      type: 'paragraph',
      text: 'A student can understand something while studying and still struggle to reach it during a scenario. They can explain a directive on paper, then hesitate when the patient in front of them does not fit the clean version they had in mind. They can perform well one week and then feel strangely behind the next, even though they did not suddenly become less capable.',
    },
    {
      type: 'paragraph',
      text: 'That is usually where the frustration lives. It is not only the mistake itself. It is not knowing what the mistake means. Was it a knowledge gap? Was it nerves? Was it poor preparation? Was it just a bad day? Or was something else happening in the way the student was trying to learn, organize, and use the material?',
    },
    {
      type: 'paragraph',
      text: 'VitalNotes is built for that space.',
    },
    {
      type: 'paragraph',
      text: 'This is a guide for learning paramedicine in a way that holds up better when things are moving. It does not replace class, lab, placement, instructors, feedback, repetition, or the basic responsibility of doing the work. Those things still matter. The goal here is to make the work clearer, so effort has somewhere useful to go.',
    },
    {
      type: 'heading',
      text: 'The problem this guide is trying to solve',
    },
    {
      type: 'paragraph',
      text: 'A common student experience looks something like this: you study the content, review the slides, make notes, go over the directive, and feel reasonably prepared. Then the scenario starts, and the room changes the task.',
    },
    {
      type: 'paragraph',
      text: 'Now the patient is talking. Your partner needs information. The instructor is watching. You are trying to remember what comes next while also listening, assessing, deciding, communicating, and keeping the call moving. A few minutes later, something gets missed. Maybe it is a reassessment. Maybe it is a contraindication. Maybe it is a blood glucose. Maybe it is the fact that the patient is getting tired rather than improving.',
    },
    {
      type: 'paragraph',
      text: 'Afterward, in debrief, students often say some version of, “I knew that.”',
    },
    {
      type: 'paragraph',
      text: 'And often, they did.',
    },
    {
      type: 'paragraph',
      text: 'That is the important part. The knowledge may have been there, but it was not accessible enough, connected enough, or stable enough in the moment. If every problem like that is treated as a simple knowledge problem, the answer always becomes more studying. More rereading. More rewriting. More time at the desk. Sometimes that helps, but sometimes it just adds more material to a system that already has too little structure.',
    },
    {
      type: 'paragraph',
      text: 'VitalNotes starts from the assumption that learning problems deserve a more careful look before we prescribe more effort.',
    },
    {
      type: 'heading',
      text: 'What VitalNotes focuses on',
    },
    {
      type: 'paragraph',
      text: 'VitalNotes is about the learning behind the performance. Not in a generic study-skills way, and not in the abstract language students often hear when people talk about “learning how to learn.” The focus here is paramedicine, because paramedicine creates a specific kind of learning problem.',
    },
    {
      type: 'paragraph',
      text: 'You are not only learning information. You are learning how to act while information is incomplete. You are not only learning directives. You are learning how to understand what those directives are protecting when a patient is borderline, evolving, or messy. You are not only learning assessment structure. You are learning how to assess without letting assessment become a hiding place from decision-making.',
    },
    {
      type: 'paragraph',
      text: 'That is why this guide spends time on cognitive load, retrieval, meaning, Smart Notes, directives, clinical reasoning, pattern recognition, scenario days, OSCE preparation, pressure, and reflection. Those ideas can sound academic if they are handled poorly. Here, they are meant to be practical.',
    },
    {
      type: 'paragraph',
      text: 'Cognitive load is the moment your brain is trying to hold too much and something important falls away. Retrieval is whether you can bring knowledge back when the notes are closed and the scenario is moving. Meaning is the difference between knowing a list of findings and understanding what those findings are starting to suggest. Clinical reasoning is the process of building a working explanation and being willing to change it when the patient gives you a reason to. Reflection is taking something useful from performance without turning the whole call into a personal trial.',
    },
    {
      type: 'paragraph',
      text: 'The guide is interested in that usable layer. The place where studying, thinking, and performance meet.',
    },
    {
      type: 'heading',
      text: 'What this guide is not',
    },
    {
      type: 'paragraph',
      text: 'This guide is not here to make paramedic school easy. Some difficulty belongs in the process. The work matters too much to pretend otherwise.',
    },
    {
      type: 'paragraph',
      text: 'But there is a difference between useful difficulty and wasted difficulty.',
    },
    {
      type: 'paragraph',
      text: 'Useful difficulty makes you more capable. It helps you notice patterns, recover from mistakes, explain your decisions, and adjust the next time. Wasted difficulty burns time and confidence without changing much. Rereading the same notes without testing recall, rewriting slides into cleaner pages, memorizing directives without understanding their purpose, finishing a scenario with ten vague lessons and no clear next step, or calling every mistake a confidence problem can all feel responsible while still failing to move learning forward.',
    },
    {
      type: 'paragraph',
      text: 'VitalNotes is not against hard work. It is against work that has no direction.',
    },
    {
      type: 'heading',
      text: 'How to approach it',
    },
    {
      type: 'paragraph',
      text: 'You do not need to figure out the whole guide right away.',
    },
    {
      type: 'paragraph',
      text: 'VitalNotes can be read in order, but it can also be entered through the problem you are actually having. Some students will arrive here because scenarios keep falling apart. Some will come because OSCEs make them rush. Some will come because their notes are large, organized, and still not very useful.',
    },
    {
      type: 'paragraph',
      text: 'That is fine.',
    },
    {
      type: 'paragraph',
      text: 'The next page will show you how to move through the guide without turning it into another thing you feel behind on.',
    },
    {
      type: 'heading',
      text: 'The larger idea',
    },
    {
      type: 'paragraph',
      text: 'Paramedicine asks learning to travel. It starts in class, but it cannot stay there. It has to move into labs, scenarios, OSCEs, placement, and eventually real patient care. It has to be available when you are tired, watched, interrupted, uncertain, or wrong about your first impression.',
    },
    {
      type: 'paragraph',
      text: 'That kind of learning takes some structure. It depends on how you study, how you retrieve, how you organize ideas, how you practice, how you respond to feedback, and how you recover when thinking narrows.',
    },
    {
      type: 'paragraph',
      text: 'That is the work VitalNotes is trying to make clearer.',
    },
  ],
  glossaryTerms: [
    'cognitive-load',
    'retrieval-practice',
    'clinical-reasoning',
    'reflection',
    'performance-under-pressure',
    'directive-intent',
    'pattern-recognition',
  ],
  relatedSections: [
    'how-to-use-this-guide',
    'where-to-begin',
    'cognitive-load',
  ],
},
 {
  id: 'how-to-use-this-guide',
  title: 'How to Use This Guide',
  subtitle: 'A light orientation for moving through the learning path.',
  cluster: '00 Start Here',
  clusterOrder: 0,
  sectionOrder: 1,
  studentProblem:
    'I want help with my learning, but I do not want this guide to become another thing I feel behind on.',
  sectionPurpose:
    'Show students how to move through VitalNotes in a practical, flexible way, either by following the learning path or entering through the problem they are currently experiencing.',
  pageType: 'orientation',
  body: [
    {
      type: 'paragraph',
      text: 'Use this guide lightly at first.',
    },
    {
      type: 'paragraph',
      text: 'That may sound strange, but it is important. Paramedic students already have enough material pressing on them: lectures, labs, directives, skills, scenarios, OSCEs, placement expectations, and feedback that can be hard to sort through afterward. VitalNotes only helps if it gives some shape to that work. If it becomes another thing you feel behind on, then we have built the wrong thing.',
    },
    {
      type: 'paragraph',
      text: 'You do not need to read every section before it becomes useful. You do not need to build every tool. You do not need to turn this into a new productivity system. The first goal is much smaller than that: understand one part of your learning more clearly, then make one useful adjustment.',
    },
    {
      type: 'paragraph',
      text: 'For most students, that is enough to begin.',
    },
    {
      type: 'heading',
      text: 'Two ways through the guide',
    },
    {
      type: 'paragraph',
      text: 'There are two basic ways to use VitalNotes.',
    },
    {
      type: 'paragraph',
      text: 'The first is to move through it in order. This works well if you want the full arc of the guide. The early sections explain why learning can feel unstable in paramedic school. They look at cognitive load, memory, meaning, and how knowledge behaves when pressure increases. Later sections move closer to clinical reasoning, scenarios, OSCEs, reflection, and tools.',
    },
    {
      type: 'paragraph',
      text: 'That order matters because the guide is trying to build a foundation before asking you to change your habits. If you understand why something is happening, the practical advice later tends to make more sense.',
    },
    {
      type: 'paragraph',
      text: 'The second way is to enter through the problem you are actually having. This is often the more realistic option.',
    },
    {
      type: 'paragraph',
      text: 'If scenarios keep falling apart, you may not need a full tour of the guide right away. You may need to understand cognitive load, retrieval, and how scenario days expose thinking under pressure. If your notes are organized but not useful, you may need Smart Notes and the sections on building understanding. If OSCEs make you rush, you may need the performance and pressure sections sooner.',
    },
    {
      type: 'paragraph',
      text: 'Most students will probably use both approaches at different times, and that is fine. Reading in order gives you the structure. Entering through a problem gives you help where the friction is highest.',
    },
    {
      type: 'heading',
      text: 'Do not treat every section the same way',
    },
    {
      type: 'paragraph',
      text: 'Some sections are meant to orient you. They explain what is happening underneath your learning. These sections are worth reading carefully, but they do not always require you to do something immediately.',
    },
    {
      type: 'paragraph',
      text: 'Other sections are more practical. They may introduce a workflow, a tool, or a way to approach feedback, notes, retrieval, or reflection. Those sections are meant to be used, but still not all at once.',
    },
    {
      type: 'paragraph',
      text: 'It is easy to turn good advice into too much advice.',
    },
    {
      type: 'paragraph',
      text: 'If a section gives you three useful ideas, resist the urge to turn all three into tasks for tomorrow. Choose the one that actually connects to a problem you are seeing in your learning. A small adjustment that gets used is better than a complete system that collapses by next week.',
    },
    {
      type: 'paragraph',
      text: 'That is especially true in paramedic school, where busy weeks are normal and motivation is not always steady.',
    },
    {
      type: 'heading',
      text: 'What to do when something feels familiar',
    },
    {
      type: 'paragraph',
      text: 'As you read, some sections may describe something you have already experienced.',
    },
    {
      type: 'paragraph',
      text: 'You may recognize the feeling of knowing something but not being able to retrieve it during a scenario. You may recognize the habit of rereading notes because it feels productive. You may recognize the way directives can start to feel like traps instead of supports. You may recognize the urge to replay a bad scenario long after it has ended.',
    },
    {
      type: 'paragraph',
      text: 'When that happens, slow down a little.',
    },
    {
      type: 'paragraph',
      text: 'Not dramatically. Just enough to ask what the section is helping you name.',
    },
    {
      type: 'paragraph',
      text: 'A useful question is:',
    },
    {
      type: 'paragraph',
      text: 'What part of my learning does this explain?',
    },
    {
      type: 'paragraph',
      text: 'That question keeps the guide practical. It moves the section from something you read into something you can use. You are not trying to collect insights. You are trying to understand what needs to change in how you study, practice, think, or reflect.',
    },
    {
      type: 'heading',
      text: 'How to use tools and popups',
    },
    {
      type: 'paragraph',
      text: 'Some sections will have tools, templates, or short workflows attached to them. These are meant to support the reading, not interrupt it.',
    },
    {
      type: 'paragraph',
      text: 'A tool should give you a small structure you can return to. For example, a Smart Note template may help you turn a confusing concept into something usable. A reflection tool may help you take one lesson from a scenario without replaying the entire call. A clinical reasoning check may help you pause when you are waiting too long for certainty.',
    },
    {
      type: 'paragraph',
      text: 'Use tools when they solve a problem you actually have. Leave them alone when they do not.',
    },
    {
      type: 'paragraph',
      text: 'The same goes for glossary popups. If a term is familiar, keep reading. If a term is getting in the way, open the popup, get the plain-language explanation, and continue. The glossary is there to reduce friction, not to send you down another rabbit hole.',
    },
    {
      type: 'heading',
      text: 'How not to use this guide',
    },
    {
      type: 'paragraph',
      text: 'The guide becomes less useful when it turns into another project to manage.',
    },
    {
      type: 'paragraph',
      text: 'That can happen quietly. You read too many sections in one sitting. You collect tools without using them. You decide that this is the week you are going to rebuild your entire study life. For a few days, that can feel productive. Then the normal pressure of the program returns, and the system collapses under its own weight.',
    },
    {
      type: 'paragraph',
      text: 'It is better to use one piece well than to collect five pieces you never return to.',
    },
    {
      type: 'paragraph',
      text: 'One section might change how you review before scenarios. One reflection structure might help you leave lab with a clearer next step. One explanation might help you stop treating every mistake as proof that you are behind. That is enough usefulness for a guide like this.',
    },
    {
      type: 'heading',
      text: 'A simple way to move forward',
    },
    {
      type: 'paragraph',
      text: 'If you are not sure where to begin, start with the first few sections in order.',
    },
    {
      type: 'paragraph',
      text: 'Read the opening material, then move into cognitive load. That will give you language for why learning can feel harder in labs and scenarios than it does while studying. From there, you can move into notes, retrieval, meaning, and the sections that connect learning to performance.',
    },
    {
      type: 'paragraph',
      text: 'If you already know what is bothering you, use the next page instead.',
    },
    {
      type: 'paragraph',
      text: 'The next section will help you choose a starting point based on the problem you are actually experiencing right now.',
    },
  ],
  glossaryTerms: [
    'learning-path',
    'cognitive-load',
    'retrieval-practice',
    'reflection',
  ],
  relatedSections: [
    'start-here-what-vitalnotes-is',
    'where-to-begin',
    'cognitive-load',
    'smart-notes-for-paramedic-students',
    'retrieval-and-spaced-learning',
  ],
},
{
  id: 'where-to-begin',
  title: 'Where to Begin',
  subtitle: 'Start with the problem you recognize.',
  cluster: '00 Start Here',
  clusterOrder: 0,
  sectionOrder: 2,
  studentProblem:
    'I know I want to improve how I learn, but I am not sure where to start or which part of VitalNotes applies to my current problem.',
  sectionPurpose:
    'Help students choose a starting point in VitalNotes based on the learning problem they are actually experiencing, while still allowing them to follow the guide in order if they prefer.',
  pageType: 'entry-point',
  body: [
    {
      type: 'paragraph',
      text: 'If you are not sure where to start, do not overthink the order yet. Start with the problem that sounds most like what is happening to you right now.',
    },
    {
      type: 'paragraph',
      text: 'Most students do not arrive at a guide like this with a neat learning goal. They arrive because something is bothering them. Scenarios are not going the way they expected. Notes are piling up. OSCEs are getting closer. Feedback is starting to repeat. They are working, but the work does not feel like it is turning into steadier performance.',
    },
    {
      type: 'paragraph',
      text: 'That is enough of a starting point.',
    },
    {
      type: 'paragraph',
      text: 'You do not need to diagnose your whole learning system before you begin. You just need to notice where the friction is highest right now, then choose the closest doorway into the guide.',
    },
    {
      type: 'heading',
      text: 'If you study, but blank in scenarios',
    },
    {
      type: 'paragraph',
      text: 'Start with Cognitive Load.',
    },
    {
      type: 'paragraph',
      text: 'This is one of the most common student problems in paramedic school. You review the material, understand it while studying, and then lose access to it when the scenario starts moving. That does not always mean you failed to study enough. It may mean your working memory is overloaded, your recall has not been trained far enough away from the notes, or your assessment structure is not yet stable enough to hold under pressure.',
    },
    {
      type: 'paragraph',
      text: 'From there, move toward Retrieval and Spaced Learning. That section will help explain why rereading can feel productive while still failing to prepare you for the moment when you actually need to bring the information back.',
    },
    {
      type: 'heading',
      text: 'If your notes are organized, but not useful',
    },
    {
      type: 'paragraph',
      text: 'The best first stop is Smart Notes for Paramedic Students.',
    },
    {
      type: 'paragraph',
      text: 'Many students have notes that look responsible. They are highlighted, sorted, rewritten, and saved in the right folders. The problem is that those notes often store information without helping the student think with it.',
    },
    {
      type: 'paragraph',
      text: 'During a scenario, the issue is rarely whether the information exists somewhere. The issue is whether it has been organized in a way that supports recognition, explanation, and decision-making.',
    },
    {
      type: 'paragraph',
      text: 'After that, Meaning Before Memorization will help you shift from collecting facts to building connections between ideas.',
    },
    {
      type: 'heading',
      text: 'If you know facts, but cannot connect them during calls',
    },
    {
      type: 'paragraph',
      text: 'Begin with Meaning Before Memorization.',
    },
    {
      type: 'paragraph',
      text: 'This is the student who knows the pieces, but cannot always make them form a useful shape. In paramedicine, that matters because patients rarely present as clean textbook categories. You need relationships between findings, mechanisms, risks, and decisions.',
    },
    {
      type: 'paragraph',
      text: 'Once that starts to make sense, move toward Pathophysiology Through Patterns and Clinical Reasoning. Those sections help you think less in isolated labels and more in working explanations.',
    },
    {
      type: 'heading',
      text: 'If directives make you hesitate',
    },
    {
      type: 'paragraph',
      text: 'Start with Directives Through Purpose.',
    },
    {
      type: 'paragraph',
      text: 'Directives can feel heavy because they are tied to safety, scope, evaluation, and consequences. Many students respond by trying to memorize every line perfectly. Precision matters, but memorization alone can make students freeze when the patient is borderline, evolving, or not matching the clean version they expected.',
    },
    {
      type: 'paragraph',
      text: 'This section helps you understand directives as decision supports, not just rules to survive.',
    },
    {
      type: 'paragraph',
      text: 'From there, Clinical Reasoning will help connect directive decisions to the larger problem of acting safely when certainty is incomplete. The goal is not to become casual with directives. The goal is to understand what they are protecting so your decisions become more grounded.',
    },
    {
      type: 'heading',
      text: 'If scenarios keep exposing the same mistakes',
    },
    {
      type: 'paragraph',
      text: 'Go to Scenario Days as Learning Tools.',
    },
    {
      type: 'paragraph',
      text: 'Repeated mistakes can feel discouraging, especially when they happen in front of instructors or classmates. But repeated errors are often information. They show where your learning system is predictable under pressure.',
    },
    {
      type: 'paragraph',
      text: 'Maybe reassessment drops after the first intervention. Maybe transport decisions lag. Maybe you keep waiting for certainty before naming risk. Maybe you focus so hard on one task that the larger call starts drifting away from you.',
    },
    {
      type: 'paragraph',
      text: 'Scenario work becomes more useful when you stop treating each run as a separate judgment and start looking for patterns.',
    },
    {
      type: 'paragraph',
      text: 'After that, Common Errors and What They Reveal and The Five Whys can help you turn feedback into something smaller and more usable.',
    },
    {
      type: 'heading',
      text: 'If OSCEs make you rush or freeze',
    },
    {
      type: 'paragraph',
      text: 'Start with OSCE Preparation.',
    },
    {
      type: 'paragraph',
      text: 'OSCEs change how thinking feels. You are being watched. Time is visible. The scenario has stakes. Even students who know the material can find themselves moving too quickly, skipping checks, over-explaining, or getting stuck trying to do the perfect assessment.',
    },
    {
      type: 'paragraph',
      text: 'OSCE preparation is not about becoming flawless. It is about keeping enough structure available that stress does not take over the call.',
    },
    {
      type: 'paragraph',
      text: 'After that, Performance Under Pressure will help explain why pressure changes access to knowledge and what kind of structure tends to hold up better than confidence alone.',
    },
    {
      type: 'heading',
      text: 'If feedback stays with you too long',
    },
    {
      type: 'paragraph',
      text: 'Begin with Reflection Without Journaling, then use The Five Whys if you need a more structured way to trace the problem back to something actionable.',
    },
    {
      type: 'paragraph',
      text: 'Some students do not ignore feedback. They do the opposite. They carry it around for the rest of the day, replay the scenario, and try to turn the whole thing into a lesson. That can feel responsible, but it often becomes too broad to be useful.',
    },
    {
      type: 'paragraph',
      text: 'Good reflection is smaller than that. It usually starts with one moment, one decision, or one pattern. From there, the goal is to identify what you would notice or do differently next time.',
    },
    {
      type: 'heading',
      text: 'If you cannot tell whether you are improving',
    },
    {
      type: 'paragraph',
      text: 'Start with Scenario Days as Learning Tools.',
    },
    {
      type: 'paragraph',
      text: 'Improvement in paramedic school does not always feel smooth. Sometimes it looks messy because you are adding new layers: communication, prioritization, directives, reassessment, transport thinking, and clinical reasoning. You may feel less polished for a while because your learning is reorganizing.',
    },
    {
      type: 'paragraph',
      text: 'That can be frustrating if you only judge improvement by how good one scenario felt.',
    },
    {
      type: 'paragraph',
      text: 'A better question is whether your recovery is improving. Are you noticing problems sooner? Are you repeating the same mistake unchanged, or does it shift after feedback? Are you starting to name risk earlier, even if the call still feels awkward?',
    },
    {
      type: 'paragraph',
      text: 'Those are signs worth watching.',
    },
    {
      type: 'heading',
      text: 'If none of these fit perfectly',
    },
    {
      type: 'paragraph',
      text: 'Most learning problems overlap, so it is normal if none of these fit perfectly.',
    },
    {
      type: 'paragraph',
      text: 'A scenario issue might involve cognitive load, weak retrieval, unclear meaning, directive anxiety, and pressure all at once. You do not need to separate those perfectly before starting.',
    },
    {
      type: 'paragraph',
      text: 'Choose the section that feels closest to the problem you are having. Read enough to understand what it is naming. Then make one small adjustment.',
    },
    {
      type: 'paragraph',
      text: 'That is usually better than trying to fix the whole system at once.',
    },
    {
      type: 'heading',
      text: 'If you want the intended order',
    },
    {
      type: 'paragraph',
      text: 'If you would rather move through the guide in order, start with Cognitive Load.',
    },
    {
      type: 'paragraph',
      text: 'That section gives the first foundation for the rest of VitalNotes. It explains why capable students can lose track of simple things when assessment, communication, memory, and decision-making all compete for attention. Once that makes sense, the later sections are easier to place.',
    },
  ],
  glossaryTerms: [
    'cognitive-load',
    'working-memory',
    'retrieval-practice',
    'smart-notes',
    'directive-intent',
    'clinical-reasoning',
    'reflection',
    'performance-under-pressure',
  ],
  relatedSections: [
    'start-here-what-vitalnotes-is',
    'how-to-use-this-guide',
    'cognitive-load',
    'retrieval-and-spaced-learning',
    'smart-notes-for-paramedic-students',
    'meaning-before-memorization',
    'directives-through-purpose',
  ],
},
  {
    id: 'cognitive-load',
    title: 'Cognitive Load',
    subtitle: 'Why learning can fall apart when too much competes for attention.',
    cluster: '01 Why Learning Feels Hard',
    clusterOrder: 1,
    sectionOrder: 0,
    studentProblem:
      'Students may know the material in calm study conditions but lose access during labs, scenarios, or OSCEs.',
    sectionPurpose:
      'Explain overload as a structural learning problem, not a personal failure.',
    pageType: 'conceptual',
    glossaryTerms: ['cognitive-load', 'working-memory', 'structure'],
    relatedSections: [
      'why-studying-feels-productive-but-fails-under-pressure',
      'learning-strain-is-not-always-a-personal-problem',
    ],
  },
  {
    id: 'why-studying-feels-productive-but-fails-under-pressure',
    title: 'Why Studying Feels Productive But Fails Under Pressure',
    subtitle: 'Recognition is not the same as usable access.',
    cluster: '01 Why Learning Feels Hard',
    clusterOrder: 1,
    sectionOrder: 1,
    studentProblem:
      'Students often review notes until material feels familiar, then discover they cannot use it when the situation changes.',
    sectionPurpose:
      'Help students distinguish passive familiarity from recall, transfer, and clinical use.',
    pageType: 'conceptual',
    glossaryTerms: ['recognition', 'retrieval-practice', 'transfer'],
    relatedSections: ['cognitive-load', 'retrieval-and-spaced-learning'],
  },
  {
    id: 'learning-strain-is-not-always-a-personal-problem',
    title: 'Learning Strain Is Not Always a Personal Problem',
    subtitle: 'Difficulty can come from the system, not the student.',
    cluster: '01 Why Learning Feels Hard',
    clusterOrder: 1,
    sectionOrder: 2,
    studentProblem:
      'Students can misread strain as weakness, lack of discipline, or proof they are not suited to paramedicine.',
    sectionPurpose:
      'Separate useful difficulty from avoidable overload and help students respond more accurately to learning strain.',
    pageType: 'conceptual',
    glossaryTerms: ['cognitive-load', 'metacognition'],
    relatedSections: ['cognitive-load', 'meaning-before-memorization'],
  },
  {
    id: 'meaning-before-memorization',
    title: 'Meaning Before Memorization',
    subtitle: 'Facts become usable when they are connected.',
    cluster: '02 Build Understanding',
    clusterOrder: 2,
    sectionOrder: 0,
    studentProblem:
      'Students may collect facts, definitions, and rules without building the meaning needed to use them clinically.',
    sectionPurpose:
      'Show how understanding grows from relationships between ideas, mechanisms, and consequences.',
    pageType: 'conceptual',
    glossaryTerms: ['meaning', 'schema', 'clinical-reasoning'],
    relatedSections: ['pathophysiology-through-patterns', 'directives-through-purpose'],
  },
  {
    id: 'pathophysiology-through-patterns',
    title: 'Pathophysiology Through Patterns',
    subtitle: 'Use mechanisms to stay oriented when presentations are unclear.',
    cluster: '02 Build Understanding',
    clusterOrder: 2,
    sectionOrder: 1,
    studentProblem:
      'Students often learn pathophysiology as isolated textbook content, then struggle to use it during changing clinical presentations.',
    sectionPurpose:
      'Help students organize physiology around mechanisms, patterns, compensation, deterioration, and clinical decisions.',
    pageType: 'conceptual',
    glossaryTerms: ['pathophysiology', 'pattern-recognition', 'schema'],
    relatedSections: ['meaning-before-memorization', 'directives-through-purpose'],
  },
  {
    id: 'directives-through-purpose',
    title: 'Directives Through Purpose',
    subtitle: 'Protocols are easier to apply when you understand what they protect.',
    cluster: '02 Build Understanding',
    clusterOrder: 2,
    sectionOrder: 2,
    studentProblem:
      'Students may memorize directives as fragile rules and hesitate when presentations are borderline, incomplete, or changing.',
    sectionPurpose:
      'Reframe directives as decision-support tools that manage risk within clear boundaries.',
    pageType: 'tool-supported',
    glossaryTerms: ['directive', 'contraindication', 'reassessment'],
    relatedTools: ['directive-meaning-check'],
    relatedSections: ['meaning-before-memorization', 'clinical-recall-without-trivia'],
  },
  {
    id: 'smart-notes-for-paramedic-students',
    title: 'Smart Notes for Paramedic Students',
    subtitle: 'Notes should support thinking, not just store information.',
    cluster: '03 Build Usable Notes',
    clusterOrder: 3,
    sectionOrder: 0,
    studentProblem:
      'Students often have many notes, but those notes do not help them reason during scenarios or pressure.',
    sectionPurpose:
      'Introduce Smart Notes as a practical way to build reusable clinical understanding.',
    pageType: 'tool-supported',
    glossaryTerms: ['smart-notes', 'working-notes', 'cognitive-load'],
    relatedTools: ['smart-note-template'],
    relatedSections: ['types-of-notes-and-idea-maturation', 'obsidian-for-learning-paramedicine'],
  },
  {
    id: 'types-of-notes-and-idea-maturation',
    title: 'Types of Notes and Idea Maturation',
    subtitle: 'Understanding changes, and your notes need room to change with it.',
    cluster: '03 Build Usable Notes',
    clusterOrder: 3,
    sectionOrder: 1,
    studentProblem:
      'Students can treat notes as final products instead of working surfaces that mature through scenarios, feedback, and comparison.',
    sectionPurpose:
      'Clarify capture notes, working notes, Smart Notes, and how ideas become more usable over time.',
    pageType: 'practical-system',
    glossaryTerms: ['capture-notes', 'working-notes', 'smart-notes'],
    relatedTools: ['smart-note-template'],
    relatedSections: ['smart-notes-for-paramedic-students', 'obsidian-for-learning-paramedicine'],
  },
  {
    id: 'obsidian-for-learning-paramedicine',
    title: 'Obsidian for Learning Paramedicine',
    subtitle: 'A simple workspace for connecting ideas without turning notes into a project.',
    cluster: '03 Build Usable Notes',
    clusterOrder: 3,
    sectionOrder: 2,
    studentProblem:
      'Students may overbuild note systems, spend too much time organizing, or confuse software setup with learning.',
    sectionPurpose:
      'Explain Obsidian as an optional lightweight workspace for connected learning.',
    pageType: 'practical-system',
    glossaryTerms: ['obsidian', 'smart-notes', 'links'],
    relatedTools: ['smart-note-template'],
    relatedSections: ['smart-notes-for-paramedic-students', 'types-of-notes-and-idea-maturation'],
  },
  {
    id: 'retrieval-and-spaced-learning',
    title: 'Retrieval and Spaced Learning',
    subtitle: 'Remembering improves when access is practiced over time.',
    cluster: '04 Build Recall',
    clusterOrder: 4,
    sectionOrder: 0,
    studentProblem:
      'Students may review repeatedly but avoid the uncomfortable work of recalling information without cues.',
    sectionPurpose:
      'Introduce retrieval and spacing as practical supports for durable access under pressure.',
    pageType: 'conceptual',
    glossaryTerms: ['retrieval-practice', 'spacing', 'recall'],
    relatedSections: ['clinical-recall-without-trivia', 'anki-for-paramedic-learning'],
  },
  {
    id: 'clinical-recall-without-trivia',
    title: 'Clinical Recall Without Trivia',
    subtitle: 'Recall should help you notice, decide, reassess, and explain.',
    cluster: '04 Build Recall',
    clusterOrder: 4,
    sectionOrder: 1,
    studentProblem:
      'Students can turn recall practice into isolated fact testing that does not transfer well to patient care.',
    sectionPurpose:
      'Shape recall around clinical use rather than trivia.',
    pageType: 'tool-supported',
    glossaryTerms: ['clinical-recall', 'retrieval-practice', 'transfer'],
    relatedTools: ['clinical-recall-prompt-builder'],
    relatedSections: ['retrieval-and-spaced-learning', 'anki-for-paramedic-learning'],
  },
  {
    id: 'anki-for-paramedic-learning',
    title: 'Anki for Paramedic Learning',
    subtitle: 'Use Anki to support recall, not to replace reasoning.',
    cluster: '04 Build Recall',
    clusterOrder: 4,
    sectionOrder: 2,
    studentProblem:
      'Students may use Anki as a flashcard platform without shaping prompts around clinical judgment or transfer.',
    sectionPurpose:
      'Clarify how Anki can support spaced recall while remaining secondary to understanding, reasoning, and practice.',
    pageType: 'tool-supported',
    glossaryTerms: ['anki', 'spacing', 'clinical-recall'],
    relatedTools: ['clinical-recall-prompt-builder'],
    relatedSections: ['retrieval-and-spaced-learning', 'clinical-recall-without-trivia'],
  },
]

export const sections: Section[] = sectionSeeds.map((section, index) => ({
  ...section,
  status: 'drafted',
  body: section.body ?? [
  {
    type: 'placeholder',
    text: `Placeholder body. Replace with approved Obsidian draft text for ${section.title}.`,
  },
],
  glossaryTerms: section.glossaryTerms ?? [],
  relatedTools: section.relatedTools ?? [],
  relatedSections: section.relatedSections ?? [],
  previous: sectionSeeds[index - 1]?.id ?? '',
  next: sectionSeeds[index + 1]?.id ?? '',
}))

export const getSectionById = (id: string) =>
  sections.find((section) => section.id === id)

export const firstSection = sections[0]

export const orderedSections = [...sections].sort((a, b) => {
  if (a.clusterOrder !== b.clusterOrder) {
    return a.clusterOrder - b.clusterOrder
  }

  return a.sectionOrder - b.sectionOrder
})