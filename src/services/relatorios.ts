import { env } from "@/config";
import { z } from "zod";

const API_RELATORIOS_URL = `${env.CMS_API_URL}/relatorio?populate[relatorios]=*`;
const relatorioSchema = z.object({
  id: z.number(),
  nome: z.string(),
  link: z.string(),
});

const relatoriosSchema = z.object({
  relatorios: z.array(z.any()),
  horasMentoria: z.number(),
  totalMentores: z.number(),
  totalMentorados: z.number(),
});
const cmsSchema = z.object({
  data: z.any(),
  meta: z.any(),
});

export async function getRelatorios() {
  const response = await fetch(API_RELATORIOS_URL, {
    headers: {
      Authorization: `Bearer ${env.CMS_API_TOKEN}`,
    },
  });
  if (!response.ok) {
    throw new Error(
      `Falha ao carregar bolsistas via API ${API_RELATORIOS_URL}`
    );
  }
  const relatoriosJson = await response.json().catch(() => {
    throw new Error(
      `Falha ao fazer parse do JSON retornado pela API ${API_RELATORIOS_URL}`
    );
  });
  const cmsJson = cmsSchema.parse(relatoriosJson);
  console.log(JSON.stringify(cmsJson, null, 2));
  const relatorios = relatoriosSchema.parse(cmsJson.data);



  return {
    relatorios: relatorios.relatorios
      .map((relatorio) => relatorioSchema.safeParse(relatorio))
      .filter((relatorio) => relatorio.success)
      .map((relatorio) => relatorio.data),
    horasMentoria: relatorios.horasMentoria,
    totalMentores: relatorios.totalMentores,
    totalMentorados: relatorios.totalMentorados,
  };
}
