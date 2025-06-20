"use client";

import { PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Lesson {
  id: string;
  title: string;
  duration: string;
}

interface Course {
  title: string;
  lessons: Lesson[];
}

interface CourseSidebarProps {
  course: Course;
  activeLesson: string;
  setActiveLesson: (id: string) => void;
}

export const CourseSidebar = ({ 
  course,
  activeLesson,
  setActiveLesson
}: CourseSidebarProps) => {
  return (
    <div className="w-72 flex-shrink-0 bg-white dark:bg-black border-r border-black/30 dark:border-gray-800 h-full overflow-y-auto">
      <div className="p-4">
        <h2 className="text-xl font-bold"></h2>
      </div>
      
      <div className="overflow-auto max-h-[calc(100vh-150px)]">
        <div className="py-4">
          <div className="space-y-1">
            {course.lessons.map((lesson) => (
              <button
                key={lesson.id}
                onClick={() => setActiveLesson(lesson.id)}
                className={cn(
                  "w-full flex items-center p-3 text-left gap-3",
                  activeLesson === lesson.id 
                    ? "bg-teal-100 dark:bg-teal-900/20 border-l-4 border-teal-500" 
                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                )}
              >
                <div className="flex items-center gap-2 flex-1">
                  <PlayCircle className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm">{lesson.title}</span>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  ({lesson.duration})
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 