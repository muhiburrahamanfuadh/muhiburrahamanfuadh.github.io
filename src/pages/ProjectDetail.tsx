import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navigation from '../components/Navigation';
import AnimatedSection from '../components/AnimatedSection';
import GlassmorphicCard from '../components/GlassmorphicCard';
import NeumorphicButton from '../components/NeumorphicButton';

const ProjectDetail = () => {
  const { id } = useParams();

  const projectData = {
    'caloplotter': {
      title: 'Real-time Caloplotter System (CaloPlot)',
      description: 'Developed a Python-based interface for real-time thermal analysis—used for ignition timing, heating value estimation, anomaly detection, and loss minimization in Bomb Calorimeter, and can be useful universally.',
      outcome: 'Successfully created a comprehensive thermal analysis system that improved calorimeter efficiency and accuracy. The system is now being used for universal thermal analysis applications.',
      tools: ['Python', 'Jupyter Notebook', 'GUI Development', 'Real-time Data Processing'],
      images: [
        '/lovable-uploads/3dee326d-b898-4387-bd97-2129e63c82d7.png',
        '/lovable-uploads/ac2003dd-33ca-4b54-8ad5-fe148be6a6b9.png',
        '/lovable-uploads/bcfcc974-7a99-4115-b1c3-d0309ecbe77e.png'
      ]
    },
    'heat-exchanger': {
      title: 'Double Pipe Heat Exchanger with Turbulator Fins',
      description: 'Engineered a sequential fin-augmented heat exchanger system. Modeled turbulator fin configurations and conducted CFD simulations.',
      outcome: 'Achieved significant improvement in heat transfer efficiency through optimized fin configurations. The design demonstrated enhanced thermal performance compared to conventional heat exchangers.',
      tools: ['SolidWorks', 'ANSYS', 'HTRI', 'CFD Simulation', '3D Modeling'],
      images: [
        '/lovable-uploads/00279930-22c5-4d83-b89a-83fd4519d21d.png',
        '/lovable-uploads/1209d834-8fad-402f-a5e0-a8f1d00f2816.png',
        '/lovable-uploads/7ccc2b2a-0870-4ca6-ab47-14eeefdf457b.png',
        '/lovable-uploads/9c26f4b4-46fd-44d0-b9d5-3de55415dcca.png',
        '/lovable-uploads/8dea01db-400f-4ea2-bc3a-8cd2c7199326.png'
      ]
    },
    'dental-stopper': {
      title: 'Low-cost Penetration Stopper for Dental Micromotor Handpiece',
      description: 'Designed, in collaboration with Dhaka Dental College, an innovative light-weight stopper that prevents drilling after certain depth.',
      outcome: 'Successfully developed a cost-effective solution that enhances dental safety by preventing over-drilling during procedures. The lightweight design ensures minimal impact on existing dental equipment while providing precise depth control.',
      tools: ['SolidWorks', '3D Modeling', 'Product Design', 'Medical Device Development'],
      images: [
        '/lovable-uploads/6782421c-9a82-4d14-bc88-e32a7c1b878c.png',
        '/lovable-uploads/b3db5664-4cae-4038-a5e3-14678e34ac78.png',
        '/lovable-uploads/7aa56e2d-cadf-4e2d-8146-b0fc14b4c74c.png',
        '/lovable-uploads/c2cfc59b-f82b-4e3b-8928-e0d1a24404bb.png',
        '/lovable-uploads/bc6178a1-b969-433e-b68e-38f593ab20dc.png',
        '/lovable-uploads/62558672-02b8-4f9c-91d4-d1c1ab21c9ae.png',
        '/lovable-uploads/2a214d31-47c0-4eff-8858-1e57f5e4e862.png',
        '/lovable-uploads/97a35512-10ad-4de7-9b83-260bbe4c6990.png',
        '/lovable-uploads/10e783f7-4b95-45dc-a1c1-a1f3f665afee.png'
      ]
    }

  };

  const project = projectData[id as keyof typeof projectData];

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <Navigation />
        <div className="pt-24 pb-16 max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-light text-gray-900 mb-4">Project Not Found</h1>
            <p className="text-gray-700/80 font-light">The requested project could not be found.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navigation />
      
      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4">
        <AnimatedSection>
          <div className="mb-8">
            <Link to="/projects">
              <NeumorphicButton className="bg-blue-100 text-gray-800 flex items-center space-x-2">
                <ArrowLeft size={16} />
                <span>Back to Projects</span>
              </NeumorphicButton>
            </Link>
          </div>
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              {project.title}
            </h1>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto space-y-8">
          <AnimatedSection delay={200}>
            <GlassmorphicCard className="p-8">
              <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-tight">
                Project Description
              </h3>
              <p className="text-lg text-gray-700/80 font-light leading-relaxed">
                {project.description}
              </p>
            </GlassmorphicCard>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <GlassmorphicCard className="p-8">
              <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-tight">
                Outcome & Results
              </h3>
              <p className="text-lg text-gray-700/80 font-light leading-relaxed">
                {project.outcome}
              </p>
            </GlassmorphicCard>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <GlassmorphicCard className="p-8">
              <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-tight">
                Tools & Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.tools.map((tool, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-light"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </GlassmorphicCard>
          </AnimatedSection>

          <AnimatedSection delay={500}>
            <GlassmorphicCard className="p-8">
              <h3 className="text-2xl font-light text-gray-900 mb-6 tracking-tight">
                Project Images
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {project.images.map((image, index) => (
                  <div key={index} className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src={image} 
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </GlassmorphicCard>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
