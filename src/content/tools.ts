import type { Tool } from './types'

export const tools: Tool[] = [
  {
    id: 'directive-meaning-check',
    title: 'Directive Meaning Check',
    status: 'drafted',
    toolType: 'thinking-check',
    purpose:
      'Use this when a directive feels like wording you are trying to survive instead of a decision structure you understand. The goal is to understand what the directive is protecting, supporting, or preventing while still respecting the actual standard.',
    whenToUse:
      'Use this when a directive feels hard to remember, intimidating during scenarios or OSCEs, easy to recite but hard to explain, or fragile when the patient does not fit the clean version you studied.',
    whenNotToUse: [
      'Do not use this as a replacement for the directive itself.',
      'Do not use it to loosen indications, contraindications, dose, route, patch points, reassessment expectations, or documentation requirements.',
      'Do not turn it into a quiz or a rewritten copy of the whole directive.',
    ],
    fieldIntro:
      'Use these fields to connect the directive to risk, boundaries, and reassessment.',
    steps: [
      'Choose one directive, medication, intervention, or decision point.',
      'Name the clinical risk underneath it.',
      'Identify what physiology or patient problem the directive supports or protects.',
      'Name the boundaries and ask why each one exists.',
      'Identify what would make you withhold, stop, patch, reassess, or change course.',
      'Decide what must be reassessed afterward.',
    ],
    fields: [
      {
        id: 'directive',
        label: 'Directive or decision',
        helperText:
          'Name the directive, medication, intervention, or decision point you are reviewing.',
      },
      {
        id: 'clinical-risk',
        label: 'Clinical risk',
        helperText:
          'What patient risk is this directive built around, such as poor perfusion, untreated pain, medication harm, missed deterioration, or unsafe delay?',
      },
      {
        id: 'physiology',
        label: 'Physiology or patient problem',
        helperText:
          'What body process, symptom, or clinical priority is being supported, protected, or kept from worsening?',
      },
      {
        id: 'firm-boundaries',
        label: 'Firm boundaries',
        helperText:
          'Name the boundaries that are not flexible, then ask what each one is protecting against. Focus on why the boundary exists, not on rewriting the whole directive.',
      },
      {
        id: 'withhold-change',
        label: 'Withhold, stop, patch, or change course',
        helperText:
          'What finding, missing information, change after treatment, or safety concern would make you pause or alter the plan?',
      },
      {
        id: 'reassessment',
        label: 'Reassessment',
        helperText:
          'What should you reassess after acting, and what change would show whether the decision is still appropriate?',
      },
    ],
    examples: [
      {
        title: 'Nitroglycerin hesitation',
        context:
          'A student knows the cardiac ischemia symptom relief directive wording, but hesitates because the 12-lead ECG is not diagnostic and the patient does not feel like a clean textbook case.',
        entries: [
          {
            label: 'Directive or decision',
            text: 'Nitroglycerin for a patient with ongoing ischemic-sounding chest discomfort after the required assessment and contraindication screen.',
          },
          {
            label: 'Clinical risk',
            text: 'The risk is untreated cardiac-related pain and avoidable delay while the student waits for diagnostic certainty that may not arrive in the field.',
          },
          {
            label: 'Physiology or patient problem',
            text: 'Nitroglycerin is being considered to support symptom relief and reduce cardiac workload when the presentation and directive criteria fit. The decision still depends on blood pressure, contraindications, patient presentation, and reassessment.',
          },
          {
            label: 'Firm boundaries',
            text: 'The blood pressure threshold, contraindication screen, dose limits, route, timing, and patch requirements are not loose suggestions. Each boundary exists because the treatment can create harm if the patient cannot tolerate it or if key information is missing. The blood pressure threshold exists specifically because nitroglycerin reduces preload, and a patient who is already volume-dependent or hemodynamically marginal may not tolerate that reduction safely.',
          },
          {
            label: 'Withhold, stop, patch, or change course',
            text: 'Recent PDE-5 inhibitor use, hypotension, concerning vital sign trends, a failed contraindication screen, unclear eligibility, worsening status after treatment, or reaching a patch point would change the plan.',
          },
          {
            label: 'Reassessment',
            text: 'Reassess pain, blood pressure, heart rate, mental status, perfusion, side effects, and whether the working concern still fits. The point is not to chase certainty. The point is to understand whether the treatment is supporting the patient problem in front of you.',
          },
        ],
      },
    ],
    commonMistakes: [
      'Rewriting the directive instead of naming the patient risk it is built to manage.',
      'Treating thresholds and contraindications as wording to memorize instead of safety limits to understand.',
      'Stopping once the action is chosen instead of reassessing whether the decision still fits the patient.',
    ],
    toolPointers: [
      'If a boundary keeps slipping during practice, turn that boundary into one Clinical Recall Prompt Builder prompt.',
      'If the same directive hesitation shows up across scenarios, use the Five Whys Tool to find what is actually causing the delay.',
    ],
    relatedSections: [
      'directives-through-purpose',
      'pathophysiology-through-patterns',
      'clinical-reasoning',
      'osce-preparation',
      'performance-under-pressure',
    ],
    relatedTools: ['clinical-recall-prompt-builder', 'five-whys-tool'],
  },
  {
    id: 'smart-note-template',
    title: 'Smart Note Template',
    status: 'drafted',
    toolType: 'template',
    purpose:
      'Turn one concept, scenario error, confusing idea, or repeated feedback point into a small reusable note that helps future you understand, connect, retrieve, and use one idea.',
    whenToUse:
      'Use this when an idea is worth keeping because it keeps showing up in class, lab, feedback, directives, scenarios, or reassessment decisions.',
    whenNotToUse: [
      'Do not use this to capture everything from a lecture.',
      'Do not use it as a full condition summary.',
      'Do not use it when the note would only copy a definition without changing how you think.',
    ],
    fieldIntro:
      'Use these fields to turn one idea into a reusable note.',
    steps: [
      'Choose one idea, not a whole topic.',
      'Write the core claim in one clear sentence.',
      'Explain the idea in your own words.',
      'List the clinical signals that would make the idea visible in assessment, scenarios, or reassessment.',
      'Name the common confusion or trap the note is meant to prevent.',
      'Link only to ideas that change how you understand or use this idea.',
    ],
    fields: [
      {
        id: 'claim',
        label: 'Claim',
        helperText:
          'The core idea in one clear sentence. It should be small enough to reuse later.',
      },
      {
        id: 'explanation',
        label: 'Explanation',
        helperText:
          'Explain what is happening, why it matters, what mechanism or decision it connects to, and how it could change what you do next time.',
      },
      {
        id: 'clinical-signals',
        label: 'Clinical signals',
        helperText:
          'What would you see, hear, ask, reassess, or notice in a patient, scenario, or lab?',
      },
      {
        id: 'common-confusion',
        label: 'Common confusion',
        helperText: 'What mistake, mix-up, or trap is this note meant to prevent?',
      },
      {
        id: 'links',
        label: 'Links',
        helperText:
          'Connect this note to a few related mechanisms, directives, scenario errors, reassessment habits, or clinical reasoning patterns.',
      },
    ],
    examples: [
      {
        title: 'Directive decision',
        context:
          'A student wants a note that makes contraindications feel clinically meaningful rather than like isolated checklist wording.',
        entries: [
          {
            label: 'Claim',
            text: 'A contraindication usually points to a patient risk, not just a rule.',
          },
          {
            label: 'Explanation',
            text: 'Contraindications are not random barriers. They usually exist because a treatment could harm the patient or make the situation worse under certain conditions. Understanding the risk behind the contraindication makes the directive easier to remember and safer to apply.',
          },
          {
            label: 'Clinical signals',
            text: 'Borderline vital signs, incomplete medication history, a condition that changes eligibility, patient status changing after treatment, or uncertainty about whether the directive still fits.',
          },
          {
            label: 'Common confusion',
            text: 'Students may treat contraindications as checklist items to recite rather than risks to understand. This can create unsafe treatment or unnecessary hesitation.',
          },
          {
            label: 'Links',
            text: 'Directive meaning, medication safety, risk management, reassessment after treatment, OSCE reasoning.',
          },
        ],
      },
      {
        title: 'Abdominal pain and risk management',
        context:
          'A student wants to remember why an older abdominal pain patient can require early conservative action even when the diagnosis is unclear.',
        entries: [
          {
            label: 'Claim',
            text: 'An older patient becoming quieter during assessment is a trajectory signal, not background noise.',
          },
          {
            label: 'Explanation',
            text: 'Older patients can deteriorate before the presentation becomes obvious. Vague pain, subtle vital sign drift, increasing quietness, medication history, and a poor-looking patient should shift the plan toward early transport, reassessment, and conservative risk management.',
          },
          {
            label: 'Clinical signals',
            text: 'Persistent or poorly localized pain, nausea, diaphoresis, pallor, borderline or trending blood pressure, increasing quietness, anticoagulant use, or pain that feels worse than the exam explains.',
          },
          {
            label: 'Common confusion',
            text: 'Students may keep assessing because they want the diagnosis to become clearer before acting. The safer question is what plan protects the patient if this is worse than it looks.',
          },
          {
            label: 'Links',
            text: 'Risk under uncertainty, transport decisions, subtle deterioration, reassessment, cognitive load during vague presentations.',
          },
        ],
      },
    ],
    commonMistakes: [
      'Trying to write one note for a whole topic instead of one idea you can reuse.',
      'Writing a claim so broad that it becomes advice rather than a working explanation.',
      'Copying a definition without explaining how the idea changes assessment, reassessment, or decision-making.',
      'Adding links because topics are related, not because the connection clarifies your thinking.',
      'Polishing the note until it looks good instead of testing whether it helps future you reason better.',
    ],
    toolPointers: [
      'Once the note feels stable, use Clinical Recall Prompt Builder to turn one cue, contrast, or boundary into retrieval practice.',
      'If the note came from a repeated scenario error, use the Five Whys Tool to turn it into one practice target.',
    ],
    relatedSections: [
      'smart-notes-for-paramedic-students',
      'understanding-before-memorizing',
      'retrieval-practice',
      'cognitive-load',
    ],
    relatedTools: ['clinical-recall-prompt-builder', 'five-whys-tool'],
  },
  {
    id: 'clinical-recall-prompt-builder',
    title: 'Clinical Recall Prompt Builder',
    status: 'drafted',
    toolType: 'prompt-builder',
    purpose:
      'Build recall prompts that test whether knowledge can be accessed and used clinically, not just recognized while reading notes.',
    whenToUse:
      'Use this when you want to turn a directive, Smart Note, medication, pathophysiology idea, or scenario error into retrieval practice that supports decisions under pressure.',
    whenNotToUse: [
      'Do not use this to make trivia cards that never touch patient care.',
      'Do not make prompts so broad that you cannot answer them clearly.',
      'Do not use recall practice as a replacement for scenarios, labs, or feedback.',
    ],
    fieldIntro:
      'Use these fields to build prompts that test access, not familiarity.',
    steps: [
      'Choose one idea that must be available under pressure.',
      'Name the clinical job that knowledge is supposed to perform.',
      'Write one prompt for the basic fact or threshold if needed.',
      'Write one prompt for the clinical cue that should trigger the idea.',
      'Write one prompt for the decision boundary or safety limit.',
      'Write one prompt for reassessment after action.',
      'Add a communication prompt if you need to explain the reasoning aloud.',
    ],
    fields: [
      {
        id: 'source-idea',
        label: 'Source idea',
        helperText:
          'What directive, note, medication, concept, or scenario error are you turning into recall practice?',
      },
      {
        id: 'clinical-job',
        label: 'Clinical job',
        helperText:
          'What should this knowledge help you do, such as recognize risk, choose treatment, withhold treatment, reassess, or explain a decision?',
      },
      {
        id: 'basic-fact',
        label: 'Basic fact prompt',
        helperText:
          'What fact, threshold, sequence, or definition must be recalled accurately?',
      },
      {
        id: 'clinical-cue',
        label: 'Clinical cue prompt',
        helperText:
          'What patient finding, history detail, vital sign trend, scene cue, or reassessment finding should bring this idea to mind?',
      },
      {
        id: 'decision-boundary',
        label: 'Decision boundary prompt',
        helperText:
          'What would make you withhold, change, escalate, patch, or reconsider?',
      },
      {
        id: 'reassessment',
        label: 'Reassessment prompt',
        helperText:
          'After acting, what must you check to know whether the patient is improving, worsening, or unchanged?',
      },
      {
        id: 'communication',
        label: 'Communication prompt',
        helperText:
          'How would you explain the decision in one or two sentences to an instructor, partner, preceptor, or yourself?',
      },
    ],
    examples: [
      {
        title: 'Nitroglycerin',
        context:
          'A student wants recall practice that tests both directive accuracy and safe use during a chest pain scenario.',
        entries: [
          {
            label: 'Source idea',
            text: 'Cardiac ischemia symptom relief and nitroglycerin decision-making.',
          },
          {
            label: 'Clinical job',
            text: 'Recall when nitroglycerin is appropriate, what must be checked first, and what must be reassessed after each dose.',
          },
          {
            label: 'Basic fact prompt',
            text: 'What are the required conditions, dose, route, maximums, and patch points for nitroglycerin under the current directive?',
          },
          {
            label: 'Clinical cue prompt',
            text: 'What patient presentation makes ischemic chest discomfort a reasonable working concern even if the ECG is not diagnostic?',
          },
          {
            label: 'Decision boundary prompt',
            text: 'What findings or history would make nitroglycerin unsafe, require withholding, or require patching?',
          },
          {
            label: 'Reassessment prompt',
            text: 'After nitroglycerin, what do I reassess before considering another dose or changing the plan?',
          },
          {
            label: 'Communication prompt',
            text: 'How would I explain why I gave, withheld, or stopped nitroglycerin without sounding like I was only reciting a checklist?',
          },
        ],
      },
      {
        title: 'Altered LOC after glucose treatment',
        context:
          'A student wants recall practice that prevents “treatment given” from becoming the end of thinking during a hypoglycemia scenario.',
        entries: [
          {
            label: 'Source idea',
            text: 'Hypoglycemia treatment, reassessment, and ongoing altered mental status.',
          },
          {
            label: 'Clinical job',
            text: 'Treat glucose administration as a reassessment point, not a conclusion. The job is confirming response, identifying airway risk, and recognizing when the problem is not resolved.',
          },
          {
            label: 'Basic fact prompt',
            text: 'What treatment options, routes, and safety conditions apply for hypoglycemia in this patient?',
          },
          {
            label: 'Clinical cue prompt',
            text: 'What changes in mental status, airway protection, behaviour, or vital signs should I expect if the treatment is working?',
          },
          {
            label: 'Decision boundary prompt',
            text: 'What would make me escalate, reassess the diagnosis, manage airway risk, or prepare for transport rather than assuming the problem is solved?',
          },
          {
            label: 'Reassessment prompt',
            text: 'What do I recheck after treatment: level of consciousness, BGL, airway, oral intake safety, vitals, trend, and whether the story still fits?',
          },
          {
            label: 'Communication prompt',
            text: 'How would I explain why a patient who has received glucose still needs careful reassessment and monitoring?',
          },
        ],
      },
      {
        title: 'Poor perfusion',
        context:
          'A student wants to connect recall of shock concepts to early recognition and conservative decision-making.',
        entries: [
          {
            label: 'Source idea',
            text: 'Early poor perfusion and shock pattern recognition.',
          },
          {
            label: 'Clinical job',
            text: 'Notice early risk before the patient becomes obviously unstable.',
          },
          {
            label: 'Basic fact prompt',
            text: 'What are common early signs that perfusion may be inadequate even before blood pressure collapses?',
          },
          {
            label: 'Clinical cue prompt',
            text: 'What skin, mental status, pulse quality, capillary refill, respiratory, and trend findings should make poor perfusion more likely?',
          },
          {
            label: 'Decision boundary prompt',
            text: 'What would make me prioritize early transport, request support, or reassess more frequently even without diagnostic certainty?',
          },
          {
            label: 'Reassessment prompt',
            text: 'What trend would tell me the patient is compensating, failing, or responding to care?',
          },
          {
            label: 'Communication prompt',
            text: 'How would I explain that I am managing risk and trajectory, not waiting for one dramatic vital sign?',
          },
        ],
      },
    ],
    commonMistakes: [
      'Leaving out the patient cue that should make the knowledge show up during a call.',
      'Testing the fact that is easiest to write instead of the detail that disappears under pressure.',
      'Forgetting to include what must be reassessed after a treatment or decision.',
      'Making one huge prompt when the student really needs two or three smaller retrieval attempts.',
    ],
    toolPointers: [
      'Use this after Smart Note Template when an explanation is clear enough to practise without the note open.',
      'Use this after Directive Meaning Check when a threshold, contraindication, or reassessment point needs to become easier to access.',
    ],
    relatedSections: [
      'retrieval-practice',
      'spaced-learning',
      'smart-notes-for-paramedic-students',
      'osce-preparation',
    ],
    relatedTools: ['smart-note-template', 'directive-meaning-check'],
  },
  {
    id: 'clinical-reasoning-check',
    title: 'Clinical Reasoning Check',
    status: 'drafted',
    toolType: 'thinking-check',
    purpose:
      'Use this when you need to check how your thinking behaved during a scenario, OSCE, lab, placement moment, or feedback point.',
    whenToUse:
      'Use this after a call or scenario when your first explanation, decision, or plan may have become too narrow, too rigid, or hard to explain.',
    whenNotToUse: [
      'Do not use this when the issue was simply a missed fact or skill step.',
      'Do not use it when you already know the specific practice target.',
      'Do not use it to diagnose the patient perfectly after the fact.',
      'Do not let it become a way to replay the entire call.',
    ],
    fieldIntro:
      'Use these fields to check whether your working explanation stayed flexible.',
    steps: [
      'Name your working explanation at the time.',
      'Identify what information supported it.',
      'Identify what did not fit or needed more attention.',
      'Ask whether your thinking changed when the patient changed.',
      'Decide what cue, question, or reassessment would help next time.',
    ],
    fields: [
      {
        id: 'working-explanation',
        label: 'Working explanation',
        helperText:
          'What did you think was happening at the time? This does not need to be a final diagnosis. It can be a working concern, risk, or likely pattern.',
      },
      {
        id: 'supporting-cues',
        label: 'Supporting cues',
        helperText:
          'What information made that explanation reasonable? Include presentation, history, vitals, scene details, response to treatment, or directive context.',
      },
      {
        id: 'did-not-fit',
        label: 'What did not fit?',
        helperText:
          'What information was missing, conflicting, changing, or easy to ignore? Look for the cue that should have made you slow down, widen your thinking, reassess, or ask a different question.',
      },
      {
        id: 'reasoning-response',
        label: 'Reasoning response',
        helperText:
          'Did your thinking change as new information appeared? If not, what kept the first explanation in place?',
      },
      {
        id: 'next-reasoning-cue',
        label: 'Next reasoning cue',
        helperText:
          'What would you watch for, ask, or reassess next time? Choose one cue or question that would keep your working explanation flexible.',
      },
    ],
    examples: [
      {
        title: 'Vague weakness with missed neurologic shift',
        context:
          'A student treated a vague weakness call as low acuity because the initial vitals were not dramatic, then missed that the patient’s speech and coordination were changing.',
        entries: [
          {
            label: 'Working explanation',
            text: 'I thought this was general weakness, dehydration, or fatigue because the patient looked stable and the first set of vitals did not push me toward a high-risk problem.',
          },
          {
            label: 'Supporting cues',
            text: 'The patient was awake, talking, not in obvious distress, and had vague symptoms without a clear complaint at first.',
          },
          {
            label: 'What did not fit?',
            text: 'The patient became slower to answer, had subtle word-finding trouble, and seemed less coordinated during movement. Those changes should have widened my thinking toward neurologic risk.',
          },
          {
            label: 'Reasoning response',
            text: 'My thinking did not shift quickly enough because the first impression stayed in control. I kept looking for confirmation that the call was low acuity instead of treating the change as new information.',
          },
          {
            label: 'Next reasoning cue',
            text: 'When a vague patient changes during the call, I will treat that change as evidence. I will reassess speech, face, arms, gait or coordination, glucose, vitals, and time course rather than staying with the first label.',
          },
        ],
      },
      {
        title: 'Chest pain with a non-diagnostic ECG update',
        context:
          'A student stayed with the first plan after a repeat ECG and symptom update made the case less clean, but more concerning.',
        entries: [
          {
            label: 'Working explanation',
            text: 'I thought the chest pain was likely anxiety or non-specific discomfort because the first ECG was not diagnostic and the patient was talking normally.',
          },
          {
            label: 'Supporting cues',
            text: 'The patient was alert, the first ECG did not show a clear STEMI pattern, and the pain description was not dramatic at first.',
          },
          {
            label: 'What did not fit?',
            text: 'The patient became more diaphoretic, the pain persisted, nausea increased, and the repeat ECG still did not reassure me. Non-diagnostic did not mean low risk.',
          },
          {
            label: 'Reasoning response',
            text: 'I treated the ECG as the main decision-maker instead of integrating symptoms, trend, appearance, risk factors, and reassessment.',
          },
          {
            label: 'Next reasoning cue',
            text: 'When the repeat ECG does not reassure me and the patient is still symptomatic, I will explicitly ask: has my working concern changed, and does the current plan reflect what I am actually worried about?',
          },
        ],
      },
    ],
    commonMistakes: [
      'Using the tool to defend your first impression instead of testing whether it stayed flexible.',
      'Writing a perfect diagnosis after the fact instead of examining how your explanation changed during the call.',
      'Skipping the cue that did not fit because it seems small once the scenario is over.',
      'Trying to repair the whole call instead of choosing one reasoning cue to watch for next time.',
    ],
    toolPointers: [
      'If this reveals the same thinking pattern more than once, take that pattern to the Five Whys Tool.',
      'If you are still rotating through scenarios, use Scenario Day Reset to choose one adjustment for the next room.',
    ],
    relatedSections: [
      'clinical-reasoning',
      'pattern-recognition',
      'avoiding-premature-closure',
      'the-five-whys',
      'reflection-without-journaling',
      'turning-feedback-into-action',
      'resetting-when-thinking-narrows',
    ],
    relatedTools: ['five-whys-tool', 'reflection-without-journaling-tool', 'scenario-day-reset'],
  },
  {
    id: 'scenario-day-reset',
    title: 'Scenario Day Reset',
    status: 'drafted',
    toolType: 'reset',
    purpose:
      'Use this between scenario attempts when you need to turn feedback into one clear adjustment before the next room.',
    whenToUse:
      'Use this during scenario days, lab rotations, or repeated practice when the goal is to carry one small change into the next attempt instead of trying to fix everything.',
    whenNotToUse: [
      'Do not use this to process the entire scenario in detail.',
      'Do not use it when you are finished for the day and need deeper reflection instead.',
      'Do not choose more than one adjustment unless an instructor specifically asks you to.',
    ],
    fieldIntro:
      'Use these fields to choose one adjustment for the next attempt.',
    steps: [
      'Name the pattern that showed up.',
      'Choose one adjustment for the next attempt.',
      'Name the moment where you will test that adjustment.',
      'Leave the rest of the feedback for later.',
    ],
    fields: [
      {
        id: 'pattern',
        label: 'Pattern that showed up',
        helperText:
          'What repeated issue appeared, such as delayed transport, missed reassessment, fixation, over-talking, rushed treatment, or waiting for certainty?',
      },
      {
        id: 'one-adjustment',
        label: 'One adjustment',
        helperText:
          'What is the single change you will carry into the next room? Make it small, observable, and possible under pressure.',
      },
      {
        id: 'next-moment',
        label: 'Where I will test it',
        helperText:
          'Name the moment in the next scenario where this adjustment should appear.',
      },
    ],
    examples: [
      {
        title: 'Delayed transport after a detailed assessment',
        context:
          'A student completed a careful assessment but delayed transport because they wanted a clearer diagnosis before committing to a plan.',
        entries: [
          {
            label: 'Pattern that showed up',
            text: 'I kept gathering information after I already had enough risk to justify transport.',
          },
          {
            label: 'One adjustment',
            text: 'Once I identify a high-risk concern, I will state the concern and begin moving toward transport while continuing assessment.',
          },
          {
            label: 'Where I will test it',
            text: 'After the first full set of vitals and focused history, I will say whether this patient needs early transport and why.',
          },
        ],
      },
      {
        title: 'Fixation on the obvious injury',
        context:
          'A student focused heavily on a visible wrist deformity and lost track of a pale, quiet patient with a concerning mechanism.',
        entries: [
          {
            label: 'Pattern that showed up',
            text: 'I let the obvious injury become the whole call and did not keep checking global status.',
          },
          {
            label: 'One adjustment',
            text: 'I will treat visible injuries as one part of the picture and deliberately return to skin, mentation, vitals, pain, mechanism, and transport priority.',
          },
          {
            label: 'Where I will test it',
            text: 'After managing the first visible problem, I will pause and ask what else could hurt this patient if I miss it.',
          },
        ],
      },
    ],
    commonMistakes: [
      'Choosing three adjustments and carrying none of them clearly into the next room.',
      'Turning the reset into a full debrief when the next attempt is about to start.',
      'Choosing a vague adjustment such as “stay calmer” instead of one observable behaviour.',
      'Forgetting to name the moment where the adjustment should appear.',
    ],
    toolPointers: [
      'If the practice day is over, use Reflection Without Journaling Tool to keep the lesson small and usable.',
      'If the same scenario pattern keeps returning, use the Five Whys Tool later to find the deeper practice target.',
    ],
    relatedSections: [
      'scenario-days-as-learning-tools',
      'turning-feedback-into-action',
      'resetting-when-thinking-narrows',
    ],
    relatedTools: ['reflection-without-journaling-tool', 'five-whys-tool'],
  },
  {
    id: 'osce-reset',
    title: 'OSCE Reset',
    status: 'drafted',
    toolType: 'reset',
    purpose:
      'Use this before or during OSCE preparation when evaluation pressure starts pulling you away from safe structure and clear reasoning.',
    whenToUse:
      'Use this when you are preparing for OSCEs, recovering from a rough station, or noticing that pressure makes you rush, freeze, over-explain, or perform confidence instead of returning to structure.',
    whenNotToUse: [
      'Do not use this as a script to memorize for every station.',
      'Do not use it to ignore feedback about knowledge or skill gaps.',
      'Do not use it to look polished while skipping assessment, contraindication checks, reassessment, or transport decisions.',
    ],
    fieldIntro:
      'Use these fields to return attention to patient risk, structure, and the next safe action.',
    steps: [
      'Name the primary risk right now.',
      'Return to a trusted structure.',
      'Choose the next safest action.',
    ],
    fields: [
      {
        id: 'risk',
        label: 'Primary risk right now',
        helperText:
          'What could harm the patient if you miss it or delay too long?',
      },
      {
        id: 'structure',
        label: 'Structure to return to',
        helperText:
          'What assessment, directive, prioritization, or reassessment structure keeps you safe when pressure rises?',
      },
      {
        id: 'next-action',
        label: 'Next safest action',
        helperText:
          'What action keeps the patient safe while you continue to clarify the situation? Include what you will reassess after acting and how you would explain the decision simply if asked.',
      },
    ],
    examples: [
      {
        title: 'Chest pain station',
        context:
          'A student feels time pressure during a chest pain OSCE and starts rushing toward treatment without clearly protecting the decision sequence.',
        entries: [
          {
            label: 'Primary risk right now',
            text: 'Possible cardiac ischemia with potential deterioration, plus medication harm if I rush past contraindication screening or vital sign reassessment.',
          },
          {
            label: 'Structure to return to',
            text: 'Primary assessment, focused chest pain history, vitals, 12-lead acquisition, contraindication screen, directive boundaries, treatment, and reassessment.',
          },
          {
            label: 'Next safest action',
            text: 'State the working concern, complete the required checks, treat if appropriate, and reassess pain, blood pressure, perfusion, and patient status after each intervention.',
          },
        ],
      },
      {
        title: 'Obvious injury station',
        context:
          'A student becomes focused on a visible fracture during an OSCE and starts performing tasks quickly while missing the broader patient picture.',
        entries: [
          {
            label: 'Primary risk right now',
            text: 'The visible injury matters, but the larger risk is missing shock, mechanism-related injuries, pain severity, or transport priority while trying to look busy and confident.',
          },
          {
            label: 'Structure to return to',
            text: 'Scene safety, primary survey, global appearance, mechanism, focused exam, pain management considerations, reassessment, packaging, and transport decision.',
          },
          {
            label: 'Next safest action',
            text: 'Acknowledge the injury, check global status and vitals, manage pain and immobilization appropriately, and keep reassessing whether the patient is becoming quieter, paler, or less stable.',
          },
        ],
      },
    ],
    commonMistakes: [
      'Trying to look confident instead of returning to patient risk, structure, and the next safe action.',
      'Narrating everything you know while the priority decision stays unclear.',
      'Rushing to treatment before contraindications, reassessment needs, or transport priorities are protected.',
      'Freezing because the station does not match the version you rehearsed.',
      'Treating reassessment as an ending instead of part of the intervention.',
    ],
    toolPointers: [
      'If one station leaves one clear adjustment, use Reflection Without Journaling Tool after the station to preserve it.',
      'If the same OSCE error keeps returning, use the Five Whys Tool to find the pattern underneath it.',
    ],
    relatedSections: [
      'osce-preparation',
      'performance-under-pressure',
      'resetting-when-thinking-narrows',
      'clinical-reasoning',
    ],
    relatedTools: ['reflection-without-journaling-tool', 'five-whys-tool'],
  },
  {
    id: 'reflection-without-journaling-tool',
    title: 'Reflection Without Journaling Tool',
    status: 'drafted',
    toolType: 'thinking-check',
    purpose:
      'Use this when you need to learn from one moment without writing a long journal entry or replaying the whole scenario.',
    whenToUse:
      'Use this after a lab, scenario, OSCE, feedback point, or placement moment when you need one clear adjustment and do not need a full written reflection.',
    whenNotToUse: [
      'Do not use this to process a whole call in detail.',
      'Do not use it while you are still between scenario attempts and need a fast reset instead.',
      'Do not use it to judge your personality, confidence, or worth.',
    ],
    fieldIntro:
      'Use these fields to extract one useful adjustment without replaying the whole scenario.',
    steps: [
      'Choose one moment that mattered.',
      'Name what was happening at the time.',
      'Explain what shaped your response.',
      'Decide what you would notice next time.',
      'Choose one adjustment.',
    ],
    fields: [
      {
        id: 'one-moment',
        label: 'One moment',
        helperText:
          'Choose one decision, hesitation, reassessment point, communication moment, or shift in patient status. Do not review the whole call.',
      },
      {
        id: 'what-was-happening',
        label: 'What was happening?',
        helperText:
          'What was going on in the patient, scene, team, or evaluation environment at that point?',
      },
      {
        id: 'what-shaped-response',
        label: 'What shaped my response?',
        helperText:
          'Explain the mechanism, not just the label. A surface answer names the outcome, such as “I was overloaded.” A useful answer explains what made that response happen, such as “I had no structure to return to after the first intervention, so I moved to the next task instead of reassessing.”',
      },
      {
        id: 'notice-next-time',
        label: 'What would I notice next time?',
        helperText:
          'What cue, change, feeling, question, or patient response would alert you earlier?',
      },
      {
        id: 'one-adjustment',
        label: 'One adjustment',
        helperText:
          'What is one small change you can carry into a future scenario, lab, OSCE, or placement moment?',
      },
    ],
    examples: [
      {
        title: 'Abdominal pain with a quieter patient',
        context:
          'A student finished a scenario feeling uneasy because the patient became quieter and paler while the student kept gathering more history.',
        entries: [
          {
            label: 'One moment',
            text: 'The patient became quieter, paler, and less engaged while I continued asking history questions about abdominal pain.',
          },
          {
            label: 'What was happening?',
            text: 'The patient was older, had persistent vague abdominal pain, nausea, and subtle blood pressure drift. The presentation was unclear, but the overall trajectory was becoming more concerning.',
          },
          {
            label: 'What shaped my response?',
            text: 'I had no decision rule for when vague presentations require action before the picture clears. I kept assessing because gathering more information felt like the safe choice, and nothing in my preparation had made early conservative action feel equally safe.',
          },
          {
            label: 'What would I notice next time?',
            text: 'A patient becoming quieter, paler, less interactive, or more uncomfortable during assessment should make me pause and reassess global status, vitals, transport priority, and risk.',
          },
          {
            label: 'One adjustment',
            text: 'When a vague patient starts looking worse, I will say the risk out loud and decide whether early transport or escalation is safer than continuing to search for a clean diagnosis.',
          },
        ],
      },
    ],
    commonMistakes: [
      'Choosing the whole scenario instead of the one moment that would change next time.',
      'Writing what sounds reflective instead of naming what should change in the next attempt.',
      'Stopping at a label such as “overloaded” without identifying what created the overload.',
      'Continuing to replay the event after the useful adjustment is already clear.',
    ],
    toolPointers: [
      'If you are still between scenario attempts, use Scenario Day Reset instead of doing a longer reflection.',
      'If the same issue has appeared more than once, use the Five Whys Tool to find the practice target underneath it.',
    ],
    relatedSections: [
      'reflection-without-journaling',
      'turning-feedback-into-action',
      'the-five-whys',
      'scenario-days-as-learning-tools',
    ],
    relatedTools: ['scenario-day-reset', 'five-whys-tool', 'clinical-reasoning-check'],
  },
  {
    id: 'five-whys-tool',
    title: 'Five Whys Tool',
    status: 'drafted',
    toolType: 'thinking-check',
    purpose:
      'Trace a mistake, hesitation, or repeated feedback point back to something you can actually work on.',
    whenToUse:
      'Use this after a scenario, OSCE, lab, or feedback conversation when the surface mistake is clear but the learning target is not.',
    whenNotToUse: [
      'Do not use this after every performance.',
      'Do not use it to interrogate yourself or assign blame.',
      'Do not keep going after the answer has become actionable.',
      'Do not use it when the next practice target is already obvious.',
    ],
    fieldIntro:
      'Use these fields to find what you can actually practise.',
    steps: [
      'Name the visible problem.',
      'Ask why it happened in that moment.',
      'Keep asking what shaped the response until the answer becomes actionable.',
      'Stop when the answer points to a learning, reasoning, structure, or preparation issue.',
      'Turn that answer into one practice target.',
    ],
    fields: [
      {
        id: 'visible-problem',
        label: 'Visible problem',
        helperText:
          'Name the behaviour, not your worth. For example: delayed transport, missed reassessment, over-focused on one cue, waited for certainty, or skipped contraindication screening.',
      },
      {
        id: 'first-why',
        label: 'First why',
        helperText:
          'Why did that happen in the moment? Use the conditions of the call, not hindsight.',
      },
      {
        id: 'keep-going',
        label: 'Keep going until actionable',
        helperText:
          'Ask what shaped the response beneath the surface answer. Look for uncertainty, cognitive load, weak structure, unclear directive purpose, retrieval gaps, fixation, or practice design. You do not need exactly five whys.',
      },
      {
        id: 'actionable-stop',
        label: 'Where I should stop',
        helperText:
          'Stop when the answer points to something you can practise, clarify, retrieve, rehearse, or structure differently.',
      },
      {
        id: 'practice-target',
        label: 'Practice target',
        helperText:
          'What is one thing to practise, notice, or structure differently next time? The target should be small enough to carry into the next attempt.',
      },
    ],
    examples: [
      {
        title: 'Delayed nitroglycerin',
        context:
          'A student delayed nitroglycerin in a chest pain scenario and needs to find the learning target underneath the surface mistake.',
        entries: [
          {
            label: 'Visible problem',
            text: 'I delayed nitroglycerin in a chest pain scenario.',
          },
          {
            label: 'First why',
            text: 'I was not sure the pain was ischemic because the 12-lead was not diagnostic.',
          },
          {
            label: 'Keep going until actionable',
            text: 'I treated nitroglycerin as something I should only give once the diagnosis felt more certain. Underneath that, I understood the directive mostly through indications and thresholds, not through the risk it is managing.',
          },
          {
            label: 'Where I should stop',
            text: 'The useful stop point is directive meaning. I need to connect the treatment to clinical risk, contraindication screening, and reassessment, not just memorize when it is allowed.',
          },
          {
            label: 'Practice target',
            text: 'When reviewing cardiac symptom relief, connect each treatment to the clinical risk, contraindication screen, and reassessment point.',
          },
        ],
      },
      {
        title: 'Missed reassessment after glucose treatment',
        context:
          'A student gave treatment for hypoglycemia, then moved on without checking whether the patient’s mental status and overall condition actually improved.',
        entries: [
          {
            label: 'Visible problem',
            text: 'I missed reassessment after glucose treatment.',
          },
          {
            label: 'First why',
            text: 'I felt like the main problem had been addressed once treatment was given.',
          },
          {
            label: 'Keep going until actionable',
            text: 'I was thinking of treatment as completion rather than as a question that needs an answer. I also did not have a built-in post-treatment reassessment phrase or habit to return to under pressure.',
          },
          {
            label: 'Where I should stop',
            text: 'The useful stop point is reassessment structure. I do not need a bigger lesson about trying harder. I need a reliable post-intervention check.',
          },
          {
            label: 'Practice target',
            text: 'After each intervention in practice, say what I expect to change and what I will reassess before moving on.',
          },
        ],
      },
    ],
    commonMistakes: [
      'Forcing exactly five whys after the useful answer has already appeared.',
      'Turning the process into self-criticism instead of looking for a learning structure to adjust.',
      'Stopping at “I forgot” without asking what made forgetting likely under pressure.',
      'Creating a practice target that cannot be seen or tested in the next scenario.',
    ],
    toolPointers: [
      'Use this when Reflection Without Journaling gives you an adjustment that still has not changed performance.',
      'If the problem was mainly a narrowed first impression, use Clinical Reasoning Check first to identify what did not fit.',
    ],
    relatedSections: [
      'the-five-whys',
      'reflection-without-journaling',
      'turning-feedback-into-action',
      'common-errors-and-what-they-reveal',
      'focused-practice-after-feedback',
    ],
    relatedTools: ['reflection-without-journaling-tool', 'clinical-reasoning-check'],
  },
]

export const activeTools = tools.filter((tool) => tool.status === 'drafted')

export const getToolById = (id: string) =>
  tools.find((tool) => tool.id === id)
