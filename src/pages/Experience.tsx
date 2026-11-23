
import React from 'react';
import Navigation from '../components/Navigation';
import AnimatedSection from '../components/AnimatedSection';
import GlassmorphicCard from '../components/GlassmorphicCard';
import { ExternalLink, GraduationCap, Briefcase } from 'lucide-react';

const Experience = () => {
  const teachingExperiences = [
    {
      title: "Physics & Mathematics Tutor for Olympiads",
      company: "Udvash",
      description: "Tutored Physics & Mathematics for Olympiads at Udvash, the largest academic coaching platform in Bangladesh."
    },
    {
      title: "Private Tutor",
      company: "Independent",
      description: "Privately tutored over 10 students; one of them, a Mechanical Engineering undergrad from the University of California, San Diego, achieved a 4.00/4.00 GPA that semester."
    },
    {
      title: "Physics & Mathematics Tutor for Olympiads",
      company: "Cumilla Math & Science Forum",
      description: "Tutored Physics & Mathematics for Olympiads at Cumilla Math & Science Forum."
    },
    {
      title: "Physics & Mathematics Tutor for Olympiads",
      company: "Abdus-Sattar Khan Science Society Cumilla",
      description: "Tutored Physics & Mathematics for Olympiads at Abdus-Sattar Khan Science Society Cumilla."
    },
    {
      title: "Physics, Chemistry & Mathematics Tutor",
      company: "Prayash Classes",
      description: "Tutored Physics, Chemistry & Mathematics at Prayash Classes."
    },
    {
      title: "Physics, Chemistry & Mathematics Tutor",
      company: "ABAKASH Welfare Association",
      description: "Tutored Physics, Chemistry & Mathematics at ABAKASH Welfare Association."
    }
  ];

  const researchExperiences = [
    {
      title: "Graduate Research Assistant (Incoming)",
      company: "Kirk H. Bevan Research Group, McGill University",
      duration: "Incoming (as stated in CV)",
      description: "Advisor: Dr. Kirk H. Bevan, Materials Engineering; co-advisor: Dr. Hong Guo, Physics."
    },
    {
      title: "Undergraduate Researcher",
      company: "Computational Thermal Engineering Lab (CTEL-BUET)",
      duration: "Apr 2025 – Jun 2026",
      description: "Under Dr. Nasim Hasan: molecular dynamics of patterned-wettability nanochannels, binary-mixture phase change, and physics-informed learning for time-dependent thermal responses."
    },
    {
      title: "Undergraduate Researcher",
      company: "Aman Uddin Lab (AUL-BUET)",
      duration: "Jul 2024 – Oct 2024",
      description: "Under Dr. Aman Uddin: Ti₂C MXene thermomechanical behavior using NEMD, and CNN-based prediction of porous transport layer morphology and topology from synthetic OpenPNM images."
    },
    {
      title: "Research Intern",
      company: "RNPD Lab, INST, Bangladesh Atomic Energy Commission",
      duration: "Nov 2023 – Apr 2024",
      description: "Under Dr. Shahzad Hossain: synthesized doped perovskites for solid oxide fuel cell electrodes via sol-gel and solid-state routes; performed calcination, sintering, and XRD analysis."
    }
  ];

  const professionalExperiences = [
    {
      title: "Internship Trainee",
      company: "Elite Hitech Industries Ltd.",
      companyUrl: "https://elite.com.bd/",
      duration: "Apr – May 2025",
      description: "Worked on HVAC thermal optimization—performed cooling load calculations & copper tube brazing; operated fin-press machine. Learned about vacuum sealing protocols, control system layout, and condenser fin design for improved thermal performance in real projects."
    },
    {
      title: "Founder",
      company: "PiezoMech Solutions",
      companyUrl: "https://bd.linkedin.com/company/piezomechsolutions",
      duration: "Oct 2023 – Jun 2026",
      description: "Started my own venture in providing CAD design and 3D printing services for BUET projects and small industry clients. Developed comprehensive solutions for engineering design challenges and rapid prototyping needs."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navigation />
      
      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Professional & Teaching Experience
            </h1>
          </div>
        </AnimatedSection>

        {/* Research Experience — added from the academic CV */}
        <div className="mb-16">
          <AnimatedSection delay={50}>
            <div className="flex items-center justify-center mb-8">
              <GraduationCap className="w-8 h-8 text-blue-600 mr-4" />
              <h2 className="text-3xl font-light text-gray-900 tracking-tight text-center">Research Experience</h2>
            </div>
          </AnimatedSection>
          <div className="space-y-6 max-w-4xl mx-auto">
            {researchExperiences.map((experience, index) => (
              <AnimatedSection key={index} delay={100 + index * 60}>
                <GlassmorphicCard className="p-6">
                  <h3 className="text-xl font-light text-gray-900 mb-1 tracking-tight">{experience.title}</h3>
                  <p className="text-lg font-light text-blue-600 mb-1">{experience.company}</p>
                  <p className="text-sm font-light text-gray-500 mb-3">{experience.duration}</p>
                  <p className="text-gray-700/80 font-light leading-relaxed">{experience.description}</p>
                </GlassmorphicCard>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Teaching Experience Section */}
        <div className="mb-16">
          <AnimatedSection delay={50}>
            <div className="flex items-center justify-center mb-8">
              <GraduationCap className="w-8 h-8 text-blue-600 mr-4" />
              <h2 className="text-3xl font-light text-gray-900 tracking-tight text-center">Teaching Experience</h2>
            </div>
          </AnimatedSection>

          <div className="space-y-6 max-w-4xl mx-auto">
            {teachingExperiences.map((experience, index) => (
              <AnimatedSection key={index} delay={100 + index * 60}>
                <GlassmorphicCard className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-light text-gray-900 mb-1 tracking-tight">
                      {experience.title}
                    </h3>
                    <p className="text-lg font-light text-blue-600 mb-2">
                      {experience.company}
                    </p>
                  </div>
                  <p className="text-gray-700/80 font-light leading-relaxed">
                    {experience.description}
                  </p>
                </GlassmorphicCard>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Professional Experience Section */}
        <div>
          <AnimatedSection delay={400}>
            <div className="flex items-center justify-center mb-8">
              <Briefcase className="w-8 h-8 text-blue-600 mr-4" />
              <h2 className="text-3xl font-light text-gray-900 tracking-tight text-center">Professional Experience</h2>
            </div>
          </AnimatedSection>

          <div className="space-y-8 max-w-4xl mx-auto">
            {professionalExperiences.map((experience, index) => (
              <AnimatedSection key={index} delay={450 + index * 100}>
                <GlassmorphicCard className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-light text-gray-900 mb-2 tracking-tight">
                      {experience.title}
                    </h3>
                    <a 
                      href={experience.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xl font-light text-blue-600 hover:text-blue-800 transition-colors group mb-2"
                    >
                      {experience.company}
                      <ExternalLink size={16} className="group-hover:scale-110 transition-transform" />
                    </a>
                    <p className="text-gray-700/80 font-light">
                      {experience.duration}
                    </p>
                  </div>
                  <p className="text-lg text-gray-700/80 font-light leading-relaxed">
                    {experience.description}
                  </p>
                </GlassmorphicCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
