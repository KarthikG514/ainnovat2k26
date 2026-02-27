import React , { useState } from 'react';
import { motion } from 'framer-motion';
import EventCard from './EventCard';
import { events } from '../data/events';

const EventsSection = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'technical' | 'non-technical'>('all');

  const filteredEvents = activeTab === 'all' 
    ? events 
    : events.filter(event => event.type === activeTab);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our <span className="gradient-text">Events</span>
        </motion.h2>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 p-1 rounded-lg">
            {['all', 'technical', 'non-technical'].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-md font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-white shadow-md text-indigo-600'
                    : 'text-gray-600 hover:text-indigo-600'
                }`}
                onClick={() => setActiveTab(tab as any)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              id={event.id}
              name={event.name}
              description={event.description}
              type={event.type}
              image={event.image}
              formLink={event.formLink}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;