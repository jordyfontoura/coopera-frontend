import Link from "next/link";

export default function SobrePage() {
  return (
    <div>
      <main className="px-32 py-16">
        <h1 className="text-4xl font-bold text-center">Coopera Esportes</h1>
        <p className="mt-4">
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
        <h1 className="text-4xl font-bold text-center mt-16">Nossa Missão</h1>
        <p className="mt-4">
          Fomentar a prática do esporte como instrumento de amadurecimento
          pessoal através do suporte financeiro e do aconselhamento do jovem.
          Acreditamos no esporte como forma de transformar vidas, além do
          incentivo às práticas esportivas, buscamos criar condições para a
          melhora no desempenho escolar e potencializar futuras oportunidades de
          inserção profissional.
        </p>
        <h1 className="text-4xl font-bold text-center mt-16">Objetivos</h1>
        <p className="mt-4">
          Fomentar a prática do esporte como instrumento de amadurecimento
          pessoal através do suporte financeiro e do aconselhamento do jovem.
          Acreditamos no esporte como forma de transformar vidas, além do
          incentivo às práticas esportivas, buscamos criar condições para a
          melhora no desempenho escolar e potencializar futuras oportunidades de
          inserção profissional.
        </p>
        <h1 className="text-4xl font-bold text-center mt-16">Como funciona</h1>
        <p className="mt-4">
          Oferecemos bolsa mensal no valor de R$ 100,00 a R$ 300,00 aos atletas
          de alto rendimento de 12 a 18 anos. Buscamos apoiar jovens atletas com
          condições financeiras menos privilegiadas. Os recursos devem ser
          utilizados para cobrir gastos com alimentação, saúde, treinamento,
          aquisição de equipamentos, pagamento de taxas de inscrição em
          competições e/ou transporte para participação de eventos educacionais
        </p>
        <p className="mt-4 font-bold">Como acompanhamos nossos atletas:</p>
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
        <h1 className="text-4xl font-bold text-center mt-16">Relatórios</h1>
        <div className="text-center mt-4">
          <Link href="/relatorios" className="text-center">
            Clique aqui para conhecer nossa atuação de forma mais detalhada
          </Link>
        </div>
      </main>
      <p className="bg-primary py-24 px-8 text-center text-white  font-bold text-3xl">
        Acreditamos no esporte e na educação como pilares da integração social.
      </p>
    </div>
  );
}
