import { motion } from 'framer-motion';
import { User, Phone } from 'lucide-react';

const OrganizersSection = () => {
    const faculty = [
        {
            name: "Mrs. R. Mekala",
            role: "AP/AI&DS",
            img: "/images/organizers/mekala.png",
            scale: 2.2,
            origin: 'center 30%'
        },
        {
            name: "Mrs. M. Nithiya",
            role: "AP/AI&DS",
            img: "/images/organizers/nithiya.jpg",
            scale: 1.7,
            origin: 'center 30%'
        },
    ];

    const students = [
        { name: "Arunkumar K", contact: "6382919354" },
        { name: "Kalai Selvi G", contact: "6374601372" },
        { name: "L Sanjai", contact: "8122179979" },
        { name: "Niveditha N", contact: "7094011001" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="organizers" className="py-24 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-indigo-500/5 via-transparent to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-white/5 backdrop-blur-2xl rounded-2xl flex items-center justify-center border border-white/10 shadow-2xl relative">
                            <User className="text-white w-8 h-8" />
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
                        ORGANIZERS
                    </h2>
                    <p className="text-white opacity-60 text-sm md:text-base font-medium">
                        Meet our dedicated organizing committee
                    </p>
                </motion.div>

                {/* Convenor */}
                <div className="flex flex-col items-center mb-24 text-center">
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-white font-bold text-lg md:text-xl uppercase tracking-wider mb-10"
                    >
                        Convenor
                    </motion.h3>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative flex flex-col items-center w-full"
                    >
                        <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full p-1 bg-gradient-to-b from-white/20 to-transparent shadow-2xl mx-auto">
                            <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/10 bg-black/40">
                                <img
                                    src="/images/organizers/convenor.png"
                                    alt="Dr. S. Ananth"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                    style={{
                                        objectPosition: 'center 15%',
                                        transform: 'scale(1.1)',
                                        transformOrigin: 'center 20%'
                                    }}
                                />
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="mt-8 px-4"
                        >
                            <h4 className="text-white text-2xl md:text-3xl font-bold tracking-tight">Dr. S. Ananth, M.E., Ph.D., MBA,</h4>
                            <p className="text-white font-semibold text-base mt-2">Associate Professor & Head,</p>
                            <p className="text-white opacity-60 text-sm mt-1">Department of Artificial Intelligence & Data Science</p>
                            <p className="text-white opacity-40 text-xs mt-1 uppercase font-bold">Mahendra Engineering College (Autonomous)</p>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Faculty Coordinators */}
                <div className="flex flex-col items-center mb-24 w-full">
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-white font-bold text-lg md:text-xl uppercase tracking-wider mb-12"
                    >
                        Faculty Coordinators
                    </motion.h3>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-wrap justify-center gap-12 md:gap-24 w-full"
                    >
                        {faculty.map((member) => (
                            <motion.div
                                key={member.name}
                                variants={itemVariants}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full p-1 bg-gradient-to-b from-white/20 to-transparent group-hover:scale-105 transition-transform duration-500 shadow-xl">
                                    <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/10 bg-black/40">
                                        <img
                                            src={member.img}
                                            alt={member.name}
                                            loading="lazy"
                                            className="w-full h-full object-cover"
                                            style={{
                                                objectPosition: 'center 15%',
                                                transform: `scale(${member.scale})`,
                                                transformOrigin: member.origin
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <h4 className="text-white font-bold text-xl tracking-tight">{member.name}</h4>
                                    <p className="text-white opacity-60 font-medium text-sm mt-1">{member.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Student Coordinators */}
                <div className="flex flex-col items-center w-full">
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-white font-bold text-lg md:text-xl uppercase tracking-wider mb-12"
                    >
                        Student Coordinators
                    </motion.h3>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl px-4"
                    >
                        {students.map((student) => (
                            <motion.div
                                key={student.name}
                                variants={itemVariants}
                                className="group relative flex flex-col items-center p-4 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <User className="text-white w-6 h-6" />
                                </div>

                                <h4 className="text-white font-bold text-center text-lg md:text-xl tracking-tight mb-2">
                                    {student.name}
                                </h4>

                                <a
                                    href={`tel:${student.contact}`}
                                    className="flex items-center gap-2 mt-1 text-white font-bold hover:text-indigo-400 transition-colors"
                                >
                                    <Phone className="w-4 h-4" />
                                    <span className="font-mono text-sm tracking-wider">{student.contact}</span>
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default OrganizersSection;
