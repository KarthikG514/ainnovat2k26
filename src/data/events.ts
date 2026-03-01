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
      { name: 'Abdul Rashik', mobile: '6381503021' },
      { name: 'Pavithran', mobile: '6381551697' },
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
      { name: 'Abishek', mobile: '9487078661' },
      { name: 'Varun Prasath', mobile: '7397275861' },
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
      { name: 'Varun Kishore', mobile: '8220696177' },
      { name: 'Venkatesh', mobile: '7416041634' },
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
      { name: 'Aadhi', mobile: '6381254305' },
      { name: 'Shyam', mobile: '9629332994' },
    ],
    formLink: 'https://docs.google.com/forms/d/e/1FAIpQLScsiZcQ65ZyIxYLQvN4vv9XDyidcrN-FNI4HyrLAYBaZNHIcg/viewform?usp=dialog'
  },
  {
    id: 'true-detective',
    name: 'Fun Factory',
    description: 'Fun Team Games – These exciting activities test creativity, coordination, and teamwork. In one game, players act out clues without speaking while others guess the answer. In the other, teams use only pens to balance and transfer a ball into a cup without touching it by hand.',
    type: 'non-technical',
    image: '/images/events/true-detective.jpg',
    details: 'Fun Factory is a collection of exciting team-based games that test creativity, coordination, and teamwork. In one game, players act out clues without speaking while others guess the answer. In the other, teams use only pens to balance and transfer a ball into a cup without touching it by hand. Come join the fun and prove your team has what it takes!',
    guidelines: [
      'Clues will be provided at each stage of the event',
      'Use of mobile phones is strictly prohibited during the event',
      'Teams must solve all puzzles within the time limit',
      'Certificate will be provided upon completion',
    ],
    coordinators: [
      { name: 'MothishWaran', mobile: '9003868879' },
      { name: 'Saswanth', mobile: '6383035750' },
    ],
    formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeCnfl5v_EFL6KM5ucbNjtbZY0DrpD_QppsK_HwyCb79Z0e_g/viewform?usp=publish-editor'
  },
  {
    id: 'ipl-auction',
    name: 'BEAT BATTLE: Mind Edition',
    description: 'Participants will take part in a fun and interactive game that combines memory and music skills. First, an image will be shown for a limited time, and after it disappears, participants must answer questions based on what they remember. Next, a song will be played and paused at certain lines where players must fill in the missing lyrics correctly. Finally, only the background music (BGM) of a movie or song will be played, and participants must identify the correct movie or song name.',
    type: 'non-technical',
    image: '/images/events/beat-battle.png',
    details: 'BEAT BATTLE: Mind Edition is an exciting and interactive game that puts your memory, music knowledge, and quick thinking to the test! The event consists of three thrilling rounds. In Round 1 (Picture Memory), an image will be displayed for a limited time — once it disappears, you must answer questions based on what you remember. In Round 2 (Lyrics Challenge), a song will be played and paused at key moments — you must fill in the missing lyrics correctly. In Round 3 (BGM Guess), only the background music of a movie or song will be played, and you must identify the correct movie or song name. Get ready to test your senses and compete for the win!',
    guidelines: [
      'Listen carefully and pay close attention during each round',
      'Use of mobile phones is strictly prohibited during the event',
      'Answers must be submitted within the given time limit',
      'Certificate will be provided upon completion',
    ],
    coordinators: [
      { name: 'MothishWaran', mobile: '9003868879' },
      { name: 'Saswanth', mobile: '6383035750' },
    ],
    formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeCnfl5v_EFL6KM5ucbNjtbZY0DrpD_QppsK_HwyCb79Z0e_g/viewform?usp=publish-editor'
  },
];