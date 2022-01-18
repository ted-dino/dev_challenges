import "../styles/Hobbies/index.scss";

export default function Hobbies() {
  return (
    <section className="hobbies container border-box">
      <h2 className="clr-primary">Hobbies</h2>
      <div className="hobby">
        <div>
          <img
            src="https://source.unsplash.com/random/?gaming?orientation=landscape"
            aria-hidden="true"
            loading="lazy"
            alt=""
            className="hobby-image skill-radius"
          />
        </div>
        <h3 className="hobby-name clr-secondary">Gaming</h3>
        <p className="hobby-text">Quisque feugiat malesuada molestie.</p>
      </div>

      <div className="hobby">
        <div>
          <img
            src="https://source.unsplash.com/random/?watching-movie?orientation=landscape"
            aria-hidden="true"
            loading="lazy"
            alt=""
            className="hobby-image skill-radius"
          />
        </div>
        <h3 className="hobby-name clr-secondary">Watch Movies</h3>
        <p className="hobby-text">Quisque feugiat malesuada molestie.</p>
      </div>

      <div className="hobby">
        <div>
          <img
            src="https://source.unsplash.com/random/?biking?orientation=landscape"
            aria-hidden="true"
            loading="lazy"
            alt=""
            className="hobby-image skill-radius"
          />
        </div>
        <h3 className="hobby-name clr-secondary">Biking</h3>
        <p className="hobby-text">Quisque feugiat malesuada molestie.</p>
      </div>
    </section>
  );
}
