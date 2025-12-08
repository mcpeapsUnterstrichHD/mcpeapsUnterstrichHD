"use client";

import Masonry from '@mui/lab/Masonry';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import type { ReactNode } from "react";

export enum Variants {
  projects,
  pinned_projects,
  skills,
  links
}

interface BreakpointValues {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

interface Variant {
  cols: BreakpointValues;
  gaps: BreakpointValues;
}

const projects: Variant = {
  cols: { xs: 1, sm: 2, md: 3, lg: 4, xl: 4 },
  gaps: { xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }
}

const pinned_Projects: Variant = {
  cols: { xs: 1, sm: 2, md: 3, lg: 3, xl: 3 },
  gaps: { xs: 1, sm: 2, md: 2, lg: 2, xl: 2 }
}

const skills: Variant = {
  cols: { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 },
  gaps: { xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }
}

const links: Variant = {
  cols: { xs: 1, sm: 2, md: 3, lg: 4, xl: 4 },
  gaps: { xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }
}

function getVariant(variant: Variants): Variant {
  switch (variant) {
    case Variants.projects: return projects;
    case Variants.pinned_projects: return pinned_Projects;
    case Variants.skills: return skills;
    case Variants.links: return links;
  }
}

interface MasonryGridProps {
  children: NonNullable<ReactNode>;
  className?: string;
  variant?: Variants;
}

export default function MasonryGrid({
  children,
  className = "",
  variant = Variants.projects,
}: MasonryGridProps) {
  const theme = useTheme();
  const vari = getVariant(variant);

  // Manual responsive breakpoint detection
  const isXl = useMediaQuery(theme.breakpoints.up('xl'));
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));

  // Determine columns based on current breakpoint
  let columns: number;
  let spacing: number;

  if (isXl) {
    columns = vari.cols.xl;
    spacing = vari.gaps.xl;
  } else if (isLg) {
    columns = vari.cols.lg;
    spacing = vari.gaps.lg;
  } else if (isMd) {
    columns = vari.cols.md;
    spacing = vari.gaps.md;
  } else if (isSm) {
    columns = vari.cols.sm;
    spacing = vari.gaps.sm;
  } else {
    columns = vari.cols.xs;
    spacing = vari.gaps.xs;
  }

  return (
    <Masonry
      columns={columns}
      spacing={spacing}
      sx={{ width: '100%' }}
      className={className}
      sequential
    >
      {children}
    </Masonry>
  );
}
