import React from 'react';
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
              <h3>{project.title}</h3>
              <p className="editorial-research-affiliation"><strong>Laboratory:</strong> {project.lab}</p>
              <p className="editorial-research-supervisor"><strong>Supervisor:</strong> {project.advisor} <span className="editorial-research-designation">— {project.advisorDesignation}</span></p>
              <p className="editorial-research-summary">{project.description}</p>
              {project.isThesis && <p className="editorial-research-publication">A manuscript developed from this undergraduate thesis was published in <em>International Communications in Heat and Mass Transfer</em> (Q1, Impact Factor: 6.2), titled <strong>“Flow Boiling Transitions of Binary Mixture over Functionally Graded Wettability Surfaces: A Molecular Dynamics Study.”</strong></p>}
              {project.isThesis ? (
                <a className="editorial-research-action" href="https://doi.org/10.1016/j.icheatmasstransfer.2026.113195" target="_blank" rel="noopener noreferrer" aria-label="View published undergraduate thesis manuscript via DOI">View Manuscript <span aria-hidden="true">↗</span></a>
              ) : (
                <button className="editorial-research-action editorial-research-action-disabled" type="button" disabled title="Manuscript link not yet available">View Manuscript <span aria-hidden="true">↗</span></button>
              )}
            </div>
            <div className="editorial-research-card-images">
              {project.images.map((img,i)=><div key={img} className="editorial-figure-link">
                <img src={img} alt={`Scientific figure ${i+1}: ${project.title}`} loading="lazy" />
              </div>)}
            </div>
          </article>
        </AnimatedSection>)}
      </section>
    </main>
  </div>;
}
