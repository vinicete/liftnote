import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WorkoutSelect() {
  const workouts = [
    { id: "w1", name: "Push Day" },
    { id: "w2", name: "Pull Day" },
    { id: "w3", name: "Legs + Core" },
  ];

  return (
    <div className="w-full flex flex-col gap-6 px-10 py-10">
      <h1 className="text-2xl font-semibold">Select your workout</h1>

      <div className="flex gap-3">
        <Link href="/workoutcreate"><Button>Create workout</Button></Link>
        <Button variant="outline">Quick workout</Button>
      </div>

      <div className="mt-2">
        <h2 className="text-lg font-medium mb-2">Your workouts</h2>
        <ul className="divide-y divide-gray-200 rounded-md border border-gray-200 ">
          {workouts.map((w) => (
            <li key={w.id} className="flex items-center justify-between px-4 py-3 hover:bg-muted/60">
              <span className="text-sm">{w.name}</span>
              <Button size="sm" variant="outline">Select</Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

