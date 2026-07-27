import { type Translation } from "./types";

export const fr: Translation = {
  hero: {
    titleLine1: "Salut,",
    titleLine2: "moi c'est",
    subtitle:
      "Quelque part sur Knowhere, je suis ingénieur logiciel et je construis des trucs pour alimenter le microverse de Rick.",
    cta: "Parlons-en !",
  },
  skills: {
    title: "Compétences",
    description: "et bien plus encore...",
    singular: "Année d'expérience",
    plural: "Années d'expérience",
  },
  project: {
    title: "Projets",
    items: [
      {
        title: "Les mains dans le cambouis",
        description:
          "Rétro-ingénierie du protocole Photon pour créer un parseur de paquets ultra-rapide.",
        technologies: ["Go", "Photon"],
        link: "https://github.com/AutoDruid/photon-parser",
        image: "photon-protocol",
        date: new Date("2026-05-15"),
      },
      {
        title: "Bot Albion par reconnaissance IA",
        description:
          "J'adore ce jeu, mais farmer ca prend du temps, avec de l'IA c'est plus le fun.",
        technologies: ["Python", "OpenCV", "PyAutoGUI"],
        link: "https://github.com/your-username/albion-bot",
        image: "albion",
        date: new Date("2024-03-15"),
      },
      {
        title: "Bittorrent en Go",
        description:
          "C'est parti pour un clone du protocole BitTorrent en Go.",
        technologies: ["Go", "Bittorrent", "Fast"],
        link: "https://github.com/Michelprogram/bittorrent-client",
        image: "bittorrent",
        date: new Date("2024-08-15"),
      },
      {
        title: "Speeder typer",
        description: "Un jeu de dactylo pour taper plus vite que Primeagen.",
        technologies: ["MongoDB", "Go", "Websocket", "Vue"],
        link: "https://github.com/Michelprogram/SpeederTyper",
        image: "speedertyper",
        date: new Date("2024-07-15"),
      },
      {
        title: "Clean your twitter",
        description:
          "Oui, des milliers de tweets sont créés chaque jour tu t'es déjà demandé comment nettoyer ton Twitter ?",
        technologies: ["Nuxt", "Go", "Nuxt", "Typescript"],
        link: "https://github.com/Michelprogram/clean-your-twitter",
        image: "clean-your-twitter",
        date: new Date("2024-05-15"),
      },
      {
        title: "21 apps de chat",
        description:
          "L'un des classiques en side project, mais celui-ci introduit du HTMX en plus de l'apprentissage des bases des websockets !",
        technologies: ["HTMX", "Go", "Fiber", "Websocket"],
        link: "https://github.com/Michelprogram/chat-app-htmx",
        image: "chat-app-htmx",
        date: new Date("2024-04-01"),
      },
      {
        title: "Scanner Magic: The Gathering",
        description:
          "Inventoriser ses cartes, quelle corvée autant le faire avec de l'OCR.",
        technologies: ["OCR", "Heroku", "PWA", "Notion API"],
        link: "https://github.com/Michelprogram/magic-scanner",
        image: "scanner-magic-the-gathering",
        date: new Date("2023-10-01"),
      },
      {
        title: "Essence pas chère",
        description:
          "Toi aussi tu veux être un vrai rat et trouver la station-service la moins chère près de chez toi.",
        technologies: ["Python", "Flask", "Geolocation"],
        link: "https://github.com/Michelprogram/essence",
        image: "essence",
        date: new Date("2022-04-01"),
      },
    ],
  },
  experience: {
    title: "Expériences",
    items: [
      {
        title: "Apprentissage ...",
        from: new Date("2016-01-01"),
        to: new Date("2019-01-01"),
        place: "Tours, France",
        icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Alien%20Monster.png",
        description:
          "Dès ma première année de lycée, j'ai mis un pied dans la programmation avec Python. Ça a tout de suite matché, et j'ai su que je voulais en apprendre toujours plus.",
      },
      {
        title: "Beaucoup plus intensif",
        from: new Date("2019-01-01"),
        to: new Date("2021-01-01"),
        place: "Tours, France",
        icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Fire.png",
        description:
          "Je ne me souviens plus vraiment pourquoi, mais j'ai décidé de m'attaquer à root-me.org. Un des premiers défis était de créer un serveur TCP, alors j'ai commencé à coder chez moi tout en apprenant les bases du C/C++ à la fac.",
      },
      {
        title: "Alternance EDF",
        from: new Date("2021-01-01"),
        to: new Date("2022-01-01"),
        place: "Nantes, France",
        icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png",
        description:
          "Il me fallait une entreprise pour mon alternance, et j'ai décroché une place chez EDF. J'ai construit des apps web avec Symfony et codé des plugins C# pour AutoCAD. C'est aussi à cette époque que j'ai vraiment commencé à plonger dans le dev pour le fun (side projects).",
      },
      {
        title: "Dernière étape",
        from: new Date("2022-01-01"),
        to: new Date("2024-01-01"),
        place: "Rennes, France",
        icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Beer%20Mug.png",
        description:
          "Toujours content de travailler chez EDF tout en enchaînant mon master ! Pendant cette période, j'ai basculé vers l'automatisation, avec Jenkins et Ansible, pour monter une archi DevOps complète.",
      },
      {
        title: "Direction le Canada",
        from: new Date("2022-01-01"),
        to: new Date("2024-01-01"),
        place: "Montréal, Canada",
        icon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Flag%20Canada.png",
        description:
          "Ensuite j'ai traversé l'océan pour commencer un nouveau diplôme en info à l'ÉTS. En parallèle, j'ai décroché une super opportunité dans une jeune startup, Caido. Ça m'a plongé dans un domaine que je connaissais peu le networking et j'ai fini par me spécialiser en frontend avec des techs géniales.",
      },
    ],
  },
  next: {
    title: "Et ensuite",
    description:
      "J'ai toujours adoré le frisson de déménager dans une nouvelle ville pour les études, et maintenant l'idée d'aller travailler au Canada m'excite particulièrement. Ce départ ne sera pas seulement l'occasion de découvrir une nouvelle culture et d'explorer un nouveau pays — c'est aussi une formidable opportunité de progresser en anglais.",
    animationDescription: "Je prépare la future animation...",
  },
  hobbies: {
    title: "Loisirs",
  },
  articles: {
    title: "Articles",
  },
};
