import React from "react";
import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/mock02.png";
import mock03 from "../assets/images/mock03.png";
import mock04 from "../assets/images/mock04.png";
import mock05 from "../assets/images/mock05.png";
import mock07 from "../assets/images/mock07.png";
import "../assets/styles/Project.scss";
import img1 from "./images/mahakumb.webp";
import img2 from "./images/type2diabetes.webp";
import img3 from "./images/neuro.webp";
import img4 from "./images/sipcon.webp";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Research, Projects & Achievements</h1>

      <div className="projects-grid">
        <div className="project">
          <a
            href="https://www.researchgate.net/profile/Devi-Nagini-Pilli"
            target="_blank"
            rel="noreferrer"
          >
            <img src={img1} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://www.researchgate.net/profile/Devi-Nagini-Pilli"
            target="_blank"
            rel="noreferrer"
          >
            <h2>
              Exploration of Physical Fitness Attributes and Kinanthropometric
              Measurements in Mallakhamb Players
            </h2>
          </a>
          <p>
            Mallakhamb, an ancient gravity-defying sport, integrates yoga,
            gymnastics, and martial arts. This study examines the physical
            fitness attributes and kinanthropometric measurements of 41 elite
            and sub-elite Mallakhamb players (18–40 years). Results indicate
            differences in strength, endurance, and flexibility between male and
            female athletes. Understanding these attributes aids
            physiotherapists in designing evidence-based training programs for
            injury prevention and performance enhancement.
          </p>
        </div>
        <div className="project">
          <a
            href="https://yujisatojr.itch.io/spacecraft"
            target="_blank"
            rel="noreferrer"
          >
            <img src={img4} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://yujisatojr.itch.io/spacecraft"
            target="_blank"
            rel="noreferrer"
          >
            <h2>SIPCON - Best Paper Award for Mallakhamb Research</h2>
          </a>
          <p>
            Presented a research paper on physical fitness attributes and
            kinanthropometric measurements in Mallakhamb players at the 8th
            SIPCON, Chandigarh. Awarded the M G Mokashi Best Paper Award (Junior
            Category) for outstanding research contributions, emphasizing the
            significance of tailored training and injury prevention strategies
            for Mallakhamb athletes.
          </p>
        </div>
        <div className="project">
          <a href="https://www.filmate.club/" target="_blank" rel="noreferrer">
            <img src={img2} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="https://www.filmate.club/" target="_blank" rel="noreferrer">
            <h2>
              Combatting Fatigue in Type 2 Diabetes: Exercise Awareness Study
            </h2>
          </a>
          <p>
            This study explores the awareness of exercise benefits in reducing
            fatigue among individuals with Type 2 diabetes. Regular physical
            activity improves energy levels, metabolism, and overall well-being.
            Findings highlight the need for targeted education programs to
            enhance exercise adherence, promoting better fatigue management and
            improved quality of life in diabetic patients.
          </p>
        </div>

        <div className="project">
          <a
            href="https://www.datumlearn.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock07} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://www.datumlearn.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>
              Participation in EYAN-2018 International Conference on
              Physiotherapy
            </h2>
          </a>
          <p>
            Attended the two-day EYAN-2018 International Conference on recent
            advancements in physiotherapy. The event provided valuable insights
            into cutting-edge rehabilitation techniques, evidence-based
            practices, and emerging trends in physiotherapy, enhancing clinical
            knowledge and application. Participation fostered professional
            growth and contributed to a deeper understanding of innovative
            therapeutic approaches in patient care.
          </p>
        </div>
        <div className="project">
          <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer">
            <img src={img3} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer">
            <h2>Advancements in Neuro Physiotherapy</h2>
          </a>
          <p>
            Attended the National Conference on Recent Updates in Neuro
            Physiotherapy at SRM College of Physiotherapy. The event provided
            insights into innovative neurorehabilitation techniques, emerging
            treatments, and evidence-based practices, enhancing expertise in
            managing neurological disorders. Participation strengthened clinical
            knowledge for improving patient outcomes in neuro physiotherapy and
            rehabilitation.
          </p>
        </div>
        <div className="project">
          <a
            href="https://www.byuh.edu/covid-19-case-management"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock05} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://www.byuh.edu/covid-19-case-management"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Kinesiotaping for Injury Management and Rehabilitation</h2>
          </a>
          <p>
            Trained in Kinesiotaping, an advanced therapeutic technique used to
            support muscles, reduce pain, and enhance circulation without
            restricting movement. This method aids in injury recovery, joint
            stability, and athletic performance by facilitating proper
            biomechanics. Widely applied in sports physiotherapy, it helps
            manage musculoskeletal conditions and improve functional movement
            patterns.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/yujisatojr/multi-reg-analysis"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock04} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/yujisatojr/multi-reg-analysis"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Dry Needling for Pain Management and Muscle Rehabilitation</h2>
          </a>
          <p>
            Completed training in Dry Needling, a specialized technique for
            treating musculoskeletal pain and dysfunction. This approach targets
            myofascial trigger points using fine needles to relieve pain,
            improve mobility, and enhance muscle function. The technique is
            widely used in physiotherapy for managing chronic pain, sports
            injuries, and musculoskeletal conditions.
          </p>
        </div>
        <div className="project">
          <a
            href="https://holokai.byuh.edu/programs-of-study"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock03} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://holokai.byuh.edu/programs-of-study"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Wheelchair Service Training Workshop – WHO Guidelines</h2>
          </a>
          <p>
            Successfully participated in the Workshop on Wheelchair Service
            Training for Healthcare Providers, conducted by SRM College of
            Physiotherapy following WHO guidelines. The training focused on
            wheelchair assessment, prescription, and proper fitting techniques,
            enhancing skills in mobility aid management and improving
            accessibility for individuals with physical disabilities.
          </p>
        </div>
        <div className="project">
          <a
            href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock02} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Trigger Point Therapy for Myofascial Pain – Level 1</h2>
          </a>
          <p>
            Successfully completed the Level 1 Trigger Point Therapy for
            Myofascial Pain course, conducted by Synergy Physio Care and Rehab
            Center, Chennai. This training enhanced skills in identifying and
            treating myofascial trigger points, improving pain management,
            muscle function, and rehabilitation strategies for patients with
            chronic musculoskeletal conditions.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/yujisatojr/submeowrine"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock01} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/yujisatojr/submeowrine"
            target="_blank"
            rel="noreferrer"
          >
            <h2>
              Industrial Workshop on Electrotherapy Equipment – Techno Med
              Electronics
            </h2>
          </a>
          <p>
            Participated in an industrial visit and workshop conducted by Techno
            Med Electronics, gaining hands-on experience in the manufacturing,
            testing, and calibration of electrotherapy equipment. This workshop
            provided valuable insights into the technological advancements in
            physiotherapy devices, enhancing knowledge of equipment
            functionality, quality control, and clinical application in
            rehabilitation therapy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
