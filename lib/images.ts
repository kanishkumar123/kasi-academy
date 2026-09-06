// Centralized image registry — swap the `src` URLs here for real photography
// later without touching any component markup.
export type RegisteredImage = {
  src: string;
  alt: string;
};

export const images = {
  heroClassroom: {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
    alt: "Students studying together at a classroom desk",
  },
  heroReading: {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    alt: "Child reading a book with a stack of notebooks nearby",
  },
  phonicsKids: {
    src: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop",
    alt: "Young children practicing phonics with picture cards",
  },
  commerceStudy: {
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
    alt: "Older students studying commerce subjects with a calculator and notes",
  },
  chessBoard: {
    src: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?q=80&w=1200&auto=format&fit=crop",
    alt: "Close-up of a chess board mid-game",
  },
  teacherTraining: {
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop",
    alt: "Teacher leading a training session at a whiteboard",
  },
  hindiClass: {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop",
    alt: "Notebook with handwriting practice on a wooden desk",
  },
  aboutStory: {
    src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1200&auto=format&fit=crop",
    alt: "Teacher helping a student at a desk in a bright classroom",
  },
  aboutClassroom: {
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop",
    alt: "Small group classroom setting with attentive students",
  },
  contactBuilding: {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    alt: "Exterior of a neighbourhood learning centre building",
  },
} satisfies Record<string, RegisteredImage>;

export type ImageKey = keyof typeof images;
