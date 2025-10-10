import Link from "next/link";
import Image from "next/image";

import heroImage from "@/assets/home-hero.png";
import bolsistaImage from "@/assets/seja-bolsista.png";
import parceiroImage from "@/assets/seja-parceiro.png";
import { AutoIncrement } from "@/components/ui/auto-increment.component";
import { getBolsistas } from "@/services/bolsistas";
import { getRelatorios } from "@/services/relatorios";

export default async function HomePage() {
  const relatorios = await getRelatorios();
  const bolsistas = await getBolsistas();
  const bolsistasComDepoimentos = bolsistas
    .filter(
      (bolsista) => bolsista.depoimento && bolsista.depoimento.trim().length > 0
    )
    .map((bolsista) => ({
      ...bolsista,
      depoimento: bolsista.depoimento!.trim(),
    }))
    .sort((a, b) => b.depoimento.length - a.depoimento.length);

  return (
    <>
      <section className="min-h-[calc(100dvh-4rem)] bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 relative overflow-hidden">
        <Image
          src={heroImage}
          alt="Hero image"
          layout="fill"
          objectFit="cover"
          priority
          className="opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-blue-800/50 to-blue-700/60"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-neutral-50 px-8 z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Construir, Conquistar e Compartilhar
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl font-light leading-relaxed max-w-2xl mx-auto">
              Acreditamos no esporte e na educação como forma de integração
              social.
            </p>
            <div className="mt-8">
              <div className="w-24 h-1 bg-tertiary mx-auto rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
      <main>
        <section className="py-24 px-8 flex items-center bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
          <div className="max-w-7xl mx-auto flex flex-col justify-center">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">Quem somos</h2>
              <div className="w-20 h-1 bg-tertiary mx-auto rounded-full"></div>
            </div>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg sm:text-xl leading-relaxed text-neutral-700 dark:text-neutral-300">
                Fundada em 2019, a Coopera Esportes é uma Organização não
                Governamental (ONG), sem fins lucrativos, que por meio do apoio à
                prática esportiva e educação, visa contribuir para o
                desenvolvimento integral do adolescente.
              </p>
              <div className="mt-12">
                <Link
                  href="/sobre"
                  className="btn-tertiary inline-flex items-center gap-2 hover:scale-105 transform transition-all duration-300"
                >
                  Saiba mais
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="px-8 py-24 bg-gradient-to-r from-primary via-blue-700 to-primary text-neutral-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10">
            <ul className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <li className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <div className="text-4xl sm:text-5xl font-bold text-tertiary mb-2">
                  + de <AutoIncrement duration={4_000} value={relatorios.horasMentoria} maxTimes={1} />h
                </div>
                <div className="text-lg sm:text-xl">de mentoria</div>
              </li>
              <li className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <div className="text-4xl sm:text-5xl font-bold text-tertiary mb-2">
                  <AutoIncrement duration={4_000} value={relatorios.totalMentores} maxTimes={1} />
                </div>
                <div className="text-lg sm:text-xl">mentores</div>
              </li>
              <li className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <div className="text-4xl sm:text-5xl font-bold text-tertiary mb-2">
                  + de <AutoIncrement duration={4_000} value={relatorios.totalMentorados} maxTimes={1} />
                </div>
                <div className="text-lg sm:text-xl">mentorados</div>
              </li>
            </ul>
          </div>
        </section>
        <section className="px-8 py-24 bg-gradient-to-b from-neutral-100 to-neutral-50 dark:from-neutral-800 dark:to-neutral-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Nossa Atuação</h2>
              <div className="w-20 h-1 bg-tertiary mx-auto rounded-full"></div>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <li className="group bg-white dark:bg-neutral-900 shadow-lg hover:shadow-2xl p-8 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 transform">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Mentoria</h3>
                <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Fornecemos mentoria pessoal e profissional para os bolsistas,
                  que recebem apoio através de aulas particulares fornecidas por
                  nossos mentores.
                </p>
              </li>
              <li className="group bg-white dark:bg-neutral-900 shadow-lg hover:shadow-2xl p-8 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 transform">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Bolsas de incentivo
                </h3>
                <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Acreditamos que o suporte financeiro é essencial para permitir
                  que nossos bolsistas atinjam seus objetivos. Buscamos apoiar
                  jovens atletas comprometidos e que se destacam.
                </p>
              </li>
              <li className="group bg-white dark:bg-neutral-900 shadow-lg hover:shadow-2xl p-8 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 transform">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Eventos exclusivos
                </h3>
                <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Todos os bolsistas que participam da rede Coopera podem
                  participar de nossos eventos exclusivos sobre esporte,
                  carreira, educação e muito mais.
                </p>
              </li>
            </ul>
          </div>
          <div className="max-w-7xl mx-auto mt-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Conheça o depoimento de nossos bolsistas
              </h2>
              <div className="w-20 h-1 bg-tertiary mx-auto rounded-full"></div>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bolsistasComDepoimentos.map((bolsista) => (
                <li
                  key={bolsista.id}
                  className="group bg-white dark:bg-neutral-900 shadow-lg hover:shadow-2xl p-8 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 transform"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary">
                        {bolsista.nome}
                      </h3>
                      <p className="text-tertiary font-medium">{bolsista.esporte}</p>
                    </div>
                  </div>
                  <blockquote className="text-neutral-600 dark:text-neutral-300 leading-relaxed italic">
                    &ldquo;{bolsista.depoimento}&rdquo;
                  </blockquote>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="px-8 py-24 bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Junte-se a nós</h2>
              <div className="w-20 h-1 bg-tertiary mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link
                href="/processo-seletivo"
                className="group relative overflow-hidden rounded-2xl aspect-video bg-gradient-to-br from-primary to-blue-700 hover:from-blue-600 hover:to-primary transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
              >
                <Image
                  src={bolsistaImage}
                  alt="Seja um bolsista"
                  fill
                  className="object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-blue-700/80 group-hover:from-primary/70 group-hover:via-primary/50 group-hover:to-blue-700/70 transition-all duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-neutral-50 p-8 z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-white/30 transition-colors duration-300">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Seja um bolsista</h3>
                  <p className="text-lg text-center opacity-90">Participe do nosso programa de bolsas</p>
                </div>
              </Link>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfJrMbkQOXDfMtff8gLH6RmNgB0btUvrldliE14Y5xauymb_w/viewform?usp=sf_link"
                className="group relative overflow-hidden rounded-2xl aspect-video bg-gradient-to-br from-tertiary to-orange-600 hover:from-orange-500 hover:to-tertiary transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
              >
                <Image
                  src={parceiroImage}
                  alt="Seja um parceiro"
                  fill
                  className="object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-tertiary/80 via-tertiary/60 to-orange-600/80 group-hover:from-tertiary/70 group-hover:via-tertiary/50 group-hover:to-orange-600/70 transition-all duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-neutral-50 p-8 z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-white/30 transition-colors duration-300">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-1.306-.835-2.418-2-2.83M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-1.306.835-2.418 2-2.83m0 0a3 3 0 012.83 0M9 15a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Seja um parceiro</h3>
                  <p className="text-lg text-center opacity-90">Apoie nossa causa e faça a diferença</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <section className="bg-gradient-to-r from-primary via-blue-700 to-primary py-24 px-8 text-center text-neutral-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-relaxed">
            Acreditamos no esporte e na educação como pilares da integração social.
          </p>
        </div>
      </section>
    </>
  );
}
