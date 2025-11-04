import { SitePreview } from "./sitepreview";

function App() {
  return (
    <>
      <div className="min-h-screen w-full bg-white">
        <div className="mx-auto w-full max-w-7xl p-4 space-y-4">
          <div className="border p-4 bg-neutral-200 rounded-md space-y-4 border-neutral-400">
            <h1 className="text-neutral-700 text-2xl font-bold p-4">
              Hi! Welcome to my 100 days of code journey! Here are my projects
              thus far:
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xl font-bold">
              {[
                "day-002",
                "day-003",
                "day-004",
                "day-005",
                "day-006",
                "hangman",
                "day-008",
                "day-009",
                "day-010",
                "day-011",
                "day-012",
                "day-013",
              ]
                .reverse()
                .map((day) => (
                  <SitePreview key={day} day={day} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
