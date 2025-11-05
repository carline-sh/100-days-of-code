import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/flex")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="text-white p-4 space-y-4 mx-auto w-full max-w-2xl">
      <h2 className="text-2xl font-bold">Flex</h2>
      <p className="text-neutral-300">
        Flex is a custom display mode. It allows you to move items weirdly. For
        us to use flex, we need to add the class "flex" to the parent element.
        <p className="text-neutral-300 py-2">
          Grid goes hand in hand with flex, so you will see them used together
          often. But I still chose to separate them into different topics.
        </p>
      </p>
      <h3 className="text-xl font-bold">flex-direction</h3>
      <p className="text-neutral-300">
        With flex, items can either be in a row or a column.
      </p>
      <div className="bg-blue-600 w-full rounded-md p-4 flex flex-row gap-2">
        <div className="bg-blue-400 rounded-md w-10 h-10"></div>
        <div className="bg-blue-400 rounded-md w-10 h-10"></div>
        <div className="bg-blue-400 rounded-md w-10 h-10"></div>
        <p className="flex justify-center items-center">flex flex-row</p>
      </div>
      <div className="bg-blue-600 w-full rounded-md p-4 flex flex-col gap-2">
        <div className="bg-blue-400 rounded-md w-10 h-10"></div>
        <div className="bg-blue-400 rounded-md w-10 h-10"></div>
        <div className="bg-blue-400 rounded-md w-10 h-10"></div>
        <p>flex flex-col</p>
      </div>
      <h3 className="text-xl font-bold">justify-content</h3>
      <p className="text-neutral-300">
        With flex, items can be aligned to the start, end, center, or
        space-between.
      </p>
      <h3 className="text-xl font-bold">justify-start</h3>
      <div className="bg-blue-600 w-full rounded-md p-4 flex flex-row gap-2 justify-start">
        <div className="bg-blue-400 rounded-md w-30 h-10 p-2"></div>
        <div className="bg-blue-400 rounded-md w-30 h-10 p-2"></div>
        <div className="bg-blue-400 rounded-md w-30 h-10 p-2"></div>
        <div className="bg-blue-400 rounded-md w-30 h-10 p-2"></div>
      </div>
      <h3 className="text-xl font-bold">justify-end</h3>
      <div className="bg-blue-600 w-full rounded-md p-4 flex flex-row gap-2 justify-end">
        <div className="bg-blue-400 rounded-md w-30 h-10 p-2"></div>
        <div className="bg-blue-400 rounded-md w-30 h-10 p-2"></div>
        <div className="bg-blue-400 rounded-md w-30 h-10 p-2"></div>
        <div className="bg-blue-400 rounded-md w-30 h-10 p-2"></div>
      </div>
      <h3 className="text-xl font-bold">justify-center</h3>
      <div className="bg-blue-600 w-full rounded-md p-4 flex flex-row gap-2 justify-center">
        <div className="bg-blue-400 rounded-md w-30 h-10 p-2"></div>
        <div className="bg-blue-400 rounded-md w-30 h-10 p-2"></div>
        <div className="bg-blue-400 rounded-md w-30 h-10 p-2"></div>
        <div className="bg-blue-400 rounded-md w-30 h-10 p-2"></div>
      </div>
      <h3 className="text-xl font-bold">justify-between</h3>
      <div className="bg-blue-600 w-full rounded-md p-4 flex flex-row gap-2 justify-between">
        <div className="bg-blue-400 rounded-md w-30 h-10 p-2"></div>
        <div className="bg-blue-400 rounded-md w-30 h-10 p-2"></div>
        <div className="bg-blue-400 rounded-md w-30 h-10 p-2"></div>
        <div className="bg-blue-400 rounded-md w-30 h-10 p-2"></div>
      </div>
      <div>
        <div>
          <div>
            <h3 className="text-xl font-bold py-2">justify-center</h3>
            <p className="text-neutral-300 py-2">
              With justify-center, we can align boxes to the center of the
              parent element. We only use justify-center to align our items
              horizontally.
            </p>
          </div>
          <div className="bg-blue-600 w-full rounded-md p-4 flex flex-row gap-2 items-center justify-center">
            <div className="bg-blue-400 rounded-md w-30 h-10 p-2"></div>
            <div className="bg-blue-400 rounded-md w-30 h-10 p-2"></div>
          </div>
        </div>
        <div>
          <div>
            <h3 className="text-xl font-bold py-2">items-center</h3>
            <p className="text-neutral-300 py-2">
              We use items-center to align items vertically in the center of the
              parent element.
            </p>
          </div>
          <div className="bg-blue-600 w-full h-50 rounded-md p-4 flex flex-row gap-2 items-center">
            <div className="bg-blue-400 rounded-md w-30 h-10 p-2"></div>
            <div className="bg-blue-400 rounded-md w-30 h-10 p-2"></div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold py-2">gap</h3>
        <p className="text-neutral-300 py-2">
          Gap is the space between boxes. In the example below i used gap-6 to
          create a gap of 6 pixels between the boxes.
        </p>
        <div className="bg-blue-600 w-35 rounded-md p-4 flex flex-row gap-6 ">
          <div className="bg-blue-400 rounded-md w-10 h-10"></div>
          <div className="bg-blue-400 rounded-md w-10 h-10"></div>
        </div>
      </div>
    </div>
  );
}
