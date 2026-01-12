"use client"
import { useTranslations } from "next-intl";
import { contactDetails } from "@/lib/contact";
import {
  educationItems,
  experienceItems,
  skillItems,
  skillCategories,
  sortByEndDate
} from "@/lib/cv-data";


export default function CVATSPage() {
  const t = useTranslations();


  // Sort education and experience by date
  const sortedEducation = sortByEndDate(
    educationItems.filter(e => e.key !== "looking") // Exclude "looking for apprenticeship" for ATS
  );
  const sortedExperience = sortByEndDate(experienceItems);

  return (
    <div className="ats-cv">


      {/* Header */}
      <h1>{t("Aboutme.name")}</h1>
      <div className="text-foreground subtitle">{t("Cv.about.title")}</div>

      {/* Contact Info - single line for ATS */}
      <div className="contact-info">
        <span>{contactDetails.email.display}</span>
        <span>|</span>
        <span>{contactDetails.telephone.display}</span>
        <span>|</span>
        <span>{contactDetails.address.street}, {contactDetails.address.zip} {t(contactDetails.address.city)}, {t(contactDetails.address.country)}</span>
        <span>|</span>
        <span>{t("Cv.about.birthday")}: 06.06.2003</span>
      </div>

      {/* Education */}
      <h2>{t("Cv.education.title")}</h2>
      {sortedEducation.map((edu) => {
        // Format dates for ATS (MM/YYYY - MM/YYYY)
        const formatDate = (d: string) => {
          const parts = d.split(".");
          if (parts.length === 2) return `${parts[0]}/${parts[1]}`;
          if (parts.length === 3) return `${parts[1]}/${parts[2]}`;
          return d;
        };
        const dateRange = `${formatDate(edu.startdate)} – ${formatDate(edu.enddate)}`;

        // Get the description, converting bullet points to plain text
        const description = t(edu.descriptionKey).replace(/[•]/g, "-");

        return (
          <div key={edu.key} className="entry">
            <div className="entry-header">
              <span className="entry-title">{t(edu.nameKey)}</span>
              <span className="entry-date">{dateRange}</span>
            </div>
            <p className="entry-description">{description}</p>
          </div>
        );
      })}

      {/* Experience */}
      <h2>{t("Cv.experience.title")}</h2>
      {sortedExperience.map((exp) => {
        // Format dates for ATS
        const formatDate = (d: string) => {
          const parts = d.split(".");
          if (parts.length === 2) return `${parts[0]}/${parts[1]}`;
          if (parts.length === 3) return `${parts[1]}/${parts[2]}`;
          return d;
        };
        const dateRange = `${formatDate(exp.startdate)} – ${formatDate(exp.enddate)}`;

        // Get description and convert bullet points to plain sentences
        const description = t(exp.descriptionKey)
          .replace(/[•]/g, "")
          .replace(/\\n/g, " ")
          .trim();

        return (
          <div key={exp.key} className="entry">
            <div className="entry-header">
              <span className="entry-title">{t(exp.nameKey)}</span>
              <span className="entry-date">{dateRange}</span>
            </div>
            <p className="entry-description">{description}</p>
          </div>
        );
      })}

      {/* Skills - grouped by category for ATS */}
      <h2>{t("Cv.skills.title")}</h2>
      {skillCategories.map((cat) => {
        const catSkills = skillItems
          .filter((s) => s.category === cat.key)
          .map((s) => {
            const detailsParts: string[] = [];

            // Add experience duration
            if (s.experience) {
              const durationText = t(`Cv.skills.badges.${s.experience.type}`, { count: s.experience.count });
              detailsParts.push(durationText);
            }

            // Add badges (translated)
            if (s.badgeKeys && s.badgeKeys.length > 0) {
              const translatedBadges = s.badgeKeys
                .filter(key => key !== 'Cv.skills.badges.language') // Filter out "Language" badge
                .map(key => t(key));
              detailsParts.push(...translatedBadges);
            }

            // Add static badges
            if (s.staticBadges && s.staticBadges.length > 0) {
              detailsParts.push(...s.staticBadges);
            }

            const details = detailsParts.length > 0 ? ` (${detailsParts.join(", ")})` : "";

            return `${s.title}${details}`;
          })
          .join(", ");

        if (!catSkills) return null;

        return (
          <div key={cat.key} className="skills-category">
            <span className="skills-title">
              {t(cat.titleKey)}:{" "}
            </span>
            <span className="skills-list">{catSkills}</span>
          </div>
        );
      })}

    </div>
  );
}
