import React from "react";

const Offerings = () => {
  return (
    <section className="offerings-section">
      <div className="offerings-container">
        <h1 className="offerings-heading">Our Offerings</h1>

        <p className="offerings-intro">
          Whether you are just starting out or aiming for advanced proficiency,
          we have something for everyone. Explore our comprehensive range of
          courses tailored to meet your Japanese learning goals.
        </p>

        <div className="offerings-grid">
          <div className="offering-card">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Beginner Course"
              className="offering-image"
            />
            <h3 className="offering-title">Beginner's Course</h3>
            <p className="offering-description">
              Perfect for those new to the language, covering the basics of
              speaking, reading, and writing. Learn Hiragana, Katakana, and
              essential vocabulary.
            </p>
          </div>

          <div className="offering-card">
            <img
              src="https://via.placeholder.com/300x200"
              alt="JLPT N5 Preparation"
              className="offering-image"
            />
            <h3 className="offering-title">JLPT N5 Preparation</h3>
            <p className="offering-description">
              Get ready for your first Japanese Language Proficiency Test. This
              course covers all necessary grammar, kanji, and vocabulary for N5.
            </p>
          </div>

          <div className="offering-card">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Intermediate Course"
              className="offering-image"
            />
            <h3 className="offering-title">Intermediate Course</h3>
            <p className="offering-description">
              Build upon your foundation and advance your skills. This course
              focuses on conversational fluency and more complex grammar
              structures.
            </p>
          </div>

          <div className="offering-card">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Cultural Immersion"
              className="offering-image"
            />
            <h3 className="offering-title">Cultural Immersion</h3>
            <p className="offering-description">
              Dive deep into Japanese culture with lessons on history,
              traditions, and modern-day society. Enhance your language learning
              with cultural context.
            </p>
          </div>

          <div className="offering-card">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Advanced JLPT N2-N1"
              className="offering-image"
            />
            <h3 className="offering-title">JLPT N2-N1 Preparation</h3>
            <p className="offering-description">
              Prepare for the highest levels of the JLPT with our expert-guided
              courses, focusing on kanji, grammar, and comprehensive test-taking
              strategies.
            </p>
          </div>

          <div className="offering-card">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Business Japanese"
              className="offering-image"
            />
            <h3 className="offering-title">Business Japanese</h3>
            <p className="offering-description">
              Learn essential language skills for working in Japan or
              interacting with Japanese-speaking clients and colleagues in a
              professional setting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
