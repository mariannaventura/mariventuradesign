export type ProcessoItem = {
  titulo: string;
  texto: string;
  figmaEmbed?: string;
  embedAspect?: string;
  galeria?: string[];
  post?: {
    images: string[];
    autor: string;
    legenda: string;
  };
  placeholderHint?: string;
};

export type Projeto = {
  id: number;
  titulo: string;
  cliente: string;
  tags: string[];
  capa?: string;
  capaContain?: boolean;
  contexto?: string;
  problema?: string;
  descoberta?: string;
  papel?: string;
  processo?: ProcessoItem[];
  solucao?: string;
  impacto?: string;
  reflexao?: string;
};

export const PROJETOS: Projeto[] = [
  {
    id: 1,
    titulo: "Festival Afrontosas",
    cliente: "Coletivo Afrontosas",
    tags: ["Branding", "Identidade Visual", "Digital"],
    capa: "/images/folha-de-rosto-festival-afrontosas.png",
    contexto:
      "O Festival Afrontosas nasceu como um braço cultural do Coletivo Afrontosas — um coletivo que existe para afrontar, questionar e ocupar espaços. O festival carrega esse mesmo espírito: é um evento cultural voltado para pessoas pretas, pardas e indígenas, realizado com financiamento público e pensado para celebrar e amplificar essas existências.",
    problema:
      "O ponto de partida era claro: a identidade do festival precisava conversar com o Coletivo Afrontosas, mas não se confundir com ele. O coletivo tem uma linguagem muito neutra — e o festival precisava de movimento, de calor, de presença. Além disso, havia uma intenção política importante: não usar branco como base em um evento pensado para pessoas pretas, pardas e indígenas. A identidade visual precisava carregar isso também — não como detalhe, mas como decisão consciente.",
    descoberta:
      "Para construir a identidade visual, me inspirei na própria logo do Coletivo Afrontosas, que já trazia formas geométricas. A partir daí, busquei outras referências geométricas e percebi que isso — somado a cores fortes — é um elemento muito presente na cultura visual negra. Juntei essa descoberta com um conceito de calor: escolhi vermelho, amarelo e laranja, e mantive o marrom e o bege que já vinham do coletivo. Depois, ajustei os tons para melhorar o contraste entre as peças.",
    papel:
      "Como a designer responsável pelo projeto, desenvolvi toda a identidade visual e o trabalho de comunicação nas redes sociais, do conceito às aplicações finais — consolidando meu papel como a única profissional de design e comunicação do coletivo, respondendo por estratégia, criação e execução do início ao fim.",
    processo: [
      {
        titulo: "Conceito e Paleta",
        texto:
          "O conceito partiu da geometria já presente no Coletivo Afrontosas e ganhou cor e temperatura. Escolhi amarelo, vermelho e laranja — cores quentes que remetem ao movimento e ao calor do estado, conhecido pelas praias — para dar ao festival uma identidade própria e vibrante. No lugar do branco, entrou bege, marrom e preto: uma paleta que representa e acolhe o público do evento.",
        placeholderHint:
          "Moodboard ou estudo de cor mostrando a paleta final (amarelo, vermelho, laranja, bege, marrom, preto), e/ou a logomarca do festival isolada — a peça que melhor resume essa decisão de conceito.",
      },
      {
        titulo: "Aplicações — do digital ao físico",
        texto:
          "As aplicações cobriram desde o digital até o físico: artes para redes sociais (feed, carrossel e stories), cartaz de divulgação, banner, backdrop, camiseta, credenciais, copo e sacola.",
        placeholderHint:
          "Fotos ou mockups das peças físicas (camiseta, copo, sacola, credencial) e do banner/backdrop montados no evento — isso mostra a identidade saindo da tela pro mundo real. Complementar com 2-3 prints das artes de feed/carrossel/stories.",
      },
      {
        titulo: "Planejamento de Redes Sociais",
        texto:
          "No trabalho de redes sociais, o planejamento foi dividido em três fases: de julho a novembro, o foco foi informar — apresentar o festival, seu propósito e como funcionaria; de janeiro a março, o conteúdo se voltou para inscrições, datas e divulgação de patrocinadores; em abril, a comunicação foi intensificada com informações práticas do dia a dia do evento, formas de chegar, venda de ingressos e souvenirs.",
        placeholderHint:
          "Um print representativo de cada fase (informar / inscrições / prático) — três imagens já contam a evolução da estratégia. Se tiver os números de alcance ou engajamento, esse também é um bom lugar para mencioná-los no texto.",
      },
    ],
    solucao:
      "O Festival Afrontosas chegou ao seu formato final com uma identidade visual coesa do digital ao físico: das artes de redes sociais até as peças físicas — camiseta, copo, sacola, credenciais, backdrop e banner — todas sustentadas pela mesma paleta e pelo mesmo conceito.",
    impacto:
      "Foram quase dez meses de comunicação ativa nas redes sociais — da primeira postagem em julho até o dia do evento em abril —, com planejamento editorial estruturado em três fases e produção contínua de conteúdo.",
    reflexao:
      "Para a próxima edição, quero fazer alguns ajustes visuais para dar mais movimento à identidade.",
  },
  {
    id: 2,
    titulo: "Rumo a Berlim",
    cliente: "Letycia Rangel",
    tags: ["Branding", "Identidade Visual"],
    capa: "/images/LetyciaRangel.jpg",
    contexto:
      "Lety Rangel é professora de pole dance em São Gonçalo. Depois de conquistar títulos em campeonatos nacionais e internacionais, ela foi selecionada para participar de um espetáculo em Berlim — uma oportunidade única, mas que exigia levantar recursos para viabilizar a viagem. Foi nesse contexto que ela me procurou.",
    problema:
      "Lety precisava se apresentar profissionalmente em três frentes ao mesmo tempo: atrair patrocínio de marcas do nicho (mídia kit), vender workshops presenciais (proposta comercial) e ter uma presença digital permanente que reunisse tudo o que ela já tinha construído (site). O desafio de design foi garantir consistência visual entre três formatos muito diferentes, mantendo a identidade de atleta e profissional em todos eles.",
    descoberta:
      "Juntei minha experiência de marketing em empresas anteriores com o que já tinha aprendido criando as propostas de patrocínio do Festival Afrontosas — outro projeto meu. Conversei com a Lety para entender o volume de contrapartidas que ela conseguiria entregar e em qual nicho de marca fazia sentido focar, e usei essas propostas do Afrontosas como base estrutural para o mídia kit e a proposta comercial.",
    papel:
      "Fui contratada para estruturar a linguagem e a comunicação da marca pessoal da Lety com marcas de pole dance e estúdios parceiros — da estratégia à criação e produção de cada peça: mídia kit, proposta comercial, site e material de divulgação da turma online.",
    processo: [
      {
        titulo: "Mídia Kit (viagem a Berlim)",
        texto:
          "O objetivo do mídia kit era conquistar patrocínio de marcas de pole dance dispostas a pagar por divulgação nas redes da Lety. Como contrapartida, estruturamos diferentes formatos de entrega — vídeos, stories e aulas gravadas — adaptados ao nicho de cada marca parceira.",
        galeria: Array.from(
          { length: 11 },
          (_, i) => `/images/midia-kit-letycia-rangel/${i + 1}.jpg`,
        ),
      },
      {
        titulo: "Proposta Comercial de Workshops",
        texto:
          "Para a venda de workshops, desenvolvi uma proposta comercial com precificação escalável, baseada no número de alunos por turma — os valores finais foram definidos pela própria Lety, e meu trabalho foi dar estrutura e clareza comercial à oferta.",
        galeria: Array.from(
          { length: 9 },
          (_, i) => `/images/workshop-letycia-rangel/${i + 1}.jpg`,
        ),
      },
      {
        titulo: "Site de Portfólio",
        texto:
          "O site é uma página única (one-page) com navegação por âncoras, permitindo que o visitante vá direto para a seção do seu interesse. Funciona como vitrine: reúne parcerias, trabalhos realizados e medalhas conquistadas, e termina com um formulário de contato para quem quiser contratá-la.",
        figmaEmbed:
          "https://embed.figma.com/site/IyzD4MqCJgOnaI7ofNGFLi/Untitled?node-id=0-3&embed-host=share",
      },
      {
        titulo: "Post — Turma Online",
        texto:
          "Como parte da mobilização para viabilizar a viagem a Berlim, criei um post para divulgar uma turma online da Lety, ampliando a captação de renda além do mídia kit e dos workshops presenciais.",
        post: {
          images: [
            "/images/post-aula-terca_01.png",
            "/images/post-aula-terca_02.png",
            "/images/post-aula-terca_03.png",
          ],
          autor: "Letycia Rangel",
          legenda:
            "E se dançar não fosse sobre acertar transições?\n\nExperimentações em Heels não tem sequência pronta, não tem regra, não tem um caminho certo a seguir. Tem uma mente criativa abrindo as portas e te mostrando como ela pensa — pra você pegar o que faz sentido, deixar o que não faz, e criar o seu próprio jeito de se mover.\n\nToda terça, às 20h, via Zoom. Aula ao vivo com gravação + grupo no WhatsApp pra gente trocar ideias e experimentos.\n\nBora terça? 👀",
        },
      },
    ],
    solucao:
      "O resultado foi um sistema de três materiais complementares — mídia kit, proposta comercial e site — com uma identidade visual e um tom de voz consistentes entre si, além de uma peça de divulgação para a turma online que ampliou a captação de renda.",
    impacto:
      "Com os materiais estruturados, Lety passou a ter uma comunicação profissional consistente para negociar com marcas, vender workshops e apresentar seu trabalho — peças que ela leva para toda nova conversa comercial, dentro e fora da competição.",
    reflexao:
      "Aprendi a ouvir mais a cliente. Numa próxima vez, eu produziria todos os entregáveis de uma só vez, em vez de conforme a necessidade fosse surgindo — isso teria garantido uma consistência visual ainda melhor entre as peças.",
  },
  {
    id: 3,
    titulo: "Catálogo Clima Rio 2025/2026",
    cliente: "Clima Rio",
    tags: ["Editorial", "Design Gráfico", "Impresso"],
    capa: "/images/catalogo-clima-rio-capa.jpg",
    contexto:
      "A Clima Rio é uma empresa de climatização com mais de 27 lojas espalhadas por todo o Brasil. A cada dois anos a empresa atualiza seu catálogo de produtos e serviços, distribuído em feiras do setor — no estande da empresa — e em lojas modelo selecionadas. Fiquei responsável pela edição, diagramação e fechamento de arquivo da 2ª edição do catálogo.",
    problema:
      "O catálogo é usado principalmente para divulgar os lançamentos e apostas dos fabricantes parceiros para aquele período, além dos próprios serviços da Clima Rio — refrigeração comercial e projetos de engenharia de refrigeração. O desafio não era só de diagramação: era reunir e organizar informação vinda de fontes diferentes — fabricantes e setores internos da empresa — dentro de um catálogo coeso, com todo mundo aprovando o conteúdo dentro do prazo de fechamento para a gráfica.",
    descoberta:
      "Comecei entrando em contato com os fabricantes parceiros para discutir quais linhas e produtos entrariam na edição daquele ano. Em seguida, tive reuniões com os responsáveis pelos setores de serviços, engenharia e energia solar da Clima Rio, para entender o que precisava ser abordado em cada página do catálogo.",
    papel:
      "Como Designer Gráfica Júnior na Clima Rio, fui responsável pela diagramação completa do catálogo em InDesign, pelo tratamento de imagens em Photoshop e pelo fechamento final do arquivo para impressão.",
    processo: [
      {
        titulo: "Produção, Aprovação e Anúncios",
        texto:
          "Com o conteúdo de cada fabricante e setor definido, organizei o catálogo em seções claras e diagramei as páginas, enviando cada uma para aprovação do fabricante ou setor responsável. Nessa etapa também alinhei com os fabricantes quais anúncios publicitários entrariam na edição.",
        galeria: [
          "/images/catalogo-clima-rio-02.png",
          "/images/catalogo-clima-rio-03.jpg",
          "/images/catalogo-clima-rio-04.jpg",
        ],
      },
    ],
    solucao:
      "O resultado foi a 2ª edição do catálogo Clima Rio, reunindo os lançamentos dos fabricantes parceiros e os serviços da empresa — refrigeração comercial e projetos de engenharia de refrigeração — com capa, contracapa e todas as páginas diagramadas, aprovadas e prontas para impressão.",
    impacto:
      "O catálogo passou a ser o material institucional usado pela Clima Rio em feiras do setor e em lojas modelo selecionadas entre as mais de 27 unidades da rede.",
    reflexao:
      "Foi meu primeiro projeto que exigiu coordenar tantas frentes ao mesmo tempo — fabricantes, setores internos e prazo de gráfica. Aprendi muito sobre disciplina, organização e microgerenciamento.",
  },
  {
    id: 4,
    titulo: "Clima Rio Qualifica",
    cliente: "Clima Rio",
    tags: ["Endomarketing", "Design Gráfico"],
    capa: "/images/clima-rio-qualifica-capa.png",
    contexto:
      "Clima Rio Qualifica é um programa interno de capacitação e desenvolvimento oferecido pela empresa aos próprios colaboradores das lojas e filiais. O projeto foi solicitado pelo RH, que pediu uma identidade com uma pegada futurista, capaz de conversar com o slogan do programa: \"Se conecte com o seu futuro\".",
    problema:
      "Precisava de um conceito visual que sustentasse esse tom futurista pedido pelo RH e que reforçasse, de forma visual, a ideia de conexão entre os colaboradores e a empresa — sem parecer uma peça fria ou genérica demais, já que o público era interno.",
    descoberta:
      "Pesquisei referências visuais de projetos de tecnologia e me inspirei em composições baseadas em linhas, que remetem à ideia de conexão — vários tipos de linha coexistindo e convergindo dentro de um mesmo projeto. Usei o círculo como elemento recorrente, representando a própria empresa se repetindo e conectando todas essas pessoas.",
    papel:
      "Fui responsável por desenvolver o conceito visual do programa, a partir do briefing do RH — as peças de desdobramento e aplicação final ficaram a cargo de outra parte do time.",
    processo: [
      {
        titulo: "Conceito Visual",
        texto:
          "A partir do slogan \"Se conecte com o seu futuro\", construí o conceito com uma paleta tech em azul e ciano, linhas que se conectam e convergem, e o círculo como elemento recorrente representando a empresa. As fotos de pessoas usadas nas peças são de banco de imagens, não de colaboradores reais.",
        galeria: ["/images/clima-rio-qualifica-panfleto.jpg"],
      },
    ],
    solucao:
      "O resultado foi o conceito visual do programa Clima Rio Qualifica: uma identidade futurista construída a partir de linhas que se conectam e convergem, com o círculo como símbolo recorrente da empresa conectando pessoas — base para as peças de divulgação interna do programa.",
    impacto:
      "O conceito serviu de base para as peças de divulgação interna do programa, distribuídas entre as filiais da Clima Rio.",
    reflexao:
      "Trabalhar com endomarketing me ensinou a pensar em comunicação para quem já conhece a marca por dentro — o desafio muda quando o público é a própria equipe.",
  },
  {
    id: 5,
    titulo: "Workshop Clima e Energia",
    cliente: "Clima Rio Solar",
    tags: ["Identidade Visual", "Evento", "Energia Solar", "Impresso"],
    capa: "/images/workshop-clima-energia-capa.png",
    contexto:
      "A Clima Rio Solar é a divisão de energia solar da Clima Rio. Em outubro de 2024, a empresa promoveu o Workshop Clima & Energia — Edição Vitória, um evento técnico voltado exclusivamente para integradores parceiros do setor de energia solar, com foco em capacitação técnica e troca de conhecimento.",
    problema:
      "Precisava criar uma identidade visual exclusiva para o evento, que tivesse conexão com a marca-mãe Clima Rio mas comunicasse os pilares específicos daquela divisão — tecnologia e inovação — com uma linguagem clara para um público técnico.",
    descoberta:
      "Para diferenciar visualmente do universo residencial e comercial da Clima Rio, usei tons de roxo e violeta com uma composição de elementos gráficos que remetem a circuitos e conexões, reforçando o tema de energia e tecnologia.",
    papel:
      "Como Assistente de Design Gráfico na Clima Rio, desenvolvi a identidade visual completa do evento — do conceito às aplicações — incluindo o material impresso e os brindes entregues aos participantes.",
    processo: [
      {
        titulo: "Identidade e Brindes do Evento",
        texto:
          "A identidade foi aplicada em todos os pontos de contato físicos do evento: totem de sinalização, caderno de anotações, caneta personalizada e cordão com crachá de acesso — realizado em 22 de outubro de 2024.",
        galeria: [
          "/images/workshop-clima-energia-totem.jpg",
          "/images/workshop-clima-energia-caderno.jpg",
          "/images/workshop-clima-energia-caneta.jpg",
          "/images/workshop-clima-energia-cracha.jpg",
        ],
      },
    ],
    solucao:
      "Um sistema visual coeso aplicado em todos os pontos de contato físicos do evento, do material de apoio até a credencial de acesso.",
    impacto:
      "O material acompanhou os integradores parceiros durante todo o Workshop Clima & Energia — Edição Vitória.",
    reflexao:
      "Foi meu primeiro projeto pensando peças físicas de brinde de evento do zero — aprendi a considerar limitações de produção, como área de gravação e cores disponíveis, desde o início do conceito.",
  },
  {
    id: 6,
    titulo: "Arraiá Clima Rio",
    cliente: "Clima Rio",
    tags: ["Campanha Comercial", "Identidade Visual"],
    capa: "/images/arraia-clima-rio-03.png",
    contexto:
      "Em junho de 2024, desenvolvi a campanha comercial sazonal da Clima Rio com o tema \"Arraiá Clima Rio\", criada especialmente para o período das festas juninas.",
    problema:
      "A Clima Rio tem uma fatia de clientes expressiva no Nordeste, região de forte tradição junina. O desafio era criar uma campanha que se conectasse de verdade com esse público e sua cultura, sem cair em estereótipo raso, e que funcionasse tanto no digital quanto no ponto de venda físico.",
    descoberta:
      "Pesquisei referências de folhetos de cordel — xilogravuras, tipografias rústicas, ornamentos regionais — e usei essa estética como base de toda a campanha. Como junho também é o mês do Dia dos Namorados, criei ainda uma variação, \"Arraiá do Amor na Clima Rio\", com abordagem mais romântica, ampliando o alcance da campanha logo no início do mês.",
    papel:
      "Como Assistente de Design Gráfico na Clima Rio, fui responsável pelo conceito e por toda a criação da campanha — banners do site, posts para redes sociais, tag de brinde e material de ponto de venda.",
    processo: [
      {
        titulo: "Conceito — Arraiá Clima Rio",
        texto:
          "A arte principal e a variação \"Arraiá do Amor\", ambas construídas sobre a mesma estética de cordel nordestino, aplicadas em posts e no banner de destaque do site.",
        galeria: [
          "/images/arraia-clima-rio-capa.png",
          "/images/arraia-clima-rio-02.png",
        ],
      },
      {
        titulo: "Aplicações — do digital ao físico",
        texto:
          "A campanha saiu da tela e chegou ao ponto de venda: display físico nas lojas e uma tag personalizada aplicada em brindes distribuídos durante o período.",
        galeria: [
          "/images/arraia-clima-rio-04.png",
          "/images/arraia-clima-rio-05.png",
        ],
      },
    ],
    solucao:
      "A campanha ganhou banner de destaque no site, posts patrocinados nas redes sociais, display físico nas lojas e tag personalizada em brindes distribuídos durante o período.",
    impacto:
      "A campanha rodou durante todo o mês de junho de 2024, com presença simultânea no e-commerce, nas redes sociais e no ponto de venda físico.",
    reflexao:
      "Aprendi como uma referência cultural bem pesquisada — no caso, o cordel nordestino — pode virar um sistema visual completo, sem se limitar a uma arte isolada.",
  },
  {
    id: 7,
    titulo: "Identidade Clima de Folia",
    cliente: "Clima Rio",
    tags: ["Campanha Comercial", "Identidade Visual"],
    capa: "/images/clima-de-folia-capa.png",
    contexto:
      "Em fevereiro de 2024, criei do zero a identidade \"Clima de Folia\" para o Carnaval da Clima Rio, partindo da cor institucional da marca e dando a ela um clima de Carnaval. A identidade funcionou como o envelopamento visual da empresa durante todo aquele período — fevereiro e março —, presente no site, nas lojas físicas e nas redes sociais.",
    problema:
      "O desafio era construir uma identidade sazonal do zero que ainda assim conversasse com a cor institucional da Clima Rio, e que fosse versátil o suficiente para vestir a empresa inteira durante o Carnaval — do digital ao físico — sem que cada aplicação parecesse desconectada das outras.",
    descoberta:
      "Fui buscar inspiração nas comunicações de blocos de Carnaval — cores, confetes, texturas — e trouxe esse repertório para dentro da paleta institucional da Clima Rio, criando uma identidade lúdica e colorida, com tipografia arredondada, que ainda assim conversava com a marca.",
    papel:
      "Desenvolvi o conceito e a identidade visual completa da campanha, usada pela empresa inteira durante o período. Parte das aplicações finais eu produzi diretamente; outras foram produzidas por outras pessoas do time, sempre a partir da identidade que criei.",
    processo: [
      {
        titulo: "Envelopamento da Campanha",
        texto:
          "A identidade vestiu a empresa inteira durante o Carnaval de 2024 — banner físico nas lojas, posts comerciais e institucionais nas redes sociais, e um comunicado interno sobre o horário especial de funcionamento durante a folia. Alguns exemplos de aplicação:",
        galeria: [
          "/images/clima-de-folia-02.png",
          "/images/clima-de-folia-03.png",
          "/images/clima-de-folia-banner.png",
          "/images/clima-de-folia-post-philco.jpg",
        ],
      },
    ],
    solucao:
      "O resultado foi uma identidade sazonal completa, que vestiu a Clima Rio durante o Carnaval de 2024 — do site às lojas físicas, passando pelas redes sociais e pela comunicação interna.",
    impacto:
      "A identidade \"Clima de Folia\" foi o envelopamento oficial da empresa durante todo o período de Carnaval, usada simultaneamente no site, nas lojas físicas e nas redes sociais.",
    reflexao:
      "Esse projeto aconteceu ainda bem no início da minha experiência profissional, com pouca bagagem prática até então. Hoje, olhando para trás, o que mais valorizo não é a estética em si, mas ter conseguido entregar uma identidade completa e coesa, usada pela empresa inteira durante todo o período — uma entrega que exigiu mais de mim do que eu imaginava dar conta na época.",
  },
  {
    id: 8,
    titulo: "Identidade do Dia da Mulher",
    cliente: "Clima Rio",
    tags: ["Identidade Visual", "Endomarketing"],
    capa: "/images/dia-mulher-clima-rio-capa.png",
    capaContain: true,
    contexto:
      "Em março de 2024, desenvolvi a identidade visual do Dia Internacional da Mulher para a Clima Rio, em parceria com fabricantes de ar-condicionado parceiros da empresa.",
    problema:
      "A data pedia uma identidade delicada e afetiva, mas que também sustentasse uma ação real de valorização das colaboradoras da empresa — não só uma peça decorativa de calendário comercial.",
    descoberta:
      "Construí uma paleta em tons de rosa e vinho, com fotografia e ilustração floral, e apliquei em e-mails marketing e em displays de mesa — incluindo a peça que anunciava o sorteio de dez climatizadores Philco entre as colaboradoras da empresa, em parceria com os fabricantes.",
    papel:
      "Como Assistente de Design Gráfico na Clima Rio, criei a identidade visual completa da data — paleta, tipografia e as peças de e-mail marketing e de display físico da ação.",
    processo: [
      {
        titulo: "E-mail Marketing",
        texto:
          "Peças disparadas por e-mail com a mesma identidade visual — uma delas anunciando o sorteio de dez climatizadores Philco entre as colaboradoras da empresa.",
        galeria: ["/images/dia-mulher-email-01.png", "/images/dia-mulher-email-02.png"],
      },
      {
        titulo: "Display para Coffee Break",
        texto:
          "Além do e-mail marketing, a identidade também virou um display de mesa, colocado nas mesas de coffee break oferecido a todas as mulheres da empresa no dia — com peças personalizadas para cada fabricante parceiro.",
        galeria: [
          "/images/dia-mulher-display-mesa-gree.png",
          "/images/dia-mulher-display-mesa-midea.png",
        ],
      },
    ],
    solucao:
      "Um conjunto de peças com identidade visual consistente — e-mails marketing e displays de mesa para o coffee break oferecido a todas as mulheres da empresa, com versões personalizadas para os fabricantes parceiros.",
    impacto:
      "A ação incluiu o sorteio de dez climatizadores Philco entre as colaboradoras da Clima Rio e um coffee break com display de mesa oferecido a todas as mulheres da empresa, celebrando a data internamente além da comunicação externa.",
    reflexao:
      "Foi bom perceber que uma data comemorativa pode virar uma ação real para dentro da empresa, e não só uma arte para postar.",
  },
  {
    id: 9,
    titulo: "Identidade Elisa Martins Nail Artist",
    cliente: "Elisa Martins",
    tags: ["Branding", "Identidade Visual"],
    capa: "/images/elisa-martins-capa.png",
    contexto:
      "Elisa Martins é manicure e nail artist independente. Em 2022, desenvolvi a identidade visual completa da marca pessoal dela, do zero — um dos meus primeiros projetos de identidade visual.",
    problema:
      "A marca precisava de uma identidade que soasse profissional e sofisticada para o nicho de nail art, mas simples o suficiente para ser aplicada por uma profissional autônoma no dia a dia — cartão de visita, redes sociais, book de unhas.",
    descoberta:
      "A cliente pediu que a identidade trouxesse uma mariposa, e fui eu quem desenhou essa ilustração — pesquisei referências do universo da beleza e da natureza para construir uma mariposa que remetesse à leveza e à transformação, conceitos que combinam com o trabalho manual e detalhista de nail art. A partir daí defini uma paleta em verde-petróleo e dourado, com tipografia serifada fina para transmitir elegância.",
    papel:
      "Conduzi o projeto sozinha, do conceito à aplicação final — logotipo, paleta, tipografia e cartão de visita.",
    processo: [
      {
        titulo: "Aplicação — Cartão de Visita",
        texto:
          "O cartão de visita reúne o logotipo, a paleta e um QR code direto para o Instagram da profissional — pensado como a principal peça física de contato com clientes.",
        galeria: ["/images/elisa-martins-02.png"],
      },
    ],
    solucao:
      "Um sistema de marca completo — logotipo com a ilustração da mariposa, paleta de cores, tipografia e cartão de visita com QR code para o Instagram da profissional.",
    impacto:
      "Foi um dos meus primeiros projetos de identidade visual completa.",
    reflexao:
      "Foi um projeto importante para construir repertório. Hoje, com mais experiência, eu simplificaria algumas aplicações — mas o conceito da mariposa ainda é uma das ideias das quais mais gosto entre meus primeiros trabalhos.",
  },
  {
    id: 10,
    titulo: "Super Feirão Outlet Clima Rio",
    cliente: "Clima Rio",
    tags: ["Campanha Comercial", "Identidade Visual", "Evento"],
    capa: "/images/feirao-outlet-sympla.jpg",
    contexto:
      "O 1º Super Feirão Outlet Clima Rio foi um evento de liquidação em loja física, realizado em 29 de junho de 2024 na Filial Penha, com descontos de até 70%, sorteio de prêmios e rodadas de chopp — em parceria com o fabricante Midea Carrier.",
    problema:
      "Por ser a primeira edição do evento, não havia identidade nem material anterior para se basear. Era preciso construir do zero uma campanha completa — do logo à divulgação prévia — capaz de gerar expectativa em pouco tempo e cobrir formatos bem diferentes: redes sociais, e-mail, impresso e a página de inscrição no Sympla.",
    descoberta:
      "O briefing pedia um formato bem de varejo, parecido com uma feira popular — então busquei uma identidade com fundo amarelo, que remete aos cartazes de divulgação de varejo, com vermelho e preto na cor dos textos. Raios, tags de desconto e uma tipografia com contorno grosso reforçaram esse tom de liquidação.",
    papel:
      "Como Assistente de Design Gráfico na Clima Rio, desenvolvi a identidade visual completa do evento e toda a campanha de divulgação — logo, uniforme da equipe, save the date, convite, contagem regressiva e capa da página de inscrição.",
    processo: [
      {
        titulo: "Identidade Visual",
        texto:
          "O logotipo partiu do briefing de varejo — fundo amarelo, textos em vermelho e preto, raios e tags de desconto — para comunicar a energia de uma liquidação, como um cartaz de feira popular.",
        galeria: ["/images/feirao-outlet-logo.png"],
      },
      {
        titulo: "Uniformes",
        texto:
          "O logotipo do evento deu origem à camiseta usada pela equipe durante o feirão — em uma versão com o logo do fabricante parceiro Midea Carrier nas mangas.",
        galeria: [
          "/images/feirao-outlet-camisa-amarela.jpg",
          "/images/feirao-outlet-camisa-parceiros.jpg",
        ],
      },
      {
        titulo: "Divulgação",
        texto:
          "Save the date, convite e uma contagem regressiva — 1 semana, 5 dias e 1 dia — anteciparam o evento nas redes e reforçaram o endereço da Filial Penha, enquanto a capa da página no Sympla centralizava as inscrições.",
        galeria: [
          "/images/feirao-outlet-savethedate-mockup.jpg",
          "/images/feirao-outlet-convite-mockup.jpg",
          "/images/feirao-outlet-contagem-mockup.jpg",
        ],
      },
    ],
    solucao:
      "Uma campanha completa com identidade própria, aplicada em todos os formatos do evento — logo, uniforme da equipe, save the date, convite, contagem regressiva nas redes e página de inscrição no Sympla.",
    impacto:
      "A 1ª edição do Super Feirão Outlet reuniu descontos de até 70%, sorteio de prêmios e rodadas de chopp na Filial Penha, com inscrição centralizada no Sympla e divulgação em parceria com a Midea Carrier.",
    reflexao:
      "Esse projeto me tirou completamente da zona de conforto — tive que criar uma estética bem fora do que costumo fazer, e ainda assim manter consistência entre as peças e aplicar corretamente a marca do fabricante parceiro em cada uma delas.",
  },
  {
    id: 11,
    titulo: "Estande Clima Rio — Febrava 2025",
    cliente: "Clima Rio",
    tags: ["Identidade Visual", "Evento", "Digital"],
    capa: "/images/febrava-estande-capa.jpg",
    contexto:
      "A Febrava é a maior feira do setor de refrigeração, ar-condicionado, ventilação e tratamento de ar da América Latina, realizada em São Paulo. Em setembro de 2025, participei do desenvolvimento da identidade visual e do modelo de estrutura do estande da Clima Rio na feira — um espaço que reuniu a vitrine de diversos fabricantes parceiros (entre eles Samsung, LG, TCL, Midea Carrier, Philco e Daikin), a linha de ferramentas e refrigeração comercial, e o lançamento da Aufit, marca exclusiva da própria Clima Rio.",
    problema:
      "O estande precisava resolver dois desafios ao mesmo tempo. No espaço físico, era preciso encaixar numa área só uma sala de treinamento, boa circulação, exposição de equipamentos grandes e volumosos, e mesas para atender clientes em potencial. Na marca, \"A Casa do Instalador\" não podia ser só mais uma ativação — precisava ser o posicionamento da Clima Rio para aquele evento inteiro. A Aufit, marca exclusiva da empresa, também pediu uma ativação própria e única para o seu lançamento.",
    descoberta:
      "Dividi o estande em zonas pensando no fluxo do público: ar-condicionado na frente, pelo volume de fabricantes parceiros; o Acelera Clima Rio bem na ponta, com uma ativação pensada para chamar atenção logo de cara; e ferramentas e refrigeração comercial ao fundo, por serem mais técnicas e voltadas ao instalador que já vem buscando aquilo. A sala de treinamento ficou virada para a rua, para atrair o instalador de fora e mostrar a grade de treinamentos. Na identidade visual, toda a comunicação institucional — marca, serviços e pontos fortes da empresa — ficou concentrada no topo do estande, facilitando a visualização do público em meio ao movimento da feira.",
    papel:
      "Desenvolvi a identidade visual e o modelo de estrutura do estande da Clima Rio na Febrava, incluindo a divisão de zonas por perfil de público. Também concebi a ideia do quiz interativo e o produzi para o lançamento da Aufit, marca exclusiva da Clima Rio.",
    processo: [
      {
        titulo: "Identidade Visual e Zoneamento do Estande",
        texto:
          "A sinalização \"Clima Rio — A Casa do Instalador\" no teto amarrou visualmente as diferentes zonas do estande — ar-condicionado e fabricantes parceiros na frente, Acelera Clima Rio na ponta, ferramentas e refrigeração comercial ao fundo — com a comunicação institucional concentrada no topo.",
        galeria: [
          "/images/febrava-estande-panoramica-01.jpg",
          "/images/febrava-estande-panoramica-02.jpg",
          "/images/febrava-estande-identidade.jpg",
        ],
      },
      {
        titulo: "A Casa do Instalador — Posicionamento da Marca",
        texto:
          "Mais que uma ativação, \"A Casa do Instalador\" foi o posicionamento da Clima Rio na feira — uma expressão já comum entre instaladores, que quisemos reforçar e bater o martelo naquele momento. Por dentro, a cabine de vidro foi envelopada como uma sala com ar-condicionado; por fora, aludia a um telhado, reforçando a ideia de casa. Para participar, a pessoa entrava na cabine e pegava, em meio a confetes, um papel com o prêmio que tinha ganhado.",
        galeria: [
          "/images/febrava-casa-instalador-01.jpg",
          "/images/febrava-casa-instalador-02.jpg",
        ],
      },
      {
        titulo: "Quiz Interativo — Lançamento Aufit",
        texto:
          "Para o lançamento da Aufit, marca exclusiva da Clima Rio, tive a ideia de criar um quiz técnico e fomentei o lançamento nas redes sociais. Rodando em totem touch ao lado dos produtos em exposição, o quiz trazia perguntas aleatórias sobre o produto e calculava, também de forma aleatória, a pontuação da pessoa e o prêmio que ela ganhava.",
        figmaEmbed: "https://quiz-aufit.vercel.app/",
        embedAspect: "4 / 5",
      },
    ],
    solucao:
      "O estande reuniu a vitrine dos fabricantes parceiros, a sala de treinamento voltada para a rua, \"A Casa do Instalador\" como posicionamento central da marca na feira, e o quiz de lançamento da Aufit rodando em totem touch.",
    impacto:
      "Entreguei um estande coeso, com espaço para todos os fabricantes parceiros e preservando tanto a identidade de cada um quanto a da Clima Rio — que, pela primeira vez, teve ativações próprias num evento desse porte. O quiz de lançamento da Aufit captou mais de 100 leads, mais de 200 pessoas se cadastraram no programa Acelera Clima Rio, e o estande recebeu mais de 20 treinamentos durante a feira.",
    reflexao:
      "Foi meu primeiro projeto pensando um espaço físico de grande porte, dividido em zonas para públicos e marcas diferentes ao mesmo tempo — um exercício de organização bem diferente de desenhar uma peça isolada.",
  },
];
