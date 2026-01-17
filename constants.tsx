import React from 'react';
import { Truck, Sprout, ShieldCheck, TrendingUp, Users, Package, HardHat, Cog, CheckCircle, Zap, Ruler, Globe, Wrench, Warehouse, Wallet, Headset, Calculator, Anchor } from 'lucide-react';
import { ServiceItem, ProductCategory } from './types';

export const COMPANY_NAME = "SANCHO – Importações & Exportações LDA";
export const PHONE_1 = "+258 87 422 8160";
// Link direto para o número, sem mensagem pré-definida (?text=...)
export const WHATSAPP_LINK = "https://wa.me/258874228160";
export const FACEBOOK_LINK = "https://www.facebook.com/share/1AMSmu8p8j/";
export const INSTAGRAM_LINK = "https://www.instagram.com/sanchoimportacoeslda?igsh=Znpvamh3am5jaHE1";
export const EMAIL = "info@sanchotrading.com";
export const ADDRESS = "Cidade de Maputo, Bairro Alto Maé, Avenida Eduardo Mondlane N°3112 1°Andar";
export const GOOGLE_MAPS_LINK = "https://share.google/MRD5G9hi6uHw7IhA9";

export const NAV_LINKS = [
  { label: 'Início', href: '/' },
  { label: 'Produtos', href: '/produtos' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Sobre Nós', href: '/sobre' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contactos', href: '/contactos' },
];

export const FAQ_ITEMS = [
  {
    question: "Vocês fazem entregas para todas as províncias de Moçambique?",
    answer: "Sim! A SANCHO possui uma rede logística que cobre todo o território nacional. Entregamos em Maputo, Beira, Nampula, Tete, Pemba e demais províncias. O prazo e o custo variam consoante a localização e o tipo de carga."
  },
  {
    question: "Os equipamentos têm garantia?",
    answer: "Absolutamente. Todos os nossos equipamentos novos (SANY, SDLG, etc.) vêm com garantia de fábrica, que geralmente varia de 1 a 2 anos ou horas de uso, dependendo do fabricante. Também oferecemos suporte pós-venda e peças de reposição."
  },
  {
    question: "Como funciona o processo de importação e desembaraço aduaneiro?",
    answer: "Nós cuidamos de tudo. O preço cotado (DDP) já inclui os serviços de desembaraço aduaneiro, taxas portuárias e impostos (quando aplicável). O cliente não precisa se preocupar com a burocracia na fronteira ou porto."
  },
  {
    question: "Quais são as formas de pagamento aceites?",
    answer: "Aceitamos transferências bancárias (BIM, BCI, Standard Bank), cheques visados e M-Pesa para pagamentos de menor valor ou peças. Para grandes encomendas de importação, trabalhamos com adiantamento e o restante contra a entrega ou embarque (consoante contrato)."
  },
  {
    question: "Quanto tempo demora para chegar um equipamento importado?",
    answer: "Equipamentos em stock em Maputo são entregues imediatamente. Para importações directas: Via Aérea (peças/máquinas pequenas) leva 7-15 dias. Via Marítima (máquinas pesadas/contentores) leva entre 30 a 50 dias, dependendo da origem (China, Europa, etc.)."
  },
  {
    question: "Vocês fornecem peças de reposição?",
    answer: "Sim, fornecemos peças genuínas para todas as marcas que representamos e também para outras marcas de mercado (Caterpillar, Komatsu, Toyota). Mantemos um stock de peças de alto desgaste para entrega rápida."
  }
];

export const HERO_CONTENT = {
  title: "Soluções completas em Máquinas, Equipamentos Industriais e Logística",
  subtitle: "Atuamos no mercado de importação e exportação oferecendo máquinas de construção, equipamentos industriais, soluções agrícolas e serviços de logística, com foco em qualidade, eficiência e confiança.",
};

