import "./style.scss";

export default ({
  title,
  description,
  contribution,
  link,
  id,
  className = "",
}: {
  title: string;
  description: string;
  contribution?: string;
  link: string;
  id: string;
  className?: string;
}) => (
  <div id={id} className={`card ${className}`}>
    <h3 className="heading z-index-3 text-white">{title}</h3>
    <div className="text-white z-index-3">
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