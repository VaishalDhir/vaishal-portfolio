export default function PersonalWebsite() {
  const experience = [
    {
      role: "Data Center Technician",
      company: "IREN",
      period: "January 2026 – Present",
      summary:
        "Support mission-critical GPU and compute infrastructure by monitoring cluster health, triaging faults, and helping maintain stable high-availability operations.",
      points: [
        "Monitor GPU and compute clusters using UFM and BMC tooling to identify degraded nodes, connectivity issues, and performance-impacting faults.",
        "Perform smart-hands tasks including power cycles, BIOS checks, thermal inspections, cable verification, and network path validation across rack environments.",
        "Support provisioning workflows by validating BMC access, IP configuration, out-of-band connectivity, and node readiness before cluster integration.",
        "Collect iDRAC and BMC diagnostic logs, document findings clearly, and escalate with actionable details to speed root-cause analysis.",
      ],
    },
    {
      role: "Assistant Manager",
      company: "7-Eleven Inc.",
      period: "November 2022 – December 2025",
      summary:
        "Led operations in a high-volume environment, strengthening team performance, workflow discipline, and customer-facing problem solving.",
      points: [
        "Improved daily execution by managing staffing, task prioritization, compliance, and issue resolution in a fast-paced retail setting.",
        "Helped increase year-over-year sales by 8.5% through stronger merchandising, better operational consistency, and promotional execution.",
        "Improved employee retention through structured coaching, practical training, and ongoing feedback.",
      ],
    },
    {
      role: "Web Developer",
      company: "Logixtree Network",
      period: "July 2018 – January 2020",
      summary:
        "Built and maintained responsive websites, contributing to better user experience, reliability, and front-end quality.",
      points: [
        "Designed and maintained responsive web interfaces using modern front-end practices and clean implementation patterns.",
        "Improved performance, browser compatibility, and user experience through debugging, testing, and iterative refinements.",
        "Integrated APIs and third-party services to improve automation and product functionality.",
      ],
    },
  ];

  const skills = [
    "Data Center Operations",
    "Cluster Monitoring",
    "UFM / BMC",
    "Linux",
    "Network Troubleshooting",
    "TCP/IP, DNS, DHCP",
    "GPU Cluster Support",
    "Smart-Hands Support",
    "Python",
    "SQL",
    "VMware / Hyper-V",
    "AWS Basics",
  ];

  const recruiterHighlights = [
    "Mission-critical 24/7 operations experience",
    "Strong troubleshooting and escalation discipline",
    "Hands-on infrastructure, hardware, and networking exposure",
    "Clear documentation and cross-team communication",
  ];

  const projects = [
    {
      title: "Smart Mirror Platform",
      subtitle: "Python · Raspberry Pi · APIs · Linux",
      impact:
        "Built a hardware-software system that pulled real-time news, weather, and time data into a clean interactive display for continuous use.",
      bullets: [
        "Integrated live APIs and modular widgets to present dynamic information with a smooth user interface.",
        "Configured device-side components and networking for reliable operation on low-power hardware.",
        "Optimized processes and refresh behavior to keep the experience stable and responsive.",
      ],
    },
    {
      title: "Apartment Finder App",
      subtitle: "Mobile Development · Cloud Database · Geolocation APIs",
      impact:
        "Designed a search experience for apartment discovery using filters, real-time listings, and map-based location features.",
      bullets: [
        "Implemented geolocation, live data retrieval, and cloud-backed property storage.",
        "Improved usability through responsive layout, intuitive filtering, and better navigation flow.",
        "Focused on efficient network calls and caching to improve performance across varied mobile conditions.",
      ],
    },
    {
      title: "Operational Documentation Mindset",
      subtitle: "Incident Notes · Escalation Quality · Technical Clarity",
      impact:
        "Applied a systems-focused approach to documentation by capturing technical observations, status updates, and escalation details in a way that improves team response speed.",
      bullets: [
        "Turned diagnostics into clear written context for engineering and support teams.",
        "Prioritized traceability, status accuracy, and handoff quality in operational workflows.",
        "Strengthened collaboration by reducing ambiguity during incident response and follow-up.",
      ],
    },
  ];

  const certifications = [
    "Google Cybersecurity Certificate",
    "Microsoft Introduction to Datacenter",
  ];

  const stats = [
    { label: "Current Focus", value: "Critical Infrastructure" },
    { label: "Environment", value: "24/7 Operations" },
    { label: "Strength", value: "Fast Incident Triage" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-300/20 selection:text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_15%,rgba(34,211,238,0.12),transparent_22%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.10),transparent_28%),radial-gradient(circle_at_50%_80%,rgba(168,85,247,0.06),transparent_24%)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.2),rgba(2,6,23,0.92))]" />

      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Vaishal Dhir</p>
            <p className="mt-1 text-sm text-slate-400">Data Center Technician</p>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#experience" className="transition hover:text-white">Experience</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-14 md:pb-24 md:pt-20">
        <div className="grid gap-10 md:grid-cols-[1.25fr_0.9fr] md:items-center">
          <div className="transition duration-500">
            <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-sm text-cyan-200 shadow-lg shadow-cyan-500/10">
              Infrastructure Support • Cluster Operations • Technical Reliability
            </div>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl md:leading-[1.02]">
              Keeping critical infrastructure stable, visible, and running.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              I support mission-critical systems with a focus on monitoring, diagnostics, smart-hands execution,
              documentation, and operational stability. My background combines technical operations, leadership,
              and hands-on development.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="rounded-2xl bg-white px-5 py-3 font-medium text-slate-950 transition duration-300 hover:scale-[1.02] hover:shadow-lg">
                Contact Me
              </a>
              <a href="#projects" className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white transition duration-300 hover:bg-white/10">
                View Projects
              </a>
              <a href="/resume.pdf" target="_blank" className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 font-medium text-cyan-100 transition duration-300 hover:bg-cyan-400/15">
                Download Resume
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-xl shadow-black/10 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
                  <p className="text-sm text-slate-400">{item.label}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative transition duration-500">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/15 via-blue-500/10 to-purple-500/10 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl transition duration-300 hover:border-cyan-400/20">
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-blue-500 text-xl font-bold text-slate-950">
                    VD
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-white">Vaishal Dhir</h2>
                    <p className="text-slate-400">Mackenzie, BC</p>
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  <a href="mailto:vaishaldhir4@gmail.com" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200 transition duration-300 hover:bg-white/10">
                    vaishaldhir4@gmail.com
                  </a>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200">
                    438-979-0349
                  </div>
                  <a href="https://www.linkedin.com/in/vaishal-dhir-049323113" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200 transition duration-300 hover:bg-white/10">
                    LinkedIn Profile
                  </a>
                  <a href="https://github.com/" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200 transition duration-300 hover:bg-white/10">
                    GitHub
                  </a>
                </div>

                <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                  <p className="text-sm text-cyan-200">Current Role</p>
                  <p className="mt-1 font-medium text-white">Data Center Technician at IREN</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">About</p>
            <h3 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              Calm execution in high-pressure technical environments.
            </h3>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-300">
            <p>
              I’m a Data Center Technician with experience supporting mission-critical environments, diagnosing issues,
              escalating incidents, and maintaining operational readiness across compute infrastructure.
            </p>
            <p>
              I work best in roles that value reliability, attention to detail, fast learning, and strong ownership. I bring
              a practical mindset to systems, operations, and technical support.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur transition duration-300 hover:bg-white/10"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-6">
        <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10 backdrop-blur transition duration-300 hover:bg-white/[0.07] md:p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Why Recruiters Reach Out</p>
          <h3 className="mt-3 text-3xl font-semibold text-white">Signal over noise</h3>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {recruiterHighlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-4 text-slate-300 transition duration-300 hover:border-cyan-400/20 hover:bg-slate-900"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Experience</p>
            <h3 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Professional background</h3>
          </div>
          <p className="max-w-xl text-slate-400">
            Roles that built technical judgment, operational discipline, and the ability to stay effective under pressure.
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          {experience.map((item) => (
            <div
              key={item.role}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/10 md:p-8"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h4 className="text-2xl font-semibold text-white">{item.role}</h4>
                  <p className="mt-1 text-slate-300">{item.company}</p>
                </div>
                <p className="text-sm text-slate-400">{item.period}</p>
              </div>
              <p className="mt-4 max-w-3xl text-slate-300">{item.summary}</p>
              <div className="mt-6 grid gap-3">
                {item.points.map((point) => (
                  <div key={point} className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-slate-300">
                    {point}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Projects</p>
            <h3 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Work that shows technical range</h3>
          </div>
          <p className="max-w-xl text-slate-400">
            These projects highlight implementation skills, system thinking, and the ability to build practical solutions.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="mb-6 rounded-[1.25rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-5 transition duration-300 group-hover:border-cyan-400/20">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">{project.subtitle}</p>
                <h4 className="mt-4 text-2xl font-semibold text-white">{project.title}</h4>
              </div>
              <p className="leading-7 text-slate-300">{project.impact}</p>
              <div className="mt-5 grid gap-3">
                {project.bullets.map((bullet) => (
                  <div key={bullet} className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm leading-6 text-slate-300">
                    {bullet}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10 backdrop-blur transition duration-300 hover:bg-white/10 md:p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Certifications</p>
            <h3 className="mt-3 text-3xl font-semibold text-white">Continued learning</h3>
            <div className="mt-6 grid gap-3">
              {certifications.map((cert) => (
                <div key={cert} className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-slate-300">
                  {cert}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10 backdrop-blur transition duration-300 hover:bg-white/10 md:p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Education</p>
            <h3 className="mt-3 text-3xl font-semibold text-white">Academic background</h3>
            <div className="mt-6 space-y-4 text-slate-300">
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                <p className="font-semibold text-white">Post Graduation Diploma</p>
                <p className="text-slate-400">Mobile Application Development • Montréal, Canada</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                <p className="font-semibold text-white">Bachelor of Technology</p>
                <p className="text-slate-400">Electronics and Communications • Punjab, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 pb-24 pt-10">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-2xl shadow-cyan-500/5 md:p-12">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="relative">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Contact</p>
            <h3 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Let’s connect.</h3>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Open to technical opportunities, infrastructure-focused roles, and conversations around operations, systems, and support.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="mailto:vaishaldhir4@gmail.com" className="rounded-2xl bg-white px-5 py-3 font-medium text-slate-950 transition duration-300 hover:scale-[1.02]">
                Email Me
              </a>
              <a href="https://www.linkedin.com/in/vaishal-dhir-049323113" className="rounded-2xl border border-white/15 px-5 py-3 font-medium text-white transition duration-300 hover:bg-white/10">
                LinkedIn
              </a>
              <a href="https://github.com/VaishalDhir" className="rounded-2xl border border-white/15 px-5 py-3 font-medium text-white transition duration-300 hover:bg-white/10">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
