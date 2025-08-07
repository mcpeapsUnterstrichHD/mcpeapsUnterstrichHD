'use client';

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
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useTheme } from "next-themes";

interface SkillCardProps {
  SkillImage: string; // Full path (e.g., "/pictures/ios.png")
  SkillImageAlt: string; // Alt text for the image
  SkillImageFallback: string; // Fallback text for the avatar
  SkillTitle: string; // Title of the skill
  SkillBadges: string[]; // Array of badges for the skill
  Skilllevel: number; // Skill level as a percentage
}

const SkillCard: React.FC<SkillCardProps> = ({
  SkillImage,
  SkillImageAlt,
  SkillImageFallback,
  SkillTitle,
  SkillBadges,
  Skilllevel,
}) => {
  const { theme, systemTheme } = useTheme();
  const [imgSrc, setImgSrc] = useState(SkillImage); // State for the current image source

  // Map of images to their dark versions
  const imageMap: { [key: string]: string } = {
    '/pictures/ios.png': '/pictures/ios-dark.png',
    '/pictures/windows.png': '/pictures/windows-dark.png',
    '/pictures/ansible.png': '/pictures/ansible-dark.png',
    // Add more images here as needed
  };

  // Effect to update the image source based on the theme
  useEffect(() => {
    const darkImage = imageMap[SkillImage]; // Get dark version if exists
    const updatedImgSrc = (theme === 'dark' || (theme === 'system' && systemTheme === 'dark')) && darkImage ? darkImage : SkillImage; // Select appropriate image

    setImgSrc(updatedImgSrc); // Update the state with the new image source
  }, [SkillImage, theme, systemTheme]); // Re-run effect when SkillImage or theme changes

  return (
    <Card className="bg-transparent backdrop-blur-sm">
      <CardHeader>
        <div className="flex flex-row items-center justify-between gap-1">
          <Avatar>
            <AvatarImage src={imgSrc} alt={SkillImageAlt} />
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
