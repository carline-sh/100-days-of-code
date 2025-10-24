import classNames from "classnames";
import { useState, type FC } from "react";
import { LuChevronDown, LuExpand } from "react-icons/lu";

export const SitePreview: FC<{ day: string }> = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <a
      href={`/100-days-of-code/${props.day}`}
      key={props.day}
      className={classNames(
        "text-neutral-700 flex flex-col border-pink-300 border-2 rounded-md hover:text-pink-400",
        !isExpanded && "hover:scale-102 transition-all duration-200"
      )}
    >
      <div
        className={classNames(
          "w-full py-1 px-2 flex justify-between items-center border-b bg-pink-200",
          isExpanded ? " fixed top-0 inset-x-0 z-10" : ""
        )}
      >
        <div>{props.day}</div>
        <div>
          <button
            className="text-xl text-neutral-700"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
          >
            {isExpanded ? <LuChevronDown /> : <LuExpand />}
          </button>
        </div>
      </div>
      <div
        className={classNames(
          isExpanded
            ? "fixed inset-x-0 bottom-0 top-8 z-10 bg-neutral-50"
            : "relative"
        )}
      >
        <iframe
          src={`https://carline-sh.github.io/100-days-of-code/${props.day}/`}
          className={classNames(
            "w-full",
            isExpanded && "h-full",
            !isExpanded && "aspect-video"
          )}
        ></iframe>
        {!isExpanded && <div className="absolute inset-0 bg-pink-100/10"></div>}
      </div>
    </a>
  );
};
