<p align="center">
  <a href="https://www.cooperaesportes.com.br" target="blank"><img src="https://raw.githubusercontent.com/jordyfontoura/coopera-frontend/main/src/assets/logo.png" width="120" alt="Coopera Esportes" /></a>
</p>

[![Netlify Status](https://api.netlify.com/api/v1/badges/70cec5fc-c448-44d6-a400-e66a0e890d17/deploy-status)](https://app.netlify.com/sites/cooperaesportes/deploys)

# Coopera Esportes

Bem-vindo ao repositório da **Coopera Esportes**! Este projeto é uma iniciativa da Organização Não Governamental (ONG) sem fins lucrativos **Coopera Esportes**, que visa contribuir para o desenvolvimento integral de adolescentes por meio do apoio à prática esportiva e à educação.

Acreditamos no poder do esporte e da educação como formas de integração social, e este projeto em **Next.js** é parte de nossos esforços para alcançar esse objetivo.

## Sobre o Projeto

O projeto em Next.js da Coopera Esportes é uma plataforma web desenvolvida para fornecer informações sobre a ONG, seus programas, eventos, e como contribuir ou se envolver. A plataforma foi criada com foco na simplicidade, usabilidade e acessibilidade.

## Instalação

Para executar este projeto localmente, siga estas etapas:

1. Certifique-se de ter o **Node.js (v20.11.1)** e o **npm** instalados em seu computador.
2. Clone este repositório para o seu ambiente local.
3. No diretório raiz do projeto, execute o seguinte comando para instalar as dependências:

```bash
npm install
```

## Uso
Após a instalação das dependências, você pode iniciar o servidor de desenvolvimento local executando o seguinte comando:

```bash
npm run dev
```

Isso iniciará o servidor de desenvolvimento do Next.js. Você poderá acessar o projeto em seu navegador em http://localhost:3000.

## Contribuição
Agradecemos o seu interesse em contribuir para o projeto da Coopera Esportes! Utilizamos o [GitFlow](https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow) como metodologia de trabalho. Abaixo está um diagrama para facilitar o entendimento do mesmo:

<p align="center">
  <img src="https://wac-cdn.atlassian.com/dam/jcr:cc0b526e-adb7-4d45-874e-9bcea9898b4a/04%20Hotfix%20branches.svg" alt="Fluxograma de branches"/>
</p>

- **feature/nome-da-feature**: Use esse tipo de branch para desenvolver novas funcionalidades. Quando estiver pronta, a branch será mesclada de volta para a branch de desenvolvimento.
- **hotfix/nome-do-hotfix**: Use esse tipo de branch para corrigir bugs críticos que foram descobertos na branch de produção. Assim que o problema for resolvido, a branch será mesclada de volta para as branches de desenvolvimento e produção.
- **release/vX.X.X**: Essas branches são criadas quando um novo release está pronto para ser implantado. Elas são usadas para preparar o código para implantação em produção. Uma vez que o release é considerado pronto, ele será mesclado na branch de produção.
- **dev**: Essa é a branch de desenvolvimento. Todas as novas funcionalidades são mescladas nesta branch.
- **main**: Essa é a branch de produção. Ela contém o código que está atualmente em produção.


Antes de enviar uma pull request, por favor, certifique-se de seguir as Diretrizes de Contribuição.

## Contato
Se você tiver alguma dúvida, sugestão ou precisar de mais informações, entre em contato conosco:

Site: [www.cooperaesportes.com.br](www.cooperaesportes.com.br)

Licença
Este projeto está licenciado sob a [Licença MIT](LICENSE).