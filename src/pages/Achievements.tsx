
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

// Sample achievements data (replace with real data)
const achievements = [
  { id: 1, image: '/images/im-3.jpg', title: 'AInnovat Club Inauguration' },
  { id: 2, image: '/images/im-7.jpg', title: 'Hackathon ' },
  { id: 3, image: '/images/im-4.jpg', title: 'Symposium ' },
  { id: 4, image: '/images/im-6.jpg', title: 'WorkShop ' },
  { id: 5, image: '/images/im-5.jpg', title: 'Paper Presentation' },
  { id: 6, image: '/images/im-1.png', title: 'Club Activities' },
  { id: 7, image: '/images/im-2.png', title: 'Vibathon' },
  { id: 8, image: '/images/ain.png', title: 'Ideathon' },
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
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg rounded-lg overflow-hidden flex flex-col"
            >
              <div className="aspect-[3/2] w-full overflow-hidden bg-white/5 relative">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-3 text-center bg-white/90">
                <h3 className="text-lg font-bold text-gray-900">{achievement.title}</h3>
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
