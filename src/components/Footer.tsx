import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";
import { navLinks, profile } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-bold text-ink">{profile.name}</p>
          <p className="mt-1 text-sm text-ink-soft">
            © {year} · Fullstack Developer & SQA
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:items-end">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-ink-soft transition-colors hover:text-teal"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-teal hover:bg-teal hover:text-white"
            >
              <GitHubIcon size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-teal hover:bg-teal hover:text-white"
            >
              <LinkedInIcon size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
