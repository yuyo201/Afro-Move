import Link from "next/link";
import { PrimaryButton, SecondaryButton } from "@/components/buttons";
import { CaseCard } from "@/components/case-card";
import { SectionHeading } from "@/components/section-heading";
import { cases, pains, plans, roadmap, strengths } from "@/lib/data";

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-600">
              Afromove
            </div>
            <div className="text-sm text-slate-500">
              SNS marketing / short video production
            </div>
          </div>

          <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
            <Link href="#service" className="hover:text-slate-950">
              サービス
            </Link>
            <Link href="#cases" className="hover:text-slate-950">
              実績
            </Link>
            <Link href="#roadmap" className="hover:text-slate-950">
              ロードマップ
            </Link>
            <Link href="#pricing" className="hover:text-slate-950">
              料金
            </Link>
          </nav>

          <PrimaryButton href="#contact">無料相談する</PrimaryButton>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.12),_transparent_24%)]" />

          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
            <div className="relative z-10">
              <div className="mb-5 inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1 text-sm font-medium text-cyan-700">
                集客・求人につながるSNS運用支援
              </div>

              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-6xl">
                SNS運用がわからない会社向けに、
                <span className="text-cyan-600">
                  {" "}
                  戦略・動画制作・投稿改善{" "}
                </span>
                を一括対応。
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                ただ動画を作るだけではなく、誰に・何を・どう届けるかまで設計。
                ホストクラブ、コンカフェ、飲食店、採用領域まで、成果につながるショート動画運用を支援します。
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <PrimaryButton href="#contact">
                  無料相談をはじめる
                </PrimaryButton>
                <SecondaryButton href="#cases">実績を見る</SecondaryButton>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="text-2xl font-black text-slate-950">
                    178万再生
                  </div>
                  <div className="mt-1 text-sm text-slate-500">
                    ホストクラブ集客実績
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="text-2xl font-black text-slate-950">
                    150万再生
                  </div>
                  <div className="mt-1 text-sm text-slate-500">
                    飲食店集客実績
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="text-2xl font-black text-slate-950">
                    企画〜分析
                  </div>
                  <div className="mt-1 text-sm text-slate-500">
                    投稿後の改善まで対応
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-2xl shadow-cyan-100">
                <div className="rounded-3xl bg-gradient-to-br from-cyan-400 via-sky-500 to-fuchsia-500 p-[1px]">
                  <div className="rounded-[calc(1.5rem-1px)] bg-slate-950 p-6">
                    <div className="text-sm font-medium text-slate-300">
                      こんなお悩みに対応
                    </div>

                    <div className="mt-5 space-y-3">
                      {pains.map((pain) => (
                        <div
                          key={pain}
                          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100"
                        >
                          {pain}
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 rounded-2xl bg-white px-5 py-4 text-slate-900">
                      <div className="text-sm font-semibold text-cyan-700">
                        解決アプローチ
                      </div>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        業種・目的・媒体の相性を整理し、企画、撮影、投稿、分析までをひとつの導線でつなぎます。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="service" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Service"
            title="戦略から投稿改善まで、分断しないSNS支援"
            body="PDFにある『提案・制作・投稿対応』を、Webでは成果導線として見せる構成に再設計しています。"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {strengths.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              >
                <div className="mb-4 h-12 w-12 rounded-2xl bg-cyan-100" />
                <h3 className="text-xl font-bold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}