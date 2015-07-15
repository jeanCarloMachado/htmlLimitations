## DOCUMENT OBJECT MODEL (DOM)

É uma plataforma e interface agnóstica a linguagem que permite os programas e scripts dinamicamente acessar e atualizar o conteúdo, estrutura e estilo de documentos. Pode ser novamente processado e o resultado aparecer na tela. O navegador cria um DOM quando ele processa os elementos e tags encontrados em um documento HTML. Gmail é uma aplicação de única página (single-page) que se baseia fortemente no DOM para gerar conteúdo dinâmico e interativo oferecido pelo DOM.

## CANVAS

A nova tag <canvas> define um layer gráfico em documentos HTML que pode ser desenhado através de JavaScript.
Permite desenhar diagramas, gráficos e animações [7]. É baseado em bitmap.
O suporte ainda é escasso.
Muitas vezes lento. Algumas soluções tentam arrumar isso através da utilização de GPU.
Apache Cordova utiliza o FastCanvas.

CocoonJS é uma aplicativo híbrido que preenche a fraca implementação de OPENGL nos dispositivos móveis possibilitando se desenvolver em WEBGL.

## WEBGL

Baseado no OpenGL.

Web GL não foi utilizada no trabalho apesar de ser de grande relevância no processo de jogos pois ainda não está completamente especificada e a dificuldade e escopo do projeto aumentariam muito se tivessem de incluir um jogos 3D.
Versão da especificação atual?

## VIDEO

## AUDIO

Audio é um componente vital para oferecer grande satisfação aos usuários de jogos. Provê feedback e imerge o usuário. Efeitos de som e música podem servir como mecanismo. Jogadores tem baixa tolerância a volume, deve ser utilizado com cautela.

### TAG AUDIO

A tag <audio> define um som dentro de um documento html. Quando o elemento é renderizado pelos navegadores, ele carrega o conteúdo que pode ser reproduzido pelo player de audio do navegador. Existem muitas discrepâncias entre os formados aceitáveis pelos navegadores. È um tanto limitada quanto comparada ao áudio de múltiplos canais disponibilizados por SDKs nativas.

### API DE AUDIO

É uma interface de audio experimental para JavaScript. Provê maior flexibilidade na manipulação de audio. Essa tecnologia é muito mais nova do que a tag audio.
FORMATOS DE ÁUDIO

## CAMERA

## ENTRADA DE COMANDOS

Na construção da grande maioria dos jogos é muitas vezes imprescindível alta flexibilidade na gestão de entrada de dados. Este fator muito se amplia na criação de jogos multiplataforma, seja através de teclado, tela sensível ou sensor de movimentos, o importante é oferecer a melhor experiência possível por plataforma. O HTML5 trata todos estes casos abstratamente na forma de eventos, os quais podem ser escutados através de listeners. Os eventos básicos são: keydown (tecla baixa), keyup (tecla solta) e keypress (tecla pressionada).

Para detectar suporte aos mais variados recursos do HTML5 no navegador do cliente existem duas possibilidades. Pode-se implementar testes para cada funcionalidade utilizada abordando os detalhes de implementação de cada uma ou então fazer uso de alguma biblioteca especializada neste processo, o Modernizr é uma opção open-source deste tipo de biblioteca, este gera uma lista de booleanos sobre grande variedade dos recursos HTML5, dentre estes, geolocalização, canvas, áudio, vídeo e local storage.

## CACHE

Aplicações offline.

Algumas tecnologias desta classe são:

## OFFLINE E ARMAZENAMENTO

> Uma das grades limitações do HTML era a ausência de capacidade de armazenamento de dados. Armazenamento no lado do cliente é um requerimento básico para qualquer aplicação moderna. Essa área era ode as aplicações nativas detinham grande vantagem sobre as aplicações web. O HTML5 solucionou este problema introduzindo várias formas de armazenamento de dados. (HASAN et all, 2012)

### LOCAL STORAGE

Também conhecido como WebStorage na especificação do HTML5. Provê uma forma de armazenar os dados como chave valor dentro do navegador. Os dados são persistido mesmo que o navegador seja fechado.

###WEB SQL

Simplesmente um banco de dados SQLite embebido no navegador. Permite tabelas relacionais. O tamanho padrão do banco de dados é 5 megabytes e pode ser estendido pelo usuário.

