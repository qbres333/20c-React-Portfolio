export default function Footer() {
    return (
      <div className="container-fluid footer p-3">
        <a
          href="https://github.com/qbres333"
          target="_blank"
          className="footer-link"
        >
          <img
            src="./src/utils/images/github-120.png"
            width={55}
            className="github"
          ></img>
        </a>
        <a
          href="https://www.linkedin.com/in/finola-mcburnie-a983a6aa/"
          target="_blank"
          className="footer-link"
        >
          <img
            src="./src/utils/images/linkedin-144.png"
            width={60}
            className="linkedin"
          ></img>
        </a>

        <a
          href="https://www.instagram.com/finfin_mcb"
          target="_blank"
          className="footer-link"
        >
          <img
            src="./src/utils/images/instagram-144.png"
            width={60}
            className="instagram"
          ></img>
        </a>
      </div>
    );
}