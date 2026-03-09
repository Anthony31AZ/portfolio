import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div className="flex justify-center px-4 py-10 sm:px-6 lg:px-8">
      <div
        className={`w-full max-w-4xl rounded-3xl bg-white/90 p-6 shadow-sm ring-1 ring-zinc-100 backdrop-blur-sm sm:p-10 ${
          className ?? ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}

