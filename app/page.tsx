export default function HomePage() {
  return (
    <main className="space-y-24">
      {/* 1️⃣ Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center text-center px-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--primary)]">
            Manage & Explore Items Effortlessly
          </h1>
          <p className="mt-4 text-[var(--muted)] text-lg">
            A modern Next.js application for browsing, managing, and adding
            items with secure authentication.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a
              href="/items"
              className="px-6 py-3 rounded bg-[var(--primary)] text-white hover:opacity-90 transition"
            >
              Browse Items
            </a>
            <a
              href="/login"
              className="px-6 py-3 rounded border border-[var(--muted)] hover:bg-[var(--muted)]/10 transition"
            >
              Login
            </a>
          </div>
        </div>
      </section>

      {/* 2️⃣ Features */}
      <section className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-center text-[var(--foreground)]">
          Core Features
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            title="Public Item Listing"
            description="Browse items without logging in."
          />
          <FeatureCard
            title="Secure Authentication"
            description="Login with credentials or Google."
          />
          <FeatureCard
            title="Protected Item Management"
            description="Add and manage items securely."
          />
        </div>
      </section>

      {/* 3️⃣ How It Works */}
      <section className="bg-[var(--muted)]/5 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-center">
            How It Works
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <Step number="1" text="Browse items publicly" />
            <Step number="2" text="Login securely" />
            <Step number="3" text="Add & manage items" />
          </div>
        </div>
      </section>

      {/* 4️⃣ Items Preview */}
      <section className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-center">
          Explore Items
        </h2>

        <p className="mt-3 text-center text-[var(--muted)]">
          View detailed item information before making decisions.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <PreviewCard />
          <PreviewCard />
          <PreviewCard />
        </div>
      </section>

      {/* 5️⃣ Why Choose Us */}
      <section className="bg-[var(--primary)]/5 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-center">
            Why Choose This App?
          </h2>

          <ul className="mt-8 max-w-xl mx-auto space-y-3 text-[var(--muted)]">
            <li>✔ Modern App Router architecture</li>
            <li>✔ Secure cookie-based authentication</li>
            <li>✔ Clean and responsive UI</li>
          </ul>
        </div>
      </section>

      {/* 6️⃣ Tech Stack */}
      <section className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-semibold">
          Built With Modern Technologies
        </h2>

        <p className="mt-4 text-[var(--muted)]">
          Next.js • NextAuth • Express.js • Tailwind CSS
        </p>
      </section>

      {/* 7️⃣ Call To Action */}
      <section className="py-20 text-center px-6">
        <h2 className="text-3xl font-bold text-[var(--primary)]">
          Ready to Get Started?
        </h2>
        <p className="mt-4 text-[var(--muted)]">
          Login now and start managing your items.
        </p>
        <a
          href="/login"
          className="inline-block mt-6 px-8 py-3 rounded bg-[var(--primary)] text-white hover:opacity-90 transition"
        >
          Login Now
        </a>
      </section>
    </main>
  );
}

/* ---------------- Helper Components ---------------- */

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border border-[var(--muted)]/40 rounded-lg p-6 text-center">
      <h3 className="font-semibold text-[var(--foreground)]">
        {title}
      </h3>
      <p className="mt-2 text-sm text-[var(--muted)]">
        {description}
      </p>
    </div>
  );
}

function Step({ number, text }: { number: string; text: string }) {
  return (
    <div>
      <div className="mx-auto w-10 h-10 flex items-center justify-center rounded-full bg-[var(--primary)] text-white">
        {number}
      </div>
      <p className="mt-3 text-[var(--muted)]">{text}</p>
    </div>
  );
}

function PreviewCard() {
  return (
    <div className="border border-[var(--muted)]/40 rounded-lg p-6">
      <div className="h-32 bg-[var(--muted)]/20 rounded mb-4" />
      <h4 className="font-semibold">Sample Item</h4>
      <p className="text-sm text-[var(--muted)] mt-1">
        Short description of an item.
      </p>
    </div>
  );
}
