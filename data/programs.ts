import type { ImageKey } from "@/lib/images";

export type Program = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  gradeRange: string;
  accent: "navy" | "marigold" | "chalk-green";
  image: ImageKey;
  highlights: string[];
};

export const programs: Program[] = [
  {
    slug: "all-subjects",
    name: "All Subjects",
    tagline: "1st to 12th Std",
    description:
      "Every core subject on the school syllabus, covered in one place — so parents aren't juggling five different tutors for five different subjects.",
    gradeRange: "Std 1–12",
    accent: "navy",
    image: "heroClassroom",
    highlights: [
      "Covers Tamil Nadu and CBSE syllabi",
      "Small batches grouped by grade",
      "Regular tests with progress reports home",
    ],
  },
  {
    slug: "hindi",
    name: "Hindi",
    tagline: "1st to 12th Std",
    description:
      "Dedicated Hindi classes from the first alphabet to board-exam level writing and comprehension.",
    gradeRange: "Std 1–12",
    accent: "marigold",
    image: "hindiClass",
    highlights: [
      "Reading, writing and spoken Hindi",
      "Exam-pattern practice for board students",
      "Separate pace for beginners and advanced learners",
    ],
  },
  {
    slug: "phonics",
    name: "Phonics",
    tagline: "Level-based, with certificate",
    description:
      "A structured, level-by-level phonics programme for early readers — each level completed earns a certificate, so progress is visible and worth celebrating.",
    gradeRange: "Early learners",
    accent: "chalk-green",
    image: "phonicsKids",
    highlights: [
      "Clear levels from first sounds to fluent reading",
      "Certificate issued on completing each level",
      "Small groups for one-on-one attention",
    ],
  },
  {
    slug: "commerce",
    name: "Commerce",
    tagline: "11th and 12th Std",
    description:
      "Focused coaching in Accountancy, Business Studies and Economics for students preparing for board exams.",
    gradeRange: "Std 11–12",
    accent: "navy",
    image: "commerceStudy",
    highlights: [
      "Accountancy, Economics and Business Studies",
      "Board-exam focused practice papers",
      "Doubt-clearing sessions before exams",
    ],
  },
  {
    slug: "phonics-teacher-training",
    name: "Phonics Teacher Training",
    tagline: "With certificate",
    description:
      "A training programme for teachers who want to bring structured phonics instruction into their own classrooms, certified on completion.",
    gradeRange: "For teachers",
    accent: "marigold",
    image: "teacherTraining",
    highlights: [
      "Hands-on training in phonics methodology",
      "Certificate issued on completion",
      "Practical classroom techniques, not just theory",
    ],
  },
  {
    slug: "chess",
    name: "Chess",
    tagline: "All ages",
    description:
      "Chess classes that build patience, planning and pattern recognition — skills that carry straight back into schoolwork.",
    gradeRange: "All ages",
    accent: "chalk-green",
    image: "chessBoard",
    highlights: [
      "From first moves to tournament tactics",
      "Weekly practice games",
      "Builds focus and long-term thinking",
    ],
  },
];
