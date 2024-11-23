// Import images
import gitfav from "../../utils/images/gitHubFavicon.png";

// set params as project properties
export default function ProjectTile(props) {
  // mod 20 act 6
  const styles = {
    tileImage: {
      backgroundImage: `url(${props.tileBackground})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      width: "260px",
      height: "180px",
    },
  };

  return (
    <div
      className="container-fluid mt-5 mb-4 p-4 project-tile"
      style={styles.tileImage}
    >
      <div className="tile-info">
        <div>
          <a href={props.projectURL} target="_blank" className="projectUrl">
            {props.projectName}
          </a>
          {"   "}
          <a href={props.projectGit} target="_blank" className="projectGit">
            {"   "}
            <img
              src={gitfav}
              width={25}
              className="gitIcon"
            ></img>
          </a>
        </div>
        <br />
        <div className="projectType">
          <i>{props.projectType}</i>
        </div>
      </div>
    </div>
  );
}
