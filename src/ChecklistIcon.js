import { motion } from "framer-motion";

const ChecklistIcon = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="40"
      viewBox="0 0 512 512"
      initial="hidden"
      animate="visible"
    >
      {/* Background */}
      <motion.rect
        x="20"
        y="20"
        width="472"
        height="472"
        rx="40"
        fill="#3B1E54"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
        }}
      />

      {/* Checkmarks and lines */}
      <motion.path
        d="M130 140 L150 160 L190 120"
        stroke="white"
        strokeWidth="15"
        fill="none"
        strokeLinecap="round"
        variants={{
          hidden: { pathLength: 0 },
          visible: { pathLength: 1, transition: { duration: 1 } },
        }}
      />
      <motion.line
        x1="220"
        y1="140"
        x2="400"
        y2="140"
        stroke="white"
        strokeWidth="12"
        strokeLinecap="round"
        variants={{
          hidden: { pathLength: 0 },
          visible: { pathLength: 1, transition: { delay: 0.4, duration: 1 } },
        }}
      />

      {/* Second checkmark */}
      <motion.path
        d="M130 220 L150 240 L190 200"
        stroke="white"
        strokeWidth="15"
        fill="none"
        strokeLinecap="round"
        variants={{
          hidden: { pathLength: 0 },
          visible: { pathLength: 1, transition: { delay: 0.8, duration: 1 } },
        }}
      />
      <motion.line
        x1="220"
        y1="220"
        x2="400"
        y2="220"
        stroke="white"
        strokeWidth="12"
        strokeLinecap="round"
        variants={{
          hidden: { pathLength: 0 },
          visible: { pathLength: 1, transition: { delay: 1.2, duration: 1 } },
        }}
      />

      {/* Empty circles and lines */}
      <motion.circle
        cx="160"
        cy="300"
        r="12"
        stroke="white"
        strokeWidth="5"
        fill="none"
        variants={{
          hidden: { scale: 0 },
          visible: { scale: 1, transition: { delay: 1.6, duration: 0.4 } },
        }}
      />
      <motion.line
        x1="220"
        y1="300"
        x2="400"
        y2="300"
        stroke="white"
        strokeWidth="12"
        strokeLinecap="round"
        variants={{
          hidden: { pathLength: 0 },
          visible: { pathLength: 1, transition: { delay: 1.8, duration: 1 } },
        }}
      />
    </motion.svg>
  );
};

export default ChecklistIcon;
