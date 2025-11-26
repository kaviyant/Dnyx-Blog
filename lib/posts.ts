export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
};

export const posts: Post[] = [
  {
    slug: 'royal-enfield-announces-new-model',
    title: 'Royal Enfield Announces New Model',
    excerpt: 'A new RE bike is coming with upgraded engine…',
    content: `Royal Enfield has revealed its upcoming motorcycle featuring a redesigned engine, improved suspension, and better road performance. The new model promises a smoother ride, better fuel efficiency, and a refreshed modern look while keeping the classic RE style alive.`
  },
  {
    slug: 'electric-bikes-gaining-popularity',
    title: 'Electric Bikes Gaining Popularity',
    excerpt: 'EV bikes are making noise in the market…',
    content: `Electric bikes are becoming a top choice due to fuel savings and eco-friendly benefits. Many companies are introducing budget-friendly EV models with fast charging, lightweight batteries, and better range. EV bikes are expected to dominate the market in the coming years.`
  },
  {
    slug: '5-easy-bike-maintenance-tips',
    title: '5 Easy Bike Maintenance Tips',
    excerpt: 'Keep your bike running smoothly with these tips…',
    content: `Keeping your bike in good condition is simple with regular care. Lubricate the chain, check tire pressure, inspect brakes, clean the air filter, and schedule periodic servicing. These small steps ensure better performance and a longer bike lifespan.`
  }
];