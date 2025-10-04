"use client";

export default function Welcome({
  onEnterAction,
}: {
  onEnterAction: () => void;
}) {
  return (
    <div className="absolute top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-gray-900">
      <div className="text-center">
        <p className="text-base text-gray-300">Click to start!</p>
        <p className="mb-6 text-base text-gray-300">
          (desktop view for better experience)
        </p>
        <button
          onClick={onEnterAction}
          className="rounded-lg bg-indigo-600 px-6 py-2 text-xl font-semibold text-white transition-transform hover:scale-105 cursor-pointer"
        >
          BEGIN
        </button>
      </div>
    </div>
  );
}
