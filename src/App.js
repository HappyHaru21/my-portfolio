import React, { useState, useEffect, useRef, useMemo } from 'react';

const portfolioData = {
  name: "Sidak Deep Singh",
  title: "Machine Learning Researcher",
  summary: "Machine Learning researcher with hands-on experience in sparse neural networks, low-resource NLP, and transformer fine-tuning. Skilled in optimizing model efficiency with PyTorch, LoRA, and quantization, and experienced in experiment tracking with WandB and MLFlow. This monograph surveys a body of applied and theoretical work spanning multi-agent reinforcement learning for urban traffic coordination, indigenous language preservation through efficient LLM adaptation, and accessibility-focused computer vision systems.",
  resumeUrl: "/SidakDeepSinghResumeDEC2025.pdf",
  contact: {
    email: "singh.sidak1deep@gmail.com",
    linkedin: "https://www.linkedin.com/in/sidakdeep",
    github: "https://github.com/HappyHaru21",
    kaggle: "https://www.kaggle.com/haruki23",
    discordUsername: "haroowkie",
    discordLink: "https://discordapp.com/users/547370864400924684",
    phone: "+91 7985553899",
    location: "Chennai, India"
  },
  publications: [
    {
      id: "pub-traffic",
      title: "Beyond static snapshots: gated recurrent units and graph attention networks for smarter multi-agent traffic control",
      shortTitle: "Beyond Static Snapshots (HC-STGRL)",
      authors: ["Mohita", "S. D. Singh", "D. Subitha", "J. C. Kavitha"],
      journal: "Frontiers in Artificial Intelligence",
      year: "2026",
      volume: "Vol. 9",
      doi: "10.3389/frai.2026.1891950",
      link: "https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2026.1891950/full",
      description: "Introduced Hybrid Coordinated Spatio-Temporal Graph Reinforcement Learning (HC-STGRL), integrating Gated Recurrent Units (GRU), Graph Attention Networks (GAT), and 3DQN to capture dynamic spatio-temporal traffic congestion and withstand sensor malfunctions in urban traffic networks.",
      benchmarks: [
        { label: "Travel Time", value: "−11.3%", note: "vs. CoLight", color: "accent" },
        { label: "Waiting Time", value: "−14.9%", note: "SUMO Grid Sim", color: "emerald" },
        { label: "Sensor Faults", value: "Stable @ 20%", note: "Zero starvation collapse", color: "dark" }
      ],
      technologies: [
        "Reinforcement Learning (MARL)",
        "Graph Attention Networks (GAT)",
        "Gated Recurrent Units (GRU)",
        "3DQN",
        "PyTorch",
        "SUMO Simulation",
        "Neural Networks",
        "Python"
      ]
    }
  ],
  experience: [
    {
      id: "exp-experial",
      title: "Machine Learning Research Assistant",
      company: "Experial AI",
      companyUrl: "https://www.experial.ai/",
      location: "Cologne, Germany (Remote)",
      date: "Sep 2025 — Present",
      isCurrent: true,
      description: [
        "Collaborating with Experial AI's research pod on applied ML experiments and continual model evaluation.",
        "Driving rapid prototyping cycles for workloads and summarizing experiment findings for stakeholders.",
        "Supporting deployment-readiness reviews by translating research insights into actionable engineering next steps."
      ],
      technologies: [
        "Python",
        "PyTorch",
        "Transformers",
        "Large Language Models",
        "Model Training",
        "Git",
        "Data Preprocessing"
      ]
    },
    {
      id: "exp-vit",
      title: "Machine Learning Research Intern",
      company: "VIT University",
      companyUrl: "https://chennai.vit.ac.in/",
      location: "Chennai, India",
      date: "May — July 2025",
      isCurrent: false,
      description: [
        "Engineered and benchmarked sparse convolutional neural networks (CNN) with orthogonal initialization and adaptive per-channel activations in PyTorch.",
        "Optimized accuracy-sparsity trade-offs through extensive ablation studies and hyperparameter tuning on CIFAR-10/100.",
        "Achieved 84% activation sparsity and 62% accuracy on CIFAR-10 with a novel adaptive sparse initialization."
      ],
      technologies: [
        "PyTorch",
        "Python",
        "Neural Networks",
        "Data Preprocessing",
        "MatPlotLib",
        "Model Training",
        "Transformers",
        "OpenCV",
        "TensorFlow"
      ]
    }
  ],
  projects: [
    {
      id: "proj-cherokee",
      title: "Cherokee–English Translation with Gemma-3N",
      category: "LLM / NLP",
      description: "Fine-tuned Google's Gemma-3N large language model for high-quality Cherokee→English translation using a custom parallel corpus. Leveraged Unsloth's quantization (4-bit and FP16) and LoRA adapters on 0.25% of weights, cutting GPU memory usage by >80% across 14,151 sentence pairs.",
      technologies: [
        "Large Language Models",
        "Parameter-Efficient Fine-Tuning",
        "Transformers",
        "Natural Language Processing (NLP)",
        "PyTorch",
        "Quantization",
        "Python"
      ],
      link: "https://www.kaggle.com/code/huummm/cherokee-to-english-with-gemma3n"
    },
    {
      id: "proj-chatbot",
      title: "Multimodal AI Chatbot",
      category: "Full-Stack AI",
      description: "Built and deployed a chatbot handling text, image, and audio using LLM and vision models. Implemented real-time streaming, robust file validation, and direct cloud inference via Groq Vision API.",
      technologies: [
        "FastAPI",
        "Python",
        "REST APIs",
        "React",
        "Data Preprocessing",
        "Git",
        "TensorFlow",
        "PyTorch",
        "JavaScript"
      ],
      link: "https://github.com/HappyHaru21/multimodal-ai-chatbot"
    },
    {
      id: "proj-mood",
      title: "Mood Analyser & Playlist Generator",
      category: "MERN Stack",
      description: "Developed a full-stack app to log user moods, visualize trends, and create Spotify-based playlists. Engineered interactive mood tracking, user authentication, and live charting.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "MERN",
        "REST APIs",
        "Data Preprocessing",
        "Git",
        "JavaScript"
      ],
      link: "https://github.com/HappyHaru21/mood-analyser-playlist-generator"
    },
    {
      id: "proj-vision",
      title: "BeMyVision-Environmental Captioning",
      category: "Computer Vision",
      description: "Prepared a real-time image captioning system using BLIP and YOLOv3 models. Integrated text-to-speech conversion and OCR for reading text aloud.",
      technologies: [
        "Python",
        "OpenCV",
        "PyTorch",
        "Transformers",
        "Model Training",
        "Git",
        "TensorFlow"
      ],
      link: "https://github.com/HappyHaru21/BeMyVision"
    },
    {
      id: "proj-search",
      title: "Parallel Search using OpenMP",
      category: "HPC / Systems",
      description: "Implemented a parallel search algorithm with OpenMP to optimize CSV file processing, decreasing search time by 30%. Developed a Qt-based GUI.",
      technologies: [
        "C/C++",
        "Qt",
        "Git"
      ],
      link: "https://github.com/HappyHaru21/parallel-search-openmp"
    }
  ],
  education: [
    {
      id: "edu-vit",
      degree: "B.Tech. CSE (AI & Robotics)",
      institution: "Vellore Institute of Technology",
      location: "Chennai, India",
      date: "2023 — 2027",
      cgpa: "8.72",
      isCurrent: true,
      transcriptUrl: "/AcademicTranscriptUnofficial.pdf",
      courseworkTech: [
        "Python", "C/C++", "Java", "Go", "TypeScript", "Pandas", "Scikit-learn",
        "MySQL", "PostgreSQL", "Docker", "Kubernetes", "Agile Methodologies"
      ]
    },
    {
      id: "edu-goenka",
      degree: "AISSCE 12th Grade",
      institution: "G.D. Goenka Public School",
      location: "Lucknow, India",
      date: "2019 — 2023",
      cgpa: "8.36",
      isCurrent: false
    }
  ],
  skills: [
    "Python", "Go", "C/C++", "JavaScript", "TypeScript", "Java", "Pandas", "Scikit-learn",
    "PyTorch", "TensorFlow", "OpenCV", "Qt", "MongoDB", "MySQL", "Docker", "Git",
    "REST APIs", "MatPlotLib", "Transformers", "FastAPI", "PostgreSQL", "Kubernetes",
    "MERN", "Model Training", "Neural Networks", "Data Preprocessing", "React", "Agile Methodologies",
    "Large Language Models", "Parameter-Efficient Fine-Tuning", "Natural Language Processing (NLP)", "Quantization",
    "Reinforcement Learning (MARL)", "Graph Attention Networks (GAT)", "Gated Recurrent Units (GRU)", "3DQN", "SUMO Simulation"
  ]
};

