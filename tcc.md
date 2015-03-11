<!--

Estrutura

Ideias:
Contra argumentos são interessantes na introdução
Pesquisar sobre isos (9126) de qualidade para ver parmetros de avaliação (pensar melhor)
talvez seja mais importante desenvolver o jogo antes definir quais os aspectos com problemas de plataforma
mencionar sobre media queries do css3
Devo escolher as tecnologias depois de escolher as plataformas alvo
webgl é uma boa... estudar mais!
cocoonJs

Detalhar as plataformas alvo (talvez na introdução (como referência 3))

Dúvidas:

Vale utilizar experiência pessoal como argumento para escolha de tecnolgia?
Estudar sobre a frustração geradas pela vasta game de tecnologias emergentes?  (referência 2 é um caso disso (na conclusão)) 
Devo ressaltar na conclusão que eu não tinha nenhuma experiência inicial com desenvolvimento de jogos web?

Limitações de aplicações não nativas


``````

Dúvidas:
Posso utilizar livros como trabalhos similares? - sim
devo coletar as limitações que podem ser contornadas com workarounds? - colocar demonstra aprofundamento
#Devo procurar e mencionar soluções para os problemas que eu encontrar?
O "multiplataforma" deve focar apenas no desenvolvimento mobile ou ser mais genérico? - engloba mais de uma plataforma, especificar no objetivo: tablets, celular, kkkk
Desenvolver o protópito com html5 puro!

Comparar o HTML5 com ele mesmo !!!!!
Considerações
formatar logo.

TODO this week
esboçar a metodologia
fazer levantamento de tudo o que o HTML5 provê que tem deficiências de multiplataforma
remover o 5 do HTML (opt)

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

#CONTEXTUALIZAÇÃO <!-- ou introdução -->

O senso comum sobre o HTML para o desenvolvimento de games geralmente segue a seguinte estrutura: "HTML é fantástico, mas...", depois do mas as coisas variam de acordo com a experiência empírica ou opinião alheia. O objetivo deste trabalho é constatar o quanto deste mas é verdadeiro através da concepção e posterior análise do processo de desenvolvimento de um jogo multiplataforma em HTML.


Contra-argumentar
As tecnologias da web evoluem muito rapidamente, talvez seja importante falar da aplicabilidade de trabalhos científicos nessa área visto que suas verdades podem se deterirorar muito rapidamente.


A palavra HTML5 se tornou um conceito guardachuva para englobar as tecnologias da web (referênce 2)

Um trabalho completo sobre o assunto requeriria um comparativo entre jogos nativos e jogos multiplataforma.

Jogos para plataforma inibem concorrência, você acaba desenvolvendo para umas poucas maiores marcas.

#PROBLEMA

<!-- referenciar -->
A falta de disponibilidade de trabalhos acadêmicos, bem como a carência de definições concretas sobre a viabilidade da atual versão do HTML5 - quando utilizado no desenvolvimento de jogos, acaba por monopolizar à construção de jogos nativos as plataformas alvo. Esta realidade corrobora para uma espécie de consenso à respeito da inviabilidade de construir-se jogos competitivos em HTML5.

Os custos adicionais no ciclo vida de um jogo nativo, para diversas plataformas, é muito alto para ser considerado um problema trivial.

#OBJETIVOS
##OBJETIVO GERAL

Busca-se apontar possíveis limitações no processo de desenvolvimento de jogos em plataformas variadas oriundas do atual estado de definição e implementação do HTML nas plataformas alvo. O comparativos das limitações serão feitas contra as implementações do HTML nas plataformas alvo, o objetivo deste trabalho não é comparar o HTML com outras tecnologias de desenvolvimento de jogos como FlashPlayer ou alternativas desktop..

##OBJETIVOS ESPECÍFICOS

    Estudar as limitações de desenvolvimento de jogos nas plataformas: Smarthphones com as últimas versões estáveis dos sistemas Android e IOS, e a última versão estável dos navegadoes Firefox e Google Chrome para a versão desktop.

###Aspectos que podem sofrer limitações de plataforma
    - Debugging
    - Canvas
        - Resizing via canvas vs DOM
    - Audio (reference 2)
    - Performance
    - Empacotadores HTML5
    - Eventos de entrada
    - Vibração
    - Acelerômetro

