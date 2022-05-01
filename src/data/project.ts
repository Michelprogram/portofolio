import IProject from "@/interfaces/IProjects";

const projects: Array<IProject> = [
  {
    id: 0,
    name: "Golang",
    short_description: "API",
    image:
      "https://cdn.dribbble.com/userupload/2624050/file/original-59266f4dea1c2aa43f2064cc0f3b165a.png",
    github: "https://github.com/Michelprogram/go_api",
  },
  {
    id: 1,
    name: "My Skate",
    short_description: "Web scraping",
    image:
      "https://images.unsplash.com/photo-1605116188625-8522bf02d10f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    github: "https://github.com/Michelprogram/my-skate",
  },
  {
    id: 2,
    name: "Twitter post",
    short_description: "Bot",
    image:
      "https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    github: "",
  },
  {
    id: 3,
    name: "Guess state",
    short_description: "Play with SVG",
    image:
      "https://images.unsplash.com/photo-1467912407355-245f30185020?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    github: "",
  },
  {
    id: 4,
    name: "Crypto",
    short_description: "Web scraping",
    image:
      "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1246&q=80",
    github: "",
  },
  {
    id: 5,
    name: "Golang",
    short_description: "API",
    image:
      "https://cdn.dribbble.com/userupload/2624050/file/original-59266f4dea1c2aa43f2064cc0f3b165a.png",
    github: "https://github.com/Michelprogram/go_api",
  },
  {
    id: 6,
    name: "My Skate",
    short_description: "Web scraping",
    image:
      "https://images.unsplash.com/photo-1547447134-cd3f5c716030?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    github: "https://github.com/Michelprogram/my-skate",
  },
  {
    id: 7,
    name: "Twitter post",
    short_description: "Bot",
    image:
      "https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    github: "",
  },
  {
    id: 8,
    name: "Guess state",
    short_description: "Play with SVG",
    image:
      "https://images.unsplash.com/photo-1467912407355-245f30185020?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    github: "",
  },
  {
    id: 9,
    name: "Crypto",
    short_description: "Web scraping",
    image:
      "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1246&q=80",
    github: "",
  },
];

export default projects.sort((a, b) => 0.5 - Math.random());
