// import ProjectTile component and project data
import ProjectTile from "../components/UI/ProjectTile";
import projects from "../utils/projectData";

export default function Portfolio() {
    return (
      <div className="container container-fluid mt-3 pt-4">
        <h3 className="page-title">Portfolio</h3>
        <div className="project-tiles">
          {/* map over projects and render each as a tile */}
          {projects.map((project) => (
            <ProjectTile key={project.projectName} {...project} />
          ))}
        </div>
      </div>
    );
}