"use server";
import { cloudinaryLoader } from "@/config/image-loader";
import { getBolsistas } from "@/services/bolsistas";
import Image from "next/image";


export default async function BolsistasPage() {
  const bolsistas = await getBolsistas();
  const bolsistasVisiveis = bolsistas;

  return (
    <main className="px-8 py-24">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl sm:text-6xl font-bold text-primary mb-6">Nossos Bolsistas</h1>
        <div className="w-24 h-1 bg-tertiary mx-auto rounded-full mb-8"></div>
        <p className="text-xl sm:text-2xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-4xl mx-auto">
          Conheça os jovens atletas que fazem parte da nossa família Coopera Esportes
        </p>
      </section>

      {/* Bolsistas Grid */}
      <section>
        <div className="grid grid-cols-1 items-center space-y-6 md:grid md:space-y-0 md:grid-cols-3 md:gap-6 lg:grid-cols-5 xl:grid-cols-7">
          {bolsistasVisiveis.map((bolsista) => (
            <div
              key={bolsista.nome}
              className="group relative aspect-[11/13] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white dark:bg-neutral-900"
            >
              {/* Imagem do bolsista */}
              <Image 
                loader={cloudinaryLoader} 
                src={bolsista.foto.url} 
                alt={bolsista.nome} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay com informações */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/70 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Informações do bolsista */}
              <div className="absolute bottom-0 w-full flex flex-col items-center justify-end py-6 min-h-32 transition-all duration-300">
                <div className="text-center">
                  <h2 className="font-bold text-lg text-white mb-1 group-hover:text-tertiary transition-colors duration-300">
                    {bolsista.nome}
                  </h2>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-tertiary rounded-full"></div>
                    <p className="text-sm text-white/90 font-medium">{bolsista.esporte}</p>
                  </div>
                  <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  </div>
                </div>
              </div>

              {/* Efeito de brilho no hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-tertiary/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-20 text-center">
        <div className="bg-gradient-to-br from-tertiary/5 to-orange-100/50 dark:from-tertiary/10 dark:to-orange-900/20 rounded-2xl p-8 border border-tertiary/20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-4">Quer ser um bolsista?</h2>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
            Participe do nosso processo seletivo e tenha a oportunidade de receber apoio para seus objetivos esportivos e educacionais.
          </p>
        </div>
      </section>
    </main>
  );
}
