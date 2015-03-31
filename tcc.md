<!--

Ideias:
Contra argumentos são interessantes na introdução, mas primeiramente os argumentos à favor
Pesquisar sobre isos (9126) de qualidade para ver parmetros de avaliação (pensar melhor)
Detalhar as plataformas alvo (talvez na introdução (como referência 3))

Dúvidas:
Falar sobre as versões dos dispositivos e navegadores que serão testados?

-->

##INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DO RIO GRANDE DO SUL
##CÂMPUS BENTO GONÇALVES-RS}
##Jean Carlo Machado}
#Limitações no Desenvolvimento de Jogos Multiplataforma em HTML

---

##Jean Carlo Machado
#Trabalho de conclusão de curso
##Projeto de Pesquisa apresentado junto ao Curso de Tecnologia em Análise e Desenvolvimento de Sistemas do Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul, como requisito parcial ao desenvolvimento do Trabalho de Conclusão de Curso.
#Orientador: Me. Rafael Jaques
#Bento Gonçalves, data de publicação

---

#RESUMO

**Palavras-chave**: *HTML*, JOGOS, Limitações

---

<!-- List of figures -->
<!-- List of tables -->

---

#Introdução<!-- ou Contextualização -->

É difícil se tornar competitivo no mercado de jogos, existem muitos produtos e muitas plataformas. Uma solução para este problema é a utilização de ferramentas comuns entre às plataformas a mais promissora destas ferramentas é o HTML.

O senso comum sobre o HTML para o desenvolvimento de games geralmente segue a seguinte estrutura: "HTML é fantástico, mas...", depois do *mas* as respostas variam de acordo com a experiência empírica ou opinião alheia. O objetivo deste trabalho é constatar o quanto deste *mas* é verdadeiro através da concepção e posterior análise do processo de desenvolvimento de um jogo multiplataforma em HTML.

A palavra HTML5 se tornou um conceito guarda chuva para englobar as tecnologias da web (referênce 2)

Um trabalho completo sobre o assunto requiriria um comparativo entre jogos desenvolvidos nativamente e jogos em HTML5. Jogos para plataforma inibem concorrência, você acaba desenvolvendo para umas poucas maiores marcas.

#PROBLEMA

A carência de definições concretas sobre a viabilidade da atual versão do *HTML5* - quando utilizado no desenvolvimento de jogos e o senso comum, acabam por monopolizar à construção de jogos nativos as plataformas alvo. Os custos adicionais no ciclo vida de um jogo nativo, para diversas plataformas, é muito alto para ser considerado um problema trivial.

#OBJETIVOS
##OBJETIVO GERAL

Identificar possíveis limitações no processo de desenvolvimento de jogos multiplataforma oriundas do atual estado de definição e implementação do HTML5. O objetivo deste trabalho não é comparar o HTML com outras tecnologias de desenvolvimento de jogos, como FlashPlayer ou alternativas desktop, outrossim, comparar o HTML5 com o que se considera razoável no desenvolvimento de jogos nas plataformas alvo.

##OBJETIVOS ESPECÍFICOS
Estudar as limitações de desenvolvimento de jogos nas plataformas de smartphones Android e navegadores Desktop Google Chrome e Firefox. Optamos por Android e não IOS pois o primeiro contém a vasta maioria do mercado de Smartphone, e por termos maior experiência na já mencionada plataforma.

Pretende-se também estudar os seguintes tópicos do desenvolvimento de jogos, relativos ao HTML5:
    - Debugging
    - Diferenças em tamanho de tela
    - Canvas
        - Resizing via canvas vs DOM
        - Aceleração de GPU
    - API de Audio (reference 2)
    - Performance
    - Empacotadores HTML5
    - Eventos de entrada
    - Vibração
    - Acelerômetro
    - *Storage*
    - disponibilização de assets (cotrole de tamanhos, cache, etc)
    - Applicações offline
    - Css media queries

#JUSTIFICATIVA

Tendo em vista que este trabalho busca mapear possíveis problemas do desenvolvimento multiplataforma em HTML, ele serve para apoiar e justificar decisões relativas ao desenvolvimento de jogos multiplataforma;
Por tratar cientificamente de aspectos importantes do HTML, este trabalho tem potencial apontar os pontos chave que necessitam de melhorias nas plataformas alvo, colateralmente colaborando para a melhoria do próprio HTML.
A opinião comum tende para soluções nativas em detrimento do desenvolvimento de jogos, este trabalho pretende desafiar esta concepção.

