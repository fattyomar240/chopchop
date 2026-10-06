import Download from "./Download";

interface FooterLink {
  label: string;
  href: string;
}

const footerColumns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Feedback", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];

const footerLinkClass =
  "w-fit transition duration-200 hover:text-chop-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chop-light";

 function Footer() {
  return (
    <footer className="bg-ink py-12 text-sm text-on-dark-soft">
        <Download />
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <a href="#" className="inline-flex items-center gap-2">
              <img src="/assets/logo.svg" alt="" className="h-8 w-8" />
              <span className="text-lg font-semibold text-on-dark">Chop Chop</span>
            </a>
            <p className="mt-3 max-w-prose">Hot food from the Kombos, at your door. Built in Manjai Kunda.</p>
          </div>
          <div className="grid gap-x-12 gap-y-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title} className="flex flex-col gap-2">
                <p className="font-semibold text-on-dark">{column.title}</p>
                {column.links.map((link) => (
                  <a key={link.label} href={link.href} className={footerLinkClass}>
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <p className="mt-10 border-t border-dark-line pt-6">© 2026 Chop Chop. A fictional company, built for CS200.</p>
      </div>
    </footer>
  );
}

export default Footer