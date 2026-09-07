
interface ResdescriptionProps {
  text?: string;
  className?: string;
}

export default function Resdescription({
  text = "Descubre nuestro contenido, proyectos y novedades          en hello.          Descubre nuestro contenido, proyectos y novedades          en Facebook.          Descubre nuestro contenido, proyectos y novedades",
  className = "",
}: ResdescriptionProps) {
  return (
    <button className={`res-base--description ${className}`}>
      {text}
    </button>
  );
}
