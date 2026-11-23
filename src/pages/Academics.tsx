
import React from 'react';
import Navigation from '../components/Navigation';
import AnimatedSection from '../components/AnimatedSection';
import GlassmorphicCard from '../components/GlassmorphicCard';

const Academics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navigation />
      
      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Academic Background
            </h1>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Education */}
          <div className="space-y-8">
            <AnimatedSection delay={200}>
              <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-tight">Education</h2>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <GlassmorphicCard className="p-6">
                <h3 className="text-xl font-light text-gray-900 mb-2 tracking-tight">Master of Science (M.Sc.) in Physics</h3>
                <div className="space-y-2 text-gray-700/80 font-light">
                  <p><strong>Institution:</strong> McGill University</p>
                  <p><strong>Duration:</strong> January 2027 – Present</p>
                </div>
              </GlassmorphicCard>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <GlassmorphicCard className="p-6">
                <h3 className="text-xl font-light text-gray-900 mb-2 tracking-tight">Bachelor of Science (BSc) in Mechanical Engineering</h3>
                <div className="space-y-2 text-gray-700/80 font-light">
                  <p><strong>Institution:</strong> Bangladesh University of Engineering & Technology (BUET)</p>
                  <p><strong>Duration:</strong> January 2022 – June 2026</p>
                  <p><strong>CGPA:</strong> 3.88/4.00</p>
                  <p><strong>Merit Position:</strong> 12th out of 186 (top 7%)</p>
                </div>
              </GlassmorphicCard>
            </AnimatedSection>


          </div>

          {/* Right Column - Achievements */}
          <div className="space-y-8">
            <AnimatedSection delay={600}>
              <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-tight">Academic Achievements & Awards</h2>
            </AnimatedSection>

            <AnimatedSection delay={700}>
              <GlassmorphicCard className="p-6">
                <div className="space-y-4 text-gray-700/80 font-light">
                  <div>
                    <h4 className="text-lg font-light text-gray-900 mb-2">Graduate Excellence Award — McGill University</h4>
                    <p>Awarded to the top meritorious students in the department.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-light text-gray-900 mb-2">RQMO Advanced Materials Academy Award</h4>
                    <p>Recognizes top student researchers with outstanding research ideas and strong academic and research profiles.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-light text-gray-900 mb-2">University Merit Scholarship</h4>
                    <p>Awarded to top 10% of the class - Awarded in every semester except one</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-light text-gray-900 mb-2">University Stipend</h4>
                    <p>Awarded for academic excellence - Received in all semesters except one</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-light text-gray-900 mb-2">Dean's List Award</h4>
                    <p>Awarded in 3 out of 4 levels for consistent academic excellence</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-light text-gray-900 mb-2">Government Education Board Scholarship</h4>
                    <p>Awarded for academic excellence in JSC, SSC & HSC examinations</p>
                  </div>
                </div>
              </GlassmorphicCard>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
