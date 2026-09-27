import { useEffect, useRef, useState } from "react";
import AccordionGallery from "./AccordionGallery";
import "./App.css";

const artItems = [
  {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/Great_Bath%2C_Mohenjo-daro_20160806_ARN-09.jpg/960px-Great_Bath%2C_Mohenjo-daro_20160806_ARN-09.jpg",
    label: "Indus Valley",
    subtitle: "Where Indian Art Began",
    date: "2600 — 1900 BCE",
    link: "#indus-valley",
    overview: "The Indus Valley (Harappan) Civilization flourished in the Bronze Age basin of the Indus River. Celebrated for its advanced town planning, sophisticated civic architecture, and exquisite craftsmanship, it marks the earliest foundation of urban civilization and artistic expression on the Indian subcontinent.",
    technique: "Master artisans worked with steatite seals engraved with unicorn, zebu bull, and yogic motifs, terracotta pottery with geometric bands, shell bangles, and lost-wax bronze casting such as the renowned 'Dancing Girl' of Mohenjo-daro.",
    significance: "Representing an egalitarian urban ethos with advanced drainage and monumental public baths, its visual culture demonstrates astonishing anatomical poise, stylized abstraction, and enduring utilitarian elegance.",
  },
  {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Bodhisattva_Padmapani%2C_cave_1%2C_Ajanta%2C_India.jpg/960px-Bodhisattva_Padmapani%2C_cave_1%2C_Ajanta%2C_India.jpg",
    label: "Ajanta",
    subtitle: "Stories Painted on Ancient Stone",
    date: "2nd century BCE — 6th century CE",
    link: "#ajanta",
    overview: "Carved into the sheer horseshoe cliff of the Waghora River in Maharashtra, the 30 rock-cut caves of Ajanta represent the supreme pinnacle of ancient Indian Buddhist art and classical mural painting.",
    technique: "Painters prepared the basalt rock face with layers of clay, cow dung, and rice husks, finished with fine lime plaster. Using natural mineral pigments—lapis lazuli, red and yellow ochre, malachite green, and lamp black—artists applied tempera paints to achieve luminous depth, supple contours, and divine grace.",
    significance: "The murals narrate Jataka tales (previous lives of the Buddha), celestial beings, and royal courts. Masterpieces like the Bodhisattva Padmapani and Bodhisattva Vajrapani set the aesthetic canon for Asian Buddhist art across Central and East Asia.",
  },
  {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/Beautiful_view_of_the_Brihadishvara_Temple.jpg/960px-Beautiful_view_of_the_Brihadishvara_Temple.jpg",
    label: "Chola",
    subtitle: "Bronze, Devotion and Grandeur",
    date: "9th — 13th century CE",
    link: "#chola",
    overview: "The Imperial Chola dynasty of Southern India heralded a golden age of maritime influence, majestic Dravidian granite architecture, and peerless bronze casting centered in the Kaveri River basin.",
    technique: "Crafted using the ancient Madhuchehishtavidhana (lost-wax or cire-perdue) technique, Chola bronzes were cast solid with sacred panchaloha (five-metal alloy). Sculptors followed strict iconometric canons (Shilpa Shastras) while imbuing figures with dynamic spiritual energy and sensuous movement.",
    significance: "The iconic Shiva Nataraja (Lord of the Cosmic Dance) captures cosmic creation, preservation, destruction, illusion, and liberation in a single circular rhythm of fire, celebrated worldwide as a supreme synthesis of philosophy, physics, and art.",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/A_Mughal_Painting_showing_a_Hunting_Scene%2C_circa_17th_century%2C_Chandigarh_Museum.jpg",
    label: "Mughal",
    subtitle: "A World of Miniatures and Majesty",
    date: "1526 — 1857 CE",
    link: "#mughal",
    overview: "Emerging under Emperors Akbar, Jahangir, and Shah Jahan, Mughal art established magnificent imperial ateliers that blended Persian delicacy, Indian vibrant palette, and European perspective into a refined courtly idiom.",
    technique: "Mughal miniatures were executed on handmade wasli paper with single-hair squirrel-tail brushes. Pigments were painstakingly derived from crushed precious stones (lapis lazuli, ruby), cinnabar, gold leaf (varaq), and malachite, burnished to an enamel-like gleam with agate stones.",
    significance: "Chronicling imperial biographies (Akbarnama, Padshahnama), romantic epics, courtly splendor, flora, and fauna with botanical precision, Mughal painting revolutionized portraiture and visual storytelling across South Asia.",
  },
  {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Madhubani_painting.jpg/960px-Madhubani_painting.jpg",
    label: "Madhubani",
    subtitle: "A Living Language of Color",
    date: "Traditional — Mithila Region (Bihar & Nepal)",
    link: "#madhubani",
    overview: "Madhubani (or Mithila) painting is an ancient communal art form traditionally practiced by women on the freshly plastered mud walls and floors of domestic courtyards to commemorate festivals, fertility, and rites of passage.",
    technique: "Characterized by bold two-dimensional imagery, double-line outlines filled with fine cross-hatching, and absence of empty space (filled with flowers, birds, and celestial motifs). Pigments are purely organic: soot for black, turmeric for yellow, kusum flowers for red, and indigo for deep blues, applied with bamboo twigs and nibs.",
    significance: "Featuring diverse styles including Bharni, Kachni, Tantrik, and Godna, Madhubani portrays Hindu deities (Radha-Krishna, Durga, Shiva-Parvati) alongside symbols of fertility (fish, lotus, peacock), bridging ancient folklore with modern global recognition.",
  },
  {
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/Warli_painting.jpg/960px-Warli_painting.jpg",
    label: "Warli",
    subtitle: "Life Drawn in Simple Lines",
    date: "Ancient Tribal Heritage — Northern Sahyadri",
    link: "#warli",
    overview: "The Warli art tradition is a sacred tribal expression practiced by the indigenous Warli community in the North Sahyadri range of Maharashtra. Rooted in pre-historic rock art aesthetics, it celebrates the eternal harmony between humanity, earth, and the divine spirit of nature.",
    technique: "Painted on reddish-brown mud walls coated with cow dung (geru), artists paint using a paste of ground rice flour blended with water and natural gum binder, using a chewed bamboo stick as a stylus. The visual vocabulary is composed strictly of primal geometric shapes: circles (sun and moon), triangles (mountains and trees), and squares (sacred enclosures).",
    significance: "Unlike courtly or devotional art depicting mythological hierarchies, Warli centers on everyday community life—farming, fishing, village ceremonies, and the rhythmic circular Tarpa dance where dancers intertwine like a spiral of life.",
  },
];