#JUSTIFICATIVA
    Tendo em vista que este trabalho busca mapear agnosticamente os problemas do desenvolvimento multiplataforma em HTML, ele serve também para apoiar decisões, e justificar decisões relativas ao desenvolvimento de jogos multiplataforma.
    Por tratar cientificamente de aspectos importantes do HTML, este trabalho tem potencial apontar os pontos chave que necessitam de melhorias nas plataformas alvo, colateralmente colaborando para a melhoria do próprio HTML.
    Por colaborar com o HTML, este trabalho ganha o peso da justificativas justificativas do próprio html (melhorar):
    - O método de construção de aplicativo pela WEB permite uma única base de código o que habilita a disponibilidade de aplicativos com maior velocidade e significativas reduções nos custos.
    - Muitos desenvolvedores estão familiarizados com as tecnologias da WEB ou apontam interesse na tecnologia; <!-- referenciar -->
    A opinião comum tende para soluções nativas em detrimento do desenvolvimento de jogos, este trabalho pretende desafiar esta concepção.

#REVISÃO BIBLIOGRÁFICA

##HTML

Na vasta maioria dos casos utilizada para criar websites.

Trata-se de uma linguagem de marcação que define a estrutura de elementos que uma página deve ter de modo a fornecer conteúdo iterativo aos usuários. Todavia, a interatividade necessária para a construção de jogos animados em HTML é algo recente, anteriormente só se obtinha com a utilização de ferramentas proprietárias como o Adobe Flash, Microsoft Silverlight e Oracle JavaFX.

No HTML5 esta interatividade é alcançada através da utilização do recurso canvas, que é a tag HTML que permite-se "desenhar" dentro da página.

Atualmente o canvas suporta somente o desenvolvimento, sua implementação 3D está em desenvolvimento e chama-se WebGL. Por consequência do ainda baixo nível de especificação do WebGL, não optamos por o desenvolvimento de um aplicativo 3D.

O HTML5, por fatores como a excelente documentação, grande comunidade de desenvolvedores e usuários, e seu caráter multiplataforma, justifica-se para a construção de jogos. Segundo (KURYANOVICH, 2012) a beleza de desenvolver jogos com o padrão aberto WEB é que este nos delega a escrever uma vez e utilizar em qualquer lugar.

Apesar de a tecnologia  ainda não estar completa ela já demonstra grande robustez  e os padrões de desenvolvimento invariavelmente estão migrando para a perspectiva HTML5, segundo TABUSCA (2013) desenvolvedores que atualmente trabalham no ramo da Web, já podem visualizar que o novo ramo do desenvolvimento de aplicativos mobile está se aproximando mais e mais à alusiva proposta do HTML5.

##SOM E VÍDEO

Falar dos problemas da api de áudio.

Atualmente, a maioria dos arquivos de áudio e vídeo rodam através de plugins (como o Adobe Flash). Não obstante, navegadores diferentes podem ter plugins diferentes. O HTML5 define dois novos elementos que especificam o padrão para imbuir áudio e vídeo em páginas Web: <audio> e <vídeo>.

##ENTRADA DE COMANDOS

Na construção da grande maioria dos jogos é imprescindível alta flexibilidade na gestão de entrada de dados, seja através de teclado, tela sensível, mouse entre outros. O HTML5 trata todos estes casos abstratamente na forma de eventos. Os eventos básicos são: \textit{keydown} (tecla baixa), \textit{keyup} (tecla solta), e \textit{keypress} (tecla pressionada). Basta ao desenvolvedor testar qual caractere gerou o evento em seu laço principal para identificar o que aconteceu.

Para detectar suporte aos mais variados recursos do HTML5 no browser do cliente existem duas possibilidades. Pode-se implementar testes para cada funcionaidade utilizada abordando os detalhes de implementação de cada uma ou então fazer uso de alguma biblioteca especializada neste processo, o Modernizr é uma opção open-source deste tipo de biblioteca, este gera uma lista de booleanos sobre grande variedade dos recursos HTML5, dentre estes, geolocalização, canvas, áudio, vídeo e local storage.

##TECNOLOGIAS POLYFILL

O HTML5 por não ser um padrão completamente especificado, deixa lacunas de suporte em plataformas, tanto para a gestão de hardware quanto de software. Acarretando assim, que muitos browsers não implementam algumas funcionalidades, completa ou parcialmente especificadas, daí surge a necessidade dos polyfills (tecnologias de preenchimento de lacunas) para implementar estas camadas.

Algumas tecnologias desta classe são:

- Suporte a SVG - Scalable Vector Graphics (vetor de gráficos escaláveis): svgweb, Raphael, canvg, fabric.js;
- Suporte a vídeo: video.js, SublimeVideo, html5media, LeanBack Player;
- Suporte a Geo-localização: Webshims Lib, geolocaltion polyfill, GeoLocation-API-Polifill;
- Suporte a Web Storage (armazenamento na web): Amplify.js, storage polyfill, session storage;

Uma das soluções mais promissoras polyfill é o PhoneGap ou Apache Cordova, esta ferramenta é open source e possibilita utilizar de inúmeros recursos de hardware da grande maioria das produtoras de dispositivos móveis.