/* ═══════════════════════════════════════════
   CUSTOM CSS INJECTOR (fonts + paper styles)
   ═══════════════════════════════════════════ */
const StyleInjector = () => {
  useEffect(() => {
    const fontId = 'manuscript-fonts';
    if (!document.getElementById(fontId)) {
      const link = document.createElement('link');
      link.id = fontId;
      link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400;1,6..72,500&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500&display=swap";
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }

    const styleId = 'manuscript-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        html { scroll-behavior: smooth; }
        body {
          background-color: #FDFBF7;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4cfc4' fill-opacity='0.12'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          color: #1A1817;
          margin: 0;
          font-family: 'Inter', -apple-system, sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        ::selection { background: #E8D8B8; color: #3D2B00; }
        .font-editorial { font-family: 'Playfair Display', Georgia, serif; }
        .font-garamond { font-family: 'Cormorant Garamond', Garamond, serif; }
        .font-academic { font-family: 'Newsreader', Georgia, serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }

        .drop-cap::first-letter {
          float: left;
          font-family: 'Playfair Display', serif;
          font-size: 4.2em;
          line-height: 0.75;
          margin-right: 0.12em;
          margin-top: 0.08em;
          color: #8B2500;
          font-weight: 700;
        }

        .paper-card {
          background: #FFFFFF;
          border: 1px solid #E8E0D0;
          box-shadow: 0 1px 3px rgba(139,115,85,0.06), 0 4px 12px rgba(139,115,85,0.04);
          transition: all 0.4s cubic-bezier(0.22,1,0.36,1);
        }
        .paper-card:hover {
          box-shadow: 0 4px 20px rgba(139,115,85,0.12), 0 12px 40px rgba(139,115,85,0.06);
          transform: translateY(-2px);
          border-color: #C4B9A0;
        }

        .paper-tag {
          background: #F7F3EC;
          border: 1px solid #E0D8C8;
          color: #5C553F;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          padding: 0.25rem 0.65rem;
          border-radius: 9999px;
          transition: all 0.2s;
          display: inline-block;
          user-select: none;
        }
        .paper-tag:hover, .paper-tag.active {
          background: #8B2500;
          color: white;
          border-color: #8B2500;
        }

        .paper-tag-interactive {
          cursor: pointer;
          position: relative;
        }
        .paper-tag-interactive:hover {
          box-shadow: 0 2px 8px rgba(139, 37, 0, 0.25);
          transform: translateY(-1px);
        }

        .ornamental-rule {
          border: none;
          height: 1px;
          background: linear-gradient(90deg, transparent, #C4B9A0, #8B7355, #C4B9A0, transparent);
          margin: 2.5rem 0;
        }

        .section-number {
          font-family: 'Playfair Display', serif;
          font-size: 5rem;
          font-weight: 900;
          line-height: 1;
          color: transparent;
          -webkit-text-stroke: 1.5px #D4C9B0;
          opacity: 0.4;
          position: absolute;
          top: -1rem;
          right: 0;
          user-select: none;
          pointer-events: none;
        }

        .margin-note {
          font-family: 'Newsreader', serif;
          font-style: italic;
          font-size: 0.75rem;
          color: #8B7355;
          border-left: 2px solid #D4C9B0;
          padding-left: 0.75rem;
          margin-top: 0.5rem;
        }

        /* Navigation styling */
        .sticky-nav-item {
          color: #5C4A2E;
          text-decoration: none;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          padding: 0.4rem 0.65rem;
          border-radius: 4px;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        .sticky-nav-item:hover {
          color: #8B2500;
          background: rgba(139, 37, 0, 0.06);
        }

        @keyframes tooltipFadeIn {
          from { opacity: 0; transform: translate(-50%, 6px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
        .animate-tooltip {
          animation: tooltipFadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @media (max-width: 768px) {
          .section-number { font-size: 3rem; top: -0.5rem; }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);
  return null;
};

/* ═══════════════════
   FADE-IN OBSERVER
   ═══════════════════ */
const useFadeIn = (threshold = 0.1) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); obs.unobserve(entry.target); }
    }, { threshold });
    obs.observe(el);
    return () => { try { obs.unobserve(el); } catch(e) {} };
  }, [threshold]);
  return [ref, isVisible];
};

/* ═══════════════
   SCROLL TO TOP
   ═══════════════ */
const ScrollToTop = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const toggle = () => setShow(window.pageYOffset > 400);
    window.addEventListener('scroll', toggle);
    return () => window.removeEventListener('scroll', toggle);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      style={{
        position: 'fixed', bottom: '2rem', right: '2rem',
        background: '#2C2418', color: '#F0E8D8',
        border: 'none', borderRadius: '4px',
        width: '44px', height: '44px',
        cursor: 'pointer', zIndex: 40,
        opacity: show ? 1 : 0,
        transform: show ? 'scale(1)' : 'scale(0.5)',
        transition: 'all 0.3s ease',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.2rem', boxShadow: '0 2px 12px rgba(44,36,24,0.3)'
      }}
    >
      ↑
    </button>
  );
};

/* ═══════════════
   COLOPHON BAR
   ═══════════════ */
const Colophon = ({ contact }) => (
  <div style={{
    background: '#2C2418', color: '#D4C9B0',
    fontSize: '10px', fontFamily: "'JetBrains Mono', monospace",
    letterSpacing: '0.12em', textTransform: 'uppercase',
    padding: '0.5rem 1.5rem', textAlign: 'center'
  }}>
    Portfolio Monograph &bull; Sidak Deep Singh &bull; Volume 2026 &bull; {contact.location} &bull;{' '}
    <a href={`mailto:${contact.email}`} style={{ color: '#D4C9B0', textDecoration: 'underline' }}>
      {contact.email}
    </a>
  </div>
);

/* ══════════════════════════════════════════════════════════
   STICKY MANUSCRIPT NAVIGATION BAR (Quick Travel Buttons)
   ══════════════════════════════════════════════════════════ */
const StickyNav = ({ name, resumeUrl }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "about", href: "#about" },
    { label: "experience", href: "#experience" },
    { label: "publications", href: "#publications" },
    { label: "skills", href: "#skills" },
    { label: "projects", href: "#projects" },
    { label: "education", href: "#education" },
    { label: "contact", href: "#contact" }
  ];

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;
    const headerOffset = 64;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: scrolled ? 'rgba(253, 251, 247, 0.94)' : 'rgba(253, 251, 247, 0.88)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderBottom: '1px solid #E0D8C8',
      transition: 'box-shadow 0.25s ease, background 0.25s ease',
      boxShadow: scrolled ? '0 4px 16px rgba(139, 115, 85, 0.08)' : '0 1px 3px rgba(139, 115, 85, 0.04)'
    }}>
      <div style={{
        maxWidth: '56rem',
        margin: '0 auto',
        padding: '0.6rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem'
      }}>
        {/* Brand / Logo */}
        <a
          href="#about"
          onClick={(e) => handleScrollTo(e, '#about')}
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: '6px' }}
        >
          <span className="font-editorial" style={{
            fontSize: '1.2rem',
            fontWeight: 900,
            color: '#1A1410',
            letterSpacing: '-0.02em',
            lineHeight: 1
          }}>
            {name}
          </span>
          <span className="font-mono" style={{ fontSize: '9px', color: '#8B7355', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
            / Monograph
          </span>
        </a>

        {/* Desktop Quick Travel Links */}
        <nav style={{ display: 'none' }} className="md:flex md:items-center md:gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="sticky-nav-item"
            >
              {item.label}
            </a>
          ))}

          {/* Quick Travel Resume Button */}
          <a
            href={resumeUrl}
            download="Sidak_Deep_Singh_resume.pdf"
            className="font-mono"
            style={{
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              background: '#2C2418',
              color: '#F0E8D8',
              padding: '0.35rem 0.85rem',
              borderRadius: '3px',
              textDecoration: 'none',
              fontWeight: 700,
              marginLeft: '0.5rem',
              transition: 'all 0.2s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              boxShadow: '0 1px 3px rgba(44, 36, 24, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#8B2500';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#2C2418';
              e.currentTarget.style.color = '#F0E8D8';
            }}
          >
            <span>Resume</span>
            <span>↓</span>
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href={resumeUrl}
            download="Sidak_Deep_Singh_resume.pdf"
            className="font-mono"
            style={{
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              background: '#2C2418',
              color: '#F0E8D8',
              padding: '0.3rem 0.6rem',
              borderRadius: '3px',
              textDecoration: 'none',
              fontWeight: 700
            }}
          >
            Resume ↓
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
            style={{
              background: 'none',
              border: '1px solid #D4C9B0',
              borderRadius: '4px',
              padding: '0.35rem 0.55rem',
              cursor: 'pointer',
              color: '#2C2418',
              fontSize: '14px',
              fontFamily: "'JetBrains Mono', monospace"
            }}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          background: '#FAF6EE',
          borderTop: '1px solid #E0D8C8',
          borderBottom: '2px solid #2C2418',
          padding: '1rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="sticky-nav-item"
              style={{ padding: '0.6rem 0.5rem', borderBottom: '1px solid #EFEAE0' }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

/* ══════════════════════════════════════════════════════
   SCHOLARLY FOOTNOTE TOOLTIP (Skill Usage Cross-Reference)
   ══════════════════════════════════════════════════════ */
const SkillTooltip = ({ visible, skill, content, x, y, onClose }) => {
  if (!visible || !content || content.length === 0) return null;

  // Keep tooltip on-screen
  const safeLeft = Math.max(130, Math.min(x, window.innerWidth - 150));
  const safeTop = Math.max(70, Math.min(y + 16, window.innerHeight - 200));

  return (
    <div
      className="animate-tooltip"
      style={{
        position: 'fixed',
        top: `${safeTop}px`,
        left: `${safeLeft}px`,
        transform: 'translateX(-50%)',
        zIndex: 9999,
        pointerEvents: 'auto'
      }}
    >
      <div style={{
        background: '#2C2418',
        color: '#F0E8D8',
        borderRadius: '4px',
        padding: '0.75rem 1rem',
        border: '1px solid #8B7355',
        boxShadow: '0 10px 30px rgba(44, 36, 24, 0.35), 0 2px 8px rgba(44, 36, 24, 0.2)',
        maxWidth: '320px',
        minWidth: '240px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(212, 201, 176, 0.25)',
          paddingBottom: '0.4rem',
          marginBottom: '0.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
            <span className="font-mono" style={{ fontSize: '11px', color: '#FFFFFF', fontWeight: 700 }}>
              {skill}
            </span>
            <span className="font-mono" style={{ fontSize: '9px', color: '#C4B9A0', textTransform: 'uppercase' }}>
              Corpus Index
            </span>
          </div>
          <span className="font-mono" style={{
            fontSize: '9px',
            background: '#8B2500',
            color: '#FFFFFF',
            padding: '0.1rem 0.4rem',
            borderRadius: '2px',
            fontWeight: 700
          }}>
            {content.length} {content.length === 1 ? 'ref' : 'refs'}
          </span>
        </div>

        <p className="font-academic" style={{ fontSize: '11px', color: '#D4C9B0', fontStyle: 'italic', margin: '0 0 0.5rem' }}>
          Referenced in the following works:
        </p>

        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
          {content.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                onClick={(e) => {
                  e.preventDefault();
                  onClose?.();
                  const target = document.querySelector(item.link);
                  if (target) {
                    const headerOffset = 70;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                style={{
                  color: '#F0E8D8',
                  textDecoration: 'none',
                  fontSize: '11px',
                  fontFamily: "'Newsreader', Georgia, serif",
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  gap: '8px',
                  lineHeight: '1.3',
                  padding: '2px 0'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#F59E0B';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#F0E8D8';
                }}
              >
                <span style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                  <span style={{ color: '#8B7355', fontSize: '10px' }}>§</span>
                  <span style={{ textDecoration: 'underline', textUnderlineOffset: '2px' }}>
                    {item.name}
                  </span>
                </span>
                <span className="font-mono" style={{
                  fontSize: '8px',
                  color: '#C4B9A0',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  flexShrink: 0,
                  background: 'rgba(255,255,255,0.06)',
                  padding: '1px 4px',
                  borderRadius: '2px'
                }}>
                  {item.type}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

/* ═══════════════
   MASTHEAD (#about)
   ═══════════════ */
const Masthead = ({ data }) => {
  return (
    <header id="about" style={{ maxWidth: '52rem', margin: '0 auto', padding: '2.5rem 1.5rem 0' }}>
      {/* Journal nameplate */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        borderBottom: '2px solid #2C2418', paddingBottom: '1rem', marginBottom: '1rem',
        flexWrap: 'wrap', gap: '1rem'
      }}>
        <div className="font-editorial" style={{ fontSize: '2rem', fontWeight: 900, color: '#2C2418', lineHeight: 1, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
          The Singh<br/>Monograph
        </div>
        <div className="font-mono" style={{ textAlign: 'right', fontSize: '10px', color: '#8B7355', textTransform: 'uppercase', letterSpacing: '0.1em', lineHeight: 1.6 }}>
          <div>Volume I &bull; Issue 1</div>
          <div>Est. 2023</div>
          <div style={{ color: '#8B2500', fontWeight: 700 }}>{data.contact.location}</div>
        </div>
      </div>

      {/* Thin ornamental */}
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #C4B9A0, transparent)', marginBottom: '2rem' }} />

      {/* Title block */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <p className="font-mono" style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#8B7355', marginBottom: '1rem' }}>
          Original Research Portfolio &bull; Accepted for Review
        </p>
        <h1 className="font-editorial" style={{ fontSize: 'clamp(3rem, 8vw, 4.5rem)', fontWeight: 900, color: '#1A1410', lineHeight: 0.92, letterSpacing: '-0.02em', margin: '0 0 0.75rem' }}>
          Sidak Deep<br/>Singh
        </h1>
        <div style={{ width: '1.5rem', height: '2px', background: '#8B2500', margin: '0 auto 1rem' }} />
        <p className="font-garamond" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', fontStyle: 'italic', color: '#5C4A2E', maxWidth: '32rem', margin: '0 auto', lineHeight: 1.5 }}>
          Machine Learning Researcher specializing in Multi-Agent Systems, Sparse Neural Networks &amp; Low-Resource NLP
        </p>
      </div>

      {/* Abstract */}
      <div className="paper-card" style={{ padding: '2rem', marginBottom: '2rem' }}>
        <p className="font-mono" style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#8B2500', fontWeight: 700, marginBottom: '0.75rem' }}>
          Abstract
        </p>
        <p className="font-academic drop-cap" style={{ fontSize: '1rem', color: '#383020', lineHeight: 1.85 }}>
          {data.summary}
        </p>
      </div>

      {/* Links bar */}
      <div style={{
        borderTop: '1px solid #D4C9B0', paddingTop: '1rem',
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
        gap: '0.75rem', marginBottom: '1rem'
      }}>
        {[
          { label: '✉ Email', href: `mailto:${data.contact.email}` },
          { label: '⌂ GitHub', href: data.contact.github, external: true },
          { label: '∞ LinkedIn', href: data.contact.linkedin, external: true },
          { label: '◈ Kaggle', href: data.contact.kaggle, external: true },
        ].map(l => (
          <a key={l.label} href={l.href} target={l.external ? '_blank' : undefined} rel={l.external ? 'noopener noreferrer' : undefined}
            className="font-mono"
            style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#8B7355', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={(e) => e.target.style.color = '#8B2500'}
            onMouseLeave={(e) => e.target.style.color = '#8B7355'}
          >
            {l.label}
          </a>
        ))}
        <a href={data.resumeUrl} download className="font-mono"
          style={{
            fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em',
            background: '#2C2418', color: '#F0E8D8', padding: '0.4rem 0.75rem',
            textDecoration: 'none', textAlign: 'center', fontWeight: 600,
            transition: 'background 0.2s'
          }}
          onMouseEnter={(e) => e.target.style.background = '#8B2500'}
          onMouseLeave={(e) => e.target.style.background = '#2C2418'}
        >
          ↓ Download CV
        </a>
      </div>
    </header>
  );
};

/* ═════════════════════
   SECTION WRAPPER
   ═════════════════════ */
const MonoSection = ({ id, number, title, subtitle, children }) => {
  const [ref, isVisible] = useFadeIn(0.05);
  return (
    <section id={id} ref={ref} style={{
      position: 'relative', padding: '2rem 0',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 0.8s ease, transform 0.8s ease'
    }}>
      <span className="section-number">{number}</span>
      <div style={{ marginBottom: '1.5rem' }}>
        <h2 className="font-editorial" style={{ fontSize: '1.5rem', fontWeight: 900, color: '#2C2418', letterSpacing: '-0.01em', margin: 0 }}>
          {title}
        </h2>
        {subtitle && (
          <p className="font-mono" style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#8B7355', marginTop: '0.25rem' }}>
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </section>
  );
};

/* ═══════════════════
   PUBLICATION
   ═══════════════════ */
const Publication = ({ pub }) => (
  <article className="paper-card" style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
    {/* Meta ribbon */}
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
      <span className="font-mono" style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', background: '#8B2500', color: 'white', padding: '0.25rem 0.75rem', fontWeight: 700 }}>
        Original Research
      </span>
      <span className="font-mono" style={{ fontSize: '10px', color: '#8B7355' }}>DOI: {pub.doi}</span>
      <span className="font-mono" style={{ fontSize: '10px', color: '#8B7355' }}>{pub.journal} &bull; {pub.volume} ({pub.year})</span>
    </div>

    {/* Title */}
    <h3 className="font-editorial" style={{ fontSize: 'clamp(1.3rem, 3.5vw, 1.75rem)', fontWeight: 700, color: '#1A1410', lineHeight: 1.3, marginBottom: '1rem' }}>
      {pub.title}
    </h3>

    {/* Authors */}
    <div className="font-garamond" style={{ fontSize: '1.1rem', color: '#5C4A2E', borderLeft: '4px solid #8B2500', paddingLeft: '1rem', marginBottom: '1.5rem' }}>
      {pub.authors.map((author, i) => (
        <span key={i}>
          {i > 0 && ', '}
          {author === 'S. D. Singh' ? (
            <span style={{ color: '#8B2500', fontWeight: 700 }}>{author}</span>
          ) : author}
        </span>
      ))}
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
      {/* Body */}
      <div>
        <p className="font-academic" style={{ fontSize: '0.95rem', color: '#383020', lineHeight: 1.85, marginBottom: '0.75rem' }}>
          {pub.description}
        </p>
        <div className="margin-note">
          Evaluated on SUMO microsimulation under varying sensor failure rates. All improvements statistically significant (p&lt;0.01).
        </div>
      </div>

      {/* Results sidebar */}
      <div style={{ background: '#FAF6EE', border: '1px solid #E0D8C8', padding: '1.25rem' }}>
        <p className="font-mono" style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#8B7355', fontWeight: 700, borderBottom: '1px solid #E0D8C8', paddingBottom: '0.5rem', marginBottom: '0.75rem' }}>
          Table 1. SUMO Benchmark Results
        </p>
        {pub.benchmarks.map((b, i) => (
          <div key={i}>
            <div className="font-mono" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '0.5rem 0' }}>
              <span style={{ fontSize: '0.85rem', color: '#5C4A2E' }}>{b.label}</span>
              <span style={{
                fontSize: '1.5rem', fontWeight: 900,
                color: b.color === 'accent' ? '#8B2500' : b.color === 'emerald' ? '#065f46' : '#2C2418'
              }}>
                {b.value}
              </span>
            </div>
            {i < pub.benchmarks.length - 1 && <div style={{ height: '1px', background: '#E0D8C8' }} />}
          </div>
        ))}
        <p className="font-academic" style={{ fontSize: '10px', color: '#8B7355', fontStyle: 'italic', marginTop: '0.5rem' }}>
          All metrics relative to CoLight baseline on 4×4 arterial grid.
        </p>
      </div>
    </div>

    {/* Tags */}
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.5rem' }}>
      {pub.technologies.map((t, i) => <span key={i} className="paper-tag">{t}</span>)}
    </div>

    {/* Action bar */}
    <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #E0D8C8', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
      <a href={pub.link} target="_blank" rel="noopener noreferrer" className="font-mono"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          background: '#2C2418', color: '#F0E8D8', padding: '0.75rem 1.5rem',
          textDecoration: 'none', fontSize: '12px', fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.1em',
          transition: 'background 0.2s', boxShadow: '0 2px 8px rgba(44,36,24,0.15)'
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = '#8B2500'}
        onMouseLeave={(e) => e.currentTarget.style.background = '#2C2418'}
      >
        Read Full Paper on Frontiers →
      </a>
      <span className="font-mono" style={{ fontSize: '10px', color: '#8B7355' }}>
        Frontiers in Artificial Intelligence, 9, 1891950
      </span>
    </div>
  </article>
);

/* ═══════════════════
   EXPERIENCE CARD
   ═══════════════════ */
const ExperienceCard = ({ job }) => (
  <div className="paper-card" style={{ padding: '2rem', borderLeft: `4px solid ${job.isCurrent ? '#8B2500' : '#D4C9B0'}` }}>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '1rem' }}>
      <div>
        <h3 className="font-editorial" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1A1410', margin: 0 }}>
          {job.title}
        </h3>
        <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="font-mono"
          style={{ fontSize: '11px', color: '#8B2500', textDecoration: 'none' }}
          onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
          onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
        >
          {job.company} &bull; {job.location}
        </a>
      </div>
      <span className="font-mono" style={{
        fontSize: '10px', color: '#8B7355', background: '#FAF6EE',
        padding: '0.25rem 0.75rem', border: '1px solid #E0D8C8', whiteSpace: 'nowrap'
      }}>
        {job.date}
      </span>
    </div>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {job.description.map((d, i) => (
        <li key={i} className="font-academic" style={{ fontSize: '0.875rem', color: '#383020', lineHeight: 1.7, display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <span style={{ color: '#8B2500', fontWeight: 700, marginTop: '2px', flexShrink: 0 }}>›</span>
          <span>{d}</span>
        </li>
      ))}
    </ul>
    {job.technologies && (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.75rem' }}>
        {job.technologies.map((t, i) => <span key={i} className="paper-tag">{t}</span>)}
      </div>
    )}
  </div>
);

/* ═══════════════════
   PROJECT CARD
   ═══════════════════ */
const ProjectCard = ({ project, index, isWide }) => (
  <div className="paper-card" style={{
    padding: '1.5rem',
    display: 'flex', flexDirection: isWide ? 'row' : 'column',
    justifyContent: 'space-between', gap: isWide ? '1.5rem' : 0,
    gridColumn: isWide ? '1 / -1' : undefined,
    alignItems: isWide ? 'center' : 'stretch',
    cursor: 'default'
  }}>
    <div style={{ flex: 1 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
        <span className="font-mono" style={{ fontSize: '10px', color: '#8B2500', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Fig. {index + 1}
        </span>
        <span className="font-mono" style={{ fontSize: '10px', color: '#8B7355' }}>{project.category}</span>
      </div>
      <h3 className="font-editorial" style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1A1410', marginBottom: '0.5rem', transition: 'color 0.2s' }}>
        {project.title}
      </h3>
      <p className="font-academic" style={{ fontSize: '0.8rem', color: '#5C4A2E', lineHeight: 1.7, marginBottom: '0.75rem' }}>
        {project.description}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
        {project.technologies.map((t, i) => <span key={i} className="paper-tag">{t}</span>)}
      </div>
    </div>
    <div style={{
      borderTop: isWide ? 'none' : '1px solid #E0D8C8',
      borderLeft: isWide ? '1px solid #E0D8C8' : 'none',
      paddingTop: isWide ? 0 : '1rem',
      paddingLeft: isWide ? '1.5rem' : 0,
      marginTop: isWide ? 0 : '1rem',
      flexShrink: 0
    }}>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-mono"
        style={{ fontSize: '11px', fontWeight: 700, color: '#8B2500', textDecoration: 'none', whiteSpace: 'nowrap' }}
        onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
        onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
      >
        {project.link.includes('kaggle') ? 'View on Kaggle' : 'View on GitHub'} →
      </a>
    </div>
  </div>
);

/* ══════════════════════════════════════════════════════════
   SKILL TAGS SECTION WITH INTERACTIVE USAGE HOVER
   ══════════════════════════════════════════════════════════ */
const SkillsSection = ({ skills, skillUsage, setTooltip }) => {
  const handleMouseEnter = (e, skill) => {
    const usage = skillUsage[skill];
    if (usage && usage.length > 0) {
      const rect = e.currentTarget.getBoundingClientRect();
      setTooltip({
        visible: true,
        skill: skill,
        content: usage,
        x: rect.left + rect.width / 2,
        y: rect.bottom + 4
      });
    }
  };

  const handleMouseLeave = () => {
    setTooltip(prev => ({ ...prev, visible: false }));
  };

  return (
    <div style={{ position: 'relative' }}>
      <p className="font-academic" style={{ fontSize: '12px', color: '#8B7355', fontStyle: 'italic', marginBottom: '1rem' }}>
        Hover or tap any skill tag below to view its citations across publications, applied research, and codebases.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {skills.map((skill, i) => {
          const hasUsage = skillUsage[skill] && skillUsage[skill].length > 0;
          return (
            <span
              key={i}
              className={`paper-tag ${hasUsage ? 'paper-tag-interactive' : ''}`}
              onMouseEnter={(e) => handleMouseEnter(e, skill)}
              onMouseLeave={handleMouseLeave}
              onClick={(e) => handleMouseEnter(e, skill)}
              title={hasUsage ? `Used in ${skillUsage[skill].length} works` : undefined}
            >
              {skill}
              {hasUsage && (
                <span style={{
                  marginLeft: '4px',
                  opacity: 0.6,
                  fontSize: '9px'
                }}>
                  •
                </span>
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
};

/* ═══════════════════
   EDUCATION CARD
   ═══════════════════ */
const EducationCard = ({ edu }) => (
  <div className="paper-card" style={{ padding: '1.5rem', borderLeft: `4px solid ${edu.isCurrent ? '#8B2500' : '#D4C9B0'}` }}>
    <span className="font-mono" style={{ fontSize: '10px', color: edu.isCurrent ? '#8B2500' : '#8B7355', fontWeight: edu.isCurrent ? 700 : 400 }}>
      {edu.date}
    </span>
    <h3 className="font-editorial" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1A1410', margin: '0.25rem 0' }}>
      {edu.degree}
    </h3>
    <p className="font-academic" style={{ fontSize: '0.875rem', color: '#5C4A2E', margin: '0 0 0.5rem' }}>
      {edu.institution} &bull; {edu.location}
    </p>
    <div className="font-mono" style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', fontSize: '0.875rem' }}>
      <span style={{ color: '#8B7355' }}>CGPA:</span>
      <span style={{ fontSize: '1.75rem', fontWeight: 900, color: '#2C2418' }}>{edu.cgpa}</span>
    </div>
    {edu.transcriptUrl && (
      <a href={edu.transcriptUrl} download className="font-mono"
        style={{ display: 'inline-block', marginTop: '0.5rem', fontSize: '10px', color: '#8B2500', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.1em' }}
        onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
        onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
      >
        Download Transcript (PDF) →
      </a>
    )}
  </div>
);

/* ═══════════════════
   FOOTER / CONTACT
   ═══════════════════ */
const Footer = ({ contact }) => (
  <footer id="contact" style={{ borderTop: '2px solid #2C2418', paddingTop: '2.5rem', paddingBottom: '3.5rem' }}>
    <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
      <h2 className="font-editorial" style={{ fontSize: '1.5rem', fontWeight: 900, color: '#2C2418', marginBottom: '0.5rem' }}>
        Get In Touch
      </h2>
      <p className="font-academic" style={{ fontSize: '0.9rem', color: '#5C4A2E', maxWidth: '28rem', margin: '0 auto' }}>
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
      </p>
    </div>

    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem 2rem', marginBottom: '1.5rem' }}>
      <a href={`mailto:${contact.email}`} className="font-mono"
        style={{ fontSize: '12px', color: '#8B2500', textDecoration: 'none', fontWeight: 600 }}
        onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
        onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
      >
        ✉ {contact.email}
      </a>
      <a href={contact.discordLink} target="_blank" rel="noopener noreferrer" className="font-mono"
        style={{ fontSize: '12px', color: '#8B2500', textDecoration: 'none', fontWeight: 600 }}
        onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
        onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
      >
        ⊹ Discord: {contact.discordUsername}
      </a>
    </div>

    <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
      {[
        { label: 'GitHub', href: contact.github },
        { label: 'LinkedIn', href: contact.linkedin },
        { label: 'Kaggle', href: contact.kaggle },
      ].map(l => (
        <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="font-mono"
          style={{ fontSize: '11px', color: '#8B7355', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.1em' }}
          onMouseEnter={(e) => e.target.style.color = '#8B2500'}
          onMouseLeave={(e) => e.target.style.color = '#8B7355'}
        >
          {l.label}
        </a>
      ))}
    </div>

    <p className="font-mono" style={{ textAlign: 'center', fontSize: '10px', color: '#8B7355', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
      End of Monograph &bull; &copy; {new Date().getFullYear()} Sidak Deep Singh
    </p>
    <p className="font-garamond" style={{ textAlign: 'center', fontSize: '0.85rem', fontStyle: 'italic', color: '#8B7355', marginTop: '0.25rem' }}>
      Typeset in Playfair Display, Newsreader &amp; Cormorant Garamond. Printed on digital parchment.
    </p>
  </footer>
);

/* ═══════════════════
   APP
   ═══════════════════ */
export default function App() {
  const d = portfolioData;

  const [tooltip, setTooltip] = useState({
    visible: false,
    skill: '',
    content: [],
    x: 0,
    y: 0
  });

  // Calculate skill usage map across publications, experience, projects, and education
  const { sortedSkills, skillUsage } = useMemo(() => {
    const usage = {};
    const counts = {};

    const addToUsage = (tech, itemInfo) => {
      if (!usage[tech]) {
        usage[tech] = [];
      }
      if (!usage[tech].some(i => i.name === itemInfo.name)) {
        usage[tech].push(itemInfo);
      }
    };

    // Publication
    d.publications.forEach(pub => {
      if (pub.technologies) {
        pub.technologies.forEach(tech => {
          counts[tech] = (counts[tech] || 0) + 1;
          addToUsage(tech, { name: pub.shortTitle || pub.title, type: 'Publication', link: '#publications' });
        });
      }
    });

    // Experience
    d.experience.forEach(exp => {
      if (exp.technologies) {
        exp.technologies.forEach(tech => {
          counts[tech] = (counts[tech] || 0) + 1;
          addToUsage(tech, { name: `${exp.company} (${exp.title})`, type: 'Experience', link: '#experience' });
        });
      }
    });

    // Projects
    d.projects.forEach(proj => {
      if (proj.technologies) {
        proj.technologies.forEach(tech => {
          counts[tech] = (counts[tech] || 0) + 1;
          addToUsage(tech, { name: proj.title, type: 'Project', link: '#projects' });
        });
      }
    });

    // Education / Foundational Coursework
    d.education.forEach(edu => {
      if (edu.courseworkTech) {
        edu.courseworkTech.forEach(tech => {
          counts[tech] = (counts[tech] || 0) + 1;
          addToUsage(tech, { name: `${edu.institution} (${edu.degree})`, type: 'Academic', link: '#education' });
        });
      }
    });

    // Keep all skills from portfolioData.skills, sorted by usage frequency
    const sorted = [...new Set(d.skills)].sort((a, b) => {
      return (counts[b] || 0) - (counts[a] || 0);
    });

    return { sortedSkills: sorted, skillUsage: usage };
  }, [d]);

  return (
    <>
      <StyleInjector />
      <Colophon contact={d.contact} />
      <StickyNav name={d.name} resumeUrl={d.resumeUrl} />

      <div style={{ maxWidth: '52rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <Masthead data={d} />

        <hr className="ornamental-rule" />

        {/* 01 — Experience */}
        <MonoSection id="experience" number="01" title="Research Appointments"
          subtitle="Professional Experience • 2025 — Present">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {d.experience.map((job, i) => <ExperienceCard key={i} job={job} />)}
          </div>
        </MonoSection>

        <hr className="ornamental-rule" />

        {/* 02 — Publication */}
        <MonoSection id="publications" number="02" title="Peer-Reviewed Publication"
          subtitle={`${d.publications[0].journal} • ${d.publications[0].volume} • ${d.publications[0].year} • Open Access`}>
          <Publication pub={d.publications[0]} />
        </MonoSection>

        <hr className="ornamental-rule" />

        {/* 03 — Projects */}
        <MonoSection id="projects" number="03" title="Engineering & Applied Projects"
          subtitle={`Selected Works • ${d.projects.length} Codebases`}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {d.projects.map((p, i) => (
              <ProjectCard key={i} project={p} index={i} isWide={i === d.projects.length - 1 && d.projects.length % 2 !== 0} />
            ))}
          </div>
        </MonoSection>

        <hr className="ornamental-rule" />

        {/* 04 — Skills (ABOVE Education) */}
        <MonoSection id="skills" number="04" title="Methodological Taxonomy"
          subtitle={`Technical Competencies • ${sortedSkills.length} Technologies • Appendix A`}>
          <SkillsSection skills={sortedSkills} skillUsage={skillUsage} setTooltip={setTooltip} />
        </MonoSection>

        <hr className="ornamental-rule" />

        {/* 05 — Education */}
        <MonoSection id="education" number="05" title="Formal Education"
          subtitle="Academic Background">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {d.education.map((edu, i) => <EducationCard key={i} edu={edu} />)}
          </div>
        </MonoSection>

        <hr className="ornamental-rule" />

        {/* Footer / Contact */}
        <Footer contact={d.contact} />
      </div>

      <ScrollToTop />
      <SkillTooltip
        visible={tooltip.visible}
        skill={tooltip.skill}
        content={tooltip.content}
        x={tooltip.x}
        y={tooltip.y}
        onClose={() => setTooltip(prev => ({ ...prev, visible: false }))}
      />
    </>
  );
}
