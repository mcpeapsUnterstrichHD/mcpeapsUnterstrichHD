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
import type React from "react";

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
            <section className="flex flex-wrap gap-2">
              {ProjektBadges.map((badge, index) => (
                <Badge key={index} variant="default">
                  {badge}
                </Badge>
              ))}
            </section>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <section className="flex flex-col justify-between gap-4">
            <p>{children}</p>
          </section>
        </CardContent>
        <CardFooter className="flex flex-grow flex-col items-center justify-center gap-4 p-4">
          <section className={`${ProjektImageBgColor}flex items-center justify-center rounded-sm`}
          >
            <Image
              src={ProjektImage}
              alt={ProjektImageAlt}
              className={`${ProjektImageBgColor} rounded-sm object-contain`}
              width={480}
              height={480}
            />
          </section>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProjektCard;
