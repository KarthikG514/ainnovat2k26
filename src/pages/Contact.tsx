
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import { Phone, MessageSquare } from 'lucide-react';
import { events } from '../data/events';

const Contact = () => {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-8 text-center "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact <span className="gradient-text">Us</span>
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-xl p-6">
              <h2 className="text-2xl font-bold mb-6 gradient-text ">Get in Touch</h2>

              <div className="space-y-6">

                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 p-3 rounded-full">
                    <Phone className="text-indigo-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-900 font-bold">9487078661 - <span className="gradient-text font-bold" >ABISHEK</span></p>
                    <p className="text-gray-900 font-bold">6381503021 - <span className="gradient-text font-bold">ABDUL RASHIK</span></p>
                    <p className="text-gray-900 font-bold">8220696177 - <span className="gradient-text font-bold">VARUN KISHORE</span></p>
                    <p className="text-gray-900 font-bold">6381254305 - <span className="gradient-text font-bold">AADHI</span></p>
                    <p className="text-gray-900 font-bold">9003868879 - <span className="gradient-text font-bold" >MothishWaran</span></p>
                    <p className="text-gray-900 font-bold">6383035750 - <span className="gradient-text font-bold">Saswanth</span></p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 p-3 rounded-full">
                    <MessageSquare className="text-indigo-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Social Media</h3>
                    <div className="flex space-x-4 mt-2">
                      <a href="https://www.linkedin.com/in/mec-ai-ds-661832397?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-indigo-600 hover:text-indigo-800 transition-colors">
                        LinkedIn
                      </a>

                      <a href="https://www.instagram.com/mec_ai.ds_official?igsh=MWY0YXlhMDNia3E2eA==" className="text-indigo-600 hover:text-indigo-800 transition-colors">
                        Instagram
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>


        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Event <span className="gradient-text">Coordinators</span>
          </h2>

          <div className="space-y-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden"
              >
                <div className="bg-gradient-to-r from-indigo-600 to-pink-500 text-white p-4">
                  <h3 className="text-xl font-bold">{event.name}</h3>
                  <p className="text-sm text-indigo-100">{event.type === 'technical' ? 'Technical Event' : 'Non-Technical Event'}</p>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-900">
                    {event.coordinators.map((coordinator, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="bg-indigo-100 p-3 rounded-full">
                          <Phone className="text-indigo-600" size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold">{coordinator.name}</h4>
                          <p className="text-gray-900">
                            <span className="font-medium ">Mobile:</span> {coordinator.mobile}
                          </p>

                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;