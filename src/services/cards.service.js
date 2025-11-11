const cards = [
  {
    slug: 'gian-carlo-avendano',
    person: {
      name: 'Gian Carlo Avendaño',
      title: 'Líder de Innovación',
      company: 'GreenWay International',
      avatarUrl: null,
    },
    brand: {
      logoUrl: './Green.png',
      theme: 'greenway',
      gradient: 'brand-135',
    },
    about:
      'Impulsamos comercio seguro con soluciones de brokeraje, análisis de mercados e innovación tecnológica. Desarrollamos estrategias digitales y herramientas que optimizan la conexión entre empresas y mercados internacionales, fortaleciendo la eficiencia, la sostenibilidad y el crecimiento global.',
    contact: {
      phone: '+1 (786) 661-0046',
      email: 'gcavendano@fastwaysas.com',
      whatsapp: '+1 786 661 0046',
      greeting:
        '¡Hola Gian Carlo! Quiero conocer las soluciones de brokeraje, análisis de mercados y tecnología de GreenWay.',
    },
    socials: {
      web: 'https://www.greenwayinter.com/',
      facebook: 'https://www.facebook.com/Fastwaysas/',
      instagram:
        'https://www.instagram.com/greenwayllc?igsh=MTRodHAzaGJqaTFuaw==',
      linkedin: 'https://es.linkedin.com/company/fastway-sas',
    },
  },
  {
    slug: 'gina-sanchez',
    person: {
      name: 'Gina Sánchez',
      title: 'Gerente General',
      company: 'GreenWay International',
      avatarUrl: null,
    },
    brand: {
      logoUrl: './Green.png',
      theme: 'greenway',
      gradient: 'brand-90',
    },
    about:
      'Lideramos operaciones internacionales confiables y sostenibles, integrando brokeraje, análisis de mercados y tecnología aplicada. A través de innovación, inteligencia comercial y soluciones digitales, conectamos empresas con nuevas oportunidades globales de manera ágil y segura.',
    contact: {
      phone: '+57 318 212 3378',
      email: 'gsanchez@fastwaysas.com',
      whatsapp: '+57 318 212 3378',
      greeting:
        'Hola Gina, me interesa conocer las soluciones tecnológicas y de brokeraje de GreenWay para expansión internacional.',
    },
    socials: {
      web: 'https://www.greenwayinter.com/',
      facebook: 'https://www.facebook.com/Fastwaysas/',
      instagram:
        'https://www.instagram.com/greenwayllc?igsh=MTRodHAzaGJqaTFuaw==',
      linkedin: 'https://es.linkedin.com/company/fastway-sas',
    },
  },
]

export function getCards() {
  return cards
}

export function getCardBySlug(slug) {
  return cards.find(c => c.slug === slug)
}