Por colaborar com o HTML, este trabalho ganha o peso da justificativas justificativas do próprio HTML (melhorar):

- O método de construção de aplicativo pela WEB permite uma única base de código o que habilita a disponibilidade de aplicativos com maior velocidade e significativas reduções nos custos.
- Muitos desenvolvedores estão familiarizados com as tecnologias da WEB ou apontam interesse na tecnologia; <!-- referenciar -->

#REVISÃO BIBLIOGRÁFICA
##HTML

Na vasta maioria dos casos utilizada para criar websites.

Trata-se de uma linguagem de marcação que define a estrutura de elementos que uma página deve ter de modo a fornecer conteúdo iterativo aos usuários. Todavia, a interatividade necessária para a construção de jogos animados em HTML é algo recente, anteriormente só se obtinha com a utilização de ferramentas proprietárias como o Adobe Flash e Microsoft Silverlight.

No HTML5 esta interatividade é alcançada através da utilização do recurso canvas, que é a tag HTML que permite-se "desenhar" dentro da página.

Atualmente o canvas suporta somente o desenvolvimento, sua implementação 3D está em desenvolvimento e chama-se WebGL. Por consequência do ainda baixo nível de especificação do WebGL, não optamos por o desenvolvimento de um aplicativo 3D.

O HTML5, por fatores como a excelente documentação, grande comunidade de desenvolvedores e usuários, e seu caráter multiplataforma, justifica-se para a construção de jogos. Segundo (KURYANOVICH, 2012) a beleza de desenvolver jogos com o padrão aberto WEB é que este nos delega a escrever uma vez e utilizar em qualquer lugar.

Apesar de a tecnologia  ainda não estar completa ela já demonstra grande robustez  e os padrões de desenvolvimento invariavelmente estão migrando para a perspectiva HTML5, segundo TABUSCA (2013) desenvolvedores que atualmente trabalham no ramo da Web, já podem visualizar que o novo ramo do desenvolvimento de aplicativos mobile está se aproximando mais e mais à alusiva proposta do HTML5.

##SOM

Falar dos problemas da API de áudio.

Atualmente, a maioria dos arquivos de áudio e vídeo rodam através de plugins (como o Adobe Flash). Não obstante, navegadores diferentes podem ter plugins diferentes. O HTML5 define dois novos elementos que especificam o padrão para imbuir áudio e vídeo em páginas Web: <audio> e <vídeo>.

##Gráficos

##ENTRADA DE COMANDOS

Na construção da grande maioria dos jogos é muitas vezes imprescindível alta flexibilidade na gestão de entrada de dados. Este fator muito se amplia na criação de jogos multiplataforma, seja através de teclado, tela sensível ou sensor de movimentos, o importante é oferecer a melhor experiência possível por plataforma. O HTML5 trata todos estes casos abstratamente na forma de eventos, os quais podem ser *escutados* através de *listeners*. Os eventos básicos são: *keydown* (tecla baixa), *keyup* (tecla solta) e *keypress* (tecla pressionada).

Para detectar suporte aos mais variados recursos do HTML5 no *browser* do cliente existem duas possibilidades. Pode-se implementar testes para cada funcionalidade utilizada abordando os detalhes de implementação de cada uma ou então fazer uso de alguma biblioteca especializada neste processo, o Modernizr é uma opção open-source deste tipo de biblioteca, este gera uma lista de booleanos sobre grande variedade dos recursos HTML5, dentre estes, geolocalização, canvas, áudio, vídeo e local storage.

##TECNOLOGIAS POLYFILL

Acarretando assim, que muitos *browsers* não implementam algumas funcionalidades, completa ou parcialmente especificadas, daí surge a necessidade dos polyfills (tecnologias de preenchimento de lacunas) para implementar estas camadas.

Algumas tecnologias desta classe são:

- Suporte à câmera;
- Suporte à calendário;

Uma das soluções mais promissoras *polyfill* é o PhoneGap ou Apache Cordova, esta ferramenta é *open-source* e possibilita utilizar de inúmeros recursos de hardware da grande maioria das produtoras de dispositivos móveis.

