// components/Footer.tsx
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "FAQ", href: "/faq" },
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
];

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
  { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
  { label: "Twitter", href: "https://twitter.com", icon: FaTwitter },
  { label: "YouTube", href: "https://youtube.com", icon: FaYoutube },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4">
        {/* Brand */}
        <span className="text-lg font-semibold tracking-wide text-gray-900">
          STAYVO
        </span>

        {/* Nav links */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="hover:text-gray-900 transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-2 flex flex-wrap items-center justify-center gap-1 text-xs text-gray-400">
          <span>© {new Date().getFullYear()} STAYVO. All rights reserved.</span>
          <span className="mx-1">·</span>
          <Link href="/privacy" className="hover:text-gray-600">
            Privacy Policy
          </Link>
          <span className="mx-1">·</span>
          <Link href="/terms" className="hover:text-gray-600">
            Terms of Service
          </Link>
          <span className="mx-1">·</span>
          <Link href="/cookies" className="hover:text-gray-600">
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
