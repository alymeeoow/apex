import React from "react";

export default function ServicesHero() {
  // ✅ calmer, process-focused image
  const heroBg =
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2400&q=80";

  return (
    <section className="svc-heroFull" aria-label="Services hero">
      <div
        className="svc-heroBgFull"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden="true"
      />
      <div className="svc-heroOverlayFull" aria-hidden="true" />

      <div className="svc-shell svc-heroShellFull">
        <div className="svc-heroContentFull">
          <p className="svc-heroEyebrowFull">What we do</p>

          <h1 className="svc-heroTitleFull">Our Services</h1>

          <p className="svc-heroSubFull">
            Clear offerings built for logistics teams—choose the support you need,
            mix and match, and ship outcomes without noise.
          </p>
        </div>
      </div>
    </section>
  );
}
