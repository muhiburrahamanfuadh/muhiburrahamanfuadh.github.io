
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import AnimatedSection from '../components/AnimatedSection';
import GlassmorphicCard from '../components/GlassmorphicCard';

const Projects = () => {
  const [imagesLoaded, setImagesLoaded] = useState<{[key: string]: boolean}>({});
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  const projects = [
    {
      id: 'caloplotter',
      title: 'Real-time Caloplotter System (CaloPlot)',
      description: 'Developed a Python-based interface for real-time thermal analysis—used for ignition timing, heating value estimation, anomaly detection, and loss minimization in Bomb Calorimeter, and can be useful universally.',
      tools: 'Jupyter Notebook GUI',
      coverImage: '/lovable-uploads/3dee326d-b898-4387-bd97-2129e63c82d7.png'
    },
    {
      id: 'heat-exchanger',
      title: 'Double Pipe Heat Exchanger with Turbulator Fins',
      description: 'Engineered a sequential fin-augmented heat exchanger system. Modeled turbulator fin configurations and conducted CFD simulations.',
      tools: 'SolidWorks, ANSYS, HTRI',
      coverImage: '/lovable-uploads/00279930-22c5-4d83-b89a-83fd4519d21d.png'
    },
    {
      id: 'dental-stopper',
      title: 'Low-cost Penetration Stopper for Dental Micromotor Handpiece',
      description: 'Designed, in collaboration with Dhaka Dental College, an innovative light-weight stopper that prevents drilling after certain depth.',
      tools: 'SolidWorks',
      coverImage: '/lovable-uploads/6782421c-9a82-4d14-bc88-e32a7c1b878c.png'
    }
  ];

  useEffect(() => {
    const preloadImages = async () => {
      const allProjects = projects;
      const imagePromises = allProjects.map((project) => {
        return new Promise<void>((resolve) => {
          if (project.coverImage) {
            const img = new Image();
            img.onload = () => {
              setImagesLoaded(prev => ({ ...prev, [project.id]: true }));
              resolve();
            };
            img.onerror = () => {
              setImagesLoaded(prev => ({ ...prev, [project.id]: true }));
              resolve();
            };
            img.src = project.coverImage;
          } else {
            resolve();
          }
        });
      });

      await Promise.all(imagePromises);
      setAllImagesLoaded(true);
    };

    preloadImages();
  }, []);

  const ProjectCard = ({ project, index }: { project: any, index: number }) => (
    <AnimatedSection key={project.id} delay={200 + index * 200}>
      <Link to={`/projects/${project.id}`}>
        <GlassmorphicCard className="p-8 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-light text-gray-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-lg text-gray-700/80 font-light leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex items-center">
                <span className="text-sm font-light text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  Tools: {project.tools}
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="aspect-square w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                {project.coverImage ? (
                  <>
                    {!imagesLoaded[project.id] && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-lg">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                      </div>
                    )}
                    <img 
                      src={project.coverImage} 
                      alt={project.title}
                      className={`w-full h-full object-cover rounded-lg transition-opacity duration-300 ${
                        imagesLoaded[project.id] ? 'opacity-100' : 'opacity-0'
                      }`}
                      loading="eager"
                    />
                  </>
                ) : (
                  <span className="text-gray-500 font-light text-center text-sm">
                    Project<br />Image
                  </span>
                )}
              </div>
            </div>
          </div>
        </GlassmorphicCard>
      </Link>
    </AnimatedSection>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navigation />
      
      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Projects
            </h1>
          </div>
        </AnimatedSection>

        <div className="space-y-12 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;
