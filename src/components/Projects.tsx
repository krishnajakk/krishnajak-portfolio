import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, TrendingUp, TestTube } from "lucide-react";

const projects = [
  {
    title: "A/B & Multivariate Experimentation",
    description: "Conducted post-experiment multivariate test analysis to identify the highest-performing screen using chi-square proportion tests to ensure statistically robust conclusions and guide product rollout decisions.",
    tags: ["A/B Testing", "Statistical Analysis", "Chi-Square Tests", "Product Analytics"],
    icon: TestTube,
    link: "#",
  },
  {
    title: "Go-to-Market Strategy Analysis",
    description: "Conducted EDA and profitability modelling across two cab investment firms, identifying a 17% higher ROI potential and enabling data-driven investment decisions.",
    tags: ["EDA", "Profitability Modelling", "ROI Analysis", "Python"],
    icon: TrendingUp,
    link: "#",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section header */}
          <div className="mb-16">
            <span className="text-primary font-mono text-sm">04 / Projects</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">
              Featured <span className="text-gradient">Work</span>
            </h2>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-gradient-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all relative overflow-hidden"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary text-xs text-muted-foreground rounded-full border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
