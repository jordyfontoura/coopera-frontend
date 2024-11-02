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

export async function getMentores() {
  const response = await fetch(API_MENTORES_URL, {
    headers: {
      Authorization: `Bearer ${env.CMS_API_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Falha ao carregar mentores via API ${API_MENTORES_URL}`);
  }

  const mentoresJson = await response.json().catch(() => {
    throw new Error(
      `Falha ao fazer parse do JSON retornado pela API ${API_MENTORES_URL}`
    );
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
}
