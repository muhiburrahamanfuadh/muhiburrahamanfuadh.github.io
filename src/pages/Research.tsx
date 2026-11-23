import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import AnimatedSection from '../components/AnimatedSection';
import { researchProjects } from '../data/researchProjects';

const researchThemes = [
  { title: 'Solid-state Batteries', detail: 'Advanced materials for sustainable energy storage' },
  { title: 'Materials Discovery', detail: 'AI-driven computational materials research' },
  { title: 'Thermal Transport', detail: 'Molecular-scale heat transfer and phase changes' },
  { title: 'Computational Methods', detail: 'Molecular dynamics and machine learning' },
];

export default function Research() {
  return <div className="min-h-screen editorial-research-page">
    <Navigation />
    <main className="editorial-research-main">
      <AnimatedSection>
        <span className="editorial-section-number">RESEARCH / PROFILE</span>
        <h1 className="editorial-research-title">Research</h1>
        <p className="editorial-research-lead">My research brings together computational physics, materials science, and data-driven modeling, with interests ranging from nanoscale thermal phenomena to advanced materials for sustainable energy.</p>
      </AnimatedSection>
      <AnimatedSection delay={80}>
        <h2 className="editorial-research-subheading">Research Themes</h2>
        <div className="editorial-themes">
          {researchThemes.map(theme => <div key={theme.title} className="editorial-theme">
            <h3>{theme.title}</h3><p>{theme.detail}</p>
          </div>)}
        </div>
      </AnimatedSection>
      <section aria-labelledby="research-projects-heading" className="editorial-research-list">
        <AnimatedSection><h2 className="editorial-research-subheading" id="research-projects-heading">Research Projects <span className="editorial-research-count">06</span></h2></AnimatedSection>
        {researchProjects.map((project,index) => <AnimatedSection key={project.id} delay={Math.min(index*45,180)}>
          <article className="editorial-research-card">
            <div className="editorial-research-card-copy">
              <div className="editorial-research-index">{String(index+1).padStart(2,'0')} / RESEARCH PROJECT</div>
              {project.isThesis && <span className="editorial-thesis-tag">UNDERGRADUATE THESIS</span>}
              <h3><Link to={`/research/${project.id}`}>{project.title}</Link></h3>
              <p className="editorial-research-affiliation">{project.lab}</p>
              <p className="editorial-research-summary">{project.description}</p>
              <Link className="editorial-research-action" to={`/research/${project.id}`}>View Details <span aria-hidden="true">→</span></Link>
            </div>
            <div className="editorial-research-card-images">
              {project.images.map((img,i)=><Link to={`/research/${project.id}`} key={img} aria-label={`View ${project.title}, figure ${i+1}`} className="editorial-figure-link">
                <img src={img} alt={`Scientific figure ${i+1}: ${project.title}`} loading="lazy" />
              </Link>)}
            </div>
          </article>
        </AnimatedSection>)}
      </section>
    </main>
  </div>;
}
