import "../styles/PersonalInfo/index.scss";
import email from "../assets/contacts/email.svg";
import phone from "../assets/contacts/call.svg";

export default function PersonalInfo() {
  return (
    <section className="info border-box flex">
      <div className="male">
        <img
          src="https://source.unsplash.com/random/?male"
          aria-hidden="true"
          loading="lazy"
          alt=""
          width={"271.86px"}
          height={"266.14px"}
        />
      </div>

      <div className="details">
        <div className="contacts flex">
          <div className="name">
            <h1 className="clr-primary">Billy Pearson</h1>
            <span className="gray-3">Front-end Developer</span>
          </div>
          <div className="contact">
            <span className="flex clr-primary">
              <i>
                <img src={email} aria-hidden="true" loading="lazy" alt="" />
              </i>
              billy@example.com
            </span>

            <span className="flex clr-primary">
              <i>
                <img src={phone} aria-hidden="true" loading="lazy" alt="" />
              </i>
              (+603) 546 624 342
            </span>
          </div>
        </div>
        <div className="intro clr-primary">
          <p>
            Self-motivated developer, who is willing to learn and create
            outstanding UI applications.
          </p>
          <br />
          <p>
            Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque
            feugiat malesuada molestie.
          </p>
        </div>
      </div>
    </section>
  );
}
