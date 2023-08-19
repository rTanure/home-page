const data = {
  certificates: [
    {
      title: "Discover - conectar",
      school: "Rocket Seat",
      time: 3,
      instructor: "Mayk Brito",
      conclusion: 2022,
      certificate: "/certificates/discover-conectar-certificate.pdf"
    },
    {
      title: "Discover - fundamentar",
      school: "Rocket Seat",
      time: 28,
      instructor: "Mayk Brito",
      conclusion: 2022,
      certificate: "/certificates/discover-fundamentar-certificate.pdf"
    },
  ],
  techs: [
    // {
    //   name: 'Python',
    //   id: 'react',
    //   description: 'Python é uma linguagem de programação de alto nível, conhecida por sua sintaxe clara e legível. Com sua vasta biblioteca padrão e comunidade ativa, é uma escolha popular para desenvolvimento de software, análise de dados e automação de tarefas.'
    // },
    // {
    //   name: 'Git',
    //   id: 'react',
    //   description: 'Git é um sistema de controle de versão distribuído amplamente utilizado para gerenciar o histórico de alterações em projetos de software. Ele permite que múltiplos desenvolvedores trabalhem simultaneamente em um projeto, facilitando a colaboração e o rastreamento das alterações.'
    // },
    // {
    //   name: 'TypeScript',
    //   id: 'react',
    //   description: 'TypeScript é uma linguagem de programação desenvolvida pela Microsoft que se baseia no JavaScript, mas adiciona recursos de tipagem estática. Com o TypeScript, é possível escrever um código mais robusto e escalável, detectando erros de digitação e fornecendo recursos avançados de autocompletar.'
    // },
    // {
    //   name: 'JavaScript',
    //   id: 'react',
    //   description: 'JavaScript é uma linguagem de programação interpretada que permite adicionar interatividade e dinamismo a páginas da web. É amplamente utilizado para desenvolver funcionalidades como animações, validação de formulários e interações com o usuário.'
    // },
    // {
    //   name: 'CSS 3',
    //   id: 'react',
    //   description: 'CSS (Cascading Style Sheets) é uma linguagem de estilo utilizada para definir a aparência e o layout de elementos em páginas da web. Com o CSS, é possível controlar cores, fontes, espaçamentos, alinhamentos e outros aspectos visuais.'
    // },
    // {
    //   name: 'HTML 5',
    //   id: 'react',
    //   description: 'HTML (HyperText Markup Language) é uma linguagem de marcação utilizada para criar a estrutura e o conteúdo de páginas da web. Através de tags e elementos, o HTML permite definir a organização e o formato do texto, inserir imagens, links, vídeos e outros elementos interativos, permitindo assim a criação de páginas web visualmente atrativas e funcionais.'
    // },
    {
      name: 'React.js',
      id: 'react',
      icon_class: 'fa-brands fa-react',
      description: 'ReactJS é uma biblioteca JavaScript popular para construção de interfaces de usuário interativas e reativas. Desenvolvida pelo Facebook, ela permite criar componentes reutilizáveis e eficientes, facilitando o desenvolvimento de aplicativos web escaláveis.'
    },
    {
      name: 'Node.js',
      id: 'node',
      icon_class: 'fa-brands fa-node-js',
      description: 'Node.js é um ambiente de execução de código JavaScript do lado do servidor, que permite aos desenvolvedores criar aplicações web escaláveis e de alto desempenho. Ele utiliza a engine V8 do Google Chrome e é conhecido por sua natureza assíncrona e orientada a eventos, sendo ideal para aplicações em tempo real e APIs.'
    },
    {
      name: 'Java',
      id: 'java',
      icon_class: 'fa-brands fa-java',
      description: 'Java é uma linguagem de programação popular, conhecida por sua portabilidade e robustez. Ela é usada amplamente no desenvolvimento de aplicativos, desde aplicativos móveis a sistemas empresariais.'
    },
    {
      name: 'SQL',
      id: 'sql',
      icon_class: 'fa-solid fa-database',
      description: 'SQL (Structured Query Language) é uma linguagem de programação utilizada para gerenciar e manipular bancos de dados relacionais. Com o SQL, é possível realizar consultas, inserções, atualizações e exclusões de dados de forma eficiente e organizada, fornecendo uma base sólida para o armazenamento e recuperação de informações em sistemas de gerenciamento de banco de dados.'
    },
  ],
  social: {
    instagram_url: "https://www.instagram.com/richardy.tanure/",
    linkedin_url: "https://www.linkedin.com/in/richardy-tanure-342a26207/",
    github_url: "https://github.com/rTanure",
    email: "richardy.tanure@hotmail.com"
  },
  page: {
    repository_url: "https://github.com/rTanure/home-page"
  },
  projects: [
    {
      title: "Portfólio",
      description: "Página pessoal criada utilizando React e publicada na vercel para compartilhar projetos, certificados e diversas outras informações sobre mim.",
      rep_url: "https://github.com/rTanure/home-page",
      app_url: "https://richardytanure.com",  
      techs: [
        "HTML",
        "CSS",
        "ReactJS",
      ],
      status: "FINALIZADO",
      thumb: "homePage.png",
    },
    {
      title: "Grade UFOP",
      description: "Aplicação em React que possui uma base de dados de alguns cursos da UFOP e retorna a grade curricular interativa que apresenta as relações entre as disciplinas.",
      rep_url: "https://github.com/rTanure/gradeUfop",
      app_url: "https://gradeufop.richardytanure.com/",  
      techs: [
        "HTML",
        "CSS",
        "React"
      ],
      status: "FINALIZADO",
      thumb: "gradeUfop.png",
    },
  ]
}

export default data