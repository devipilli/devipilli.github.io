import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "SportsPhysiotherapy",
  "TypeInjuryPreventionScript",
  "Kinesiotaping",
  "DryNeedling",
  "AthleteRehab",
  "PhysicalTherapy",
];

const labelsSecond = [
  "NeuromuscularRehab",
  "PainManagement",
  "TriggerPointTherapy",
  "Electrotherapy",
  "WheelchairTraining",
  "Rehabilitation",
];

const labelsThird = [
  "PhysiotherapyResearch",
  "GrKinanthropometryoq",
  "Mallakhamb",
  "ExerciseScience",
  "AcademicContributions",
  "RehabilitationScience",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            {/* <FontAwesomeIcon icon={faReact} size="3x"/> */}
            <h3>Sports Physiotherapy & Injury Prevention</h3>
            <p>
              With a Master's in Sports Physiotherapy, expertise includes injury
              prevention, rehabilitation, and physical conditioning for
              athletes. Skilled in kinesiotaping, dry needling, and
              sports-specific assessments.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Expertise stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            {/* <FontAwesomeIcon icon={faDocker} size="3x"/> */}
            <h3>Neuromuscular Rehabilitation & Pain Management</h3>
            <p>
              Experienced in managing neuromuscular conditions with trigger
              point therapy, electrotherapy, and WHO-compliant wheelchair
              service training. Passionate about improving mobility and reducing
              chronic pain.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Expertise stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            {/* <FontAwesomeIcon icon={faPython} size="3x"/> */}
            <h3>Research & Academic Contributions in Physiotherapy</h3>
            <p>
              Award-winning research experience in physical fitness attributes
              and injury prevalence studies. Published and presented research in
              national and international conferences, focusing on
              kinanthropometry and exercise benefits.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Expertise stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
