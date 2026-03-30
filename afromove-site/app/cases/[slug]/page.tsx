import Link from "next/link";
import { notFound } from "next/navigation";
import { cases } from "@/lib/data";

const detailMap = {
  "hostclub-attraction": {
    challenge: "新規来店につながる認知が不足していた。",
    approach:
      "短いドラマ形式で『続きが気になる』構成を作り、TikTokとInstagramで拡散。",
    result:
      "178万再生を突破。アカウントの認知が広がり、新規来店の導線を獲得。",
  },
  "concept-cafe-attraction": {
    challenge: "店舗の世界観がSNSで十分に伝わっていなかった。",
    approach:
      "キャストの魅力と店舗体験を組み合わせた短尺動画を企画。",
    result:
      "61万再生を突破し、来店前の期待感を高めるコンテンツに。",
  },
  "cabaret-recruiting": {
    challenge: "求人応募につながる魅力訴求が不足していた。",
    approach:
      "働くメリットや雰囲気を、採用向けのショート動画として再設計。",
    result:
      "91万再生を突破し、応募導線の強化に成功。",
  },
  "restaurant-attraction": {
    challenge: "競合店との差別化ができず、SNS流入が弱かった。",
    approach:
      "料理・接客・空気感をテンポ良く見せる動画を制作。",
    result:
      "150万再生を突破し、新規来店のきっかけを創出。",
  },
} as const;

type Slug = keyof typeof detailMap;

export async function generateStaticParams() {
  return cases.map((item) => ({
    slug: item.slug,
  }));
}

export default function CaseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const item = cases.find((c) => c.slug === params.slug);

  if (!item || !(params.slug in detailMap)) {
    notFound();
  }

  const detail = detailMap[params.slug as Slug];

  return (
    <main className="min-h-screen bg-white px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/cases"
          className="inline-flex items-center text-sm font-semibold text-slate-500 transition hover:text-slate-950"
        >
          ← 実績一覧へ戻る
        </Link>

        <div className="mt-8 rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600">
            {item.category}
          </div>

          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
            {item.views}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {item.desc}
          </p>

          <div className="mt-10 aspect-[16/9] overflow-hidden rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200" />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600">
                Challenge
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {detail.challenge}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600">
                Approach
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {detail.approach}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600">
                Result
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {detail.result}
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-[2rem] bg-slate-950 px-8 py-10 text-white">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Contact
            </div>

            <h2 className="mt-3 text-3xl font-black tracking-tight">
              自社に近い事例について、詳しく相談してみませんか？
            </h2>

            <p className="mt-4 max-w-2xl text-slate-300">
              業種や目的に近い実績をもとに、どのSNSや企画が向いているかをご提案します。
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-2xl bg-white px-6 py-4 text-base font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              無料相談する
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}