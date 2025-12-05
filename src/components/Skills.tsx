import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Programming & Data",
    skills: [
      { name: "SQL (Advanced)", level: 95 },
      { name: "Python", level: 90 },
      { name: "Machine Learning", level: 75 },
      { name: "Statistics", level: 85 },
    ],
  },
  {
    title: "Analytics & Visualization",
    skills: [
      { name: "Tableau", level: 90 },
      { name: "Looker Studio", level: 88 },
      { name: "A/B Testing", level: 92 },
      { name: "Google Analytics (GA4)", level: 85 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Google BigQuery", level: 90 },
      { name: "Excel/Google Sheets", level: 95 },
      { name: "Git", level: 80 },
      { name: "Jira", level: 85 },
    ],
  },
];

const softSkills = [
  "Stakeholder Management",
  "Data Storytelling",
  "Project Management",
  "Problem Solving",
  "Critical Thinking",
  "Cross-functional Collaboration",
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-secondary/30 relative">
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
            <span className="text-primary font-mono text-sm">02 / Skills</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">
              Technical <span className="text-gradient">Expertise</span>
            </h2>
          </div>

          {/* Technical skills */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="bg-gradient-card p-6 rounded-xl border border-border"
              >
                <h3 className="text-lg font-semibold mb-6 text-foreground">
                  {category.title}
                </h3>
                <div className="space-y-5">
                  {category.skills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">{skill.name}</span>
                        <span className="text-primary font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                          className="h-full rounded-full"
                          style={{ background: 'var(--gradient-primary)' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Soft skills */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-foreground">
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                  className="px-4 py-2 bg-secondary border border-border rounded-lg text-sm text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
