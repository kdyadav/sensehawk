 getSteps = () => 6000 + Math.random()*5000;
 
 var  drones = [
    {
      uid:909090,
      steps: Math.random() * 10000,
      origin: [77.527454, 12.965466],
      pilot: "Aditya Yadav",
      owner: "ABC Groups BLR",
      mission_details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam rerum molestiae quam esse similique tempore dolores impedit animi harum nobis aut beatae temporibus modi vel, illum quia iure quas quos.",
      steps:getSteps()
    },
    {
      uid:808080,
      steps: Math.random() * 10000,
      origin: [77.527454, 12.965466],
      pilot: "Ashish Misra",
      owner: "ABC Groups BLR",
      mission_details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam rerum molestiae quam esse similique tempore dolores impedit animi harum nobis aut beatae temporibus modi vel, illum quia iure quas quos.",
      steps:getSteps()
    },
    {
      uid:707070,
      steps: Math.random() * 10000,
      origin: [77.528908, 12.964439],
      pilot: "Rahul Gupta",
      owner: "ABC Groups BLR",
      mission_details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam rerum molestiae quam esse similique tempore dolores impedit animi harum nobis aut beatae temporibus modi vel, illum quia iure quas quos.",
      steps:getSteps()
    },
    {
      uid:606060,
      steps: Math.random() * 10000,
      origin: [77.528908, 12.964439],
      pilot: "Surendra Yadav",
      owner: "ABC Groups BLR",
      mission_details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam rerum molestiae quam esse similique tempore dolores impedit animi harum nobis aut beatae temporibus modi vel, illum quia iure quas quos.",
      steps:getSteps()
    },
    {
      uid:505050,
      steps: Math.random() * 10000,
      origin: [77.526268, 12.964552],
      pilot: "Prince Sahni",
      owner: "ABC Groups BLR",
      mission_details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam rerum molestiae quam esse similique tempore dolores impedit animi harum nobis aut beatae temporibus modi vel, illum quia iure quas quos.",
      steps:getSteps()
    },
    {
      uid:404040,
      steps: Math.random() * 10000,
      origin: [77.526268, 12.964552],
      pilot: "Rajkumar Muniya",
      owner: "ABC Groups BLR",
      mission_details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam rerum molestiae quam esse similique tempore dolores impedit animi harum nobis aut beatae temporibus modi vel, illum quia iure quas quos.",
      steps:getSteps()

    },
    {
      uid:303030,
      steps: Math.random() * 10000,
      origin: [77.528333, 12.964814],
      pilot: "Vishal Sharma",
      owner: "ABC Groups BLR",
      mission_details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam rerum molestiae quam esse similique tempore dolores impedit animi harum nobis aut beatae temporibus modi vel, illum quia iure quas quos.",
      steps:getSteps()

    },
    {
      uid:202020,
      steps: Math.random() * 10000,
      origin: [77.529146, 12.965672],
      pilot: "Vishal Sharma",
      owner: "ABC Groups BLR",
      mission_details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam rerum molestiae quam esse similique tempore dolores impedit animi harum nobis aut beatae temporibus modi vel, illum quia iure quas quos.",
      steps:getSteps()
    },
    {
      uid:101010,
      steps: Math.random() * 10000,
      origin: [77.529146, 12.965672],
      pilot: "Vishal Sharma",
      owner: "ABC Groups BLR",
      mission_details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam rerum molestiae quam esse similique tempore dolores impedit animi harum nobis aut beatae temporibus modi vel, illum quia iure quas quos.",
      steps:getSteps()
    }
  ];

  exports.drones = drones;