export type MediaEmbedType = "loom" | "youtube" | "iframe" | "toughtongue" | "placeholder";

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoUrl: string;
  mediaType: MediaEmbedType;
  description?: string;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  title: string;
  modules: Module[];
} 