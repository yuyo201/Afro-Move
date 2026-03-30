type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body?: string;
  invert?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  body,
  invert = false,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <div
        className={`text-sm font-semibold uppercase tracking-[0.22em] ${
          invert ? "text-cyan-300" : "text-cyan-600"
        }`}
      >
        {eyebrow}
      </div>

      <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
        {title}
      </h2>

      {body ? (
        <p
          className={`mt-5 text-lg leading-8 ${
            invert ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}