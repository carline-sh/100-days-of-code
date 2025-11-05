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
    </div>
  );
}
