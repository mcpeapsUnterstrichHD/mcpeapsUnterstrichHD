import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import Link from "next/link";

interface ProjektCardProps {
  ProjektImage: string;
  ProjektImageAlt: string;
  ProjektImageFallback: string;
  ProjektTitle: string;
  ProjektDescription: string;
  ProjektContent: string;
  ProjektLink: string;
}

const ProjektCard: React.FC<ProjektCardProps> = ({
  ProjektImage,
  ProjektImageAlt,
  ProjektImageFallback,
  ProjektTitle,
  ProjektDescription,
  ProjektContent,
  ProjektLink,
}) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-row items-center gap-4 justify-center">
          <div>
            <Avatar>
              <AvatarImage src={ProjektImage} alt={ProjektImageAlt} />
              <AvatarFallback>{ProjektImageFallback}</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col">
            <CardTitle>{ProjektTitle}</CardTitle>
            <CardDescription>{ProjektDescription}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p>{ProjektContent}</p>
      </CardContent>
      <CardFooter>
        <Link href={ProjektLink}><p>Hier geht es zum Projekt</p></Link>
      </CardFooter>
    </Card>
  );
};

export default ProjektCard;
