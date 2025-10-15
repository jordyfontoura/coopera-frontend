import { env } from "@/config";
import Link from "next/link";
import { z } from "zod";

const API_PROCESSO_SELETIVO_URL = `${env.CMS_API_URL}/processo-seletivo`;

const processoSeletivoSchema = z.object({
  aberto: z.boolean(),
  titulo: z.string().nullable().optional(),
  link: z.string().nullable().optional(),
});

const cmsSchema = z.object({
  data: z.any(),
  meta: z.any(),
});

export default async function ProcessoSeletivoPage() {
  const response = await fetch(API_PROCESSO_SELETIVO_URL, {
    headers: {
      Authorization: `Bearer ${env.CMS_API_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error(
      `Falha ao carregar processo seletivo via API ${API_PROCESSO_SELETIVO_URL}`
    );
  }
  
  const processoSeletivoJson = await response.json().catch(() => {
    throw new Error(
      `Falha ao fazer parse do JSON retornado pela API ${API_PROCESSO_SELETIVO_URL}`
    );
  });

  const cmsJson = cmsSchema.parse(processoSeletivoJson);
  console.log(cmsJson);
  const processoSeletivo = processoSeletivoSchema.parse(cmsJson.data);

  return (
    <main className="px-8 py-24 text-lg max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl sm:text-6xl font-bold text-primary mb-6">Processo Seletivo</h1>
        <div className="w-24 h-1 bg-tertiary mx-auto rounded-full mb-8"></div>
        <p className="text-xl sm:text-2xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-4xl mx-auto">
          Faça parte da nossa família e transforme sua vida através do esporte e educação
        </p>
      </section>

      {/* Introdução */}
      <section className="mb-16">
        <div className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">Como Participar</h2>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300 mb-6">
            Você pode participar da Coopera Esportes como bolsista. O processo de
            seleção é feito anualmente, durante um determinado período, e todos os
            candidatos que se encaixem em nossos critérios tem sua aplicação
            avaliada gratuitamente. Acompanhe as novidades pelo nosso instagram{" "}
            <Link
              href="https://www.instagram.com/cooperaesportes"
              className="text-tertiary hover:text-tertiary/80 font-semibold transition-colors duration-300"
            >
              @cooperaesportes
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Nossa Missão */}
      <section className="mb-16">
        <div className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">Nossa Missão</h2>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            Fomentar a prática do esporte como instrumento de amadurecimento pessoal
            através do suporte financeiro e do aconselhamento do jovem. Acreditamos
            no esporte como forma de transformar vidas, além do incentivo às
            práticas esportivas, buscamos criar condições para a melhora no
            desempenho escolar e potencializar futuras oportunidades de inserção
            profissional.
          </p>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="mb-16">
        <div className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8">Como Funciona</h2>
          
          {/* Introdução */}
          <div className="mb-12">
            <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300 text-justify">
              O atleta deverá preencher seus dados e fazer o upload do vídeo no
              formulário de seleção que ficará presente neste site e aberto somente
              durante o período do processo seletivo. Caso tenha dúvidas, entre em
              contato conosco, por meio do nosso <Link href="https://www.instagram.com/cooperaesportes" className="text-tertiary hover:text-tertiary/80 font-semibold transition-colors duration-300">Instagram</Link> ou pelo <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfJrMbkQOXDfMtff8gLH6RmNgB0btUvrldliE14Y5xauymb_w/viewform?usp=sf_link" className="text-tertiary hover:text-tertiary/80 font-semibold transition-colors duration-300">Formulário de Seleção</Link>
            </p>
          </div>

          {/* 1ª Fase */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1º</div>
             FASE – CANDIDATURA
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300 mb-6">
              Vídeo de 2 minutos e 30 segundos de apresentação sobre:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-neutral-700 dark:text-neutral-300">Histórico familiar</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-neutral-700 dark:text-neutral-300">Histórico no esporte e, principalmente, histórico de vitórias</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-neutral-700 dark:text-neutral-300">Rotina e dia-a-dia</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-neutral-700 dark:text-neutral-300">Interação com a sua comunidade</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-neutral-700 dark:text-neutral-300">
                  Por que a Coopera Esportes deve escolher você o vencedor da bolsa?
                </span>
              </li>
            </ul>
          </div>

          {/* 2ª Fase */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2º</div>
               FASE – ENTREVISTA
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-neutral-700 dark:text-neutral-300">
                  Nessa conversa você deverá saber indicar quais seriam os usos dos
                  recursos financeiros com a bolsa e como te ajudará a atingir seus
                  objetivos
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-neutral-700 dark:text-neutral-300">
                  Requisitos para a validação da inscrição: Ser um atleta de alta
                  performance e que se considera de grande potencial e é necessário que
                  você esteja matriculado em instituição de ensino pública ou privada
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Processo Aberto */}
      {processoSeletivo.aberto ? (
        <section className="mb-16">
          <div className="bg-gradient-to-br from-tertiary/10 to-orange-100/50 dark:from-tertiary/10 dark:to-orange-900/20 rounded-2xl p-8 border border-tertiary/20 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              Processo Seletivo Aberto!
            </h2>
            {processoSeletivo.titulo ? (
              <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-8">{processoSeletivo.titulo}</p>
            ) : null}
            {processoSeletivo.link ? (
              <Link
                href={processoSeletivo.link}
                className="inline-flex items-center gap-3 bg-tertiary hover:bg-tertiary/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-xl"
                target="_blank"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                Clique aqui para participar
              </Link>
            ) : null}
          </div>
        </section>
      ) : (
        <section className="mb-16">
          <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 rounded-2xl p-8 border border-neutral-300 dark:border-neutral-600 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-600 dark:text-neutral-400 mb-6">
              Processo Seletivo Fechado
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
              O processo seletivo não está aberto no momento. Acompanhe nossas redes sociais para ficar por dentro das próximas oportunidades.
            </p>
            <div className="w-20 h-1 bg-neutral-400 mx-auto rounded-full"></div>
          </div>
        </section>
      )}
    </main>
  );
}
