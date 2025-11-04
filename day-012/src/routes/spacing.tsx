import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/spacing")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <div className="text-white p-4 space-y-4 mx-auto w-full max-w-2xl">
        <h2 className="text-2xl font-bold">Boxes</h2>
        <p>
          Everything is html/css world is a block (see lightblue rectangle
          below), this is cuz display: block or whatever. We will talk about
          inline some other day. (assuming sane defaults, like{" "}
          <a
            className="text-blue-400 hover:underline"
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing"
          >
            box-sizing: border-box
          </a>
          )
        </p>
        <div className="bg-blue-600 w-full rounded-md p-4 flex items-center justify-center">
          <div className="bg-blue-400 w-42 h-20 rounded-md flex items-end justify-center">
            <p className="pb-1"></p>
          </div>
        </div>
        <p>
          We can define seizes of boxes with width and height. (w-14 and h-14 in
          this case). The number that comes after w- or h- is the size of the
          box in pixels.
        </p>
        <div className="flex gap-2 justify-center py-4 border border-neutral-700 rounded-sm">
          <div className="px-2 py-1 w-14 h-14 bg-neutral-200 rounded-sm text-black text-center">
            w-14
          </div>
          <div className="px-2 py-1 w-14 h-14 bg-neutral-200 rounded-sm text-black text-center">
            h-14
          </div>
        </div>
        <h2 className="text-2xl font-bold">Padding</h2>
        <p>
          Padding is the space between content and border (which is colored
          white in the example below). There is also a padding of 4 pixels on
          the right side which makes the content move to the left. (pr-4).
        </p>
        <div className="bg-blue-600 w-full rounded-md p-4 flex items-center justify-center">
          <div className="bg-blue-400 w-42 h-20 rounded-md flex border">
            <div className="grow flex items-end justify-center">
              <p className="pb-1">content</p>
            </div>
            <div className="h-full w-12 bg-blue-100 rounded-r-md text-blue-400 flex items-end justify-center">
              <div className="pb-1">pr-4</div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold">Margin</h2>

        <p>
          Margin is the space between elements (boxes). In this case, we have a
          margin of 4 pixels on the right side. (mr-10). Which makes the space
          between boxes 10 pixels wider.
        </p>
        <p>
          The number that comes after mr- is the size of the margin in pixels.
          In this example there is only margin right (mr-10) but there are also
          margin left (ml-10), margin top (mt-10), and margin bottom (mb-10).
        </p>
        <div className="flex justify-center py-4 border border-neutral-700 rounded-sm">
          <div className="px-4 py-1 mr-10 w-14 h-14 bg-neutral-200 rounded-sm text-black text-center">
            mr-10
          </div>
          <div className="px-4 py-1 w-14 h-14 bg-neutral-200 rounded-sm"></div>
        </div>
        <p>
          In the example above, only the right block has a margin of 10 pixels.
          This is because margin is applied to the outer edge of the box. And so
          the space between the two boxes is still 10 pixels.
        </p>
      </div>
    </div>
  );
}
