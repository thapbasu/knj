import React from "react";

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-container">
        <h1 className="about-us-heading">About Us</h1>

        <p className="about-us-text">
          At <span className="highlight">Nihongo Learn</span>, we are passionate
          about teaching Japanese language and culture to learners worldwide.
          Our goal is to make Japanese learning accessible, fun, and immersive.
          Whether you're a beginner or aiming for JLPT certification, our
          tailored courses ensure that you achieve fluency step by step.
        </p>

        <div className="about-us-mission">
          <h2 className="mission-heading">Our Mission</h2>
          <p className="mission-text">
            Our mission is to bridge the gap between cultures by providing an
            immersive, engaging, and flexible learning experience for Japanese
            learners. We believe that mastering a new language opens doors to
            endless possibilities and deeper understanding of Japan’s rich
            culture and traditions.
          </p>
        </div>

        <div className="about-us-courses">
          <h2 className="courses-heading">Our Courses</h2>
          <p className="courses-text">
            From introductory courses for complete beginners to advanced lessons
            for JLPT preparation, our expert instructors guide you through every
            aspect of Japanese – speaking, listening, reading, and writing. Our
            courses include interactive quizzes, cultural insights, and native
            speaker interactions.
          </p>
        </div>

        <div className="about-us-teaching">
          <h2 className="teaching-heading">Our Teaching Approach</h2>
          <p className="teaching-text">
            We use a holistic teaching approach that blends traditional learning
            methods with modern technology. Our online platform includes live
            lessons, video tutorials, and interactive exercises. Each lesson is
            crafted with attention to detail, focusing on both language and
            culture, to ensure you can communicate naturally in various
            settings.
          </p>
        </div>

        <div className="about-us-team">
          <h2 className="team-heading">Meet Our Instructors</h2>
          <div className="team-container">
            <div className="team-member">
              <img
                src="https://via.placeholder.com/150"
                alt="Instructor 1"
                className="team-member-image"
              />
              <h3 className="team-member-name">Hiroshi Tanaka</h3>
              <p className="team-member-role">
                Head Instructor, JLPT Specialist
              </p>
            </div>
            <div className="team-member">
              <img
                src="https://via.placeholder.com/150"
                alt="Instructor 2"
                className="team-member-image"
              />
              <h3 className="team-member-name">Yuki Sato</h3>
              <p className="team-member-role">
                Cultural Expert & Language Coach
              </p>
            </div>
            <div className="team-member">
              <img
                src="https://via.placeholder.com/150"
                alt="Instructor 3"
                className="team-member-image"
              />
              <h3 className="team-member-name">Mai Nakamura</h3>
              <p className="team-member-role">Grammar and Writing Instructor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
