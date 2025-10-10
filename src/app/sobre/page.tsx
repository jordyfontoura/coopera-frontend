import Image from "next/image";
import Link from "next/link";
import fileImage from "@/assets/file.svg";
import { getRelatorios } from "@/services/relatorios";


export default async function SobrePage() {
  const relatorios = await getRelatorios();

  return (
    <>
      <main className="px-8 py-24 text-lg max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-primary mb-6">Coopera Esportes</h1>
          <div className="w-24 h-1 bg-tertiary mx-auto rounded-full mb-8"></div>
          <p className="text-xl sm:text-2xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-4xl mx-auto">
            Acreditamos no esporte e na educação como pilares da integração social
          </p>
        </section>

        {/* Sobre a Organização */}
        <section className="mb-16">
          <div className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">Sobre a Organização</h2>
            <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
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
          </div>
        </section>

        {/* Nossa Missão */}
        <section className="mb-16">
          <div className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">Nossa Missão</h2>
            <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
              Fomentar a prática do esporte como instrumento de amadurecimento
              pessoal através do suporte financeiro e do aconselhamento do jovem.
              Acreditamos no esporte como forma de transformar vidas, além do
              incentivo às práticas esportivas, buscamos criar condições para a
              melhora no desempenho escolar e potencializar futuras oportunidades de
              inserção profissional.
            </p>
          </div>
        </section>

        {/* Como Funciona */}
        <section className="mb-16">
          <div className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">Como Funciona</h2>
            <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300 mb-8">
              Oferecemos bolsa mensal no valor de R$ 100,00 a R$ 200,00 aos atletas
              de alto rendimento de 14 a 18 anos. Buscamos apoiar jovens atletas com
              condições financeiras menos privilegiadas. Os recursos devem ser
              utilizados para cobrir gastos com alimentação, saúde, treinamento,
              aquisição de equipamentos, pagamento de taxas de inscrição em
              competições e/ou transporte para participação de eventos educacionais
            </p>
            
            <div className="bg-tertiary/10 rounded-xl p-6 border border-tertiary/20">
              <h3 className="text-xl font-bold text-tertiary mb-4">
                Como acompanhamos nossos atletas:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-tertiary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-neutral-700 dark:text-neutral-300">O Atleta terá um mentor indicado pela Coopera Esportes</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-tertiary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-neutral-700 dark:text-neutral-300">
                    Encontros bimestrais para acompanhamento e aconselhamento
                    acadêmico/profissional
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-tertiary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-neutral-700 dark:text-neutral-300">Relatório mensal de presença nos treinos</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-tertiary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-neutral-700 dark:text-neutral-300">Comprovação de performance acadêmica</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-tertiary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-neutral-700 dark:text-neutral-300">Prestação de contas a cada 2 meses</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-tertiary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-neutral-700 dark:text-neutral-300">
                    Contratos serão semestrais, porém podem ser rescindidos com 30 dias
                    de antecedência.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Relatórios */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">Relatórios</h2>
            <div className="w-20 h-1 bg-tertiary mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-neutral-600 dark:text-neutral-300">Conheça nossa atuação</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {relatorios.relatorios.map((relatorio) => (
              <Link href={relatorio.link} key={relatorio.id} className="group">
                <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 shadow-lg hover:shadow-2xl border border-neutral-200 dark:border-neutral-700 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 transform group">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <Image
                        src={fileImage}
                        width={32}
                        height={32}
                        alt={relatorio.nome}
                        unoptimized
                        className="dark:invert"
                      />
                    </div>
                    <h3 className="font-bold text-lg text-primary group-hover:text-primary/80 transition-colors duration-300">
                      {relatorio.nome}
                    </h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">Clique para visualizar</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      
      <section className="bg-gradient-to-r from-primary via-blue-700 to-primary py-24 px-8 text-center text-neutral-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-relaxed">
            Acreditamos no esporte e na educação como pilares da integração social.
          </p>
        </div>
      </section>
    </>
  );
}
