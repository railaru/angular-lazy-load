const items = [
  {
    id: 0,
    type: 'Course',
    title: 'Article title 1',
    img: 'https://images.unsplash.com/photo-1573332039392-b66bd2bfa5bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 1,
    type: 'Course',
    title: 'Article title 2',
    img: 'https://images.unsplash.com/photo-1572295727871-7638149ea3d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 2,
    type: 'Course',
    title: 'Article title 3',
    img: 'https://images.unsplash.com/photo-1571993192866-202f70b7ec7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 3,
    type: 'Course',
    title: 'Article title 4',
    img: 'https://images.unsplash.com/photo-1571993003903-9be9d952e152?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 4,
    type: 'Course',
    title: 'Article title 5',
    img: 'https://images.unsplash.com/photo-1571993142342-896fa7348f3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 5,
    type: 'Course',
    title: 'Article title 6',
    img: 'https://images.unsplash.com/photo-1570579804561-11e23e16fc6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 6,
    type: 'Course',
    title: 'Article title 7',
    img: 'https://images.unsplash.com/photo-1571993142095-4bbab35f480d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 7,
    type: 'Course',
    title: 'Article title 8',
    img: 'https://images.unsplash.com/photo-1571215442481-279564cbf8d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 8,
    type: 'Course',
    title: 'Article title 9',
    img: 'https://images.unsplash.com/photo-1568238278459-741c2b084f52?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 9,
    type: 'Course',
    title: 'Article title 10',
    img: 'https://images.unsplash.com/photo-1568543934159-79b6f804e1aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 10,
    type: 'Course',
    title: 'Article title 11',
    img: 'https://images.unsplash.com/photo-1572099284501-1ac5686f53f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 11,
    type: 'Course',
    title: 'Article title 12',
    img: 'https://images.unsplash.com/photo-1431512284068-4c4002298068?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=416&h=312&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 12,
    type: 'Course',
    title: 'Article title 13',
    img: 'https://images.unsplash.com/photo-1573332039392-b66bd2bfa5bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 13,
    type: 'Course',
    title: 'Article title 14',
    img: 'https://images.unsplash.com/photo-1572295727871-7638149ea3d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 14,
    type: 'Course',
    title: 'Article title 15',
    img: 'https://images.unsplash.com/photo-1571993192866-202f70b7ec7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 15,
    type: 'Course',
    title: 'Article title 16',
    img: 'https://images.unsplash.com/photo-1571993003903-9be9d952e152?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 16,
    type: 'Course',
    title: 'Article title 17',
    img: 'https://images.unsplash.com/photo-1571993142342-896fa7348f3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 17,
    type: 'Course',
    title: 'Article title 18',
    img: 'https://images.unsplash.com/photo-1570579804561-11e23e16fc6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 18,
    type: 'Course',
    title: 'Article title 19',
    img: 'https://images.unsplash.com/photo-1571993142095-4bbab35f480d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 19,
    type: 'Course',
    title: 'Article title 20',
    img: 'https://images.unsplash.com/photo-1571215442481-279564cbf8d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 20,
    type: 'Course',
    title: 'Article title 21',
    img: 'https://images.unsplash.com/photo-1568238278459-741c2b084f52?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 21,
    type: 'Course',
    title: 'Article title 22',
    img: 'https://images.unsplash.com/photo-1568543934159-79b6f804e1aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 22,
    type: 'Course',
    title: 'Article title 23',
    img: 'https://images.unsplash.com/photo-1572099284501-1ac5686f53f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 23,
    type: 'Course',
    title: 'Article title 24',
    img: 'https://images.unsplash.com/photo-1431512284068-4c4002298068?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=416&h=312&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 24,
    type: 'Course',
    title: 'Article title 25',
    img: 'https://images.unsplash.com/photo-1573332039392-b66bd2bfa5bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 25,
    type: 'Course',
    title: 'Article title 26',
    img: 'https://images.unsplash.com/photo-1572295727871-7638149ea3d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 26,
    type: 'Course',
    title: 'Article title 27',
    img: 'https://images.unsplash.com/photo-1571993192866-202f70b7ec7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 27,
    type: 'Course',
    title: 'Article title 28',
    img: 'https://images.unsplash.com/photo-1571993003903-9be9d952e152?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 28,
    type: 'Course',
    title: 'Article title 29',
    img: 'https://images.unsplash.com/photo-1571993142342-896fa7348f3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 29,
    type: 'Course',
    title: 'Article title 30',
    img: 'https://images.unsplash.com/photo-1570579804561-11e23e16fc6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 30,
    type: 'Course',
    title: 'Article title 31',
    img: 'https://images.unsplash.com/photo-1571993142095-4bbab35f480d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 31,
    type: 'Course',
    title: 'Article title 32',
    img: 'https://images.unsplash.com/photo-1571215442481-279564cbf8d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 32,
    type: 'Course',
    title: 'Article title 33',
    img: 'https://images.unsplash.com/photo-1568238278459-741c2b084f52?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 33,
    type: 'Course',
    title: 'Article title 34',
    img: 'https://images.unsplash.com/photo-1568543934159-79b6f804e1aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 34,
    type: 'Course',
    title: 'Article title 35',
    img: 'https://images.unsplash.com/photo-1572099284501-1ac5686f53f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 35,
    type: 'Course',
    title: 'Article title 36',
    img: 'https://images.unsplash.com/photo-1431512284068-4c4002298068?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=416&h=312&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 36,
    type: 'Course',
    title: 'Article title 37',
    img: 'https://images.unsplash.com/photo-1573332039392-b66bd2bfa5bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 37,
    type: 'Course',
    title: 'Article title 38',
    img: 'https://images.unsplash.com/photo-1572295727871-7638149ea3d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 38,
    type: 'Course',
    title: 'Article title 39',
    img: 'https://images.unsplash.com/photo-1571993192866-202f70b7ec7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 39,
    type: 'Course',
    title: 'Article title 40',
    img: 'https://images.unsplash.com/photo-1571993003903-9be9d952e152?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 40,
    type: 'Course',
    title: 'Article title 41',
    img: 'https://images.unsplash.com/photo-1571993142342-896fa7348f3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 41,
    type: 'Course',
    title: 'Article title 42',
    img: 'https://images.unsplash.com/photo-1570579804561-11e23e16fc6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 42,
    type: 'Course',
    title: 'Article title 43',
    img: 'https://images.unsplash.com/photo-1571993142095-4bbab35f480d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 43,
    type: 'Course',
    title: 'Article title 44',
    img: 'https://images.unsplash.com/photo-1571215442481-279564cbf8d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 44,
    type: 'Course',
    title: 'Article title 45',
    img: 'https://images.unsplash.com/photo-1568238278459-741c2b084f52?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 45,
    type: 'Course',
    title: 'Article title 46',
    img: 'https://images.unsplash.com/photo-1568543934159-79b6f804e1aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 46,
    type: 'Course',
    title: 'Article title 47',
    img: 'https://images.unsplash.com/photo-1572099284501-1ac5686f53f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 47,
    type: 'Course',
    title: 'Article title 48',
    img: 'https://images.unsplash.com/photo-1431512284068-4c4002298068?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=416&h=312&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 48,
    type: 'Course',
    title: 'Article title 49',
    img: 'https://images.unsplash.com/photo-1573332039392-b66bd2bfa5bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 49,
    type: 'Course',
    title: 'Article title 50',
    img: 'https://images.unsplash.com/photo-1572295727871-7638149ea3d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 50,
    type: 'Course',
    title: 'Article title 51',
    img: 'https://images.unsplash.com/photo-1571993192866-202f70b7ec7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 51,
    type: 'Course',
    title: 'Article title 52',
    img: 'https://images.unsplash.com/photo-1571993003903-9be9d952e152?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 52,
    type: 'Course',
    title: 'Article title 53',
    img: 'https://images.unsplash.com/photo-1571993142342-896fa7348f3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 53,
    type: 'Course',
    title: 'Article title 54',
    img: 'https://images.unsplash.com/photo-1570579804561-11e23e16fc6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 54,
    type: 'Course',
    title: 'Article title 55',
    img: 'https://images.unsplash.com/photo-1571993142095-4bbab35f480d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 55,
    type: 'Course',
    title: 'Article title 56',
    img: 'https://images.unsplash.com/photo-1571215442481-279564cbf8d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 56,
    type: 'Course',
    title: 'Article title 57',
    img: 'https://images.unsplash.com/photo-1568238278459-741c2b084f52?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 57,
    type: 'Course',
    title: 'Article title 58',
    img: 'https://images.unsplash.com/photo-1568543934159-79b6f804e1aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 58,
    type: 'Course',
    title: 'Article title 59',
    img: 'https://images.unsplash.com/photo-1572099284501-1ac5686f53f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 59,
    type: 'Course',
    title: 'Article title 60',
    img: 'https://images.unsplash.com/photo-1431512284068-4c4002298068?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=416&h=312&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 60,
    type: 'Course',
    title: 'Article title 61',
    img: 'https://images.unsplash.com/photo-1573332039392-b66bd2bfa5bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 61,
    type: 'Course',
    title: 'Article title 62',
    img: 'https://images.unsplash.com/photo-1572295727871-7638149ea3d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 62,
    type: 'Course',
    title: 'Article title 63',
    img: 'https://images.unsplash.com/photo-1571993192866-202f70b7ec7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 63,
    type: 'Course',
    title: 'Article title 64',
    img: 'https://images.unsplash.com/photo-1571993003903-9be9d952e152?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 64,
    type: 'Course',
    title: 'Article title 65',
    img: 'https://images.unsplash.com/photo-1571993142342-896fa7348f3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 65,
    type: 'Course',
    title: 'Article title 66',
    img: 'https://images.unsplash.com/photo-1570579804561-11e23e16fc6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 66,
    type: 'Course',
    title: 'Article title 67',
    img: 'https://images.unsplash.com/photo-1571993142095-4bbab35f480d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 67,
    type: 'Course',
    title: 'Article title 68',
    img: 'https://images.unsplash.com/photo-1571215442481-279564cbf8d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 68,
    type: 'Course',
    title: 'Article title 69',
    img: 'https://images.unsplash.com/photo-1568238278459-741c2b084f52?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 69,
    type: 'Course',
    title: 'Article title 70',
    img: 'https://images.unsplash.com/photo-1568543934159-79b6f804e1aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 70,
    type: 'Course',
    title: 'Article title 71',
    img: 'https://images.unsplash.com/photo-1572099284501-1ac5686f53f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
  {
    id: 71,
    type: 'Course',
    title: 'Article title 72',
    img: 'https://images.unsplash.com/photo-1431512284068-4c4002298068?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=416&h=312&q=60',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: [
      'photography', 'travel', 'winter', 'hiking'
    ]
  },
];

module.exports = items;
