import "../styles/Blog/index.scss";

export default function Blog() {
  return (
    <section className="blog border-box">
      <span>Blog</span>
      <div className="flex">
        <h2 className="blog-title">How to organize your CSS</h2>
        <img
          src="https://source.unsplash.com/random/?css"
          aria-hidden="true"
          loading="lazy"
          alt=""
          className="blog-thumbnail"
        />
      </div>
      <div className="content">
        <p>
          In this article I tell the story about Proin eu justo sit amet lacus
          bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.
        </p>
        <br />
        <p>
          Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque
          feugiat malesuada molestie.
        </p>
      </div>
    </section>
  );
}
