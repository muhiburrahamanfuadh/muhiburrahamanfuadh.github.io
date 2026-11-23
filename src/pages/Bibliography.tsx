
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navigation from '../components/Navigation';
import AnimatedSection from '../components/AnimatedSection';
import GlassmorphicCard from '../components/GlassmorphicCard';
import NeumorphicButton from '../components/NeumorphicButton';

const Bibliography = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100">
      <Navigation />
      
      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4">
        <AnimatedSection>
          <div className="mb-8">
            <Link to="/">
              <NeumorphicButton className="bg-amber-100 text-gray-800 flex items-center space-x-2">
                <ArrowLeft size={16} />
                <span>Back to Home</span>
              </NeumorphicButton>
            </Link>
          </div>
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Biography
            </h1>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto space-y-8">
          <AnimatedSection delay={200}>
            <GlassmorphicCard className="p-8">
              <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-tight">
                Early Childhood
              </h3>
              <p className="text-gray-700/80 font-light leading-relaxed mb-4">
                I used to create narrow channels, attaching a motor with a small LED to function as a tiny turbine. The smile on my face was brighter than the LED when it lit up. I remember disassembling my very first helicopter toy — a gift — to customize its body and attempt to make it fly again. Though it didn't fly, that didn't stop me from breaking three more helicopter toys afterward. My parents and family always encouraged this scientific curiosity. My mom, who was a medical assistant, and my brothers, who are doctors, played pivotal roles in my early scientific foundation. The foundation of my analytical thinking was laid during these formative years, when I learned to question everything and seek logical explanations for natural phenomena.
              </p>
            </GlassmorphicCard>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <GlassmorphicCard className="p-8">
              <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-tight">
                Educational Journey
              </h3>
              <p className="text-gray-700/80 font-light leading-relaxed mb-4">
                My formal education began at local schools in Cumilla, where I consistently excelled in mathematics and science, scoring the highest marks at the largest school in my hometown — Cumilla Modern High School. During higher secondary schooling at Comilla Victoria Government College, I discovered my uniqueness in problem-solving. I found that I can really understand, grasp, and use a new concept faster than many people. I never prepared using traditional problem-solving methods or standard textbooks, yet I consistently won medals. Participating in Physics, Mathematics, and Astronomy Olympiads introduced me to the beauty of theoretical physics and applied mathematics. I still remember winning the regional Astronomy Olympiad medal by solving just one out of 20 questions — the toughest one, which carried the highest marks. These experiences shaped my academic trajectory in engineering.
              </p>
              <p className="text-gray-700/80 font-light leading-relaxed mb-4">
                The transition to Bangladesh University of Engineering and Technology (BUET) was a significant milestone in my academic journey. Enrolled in the country's best university, I was exposed to the most brilliant minds and the most rigorous curriculum. In a class of 180 students, I was well recognized by my professors as "the most responsive student" — an achievement I take pride in.
              </p>
              
              {/* Friends Photo */}
              <div className="mt-6 mb-4">
                <img 
                  src="/lovable-uploads/bec2b38e-c645-4805-ad0c-598d61f264a6.png" 
                  alt="With friends during university days"
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg border border-gray-200"
                />
                <p className="text-sm text-gray-600/80 font-light text-center mt-2 italic">
                  With friends during university days
                </p>
              </div>
            </GlassmorphicCard>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <GlassmorphicCard className="p-8">
              <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-tight">
                Research Awakening
              </h3>
              <p className="text-gray-700/80 font-light leading-relaxed mb-4">
                My first encounter with research came during the end of my very first year. Being a freshman, I met Mahmudul Islam Ridul, who had just been admitted to MIT's Department of Materials Science and Engineering. I was deeply inspired by him, and started learning under his mentorship. I emailed 40 professors both within and outside our department, but received very few responses as a freshman. Then I met Dr. KM Ariful Kabir, who was teaching our math course at the time. I approached him, and he kindly agreed to guide me. During that time in his lab, I learned mathematical modeling, machine learning, and deep learning. After a couple of months, I was ready to dive into theoretical research concepts.
              </p>
              <p className="text-gray-700/80 font-light leading-relaxed mb-4">
                Afterwards, I worked on a side project with Dr. Aman Uddin, my academic advisor. Since I had some knowledge of ML and DL, he handed over a small part of a project to me. It involved synthetic image generation using OpenPNM, numerical modeling to calculate transport properties, and developing a CNN model to bypass computationally heavy simulations for faster, reasonably accurate predictions. Then came my undergraduate thesis, where I explored thermal transport phenomena at the atomistic level.
              </p>
              <p className="text-gray-700/80 font-light leading-relaxed mb-4">
                Working under the guidance of Dr. Nasim Hasan at BUET, I learned about thermal transport systems, phase-change heat transfer, and energy. Each research project taught me something new, and in the meantime, I discovered that I truly love academia.
              </p>
            </GlassmorphicCard>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Bibliography;
