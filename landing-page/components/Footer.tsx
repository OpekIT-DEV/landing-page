export default function Footer() {
  return (
    <footer className="bg-slate-950 py-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-lg font-bold text-white">Opekit</p>
            <p className="mt-2 max-w-sm text-sm">
              Reliable IT services, custom software, and managed support for growing
              businesses.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
            <div>
              <p className="font-semibold text-white">Services</p>
              <ul className="mt-3 space-y-2">
                <li><a href="#services" className="hover:text-white">Software</a></li>
                <li><a href="#services" className="hover:text-white">Cloud & DevOps</a></li>
                <li><a href="#services" className="hover:text-white">Cybersecurity</a></li>
                <li><a href="#services" className="hover:text-white">Managed IT</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white">Company</p>
              <ul className="mt-3 space-y-2">
                <li><a href="#about" className="hover:text-white">About</a></li>
                <li><a href="#process" className="hover:text-white">Process</a></li>
                <li><a href="#faq" className="hover:text-white">FAQ</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white">Legal</p>
              <ul className="mt-3 space-y-2">
                <li><a href="/privacy" className="hover:text-white">Privacy</a></li>
                <li><a href="/terms" className="hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs">
          © {new Date().getFullYear()} Opekit. All rights reserved.
        </div>
      </div>
    </footer>
  );
}