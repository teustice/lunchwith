const users = [
  {
    id: 1,
    name: 'Dave the Dev1',
    skills: ['AngularJS', 'Ruby', 'React'],
    profileImage: "https://daverupert.com/images/about/daverupert.jpg",
    bio: "Hey I'm Dave1, the coolest developer of them all!",
    company: 'Planet Argon',
    jobTitle: 'React Native Developer',
    experience: 4,
    lunchRadius: 1,
    phoneNumber: '800115',
    availability: [
      {time: "11", day: "F"},
      {time: "11", day: "M"},
      {time: "11", day: "W"}
    ]
  },
  {
    id: 2,
    name: 'Dave the Dev2',
    skills: ['AngularJS', 'Ruby', 'React'],
    profileImage: "https://www.gv.com/img/team-large/dave-munichiello.jpg",
    bio: "Hey I'm Dave2, the coolest developer of them all!",
    company: 'EyeCue Lab',
    jobTitle: 'React Native Developer',
    experience: 4,
    lunchRadius: 1,
    phoneNumber:' 800114',
    availability: [
      {time: "12", day: "F"},
      {time: "1", day: "M"},
      {time: "1", day: "W"}
    ]
  },
  {
    name: 'Dave the Dev3',
    id: 3,
    skills: ['AngularJS', 'Ruby', 'React'],
    profileImage: "https://vignette3.wikia.nocookie.net/lostpedia/images/e/e0/Dave-caps078.jpg/revision/latest?cb=20100328163129",
    bio: "Hey I'm Dave3, the coolest developer of them all!",
    company: 'Sq1',
    jobTitle: 'React Native Developer',
    experience: 4,
    lunchRadius: 1,
    phoneNumber:' 800113',
    availability: [
      {time: "10", day: "F"},
      {time: "12", day: "M"},
      {time: "1", day: "W"}
    ]
  },
  {
    name: 'Dave the Dev4',
    id: 4,
    skills: ['AngularJS', 'Ruby', 'React'],
    profileImage: "https://pbs.twimg.com/profile_images/436261038451748864/42Ca9oqD.jpeg",
    bio: "Hey I'm Dave4, the coolest developer of them all!",
    company: 'New Relic',
    jobTitle: 'React Native Developer',
    experience: 4,
    lunchRadius: 1,
    phoneNumber:' 800112',
    availability: [
      {time: "11", day: "F"},
      {time: "11", day: "M"},
      {time: "11", day: "W"}
    ]
  },
  {
    name: 'Dave the Dev5',
    id: 5,
    skills: ['AngularJS', 'Ruby', 'React'],
    profileImage: "https://pbs.twimg.com/profile_images/838157239567409152/0XerLccI.jpg",
    bio: "Hey I'm Dave5, the coolest developer of them all!",
    company: 'New Relic',
    jobTitle: 'React Native Developer',
    experience: 4,
    lunchRadius: 1,
    phoneNumber:' 800111',
    availability: [
      {time: "10", day: "F"},
      {time: "12", day: "M"},
      {time: "1", day: "W"}
    ]
  },
  {
    name: 'Dave the Dev6',
    id: 6,
    skills: ['AngularJS', 'Ruby', 'React'],
    profileImage: "https://pbs.twimg.com/profile_images/838157239567409152/0XerLccI.jpg",
    bio: "Hey I'm Dave6, the coolest developer of them all!",
    company: 'EyeCue Lab',
    jobTitle: 'React Native Developer',
    experience: 4,
    lunchRadius: 1,
    phoneNumber: '8001210',
    availability: [
      {time: "10", day: "F"},
      {time: "12", day: "M"},
      {time: "1", day: "W"}
    ]
  },
  {
    name: 'Dave the Dev7',
    id: 7,
    skills: ['AngularJS', 'Ruby', 'React'],
    profileImage: "https://s3-us-west-1.amazonaws.com/codeforamerica-cms1/profile-photos/dave-guarino.jpg",
    bio: "Hey I'm Dave7, the coolest developer of them all!",
    company: 'Planet Argon',
    jobTitle: 'React Native Developer',
    experience: 4,
    lunchRadius: 2,
    phoneNumber: '8001239',
    availability: [
      {time: "10", day: "F"},
      {time: "12", day: "M"},
      {time: "1", day: "W"}
    ]
  },
  {
    name: 'Dave the Dev8',
    id: 8,
    skills: ['AngularJS', 'Ruby', 'React'],
    profileImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Dave_Mustaine_2011_%28cropped%29.jpg/220px-Dave_Mustaine_2011_%28cropped%29.jpg",
    bio: "Hey I'm Dave8, the coolest developer of them all!",
    company: 'Planet Argon',
    jobTitle: 'React Native Developer',
    experience: 4,
    lunchRadius: 2,
    phoneNumber: '8001238',
    availability: [
      {time: "10", day: "F"},
      {time: "12", day: "M"},
      {time: "1", day: "W"}
    ]
  },
  {
    name: 'Dave the Dev9',
    id: 9,
    skills: ['AngularJS', 'Ruby', 'React'],
    profileImage:"https://yt3.ggpht.com/-dBAyPP2BX9E/AAAAAAAAAAI/AAAAAAAAAAA/kJwZUNcPu-s/s900-c-k-no-mo-rj-c0xffffff/photo.jpg",
    bio: "Hey I'm Dave9, the coolest developer of them all!",
    company: 'New Relic',
    jobTitle: 'React Native Developer',
    experience: 4,
    lunchRadius: 1,
    phoneNumber: '8001237',
    availability: [
      {time: "10", day: "F"},
      {time: "12", day: "M"},
      {time: "1", day: "W"}
    ]
  },
  {
    name: 'Dave the Dev10',
    id: 10,
    skills: ['AngularJS', 'Ruby', 'React'],
    profileImage:"https://yt3.ggpht.com/-dBAyPP2BX9E/AAAAAAAAAAI/AAAAAAAAAAA/kJwZUNcPu-s/s900-c-k-no-mo-rj-c0xffffff/photo.jpg",
    bio: "Hey I'm Dave10, the coolest developer of them all!",
    company: 'New Relic',
    jobTitle: 'React Native Developer',
    experience: 4,
    lunchRadius: 0.5,
    phoneNumber: '8001236',
    availability: [
      {time: "10", day: "F"},
      {time: "12", day: "M"},
      {time: "1", day: "W"}
    ]
  },
  {
    name: 'Dave the Dev11',
    id: 11,
    skills: ['AngularJS', 'Ruby', 'React'],
    profileImage:"https://yt3.ggpht.com/-dBAyPP2BX9E/AAAAAAAAAAI/AAAAAAAAAAA/kJwZUNcPu-s/s900-c-k-no-mo-rj-c0xffffff/photo.jpg",
    bio: "Hey I'm Dave11, the coolest developer of them all!",
    company: 'New Relic',
    jobTitle: 'React Native Developer',
    experience: 4,
    lunchRadius: 1,
    phoneNumber: '8001235',
    availability: [
      {time: "10", day: "F"},
      {time: "12", day: "M"},
      {time: "1", day: "W"}
    ]
  },
  {
    name: 'Dave the Dev12',
    id: 12,
    skills: ['AngularJS', 'Ruby', 'React'],
    profileImage:"https://yt3.ggpht.com/-dBAyPP2BX9E/AAAAAAAAAAI/AAAAAAAAAAA/kJwZUNcPu-s/s900-c-k-no-mo-rj-c0xffffff/photo.jpg",
    bio: "Hey I'm Dave12, the coolest developer of them all!",
    company: 'New Relic',
    jobTitle: 'React Native Developer',
    experience: 4,
    lunchRadius: 3,
    phoneNumber: '8001234',
    availability: [
      {time: "10", day: "F"},
      {time: "12", day: "M"},
      {time: "1", day: "W"}
    ]
  },
  {
    name: 'Dave the Dev13',
    id: 13,
    skills: ['AngularJS', 'Ruby', 'React'],
    profileImage:"https://yt3.ggpht.com/-dBAyPP2BX9E/AAAAAAAAAAI/AAAAAAAAAAA/kJwZUNcPu-s/s900-c-k-no-mo-rj-c0xffffff/photo.jpg",
    bio: "Hey I'm Dave13, the coolest developer of them all!",
    company: 'New Relic',
    jobTitle: 'React Native Developer',
    experience: 4,
    lunchRadius: 2,
    phoneNumber: '8001233',
    availability: [
      {time: "10", day: "F"},
      {time: "12", day: "M"},
      {time: "1", day: "W"}
    ]
  },
  {
    name: 'Dave the Dev14',
    id: 14,
    skills: ['AngularJS', 'Ruby', 'React'],
    profileImage:"https://yt3.ggpht.com/-dBAyPP2BX9E/AAAAAAAAAAI/AAAAAAAAAAA/kJwZUNcPu-s/s900-c-k-no-mo-rj-c0xffffff/photo.jpg",
    bio: "Hey I'm Dave14, the coolest developer of them all!",
    company: 'New Relic',
    jobTitle: 'React Native Developer',
    experience: 4,
    lunchRadius: 0.5,
    phoneNumber: '8001232',
    availability: [
      {time: "10", day: "F"},
      {time: "12", day: "M"},
      {time: "1", day: "W"}
    ]
  },
  {
    name: 'Dave the Dev15',
    id: 15,
    skills: ['AngularJS', 'Ruby', 'React'],
    profileImage:"https://yt3.ggpht.com/-dBAyPP2BX9E/AAAAAAAAAAI/AAAAAAAAAAA/kJwZUNcPu-s/s900-c-k-no-mo-rj-c0xffffff/photo.jpg",
    bio: "Hey I'm Dave15, the coolest developer of them all!",
    company: 'New Relic',
    jobTitle: 'React Native Developer',
    experience: 4,
    lunchRadius: 1,
    phoneNumber: '8001231',
    availability: [
      {time: "10", day: "F"},
      {time: "12", day: "M"},
      {time: "1", day: "W"}
    ]
  },
  {
    name: 'Admin',
    id: 16,
    skills: ['AngularJS', 'Ruby', 'React'],
    profileImage:"https://yt3.ggpht.com/-dBAyPP2BX9E/AAAAAAAAAAI/AAAAAAAAAAA/kJwZUNcPu-s/s900-c-k-no-mo-rj-c0xffffff/photo.jpg",
    bio: "The chosen one!",
    company: 'nope',
    jobTitle: 'React Native Developer',
    experience: 4,
    lunchRadius: 1,
    phoneNumber: '1234567',
    availability: [
      {time: "10", day: "F"},
      {time: "12", day: "M"},
      {time: "1", day: "W"}
    ]
  }
]

export default users;
