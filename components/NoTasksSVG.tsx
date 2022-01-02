import Image from "next/image";

/**
 * This is the component that shows up when there are no tasks in the global state
 * @returns
 */
export default function NoTasksSVG() {
  return (
    <div className="flex justify-center flex-col mt-10">
      <Image
        src="icons/undraw_handcrafts_leaf.svg"
        width={150}
        height={150}
        alt="leaf"
      />
      <p className="text-center text-neutral-500 mt-4">All Clear</p>
    </div>
  );
}
