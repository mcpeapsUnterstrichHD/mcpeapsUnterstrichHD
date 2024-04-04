import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button, buttonVariants } from './ui/button';
import { Badge } from '@/components/ui/badge';
import  Image  from 'next/image';

interface ProjektCardProps {
  ProjektImage: string;
  ProjektImageAlt: string;
  ProjektImageBgColor:string;
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
    <Link href={ProjektLink}>
    <Card className='backdrop-blur-sm bg-transparent'>
      <CardHeader>
        <CardTitle>{ProjektTitle}</CardTitle>
        <CardDescription>
          <div className='flex flex-wrap gap-2'>
            {ProjektBadges.map((badge, index) => (
              <Badge key={index} variant='default'>
                {badge}
              </Badge>
            ))}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex flex-col gap-4 justify-between'>
          <div>{children}</div>
        </div>
      </CardContent>
      <CardFooter className='flex-grow flex flex-col gap-4 items-center justify-center p-4'>


          <div className={ProjektImageBgColor + " h-1/2 w-[95%] rounded-sm flex items-center justify-center"}>
            <Image
              src={ProjektImage}
              alt={ProjektImageAlt}
              className='object-contain rounded-sm'
              width={1280}
              height={720}
            />
          </div>
      </CardFooter>
    </Card>
    </Link>
  );
};

export default ProjektCard;
