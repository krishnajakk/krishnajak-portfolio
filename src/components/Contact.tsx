import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Section header */}
          <div className="mb-12">
            <span className="text-primary font-mono text-sm">06 / Contact</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              I'm currently open to new opportunities. Whether you have a question or 
              just want to say hi, feel free to reach out!
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <motion.a
              href="mailto:krishnajak67@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group p-6 bg-gradient-card rounded-xl border border-border hover:border-primary/50 transition-all"
            >
              <Mail className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="text-sm text-foreground font-medium truncate">krishnajak67@gmail.com</p>
            </motion.a>

            <motion.a
              href="tel:+447824365964"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group p-6 bg-gradient-card rounded-xl border border-border hover:border-primary/50 transition-all"
            >
              <Phone className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-sm text-muted-foreground">Phone</p>
              <p className="text-sm text-foreground font-medium">+44 7824365964</p>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/krishnajak/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group p-6 bg-gradient-card rounded-xl border border-border hover:border-primary/50 transition-all"
            >
              <Linkedin className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-sm text-muted-foreground">LinkedIn</p>
              <p className="text-sm text-foreground font-medium">krishnajak</p>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 bg-gradient-card rounded-xl border border-border"
            >
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="text-sm text-foreground font-medium">London, UK</p>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a
              href="mailto:krishnajak67@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all glow-accent text-lg"
            >
              <Send className="w-5 h-5" />
              Send me a message
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
