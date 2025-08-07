import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Mail, Linkedin, Github, ChevronsUp, Menu, X } from 'lucide-react';

const portfolioData = {
  name: "Sidak Deep Singh",
  title: "  AI & ML Engineer | Full-Stack Developer",
  summary: "While I can't carry a tune, I'm passionate about orchestrating complex ML models and full-stack applications. With a toolkit including Python, PyTorch, TensorFlow, and MERN, I enjoy transforming abstract concepts into tangible, elegant solutions.",
  resumeUrl: "/SidakDeepSinghResumeJUL2025.pdf",
  contact: {
    email: "singh.sidak1deep@gmail.com",
    linkedin: "https://www.linkedin.com/in/sidakdeep",
    github: "https://github.com/HappyHaru21",
    discordUsername: "haroowkie",
    discordLink: "https://discordapp.com/users/547370864400924684",
    phone: "+91 7985553899",
    location: "Chennai, India"
  },
  experience: [
    {
      title: "Machine Learning Intern",
      company: "VIT University",
      location: "Chennai, India",
      date: "May 2025 - July 2025",
      description: [
        "Engineered and benchmarked sparse convolutional neural networks (CNN) with orthogonal initialization and adaptive per-channel activations in PyTorch.",
        "Optimized accuracy-sparsity trade-offs through extensive ablation studies and hyperparameter tuning on CIFAR-10/100.",
        "Achieved 84% activation sparsity and 62% accuracy on CIFAR-10 with a novel adaptive sparse initialization."
      ],
      technologies: ["PyTorch", "Python", "Neural Networks", "Data Preprocessing", "MatPlotLib", "Model Training", "Transformers", "OpenCV", "TensorFlow"]
    }
  ],
  projects: [
    {
      title: "Cherokee–English Translation with Gemma-3N",
      description: "Fine-tuned Google's Gemma-3N large language model for high-quality Cherokee→English translation using a custom parallel corpus. Leveraged Unsloth's quantization (4-bit and FP16) and LoRA adapters for parameter-efficient fine-tuning on only 0.25% of model weights, reducing GPU memory usage by over 80%. Preprocessed 14,151 sentence pairs to create a specialized translator that outperforms generic tools for Cherokee inputs.",
      technologies: ["Large Language Models", "Parameter-Efficient Fine-Tuning", "Transformers", "Natural Language Processing (NLP)", "PyTorch", "Quantization"],
      link: "https://www.kaggle.com/code/huummm/cherokee-to-english-with-gemma3n"
    },
    {
      title: "Multimodal AI Chatbot",
      description: "Built and deployed a chatbot handling text, image, and audio using LLM and vision models. Implemented real-time streaming, robust file validation, and direct cloud inference via Groq Vision API.",
      technologies: ["FastAPI", "Python", "REST APIs", "React", "Data Preprocessing", "Git", "TensorFlow", "PyTorch", "JavaScript"],
      link: "https://github.com/HappyHaru21/multimodal-ai-chatbot"
    },
    {
      title: "Mood Analyser & Playlist Generator",
      description: "Developed a full-stack app to log user moods, visualize trends, and create Spotify-based playlists. Engineered interactive mood tracking, user authentication, and live charting.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "MERN", "REST APIs", "Data Preprocessing", "Git", "JavaScript"],
      link: "https://github.com/HappyHaru21/mood-analyser-playlist-generator"
    },
    {
      title: "BeMyVision-Environmental Captioning",
      description: "Prepared a real-time image captioning system using BLIP and YOLOv3 models. Integrated text-to-speech conversion and OCR for reading text aloud.",
      technologies: ["Python", "Streamlit", "OpenCV", "PyTorch", "Transformers", "Model Training", "Git", "TensorFlow"],
      link: "https://github.com/HappyHaru21/BeMyVision"
    },
    {
      title: "Parallel Search using OpenMP",
      description: "Implemented a parallel search algorithm with OpenMP to optimize CSV file processing, decreasing search time by 30%. Developed a Qt-based GUI.",
      technologies: ["C++", "Qt", "OpenMP", "Git", "C/C++"],
      link: "https://github.com/HappyHaru21/parallel-search-openmp"
    }
  ],
  education: [
      {
        degree: "B.Tech. CSE (AI & Robotics)",
        institution: "Vellore Institute of Technology",
        location: "Chennai, India",
        date: "2023 - 2027",
        cgpa: "8.72",
        transcriptUrl: "/AcademicTranscriptUnofficial.pdf"
      },
      {
        degree: "AISSCE 12th",
        institution: "G.D. Goenka Public School",
        location: "Lucknow, India",
        date: "2019 - 2023",
        cgpa: "8.36"
      }
  ],
  skills: [
    "Python", "Go", "C/C++", "JavaScript", "TypeScript", "Java", "Pandas", "Scikit-learn",
    "PyTorch", "TensorFlow", "OpenCV", "Qt", "MongoDB", "MySQL", "Docker", "Git",
    "REST APIs", "MatPlotLib", "Transformers", "FastAPI", "PostgreSQL", "Kubernetes",
    "MERN", "Model Training", "Neural Networks", "Data Preprocessing", "React", "Agile Methodologies",
    "Large Language Models", "Parameter-Efficient Fine-Tuning", "Natural Language Processing (NLP)", "Quantization"
  ]
};

