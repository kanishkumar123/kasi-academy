export type PhonicsLevel = {
  level: number;
  name: string;
  description: string;
};

export const phonicsLevels: PhonicsLevel[] = [
  {
    level: 1,
    name: "First Sounds",
    description: "Letter sounds, blending and simple three-letter words.",
  },
  {
    level: 2,
    name: "Building Words",
    description: "Digraphs, blends and short sentences with confidence.",
  },
  {
    level: 3,
    name: "Fluent Reading",
    description: "Longer words, comprehension and expressive reading aloud.",
  },
  {
    level: 4,
    name: "Certified Reader",
    description: "Independent reading with a certificate to mark the milestone.",
  },
];
