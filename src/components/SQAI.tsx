export default () => {
  return (
    <div>
      <h2 className="font-medium text-xl mb-3">Events</h2>
      <a
        href="https://sqai.org"
        target="_blank"
        aria-label="Summit on Quantum AI"
        className="group flex items-center gap-5 px-4 py-4 bg-neutral-2 hover:bg-neutral-3 outline-none border border-neutral-4 hover:border-neutral-6 rounded-3xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-7 focus-visible:ring-offset-neutral-1"
      >
        <img
          src="/sqai2.png"
          alt="SQAI logo"
          className="size-14 shrink-0 rounded-xl"
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-neutral-12 text-sm font-medium transition duration-300 group-hover:translate-x-1">
            Summit on Quantum AI (SQAI)
          </h3>
          <p className="text-neutral-10 group-hover:text-neutral-11 text-xs transition duration-300 group-hover:translate-x-px">
            The world's first academic conference dedicated to quantum AI, founded by Austin Hua in 2021.
          </p>
        </div>
      </a>
    </div>
  );
};