const galleryHeading = "TRACING THE INDIAN IMAGINATION";

const indusCollectionImages = [
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/Great_Bath%2C_Mohenjo-daro_20160806_ARN-09.jpg/960px-Great_Bath%2C_Mohenjo-daro_20160806_ARN-09.jpg",
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2b/Mohenjo-daro.jpg/960px-Mohenjo-daro.jpg",
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Mohenjo-daro_complex_entrance_gate.JPG/960px-Mohenjo-daro_complex_entrance_gate.JPG",
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/03/Mohenjodaro_-_view_of_the_stupa_mound.JPG/960px-Mohenjodaro_-_view_of_the_stupa_mound.JPG",
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/Harappan_%28Indus_Valley%29_Shell_Bracelets_and_Shell_Artifacts.jpg/960px-Harappan_%28Indus_Valley%29_Shell_Bracelets_and_Shell_Artifacts.jpg",
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/15/Archaeological_artifacts_recovered_from_Khirsara%2C_Indus_Valley_Civilization.jpg/960px-Archaeological_artifacts_recovered_from_Khirsara%2C_Indus_Valley_Civilization.jpg",
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/43/Indus_Valley_Figurines-1-Govt.museum-salem-India.jpg/960px-Indus_Valley_Figurines-1-Govt.museum-salem-India.jpg",
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/Indus_Valley_Seals-2-Govt.museum-salem-India.jpg/960px-Indus_Valley_Seals-2-Govt.museum-salem-India.jpg",
];

