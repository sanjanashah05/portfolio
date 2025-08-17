import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, Target, Zap } from 'lucide-react';

const TimelineItem = ({ achievement, index, isLeft }) => {
  const getIcon = (iconType) => {
    const icons = {
      award: Award,
      trophy: Trophy,
      star: Star,
      target: Target,
      zap: Zap
    };
    const IconComponent = icons[iconType] || Award;
    return <IconComponent size={20} />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative flex items-center ${isLeft ? 'justify-start' : 'justify-end'} mb-12`}
    >
      {/* Timeline dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 dark:bg-purple-400 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>
      
      {/* Content card */}
      <div className={`w-5/12 ${isLeft ? 'pr-8' : 'pl-8'}`}>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
              {getIcon(achievement.icon)}
            </div>
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
              {achievement.date}
            </span>
          </div>
          
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            {achievement.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
            {achievement.description}
          </p>
          
          <div className="text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 px-3 py-1 rounded-full inline-block">
            {achievement.details}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;