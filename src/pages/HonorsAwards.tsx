
import React from 'react';
import Navigation from '../components/Navigation';
import AnimatedSection from '../components/AnimatedSection';
import GlassmorphicCard from '../components/GlassmorphicCard';
import { Award } from 'lucide-react';

const HonorsAwards = () => {
  const awards = [
    {
      title: "Graduate Excellence Award",
      organization: "McGill University",
      description: "Awarded to the top meritorious students in the department."
    },
    {
      title: "RQMP Advanced Materials Academy Award (Cohort-3)",
      organization: "RQMP Advanced Materials Academy",
      description: "Recognizes top student researchers with outstanding research ideas and strong academic and research profiles."
    },
    {
      title: "Graduation with HONOURS",
      organization: "Bangladesh University of Engineering and Technology (BUET)",
      description: "B.Sc. in Mechanical Engineering, June 2026."
    },
    {
      title: "University Merit Scholarship",
      organization: "Bangladesh University of Engineering and Technology (BUET)",
      description: "Academic excellence; awarded to students in the top 10% of the class."
    },
    {
      title: "Undergraduate Dean’s List Award",
      organization: "Bangladesh University of Engineering and Technology (BUET)",
      description: "Academic years 2020–21, 2022–23, and 2023–24."
    },
    {
      title: "Government Education Board Scholarship",
      organization: "Bangladesh Education Board",
      description: "Academic excellence in JSC, SSC, and HSC examinations."
    },
    {
      title: "Finalist – Rocketry Innovation Challenge 2022",
      organization: "Rocketry Innovation Challenge",
      year: "2022"
    },
    {
      title: "Perfect Attendance Award",
      organization: "Comilla Victoria Govt. College",
      year: "2020"
    },
    {
      title: "Teacher of the Year",
      organization: "ABAKASH Welfare Foundation",
      year: "2018"
    }
  ];

  const olympiadAchievements = [
    {
      title: "Bangladesh Physics Olympiad",
      achievement: "Regional Medalist",
      duration: "2018 – 2020"
    },
    {
      title: "Mathematical Olympiad",
      achievement: "Regional Winner",
      duration: "2019 – 2020"
    },
    {
      title: "Bangladesh National Science Olympiad",
      achievement: "Honorable Mention in Regionals",
      year: "2019"
    },
    {
      title: "Astronomy & Science Olympiad",
      achievement: "Regional Medalist",
      year: "2019"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navigation />
      
      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Award className="w-12 h-12 text-blue-600 mr-4" />
              <h1 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight">
                Honors & Awards
              </h1>
            </div>
          </div>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Awards Section */}
          <AnimatedSection delay={200}>
            <div className="mb-8">
              <h2 className="text-3xl font-light text-gray-900 mb-6 tracking-tight">Awards & Recognition</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {awards.map((award, index) => (
                  <GlassmorphicCard key={index} className="p-6">
                    <div className="text-center">
                      <h3 className="text-xl font-light text-gray-900 mb-2 tracking-tight">
                        {award.title}
                      </h3>
                      <p className="text-blue-600 font-light mb-1">
                        {award.organization}
                      </p>
                      {"year" in award && award.year && (
                        <p className="text-gray-700/80 font-light">({award.year})</p>
                      )}
                      {"description" in award && award.description && (
                        <p className="text-gray-700/80 font-light mt-2">{award.description}</p>
                      )}
                    </div>
                  </GlassmorphicCard>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Olympiad Achievements */}
          <AnimatedSection delay={300}>
            <div className="mb-8">
              <h2 className="text-3xl font-light text-gray-900 mb-6 tracking-tight">Olympiad Achievements</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {olympiadAchievements.map((achievement, index) => (
                  <GlassmorphicCard key={index} className="p-6 text-center">
                    <h3 className="text-lg font-light text-gray-900 mb-2 tracking-tight">
                      {achievement.title}
                    </h3>
                    <p className="text-blue-600 font-light mb-1">
                      {achievement.achievement}
                    </p>
                    <p className="text-gray-700/80 font-light text-sm">
                      {achievement.duration || achievement.year}
                    </p>
                  </GlassmorphicCard>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default HonorsAwards;
