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
        <div className="grid grid-cols-2 gap-6">
          <div className="gap-2">
            <h3 className="text-xl font-bold">bg-color-name</h3>
            <p className="py-2">
              Using bg-color-name will set the background color of the element
              to the color specified.
            </p>
            <div className="bg-blue-500 w-40 h-20 rounded-md col-span-2 px-8 flex items-center">
              bg-blue-500
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold py-2">bg-linear</h3>
            <p className="pb-2">
              You can also make a background color into a gradient using
              multiple color. In this case ive made a gradient from blue, via
              purple, to pink.
            </p>
            <div className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 w-60 h-20 p-2 rounded-md flex items-center justify-center">
              bg-linear-to-r from blue-500 via purple-500 to pink-500
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold">Text colors</h3>
          <p className="py-2">
            Other than coloring backgrounds we can also color text. In the
            example below I used the class text-blue-500 to give our text color.
          </p>
          <div className="p-4 border w-40 h-20 rounded-md flex items-center justify-center border-white text-xl text-blue-500 font-bold">
            Text
          </div>
        </div>
      </div>
    </div>
  );
}
