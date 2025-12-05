import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Cloud } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 bg-background relative">
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
            <span className="text-primary font-mono text-sm">05 / Education</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">
              Education & <span className="text-gradient">Certifications</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-card p-8 rounded-xl border border-border"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Education</h3>
                  <p className="text-sm text-muted-foreground">Academic Background</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-secondary/50 rounded-lg border border-border">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-foreground">MSc Data Science</h4>
                    <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                      Distinction
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">University of Hertfordshire, Hatfield, UK</p>
                  <p className="text-xs text-muted-foreground mt-1">Graduated September 2023</p>
                </div>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-card p-8 rounded-xl border border-border"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Certifications</h3>
                  <p className="text-sm text-muted-foreground">Professional Credentials</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-secondary/50 rounded-lg border border-border">
                  <div className="flex items-start gap-3">
                    <Cloud className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">AWS Certified Cloud Practitioner</h4>
                      <p className="text-xs text-muted-foreground mt-1">CLF-C02 – Cloud Concepts (EC2, S3)</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg border border-border">
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">Generative AI for Data Analysis</h4>
                      <p className="text-xs text-muted-foreground mt-1">Microsoft</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
