
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

// Sample achievements data (replace with real data)
const achievements = [
  { id: 1, image: '/images/im-3.jpg', title: 'AInnovat Club Inauguration' },
  { id: 2, image: '/images/im-7.jpg', title: 'Hackathon ' },
  { id: 3, image: '/images/im-4.jpg', title: 'Symposium ' },
  { id: 4, image: '/images/im-6.jpg', title: 'WorkShop ' },
  { id: 4, image: '/images/im-5.jpg', title: 'Paper Presentation' },
  { id: 4, image: '/images/im-1.png', title: 'Club Activities' },
];

const Achievements = () => {
  return (
    <div className="pt-10">
      <div className="container mx-auto px-4 py-2">
        <h1 className="text-4xl font-bold text-center mb-10 gradient-text">Department Achievements</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img 
                src={achievement.image} 
                alt={achievement.title} 
                className="w-full h-64 object-cover"
              />
              <div className="p-1 text-center">
                <h3 className="text-lg font-semibold text-gray-900">{achievement.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Achievements;