// Summary services for Home Page
export const SERVICES: ServiceItem[] = [
  {
    title: "Máquinas de Construção",
    description: "Distribuição de marcas líderes como SANY e SDLG para grandes obras.",
    icon: <HardHat className="w-10 h-10" />
  },
  {
    title: "Produtos Industriais",
    description: "Geradores industriais e motores estacionários de alta potência.",
    icon: <Cog className="w-10 h-10" />
  },
  {
    title: "Agricultura",
    description: "Tratores, implementos e sistemas de irrigação para o campo.",
    icon: <Sprout className="w-10 h-10" />
  },
  {
    title: "Logística e Camiões",
    description: "Camiões basculantes, gruas e empilhadeiras para movimentação de carga.",
    icon: <Truck className="w-10 h-10" />
  }
];

// Detailed services for Services Page
export const DETAILED_SERVICES_PAGE = [
  {
    title: "Importação e Exportação",
    description: "Serviços completas de importação e exportação de máquinas e equipamentos industriais com toda a documentação e logística necessária.",
    image: "https://www.takelog.com.br/imagens/informacoes/consultoria-importacao-02.webp",
    icon: <Globe size={28} />,
    features: [
      "Gestão completa de documentação",
      "Desembaraço aduaneiro",
      "Transporte internacional",
      "Seguro de mercadorias"
    ]
  },
  {
    title: "Fornecimento de Equipamentos",
    description: "Fornecemos máquinas e equipamentos de alta qualidade para construção, indústria e agricultura de marcas reconhecidas internacionalmente.",
    image: "https://www.hybel.com.br/fotos/1812201811204200000033860.jpg",
    icon: <Truck size={28} />,
    features: [
      "Equipamentos certificados",
      "Marcas internacionais (SANY, SDLG)",
      "Garantia de qualidade",
      "Entrega em todo país"
    ]
  },
  {
    title: "Consultoria Técnica",
    description: "Equipe especializada para auxiliar na escolha dos equipamentos ideais para suas necessidades específicas e projetos.",
    image: "https://www.certus.edu.pe/blog/wp-content/uploads/2021/11/obrero-exportador.jpg",
    icon: <Headset size={28} />,
    features: [
      "Análise de necessidades",
      "Recomendações personalizadas",
      "Suporte técnico especializado",
      "Acompanhamento de projetos"
    ]
  },
  {
    title: "Manutenção e Suporte",
    description: "Serviços de manutenção preventiva e corretiva para garantir o máximo desempenho e durabilidade dos seus equipamentos.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000",
    icon: <Wrench size={28} />,
    features: [
      "Manutenção preventiva",
      "Reparos e assistência técnica",
      "Peças de reposição originais",
      "Suporte pós-venda"
    ]
  },
  {
    title: "Logística e Armazenamento",
    description: "Soluções completas de logística e armazenamento seguro para gestão eficiente de mercadorias e equipamentos.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000",
    icon: <Warehouse size={28} />,
    features: [
      "Armazém seguro e moderno",
      "Gestão de inventário",
      "Distribuição eficiente",
      "Rastreamento de mercadorias"
    ]
  },
  {
    title: "Soluções Financeiras",
    description: "Opções flexíveis de pagamento e financiamento para facilitar a aquisição dos equipamentos que seu negócio precisa.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000",
    icon: <Wallet size={28} />,
    features: [
      "Planos de pagamento flexíveis",
      "Parcerias com instituições financeiras",
      "Condições especiais",
      "Cotações personalizadas"
    ]
  }
];

export const WORK_PROCESS = [
  { number: "01", title: "Contacto Inicial", desc: "Entre em contacto connosco através do WhatsApp, telefone ou formulário online" },
  { number: "02", title: "Análise de Necessidades", desc: "Nossa equipe analisa suas necessidades e recomenda as melhores soluções" },
  { number: "03", title: "Proposta Personalizada", desc: "Elaboramos uma proposta detalhada com preços, prazos e condições" },
  { number: "04", title: "Processamento", desc: "Cuidamos de toda a logística, documentação e importação" },
  { number: "05", title: "Entrega e Suporte", desc: "Entregamos o equipamento e oferecemos suporte contínuo" },
];

