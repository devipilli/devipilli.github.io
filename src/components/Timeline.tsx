import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Jan 2025 - Present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Physiotherapist</h3>
            <h4 className="vertical-timeline-element-subtitle">
              UCDC, Bandra(W), Mumbai
            </h4>
            <p>
              Managing and treating patients at UCDC physiotherapy clinic,
              offering specialized rehabilitation and therapy services.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="May 2024 - Jan 2025"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Physiotherapist</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Dr. Divya Cures Clinic
            </h4>
            <p>
              Providing comprehensive physiotherapy care, including
              rehabilitation, pain management, and patient education.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mar 2024 - May 2024"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Consultant Physiotherapist
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Qi Spine Clinic
            </h4>
            <p>
              Specialized in spine rehabilitation, designing treatment plans for
              chronic back and neck pain patients.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2024"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Freelance Physiotherapist
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Divya Physiotherapy & Rehabilitation Centre
            </h4>
            <p>
              Conducted personalized physiotherapy sessions for patients with
              musculoskeletal and neurological conditions.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct 2020 - Apr 2021"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Physiotherapy Intern{" "}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              SRM Medical College Hospital and Research Center, Kattankulathur
            </h4>
            <p>
              Provided physiotherapy treatments under supervision, assisting in
              patient rehabilitation and therapy sessions.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
