## NAVEGADORES WEB

Aplicações do lado do cliente geralmente se comunicam com um servidor através de documentos em HTTP. Quado o navegador recebe um destes pacotes em HTML ele começa o processo de renderização. A renderização pode requisitar outros arquivos a fim de completar a experiência desenvolvida para o endereço em questão.
Nos navegadores os usuários necessitam localizar a página que desejam, sabendo o endereço, ou pesquisando em buscadores. Isso é um processo árduo para a plataformas móveis pois necessitam maior interação do usuários e não são “naturais” se comparado ao modo normal de consumir aplicativos nestas mesmas plataformas – simplesmente adquirindo o aplicativo na loja e abrindo-o no sistema operacional. Alguns contornos para este problema serão descritos nas tecnologias offline.

Para transformar as instruções retornadas pelo servidor em algo útil para o usuário final os navegadores geralmente fazem uso de bibliotecas externas capazes de interpretar HTML5 e gerar o conteúdo iterativo.

##BIBLIOTECAS WEB

O Google Chrome utiliza o Webkit para renderizar seu conteúdo HTML5. O webkit foi criado pela Apple baseando-se no motor de renderização do Konkeror do projeto KDE. Safari e Opera também fazem uso do Webkit. V8 para JavaScript.

O motor de renderização do HTML5 do Firefox é o XXX. O motor de JavaScript é o.

## ANDROID

É um sistema operacional *open-source*, largamente suportado pelo Google. Utiliza o kernel Linux para as tarefas mais básicas como: gerência de memória, processos, etc. Os programas para Android são geralmente escritos em Java e executados através da máquina virtual Dalvik.
Dalvik é similar a máquina virtual Java, mas roda um formato de arquivos diferenciado (dex), otimizados para consumir pouca memória, que são agrupados em um único Android Package (apk).
 Android permite a renderização de documentos HTML através de sua própria API WEBVIEW. Ou através do navegador disponibilizado por padrão, ou outros de terceiros como o Google Chrome, Firefox, Opera, etc.

No quesito jogos para dispositivos móveis é preferível disponibilizar os jogos através da interface nativa pois dá a sensação de continuidade para com os demais aplicativos instalados no dispositivo.

##HTML

Um documento HTML representa conteúdo iterativo de uma forma independente de plataforma. Podem ser renderizados em uma tela, em um sintetizador de voz, etc.

Com o crescimento da demanda de interatividade na internet o HTML foi forçado a evoluir. Em sua quinta versão, o HTML5, grandes melhorias foram adicionadas. Antes do HTML5 para alcançar a interatividade desejada, só te podia recorrer a plugins de terceiros como o Flash Player e o Silverlight, estes necessitam de instalação de plugin e ficam limitados a um distribuidor de software.

O HTML em si trata cruamente da estrutura, para as páginas ficarem agradáveis e seus usuários faz-se necessário o uso de estilos que é proporcionado através do CSS.

A WHATWG começou a construção do HTML5 e a W3C se interessou e entrou no projeto. Mesmo assim, a WHATWG mantém uma versão com licença menos restrita que a W3C contendo recursos a mais dos que os especificados no HTML atual.

##ELEMENTO HTML

## DOCUMENT OBJECT MODEL (DOM)

É uma plataforma e interface agnóstica a linguagem que permite os programas e scripts dinamicamente acessar e atualizar o conteúdo, estrutura e estilo de documentos. Pode ser novamente processado e o resultado aparecer na tela. O navegador cria um DOM quando ele processa os elementos e tags encontrados em um documento HTML. Gmail é uma aplicação de única página (single-page) que se baseia fortemente no DOM para gerar conteúdo dinâmico e interativo oferecido pelo DOM.

##CSS

Uma linguagem de marcação, como o HTML,  que utiliza seletores e regras para definir a representação de um documento HTML e seus elementos.

Os navegadores interpretam CSS através da tag ``<style>``.
O CSS é dividido em módulo, contendo aproximadamente 50 deles.

Sua última versão, o CSS3, introduziu várias funcionalidades multiplataforma como media-queries que possibilitam regras para tamanhos de tela e transformações 3D.

Muitos navegadores também suportam aceleração de GPU (Unidade de processamento gráfico) para elementos que tenham transformações 3d.

Flow de documento, ordem e posição em que os elementos tem que aparecer na página. Modelo de caixa o que encapsula o conteúdo em um elementos.

<!--  falar do suporte a variáveis do CSS -->


##JAVASCRIPT

