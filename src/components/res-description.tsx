




interface ResdescriptionProps {
  text?: string;
  className?: string;
  accentuate?: string;
  occurrence?: number;

}

export default function Resdescription({
  text = "Descubre nuestro contenido, proyectos y novedades          en hello.          Descubre nuestro contenido, proyectos y novedades          en Facebook.          Descubre nuestro contenido, proyectos y novedades",
  className = "",
  accentuate,
  occurrence = 1,

}: ResdescriptionProps) {

  if (!accentuate) {
    return ( <p className={`res-base--description ${className}`}> {text} </p> );
  }

  const parts = text.split(accentuate);
  return (
    <p className={`res-base--description ${className}`}>
      {parts.map((part, index) => {
        const isMatch = index < parts.length - 1;
        const shouldAccent = isMatch && index + 1 === occurrence;

        return (
          <span key={index}>
            {part}
            {isMatch &&
              (shouldAccent ? (
                <span className="acentuar-description">{accentuate}</span>
              ) : (
                accentuate
              ))}
          </span>
        );
      })}
    </p>
  );
}