export const VALUES = [
  { 
    title: "Qualidade", 
    description: "Produtos certificados e de alta durabilidade para garantir o melhor desempenho",
    icon: <ShieldCheck className="w-10 h-10 text-sancho-primary" /> 
  },
  { 
    title: "Confiança", 
    description: "Parceiros confiáveis com anos de experiência no mercado internacional",
    icon: <Users className="w-10 h-10 text-sancho-primary" /> 
  },
  { 
    title: "Compromisso", 
    description: "Dedicação total ao sucesso e crescimento dos nossos clientes",
    icon: <Package className="w-10 h-10 text-sancho-primary" /> 
  },
  { 
    title: "Profissionalismo", 
    description: "Excelência em cada serviço prestado com equipe altamente qualificada",
    icon: <TrendingUp className="w-10 h-10 text-sancho-primary" /> 
  },
];

// UPDATED CATALOG DATA BASED ON PDF CATALOG
export const CATALOG_DATA: ProductCategory[] = [
  {
    id: "construction",
    title: "Máquinas de Construção",
    description: "Escavadeiras, Betoneiras e Maquinaria Pesada das melhores marcas.",
    image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=1000&auto=format&fit=crop", 
    items: [
      { 
        id: "escavadeira-sany-sy215c",
        name: "Escavadeira SANY SY215C", 
        specs: ["Capacidade: 0.93m³", "Peso: 21.9T", "Potência: 118kW"],
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_704050-MLB81540687874_012025-F-escavadeira-sany-sy215c.webp",
        fullDescription: "A SANY SY215C é a escavadeira líder de mercado, projetada para alta eficiência em terraplanagem e mineração. Possui estrutura reforçada e sistema hidráulico otimizado.",
        features: ["Motor de alta potência", "Cabine com ar condicionado", "Baixo consumo de combustível", "Alta força de escavação"]
      },
      { 
        id: "escavadeira-sany-sy500h",
        name: "Escavadeira SANY SY500H", 
        specs: ["Capacidade: 2.2m³", "Peso: 50.1T", "Potência: 298kW"],
        image: "https://img.directindustry.com/pt/images_di/photo-g/52887-16175816.webp",
        fullDescription: "Escavadeira de grande porte para mineração pesada (Tier 4F & Stage V). Robustez incomparável para os trabalhos mais exigentes.",
        features: ["Caçamba reforçada para rocha", "Sistema de filtragem avançado", "Tecnologia de economia de energia"]
      },
      { 
        id: "betoneira-menegotti-400l",
        name: "Betoneira Menegotti Prime 400L", 
        specs: ["Capacidade: 400 Litros", "Uso Profissional", "Alta Durabilidade"],
        image: "https://cdn.leroymerlin.com.br/products/betoneira_menegotti_prime_400_litros_2_cv_monofasica_220v_com_1566727958_daf1_600x600.jpg",
        fullDescription: "Equipamento durável e indicado para projetos de pequeno a médio porte. Econômico e feito na medida certa para quem busca eficiência com baixo investimento.",
        features: ["Tambor estampado em chapa de aço", "Pintura eletrostática", "Fácil operação e transporte"]
      },
      { 
        id: "caminhao-betoneira-sany",
        name: "Caminhão Betoneira SANY SY412C-8", 
        specs: ["Mistura: 12m³", "Motor: P11C-UJ", "Tanque Água: 800L"],
        image: "https://sanyglobal-img.sany.com.cn/prod/20230815/412_153455.jpg?x-oss-process=image/format,webp",
        fullDescription: "Caminhão betoneira SANY com capacidade de 12 metros cúbicos. Alta eficiência de mistura e descarga rápida, ideal para grandes concretagens.",
        features: ["Tecnologia anti-desgaste no tambor", "Sistema hidráulico de alta performance", "Cabine ergonômica"]
      },
      { 
        id: "motoniveladora-sdlg",
        name: "Motoniveladora SDLG G9138H", 
        specs: ["Peso: 13.275 kg", "Lâmina: 3.658 mm", "Potência: 141 hp"],
        image: "https://www.sdlgla.com/hubfs/Banco%20de%20imagens/Linha%20de%20Produtos-PT/Baixa/Motoniv_G9138H_2000x1330_Baixa_02.webp",
        fullDescription: "Motoniveladora SDLG G9138H oferece precisão no nivelamento e alta força de tração. Ideal para construção de estradas e manutenção de vias.",
        features: ["Visibilidade panorâmica", "Controle hidráulico preciso", "Estrutura robusta"]
      },
      { 
        id: "rolo-vibratorio-ltc",
        name: "Rolo Vibratório LTC203", 
        specs: ["Peso: 3300 Kg", "Tambor: 1250 mm", "Tanque: 200 L"],
        image: "https://img.directindustry.com/pt/images_di/photo-g/244581-17628607.webp",
        fullDescription: "Rolo compactador vibratório ideal para compactação de asfalto e solos granulares em obras urbanas e rodoviárias.",
        features: ["Direção articulada", "Sistema de aspersão de água", "Fácil manutenção"]
      },
      { 
        id: "carregadeira-sdlg",
        name: "Pá Carregadeira SDLG L918H", 
        specs: ["Caçamba: 1.0m³", "Peso: 6.700 kg", "Potência: 88 HP"],
        image: "https://www.sdlgla.com/hubfs/Produtos%20Pt-Br/carragadeira_l918h_na_terra_020.webp",
        fullDescription: "Carregadeira compacta e ágil, perfeita para movimentação de materiais em espaços reduzidos e canteiros de obras.",
        features: ["Motor econômico", "Cabine confortável", "Alta velocidade de ciclo"]
      }
    ]
  },
  {
    id: "industrial",
    title: "Produtos Industriais",
    description: "Geradores, Compressores e Motores de alta potência.",
    image: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?q=80&w=1000&auto=format&fit=crop", 
    items: [
      { 
        id: "gerador-csdk-280l",
        name: "Gerador CSDK-280L (Motor Kohler)", 
        specs: ["Motor: Kohler 25HP", "Rotação: 1500 rpm", "Refrigeração: Água"],
        image: "https://pt.generadoreselectricos.org/wp-content/uploads/elementor/thumbs/1541-r9yse72j2mwce7zr2uwpprv44ozylqqxnh2ekz6ddw.png", 
        fullDescription: "Soldadora/Gerador de 1500 rpm refrigerada a água. Melhora o desempenho em ambientes quentes e jornadas prolongadas. Fornece 280A de potência.",
        features: ["Motor Kohler confiável", "Baixo nível de ruído", "Alta durabilidade"]
      },
      { 
        id: "motor-toyama-diesel",
        name: "Motor Diesel Toyama TDWE30RE-XP", 
        specs: ["Tipo: Diesel", "Refrigeração: Água", "Partida: Elétrica"],
        image: "https://images.tcdn.com.br/img/img_prod/972835/motor_diesel_refrigerado_a_agua_1593cc_30_0hp_2_200rpm_radiador_inj_direta_2529_1_3e0516eb9345e7c84082afa94ec54275.png", 
        fullDescription: "Motor estacionário a diesel Toyama, robusto e versátil. Ideal para acoplar em bombas, geradores, barcos e máquinas agrícolas.",
        features: ["Radiador de água", "Tanque de combustível integrated", "Filtro de ar de alta eficiência"]
      },
      { 
        id: "reversor-maritimo",
        name: "Reversor Marítimo Kawashima", 
        specs: ["Potência: 45-100 HP", "Redução: 3.04:1", "Tipo: Hidráulico"],
        image: "https://images.tcdn.com.br/img/img_prod/913149/reversor_maritimo_hidraulico_kawashima_45_a_100_hp_com_embreagem_multiplas_e_reducao_de_1_97_1_a_3_0_4985_1_ff1920630c9469295a46249909da3a9b.png",
        fullDescription: "Reversor marítimo hidráulico com embreagens múltiplas. Garante trocas suaves e transmissão de potência eficiente para embarcações.",
        features: ["Carcaça resistente à corrosão", "Fácil instalação", "Alta confiabilidade no mar"]
      },
      { 
        id: "compressor-tekna",
        name: "Compressor de Ar Tekna CP8525", 
        specs: ["Tanque: 24L", "Potência: 2 HP", "Tensão: Bivolt"],
        image: "https://img.lojadomecanico.com.br/IMAGENS/21/159/300476/1660759000294.JPG", 
        fullDescription: "Compressor de ar portátil ideal para pinturas, calibragem e acionamento de ferramentas pneumáticas leves.",
        features: ["Rodas para transporte", "Manômetro de pressão", "Válvula de segurança"]
      }
    ]
  },
  {
    id: "agriculture",
    title: "Agricultura",
    description: "Mecanização agrícola com tratores e implementos.",
    image: "https://images.unsplash.com/photo-1592982537447-6f2a6a0c812d?q=80&w=1000&auto=format&fit=crop",
    items: [
      { 
        id: "microtrator-oleomac",
        name: "Microtrator Oleo-Mac WB65", 
        specs: ["Modelo: WB65 K 1100H", "Uso: Profissional", "Função: Triturador"],
        image: "https://images.tcdn.com.br/img/img_prod/913149/triturador_profissonal_oleo_mac_wb65_k_1100h_5274_1_f9cccaa843c25b36fab3b4c0fe85c589.png", 
        fullDescription: "Microtrator triturador profissional, ideal para limpeza de terrenos, corte de capim alto e manutenção de pomares.",
        features: ["Lâminas de alta resistência", "Rodas tratoradas", "Guidão ajustável"]
      },
      { 
        id: "rocadeira-trator",
        name: "Roçadeira Hidráulica Maqtron RT-1800", 
        specs: ["Corte: 1.8 Metros", "Acoplamento: Trator", "Lâminas: Aço"],
        image: "https://images.tcdn.com.br/img/img_prod/913149/rocadeira_maqtron_hidraulica_para_trator_rt_1800_com_cardan_roda_guia_regulagem_de_altura_laminas_de_4111_1_4502b63d431d64a360960cec8db6379a.png", 
        fullDescription: "Roçadeira agrícola para acoplamento em trator. Possui cardan, roda guia e regulagem de altura. Excelente para grandes áreas.",
        features: ["Estrutura reforçada", "Transmissão direta", "Proteção de segurança"]
      },
      { 
        id: "debulhador-milho-maqtron",
        name: "Debulhador de Milho Maqtron B-330", 
        specs: ["Acionamento: Polia V", "Alta Produção", "Separação Limpa"],
        image: "https://images.tcdn.com.br/img/img_prod/913149/debulhador_de_milho_maqtron_b_330_t_para_trator_4115_1_b7ab371f8f309a6ebe7de04a0b655806.png",
        fullDescription: "Debulhador de milho robusto, projetado para alta produtividade no campo. Pode ser acionado por trator ou motor estacionário.",
        features: ["Bocal de alimentação largo", "Sistema de ventilação para limpeza", "Estrutura em aço"]
      },
      { 
        id: "atomizador-costal",
        name: "Atomizador Costal Matsuyama 14L", 
        specs: ["Tanque: 14 Litros", "Alcance: 12 Metros", "Motor: 2 Tempos"],
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_701515-MLU73339243798_122023-F.webp",
        fullDescription: "Atomizador costal motorizado para aplicação de defensivos agrícolas. Leve e potente, com grande alcance de pulverização.",
        features: ["Tanque resistente a químicos", "Alças acolchoadas", "Fácil arranque"]
      }
    ]
  },
  {
    id: "logistics",
    title: "Logística e Camiões",
    description: "Camiões e equipamentos para transporte de carga.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1000&auto=format&fit=crop", 
    items: [
      { 
        id: "camiao-basculante-howo",
        name: "Camião Basculante HOWO 6x4", 
        specs: ["Motor: 371HP", "Caixa: 10 Velocidades", "Carga: 25 Ton"],
        image: "http://www.sinotrukgroup.com.cn/data/attachment/201806/28/ef6bcc7bb57e3d04949f239c30057653.jpg",
        fullDescription: "O HOWO 6x4 é o camião basculante mais robusto da categoria. Ideal para transporte de minério, areia e pedra em terrenos difíceis.",
        features: ["Eixos reforçados", "Cabine espaçosa com cama", "Baixo consumo de combustível"]
      },
      { 
        id: "empilhadeira-toyota-25",
        name: "Empilhadeira Toyota 2.5T", 
        specs: ["Capacidade: 2500 kg", "Torre: Triplex 4.5m", "Combustível: Diesel"],
        image: "https://www.lamorim.com/wp-content/uploads/2023/12/toyota-25tons-empilhadeira-combustao-jpg.webp",
        fullDescription: "Empilhadeira Toyota a diesel, sinônimo de durabilidade e eficiência operacional. Perfeita para armazéns e pátios de carga.",
        features: ["Sistema SAS de estabilidade", "Motor industrial Toyota", "Ergonomia superior"]
      },
      { 
        id: "camiao-grua-xcmg",
        name: "Camião Grua XCMG 25T", 
        specs: ["Capacidade Grua: 25T", "Lança: 40m", "Chassi: 6x4"],
        image: "https://img.linemedia.com/img/s/construction-equipment-truck-crane-XCMG-QY25K5C---1768205396366352931_big--26011210091782733900.jpg",
        fullDescription: "Guindaste sobre caminhão XCMG de 25 toneladas. Alta mobilidade e capacidade de içamento para montagens industriais e construção civil.",
        features: ["Sistema hidráulico preciso", "Computador de bordo seguro", "Patolas de ampla abertura"]
      },
      { 
        id: "semi-reboque-plataforma",
        name: "Semi-Reboque Plataforma 40 Pés", 
        specs: ["Eixos: 3 Eixos", "Carga: 40 Ton", "Suspensão: Mecânica"],
        image: "https://image.made-in-china.com/155f0j00KEGoOjqFMCpS/3-Axle-40t-45t-40-Foot-Hydraulic-Drop-Deck-Low-Bed-Semi-Trailer-Truck-Trailer.webp",
        fullDescription: "Reboque plataforma (Flatbed) de 3 eixos para transporte de contentores e carga geral. Estrutura em aço de alta resistência.",
        features: ["Travões ABS", "Pneus radiais", "Twist locks para contentores"]
      }
    ]
  }
];

