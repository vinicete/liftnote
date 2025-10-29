import { NextLogo } from "./next-logo";
import { SupabaseLogo } from "./supabase-logo";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <div className="flex flex-col gap-16 items-center">
      
      <div className="w-screen flex flex-col gap-2 px-10">
        <h1 className="text-2xl">Welcome, mario!</h1>
        <div className="flex justify-between items-center">
          <p>Your progress:</p>
          <Button variant={"outline"}>Workout today</Button>
        </div>
      </div>
      
    </div>
  );
}
