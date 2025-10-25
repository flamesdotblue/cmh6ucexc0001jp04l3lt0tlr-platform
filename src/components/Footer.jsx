function Footer() {
  return (
    <footer id="contact" className="w-full border-t border-white/10 bg-[#0a0a0a]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold">Let’s build something exceptional</h3>
            <p className="mt-2 max-w-md text-white/70">
              Send a brief and we’ll get back within 24 hours with next steps and a tailored approach.
            </p>
            <a href="mailto:hello@gridforge.studio" className="mt-5 inline-block rounded-md bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90">hello@gridforge.studio</a>
            <div className="mt-4 text-xs text-white/50">Availability: 2 slots open this month</div>
          </div>

          <div className="flex items-start justify-end">
            <div className="w-full max-w-sm rounded-xl border border-white/10 bg-white/5 p-5">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                <div>
                  <label className="mb-1 block text-xs text-white/70">Name</label>
                  <input type="text" placeholder="Your name" className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none ring-emerald-400/30 placeholder:text-white/40 focus:ring" />
                </div>
                <div>
                  <label className="mb-1 block text-xs text-white/70">Email</label>
                  <input type="email" placeholder="you@company.com" className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none ring-emerald-400/30 placeholder:text-white/40 focus:ring" />
                </div>
                <div>
                  <label className="mb-1 block text-xs text-white/70">Project brief</label>
                  <textarea rows="3" placeholder="Tell us about your goals" className="w-full resize-none rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none ring-emerald-400/30 placeholder:text-white/40 focus:ring" />
                </div>
                <button type="submit" className="w-full rounded-md bg-emerald-400 px-4 py-2.5 text-sm font-medium text-black transition hover:bg-emerald-300">Request proposal</button>
                <p className="text-[11px] leading-relaxed text-white/50">
                  By submitting, you agree to our terms. We’ll only use your info to respond to your inquiry.
                </p>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} GridForge Studio. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-white/80">Services</a>
            <a href="#work" className="hover:text-white/80">Work</a>
            <a href="#home" className="hover:text-white/80">Back to top</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
