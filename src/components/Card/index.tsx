// import "./style.scss";

export default ({
  title,
  description,
  contribution,
  link,
  id,
}: {
  title: string;
  description: string;
  contribution?: string;
  link: string;
  id: string;
}) => (
  <div id={id} className="card col-md-6">
    <h3 className="heading">{title}</h3>
    <div className="card-body">
      <p className="mb-4">{description}</p>
      {contribution && (
        <div className="mb-4">
          <p className="mb-0">{contribution}</p>
        </div>
      )}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-secondary btn-sm mt-auto"
      >
        View On Github
      </a>
    </div>
  </div>
);