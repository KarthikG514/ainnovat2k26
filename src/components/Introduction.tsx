
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Zap } from 'lucide-react';

const Introduction = () => {
  const features = [
    {
      icon: <BookOpen className="w-10 h-10 text-indigo-600" />,
      title: 'Knowledge Sharing',
      description: 'Learn from industry experts and academic professionals through workshops and presentations.'
    },
    {
      icon: <Users className="w-10 h-10 text-indigo-600" />,
      title: 'Networking',
      description: 'Connect with like-minded individuals, potential collaborators, and industry recruiters.'
    },
    {
      icon: <Zap className="w-10 h-10 text-indigo-600" />,
      title: 'Innovation',
      description: 'Showcase your innovative ideas and projects to a wider audience.'
    },
    {
      icon: <Award className="w-10 h-10 text-indigo-600" />,
      title: 'Recognition',
      description: 'Win prizes and get recognized for your exceptional skills and creativity.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white bg-opacity-90">
      <div className="container mx-auto">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About the <span className="gradient-text">Symposium</span>
        </motion.h2>
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.p 
            className="text-lg text-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The National level Technical Symposium brings together students, researchers, and industry professionals to explore cutting-edge technologies and innovations. This event features workshops, paper presentations, project exhibitions, and fun activities designed to foster learning, collaboration, and creativity. <p className='font-bold '>Exciting Prizes With Food & Refreshment.</p>
            <br /><p className='font-bold '> <span className='gradient-text'>NOTE : </span>A person can join one <span className='text-indigo-700'>Technical</span> and one <span className='gradient-text'>Non-Technical</span> event </p>
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="card p-6 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-900">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introduction;