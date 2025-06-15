export const projects = [
  {
    id: 1,
    title: "Zen Mind",
    shortDescription: "Meditation app designed using Figma",
    mainImage: "/assets/images/projects/zenmind/main.png", // Updated path
    gallery: [
      {
        type: "image",
        src: "/assets/images/projects/zenmind/gallery1.png", // Updated path
        alt: "Splash and onboarding screens"
      },
      {
        type: "image",
        src: "/assets/images/projects/zenmind/gallery2.png", // Updated path
        alt: "Profile and meditation screen"
      },
      {
        type: "image",
        src: "/assets/images/projects/zenmind/gallery3.png", // Updated path
        alt: "Profile and meditation screen"
      },
      {
        type: "image",
        src: "/assets/images/projects/zenmind/gallery4.png", // Updated path
        alt: "Profile and meditation screen"
      },
      {
        type: "image",
        src: "/assets/images/projects/zenmind/gallery5.png", // Updated path
        alt: "Profile and meditation screen"
      },
      {
        type: "image",
        src: "/assets/images/projects/zenmind/gallery6.png", // Updated path
        alt: "Profile and meditation screen"
      },
      {
        type: "image",
        src: "/assets/images/projects/zenmind/gallery7.png", // Updated path
        alt: "Profile and meditation screen"
      },
      {
        type: "video",
        src: "/assets/images/projects/zenmind/demo.mp4", // Updated path
        alt: "App walkthrough"
      }
    ],
    tags: ["Figma", "UI/UX Design"],
    fullDescription:
      "A meditation mobile app concept designed using Figma. Includes meditation music, timers, instructor advice feature, splash screen, onboarding flow, login screen, and animated user interface.",
    features: [
      "Meditation timer and music",
      "Instructor advice section",
      "Animated splash and login screens",
      "Onboarding tutorial"
    ],
    techStack: ["Figma"],
    liveUrl: "",
    githubUrl: ""
  },
  {
    id: 2,
    title: "Gym Management System",
    shortDescription: "Custom risk calculation with workout planning",
    mainImage: "/assets/images/projects/gym/main.jpg", // Updated path
    gallery: [
      {
        type: "image",
        src: "/assets/images/projects/gym/gallery1.jpeg", // Updated path
        alt: "Risk calculator interface"
      },
      {
        type: "image",
        src: "/assets/images/projects/gym/gallery2.jpeg", // Updated path
        alt: "Workout plan dashboard"
      },
      {
        type: "image",
        src: "/assets/images/projects/gym/gallery3.jpeg", // Updated path
        alt: "Workout plan dashboard"
      },
      {
        type: "image",
        src: "/assets/images/projects/gym/gallery4.jpeg", // Updated path
        alt: "Workout plan dashboard"
      },
      {
        type: "image",
        src: "/assets/images/projects/gym/gallery5.jpeg", // Updated path
        alt: "Workout plan dashboard"
      },
      {
        type: "image",
        src: "/assets/images/projects/gym/gallery6.jpeg", // Updated path
        alt: "Workout plan dashboard"
      },
    ],
    tags: ["MERN Stack", "Vite", "Custom Risk Algorithm"],
    fullDescription:
      "A Gym Management System built using MERN Stack and Vite. It includes a custom risk calculation function to assess user fitness levels and generate personalized workout plans. Also supports user login, progress tracking, and workout customization.",
    features: [
      "Custom risk assessment algorithm",
      "User registration and login",
      "Workout plan creation",
      "Progress tracking dashboard",
      "Responsive UI with Vite"
    ],
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "Vite", "JWT"],
    liveUrl: "",
    githubUrl: "https://github.com/MohamedShahmi/Gym_Management_System" 
  },
  {
    id: 3,
    title: "Dry FoodMart Management System",
    shortDescription: "Staff and inventory management system using MERN Stack",
    mainImage: "/assets/images/projects/foodmart/main.png", // Updated path
    gallery: [
      {
        type: "image",
        src: "/assets/images/projects/foodmart/gallery1.png", // Updated path
        alt: "Staff management dashboard"
      },
      {
        type: "image",
        src: "/assets/images/projects/foodmart/gallery2.png", // Updated path
        alt: "Search and reporting feature"
      },
      {
        type: "image",
        src: "/assets/images/projects/foodmart/gallery3.png", // Updated path
        alt: "Search and reporting feature"
      },
      {
        type: "image",
        src: "/assets/images/projects/foodmart/gallery4.png", // Updated path
        alt: "staff management"
      },
      {
        type: "image",
        src: "/assets/images/projects/foodmart/gallery5.png", // Updated path
        alt: "update staff"
      },
      {
        type: "video",
        src: "/assets/images/projects/foodmart/demo.mp4", // Updated path
        alt: "Demo walkthrough"
      }
    ],
    tags: ["MERN Stack", "CRUD", "Reports"],
    fullDescription:
      "A Dry FoodMart Management System built using the MERN stack. It includes a staff management system with CRUD operations, search functionality, and report generation capabilities.",
    features: [
      "CRUD operations for staff management",
      "Search bar for quick lookup",
      "Report generation",
      "Modern and responsive UI"
    ],
    techStack: ["MongoDB", "Express.js", "React", "Node.js"],
    liveUrl: "",
    githubUrl: "https://github.com/IT22117946/food-mart-manegment-system" 
  },
  {
    id: 4,
    title: "Save The Rocket / Tic Tac TОЕ",
    shortDescription: "Android game developed using Kotlin",
    mainImage: "/assets/images/projects/savetherocket/main.jpg", // Updated path
    gallery: [
      {
        type: "image",
        src: "/assets/images/projects/savetherocket/gallery1.png", // Updated path
        alt: "Gameplay screen"
      },
      {
        type: "image",
        src: "/assets/images/projects/savetherocket/gallery2.png", // Updated path
        alt: "Scoreboard screen"
      },
      {
        type: "image",
        src: "/assets/images/projects/savetherocket/gallery3.png", // Updated path
        alt: "Scoreboard screen"
      },
      {
        type: "image",
        src: "/assets/images/projects/savetherocket/gallery4.png", // Updated path
        alt: "Scoreboard screen"
      },
    ],
    tags: ["Kotlin", "Android Game", "Score Tracking"],
    fullDescription:
      "An Android gaming app where players move in three lanes to avoid asteroids falling towards a rocket. The score updates live, and the highest score is shown after each game.",
    features: [
      "Three-lane movement control",
      "Live score tracking",
      "High score display",
      "Simple and engaging gameplay"
    ],
    techStack: ["Kotlin", "Android Studio"],
    liveUrl: "",
    githubUrl: ""
  },
  {
    id: 5,
    title: "Beecy Fashion",
    shortDescription: "Clothing shopping app built with Kotlin",
    mainImage: "/assets/images/projects/beecyfashion/main.jpg", // Updated path
    gallery: [
      {
        type: "image",
        src: "/assets/images/projects/beecyfashion/gallery1.png", // Updated path
        alt: "Login screen"
      },
      {
        type: "image",
        src: "/assets/images/projects/beecyfashion/gallery2.png", // Updated path
        alt: "Product gallery and cart"
      },
      {
        type: "image",
        src: "/assets/images/projects/beecyfashion/gallery3.png", // Updated path
        alt: "Product gallery and cart"
      },
      {
        type: "image",
        src: "/assets/images/projects/beecyfashion/gallery4.png", // Updated path
        alt: "Product gallery and cart"
      },
    ],
    tags: ["Kotlin", "Android Studio", "E-commerce"],
    fullDescription:
      "An Android clothing shopping app developed using Kotlin and Android Studio. Features include a login screen, product galleries, add-to-cart function, and profile management.",
    features: [
      "User login system",
      "Product gallery display",
      "Add to cart functionality",
      "User profile page"
    ],
    techStack: ["Kotlin", "Android Studio"],
    liveUrl: "",
    githubUrl: ""
  },
  {
    id: 6,
    title: "Skill Sharing Platform",
    shortDescription: "Social media style platform for learning and sharing skills",
    mainImage: "/assets/images/projects/skillsharing/main.jpg", // Updated path
    gallery: [
      {
        type: "image",
        src: "/assets/images/projects/skillsharing/gallery1.png", // Updated path
        alt: "Post feed interface"
      },
      {
        type: "image",
        src: "/assets/images/projects/skillsharing/gallery2.png", // Updated path
        alt: "Chat and notification view"
      },
      {
        type: "image",
        src: "/assets/images/projects/skillsharing/gallery3.png", // Updated path
        alt: "Chat and notification view"
      },
      {
        type: "image",
        src: "/assets/images/projects/skillsharing/gallery4.png", // Updated path
        alt: "Chat and notification view"
      },
      {
        type: "image",
        src: "/assets/images/projects/skillsharing/gallery5.png", // Updated path
        alt: "Chat and notification view"
      },
      {
        type: "image",
        src: "/assets/images/projects/skillsharing/gallery6.png", // Updated path
        alt: "Chat and notification view"
      },
      {
        type: "image",
        src: "/assets/images/projects/skillsharing/gallery7.png", // Updated path
        alt: "Chat and notification view"
      },
      {
        type: "image",
        src: "/assets/images/projects/skillsharing/gallery8.png", // Updated path
        alt: "Chat and notification view"
      },
      {
        type: "image",
        src: "/assets/images/projects/skillsharing/gallery9.png", // Updated path
        alt: "Chat and notification view"
      },
      {
        type: "image",
        src: "/assets/images/projects/skillsharing/gallery10.png", // Updated path
        alt: "Chat and notification view"
      },
    ],
    tags: ["Spring Boot", "Java", "Social Media Clone"],
    fullDescription:
      "A Spring Boot Java-based skill-sharing platform similar to Instagram or Facebook. Allows users to post videos, follow others, chat in real-time, receive notifications, and track their learning progress.",
    features: [
      "User authentication and profiles",
      "Post creation with video/image upload",
      "Like, comment, share functions",
      "Real-time chat between users",
      "Learning progress tracking"
    ],
    techStack: ["Spring Boot", "Java", "MySQL", "WebSocket", "Thymeleaf"],
    liveUrl: "",
    githubUrl: "https://github.com/RavinduNishan/Skill-Sharing-Platform" 
  },
  {
    id: 7,
    title: "Online Examination Management System",
    shortDescription: "Web application for managing online exams",
    mainImage: "/assets/images/projects/exam/main.png", // Updated path
    gallery: [
      {
        type: "image",
        src: "/assets/images/projects/exam/gallery1.png", // Updated path
        alt: "Login screen"
      },
      {
        type: "image",
        src: "/assets/images/projects/exam/gallery2.png", // Updated path
        alt: "Exam dashboard"
      },
      {
        type: "image",
        src: "/assets/images/projects/exam/gallery3.png", // Updated path
        alt: "Contact us"
      },
      {
        type: "image",
        src: "/assets/images/projects/exam/gallery4.png", // Updated path
        alt: "Modules"
      },
      {
        type: "video",
        src: "/assets/images/projects/exam/demo.mp4", // Updated path
        alt: "Demo walkthrough"
      }
    ],
    tags: ["HTML", "CSS", "JavaScript", "Java"],
    fullDescription:
      "An online examination management system built using HTML, CSS, JavaScript, and Java. This group project allowed students to register, log in, and take exams online.",
    features: [
      "Student login and registration system",
      "Exam module pages",
      "User authentication",
      "Responsive frontend design"
    ],
    techStack: ["HTML", "CSS", "JavaScript", "Java"],
    liveUrl: "",
    githubUrl: ""
  },
  {
    id: 8,
    title: "MyNotes",
    shortDescription: "Note-taking Android app",
    mainImage: "/assets/images/projects/mynotes/main.jpg", // Updated path
    tags: ["Kotlin", "Note App"],
    fullDescription:
      "A note-writing Android app that allows users to create, update, and delete notes. Developed using Kotlin and Android Studio.",
    features: [
      "Create new notes",
      "Update existing notes",
      "Delete unwanted notes",
      "Simple and clean UI"
    ],
    techStack: ["Kotlin", "Android Studio"],
    liveUrl: "",
    githubUrl: "https://github.com/MethusalaKPerera/Mynotes" 
  },
  {
    id: 9,
    title: "Tourism & Travel Management System",
    shortDescription: "Group project to manage tourism-related operations",
    mainImage: "/assets/images/projects/tourism/main.jpg", // Updated path
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    fullDescription:
      "A web-based system developed during my first-year second semester at SLIIT to streamline tourism and travel management. This group project improved workflow efficiency by 25% and was delivered on time.",
    features: [
      "User-friendly interface",
      "Travel package management",
      "Booking system",
      "Team collaboration and planning",
      "Efficient data handling"
    ],
    techStack: ["HTML", "CSS", "JavaScript", "PHP"],
    liveUrl: "",
    githubUrl: ""
  }
];