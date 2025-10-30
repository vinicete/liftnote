"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

type ExerciseCardProps = {
  className?: string;
};

export function ExerciseCard({ className }: ExerciseCardProps) {
  return (
    <Card className={className}>
      <CardContent className="grid gap-4 mt-6">
        <div className="grid gap-2">
          <Label htmlFor="exercise">Exercise name</Label>
          <Input id="exercise" placeholder="Bench Press" className="text-sm" />
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="grid gap-2">
            <Label htmlFor="series">Series</Label>
            <Input id="series" type="number" min={1} placeholder="3" className="text-sm" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="reps">Reps</Label>
            <Input id="reps" type="number" min={1} placeholder="10" className="text-sm" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input id="weight" type="number" min={0} step="0.5" placeholder="60" className="text-sm" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-row gap-2">
        <Button>Add</Button>
        <Button variant="outline">Edit</Button>
      </CardFooter>
    </Card>
  );
}