const useTypingEffect = (text, speed = 50) => {
    const [displayedText, setDisplayedText] = useState('');
    useEffect(() => {
        setDisplayedText('');
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                setDisplayedText(prev => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, speed);
        return () => clearInterval(typingInterval);
    }, [text, speed]);
    return displayedText;
};

const useFadeIn = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);
    if (element) observer.observe(element);

    return () => {
      if (element) {
        try {
          observer.unobserve(element);
        } catch (e) {
          // Intentionally empty
        }
      }
    };
  }, [ref, options]);
  return [ref, isVisible];
};

const DiscordIcon = ({ size = 24, className = "" }) => (
    <svg
        className={className}
        role="img"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
    >
        <title>Discord</title>
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4464.8245-.6662 1.2838-2.2533.0187-4.4533.0187-6.7067 0-.2197-.4593-.4552-.9085-.6662-1.2838a.0741.0741 0 00-.0785-.0371 19.7913 19.7913 0 00-4.8851 1.5152.069.069 0 00-.0321.0262c-1.8986 3.1452-2.8049 6.401-2.8049 9.6402 0 2.1704.5298 4.2282 1.4815 6.0337a.0741.0741 0 00.0428.043c1.353.6348 2.8243 1.1225 4.3809 1.4714a.0741.0741 0 00.088-.0615c.094-.3192.1818-.6435.2615-.9737a.0741.0741 0 00-.0428-.0879c-.5881-.2544-1.1598-.5642-1.7015-.9192a.0741.0741 0 01-.0214-.0879c.6391-.5772 1.214-1.2224 1.7112-1.9222a.0741.0741 0 01.0903-.0214c.6986.3714 1.4284.6883 2.1882.9454a.0741.0741 0 00.0862-.043c.2415-.4167.4552-.8438.6478-1.2838a.0741.0741 0 00-.0118-.0879c-.481-.2841-.9518-.6002-1.4015-.9473a.0741.0741 0 01-.0118-.1066c.0118-.0093.0236-.0187.0353-.028.1058-.084.211-.1775.317-.2614a.0741.0741 0 01.094-.0117c3.2652 1.6348 6.5947 1.6348 9.86 0a.0741.0741 0 01.094.0117c.1058.084.211.1775.317.2614a.0741.0741 0 01.0353.028.0741.0741 0 01-.0118.1066c-.4497.3471-.9205.6632-1.4015.9473a.0741.0741 0 00-.0118.0879c.1926.44.4062.8671.6478 1.2838a.0741.0741 0 00.0862-.043c.76.257 1.4897.574 2.1882.9454a.0741.0741 0 01.0903.0214c.4971.6998 1.072 1.345 1.7112 1.9222a.0741.0741 0 01-.0214.0879c-.5417.355-1.1134.6648-1.7015.9192a.0741.0741 0 00-.0428.0879c.0798.3302.1676.6545.2615.9737a.0741.0741 0 00.088.0615c1.5566-.3489 3.0279-.8366 4.3809-1.4714a.0741.0741 0 00.0428-.043c.9518-1.8055 1.4815-3.8633 1.4815-6.0337 0-3.2392-.9062-6.495-2.8049-9.6402a.069.069 0 00-.0321-.0262z"/>
    </svg>
);

const ParticleBackground = () => {
    const canvasRef = useRef(null);
    const draw = useCallback((ctx, particles) => {
        if (!ctx) return;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = 'rgba(167, 139, 250, 0.4)';
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();
        });
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(167, 139, 250, 0.08)';
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
                if (dist < 130) {
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                }
            }
        }
        ctx.stroke();
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = document.body.scrollHeight;
        };
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        const particles = Array.from({ length: 70 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 1.5 + 0.5,
            vx: Math.random() * 0.4 - 0.2,
            vy: Math.random() * 0.4 - 0.2,
        }));
        const animate = () => {
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
            });
            draw(ctx, particles);
            animationFrameId = requestAnimationFrame(animate);
        };
        animate();
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, [draw]);
    return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, background: '#010409' }} />;
};


