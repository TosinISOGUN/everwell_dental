import type { ImageId } from "./images.generated";

export type TeamMember = {
  name: string;
  role: string;
  image: ImageId;
  alt: string;
  bio: string;
  focus: string;
};

export const team: TeamMember[] = [
  {
    name: "Dr. Marcus Hale",
    role: "Lead Dentist",
    image: "teamMarcus",
    alt: "A bearded dentist in grey scrubs holding a model of teeth",
    bio: "Marcus believes most dental anxiety comes from not knowing what happens next, so he narrates every visit in plain English and stops the moment a patient has a question. Away from the practice he is a slow-brew coffee devotee and a fair-weather cyclist.",
    focus: "Preventive care, restorative treatment planning",
  },
  {
    name: "Dr. Grace Lin",
    role: "Associate Dentist",
    image: "teamGrace",
    alt: "A smiling dentist in a surgical cap and grey scrubs",
    bio: "Grace is the team's perfectionist about the details nobody notices: margins, contacts, the way a crown catches the light. She is happiest when a patient looks in the mirror and simply says, 'that feels like me.'",
    focus: "Cosmetic and restorative dentistry",
  },
  {
    name: "Rohan Mehta",
    role: "Dental Hygienist",
    image: "teamRohan",
    alt: "A dental hygienist in grey scrubs explaining a model of teeth",
    bio: "Rohan has a talent for making a cleaning feel like the easiest part of someone's week. He would rather coach a habit over six months than lecture about it once, and he keeps a running list of patients' podcast recommendations.",
    focus: "Hygiene, preventive coaching",
  },
];

export const teamNote =
  "The Everwell Dental team is fictional concept content. The portraits are stock photographs and do not depict real clinicians.";

export const photoNote =
  "Photographs on this site are stock images chosen for the concept. They do not show a real clinic, team, or patients.";

export const homeFaqs = [
  {
    q: "Which services does the practice offer?",
    a: "The concept covers general and preventive care, cosmetic dentistry, restorative treatment, and urgent dental concerns. Each has its own page with plain-language explanations.",
  },
  {
    q: "How can I request an appointment?",
    a: "Use the appointment request form on the contact page, or call the fictional demo phone number. This is a design concept, so submissions are demonstrations only.",
  },
  {
    q: "What should a new patient expect?",
    a: "A first visit usually starts with a conversation, an examination, and time to ask questions. The new patients page walks through the journey step by step.",
  },
  {
    q: "How can I ask about insurance and payment options?",
    a: "This concept does not name accepted plans or fees. A real practice would discuss options with you directly. Start with the appointment request form and mention your question.",
  },
  {
    q: "What should I do if I have an urgent dental concern?",
    a: "Call the practice during the sample hours shown on this site. For anything life-threatening, such as difficulty breathing or swallowing, seek emergency medical care immediately.",
  },
];

export const newPatientSteps = [
  {
    title: "Request an appointment",
    text: "Send a short request through the form on the contact page, or call the practice. No medical details are needed at this stage.",
  },
  {
    title: "Share the basics",
    text: "Before your visit, the practice would send its standard intake process through secure, appropriate channels, never through a marketing form like the one on this concept site.",
  },
  {
    title: "Meet the team",
    text: "Your first appointment starts with a conversation: your history, your questions, and a clear plan for your dental care going forward.",
  },
];

export const practiceValues = [
  {
    title: "Clear communication",
    text: "Every finding and recommendation is explained in plain language, with time for your questions.",
  },
  {
    title: "Thoughtful treatment planning",
    text: "Care is prioritized and staged sensibly: what's needed now, what can wait, and why.",
  },
  {
    title: "A welcoming environment",
    text: "A calm, modern space designed to feel approachable rather than clinical.",
  },
  {
    title: "Accessible information",
    text: "Practical details about visits, hours, and next steps are easy to find on every page.",
  },
];

export const bringToList = [
  "A photo ID",
  "Your insurance information, if you have it",
  "A list of current medications",
  "Any recent dental x-rays, if available",
  "Questions you'd like to ask the team",
];

export const reasons = [
  "New patient visit",
  "Routine exam or cleaning",
  "Cosmetic consultation",
  "Restorative concern (filling, crown, or similar)",
  "Urgent dental concern",
] as const;

export const timeWindows = ["Weekday mornings", "Weekday afternoons", "I'm flexible"] as const;
