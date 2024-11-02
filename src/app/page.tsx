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
      <section className="min-h-[calc(100dvh-4rem)] bg-blue-300 relative">
        <Image
          src={heroImage}
          alt="Hero image"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-neutral-50 px-8">
          <h1 className="text-5xl font-bold">
            Construir, Conquistar e Compartilhar
          </h1>
          <p className="mt-4 text-lg">
            Acreditamos no esporte e na educação como forma de integração
            social.
          </p>
        </div>
      </section>
      <main>
        <section className="py-24 px-8 flex items-center">
          <div className="max-w-7xl mx-auto flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-primary">Quem somos</h2>
            <p className="mt-4 text-lg">
              Fundada em 2019, a Coopera Esportes é uma Organização não
              Governamental (ONG), sem fins lucrativos, que por meio do apoio à
              prática esportiva e educação, visa contribuir para o
              desenvolvimento integral do adolescente.
            </p>
            <div className="mt-8">
              <Link
                href="/sobre"
                className="btn-tertiary"
              >
                Saiba mais
              </Link>
            </div>
          </div>
        </section>
        <section className="px-8 py-24 bg-primary text-neutral-50 text-4xl">
          <ul className="max-w-7xl mx-auto flex flex-wrap text-left sm:text-center gap-8 md:text-left sm:space-x-8 font-bold justify-start items-center md:justify-around">
            <li className="m-0 w-full md:w-auto">
              + de <AutoIncrement duration={4_000} value={relatorios.horasMentoria} maxTimes={1} />h
              de mentoria
            </li>
            <li className="m-0 w-full md:w-auto">
              <AutoIncrement duration={4_000} value={relatorios.totalMentores} maxTimes={1} />{" "}
              mentores
            </li>
            <li className="m-0 w-full md:w-auto">
              + de <AutoIncrement duration={4_000} value={relatorios.totalMentorados} maxTimes={1} />{" "}
              mentorados
            </li>
          </ul>
        </section>
        <section className="px-8 py-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground">Nossa Atuação</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              <li className="shadow-sm p-8 rounded-md border dark:bg-neutral-900 dark:border-neutral-800">
                <h3 className="text-2xl font-bold text-primary">Mentoria</h3>
                <p className="mt-4 text-lg">
                  Fornecemos mentoria pessoal e profissional para os bolsistas,
                  que recebem apoio através de aulas particulares fornecidas por
                  nossos mentores.
                </p>
              </li>
              <li className="shadow-sm p-8 rounded-md border dark:bg-neutral-900 dark:border-neutral-800">
                <h3 className="text-2xl font-bold text-primary">
                  Bolsas de incentivo
                </h3>
                <p className="mt-4 text-lg">
                  Acreditamos que o suporte financeiro é essencial para permitir
                  que nossos bolsistas atinjam seus objetivos. Buscamos apoiar
                  jovens atletas comprometidos e que se destacam.
                </p>
              </li>
              <li className="shadow-sm p-8 rounded-md border dark:bg-neutral-900 dark:border-neutral-800">
                <h3 className="text-2xl font-bold text-primary">
                  Eventos exclusivos
                </h3>
                <p className="mt-4 text-lg">
                  Todos os bolsistas que participam da rede Coopera podem
                  participar de nossos eventos exclusivos sobre esporte,
                  carreira, educação e muito mais.
                </p>
              </li>
            </ul>
          </div>
          <div className="max-w-7xl mx-auto mt-12">
            <h2 className="text-3xl font-bold text-foreground">
              Conheça o depoimento de nossos bolsistas
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {bolsistasComDepoimentos.map((bolsista) => (
                <li
                  key={bolsista.id}
                  className="shadow-sm p-8 rounded-md border dark:bg-neutral-900 dark:border-neutral-800"
                >
                  <h3 className="text-2xl font-bold text-primary">
                    {bolsista.nome}
                  </h3>
                  <p className="text-tertiary">{bolsista.esporte}</p>
                  <p className="mt-4">{bolsista.depoimento}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="max-w-7xl mx-auto text-4xl grid grid-cols-1 md:grid-cols-2">
          <Link
            href="/processo-seletivo"
            className="bg-primary text-center text-neutral-50 font-bold text-3xl aspect-video relative"
          >
            <Image
              src={bolsistaImage}
              alt="Hero image"
              layout="fill"
              objectFit="cover"
            />
            <span className="absolute inset-0 flex items-center justify-center transition-all hover:backdrop-brightness-50">
              Seja um bolsista
            </span>
          </Link>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSfJrMbkQOXDfMtff8gLH6RmNgB0btUvrldliE14Y5xauymb_w/viewform?usp=sf_link"
            className="bg-primary text-center text-neutral-50 font-bold text-3xl aspect-video relative"
          >
            <Image
              src={parceiroImage}
              alt="Hero image"
              layout="fill"
              objectFit="cover"
            />
            <span className="absolute inset-0 flex items-center justify-center transition-all       hover:backdrop-brightness-50">
              Seja um parceiro
            </span>
          </Link>
        </section>
      </main>
      <p className="bg-primary py-24 px-8 text-center text-neutral-50  font-bold text-3xl">
        Acreditamos no esporte e na educação como pilares da integração social.
      </p>
    </>
  );
}