##FRAMEWORKS PARA DESENVOLVIMENTO DE JOGOS HTML5

Com o intuito de simplificar o processo para os desenvolvedores, auxiliando-os a focarem-se apenas nas *soluções* que estão criando, foram criados os frameworks para desenvolvimento de jogos. Não obstante, o intuito deste trabalho é desenvolver um jogo sem auxilio de frameworks pois estes muitas vezes escondem possiveis limitações, desenvolvendo *workarounds* próprios.


- enchant.js: dentre suas funcionalidades constam: orientação à objetos, orientado à eventos, contém um motor de animação, suporta WebGL e Canvas, etc;
- three.js: considerada leve, renderiza WebGL e Canvas, arquitetura procedural;
- quintus:

##Mobile first

Uma estratégia para criar jogos Web que funcionem adequadamente tanto nas resoluções de smartphones, quanto em resoluções de desktops foi a Mobile First. Como o nome indica, consiste em desenvolver primeiramente a aplicação para resoluções menores, geralmente 320px.

#Formas de disponibilizar o aplicativo nos dispositivos móveis

Links com manifestos
Crosswalk project
Phone gap

#TRABALHOS SIMILARES

(SILVA,2010), demostra a utilização de HTML5 para a criação de jogos simples, todavia seu trabalho não se foca nas diferenças entre uma plataforma e outra.

#METODOLOGIA

O primeiro passo consiste em definir as plataformas alvo do trabalho; devem ser plataformas mercadologicamente relevantes ao desenvolvimento de jogos, que possibilitem a criação de aplicativos em HTML e que acentuem o antagonismo de características.

Segue-se com a construção de uma lista com os recursos relevantes aos jogos que, empiricamente, sofrem ou são comummente ligados à limitações multipltaforma. Segue-se uma pesquisa para aprofundar teoricamente cada um dos rescursos, possivelmente elegendo novos.

Com um embaseamento teórico substancial, o próximo passo é a prototipação de um jogo multiplataforma que utilize recursos potencialmente limitados. Para ser considerado pronto, o protótipo deve ser testado, e estar funcional, com adaptações ou não, em cada uma das plataformas alvo definidas.

Com o protótipo concebido, o passo que segue é a enumeração, e descrição das limitações detectadas no processo de desenvolvimento e testes do jogo. Este detalhamento deve responder as seguintes perguntas:

quas as limitações foram encontradas no jogo?
em quais plataformas?
sob quais circunstâcias?
as limitações poduderam ser contornadas?
algum efeito colateral das limitações no jogo?
qual a categoria do problema: usabilidade, funcionalidade, manuteabilidade, portabilidade ou performance? (segundo ISO)

*Ideia*
Posso utilizar a iso para fazer perguntas mais diretas do que simples "limitações".

#RESULTADOS

##Limitações

###Versões
A grande maioria dos dispositivos atualmente no mercado utilizam obsoletas de seus softwares. Isso dificulta o desenvolvimento

###Offline
Refresh duplo para ver assets cacheados. Ver: http://buildnewgames.com/game-asset-management/

###Som
Api de som quebra quando executado diversas vezes

###Assets

Trafegar muitos assets deixa o sistema lento.
Possível contornar com loading e cache


###UI

É muito custoso desenvolver uma interface que pareça nativa em cada dispositivo sem a utilização de ferramentas especializadas.
Em termos gerais, trabalhar com proporções é possitivo. Não obstante há casos, como o dos botões de certo e errado que a propo

###Camera

###Acelerômetro

#CONCLUSÃO

Trabalhar com proporções parece ser uma alterantiva positiva.


#CRONOGRAMA
---

<!--
%colocar em ordem alfabética de autores
%separar autores por ; e sobrenome/nome por virgula
% mais de 3 autores: SOBRENOME, Nome et al.
% CITAÇÕES DIRETAS
%citações no padrão: "Texto citado" (GARCIA, 2006, p.380)
%para mais de 3 linhas de citação deve-se utilizar 4cm de margem
%esquerda em tamanho 10
% CITAÇÕES INDIRETAS
%
% Para Oliveira e Oliveira (2006, p.19), a finalidade de blablabla
%
-->
#Bibliografia

