
import React from 'react';
import Navigation from '../components/Navigation';
import AnimatedSection from '../components/AnimatedSection';
import GlassmorphicCard from '../components/GlassmorphicCard';

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical and Simulation Software",
      skills: [
        {
          name: "Design: SolidWorks, AutoCAD",
          description: "Used extensively for 3D modeling, technical drawings, and design optimization in heat exchanger projects and mechanical component design."
        },
        {
          name: "Simulation: LAMMPS, OVITO, VMD",
          description: "Applied for molecular dynamics simulations in nanochannel flow studies and thermal transport analysis."
        },
        {
          name: "Materials Modeling: VESTA",
          description: "Used for structural visualization and examination of atomistic material models."
        },
        {
          name: "Visualization: Tecplot360, OriginPro, HTRI",
          description: "Employed for data visualization, thermal analysis, and heat exchanger design optimization."
        }
      ]
    },
    {
      title: "Programming & Data Analysis",
      skills: [
        {
          name: "Analysis & Characterization Software: X'pert HighScore",
          description: "Software listed in my CV for materials-characterization data analysis."
        },
        {
          name: "Languages: C, C++, Python, MATLAB, Arduino (C++)",
          description: "Utilized for simulation development, data analysis, automation systems, and computational research implementations."
        },
        {
          name: "Supervised & Unsupervised Learning",
          description: "Data-driven modeling and analysis approaches included in my research toolkit."
        },
        {
          name: "Machine Learning: ANN, CNN, PINN",
          description: "Applied in predicting mass transport properties and developing physics-informed models for thermal engineering applications."
        }
      ]
    },
    {
      title: "Experimental Skills",
      skills: [
        {
          name: "Materials Characterization: XRD, XPS, FTIR, SEM",
          description: "Experimental characterization techniques listed in my academic CV."
        },
        {
          name: "Nanomaterials Synthesis",
          description: "Expertise in Sol-Gel and Solid-State synthesis methods for perovskite ceramic materials and SOFC electrode development."
        }
      ]
    },
    {
      title: "Documentation & Writing",
      skills: [
        {
          name: "MS PowerPoint & Canva",
          description: "Academic presentations, research communication, and visual documentation."
        },
        {
          name: "LaTeX, MS Office, Origin",
          description: "Professional documentation, research paper preparation, technical reporting, and academic presentation development."
        }
      ]
    },
    {
      title: "Languages",
      skills: [
        {
          name: "English - Fluent",
          description: "Professional proficiency in academic writing, research communication, and technical documentation."
        },
        {
          name: "Bangla - Native",
          description: "Native speaker with excellent communication skills for local collaboration and mentorship."
        },
        {
          name: "Arabic - Reading",
          description: "Reading comprehension for academic and research purposes."
        },
        {
          name: "Hindi/Urdu - Conversational",
          description: "Conversational ability for regional academic collaboration and networking."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navigation />
      
      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Skills & Expertise
            </h1>
          </div>
        </AnimatedSection>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection key={categoryIndex} delay={200 + categoryIndex * 100}>
              <div className="mb-8">
                <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-tight">
                  {category.title}
                </h2>
                <div className="grid lg:grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <GlassmorphicCard key={skillIndex} className="p-6">
                      <h3 className="text-lg font-light text-gray-900 mb-3 tracking-tight">
                        {skill.name}
                      </h3>
                      <p className="text-gray-700/80 font-light leading-relaxed">
                        {skill.description}
                      </p>
                    </GlassmorphicCard>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
