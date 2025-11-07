import { useEffect, useState } from "react";
import { LessonCard } from "./LessonCard";
import { lessons } from "../data/lessons";

export const Content = () => {
  const [completedIds, setCompletedIds] = useState<number[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("completedLessons");
    if (saved) setCompletedIds(JSON.parse(saved));
  }, []);

  const saveProgress = (ids: number[]) => {
    setCompletedIds(ids);
    localStorage.setItem("completedLessons", JSON.stringify(ids));
  };

  // Pick today's lesson based on date or progress
  const today = new Date().toISOString().split("T")[0];
  const todayLesson =
    lessons.find((l) => l.date === today) ||
    lessons.find((l) => !completedIds.includes(l.id));

  if (!todayLesson)
    return (
      <p className="text-center mt-10">🎉 You’ve completed all lessons!</p>
    );

  return (
    <div className="grow flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <LessonCard
          lesson={todayLesson}
          onComplete={() => saveProgress([...completedIds, todayLesson.id])}
          completed={completedIds.includes(todayLesson.id)}
        />
      </div>
    </div>
  );
};
