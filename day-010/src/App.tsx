function App() {
  return (
    <div className="min-h-screen w-full bg-white">
      <div className="flex justify-center pt-[20vh]">
        <div className="border p-4 items-center justify-center flex bg-neutral-200 flex-col rounded-md border-neutral-400">
          <div className="font-bold text-neutral-800">Welcome back!</div>
          <div>
            <div className="p-2 border m-4 rounded-md bg-neutral-100 border-neutral-400">
              <input type="text" placeholder="E-mail" />
            </div>
            <div className="p-2 border m-4 rounded-md bg-neutral-100 border-neutral-400">
              <input type="password" placeholder="Password" />
            </div>
            <div>
              <button className="border rounded-md p-2 m-4 mt-1 text-neutral-800 border-neutral-500 w-60 bg-neutral-300 hover:bg-neutral-400">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
