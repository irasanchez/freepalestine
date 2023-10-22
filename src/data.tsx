F

// static data
const PALESTINIAN_AMERICAN = "I am Palestinian American";
const CITIZEN = "I am a citizen";
const LITERATE = "I can read/write";
const DONATE = "I have $1 I can share";
const STARBUCKS = "I go to Starbucks";
const MCDONALDS = "I go to McDonald's";
const SOCIAL_MEDIA = "I use social media";
const COLLEGE_STUDENT = "I am a college student";
const EVENT = "I can get to events";
const PRO = "I am a specialist";
const COMPUTER = "I have a computer";
const CONSUMER = "I buy things";

export const SPHERES = [
  PALESTINIAN_AMERICAN,
  CITIZEN,
  LITERATE,
  DONATE,
  STARBUCKS,
  MCDONALDS,
  SOCIAL_MEDIA,
  COLLEGE_STUDENT,
  EVENT,
  PRO,
  COMPUTER,
  CONSUMER
]

const ACTION_TYPES = {
  call: "Call",
  write: "Write",
  email: "Email",
  tweet: "Tweet",
  facebook: "Facebook",
  ttyTtd: "TTY/TDD",
  sms: "Text",
}
const ACTION_TYPES_BUTTON_LABELS = {
  call: "📱 Call Now",
  email: "📧 Email Now",
  facebook: "Facebook",
  ttyTtd: "TTY/TDD",
  sms: "Text",
}

export const ACTIONS = [
  {
    icon: "🏛️",
    label: "Contact the White House (T-Th only)",
    id: 1,
    spheres: [LITERATE, CITIZEN],
    suggestion: ["I am contacting to urge the President to demand an immediate ceasefire from Israel on Gaza.", "Gaza has no defenses and is mostly young people and children. By supporting Israel, Biden is supporting genocide.", "I won't support a president who doesn't support human rights for all people.", "Thank you for your time and for volunteering."],
    reminder: "⭐ The person on the other side is a volunteer. Be kind or no one will want to volunteer!",
    actionOptions: [
      {
        type: ACTION_TYPES.call,
        call: "202-456-1111",
        buttonLabel: ACTION_TYPES_BUTTON_LABELS.call
      },
      {
        type: ACTION_TYPES.sms,
        sms: "50409",
        body: "president",
        buttonLabel: ACTION_TYPES_BUTTON_LABELS.sms
      },
      {
        type: ACTION_TYPES.ttyTtd,
        call: "202-456-6213",
        buttonLabel: ACTION_TYPES_BUTTON_LABELS.ttyTtd,
      },
      {
        buttonLabel: ACTION_TYPES_BUTTON_LABELS.email,
        type: ACTION_TYPES.email,
        email: "https://www.whitehouse.gov/contact/"
      },
      
      {
        buttonLabel: ACTION_TYPES_BUTTON_LABELS.facebook,
        type: ACTION_TYPES.facebook,
        facebook: "https://www.facebook.com/WhiteHouse/"
      },
    ]
  },
  {
    icon: "🏛️",
    label: "Contact Congress",
    id: 1,
    spheres: [LITERATE, CITIZEN],
    suggestion: ["I am contacting to urge Congress to demand that Israel cease its genocide on Palestine entirely.", "In order for there to be peace, Israel needs to stop bombing.", "It is our job as one of the world's most powerful nations to help the weakest people.", "Please stop helping Israel kill defenseless people with my tax dollars."],
    reminder: "⭐ Resist Bot will walk you through emailing each of your officials. To reach the most officials, use one of these options each time: CONGRESS, LEGISLATURE, MAYOR. Staffers filter out letters with vulgar language. Be kind to get through.",
    actionOptions: [
      {
        type: ACTION_TYPES.sms,
        sms: "50409",
        body: "congress",
        buttonLabel: ACTION_TYPES_BUTTON_LABELS.sms
      },
      
    ]
  },
  {
    icon: "🏛️",
    label: "Contact State Legislatures",
    id: 1,
    spheres: [LITERATE, CITIZEN],
    suggestion: ["I am contacting to urge my state officials pressure Biden and Congress to demand that Israel cease its genocide on Palestine entirely.", "In order for there to be peace, Israel needs to stop bombing.", "It is our job as one of the world's most powerful nations to help the weakest people.", "Please stop helping Israel kill defenseless people with my tax dollars."],
    reminder: "⭐ Resist Bot will walk you through emailing each of your officials. To reach the most officials, use one of these options each time: CONGRESS, LEGISLATURE, MAYOR. Staffers filter out letters with vulgar language. Be kind to get through.",
    actionOptions: [
      {
        type: ACTION_TYPES.sms,
        sms: "50409",
        body: "legislature",
        buttonLabel: ACTION_TYPES_BUTTON_LABELS.sms
      },
      
    ]
  },
  {
    icon: "🏛️",
    label: "Contact your Mayor",
    id: 1,
    spheres: [LITERATE, CITIZEN],
    suggestion: ["I am contacting to urge the Mayor to pressure the federal government to demand that Israel cease its genocide on Palestine entirely.", "In order for there to be peace, Israel needs to stop bombing.", "It is our job as one of the world's most powerful nations to help the weakest people.", "Please stop helping Israel kill defenseless people with my tax dollars."],
    reminder: "⭐ Resist Bot will walk you through emailing each of your officials. To reach the most officials, use one of these options each time: CONGRESS, LEGISLATURE, MAYOR. Staffers filter out letters with vulgar language. Be kind to get through.",
    actionOptions: [
      {
        type: ACTION_TYPES.sms,
        sms: "50409",
        body: "mayor",
        buttonLabel: ACTION_TYPES_BUTTON_LABELS.sms
      },
      
    ]
  },
  
  {
    icon: "📰",
    label: "Letter to the Editor",
    id: 1,
    spheres: [LITERATE,],
    reminder: "⭐ Resist Bot takes your previous letter to an official and sends it to a newspaper on your behalf.",
    actionOptions: [
      {
        type: ACTION_TYPES.sms,
        sms: "50409",
        body: "editor",
        buttonLabel: ACTION_TYPES_BUTTON_LABELS.sms
      },
    ]
  },

  {
    icon: "🏛️",
    label: "Boycott",
    id: 1,
    spheres: [MCDONALDS, CONSUMER],
    content: {
      subheading: "McDonald's Boycott",
      details: "McDonald's supports the IDF financially."
    },
    actionOptions: []
  },
]

