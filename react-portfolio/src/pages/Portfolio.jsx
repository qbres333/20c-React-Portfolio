// import React hooks
import { useEffect, useState } from "react";

// import ProjectTile component and project data
import ProjectTile from "../components/UI/ProjectTile";
import Projects from "../utils/projectData";


export default function Portfolio() {
  // set constants to store retrieved project data 
    const [projects, setProjects] = useState([]);

    // set the project data
    const fetchData = async () => {
      setProjects(Projects);
    };
    // call the function to fetch the data
    useEffect(() => {
      fetchData();
    }, []);
    

    return (
      <div className="container container-fluid mt-5 mb-5">
        <h3 className="page-title"><b>Portfolio</b></h3>
        <div className="project-tiles">
          {/* map over projects and render each as a tile */}
          {projects.map((project) => (
            <ProjectTile key={project.projectName} {...project} />
          ))}
        </div>
      </div>
    );
}