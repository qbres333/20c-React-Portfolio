import camera from "../utils/images/camera.jpg"

export default function AboutMe() {
  return (
    <div className="container container-fluid mt-5 mb-5">
      <h3 className="page-title mb-3">
        <b>About Me</b>
      </h3>
      <img
        src={camera}
        alt="camera"
        width={160}
        className="camera mb-4"
      ></img>
      <div className="about-me">
        <p className="bio-text">
          I'm an IT professional with a passion for both the human mind and the
          digital world. With degrees in psychology and accounting, I have
          cultivated a unique blend of skills that allow me to navigate the
          complexities of human behavior and financial systems with equal ease.
          My journey into the world of languages began with a fascination for
          communication, leading me to study Russian, Spanish, Polish, and
          German. Each language has enriched my understanding of the world and
          enhancing my ability to connect with people from various backgrounds.
        </p>
        <p className="bio-text">
          In addition to my linguistic endeavors, I have also delved into the
          realm of technology by studying full-stack programming, including
          HTML, JavaScript, Express, Node, MongoDB, and React. These programming
          languages have empowered me to create and design engaging,
          user-friendly websites, merging my analytical skills with my creative
          vision. My background in psychology helps me design digital
          experiences that are not only visually appealing but also intuitive
          and user-centric. Balancing my expertise in psychology, accounting,
          and technology, I am committed to leveraging my diverse skill set to
          make a meaningful impact in both my professional and personal life.
        </p>
      </div>
    </div>
  );
}
