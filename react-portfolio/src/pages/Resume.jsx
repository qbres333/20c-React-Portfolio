export default function Resume() {
  return (
    <div className="container container-fluid mt-5 mb-5">
      <h3 className="page-title mb-3">
        <b>Resume</b>
      </h3>
      <div className="mb-3 resume-download">
        Download my{" "}
        <a
          href="https://docs.google.com/document/d/1eSmIxfoAv8Nm1y0i3AVg-J2qmW9dFC5b/edit?usp=sharing&ouid=112703808131393472541&rtpof=true&sd=true"
          download="resume"
          target="_blank"
          className="resume-link"
        >
          resume
        </a>
      </div>
      <div>
        <h5>Front-end Proficiencies</h5>
        <ul className="resume-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Bootstrap</li>
          <li>React</li>
          <li>Handlebars</li>
          <li>responsive design</li>
          <li>Progressive Web Apps</li>
        </ul>
      </div>
      <div>
        <h5>Back-end Proficiencies</h5>
        <ul className="resume-list">
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
        </ul>
      </div>
    </div>
  );
}
