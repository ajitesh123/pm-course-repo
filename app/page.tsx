import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, MessageSquare, Clock, FileText, LayoutPanelTop, Globe, User, BookOpen, Mic, Video } from "lucide-react";
import { FeatureCard } from "../components/FeatureCard";

// Header component
const Header = () => {
  return (
    <>
      <h1 className="text-4xl font-bold">The Ultimate PM Interview Prep Course</h1>
      <p className="text-xl text-center sm:text-left max-w-2xl">
        Master PM interviews with AI-powered practice scenarios and expert guidance from an ex-Google PM
      </p>
    </>
  );
};

// Course highlights component
const CourseHighlights = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
      <FeatureCard 
        title="30+ Video Lessons" 
        description="Bite-sized video lessons covering every aspect of PM interviews" 
        icon={Video} 
      />
      <FeatureCard 
        title="35 AI Practice Scenarios" 
        description="Practice with voice AI that simulates real PM interview questions" 
        icon={Mic} 
      />
      <FeatureCard 
        title="100+ Page Guidebook" 
        description="Comprehensive guide with concepts, frameworks, and real examples" 
        icon={BookOpen} 
      />
    </div>
  );
};

// Instructor section component
const InstructorSection = () => {
  return (
    <div className="w-full max-w-5xl">
      <Card className="p-6">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl flex items-center gap-2">
            <User className="h-6 w-6" />
            Meet Your Instructor
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-lg font-medium">Ex-Google PM | CTO & Co-founder of TapTang AI</p>
          <p className="text-gray-600 dark:text-gray-300">
            With extensive experience conducting hundreds of PM interviews at Google and startups, 
            I bring real-world insights to help you succeed. Having been on both sides of the interview table, 
            I know exactly what hiring managers look for and how to help you stand out.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-green-600 dark:text-green-400">✓ Google PM Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-green-600 dark:text-green-400">✓ 100s of Interviews Conducted</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-green-600 dark:text-green-400">✓ Startup Founder</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Course modules component
const CourseModules = () => {
  const modules = [
    {
      title: "Product Design & Strategy",
      description: "Master product design questions, strategy frameworks, and how to approach ambiguous problems"
    },
    {
      title: "Analytical & Metrics",
      description: "Learn to define success metrics, analyze data, and make data-driven product decisions"
    },
    {
      title: "Technical & System Design",
      description: "Understand technical concepts, API design, and how to work effectively with engineering teams"
    },
    {
      title: "Behavioral & Leadership",
      description: "Prepare for behavioral questions using STAR method and demonstrate PM leadership qualities"
    },
    {
      title: "Estimation & Prioritization",
      description: "Master market sizing, feature prioritization frameworks, and resource allocation"
    },
    {
      title: "Cross-functional Collaboration",
      description: "Learn to navigate stakeholder management, influence without authority, and drive consensus"
    }
  ];

  return (
    <div className="w-full max-w-5xl">
      <h2 className="text-2xl font-semibold mb-6">Course Modules - Master Every PM Interview Type</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {modules.map((module, index) => (
          <Card key={index} className="p-0">
            <CardContent className="p-5">
              <h3 className="text-lg font-medium mb-2">{module.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{module.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

// Why this course component
const WhyThisCourse = () => {
  return (
    <div className="w-full max-w-5xl">
      <h2 className="text-2xl font-semibold mb-4">Why This Course?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-0">
          <CardContent className="p-4">
            <MessageSquare className="h-8 w-8 mb-2 text-blue-600 dark:text-blue-400" />
            <h3 className="font-medium mb-1">Voice AI Practice</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Practice anytime with AI interviewers that adapt to your responses
            </p>
          </CardContent>
        </Card>
        <Card className="p-0">
          <CardContent className="p-4">
            <Sparkles className="h-8 w-8 mb-2 text-purple-600 dark:text-purple-400" />
            <h3 className="font-medium mb-1">Real-time Feedback</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Get instant feedback on your answers and communication style
            </p>
          </CardContent>
        </Card>
        <Card className="p-0">
          <CardContent className="p-4">
            <Clock className="h-8 w-8 mb-2 text-green-600 dark:text-green-400" />
            <h3 className="font-medium mb-1">Self-paced Learning</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Learn at your own pace with 24/7 access to all course materials
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// CTA buttons component
const CTAButtons = () => {
  return (
    <div className="flex gap-4 items-center flex-col sm:flex-row mt-6">
      <Button 
        variant="default" 
        asChild 
        className="rounded-full bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
      >
        <a href="/course">Start Learning Now</a>
      </Button>
      <Button 
        variant="outline" 
        asChild 
        className="rounded-full border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
      >
        <a href="/course">Preview Course Content</a>
      </Button>
    </div>
  );
};

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-12 gap-4 sm:p-12 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Header />
        <CourseHighlights />
        <InstructorSection />
        <CourseModules />
        <WhyThisCourse />
        <CTAButtons />
      </main>
    </div>
  );
}
