export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <div className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600">
          Contact
        </div>

        <h1 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
          無料相談フォーム
        </h1>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          業種、目的、現在の運用状況をもとに、相性の良いSNS施策をご提案します。
        </p>

        <form className="mt-10 space-y-6">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              会社名
            </label>
            <input
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500"
              type="text"
              placeholder="株式会社〇〇"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              ご担当者名
            </label>
            <input
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500"
              type="text"
              placeholder="山田 太郎"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              メールアドレス
            </label>
            <input
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500"
              type="email"
              placeholder="sample@example.com"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              ご相談内容
            </label>
            <textarea
              className="min-h-[180px] w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500"
              placeholder="集客・求人・SNS運用の現状などをご記入ください"
            />
          </div>

          <button
            type="submit"
            className="inline-flex rounded-2xl bg-slate-950 px-6 py-4 text-base font-semibold text-white transition hover:opacity-90"
          >
            送信する
          </button>
        </form>
      </div>
    </main>
  );
}