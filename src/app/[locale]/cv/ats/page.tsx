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
      <style jsx global>{`
        @media screen {
          .ats-cv {
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
            font-family: 'CaskaydiaCoveNerdFontPropo', -apple-system, BlinkMacSystemFont,
            'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
            'Droid Sans', 'Helvetica Neue', sans-serif;
            font-size: 11pt;
            line-height: 1.4;
            @apply text-base;
            @apply bg-background;
          }
        }
        @media print {
          @page {
            size: A4;
            margin: 15mm;
          }
          body {
            font-family: 'CaskaydiaCoveNerdFontPropo', -apple-system, BlinkMacSystemFont,
            'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
            'Droid Sans', 'Helvetica Neue', sans-serif !important;
            font-size: 10pt !important;
            line-height: 1.3 !important;
            @apply text-base important;
            @apply bg-background important;
          }
          .ats-cv {
            max-width: 100%;
            padding: 0;
          }
          header, nav, footer, aside,
          [data-slot="sidebar"],
          [data-slot="sidebar-wrapper"] > [data-slot="sidebar"] {
            display: none !important;
          }
          [data-slot="sidebar-wrapper"] {
            display: block !important;
            width: 100% !important;
          }
        }
        .ats-cv h1 {
          font-size: 18pt;
          margin: 0 0 4px 0;
          text-align: center;
        }
        .ats-cv .subtitle {
          font-size: 12pt;
          text-align: center;
          margin-bottom: 12px;
          @apply text-muted;
        }
        .ats-cv .contact-info {
          text-align: center;
          margin-bottom: 16px;
          font-size: 10pt;
        }
        .ats-cv .contact-info span {
          margin: 0 8px;
        }
        .ats-cv h2 {
          font-size: 12pt;
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 4px;
          margin: 16px 0 8px 0;
          text-transform: uppercase;
        }
        .ats-cv .entry {
          margin-bottom: 12px;
        }
        .ats-cv .entry-header {
          display: flex;
          justify-content: space-between;
          font-weight: bold;
          margin-bottom: 2px;
        }
        .ats-cv .entry-title {
          font-weight: bold;
        }
        .ats-cv .entry-date {
          font-weight: normal;
          white-space: nowrap;
        }
        .ats-cv .entry-description {
          margin: 0;
        }
        .ats-cv .skills-category {
          margin-bottom: 8px;
        }
        .ats-cv .skills-title {
          font-weight: bold;
          display: inline;
        }
        .ats-cv .skills-list {
          display: inline;
        }
      `}</style>

      {/* Header */}
      <h1>{t("Aboutme.name")}</h1>
      <div className="subtitle">{t("Cv.about.title")}</div>

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
