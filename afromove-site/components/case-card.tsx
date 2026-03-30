import Link from "next/link";

type CaseCardProps = {
  slug: string;
  category: string;
  views: string;
  desc: string;
};

export function CaseCard({
  slug,
  category,
  views,
  desc,
}: CaseCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-[16/10] bg-gradient-to-br from-slate-100 to-slate-200" />

      <div className="p-7">
        <div className="text-sm font-semibold text-cyan-700">{category}</div>

        <div className="mt-3 text-3xl font-black tracking-tight">
          {views}
        </div>

        <p className="mt-4 text-sm leading-7 text-slate-600">{desc}</p>

        <Link
          href={`/cases/${slug}`}
          className="mt-6 inline-flex items-center text-sm font-semibold text-slate-950"
        >
          事例詳細を見る →
        </Link>
      </div>
    </article>
  );
}