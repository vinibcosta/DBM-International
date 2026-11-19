/**
 * ============================================================
 *  CONTEÚDO DO SITE — edite este arquivo para mudar textos,
 *  menus, programas, parceiros, contatos e imagens.
 *  Não precisa mexer nos componentes para trocar conteúdo.
 * ============================================================
 *
 * Imagens: ficam em /public/images. Para trocar uma imagem, coloque
 * o arquivo novo nessa pasta e use "/images/nome-do-arquivo.jpg".
 */

export const images = {
  logo: "/logo-dbm.png",
  hero: "/images/nsplsh_6e10cfaaa8df41b8b64ec00a3563a333.webp",
  // Foto de PTTI EDU no Unsplash: https://unsplash.com/photos/k9Dc5zT1Gq0
  profissionais: "/images/programas-profissionais-1.webp",
  ferias: "/images/nsplsh_1803ecb964f0495c926c196e133a4d78.webp",
  universitarios: "/images/11062b_76cceaa4b3f845d799b17ed5ef4d3d5e.webp",
  // Foto de Vitaly Gariev no Unsplash: https://unsplash.com/photos/8gAbl776pc0
  programasUniversitarios: "/images/programas-universitarios-1.webp",
  ensinoMedio: "/images/11062b_d337a8c793004cdea5093dafae9aafcd.webp",
  idiomas: "/images/nsplsh_564d337536694476574467.webp",
  // Foto de X (@disruptxn) no Unsplash: https://unsplash.com/photos/IgUR1iX0mqM
  irlanda: "/images/estude-ingles-trabalhe-1.webp",
};

export const site = {
  name: "DBM International Education",
  legalName: "DBM International Education and Immigration LLC",
  tagline: "The best education agency",
  url: "https://www.educationdbm.com",
  description:
    "Consultoria educacional gratuita para estudar no exterior: Canadá, EUA, Irlanda, Austrália, Europa e mais.",
};

export const contact = {
  email: "info@educationdbm.com",
  phone: "+1 204 250 2830",
  whatsapp: "+12042502830",
  whatsappMessage: "Olá! Gostaria de saber mais sobre estudar no exterior com a DBM.",
};

