"use server";
import { cloudinaryLoader } from "@/config/image-loader";
import { getMentores } from "@/services/mentores";
import Image from "next/image";


export default async function MentoresPage() {
  const mentores = await getMentores();
  const mentoresVisiveis = mentores;

  return (
    <main className="px-8 py-24">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl sm:text-6xl font-bold text-primary mb-6">Nossos Mentores</h1>
        <div className="w-24 h-1 bg-tertiary mx-auto rounded-full mb-8"></div>
        <p className="text-xl sm:text-2xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-4xl mx-auto">
          Conheça os profissionais que dedicam seu tempo e conhecimento para apoiar nossos bolsistas
        </p>
      </section>

      {/* Mentores Grid */}
      <section>
        <div className="grid grid-cols-1 items-center space-y-6 md:grid md:space-y-0 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {mentoresVisiveis.map((mentor) => (
            <div
              key={mentor.nome}
              className="group relative aspect-[11/13] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white dark:bg-neutral-900"
              tabIndex={0}
            >
              {/* Overlay com informações detalhadas */}
              <div className="absolute inset-0 transition-all duration-500 z-10 opacity-0 hidden lg:flex group-hover:flex group-hover:opacity-100 group-focus-within:opacity-100 bg-gradient-to-br from-neutral-900/85 via-neutral-800/85 to-neutral-900/85 backdrop-blur-sm flex-col items-center justify-center px-6 py-8 space-y-4 overflow-y-auto">
                <div className="flex flex-col items-center text-center">
                  <h2 className="font-bold text-xl text-white">{mentor.nome}</h2>
                  <p className="text-md text-white/90 font-medium">{mentor.cargo}</p>
                </div>
                <div className="w-full h-px bg-white/30 my-4"></div>
                <p className="text-sm text-white/90 whitespace-pre-wrap leading-relaxed">
                  {mentor.sobre}
                </p>
              </div>
              
              {/* Imagem do mentor */}
              <Image 
                loader={cloudinaryLoader} 
                src={mentor.foto.url} 
                alt={mentor.nome} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay inferior com informações básicas */}
              <div className="absolute bottom-0 w-full flex flex-col items-center justify-center bg-gradient-to-t from-neutral-950/95 via-neutral-950/70 to-transparent py-6 min-h-32 transition-all duration-300 group-focus-within:opacity-0 group-hover:opacity-0">
                <div className="text-center">
                  <h2 className="font-bold text-lg text-white mb-1">{mentor.nome}</h2>
                  <p className="text-sm text-white/90 mb-2">{mentor.cargo}</p>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-tertiary rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-20 text-center">
        <div className="bg-gradient-to-br from-primary/5 to-blue-100/50 dark:from-primary/10 dark:to-blue-900/20 rounded-2xl p-8 border border-primary/20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-4">Quer ser um mentor?</h2>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
            Junte-se à nossa equipe de mentores e ajude a transformar vidas através do esporte e educação.
          </p>
        </div>
      </section>
    </main>
  );
}
