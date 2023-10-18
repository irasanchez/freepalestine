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
  tweet: "Tweet",
  facebook: "Facebook",
  ttyTtd: "TTY/TDD",
  sms: "Text",
}

export const ACTIONS = [{
  icon: "🏛️",
  label: "Contact the White House (T-Th only)",
  id: 1,
  spheres: [CITIZEN],
  suggestion: ["I am calling to urge the President to demand an immediate ceasefire from Israel on Gaza.", "Gaza has no defenses and is mostly young people and children. By supporting Israel, Biden is supporting genocide.", "I won't support a president who doesn't support human rights for all people.", "Thank you for your time and for volunteering."],
  reminder: "⭐ The person on the other side is a volunteer. Be kind or no one will want to volunteer!",
  actionOptions: [
    {
      type: ACTION_TYPES.call,
      call: "202-456-1111",
    },
    {
      type: ACTION_TYPES.sms,
      sms: "50409",
      body: "resist"
    },
    {
      type: ACTION_TYPES.ttyTtd,
      call: "202-456-6213"
    },
    {
      type: ACTION_TYPES.write,
      call: "202-456-6213"
    },
    {
      type: ACTION_TYPES.email,
      email: "https://www.whitehouse.gov/contact/"
    },
    {
      type: ACTION_TYPES.tweet,
      tweet: "https://twitter.com/WhiteHouse"
    },
    {
      type: ACTION_TYPES.facebook,
      facebook: "https://www.facebook.com/WhiteHouse/"
    },

  ]
},
{
  icon: "📰",
  label: "Letter to the Editor",
  id: 1,
  spheres: [LITERATE,],
  actionOptions: [
    {
      type: ACTION_TYPES.call,
      call: "202-456-1111",
    },
    ,
    {
      type: ACTION_TYPES.write,
      call: "202-456-6213"
    }
  ]
},
{
  icon: "🏛️",
  label: "Boycott",
  id: 1,
  spheres: [STARBUCKS, MCDONALDS],
  content: {
    subheading: "Starbucks and McDonald's Boycott",
    details: (
      <p>McDonald's <a href="https://www.msn.com/en-us/news/world/mcdonalds-faces-boycott-for-giving-israeli-soldiers-free-food/ar-AA1ialNR" target="_blank">financially and morally support the IDF</a>.</p>
    )

  },
  actionOptions: [

  ]
}
]