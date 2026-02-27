export interface Event {
  id: string;
  name: string;
  description: string;
  type: 'technical' | 'non-technical';
  image: string;
  details: string;
  guidelines: string[];
  coordinators: {
    name: string;
    mobile: string;
  }[];
  formLink: string;
}

export const events: Event[] = [
  {
    id: 'paper-presentation',
    name: 'Idea Pitching',
    description: 'Present your research papers on emerging technologies and innovative solutions to real-world problems.',
    type: 'technical',
    image: '/images/events/paper-presentation.jpg',
    details: 'Innovata provides a platform for students and researchers to present their innovative ideas and research work. Participants will have the opportunity to showcase their findings, receive feedback from experts, and engage in meaningful discussions with peers.',
    guidelines: [
      'Maximum of 4 authors per paper & Minimum of 1',
      'Include engaging and fun professional games Between Sessions with Exciting Gifts.',
      'Presentation time: 5 to 7 minutes',
      'Certificate will be provided upon completion',
    ],
    coordinators: [
      { name: 'ABISHEK', mobile: '9487078661' },
      { name: 'VARUN PRASATH', mobile: '7397275861' },
    ],
    formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfcI_84geQWX1MLDZlljheNCZk2V_aYGi-Y5VUWad-kEX45aw/viewform?usp=dialog'
  },
  {
    id: 'idea-pitching',
    name: 'Brain Buster',
    description: 'Pitch your new startup ideas and innovative solutions. Brainstorm, collaborate, and compete for the best concept.',
    type: 'technical',
    image: '/images/events/ideathon.jpg',
    details: 'Idea Pitching is the ultimate startup idea pitching competition. Present your innovative business ideas and tech solutions to a panel of judges. Think big, think bold — and turn your vision into a winning concept.',
    guidelines: [
      'Each team must present a unique startup idea',
      'Presentation should include problem statement, solution, and business model',
      'Pitch time: 5 to 7 minutes followed by Q&A',
      'Certificate will be provided upon completion',
    ],
    coordinators: [
      { name: 'ABDUL RASHIK', mobile: '6381503021' },
      { name: 'PAVITRAN', mobile: '6381551697' },
    ],
    formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeGmmi01Vu_gX7gVY6sk5qsDmEI4FghODd8XA-5TcwjPSrOjg/viewform?usp=publish-editor'
  },
  {
    id: 'project-expo',
    name: 'Tech Forge',
    description: 'Showcase your innovative projects and prototypes to a wide audience including industry professionals.',
    type: 'technical',
    image: '/images/events/project-expo.jpg',
    details: 'Project Expo is a grand exhibition where students and innovators showcase their projects and prototypes. Present your working models, software solutions, and hardware innovations to a panel of judges and industry professionals.',
    guidelines: [
      'Project must be original and innovative',
      'Teams must prepare a poster and working demo',
      'Presentation time: 10 minutes per team',
      'Certificate will be provided upon completion',
    ],
    coordinators: [
      { name: 'VARUN KISHORE', mobile: '8220696177' },
      { name: 'VENKATESH', mobile: '7416041634' },
    ],
    formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdCQUL4YwF621V31tJqUSqNE4oUuWAeus-5XxziET8XrWxg3g/viewform?usp=dialog'
  },
  {
    id: 'workshop',
    name: 'Workshop',
    description: 'Participate in hands-on workshops conducted by industry experts on cutting-edge technologies.',
    type: 'technical',
    image: '/images/events/workshop.jpg',
    details: 'Engage in intensive hands-on workshop sessions led by industry professionals. Learn about the latest AI tools, frameworks, and methodologies through practical exercises and real-world case studies.',
    guidelines: [
      'Bring your own laptop with required software pre-installed',
      'Prior knowledge of basic programming is recommended',
      'Materials and resources will be provided during the session',
      'Certificate will be provided upon completion',
    ],
    coordinators: [
      { name: 'AADHI', mobile: '6381254305' },
      { name: 'SHYAM', mobile: '9629332994' },
    ],
    formLink: 'https://docs.google.com/forms/d/e/1FAIpQLScsiZcQ65ZyIxYLQvN4vv9XDyidcrN-FNI4HyrLAYBaZNHIcg/viewform?usp=dialog'
  },
  {
    id: 'true-detective',
    name: 'True Detective',
    description: 'Unleash your inner detective in this thrilling mystery-solving event! Use logic, clues, and investigative skills to crack the case.',
    type: 'non-technical',
    image: '/images/events/true-detective.jpg',
    details: 'Put your analytical and problem-solving skills to the ultimate test! True Detective is a thrilling mystery-solving challenge where participants must use logic, clues, and creative thinking to crack the case before time runs out.',
    guidelines: [
      'Clues will be provided at each stage of the event',
      'Use of mobile phones is strictly prohibited during the event',
      'Teams must solve all puzzles within the time limit',
      'Certificate will be provided upon completion',
    ],
    coordinators: [
      { name: 'MOTHISH WARAN', mobile: '9003868879' },
      { name: 'SASWANTH', mobile: '6383035750' },
    ],
    formLink: '#'
  },
  {
    id: 'ipl-auction',
    name: 'IPL Auction',
    description: 'Strategy meets cricket! Build your dream team in this exciting auction simulation with a virtual budget.',
    type: 'non-technical',
    image: '/images/events/ipl-auction.jpg',
    details: 'Experience the thrill of an IPL Auction! Strategize, bid, and build your dream cricket team with a virtual budget. Test your cricket knowledge, negotiation skills, and team-building strategy in this exciting simulation.',
    guidelines: [
      'Each team will receive a fixed virtual budget',
      'Teams must build a balanced squad within the budget',
      'Bidding rules will be explained before the event',
      'Certificate will be provided upon completion',
    ],
    coordinators: [
      { name: 'MOTHISH WARAN', mobile: '9003868879' },
      { name: 'SASWANTH', mobile: '6383035750' },
    ],
    formLink: '#'
  },
];