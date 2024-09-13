import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjektCardProps {
  ProjektImage: string;
  ProjektImageAlt: string;
  ProjektImageBgColor: string;
  ProjektTitle: string;
  ProjektBadges: string[];
  ProjektLink: string;
  children: React.ReactNode;
}

const ProjektCard: React.FC<ProjektCardProps> = ({
  ProjektImage,
  ProjektImageAlt,
  ProjektImageBgColor,
  ProjektTitle,
  ProjektBadges,
  ProjektLink,
  children,
}) => {
  return (
    <Link href={ProjektLink} legacyBehavior passHref>
      <Card className="projectCard">
        <CardHeader>
          <CardTitle>{ProjektTitle}</CardTitle>
          <CardDescription>
            <div className="flex flex-wrap gap-2">
              {ProjektBadges.map((badge, index) => (
                <Badge key={index} variant="default">
                  {badge}
                </Badge>
              ))}
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col justify-between gap-4">
            <div>{children}</div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-grow flex-col items-center justify-center gap-4 p-4">
          <div
            className={
              ProjektImageBgColor +
              "flex h-[480px] w-[480] items-center justify-center rounded-sm"
            }
          >
            <Image
              src={ProjektImage}
              alt={ProjektImageAlt}
              className={ProjektImageBgColor + " rounded-sm object-contain"}
              width={470}
              height={470}
              layout="responsive"
              objectFit="fill"
              objectPosition="center"
              priority={true}
            />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProjektCard;