const collectionSets = {
  "Indus Valley": indusCollectionImages,
  Ajanta: [
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Ajanta_cave_2%2C_girls_detail.jpg/960px-Ajanta_cave_2%2C_girls_detail.jpg",
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Bodhisattva_Padmapani%2C_cave_1%2C_Ajanta%2C_India.jpg/960px-Bodhisattva_Padmapani%2C_cave_1%2C_Ajanta%2C_India.jpg",
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Buddhist_painting_from_Ajanta%2C_cave_9%2C_Albert_Hall_Museum%2C_Jaipur.jpg/960px-Buddhist_painting_from_Ajanta%2C_cave_9%2C_Albert_Hall_Museum%2C_Jaipur.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/e/e8/Cave_1_painting%2C_Ajanta%2C_Maharashtra.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/f/f9/Iacuci11d0b62ppy.D.0.Ajanta-Cave-painting-Painting-Dance.jpg",
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Painting_in_Ajanta_Cave_1-12.jpg/960px-Painting_in_Ajanta_Cave_1-12.jpg",
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Painting_in_Ajanta_Cave_1-25.jpg/960px-Painting_in_Ajanta_Cave_1-25.jpg",
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Painting_in_Ajanta_Cave_1-41.jpg/960px-Painting_in_Ajanta_Cave_1-41.jpg",
  ],
  Chola: [
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/11th_century_Nataraja%2C_Chola_period_bronze%2C_Government_Museum%2C_Chennai.jpg/960px-11th_century_Nataraja%2C_Chola_period_bronze%2C_Government_Museum%2C_Chennai.jpg",
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fe/A_view_of_the_Nataraja%2C_Chola_period_bronze%2C_11th_century%2C_Government_Museum%2C_Chennai.jpg/960px-A_view_of_the_Nataraja%2C_Chola_period_bronze%2C_11th_century%2C_Government_Museum%2C_Chennai.jpg",
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Nataraja%2C_Chola_period_bronze%2C_11th_century%2C_Government_Museum%2C_Chennai.jpg/960px-Nataraja%2C_Chola_period_bronze%2C_11th_century%2C_Government_Museum%2C_Chennai.jpg",
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Nataraja%2C_Chola_period_bronze%2C_11th_century%2C_Government_Museum%2C_Chennai_%283%29.jpg/960px-Nataraja%2C_Chola_period_bronze%2C_11th_century%2C_Government_Museum%2C_Chennai_%283%29.jpg",
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/Nataraja%2C_Chola_period_bronze%2C_11th_century%2C_Government_Museum%2C_Chennai_%286%29.jpg/960px-Nataraja%2C_Chola_period_bronze%2C_11th_century%2C_Government_Museum%2C_Chennai_%286%29.jpg",
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Nataraja_Statue_in_Bronze_from_Chola_Dynasty.jpg/960px-Nataraja_Statue_in_Bronze_from_Chola_Dynasty.jpg",
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Shiva_Nataraja%2C_Southern_India%2C_Tamil_Nadu%2C_Chola_dynasty%2C_900s-1100s_with_later_alterations%2C_cast_bronze_-_Portland_Art_Museum_-_Portland%2C_Oregon_-_DSC08478.jpg/960px-thumbnail.jpg",
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/Shiva_as_the_Lord_of_Dance_LACMA_edit.jpg/960px-Shiva_as_the_Lord_of_Dance_LACMA_edit.jpg",
  ],
  Mughal: [
    "https://upload.wikimedia.org/wikipedia/commons/5/5b/A_Mughal_Painting_showing_a_Hunting_Scene%2C_circa_17th_century%2C_Chandigarh_Museum.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/5/55/Angel_on_a_Composite_Animal%2C_Mughal_Painting_circa_16th_century%2C_Chandigarh_Museum.jpg",
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/Elephant_Combat_-_Mughal_Painting%2C_19th_Century.jpg/960px-Elephant_Combat_-_Mughal_Painting%2C_19th_Century.jpg",
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Govardhan._Jahangir_Visiting_the_Ascetic_Jadrup._ca._1616-20%2C_Musee_Guimet%2C_Paris.jpg/960px-Govardhan._Jahangir_Visiting_the_Ascetic_Jadrup._ca._1616-20%2C_Musee_Guimet%2C_Paris.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/c/cb/Mosque_Scene%2C_Based_on_the_Persian_Manuscript_Tawarikh-i-Alfi%2C_History_of_the_thousand_years%2C_circa_1595_CE%2C_Mughal_Miniature_Painting._National_Museum%2C_Delhi.16th_century.jpg",
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/Mughal_painting_of_Amarnath_Shivling.jpg/960px-Mughal_painting_of_Amarnath_Shivling.jpg",
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/The_Nativity%2C_1725_CE%2C_Muhammad_Shah_Period_of_Mughal_Miniatures%2C_National_Museum%2C_Delhi.jpg/960px-The_Nativity%2C_1725_CE%2C_Muhammad_Shah_Period_of_Mughal_Miniatures%2C_National_Museum%2C_Delhi.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/0/00/Woman_holding_a_sprinkler%2C_Mughal_School_of_Miniature_Paintings%2C_circa_1660_%28Shahjahan_Phase%29%2C_National_Museum%2C_New_Delhi.jpg",
  ],
  Madhubani: [
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d8/Dilli_Haat_Madhubani_Mithila_Painting_Artist.jpg/960px-Dilli_Haat_Madhubani_Mithila_Painting_Artist.jpg",
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/03/Jadupatua_paintings_and_Madhubani_paintings.JPG/960px-Jadupatua_paintings_and_Madhubani_paintings.JPG",
    "https://upload.wikimedia.org/wikipedia/commons/8/8b/Madhubani_Painting.jpg",
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/70/Madhubani_Painting_2.jpg/960px-Madhubani_Painting_2.jpg",
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Madhubani_Painting_Exhibition.jpg/960px-Madhubani_Painting_Exhibition.jpg",
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/Madhubani_painting_by_Bhuvana_Meenakshi.jpg/960px-Madhubani_painting_by_Bhuvana_Meenakshi.jpg",
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/Madhubani_paintings_or_Milithila_Painting-IMG_0103.jpg/960px-Madhubani_paintings_or_Milithila_Painting-IMG_0103.jpg",
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/Madhubani_paintings_or_Milithila_Painting_-IMG_0028.jpg/960px-Madhubani_paintings_or_Milithila_Painting_-IMG_0028.jpg",
  ],
  Warli: [
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8e/Nakashikam_%28Warli_painting%29.jpg/960px-Nakashikam_%28Warli_painting%29.jpg",
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/Warli_Paintings%2C_Mysore.jpg/960px-Warli_Paintings%2C_Mysore.jpg",
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/Warli_art_at_Borivali_Stn_01.jpg/960px-Warli_art_at_Borivali_Stn_01.jpg",
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/Warli_art_at_Borivali_Stn_02.jpg/960px-Warli_art_at_Borivali_Stn_02.jpg",
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/28/Warli_art_at_Borivali_Stn_03.jpg/960px-Warli_art_at_Borivali_Stn_03.jpg",
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Warli_art_on_a_house_wall_at_Sanjay_Gandhi_National_Park.jpg/960px-Warli_art_on_a_house_wall_at_Sanjay_Gandhi_National_Park.jpg",
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/Warli_painting.jpg/960px-Warli_painting.jpg",
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/Warli_painting_in_Warli.JPG/960px-Warli_painting_in_Warli.JPG",
  ],
};

