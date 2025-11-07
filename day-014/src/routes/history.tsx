import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { lessons, type Lesson } from "../data/lessons";

export const Route = createFileRoute("/history")({
  component: RouteComponent,
});

function RouteComponent() {
  const [completedLessons, setCompletedLessons] = useState<Lesson[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("completedLessons");
    if (saved) {
      const completedIds: number[] = JSON.parse(saved);
      const completed = lessons.filter((l) => completedIds.includes(l.id));
      setCompletedLessons(completed);
    }
  }, []);

  return (
    <div className="grow flex flex-col items-center justify-center w-200 mx-auto">
      <div className=" bg-neutral-700 p-4 border border-neutral-800 rounded-md">
        <h1 className="text-2xl  text-white font-bold mb-4 text-center">
          History
        </h1>

        {completedLessons.length === 0 ? (
          <p className="text-center text-white">No lessons completed yet.</p>
        ) : (
          <ul className="space-y-4 border bg-neutral-600 border-neutral-800 rounded-md p-4">
            {completedLessons.map((lesson) => (
              <li
                key={lesson.id}
                className="text-white bg-neutral-600 rounded-md p-4"
              >
                <h2 className="text-lg font-semibold">{lesson.title}</h2>
                <p className="text-neutral-400">{lesson.content}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
