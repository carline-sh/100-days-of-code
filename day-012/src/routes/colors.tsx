import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/colors")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-full rounded-md p-4">
      <div className="text-white p-4 space-y-4 mx-auto w-full max-w-2xl">
        <div className="text-2xl font-bold">Colors and Color Schemes</div>
        <p>
          Colors are the foundation of any design. They are used to create the
          visual identity of a brand. With TailWind you can change background
          colors or text colors.
        </p>
        <div></div>
        <p>
          Color schemes are a collection of colors that are used together to
          create a consistent visual identity.
        </p>
      </div>
    </div>
  );
}
