"use server";
import { env } from "@/config";
import { cloudinaryLoader } from "@/config/image-loader";
import Image from "next/image";
import { z } from "zod";


const API_BOLSISTAS_URL = `${env.CMS_API_URL}/bolsistas?pagination[limit]=1000&populate[foto][fields][0]=url`;

const cmsPictureSchema = z.object({
  url: z.string(),
});

const mentorSchema = z.object({
  nome: z.string(),
  esporte: z.string(),
  foto: cmsPictureSchema,
  depoimento: z.string().nullable().optional(),
});

const cmsSchema = z.object({
  data: z.array(z.any()),
  meta: z.any(),
});


export default async function BolsistasPage() {
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

  const cmsJson = cmsSchema.parse(bolsistasJson);

  const bolsistas = cmsJson.data
    .map((bolsista) => mentorSchema.safeParse(bolsista))
    .filter((bolsista) => bolsista.success)
    .map((bolsista) => bolsista.data);
  bolsistas.sort((a, b) => a.nome.localeCompare(b.nome));

  if (bolsistas.length !== cmsJson.data.length) {
    console.warn(
      `Há ${
        cmsJson.data.length - bolsistas.length
      } mentores com dados inválidos que foram ignorados`
    );

    console.warn(
      JSON.stringify(
        cmsJson.data.filter((mentor) => !mentorSchema.safeParse(mentor).success)
      )
    );
  }

  return (
    <main className="px-8 py-16 text-neutral-50">
      <nav>
        <ul className="grid grid-cols-1 items-center space-y-4 md:grid md:space-y-0 md:grid-cols-3 md:gap-4 lg:grid-cols-5 xl:grid-cols-7">
          {bolsistas.map((bolsista) => (
            <li
              key={bolsista.nome}
              className="relative aspect-[11/13] rounded-md overflow-hidden shadow-md group"
            >
              <Image loader={cloudinaryLoader} src={bolsista.foto.url} alt={bolsista.nome} fill  className="object-cover"/>
              <div className="absolute bottom-0 w-full flex flex-col items-center justify-end bg-gradient-to-t from-neutral-900 from-60% to-transparent py-4 min-h-32 transition-all duration-300">
                <h2 className="font-bold text-lg">{bolsista.nome}</h2>
                <p className="text-sm">{bolsista.esporte}</p>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
