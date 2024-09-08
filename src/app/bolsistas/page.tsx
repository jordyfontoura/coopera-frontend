import Image from "next/image";

const Bolsistas = [
  ...Array.from({ length: 25 }, () => ({
    image:
      "https://gefcapital.com/wp-content/uploads/2024/01/Thamires-Final.jpg",
    nome: "Thamires Souza",
    atuacao: "Futebol",
  })),
];

export default function BolsistasPage() {
  return (
    <main className="px-8 py-16 text-neutral-50">
      <nav>
        <ul className="grid grid-cols-1 items-center space-y-4 md:grid md:space-y-0 md:grid-cols-3 md:gap-4 lg:grid-cols-5 xl:grid-cols-7">
          {Bolsistas.map((bolsista) => (
            <li
              key={bolsista.nome}
              className="relative aspect-[11/13] rounded-md overflow-hidden shadow-md group"
            >
              <Image src={bolsista.image} alt={bolsista.nome} fill/>
              <div className="absolute bottom-0 w-full flex flex-col items-center justify-end bg-gradient-to-t from-neutral-900 from-60% to-transparent py-4 min-h-32 transition-all duration-300">
                <h2 className="font-bold text-lg">{bolsista.nome}</h2>
                <p className="text-sm">{bolsista.atuacao}</p>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
