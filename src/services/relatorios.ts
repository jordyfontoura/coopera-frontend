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

// Dados mock para quando a API não estiver disponível
const mockRelatorios = {
  relatorios: [
    {
      id: 1,
      nome: "Relatório Anual 2023",
      link: "https://example.com/relatorio-2023.pdf"
    },
    {
      id: 2,
      nome: "Relatório de Impacto Social",
      link: "https://example.com/impacto-social.pdf"
    }
  ],
  horasMentoria: 1250,
  totalMentores: 15,
  totalMentorados: 45
};

export async function getRelatorios() {
  try {
    const response = await fetch(API_RELATORIOS_URL, {
      headers: {
        Authorization: `Bearer ${env.CMS_API_TOKEN}`,
      },
    });
    
    if (!response.ok) {
      console.warn(`API indisponível (${response.status}), usando dados mock`);
      return mockRelatorios;
    }
    
    const relatoriosJson = await response.json().catch(() => {
      console.warn("Erro ao fazer parse do JSON, usando dados mock");
      return mockRelatorios;
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
  } catch (error) {
    console.warn("Erro ao conectar com a API, usando dados mock:", error);
    return mockRelatorios;
  }
}