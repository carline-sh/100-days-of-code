export const Content = () => {
  return (
    <div>
      <div className="h-screen overflow-y-auto">
        <div className="text-white p-4 space-y-4 mx-auto w-full max-w-2xl">
          <h2 className="text-2xl font-bold">Boxes</h2>
          <p>
            Everything is html/css world is a block, this is cuz display: block
            or whatever. We will talk about inline some other day. (assuming
            sane defaults, like{" "}
            <a
              className="bg-neutral-600 px-1"
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing"
            >
              box-sizing: border-box
            </a>
            )
          </p>
          <div className="bg-blue-600 w-full rounded-md p-4 flex items-center justify-center">
            <div className="bg-blue-400 w-42 h-20 rounded-md flex items-end justify-center">
              <p className="pb-1">w-42 h-20</p>
            </div>
          </div>
          <p>
            We can define seizes of boxes with width and height. (w-4 and h-4 in
            this case).
          </p>
          <div className="flex gap-2 justify-center py-4 border border-neutral-700 rounded-sm">
            <div className="px-4 py-1 bg-neutral-100 rounded-sm text-blue-500">
              w-4
            </div>
            <div className="px-4 py-1 bg-neutral-100 rounded-sm text-blue-500">
              h-4
            </div>
          </div>
          <h2 className="text-2xl font-bold">Padding</h2>
          <p>
            Padding is the space between content and border. The content is
            "content", and the border is colored white in this example. There is
            also a padding of 4 pixels on the right side which makes the content
            move to the left. (pr-4).
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
            Margin is the space between the box and the other boxes. In this
            case, we have a margin of 4 pixels on the right side. (mr-10). Which
            makes the space between boxes 10 pixels wider.
          </p>
          <div className="flex justify-center py-4 border border-neutral-700 rounded-sm">
            <div className="px-4 py-1 mr-10 bg-neutral-100 rounded-sm text-blue-500">
              w-4
            </div>
            <div className="px-4 py-1 bg-neutral-100 rounded-sm text-blue-500">
              h-4
            </div>
          </div>

          <h2 className="text-2xl font-bold">Flex</h2>
          <p>
            Flex is a custom display mode. It allows you to move items weirdly.
            For us to use flex, we need to add the class "flex" to the parent
            element.
          </p>
          <h3 className="text-xl font-bold">flex-direction</h3>
          <p>With flex, items can either be in a row or a column.</p>
          <div className="bg-blue-600 w-full rounded-md p-4 flex flex-row gap-2">
            <div className="bg-blue-400 rounded-md w-10 h-10"></div>
            <div className="bg-blue-400 rounded-md w-10 h-10"></div>
            <div className="bg-blue-400 rounded-md w-10 h-10"></div>
            <p>flex flex-row</p>
          </div>
          <div className="bg-blue-600 w-full rounded-md p-4 flex flex-col gap-2">
            <div className="bg-blue-400 rounded-md w-10 h-10"></div>
            <div className="bg-blue-400 rounded-md w-10 h-10"></div>
            <div className="bg-blue-400 rounded-md w-10 h-10"></div>
            <p>flex flex-col</p>
          </div>
          <h3 className="text-xl font-bold">justify-content</h3>
          <p>
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
      </div>
    </div>
  );
};
