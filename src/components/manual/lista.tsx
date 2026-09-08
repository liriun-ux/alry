import Image from "next/image";

interface Item {
  titulo: string;
  descripcion: string;
}

interface ResListaNumeradaProps {
  items: Item[];
  className?: string;
}

export default function ResListaNumerada({
  items,
  className = "",
}: ResListaNumeradaProps) {
  return (
    <div className={`res-lista-numerada ${className}`}>
      {items.map((item, index) => (
        <div className="res-lista-numerada--item" key={index}>

          <div className="res-lista-numerada--header">

            <h3 className="res-lista-numerada--titulo">
              {index + 1}. {item.titulo}
            </h3>
          </div>

          <p className="res-lista-numerada--descripcion">
            {item.descripcion}
          </p>

        </div>
      ))}
    </div>
  );
}
