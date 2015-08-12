

##JAVASCRIPT

EMACScript, melhor conhecido como JavaScript, criada por Brendan Eich
em 1992, é a linguagem da Web. Devido a tremenda popularidade entre
comunidade de desenvolvedores a linguagem foi abraçada pela W3C e
atualmente é um dos componentes da *Open Web Platform*.

As definições da linguagem são descritas na especificação ECMA-262.
Esta possibilitou o desenvolvimento de outras implementações além da
original - *SpiderMonkey* - como o Rhino, V8 e TraceMonkey; bem como
outras linguagens similares como JScript da Microsoft e o ActionScript
da Adobe.

JavaScript é uma linguagem de script. Segundo a Ecma Internacional
2012:

> "Uma linguagem de script é uma linguagem de programação que é
usada para manipular e automatizar os recursos presentes em um dado
sistema. Nesses sistemas funcionalidades já estão disponíveis
através de uma interface de usuário, uma linguagem de script é
um mecanismo para expor essas funcionalidades para um programa
protocolado."

A intenção original era utilizar o JavaScript para dar suporte aos já
bem estabelecidos recursos do HTML, como para validação, alteração
de estado de elementos, etc. Em outras palavras, a utilização do
JavaScript era opcional e as páginas da web deveriam continuar
operantes sem a presença da linguagem.

Entretanto, com a construção de projetos Web cada vez mais complexos,
as responsabilidades delegadas ao JavaScript aumentaram a ponto que a
grande maioria dos sistemas web não funcionarem sem ele. Não obstante,
JavaScript não evoluiu ao passo da demanda e muitas vezes carece de
definições expressivas, completude teórica, e outras características
de linguagens de programação mais bem estabelecidas, como o C++ ou
Java (Barnett, 2013). A nova versão do JavaScript, o JavaScript 6, é
um esforço nessa direção. JavaScript 6 ou *EMACScript Harmonia*,
contempla vários conceitos de orientação a objetos como classes,
interfaces, herança, tipos, etc.

Estes esforços de padronização muitas vezes não são rápidos
o suficiente para produtores de software web, demora-se muito até
obter-se um consenso sobre quais as funcionalidades desejadas em
determinada versão e seus detalhes de implementação. Outrossim, uma
vez definidas as especificações, é necessário que os distribuidores
do JavaScript implementem o especificado.

Alternativamente, existe uma vasta gama de conversores de código -
*transpilers* - para JavaScript; possibilitando programar em linguagens
formais e posteriormente gerar código JavaScript. Não obstante,
essa alternativa tem seus pontos fracos, necessita-se de mais tempo
de depuração , visto que o JavaScript gerado não é conhecido
pelo desenvolvedor, e provavelmente o código gerado não será tão
otimizado, nem utilizará os recursos mais recentes do JavaScript.

Mesmo com suas fraquezas amplamente conhecidas, JavaScript está
presente em praticamente todo navegador atual. Sendo uma espécie de
denominador comum entre as plataformas. Essa onipresença torna-o
integrante vital no processo de desenvolvimento de jogos multiplataforma
em HTML5. Vários títulos renomeados já foram produzidos que fazem
extensivo uso de JavaScript, são exemplos: Candy Crush Saga, Angry
Birds, Dune II, etc.

Jogos Web são escritos na arquitetura cliente servidor, JavaScript pode
rodar em ambos estes contextos, para tanto, sua especificação não
define recursos de plataforma. Distribuidores do JavaScript complementam
a o JavaScript com recursos específicos para suas plataformas alvo.
Por exemplo, para servidores, define-se objetos de terminal, acesso a
arquivos e dispositivos, etc. No contexto de cliente, são definidos
objetos como janelas, frames, DOM, etc.

Para o navegador o código JavaScript geralmente é disposto no elemento
``script`` dentro de arquivos HTML. Quando os navegadores encontram esse
elemento eles fazem a requisição para o servidor e injetam o código
retornado no documento, e a não ser que especificado de outra forma,
iniciam sua execução.

### ASM.JS