const Header = ({ name, resumeUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["about", "experience", "skills", "projects", "contact"];

  const smoothScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const targetPosition = targetElement.offsetTop - 80; // Account for fixed header
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800; // Animation duration in ms
    let start = null;

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);

      // Easing function for smooth animation
      const ease = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const handleNavClick = (e, link) => {
    e.preventDefault();
    smoothScrollTo(link);
    setIsOpen(false); // Close mobile menu
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-950/70 backdrop-blur-sm z-50 shadow-lg shadow-indigo-900/20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-2xl font-bold font-orbitron bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 hover:text-white transition-colors duration-300">
          {name}
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          <a href={resumeUrl} download="Sidak_Deep_Singh_resume.pdf" className="text-indigo-400 border border-indigo-400 px-4 py-1.5 rounded-md text-sm font-medium hover:bg-indigo-500 hover:text-slate-950 transition-colors duration-300">
            Resume
          </a>
          {navLinks.map(link => (
            <a key={link} href={`#${link}`} onClick={(e) => handleNavClick(e, link)} className="capitalize text-gray-300 hover:text-indigo-400 transition-colors duration-300 font-medium hover:drop-shadow-[0_0_3px_rgba(129,140,248,0.5)]">
              {link}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-indigo-400">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-slate-900">
          <nav className="flex flex-col items-center py-4 space-y-4">
            <a href={resumeUrl} download="Sidak_Deep_Singh_resume.pdf" className="text-indigo-400 border border-indigo-400 px-6 py-2 rounded-md text-base font-medium hover:bg-indigo-500 hover:text-slate-950 transition-colors duration-300 w-3/4 text-center">
              Resume
            </a>
            {navLinks.map(link => (
              <a key={link} href={`#${link}`} onClick={(e) => handleNavClick(e, link)} className="capitalize text-gray-300 hover:text-indigo-400 transition-colors duration-300 font-medium text-lg">
                {link}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

const Hero = ({ name, title, summary, contact }) => {
    const animatedTitle = useTypingEffect(title, 50);
    return (
        <section id="about" className="min-h-screen flex items-center text-white pt-24 md:pt-0 relative">
            <div className="container mx-auto px-6 text-center z-10">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-extrabold font-orbitron mb-4 leading-tight">
                        Hi, I'm <span className="text-indigo-400 drop-shadow-[0_0_8px_rgba(129,140,248,0.7)]">{name}</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6 font-orbitron h-16 md:h-auto">
                        {animatedTitle}
                        <span className="opacity-70 animate-ping">_</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
                        {summary}
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="bg-indigo-600/80 hover:bg-indigo-500 text-white font-bold py-3 px-6 rounded-md transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 border border-indigo-500">
                            View LinkedIn
                        </a>
                        <a href={contact.github} target="_blank" rel="noopener noreferrer" className="bg-gray-800/80 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-md transition-all transform hover:scale-105 shadow-lg shadow-gray-700/20 hover:shadow-gray-700/40 border border-gray-700">
                            See My Code
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Section = ({ id, title, children }) => {
  const [ref, isVisible] = useFadeIn({ threshold: 0.1 });
  return (
    <section id={id} ref={ref} className={`py-20 px-4 sm:px-6 lg:px-8 bg-transparent text-white transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-center mb-12 text-gray-200">
          {title}
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-3 rounded-full shadow-[0_0_12px_1px_rgba(129,140,248,0.5)]"></div>
        </h2>
        {children}
      </div>
    </section>
  );
};

const Experience = ({ experience }) => (
  <Section id="experience" title="Experience">
    <div className="max-w-4xl mx-auto relative">
      <div className="absolute left-4 sm:left-1/2 top-0 h-full w-0.5 bg-slate-800"></div>
      {experience.map((job, index) => (
        <div key={index} className="relative mb-8 pl-8 sm:pl-0">
          <div className="sm:flex items-center sm:justify-between">
            <div className={`w-full sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8 sm:text-right'}`}>
              <div className="bg-slate-900/70 p-6 rounded-md shadow-xl border border-slate-800 hover:border-indigo-600 transition-colors duration-300 backdrop-blur-sm">
                <div className="flex justify-between items-start mb-2 flex-col sm:flex-row">
                  <div>
                    <h3 className="text-2xl font-bold text-indigo-400 font-orbitron">{job.title}</h3>
                    <p className="text-lg font-semibold text-gray-300">{job.company} - {job.location}</p>
                  </div>
                  <p className="text-md text-gray-400 whitespace-nowrap mt-2 sm:mt-0">{job.date}</p>
                </div>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  {job.description.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
              </div>
            </div>
          </div>
           <div className="absolute left-4 sm:left-1/2 top-4 -ml-2 h-4 w-4 rounded-full bg-indigo-500 shadow-[0_0_10px_2px_rgba(129,140,248,0.6)]"></div>
        </div>
      ))}
    </div>
  </Section>
);

const Projects = ({ projects }) => (
  <Section id="projects" title="My Projects">
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {projects.map((project, index) => (
        <div key={index} className="bg-slate-900/70 rounded-md shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col border border-slate-800 hover:border-indigo-600 hover:shadow-indigo-600/20 backdrop-blur-sm">
          <div className="p-6 flex-grow">
            <h3 className="text-2xl font-bold mb-2 text-indigo-400 font-orbitron">{project.title}</h3>
            <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span key={i} className="bg-slate-800 text-indigo-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tech}</span>
              ))}
            </div>
          </div>
          <div className="p-6 bg-slate-950/50 border-t border-slate-800">
             <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-indigo-400 transition-colors duration-300 flex items-center">
              {project.link.includes('kaggle.com') ? 'View on Kaggle' : 'View on GitHub'}
              {project.link.includes('kaggle.com') ? (
                <svg className="ml-2" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.330-.248.495-.248h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.334"/>
                </svg>
              ) : (
                <Github size={18} className="ml-2" />
              )}
            </a>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

const Skills = ({ skills, skillUsage, setTooltip }) => {
    const handleMouseEnter = (e, skill) => {
        const usage = skillUsage[skill];
        if (usage && usage.length > 0) {
            setTooltip({
                visible: true,
                content: usage,
                x: e.clientX,
                y: e.clientY
            });
        }
    };

    const handleMouseLeave = () => {
        setTooltip(prev => ({ ...prev, visible: false }));
    };

    return (
      <Section id="skills" title="Skills & Technologies">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-slate-800/80 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-600/80 hover:scale-105 transition-all duration-300 cursor-default border border-slate-700 hover:border-indigo-600"
                onMouseEnter={(e) => handleMouseEnter(e, skill)}
                onMouseLeave={handleMouseLeave}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </Section>
    );
};

const Tooltip = ({ visible, content, x, y }) => {
    if (!visible) return null;

    const tooltipStyle = {
        position: 'fixed',
        top: `${y + 25}px`,
        left: `${x}px`,
        transform: 'translateX(-50%)',
        pointerEvents: 'none',
    };

    return (
        <div style={tooltipStyle} className="bg-slate-950 border border-indigo-500 rounded-md p-3 shadow-lg z-50 max-w-xs transition-opacity duration-300 animate-fade-in">
            <p className="font-bold text-indigo-400 mb-2 text-sm">Used In:</p>
            <ul className="space-y-1">
                {content.map((item, index) => (
                    <li key={index}>
                        <a href={item.link} className="text-xs text-gray-300 hover:text-white hover:underline pointer-events-auto">
                            - {item.name} <span className="text-xs text-gray-500">({item.type})</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};


const Education = ({ education }) => (
    <Section id="education" title="Education">
        <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
                <div key={index} className="bg-slate-900/70 p-6 rounded-md shadow-xl mb-6 border border-slate-800 hover:border-indigo-600 transition-colors duration-300 backdrop-blur-sm">
                    <div className="flex justify-between items-start flex-col sm:flex-row">
                        <div className="flex-grow text-left">
                            <h3 className="text-xl font-bold text-indigo-400 font-orbitron">{edu.degree}</h3>
                            <p className="text-lg text-gray-300">{edu.institution}, {edu.location}</p>
                            {edu.cgpa && (
                               <p className="text-sm text-gray-400 mt-1">CGPA: {edu.cgpa}</p>
                            )}
                        </div>
                        <div className="text-left sm:text-right mt-4 sm:mt-0">
                             <p className="text-md text-gray-400">{edu.date}</p>
                             {edu.transcriptUrl && (
                                <a href={edu.transcriptUrl} download className="inline-block mt-2 text-xs text-indigo-400 border border-indigo-400 px-3 py-1 rounded-md hover:bg-indigo-500 hover:text-slate-950 transition-colors duration-300">
                                    Download Transcript
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </Section>
);

const Footer = ({ contact }) => (
  <footer id="contact" className="bg-slate-950 text-white py-12 relative overflow-hidden border-t border-slate-800">
    <div className="container mx-auto text-center relative z-20">
      <h2 className="text-3xl font-bold font-orbitron mb-4">Get In Touch</h2>
      <p className="text-gray-400 mb-8 max-w-xl mx-auto">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out!
      </p>

      <div className="mb-8 space-y-4">
        <a href={`mailto:${contact.email}`} className="text-lg text-indigo-400 hover:underline hover:drop-shadow-[0_0_4px_rgba(129,140,248,0.6)] flex items-center justify-center gap-3 transition-all">
            <Mail size={20} /> <span>{contact.email}</span>
        </a>
        <a href={contact.discordLink} target="_blank" rel="noopener noreferrer" className="text-lg text-indigo-400 hover:underline hover:drop-shadow-[0_0_4px_rgba(129,140,248,0.6)] flex items-center justify-center gap-3 transition-all">
            <DiscordIcon size={20} /> <span>{contact.discordUsername}</span>
        </a>
      </div>

      <div className="flex justify-center space-x-8 mb-8">
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 transform hover:scale-110" aria-label="LinkedIn">
          <Linkedin size={30} />
        </a>
        <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 transform hover:scale-110" aria-label="GitHub">
          <Github size={30} />
        </a>
        <a href="https://www.kaggle.com/haruki23" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 transform hover:scale-110" aria-label="Kaggle">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.330-.248.495-.248h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.334"/>
          </svg>
        </a>
      </div>
      <p className="text-gray-500">&copy; {new Date().getFullYear()} Sidak Deep Singh. All rights reserved.</p>
    </div>
  </footer>
);

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) setIsVisible(true);
    else setIsVisible(false);
  };
  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (500 / 15); // Animation duration ~500ms
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 bg-indigo-600/80 text-white p-3 rounded-md shadow-lg hover:bg-indigo-500 transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'} transform ${isVisible ? 'scale-100' : 'scale-50'} border border-indigo-500 shadow-indigo-500/30 z-50`}
      aria-label="Go to top"
    >
      <ChevronsUp size={24} />
    </button>
  );
};

export default function App() {
  const [tooltip, setTooltip] = useState({ visible: false, content: [], x: 0, y: 0 });

  const { sortedSkills, skillUsage } = useMemo(() => {
    const usage = {};
    const counts = {};

    const allTechnologies = [
        ...portfolioData.experience.flatMap(e => e.technologies || []),
        ...portfolioData.projects.flatMap(p => p.technologies || [])
    ];

    allTechnologies.forEach(tech => {
        counts[tech] = (counts[tech] || 0) + 1;
    });

    const sorted = [...new Set(portfolioData.skills)].sort((a, b) => {
        return (counts[b] || 0) - (counts[a] || 0);
    });

    const addToUsage = (tech, itemInfo) => {
        if (!usage[tech]) {
            usage[tech] = [];
        }
        if (!usage[tech].some(i => i.name === itemInfo.name)) {
            usage[tech].push(itemInfo);
        }
    };

    portfolioData.projects.forEach(project => {
        project.technologies.forEach(tech => {
            addToUsage(tech, { name: project.title, type: 'project', link: '#projects' });
        });
    });

    portfolioData.experience.forEach(exp => {
        if (exp.technologies) {
            exp.technologies.forEach(tech => {
                addToUsage(tech, { name: exp.title, type: 'experience', link: '#experience' });
            });
        }
    });
    return { sortedSkills: sorted, skillUsage: usage };
  }, []);

  useEffect(() => {
    const fontId = 'google-fonts-orbitron-roboto';
    if (!document.getElementById(fontId)) {
      const fontLink = document.createElement('link');
      fontLink.id = fontId;
      fontLink.href = "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Roboto:wght@400;500;700&display=swap";
      fontLink.rel = 'stylesheet';
      document.head.appendChild(fontLink);
    }
    document.body.style.fontFamily = "'Roboto', sans-serif";
  }, []);

  return (
    <div className="leading-normal tracking-tight relative overflow-x-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Header name={portfolioData.name} resumeUrl={portfolioData.resumeUrl} />
        <main>
          <Hero
            name={portfolioData.name}
            title={portfolioData.title}
            summary={portfolioData.summary}
            contact={portfolioData.contact}
          />
          <Experience experience={portfolioData.experience} />
          <Skills skills={sortedSkills} skillUsage={skillUsage} setTooltip={setTooltip} />
          <Projects projects={portfolioData.projects} />
          <Education education={portfolioData.education} />
        </main>
        <Footer contact={portfolioData.contact} />
        <ScrollToTopButton />
        <Tooltip visible={tooltip.visible} content={tooltip.content} x={tooltip.x} y={tooltip.y} />
      </div>
    </div>
  );
}
