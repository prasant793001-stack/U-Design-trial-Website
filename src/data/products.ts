export const DEMO_PRODUCTS = [
  {
    id: 1,
    name: 'AI Marketing Audit',
    price: 499,
    image: '/site-media/service-boutique-1.jpg',
    description: 'Comprehensive analysis of your current marketing setup with actionable AI recommendations.'
  },
  {
    id: 2,
    name: 'Social Media Strategy',
    price: 899,
    image: '/site-media/service-restaurant-1.jpg',
    description: 'Complete social media content calendar and engagement strategy for UAE markets.'
  },
  {
    id: 3,
    name: 'AI Content Creation',
    price: 1299,
    image: '/site-media/service-real-estate-1.jpg',
    description: 'AI-generated content packages including images, copy, and video scripts.'
  },
  {
    id: 4,
    name: 'Influencer Campaign',
    price: 1599,
    image: '/site-media/service-boutique-3.jpg',
    description: 'Strategic partnerships with UAE influencers for authentic brand promotion.'
  },
  {
    id: 5,
    name: 'Website Redesign',
    price: 2499,
    image: '/site-media/service-real-estate-2.jpg',
    description: 'Premium website redesign with AI-enhanced features and modern design.'
  },
  {
    id: 6,
    name: 'Brand Identity Package',
    price: 1999,
    image: '/site-media/service-restaurant-2.jpg',
    description: 'Complete brand identity including logo, color palette, and visual guidelines.'
  },
  {
    id: 7,
    name: 'SEO Optimization',
    price: 1799,
    image: '/site-media/service-boutique-2.jpg',
    description: 'Search engine optimization services to boost your online visibility.'
  },
  {
    id: 8,
    name: 'Custom AI Solution',
    price: 2999,
    image: '/site-media/service-real-estate-3.jpg',
    description: 'Tailored AI solutions designed specifically for your business needs.'
  }
] as const

export type Product = (typeof DEMO_PRODUCTS)[number]
export type CartItem = Product & { quantity: number }
