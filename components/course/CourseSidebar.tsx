"use client";

import { PlayCircle, ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface Lesson {
  id: string;
  title: string;
  duration: string;
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

interface CourseSidebarProps {
  course: Course;
  activeLesson: string;
  setActiveLesson: (id: string) => void;
}

// Course header component
const CourseHeader = ({ title }: { title: string }) => (
  <div className="p-4 border-b border-gray-200 dark:border-gray-800">
    <h2 className="text-lg font-bold">{title}</h2>
  </div>
);

// Individual lesson item component
const LessonItem = ({ 
  lesson, 
  isActive, 
  onClick 
}: { 
  lesson: Lesson; 
  isActive: boolean; 
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={cn(
      "w-full flex items-center p-3 pl-6 text-left gap-3",
      isActive 
        ? "bg-teal-100 dark:bg-teal-900/20 border-l-4 border-teal-500" 
        : "hover:bg-gray-100 dark:hover:bg-gray-800"
    )}
  >
    <div className="flex items-center gap-2 flex-1">
      <PlayCircle className="h-4 w-4 flex-shrink-0" />
      <span className="text-sm">{lesson.title}</span>
    </div>
    <span className="text-xs text-gray-500 dark:text-gray-400">
      {lesson.duration}
    </span>
  </button>
);

// Course module component
const CourseModule = ({ 
  module, 
  isExpanded, 
  onToggle,
  activeLesson,
  setActiveLesson
}: { 
  module: Module; 
  isExpanded: boolean; 
  onToggle: () => void;
  activeLesson: string;
  setActiveLesson: (id: string) => void;
}) => (
  <div className="mb-2">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      <span className="font-medium text-sm">{module.title}</span>
      {isExpanded ? (
        <ChevronDown className="h-4 w-4" />
      ) : (
        <ChevronRight className="h-4 w-4" />
      )}
    </button>
    
    {isExpanded && (
      <div className="space-y-1">
        {module.lessons.map((lesson) => (
          <LessonItem
            key={lesson.id}
            lesson={lesson}
            isActive={activeLesson === lesson.id}
            onClick={() => setActiveLesson(lesson.id)}
          />
        ))}
      </div>
    )}
  </div>
);

// Main sidebar component
export const CourseSidebar = ({ 
  course,
  activeLesson,
  setActiveLesson
}: CourseSidebarProps) => {
  const [expandedModules, setExpandedModules] = useState<string[]>(
    course.modules.map(m => m.id) // Expand all modules by default
  );

  const toggleModule = (moduleId: string) => {
    setExpandedModules(prev => 
      prev.includes(moduleId)
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  return (
    <div className="w-72 flex-shrink-0 bg-white dark:bg-black border-r border-black/30 dark:border-gray-800 h-full overflow-y-auto">
      <CourseHeader title={course.title} />
      
      <div className="overflow-auto max-h-[calc(100vh-150px)]">
        <div className="py-2">
          {course.modules.map((module) => (
            <CourseModule
              key={module.id}
              module={module}
              isExpanded={expandedModules.includes(module.id)}
              onToggle={() => toggleModule(module.id)}
              activeLesson={activeLesson}
              setActiveLesson={setActiveLesson}
            />
          ))}
        </div>
      </div>
    </div>
  );
}; 