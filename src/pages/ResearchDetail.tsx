import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Navigation from '../components/Navigation';
import AnimatedSection from '../components/AnimatedSection';
import GlassmorphicCard from '../components/GlassmorphicCard';
import NeumorphicButton from '../components/NeumorphicButton';
import { researchProjects, existingManuscriptLink } from '../data/researchProjects';

const ResearchDetail = () => {
  const { id } = useParams();
  const research = researchProjects.find(project => project.id === id);
  if (!research) return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navigation /><div className="pt-24 pb-16 max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-light text-gray-900 mb-4">Research Not Found</h1>
        <Link to="/research" className="text-blue-600">Back to Research</Link>
      </div>
    </div>
  );
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navigation />
      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4">
        <AnimatedSection>
          <div className="mb-8"><Link to="/research"><NeumorphicButton className="bg-gray-100 text-gray-800 flex items-center space-x-2"><ArrowLeft size={16}/><span>Back to Research</span></NeumorphicButton></Link></div>
          <div className="text-center mb-16">
            {research.isThesis && <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Undergraduate Thesis</p>}
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">{research.title}</h1>
            <p className="text-xl text-gray-600 font-light">{research.lab}</p>
          </div>
        </AnimatedSection>
        <div className="max-w-4xl mx-auto space-y-8">
          <AnimatedSection delay={100}>
            <GlassmorphicCard className="p-8">
              <div className="grid gap-4 mb-6">
                {research.images.map((img, index) => (
                  <div key={img} className="rounded-lg bg-gray-100 p-2 text-center">
                    <img src={img} alt={`Research figure ${index + 1} for ${research.title}`} className="max-w-full h-auto max-h-[650px] object-contain mx-auto"
                      onError={e => { e.currentTarget.style.display = 'none'; const notice = e.currentTarget.nextElementSibling as HTMLElement | null; if (notice) notice.style.display = 'block'; }}/>
                    <p style={{ display: 'none' }} className="text-gray-500 text-sm py-6">Research figure pending: {decodeURIComponent(img.split('/').pop() || '')}</p>
                  </div>
                ))}
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div><h4 className="text-lg font-medium text-gray-900 mb-2">Supervisor</h4><p className="text-gray-700 font-light mb-2">{research.advisor}</p><p className="text-gray-600 font-light text-sm">{research.advisorDesignation}</p></div>
                <div><h4 className="text-lg font-medium text-gray-900 mb-2">Duration</h4><p className="text-gray-700 font-light">{research.duration}</p></div>
              </div>
            </GlassmorphicCard>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <GlassmorphicCard className="p-8">
              <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-tight">Research Description</h3>
              <p className="text-lg text-gray-700/80 font-light leading-relaxed">{research.description}</p>
              {research.isThesis && <p className="text-lg text-gray-700/80 font-light leading-relaxed mt-5">A manuscript developed from this undergraduate thesis was published in <em>International Communications in Heat and Mass Transfer</em> (Q1, Impact Factor: 6.2), titled <strong>“Flow Boiling Transitions of Binary Mixture over Functionally Graded Wettability Surfaces: A Molecular Dynamics Study.”</strong></p>}
            </GlassmorphicCard>
          </AnimatedSection>
          <AnimatedSection delay={250}>
            <GlassmorphicCard className="p-8">
              <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-tight">Manuscript &amp; Publications</h3>
              <a href={existingManuscriptLink} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors font-light">View Manuscript <ExternalLink size={14} className="inline-block ml-1"/></a>
            </GlassmorphicCard>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};
export default ResearchDetail;
