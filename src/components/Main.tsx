import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
import profile from "./devi_nagini_pilli_profile_photo.jpeg";
function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profile} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/yujisatojr"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/yujisato/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
          <h1>Dr. Devi Nagini Pilli</h1>
          <p>Master of Physiotherapy, M.P.T - Sports</p>

          <div className="mobile_social_icons">
            <a
              href="https://www.google.com/search?q=Urban+Community+Development+Centre+-+Physiotheraphy&stick=H4sIAAAAAAAA_-NgU1I1qDBOSjVPtjRLTLI0TDRIMjW1MqgwMjexMDNLs7RINDEwSzKwXMRqHFqUlJin4Jyfm1ual1lSqeCSWpaak1-Qm5pXouAMJIpSFXQVAjIqizPzSzJSixILMioB4ik9Hl8AAAA&hl=en&mat=CcR929xTAOmbElMBmzl_pZiTjxU_B3Rm7BZgKekF7b2cVDE5G37UzvYZ53FEx8vY_QIS49Mcaq_qoDyZDRGY2lXNkisHPEDBRCzqVOSsEFCfFPJmA7-_9sHvSdkAVA&authuser=4"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/devi-nagini-pilli-7b75a3195/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
