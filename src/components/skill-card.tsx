"use client"
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { usePrintSafe } from "@/contexts/PrintContext";

export interface SkillCardProps {
  SkillImage: string; // Full path (e.g., "/pictures/ios.png") - used on screen
  SkillImagePrint?: string; // Optional separate image for printing (light version)
  SkillImageAlt: string; // Alt text for the image
  SkillImageFallback: string; // Fallback text for the avatar
  SkillTitle: string; // Title of the skill
  SkillBadges: string[]; // Array of badges for the skill
  Skilllevel: number; // Skill level as a percentage
  category?: string; // Optional category key for grouping
}

const SkillCard: React.FC<SkillCardProps> = ({
  SkillImage,
  SkillImagePrint,
  SkillImageAlt,
  SkillImageFallback,
  SkillTitle,
  SkillBadges,
  Skilllevel,
}) => {
  // Get printing state from context (safe version that doesn't throw)
  const isPrinting = usePrintSafe();

  // Determine which image to show based on printing state
  const hasPrintImage = !!SkillImagePrint && SkillImagePrint !== SkillImage;
  const currentImage = hasPrintImage && isPrinting ? SkillImagePrint : SkillImage;


  return (
    <Card className="bg-card/50 backdrop-blur-sm p-4">
      <CardHeader className="pb-1">
        <div className="flex flex-row items-center gap-3">
          <Avatar>
            <AvatarImage src={currentImage} alt={SkillImageAlt} />
            <AvatarFallback>{SkillImageFallback}</AvatarFallback>
          </Avatar>
          <CardTitle>{SkillTitle}</CardTitle>
        </div>
        <CardDescription>
          <div className="flex flex-wrap gap-2 mt-3">
            {SkillBadges.map((badge, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: badge text may repeat
<Badge key={index} variant="default">
                {badge}
              </Badge>
            ))}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-1 pb-2">
        <Progress value={Skilllevel} />
      </CardContent>
    </Card>
  );
};


export default SkillCard;
