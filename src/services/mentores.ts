import { env } from "@/config";
import { z } from "zod";

const API_MENTORES_URL = `${env.CMS_API_URL}/mentores?pagination[limit]=1000&populate[foto][fields][0]=url`;

const cmsPictureSchema = z.object({
  url: z.string(),
});

const mentorSchema = z.object({
  id: z.number(),
  nome: z.string(),
  cargo: z.string(),
  sobre: z.string(),
  foto: cmsPictureSchema,
});

const cmsSchema = z.object({
  data: z.array(z.any()),
  meta: z.any(),
});

// Dados mock para quando a API não estiver disponível
const mockMentores = [
  {
    id: 1,
    nome: "João Silva",
    cargo: "Coordenador Técnico",
    sobre: "Especialista em desenvolvimento esportivo com mais de 10 anos de experiência.",
    foto: {
      url: "/src/assets/logo.png"
    }
  },
  {
    id: 2,
    nome: "Maria Santos",
    cargo: "Psicóloga Esportiva",
    sobre: "Psicóloga especializada em acompanhamento de atletas jovens.",
    foto: {
      url: "/src/assets/logo.png"
    }
  },
  {
    id: 3,
    nome: "Carlos Oliveira",
    cargo: "Preparador Físico",
    sobre: "Preparador físico com foco em atletas de alto rendimento.",
    foto: {
      url: "/src/assets/logo.png"
    }
  }
];

export async function getMentores() {
  try {
    const response = await fetch(API_MENTORES_URL, {
      headers: {
        Authorization: `Bearer ${env.CMS_API_TOKEN}`,
      },
    });

    if (!response.ok) {
      console.warn(`API indisponível (${response.status}), usando dados mock`);
      return mockMentores;
    }

    const mentoresJson = await response.json().catch(() => {
      console.warn("Erro ao fazer parse do JSON, usando dados mock");
      return mockMentores;
    });

    const cmsJson = cmsSchema.parse(mentoresJson);

    const mentores = cmsJson.data
      .map((mentor) => mentorSchema.safeParse(mentor))
      .filter((mentor) => mentor.success)
      .map((mentor) => mentor.data);
    mentores.sort((a, b) => a.nome.localeCompare(b.nome));

    if (mentores.length !== cmsJson.data.length) {
      console.warn(
        `Há ${
          cmsJson.data.length - mentores.length
        } mentores com dados inválidos que foram ignorados`
      );

      console.warn(
        JSON.stringify(
          cmsJson.data.filter((mentor) => !mentorSchema.safeParse(mentor).success)
        )
      );
    }

    return mentores;
  } catch (error) {
    console.warn("Erro ao conectar com a API, usando dados mock:", error);
    return mockMentores;
  }
}