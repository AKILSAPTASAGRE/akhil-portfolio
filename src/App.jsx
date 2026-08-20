import React from "react";
import "./App.css";

import profileImage from "./assets/profile.jpg";
import jewelleryTheftImage from "./assets/jewellery-theft.png";
import tomatoDiseaseImage from "./assets/tomato-disease-robot.png";
import plantCareImage from "./assets/plant-care-robot.png";

function App() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const projects = [
    {
      number: "01",
      category: "AI / COMPUTER VISION",
      title: "Jewellery Theft Detection System",
      image: jewelleryTheftImage,

      description:
        "An AI-powered CCTV surveillance system designed to detect suspicious activities in a jewellery shop and identify potential theft-related behaviour.",

      problem:
        "Continuous manual monitoring of CCTV footage can make it difficult to identify suspicious jewellery-related activities in real time.",

      solution:
        "The system uses Computer Vision and AI models to analyse CCTV footage and identify people, hands and jewellery-related activities. The detected behaviour is then analysed to determine potential theft activity.",

      pipeline: [
        "CCTV Camera",
        "Person Detection",
        "Hand Detection",
        "Jewellery Detection",
        "Behaviour Analysis",
        "Theft Detection",
      ],

      tech:
        "YOLO • MobileNetV3 • Python • Computer Vision • Raspberry Pi 5",

      contribution:
        "Model training, Computer Vision development and theft-detection pipeline development.",

      status:
        "Currently under development.",
    },

    {
      number: "02",
      category: "ROBOTICS / AI",
      title: "Smart Campus Tomato Disease Detection Robot",
      image: tomatoDiseaseImage,

      description:
        "A robotic system that uses a camera to detect tomato plants, capture leaf images and process them to identify plant diseases.",

      problem:
        "Manual inspection of plant leaves can make disease identification time-consuming when monitoring plants.",

      solution:
        "The robot uses an ESP32 with a camera to detect the tomato plant and capture its leaf image. The captured image is processed to identify diseases such as Early Blight and Late Blight.",

      pipeline: [
        "ESP32",
        "Camera",
        "Detect Tomato Plant",
        "Capture Leaf",
        "Image Processing",
        "Disease Detection",
        "Early / Late Blight",
      ],

      tech:
        "ESP32 • Computer Vision • Image Processing • Machine Learning • Robotics",

      contribution:
        "Hardware development, model training, image processing and overall project development.",

      status:
        "Partially working / Under development.",
    },

    {
      number: "03",
      category: "ROBOTICS / AUTOMATION",
      title: "Smart Campus Plant Care / Irrigation Robot",
      image: plantCareImage,

      description:
        "An intelligent plant-care robot designed to monitor plant and leaf conditions and automatically water plants when watering is required.",

      problem:
        "Manual plant monitoring and watering can be time-consuming and may lead to irregular watering of plants.",

      solution:
        "The robot uses a camera to observe the plant and leaf condition. Image processing is used to determine whether watering is required. When watering is needed, the system activates the water pump and valve to automatically water the plant.",

      pipeline: [
        "ESP32 + Arduino UNO",
        "Camera",
        "Plant / Leaf Condition",
        "Image Processing",
        "Watering Decision",
        "Pump + Valve",
        "Automatic Watering",
      ],

      tech:
        "ESP32 • Arduino UNO • Camera • Image Processing • Robotics • Automation",

      contribution:
        "Hardware development, programming, camera/image processing and overall project development.",

      status:
        "Partially working / Under development.",
    },
  ];

  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <div className="logo">
          <span>&lt;/&gt;</span>
          <strong>Akhil Saptasagare</strong>
        </div>

        <nav>
          <a onClick={() => scrollToSection("home")}>HOME</a>

          <a onClick={() => scrollToSection("about")}>ABOUT</a>

          <a onClick={() => scrollToSection("skills")}>SKILLS</a>

          <a onClick={() => scrollToSection("projects")}>PROJECTS</a>

          <a onClick={() => scrollToSection("experience")}>
            EXPERIENCE
          </a>

          <a onClick={() => scrollToSection("certifications")}>
            CERTIFICATIONS
          </a>

          <a onClick={() => scrollToSection("contact")}>
            CONTACT
          </a>
        </nav>

        <div className="theme-button">
          ◐
        </div>

      </header>


      {/* ================= HOME ================= */}

      <section id="home" className="hero">

        <div className="hero-content">

          <div className="hero-intro">
            Hello, I'm <span></span>
          </div>

          <h1>
            Akhil
            <br />
            <span>Saptasagare</span>
          </h1>

          <h3>
            ECE STUDENT
            <b>|</b>
            AI & ML ENTHUSIAST
            <b>|</b>
            INNOVATOR
          </h3>

          <p>
            I build intelligent systems that bridge the gap between
            Artificial Intelligence and Embedded Technology.
            <br />
            Passionate about Computer Vision, IoT, Robotics and
            real-world problem solving.
          </p>

          <div className="hero-buttons">

            <a
              href="/resume.pdf"
              download
              className="primary-button"
            >
              ↓ &nbsp; DOWNLOAD RESUME
            </a>

            <button
              className="secondary-button"
              onClick={() => scrollToSection("contact")}
            >
              ◉ &nbsp; LET&apos;S CONNECT
            </button>

          </div>

          <div className="hero-contact">

            <div>
              <span>✉</span>
              akhilsaptasagar3@gmail.com
            </div>

            <div>
              <span>in</span>
              linkedin.com/in/akhil-saptasagar-771a4039a
            </div>

            <div>
              <span>⌕</span>
              +91 88676 68644
            </div>

            <div>
              <span>◎</span>
              instagram.com/akil_saptasagare
            </div>

          </div>

        </div>

        <div className="hero-image">

          <img
            src={profileImage}
            alt="Akhil Saptasagare"
          />

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section id="about" className="section about">

        <div className="section-number">
          02 / ABOUT
        </div>

        <div className="about-grid">

          <div className="about-image">

            <img
              src={profileImage}
              alt="Akhil Saptasagare"
            />

          </div>

          <div className="about-content">

            <h2>
              Engineering
              <br />
              ideas
              <br />
              <span>into reality.</span>
            </h2>

            <div className="cyan-line"></div>

            <p>
              I&apos;m an Electronics and Communication Engineering
              student passionate about building intelligent systems
              that solve real-world problems.
            </p>

            <p>
              My interests are focused on Artificial Intelligence,
              Machine Learning, Computer Vision, IoT, Embedded Systems
              and Robotics.
            </p>

            <div className="about-details">

              <div>
                <span>EDUCATION</span>
                <strong>ECE Engineering</strong>
              </div>

              <div>
                <span>UNIVERSITY</span>
                <strong>VTU</strong>
              </div>

              <div>
                <span>LOCATION</span>
                <strong>Belagavi, Karnataka</strong>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section id="skills" className="section skills">

        <div className="section-number">
          03 / SKILLS
        </div>

        <h2>
          Tools I use to
          <br />
          <span>build.</span>
        </h2>

        <div className="skills-grid">

          {[
            ["01", "Python"],
            ["02", "C / C++"],
            ["03", "Artificial Intelligence"],
            ["04", "Machine Learning"],
            ["05", "Computer Vision"],
            ["06", "YOLO"],
            ["07", "OpenCV"],
            ["08", "MobileNetV3"],
            ["09", "TensorFlow"],
            ["10", "Arduino"],
            ["11", "ESP32"],
            ["12", "Raspberry Pi 5"],
            ["13", "IoT"],
            ["14", "Embedded Systems"],
            ["15", "Robotics"],
            ["16", "Image Processing"],
          ].map(([number, skill]) => (

            <div
              className="skill-card"
              key={skill}
            >

              <span>
                {number}
              </span>

              <h3>
                {skill}
              </h3>

            </div>

          ))}

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section id="projects" className="section projects">

        <div className="section-number">
          04 / PROJECTS
        </div>

        <h2>
          Things I&apos;ve
          <br />
          <span>built.</span>
        </h2>

        <div className="projects-list">

          {projects.map((project) => (

            <article
              className="project-card"
              key={project.number}
            >

              <div className="project-number">
                {project.number}
              </div>

              <div className="project-content">

                <div className="project-top">

                  <span>
                    {project.category}
                  </span>

                </div>

                <h3>
                  {project.title}
                </h3>

                <div className="project-image">

                  <img
                    src={project.image}
                    alt={project.title}
                  />

                </div>

                <p>
                  {project.description}
                </p>

                <div className="project-details">

                  <div className="project-detail-block">

                    <span>
                      PROBLEM
                    </span>

                    <p>
                      {project.problem}
                    </p>

                  </div>


                  <div className="project-detail-block">

                    <span>
                      SOLUTION
                    </span>

                    <p>
                      {project.solution}
                    </p>

                  </div>


                  <div className="project-detail-block">

                    <span>
                      PROJECT PIPELINE
                    </span>

                    <div className="pipeline">

                      {project.pipeline.map(
                        (step, index) => (

                          <React.Fragment key={step}>

                            <div className="pipeline-step">
                              {step}
                            </div>

                            {index <
                              project.pipeline.length - 1 && (
                              <span className="pipeline-arrow">
                                →
                              </span>
                            )}

                          </React.Fragment>

                        )
                      )}

                    </div>

                  </div>

                </div>


                <div className="project-tech">
                  {project.tech}
                </div>


                <p className="project-contribution">

                  <strong>
                    MY CONTRIBUTION:
                  </strong>

                  <br />

                  {project.contribution}

                </p>


                <div className="project-status">

                  <span>
                    STATUS
                  </span>

                  <p>
                    {project.status}
                  </p>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* ================= EXPERIENCE ================= */}

      <section
        id="experience"
        className="section experience"
      >

        <div className="section-number">
          05 / EXPERIENCE
        </div>

        <h2>
          Learning through
          <br />
          <span>experience.</span>
        </h2>

        <div className="experience-timeline">


          {/* EXPERIENCE 01 */}

          <div className="experience-item">

            <div className="experience-left">

              <span className="experience-number">
                01
              </span>

              <div className="experience-line"></div>

            </div>

            <div className="experience-content">

              <div className="experience-date">
                MAY 2026 – PRESENT
              </div>

              <h3>
                AI / Computer Vision Intern — EduHubby
              </h3>

              <p>
                Working on training a CCTV-based computer
                vision model for theft detection. Involved in
                model training and development for identifying
                suspicious and theft-related activities from
                surveillance footage.
              </p>

              <div className="experience-tags">

                <span>AI</span>
                <span>ML</span>
                <span>COMPUTER VISION</span>
                <span>YOLO</span>
                <span>PYTHON</span>

              </div>

            </div>

          </div>


          {/* EXPERIENCE 02 */}

          <div className="experience-item">

            <div className="experience-left">

              <span className="experience-number">
                02
              </span>

              <div className="experience-line"></div>

            </div>

            <div className="experience-content">

              <div className="experience-date">
                ENGINEERING / PROJECT EXPERIENCE
              </div>

              <h3>
                AI & Embedded Systems
              </h3>

              <p>
                Hands-on experience developing engineering
                projects involving Artificial Intelligence,
                Computer Vision, Machine Learning, Embedded
                Systems, IoT and Robotics.
              </p>

              <div className="experience-tags">

                <span>AI</span>
                <span>ML</span>
                <span>COMPUTER VISION</span>
                <span>ESP32</span>
                <span>ARDUINO</span>
                <span>IoT</span>

              </div>

            </div>

          </div>


          {/* EXPERIENCE 03 */}

          <div className="experience-item last">

            <div className="experience-left">

              <span className="experience-number">
                03
              </span>

            </div>

            <div className="experience-content">

              <div className="experience-date">
                PRACTICAL PROJECT DEVELOPMENT
              </div>

              <h3>
                Computer Vision & Embedded Development
              </h3>

              <p>
                Worked on practical systems involving object
                detection, image processing, plant analysis,
                model training, microcontrollers, sensors
                and IoT technologies.
              </p>

              <div className="experience-tags">

                <span>YOLO</span>
                <span>OpenCV</span>
                <span>PYTHON</span>
                <span>ESP32</span>
                <span>RASPBERRY PI</span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CERTIFICATIONS ================= */}

      <section
        id="certifications"
        className="section certifications"
      >

        <div className="section-number">
          06 / CERTIFICATIONS
        </div>

        <h2>
          Learning never
          <br />
          <span>stops.</span>
        </h2>

        <div className="certification-grid">

          <div className="certification-card">

            <span>
              01
            </span>

            <h3>
              AI & Machine Learning
            </h3>

            <p>
              Artificial Intelligence and Machine Learning
              learning experience.
            </p>

          </div>


          <div className="certification-card">

            <span>
              02
            </span>

            <h3>
              Computer Vision
            </h3>

            <p>
              Practical experience with computer vision
              and object detection technologies.
            </p>

          </div>


          <div className="certification-card">

            <span>
              03
            </span>

            <h3>
              Embedded Systems
            </h3>

            <p>
              Microcontrollers, sensors, Arduino and
              ESP32 based systems.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="section contact"
      >

        <div className="section-number">
          07 / CONTACT
        </div>

        <div className="contact-heading">

          <div>

            <h2>
              Let&apos;s build
              <br />
              something
              <br />
              <span>intelligent.</span>
            </h2>

            <p>
              Have a project idea, collaboration opportunity,
              internship opportunity or simply want to connect?
              I&apos;d love to hear from you.
            </p>

          </div>

          <div className="contact-symbol">
            ↗
          </div>

        </div>


        <div className="contact-grid">


          {/* EMAIL */}

          <a
            href="mailto:akhilsaptasagar3@gmail.com"
            className="contact-card"
          >

            <div className="contact-card-icon">
              ✉
            </div>

            <div className="contact-card-content">

              <span>
                EMAIL
              </span>

              <strong>
                akhilsaptasagar3@gmail.com
              </strong>

            </div>

            <div className="contact-arrow">
              ↗
            </div>

          </a>


          {/* LINKEDIN */}

          <a
            href="https://www.linkedin.com/in/akil-saptasagar-771a4039a/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >

            <div className="contact-card-icon">
              in
            </div>

            <div className="contact-card-content">

              <span>
                LINKEDIN
              </span>

              <strong>
                akil-saptasagar-771a4039a
              </strong>

            </div>

            <div className="contact-arrow">
              ↗
            </div>

          </a>


          {/* GITHUB */}

          <a
            href="https://github.com/AKILSAPTASAGRE"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >

            <div className="contact-card-icon">
              &lt;/&gt;
            </div>

            <div className="contact-card-content">

              <span>
                GITHUB
              </span>

              <strong>
                AKILSAPTASAGRE
              </strong>

            </div>

            <div className="contact-arrow">
              ↗
            </div>

          </a>


          {/* INSTAGRAM */}

          <a
            href="https://www.instagram.com/akil_saptasagare/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >

            <div className="contact-card-icon">
              ◎
            </div>

            <div className="contact-card-content">

              <span>
                INSTAGRAM
              </span>

              <strong>
                @akil_saptasagare
              </strong>

            </div>

            <div className="contact-arrow">
              ↗
            </div>

          </a>


          {/* PHONE */}

          <a
            href="tel:+918867668644"
            className="contact-card"
          >

            <div className="contact-card-icon">
              ☎
            </div>

            <div className="contact-card-content">

              <span>
                PHONE
              </span>

              <strong>
                +91 88676 68644
              </strong>

            </div>

            <div className="contact-arrow">
              ↗
            </div>

          </a>


        </div>


        <div className="contact-bottom">

          <div>

            <span>
              AVAILABLE FOR
            </span>

            <strong>
              Projects • Collaboration • Opportunities
            </strong>

          </div>

          <div>

            <span>
              BASED IN
            </span>

            <strong>
              Belagavi, Karnataka, India
            </strong>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <div className="footer-logo">
          AS<span>.</span>
        </div>

        <p>
          © 2026 Akhil Saptasagare. All rights reserved.
        </p>

        <div className="footer-links">

          <a onClick={() => scrollToSection("home")}>
            HOME
          </a>

          <a onClick={() => scrollToSection("projects")}>
            PROJECTS
          </a>

          <a onClick={() => scrollToSection("contact")}>
            CONTACT
          </a>

        </div>

      </footer>

    </div>
  );
}

export default App;