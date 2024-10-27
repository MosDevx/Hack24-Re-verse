import Link from "next/link";
import React from "react";

const ProceedButton = () => {
  return (
    <div className="flex w-full justify-end mt-4">
      <Link href="/discipleship">
        <button className="px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg text-sm lg:text-base">
          Continue
        </button>
      </Link>
    </div>
  );
};

export default ProceedButton;