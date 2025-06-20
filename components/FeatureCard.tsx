import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

export const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon 
}: FeatureCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md border-2 border-black/20 hover:border-primary/10">
      <CardHeader className="pb-2">
        <div className="bg-primary/10 p-3 rounded-full w-fit mb-3">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}; 