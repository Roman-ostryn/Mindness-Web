export type Plan = {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  highlighted?: boolean;
};

export const plans: Plan[] = [
  {
    name: 'Free',
    price: '£0',
    tagline: 'Start your wellness journey',
    features: [
      'Limited daily chat with your companion',
      'Basic companion setup',
      'Mood, journal, and habit tracking',
    ],
  },
  {
    name: 'Companion',
    price: '£1.99/mo',
    tagline: 'Your companion, every day',
    highlighted: true,
    features: [
      'Unlimited chat',
      'Companion memory across sessions',
      'Proactive check-ins & goals',
      'Basic voice replies',
    ],
  },
  {
    name: 'Companion+',
    price: '£5.99/mo',
    tagline: 'The fullest experience',
    features: [
      'Everything in Companion',
      'Premium natural voice',
      'Animated, alive avatar',
      'Deeper memory & richer chat',
      'Personal profile questionnaire',
    ],
  },
];
