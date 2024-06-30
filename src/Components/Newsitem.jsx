import image from "./breaking_news.jpg"
const Newsitem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-2" style={{ width: "18rem" }}>
      <img src={src ? src : image} style={{ height: "200px", objectFit: "cover" }} className="card-img-top" alt="News" />
      <div className="card-body">
        <h5 className="card-title">{title ? title.slice(0, 50)+"..." : "oops...Title not available"}</h5>
        <p className="card-text">{description ? description.slice(0, 60) : "oops...sorry,News description is not available"}</p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Newsitem;
