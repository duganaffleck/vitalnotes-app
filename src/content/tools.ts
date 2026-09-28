// Generated from the VitalNotes book (v8.5) adaptation. Edit here, or rerun the build script.
import type { Tool } from './types'

export const tools: Tool[] = [
  {
    "id": "directive-decision-map",
    "title": "Directive Decision Map",
    "status": "drafted",
    "toolType": "thinking-check",
    "purpose": "Keep a directive decision precise for the patient in front of you while leaving the rest of the call visible.",
    "whenToUse": "You know the directive but hesitate with the patient in front of you.",
    "whenNotToUse": [
      "Don't use it without the current official directive open beside you. The map organizes your reading of the directive. It doesn't replace it.",
      "Don't turn it into a personal condensed PCS. Copied wording slowly becomes its own outdated authority.",
      "Don't use it for a broader case where several standards are active. Use the small standards map in Learning the Patient Care Standards.",
      "Don't use it when the directive itself isn't known yet. Review the current source and retrieve it without notes first."
    ],
    "fieldIntro": "Work with the current official directive open beside you. This map structures your reading of that document against one patient. It never holds directive content: don't copy indications, conditions, contraindications, doses, routes or criteria onto it. Point to the part of the directive and check the exact wording at the source. Don't record patient names, addresses, health-card numbers, exact dates of birth, or other identifying information from real calls or placement.",
    "steps": [
      "Open the current official directive beside you.",
      "Write the patient cue that brings the directive into consideration.",
      "In your own words, name the patient problem the directive addresses and what it is trying to accomplish or prevent.",
      "Work through the directive one requirement at a time against this patient. Mark which requirements are confirmed and which remain unknown.",
      "Name what would make the action unsafe for this patient and which risk each boundary manages.",
      "State where the decision stands. It may stay open until the remaining requirements are checked.",
      "Write what response should follow and what must be checked afterward.",
      "Name the broader BLS responsibilities that could still be missed even if the directive is applied correctly.",
      "Correct your map against the official document, not against your own notes."
    ],
    "fields": [
      {
        "id": "directive",
        "label": "Directive and source",
        "helperText": "Which directive or procedure are you reading, and is the current official version open beside you?"
      },
      {
        "id": "patient-cue",
        "label": "Patient cue",
        "helperText": "What in this patient brings the directive into consideration?"
      },
      {
        "id": "patient-problem",
        "label": "What it is trying to accomplish or prevent",
        "helperText": "In your own words, what patient problem does the directive address? Physiology can explain why the details matter, but the directive still decides."
      },
      {
        "id": "confirmed",
        "label": "Requirements confirmed",
        "helperText": "Which requirements that must be true before acting have you checked against this patient? Point to where they sit in the directive. Don't copy the wording, criteria or doses here."
      },
      {
        "id": "unknown",
        "label": "Still unknown or unresolved",
        "helperText": "Which requirements haven't been confirmed yet? Include trends and assessments that aren't finished."
      },
      {
        "id": "unsafe",
        "label": "What would make it unsafe",
        "helperText": "What would make the action unsafe for this patient, and which risk does each boundary manage?"
      },
      {
        "id": "decision",
        "label": "Where the decision stands",
        "helperText": "Does treatment apply, not apply, or stay open until named requirements are checked? Don't reduce it to yes or no if it is still open."
      },
      {
        "id": "response",
        "label": "Response and reassessment",
        "helperText": "What should improve, worsen, or force the plan to change after care? What must be checked afterward?"
      },
      {
        "id": "rest-of-call",
        "label": "Rest of the call",
        "helperText": "Which BLS responsibilities still apply: assessment, ECG acquisition, transport, communication, monitoring, reassessment, documentation? Which could still be missed?"
      }
    ],
    "commonMistakes": [
      "Comparing one number with one remembered cutoff and finishing the decision.",
      "Reducing the decision to yes or no while trends or required assessments remain unresolved.",
      "Copying the directive onto the map instead of checking it at the source.",
      "Trying to make the patient qualify for the treatment instead of asking what would make it unsafe.",
      "Handling the medication decision correctly while the transport plan, communication, or reassessment around it stays thin."
    ],
    "examples": [
      {
        "title": "Nitroglycerin with a falling pressure",
        "context": "A patient has ongoing ischemic-sounding chest discomfort. The systolic pressure has moved from 122 to 112 to 104. The ECG shows inferior ST elevation, and the required right-sided assessment has not yet been completed. The current ALS PCS is open beside the student.",
        "entries": [
          {
            "label": "Patient cue",
            "text": "Ongoing ischemic-sounding discomfort."
          },
          {
            "label": "What would make it unsafe",
            "text": "Nitroglycerin causes vasodilation and reduces preload. A patient already struggling to maintain circulation may not tolerate a further reduction, and right ventricular involvement may make this patient especially dependent on preload."
          },
          {
            "label": "Still unknown or unresolved",
            "text": "The pressure trend and the incomplete right-sided assessment. Any other current directive requirements still have to be confirmed."
          },
          {
            "label": "Where the decision stands",
            "text": "Not nitro: yes or no. The decision stays open until the current requirements are checked in the directive."
          },
          {
            "label": "Rest of the call",
            "text": "Transport, monitoring, communication, and reassessment. A correct answer about nitroglycerin doesn't replace them."
          }
        ]
      }
    ],
    "relatedTools": [
      "cue-to-care-recall-card",
      "next-attempt-debrief"
    ],
    "relatedSections": [
      "learning-the-patient-care-standards",
      "from-scenario-to-practice-target",
      "clinical-recall-without-trivia",
      "pathophysiology-through-patterns"
    ],
    "collection": "field"
  },
  {
    "id": "cue-to-care-recall-card",
    "title": "Cue-to-Care Recall Card",
    "status": "drafted",
    "toolType": "template",
    "purpose": "Carry a note into a patient cue, a competing explanation, the next care decision, and the finding that would make you reconsider.",
    "whenToUse": "A topic is familiar, but the patient cue does not lead naturally to the care decision.",
    "whenNotToUse": [
      "Don't turn every line of a note into a card. Make one card about the distinction that made the note worth keeping.",
      "Don't use it to carry an entire case. It needs only enough context to force a decision.",
      "Don't use it to hold directive details. Check exact wording and current requirements at the source.",
      "Don't use it when the fact itself is missing. Review the current source and retrieve it without notes first."
    ],
    "fieldIntro": "One cue per card. Write the cue the way it would appear in a patient, and keep each line short enough to recall. Don't record patient names, addresses, health-card numbers, exact dates of birth, or other identifying information from real calls or placement.",
    "steps": [
      "Start from a Smart Note that is supposed to change what you notice or do, or a topic you can explain at a desk but don't act on soon enough.",
      "Write the patient cue as you would see or hear it.",
      "Write what the cue may mean.",
      "Name the easy wrong turn: the reading of the cue that feels reassuring or familiar and leads the care the wrong way.",
      "Name what else could fit and still needs assessment.",
      "Write what changes now in assessment, care, communication, and transport.",
      "Write what you'll check afterward and which finding would change your mind.",
      "Check any clinical detail against the current source, then close the card and see whether you can explain the cue, what it means, and what it changes."
    ],
    "fields": [
      {
        "id": "cue",
        "label": "Cue",
        "helperText": "What would you see or hear in the patient? A cue, not a diagnosis or topic name."
      },
      {
        "id": "may-mean",
        "label": "What it may mean",
        "helperText": "What does this cue suggest about the patient's risk or condition?"
      },
      {
        "id": "wrong-turn",
        "label": "Easy wrong turn",
        "helperText": "What is the tempting reading of this cue that would leave the next assessment unchanged?"
      },
      {
        "id": "else-could-fit",
        "label": "What else could fit",
        "helperText": "Which competing explanation still needs assessment?"
      },
      {
        "id": "changes-now",
        "label": "What changes now",
        "helperText": "What changes in assessment, care, communication, or transport because of this cue? Include when the treatment would not apply, should stop, or needs medical direction."
      },
      {
        "id": "change-my-mind",
        "label": "What would change my mind",
        "helperText": "What will you check afterward, and which response after care or other finding would make you reconsider?"
      }
    ],
    "commonMistakes": [
      "Writing a diagnosis or a feeling of the topic instead of a cue. With opioid toxicity, the cue is inadequate ventilation, not drowsiness by itself.",
      "Stopping at the fact, such as a list of signs or complications, without the decision it should change.",
      "Practising only when to give a treatment and never when it doesn't apply or should be stopped.",
      "Leaving out the competing explanation, so the card becomes one more reason to close early.",
      "A “what changes now” line that doesn't change anything. A complete history that never changes the plan hasn't used the cue."
    ],
    "examples": [
      {
        "title": "A quieter asthma patient",
        "context": "A student knows the signs of worsening asthma but, in scenarios, relaxes when the patient becomes quieter.",
        "entries": [
          {
            "label": "Cue",
            "text": "A patient with asthma becomes quieter, speaks less, and looks tired."
          },
          {
            "label": "What it may mean",
            "text": "Air movement and respiratory reserve may be worsening, even though the patient is quieter."
          },
          {
            "label": "Easy wrong turn",
            "text": "Treating the quieter patient as reassuring."
          },
          {
            "label": "What else could fit",
            "text": "Poor effort, fatigue, medication effect, or another cause of reduced ventilation still needs assessment."
          },
          {
            "label": "What changes now",
            "text": "Reassess ventilation and overall appearance, prepare for deterioration, communicate the change, and move with appropriate urgency."
          },
          {
            "label": "What would change my mind",
            "text": "Better air entry, work of breathing, speech, mentation, and response after care, or findings that support another explanation."
          }
        ]
      }
    ],
    "relatedTools": [
      "directive-decision-map",
      "next-attempt-debrief"
    ],
    "relatedSections": [
      "from-capture-to-smart-note",
      "clinical-recall-without-trivia",
      "retrieval-and-spaced-learning",
      "avoiding-premature-closure"
    ],
    "collection": "field"
  },
  {
    "id": "skill-breakdown-sheet",
    "title": "Skill Breakdown Sheet",
    "status": "drafted",
    "toolType": "template",
    "purpose": "Find the exact movement or condition that keeps breaking a skill, so the next practice session has a physical target.",
    "whenToUse": "The name of the skill is hiding the exact place it fails.",
    "whenNotToUse": [
      "Don't use it as a script to recite while you perform the skill. It is for building the skill during practice.",
      "Don't use it to set technique, rate, or volume. Use what your current program and standards require.",
      "Don't use it when the problem is a decision rather than a movement. A directive that stalls or a cue noticed too late needs a different tool."
    ],
    "fieldIntro": "Fill it in after several short sets, not after one attempt. Write what a partner could see or hear. Don't record patient names, addresses, health-card numbers, exact dates of birth, or other identifying information from real calls or placement.",
    "steps": [
      "Name the skill.",
      "Perform it slowly in several short sets. Say the steps aloud if the skill is new, so omissions are easier to catch.",
      "Note which parts stay consistent. The skill is rarely failing everywhere.",
      "Find the exact failure point: the movement or condition where it breaks, and when it starts.",
      "Write what proves it: what you or a partner can see or hear when it breaks.",
      "Choose the next drill. Work only on the failing part with blocked practice until it holds across several attempts and after a short delay.",
      "Add position, movement, communication, divided attention, or time pressure only after the part is dependable.",
      "Keep sessions short enough to repeat. Record the weak point, what was corrected, and what condition should be added next."
    ],
    "fields": [
      {
        "id": "skill",
        "label": "Skill",
        "helperText": "Which skill are you working on? The name is where the sheet starts, not the answer."
      },
      {
        "id": "still-reliable",
        "label": "What stays reliable",
        "helperText": "After several short sets, which parts stay consistent?"
      },
      {
        "id": "failure-point",
        "label": "Exact failure point",
        "helperText": "Which movement or condition breaks, and when? Look at position, hand fatigue, movement, a partner question, or time pressure."
      },
      {
        "id": "proof",
        "label": "What proves it",
        "helperText": "What can you or a partner see or hear when it breaks? Don't assume a smooth movement is an effective one."
      },
      {
        "id": "next-drill",
        "label": "Next drill",
        "helperText": "What will you practise on only the failing part, and under what condition? What will you add once it stays consistent across several short sets?"
      },
      {
        "id": "after-session",
        "label": "After the session",
        "helperText": "What was corrected, and what condition should be added next? Did it still hold after a short delay?"
      }
    ],
    "commonMistakes": [
      "Writing the skill name as the target. “Practise BVM” doesn't tell you what to change.",
      "Stopping after one successful attempt. One clean repetition proves the skill worked once.",
      "Practising only in ideal conditions.",
      "Adding speed before accuracy, or speeding up because someone is watching.",
      "Leaving long gaps between sessions."
    ],
    "examples": [
      {
        "title": "BVM ventilation",
        "context": "After several short sets, a student notices the skill isn't failing everywhere. The seal opens only when the left hand begins to fatigue, and chest rise becomes less reliable at the same time.",
        "entries": [
          {
            "label": "Skill",
            "text": "BVM ventilation."
          },
          {
            "label": "What stays reliable",
            "text": "Airway position and breath rate remain consistent."
          },
          {
            "label": "Exact failure point",
            "text": "The seal opens near the bridge of the nose after several breaths when my left hand starts to fatigue."
          },
          {
            "label": "What proves it",
            "text": "The leak becomes audible and chest rise becomes inconsistent."
          },
          {
            "label": "Next drill",
            "text": "Work only on mask position and a two-handed seal on the floor while a partner squeezes the bag. Add a patient report after the seal stays consistent across several short sets."
          }
        ]
      }
    ],
    "relatedTools": [
      "next-attempt-debrief",
      "scenario-run-sheet"
    ],
    "relatedSections": [
      "training-your-hands",
      "osce-preparation-and-pressure-practice",
      "from-scenario-to-practice-target",
      "cognitive-load"
    ],
    "collection": "field"
  },
  {
    "id": "scenario-run-sheet",
    "title": "Scenario Run Sheet",
    "status": "drafted",
    "toolType": "template",
    "purpose": "Build a fair, one-page peer case around one behaviour or decision, with a patient who answers the candidate's care.",
    "whenToUse": "You need a fair case built around one decision or behaviour.",
    "whenNotToUse": [
      "Don't use it as a replacement for instructor-led simulation.",
      "Don't start from a diagnosis such as “let's do a STEMI.” Start from the behaviour or decision you want to practise.",
      "Don't use it to build a memorable disaster. Six diagnoses, three hidden allergies, and a sudden ceiling collapse aren't necessarily good practice."
    ],
    "fieldIntro": "Keep the case to one page. A longer case usually contains more teaching goals than a short peer debrief can handle. Build a run sheet, not a short story. Don't record patient names, addresses, health-card numbers, exact dates of birth, or other identifying information from real calls or placement.",
    "steps": [
      "Choose the behaviour or decision first, then select a diagnosis that creates a fair opportunity to practise it.",
      "Check the relevant BLS presentation and General Standards, then add any ALS directive that applies. If those decisions are difficult, review the content before running the case.",
      "Write the dispatch information, the scene, and the patient script.",
      "Write the patient on arrival, after appropriate care, and after delay or ineffective care. The patient needs to answer the candidate's care.",
      "Name the decision point: the finding or change that creates the behaviour you want to practise.",
      "Add one piece of friction only when it serves the target. Otherwise write “None.”",
      "Write one debrief question that returns to the reason the case was built.",
      "Run it aloud and in real time. The person playing the patient follows the script, answers only the question asked, and changes only when the script or the candidate's care calls for it.",
      "Keep the debrief short and record only what you'll need later. Carry the correction into the Next-Attempt Debrief.",
      "If you start from the Scenario Generator, verify any generated clinical details before use."
    ],
    "fields": [
      {
        "id": "target",
        "label": "Target",
        "helperText": "Which behaviour or decision is this case built to practise?"
      },
      {
        "id": "standards",
        "label": "Standards checked",
        "helperText": "Which BLS presentation and General Standards apply, and which ALS directive, if any? Check the current versions."
      },
      {
        "id": "dispatch",
        "label": "Dispatch information",
        "helperText": "What is the crew told before arrival? It may be incomplete, but it should be fair."
      },
      {
        "id": "scene",
        "label": "Scene",
        "helperText": "Where is the patient, who else is present, and what can be observed immediately?"
      },
      {
        "id": "patient-script",
        "label": "Patient script",
        "helperText": "What does the patient volunteer? What appears only if asked or assessed? How should the patient behave?"
      },
      {
        "id": "on-arrival",
        "label": "On arrival",
        "helperText": "Vitals and condition when the crew arrives."
      },
      {
        "id": "appropriate-care",
        "label": "Appropriate-care trajectory",
        "helperText": "Vitals and condition after appropriate care. What does the candidate do, and how does the patient respond?"
      },
      {
        "id": "delay",
        "label": "Delay trajectory",
        "helperText": "Vitals and condition after delay or ineffective care."
      },
      {
        "id": "decision-point",
        "label": "Decision point",
        "helperText": "What finding or change creates the behaviour you want to practise?"
      },
      {
        "id": "friction",
        "label": "Friction",
        "helperText": "One complication that serves the target, or “None.”"
      },
      {
        "id": "debrief-question",
        "label": "Debrief question",
        "helperText": "What will you ask about the decision point after the run?"
      }
    ],
    "commonMistakes": [
      "Gotcha cases and too many complications.",
      "A patient who doesn't change after treatment, delay, or reassessment, so the student is mostly solving a written case aloud.",
      "Playing the patient loosely: volunteering information because the assessment has stalled, or helping the candidate complete the script.",
      "Summarizing what you would have asked instead of asking it aloud.",
      "Teaching while the scenario is still running.",
      "Inaccurate clinical content, or feedback that shifts from behaviour to personality."
    ],
    "examples": [
      {
        "title": "A child who stops reaching for the parent",
        "context": "A small run sheet for practising a change in transport priority. The patient change is the whole point of the case.",
        "entries": [
          {
            "label": "Target",
            "text": "State the change in transport priority when a previously stable child becomes mottled and less interactive."
          },
          {
            "label": "Decision point",
            "text": "The child stops reaching for the parent and no longer resists assessment."
          },
          {
            "label": "Appropriate-care trajectory",
            "text": "The lead states the deterioration, repeats the primary assessment, directs the partner, and prepares to move."
          },
          {
            "label": "Delay trajectory",
            "text": "The history continues while the child becomes harder to rouse."
          },
          {
            "label": "Friction",
            "text": "None. The patient change is enough."
          },
          {
            "label": "Debrief question",
            "text": "What was the first cue that should have changed the pace of the call?"
          }
        ]
      }
    ],
    "relatedTools": [
      "next-attempt-debrief",
      "reset-card"
    ],
    "relatedSections": [
      "design-and-run-your-own-scenarios",
      "from-scenario-to-practice-target",
      "learning-the-patient-care-standards",
      "mental-rehearsal-and-visualization"
    ],
    "collection": "field"
  },
  {
    "id": "reset-card",
    "title": "Reset Card",
    "status": "drafted",
    "toolType": "reset",
    "purpose": "Return attention to the whole patient when one part of the call takes over.",
    "whenToUse": "The call has become too small and your attention needs a return point.",
    "whenNotToUse": [
      "Don't perform it for the evaluator. It is a return point, not another algorithm.",
      "Don't use it to analyze a mistake mid-call. Correct it, state any change in the plan, and return to the patient. Detailed analysis belongs in debrief."
    ],
    "fieldIntro": "Review the card before the next scenario or OSCE. During the call nothing is written and nothing needs to be announced. The prompts can guide delegation, repositioning, a brief team update, or the next assessment step. Don't record patient names, addresses, health-card numbers, exact dates of birth, or other identifying information from real calls or placement.",
    "steps": [
      "Stop adding, exhale once, and look at the patient.",
      "Run the four prompts: risk, structure, action, reassess.",
      "Say enough to make the current risk and plan shared again.",
      "If you caught a mistake, correct what you can, state the change, and continue."
    ],
    "fields": [
      {
        "id": "risk",
        "label": "Risk",
        "helperText": "What could harm the patient if it's missed or delayed?"
      },
      {
        "id": "structure",
        "label": "Structure",
        "helperText": "Where am I in the usual assessment or call sequence?"
      },
      {
        "id": "action",
        "label": "Action",
        "helperText": "What needs to happen next while the explanation remains incomplete?"
      },
      {
        "id": "reassess",
        "label": "Reassess",
        "helperText": "What must be checked after that action?"
      }
    ],
    "commonMistakes": [
      "Waiting to feel anxious. Reset when the focus has become too small for the patient.",
      "Reaching for another piece of equipment because your hands need somewhere to go.",
      "Staying with a plan after the patient has given you a reason to change.",
      "Performing the prompts like a ceremony."
    ],
    "examples": [
      {
        "title": "A 12-lead that won't settle",
        "context": "A patient who missed dialysis reports weakness, nausea, and increasing fatigue. The student keeps working on a poor 12-lead tracing while the patient becomes more drowsy and the pulse slows.",
        "entries": [
          {
            "label": "Risk",
            "text": "The change in consciousness and perfusion now matters more than perfecting the tracing."
          },
          {
            "label": "Structure",
            "text": "Back to the primary assessment."
          },
          {
            "label": "Action",
            "text": "Delegate the monitor problem. “I'm more concerned about the patient getting worse than the tracing right now. Let's repeat the primary assessment and vital signs. Keep working on the ECG while we get moving.”"
          },
          {
            "label": "Reassess",
            "text": "Repeat the important findings and decide what the current stability requires."
          }
        ]
      }
    ],
    "relatedTools": [
      "next-attempt-debrief",
      "skill-breakdown-sheet"
    ],
    "relatedSections": [
      "resetting-when-thinking-narrows",
      "osce-preparation-and-pressure-practice",
      "after-you-fail-something",
      "cognitive-load"
    ],
    "collection": "field"
  },
  {
    "id": "next-attempt-debrief",
    "title": "Next-Attempt Debrief",
    "status": "drafted",
    "toolType": "template",
    "purpose": "A one-page way to turn feedback into one observable change and decide where to test it.",
    "whenToUse": "Feedback needs to become one observable change.",
    "whenNotToUse": [
      "Don't use it while you're still flooded. Eat, walk, sleep, and set a time to come back to it.",
      "Don't use it to repair the entire debrief at once. Keep the rest of the feedback, but give the next attempt one job.",
      "Don't write a paragraph about confidence, resilience, or what the station taught you about yourself.",
      "Don't turn every placement call into one. Most calls don't need to become a field tool."
    ],
    "fieldIntro": "One page. Write what another person in the room could have seen or heard, not a verdict. Don't record patient names, addresses, health-card numbers, exact dates of birth, or other identifying information from real calls or placement.",
    "steps": [
      "Start from the feedback, or the evaluation sheet if there is one. If it's unclear, ask which one or two behaviours matter most.",
      "Find the first observable point where the call stalled, drifted, or should have changed direction.",
      "Compare the feedback with what you remember doing, and write what had your attention.",
      "Choose one correction: the one with the greatest consequence, or the one that has appeared before.",
      "Write the next behaviour as a cue and what you'll do when it appears.",
      "Choose where you'll test it. Change the diagnosis but keep the same decision problem.",
      "Afterward, record whether you noticed the cue and whether the new behaviour appeared, appeared partly, or was still absent. Retire the target when it is reliable across different cases.",
      "If the same problem survives an ordinary correction, use the repeat-pattern section."
    ],
    "fields": [
      {
        "id": "where-changed",
        "label": "Where the call changed",
        "helperText": "What was the first moment the call stalled, drifted, or should have changed direction?"
      },
      {
        "id": "attention",
        "label": "What had my attention",
        "helperText": "What were you doing or trying to finish at that moment?"
      },
      {
        "id": "missed-delayed",
        "label": "What I missed or delayed",
        "helperText": "What didn't happen, or happened too late?"
      },
      {
        "id": "still-reliable",
        "label": "What stayed reliable",
        "helperText": "What held up, even if the rough part of the run is trying to erase it?"
      },
      {
        "id": "next-behaviour",
        "label": "Next behaviour",
        "helperText": "When this cue appears, what will you do? Make it something another person could observe."
      },
      {
        "id": "test-where",
        "label": "Where I'll test it",
        "helperText": "Which short cases, drill, partner run, or suitable call will give it a fair test?"
      },
      {
        "id": "result",
        "label": "What happened",
        "helperText": "Did you notice the cue? Did the behaviour appear, appear partly, or was it still absent? Noticing earlier or recovering faster still counts."
      },
      {
        "id": "repeat-pattern",
        "label": "Repeat pattern",
        "helperText": "Only if the problem survives a correction: Was the knowledge accurate and available without the source? Did the behaviour have a dependable place in the call? What else was taking your attention? What assumption made the original response seem reasonable? Pick the explanation best supported by what happened and change the practice conditions."
      }
    ],
    "commonMistakes": [
      "Writing the verdict: “I was too slow,” “I panicked,” “I missed the whole thing.”",
      "Letting the conclusion outrun the evidence. Missing a reassessment is a finding. “Maybe I'm not safe enough to do this” is an interpretation.",
      "Choosing several targets, so the next scenario is expected to repair the whole debrief.",
      "Leaving out where you'll test it.",
      "Testing only in the original case. If the correction appears only there, it hasn't transferred yet."
    ],
    "examples": [
      {
        "title": "A headache that wasn't a migraine",
        "context": "The patient has a history of migraines, but this headache reached maximum intensity almost immediately. During the assessment, the patient vomits and becomes less steady. The student continues a detailed migraine history.",
        "entries": [
          {
            "label": "Where the call changed",
            "text": "The patient vomited and became unsteady, but I stayed in the migraine history."
          },
          {
            "label": "What had my attention",
            "text": "I was trying to finish the history and make the first explanation work."
          },
          {
            "label": "What I missed or delayed",
            "text": "I didn't say that the risk had changed or start moving the call forward."
          },
          {
            "label": "Next behaviour",
            "text": "When a new high-risk finding appears, I'll stop, say what changed, and give the next priority."
          },
          {
            "label": "Where I'll test it",
            "text": "Three short headache or neurologic cases with a believable opening story and one later change."
          }
        ]
      }
    ],
    "relatedTools": [
      "reset-card",
      "scenario-run-sheet"
    ],
    "relatedSections": [
      "from-scenario-to-practice-target",
      "reflection-without-rumination",
      "after-you-fail-something",
      "design-and-run-your-own-scenarios"
    ],
    "collection": "field"
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
      "Once the note feels stable, use the Cue-to-Care Recall Card to turn one cue, contrast, or boundary into retrieval practice.",
      "If the note came from a repeated scenario error, use the Five Whys Tool to trace it back to one practice target."
    ],
    "relatedSections": [
      "from-capture-to-smart-note",
      "meaning-before-memorization",
      "retrieval-and-spaced-learning",
      "cognitive-load",
      "taking-notes-in-a-moving-lecture"
    ],
    "relatedTools": [
      "cue-to-care-recall-card",
      "five-whys-tool"
    ],
    "collection": "more"
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
      "reflection-without-rumination",
      "turning-feedback-into-action",
      "resetting-when-thinking-narrows"
    ],
    "relatedTools": [
      "five-whys-tool",
      "reflection-without-journaling-tool",
      "reset-card"
    ],
    "collection": "more"
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
      "If you are still between scenario attempts, use Reset Card instead of a longer reflection.",
      "If the same issue has appeared more than once across scenarios, use the Five Whys Tool to find the practice target underneath it."
    ],
    "relatedSections": [
      "reflection-without-rumination",
      "turning-feedback-into-action",
      "the-five-whys",
      "from-scenario-to-practice-target",
      "capturing-the-debrief"
    ],
    "relatedTools": [
      "reset-card",
      "five-whys-tool",
      "clinical-reasoning-check"
    ],
    "collection": "more"
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
      "reflection-without-rumination",
      "turning-feedback-into-action",
      "common-errors-and-what-they-reveal",
      "focused-practice-after-feedback",
      "capturing-the-debrief"
    ],
    "relatedTools": [
      "reflection-without-journaling-tool",
      "clinical-reasoning-check"
    ],
    "collection": "more"
  }
] as Tool[]

export const activeTools = tools.filter((tool) => tool.status === 'drafted')

export const getToolById = (id: string) =>
  tools.find((tool) => tool.id === id)
