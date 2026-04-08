"use client";

const projects = [
  {
    name: "Quaraquli",
    category: "SERVICE DESIGN",
    href: "/projects/infographic",
    bgImage:
      "https://cdn.prod.website-files.com/5b6fab70681f8915bbb563eb/5b704535e5d6e26675eaf051_thumbnail.png",
  },
  {
    name: "JTB conviniFront24",
    category: "SERVICE DESIGN",
    href: "/projects/console-app",
    bgImage:
      "https://cdn.prod.website-files.com/5b6fab70681f8915bbb563eb/5b7045789e9b6fe8073d0a52_thtbumbnail%20copy.png",
  },
  {
    name: "REVINYL_APP",
    category: "SERVICE DESIGN",
    href: "/projects/revinyl",
    bgImage:
      "https://cdn.prod.website-files.com/5b6fab70681f8915bbb563eb/5b77f1a00a067472b52c4649_thumbnail.png",
  },
  {
    name: "SMART HEEL SHOES",
    category: "SERVICE DESIGN IoT",
    href: "/projects/smart-heel-shoes",
    bgImage:
      "https://cdn.prod.website-files.com/5b6fab70681f8915bbb563eb/5b8f9e94334d37cf604198a4_thumbnail.png",
  },
  {
    name: "BIZVAL VI",
    category: "VISUAL IDENTITY",
    href: "/projects/bizval-vi",
    bgImage:
      "https://cdn.prod.website-files.com/5b6fab70681f8915bbb563eb/5bd3c19d2e2a6c5fc3e9e9f3_thumbnail.png",
  },
  {
    name: "IoT\u6B21\u4E16\u4EE3\u8FB2\u696D",
    category: "DATA ANALYSIS, IoT",
    href: "/projects/it-agriculture",
    bgImage:
      "https://cdn.prod.website-files.com/5b6fab70681f8915bbb563eb/5bd3c7b89a87ec80a8e3ec02_thumbnail.png",
  },
  {
    name: "U/N.\u03B1 Artwork",
    category: "GENERATIVE DESIGN, ART WORK",
    href: "/projects/u-n-a-artwork",
    bgImage:
      "https://cdn.prod.website-files.com/5b6fab70681f8915bbb563eb/5bd3c8f79a87ec2a87e3ecf3_thumbnail.png",
  },
  {
    name: "BIZVAL_WEB",
    category: "SERVICE DESIGN",
    href: "/projects/bizval-web",
    bgImage:
      "https://cdn.prod.website-files.com/5b6fab70681f8915bbb563eb/5be2b4c0f0b7e4d1a2308c57_thumbnail.png",
  },
  {
    name: "Jipenquo",
    category: "WEB SITE",
    href: "/projects/jipenquo",
    bgImage:
      "https://cdn.prod.website-files.com/5b6fab70681f8915bbb563eb/5c12dc1b13e49e04bcdc8c26_thumbnail.png",
  },
  {
    name: "OMNI",
    category: "PROTOTYPING",
    href: "/projects/omni",
    bgImage:
      "https://cdn.prod.website-files.com/5b6fab70681f8915bbb563eb/5c32babe86faa1df7116d55c_thumbnail.png",
  },
];

export default function WorksSection() {
  return (
    <section id="works" className="bg-[#f5f5f5]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.href}
            className="group relative block aspect-[4/3] overflow-hidden bg-[#ddd]"
          >
            {/* Background image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.bgImage}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/70 transition-all duration-300 z-10" />

            {/* Project info - shown on hover */}
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
              <h3 className="text-white text-lg font-bold tracking-wider">
                {project.name}
              </h3>
              <p className="text-white/70 text-xs font-bold tracking-widest mt-1 uppercase">
                {project.category}
              </p>
            </div>

            {/* Always visible tag at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-0 transition-opacity duration-300 z-10">
              <p className="text-white text-sm font-bold tracking-wider drop-shadow-md">
                {project.name}
              </p>
              <p className="text-white/70 text-[10px] font-bold tracking-widest mt-0.5 uppercase drop-shadow-md">
                {project.category}
              </p>
            </div>

            {/* Fallback background with project name */}
            <div className="absolute inset-0 flex items-center justify-center bg-[#e0e0e0]">
              <span className="text-navy/20 text-2xl font-bold tracking-widest">
                {project.name}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