Asm.js é um subconjunto da sintaxe do JavaScript a qual permite grandes
aumentos de performance quando em comparação com JavaScript normal.
No contexto dos jogos performance é usualmente um recurso estimável,
asm.js consegue-o supra utilizando recursos que permitam otimizações
antes do tempo *ahead of time optimizations*. Entretanto, não é
trivial escrever código em asm.js e geralmente a geração de código
asm.js é feita através da transpilação de outras linhagens como C.

> Muita da performance adicional em relação ao JavaScript é devido
a consistência de tipo e a não existência de um coletor de lixo
(memória é gerenciada manualmente através de um grande vetor). Esse
modelo simples desprovido de comportamento dinâmico, sem alocação
e desalocação de memória, apenas um bem definido conjunto de
operações de inteiros e flutuantes possibilita grade performance e
abre espaço para otimizações.

##AJAX

### AJAX LIMITATIONS > In pre-HTML5 browsers, pages dynamically created
using successive Ajax requests did not automatically register themselves
with the browser's history engine, so clicking the browser's "back"
button may not have returned the browser to an earlier state of the
Ajax-enabled page, but may have instead returned to the last full page
visited before it. Such behavior — navigating between pages instead of
navigating between page states — may be desirable, but if fine-grained
tracking of page state is required, then a pre-HTML5 workaround
was to use invisible iframes to trigger changes in the browser's
history. A workaround implemented by Ajax techniques is to change
the URL fragment identifier (the part of a URL after the "#") when
an Ajax-enabled page is accessed and monitor it for changes.[12][13]
HTML5 provides an extensive API standard for working with the browser's
history engine.[14] > Dynamic Web page updates also make it difficult
to bookmark and return to a particular state of the application.
Solutions to this problem exist, many of which again use the URL
fragment identifier.[12][13] The solution provided by HTML5 for the
above problem also applies for this.[14] > Depending on the nature of
the Ajax application, dynamic page updates may interfere disruptively
with user interactions, especially if working on an unstable Internet
connection. For instance, editing a search field may trigger a query
to the server for search completions, but the user may not know that a
search completion popup is forthcoming, and if the internet connection
is slow, the popup list may show up at an inconvenient time, when the
user has already proceeded to do something else. > Excluding Google,[15]
most major Web crawlers do not execute JavaScript code,[16] so in
order to be indexed by search engines, a Web application must provide
an alternative means of accessing the content that would normally be
retrieved with Ajax. It has been suggested that a headless browser may
be used to index content provided by Ajax-enabled websites.[17] > Any
user whose browser does not support JavaScript or XMLHttpRequest, or
simply has this functionality disabled, will not be able to properly use
pages which depend on Ajax. Devices such as smartphones and PDAs may
not have support for the required technologies, though this is becoming
less of a problem. The only way to let the user carry out functionality
is to fall back to non-JavaScript methods. This can be achieved by
making sure links and forms can be resolved properly and not relying
solely on Ajax.[18] > Similarly, some Web applications that use Ajax
are built in a way that cannot be read by screen-reading technologies,
such as JAWS. The WAI-ARIA standards provide a way to provide hints in
such a case.[19] Screen readers that are able to use Ajax may still not
be able to properly read the dynamically generated content.[20] The
same origin policy prevents some Ajax techniques from being used across
domains,[8] although the W3C has a draft of the XMLHttpRequest object
that would enable this functionality.[21] Methods exist to sidestep this
security feature by using a special Cross Domain Communications channel
embedded as an iframe within a page,[22] or by the use of JSONP. > The
asynchronous callback-style of programming required can lead to complex
code that is hard to maintain, to debug[23] and to test.[24]

## ALTERNATIVAS AO JAVASCRIPT

Abaixo seguem algumas tecnologias que servem de alternativa ao
JavaScript.

### TYPESCRIPT

Conhecido como uma versão estendida do JavaScript que compila para
JavaScript normal.

### DART

Google. DartVM é uma máquina virtual que está embebido no Google
Chrome. Significante melhorias em performance quando comparado
ao JavaScript. Existe o dart2js que compila código em Dart para
JavaScript.
