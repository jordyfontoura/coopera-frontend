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

  const processoSeletivo = processoSeletivoSchema.parse(cmsJson.data);

  return (
    <main className="px-8 py-16 text-lg max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-primary">
        Processo Seletivo Coopera Esportes
      </h2>
      <p className="mt-4">
        Você pode participar da Coopera Esportes como bolsista. O processo de
        seleção é feito anualmente, durante um determinado período, e todos os
        candidatos que se encaixem em nossos critérios tem sua aplicação
        avaliada gratuitamente. Acompanhe as novidades pelo nosso instagram{" "}
        <Link
          href="https://www.instagram.com/cooperaesportes"
          className="underline transition-colors hover:text-tertiary"
        >
          @cooperaesportes
        </Link>
        .
      </p>
      <h2 className="text-4xl font-bold text-primary mt-8">Nossa Missão</h2>
      <p className="mt-4">
        Fomentar a prática do esporte como instrumento de amadurecimento pessoal
        através do suporte financeiro e do aconselhamento do jovem. Acreditamos
        no esporte como forma de transformar vidas, além do incentivo às
        práticas esportivas, buscamos criar condições para a melhora no
        desempenho escolar e potencializar futuras oportunidades de inserção
        profissional.
      </p>
      <h2 className="text-4xl font-bold text-primary mt-8">Como funciona</h2>
      <h3 className="text-xl font-bold mt-6 mb-2 text-tertiary">
        1º FASE – CANDIDATURA
      </h3>
      <ul className="list-disc ml-6">
        <li>Vídeo de 2 minutos e 30 segundos de apresentação sobre:</li>
        <li>Histórico familiar</li>
        <li>Histórico no esporte e, principalmente, histórico de vitórias</li>
        <li>Rotina e dia-a-dia</li>
        <li>Interação com a sua comunidade</li>
        <li>
          Por que a Coopera Esportes deve escolher você o vencedor da bolsa?
        </li>
      </ul>
      <p className="mt-4">
        O atleta deverá preencher seus dados e fazer o upload do vídeo no
        formulário de seleção que ficará presente neste site e aberto somente
        durante o período do processo seletivo. Caso tenha dúvidas, entre em
        contato conosco.
      </p>
      <h3 className="text-xl font-bold mt-6 mb-2 text-tertiary">
        2º FASE – ENTREVISTA
      </h3>
      <ul className="list-disc ml-6">
        <li>
          Nessa conversa você deverá saber indicar quais seriam os usos dos
          recursos financeiros com a bolsa e como te ajudará a atingir seus
          objetivos
        </li>
        <li>
          Requisitos para a validação da inscrição: Ser um atleta de alta
          performance e que se considera de grande potencial e é necessário que
          você esteja matriculado em instituição de ensino pública ou privada
        </li>
      </ul>

      {processoSeletivo.aberto ? (
        <>
          <h2 className="text-4xl font-bold text-primary mt-8">
            Processo Seletivo Coopera Esportes
          </h2>
          {processoSeletivo.titulo ? (
            <p className="mt-4">{processoSeletivo.titulo}</p>
          ) : null}
          {processoSeletivo.link ? (
            <Link
              href={processoSeletivo.link}
              className="px-8 py-4 mt-8 block rounded-md max-w-96 mx-auto text-center text-xl
          transition-colors hover:bg-secondary
          font-bold text-neutral-50 bg-primary"
              target="_blank"
            >
              Clique aqui para participar
            </Link>
          ) : null}
        </>
      ) : null}
    </main>
  );
}
