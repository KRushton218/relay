import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const valueProps = [
  {
    icon: <CheckCircle className="w-6 h-6 text-brand-accent" />,
    title: "Tools should work the way you do",
    description:
      "Whether your brain runs on legal pads, voice notes, or six tabs and three apps before lunch—Relay doesn’t ask you to change. It fits into what already works and quietly handles what doesn’t.",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-brand-accent" />,
    title: "People forget things. Relay doesn’t.",
    description:
      "Relay captures your thinking as it happens—so the second you forget it, it’s already written down. No toggling, no formatting. Just instant recall.",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-brand-accent" />,
    title: "Privacy isn’t a feature. It’s the default.",
    description:
      "Your thoughts are your own. Relay processes everything locally whenever possible, and your data is never sold, shared, or used to train AI."
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-brand-accent" />,
    title: "Designed to disappear",
    description:
      "Relay runs quietly in the background until you need it. No clutter, no noise—just clarity when you're ready to pick up where you left off."
  }
];

export function ValuePropsSection() {
  return (
    <section className="py-16">
      <div className="text-center space-y-3 mb-14">
        <h2 className="text-3xl sm:text-4xl font-semibold text-brand-text">
          What makes Relay different
        </h2>
        <p className="text-base text-brand-muted max-w-xl mx-auto">
          Quiet brilliance built for modern brains.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {valueProps.map((prop, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="relative group bg-white/60 backdrop-blur-md p-6 md:p-8 rounded-xl border border-brand-border shadow-md transition-all hover:shadow-lg"
          >
            <div className="absolute top-0 left-0 h-1 w-full bg-brand-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-xl" />
            <div className="flex items-start gap-4">
              <div className="shrink-0">{prop.icon}</div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-brand-text">
                  {prop.title}
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  {prop.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}