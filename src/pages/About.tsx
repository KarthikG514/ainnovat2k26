
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import { BookOpen, Calendar, Clock, MapPin, Users } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      date: 'March 13, 2026',
      events: [
        { time: '09:00 AM – 09:30 AM', title: 'Registration Checking' },
        { time: '09:40 AM – 10:20 AM', title: 'Inauguration Ceremony' },
        { time: '10:20 AM – 10:30 AM', title: 'Keynote Speech' },
        { time: '10:30 AM – 01:00 PM', title: 'Workshop Session' },
        { time: '10:30 AM – 01:00 PM', title: 'Idea Pitching' },
        { time: '10:30 AM – 01:00 PM', title: 'Tech Forge' },
        { time: '10:30 AM – 01:00 PM', title: 'Brain Buster' },
        { time: '02:00 PM – 03:00 PM', title: 'Fun Factory' },
        { time: '02:00 PM – 03:00 PM', title: 'BEAT BATTLE: Mind Edition' },
        { time: '03:00 PM – 04:30 PM', title: 'Prize Distribution' }
      ]
    },
  ];

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 ">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >About <span className="gradient-text">Our Department</span>
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4 gradient-text">Our Vision</h2>
            <p className="text-white mb-6">
              To be a centre of excellence in the domain of Artificial Intelligence and Data Science and produce globally competent professionals to solve futuristic societal challenges.
            </p>

            <h2 className="text-2xl font-bold mb-4 gradient-text">Our Mission</h2>
            <ul className="list-disc pl-5 text-white space-y-2">
              <li>To establish a unique learning environment and enable the students to equip with skills and face the challenges in Artificial Intelligence and Data Science.</li>
              <li>To impart knowledge in cutting edge Artificial Intelligence and Data Science technologies as per industrial standards.</li>
              <li>To inculcate research and life-long learning skills to serve the society at large.</li>
              <li>To inculcate professional ethics, rules and life skills.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white bg-opacity-90 text-gray-900 rounded-xl shadow-xl p-6"
          >
            <h2 className="text-2xl font-bold mb-6 gradient-text">Department Highlights</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <Users className="text-indigo-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Expert Faculty</h3>
                  <p className="text-gray-900">10+ faculty members with industry experience</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <BookOpen className="text-indigo-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Research Centers</h3>
                  <p className="text-gray-900">5 specialized research centers focusing on emerging technologies</p>
                </div>
              </div>



              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <Calendar className="text-indigo-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Annual Events</h3>
                  <p className="text-gray-900">Organizing technical symposiums, workshops, and hackathons</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-500">
            Event <span className="gradient-text">Schedule</span>
          </h2>

          <div className="  ">
            {timeline.map((day, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden"
              >
                <div className="bg-gradient-to-r from-indigo-600 to-pink-500 text-white p-4">
                  <h3 className="text-xl font-bold">{day.date}</h3>
                </div>
                <div className="p-4 ">
                  {day.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="mb-4 last:mb-0">
                      <div className="flex items-start gap-3">
                        <Clock className="text-indigo-600 mt-1 flex-shrink-0 " size={18} />
                        <div>
                          <p className="text-sm text-gray-900">{event.time}</p>
                          <p className="font-medium text-gray-900">{event.title}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 2, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-white bg-opacity-90 text-gray-900 rounded-xl shadow-xl p-6 text-center"
        >
          <h2 className="text-2xl font-bold mb-4 gradient-text">Venue Information</h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="text-indigo-600" size={24} />
            <span className="font-medium text-lg">Mahendra Enginering College Autonomous</span>
          </div>
          <p className="text-gray-700 mb-6">
            The symposium will be held at the state-of-the-art Main Auditorium located in the heart of the Mahendra Campus. The venue is equipped with modern facilities to ensure a seamless experience for all participants.
          </p>
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.0471896000827!2d77.9997332!3d11.4765197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babe0bee4ef722b%3A0xa949856b58bb6c9e!2sMahendra%20Engineering%20College!5e0!3m2!1sen!2sin!4v1742403092633!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default About;