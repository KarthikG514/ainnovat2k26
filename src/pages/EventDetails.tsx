import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { events } from '../data/events';
import Footer from '../components/Footer';
import { Calendar, Clock, Users, Award, ArrowLeft } from 'lucide-react';

const EventDetails = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);

  const event = events.find(e => e.id === eventId);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Event Not Found</h2>
          <p className="mb-6">The event you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/')}
            className="btn btn-primary"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const handleRegister = () => {
    window.open(event.formLink, '_blank');
  };

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 ">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span className=" font-bold">Back</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <h1 className="text-4xl font-bold mb-4 gradient-text">{event.name}</h1>
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                {event.type === 'technical' ? 'Technical Event' : 'Non-Technical Event'}
              </span>
              <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">
                Registration Open
              </span>
            </div>

            <div className="aspect-video rounded-xl overflow-hidden mb-8">
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-xl p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">About this Event</h2>
              <p className="text-gray-900 mb-6">{event.details}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <Calendar className="text-indigo-600" size={20} />
                  <div>
                    <p className="text-sm text-gray-900">Date</p>
                    <p className="font-medium">Apirl 3, 2025</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="text-indigo-600" size={20} />
                  <div>
                    <p className="text-sm text-gray-900">Time</p>
                    <p className="font-medium">10:00 AM - 03:30 PM</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Users className="text-indigo-600" size={20} />
                  <div>
                    <p className="text-sm text-gray-900">Participants</p>
                    <p className="font-medium">Individual - Team of 4</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Award className="text-indigo-600" size={20} />
                  <div>
                    <p className="text-sm text-gray-900">Prizes</p>
                    <p className="font-medium">Cash Prize</p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleRegister}
                className="btn btn-primary w-full"
              >
                Register Now
              </button>
            </div>

            <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Guidelines</h2>
              <ul className="space-y-3">
                {event.guidelines.map((guideline, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="bg-indigo-100 text-indigo-800 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <p className="text-gray-900">{guideline}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-xl p-6 mb-8 sticky top-24">
              <h2 className="text-xl font-bold mb-4 text-gray-900">Event Coordinators</h2>

              <div className="space-y-6">
                {event.coordinators.map((coordinator, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-indigo-100 p-3 rounded-full">
                      <Users className="text-indigo-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{coordinator.name}</h4>
                      <p className="text-gray-900">
                        <span className="font-medium">Mobile:</span> {coordinator.mobile}
                      </p>

                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 my-6"></div>

              <h3 className="font-semibold mb-2">Share this Event</h3>
              <div className="flex space-x-4">

                <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EventDetails;