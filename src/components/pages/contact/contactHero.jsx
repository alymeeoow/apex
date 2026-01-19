import React from "react";

export default function ContactHero() {
  const unsplashImage =
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2400&q=80";


  return (
    <section className="ct-heroFull" aria-label="Contact hero">
      <div
        className="ct-heroBg"
        style={{ backgroundImage: `url(${unsplashImage})` }}
        aria-hidden="true"
      />
      <div className="ct-heroOverlay" aria-hidden="true" />

      <div className="ct-shell ct-heroShell">
        <div className="ct-heroContent">
          <p className="ct-heroEyebrow">Contact</p>
          <h1 className="ct-heroTitle">Get in Touch</h1>
          <p className="ct-heroSub">
            Want to get in touch? We’d love to hear from you. Here’s how you can
            reach me.
          </p>
        </div>
      </div>
    </section>
  );
}
