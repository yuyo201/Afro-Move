import { CaseCard } from "@/components/case-card";
import { SectionHeading } from "@/components/section-heading";
import { cases } from "@/lib/data";

export default function CasesPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 text-slate-950 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Cases"
          title="制作実績一覧"
          body="業種や目的ごとに、再生実績と企画意図をまとめています。次の段階では、ここに動画サムネイルや詳細導線を追加します。"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {cases.map((item) => (
            <CaseCard key={item.slug} {...item} />
          ))}
        </div>
      </div>
    </main>
  );
}