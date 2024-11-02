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

export async function getBolsistas() {
  const response = await fetch(API_BOLSISTAS_URL, {
    headers: {
      Authorization: `Bearer ${env.CMS_API_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Falha ao carregar bolsistas via API ${API_BOLSISTAS_URL}`);
  }

  const bolsistasJson = await response.json().catch(() => {
    throw new Error(
      `Falha ao fazer parse do JSON retornado pela API ${API_BOLSISTAS_URL}`
    );
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
}
