import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "McPeaps Unterstrich HD",
  description: "Personal website of McPeaps Unterstrich HD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
