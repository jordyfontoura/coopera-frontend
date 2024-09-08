import Image from "next/image";

const Mentores = [
  ...Array.from({ length: 10 }, () => ({
    image:
      "https://gefcapital.com/wp-content/uploads/2024/01/Thamires-Final.jpg",
    nome: "Thamires Souza",
    cargo: "Operations Senior Analyst – Latin America",
    descricao: `Thamires Souza is an Operations Senior Analyst at GEF Capital Partners. She is based in São Paulo, where she is responsible for operations in Latin America.

Ms. Souza joined GEF Capital Partners in 2023. Before joining GEF Capital, she worked as Operations and Innovation Analyst at Quasar Asset Management, which she joined in 2021. Prior to joining Quasar Asset Management, Ms. Souza was part of Funds Brazil team at Pátria Investimentos and worked at Genial Investimentos as Pricing and Risk Intern, having more than 4 years of experience in process automation.

Ms. Souza received a B.A. in Economics from Pontifícia Universidade Católica (PUC-SP).`,
  })),
];

export default function MentoresPage() {
  return (
    <main className="px-8 py-16">
      <nav>
        <ul className="grid grid-cols-1 items-center space-y-4 md:grid md:space-y-0 md:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-4">
          {Mentores.map((mentor) => (
            <li
              key={mentor.nome}
              className="relative aspect-[11/13] rounded-md overflow-hidden shadow-md group text-neutral-50"
              tabIndex={0}
            >
              <div className="absolute inset-0 transition-all duration-300 z-10 opacity-0 hidden lg:flex group-hover:flex group-hover:opacity-100 group-focus-within:opacity-100 bg-black/80 flex-col items-center px-6 py-8 space-y-4 overflow-y-auto">
                <div className="flex flex-col items-center text-center">
                  <h2 className="font-bold text-xl">{mentor.nome}</h2>
                  <p className="text-md">{mentor.cargo}</p>
                </div>
                <p className="text-md whitespace-pre-wrap">{mentor.descricao}</p>
              </div>
              <Image src={mentor.image} alt={mentor.nome} fill/>
              <div className="absolute bottom-0 w-full flex flex-col items-center justify-end bg-gradient-to-t from-neutral-900 from-60% to-transparent py-4 min-h-32 transition-all duration-300 group-focus-within:opacity-0 group-hover:opacity-0">
                <h2 className="font-bold text-lg">{mentor.nome}</h2>
                <p className="text-sm">{mentor.cargo}</p>
                <p className="text-xs">Clique para ler mais</p>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
