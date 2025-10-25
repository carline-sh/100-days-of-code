import Navbar from "./components/Navbar";
import Blog from "./components/Blog";
import { IoMdSearch } from "react-icons/io";

function App() {
  return (
    <div className="px-8">
      <div className="p-12">
        <div className="bg-fuchsia-200 text-fuchsia-700 flex justify-center items-center p-10 flex-row gap-4 border">
          <h1 className="">Blogue</h1>
        </div>
      </div>
      <Navbar />
      <div className="flex w-full gap-4 border-4 bg-blue-200 border-red-500">
        <div className="w-1/4 border-4 border-fuchsia-500"></div>

        <div className="grow">
          <Blog />
        </div>

        <div className="w-1/4 border-4 border-fuchsia-500">
          <div className="flex gap-2 border items-center w-fit p-2 rounded-md">
            <IoMdSearch />
            <input className="" type="text" placeholder="search" />
          </div>
        </div>
      </div>
      <div className="">
        <div className=""></div>
      </div>
      <div className=""></div>
    </div>
  );
}

export default App;
