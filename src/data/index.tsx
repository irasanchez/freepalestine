// static data
// i know this is obnoxious, but it reduces typos and adds to intellisense
export const PALESTINIAN_AMERICAN = "I am Palestinian American";
export const LITERATE = "I can read/write";
export const DONATE = "I have $1 I can share";
export const STARBUCKS = "I go to Starbucks";
export const DISNEY = "I watch Disney shows/use Disney+/ go to Disneyland/Disney World";
export const MCDONALDS = "I go to McDonald's";
export const SOCIAL_MEDIA = "I use social media";
export const COLLEGE_STUDENT = "I am a college student";
export const EVENT = "I can get to events";
export const PRO = "I am a specialist";
export const COMPUTER = "I have a computer";
export const CONSUMER = "I buy things";
export const al = "I live in Alabama";
export const ak = "I live in Alaska";
export const az = "I live in Arizona";
export const ar = "I live in Arkansas";
export const ca = "I live in California";
export const co = "I live in Colorado";
export const ct = "I live in Connecticut";
export const de = "I live in Delaware";
export const fl = "I live in Florida";
export const ga = "I live in Georgia";
export const hi = "I live in Hawaii";
export const id = "I live in Idaho";
export const il = "I live in Illinois";
export const ind = "I live in Indiana";
export const ia = "I live in Iowa";
export const ks = "I live in Kansas";
export const ky = "I live in Kentucky";
export const la = "I live in Louisiana";
export const me = "I live in Maine";
export const md = "I live in Maryland";
export const ma = "I live in Massachusetts";
export const mi = "I live in Michigan";
export const mn = "I live in Minnesota";
export const ms = "I live in Mississippi";
export const mo = "I live in Missouri";
export const mt = "I live in Montana";
export const ne = "I live in Nebraska";
export const nv = "I live in Nevada";
export const nh = "I live in New Hampshire";
export const nj = "I live in New Jersey";
export const nm = "I live in New Mexico";
export const ny = "I live in New York";
export const nc = "I live in North Carolina";
export const nd = "I live in North Dakota";
export const oh = "I live in Ohio";
export const ok = "I live in Oklahoma";
export const or = "I live in Oregon";
export const pa = "I live in Pennsylvania";
export const ri = "I live in Rhode Island";
export const sc = "I live in South Carolina";
export const sd = "I live in South Dakota";
export const tn = "I live in Tennessee";
export const tx = "I live in Texas";
export const ut = "I live in Utah";
export const vt = "I live in Vermont";
export const va = "I live in Virginia";
export const wa = "I live in Washington";
export const wv = "I live in West Virginia";
export const wi = "I live in Wisconsin";
export const wy = "I live in Wyoming";

// this text appears on the buttons on the action cards when the modal is closed
export const ACTION_TYPES = {
  call: "Call",
  write: "Write",
  email: "Email",
  tweet: "Tweet",
  ttyTtd: "TTY/TDD",
  sms: "Text",
  share: "Share",
  learn: "info", // hidden
  go: "Go"
};

// this text appears when the modal is open
export const ACTION_TYPES_BUTTON_LABELS = {
  call: "📱 Call Now",
  email: "📧 Email Now",
  facebook: "🌐Facebook",
  ttyTtd: "📱 TTY/TDD",
  sms: "🗨️ Text",
  learn: "🙋🏿‍♀️ Learn More",
  go: "Let's Go! 💨"
};

export const SPHERES = [
  PALESTINIAN_AMERICAN, LITERATE, DONATE, STARBUCKS, MCDONALDS, SOCIAL_MEDIA, COLLEGE_STUDENT, EVENT, PRO, COMPUTER, CONSUMER, al, ak, az, ar, ca, co, ct, de, fl, ga, hi, id, il, ind, ia, ks, ky, la, me, md, ma, mi, mn, ms, mo, mt, ne, nv, nh, nj, nm, ny, nc, nd, oh, ok, or, pa, ri, sc, sd, tn, tx, ut, vt, va, wa, wv, wi, wy
];

