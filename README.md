# QUEBUS
<div align="center">
    <a href="https://github.com/lyndemberg/quebus">
        <img src="quebus-logo.png" width="300" height="300">
    </a>
</div>


QUEBUS é uma abreviatura para Question Business. Ele se trata de um sistema colaborativo que visa a troca de informações sobre processos internos de uma empresa. É dito 'de uma empresa' porque a ideia é de que este softwarre que possa ser implantado internamente em uma empresa que visa empregar estratégias para a gestão do conhecimento.
Esse sistema faz parte de um projeto de disciplina de RHT do IFPB. Ele tem com o objetivo aplicar áreas da gestão de conhecimento em um ambiente empresarial.

## Funcionalidades
O sistema QUEBUS é um sistema para questões de trabalho, como buscar respostas para dúvidas recorrentes buscando sempre um atender o funcionário da melhor forma possível. 

#### As funcionalidades do QUEBUS são:

- **Buscar respostas sobre questão da empresa** - Onde o funcioário escreverá sua dúvida e em seguida realizará a postagem da mesma para os demais colegas.
- **Funcionário responde questão de outro funcionario** - O funcionário poderá responder as questões que lhe foram propostas, de uma forma que seu colega possa entender. 
- **Votação da melhor resposta** - Onde Todos os funcionários poderão votar na melhor resposta. 
- **Respostas em alta** - As respostas mais votadas vão ficar no topo da página.
- **Fazer cadastro** - Cadastrar o funcionário.
- **Fazer Login** - Logar com a conta funcionario.
 

## Tecnologias utilizadas
Para auxiliar no desenvolvimento da aplicação elgumas ferramentas serão utilizadas, sendo elas utilizadas para odesenvovlimento do Front e do Back-End:
#### Lista de Ferramentas logo abaixo:

- **Back-End** -Nodejs, express, Mongoose e Docker.
- **Front-End** - Angular e Materialize.

**1 - Node** 

<div align="center">
    <img src="https://software.intel.com/sites/default/files/managed/fa/a0/Runtime-logo-Node.jpg" width="250" height="150">
</div>

O Node.js pode ser definido como um ambiente de execução Javascript server-side. Isso significa que com o Node.js é possível criar aplicações Javascript para rodar como uma aplicação standalone em uma máquina, não dependendo de um browser para a execução, como estamos acostumados. Apesar de recente, o Node.js já é utilizado por grandes empresas no mercado de tecnologia, como Netflix, Uber e LinkedIn.

**2 - Express**

<div align="center">
    <img src="https://miro.medium.com/max/832/1*uPL1uCtLBRSk6akPL2hNzg.jpeg" width="250" height="150">
</div>

O Express é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel.

**3 - Mongoose**

<div align="center">
    <img src="https://pbs.twimg.com/profile_images/946432748276740096/0TXzZU7W.jpg" width="250" height="200">
</div>

Mongoose é uma biblioteca do Nodejs que proporciona uma solução baseada em esquemas para modelar os dados da sua aplicação. Ele possui sistema de conversão de tipos, validação, criação de consultas e hooks para lógica de negócios. Mongoose fornece um mapeamento de objetos do MongoDB similar ao ORM (Object Relational Mapping), ou ODM (Object Data Mapping) no caso do Mongoose. Isso significa que o Mongoose traduz os dados do banco de dados para objetos JavaScript para que possam ser utilizados por sua aplicação.

**4 - Docker**

<div align="center">
    <img src="https://miro.medium.com/max/630/1*j_zP74-cpvXRcs8dM_pkMQ.jpeg" width="250" height="200">
</div>

**Docker:** é uma tecnologia de software que fornece contêineres, promovido pela empresa Docker, Inc. O Docker fornece uma camada adicional de abstração e automação de virtualização de nível de sistema operacional no Windows e no Linux. O Docker usa as características de isolamento de recurso do núcleo do Linux como cgroups e espaços de nomes do núcleo, e um sistema de arquivos com recursos de união, como OverlayFS e outros para permitir "contêineres" independentes para executar dentro de uma única instância Linux, evitando a sobrecarga de iniciar e manter máquinas virtuais (VMs).

**Docker Compose:** é o orquestrador de containers da Docker. E como funciona um orquestrador em uma orquestra? Ele rege como uma banda deve se comportar/tocar durante uma determinada apresentação ou música. Com o Docker Compose é a mesma coisa, mas os maestros somos nós! Nós que iremos reger esse comportamento através do arquivo chamado docker-compose, semelhante ao Dockerfile, escrito em YAML (acrônimo recursivo para YAML Ain’t Markup Language) é um formato de codificação de dados legíveis por humanos, o que torna fácil de ler e entender o que um Compose faz!

**5 - Angular**

<div align="center">
    <img src="https://miro.medium.com/max/4583/1*P7x-_0XfQz6CVmMY_QAv0w.png" width="250" height="150">
</div>

AngularJS é um framework JavaScript código aberto, mantido pelo Google, que auxilia na execução de single-page applications. Seu objetivo é aumentar aplicativos que podem ser acessados por um navegador web, foi construído sob o padrão model-view-view-model (MVVM), em um esforço para facilitar tanto o desenvolvimento quanto o teste dos aplicativos.

**6 - Materialize**

<div align="center">
    <img src="https://cdn.nearsoft.com/uploads/2016/11/how-to-center-your-content-with-materialize-top-800x318.png" width="250" height="150">
</div>

Materialize é um framework Front-End que resolve os mesmos problemas, mas, claro, com suas próprias características. Ele surgiu através de um projeto desenvolvido pela Google e é inspirado no Material Design (design utilizado no sistema operacional para smartphones Android desde a versão 5.0)

## Diagrama de classes

<div>
    <img src="docs/Diagrama de classes - Projeto QUEBUS.png" width="800" height="600">
</div>
 
## Implantação

### Implantação do back/end

Para iniciar o back-end em desenvolvimento, execute o arquivo **_run.sh_** na pasta raiz do server:

`./run.sh`

### Implantação do front/end

Para a implantação do sistemas os comandos a seguir devem ser executados na pasta raiz do front-end (quebus-app): 

- Em desenvolvimento:

    `ng serve --configuration=dev --open`

- Fazer build em produção:

    `ng build --prod`


## Contribuidores
| Nome | Github |
| ------ | ------ |
| Lyndemberg Batista | https://github.com/lyndemberg |
| Matheus Ramyres | https://github.com/matheusramyres |
| Aguirre Sabino | https://github.com/aguirresabino |