Reference 3 é uma ótima fonte de explicação de como tecnologias relacionadas as assunto funcionaml.
*The total development time and cost of HTML5 based appliction is 67% lesser than native application development which shows the cost effectiveness of HTML5 based appplication*

Reference 2 é uma ótimo trabalho para pegar ideias sobre como escrever as coisas.

*When designing a game it is important to be conscious of the player's perspective, as well as the flexibility it allows the developer.*

Reference 7 is  a good font from feature detection systems.

HTML5: A blessing or a curse
http://www.develop-online.net/tools-and-tech/html5-a-blessing-or-a-curse/0117393

5 common mistakes that html5 developers make
http://www.toptal.com/html5/top-5-mistakes-that-html5-developers-make


#Apêndices

##Conversores para HML5
Além da possibilidade de escrever em HTML, pode-se optar pela alternativa de utilizar-se um conversor de linguagens.

##WebGL

##METODOLOGIA DE DESENVOLVIMENTO DE SOFTWARE PARA A CONSTRUÇÃO DE GAMES <!-- incrementar e colocar no apêndice -->

Como o jogo é um software complexo demanda-se a utilização de metodologias de engenharia de software, dentre os processos de software mais conhecidos academicamente destacamos:

    - OpenUP: este é bem detalhado e de característica iterativa e incremental. Gerando assim, um levantamento mais apurado dos riscos, requisitos e outros detalhes do sistema e a criação incremental do sistema, com requisitos maleáveis;
    - Cascata: processo antigo, caracteriza-se por ser pouco maleável aos requisitos mapeados posteriormente ao processo de análise;
    - Processo ágil - SCRUM: sua utilização é flexível e sendo um método àgil especifica pouca documentação, ou como dizem, somente a documentação necessária, este processo é bem conhecido e aceito na comunidade de desenvolvimento de software. Suas principais características são: divisão do processo de desenvolvimento através uma série de iterações chamadas sprints. Cada sprint consiste tipicamente em duas a quatro semanas. É bem aplicado a projetos que mudam constantemente e que demandam rápidas adaptações;
    - Processo ágil – XP: tem muitas características similares ao SCRUM por este também ser um processo ágil. Dentre suas especifidades destaca-se: versões frequentes, pequenos ciclos de desenvolvimento que buscam aumentar a produtividade, indroduzem checkpoints onde os clientes podem agregar novas funcionalidades;

##AMBIENTES PARA DESENVOLVIMENTO HTML5

Na pesquisa efetuada sobre estes frameworks full stack foram identificadas as seguintes tecnologias:
    - segundo (PRADO, 2012) o GWT é um framework essencialmente para o lado do cliente (cliente-side) e dá suporte à comunicação com o servidor através de RPCs Remote Procedure Calls (ou procedimento de chamadas remotas). Ele não é um framework para aplicações clássicas da web, pois deixa a implementação da aplicação web parecida com implementações em desktop. Este é utilizado em muitos produtos de grande porte como o Google Adwords e Google Wallet. Outra característica interessante é que a plataforma opera sobre a licença Apache versão 2;
    - construct 2 -  é um editor na nuvem focado para usuários sem conhecimento prévio em programação orientado a comportamento;
    - PlayCanvas - é uma plataformas para a construção de jogos 3D na nuvem, desenvolvida com foco em performance. Permite a hospedagem, controle de versão e publicação dos aplicativos nela criados, possibilita também a importação de modelos 3D de softwares populares como: Maya, 3ds Max e Blender;
    - o ambiente HTML5 Development Environment (ambiente de desenvolvimento HTML5) da Intel, este fornece uma solução na nuvem, completa para o desenvolvimento em plataforma cruzada, com serviços de empacotamento, serviços para a criação e testes de aplicativos com montagem de interfaces drag and drop (Intex XDK) e biliotecas para a construção de jogos utilizando aceleração de hardware, o que garante até duas vezes mais performance que aplicativos mobile baseados em Web tradicionais. Esta solução é free, open source e funciona  através de um plugin para o Google Chrome, ou seja, o desenvolvimento também é multiplataforma e devido ao fato de os binários ficarem hospedados na nuvem, possibilitou a  Intel criar compiladores para cada uma das plataformas disponibilizadas pelo PhoneGap, que é o framework polyfill utilizado na solução.

#HTTP


##frameworks de desenvolvimento de jogos em HTML5;
