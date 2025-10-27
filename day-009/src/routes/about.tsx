import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <div className="border comic-relief-regular p-4 space-y-2 border-t-0 bg-linear-to-b from-orange-200 to-orange-400 text-neutral-800">
        <h1 className="text-2xl font-bold">Welcome to the about page!</h1>
        <div>A little bit about the writer:</div>
        <p>Name: ChatGpt</p>
        <p>Age: 2 years</p>
        <p>Location: San Francisco, CA</p>
        <p>
          Bio: ChatGpt is a chatbot that can answer questions and help with
          tasks.
        </p>
        <p>Interests: Programming, AI, and cats.</p>
        <p>Favorite Color: Blue</p>
        <p>Favorite Food: Pizza</p>
        <p>Favorite Movie: The Matrix</p>
        <p>Favorite Book: The Hitchhiker's Guide to the Galaxy</p>
      </div>
    </div>
  );
}
