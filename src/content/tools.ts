import type { Tool } from './types'

export const tools: Tool[] = [
  {
    id: "directive-meaning-check",
    title: "Directive Meaning Check",
    status: "drafted",
    toolType: "thinking-check",
    purpose: "Use this when a directive feels like wording you are trying to survive instead of a decision structure you understand. The goal is to understand what the directive is protecting, supporting, or preventing while still respecting the actual standard.",
    whenToUse: "Use this when a directive feels hard to remember, intimidating during scenarios or OSCEs, easy to recite but hard to explain, or fragile when the patient does not fit the clean version you studied.",
    whenNotToUse: [
      "Do not use this as a replacement for the directive itself.",
      "Do not use it to loosen indications, contraindications, dose, route, patch points, reassessment expectations, or documentation requirements.",
      "Do not turn it into a quiz or a rewritten copy of the whole directive."
    ],
    steps: [
      "Choose one directive or one part of a directive.",
      "Name the clinical risk underneath the directive.",
      "Identify what physiology or patient problem the directive supports or protects.",
      "List the firm boundaries that are not flexible.",
      "Name what would make you withhold, stop, patch, reassess, or change course.",
      "Decide what must be reassessed afterward."
    ],
    fields: [
      {
        id: "directive",
        label: "Directive or decision",
        helperText: "Name the directive, medication, intervention, or decision point you are reviewing."
      },
      {
        id: "clinical-risk",
        label: "Clinical risk",
        helperText: "What patient risk is this directive built around, such as worsening oxygenation, poor perfusion, untreated pain, medication harm, or missed deterioration?"
      },
      {
        id: "physiology",
        label: "Physiology or patient problem",
        helperText: "What body process, symptom, or clinical priority is being supported, protected, or kept from worsening?"
      },
      {
        id: "firm-boundaries",
        label: "Firm boundaries",
        helperText: "List the indications, contraindications, dose, route, age limits, vital sign limits, assessments, patch points, maximums, and documentation requirements that matter."
      },
      {
        id: "withhold-change",
        label: "Withhold, stop, patch, or change course",
        helperText: "What finding, missing information, change after treatment, or safety concern would make you pause or alter the plan?"
      },
      {
        id: "reassessment",
        label: "Reassessment",
        helperText: "What should you reassess after acting, and what change would show whether the decision is still appropriate?"
      }
    ],
    examples: [
      {
        title: "Oxygen Administration",
        context: "A student has memorized oxygen as a number-based decision, but needs to understand what oxygen is meant to support during a shortness of breath call.",
        entries: [
          {
            label: "Clinical risk",
            text: "The patient may not be oxygenating adequately, or may be at risk of worsening oxygenation based on their presentation."
          },
          {
            label: "Physiology",
            text: "Oxygen supports oxygen delivery when oxygenation is inadequate or threatened."
          },
          {
            label: "Firm boundaries",
            text: "The student must consider the directive, patient presentation, oxygen saturation, reliability of the reading, work of breathing, mental status, skin signs, and response to care."
          },
          {
            label: "Withhold, change, or reassess",
            text: "Oxygen should not be applied automatically just because a patient says they are short of breath. The student should ask whether oxygen is indicated, whether the reading is reliable, and whether the overall presentation suggests risk."
          },
          {
            label: "Reassessment",
            text: "After oxygen is applied or adjusted, reassess oxygen saturation, work of breathing, respiratory rate, mental status, skin signs, patient comfort, and whether the patient is improving, worsening, or unchanged."
          }
        ],
        nextAdjustment: "Write one short note: this directive protects against, supports, has firm boundaries around, requires withholding or changing course if, and must be reassessed by checking."
      }
    ],
    relatedSections: [
      "directives-through-purpose",
      "pathophysiology-through-patterns",
      "clinical-reasoning",
      "osce-preparation",
      "performance-under-pressure"
    ]
  },
  {
    id: "smart-note-template",
    title: "Smart Note Template",
    status: "drafted",
    toolType: "template",
    purpose: "Turn one concept, scenario error, confusing idea, or repeated feedback point into a small reusable note that helps future you understand, connect, retrieve, and use one idea.",
    whenToUse: "Use this when an idea is worth keeping because it keeps showing up in class, lab, feedback, directives, scenarios, or reassessment decisions.",
    whenNotToUse: [
      "Do not use this to capture everything from a lecture.",
      "Do not use it as a full condition summary.",
      "Do not use it when the note would only copy a definition without changing how you think."
    ],
    steps: [
      "Choose one idea, not a whole topic.",
      "Write the core claim in one clear sentence.",
      "Explain the idea in your own words.",
      "List the clinical signals that would make the idea visible in assessment, scenarios, or reassessment.",
      "Name the common confusion or trap the note is meant to prevent.",
      "Link only to ideas that change how you understand or use this idea."
    ],
    fields: [
      {
        id: "claim",
        label: "Claim",
        helperText: "The core idea in one clear sentence. It should be small enough to reuse later."
      },
      {
        id: "explanation",
        label: "Explanation",
        helperText: "Explain what is happening, why it matters, what mechanism or decision it connects to, and how it could change what you do next time."
      },
      {
        id: "clinical-signals",
        label: "Clinical signals",
        helperText: "What would you see, hear, ask, reassess, or notice in a patient, scenario, or lab?"
      },
      {
        id: "common-confusion",
        label: "Common confusion",
        helperText: "What mistake, mix-up, or trap is this note meant to prevent?"
      },
      {
        id: "links",
        label: "Links",
        helperText: "Connect this note to a few related mechanisms, directives, scenario errors, reassessment habits, or clinical reasoning patterns."
      }
    ],
    examples: [
      {
        title: "Respiratory Fatigue",
        context: "A student keeps hearing less wheezing after treatment and wants to avoid assuming improvement too early.",
        entries: [
          {
            label: "Claim",
            text: "Quiet lungs can mean worsening respiratory fatigue."
          },
          {
            label: "Explanation",
            text: "In severe bronchospasm or respiratory distress, less wheezing is not always improvement. If the patient is working hard to breathe and then becomes quieter, more tired, less able to speak, or more altered, the issue may be reduced air movement rather than recovery."
          },
          {
            label: "Clinical signals",
            text: "Decreasing ability to speak, persistent or worsening work of breathing, reduced air movement, fatigue after initial treatment, altered mental status, poor response to bronchodilator treatment, or declining respiratory effectiveness despite less obvious wheeze."
          },
          {
            label: "Common confusion",
            text: "Students may hear less wheezing and assume the patient is improving. The safer question is whether air movement, effort, speech, mental status, and overall trajectory are improving together."
          },
          {
            label: "Links",
            text: "Work of breathing, air trapping, oxygenation versus ventilation, respiratory fatigue, reassessment after intervention."
          }
        ],
        nextAdjustment: "Before the next respiratory scenario, review the note and practise saying what reassessment findings would prove improvement."
      },
      {
        title: "Directive Decision",
        context: "A student wants a note that makes contraindications feel clinically meaningful rather than like isolated checklist wording.",
        entries: [
          {
            label: "Claim",
            text: "A contraindication usually points to a risk, not just a rule."
          },
          {
            label: "Explanation",
            text: "Contraindications are not random barriers. They usually exist because a treatment could harm the patient or make the situation worse under certain conditions. Understanding the risk behind the contraindication makes the directive easier to remember and safer to apply."
          },
          {
            label: "Clinical signals",
            text: "Borderline vital signs, incomplete history, medication use that changes eligibility, patient condition changing after treatment, uncertainty about whether the directive still fits, or a need for reassessment, withholding, patching, or changing course."
          },
          {
            label: "Common confusion",
            text: "Students may treat contraindications as checklist items to recite rather than risks to understand. This can lead to either unsafe treatment or unnecessary hesitation."
          },
          {
            label: "Links",
            text: "Directive meaning, clinical risk, medication safety, reassessment after treatment, OSCE reasoning."
          }
        ],
        nextAdjustment: "After a scenario or directive review, turn one confusing decision into a short Smart Note instead of rewriting the full directive."
      }
    ],
    commonMistakes: [
      "Turning the note into a lecture summary.",
      "Capturing every detail instead of one reusable idea.",
      "Linking by topic instead of meaning.",
      "Writing notes to look complete instead of to support future decisions."
    ],
    relatedSections: [
      "smart-notes-for-paramedic-students",
      "types-of-notes-and-idea-maturation",
      "obsidian-for-learning-paramedicine",
      "clinical-recall-without-trivia"
    ]
  },
  {
    id: "clinical-recall-prompt-builder",
    title: "Clinical Recall Prompt Builder",
    status: "drafted",
    toolType: "prompt-builder",
    purpose: "Turn facts, notes, scenario errors, directive details, and confusing concepts into recall prompts that support clinical use rather than trivia.",
    whenToUse: "Use this when something needs to become easier to reach during patient assessment, decision-making, reassessment, communication, or OSCE performance.",
    whenNotToUse: [
      "Do not use it for every detail.",
      "Do not turn every scenario into cards.",
      "Do not make prompts so large that one question tries to hold an entire condition.",
      "Do not let Anki or any platform become the point of the work."
    ],
    steps: [
      "Name the fact, concept, scenario error, directive detail, or Smart Note you are trying to remember.",
      "Ask what clinical job this knowledge does.",
      "Make one basic fact prompt.",
      "Make one clinical cue prompt.",
      "Make one decision or boundary prompt.",
      "Make one reassessment prompt.",
      "Optionally, make one communication prompt."
    ],
    fields: [
      {
        id: "source-idea",
        label: "What am I trying to remember?",
        helperText: "Name the fact, concept, scenario error, directive detail, or Smart Note. Keep it small."
      },
      {
        id: "clinical-job",
        label: "Clinical job",
        helperText: "What should this help you notice, decide, avoid, reassess, explain, compare, recognize, or change?"
      },
      {
        id: "basic-fact",
        label: "Basic fact prompt",
        helperText: "Start with the clean recall detail. Basic fact prompts are not bad, but they should not be the whole system."
      },
      {
        id: "clinical-cue",
        label: "Clinical cue prompt",
        helperText: "Connect the idea to what you might see, hear, ask, or notice in assessment."
      },
      {
        id: "decision-boundary",
        label: "Decision or boundary prompt",
        helperText: "Connect the idea to action, withholding, caution, scope, or a safety boundary."
      },
      {
        id: "reassessment",
        label: "Reassessment prompt",
        helperText: "Ask what should be checked again after time, treatment, or new information."
      },
      {
        id: "communication",
        label: "Communication prompt",
        helperText: "Optional. Ask how you would explain the reasoning to a partner, preceptor, instructor, patient, or receiving staff."
      }
    ],
    commonMistakes: [
      "Making every prompt too large.",
      "Skipping basic facts entirely.",
      "Making prompts that only work because the wording is familiar.",
      "Turning every scenario into cards.",
      "Forgetting reassessment."
    ],
    examples: [
      {
        title: "Nitroglycerin",
        context: "A student knows nitroglycerin exists in chest pain care, but wants recall prompts that support safe decision-making rather than only dose memorization.",
        entries: [
          {
            label: "What am I trying to remember?",
            text: "Nitroglycerin safety and decision-making."
          },
          {
            label: "Clinical job",
            text: "Help me decide whether nitro is appropriate, what could make it unsafe, and what I need to reassess afterward."
          },
          {
            label: "Basic fact prompt",
            text: "What major contraindications or safety checks must be considered before nitroglycerin?"
          },
          {
            label: "Clinical cue prompt",
            text: "What features of a chest pain call make ischemic pain more concerning even before diagnostic certainty?"
          },
          {
            label: "Decision or boundary prompt",
            text: "What findings or history would make nitroglycerin unsafe or require me to withhold, stop, patch, or change course?"
          },
          {
            label: "Reassessment prompt",
            text: "After nitroglycerin, what should I reassess to judge effect and safety?"
          },
          {
            label: "Communication prompt",
            text: "How would I explain why nitroglycerin is being considered even when the ECG is not diagnostic yet?"
          }
        ],
        nextAdjustment: "Build prompts that test both recall and safe use, especially boundaries and reassessment."
      },
      {
        title: "Respiratory Fatigue",
        context: "A student missed signs that a respiratory patient was tiring after initial treatment.",
        entries: [
          {
            label: "What am I trying to remember?",
            text: "Signs that a respiratory patient is tiring."
          },
          {
            label: "Clinical job",
            text: "Help me notice deterioration when the presentation becomes quieter rather than more dramatic."
          },
          {
            label: "Basic fact prompt",
            text: "What are signs of respiratory fatigue?"
          },
          {
            label: "Clinical cue prompt",
            text: "What makes quieter lung sounds concerning in severe respiratory distress?"
          },
          {
            label: "Decision or boundary prompt",
            text: "What findings would make me escalate care rather than assume improvement?"
          },
          {
            label: "Reassessment prompt",
            text: "After treatment, what should I reassess to decide whether ventilation is actually improving?"
          },
          {
            label: "Communication prompt",
            text: "How would I explain to my partner that the patient may be tiring despite less obvious wheezing?"
          }
        ],
        nextAdjustment: "Use recall prompts that train noticing, not only definitions."
      },
      {
        title: "Poor Perfusion",
        context: "A student wants perfusion knowledge to show up earlier during assessment, before the patient becomes obviously unstable.",
        entries: [
          {
            label: "What am I trying to remember?",
            text: "Early signs of poor perfusion."
          },
          {
            label: "Clinical job",
            text: "Help me recognize risk before blood pressure drops or the presentation becomes obvious."
          },
          {
            label: "Basic fact prompt",
            text: "What are signs of poor perfusion?"
          },
          {
            label: "Clinical cue prompt",
            text: "What patient presentation details might suggest poor perfusion before hypotension appears?"
          },
          {
            label: "Decision or boundary prompt",
            text: "What findings would make this patient higher priority even if one vital sign still looks acceptable?"
          },
          {
            label: "Reassessment prompt",
            text: "What changes in mental status, skin, pulse quality, blood pressure trend, or patient appearance would suggest worsening perfusion?"
          },
          {
            label: "Communication prompt",
            text: "How would I explain a conservative transport decision when the patient is not dramatically unstable yet?"
          }
        ],
        nextAdjustment: "Connect recall to early recognition and conservative decision-making."
      }
    ],
    relatedSections: [
      "clinical-recall-without-trivia",
      "anki-for-paramedic-learning",
      "retrieval-and-spaced-learning",
      "smart-notes-for-paramedic-students"
    ]
  },
  {
    id: "scenario-day-reset",
    title: "Scenario Day Reset",
    status: "drafted",
    toolType: "reset",
    purpose: "Leave a scenario with one practical adjustment for the next attempt instead of carrying the whole call forward.",
    whenToUse: "Use this immediately after a scenario when you need to turn feedback, frustration, or a visible performance pattern into one thing to try next.",
    whenNotToUse: [
      "Do not use this as a full reflection worksheet.",
      "Do not use it as an OSCE checklist.",
      "Do not use it as a grading rubric, scenario evaluation form, AI feedback tool, instructor dashboard, or journaling system."
    ],
    steps: [
      "Name the main pattern that showed up.",
      "Choose one adjustment small enough to carry into the next room.",
      "Name the next moment where you will test it."
    ],
    fields: [
      {
        id: "pattern",
        label: "Pattern",
        helperText: "What kept showing up? Choose one performance pattern, such as delayed reassessment, hesitation around risk, fixation, over-talking, or transport lag."
      },
      {
        id: "one-adjustment",
        label: "One adjustment",
        helperText: "What is one specific thing you will do differently in the next scenario?"
      },
      {
        id: "next-moment",
        label: "Next moment to test it",
        helperText: "Where in the next scenario will you watch for this pattern and try the adjustment?"
      }
    ],
    examples: [
      {
        title: "Delayed transport after a detailed assessment",
        context: "A student finished a scenario with good assessment details but delayed the transport decision because they were still looking for a clearer diagnosis.",
        entries: [
          {
            label: "Pattern",
            text: "I kept gathering more information even after enough risk was present to start moving."
          },
          {
            label: "One adjustment",
            text: "Once I identify a high-risk concern, I will name it out loud and start transport planning while continuing assessment."
          },
          {
            label: "Next moment to test it",
            text: "In the next scenario, as soon as I see risk building without diagnostic certainty, I will say, “This may be worse than it looks. Let’s start moving while we keep assessing.”"
          }
        ],
        nextAdjustment: "Carry one adjustment forward. Do not try to fix the entire scenario at once."
      }
    ],
    relatedSections: [
      "scenario-days-as-learning-tools",
      "common-errors-and-what-they-reveal",
      "focused-practice-after-feedback"
    ],
    relatedTools: [
      "reflection-without-journaling-tool",
      "five-whys-tool"
    ]
  },
  {
    id: "osce-reset",
    title: "OSCE Reset",
    status: "drafted",
    toolType: "reset",
    purpose: "Re-orient quickly during OSCE preparation or after a station by returning to risk, structure, and the next action.",
    whenToUse: "Use this before an OSCE station, during practice when your thinking narrows, or after a station when you need a simple way to recover structure without replaying everything.",
    whenNotToUse: [
      "Do not use this to memorize a script.",
      "Do not use it as a full OSCE checklist.",
      "Do not use it to chase flawless performance or reprocess every detail afterward."
    ],
    steps: [
      "Name the primary risk right now.",
      "Return to the assessment or decision structure that protects you from drifting.",
      "Choose the next safe action, reassessment, or communication step."
    ],
    fields: [
      {
        id: "risk",
        label: "Risk",
        helperText: "What is the primary patient risk or performance risk right now?"
      },
      {
        id: "structure",
        label: "Structure",
        helperText: "What stable structure should you return to, such as primary survey, focused assessment, contraindication screen, reassessment, or transport decision?"
      },
      {
        id: "next-action",
        label: "Next action",
        helperText: "What is the next safe step that keeps the station moving without abandoning reasoning?"
      }
    ],
    commonMistakes: [
      "Trying to restart the whole station mentally.",
      "Performing confidence instead of returning to structure.",
      "Using the reset as a script instead of a way to protect thinking."
    ],
    examples: [
      {
        title: "Chest Pain Station",
        context: "A student feels pressure during a chest pain OSCE and starts rushing toward treatment.",
        entries: [
          {
            label: "Situation",
            text: "The patient has chest pain and the student feels time pressure while preparing for symptom relief."
          },
          {
            label: "Risk",
            text: "The primary risk is ischemia and avoidable deterioration, but medication harm is also possible if safety checks are skipped."
          },
          {
            label: "Structure",
            text: "Return to focused cardiac assessment, vital signs, contraindication screening, directive boundaries, and reassessment plan."
          },
          {
            label: "Next action",
            text: "Slow down enough to confirm safety, explain the decision, treat if appropriate, and reassess pain, blood pressure, symptoms, and overall status."
          }
        ],
        nextAdjustment: "Use the reset to protect safe sequencing under evaluation pressure."
      },
      {
        title: "Respiratory Station",
        context: "A student becomes fixated on the first intervention and loses the bigger assessment picture.",
        entries: [
          {
            label: "Situation",
            text: "The patient is short of breath and the student is worried about doing the treatment sequence correctly."
          },
          {
            label: "Risk",
            text: "The patient may be tiring, deteriorating, or not responding to the assumed problem."
          },
          {
            label: "Structure",
            text: "Return to airway, breathing effectiveness, oxygenation, work of breathing, mental status, lung sounds, vital trends, and response to treatment."
          },
          {
            label: "Next action",
            text: "Reassess whether the patient is actually improving, communicate concern if they are not, and prepare to escalate or transport appropriately."
          }
        ],
        nextAdjustment: "When pressure rises, return to the patient problem before adding more actions."
      }
    ],
    relatedSections: [
      "osce-preparation",
      "performance-under-pressure",
      "resetting-when-thinking-narrows"
    ],
    relatedTools: [
      "scenario-day-reset",
      "reflection-without-journaling-tool",
      "clinical-reasoning-check"
    ]
  },
  {
    id: "reflection-without-journaling-tool",
    title: "Reflection Without Journaling Tool",
    status: "drafted",
    toolType: "thinking-check",
    purpose: "Turn one meaningful performance moment into one next adjustment without writing a full journal entry or replaying the whole call.",
    whenToUse: "Use this after a scenario, OSCE, lab, clinical day, or feedback conversation when one moment should shape what you notice or do next time.",
    whenNotToUse: [
      "Do not use this to process every detail of the call.",
      "Do not use it when you need formal documentation or a required reflective assignment.",
      "Do not use it as a way to punish yourself after a difficult performance."
    ],
    steps: [
      "Choose one moment that mattered.",
      "Name what was happening at that moment.",
      "Identify what shaped your response.",
      "Decide what you would notice next time.",
      "Choose one adjustment small enough to use."
    ],
    fields: [
      {
        id: "one-moment",
        label: "One moment",
        helperText: "Choose a point where a decision mattered, uncertainty appeared, or feedback landed."
      },
      {
        id: "what-was-happening",
        label: "What was happening?",
        helperText: "Describe the patient, task, pressure, cue, or decision without retelling the whole call."
      },
      {
        id: "what-shaped-response",
        label: "What shaped my response?",
        helperText: "Name the cue, assumption, habit, uncertainty, knowledge gap, or pressure response that influenced what you did."
      },
      {
        id: "notice-next-time",
        label: "What would I notice next time?",
        helperText: "Choose the cue, change, or question you want to catch earlier."
      },
      {
        id: "one-adjustment",
        label: "One adjustment",
        helperText: "Decide what you will do differently in the next similar moment."
      }
    ],
    examples: [
      {
        title: "Missed reassessment after treatment",
        context: "A student gave a treatment during a respiratory scenario but did not reassess clearly afterward.",
        entries: [
          {
            label: "Scenario moment",
            text: "After the first respiratory treatment, I moved on to other tasks and did not deliberately reassess whether the patient was improving."
          },
          {
            label: "What was happening?",
            text: "The patient still looked short of breath, but I was focused on completing the next expected steps and keeping the scenario moving."
          },
          {
            label: "What shaped my response?",
            text: "I treated the intervention as the end of that part of the call instead of using it as a question that needed reassessment."
          },
          {
            label: "What would I notice next time?",
            text: "After any treatment, I need to check whether the patient’s work of breathing, speech, mental status, vital signs, and overall appearance are changing in the right direction."
          },
          {
            label: "One adjustment",
            text: "After each intervention, I will say out loud what I am reassessing and what would make me continue, change, or escalate care."
          }
        ],
        nextAdjustment: "Stop once the adjustment is clear. More reflection is not automatically better reflection."
      }
    ],
    relatedSections: [
      "reflection-without-journaling",
      "turning-feedback-into-action",
      "the-five-whys",
      "scenario-days-as-learning-tools"
    ],
    relatedTools: [
      "scenario-day-reset",
      "osce-reset",
      "five-whys-tool",
      "clinical-reasoning-check"
    ]
  },
  {
    id: "five-whys-tool",
    title: "Five Whys Tool",
    status: "drafted",
    toolType: "thinking-check",
    purpose: "Trace a mistake, hesitation, or repeated feedback point back to something you can actually work on.",
    whenToUse: "Use this after a scenario, OSCE, lab, or feedback conversation when the surface mistake is clear but the learning target is not.",
    whenNotToUse: [
      "Do not use this after every performance.",
      "Do not use it to interrogate yourself or assign blame.",
      "Do not keep going after the answer has become actionable.",
      "Do not use it when the next practice target is already obvious."
    ],
    steps: [
      "Name the visible problem.",
      "Ask why it happened in that moment.",
      "Keep asking what shaped the response.",
      "Stop when the answer points to a learning, reasoning, structure, or preparation issue.",
      "Turn that answer into one practice target."
    ],
    fields: [
      {
        id: "visible-problem",
        label: "Visible problem",
        helperText: "Name the behaviour, not your worth. For example: delayed transport, missed reassessment, over-focused on one cue, waited for certainty, or skipped contraindication screening."
      },
      {
        id: "why-1",
        label: "Why 1",
        helperText: "Why did that happen in the moment? Use the conditions of the call, not hindsight."
      },
      {
        id: "why-2",
        label: "Why 2",
        helperText: "What made that response feel reasonable or available at the time? Look for cognitive load, uncertainty, habit, weak structure, unclear directive purpose, or fixation."
      },
      {
        id: "why-3",
        label: "Why 3",
        helperText: "What was underneath that? Was this a knowledge gap, retrieval gap, reasoning issue, pressure response, or practice design problem?"
      },
      {
        id: "why-4-5",
        label: "Why 4 or 5, if needed",
        helperText: "What part of the learning system needs support? Stop when the answer becomes actionable. You do not need exactly five whys."
      },
      {
        id: "practice-target",
        label: "Practice target",
        helperText: "What is one thing to practise, notice, or structure differently next time? The target should be small enough to carry into the next attempt."
      }
    ],
    examples: [
      {
        title: "Delayed nitroglycerin",
        context: "A student delayed nitroglycerin in a chest pain scenario and needs to find the learning target underneath the surface mistake.",
        entries: [
          {
            label: "Visible problem",
            text: "I delayed nitroglycerin in a chest pain scenario."
          },
          {
            label: "Why 1",
            text: "I was not sure the pain was ischemic because the 12-lead was not diagnostic."
          },
          {
            label: "Why 2",
            text: "I treated nitro as something I should only give once the diagnosis felt more certain."
          },
          {
            label: "Why 3",
            text: "I understood the directive mostly through indications and thresholds, not through the risk it is managing."
          },
          {
            label: "Why 4",
            text: "My study focused on whether nitro was allowed, not on what patient problem it supports or what reassessment should follow."
          },
          {
            label: "Practice target",
            text: "When reviewing cardiac symptom relief, connect each treatment to the clinical risk, contraindication screen, and reassessment point, not just the dose and threshold."
          }
        ],
        nextAdjustment: "Use this when the adjustment is not obvious because the surface error is hiding the real learning target."
      }
    ],
    relatedSections: [
      "the-five-whys",
      "reflection-without-journaling",
      "turning-feedback-into-action",
      "common-errors-and-what-they-reveal",
      "focused-practice-after-feedback"
    ],
    relatedTools: [
      "reflection-without-journaling-tool",
      "clinical-reasoning-check"
    ]
  },
  {
    id: "clinical-reasoning-check",
    title: "Clinical Reasoning Check",
    status: "drafted",
    toolType: "thinking-check",
    purpose: "Use this when you need to check how your thinking behaved during a scenario, OSCE, lab, placement moment, or feedback point.",
    whenToUse: "Use this after a call or scenario when your first explanation, decision, or plan may have become too narrow, too rigid, or hard to explain.",
    whenNotToUse: [
      "Do not use this when the issue was simply a missed fact or skill step.",
      "Do not use it when you already know the specific practice target.",
      "Do not use it to diagnose the patient perfectly after the fact.",
      "Do not let it become a way to replay the entire call."
    ],
    steps: [
      "Name your working explanation at the time.",
      "Identify what information supported it.",
      "Identify what did not fit or needed more attention.",
      "Ask whether your thinking changed when the patient changed.",
      "Decide what cue, question, or reassessment would help next time."
    ],
    fields: [
      {
        id: "working-explanation",
        label: "Working explanation",
        helperText: "What did you think was happening at the time? This does not need to be a final diagnosis. It can be a working concern, risk, or likely pattern."
      },
      {
        id: "supporting-cues",
        label: "Supporting cues",
        helperText: "What information made that explanation reasonable? Include presentation, history, vitals, scene details, response to treatment, or directive context."
      },
      {
        id: "did-not-fit",
        label: "What did not fit?",
        helperText: "What information was missing, conflicting, changing, or easy to ignore? Look for the cue that should have made you slow down, widen your thinking, reassess, or ask a different question."
      },
      {
        id: "reasoning-response",
        label: "Reasoning response",
        helperText: "Did your thinking change as new information appeared? If not, what kept the first explanation in place?"
      },
      {
        id: "next-reasoning-cue",
        label: "Next reasoning cue",
        helperText: "What would you watch for, ask, or reassess next time? Choose one cue or question that would keep your working explanation flexible."
      }
    ],
    examples: [
      {
        title: "Respiratory first impression",
        context: "A student locked onto asthma because the patient was wheezy and anxious, but missed signs that the patient was becoming fatigued.",
        entries: [
          {
            label: "Working explanation",
            text: "I thought the shortness of breath was asthma because the patient was wheezy and anxious."
          },
          {
            label: "Supporting cues",
            text: "They had a history of asthma, wheezing, increased work of breathing, and seemed to improve slightly after the first treatment."
          },
          {
            label: "What did not fit?",
            text: "They became quieter, more tired, and spoke less. I treated quieter lung sounds as improvement instead of considering worsening air movement or fatigue."
          },
          {
            label: "Reasoning response",
            text: "My thinking did not change enough after the reassessment. I stayed with the original asthma-improving explanation."
          },
          {
            label: "Next reasoning cue",
            text: "After respiratory treatment, check whether quietness means improvement or fatigue by reassessing air entry, work of breathing, speech, mental status, and vital signs."
          }
        ],
        nextAdjustment: "Treat the first impression as a working explanation and actively search for signs that it is failing."
      }
    ],
    relatedSections: [
      "clinical-reasoning",
      "pattern-recognition",
      "avoiding-premature-closure",
      "the-five-whys",
      "reflection-without-journaling",
      "turning-feedback-into-action",
      "resetting-when-thinking-narrows"
    ],
    relatedTools: [
      "five-whys-tool",
      "reflection-without-journaling-tool",
      "osce-reset"
    ]
  }
]

export const activeTools = tools.filter((tool) => tool.status === 'drafted')

export const getToolById = (id: string) =>
  tools.find((tool) => tool.id === id)
