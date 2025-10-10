import { env } from "@/config";
import { z } from "zod";

const API_BOLSISTAS_URL = `${env.CMS_API_URL}/bolsistas?pagination[limit]=1000&populate[foto][fields][0]=url`;

const cmsPictureSchema = z.object({
  url: z.string(),
});

const bolsistaSchema = z.object({
  id: z.number(),
  nome: z.string(),
  esporte: z.string(),
  foto: cmsPictureSchema,
  depoimento: z.string().nullable().optional(),
});

const cmsSchema = z.object({
  data: z.array(z.any()),
  meta: z.any(),
});

// Dados mock para quando a API não estiver disponível
const mockBolsistas = [
  {
    id: 1,
    nome: "Ana Costa",
    esporte: "Natação",
    foto: {
      url: "/src/assets/logo.png"
    },
    depoimento: "A Coopera Esportes mudou minha vida. Agora posso treinar sem me preocupar com os custos."
  },
  {
    id: 2,
    nome: "Pedro Lima",
    esporte: "Futebol",
    foto: {
      url: "/src/assets/logo.png"
    },
    depoimento: "Graças ao apoio da Coopera, consegui me dedicar 100% ao esporte e aos estudos."
  },
  {
    id: 3,
    nome: "Lucas Ferreira",
    esporte: "Atletismo",
    foto: {
      url: "/src/assets/logo.png"
    },
    depoimento: "O programa me deu a oportunidade de sonhar alto e buscar meus objetivos."
  }
];

export async function getBolsistas() {
  try {
    const response = await fetch(API_BOLSISTAS_URL, {
      headers: {
        Authorization: `Bearer ${env.CMS_API_TOKEN}`,
      },
    });

    if (!response.ok) {
      console.warn(`API indisponível (${response.status}), usando dados mock`);
      return mockBolsistas;
    }

    const bolsistasJson = await response.json().catch(() => {
      console.warn("Erro ao fazer parse do JSON, usando dados mock");
      return mockBolsistas;
    });

    console.log(JSON.stringify(bolsistasJson, null, 2));

    const cmsJson = cmsSchema.parse(bolsistasJson);

    const bolsistas = cmsJson.data
      .map((mentor) => bolsistaSchema.safeParse(mentor))
      .filter((mentor) => mentor.success)
      .map((mentor) => mentor.data);

    if (bolsistas.length !== cmsJson.data.length) {
      console.warn(
        `Há ${
          cmsJson.data.length - bolsistas.length
        } bolsistas com dados inválidos que foram ignorados`
      );

      console.warn(
        JSON.stringify(
          cmsJson.data.filter((mentor) => !bolsistaSchema.safeParse(mentor).success)
        )
      );
    }

    return bolsistas.sort((a, b) => a.nome.localeCompare(b.nome));
  } catch (error) {
    console.warn("Erro ao conectar com a API, usando dados mock:", error);
    return mockBolsistas;
  }
}