"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface SkillCardProps {
  SkillImage: string;
  SkillImageAlt: string;
  SkillImageFallback: string;
  SkillTitle: string;
  SkillBadges: string[];
  Skilllevel: number;
}

const SkillCard: React.FC<SkillCardProps> = ({
  SkillImage,
  SkillImageAlt,
  SkillImageFallback,
  SkillTitle,
  SkillBadges,
  Skilllevel,
}) => {
  return (
    <Card className="bg-transparent backdrop-blur-sm">
      <CardHeader>
        <div className="flex flex-row items-center justify-between gap-1">
          <Avatar>
            <AvatarImage src={SkillImage} alt={SkillImageAlt} />
            <AvatarFallback>{SkillImageFallback}</AvatarFallback>
          </Avatar>
          <CardTitle>{SkillTitle}</CardTitle>
        </div>
        <CardDescription>
          <div className="flex flex-wrap gap-2">
            {SkillBadges.map((badge, index) => (
              <Badge key={index} variant="default">
                {badge}
              </Badge>
            ))}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Progress value={Skilllevel} />
      </CardContent>
    </Card>
  );
};

export default SkillCard;
