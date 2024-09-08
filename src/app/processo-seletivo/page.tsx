import Link from "next/link";

export default function ProcessoSeletivoPage() {
  return (
    <main className="px-8 py-16 text-lg">
      <h2 className="text-4xl font-bold text-primary">Processo Seletivo Coopera</h2>
      <p className="mt-4">
      Você pode participar da Coopera como bolsista. O processo de seleção é feito anualmente, durante um determinado período, e todos os candidatos que se encaixem em nossos critérios tem sua aplicação avaliada gratuitamente.

Acompanhe as novidades pelo nosso instagram <Link href="https://www.instagram.com/cooperaesportes" className="underline transition-colors hover:text-tertiary">@cooperaesportes</Link>.
      </p>
      <h2 className="text-4xl font-bold text-primary mt-8">Nossa Missão</h2>
      <p className="mt-4">
        Fomentar a prática do esporte como instrumento de amadurecimento pessoal
        através do suporte financeiro e do aconselhamento do jovem. Acreditamos
        no esporte como forma de transformar vidas, além do incentivo às
        práticas esportivas, buscamos criar condições para a melhora no
        desempenho escolar e potencializar futuras oportunidades de inserção
        profissional.
      </p>
      <h2 className="text-4xl font-bold text-primary mt-8">Como funciona</h2>
      <h3 className="text-2xl font-bold mt-4 text-tertiary">1º FASE – CANDIDATURA</h3>
      <ul className="list-disc ml-6">
        <li>Vídeo de 2 minutos e 30 segundos de apresentação sobre:</li>
        <li>Histórico familiar</li>
        <li>Histórico no esporte e, principalmente histórico de vitórias</li>
        <li>Rotina e dia-a-dia</li>
        <li>Interação com a sua comunidade</li>
        <li>Porque a Coopera Esportes deve escolher você o vencedor da bolsa ?</li>
      </ul>
      <p className="mt-4">
        O atleta deverá preencher seus dados e fazer o upload do vídeo no formulário de seleção que ficará presente neste site  e aberto somente durante o período do processo seletivo. Caso tenha dúvidas, entre em contato conosco.
      </p>
      <h3 className="text-2xl font-bold mt-4 text-tertiary">2º FASE – ENTREVISTA</h3>
      <ul className="list-disc ml-6">
        <li>Nessa conversa você deverá saber indicar quais seriam os usos dos recursos financeiros com a bolsa e como te ajudará a atingir seus objetivos</li>
        <li>Requisitos para a validação da inscrição: Ser um atleta de alta performance e que se considera de grande potencial e é necessário que você esteja matriculado em instituição de ensino pública ou privada</li>
      </ul>

      <h2 className="text-4xl font-bold text-primary mt-8">Processo Seletivo Coopera Esportes 2024 </h2>
      <p className="mt-4">
        O processo seletivo para o ano de 2024 será realizado entre os dias 15 de outubro de 2023 e 15 de novembro de 2023. A divulgação dos selecionados será feita no dia 15 de dezembro de 2023.
      </p>
      <Link
        href="https://forms.gle/7v4pYr2c6vz2vRzQ9"
        className="px-8 py-4 mt-8 block rounded-md max-w-96 mx-auto text-center text-xl
        transition-colors hover:bg-secondary
        font-bold text-background bg-primary"
      >
          Clique aqui para participar
      </Link>
    </main>
  );
}
