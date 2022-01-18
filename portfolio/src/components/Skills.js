import "../styles/Skills/index.scss";

export default function Skills() {
  return (
    <section className="container skills border-box">
      <h2 className="clr-primary">Skills</h2>
      <div>
        <div className="skill flex">
          <p className="clr-primary">React</p>
          <div className="skill-container skill-radius">
            <div className="skill-level react skill-radius skill-clr"></div>
          </div>
        </div>

        <div className="skill flex">
          <p className="clr-primary">Javascript</p>
          <div className="skill-container skill-radius">
            <div className="skill-level javascript skill-radius skill-clr"></div>
          </div>
        </div>

        <div className="skill flex">
          <p className="clr-primary">CSS</p>
          <div className="skill-container skill-radius">
            <div className="skill-level css skill-radius skill-clr"></div>
          </div>
        </div>

        <div className="skill flex">
          <p className="clr-primary">Vue</p>
          <div className="skill-container skill-radius">
            <div className="skill-level vue skill-radius skill-clr"></div>
          </div>
        </div>

        <div className="skill flex">
          <p className="clr-primary">Redux</p>
          <div className="skill-container skill-radius">
            <div className="skill-level redux skill-radius skill-clr"></div>
          </div>
        </div>

        <div className="skill flex">
          <p className="clr-primary">React Native</p>
          <div className="skill-container skill-radius">
            <div className="skill-level react-native skill-radius skill-clr"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
