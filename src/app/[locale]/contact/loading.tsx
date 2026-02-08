"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, Mail, MessageSquare } from "lucide-react";

export default function ContactLoading() {
  return (
    <div className="flex flex-col gap-8 px-4 py-8 mx-auto min-h-[80vh]">
      {/* Hero Section - matches page structure */}
      <section className="text-center space-y-4">
        <Skeleton className="h-12 w-40 mx-auto md:h-16 md:w-56" />
        <div className="text-muted-foreground text-lg max-w-xl mx-auto flex items-center justify-center gap-2">
          <MessageSquare className="w-5 h-5" />
          <Skeleton className="h-5 w-64" />
        </div>
      </section>

      {/* Calendar Card - matches exact Card structure */}
      <Card className="bg-card/50 backdrop-blur-sm w-full animate-in fade-in duration-500">
        <CardHeader className="text-center pb-4">
          <CardTitle className="flex items-center justify-center gap-2 text-2xl">
            <Calendar className="w-6 h-6 text-primary" />
            <Skeleton className="h-7 w-48" />
          </CardTitle>
          <CardDescription className="flex items-center justify-center gap-2">
            <Mail className="w-4 h-4" />
            <Skeleton className="h-4 w-56" />
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Calendar embed skeleton - Safari/phone frame */}
          <div className="w-full max-w-4xl mx-auto">
            <Skeleton className="w-full h-[600px] rounded-lg" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
