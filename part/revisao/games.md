#  REVISÃO BIBLIOGRÁFICA

##  JOGOS

Segundo LEMES (2009, pg 126)
> jogo digital constitui-se em uma atividade lúdica composta por uma série de ações e decisões, limitada por regras e pelo universo do game, que resultam em uma condição final. O game é uma hipermídia por excelência e tem na interatividade mediada por aparatos tecnológicos, seu papel fundamental. Essa característica interativa é a dependência comandos sobre uma interface digital, que faz com que o projeto digital desta natureza não seja um filme ou uma animação, e sim um game.

Quando desenvolvendo qualquer jogo, o desenvolvedor tem que considerar seu usuário. O objetivo é maximizar a satisfação de seu usuário.  Jogos em plataformas móveis trazem um novo conjunto de desafios para produtores de jogos. Um destes desafios é fornecer feedback suficiente para o player pois o dispositivo é limitado em proporções, som, tela etc. Já jogos multiplataforma em HTML5 tem a dificuldade adicional de ter que comportar, na mesma base, o feedback adequando para cada plataforma móvel.

A interface tem que ser o mais intuitiva o possível. No caso de dispositivos móveis, quanto menos gestos necessários melhor.
Tornar previsível causa e efeito é uma boa característica para os jogos.
Os desenvolvedores tem que evitar fazer o jogo para eles mesmos. E pela falta de crítica os designs tendem a ser ruins. Afinal o que os jogadores querem? LEMES (2009, pg XX) aponta alguns fatores procurados pelos usuários de jogos: Desafio, socializar, experiência solitária, respeito e fantasia.

<!-- Mencionar algum jogo (como WOW) e como ele faz para prender a atenção dos usuários.  Candy crush saga -->

##  GÊNEROS

LEMES (2009, p. 43)  aponta os seguintes gêneros de jogos.

- Adventure
- Ação
- RPG
- Estratégia
- Simuladores
- Esportes
- Luta
- Casuais
- 'God' Games
- Educacionais
- Puzzle
- Online / Massive Multiplayer

##  MECÂNICA DOS JOGOS

A mecânica é composta pelas regras do jogo. Quais as ações disponíveis aos usuários, é fortemente influenciada pela categoria do jogo em questão.

###ARQUITETURA DOS JOGOS

Existem algumas estratégias relativas às plataformas alvo de como efetuar construção de jogos.

####DESENVOLVIMENTO DE JOGOS NATIVOS

Habilita a melhor experiência de usuário pois permite utilizar ao máximo os recursos e funcionalidades dos aparelhos. Porém, devido a cada plataforma conter seu próprio sistema operacional, com seus próprios *SDK's* totalmente incompatíveis, os desenvolvedores são forçados a desenvolver uma versão do jogo para cada plataforma alvo. Além da replicação dos fontes, esta abordagem requer mais pessoas, e maior custo com possivelmente parte do mercado não atendido de qualquer forma.

####DESENVOLVIMENTO DE JOGOS WEB

Necessitam de apenas uma base de código e pode rodar em todas as plataformas.
Contém a mais vasta gama de desenvolvedores e muitos interessados em aprendê-la. Seus custos também são inferiores, aos do desenvolvimento nativo – pois demandam menos trabalhadores/hora devido a inexistência de duplicação da base.
Não obstante, esta opção – devido a incompletude da especificação de padrões – carece de alguns recursos e outros não estão completamente implementados. Performance também pode ser um limitador, visto que estas tecnologias são executadas através de um navegador, criando uma camada de abstração superior à das API's nativas que fazem chamadas ao sistema diretamente.

####DESENVOLVIMENTO DE JOGOS HÍBRIDOS

Jogos híbridos são jogos geralmente desenvolvidos com tecnologias da web: beneficiando-se da não necessidade de duplicação. Rodam dentro de um *container* nativo – possibilitando o acesso à chamadas do sistema, recursos de hardware, eliminando muitias das dificuldades da web.
Em certo sentido, beneficiam-se do melhor de ambas as metodologias anteriores.
Phone game é uma ferramente deste tipo. Permite acessar os dispositivos utilizando sua API JavaScript. Funciona encapsulando todo o código HTML5. Este tipo de abordagem permite acessar câmera, acelerômetro, GPS, etc.

