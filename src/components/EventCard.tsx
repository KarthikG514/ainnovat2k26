import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface EventCardProps {
  id: string;
  name: string;
  description: string;
  type: 'technical' | 'non-technical';
  image: string;
  formLink: string;
}

const EventCard: React.FC<EventCardProps> = ({ id, name, description, type, image, formLink }) => {
  const navigate = useNavigate();

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 4,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3
      }
    }
  };

  const handleRegister = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(formLink, '_blank');
  };

  const handleCardClick = () => {
    navigate(`/event/${id}`);
  };

  return (
    <motion.div
      className="event-card w-full"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div
        className="event-card-inner card h-full cursor-pointer"
        onClick={handleCardClick}
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute top-0 right-0 bg-gradient-to-l from-indigo-600 to-pink-500 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
            {type === 'technical' ? 'Technical' : 'Non-Technical'}
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-xl font-bold mb-2 gradient-text">{name}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>

          <div className="flex justify-between items-center">
            {formLink && (
              <button
                onClick={handleRegister}
                className="btn btn-primary flex items-center gap-2"
              >
                Register <ArrowRight size={16} />
              </button>
            )}

            <motion.div
              whileHover={{ x: 5 }}
              className="text-indigo-600 font-medium cursor-pointer flex items-center gap-1"
            >
              Details <ArrowRight size={16} />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;