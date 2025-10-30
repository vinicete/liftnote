"use client";

import { NextLogo } from "./next-logo";
import { SupabaseLogo } from "./supabase-logo";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { useState } from "react";
import Link from "next/link";

export function Hero() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div className="flex flex-col gap-16 items-center">
      
      <div className="w-screen flex flex-col gap-2 px-10">
        <h1 className="text-2xl">Welcome, mario!</h1>
        <div className="flex justify-between items-center">
          <p>Your progress:</p>
          <Link href="/workoutselect">
            <Button variant={"outline"}>Workout today</Button>
          </Link>
        </div>
        <div className="mt-4 flex items-center justify-center">
          <Calendar selected={date} onSelect={setDate} className="max-w-sm" />
        </div>
      </div>
      
    </div>
  );
}