## RECURSOS NATIVOS ATUALMENTE INDISPONÍVEIS PARA O HTML5

- Suporte à câmera;
- Suporte à calendário;

## DEBUG

### WEINRE

Debugger remoto depreciado.

 5.21  TECNOLOGIAS POLYFILL
Acarretando assim, que muitos navegadores não implementam algumas funcionalidades, completa ou parcialmente especificadas, daí surge a necessidade dos polyfills (tecnologias de preenchimento de lacunas) para implementar estas camadas.

Uma das soluções mais promissoras polyfill é o PhoneGap ou Apache Cordova, esta ferramenta é Open-source e possibilita utilizar de inúmeros recursos de hardware da grande maioria das produtoras de dispositivos móveis.

## FERRAMENTAS

### NODEJS

Permite rodar JavaScript fora do navegador. Utiliza um modelo dirigido à eventos sem bloqueio, tornando-o rápido e eficiente.

### SISTEMAS DE BUILDING

Aquivos JavaScript são requisitados do servidor assincronamente. Isso pode levar a tempos de requisição pouco desejáveis. Uma saída seria escrever o código em apenas um arquivo mais isso leva a gerência de código bagunçada. A saída mais comum entre desenvolvedores é utiliza ruma ferramenta que junta todos os arquivos e disponibiliza apenas um para o usuário.

### GRUNT

Aplica as modificações separadamente em cada arquivo.

### GULP

Utiliza o conceito de streams para aplicar todas as modificações sobre um arquivo de uma vez só.
Minify, obfuscation

### SOURCE MAPS

Para encontrar os arquivos minificados a fim de ajudar o desenvolvedor a debugar a aplicação.

### MINIFY

Remover caracteres desnecessários do JavaScript como espaços vazios, diminuindo o tamanho dos nomes, fazendo o tempo de loading diminuir.

### GERENCIADORES DE PACOTES

### BOWER

Package manager para a web

### NPM

Package manager para o NODE

## DISPONIBILIZAÇÂO DA APLICAÇÂO

Links com manifestos

### INSTALAÇÃO

Este método é benéfico pois possibilita ao usuário a mesma experiência ao adquirir uma aplicação normal. Este tipo de aplicação é comummente referido como "híbrido".

#### CROSSWALK

Crosswalk empacota os fontes juntamente com uma versão do Chromium, a versão Open-source do Google Chrome. Isso faz com que o software se comporte da mesma forma para todas as versões de dispositivos Android.

#### PHONEGAP

### PHONEGAP CLOUD

Este serviço possibilita que se faça upload de um arquivo compactado contendo os fontes – ou apontando para um repositório no GitHub – que no tempo desta pesquisa não estava funcionando; e se gere o APK para o Android nativamente.

### O JOGO

Devido ao fato deste trabalho explorar as limitações dos jogos em HTML5, optei por evitar a utilização de plugins e ferramentas de terceiros que pudessem ocultar alguma limitação.
Escolhi a simplicidade para não precisar ficar muito tempo aprendendo as coisas em detrimento do refinamento da pesquisa.

###MECÂNICA

O jogo consiste em simplesmente em uma tela que apresenta equações e um possível resultado. Cabe ao jogador decidir se o resultado está certo ou errado. O tempo é um fator levado em consideração, quão mais rápido o jogador acertar se a afirmação está correta ou não, mais pontos ele receberá.

Argumentos à favor da escolha do game:
Tem profundidade, permite a adição de novos recursos no futuro;
É facilmente traduzível em tamanhos de telas diferentes e tipos de entrada de dados diferentes;

###IMPLEMENTAÇÃO

Não tenho grande experiência com o desenvolvimento de jogos nem com o desenvolvimento em HTML5. Também para não interferir na pesquisa busquei não me distanciar do que é considerado padrão em ferramentas e métodos.
Comecei escrevendo o aplicativo para o Navegador do desktop pois era o que estava mais acessível no momento. Mais tarde descobri que de fato é assim que de desenvolve.

## FEEDBACK

# TRABALHOS SIMILARES

(Referência 2) Faz uma revisão de aspectos do HTML5 através da construção de um jogo. O autor foca muito nos aspectos de criação de jogos e feedback do desenvolvimento. Troca de tecnologias e não especificamente nas limitações conforme o meu trabalho. Em outras palavras seu escopo é mais genérico e não tão preciso quanto este
