import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Data Analyst - Product & Growth Analytics",
    company: "Twinkl Educational Publishing Ltd",
    type: "EdTech, SaaS",
    location: "Sheffield, UK",
    period: "May 2024 - Present",
    highlights: [
      "Delivered ad-hoc projects and deep dive analysis using SQL queries (BigQuery) to support digital product roadmap goals for 5+ product features",
      "Developed and maintained 8+ self-serve reporting dashboards in Tableau/Looker Studio accessed by 20+ product stakeholders",
      "Led A/B test and experimentation using SQL Server, BigQuery, and GA4 for improved end-to-end customer experience",
      "Acted as lead analyst in an agile cross-functional team of 10, delivering insights that supported a 10% uplift in retention",
    ],
  },
  {
    title: "Data Science Intern",
    company: "Data Glacier",
    type: "IT Consulting and Data Services",
    location: "Remote",
    period: "Jan 2024 - Mar 2024",
    highlights: [
      "Analyzed data with over 500k records by structuring and optimising queries for workflow optimisation",
      "Used Python, SQL and Excel to handle missing, inconsistent data, uncovering 15+ key trends and patterns",
    ],
  },
  {
    title: "Software Developer",
    company: "UST",
    type: "IT Consultancy",
    location: "India",
    period: "Jan 2020 - Sep 2022",
    highlights: [
      "Delivered 4+ responsive web applications using SQL, Python, TypeScript, HTML, CSS and API integration",
      "Built and maintained PostgreSQL ETL workflows processing 100k+ records, reducing portal load times by 35%",
      "Collaborated with product owners, QA leads, and end-users to align functionality with business needs",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section header */}
          <div className="mb-16">
            <span className="text-primary font-mono text-sm">03 / Experience</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">
              Work <span className="text-gradient">History</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative mb-12 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:ml-auto"
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute top-0 w-4 h-4 bg-primary rounded-full border-4 border-background ${
                  index % 2 === 0 ? "left-0 md:right-0 md:left-auto md:translate-x-1/2" : "left-0 md:-translate-x-1/2"
                } -translate-x-1/2 md:translate-x-0`} />

                {/* Content card */}
                <div className="ml-8 md:ml-0 bg-gradient-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {exp.title}
                  </h3>

                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <Building2 className="w-4 h-4" />
                    <span>{exp.company}</span>
                    <span className="text-primary">•</span>
                    <span>{exp.type}</span>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
