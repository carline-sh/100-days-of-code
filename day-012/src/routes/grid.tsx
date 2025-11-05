import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/grid")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <div>
        <div className="text-white p-4 space-y-4 mx-auto w-full max-w-2xl">
          <h2 className="text-2xl font-bold">Grid</h2>
          <p className="text-neutral-300">
            Grid helps us to layout items in a grid. This way we can split our
            page into rows and columns.
          </p>
          <h3 className="text-xl font-bold">grid-cols</h3>
          <p>
            I mostly use grid-cols-number. This will create a grid with the
            number of columns specified.
          </p>
          <div className="gap-4 py-4 grid grid-cols-2">
            <div className="flex bg-blue-500 rounded-md p-2  w-80 h-40">
              <div className="flex items-center justify-center bg-blue-400 rounded-md w-full h-full">
                <div className="block text-center">
                  <p className="p-2">column 1</p>
                  <p>grid grid-cols-2</p>
                </div>
              </div>
            </div>
            <div className="flex bg-blue-500 rounded-md p-2  w-80 h-40">
              <div className="flex items-center justify-center bg-blue-400 rounded-md w-full h-full">
                <div className="block text-center">
                  <p className="p-2">column 2</p>
                  <p>grid grid-cols-2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
