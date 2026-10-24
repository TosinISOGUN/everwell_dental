import type { ImageId } from "./images.generated";

export type Service = {
  slug:
    "general-dentistry" | "cosmetic-dentistry" | "restorative-dentistry" | "emergency-dentistry";
  name: string;
  navName: string;
  blurb: string;
  image: ImageId;
  imageAlt: string;
  /** CSS object-position for the photograph, so crops keep the subject in frame. */
  imageFocus: string;
  intro: string;
  includes: { title: string; text: string }[];
  visit: { title: string; items: string[] };
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "general-dentistry",
    name: "General & Preventive Dentistry",
    navName: "General & Preventive",
    blurb: "Routine exams, gentle cleanings, and practical guidance that keep small issues small.",
    image: "serviceGeneral",
    imageAlt:
      "A patient reclined in a treatment chair while two members of the team prepare for an exam",
    imageFocus: "50% 64%",
    intro:
      "Regular care is the simplest way to keep your smile healthy. Our general and preventive visits give you time with a team that explains what they see, answers your questions, and helps you plan care that fits your life.",
    includes: [
      {
        title: "Routine examinations",
        text: "A thorough look at your teeth, gums, and bite, with findings explained in plain language.",
      },
      {
        title: "Professional cleanings",
        text: "Careful, comfortable cleanings that remove buildup and leave your mouth feeling fresh.",
      },
      {
        title: "Preventive guidance",
        text: "Personalized tips for brushing, flossing, and habits that protect your smile between visits.",
      },
      {
        title: "Diagnostic services",
        text: "When needed, digital imaging helps us see what's happening below the surface and plan care thoughtfully.",
      },
    ],
    visit: {
      title: "What a typical appointment may involve",
      items: [
        "A conversation about your dental history and any changes since your last visit",
        "An examination of your teeth, gums, and bite",
        "Professional cleaning and polish, when appropriate",
        "Time to ask questions and discuss any recommended next steps",
      ],
    },
    faqs: [
      {
        q: "How often should I schedule a checkup?",
        a: "Many patients do well with a visit every six months, but the right interval depends on your oral health. During your visit we can suggest a schedule that fits you.",
      },
      {
        q: "Will my first cleaning be uncomfortable?",
        a: "Cleanings are usually comfortable. Tell your hygienist if anything feels sensitive. They can adjust their approach and pace.",
      },
      {
        q: "Do you see children?",
        a: "Yes, the concept includes family care. Every member of the family is welcome, from first checkups onward.",
      },
    ],
  },
  {
    slug: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    navName: "Cosmetic",
    blurb:
      "Whitening, veneers, and thoughtful cosmetic consultations built around how you want to look and feel.",
    image: "serviceCosmetic",
    imageAlt: "A smiling woman with long hair looking at the camera",
    imageFocus: "50% 30%",
    intro:
      "Cosmetic dentistry is about a smile that feels like yours: natural, comfortable, and confident. We start with a conversation about what you'd like to change, then walk through the options honestly, including what each involves and what can realistically be achieved.",
    includes: [
      {
        title: "Teeth whitening",
        text: "Professional whitening options, explained clearly, with sensible expectations about results.",
      },
      {
        title: "Veneers",
        text: "Thin, custom-made shells that can change the shape, shade, or spacing of front teeth.",
      },
      {
        title: "Cosmetic consultations",
        text: "A relaxed conversation about your goals, with no pressure and no treatment decided in the chair.",
      },
      {
        title: "Honest guidance",
        text: "An explanation of the factors that influence suitability and outcomes, so you can decide with confidence.",
      },
    ],
    visit: {
      title: "What a cosmetic consultation involves",
      items: [
        "A discussion of what you like, and what you'd like to change, about your smile",
        "A simple examination of your teeth and gums",
        "An overview of suitable treatment options and what each typically involves",
        "Clear information to take home before you decide anything",
      ],
    },
    faqs: [
      {
        q: "How white will my teeth get?",
        a: "Results vary from person to person, and no honest dentist can promise a specific shade. At a consultation we can show you what whitening can typically achieve and discuss your goals.",
      },
      {
        q: "Are veneers right for me?",
        a: "It depends on your teeth, your bite, and your goals. A consultation is the best way to find out whether veneers or a simpler option makes sense.",
      },
      {
        q: "Does cosmetic treatment hurt?",
        a: "Most cosmetic procedures are well tolerated. We explain each step beforehand so there are no surprises, and we welcome questions at any point.",
      },
    ],
  },
  {
    slug: "restorative-dentistry",
    name: "Restorative Dentistry",
    navName: "Restorative",
    blurb:
      "Fillings, crowns, and clear treatment plans that restore teeth and confidence in everyday life.",
    image: "serviceRestorative",
    imageAlt: "A cutaway model of dental implants and crowns on a pale surface",
    imageFocus: "50% 50%",
    intro:
      "When a tooth is damaged, decayed, or worn, restorative care brings it back to comfortable, dependable function. We plan treatment in plain terms: what's needed now, what can wait, and why, so you're never left guessing.",
    includes: [
      {
        title: "Fillings",
        text: "Careful repair of cavities with materials chosen to suit the tooth and the situation.",
      },
      {
        title: "Crowns",
        text: "Protective coverings that restore the strength and shape of a damaged tooth.",
      },
      {
        title: "Restorative treatment planning",
        text: "A staged, prioritized plan that spreads care sensibly over time when more than one tooth needs attention.",
      },
      {
        title: "Clear explanations",
        text: "We discuss options and trade-offs openly, without pressuring you toward treatment you don't need.",
      },
    ],
    visit: {
      title: "What restorative care typically involves",
      items: [
        "An examination and, when helpful, imaging to understand the full picture",
        "A clear explanation of findings and the options for treating them",
        "Treatment with the area comfortably numbed",
        "Practical aftercare guidance and a plan for follow-up",
      ],
    },
    faqs: [
      {
        q: "How do I know if I need a filling or a crown?",
        a: "It depends on how much healthy tooth structure remains. We examine the tooth, explain what we find, and recommend the smallest treatment that will do the job well.",
      },
      {
        q: "Will the procedure be uncomfortable?",
        a: "The area is numbed before treatment begins. If you feel anything during the procedure, tell us. We can pause and adjust.",
      },
      {
        q: "Can I spread treatment out over time?",
        a: "Often, yes. We prioritize what needs attention first and build a plan that fits your circumstances and budget.",
      },
    ],
  },
  {
    slug: "emergency-dentistry",
    name: "Emergency Dentistry",
    navName: "Emergency",
    blurb:
      "Clear, calm guidance for urgent dental concerns, and a quick way to reach the practice.",
    image: "serviceEmergency",
    imageAlt: "A woman holding her cheek with a worried look",
    imageFocus: "52% 32%",
    intro:
      "Dental problems can be stressful. If something hurts, breaks, or swells, contact the practice and we will help you work out the next step. This concept website is not an emergency service, and the practice hours shown are fictional sample content.",
    includes: [
      {
        title: "Urgent appointments",
        text: "Call the practice and describe what's happening. We will advise you on timing and next steps during fictional concept hours.",
      },
      {
        title: "Calm first guidance",
        text: "Simple steps you can take in the meantime, such as rinsing gently and avoiding chewing on the affected side.",
      },
      {
        title: "Follow-up care",
        text: "After an urgent visit, we plan any further treatment with the same clear explanations as always.",
      },
      {
        title: "Honest limits",
        text: "For life-threatening symptoms such as difficulty breathing or swallowing, seek emergency medical care immediately.",
      },
    ],
    visit: {
      title: "If you have an urgent concern",
      items: [
        "Call the practice during the sample hours shown on this site",
        "Describe your symptoms and how long they have lasted",
        "We will suggest the earliest appropriate appointment. This concept does not promise same-day or after-hours care",
        "For life-threatening symptoms, call emergency medical services or go to an emergency department",
      ],
    },
    faqs: [
      {
        q: "Is the practice open 24/7?",
        a: "No. Everwell Dental is a fictional concept with sample office hours, and this website does not provide emergency triage. For life-threatening symptoms, seek emergency medical care.",
      },
      {
        q: "What counts as a dental emergency?",
        a: "Severe pain, facial swelling, a knocked-out tooth, or uncontrolled bleeding generally warrant urgent attention. When in doubt, call and describe what you're experiencing.",
      },
      {
        q: "Can I request an urgent visit online?",
        a: "You can submit an appointment request through the demo form on the contact page, but for anything urgent, calling is the more reliable first step.",
      },
    ],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
