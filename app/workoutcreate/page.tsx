import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { ExerciseCard } from "@/components/workouts/exercise-card";
import Link from "next/link";

export default function WorkoutCreate() {
  const workouts = [
    { id: "w1", name: "Push Day" },
    { id: "w2", name: "Pull Day" },
    { id: "w3", name: "Legs + Core" },
  ];

  return (
    <div className="w-full flex flex-col gap-6 px-10 py-10">
      <h1 className="text-2xl font-semibold">Create a Workout</h1>

      <div className="">
        <Button className="flex items-center justify-center">
          <Plus className="h-4 w-4 " />
        </Button>
      </div>

      <div className="w-full max-w-xl grid gap-4">
        <ul>
          <li>
            <ExerciseCard />
          </li>
        </ul>
      </div>

      <div className="flex justify-end">
        <Button>Save</Button>
      </div>
    </div>
  );
}