function App() {
  const overlayVideoRef = useRef(null);
  const [isEntering, setIsEntering] = useState(false);
  const [hasOverlayEnded, setHasOverlayEnded] = useState(false);
  const [showLanding, setShowLanding] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [activeTab, setActiveTab] = useState("about");
  const [previewIndex, setPreviewIndex] = useState(null);
  const [isDiscovering, setIsDiscovering] = useState(false);
  const discoverTimerRef = useRef(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    if (previewIndex === null) return;

    const handleKeyDown = (e) => {
      const activeImages = (selectedArtwork && collectionSets[selectedArtwork.label]) || indusCollectionImages;
      if (e.key === "Escape") {
        setPreviewIndex(null);
      } else if (e.key === "ArrowRight") {
        setPreviewIndex((prev) => (prev !== null ? (prev + 1) % activeImages.length : 0));
      } else if (e.key === "ArrowLeft") {
        setPreviewIndex((prev) => (prev !== null ? (prev - 1 + activeImages.length) % activeImages.length : 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [previewIndex, selectedArtwork]);

  const handleEnter = () => {
    setIsEntering(true);
    setHasOverlayEnded(false);

    // Start overlay video from the beginning
    if (overlayVideoRef.current) {
      overlayVideoRef.current.currentTime = 0;
      overlayVideoRef.current.play();
    }
  };

  const handleHome = () => {
    window.clearTimeout(discoverTimerRef.current);
    setIsDiscovering(false);

    if (overlayVideoRef.current) {
      overlayVideoRef.current.pause();
      overlayVideoRef.current.currentTime = 0;
    }

    setIsEntering(false);
    setHasOverlayEnded(false);
  };

  const handleDiscover = () => {
    if (isDiscovering || showLanding) {
      return;
    }

    setIsDiscovering(true);
    discoverTimerRef.current = window.setTimeout(() => {
      setShowLanding(true);
      setIsDiscovering(false);
    }, 700);
  };

  const handleBack = () => {
    setShowLanding(false);
    setSelectedArtwork(null);
    setPreviewIndex(null);
    setActiveTab("about");
    handleHome();
  };

  const handleArtworkBack = () => {
    setSelectedArtwork(null);
    setPreviewIndex(null);
    setActiveTab("about");
  };

  const handleCardSelect = (artwork) => {
    setSelectedArtwork(artwork);
    setActiveTab("about");
    setPreviewIndex(null);
  };

  const handleGalleryReveal = () => {
    galleryRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleGalleryHeadingKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleGalleryReveal();
    }
  };

  if (selectedArtwork) {
    const activeImages = collectionSets[selectedArtwork.label] || indusCollectionImages;

    return (
      <main className={`artwork-page ${activeTab === "collection" ? "is-collection-mode" : "is-about-mode"}`}>
        <header className="artwork-nav">
          <nav aria-label="Artwork view navigation">
            <button
              type="button"
              className={`artwork-tab-btn ${activeTab === "about" ? "active" : ""}`}
              onClick={() => {
                setPreviewIndex(null);
                setActiveTab("about");
              }}
            >
              ABOUT
            </button>
            <button
              type="button"
              className={`artwork-tab-btn ${activeTab === "collection" ? "active" : ""}`}
              onClick={() => {
                setPreviewIndex(null);
                setActiveTab("collection");
              }}
            >
              COLLECTION
            </button>
          </nav>
          <button className="artwork-back" onClick={handleArtworkBack}>
            BACK TO GALLERY
          </button>
        </header>

        {activeTab === "about" ? (
          <>
            <section className="artwork-copy">
              <span className="artwork-date-tag">{selectedArtwork.date}</span>
              <h1>{selectedArtwork.label}</h1>
              <p className="artwork-subtitle">{selectedArtwork.subtitle}</p>

              <div className="about-narrative">
                <div className="about-block">
                  <h3>Historical Overview</h3>
                  <p>{selectedArtwork.overview}</p>
                </div>
                <div className="about-block">
                  <h3>Artistic Technique & Medium</h3>
                  <p>{selectedArtwork.technique}</p>
                </div>
                <div className="about-block">
                  <h3>Cultural Legacy</h3>
                  <p>{selectedArtwork.significance}</p>
                </div>
              </div>

              <button
                className="artwork-cta"
                type="button"
                onClick={() => {
                  setPreviewIndex(null);
                  setActiveTab("collection");
                }}
              >
                Explore the collection (8 Works) →
              </button>
            </section>

            <div className="artwork-image-panel">
              <img
                src={selectedArtwork.image}
                alt={selectedArtwork.label}
                referrerPolicy="no-referrer"
              />
              <span className="artwork-caption">{selectedArtwork.date}</span>
            </div>
          </>
        ) : (
          <section className="collection-page-content">
            <header className="collection-heading">
              <p>{selectedArtwork.label.toUpperCase()} / COLLECTION (8 WORKS)</p>
              <h1>{selectedArtwork.subtitle}</h1>
            </header>

            <div className="collection-grid">
              {activeImages.map((image, index) => (
                <figure
                  className="collection-item"
                  key={`${selectedArtwork.label}-${index}`}
                  onClick={() => setPreviewIndex(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setPreviewIndex(index);
                    }
                  }}
                  aria-label={`View full image ${index + 1} of ${selectedArtwork.label}`}
                >
                  <img
                    src={image}
                    alt={`${selectedArtwork.label} collection work ${index + 1}`}
                    loading={index < 4 ? "eager" : "lazy"}
                    referrerPolicy="no-referrer"
                  />
                </figure>
              ))}
            </div>
          </section>
        )}

        {previewIndex !== null && (
          <div
            className="image-modal-backdrop"
            onClick={() => setPreviewIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedArtwork.label} full size artwork`}
          >
            <div className="image-modal-header" onClick={(e) => e.stopPropagation()}>
              <div className="image-modal-title">
                <span className="image-modal-tag">{selectedArtwork.label}</span>
                <span className="image-modal-count">
                  0{previewIndex + 1} / 0{activeImages.length}
                </span>
              </div>
              <button
                className="image-modal-close"
                type="button"
                onClick={() => setPreviewIndex(null)}
                aria-label="Close full view"
              >
                CLOSE [ESC]
              </button>
            </div>

            <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="image-modal-nav prev"
                type="button"
                aria-label="Previous artwork"
                onClick={() =>
                  setPreviewIndex((prev) => (prev - 1 + activeImages.length) % activeImages.length)
                }
              >
                ‹
              </button>

              <img
                key={activeImages[previewIndex]}
                src={activeImages[previewIndex]}
                alt={`${selectedArtwork.label} full view ${previewIndex + 1}`}
                className="image-modal-img"
                referrerPolicy="no-referrer"
              />

              <button
                className="image-modal-nav next"
                type="button"
                aria-label="Next artwork"
                onClick={() =>
                  setPreviewIndex((prev) => (prev + 1) % activeImages.length)
                }
              >
                ›
              </button>
            </div>
          </div>
        )}
      </main>
    );
  }

  if (showLanding) {
    return (
      <main className="gallery-page">
        <button className="back-button" onClick={handleBack}>
          BACK
        </button>

        <section className="gallery-intro">
          <h1
            role="button"
            tabIndex={0}
            aria-label="Reveal the Indian art gallery"
            onClick={handleGalleryReveal}
            onKeyDown={handleGalleryHeadingKeyDown}
          >
            {galleryHeading.split("").map((character, index) => (
              <span
                className="heading-letter"
                key={`${character}-${index}`}
                aria-hidden="true"
              >
                {character === " " ? "\u00a0" : character}
              </span>
            ))}
          </h1>
          <p className="gallery-tagline">From ancient symbols to living traditions.</p>
        </section>

        <div ref={galleryRef} className="gallery-stage">
          <AccordionGallery
            items={artItems}
            onSelect={handleCardSelect}
            defaultIndex={0}
            expandRatio={0.52}
            trigger="hover"
            accentColor="#ffffff"
            overlayColor="#060010"
            textColor="#ffffff"
            grayscale
            showLabels
            duration={0.6}
            ease="power3.out"
            parallax={0.5}
            tilt={8}
            stagger={0.06}
            height={460}
            gap={10}
            radius={16}
            orientation="horizontal"
          />
        </div>
      </main>
    );
  }

  return (
    <main className="intro">

      {/* Original background video */}
      <video
        className="intro-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/intro.mp4" type="video/mp4" />
      </video>

      {/* Enter button */}
      {!isEntering && (
        <button
          className="enter-prompt"
          onClick={handleEnter}
        >
          click to enter
        </button>
      )}

      {isEntering && hasOverlayEnded && (
        <>
          <button className="home-button" onClick={handleHome}>
            HOME
          </button>
          <button
            className="discover-button"
            type="button"
            onClick={handleDiscover}
            disabled={isDiscovering}
            aria-busy={isDiscovering}
          >
            DISCOVER
          </button>
        </>
      )}

      {/* Transition video */}
      <video
        ref={overlayVideoRef}
        className={`overlay-video ${isEntering ? "active" : ""}`}
        muted
        playsInline
        onEnded={() => setHasOverlayEnded(true)}
      >
        <source src="/overlay.mp4" type="video/mp4" />
      </video>

    </main>
  );
}

export default App;