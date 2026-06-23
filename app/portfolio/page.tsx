"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import Navbar from "@/components/Navbar";
import s from "./portfolio.module.css";
import { portfolioItems, PortfolioItem } from "@/lib/portfolioData";

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'projects' | 'designTeams' | 'reverseEngineering'>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'projects': return 'Project';
      case 'designTeams': return 'Design Team';
      case 'reverseEngineering': return 'Reverse Engineering';
      default: return '';
    }
  };

  // Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedItem(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedItem]);

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  // Helper to render custom 3 sections based on category
  const renderDetailSections = (item: PortfolioItem) => {
    switch (item.category) {
      case "projects":
        return (
          <div className={s.modalSectionsContainer}>
            <div className={s.modalSection}>
              <h4 className={s.sectionTitle} id="detail-section-what">What?</h4>
              <p className={s.sectionBody}>{item.what}</p>
            </div>
            <div className={s.modalSection}>
              <h4 className={s.sectionTitle} id="detail-section-how">How?</h4>
              <p className={s.sectionBody}>{item.how}</p>
            </div>
            <div className={s.modalSection}>
              <h4 className={s.sectionTitle} id="detail-section-results">Results</h4>
              <p className={s.sectionBody}>{item.results}</p>
            </div>
          </div>
        );
      case "designTeams":
        return (
          <div className={s.modalSectionsContainer}>
            <div className={s.modalSection}>
              <h4 className={s.sectionTitle} id="detail-section-team">Team</h4>
              <p className={s.sectionBody}>{item.team}</p>
            </div>
            <div className={s.modalSection}>
              <h4 className={s.sectionTitle} id="detail-section-role">My Role</h4>
              <p className={s.sectionBody}>{item.role}</p>
            </div>
            <div className={s.modalSection}>
              <h4 className={s.sectionTitle} id="detail-section-impact">Impact</h4>
              <p className={s.sectionBody}>{item.impact}</p>
            </div>
          </div>
        );
      case "reverseEngineering":
        return (
          <div className={s.modalSectionsContainer}>
            <div className={s.modalSection}>
              <h4 className={s.sectionTitle} id="detail-section-system">System Studied</h4>
              <p className={s.sectionBody}>{item.systemStudied}</p>
            </div>
            <div className={s.modalSection}>
              <h4 className={s.sectionTitle} id="detail-section-method">Method</h4>
              <p className={s.sectionBody}>{item.method}</p>
            </div>
            <div className={s.modalSection}>
              <h4 className={s.sectionTitle} id="detail-section-findings">Findings</h4>
              <p className={s.sectionBody}>{item.findings}</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <title>Portfolio | Tyler Charron</title>
      <meta name="description" content="Explore Tyler Charron's mechanical engineering portfolio, showcasing academic projects, student design teams, and reverse engineering case studies." />

      <main className={s.main}>
        <Navbar />

        <div className={s.container}>
          <header className={s.header}>
            <h1 className={s.title}>Portfolio</h1>
            <p className={s.subtitle}>
              A collection of mechanical engineering projects, design team experience, and reverse engineering work.
            </p>
          </header>

          {/* Filter Navigation */}
          <nav className={s.filterBar} aria-label="Portfolio sections filter">
            <button
              id="filter-all"
              className={`${s.filterTab} ${activeFilter === 'all' ? s.filterTabActive : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Work
            </button>
            <button
              id="filter-projects"
              className={`${s.filterTab} ${activeFilter === 'projects' ? s.filterTabActive : ''}`}
              onClick={() => setActiveFilter('projects')}
            >
              Projects
            </button>
            <button
              id="filter-designTeams"
              className={`${s.filterTab} ${activeFilter === 'designTeams' ? s.filterTabActive : ''}`}
              onClick={() => setActiveFilter('designTeams')}
            >
              Design Teams
            </button>
            <button
              id="filter-reverseEngineering"
              className={`${s.filterTab} ${activeFilter === 'reverseEngineering' ? s.filterTabActive : ''}`}
              onClick={() => setActiveFilter('reverseEngineering')}
            >
              Reverse Engineering
            </button>
          </nav>

          {/* Portfolio Grid */}
          <section className={s.grid} aria-label="Portfolio gallery">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                id={`portfolio-card-${item.id}`}
                className={s.card}
                onClick={() => setSelectedItem(item)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setSelectedItem(item);
                  }
                }}
              >
                {/* Visual Top Section with Gradient and Inner Outline */}
                <div
                  className={s.cardVisual}
                  style={{
                    background: `linear-gradient(135deg, ${item.gradientColors[0]} 0%, ${item.gradientColors[1]} 100%)`
                  }}
                >
                  <div className={s.cardVisualOutline} />
                </div>

                {/* Card Info Area */}
                <div className={s.cardContent}>
                  <div className={s.cardMeta}>
                    <span className={s.cardCategoryText}>{getCategoryLabel(item.category)}</span>
                  </div>
                  <h2 className={s.cardTitle}>{item.title}</h2>
                  <p className={s.cardDesc}>{item.shortDescription}</p>

                  <ul className={s.cardBullets}>
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx} className={s.cardBulletItem}>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className={s.cardTags}>
                    {item.tags.map((tag) => (
                      <span key={tag} className={s.cardTag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>

        {/* Portfolio Detail Modal Overlay */}
        {selectedItem && (
          <div
            id="portfolio-modal-overlay"
            className={s.modalOverlay}
            onClick={() => setSelectedItem(null)}
          >
            <div
              id="portfolio-modal-container"
              className={s.modalContainer}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              {/* Close Button */}
              <button
                id="modal-close-btn"
                className={s.modalCloseBtn}
                onClick={() => setSelectedItem(null)}
                aria-label="Close project modal"
              >
                <X size={22} />
              </button>

              {/* Modal visual banner */}
              <div
                className={s.modalVisual}
                style={{
                  background: `linear-gradient(135deg, ${selectedItem.gradientColors[0]} 0%, ${selectedItem.gradientColors[1]} 100%)`
                }}
              >
                <div className={s.modalVisualOutline} />
              </div>

              {/* Modal Main Content */}
              <div className={s.modalContent}>
                <div className={s.modalMeta}>
                  <span className={s.modalCategoryText}>{getCategoryLabel(selectedItem.category)}</span>
                </div>

                <h3 id="modal-title" className={s.modalTitle}>
                  {selectedItem.title}
                </h3>

                <p className={s.modalDesc}>{selectedItem.detailDescription}</p>

                {/* Specific 3-Section layout based on Category */}
                {renderDetailSections(selectedItem)}

                {/* Tags */}
                <div className={s.modalTagsContainer}>
                  {selectedItem.tags.map((tag) => (
                    <span key={tag} className={s.modalTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
