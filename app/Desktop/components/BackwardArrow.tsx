import { HiArrowNarrowLeft } from "react-icons/hi";

export default function BackwardArrow({ onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center w-[36px] h-[36px] rounded-full transition
        ${disabled ? "bg-gray-200 cursor-not-allowed" : "me-bgcolor-g"}`}
    >
      <HiArrowNarrowLeft
        className={`w-4 h-4 ${disabled ? "text-gray-400" : "text-white"}`}
      />
    </button>
  );
}
