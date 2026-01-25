import { createFileRoute } from '@tanstack/react-router'
import SkillCard, { type SkillCardProps } from "@/components/skill-card";
import {
  TimeLineElementBig,
  TimeLineElementSmall,
  type TimeLineElementProps
} from "@/components/timeline-element";
import MasonryGrid, { Variants } from "@/components/MasonryGrid";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Timeline from "@mui/lab/Timeline";
import { timelineItemClasses } from "@mui/lab/TimelineItem";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  GraduationCap,
  Briefcase,
  Wrench,
  Mail,
  Phone,
  MapPin,
  Calendar
} from "lucide-react";
import { contactDetails } from "@/lib/contact";
import {
  educationItems,
  experienceItems,
  skillItems,
  skillCategories,
  sortByEndDate
} from "@/lib/cv-data";

export const Route = createFileRoute('/$locale/cv/')({
  component: CVPage,
})

function CVPage() {
  const { t } = useTranslation();

  // Transform education data with translations
  const education = useMemo(() => {
    const items: (TimeLineElementProps & { key: string })[] = educationItems.map((edu) => ({
      key: edu.key,
      TimeLineTitle: t(edu.nameKey),
      TimeLineBadges: edu.badgeKeys.map((bk) => {
        // Handle dynamic badges with parameters
        if (bk.includes("semester")) return t(bk, { semester: 6 });
        if (bk.includes("years")) return t(bk, { years: 3 });
        return t(bk);
      }),
      TimeLineImage: edu.image,
      TimeLineImageAlt: t(edu.imgAltKey),
      TimeLineImageFallback: edu.imageFallback,
      startdate: edu.startdate,
      enddate: edu.enddate,
      children: t(edu.descriptionKey),
    }));
    return sortByEndDate(items);
  }, [t]);

  // Transform experience data with translations
  const experience = useMemo(() => {
    // Note: t.raw is not standard in react-i18next like it is in next-intl
    // Use t(key, { returnObjects: true }) for arrays
    const items: (TimeLineElementProps & { key: string })[] = experienceItems.map((exp) => ({
      key: exp.key,
      TimeLineTitle: t(exp.nameKey),
      TimeLineBadges: t(exp.badgesKey, { returnObjects: true }) as string[],
      TimeLineImage: exp.image,
      TimeLineImageAlt: t(exp.imgAltKey),
      TimeLineImageFallback: exp.imageFallback,
      startdate: exp.startdate,
      enddate: exp.enddate,
      children: t(exp.descriptionKey),
    }));
    return sortByEndDate(items);
  }, [t]);

  // Transform skills data with translations
  const skills = useMemo(() => {
    const items: SkillCardProps[] = skillItems.map((skill) => {
      // Build badges from translation keys and static badges
      const badges: string[] = [
        ...skill.badgeKeys.map((bk) => t(bk)),
        ...(skill.staticBadges || []),
      ];

      // Add experience duration badge if available
      if (skill.experience) {
        const expBadge = t(`Cv.skills.badges.${skill.experience.type}`, { count: skill.experience.count });
        badges.push(expBadge);
      }

      // For screen: use darkImage if available, otherwise use normal image
      // For print: always use the light/normal image
      const screenImage = skill.darkImage || skill.image;
      const printImage = skill.darkImage ? skill.image : undefined;

      return {
        SkillTitle: skill.title,
        SkillBadges: badges,
        SkillImage: screenImage,
        SkillImagePrint: printImage,
        SkillImageAlt: skill.imageAlt,
        SkillImageFallback: skill.imageFallback,
        Skilllevel: skill.level,
        category: skill.category,
      };
    });
    return items.sort((a, b) => a.SkillTitle.localeCompare(b.SkillTitle));
  }, [t]);


  return (

    <div className="flex flex-col gap-6 px-4 py-6 mx-auto">
      {/* Header / Personal Info */}
      <Card className="bg-card/50 backdrop-blur-sm print:bg-white print:shadow-none">
        <CardHeader className="text-center pb-2">
          <h1 className="text-3xl md:text-4xl font-bold">{t("Aboutme.name")}</h1>
          <p className="text-lg text-muted-foreground">{t("Cv.about.title")}</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-1 gap-4 text-sm">
            {/* Contact Info */}
            <div className="flex flex-col gap-2">
              <a
                href={contactDetails.email.link}
                className="flex items-center gap-2 hover:text-primary transition-colors"
                target="_blank" rel="noreferrer"
              >
                <Mail className="size-4" />
                {contactDetails.email.display}
              </a>
              <a
                href={contactDetails.telephone.link}
                className="flex items-center gap-2 hover:text-primary transition-colors"
                target="_blank" rel="noreferrer"
              >
                <Phone className="size-4" />
                {contactDetails.telephone.display}
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="size-4" />
                {t("Cv.about.birthday")}: 06.06.2003
              </div>
            </div>
            {/* Address */}
            <a
              href={contactDetails.address.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-2 hover:text-primary transition-colors"
            >
              <MapPin className="size-4 mt-0.5 shrink-0" />
              <div>
                {contactDetails.address.street}<br />
                {contactDetails.address.zip} {t(contactDetails.address.city)}, {t(contactDetails.address.country)}
              </div>
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Education Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-center flex items-center justify-center gap-2 mb-4">
          <GraduationCap className="size-6 text-primary print:text-black" />
          {t("Cv.education.title")}
        </h2>

        {/* Large Timeline */}
        <Timeline position="right" className="show-timeline-big">
          {education.map((e) => (
            <TimeLineElementBig
              key={e.key}
              TimeLineTitle={e.TimeLineTitle}
              TimeLineBadges={e.TimeLineBadges}
              TimeLineImage={e.TimeLineImage}
              TimeLineImageAlt={e.TimeLineImageAlt}
              TimeLineImageFallback={e.TimeLineImageFallback}
              startdate={e.startdate}
              enddate={e.enddate}
            >
              <p>{e.children}</p>
            </TimeLineElementBig>
          ))}
        </Timeline>

        {/* Small Timeline */}
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
          className="show-timeline-small"
        >
          {education.map((e) => (
            <TimeLineElementSmall
              key={e.key}
              TimeLineTitle={e.TimeLineTitle}
              TimeLineBadges={e.TimeLineBadges}
              TimeLineImage={e.TimeLineImage}
              TimeLineImageAlt={e.TimeLineImageAlt}
              TimeLineImageFallback={e.TimeLineImageFallback}
              startdate={e.startdate}
              enddate={e.enddate}
            >
              <p>{e.children}</p>
            </TimeLineElementSmall>
          ))}
        </Timeline>
      </section>

      {/* Experience Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-center flex items-center justify-center gap-2 mb-4">
          <Briefcase className="size-6 text-primary print:text-black" />
          {t("Cv.experience.title")}
        </h2>

        {/* Large Timeline */}
        <Timeline position="right" className="show-timeline-big">
          {experience.map((ex) => (
            <TimeLineElementBig
              key={ex.key}
              TimeLineTitle={ex.TimeLineTitle}
              TimeLineBadges={ex.TimeLineBadges}
              TimeLineImage={ex.TimeLineImage}
              TimeLineImageAlt={ex.TimeLineImageAlt}
              TimeLineImageFallback={ex.TimeLineImageFallback}
              startdate={ex.startdate}
              enddate={ex.enddate}
            >
              <div>{ex.children}</div>
            </TimeLineElementBig>
          ))}
        </Timeline>

        {/* Small Timeline */}
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
          className="show-timeline-small"
        >
          {experience.map((ex) => (
            <TimeLineElementSmall
              key={ex.key}
              TimeLineTitle={ex.TimeLineTitle}
              TimeLineBadges={ex.TimeLineBadges}
              TimeLineImage={ex.TimeLineImage}
              TimeLineImageAlt={ex.TimeLineImageAlt}
              TimeLineImageFallback={ex.TimeLineImageFallback}
              startdate={ex.startdate}
              enddate={ex.enddate}
            >
              <div>{ex.children}</div>
            </TimeLineElementSmall>
          ))}
        </Timeline>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-center flex items-center justify-center gap-2 mb-4">
          <Wrench className="size-6 text-primary print:text-black" />
          {t("Cv.skills.title")}
        </h2>

        <div className="flex flex-col gap-8">
          {skillCategories.map((cat) => {
            const catSkills = skills.filter((s) => s.category === cat.key);
            if (catSkills.length === 0) return null;

            return (
              <div key={cat.key} className="break-inside-avoid">
                <h3 className="text-xl font-semibold mb-4 ml-1 opacity-80">{t(cat.titleKey)}</h3>
                <MasonryGrid variant={Variants.skills}>
                  {catSkills.map((s) => (
                    <SkillCard
                      key={s.SkillTitle}
                      SkillTitle={s.SkillTitle}
                      SkillBadges={s.SkillBadges}
                      SkillImage={s.SkillImage}
                      SkillImagePrint={s.SkillImagePrint}
                      SkillImageAlt={s.SkillImageAlt}
                      SkillImageFallback={s.SkillImageFallback}
                      Skilllevel={s.Skilllevel}
                    />
                  ))}
                </MasonryGrid>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
