import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
};

export function PrimaryButton({ href, children }: ButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:opacity-95"
    >
      {children}
    </Link>
  );
}

export function SecondaryButton({ href, children }: ButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-6 py-4 text-base font-semibold text-slate-700 transition hover:bg-slate-50"
    >
      {children}
    </Link>
  );
}