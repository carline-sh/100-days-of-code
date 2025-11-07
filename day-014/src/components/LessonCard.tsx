import type { Lesson } from "../data/lessons";

type LessonCardProps = {
  lesson: Lesson;
  onComplete: () => void;
  completed?: boolean;
};

export const LessonCard = ({
  lesson,
  onComplete,
  completed,
}: LessonCardProps) => {
  return (
    <div className="border border-neutral-800 rounded-md p-4 space-y-4">
      <h2 className="text-white text-2xl font-bold">{lesson.title}</h2>
      <p className="text-neutral-400">{lesson.content}</p>
      <button
        onClick={onComplete}
        disabled={completed}
        className={`px-4 py-2 rounded-md ${
          completed
            ? "bg-gray-5 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {completed ? "Done ✅" : "Mark as done"}
      </button>
    </div>
  );
};
