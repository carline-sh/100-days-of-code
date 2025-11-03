import "./App.css";
import { Navbar } from "./components/Navbar";
import { Content } from "./components/Content";

function App() {
  return (
    <div className="bg-neutral-800 min-h-screen w-full">
      <div className="grid grid-cols-[1fr_3fr_1fr]">
        <Navbar />
        <Content />
        <div className="bg-blue-500">tailrain</div>
      </div>
    </div>
  );
}

export default App;