export const AI_SYSTEM_INSTRUCTION = `Você é o Assistente Executivo Inteligente da SANCHO – Importações & Exportações LDA.

**Sua Identidade:**
- Nome: Assistente Virtual SANCHO.
- Empresa: SANCHO – Importações & Exportações LDA.
- Localização: Cidade de Maputo, Bairro Alto Maé, Avenida Eduardo Mondlane N°3112 1°Andar.
- Contatos: +258 87 422 8160 | info@sanchotrading.com.

**Seu Propósito:**
Auxiliar clientes interessados em importação de máquinas pesadas, equipamentos industriais, soluções agrícolas e logística em Moçambique.

**Diretrizes de Comportamento:**
1. **Tom de Voz:** Profissional, confiante, cordial e direto. Use Português formal, adequado ao ambiente corporativo de Moçambique.
2. **Sobre Preços:** Evite dar preços exatos fixos, pois variam com câmbio e taxas. Indique faixas estimadas se souber, mas **SEMPRE** recomende o uso do "Simulador de Cotação" no site ou contato via WhatsApp para uma proforma oficial.
3. **Sobre Produtos:** Destaque marcas como SANY, SDLG, Toyota, Komatsu, etc.
4. **Logística:** Mencione que a SANCHO cuida de todo o processo (DDP - Delivered Duty Paid), incluindo desembaraço aduaneiro.
5. **Limitações:** Se não souber uma resposta técnica específica, oriente o cliente a clicar no botão do WhatsApp para falar com um especialista humano.

**Contexto de Serviços:**
- Máquinas de Construção: Escavadeiras, pás carregadeiras, betoneiras, compactadores.
- Agricultura: Tratores, arados, sistemas de irrigação.
- Indústria: Geradores (20kVA a 500kVA), compressores, motores.
- Logística: Transporte rodoviário, desembaraço aduaneiro, carga marítima e aérea.

Responda de forma concisa e útil.`;