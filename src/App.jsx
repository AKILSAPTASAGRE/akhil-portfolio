import React, { useState } from "react";
import "./App.css";

import profileImage from "./assets/profile.jpg";
import aboutProfile from "./assets/about-profile.png";
import jewelleryTheft from "./assets/jewellery-theft.png";
import plantCareRobot from "./assets/plant-care-robot.png";
import tomatoDiseaseRobot from "./assets/tomato-disease-robot.png";

function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const sendMessage = () => {
    if (!chatMessage.trim()) return;

    const subject = encodeURIComponent("Portfolio Contact");
    const body = encodeURIComponent(chatMessage);

    window.location.href =
      `mailto:akilsaptasagare@gmail.com?subject=${subject}&body=${body}`;

    setChatMessage("");
  };

  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <div
          className="nav-logo"
          onClick={() => scrollTo("home")}
        >
          <span className="logo-circle">AS</span>

          <span className="logo-name">
            AKHIL SAPTASAGARE
          </span>
        </div>

        <nav className="nav-links">
          <button onClick={() => scrollTo("home")}>HOME</button>
          <button onClick={() => scrollTo("about")}>ABOUT</button>
          <button onClick={() => scrollTo("work")}>WORK</button>
          <button onClick={() => scrollTo("experience")}>
            EXPERIENCE
          </button>
          <button onClick={() => scrollTo("certifications")}>
            CERTIFICATIONS
          </button>
          <button onClick={() => scrollTo("contact")}>
            CONTACT
          </button>
        </nav>

      </header>

      {/* ================= HERO ================= */}

      <section id="home" className="hero">

        <div className="hero-image">

          <img
            src={profileImage}
            alt="Akhil Saptasagare"
          />

        </div>

        <div className="hero-dark"></div>

        <div className="hero-glow"></div>

        <div className="hero-top">

          <span>
            ECE ENGINEERING STUDENT
          </span>

          <span>
            AI / ML / COMPUTER VISION
          </span>

        </div>

        <div className="hero-content">

          <div className="hero-small">
            HELLO, I'M
          </div>

          <h1>

            <span className="hero-first-name">
              AKHIL
            </span>

            <br />

            <span className="hero-last-name">
              SAPTASAGARE
            </span>

          </h1>

          <p>
            I build intelligent systems that connect
            Artificial Intelligence with Embedded Technology.
          </p>

        </div>

        <div className="hero-location">
          BELAGAVI — KARNATAKA — INDIA
        </div>

        <button
          className="scroll-button"
          onClick={() => scrollTo("about")}
        >
          ↓
        </button>

      </section>

      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="section about-section"
      >

        <div className="section-number">
          01 / INTRODUCTION
        </div>

        <div className="about-grid">

          <div className="about-title">

            <h2>
              Building
              <span>
                intelligent
              </span>
              things.
            </h2>

          </div>

          <div className="about-content">

            <p className="large-text">
              Electronics and Communication Engineering
              student passionate about Artificial Intelligence,
              Machine Learning, Computer Vision, Embedded Systems,
              IoT and Robotics.
            </p>

            <p>
              My goal is to turn engineering ideas into practical
              systems that can solve real-world problems.
            </p>

            <div className="about-buttons">

              <a
                href="/Akhil_Ningappa_Saptasagare_Resume.pdf"
                download
                className="outline-button"
              >
                DOWNLOAD RESUME ↗
              </a>

            </div>

          </div>

        </div>

        <div className="about-image">

          <img
            src={aboutProfile}
            alt="Akhil Saptasagare"
          />

        </div>

      </section>

      {/* ================= CAPABILITIES ================= */}

      <section
        id="capabilities"
        className="section capabilities-section"
      >

        <div className="section-number">
          02 / CAPABILITIES
        </div>

        <div className="capabilities-heading">

          <h2>
            What I
            <br />
            work
            <br />
            with.
          </h2>

          <p>
            A growing technical toolkit built through projects,
            experimentation and engineering practice.
          </p>

        </div>

        <div className="skills-grid">

          <div className="skill-item">
            <span>01</span>
            <h3>Python</h3>
            <b>↗</b>
          </div>

          <div className="skill-item">
            <span>02</span>
            <h3>C / C++</h3>
            <b>↗</b>
          </div>

          <div className="skill-item">
            <span>03</span>
            <h3>Artificial Intelligence</h3>
            <b>↗</b>
          </div>

          <div className="skill-item">
            <span>04</span>
            <h3>Machine Learning</h3>
            <b>↗</b>
          </div>

          <div className="skill-item">
            <span>05</span>
            <h3>Computer Vision</h3>
            <b>↗</b>
          </div>

          <div className="skill-item">
            <span>06</span>
            <h3>YOLO</h3>
            <b>↗</b>
          </div>

          <div className="skill-item">
            <span>07</span>
            <h3>OpenCV</h3>
            <b>↗</b>
          </div>

          <div className="skill-item">
            <span>08</span>
            <h3>MobileNetV3</h3>
            <b>↗</b>
          </div>

          <div className="skill-item">
            <span>09</span>
            <h3>TensorFlow</h3>
            <b>↗</b>
          </div>

          <div className="skill-item">
            <span>10</span>
            <h3>Arduino</h3>
            <b>↗</b>
          </div>

          <div className="skill-item">
            <span>11</span>
            <h3>ESP32</h3>
            <b>↗</b>
          </div>

          <div className="skill-item">
            <span>12</span>
            <h3>Raspberry Pi</h3>
            <b>↗</b>
          </div>

          <div className="skill-item">
            <span>13</span>
            <h3>IoT</h3>
            <b>↗</b>
          </div>

          <div className="skill-item">
            <span>14</span>
            <h3>Embedded Systems</h3>
            <b>↗</b>
          </div>

          <div className="skill-item">
            <span>15</span>
            <h3>Robotics</h3>
            <b>↗</b>
          </div>

          <div className="skill-item">
            <span>16</span>
            <h3>Image Processing</h3>
            <b>↗</b>
          </div>

        </div>

      </section>

      {/* ================= WORK ================= */}

      <section
        id="work"
        className="section work-section"
      >

        <div className="section-number">
          03 / SELECTED WORK
        </div>

        <div className="work-heading">

          <h2>
            Things
            <br />
            I've
            <br />
            built.
          </h2>

          <p>
            Selected projects combining AI, Computer Vision,
            Robotics and Embedded Systems.
          </p>

        </div>

        <article className="project-card">

          <div className="project-image">

            <img
              src={jewelleryTheft}
              alt="Jewellery Theft Detection System"
            />

            <span className="project-number">
              01
            </span>

          </div>

          <div className="project-info">

            <div className="project-category">
              AI / COMPUTER VISION
            </div>

            <h3>
              Jewellery Theft Detection System
            </h3>

            <p className="project-intro">
              An AI-powered CCTV surveillance system designed
              to detect suspicious activities in a jewellery shop
              and identify potential theft-related behaviour.
            </p>

            <div className="project-columns">

              <div>

                <label>
                  PROBLEM
                </label>

                <p>
                  Continuous manual monitoring of CCTV footage
                  can make it difficult to identify suspicious
                  jewellery related activities in real time.
                </p>

              </div>

              <div>

                <label>
                  SOLUTION
                </label>

                <p>
                  The system uses Computer Vision and AI models
                  to analyse CCTV footage and identify
                  jewellery-related activities.
                </p>

              </div>

            </div>

            <div className="pipeline">
              CCTV Camera → Person Detection → Hand Detection →
              Jewellery Detection → Behaviour Analysis →
              Theft Detection
            </div>

            <div className="project-tech">
              YOLO • MobileNetV3 • Python • Computer Vision • Raspberry Pi
            </div>

          </div>

        </article>

        <article className="project-card">

          <div className="project-image">

            <img
              src={plantCareRobot}
              alt="Smart Campus Plant Care Robot"
            />

            <span className="project-number">
              02
            </span>

          </div>

          <div className="project-info">

            <div className="project-category">
              ROBOTICS / IOT
            </div>

            <h3>
              Smart Campus Plant Care Robot
            </h3>

            <p className="project-intro">
              An autonomous robotic system designed to monitor
              campus plants, analyse soil conditions and support
              smart irrigation.
            </p>

            <div className="project-columns">

              <div>

                <label>
                  PROBLEM
                </label>

                <p>
                  Manual plant monitoring can result in irregular
                  watering and difficulty in continuously checking
                  plant conditions.
                </p>

              </div>

              <div>

                <label>
                  SOLUTION
                </label>

                <p>
                  A mobile robot can move around the campus,
                  monitor plants and collect environmental data
                  using sensors and cameras.
                </p>

              </div>

            </div>

            <div className="pipeline">
              Robot Mobility → Plant Detection → Sensor Reading →
              Decision → Watering → IoT Monitoring
            </div>

            <div className="project-tech">
              ESP32 • Arduino • IoT • Sensors • Robotics
            </div>

          </div>

        </article>

        <article className="project-card">

          <div className="project-image">

            <img
              src={tomatoDiseaseRobot}
              alt="Tomato Disease Detection Robot"
            />

            <span className="project-number">
              03
            </span>

          </div>

          <div className="project-info">

            <div className="project-category">
              ROBOTICS / AI
            </div>

            <h3>
              Smart Campus Tomato Disease Detection Robot
            </h3>

            <p className="project-intro">
              A robotic system using a camera and AI-based image
              processing to identify tomato plants and detect
              plant diseases.
            </p>

            <div className="project-columns">

              <div>

                <label>
                  PROBLEM
                </label>

                <p>
                  Manual inspection of plant leaves can make
                  disease identification time-consuming when
                  monitoring multiple plants.
                </p>

              </div>

              <div>

                <label>
                  SOLUTION
                </label>

                <p>
                  The robot captures tomato leaf images and
                  processes them to identify diseases such as
                  Early Blight and Late Blight.
                </p>

              </div>

            </div>

            <div className="pipeline">
              ESP32 → Camera → Detect Tomato Plant →
              Capture Leaf → Image Processing → Disease Detection
            </div>

            <div className="project-tech">
              ESP32 • Computer Vision • Image Processing • Machine Learning
            </div>

          </div>

        </article>

      </section>

      {/* ================= EXPERIENCE ================= */}

      <section
        id="experience"
        className="section experience-section"
      >

        <div className="section-number">
          04 / EXPERIENCE
        </div>

        <div className="experience-heading">

          <h2>
            Where
            <br />
            I'm
            <br />
            learning.
          </h2>

          <p>
            Practical experience through internships and engineering projects.
          </p>

        </div>

        <div className="experience-list">

          <article className="experience-item">

            <div className="experience-index">
              01
            </div>

            <div className="experience-main">

              <div className="experience-meta">
                MAY 2026 — PRESENT
              </div>

              <h3>
                AI / Computer Vision Intern
              </h3>

              <p>
                Working on training a CCTV-based computer vision
                model for theft detection and identifying
                suspicious and theft-related activities.
              </p>

              <div className="tags">
                <span>AI</span>
                <span>ML</span>
                <span>COMPUTER VISION</span>
                <span>YOLO</span>
                <span>PYTHON</span>
              </div>

            </div>

            <div className="experience-company">

              <strong>
                EduHubby
              </strong>

              <span className="working-badge">
                <i></i>
                CURRENTLY WORKING
              </span>

            </div>

          </article>

          <article className="experience-item">

            <div className="experience-index">
              02
            </div>

            <div className="experience-main">

              <div className="experience-meta">
                ENGINEERING / PROJECT EXPERIENCE
              </div>

              <h3>
                AI & Embedded Systems
              </h3>

              <p>
                Hands-on development involving Artificial Intelligence,
                Computer Vision, Machine Learning, Embedded Systems,
                IoT and Robotics.
              </p>

              <div className="tags">
                <span>ESP32</span>
                <span>ARDUINO</span>
                <span>AI</span>
                <span>ML</span>
                <span>IoT</span>
              </div>

            </div>

            <div className="experience-company">
              <strong>
                PROJECTS
              </strong>
            </div>

          </article>

          <article className="experience-item">

            <div className="experience-index">
              03
            </div>

            <div className="experience-main">

              <div className="experience-meta">
                PRACTICAL DEVELOPMENT
              </div>

              <h3>
                Computer Vision & Embedded Development
              </h3>

              <p>
                Practical work involving object detection,
                image processing, plant analysis, model training,
                microcontrollers, sensors and IoT technologies.
              </p>

              <div className="tags">
                <span>OPENCV</span>
                <span>MOBILENETV3</span>
                <span>TENSORFLOW</span>
                <span>PYTHON</span>
                <span>EMBEDDED</span>
              </div>

            </div>

            <div className="experience-company">
              <strong>
                DEVELOPMENT
              </strong>
            </div>

          </article>

        </div>

      </section>

      {/* ================= CERTIFICATIONS ================= */}

      <section
        id="certifications"
        className="section certifications-section"
      >

        <div className="section-number">
          05 / CERTIFICATIONS
        </div>

        <div className="certifications-heading">

          <h2>
            Learning
            <br />
            continuously.
          </h2>

          <p>
            Building knowledge through courses, projects and
            practical engineering experience.
          </p>

        </div>

        <div className="certification-list">

          <article className="certification-item">

            <span>
              01
            </span>

            <div>

              <h3>
                Artificial Intelligence
              </h3>

              <p>
                AI and machine learning related learning and projects.
              </p>

            </div>

            <b>
              ↗
            </b>

          </article>

          <article className="certification-item">

            <span>
              02
            </span>

            <div>

              <h3>
                Computer Vision
              </h3>

              <p>
                Object detection, image processing and visual AI.
              </p>

            </div>

            <b>
              ↗
            </b>

          </article>

          <article className="certification-item">

            <span>
              03
            </span>

            <div>

              <h3>
                Embedded Systems
              </h3>

              <p>
                Microcontrollers, sensors, robotics and IoT systems.
              </p>

            </div>

            <b>
              ↗
            </b>

          </article>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="section contact-section"
      >

        <div className="section-number">
          06 / CONTACT
        </div>

        <div className="contact-heading">

          <div>

            <h2>
              Let's build
              <br />
              something.
            </h2>

            <p>
              Have a project idea, internship opportunity,
              collaboration or simply want to connect?
            </p>

          </div>

          <div className="contact-links">

            <a href="mailto:akilsaptasagare@gmail.com">
              EMAIL
              <span>↗</span>
            </a>

            <a
              href="https://github.com/akilsaptasagare"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB
              <span>↗</span>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN
              <span>↗</span>
            </a>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <span>
          © 2026 AKHIL SAPTASAGARE
        </span>

        <span>
          AI / ML / COMPUTER VISION / EMBEDDED SYSTEMS
        </span>

        <button
          onClick={() => scrollTo("home")}
        >
          BACK TO TOP ↑
        </button>

      </footer>

      {/* ================= CHAT BUTTON ================= */}

      <button
        className={`chat-button ${
          chatOpen ? "active" : ""
        }`}
        onClick={() => setChatOpen(!chatOpen)}
      >
        {chatOpen ? "CLOSE" : "CHAT"}
      </button>

      {/* ================= CHAT WINDOW ================= */}

      {chatOpen && (

        <div className="chat-window">

          <div className="chat-header">

            <div>

              <span className="chat-status"></span>

              <strong>
                AKHIL'S ASSISTANT
              </strong>

            </div>

            <button
              onClick={() => setChatOpen(false)}
            >
              ×
            </button>

          </div>

          <div className="chat-body">

            <div className="chat-message bot">

              Hi! 👋

              <br />

              I'm here to help you learn more about
              Akhil's projects, skills and experience.

            </div>

            <div className="quick-questions">

              <button
                onClick={() =>
                  setChatMessage(
                    "I would like to know about your projects."
                  )
                }
              >
                PROJECTS
              </button>

              <button
                onClick={() =>
                  setChatMessage(
                    "I would like to know about your skills."
                  )
                }
              >
                SKILLS
              </button>

              <button
                onClick={() =>
                  setChatMessage(
                    "I would like to know about your internship."
                  )
                }
              >
                EXPERIENCE
              </button>

              <button
                onClick={() =>
                  setChatMessage(
                    "I would like to contact you."
                  )
                }
              >
                CONTACT
              </button>

            </div>

          </div>

          <div className="chat-input">

            <input
              type="text"
              placeholder="Ask something..."
              value={chatMessage}
              onChange={(e) =>
                setChatMessage(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
            />

            <button onClick={sendMessage}>
              ↗
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default App;