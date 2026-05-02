import Image from "next/image";
import Link from "next/link";

type Certificate = {
  title: string;
  desc: string;
  href: string;
  img: string;
  featured?: boolean;
};

const certificates: Certificate[] = [
  {
    title: "EY Techathon 6.0",
    href: "/cretificates/ey-techathon.jpg",
    img: "/cretificates/ey-techathon.jpg",
    desc: "Executive Summary Round - 2025",
    featured: true,
  },
  {
    title: "Code: Automata",
    href: "/cretificates/automata.jpg",
    img: "/cretificates/automata.jpg",
    desc: "Implementation Round - 2025",
  },
  {
    title: "SPIT Hackathon",
    href: "/cretificates/spit-hackathon.jpg",
    img: "/cretificates/spit-hackathon.jpg",
    desc: "Participation - 2026",
  },
  {
    title: "BugBusters BNB",
    href: "/cretificates/BugBusters BNB FINAL CERIFICATE-part-2_page-0001.jpg",
    img: "/cretificates/BugBusters BNB FINAL CERIFICATE-part-2_page-0001.jpg",
    desc: "State Round - 2025",
  },
  {
    title: "HackOverflow 3.0",
    href: "/cretificates/Hackethon = Hackoverflow 3.0_page-0001.jpg",
    img: "/cretificates/Hackethon = Hackoverflow 3.0_page-0001.jpg",
    desc: "National Level Hackathon - PHCET - 2025",
  },
  {
    title: "MegaHack 5.0",
    href: "/cretificates/Hackethon = megahack 5.0 (palghar)_page-0001.jpg",
    img: "/cretificates/Hackethon = megahack 5.0 (palghar)_page-0001.jpg",
    desc: "Hackathon - Palghar - 2025",
  },
  {
    title: "Google Developer Group Hackathon",
    href: "/cretificates/Hackethon google developer grp(Atharva clg)_page-0001.jpg",
    img: "/cretificates/Hackethon google developer grp(Atharva clg)_page-0001.jpg",
    desc: "Hackathon - Atharva College - 2025",
  },
  {
    title: "Project Competition",
    href: "/cretificates/project competition (Terna CLG)_page-0001.jpg",
    img: "/cretificates/project competition (Terna CLG)_page-0001.jpg",
    desc: "Terna College - 2025",
  },
];

export default function Achievements() {
  const featured = certificates.find((certificate) => certificate.featured);
  const others = certificates.filter((certificate) => !certificate.featured);

  return (
    <section
      id="achievements"
      className="relative min-h-screen bg-[#071827] px-6 py-12 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="shine-button mb-14 inline-flex items-center gap-2 rounded-md bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-950/35 transition hover:bg-sky-400"
        >
          <span aria-hidden="true">&lt;-</span>
          Back
        </Link>

        <div className="mb-16 animate-fade-in-up text-center">
          <h2 className="text-5xl font-bold tracking-tight">
            Achievements & <span className="text-sky-300">Certificates</span>
          </h2>
          <p className="mt-3 text-slate-400">
            Showcasing my hackathon journey and achievements
          </p>
        </div>

        {featured && (
          <div className="group relative mb-16 animate-soft-pop">
            <a
              href={featured.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={featured.img}
                alt={featured.title}
                width={1000}
                height={500}
                className="max-h-[520px] w-full rounded-lg border border-slate-800 bg-slate-900/70 object-contain shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </a>

            <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/45 opacity-0 transition group-hover:opacity-100">
              <span className="text-lg font-semibold">View Certificate -&gt;</span>
            </div>

            <div className="mt-6">
              <h3 className="text-2xl font-semibold">{featured.title}</h3>
              <p className="text-slate-400">{featured.desc}</p>
            </div>
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {others.map((certificate) => (
            <div
              key={certificate.title}
              className="motion-lift group animate-rise-delay overflow-hidden rounded-lg border border-slate-800 bg-slate-900/60 backdrop-blur-lg hover:border-sky-400/40"
            >
              <a
                href={certificate.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative bg-slate-900/70">
                  <Image
                    src={certificate.img}
                    alt={certificate.title}
                    width={400}
                    height={250}
                    className="h-56 w-full object-contain p-2"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition group-hover:opacity-100">
                    <span className="text-sm">View Certificate -&gt;</span>
                  </div>
                </div>
              </a>

              <div className="p-4">
                <h3 className="font-semibold">{certificate.title}</h3>
                <p className="text-sm text-slate-400">{certificate.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

