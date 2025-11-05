import { createFileRoute } from "@tanstack/react-router";
import { ColorsBox } from "../components/ColorsBox";

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
        <div>
          <h3 className="text-xl font-bold">Here are the colors in TailWind</h3>
        </div>
        <ColorsBox />
        <p className="">
          To use a color, you will need to use classes to give the element
          color. There are many different ways to do this, here are the ones I
          use most often:
        </p>
        <div className="grid grid-cols-2 gap-2">
          <h3 className="text-xl font-bold grid grid-cols-2">bg-color-name</h3>
          <p className="col-span-2">
            Using bg-color-name will set the background color of the element to
            the color specified.
          </p>
          <div className="bg-blue-500 w-40 h-20 rounded-md col-span-2"></div>
        </div>
      </div>
    </div>
  );
}
