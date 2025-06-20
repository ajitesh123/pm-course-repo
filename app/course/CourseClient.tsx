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
import ReactMarkdown from "react-markdown";
import { courseData, getAllLessons, type Lesson, type Module, type Course } from "@/app/course/components";

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
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Lesson Overview</h3>
              <div className="text-base leading-relaxed [&_ul]:ml-4 [&_ol]:ml-4 [&_li>ul]:mt-2 [&_li>ol]:mt-2 [&_li>ul]:mb-0 [&_li>ol]:mb-0">
                <ReactMarkdown
                  components={{
                    p: ({ children }) => <p className="mb-4">{children}</p>,
                    ul: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>,
                    ol: ({ children }) => <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>,
                    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
                    strong: ({ children }) => <strong className="font-semibold text-gray-900 dark:text-gray-100">{children}</strong>,
                    em: ({ children }) => <em className="italic text-gray-700 dark:text-gray-300">{children}</em>,
                    code: ({ children }) => <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>,
                    h1: ({ children }) => <h1 className="text-2xl font-bold mb-4 mt-6">{children}</h1>,
                    h2: ({ children }) => <h2 className="text-xl font-bold mb-3 mt-5">{children}</h2>,
                    h3: ({ children }) => <h3 className="text-lg font-semibold mb-2 mt-4">{children}</h3>,
                    h4: ({ children }) => <h4 className="text-base font-semibold mb-2 mt-3">{children}</h4>,
                    blockquote: ({ children }) => <blockquote className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 italic my-4">{children}</blockquote>,
                  }}
                >
                  {lesson.description}
                </ReactMarkdown>
              </div>
            </div>
          )}
          
          {lesson.mediaType === "toughtongue" && (
            <div className="mt-6 bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">AI Practice Session</h3>
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