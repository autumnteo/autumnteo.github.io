import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faUserCircle,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";

function WorkExperiences(props) {
  return (
    <div className="form-group p-2">
      <Fade>
        <div className="label">
          <p className="text-2xl text-primary">
            <FontAwesomeIcon
              icon={faBriefcase}
              className="fill-current text-white"
            />{" "}
            {props.organisation}
          </p>
          <p className="text-xl">
            {" "}
            <FontAwesomeIcon icon={faUserCircle} /> {props.title}
          </p>
          <p className="text-secondary pb-2 ">
            {" "}
            <span className="text-xl">
              <FontAwesomeIcon icon={faClock} />{" "}
            </span>{" "}
            {props.duration}
          </p>
        </div>
        <ul className="textarea mb-10">
          <li> {props.text1} </li>
          <li> {props.text2} </li>
          <li> {props.text3} </li>
        </ul>
      </Fade>
    </div>
  );
}

class Experience extends Component {
  render() {
    return (
      <div className="w-5/6 mx-auto mb-6 text-white pl-32 sm:pt-16 sm:pl-0">
        <Fade>
          <p className="text-4xl text-primary text-center font-bold pt-4 sm:pt-0">
            Experience
          </p>
        </Fade>
        <form action="/" className="px-4">
          <fieldset disabled>
            <legend className="text-2xl text-white px-2">
              Work Experiences
            </legend>
            <WorkExperiences
              organisation="Monetary Authority of Singapore"
              title="Data Analytics & Engineering Intern"
              duration="June 2020 - Current"
              text1="• Developed topic modelling feature on news articles using NLP libraries"
              text2="• Wrote unit tests and documentation using Django Framework"
              text3="• Utilized NLP libraries to develop scripts for automatic semantic role labeling"
            />

            <WorkExperiences
              organisation="Singapore Management University"
              title="Research Assistant - Social Analytics"
              duration="Jan 2020 - May 2020"
              text1="• Research Assistant for Professor Kyong Jin Shim"
              text2="• Developed a web scrapping program to gather League of Legends game data"
              text3="• Processed and stored of data for future social network and sentiment analysis"
            />

            <WorkExperiences
              organisation="Living Analytics Research Centre"
              title="Research Intern"
              duration="April 2019 - July 2019"
              text1="• Conducted Organisation Structure Analysis on government websites"
              text2="• Created and designed scripts to retrieve and process data from a MySQL database which were converted to REST-ful APIs"
            />
            <WorkExperiences
              organisation="Singapore Management University"
              title="Teaching Assistant - Computational Thinking & Analytics Foundation"
              duration="Jan 2020 - Current"
              text1="• Provided guidance and consultations for students for various Computational Thinking & Analytics concepts"
              text2="• Hosted consultation sessions to answer students' queries"
            />
            <WorkExperiences
              organisation="Singapore Management University Library"
              title="Library Student Helper"
              duration="October 2018 - Current"
              text1="• Assisted patrons with various enquries"
              text2="• Organised a staff bonding session for over 30 students and faculty"
            />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Experience;
