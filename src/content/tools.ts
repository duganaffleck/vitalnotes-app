import type { Tool } from './types'

export const tools: Tool[] = [
  {
    "id": "directive-meaning-check",
    "title": "Directive Meaning Check",
    "status": "drafted",
    "toolType": "thinking-check",
    "purpose": "Connect a directive to the patient risk it is built around, so the boundaries make sense and the decision holds up when the patient does not fit the clean version you studied.",
    "whenToUse": "A directive feels hard to remember under pressure. You can recite the indications but you cannot explain why the boundaries exist. You hesitate during scenarios or OSCEs not because you forgot the wording, but because the patient is borderline and the wording alone does not tell you what to do. The directive feels like a fragile memory test rather than a clinical reasoning structure.",
        "fieldIntro": "Use these fields to connect the directive to patient risk, physiology, firm boundaries, change points, and reassessment.",
"whenNotToUse": [
      "Do not use this as a replacement for the directive itself.",
      "Do not use it to loosen indications, contraindications, dose, route, patch points, reassessment expectations, or documentation requirements.",
      "Do not turn it into a quiz or a rewritten copy of the whole directive."
    ],
    "steps": [
      "Choose one directive, medication, intervention, or decision point.",
      "Name the patient risk the directive is built to manage. Ask what happens to the patient if this decision is wrong or delayed.",
      "Identify what physiology or clinical problem the directive supports or protects.",
      "Name the firm boundaries and ask why each one exists. The blood pressure threshold for nitroglycerin is not an arbitrary number. The time window in the stroke directive is not a bureaucratic requirement. Each boundary exists because the directive is managing a specific harm.",
      "Name what would make you withhold, stop, patch, reassess, or change course.",
      "Decide what must be reassessed afterward and what change would tell you whether the decision is still appropriate."
    ],
    "fields": [
      {
        "id": "directive",
        "label": "Directive or decision",
        "helperText": "Name the directive, medication, intervention, or decision point you are reviewing."
      },
      {
        "id": "clinical-risk",
        "label": "Clinical risk",
        "helperText": "What patient risk is this directive built around? What happens if the decision is wrong or delayed?"
      },
      {
        "id": "physiology",
        "label": "Physiology or patient problem",
        "helperText": "What body process, symptom, or clinical priority is being supported, protected, or kept from worsening?"
      },
      {
        "id": "firm-boundaries",
        "label": "Firm boundaries",
        "helperText": "Name the boundaries that are not flexible, and what each one is protecting against."
      },
      {
        "id": "withhold-change",
        "label": "Withhold, stop, patch, or change course",
        "helperText": "What finding, missing information, change in status after treatment, or safety concern would make you pause or alter the plan?"
      },
      {
        "id": "reassessment",
        "label": "Reassessment",
        "helperText": "What should you reassess after acting, and what change would tell you the treatment is still appropriate?"
      }
    ],
    "examples": [
      {
        "title": "Epinephrine for anaphylaxis",
        "context": "A student knows the anaphylaxis directive and can list the indications. They hesitate because the patient has hives and throat tightness but is still speaking in full sentences and does not look as sick as the textbook version.",
        "entries": [
          {
            "label": "Directive or decision",
            "text": "Epinephrine for a patient showing signs of a systemic allergic response: hives, airway involvement, or hemodynamic compromise following allergen exposure."
          },
          {
            "label": "Clinical risk",
            "text": "The risk is delayed epinephrine in a patient with a systemic reaction that may progress rapidly to airway compromise or cardiovascular collapse. The directive is not asking the student to wait for obvious shock. It is asking the student to recognize a systemic response and act before it becomes irreversible."
          },
          {
            "label": "Physiology or patient problem",
            "text": "In anaphylaxis, mast cell degranulation produces a systemic inflammatory response that affects vascular tone, airway smooth muscle, and vascular permeability simultaneously. Epinephrine addresses all three through alpha and beta adrenergic effects. Antihistamines address only one component and act too slowly to manage airway compromise or hemodynamic instability. That is why epinephrine is first, not antihistamines, regardless of how mild the presentation looks at the moment of assessment."
          },
          {
            "label": "Firm boundaries",
            "text": "The route and dose requirements exist because systemic absorption matters: intramuscular injection into the lateral thigh provides faster and more reliable absorption than subcutaneous administration. The reassessment requirement exists because a single dose may not be sufficient and because the patient's status can change rapidly in either direction after treatment."
          },
          {
            "label": "Withhold, stop, patch, or change course",
            "text": "A presentation that is clearly localized and does not involve systemic signs would not meet the indication. A patient whose status is worsening despite epinephrine, or who requires repeated dosing, reaches a patch point. A patient with a known cardiac history or who is older with significant comorbidities may need more careful reassessment of response and escalation planning."
          },
          {
            "label": "Reassessment",
            "text": "Reassess airway, work of breathing, skin, blood pressure, heart rate, and mental status after treatment. Ask whether throat tightness is improving or worsening. Ask whether the patient who was speaking in full sentences is still able to do so. A patient who looks better may deteriorate again after the initial epinephrine effect wanes. The reassessment is not complete until the patient has been monitored long enough to identify whether a biphasic reaction is developing."
          }
        ]
      }
    ],
    "commonMistakes": [
      "Rewriting the directive instead of naming the patient risk it protects against.",
      "Treating boundaries as numbers to memorize instead of clinical signals tied to physiology.",
      "Stopping once the action is chosen. Reassessment is the second half of the decision, not an afterthought."
    ],
    "toolPointers": [
      "If a boundary keeps slipping during practice, turn it into a Clinical Recall Prompt.",
      "If the same directive hesitation shows up across multiple scenarios, use the Five Whys Tool to find what is actually causing the delay."
    ],
    "relatedSections": [
      "directives-through-purpose",
      "pathophysiology-through-patterns",
      "clinical-reasoning",
      "osce-preparation",
      "performance-under-pressure"
    ],
    "relatedTools": [
      "clinical-recall-prompt-builder",
      "five-whys-tool"
    ]
  },
  {
    "id": "smart-note-template",
    "title": "Smart Note Template",
    "status": "drafted",
    "toolType": "template",
    "purpose": "Turn one concept, scenario error, confusing idea, or repeated feedback point into a small reusable note for future use.",
    "whenToUse": "An idea keeps showing up in class, lab, feedback, directives, scenarios, or reassessment decisions and you want it in a form that is easier to return to, explain, and use.",
        "fieldIntro": "Use these fields to keep the note small, clinical, and reusable.",
"whenNotToUse": [
      "Do not use this to capture everything from a lecture.",
      "Do not use it to write a full condition summary.",
      "Do not use it when the note would only copy a definition without changing how you think or what you check."
    ],
    "steps": [
      "Choose one idea, not a whole topic.",
      "Write the core claim in one clear sentence.",
      "Explain the idea in your own words: what is happening, why it matters, what mechanism or decision it connects to.",
      "List the clinical signals that would make the idea visible in assessment, scenarios, or reassessment.",
      "Name the common confusion or trap the note is meant to prevent.",
      "Link only to ideas that change how you understand or use this one."
    ],
    "fields": [
      {
        "id": "claim",
        "label": "Claim",
        "helperText": "The core idea in one clear sentence. Small enough to explain, test, and reuse later."
      },
      {
        "id": "explanation",
        "label": "Explanation",
        "helperText": "What is happening, why it matters, and what decision or mechanism it connects to."
      },
      {
        "id": "clinical-signals",
        "label": "Clinical signals",
        "helperText": "What you would see, hear, ask, reassess, or notice in a patient, scenario, or lab that makes this idea relevant."
      },
      {
        "id": "common-confusion",
        "label": "Common confusion",
        "helperText": "The specific mistake, mix-up, or reasoning trap this note is designed to prevent."
      },
      {
        "id": "links",
        "label": "Links",
        "helperText": "Other notes whose content changes how you understand or use this idea. Link by reasoning connection, not by topic category."
      }
    ],
    "examples": [
      {
        "title": "Respiratory deterioration during treatment",
        "context": "A student keeps relaxing after giving a bronchodilator. They need a note that holds the specific reassessment distinction.",
        "entries": [
          {
            "label": "Claim",
            "text": "Quieter lung sounds after bronchodilator treatment are not always improvement."
          },
          {
            "label": "Explanation",
            "text": "In severe bronchospasm, reduced air movement can produce less audible wheeze even as the patient worsens. If work of breathing remains high, speech is decreasing, or mental status is changing, quieter sounds may mean less airflow rather than better airflow. Reassessment after bronchodilator treatment needs to check effort, air movement, speech, and mental status, not just whether wheezing sounds better."
          },
          {
            "label": "Clinical signals",
            "text": "Persistent or increasing work of breathing after treatment, decreased ability to speak in full sentences, declining mental status, decreasing air movement on auscultation, fatigue after initial treatment, poor or incomplete response to bronchodilator."
          },
          {
            "label": "Common confusion",
            "text": "Students often interpret decreased wheezing as improvement because quieter usually means better. In severe bronchospasm, the relationship reverses. The note exists specifically to interrupt that assumption during reassessment."
          },
          {
            "label": "Links",
            "text": "Work of Breathing; Oxygenation Versus Ventilation; Respiratory Fatigue; Reassessment After Intervention; Air Trapping."
          }
        ]
      },
      {
        "title": "Syncope in a young person",
        "context": "A student was told after a scenario that they closed too early on vasovagal. They want a note that holds the specific reassessment question.",
        "entries": [
          {
            "label": "Claim",
            "text": "Syncope in a young person during exertion is not the same risk as syncope after exertion."
          },
          {
            "label": "Explanation",
            "text": "Vasovagal syncope typically follows a period of exertion, often when the person stops moving. Syncope that occurs during peak exertion, while the person is still working hard, suggests a cardiac mechanism rather than a vasovagal one. This distinction changes the assessment priority: it shifts focus toward a rhythm check, family history of sudden cardiac events, and a lower threshold for monitoring and transport even when the patient has fully recovered."
          },
          {
            "label": "Clinical signals",
            "text": "Syncope described as happening while actively exerting rather than after stopping; no prodrome of nausea or lightheadedness before collapse; rapid recovery to baseline; young patient who minimizes the event; absence of obvious trigger; family history questions not yet asked."
          },
          {
            "label": "Common confusion",
            "text": "A young, fit, fully recovered patient with a vasovagal-sounding story is easy to close on too early. The exertional timing is the detail that changes the risk picture, and it is the detail most likely to be missed if the student treats recovery as resolution."
          },
          {
            "label": "Links",
            "text": "Exertional vs Vasovagal Syncope; Pattern Recognition Safety Check; Premature Closure; ECG and Transport Decisions; Family History as a Risk Signal."
          }
        ]
      }
    ],
    "commonMistakes": [
      "Writing about a whole topic instead of one idea. \"Shock\" is too large. \"Compensatory tachycardia may appear before blood pressure falls\" is the right size.",
      "A claim so broad it becomes advice is not useful. \"Always reassess after treatment\" is advice. \"After a bronchodilator, check whether air movement changed\" is a claim.",
      "Copying a definition without explaining what it changes. \"Anaphylaxis is a systemic allergic response\" does nothing. Explaining why epinephrine comes before antihistamines does.",
      "Linking by topic instead of reasoning connection. \"Respiratory\" is a category. \"Oxygenation Versus Ventilation\" is a connection that changes how you read the note.",
      "Polishing the note instead of testing it. It is finished when future you knows what to check differently next time, not when it looks good."
    ],
    "toolPointers": [
      "Once the note feels stable, use the Clinical Recall Prompt Builder to turn one cue, contrast, or boundary into retrieval practice.",
      "If the note came from a repeated scenario error, use the Five Whys Tool to trace it back to one practice target."
    ],
    "relatedSections": [
      "smart-notes-for-paramedic-students",
      "understanding-before-memorizing",
      "retrieval-practice",
      "cognitive-load",
      "taking-notes-in-a-moving-lecture",
    ],
    "relatedTools": [
      "clinical-recall-prompt-builder",
      "five-whys-tool"
    ]
  },
  {
    "id": "clinical-recall-prompt-builder",
    "title": "Clinical Recall Prompt Builder",
    "status": "drafted",
    "toolType": "prompt-builder",
    "purpose": "Build recall prompts that test whether knowledge can be accessed and used clinically, not just recognized while reading notes.",
    "whenToUse": "You want to turn a directive, Smart Note, medication, pathophysiology idea, or scenario error into retrieval practice that supports decisions under pressure.",
        "fieldIntro": "Use these fields to turn an idea into clinically useful retrieval practice.",
"whenNotToUse": [
      "Do not use this to make trivia cards that never touch patient care.",
      "Do not make prompts so broad that you cannot answer them clearly.",
      "Do not use recall practice as a replacement for scenarios, labs, or feedback."
    ],
    "steps": [
      "Choose one idea that must be available under pressure.",
      "Name the clinical job that knowledge is supposed to perform.",
      "Write one prompt for the basic fact or threshold if needed.",
      "Write one prompt for the clinical cue that should trigger the idea.",
      "Write one prompt for the decision boundary or safety limit.",
      "Write one prompt for reassessment after action.",
      "Add a communication prompt to practise explaining the reasoning out loud."
    ],
    "fields": [
      {
        "id": "source-idea",
        "label": "Source idea",
        "helperText": "What directive, note, medication, concept, or scenario error are you turning into recall practice?"
      },
      {
        "id": "clinical-job",
        "label": "Clinical job",
        "helperText": "What should this knowledge help you do: recognize risk, choose treatment, withhold treatment, reassess, or explain a decision?"
      },
      {
        "id": "basic-fact",
        "label": "Basic fact prompt",
        "helperText": "What fact, threshold, sequence, or definition must be recalled accurately?"
      },
      {
        "id": "clinical-cue",
        "label": "Clinical cue prompt",
        "helperText": "What patient finding, history detail, vital sign trend, scene cue, or reassessment finding should bring this idea to mind?"
      },
      {
        "id": "decision-boundary",
        "label": "Decision boundary prompt",
        "helperText": "What would make you withhold, change, escalate, patch, or reconsider?"
      },
      {
        "id": "reassessment",
        "label": "Reassessment prompt",
        "helperText": "After acting, what must you check to know whether the patient is improving, worsening, or unchanged?"
      },
      {
        "id": "communication",
        "label": "Communication prompt",
        "helperText": "How would you explain the decision in one or two sentences to an instructor, partner, or preceptor? This tests whether you can hold the reasoning and the picture together while speaking out loud."
      }
    ],
    "examples": [
      {
        "title": "Epinephrine for anaphylaxis",
        "context": "A student keeps hesitating with epinephrine when the patient is still speaking and does not look like the textbook version of anaphylaxis. They want recall practice that holds the timing distinction.",
        "entries": [
          {
            "label": "Source idea",
            "text": "Anaphylaxis recognition and epinephrine decision-making."
          },
          {
            "label": "Clinical job",
            "text": "Recognize a systemic allergic response early enough to act before airway compromise or hemodynamic instability, rather than waiting for obvious shock."
          },
          {
            "label": "Basic fact prompt",
            "text": "What route, site, dose, and reassessment expectations apply for epinephrine in anaphylaxis under the current directive?"
          },
          {
            "label": "Clinical cue prompt",
            "text": "What combination of findings, including skin, airway, and hemodynamic signs, makes a systemic allergic response more likely even when the patient looks less sick than expected?"
          },
          {
            "label": "Decision boundary prompt",
            "text": "What presentation would not meet the systemic response threshold? What finding after treatment would require reassessment, repeat dosing consideration, or patching?"
          },
          {
            "label": "Reassessment prompt",
            "text": "After epinephrine, what do I reassess: airway, stridor, voice quality, work of breathing, skin, blood pressure, heart rate, and whether the response is sustained or whether signs are returning?"
          },
          {
            "label": "Communication prompt",
            "text": "How would I explain to a preceptor why I gave epinephrine to a patient who was still speaking in full sentences, without sounding like I guessed?"
          }
        ]
      },
      {
        "title": "Altered LOC after glucose treatment",
        "context": "A student wants recall practice that prevents treatment given from becoming the end of thinking during a hypoglycemia scenario.",
        "entries": [
          {
            "label": "Source idea",
            "text": "Hypoglycemia treatment, reassessment, and ongoing altered mental status."
          },
          {
            "label": "Clinical job",
            "text": "Treat glucose administration as a reassessment point, not a conclusion. The job is confirming response, identifying airway risk, and recognizing when the problem is not resolved."
          },
          {
            "label": "Basic fact prompt",
            "text": "What treatment options, routes, concentration considerations, and contraindications apply for hypoglycemia in this patient?"
          },
          {
            "label": "Clinical cue prompt",
            "text": "What changes in mental status, airway protection, behaviour, or vital signs should I expect if the treatment is working, and at what point should improvement be visible?"
          },
          {
            "label": "Decision boundary prompt",
            "text": "What would make me escalate, reassess the working explanation, manage airway risk, or prepare for transport rather than assuming the problem is solved?"
          },
          {
            "label": "Reassessment prompt",
            "text": "What do I recheck after treatment: level of consciousness, blood glucose, airway, oral intake safety, vital signs, trend over time, and whether the original story still explains the full presentation?"
          },
          {
            "label": "Communication prompt",
            "text": "How would I explain to a partner why a patient who received glucose and is now more alert still needs careful monitoring and a lower threshold for transport?"
          }
        ]
      },
      {
        "title": "Early poor perfusion",
        "context": "A student wants to connect recall of shock concepts to early recognition and conservative decision-making before vital signs become dramatic.",
        "entries": [
          {
            "label": "Source idea",
            "text": "Early poor perfusion and shock pattern recognition."
          },
          {
            "label": "Clinical job",
            "text": "Notice early risk before the patient becomes obviously unstable, and name a working concern before the numbers force the decision."
          },
          {
            "label": "Basic fact prompt",
            "text": "What are common early signs that perfusion may be inadequate even before blood pressure falls: skin, mental status, pulse quality, capillary refill, respiratory rate, and patient appearance?"
          },
          {
            "label": "Clinical cue prompt",
            "text": "What combination of skin, mental status, pulse, and trend findings should increase concern for poor perfusion in a patient who is still talking and whose blood pressure is still acceptable?"
          },
          {
            "label": "Decision boundary prompt",
            "text": "What would make me prioritize early transport, increase reassessment frequency, or name a working concern for poor perfusion even without diagnostic certainty?"
          },
          {
            "label": "Reassessment prompt",
            "text": "After positioning, IV access, and moving toward transport, what trend would tell me the patient is compensating, failing, or responding?"
          },
          {
            "label": "Communication prompt",
            "text": "How would I explain to a receiving nurse that I transported a patient with soft vitals and a concerning trajectory even though the blood pressure never crossed a threshold?"
          }
        ]
      }
    ],
    "commonMistakes": [
      "Leaving out the patient cue. A fact prompt without a trigger for when it should arrive is a memorization card, not a clinical one.",
      "Testing the fact that is easiest to write instead of the detail that disappears under pressure, like the finding that would make you withhold a second dose.",
      "Forgetting the reassessment prompt. A recall set without one trains you to treat treatment as an endpoint instead of the start of the next question.",
      "Making one large prompt when the knowledge needs several smaller retrieval attempts instead."
    ],
    "toolPointers": [
      "Use this after Smart Note Template when an explanation is clear enough to practise without the note open.",
      "Use this after Directive Meaning Check when a threshold, contraindication, or reassessment point needs to become easier to access under pressure."
    ],
    "relatedSections": [
      "retrieval-practice",
      "spaced-learning",
      "smart-notes-for-paramedic-students",
      "osce-preparation",
      "practice-questions-that-teach",
    ],
    "relatedTools": [
      "smart-note-template",
      "directive-meaning-check"
    ]
  },
  {
    "id": "clinical-reasoning-check",
    "title": "Clinical Reasoning Check",
    "status": "drafted",
    "toolType": "thinking-check",
    "purpose": "Examine how your thinking behaved during a scenario, OSCE, lab, or placement moment, and find where the working explanation stopped updating.",
    "whenToUse": "After a call or scenario when your first explanation, decision, or plan may have become too narrow, too rigid, or hard to explain. Useful when feedback pointed at your reasoning rather than at a specific missed fact or skill step.",
        "fieldIntro": "Use these fields to test whether the working explanation stayed flexible as the patient changed.",
"whenNotToUse": [
      "Do not use this when the issue was simply a missed fact or skill step.",
      "Do not use it when you already know the specific practice target.",
      "Do not use it to reconstruct the perfect clinical picture after the fact.",
      "Do not let it become a way to replay the entire call."
    ],
    "steps": [
      "Name your working explanation at the time.",
      "Identify what information supported it.",
      "Identify what did not fit or needed more attention.",
      "Ask whether your thinking changed when the patient changed.",
      "Decide what cue, question, or reassessment would help next time."
    ],
    "fields": [
      {
        "id": "working-explanation",
        "label": "Working explanation",
        "helperText": "What did you think was happening at the time? This can be a working concern or likely pattern, not a final diagnosis."
      },
      {
        "id": "supporting-cues",
        "label": "Supporting cues",
        "helperText": "What information made that explanation reasonable? Include presentation, history, vitals, scene details, response to treatment, or directive context."
      },
      {
        "id": "what-did-not-fit",
        "label": "What did not fit?",
        "helperText": "What information was missing, conflicting, or changing, and could have widened your thinking?"
      },
      {
        "id": "reasoning-response",
        "label": "Reasoning response",
        "helperText": "Did your thinking change as new information appeared? If not, what kept the first explanation in place: cognitive load, early confirmation, or pressure to keep moving?"
      },
      {
        "id": "next-reasoning-cue",
        "label": "Next reasoning cue",
        "helperText": "What would you watch for, ask, or reassess next time, that would keep your working explanation open to disagreement?"
      }
    ],
    "examples": [
      {
        "title": "Vague weakness with missed neurologic shift",
        "context": "A student treated a vague weakness call as low acuity because the initial vitals were not dramatic, then missed that the patient's speech and coordination were changing.",
        "entries": [
          {
            "label": "Working explanation",
            "text": "I thought this was general weakness, dehydration, or fatigue because the patient looked stable and the first set of vitals did not push me toward a high-risk problem."
          },
          {
            "label": "Supporting cues",
            "text": "The patient was awake, talking, not in obvious distress, and had vague symptoms without a clear complaint at first."
          },
          {
            "label": "What did not fit?",
            "text": "The patient became slower to answer, had subtle word-finding trouble, and seemed less coordinated during movement. Those changes could have widened the thinking toward neurologic risk earlier."
          },
          {
            "label": "Reasoning response",
            "text": "My first impression stayed in control because the patient seemed stable and the early cues were vague enough to absorb into a low-acuity explanation. I was looking for confirmation rather than actively checking whether the explanation was still holding."
          },
          {
            "label": "Next reasoning cue",
            "text": "When a vague patient changes during the call, I will treat that change as new evidence. I will reassess speech, face, arms, coordination, glucose, vitals, and time course before deciding the first label still fits."
          }
        ]
      },
      {
        "title": "Agitated patient with missed medical cause",
        "context": "A student managed an agitated patient behaviorally and prepared for transport, but did not return to a physical assessment after the initial attempts to settle the patient. The patient's agitation had a medical cause that was not identified until handover.",
        "entries": [
          {
            "label": "Working explanation",
            "text": "I thought the agitation was behavioral because the patient had a psychiatric history, had not taken their medication that day, and the scene context supported a mental health explanation."
          },
          {
            "label": "Supporting cues",
            "text": "The family reported a history of psychiatric illness. The patient had missed doses. There was no obvious trauma. The patient's behavior matched previous episodes the family had described."
          },
          {
            "label": "What did not fit?",
            "text": "The skin was warm and slightly flushed. The breathing was faster than expected. The patient had been vomiting since the night before, which the family mentioned during handover. Those details were available during the call and were not assembled into an alternative explanation."
          },
          {
            "label": "Reasoning response",
            "text": "The psychiatric history did what a strong early pattern usually does: it absorbed new information rather than prompting a re-examination. The behavioral management was correct, but after the patient partially settled, I moved toward packaging rather than returning to the physical picture. The confirmation from the history kept the behavioral explanation feeling stable."
          },
          {
            "label": "Next reasoning cue",
            "text": "After a behavioral patient partially settles, I will return to a focused physical reassessment before committing to a transport plan. I will specifically ask whether the breathing pattern, skin, and temperature fit the behavioral explanation, or whether they suggest a concurrent medical problem."
          }
        ]
      }
    ],
    "commonMistakes": [
      "Using the tool to defend the first impression instead of testing it. If \"supporting cues\" runs much longer than \"what did not fit,\" that is a sign.",
      "Writing the perfect diagnosis after the fact instead of finding the moment your reasoning stopped updating.",
      "Skipping the cue that seems small in hindsight. The small cue is often the one that mattered most.",
      "Trying to repair the whole call instead of choosing one reasoning cue to carry forward."
    ],
    "toolPointers": [
      "If this reveals the same thinking pattern appearing across more than one scenario, take that pattern to the Five Whys Tool.",
      "If you are still rotating through scenarios on the same day, carry the next reasoning cue directly into the next room rather than writing a longer reflection."
    ],
    "relatedSections": [
      "clinical-reasoning",
      "pattern-recognition",
      "avoiding-premature-closure",
      "the-five-whys",
      "reflection-without-journaling",
      "turning-feedback-into-action",
      "resetting-when-thinking-narrows"
    ],
    "relatedTools": [
      "five-whys-tool",
      "reflection-without-journaling-tool",
      "scenario-day-reset"
    ]
  },
  {
    "id": "scenario-day-reset",
    "title": "Scenario Day Reset",
    "status": "drafted",
    "toolType": "reset",
    "purpose": "Turn feedback into one clear adjustment you can carry into the next room.",
    "whenToUse": "During scenario days, lab rotations, or repeated practice when the goal is to carry one small change into the next attempt rather than trying to fix everything at once.",
        "fieldIntro": "Use these fields to keep the next attempt focused on one testable adjustment.",
"whenNotToUse": [
      "Do not use this to process the entire scenario in detail.",
      "Do not use it when you are finished for the day and need deeper reflection.",
      "Do not choose more than one adjustment unless an instructor specifically asks you to."
    ],
    "steps": [
      "Name the pattern that showed up.",
      "Choose one adjustment for the next attempt.",
      "Name the specific moment where you will test that adjustment.",
      "Leave the rest of the feedback for later."
    ],
    "fields": [
      {
        "id": "pattern",
        "label": "Pattern that showed up",
        "helperText": "What repeated issue appeared: delayed transport, missed reassessment, fixation on one finding, over-explaining to the evaluator, rushed treatment, or waiting for certainty before naming risk?"
      },
      {
        "id": "adjustment",
        "label": "One adjustment",
        "helperText": "The one change you will carry into the next room. Small enough to remember, specific enough to notice."
      },
      {
        "id": "test-moment",
        "label": "Where I will test it",
        "helperText": "The specific point in the next call where this adjustment should appear, not a general intention."
      }
    ],
    "examples": [
      {
        "title": "Delayed transport after a detailed assessment",
        "context": "A student completed a careful assessment but delayed transport because they wanted a clearer diagnosis before committing to a plan.",
        "entries": [
          {
            "label": "Pattern that showed up",
            "text": "I kept gathering information after I already had enough risk to justify transport."
          },
          {
            "label": "One adjustment",
            "text": "When I identify a high-risk concern, I will name it out loud before asking more questions."
          },
          {
            "label": "Where I will test it",
            "text": "After the first set of vitals and a focused history, I will state whether this patient needs early transport before I continue the assessment."
          }
        ]
      },
      {
        "title": "Behavioral call with missed physical reassessment",
        "context": "A student managed an agitated patient and prepared for transport without returning to the physical picture after the patient partially settled. The behavioral explanation stayed in place without being tested.",
        "entries": [
          {
            "label": "Pattern that showed up",
            "text": "I settled the patient and moved toward packaging without checking whether the behavior had a physical cause I had not explained."
          },
          {
            "label": "One adjustment",
            "text": "After a behavioral patient partially settles, I will return to a focused physical check before committing to transport."
          },
          {
            "label": "Where I will test it",
            "text": "After my first attempt to calm the patient, before I start packaging, I will check breathing effort, skin, and temperature and ask whether those fit the behavioral explanation."
          }
        ]
      }
    ],
    "commonMistakes": [
      "Choosing more than one adjustment. Three things carried loosely usually means none of them land.",
      "Turning the reset into a full debrief. It should take two minutes, not twenty. Save deeper reflection for after the day.",
      "Choosing a vague adjustment. \"Stay calmer\" is not testable. \"Name a transport concern after the first vitals\" is.",
      "Skipping the moment. Without a specific point in the call to test it, the adjustment usually only shows up during debrief, too late to matter."
    ],
    "toolPointers": [
      "If the practice day is over, use Reflection Without Journaling to keep the lesson small and usable.",
      "If the same pattern keeps returning across scenario days, use the Five Whys Tool later to find the deeper practice target."
    ],
    "relatedSections": [
      "scenario-days-as-learning-tools",
      "turning-feedback-into-action",
      "resetting-when-thinking-narrows",
      "design-and-run-your-own-scenarios",
      "capturing-the-debrief",
    ],
    "relatedTools": [
      "reflection-without-journaling-tool",
      "five-whys-tool"
    ]
  },
  {
    "id": "osce-reset",
    "title": "OSCE Reset",
    "status": "drafted",
    "toolType": "reset",
    "purpose": "Restore patient risk, structure, and a next safe action when evaluation pressure starts pulling you away from clear reasoning.",
    "whenToUse": "You are preparing for an OSCE station, recovering from a rough one, or noticing that pressure is making you rush, freeze, over-explain, or perform confidence instead of returning to patient risk and structure.",
        "fieldIntro": "Use these fields to restore patient risk, structure, and next action under evaluation pressure.",
"whenNotToUse": [
      "Do not use this as a script to memorize for every station.",
      "Do not use it to ignore feedback about knowledge or skill gaps.",
      "Do not use it to look polished while skipping assessment, contraindication checks, reassessment, or transport decisions."
    ],
    "steps": [
      "Name the primary risk right now.",
      "Return to a trusted structure.",
      "Choose the next safest action."
    ],
    "fields": [
      {
        "id": "primary-risk",
        "label": "Primary risk right now",
        "helperText": "What could harm the patient if you miss it or delay too long?"
      },
      {
        "id": "structure",
        "label": "Structure to return to",
        "helperText": "What assessment sequence or reasoning habit keeps you safe when pressure rises? Name the framework, not the full protocol."
      },
      {
        "id": "next-action",
        "label": "Next safest action",
        "helperText": "What one action keeps the patient safe while you clarify the situation, and what will you reassess after it?"
      }
    ],
    "examples": [
      {
        "title": "Altered mental status station",
        "context": "A student is three minutes into a station involving a confused older adult. They have checked glucose and it is low. They treat it and the patient improves partially. The student starts preparing for transport without returning to a reassessment of the overall picture.",
        "entries": [
          {
            "label": "Primary risk right now",
            "text": "The glucose was one possible cause. The partial response means I have not confirmed it was the only cause. The risk is treating partial improvement as resolution and missing a second process."
          },
          {
            "label": "Structure to return to",
            "text": "Treatment is a reassessment point, not an endpoint. After any intervention, return to the original finding and ask whether it has changed, improved, or revealed something new. The structure is: act, check the reason I acted, adjust if needed."
          },
          {
            "label": "Next safest action",
            "text": "Return to the patient's mental status specifically. Is it improving at the rate glucose correction should produce? If not, what else could explain the remaining confusion, and does the transport plan reflect that uncertainty?"
          }
        ]
      },
      {
        "title": "Respiratory distress station",
        "context": "A student is managing a patient with increased work of breathing. They give a treatment and the patient becomes quieter. The student interprets this as improvement and begins moving toward packaging.",
        "entries": [
          {
            "label": "Primary risk right now",
            "text": "A quieter patient after treatment for respiratory distress is not always better. Reduced air movement can look like improvement while the patient is actually deteriorating. The risk is missing fatigue under the appearance of settling."
          },
          {
            "label": "Structure to return to",
            "text": "After any respiratory intervention, check the four things that actually tell me whether the patient improved: work of breathing, ability to speak, air movement on auscultation, and mental status. Saturation alone is not enough."
          },
          {
            "label": "Next safest action",
            "text": "Before touching the equipment again, look at the patient. Ask them to speak. Listen to air entry. Decide whether the quiet is recovery or fatigue, then choose the transport priority that fits what you actually find."
          }
        ]
      }
    ],
    "commonMistakes": [
      "Trying to look confident instead of returning to patient risk and structure. Confidence without structure just produces fast errors.",
      "Narrating everything you know while the priority decision stays unclear. Evaluators watch for whether the decision fits the patient, not volume.",
      "Rushing to treatment before contraindications or reassessment needs are protected. Correct treatment without the reassessment after it is not a complete decision.",
      "Freezing because the station does not match the version you rehearsed. Ask what the primary risk is right now, not the version you expected.",
      "Treating reassessment as an ending instead of the second half of the decision."
    ],
    "toolPointers": [
      "If one station leaves a clear adjustment, use Reflection Without Journaling to preserve it before the next station begins.",
      "If the same OSCE error keeps returning across stations or practice days, use the Five Whys Tool to find the pattern underneath it."
    ],
    "relatedSections": [
      "osce-preparation",
      "performance-under-pressure",
      "resetting-when-thinking-narrows",
      "clinical-reasoning",
      "mental-rehearsal-and-visualization",
    ],
    "relatedTools": [
      "reflection-without-journaling-tool",
      "five-whys-tool"
    ]
  },
  {
    "id": "reflection-without-journaling-tool",
    "title": "Reflection Without Journaling Tool",
    "status": "drafted",
    "toolType": "thinking-check",
    "purpose": "Learn from one moment without writing a long journal entry or replaying the whole scenario.",
    "whenToUse": "After a lab, scenario, OSCE, feedback point, or placement moment when you need one clear adjustment and do not want a full written reflection.",
        "fieldIntro": "Use these fields to extract one usable adjustment without turning reflection into a full assignment.",
"whenNotToUse": [
      "Do not use this to process a whole call in detail.",
      "Do not use it while you are still between scenario attempts and need a fast reset instead.",
      "Do not use it to judge your personality, confidence, or worth."
    ],
    "steps": [
      "Choose one moment that mattered.",
      "Name what was happening at the time.",
      "Explain what shaped your response.",
      "Decide what you would notice next time.",
      "Choose one adjustment."
    ],
    "fields": [
      {
        "id": "one-moment",
        "label": "One moment",
        "helperText": "Choose one decision, hesitation, reassessment point, communication moment, or shift in patient status. Do not review the whole call."
      },
      {
        "id": "what-was-happening",
        "label": "What was happening?",
        "helperText": "What was going on in the patient, scene, team, or evaluation environment at that point?"
      },
      {
        "id": "what-shaped-response",
        "label": "What shaped my response?",
        "helperText": "Explain the mechanism, not just the label. \"I was overloaded\" names the outcome. \"I had no structure to return to after the first intervention\" explains what caused it."
      },
      {
        "id": "notice-next-time",
        "label": "What would I notice next time?",
        "helperText": "Name the specific cue or change that would alert you earlier. This is the perceptual trigger that should arrive before the adjustment fires."
      },
      {
        "id": "one-adjustment",
        "label": "One adjustment",
        "helperText": "One small change you can carry into a future scenario, lab, OSCE, or placement moment. Specific enough that you will know whether it happened."
      }
    ],
    "examples": [
      {
        "title": "Pediatric patient who looked less sick than they were",
        "context": "A student finished a scenario feeling uneasy. They had assessed a seven-year-old with fever and increased work of breathing, managed the immediate presentation, and moved toward transport. During debrief, the instructor pointed out that the child's work of breathing had increased after the initial treatment and the student had not returned to it.",
        "entries": [
          {
            "label": "One moment",
            "text": "After giving oxygen and repositioning, I moved to documenting and preparing for transport rather than reassessing work of breathing and comparing it to where the patient started."
          },
          {
            "label": "What was happening?",
            "text": "The child initially looked less alarming than the numbers suggested. They were awake, interactive, and not in obvious distress at first. The initial treatment seemed to help and the call felt like it was progressing."
          },
          {
            "label": "What shaped my response?",
            "text": "I treated the intervention as the conclusion rather than as a point to reassess from. I had no automatic habit of returning to the specific finding that made me intervene. Once something was done, my attention moved forward rather than back to the original problem."
          },
          {
            "label": "What would I notice next time?",
            "text": "A pediatric patient who has been treated but is still breathing faster than expected, or whose effort has not visibly decreased, should pull my attention back to work of breathing specifically before I move to the next task."
          },
          {
            "label": "One adjustment",
            "text": "After any intervention in a pediatric call, I will return to work of breathing, mental status, and appearance before moving to documentation or packaging. I will ask whether the child looks better than they did before I treated them, not just whether I completed the intervention."
          }
        ]
      },
      {
        "title": "Directive hesitation before treatment",
        "context": "A student hesitated before giving epinephrine during an anaphylaxis scenario. The patient was still speaking in full sentences and did not look as sick as expected. The student waited, did not treat, and later reflected that the patient \"looked okay.\"",
        "entries": [
          {
            "label": "One moment",
            "text": "The patient described throat tightness and had visible hives. I had completed the assessment. I knew the directive. I did not give epinephrine because the patient was still talking and I wanted to wait until things looked more serious."
          },
          {
            "label": "What was happening?",
            "text": "The patient had eaten something new twenty minutes earlier. Hives were visible on the neck and arms. The throat tightness had started a few minutes before I arrived. Vital signs were acceptable. The patient was anxious but communicating clearly."
          },
          {
            "label": "What shaped my response?",
            "text": "I was using the patient's apparent stability as a reason to delay rather than recognizing that the directive is designed to act before instability arrives. I had learned the indication, but I was applying it as if it required obvious shock rather than systemic allergic response."
          },
          {
            "label": "What would I notice next time?",
            "text": "A patient with a known allergen exposure, systemic skin involvement, and any airway symptom, even mild throat tightness in a patient who is still speaking, should trigger the indication check rather than continued waiting."
          },
          {
            "label": "One adjustment",
            "text": "When a patient has allergen exposure and any combination of systemic skin findings and airway symptoms, I will complete the contraindication screen and decide on epinephrine before I start looking for more signs of deterioration."
          }
        ]
      }
    ],
    "commonMistakes": [
      "Choosing the whole scenario instead of one moment. If it runs longer than two or three sentences, it is too large.",
      "Writing what sounds reflective instead of naming what should change next time. The adjustment is the output, not a summary.",
      "Stopping at a label instead of the mechanism. \"I was overloaded\" tells you what happened. \"I had no reassessment trigger\" tells you what to build.",
      "Continuing to replay the event after the adjustment is already clear. More analysis past that point adds noise, not clarity."
    ],
    "toolPointers": [
      "If you are still between scenario attempts, use Scenario Day Reset instead of a longer reflection.",
      "If the same issue has appeared more than once across scenarios, use the Five Whys Tool to find the practice target underneath it."
    ],
    "relatedSections": [
      "reflection-without-journaling",
      "turning-feedback-into-action",
      "the-five-whys",
      "scenario-days-as-learning-tools",
      "capturing-the-debrief",
    ],
    "relatedTools": [
      "scenario-day-reset",
      "five-whys-tool",
      "clinical-reasoning-check"
    ]
  },
  {
    "id": "five-whys-tool",
    "title": "Five Whys Tool",
    "status": "drafted",
    "toolType": "thinking-check",
    "purpose": "Trace a mistake, hesitation, or repeated feedback point back to something you can actually work on.",
    "whenToUse": "After a scenario, OSCE, lab, or feedback conversation when the surface mistake is clear but the learning target is not. Particularly useful when the same pattern keeps returning across attempts and a simple reminder has not changed it.",
        "fieldIntro": "Use these fields to move from the visible error to a practice target that can actually be tested.",
"whenNotToUse": [
      "Do not use this after every performance.",
      "Do not use it to interrogate yourself or assign blame.",
      "Do not keep going after the answer has become actionable.",
      "Do not use it when the next practice target is already obvious."
    ],
    "steps": [
      "Name the visible problem.",
      "Ask why it happened in that moment.",
      "Keep asking what shaped the response until the answer becomes actionable.",
      "Stop when the answer points to a learning, reasoning, structure, or preparation issue you can do something about.",
      "Turn that answer into one practice target."
    ],
    "fields": [
      {
        "id": "visible-problem",
        "label": "Visible problem",
        "helperText": "Name the behaviour, not your worth. Examples: delayed transport, missed reassessment, over-focused on one cue, waited for certainty, or skipped contraindication screening."
      },
      {
        "id": "first-why",
        "label": "First why",
        "helperText": "Why did that happen in the moment? Use the conditions of the call, not hindsight."
      },
      {
        "id": "keep-going",
        "label": "Keep going until actionable",
        "helperText": "Ask what shaped the response beneath the surface answer: cognitive load, weak structure, retrieval gaps, or fixation. You do not need exactly five questions. Stop when the answer becomes something you can address."
      },
      {
        "id": "where-stop",
        "label": "Where I should stop",
        "helperText": "Stop when the answer names a specific habit or gap, not a general intention. \"I need to try harder\" means keep going. \"I need a reliable reassessment habit\" means stop."
      },
      {
        "id": "practice-target",
        "label": "Practice target",
        "helperText": "One thing to practise or structure differently next time, small enough to carry forward and specific enough to notice."
      }
    ],
    "examples": [
      {
        "title": "Missed reassessment after glucose treatment",
        "context": "A student gave treatment for hypoglycemia then moved on without checking whether the patient's mental status and overall condition actually improved.",
        "entries": [
          {
            "label": "Visible problem",
            "text": "I missed reassessment after glucose treatment."
          },
          {
            "label": "First why",
            "text": "I felt like the main problem had been addressed once treatment was given."
          },
          {
            "label": "Keep going until actionable",
            "text": "I was thinking of treatment as completion rather than as a question that needs an answer. I also had no built-in post-treatment reassessment phrase or habit to return to under pressure. The partial improvement was enough to feel like progress, so attention moved forward rather than back to the original finding."
          },
          {
            "label": "Where I should stop",
            "text": "The useful stop point is reassessment structure. I do not need a bigger lesson about trying harder. I need a reliable post-intervention check that fires before attention moves to the next task."
          },
          {
            "label": "Practice target",
            "text": "After each intervention in practice, name what I expect to change and what I will reassess before moving on. For glucose, that means: level of consciousness, speech, behavior, and whether the overall picture still fits the glucose explanation."
          }
        ]
      },
      {
        "title": "Behavioral call with missed physical reassessment",
        "context": "A student managed an agitated patient and moved toward packaging without returning to the physical picture. The behavioral explanation stayed in place after the patient partially settled.",
        "entries": [
          {
            "label": "Visible problem",
            "text": "I prepared for transport without reassessing the physical findings after the patient settled."
          },
          {
            "label": "First why",
            "text": "The patient partially calmed down and I interpreted that as the problem being addressed."
          },
          {
            "label": "Keep going until actionable",
            "text": "I was treating behavioral improvement as the endpoint rather than as a point to reassess from. Underneath that, I had no built-in habit of returning to physical findings after a behavioral intervention. The behavioral history was strong enough that it absorbed subsequent cues rather than prompting me to check whether they fit."
          },
          {
            "label": "Where I should stop",
            "text": "The useful stop point is reassessment structure for calls where the behavioral and physical pictures overlap. I do not need a reminder to care more. I need a specific trigger: after a behavioral patient settles, check the physical findings before deciding the explanation is complete."
          },
          {
            "label": "Practice target",
            "text": "After a behavioral patient settles or becomes more cooperative, I will return to breathing, skin, temperature, and vital signs before committing to a transport plan. I will ask whether the physical picture fits the behavioral explanation or whether something else is present."
          }
        ]
      }
    ],
    "commonMistakes": [
      "Forcing exactly five whys after the useful answer already appeared. The number is not the point, stop when the answer is actionable.",
      "Turning the process into self-criticism instead of finding a structure to adjust. If the chain ends with \"I am not good at this,\" it has gone off course.",
      "Stopping at \"I forgot\" without asking what made forgetting likely under pressure. That is the actual learning target.",
      "Creating a practice target that cannot be tested. \"Be more careful\" cannot be. \"Name what I expect to change before moving on\" can."
    ],
    "toolPointers": [
      "If the surface pattern is already clear but the mechanism is not, use the Clinical Reasoning Check first to identify what shaped the reasoning during the call, then use this tool to trace it further.",
      "If a practice target from this tool has been carried into multiple attempts and still has not changed, use the tool again from the new stopping point rather than assuming the target was wrong."
    ],
    "relatedSections": [
      "the-five-whys",
      "reflection-without-journaling",
      "turning-feedback-into-action",
      "common-errors-and-what-they-reveal",
      "focused-practice-after-feedback",
      "capturing-the-debrief",
    ],
    "relatedTools": [
      "reflection-without-journaling-tool",
      "clinical-reasoning-check"
    ]
  },
  {
    "id": "scenario-design-template",
    "title": "Scenario Design Template",
    "status": "drafted",
    "toolType": "template",
    "purpose": "Build a one-page practice scenario around a single learning target, so a homemade case tests something specific instead of becoming a diagnosis guessing game.",
    "whenToUse": "You and a practice partner are writing your own scenarios and want a case that runs cleanly, responds to care, and produces a debrief worth having.",
        "fieldIntro": "Use these fields to build the case around one target. One page is the ceiling.",
"whenNotToUse": [
      "Do not use this to build formal evaluation scenarios. That is your instructor's job, with different requirements.",
      "Do not stack complications. One target, one decision point.",
      "Do not treat homemade cases as a replacement for instructor-led simulation."
    ],
    "steps": [
      "Choose the learning target first. The case exists to serve it.",
      "Write dispatch information, as vague or misleading as real dispatch can be.",
      "Set the scene: where the patient is, who else is present, what is visible early.",
      "Write the patient script: what they say, what they volunteer, what they hold back unless asked directly.",
      "Write three vitals sets: arrival, response if care is appropriate, drift if care is delayed or misdirected.",
      "Define the decision point: the moment the target should fire, and what the patient does to create it."
    ],
    "fields": [
      {
        "id": "learning-target",
        "label": "Learning target",
        "helperText": "The one behaviour this case is built to pull out and test. Chosen before anything else is written."
      },
      {
        "id": "dispatch",
        "label": "Dispatch information",
        "helperText": "What the crew is told before arrival. Real dispatch is often incomplete. Yours can be too."
      },
      {
        "id": "scene",
        "label": "Scene",
        "helperText": "Where the patient is, who else is there, and what is visible in the first ten seconds."
      },
      {
        "id": "patient-script",
        "label": "Patient script",
        "helperText": "Who the patient is, what they say when asked, what they volunteer, and what stays hidden unless asked directly."
      },
      {
        "id": "vitals-sets",
        "label": "Vitals that change",
        "helperText": "Three sets: arrival, improvement if treated appropriately, drift if treatment is delayed or the wrong problem gets chased."
      },
      {
        "id": "decision-point",
        "label": "Decision point",
        "helperText": "The specific moment the learning target should fire, and what the patient does to create it."
      }
    ],
    "examples": [
      {
        "title": "Compensating GI bleed",
        "context": "Two students want a case that tests naming a transport decision before the vitals force it. They build it around a patient who never becomes dramatically unstable.",
        "entries": [
          {
            "label": "Learning target",
            "text": "Recognize a compensating patient and commit to a transport decision before the numbers make it obvious."
          },
          {
            "label": "Dispatch information",
            "text": "68-year-old male, weakness, nearly fainted in the bathroom. No further details available."
          },
          {
            "label": "Scene",
            "text": "Patient seated on the bathroom floor, pale, apologetic about the fuss. Spouse hovering in the doorway. She mentions two days of dark stools only if someone asks her directly."
          },
          {
            "label": "Patient script",
            "text": "Minimizes everything. Says he is just tired lately. Takes apixaban for atrial fibrillation but will only surface it if medications are asked about specifically. Denies pain of any kind."
          },
          {
            "label": "Vitals that change",
            "text": "Arrival: HR 104, BP 112/84, skin pale and cool. If a transport decision is made and the patient is kept supine: holds stable en route. If the crew stays on scene for an extended assessment: HR 118, BP 96/70, lightheaded with movement."
          },
          {
            "label": "Decision point",
            "text": "About four minutes in, once the skin findings, the anticoagulant, and the first vitals are all on the table. The risk is nameable there. The case never forces the decision with a crash. The test is whether the candidate commits before being pushed."
          }
        ]
      }
    ],
    "commonMistakes": [
      "Choosing the target after the case is written, which produces a scenario about a condition instead of a behaviour.",
      "Building a gotcha, where the case is designed to trick and the debrief becomes a reveal.",
      "Vitals that ignore what the candidate does. A patient who responds to care is what makes it a scenario instead of a quiz.",
      "Adding a second complication because the first one felt too simple. Simple cases run clean and debrief clean."
    ],
    "toolPointers": [
      "Between runs, use the Scenario Day Reset to carry one adjustment into the next attempt.",
      "If the same error pattern shows up across several homemade cases, take it to the Five Whys Tool."
    ],
    "relatedSections": [
      "design-and-run-your-own-scenarios",
      "scenario-days-as-learning-tools",
      "clinical-reasoning",
      "capturing-the-debrief"
    ],
    "relatedTools": [
      "scenario-day-reset",
      "five-whys-tool"
    ]
  },
]

export const activeTools = tools.filter((tool) => tool.status === 'drafted')

export const getToolById = (id: string) =>
  tools.find((tool) => tool.id === id)