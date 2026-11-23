
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navigation from '../components/Navigation';
import AnimatedSection from '../components/AnimatedSection';
import GlassmorphicCard from '../components/GlassmorphicCard';
import NeumorphicButton from '../components/NeumorphicButton';

const Motivation = () => {
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
              Purpose & Motivation
            </h1>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto space-y-8">
          <AnimatedSection delay={200}>
            <GlassmorphicCard className="p-8">
              <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-tight">
                Research Philosophy
              </h3>
              <p className="text-gray-700/80 font-light leading-relaxed mb-4">
                My research philosophy centers on the belief that understanding nature at its most fundamental level holds the key to solving many of humanity's greatest challenges. I hold the conviction that it's high time humanity addresses energy efficiency, climate change, and sustainable technology development. Mechanical Engineering lies at the core of these solutions. My philosophy is simple: I would rather try and fail than never try; question and search than stay silent; think and be confused than not think or care. I don't need passion for specific individual tasks; rather, what drives me is learning new things, thinking through the intricate complexity of a topic, and eventually finding solutions. My passion lies in learning deeply and understanding things as they truly are — whatever the subject may be.
              </p>
              <p className="text-gray-700/80 font-light leading-relaxed mb-4">
                I approach research with the mindset that every small discovery contributes to a larger understanding of our world. Whether I'm studying nanoscale heat transfer, developing new thermal management systems, exploring them experimentally, or applying data-driven computational methods, I believe in the importance of every step — even when there's no immediate, visible outcome. I strongly believe in hard work, persistence, perseverance, and critical thinking. I believe in questioning — questioning what is not known — and sharing what I know.
              </p>
            </GlassmorphicCard>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <GlassmorphicCard className="p-8">
              <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-tight">
                Long-term Vision
              </h3>
              <p className="text-gray-700/80 font-light leading-relaxed mb-4">
                I see myself as an academician with impact. Coming into a world of billions and leaving without giving back to the world that gave me so much — that isn't who I am. Whatever I do and wherever I go, I strongly desire that my name be recognized as a prominent figure in the field I work in. I love teaching — spreading knowledge that brings happiness and satisfaction to learners.
              </p>
            </GlassmorphicCard>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Motivation;
