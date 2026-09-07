interface ButtonVerMasProps {
  title?: string;
  className?: string;
}

export default function ButtonVerMas({
  title = "Aprender más",
  className = "",
}: ButtonVerMasProps) {
  return (
    <button className={`res-base--button ${className}`}>
      {title}
    </button>
  );
}
