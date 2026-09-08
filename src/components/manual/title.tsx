interface ManualTitleProps {
  title?: string;
  wordAcent:string;
  className?: string;
}

export default function ManualTitle({
  title = "Consigue más vistas en",
  wordAcent ="",
  className = "",
}: ManualTitleProps) {
  return (
    <h1 className={`manual-title ${className}`}>
      <span className="title">{title} <br/></span>
      <span className="acent">{wordAcent}</span>
    </h1>
  );
}