// formatting is ignored in the markdown sections for a reason!
export const ACTIONS = [
  {
    icon: "🏛️",
    label: "Contact the White House (T-Th only)",
    reason:
      "Biden is the Commander-in-chief, which means he is in charge of the military. He also is the current leader of the majority party of the Senate.",
    description:
      "Call the White House to demand an immediate ceasefire of Israeli aggression against Palestinian civilians",
    id: 1,
    spheres: [LITERATE, al, ak, az, ar, ca, co, ct, de, fl, ga, hi, id, il, ind, ia, ks, ky, la, me, md, ma, mi, mn, ms, mo, mt, ne, nv, nh, nj, nm, ny, nc, nd, oh, ok, or, pa, ri, sc, sd, tn, tx, ut, vt, va, wa, wv, wi, wy],
    // prettier-ignore-start
    suggestion: `Hi there, I am contacting to express my support for Palestine and demand the following:
     
1. An **immediate ceasefire** in Gaza to allow for **dignified burials** and to **prevent disease**.

2. Urgent restoration of **water, food, fuel, medical supplies, and humanitarian aid**.

3. Immediate **protection of medical facilities,** including reversing illegal evacuation orders for hospitals.

4. **Facilitation of safe passage** for casualties and critically ill patients. 

5. **Open the crossings for evacuees**, medical teams, and equipment. 


Thank you.`,
    // prettier-ignore-end
    reminder:
      "⭐ The person on the other side is a volunteer. Be kind or no one will want to volunteer!",
    actionOptions: [
      {
        type: ACTION_TYPES.call,
        call: "202-456-1111",
        buttonLabel: ACTION_TYPES_BUTTON_LABELS.call,
      },
      {
        type: ACTION_TYPES.sms,
        sms: "50409",
        body: "president",
        buttonLabel: ACTION_TYPES_BUTTON_LABELS.sms,
      },
      {
        type: ACTION_TYPES.ttyTtd,
        call: "202-456-6213",
        buttonLabel: ACTION_TYPES_BUTTON_LABELS.ttyTtd,
      },
      {
        buttonLabel: ACTION_TYPES_BUTTON_LABELS.email,
        type: ACTION_TYPES.email,
        email: "https://www.whitehouse.gov/contact/",
      },
    ],
  },
  {
    icon: "🏛️",
    label: "Contact Congress",
    id: 1,
    spheres: [LITERATE, al, ak, az, ar, ca, co, ct, de, fl, ga, hi, id, il, ind, ia, ks, ky, la, me, md, ma, mi, mn, ms, mo, mt, ne, nv, nh, nj, nm, ny, nc, nd, oh, ok, or, pa, ri, sc, sd, tn, tx, ut, vt, va, wa, wv, wi, wy],
    reason:
      "Congress is in charge of passing laws and making budgets. They are the ones who have using our money to pay for genocide in Palestine instead of healthcare in the US.",
    description:
      "This feature is under construction due to the amount of Congresspersons. The button below opens a text to Resist Bot, which will walk you through contacting Congress.",
    // prettier-ignore-start
    suggestion: `I am contacting to express my support for Palestine and demand the following:
     
1. Removal of US military support for Israel.

2. Sanctions on the state of Israel until it complies with international law. 

3. Protection of medical facilities, patients, evacuees, passageways, and medical teams in Gaza and the West Bank.

4. Outside investigation into Israel's repeated bombings of hospitals and schools.`,
    // prettier-ignore-end
    reminder:
      "⭐ Resist Bot will walk you through emailing each of your officials. To reach the most officials, use one of these options each time: CONGRESS, LEGISLATURE, MAYOR. Staffers filter out letters with vulgar language. Be kind to get through.",
    actionOptions: [
      {
        type: ACTION_TYPES.sms,
        sms: "50409",
        body: "congress",
        buttonLabel: ACTION_TYPES_BUTTON_LABELS.sms,
      },
    ],
  },
  {
    icon: "🏛️",
    label: "Contact State Legislatures",
    id: 1,
    spheres: [LITERATE, az, fl, ga, il, ny, oh, pa, tx],
    reason: "Some states have been funding Israel for a long time and some just bought bonds to help Israel's genocide.",
    // prettier-ignore-start
    suggestion: `I am contacting to express my support for Palestine and to demand that my state completely divest from Israel's genocide in all forms, including bonds and partnerships.
`,
    // prettier-ignore-end
    reminder:
      "⭐ Resist Bot will walk you through emailing each of your officials. To reach the most officials, use one of these options each time: CONGRESS, LEGISLATURE, MAYOR. Staffers filter out letters with vulgar language. Be kind to get through.",
    actionOptions: [
      {
        type: ACTION_TYPES.sms,
        sms: "50409",
        body: "legislature",
        buttonLabel: ACTION_TYPES_BUTTON_LABELS.sms,
      },
    ],
  },
  // {
  //   icon: "🏛️",
  //   label: "Contact your Mayor",
  //   id: 1,
  //   spheres: [LITERATE,],
  //   // suggestion: [
  //   //   "I am contacting to urge the Mayor to pressure the federal government to demand that Israel cease its genocide on Palestine entirely.",
  //   //   "In order for there to be peace, Israel needs to stop bombing.",
  //   //   "It is our job as one of the world's most powerful nations to help the weakest people.",
  //   //   "Please stop helping Israel kill defenseless people with my tax dollars.",
  //   // ],
  //   reminder:
  //     "⭐ Resist Bot will walk you through emailing each of your officials. To reach the most officials, use one of these options each time: CONGRESS, LEGISLATURE, MAYOR. Staffers filter out letters with vulgar language. Be kind to get through.",
  //   actionOptions: [
  //     {
  //       type: ACTION_TYPES.sms,
  //       sms: "50409",
  //       body: "mayor",
  //       buttonLabel: ACTION_TYPES_BUTTON_LABELS.sms,
  //     },
  //   ],
  // },

  {
    icon: "📝",
    label: "Petition: Pass HR3103",
    id: 1,
    spheres: [LITERATE],
    reason: "The United States funds Israel's military (using your taxes) and also provides soldiers. American soldiers signed up thinking they would protect human rights, not violate them.",
    description: "Sign a petition to pass HR3103, which seeks to limit what Israel is allowed to do with Americans' money. It also creates more oversight over what Israel does with Palestinian property.",
// prettier-ignore-start
    suggestion: `
*Created October 18, 2023*

"Hello, I hope this letter can find you in a moment of clarity, as clarity of the mind and soul is needed in times like this. Regardless of your view on the complex history of the occupation of Palestine by Israel, the atrocities Israel is committing are horrifying and will leave a stain on humanity. Leaders of Israel have been documented, on video and on text, about the war crimes they are either going to commit or have already committed. The use of white phosphorus, collective punishment, bombing hospitals, residential buildings, ambulances, and civilians including over 1,000 children, all illegal acts committed by Israel. Despite the horrific violence being perpetrated by Israel, The President wants to use taxpayer dollars to send aid to a state slaughtering civilians. This simply cannot happen. Citizens of this country have been asking for student loan forgiveness, lunches from school children, housing, food, better infrastructure, better public transportation etc. and instead, our dollars are being used to spill the blood of innocent Palestinians. For the sake of those suffering in Gaza and The West Bank, please do not allow the use of taxpayer dollars for Israel. Pass HR3103 and Free Palestine."
    `,
    // prettier-ignore-end
    reminder: null,
    actionOptions: [
      {
        type: ACTION_TYPES.sms,
        sms: "50409",
        body: "Sign PNNEMK",
        buttonLabel: "📝 Sign (tapping sends text message)",
      },
      {
        type: ACTION_TYPES.learn,
        url: "https://www.congress.gov/118/bills/hr3103/BILLS-118hr3103ih.pdf",
        buttonLabel: "HR3103 Source",
        info: true,
      },
      {
        type: ACTION_TYPES.learn,
        url: "https://resist.bot/petitions/PNNEMK",
        buttonLabel: "Petition Source",
        info: true,
      },
    ],
  },
  {
    icon: "📝",
    label: "Letter to the Editor",
    id: 1,
    spheres: [LITERATE],
    reason: "The New York Times is a powerful newspaper with wide reach and is read by politicians. They also promote Zionism.",
    description: "Write a brief letter to the New York Times Editorial Board demanding they promote a ceasefire.",
// prettier-ignore-start
    suggestion: null,
    // prettier-ignore-end
    reminder: null,
    actionOptions: [
      {
        type: ACTION_TYPES.go,
        url: "https://www.jewishvoiceforpeace.org/take-action/",
        buttonLabel: "HR3103 Source",
        info: false,
      },
    ],
  },

  {
    icon: "💸",
    label: "Boycott McDonald's, Starbucks, and Disney",
    id: 1,
    spheres: [MCDONALDS, CONSUMER, STARBUCKS, DISNEY],
    reason: "These companies support Israel and/or actively punish employees who support Palestinians.",
    description: "While there are many companies that support Israel's apartheid, we are focusing on the boycott on these three for maximum impact.",
    actionOptions: [],
  },
];
