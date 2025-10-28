import { IoMdSearch } from "react-icons/io";

export const Search = () => {
  return (
    <div className="flex gap-2 border border-neutral-500 items-center flex-start py-0 px-2 rounded-md bg-white/80 h-fit comic-relief-regular w-full">
      <div className="w-4 h-4">
        <IoMdSearch className="w-4 h-4" />
      </div>
      <input
        className="w-fit"
        type="text"
        placeholder="search"
        //   value={search}
        //   onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};
