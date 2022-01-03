import React, { useEffect, useRef, VFC } from "react";
import getColorFromPriority from "../lib/priorityColor";

const FlagButton: VFC<FlagButtonProps> = function FlagButton({
  isActive,
  priority,
  onClick,
}) {
  // This will be used to handle clicks outside
  let ref = useRef<HTMLDivElement>(null);

  // This will ensure that when the dropdown has been activated and user clicks outside, it will turn the active state to false
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target) && isActive) {
        onClick();
      }
    };
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  const color = getColorFromPriority(priority);
  const stroke = `stroke-${color}-500`;
  const fill = color === "neutral" ? "" : `fill-${color}-500`;

  const bg = isActive ? "bg-slate-100" : "";

  return (
    <div role="button" onClick={onClick} ref={ref}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="-3 -3 30 30"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`cursor-pointer rounded-sm ${stroke} ${bg} ${fill} hover:stroke-${color}-500 hover:bg-slate-100`}
      >
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    </div>
  );
};

interface FlagButtonProps {
  isActive: boolean;
  priority: number;
  onClick: () => void;
}

export default FlagButton;
