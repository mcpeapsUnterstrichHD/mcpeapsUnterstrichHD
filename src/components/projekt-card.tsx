import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, buttonVariants } from './ui/button';
import Link from "next/link";
import Image from 'next/image';
import { Badge } from "@/components/ui/badge"

interface ProjektCardProps {
  ProjektImage: string;
  ProjektImageAlt: string;
  ProjektTitle: string;
  ProjektBadge: string;
  ProjektLink: string;
  children: React.ReactNode;
}

const ProjektCard: React.FC<ProjektCardProps> = ({
  ProjektImage,
  ProjektImageAlt,
  ProjektTitle,
  ProjektBadge,
  ProjektLink,
  children,
}) => {
  return (
    <Card className='backdrop-blur-sm  bg-transparent'>
      <CardHeader>
            <CardTitle>{ProjektTitle}</CardTitle>
            <CardDescription><Badge variant= 'default'>{ProjektBadge}</Badge></CardDescription>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      <CardFooter>
        <div className='flex flex-col gap-4 items-center justify-between'>
            <Image src={ProjektImage} alt={ProjektImageAlt} width="250" height="127" />
            <Link href={ProjektLink}><Button className={buttonVariants({variant: 'link'})}><p className='text-primary-foreground'>Hier geht es zum Projekt</p></Button></Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjektCard;
