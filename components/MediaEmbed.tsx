"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { PlayCircle } from "lucide-react";

type MediaEmbedType = "loom" | "youtube" | "iframe" | "toughtongue" | "placeholder";

interface MediaEmbedProps {
  type?: MediaEmbedType;
  url?: string;
  title?: string;
  aspectRatio?: "16:9" | "4:3" | "1:1";
  height?: string;
  allow?: string;
  frameBorder?: string;
}

export function MediaEmbed({
  type = "placeholder",
  url = "",
  title = "Video content",
  aspectRatio = "16:9",
  height,
  allow = "",
  frameBorder = "0",
}: MediaEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Calculate aspect ratio class
  const aspectRatioClass = {
    "16:9": "aspect-video",
    "4:3": "aspect-[4/3]",
    "1:1": "aspect-square",
  }[aspectRatio];

  // Render appropriate embed based on type
  const renderEmbed = () => {
    switch (type) {
      case "youtube":
        // Handle YouTube embed
        const youtubeId = url.includes("youtu.be") 
          ? url.split("/").pop() 
          : url.includes("?v=") 
            ? new URLSearchParams(url.split("?")[1]).get("v") 
            : url;
        
        return (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title={title}
            allowFullScreen
            className="w-full h-full border-0"
            onLoad={() => setIsLoading(false)}
          />
        );
      
      case "loom":
        // Handle Loom embed
        return (
          <iframe
            src={url.includes("/share/") ? url : `https://www.loom.com/embed/${url}`}
            title={title}
            allowFullScreen
            className="w-full h-full border-0"
            onLoad={() => setIsLoading(false)}
          />
        );
      
      case "toughtongue":
        // ToughTongueAI specific embed
        return (
          <iframe
            src={url}
            title={title}
            width="100%"
            height={height || "700px"}
            frameBorder={frameBorder}
            allow="microphone; camera; display-capture"
            className="w-full border-0"
            onLoad={() => setIsLoading(false)}
          />
        );
      
      case "iframe":
        // Generic iframe embed
        return (
          <iframe
            src={url}
            title={title}
            allowFullScreen
            className="w-full h-full border-0"
            onLoad={() => setIsLoading(false)}
            height={height}
            allow={allow}
            frameBorder={frameBorder}
          />
        );
      
      case "placeholder":
      default:
        // Placeholder for when no content is provided
        return (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800">
            <PlayCircle className="h-16 w-16 text-gray-400" />
            <p className="mt-4 text-gray-500">Video or interactive content will be displayed here</p>
            <p className="text-sm text-gray-400 mt-2">Supports Loom, YouTube, or custom iframes</p>
          </div>
        );
    }
  };

  return (
    <Card className="w-full overflow-hidden">
      <CardContent className={`p-0 ${type === "toughtongue" ? "" : aspectRatioClass}`}>
        {renderEmbed()}
        {isLoading && type !== "placeholder" && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        )}
      </CardContent>
    </Card>
  );
} 