import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <div className="text-white p-4 space-y-4 mx-auto w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-blue-500">TailRain</h2>
        <p>
          TailRain is a simplified explanation of{" "}
          <a
            className="text-blue-400 hover:underline"
            target="_blank"
            href="https://tailwindcss.com/"
          >
            Tailwind CSS
          </a>
          . I got overwhelmed by the documentation of Tailwind CSS and decided
          to create a simple explanation of the most important concepts in
          frontend development.
        </p>
        <p>
          You can use TailWind CSS with any framework you want. I use{" "}
          <a
            className="text-blue-400 hover:underline"
            target="_blank"
            href="https://react.dev/"
          >
            React
          </a>{" "}
          with
          <a
            className="text-blue-400 hover:underline"
            target="_blank"
            href="https://tanstack.com/router"
          >
            TanStack Router
          </a>
          .
        </p>
      </div>
    </div>
  );
}
