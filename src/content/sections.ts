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
    'I know the material, but I lose track of simple things during scenarios, labs, or OSCEs.',
  sectionPurpose:
    'Help students understand cognitive load as a normal part of paramedic learning, especially when assessment, communication, memory, decision-making, and procedures are all competing for attention.',
  pageType: 'conceptual',
  body: [
    {
      type: 'paragraph',
      text: 'There is a particular kind of frustration that shows up early in paramedic training.',
    },
    {
      type: 'paragraph',
      text: 'A student studies. They know the content well enough to explain it. They can talk through an assessment sequence, describe a directive, list relevant findings, and identify what they would probably do in a calm conversation.',
    },
    {
      type: 'paragraph',
      text: 'Then the scenario starts, and something simple disappears.',
    },
    {
      type: 'paragraph',
      text: 'Not something obscure. Not a rare contraindication hidden three layers deep. Something ordinary. A reassessment. A blood glucose. A second set of vitals. A question they meant to ask. A safety check they usually remember.',
    },
    {
      type: 'paragraph',
      text: 'Afterward, the student often says, “I don’t know why I forgot that. I knew it.”',
    },
    {
      type: 'paragraph',
      text: 'And most of the time, they are telling the truth.',
    },
    {
      type: 'paragraph',
      text: 'Cognitive load is one way to understand what happened.',
    },
    {
      type: 'heading',
      text: 'What cognitive load means here',
    },
    {
      type: 'paragraph',
      text: 'Cognitive load is the amount of mental work your brain is trying to manage at one time.',
    },
    {
      type: 'paragraph',
      text: 'That may sound simple, but in paramedicine the load builds quickly. You are rarely doing one thing. You are listening to the patient, watching their breathing, thinking about the scene, checking your partner’s progress, remembering a directive, deciding what matters now, and trying not to lose the overall direction of the call.',
    },
    {
      type: 'paragraph',
      text: 'Even in a lab, where the patient is simulated and the stakes are controlled, the mental task is still crowded.',
    },
    {
      type: 'paragraph',
      text: 'Your working memory can only hold and manipulate so much at once. When too many things compete for that limited space, performance starts to change. You may become more reactive. You may fixate on one task. You may stop hearing parts of the history. You may keep moving, but lose track of why you are moving.',
    },
    {
      type: 'paragraph',
      text: 'That is one way cognitive load shows up in performance.',
    },
    {
      type: 'paragraph',
      text: 'It does not mean you are careless. It means the task is asking your attention to carry more than it can manage cleanly.',
    },
    {
      type: 'heading',
      text: 'Why trying harder does not always fix it',
    },
    {
      type: 'paragraph',
      text: 'When students feel overloaded, the first instinct is usually to push harder.',
    },
    {
      type: 'paragraph',
      text: 'Focus more. Study more. Memorize the steps again. Promise yourself you will not miss that thing next time.',
    },
    {
      type: 'paragraph',
      text: 'Sometimes that helps, especially if the issue really was a knowledge gap. But cognitive load problems are not always fixed by adding more content. In fact, adding more to remember can make the problem worse if the structure underneath has not improved.',
    },
    {
      type: 'paragraph',
      text: 'A student who keeps forgetting reassessment may not need another reminder that reassessment matters. They may need a more stable place for reassessment to live in their call flow.',
    },
    {
      type: 'paragraph',
      text: 'The same is true for other common misses. A blood glucose in an altered patient may disappear because the student has not built a reliable early check for simple reversible causes. A directive may feel frozen not because the wording was never studied, but because the student does not yet understand what the directive is protecting.',
    },
    {
      type: 'paragraph',
      text: 'More effort is not useless. It just needs to be aimed at the right problem.',
    },
    {
      type: 'heading',
      text: 'What overload looks like in a scenario',
    },
    {
      type: 'paragraph',
      text: 'Cognitive overload usually does not feel dramatic from the outside.',
    },
    {
      type: 'paragraph',
      text: 'A student may still look busy. They may still be performing skills, asking questions, talking to their partner, and moving through the call. The problem is that their attention has narrowed without them noticing.',
    },
    {
      type: 'paragraph',
      text: 'You might see it as a student spending several minutes adjusting oxygen delivery while the larger assessment stalls. Or getting focused on lung sounds and missing that the patient’s mental status has changed. Or asking a long list of history questions without naming the risk that is already becoming clear.',
    },
    {
      type: 'paragraph',
      text: 'In the moment, this can feel like being behind.',
    },
    {
      type: 'paragraph',
      text: 'Not always panicked. Just crowded. The student knows there are several things to do, but the order becomes blurry. They may start reaching for the next visible task instead of the next important one.',
    },
    {
      type: 'paragraph',
      text: 'That is one of the reasons cognitive load matters so much in paramedic education. When load gets too high, students do not simply forget facts. They lose access to priorities.',
    },
    {
      type: 'heading',
      text: 'A paramedic example',
    },
    {
      type: 'paragraph',
      text: 'Picture a student running a respiratory scenario.',
    },
    {
      type: 'paragraph',
      text: 'The patient is short of breath, anxious, and speaking in short phrases. The student notices wheezing, checks oxygen saturation, applies oxygen, and starts thinking about bronchodilator treatment. So far, the call is moving.',
    },
    {
      type: 'paragraph',
      text: 'Then the patient becomes quieter.',
    },
    {
      type: 'paragraph',
      text: 'The student is still busy. They are adjusting equipment, thinking through the medication, trying to communicate with their partner, and watching the monitor. But they do not pause to reassess work of breathing, mental status, or whether the quietness represents improvement or fatigue.',
    },
    {
      type: 'paragraph',
      text: 'In debrief, the student may say, “I knew I should reassess. I just got focused on the treatment.”',
    },
    {
      type: 'paragraph',
      text: 'That is a cognitive load problem.',
    },
    {
      type: 'paragraph',
      text: 'The treatment became the center of attention. The reassessment, which is what gives the treatment meaning, slipped out of reach.',
    },
    {
      type: 'paragraph',
      text: 'The fix is not simply telling the student, “Remember to reassess.” They already know that. The better question is where reassessment belongs in their structure so it returns after an intervention, even when the call feels busy.',
    },
    {
      type: 'heading',
      text: 'Structure protects thinking',
    },
    {
      type: 'paragraph',
      text: 'Structure matters because it reduces the number of decisions your working memory has to remake in the moment.',
    },
    {
      type: 'paragraph',
      text: 'If every scenario requires you to rebuild your approach from scratch, you will run out of mental space quickly. You will be deciding what to ask, what to check, what matters, what comes next, what your partner needs, and what the patient is doing, all at the same time.',
    },
    {
      type: 'paragraph',
      text: 'A stable structure does not remove clinical thinking. It protects it.',
    },
    {
      type: 'paragraph',
      text: 'When your basic sequence is reliable, your attention is freed for the parts of the call that actually require judgment. You can notice when the patient changes. You can hear the detail in the history. You can compare findings instead of just collecting them. You can ask whether your first explanation still fits.',
    },
    {
      type: 'paragraph',
      text: 'This is why experienced clinicians often look calmer than students. It is not because the call is simple. It is because more of the basic structure is already available to them. They are not spending as much attention deciding where their attention should go.',
    },
    {
      type: 'paragraph',
      text: 'That is part of what you are building as a student.',
    },
    {
      type: 'paragraph',
      text: 'You are not only building knowledge. You are building structure that can still be used when the call gets crowded.',
    },
    {
      type: 'heading',
      text: 'Some load belongs in the work',
    },
    {
      type: 'paragraph',
      text: 'Not all cognitive load is bad.',
    },
    {
      type: 'paragraph',
      text: 'Some of it belongs in the work. Assessing a sick patient should require thinking. Making decisions with incomplete information should take effort. Learning a new skill should feel mentally demanding at first.',
    },
    {
      type: 'paragraph',
      text: 'That kind of load belongs in the work.',
    },
    {
      type: 'paragraph',
      text: 'The problem is wasted load.',
    },
    {
      type: 'paragraph',
      text: 'Wasted load comes from things like unclear routines, messy notes, poorly understood directives, trying to remember every step instead of using a stable assessment pattern, or repeatedly deciding the same basic priorities from scratch.',
    },
    {
      type: 'paragraph',
      text: 'Students often blame themselves for this kind of strain. They assume they are slow, scattered, or not confident enough. Sometimes the better explanation is that too much of their attention is being spent on things that could have been structured earlier.',
    },
    {
      type: 'paragraph',
      text: 'A good learning system does not remove challenge. It reduces unnecessary strain so the real challenge can be handled better.',
    },
    {
      type: 'heading',
      text: 'How to start working with cognitive load',
    },
    {
      type: 'paragraph',
      text: 'For now, do not try to fix everything.',
    },
    {
      type: 'paragraph',
      text: 'After a lab or scenario, choose one moment where your thinking became crowded. Not the whole call. Just one moment.',
    },
    {
      type: 'paragraph',
      text: 'Ask what was competing for your attention there.',
    },
    {
      type: 'paragraph',
      text: 'Were you trying to remember a sequence? Were you unsure what mattered most? Were you focused on a task while the patient’s overall condition was changing? Were you waiting for certainty before acting? Were you carrying too many possible explanations without a way to sort them?',
    },
    {
      type: 'paragraph',
      text: 'That kind of question is more useful than simply asking, “What did I forget?”',
    },
    {
      type: 'paragraph',
      text: 'Forgetting is often the surface problem. The better learning is underneath it.',
    },
    {
      type: 'paragraph',
      text: 'Once you identify where the load built up, you can decide what kind of support is needed. Maybe you need a better assessment routine. Maybe a concept needs to be understood more clearly. Maybe a directive needs to be learned by purpose, not just wording. Maybe a note needs to be rebuilt so it supports thinking instead of storage.',
    },
    {
      type: 'paragraph',
      text: 'That is where the rest of VitalNotes starts to connect.',
    },
    {
      type: 'heading',
      text: 'Moving forward',
    },
    {
      type: 'paragraph',
      text: 'Cognitive load helps explain why capable students can lose access to simple things under pressure.',
    },
    {
      type: 'paragraph',
      text: 'The next section looks at one of the most common reasons students get caught by this: studying can feel productive even when it is not preparing the brain to retrieve and use knowledge in motion.',
    },
  ],
  glossaryTerms: [
    'cognitive-load',
    'working-memory',
    'structure',
    'reassessment',
    'performance-under-pressure',
  ],
  relatedSections: [
    'start-here-what-vitalnotes-is',
    'how-to-use-this-guide',
    'where-to-begin',
    'why-studying-feels-productive-but-fails-under-pressure',
    'learning-strain-is-not-always-a-personal-problem',
    'smart-notes-for-paramedic-students',
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
    'I spend time studying and feel like I understand the material, but it does not come back reliably during scenarios, labs, or OSCEs.',
  sectionPurpose:
    'Help students understand why familiar study methods can feel productive without building the kind of access needed under pressure, and prepare them for the later section on retrieval and spaced learning.',
  pageType: 'conceptual',
  body: [
    {
      type: 'paragraph',
      text: 'Some studying feels productive because it feels calm.',
    },
    {
      type: 'paragraph',
      text: 'You sit down with your notes. The slides are open. The chart is in front of you. The directive is written out clearly. The medication dose is where it always is. The contraindications are listed in order. Nothing is moving, nobody is watching, and the material has labels attached to it.',
    },
    {
      type: 'paragraph',
      text: 'In that setting, things can feel solid.',
    },
    {
      type: 'paragraph',
      text: 'You recognize the words. You remember seeing the explanation before. You can follow the logic while the page is guiding you. It feels like the knowledge is there, and in one sense, it is.',
    },
    {
      type: 'paragraph',
      text: 'Then a scenario starts, and the same knowledge does not return the same way.',
    },
    {
      type: 'paragraph',
      text: 'That can be frustrating because the student did not necessarily avoid the work. They may have spent real time studying. They may have reviewed carefully. They may have felt reasonably prepared. The problem is that performance asks for something different than recognition.',
    },
    {
      type: 'paragraph',
      text: 'In a scenario, you are not looking at the answer. You are trying to bring it back while also assessing, listening, communicating, watching the patient, and deciding what matters next.',
    },
    {
      type: 'paragraph',
      text: 'That is a different task.',
    },
    {
      type: 'heading',
      text: 'Familiar is not the same as available',
    },
    {
      type: 'paragraph',
      text: 'A lot of common studying builds familiarity.',
    },
    {
      type: 'paragraph',
      text: 'Familiarity is the sense that you have seen something before. It is what happens when the material looks clear while you are reading it. The heading reminds you what the topic is. The table separates the categories. The bolded term tells you what matters. The slide order gives the idea a shape before you have to create one yourself.',
    },
    {
      type: 'paragraph',
      text: 'There is nothing wrong with familiarity. It is part of learning.',
    },
    {
      type: 'paragraph',
      text: 'The problem starts when familiarity is mistaken for access.',
    },
    {
      type: 'paragraph',
      text: 'Access means you can bring the idea back when the cues are gone. You can explain it without the paragraph in front of you. You can recognize it when it appears in a patient instead of on a slide. You can use it when the presentation is incomplete, the room is busy, and your attention is already carrying several other things.',
    },
    {
      type: 'paragraph',
      text: 'Paramedic learning depends heavily on access.',
    },
    {
      type: 'paragraph',
      text: 'The patient will not present as a clean heading. They will present as breathing pattern, skin, posture, history fragments, vital signs, family comments, scene context, and changes over time. The student has to assemble meaning from that.',
    },
    {
      type: 'paragraph',
      text: 'Review can make material feel known before it is ready for that kind of work.',
    },
    {
      type: 'heading',
      text: 'Why review can hide weak learning',
    },
    {
      type: 'paragraph',
      text: 'Most students are not lazy about studying. Many are doing exactly what school has trained them to do.',
    },
    {
      type: 'paragraph',
      text: 'They review. They rewrite. They organize. They make cleaner notes. They spend time with the material, and time with the material feels like progress.',
    },
    {
      type: 'paragraph',
      text: 'Sometimes it is progress.',
    },
    {
      type: 'paragraph',
      text: 'The issue is that review often keeps the task too comfortable. The answer is visible. The structure is already provided. The cues are stable. The student can follow the explanation without having to rebuild it.',
    },
    {
      type: 'paragraph',
      text: 'Paramedicine rarely asks for knowledge that gently.',
    },
    {
      type: 'paragraph',
      text: 'In labs and OSCEs, the student has to decide what matters without the slide headings. They have to notice which findings belong together. They have to remember a directive while also deciding whether the patient fits it. They have to keep thinking after the first intervention instead of mentally relaxing because something has been done.',
    },
    {
      type: 'paragraph',
      text: 'That is why studying can feel productive and still not transfer well. The study session may have strengthened recognition without doing enough to strengthen recall, comparison, or use.',
    },
    {
      type: 'heading',
      text: 'A common scenario problem',
    },
    {
      type: 'paragraph',
      text: 'Picture a student preparing for a respiratory lab.',
    },
    {
      type: 'paragraph',
      text: 'The night before, they review asthma, COPD, and heart failure. The notes are organized. The categories look clear while reading. Asthma has bronchoconstriction and wheezing. COPD has chronic history and air trapping. Heart failure has fluid backup, crackles, edema, and cardiac history.',
    },
    {
      type: 'paragraph',
      text: 'At the desk, those categories behave themselves.',
    },
    {
      type: 'paragraph',
      text: 'In the scenario, they do not.',
    },
    {
      type: 'paragraph',
      text: 'The patient is short of breath. They are anxious. They have a cough. Their oxygen saturation is not terrible, but their work of breathing is high. Lung sounds are present, but not as clean as the notes made them seem. The student starts trying to remember which condition this is supposed to be.',
    },
    {
      type: 'paragraph',
      text: 'The issue is not that they never studied.',
    },
    {
      type: 'paragraph',
      text: 'The issue is that their studying may have stayed too close to the notes. They reviewed the differences while the categories were already separated for them. They did not spend enough time trying to retrieve those differences without cues, compare similar presentations, or ask what would make one explanation more likely than another.',
    },
    {
      type: 'paragraph',
      text: 'So when the call becomes less tidy, the categories start to blur.',
    },
    {
      type: 'paragraph',
      text: 'That blur is not always a knowledge failure. Sometimes it is a practice-design problem.',
    },
    {
      type: 'heading',
      text: 'Pressure reveals what study did not test',
    },
    {
      type: 'paragraph',
      text: 'Pressure does not create every learning problem, but it makes weak access easier to see.',
    },
    {
      type: 'paragraph',
      text: 'When a student is calm, rested, and looking directly at their notes, fragile learning can hide. The material feels known because the environment is helping. The page gives cues. The order gives structure. The answer is nearby.',
    },
    {
      type: 'paragraph',
      text: 'During a scenario, that support disappears.',
    },
    {
      type: 'paragraph',
      text: 'Now the student has to carry more in working memory. They have to listen, observe, decide, communicate, and remember at the same time. If knowledge has mostly been practiced through recognition, it may not return cleanly under that load.',
    },
    {
      type: 'paragraph',
      text: 'This is why students sometimes describe “blanking.”',
    },
    {
      type: 'paragraph',
      text: 'Blanking is not always empty memory. Sometimes the knowledge is there, but it has not been practiced in a way that makes it reachable under delay, distraction, or pressure.',
    },
    {
      type: 'paragraph',
      text: 'That distinction matters. If the problem is missing knowledge, the student needs to learn the content. If the problem is access, the student needs to practice bringing the content back.',
    },
    {
      type: 'paragraph',
      text: 'Those are related, but they are not the same job.',
    },
    {
      type: 'heading',
      text: 'Better studying asks more of the brain',
    },
    {
      type: 'paragraph',
      text: 'Better studying is not always longer studying.',
    },
    {
      type: 'paragraph',
      text: 'Often, it is studying that asks the brain to do more of the work.',
    },
    {
      type: 'paragraph',
      text: 'Instead of rereading the asthma notes, close them and explain what air trapping means in your own words. Instead of looking over the nitroglycerin directive again, try to recall the major indications, contraindications, and the reason they matter before checking. Instead of reviewing a comparison chart, cover it and ask what would actually separate those conditions during a call.',
    },
    {
      type: 'paragraph',
      text: 'This usually feels worse at first.',
    },
    {
      type: 'paragraph',
      text: 'It is slower. It exposes gaps. It can make you feel less confident for a few minutes. You may realize that you recognized the explanation more easily than you could produce it. You may remember the wording of a directive but not the purpose behind it. You may know the list of symptoms but struggle to explain why they belong together.',
    },
    {
      type: 'paragraph',
      text: 'That discomfort is useful when it is handled properly.',
    },
    {
      type: 'paragraph',
      text: 'It shows you where the learning is still weak enough to need attention. It shows which connections are not stable yet. It shows where the notes are doing too much of the work for you.',
    },
    {
      type: 'paragraph',
      text: 'That is better information than another smooth review session.',
    },
    {
      type: 'heading',
      text: 'What productive studying can look like',
    },
    {
      type: 'paragraph',
      text: 'A useful study session may feel a little uneven.',
    },
    {
      type: 'paragraph',
      text: 'You try to explain something and miss part of it. You check the notes and correct it. You compare two similar conditions and realize you were using the wrong cue. You attempt to recall a directive and notice that you remember the threshold but not what the threshold is protecting. You look back at a scenario mistake and realize the problem was not the treatment itself, but the moment where you stopped reassessing.',
    },
    {
      type: 'paragraph',
      text: 'That kind of studying does not always feel polished.',
    },
    {
      type: 'paragraph',
      text: 'It can feel like you are finding problems.',
    },
    {
      type: 'paragraph',
      text: 'In a way, you are. But you are finding them at the desk, in a lower-stakes environment, before a scenario finds them for you. That is the advantage. You are not trying to prove that you know everything. You are trying to see what is stable enough to use and what still needs support.',
    },
    {
      type: 'paragraph',
      text: 'The goal is not to make studying feel worse for its own sake. The goal is to make studying more honest.',
    },
    {
      type: 'heading',
      text: 'What to change first',
    },
    {
      type: 'paragraph',
      text: 'Do not overhaul your whole study routine at once.',
    },
    {
      type: 'paragraph',
      text: 'Start by adding a small retrieval step after review.',
    },
    {
      type: 'paragraph',
      text: 'Read a section of your notes, then close them. Explain the idea out loud, write a rough version from memory, or ask yourself what the concept would look like in a patient. Then reopen the notes and check what was accurate, what was missing, and what only felt obvious because the page was in front of you.',
    },
    {
      type: 'paragraph',
      text: 'This does not need to take long.',
    },
    {
      type: 'paragraph',
      text: 'A few minutes of honest retrieval can show you more than a long stretch of comfortable rereading. Not because rereading is useless, but because rereading often hides the gap between recognition and access.',
    },
    {
      type: 'paragraph',
      text: 'You are trying to find that gap early enough to do something about it.',
    },
    {
      type: 'heading',
      text: 'Moving forward',
    },
    {
      type: 'paragraph',
      text: 'Studying feels productive when the material becomes familiar. Paramedic performance needs knowledge that can be retrieved, connected, and used while the call is moving.',
    },
    {
      type: 'paragraph',
      text: 'The next section looks at why learning strain should not always be treated as a personal problem, and how to tell the difference between useful difficulty and wasted effort.',
    },
  ],
  glossaryTerms: [
    'retrieval-practice',
    'recognition',
    'cognitive-load',
    'working-memory',
    'spacing',
    'performance-under-pressure',
  ],
  relatedSections: [
    'cognitive-load',
    'learning-strain-is-not-always-a-personal-problem',
    'retrieval-and-spaced-learning',
    'smart-notes-for-paramedic-students',
    'meaning-before-memorization',
  ],
},
{
  id: 'learning-strain-is-not-always-a-personal-problem',
  title: 'Learning Strain Is Not Always a Personal Problem',
  subtitle: 'Difficulty can come from the system, not the student.',
  cluster: '01 Why Learning Feels Hard',
  clusterOrder: 1,
  sectionOrder: 2,
  studentProblem:
    'I am struggling, falling behind, or feeling strained by paramedic school, and I am not sure whether that means I am doing something wrong.',
  sectionPurpose:
    'Help students interpret learning strain more carefully by distinguishing useful difficulty from wasted difficulty, without turning every struggle into a personal failure or pretending every hard moment is automatically productive.',
  pageType: 'conceptual',
  body: [
    {
      type: 'paragraph',
      text: 'Paramedic school can make strain feel like evidence.',
    },
    {
      type: 'paragraph',
      text: 'A student falls behind in studying and assumes they lack discipline. They freeze during a scenario and assume they are not confident enough. They receive the same feedback twice and assume they are not improving. They leave lab tired or embarrassed, and the whole thing starts to feel like a statement about who they are.',
    },
    {
      type: 'paragraph',
      text: 'That interpretation is understandable. It is also not always accurate.',
    },
    {
      type: 'paragraph',
      text: 'Learning paramedicine asks a lot from a person. There is content to understand, skills to practice, directives to apply, scenarios to run, feedback to absorb, and pressure to tolerate. Some strain comes with learning a role where knowledge has to become action.',
    },
    {
      type: 'paragraph',
      text: 'But strain is not one thing.',
    },
    {
      type: 'paragraph',
      text: 'Some difficulty is useful. Some difficulty is waste. Some comes from being challenged in the right way. Some comes from trying to learn without enough structure underneath you. Some means you are finding the edge of your current understanding. Some means the method you are using is not giving much back for the energy you are spending.',
    },
    {
      type: 'paragraph',
      text: 'That distinction matters because students often respond to all strain the same way. They push harder, study longer, blame confidence, or decide they are falling behind. Sometimes more effort is needed. Sometimes rest is needed. Sometimes a better system is needed.',
    },
    {
      type: 'paragraph',
      text: 'Before deciding what to do next, it helps to understand what kind of strain you are actually dealing with.',
    },
    {
      type: 'heading',
      text: 'Why strain feels personal',
    },
    {
      type: 'paragraph',
      text: 'When learning becomes difficult, students usually feel it before they can explain it.',
    },
    {
      type: 'paragraph',
      text: 'They notice that scenarios feel worse than studying. They notice that feedback hits harder than expected. They notice that they can explain something calmly, but cannot use it smoothly when observed. They notice that other students look like they are handling the program better, even though that is rarely the full truth.',
    },
    {
      type: 'paragraph',
      text: 'In that environment, it is easy to turn a learning problem into a personal label.',
    },
    {
      type: 'paragraph',
      text: '“I am bad at scenarios.”',
    },
    {
      type: 'paragraph',
      text: '“I am not a good test taker.”',
    },
    {
      type: 'paragraph',
      text: '“I am too anxious.”',
    },
    {
      type: 'paragraph',
      text: '“I am not built for this.”',
    },
    {
      type: 'paragraph',
      text: 'There may be something real underneath those statements, but the statements themselves are usually too broad to help. They do not tell you what to practice, what to change, or what to ask for. They turn a specific difficulty into a fixed identity.',
    },
    {
      type: 'paragraph',
      text: 'A better question is not, “What is wrong with me?”',
    },
    {
      type: 'paragraph',
      text: 'A better question is, “What is this strain pointing toward?”',
    },
    {
      type: 'paragraph',
      text: 'That question gives you somewhere to work.',
    },
    {
      type: 'heading',
      text: 'Some difficulty belongs in the process',
    },
    {
      type: 'paragraph',
      text: 'Not every hard moment is a sign that something has gone wrong.',
    },
    {
      type: 'paragraph',
      text: 'Trying to retrieve information without looking at notes should feel harder than rereading. Running a scenario should feel more demanding than talking through a case at a desk. Receiving feedback should create some discomfort, especially when it shows you a gap you did not notice on your own.',
    },
    {
      type: 'paragraph',
      text: 'That kind of difficulty can be useful because it asks the learning system to do something real.',
    },
    {
      type: 'paragraph',
      text: 'It asks you to bring knowledge back, compare ideas, adjust your thinking, notice a pattern, or use a skill while attention is divided. Those are the conditions paramedic learning has to prepare for. If practice never reaches that level, it may feel smooth while leaving you underprepared.',
    },
    {
      type: 'paragraph',
      text: 'A student who struggles to explain the difference between asthma, COPD, and heart failure without notes is not necessarily failing. They may have found the exact place where their understanding needs to become more usable.',
    },
    {
      type: 'paragraph',
      text: 'A student who feels awkward during reassessment practice is not necessarily behind. They may be moving from knowing reassessment matters to actually making it part of their call flow.',
    },
    {
      type: 'paragraph',
      text: 'Useful difficulty is not comfortable, but it gives you information you can act on.',
    },
    {
      type: 'heading',
      text: 'Some difficulty is just noise',
    },
    {
      type: 'paragraph',
      text: 'Other difficulty does not help much.',
    },
    {
      type: 'paragraph',
      text: 'Rereading the same notes for hours without testing recall can feel responsible, but it may not change what happens in a scenario. Rewriting slides into cleaner language can feel productive, but it may not help if the ideas are still disconnected. Trying to memorize a directive without understanding its purpose can create more anxiety than confidence.',
    },
    {
      type: 'paragraph',
      text: 'This is wasted difficulty.',
    },
    {
      type: 'paragraph',
      text: 'It uses energy without improving access, understanding, judgment, or performance.',
    },
    {
      type: 'paragraph',
      text: 'You can often recognize it by the lack of movement. The student is working, but the same problems keep appearing in almost the same way. They study, but cannot retrieve the material. They reflect after scenarios, but do not leave with a specific adjustment. They practice skills, but never connect the skill to the decision that makes it matter.',
    },
    {
      type: 'paragraph',
      text: 'That kind of strain deserves attention.',
    },
    {
      type: 'paragraph',
      text: 'Not because the student is the problem, but because the method is not giving enough back.',
    },
    {
      type: 'heading',
      text: 'A lab example',
    },
    {
      type: 'paragraph',
      text: 'Picture a student preparing for a medical lab.',
    },
    {
      type: 'paragraph',
      text: 'The night before, they review respiratory conditions. They reread notes, highlight key findings, and look over the relevant directives. It feels like a solid study session because the material is familiar and organized.',
    },
    {
      type: 'paragraph',
      text: 'In lab, the scenario starts messy. The patient is short of breath, anxious, and answering in short phrases. The student remembers pieces of the content, but the pieces are hard to use. Several possible causes come to mind, but the findings blur together. They ask questions, but the questions do not seem to narrow the problem. They begin treatment, but reassessment becomes inconsistent once the call gets busy.',
    },
    {
      type: 'paragraph',
      text: 'Afterward, the student feels like they did not study enough.',
    },
    {
      type: 'paragraph',
      text: 'Maybe there is some truth to that. But it may not be the most useful explanation.',
    },
    {
      type: 'paragraph',
      text: 'The problem may be that the studying did not match the task. The student reviewed information in a calm, labelled format, but the scenario required retrieval, comparison, prioritization, and reassessment under load. The strain in the scenario was real, but repeating the same study method for longer may not solve it.',
    },
    {
      type: 'paragraph',
      text: 'A better response might be to change the study task.',
    },
    {
      type: 'paragraph',
      text: 'Instead of rereading respiratory notes again, the student could close the notes and explain how different respiratory problems would look in a patient. They could compare similar presentations. They could ask what finding would make them change their mind. They could build a small note around one recurring confusion. They could rehearse reassessment after treatment, not as a line on a checklist, but as the moment where they find out whether their plan is working.',
    },
    {
      type: 'paragraph',
      text: 'The work is still hard, but now the strain is aimed at the actual problem.',
    },
    {
      type: 'heading',
      text: 'How to read strain more carefully',
    },
    {
      type: 'paragraph',
      text: 'Learning strain becomes more useful when you stop treating it as one category.',
    },
    {
      type: 'paragraph',
      text: 'After a difficult study session, lab, scenario, or OSCE, try to name what kind of difficulty showed up.',
    },
    {
      type: 'paragraph',
      text: 'Was it missing knowledge?',
    },
    {
      type: 'paragraph',
      text: 'Was it weak retrieval?',
    },
    {
      type: 'paragraph',
      text: 'Was too much competing for attention?',
    },
    {
      type: 'paragraph',
      text: 'Was the structure unclear?',
    },
    {
      type: 'paragraph',
      text: 'Was the feedback accurate but too broad?',
    },
    {
      type: 'paragraph',
      text: 'Were you trying to fix too many things at once?',
    },
    {
      type: 'paragraph',
      text: 'Those are different problems, and they need different responses.',
    },
    {
      type: 'paragraph',
      text: 'A knowledge gap may need teaching, reading, or clarification. Weak retrieval may need practice bringing information back without notes. Cognitive overload may need better structure. Repeated scenario errors may need reflection or a smaller practice target. Emotional residue after feedback may need containment, not more analysis.',
    },
    {
      type: 'paragraph',
      text: 'The goal is not to diagnose yourself perfectly.',
    },
    {
      type: 'paragraph',
      text: 'The goal is to stop treating every hard moment as proof that you are not working hard enough.',
    },
    {
      type: 'heading',
      text: 'The danger of overcorrecting',
    },
    {
      type: 'paragraph',
      text: 'There is another trap here.',
    },
    {
      type: 'paragraph',
      text: 'Once students realize not all strain is personal, they can swing too far in the other direction. Every hard scenario starts to feel unfair. Every uncomfortable piece of feedback feels like too much. Every difficult study session feels like proof that the system is wrong.',
    },
    {
      type: 'paragraph',
      text: 'That is not the point either.',
    },
    {
      type: 'paragraph',
      text: 'Some difficulty belongs in the work. Paramedicine requires judgment under uncertainty. It requires skill repetition. It requires correction. It requires learning to stay functional when the first explanation does not hold.',
    },
    {
      type: 'paragraph',
      text: 'The goal is not to remove discomfort from the process.',
    },
    {
      type: 'paragraph',
      text: 'The goal is to make discomfort useful where possible, and reduce the parts that are only adding noise.',
    },
    {
      type: 'paragraph',
      text: 'That is a more honest standard.',
    },
    {
      type: 'heading',
      text: 'What to do next time learning feels heavy',
    },
    {
      type: 'paragraph',
      text: 'When learning feels heavy, pause before adding more hours.',
    },
    {
      type: 'paragraph',
      text: 'Ask what kind of work the strain is asking for.',
    },
    {
      type: 'paragraph',
      text: 'If you are rereading and nothing is changing, switch to retrieval. If you are overwhelmed in scenarios, look for where attention is becoming crowded. If directives feel fragile, look for the purpose behind the rule. If feedback keeps repeating, choose one moment to examine instead of replaying the whole call.',
    },
    {
      type: 'paragraph',
      text: 'Small adjustments matter here.',
    },
    {
      type: 'paragraph',
      text: 'You do not need to rebuild your whole study system every time something feels hard. In fact, that can become another form of wasted difficulty. Choose one change that would make the next attempt clearer.',
    },
    {
      type: 'paragraph',
      text: 'One better retrieval attempt.',
    },
    {
      type: 'paragraph',
      text: 'One cleaner note.',
    },
    {
      type: 'paragraph',
      text: 'One reassessment habit.',
    },
    {
      type: 'paragraph',
      text: 'One feedback point carried into the next scenario.',
    },
    {
      type: 'paragraph',
      text: 'That is usually enough to move the work forward.',
    },
    {
      type: 'heading',
      text: 'Moving forward',
    },
    {
      type: 'paragraph',
      text: 'Learning strain is not automatically a personal failure. It is also not automatically meaningful just because it feels hard.',
    },
    {
      type: 'paragraph',
      text: 'It needs to be interpreted.',
    },
    {
      type: 'paragraph',
      text: 'Some difficulty helps learning become stronger. Some difficulty burns effort without changing much. The next part of the guide moves from why learning feels hard into how understanding is built, starting with the difference between memorizing facts and making meaning from them.',
    },
  ],
  glossaryTerms: [
    'cognitive-load',
    'retrieval-practice',
    'reflection',
    'transfer',
  ],
  relatedSections: [
    'cognitive-load',
    'why-studying-feels-productive-but-fails-under-pressure',
    'meaning-before-memorization',
    'smart-notes-for-paramedic-students',
    'scenario-days-as-learning-tools',
  ],
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