EMACScript, melhor conhecido como JavaScript, criada por Brendan Eich em 1992, é a linguagem da Web. Devido a tremenda popularidade entre comunidade de desenvolvedores a linguagem foi abraçada pela W3C e atualmente é um dos componentes da *Open Web Platform*.

As definições da linguagem são descritas na especificação ECMA-262. Esta possibilitou o desenvolvimento de outras implementações além da original - *SpiderMonkey* -  como o Rhino, V8 e TraceMonkey; bem como outras linguagens similares como JScript da Microsoft e o ActionScript da Adobe.

JavaScript é uma linguagem de script. Segundo a Ecma Internacional 2012:

> "Uma linguagem de script é uma linguagem de programação que é usada para manipular e automatizar os recursos presentes em um dado sistema. Nesses sistemas funcionalidades já estão disponíveis através de uma interface de usuário, uma linguagem de script é um mecanismo para expor essas funcionalidades para um programa protocolado."

A intenção original era utilizar o JavaScript para dar suporte aos já bem estabelecidos recursos do HTML, como para validação, alteração de estado de elementos, etc. Em outras palavras, a utilização do JavaScript era opcional e as páginas da web deveriam continuar operantes sem a presença da linguagem.

Entretanto, com a construção de projetos Web cada vez mais complexos, as responsabilidades delegadas ao JavaScript aumentaram a ponto que a grande maioria dos sistemas web não funcionarem sem ele. Não obstante, JavaScript não evoluiu ao passo da demanda e muitas vezes carece de definições expressivas, completude teórica, e outras características de linguagens de programação mais bem estabelecidas, como o C++ ou Java (Barnett, 2013). A nova versão do JavaScript, o JavaScript 6, é um esforço nessa direção. JavaScript 6 ou *EMACScript Harmonia*, contempla vários conceitos de orientação a objetos como classes, interfaces, herança, tipos, etc.

Estes esforços de padronização muitas vezes não são rápidos o suficiente para produtores de software web, demora-se muito até obter-se um consenso sobre quais as funcionalidades desejadas em determinada versão e seus detalhes de implementação. Outrossim, uma vez definidas as especificações, é necessário que os distribuidores do JavaScript implementem o especificado.

Alternativamente, existe uma vasta gama de conversores de código -  *transpilers* -  para JavaScript; possibilitando programar em linguagens formais e posteriormente gerar código JavaScript. Não obstante, essa alternativa tem seus pontos fracos, necessita-se de mais tempo de depuração , visto que o JavaScript gerado não é conhecido pelo desenvolvedor, e provavelmente o código gerado não será tão otimizado, nem utilizará os recursos mais recentes do JavaScript.

Mesmo com suas fraquezas amplamente conhecidas, JavaScript está presente em praticamente todo navegador atual. Sendo uma espécie de denominador comum entre as plataformas.  Essa onipresença torna-o integrante vital no processo de desenvolvimento de jogos multiplataforma em HTML5. Vários títulos renomeados já foram produzidos que fazem extensivo uso de JavaScript, são exemplos: Candy Crush Saga, Angry Birds, Dune II, etc.

Jogos Web são escritos na arquitetura cliente servidor, JavaScript pode rodar em ambos estes contextos, para tanto, sua especificação não define recursos de plataforma. Distribuidores do JavaScript complementam a o JavaScript com recursos específicos para suas plataformas alvo. Por exemplo, para servidores, define-se objetos de terminal, acesso a arquivos e dispositivos, etc. No contexto de cliente, são definidos objetos como janelas, frames, DOM, etc.

Para o navegador o código JavaScript geralmente é disposto no elemento ``script`` dentro de arquivos HTML. Quando os navegadores encontram esse elemento eles fazem a requisição para o servidor e injetam o código retornado no documento, e a não ser que especificado de outra forma, iniciam sua execução.

### ASM.JS

Asm.js é um subconjunto da sintaxe do JavaScript a qual permite grandes aumentos de performance quando em comparação com JavaScript normal. No contexto dos jogos performance é usualmente um recurso estimável, asm.js consegue-o supra utilizando recursos que permitam otimizações antes do tempo *ahead of time optimizations*. Entretanto, não é trivial escrever código em asm.js e geralmente a geração de código asm.js é feita através da transpilação de outras linhagens como C.

> Muita da performance adicional em relação ao JavaScript é devido a consistência de tipo e a não existência de um coletor de lixo (memória é gerenciada manualmente através de um grande vetor). Esse modelo simples desprovido de comportamento dinâmico, sem alocação e desalocação de memória, apenas um bem definido conjunto de operações de inteiros e flutuantes possibilita grade performance e abre espaço para otimizações.

