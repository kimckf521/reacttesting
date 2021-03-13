const data = [
  {
    name: "testing1",
    image: (
      <img
        src="/w3images/avatar3.png"
        class="w3-margin w3-circle"
        alt="Person"
        style={{ width: "50%" }}
      />
    ),
  },
  {
    name: "testing2",
  },
];

const skill = {
  type: [
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "Swift",
    "C",
    "Matlab",
    "MongoDB",
    "Firebase",
    "SQL",
    "Git",
    "Node.js",
    "Express.js",
    "React.js",
    "jQuery",
    "Bootstrap",
    "Mathematica",
    "EJS",
    "Data Science",
    "REST API",
  ],
  language: ["English,", "Cantonese,", "Mandarin"],
};

const web = {
  work: [
    <button type="button" className="btn btn-primary">
      <a
        style={{ padding: "0px 20px", color: "white", textDecoration: "none" }}
        href="mailto:paulckf521@outlook.com"
      >
        Email
      </a>
    </button>,
    <button type="button" className="btn btn-primary">
      <a
        style={{ padding: "0px 20px", color: "white", textDecoration: "none" }}
        href="https://www.linkedin.com/in/paulchiu521/"
      >
        Linkedin
      </a>
    </button>,
    <button type="button" className="btn btn-primary">
      <a
        style={{
          padding: "0px 20px",
          color: "white",
          textAlign: "center",
          textDecoration: "none",
        }}
        href="https://github.com/kimckf521"
      >
        GitHub
      </a>
    </button>,
  ],
  App: {
    simonGame: "https://kimckf521.github.io/simon-game/",
    keyboardSound: "https://kimckf521.github.io/Drum-kit/",
    newsletter: "https://blooming-forest-13189.herokuapp.com/",
    noteKeeper: "https://kimckf521.github.io/deployapp/",
    diceGame: "https://kimckf521.github.io/dice-game/",
    toDoList: "https://frozen-inlet-16443.herokuapp.com/",
  },
};

export default data;
export { skill, web };