export const social = [
  { name: "YouTube", href: "https://www.youtube.com/@educationdbm" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/educationdbm" },
  { name: "Facebook", href: "https://www.facebook.com/educationdbm" },
  { name: "Instagram", href: "https://www.instagram.com/educationdbm/" },
] as const;

/** Menu principal. `external: true` abre em nova aba. */
export const nav = [
  { label: "Home", href: "/" },
  { label: "Conheça a DBM", href: "/sobre" },
  { label: "Estudar no exterior", href: "/estudar" },
  // Oculto temporariamente — descomente para reexibir.
  // { label: "Study DBM", href: "https://studydbm.studentpanel.net/login", external: true },
  { label: "Seguro saúde", href: "https://www.mshgroups.com/dbm/en", external: true },
  {
    label: "Homestay",
    href: "https://studentportal.chnonline.ca/apply?a=5F5085AD-5209-C940-AF1B-468177EF2C8D&approve=no",
    external: true,
  },
  { label: "Contato", href: "/form" },
];

/* ---------------------------- HOME ---------------------------- */

export const home = {
  hero: {
    title: "Somos a sua porta de entrada para as melhores instituições de ensino do",
    highlight: "MUNDO!",
    subtitle:
      "Consultoria educacional personalizada e gratuita para você estudar, trabalhar e construir sua carreira no exterior.",
    ctaPrimary: { label: "Fale com a DBM", href: "/form" },
    ctaSecondary: { label: "Ver programas", href: "#programas" },
  },
  programsTitle: "Escolha o seu caminho",
  programs: [
    {
      title: "Programas profissionais",
      text: "Programas vocacionais de estudo e trabalho que unem formação de qualidade e experiência profissional internacional.",
      image: images.profissionais,
      imageAlt: "Estudante com óculos de proteção usando uma esmerilhadeira em uma oficina, observada por uma instrutora",
    },
    {
      title: "Cursos de férias",
      text: "Aprenda um idioma nas férias com museus, dança, passeios e novas amizades pelo caminho.",
      image: images.ferias,
      imageAlt: "Estudantes em viagem de férias",
    },
    {
      title: "Programas universitários",
      text: "Graduação e pós em instituições reconhecidas, com experiência acadêmica e profissional no exterior.",
      image: images.programasUniversitarios,
      imageAlt: "Grupo diverso de estudantes universitários reunidos em volta de um notebook em um auditório",
    },
    {
      title: "Ensino médio",
      text: "Faça o ensino médio fora e aumente suas chances de admissão nas melhores universidades.",
      image: images.ensinoMedio,
      imageAlt: "Duas estudantes prestes a entrar em um ônibus",
    },
    {
      title: "Cursos de idioma",
      text: "Aprenda inglês, francês ou outro idioma com imersão cultural completa.",
      image: images.idiomas,
      imageAlt: "Estudante em uma cidade no exterior",
    },
    {
      title: "Estude inglês e trabalhe",
      text: "Estude inglês e trabalhe legalmente na Irlanda — escolha entre Dublin ou Cork.",
      image: images.irlanda,
      imageAlt: "Mulher e homem adultos trabalhando juntos em um notebook em um escritório",
    },
  ],
  about: {
    title: "A DBM é a sua empresa!",
    text: "Oferecemos consultoria educacional personalizada e gratuita: acompanhamos sua aplicação em todas as etapas, sem cobrar taxa de serviço.",
    benefitsTitle: "Benefícios exclusivos para clientes DBM",
    benefits: [
      "Descontos em passagens aéreas",
      "Seguro saúde para estudantes",
      "Chip de celular para o país de destino",
      "Plataforma de pagamento com taxas reduzidas",
    ],
  },
  partnersTitle: "Instituições parceiras",
};

/**
 * Parceiros, em ordem alfabética. Para usar logo, coloque o arquivo em /public/images e adicione `logo: "/images/nome.png"`.
 * Sem logo, o nome aparece em texto.
 */
export const partners: { name: string; logo?: string }[] = [
  { name: "BCIT – British Columbia Institute of Technology", logo: "/images/bcit.svg" },
  { name: "Bow Valley College", logo: "/images/06900b_76e94682ceb94c4cb4b089da043c3b49.webp" },
  { name: "Cambrian College", logo: "/images/06900b_1bca3b6802934c94bad497356fda7373.webp" },
  { name: "Camosun College", logo: "/images/06900b_6c9359b4d20046e693273cf08ac473d0.webp" },
  { name: "Cape Breton University", logo: "/images/cape-breton.webp" },
  { name: "Centennial College", logo: "/images/06900b_b376c24c90dd4f6c97d20ad5f54a409d.webp" },
  { name: "City University in Canada", logo: "/images/06900b_8491c1f7765f4e29aacf45cb25324ef4.webp" },
  { name: "Conestoga" },
  { name: "Crandall University", logo: "/images/06900b_ea2ded2b5a9c4cedb1e22d2c0931c810.webp" },
  { name: "Durham College", logo: "/images/durham.svg" },
  { name: "European University", logo: "/images/06900b_45a2dc6b73af4e8aa4c3240fba148f96.webp" },
  { name: "Fanshawe College", logo: "/images/fanshawe.svg" },
  { name: "George Brown College", logo: "/images/06900b_799f128fa01843bca4a48d49e5930ed9.webp" },
  { name: "Georgian College", logo: "/images/georgian.svg" },
  { name: "IBU – International Business University", logo: "/images/ibu.svg" },
  { name: "INTER", logo: "/images/06900b_21874f7023bc40468d0a56b5e4bcbace.webp" },
  { name: "Justice Institute of BC", logo: "/images/06900b_47b1176a3b62483288d74c4f917d63aa.webp" },
  { name: "Langara College", logo: "/images/06900b_79b26b36009e477ebffcc8246d1e89ef.webp" },
  { name: "Medicine Hat College", logo: "/images/06900b_d3b630c1a8f2478fa1f1774870c8efa1.webp" },
  { name: "Mount Saint Vincent University", logo: "/images/msvu.svg" },
  { name: "NBCC – New Brunswick Community College", logo: "/images/06900b_76c260744f1740c290f5826a6d303b1e.webp" },
  { name: "Niagara College", logo: "/images/niagara.svg" },
  { name: "OCAD University", logo: "/images/ocad.webp" },
  { name: "Ontario Tech University", logo: "/images/ontario-tech.svg" },
  { name: "Red Deer Polytechnic", logo: "/images/red-deer-polytechnic.svg" },
  { name: "Red River College Polytechnic", logo: "/images/rrc-polytech.svg" },
  { name: "Royal Roads University", logo: "/images/royal-roads.svg" },
  { name: "Saskatchewan Polytechnic", logo: "/images/saskatchewan-polytechnic.webp" },
  { name: "Sault College", logo: "/images/06900b_dcaae7d08e6747e2aea8a95bb2089680.webp" },
  { name: "Seneca Polytechnic", logo: "/images/seneca-polytechnic.svg" },
  { name: "St. Francis Xavier University – StFX", logo: "/images/stfx.webp" },
  { name: "Trent University", logo: "/images/trent.svg" },
  { name: "Universidad Europea", logo: "/images/06900b_691fe9cf30f34ec1a59c93a2bd48a8a8.webp" },
  { name: "University Canada West – UCW", logo: "/images/ucw.webp" },
  { name: "University of Manitoba" },
  { name: "University of Niagara Falls Canada – UNFC", logo: "/images/unfc.svg" },
  { name: "University of Prince Edward Island – UPEI", logo: "/images/upei.svg" },
  { name: "University of Regina", logo: "/images/06900b_b617f45b465649059312d2f7374432a4.webp" },
  { name: "University of the Fraser Valley – UFV", logo: "/images/ufv.webp" },
  { name: "University of Victoria", logo: "/images/06900b_786ef854853448be83668ff37c745651.webp" },
  { name: "University of Windsor", logo: "/images/uwindsor.svg" },
  { name: "Webster University", logo: "/images/06900b_f501d8a9c0ec4df58da2262dbfa48514.webp" },
  { name: "Western College", logo: "/images/06900b_c88c4e71d9434845b7035b189038b558.webp" },
  { name: "Yorkville University", logo: "/images/yorkville.webp" },
];

/* ---------------------------- SOBRE ---------------------------- */

export const sobre = {
  hero: {
    title: "Tenha um MUNDO de oportunidades com a DBM!",
    text: "Somos especialistas em educação internacional e imigração, com cerca de uma década de experiência. Montamos um plano estratégico personalizado para cada cliente, com parceiros no Canadá, EUA, Reino Unido, Europa, Austrália, Geórgia, Turquia e outros destinos.",
  },
  whyTitle: "Por que a DBM?",
  why: [
    { title: "+4.000 opções", text: "Mais de 4.000 opções de estudo pelo mundo." },
    { title: "Plano individual", text: "Plano de ação feito sob medida para o seu perfil." },
    { title: "Consultoria completa", text: "Estudo e imigração com consultor de imigração licenciado." },
    { title: "Atendimento próximo", text: "Do curso ao planejamento do visto, você não fica sozinho." },
    { title: "Empresa premiada", text: "Empresa certificada e premiada no setor de educação internacional." },
  ],
  recognition: {
    title: "Reconhecimento",
    text: "Somos membros de organizações globais de educação, temos certificações e prêmios e trabalhamos com instituições de renome.",
  },
  stepsTitle: "Como funciona: 5 passos",
  steps: [
    { title: "Análise de perfil", text: "Entendemos seus objetivos acadêmicos, profissionais e de imigração." },
    { title: "Escolha da instituição e curso", text: "Indicamos as melhores opções para o seu perfil e orçamento." },
    { title: "Aplicação e documentos", text: "Preparamos e enviamos sua aplicação com toda a documentação." },
    { title: "Visto e imigração", text: "Planejamos seu visto e próximos passos de imigração." },
    { title: "Chegada e adaptação", text: "Apoio na chegada e na adaptação ao novo país." },
  ],
  support: {
    title: "Como funciona o atendimento?",
    text: "Fale com a gente pelo WhatsApp, e-mail ou telefone. Respondemos rápido e marcamos uma conversa para entender o seu plano.",
  },
};

/* --------------------------- ESTUDAR --------------------------- */

export const estudar = {
  hero: {
    title: "Inicie hoje o seu plano de estudar no exterior com a DBM!",
    text: "Fazemos uma análise individual do seu perfil para alcançar seus objetivos acadêmicos, profissionais ou de imigração.",
    image: images.universitarios,
  },
  destinationsTitle: "Destinos",
  destinations: [
    "Canadá",
    "Estados Unidos",
    "Austrália",
    "Irlanda",
    "Nova Zelândia",
    "Reino Unido",
    "Turquia",
    "Europa",
  ],
  destinationsNote:
    "Mais de 4.000 programas disponíveis. Também damos suporte aos testes oficiais de proficiência do Canadá.",
  whyTitle: "Por que estudar no exterior",
  why: [
    "Cursos de idioma, programas profissionais, pós-graduação, bacharelado e mestrado",
    "Canadá e Austrália oferecem oportunidades de trabalho pós-estudo e imigração para estudantes internacionais",
    "Experiência internacional que faz diferença no currículo",
    "Imersão completa em um novo idioma e cultura",
  ],
  levelsTitle: "Níveis educacionais (ensino superior)",
  levelsText:
    "O sistema pós-secundário no exterior é diferente do Brasil. Veja como os níveis se comparam:",
  levels: [
    { name: "Certificate", br: "Curso técnico / profissionalizante", duration: "~1 ano" },
    { name: "Diploma", br: "Tecnólogo", duration: "~2 anos" },
    { name: "Advanced Diploma", br: "Tecnólogo avançado", duration: "~3 anos" },
    { name: "Bachelor's Degree", br: "Bacharelado", duration: "~4 anos" },
    { name: "Post-Graduate Certificate", br: "Pós-graduação (especialização)", duration: "~1 ano" },
    { name: "Master's Degree", br: "Mestrado", duration: "~1–2 anos" },
  ],
};

/* --------------------------- CONTATO --------------------------- */

export const contato = {
  title: "Pronto para sonhar grande e ganhar o MUNDO com a DBM?",
  text: "Preencha o formulário e nossa equipe entra em contato com você.",
  formTitle: "Formulário de contato",
  /**
   * Google Forms exibido na página de contato. Para trocar de formulário,
   * cole aqui o link "viewform" do novo (o "?embedded=true" é adicionado sozinho).
   */
  googleFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSfDkKOHDfJvBIdotm85S6L5LiMleMo5f9A9JbAl2XxWFusOvg/viewform",
  /**
   * Altura do formulário em pixels. Se aparecer barra de rolagem dentro dele
   * ou sobrar espaço em branco embaixo, ajuste estes números.
   */
  formHeight: { mobile: 1700, desktop: 1400 },
};
