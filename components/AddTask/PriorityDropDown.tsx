import React, { VFC } from "react";
import getColorFromPriority from "../lib/priorityColor";

const PriorityDropDown: VFC<PriorityDropDownProps> = function PriorityDropDown({
  handleOnClick,
  active,
}) {
  return (
    <div
      className={`-z-1 absolute -top-3 -right-6 w-52 border-2 border-neutral-200 bg-white rounded-md shadow-lg mt-10 border-box max-w-52 ${
        !active && "hidden"
      }`}
    >
      <ul>
        {new Array(4).fill(1).map((v, i) => {
          return (
            <li
              role="button"
              className="flex p-1 hover:bg-neutral-100 cursor-pointer"
              key={`priority-control=${i + 1}`}
              onClick={() => handleOnClick(i + 1)}
            >
              <FlagIcon color={getColorFromPriority(i + 1)} />
              <p className="pl-2 text-sm">Priority {i + 1}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );

  /**
   *
   * @param color
   * @returns
   */
  function FlagIcon({ color }) {
    const getClassName = () => {
      if (color === "neutral") {
        return `stroke-${color}-500`;
      }
      return `stroke-${color}-500 fill-${color}-500`;
    };
    return (
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="-3 -3 30 30"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={getClassName()}
        >
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
          <line x1="4" y1="22" x2="4" y2="15" />
        </svg>
      </div>
    );
  }
};

interface PriorityDropDownProps {
  active: boolean;
  handleOnClick: (n: number) => void;
}
export default PriorityDropDown;
