import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import AnimatedSection from '../components/AnimatedSection';
import GlassmorphicCard from '../components/GlassmorphicCard';

const Activities = () => {
  const [sectionsLoaded, setSectionsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSectionsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  const leadershipActivities = [
    {
      title: "President, MMMRN-BUET",
      duration: "Jun 2025 – Jul 2026",
      description: "Led the only established UG research network at BUET. Mentored juniors in research methodology and simulation practices, organized sessions and seminars."
    },
    {
      title: "Founder, PiezoMech Solutions",
      duration: "Oct 2023 – Jun 2026",
      description: "Provided CAD design and 3D printing services for BUET projects and small industry clients."
    },
    {
      title: "Founder, Prayash Classes",
      duration: "Jan 2022 – Present",
      description: "Non-profit initiative offering affordable education to underprivileged meritorious students in Cumilla."
    }
  ];

  const teachingMentorship = [
    {
      title: "Mentor, MMMRN-BUET (Nanomechanics Subteam)",
      duration: "Jun 2025 – Jul 2026",
      description: "Delivered research talks and ongoing mentorship sessions for junior researchers in the Nanomechanics Subteam."
    },
    {
      title: "Mentor, Comilla Science Forum",
      duration: "2018 – 2020",
      description: "Trained junior students in math/science Olympiads."
    },
    {
      title: "Academic Team, CZS Carnival",
      duration: "May 2019",
      description: "Content contributor, question setter, and conducted Q&A sessions."
    },
    {
      title: "Volunteer, ABAKASH Welfare Association",
      duration: "2018 – 2019",
      description: "Provided education to street children; conducted sessions and classes."
    }
  ];

  const clubsEvents = [
    {
      title: "Founding President, Abdus Sattar Khan Science Society",
      duration: "May 2019 – Apr 2020",
      description: "Founded a science club and organized workshops and trained juniors for olympiads."
    },
    {
      title: "Affiliate Member, IMechE",
      description: "Conducted sessions, outreaches, and arranged seminars."
    },
    {
      title: "Affiliate Member, BUET Automobile Club",
      description: "Supervised logistics and finances, arranged sponsors, and organized sessions."
    },
    {
      title: "Affiliate Member, BADHAN-BUET",
      description: "Arranged campaigns for blood donation, launched BADHAN events at BUET (3-time donor)."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navigation />
      
      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Extracurricular Activities
            </h1>
          </div>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Leadership Activities */}
          <AnimatedSection delay={sectionsLoaded ? 50 : 200}>
            <div className="mb-8">
              <h2 className="text-3xl font-light text-gray-900 mb-6 tracking-tight">Leadership & Entrepreneurship</h2>
              <div className="space-y-6">
                {leadershipActivities.map((activity, index) => (
                  <GlassmorphicCard key={index} className="p-6">
                    <div className="mb-3">
                      <h3 className="text-xl font-light text-gray-900 mb-1 tracking-tight">
                        {activity.title}
                      </h3>
                      <p className="text-blue-600 font-light">
                        {activity.duration}
                      </p>
                    </div>
                    <p className="text-gray-700/80 font-light leading-relaxed">
                      {activity.description}
                    </p>
                  </GlassmorphicCard>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Teaching & Mentorship */}
          <AnimatedSection delay={sectionsLoaded ? 100 : 300}>
            <div className="mb-8">
              <h2 className="text-3xl font-light text-gray-900 mb-6 tracking-tight">Teaching & Mentorship</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {teachingMentorship.map((activity, index) => (
                  <GlassmorphicCard key={index} className="p-6">
                    <div className="mb-3">
                      <h3 className="text-lg font-light text-gray-900 mb-1 tracking-tight">
                        {activity.title}
                      </h3>
                      {activity.duration && (
                        <p className="text-blue-600 font-light text-sm">
                          {activity.duration}
                        </p>
                      )}
                    </div>
                    <p className="text-gray-700/80 font-light leading-relaxed">
                      {activity.description}
                    </p>
                  </GlassmorphicCard>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Clubs & Events */}
          <AnimatedSection delay={sectionsLoaded ? 150 : 400}>
            <div className="mb-8">
              <h2 className="text-3xl font-light text-gray-900 mb-6 tracking-tight">Clubs & Events</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {clubsEvents.map((activity, index) => (
                  <GlassmorphicCard key={index} className="p-6">
                    <div className="mb-3">
                      <h3 className="text-lg font-light text-gray-900 mb-1 tracking-tight">
                        {activity.title}
                      </h3>
                      {activity.duration && (
                        <p className="text-blue-600 font-light text-sm">
                          {activity.duration}
                        </p>
                      )}
                    </div>
                    <p className="text-gray-700/80 font-light leading-relaxed">
                      {activity.description}
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

export default Activities;
