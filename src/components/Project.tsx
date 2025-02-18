import React from "react";
import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/mock02.png";
import mock03 from "../assets/images/mock03.png";
import mock04 from "../assets/images/mock04.png";
import mock05 from "../assets/images/mock05.png";
import mock06 from "../assets/images/mock06.png";
import mock07 from "../assets/images/mock07.png";
import mock08 from "../assets/images/mock08.png";
import mock09 from "../assets/images/mock09.png";
import mock10 from "../assets/images/mock10.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Research, Projects & Achievements</h1>

      <div className="projects-grid">
        <div className="project">
          <a
            href="https://yujisatojr.itch.io/spacecraft"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock08} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://yujisatojr.itch.io/spacecraft"
            target="_blank"
            rel="noreferrer"
          >
            <h2>SIPCON</h2>
          </a>
          <p>
            Presented a paper on topic - exploration of physical fitness
            attributes and kinanthropometric measurements in Mallakhamb players
            and have been awarded as M G Mokashi Best Paper Award Junior
            Category in 8th SIPCON, Chandigarh.
          </p>
        </div>
        <div className="project">
          <a href="https://www.filmate.club/" target="_blank" rel="noreferrer">
            <img src={mock10} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="https://www.filmate.club/" target="_blank" rel="noreferrer">
            <h2>COMBAT FAITIGUE AMONG TYPE2 DIABETIC STUDY</h2>
          </a>
          <p>
            A STUDY ON - AWARENESS OF EXERCISE BENEFITS TO COMBAT FATIGUE AMONG
            TYPE 2 DIABETIC POPULATION
          </p>
        </div>
        <div className="project">
          <a
            href="https://yujisatojr.itch.io/highspeedchase"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock09} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://yujisatojr.itch.io/highspeedchase"
            target="_blank"
            rel="noreferrer"
          >
            <h2>
              Exploration of physical fitness attributes and kinanthropometric
              measurements in Mallakhamb players
            </h2>
          </a>
          <p>
            Prevalence of injuries in state level adult pole Mallakhamb players.
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
              Participated in 2 days International conference on “EYAN-2018”
              Recent updates in physiotherapy.
            </h2>
          </a>
          <p>
            This is an online educational platform that provides high-quality,
            data science-focused learning resources in the Japanese language. I
            created the entire platform from scratch using Ruby on Rails.
          </p>
        </div>
        <div className="project">
          <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer">
            <img src={mock06} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer">
            <h2>Neuro physiotherapy</h2>
          </a>
          <p>
            Participated in a national conference on “Recent updates in Neuro
            physiotherapy” conducted by SRM college of physiotherapy.
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
            <h2>Kinesiotaping</h2>
          </a>
          <p>
            Built official charts for COVID/vaccination tracking for an
            educational institution using JavaScript and the Google Sheets API
            v4. The dashboard served the university's leadership in their
            decision-making processes.
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
            <h2>Dry Needling</h2>
          </a>
          <p>
            Analyzed the real estate market in Japan and predicted property
            prices by implementing statistical methods such as OLS and
            multi-regression analysis. This project leveraged Python and various
            libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.
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
            <h2>
              Participated in “workshop on wheelchair service training for
              health care providers –WHO guidelines “conducted by SRM College of
              physiotherapy.
            </h2>
          </a>
          <p>
            Designed and developed a custom component for a CMS-based platform
            (e.g., 'Brightspot') using Java, Handlebars, and LESS. University
            students can find their majors of interest through this module.
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
            <h2>
              Participated and successfully completed the “Trigger point therapy
              for myofascial pain”- level 1 course conducted by synergy physio
              care and rehab center Chennai.
            </h2>
          </a>
          <p>
            Created an interactive CSV table generator with Java, Handlebars,
            and LESS. This project helps transfer students to quickly identify
            eligible credits.
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
              Participated in an industrial visit\workshop conducted by techno
              med electronics and witnessed the process of manufacturing,
              testing and calibrations of electrotherapy equipment.
            </h2>
          </a>
          <p>
            Developed and released an Android mobile application using Java and
            Android Studio that runs a 2D shooting game.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