##AJAX

### AJAX LIMITATIONS
> In pre-HTML5 browsers, pages dynamically created using successive Ajax requests did not automatically register themselves with the browser's history engine, so clicking the browser's "back" button may not have returned the browser to an earlier state of the Ajax-enabled page, but may have instead returned to the last full page visited before it. Such behavior — navigating between pages instead of navigating between page states — may be desirable, but if fine-grained tracking of page state is required, then a pre-HTML5 workaround was to use invisible iframes to trigger changes in the browser's history. A workaround implemented by Ajax techniques is to change the URL fragment identifier (the part of a URL after the "#") when an Ajax-enabled page is accessed and monitor it for changes.[12][13] HTML5 provides an extensive API standard for working with the browser's history engine.[14]
> Dynamic Web page updates also make it difficult to bookmark and return to a particular state of the application. Solutions to this problem exist, many of which again use the URL fragment identifier.[12][13] The solution provided by HTML5 for the above problem also applies for this.[14]
> Depending on the nature of the Ajax application, dynamic page updates may interfere disruptively with user interactions, especially if working on an unstable Internet connection. For instance, editing a search field may trigger a query to the server for search completions, but the user may not know that a search completion popup is forthcoming, and if the internet connection is slow, the popup list may show up at an inconvenient time, when the user has already proceeded to do something else.
> Excluding Google,[15] most major Web crawlers do not execute JavaScript code,[16] so in order to be indexed by search engines, a Web application must provide an alternative means of accessing the content that would normally be retrieved with Ajax. It has been suggested that a headless browser may be used to index content provided by Ajax-enabled websites.[17]
> Any user whose browser does not support JavaScript or XMLHttpRequest, or simply has this functionality disabled, will not be able to properly use pages which depend on Ajax. Devices such as smartphones and PDAs may not have support for the required technologies, though this is becoming less of a problem. The only way to let the user carry out functionality is to fall back to non-JavaScript methods. This can be achieved by making sure links and forms can be resolved properly and not relying solely on Ajax.[18]
> Similarly, some Web applications that use Ajax are built in a way that cannot be read by screen-reading technologies, such as JAWS. The WAI-ARIA standards provide a way to provide hints in such a case.[19]
    Screen readers that are able to use Ajax may still not be able to properly read the dynamically generated content.[20]
        The same origin policy prevents some Ajax techniques from being used across domains,[8] although the W3C has a draft of the XMLHttpRequest object that would enable this functionality.[21] Methods exist to sidestep this security feature by using a special Cross Domain Communications channel embedded as an iframe within a page,[22] or by the use of JSONP.
> The asynchronous callback-style of programming required can lead to complex code that is hard to maintain, to debug[23] and to test.[24]

## ALTERNATIVAS AO JAVASCRIPT

Abaixo seguem algumas tecnologias que servem de alternativa ao JavaScript.

### TYPESCRIPT

Conhecido como uma versão estendida do JavaScript que compila para JavaScript normal.

### DART

Google. DartVM é uma máquina virtual que está embebido no Google Chrome. Significante melhorias em performance quando comparado ao JavaScript. Existe o dart2js que compila código em Dart para JavaScript.

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

# METODOLOGIA

O primeiro passo consiste em definir as plataformas alvo do trabalho; devem ser plataformas mercadologicamente relevantes ao desenvolvimento de jogos, que possibilitem a criação de aplicativos em HTML e que acentuem o antagonismo de características.
Segue-se com a construção de uma lista com os recursos relevantes aos jogos que, empiricamente, sofrem ou são comummente ligados à limitações multiplataforma. Segue-se uma pesquisa para aprofundar teoricamente cada um dos recursos, possivelmente elegendo novos.

Com um baseamento teórico substancial, o próximo passo é a criação do protótipo de um jogo multiplataforma que utilize recursos potencialmente limitados. Para ser considerado pronto, o protótipo deve ser testado, e estar funcional, com adaptações ou não, em cada uma das plataformas alvo definidas.

Com o protótipo concebido, o passo que segue é a enumeração, e descrição das limitações detectadas no processo de desenvolvimento e testes do jogo. Este detalhamento deve responder as seguintes perguntas:

- Quais as limitações foram encontradas no jogo?
- Em quais plataformas?
- Sob quais circunstâncias?
- As limitações puderam ser contornadas?
- Algum efeito colateral das limitações no jogo?
- Qual a categoria do problema: usabilidade, funcionalidade, manutibilidade, portabilidade ou performance? (segundo ISO)
