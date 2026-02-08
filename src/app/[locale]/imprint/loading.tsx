"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Scale, User, Cookie, MapPin, Mail, Phone } from "lucide-react";

export default function ImprintLoading() {
  return (
    <div className="flex flex-col gap-8 px-4 py-6 mx-auto">
      {/* Hero Section - matches page structure */}
      <section className="text-center">
        <Skeleton className="h-12 w-48 mx-auto md:h-16 md:w-64" />
      </section>

      {/* Legal Info Cards Grid - matches page structure */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* § 5 TMG Section */}
        <Card className="bg-card/50 backdrop-blur-sm animate-in fade-in duration-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Scale className="w-5 h-5 text-primary" />
              <Skeleton className="h-5 w-32" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-1 shrink-0" />
              <div className="space-y-1">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-4 w-48" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="bg-card/50 backdrop-blur-sm animate-in fade-in duration-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <User className="w-5 h-5 text-primary" />
              <Skeleton className="h-5 w-24" />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <Skeleton className="h-4 w-48" />
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <Skeleton className="h-4 w-32" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Responsible Person Section */}
      <Card className="bg-card/50 backdrop-blur-sm animate-in fade-in duration-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Scale className="w-5 h-5 text-primary" />
            <Skeleton className="h-5 w-56" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 mt-1 shrink-0" />
            <div className="space-y-1">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-4 w-48" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cookie Disclaimer Section */}
      <Card className="bg-card/50 backdrop-blur-sm animate-in fade-in duration-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Cookie className="w-5 h-5 text-primary" />
            <Skeleton className="h-5 w-40" />
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />

          {/* Technical Cookies */}
          <div className="p-4 bg-muted/30 rounded-lg space-y-2">
            <Skeleton className="h-5 w-40" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>

          {/* Third-Party Cookies */}
          <div className="p-4 bg-muted/30 rounded-lg space-y-2">
            <Skeleton className="h-5 w-48" />
            <Skeleton className="h-4 w-full" />
            <div className="space-y-1 mt-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-36" />
              <Skeleton className="h-4 w-28" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
