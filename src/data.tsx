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
}

export const ACTIONS = [{
  icon: "🏛️",
  label: "Contact the White House",
  id: 1,
  spheres: [CITIZEN],
  actionOptions: [
    {
      type: ACTION_TYPES.call,
      call: "202-456-1111",
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