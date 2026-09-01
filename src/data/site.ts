export const site = {
  logo: { text: "Vale", accent: "Freight", mark: "VF" },
  fonts: {
    display: "Big Shoulders Stencil Display",
    body: "Saira",
    mono: "IBM Plex Mono",
  },
  colors: {
    steel: "#8a93a0",
    navy: "#0b1c33",
    signal: "#f5c518",
    plate: "#d5d8de",
    ink: "#0a0e14",
    foam: "#e8edf4",
  },
  meta: {
    title: "Vale Freight — Bass Strait and Tasman short-sea",
    description:
      "Ro-ro, containers and project cargo between Webb Dock, Devonport, Burnie, Bell Bay, and a weekly Tasman lane to Auckland and Lyttelton. Slot requests by mail.",
  },
  contact: {
    email: "sales@little.cloud",
    phone: "+61 3 5550 2210",
    phoneHref: "tel:+61355502210",
    address: "Shed 4, Webb Dock East, Port Melbourne VIC 3207",
    hours: "Sailing windows, not office hours. Ops desk 05:00–22:00 AEST.",
  },
  sections: {
    hero: true,
    board: true,
    lanes: true,
    cargo: true,
    terminals: true,
    contact: true,
  },
  nav: [
    { href: "#board", label: "Board", section: "board" as const },
    { href: "#lanes", label: "Lanes", section: "lanes" as const },
    { href: "#cargo", label: "Cargo", section: "cargo" as const },
    { href: "#terminals", label: "Terminals", section: "terminals" as const },
    { href: "#contact", label: "Request a slot", section: "contact" as const, cta: true },
  ],
  hero: {
    kicker: "Short-sea · Bass Strait · Tasman",
    titleHtml: "Steel across <em>the Strait.</em>",
    lede: "Vale Freight runs ro-ro, boxes and project cargo between Webb Dock and the Tasmanian north coast, with a weekly Tasman lane to Auckland and Lyttelton. The board is the product. Mail us a slot.",
    primaryCta: { label: "Request a slot", href: "mailto:sales@little.cloud?subject=Vale%20Freight%20slot%20request" },
    secondaryCta: { label: "See this week's board", href: "#board" },
    facts: [
      { k: "Home berth", v: "Webb Dock East" },
      { k: "Strait crossing", v: "9–11 hours" },
      { k: "Tasman lane", v: "Weekly" },
    ],
  },
  board: {
    kicker: "This week's board",
    title: "Sailings as posted",
    lede: "ETDs are gate times, not marketing. Weather gate is Bass Strait — if it holds, the ship holds.",
    updated: "01 Sep 06:40 AEST",
    gate: [
      { k: "Bass Strait", v: "Open", pulse: true },
      { k: "Wind NW", v: "18–24 kt" },
      { k: "Swell W", v: "2.4 m / 9 s" },
      { k: "Webb Dock", v: "Berth 4 clear" },
    ],
    sailings: [
      { code: "VF-14", vessel: "MV Tamar Vale", lane: "Webb Dock → Devonport", etd: "Tue 18:00", eta: "Wed 05:20", status: "on" as const, statusLabel: "On window" },
      { code: "VF-15", vessel: "MV Burnie Plate", lane: "Webb Dock → Burnie", etd: "Wed 21:30", eta: "Thu 08:10", status: "on" as const, statusLabel: "On window" },
      { code: "VF-09", vessel: "MV Bell Bay", lane: "Bell Bay → Webb Dock", etd: "Thu 06:00", eta: "Thu 16:40", status: "hold" as const, statusLabel: "Weather hold" },
      { code: "VF-22", vessel: "MV Tasman Gate", lane: "Webb Dock → Auckland", etd: "Fri 14:00", eta: "Mon 09:00", status: "on" as const, statusLabel: "On window" },
      { code: "VF-23", vessel: "MV Lyttelton Reach", lane: "Webb Dock → Lyttelton", etd: "Sat 09:00", eta: "Tue 16:00", status: "open" as const, statusLabel: "Slots open" },
    ],
  },
  lanes: {
    kicker: "Lanes",
    title: "Strait by night. Tasman by the week.",
    lede: "Two products. The short-sea roster is the spine. The Tasman lane is a weekly for cargo that will not wait for a conference sailing.",
    items: [
      {
        code: "LANE · BS",
        name: "Bass Strait",
        img: "/lane.jpg",
        alt: "Cargo ship in a strait, cropped to the waterline",
        desc: "Webb Dock to Devonport, Burnie and Bell Bay. Ro-ro decks and boxes on the same ship. Night sailings so the yard works the day.",
        specs: [
          { k: "Crossing", v: "9–11 h" },
          { k: "Cadence", v: "Nightly + extras" },
          { k: "Cut-off", v: "T-4 hours" },
        ],
      },
      {
        code: "LANE · TM",
        name: "Tasman",
        img: "/hold.jpg",
        alt: "Container ship hold and stacks, cropped",
        desc: "Weekly Melbourne–Auckland–Lyttelton. Project and boxes that need a named vessel, not a slot on someone else's loop.",
        specs: [
          { k: "Sea time", v: "3–4 days" },
          { k: "Cadence", v: "Weekly" },
          { k: "Cut-off", v: "T-18 hours" },
        ],
      },
    ],
  },
  cargo: {
    kicker: "Cargo",
    title: "What the decks will take",
    lede: "We do not take air freight, and we do not pretend to be a conference liner. Three specs, named.",
    items: [
      {
        tag: "Ro-ro",
        name: "Wheeled",
        desc: "Trailers, machines, agricultural plant. Lashing plans issued with the slot confirmation.",
        specs: [
          { k: "Max axle", v: "12 t" },
          { k: "Ramp", v: "Stern, 200 t" },
        ],
      },
      {
        tag: "Boxes",
        name: "Containers",
        desc: "20 / 40 / HC. Reefer plugs on the Tasman lane. No transhipment stories — the box stays on our ship.",
        specs: [
          { k: "Plugs", v: "48 reefer" },
          { k: "Stack", v: "On-deck + hold" },
        ],
      },
      {
        tag: "Project",
        name: "Out of gauge",
        desc: "Breakbulk and project lifts by prior survey. If it will not sit on a trailer, mail the drawings first.",
        specs: [
          { k: "Survey", v: "Required" },
          { k: "Gear", v: "Ship's + shore" },
        ],
      },
    ],
    stripLabel: "Webb Dock East · crane window 06:00–20:00",
  },
  terminals: {
    kicker: "Terminals",
    title: "Four names on the board",
    lede: "We work these berths. If your cargo is elsewhere, we will still take the mail — the trucking is yours.",
    items: [
      {
        name: "Webb Dock East",
        port: "Port Melbourne · home",
        specs: ["Shed 4 ops desk", "Ro-ro + boxes", "Cut-off T-4 / T-18"],
        note: "Night gates for Strait sailings. Day gates for Tasman load.",
      },
      {
        name: "Devonport",
        port: "Mersey · TAS",
        specs: ["Ro-ro preferred", "Agri trailers", "Pilot on request"],
        note: "The short hop. Most wheeled cargo lands here before dawn.",
      },
      {
        name: "Burnie",
        port: "Emu Bay · TAS",
        specs: ["Boxes + breakbulk", "Paper / mineral", "Shore crane"],
        note: "North-west industry. Project cargo by survey.",
      },
      {
        name: "Bell Bay",
        port: "Tamar · TAS",
        specs: ["Heavy lifts", "Industrial", "Draft-limited"],
        note: "The Tamar berth. Weather hold hits here first when the Strait closes.",
      },
    ],
    foot: "Auckland and Lyttelton are called on the Tasman lane only — not a Bass Strait extra.",
  },
  footer: {
    tag: "Short-sea operator. Bass Strait and the Tasman. A Little-Devs template.",
    credit: "MIT. Photography via Pixabay: hero LoboStudioHamburg; lane Bergadder; yard Niklas9416; hold dendoktoor.",
  },
} as const;

export type Site = typeof site;
