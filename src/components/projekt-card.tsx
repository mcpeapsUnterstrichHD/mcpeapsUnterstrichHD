import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Link } from '@/i18n/navigation'
import type React from 'react'

import { Lens } from '@/components/ui/lens'

export interface ProjectCardProps {
  projektImage: string
  projektImageAlt: string
  projektImageBgColor: string
  projektTitle: string
  projektBadges: string[]
  projektLink: string
  children: React.ReactNode
}

const ProjektCard: React.FC<ProjectCardProps> = ({
  projektImage,
  projektImageAlt,
  projektImageBgColor,
  projektTitle,
  projektBadges,
  projektLink,
  children,
}) => {
  // Check if the link is external (starts with http:// or https://)
  const isExternalLink =
    projektLink?.startsWith('http://') || projektLink?.startsWith('https://')

  const cardContent = (
    <Card className="flex flex-col overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors cursor-pointer h-full">
      <CardHeader>
        <CardTitle>{projektTitle}</CardTitle>
        <CardDescription>
          <section className="flex flex-wrap gap-2">
            {projektBadges.map((badge) => (
              <Badge key={badge} variant="default">
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
      <CardFooter className="flex grow flex-col items-center justify-center gap-4 p-4">
        <section className={`flex items-center justify-center rounded-sm`}>
          <div className="mt-auto flex flex-col px-2">
            <Lens
              zoomFactor={2}
              lensSize={150}
              isStatic={false}
              ariaLabel="Zoom Area"
            >
              <img
                src={projektImage}
                alt={projektImageAlt}
                className={`${projektImageBgColor ? projektImageBgColor : 'bg-background'} w-full p-4 rounded-sm object-contain`}
                //width={480}
                //height={480}
              />
            </Lens>
          </div>
        </section>
      </CardFooter>
    </Card>
  )

  // For external links, use a regular anchor tag
  if (isExternalLink) {
    return (
      <a href={projektLink} target="_blank" rel="noopener noreferrer">
        {cardContent}
      </a>
    )
  }

  // For internal links, use the next-intl Link component
  return <Link href={projektLink}>{cardContent}</Link>
}

export default ProjektCard
