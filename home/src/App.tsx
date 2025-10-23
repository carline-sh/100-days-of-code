import { LuExpand } from "react-icons/lu";

function App() {
  return (
    <>
      <div className="min-h-screen w-full">
        <div className="mx-auto w-full max-w-7xl p-4 space-y-4">
          <div className="border p-4 bg-pink-100 rounded-md space-y-4">
            <h1>
              Hi! Welcome to my 100 days of code journey! Here are my projects
              thus far:
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                "day-002",
                "day-003",
                "day-004",
                "day-005",
                "day-006",
                "hangman",
                "day-008",
              ]
                .reverse()
                .map((day) => (
                  <a
                    href={`/100-days-of-code/${day}`}
                    key={day}
                    className="text-blue-500 flex flex-col border rounded-md hover:bg-blue-500 hover:text-white"
                  >
                    <div className="w-full py-1 px-2 flex justify-between items-center border-b">
                      <div>{day}</div>
                      <div>
                        <div>
                          <LuExpand />
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <iframe
                        src={`https://carline-sh.github.io/100-days-of-code/${day}/`}
                        className="w-full aspect-video"
                      ></iframe>
                      <div className="absolute inset-0 bg-pink-100/10"></div>
                    </div>
                  </a>
                ))}
            </div>
          </div>
          <div className="border p-4 bg-blue-500">
            <h1>hello</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
