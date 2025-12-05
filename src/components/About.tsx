import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, LineChart, Users, Zap } from "lucide-react";

const highlights = [
  { icon: BarChart3, value: "4+", label: "Years Experience" },
  { icon: LineChart, value: "7%", label: "Revenue Growth" },
  { icon: Users, value: "20+", label: "Stakeholders Served" },
  { icon: Zap, value: "10%", label: "Retention Uplift" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background relative">
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
            <span className="text-primary font-mono text-sm">01 / About</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">
              Driving Decisions with{" "}
              <span className="text-gradient">Data</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Data Analyst with expertise in Product & Growth Analytics, collaborating 
                within cross-functional teams of Product, Marketing and Engineering. 
                I bridge the gap between raw data and strategic business decisions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Demonstrated strong business acumen in product development around user 
                adoption that contributed to <span className="text-primary font-semibold">7% revenue growth</span> and 
                a <span className="text-primary font-semibold">10% uplift in customer retention</span>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Skilled in SQL, Python, GA4, and BI platforms like Tableau and Looker Studio, 
                with strong expertise in advanced analytics, stakeholder engagement, and KPI 
                setting for full product development cycles.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all group"
                >
                  <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {item.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
