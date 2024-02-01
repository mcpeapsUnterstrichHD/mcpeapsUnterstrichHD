"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button, buttonVariants } from './ui/button';
import { Badge } from '@/components/ui/badge';

interface ProjektCardProps {
  ProjektImage: string;
  ProjektImageAlt: string;
  ProjektTitle: string;
  ProjektBadges: string[];
  ProjektLink: string;
  children: React.ReactNode;
}

const ProjektCard: React.FC<ProjektCardProps> = ({
  ProjektImage,
  ProjektImageAlt,
  ProjektTitle,
  ProjektBadges,
  ProjektLink,
  children,
}) => {
  return (
    <Card className='backdrop-blur-sm bg-transparent'>
      <CardHeader>
        <CardTitle>{ProjektTitle}</CardTitle>
        <CardDescription>
          {ProjektBadges.map((badge, index) => (
            <Badge key={index} variant='default'>
              {badge}
            </Badge>
          ))}
        </CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <div className='flex flex-col gap-4 items-center justify-between'>
          <img src={ProjektImage} alt={ProjektImage} className='w-[95%] h-1/2 content-center object-fill rounded-sm' />
          <Link href={ProjektLink}>
            <Button className={buttonVariants({ variant: 'link' }) + 'backdrop-blur-sm'}>
              <p className='text-primary-foreground'>Hier geht es zum Projekt</p>
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjektCard;
