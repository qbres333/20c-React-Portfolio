// import Projects component
// import React from "react";
import projects from "../../utils/projectData";

export default function ProjectTile({ projectName, projectType, projectURL, projectGit }) {
  return (
    <div className="container container-fluid mt-3 project-tile">
      <div>
        <a href={projectURL} target="_blank" className="projectUrl">
          {projectName}
        </a>
        <a
          href={projectGit}
          target="_blank"
          className="projectGit"
        ></a>
      </div>
      <div>{projectType}</div>
    </div>
  );
}