<!-- remover essa referência (sem ano e página) -->
Segundo JÚNIOR  utilizando as linguagens de desenvolvimento Web HTML, CSS e Javascript. Ele fornece um conjunto de API's para acesso a funções nativas do Sistema Operacional e do hardware do dispositivo, utilizando Javascript. A proposta do PhoneGap é essencial para unir as especificidades de Web com detalhes de sistemas operacionais tanto de hardware como de software.

##FRAMEWORKS PARA DESENVOLVIMENTO DE JOGOS HTML5 <!-- mencionar mas evitar o aprofundamento pois o escopo é html puro -->

Visto que a gestão de uma grande gama de variáveis faz-se necessária durante o o processo de criação de jogos foram criados frameworks para auxiliar o processo.

-enchant.js: dentre suas funcionalidades constam: orientação à objetos, orientado à eventos, contém um motor de animação, suporta WebGL e Canvas, etc;
-three.js: considerada leve, renderiza WebGL e Canvas, arquitetura procedural;
-quintus:

##EMPACOTADORES

##ESPECIFICIDADES DAS PLATAFORMAS

#TRABALHOS SIMILARES


(SILVA,2010), demostra a utilização de HTML5 para a criação de jogos simples, todavia seu trabalho não se foca nas diferenças entre uma plataforma e outra.

#METODOLOGIA

O primeiro passo consiste em definir as plataformas alvo do trabalho; devem ser plataformas mercadologicamente relevantes ao desenvolvimento de jogos, que possibilitem a criação de aplicativos em HTML e que acentuem o antagonismo de características.

Segue-se com a construção de uma lista com os recursos relevantes aos jogos que, empiricamente, sofrem ou são comummente ligados à limitações multipltaforma. Segue-se uma pesquisa para aprofundar teoricamente cada um dos rescursos, possivelmente elegendo novos.

Com um embaseamento teórico substancial, segue-se a prototipação de um jogo multiplataforma que utilize recursos potencialmente limitados. Para ser considerado pronto, o protótipo deve ser testado, e estar funcional, com adaptações ou não, em cada uma das plataformas alvo definidas.

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

#CONCLUSÃO

#CRONOGRAMA

Identificador& Tarefa &  Duração & Início & Término
1 & Concepção & 5 dias & 1 agosto & 7 agosto
2 & Elaboração & 15 dias & 8 agosto & 29 agosto
3 & Construção & 15 dias & 30 agosto & 19 setembro
4 & Construção & 10 dias & 31 agosto & 3 outubro
  & Total & 45 dias & 1 agosto & 3 outubro

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

HTML5: A blessing or a curse
http://www.develop-online.net/tools-and-tech/html5-a-blessing-or-a-curse/0117393

5 common mistakes that html5 developers make
http://www.toptal.com/html5/top-5-mistakes-that-html5-developers-make


KURYANOVICH, Egor; SHALOM Shy, et all.
**The State of Open Web Games**
Addison Wesley, Massachusetts, pg. 12,
ISBN: 978-1-4302-3978-9,
2012.

SILVA, Jucimar Maria Júnior; FIRMINO, Emiliano Carlos M.
Desenvolvimento de jogos em HTML5
Coordenação da engenharia da Computação,
Univerisdade Federal do Amazonas,
Amazonas,
2010.

SHANKAR, Aditya Ravi .
**Pro HTML5 Games**
ISBN: 978-1-4302-4710-4, p. 39-64,
2012.

TABUSCA, Alexandru
**THE NEW “UNIVERSAL TRUTH” OF THE WORLD WIDE WEB**.
American University, School of Computer Science for
Business Management, Bucharest, 2013

FRANZINI, Fernando
**Nova tendência de aplicativos móveis web**  Disponível em:
[http://www.infobase.com.br/nova-tendencia-de-aplicativos-moveis-web/]. Acesso em: jun,
2013.

PRADO, Ely Fernando
**Introdução ao Desenvolvimento de Games com GWT e HTML5**
Departamento de Computação, Universidade Federal de São Carlos (UFSCar) São Carlos, SP, 2012.

RENYO Emanuel Montero
**MODEL-DRIVEN GAME DEVELOPMENT: 2D PLATFORM GAME PROTOTYPING**
Departamento de Sistemas Informáticos y Computación. Universidad Politécnica de Valencia,Valencia, España, 2006.

WEINTRAUB, Seth
**Industry first: Smartphones pass PCs in sales**
Disponível em: http://tech.fortune.cnn.com/2011/02/07/idc-smartphone-shipment-numbers-passed-pc-in-q4-2010/
Acesso em: Jul 2012.

#Apêndices

##Canvas (detalhamento)

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
