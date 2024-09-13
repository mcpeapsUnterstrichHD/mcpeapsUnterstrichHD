"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface TimeLineCardProps {
  TimeLineImage: string;
  TimeLineImageAlt: string;
  TimeLineImageFallback: string;
  TimeLineTitle: string;
  TimeLineBadges: string[];
  children: React.ReactNode;
}

const TimeLineCard: React.FC<TimeLineCardProps> = ({
  TimeLineImage,
  TimeLineImageAlt,
  TimeLineImageFallback,
  TimeLineTitle,
  TimeLineBadges,
  children,
}) => {
  return (
    <Card className="bg-transparent backdrop-blur-sm">
      <CardHeader>
        <div className="flex flex-row items-center justify-between gap-1">
          <Avatar>
            <AvatarImage src={TimeLineImage} alt={TimeLineImageAlt} />
            <AvatarFallback>{TimeLineImageFallback}</AvatarFallback>
          </Avatar>
          <CardTitle>{TimeLineTitle}</CardTitle>
        </div>
        <CardDescription>
          <div className="flex flex-wrap gap-2">
            {TimeLineBadges.map((badge, index) => (
              <Badge key={index} variant="default">
                {badge}
              </Badge>
            ))}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default TimeLineCard;
