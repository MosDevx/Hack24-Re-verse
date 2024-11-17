'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ExpandableDiv({
  index,
  questionObj,
}: {
  index: number;
  questionObj: { question: string; answer: string };
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <motion.div
    key={index}
      onClick={toggleExpand}
      layout // Automatically handles size changes
      initial={false} // Prevent initial mount animations
      animate={{
        opacity: isExpanded ? 1 : 0.9,
        scale: isExpanded ? 1.02 : 1,
        backgroundColor: isExpanded ? '#cce7ff' : '#f0f0f0',
        transition: {
          type: 'spring',
          stiffness: 150,
          damping: 15,
        },
      }}
      whileHover={{ scale: 1.05, boxShadow: '0 6px 12px rgba(0, 0, 0, 0.25)' }}
      style={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        padding: '12px',
      }}
    >
      <AnimatePresence>
        <motion.p
          key={isExpanded ? 'expanded' : 'collapsed'}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.4,
            ease: 'easeInOut',
          }}
          style={{
            textAlign: 'center',
            margin: 0,
            fontSize: isExpanded ? '1rem' : '0.9rem',
            fontWeight: isExpanded ? 'bold' : 'normal',
            lineHeight: 1.4,
          }}
        >
          {isExpanded ? questionObj.answer : questionObj.question}
        </motion.p>
      </AnimatePresence>
    </motion.div>
  );
}
