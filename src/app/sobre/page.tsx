import Image from "next/image";
import Link from "next/link";
import fileImage from "@/assets/file.svg";
import { getRelatorios } from "@/services/relatorios";


export default async function SobrePage() {
  const relatorios = await getRelatorios();

  return (
    <>
      <main className="px-8 py-24 text-lg max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-primary">Coopera Esportes</h1>
        <p className="mt-4 text-justify">
          A Coopera Esportes é uma Organização não Governamental (ONG) sem fins
          lucrativos que, por meio do apoio da prática esportiva, visa
          contribuir para o desenvolvimento integral do adolescente. Acreditamos
          no esporte como forma de integração social. O Grupo é formado por
          atletas amadores com histórico em investimentos e gestão de empresas.
          Nosso trabalho é desenvolvido numa perspectiva multidisciplinar,
          composta por diferentes áreas, tais quais: gestão dos recursos,
          disciplina nas práticas esportivas e na performance escolar e,
          acompanhamento (mentorado) dos jovens apoiados pela organização.
        </p>
        <h1 className="text-4xl font-bold text-primary mt-8">Nossa Missão</h1>
        <p className="mt-4 text-justify">
          Fomentar a prática do esporte como instrumento de amadurecimento
          pessoal através do suporte financeiro e do aconselhamento do jovem.
          Acreditamos no esporte como forma de transformar vidas, além do
          incentivo às práticas esportivas, buscamos criar condições para a
          melhora no desempenho escolar e potencializar futuras oportunidades de
          inserção profissional.
        </p>
        <h1 className="text-4xl font-bold text-primary mt-8">Como funciona</h1>
        <p className="mt-4 text-justify">
          Oferecemos bolsa mensal no valor de R$ 100,00 a R$ 200,00 aos atletas
          de alto rendimento de 14 a 18 anos. Buscamos apoiar jovens atletas com
          condições financeiras menos privilegiadas. Os recursos devem ser
          utilizados para cobrir gastos com alimentação, saúde, treinamento,
          aquisição de equipamentos, pagamento de taxas de inscrição em
          competições e/ou transporte para participação de eventos educacionais
        </p>
        <p className="mt-6 mb-2 font-bold text-tertiary text-xl">
          Como acompanhamos nossos atletas:
        </p>
        <ul className="list-disc ml-6">
          <li>O Atleta terá um mentor indicado pela Coopera Esportes</li>
          <li>
            Encontros bimestrais para acompanhamento e aconselhamento
            acadêmico/profissional
          </li>
          <li>Relatório mensal de presença nos treinos</li>
          <li>Comprovação de performance acadêmica</li>
          <li>Prestação de contas a cada 2 meses</li>
          <li>
            Contratos serão semestrais, porém podem ser rescindidos com 30 dias
            de antecedência.
          </li>
        </ul>
        <h1 className="text-4xl font-bold text-primary mt-8">
          Relatórios
        </h1>
        <p>Conheça nossa atuação</p>
        <ul className="mt-4 flex flex-wrap items-stretch">
          {relatorios.relatorios.map((relatorio) => (
            <Link href={relatorio.link} key={relatorio.id}>
              <li className="p-2 flex flex-col items-center transition-all scale-100 hover:scale-110">
                <Image
                  src={fileImage}
                  width={100}
                  height={100}
                  alt={relatorio.nome}
                  unoptimized
                  className="dark:invert"
                />
                <p>{relatorio.nome}</p>
              </li>
            </Link>
          ))}
        </ul>
      </main>
      <p className="bg-primary py-24 px-8 text-center text-neutral-50 font-bold text-3xl">
        Acreditamos no esporte e na educação como pilares da integração social.
      </p>
    </>
  );
}
