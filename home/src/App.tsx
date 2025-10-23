function App() {
  return (
    <>
      <div className="border p-4 bg-pink-500">
        <h1>hello</h1>
        {["day-002", "day-003", "day-004", "day-005", "day-006", "day-008"].map(
          (day) => (
            <a
              href={`/100-days-of-code/${day}`}
              key={day}
              className="text-blue-500"
            >
              {day}
            </a>
          )
        )}
        <a href="/100-days-of-code/hangman/">Day 7: hangman</a>
      </div>
    </>
  );
}

export default App;
