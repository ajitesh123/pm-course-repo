"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  PlayCircle,
  ChevronLeft,
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import { MediaEmbed } from "@/components/MediaEmbed";
import { cn } from "@/lib/utils";
import { CourseSidebar } from "@/components/course/CourseSidebar";

type MediaEmbedType = "loom" | "youtube" | "iframe" | "toughtongue" | "placeholder";

interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoUrl: string;
  mediaType: MediaEmbedType;
  description?: string;
}

interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

interface Course {
  title: string;
  modules: Module[];
}

// PM Interview Prep Course Data
const courseData: Course = {
  title: "The Ultimate PM Interview Prep Course",
  modules: [
    {
      id: "product-design",
      title: "Product Design & Strategy",
      lessons: [
        {
          id: "intro-product-design",
          title: "Introduction to Product Design Questions",
          duration: "8:45",
          videoUrl: "https://www.youtube.com/watch?v=CkhXgec-iHI",
          mediaType: "youtube",
          description: "Learn the framework for answering product design questions effectively"
        },
        {
          id: "favorite-product",
          title: "Answering 'What's Your Favorite Product?'",
          duration: "12:30",
          videoUrl: "https://www.youtube.com/watch?v=CkhXgec-iHI",
          mediaType: "youtube",
          description: "Master this common PM interview question with real examples"
        },
        {
          id: "ai-practice-product",
          title: "AI Practice: Favorite Product Question",
          duration: "Interactive",
          videoUrl: "https://app.toughtongueai.com/embed/677e7676de365dba3af0055a?bg=black&skipPrecheck=true",
          mediaType: "toughtongue",
          description: "Practice with our AI interviewer and get real-time feedback"
        },
        {
          id: "design-new-product",
          title: "Design a New Product Framework",
          duration: "15:00",
          videoUrl: "https://www.youtube.com/watch?v=CkhXgec-iHI",
          mediaType: "youtube",
          description: "Step-by-step approach to designing products from scratch"
        }
      ]
    },
    {
      id: "analytical-metrics",
      title: "Analytical & Metrics",
      lessons: [
        {
          id: "metrics-framework",
          title: "Metrics Framework for PMs",
          duration: "10:15",
          videoUrl: "https://www.youtube.com/watch?v=CkhXgec-iHI",
          mediaType: "youtube",
          description: "Understanding and defining success metrics"
        },
        {
          id: "root-cause-analysis",
          title: "Root Cause Analysis",
          duration: "9:30",
          videoUrl: "https://www.youtube.com/watch?v=CkhXgec-iHI",
          mediaType: "youtube",
          description: "Diagnose metric drops and performance issues"
        },
        {
          id: "ai-practice-metrics",
          title: "AI Practice: Metrics Deep Dive",
          duration: "Interactive",
          videoUrl: "https://app.toughtongueai.com/embed/677e5dbd261d3f3e3803b968?bg=black&skipPrecheck=true",
          mediaType: "toughtongue",
          description: "Practice analyzing metrics with our AI interviewer"
        }
      ]
    },
    {
      id: "behavioral",
      title: "Behavioral & Leadership",
      lessons: [
        {
          id: "star-method",
          title: "Mastering the STAR Method",
          duration: "7:45",
          videoUrl: "https://www.youtube.com/watch?v=CkhXgec-iHI",
          mediaType: "youtube",
          description: "Structure your behavioral answers effectively"
        },
        {
          id: "leadership-stories",
          title: "Crafting Leadership Stories",
          duration: "11:00",
          videoUrl: "https://www.youtube.com/watch?v=CkhXgec-iHI",
          mediaType: "youtube",
          description: "Showcase your PM leadership experience"
        },
        {
          id: "ai-practice-behavioral",
          title: "AI Practice: Behavioral Questions",
          duration: "Interactive",
          videoUrl: "https://app.toughtongueai.com/embed/67b0248abc39997a6c6a4cc7?bg=black&skipPrecheck=true",
          mediaType: "toughtongue",
          description: "Practice behavioral questions with personalized feedback"
        }
      ]
    }
  ]
};

// Helper function to get all lessons in a flat array
const getAllLessons = (course: Course): Lesson[] => {
  return course.modules.flatMap(module => module.lessons);
};

// Course content component
const CourseContent = ({
  lesson,
  onPrevious,
  onNext,
  module
}: {
  lesson: Lesson;
  onPrevious: () => void;
  onNext: () => void;
  module: Module;
}) => {
  return (
    <div className="flex-1 overflow-auto p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            onClick={onPrevious}
            className="md:hidden"
            aria-label="Previous lesson"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={onPrevious}
            className="hidden md:flex"
          >
            Previous
          </Button>

          <h1 className="text-xl md:text-2xl font-bold text-center">{lesson.title}</h1>

          <Button
            variant="ghost"
            size="icon"
            onClick={onNext}
            className="md:hidden"
            aria-label="Next lesson"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={onNext}
            className="hidden md:flex"
          >
            Next
          </Button>
        </div>

        <MediaEmbed
          type={lesson.mediaType}
          url={lesson.videoUrl}
          title={lesson.title}
          aspectRatio="16:9"
        />

        <div className="prose dark:prose-invert max-w-none">
          {lesson.description && (
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Lesson Overview</h3>
              <p className="text-lg">{lesson.description}</p>
            </div>
          )}
          
          {lesson.mediaType === "toughtongue" && (
            <div className="mt-6 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">AI Practice Session</h3>
              <p>
                This is an interactive AI practice session. Click "Start Conversation" to practice with our AI interviewer. 
                You'll receive real-time feedback on your answers, communication style, and areas for improvement.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function CourseClient() {
  const allLessons = getAllLessons(courseData);
  const [activeLesson, setActiveLesson] = useState(allLessons[0].id);
  const [showSidebar, setShowSidebar] = useState(false);

  // Find current lesson and its module
  let currentLesson: Lesson | undefined;
  let currentModule: Module | undefined;
  
  for (const module of courseData.modules) {
    const lesson = module.lessons.find(l => l.id === activeLesson);
    if (lesson) {
      currentLesson = lesson;
      currentModule = module;
      break;
    }
  }
  
  if (!currentLesson || !currentModule) {
    currentLesson = allLessons[0];
    currentModule = courseData.modules[0];
  }

  const currentIndex = allLessons.findIndex(l => l.id === activeLesson);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setActiveLesson(allLessons[currentIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (currentIndex < allLessons.length - 1) {
      setActiveLesson(allLessons[currentIndex + 1].id);
    }
  };

  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden relative">
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 left-2 z-50 md:hidden"
        onClick={() => setShowSidebar(!showSidebar)}
        aria-label={showSidebar ? "Close menu" : "Open menu"}
      >
        {showSidebar ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </Button>

      {/* Sidebar */}
      <div className={cn(
        "absolute md:relative inset-0 z-40 md:z-auto",
        showSidebar ? "block" : "hidden md:block"
      )}>
        <CourseSidebar
          course={courseData}
          activeLesson={activeLesson}
          setActiveLesson={(id) => {
            setActiveLesson(id);
            setShowSidebar(false); // Close sidebar on mobile when lesson is selected
          }}
        />
      </div>

      {/* Content */}
      <CourseContent
        lesson={currentLesson}
        onPrevious={handlePrevious}
        onNext={handleNext}
        module={currentModule}
      />
    </div>
  );
} 