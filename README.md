# nova_tendencia
Destinado a criação da loja virtual Nova tendencia 
# Documentação dos códigos do projeto 
## HTML
É uma linguágem de marcação, que permite so navegador web entender sobre a 
estrutura do nosso site. (Menu, Tabela, Imagens, etc.)

### Tags HTML

- DOCTYPE html : Informar que o arquivo é do tipo html.
- html: informa  começo dos códigos em html.
- /html: informa o final dos códigos html.
- head : utilizado para configurção da página.
- /head : fim de configuração da página.
- meta : utilizado para configurações de idioma, responsividade e segurança.
- title : utilizada para definir o nome que aparece na aba do navegador.
- link: utilizada para conectar nosso página com outros arquivos/ url externas.
- href : local onde colocaremos endereços de arquivos, sites, ícones, imagens, etc.
- body : informa o inicio do corpo do site. É nessa área que ficaram os códigos de tudo
  que é mostrado no site.
- div : destinada a dividir/indicar partes da tela. Com ela a gente cria os espaços utilizados
  pelos elementos.
- section : também utilizada para criar seções/ espaços na nossa tela.
- h1, h2, h3, h4, h5, h6 : utilizadas para criar títulos.
- form : indica que será adicionado um formulário dentro da nossa página.
- label : texto dos formulários ( só para leitura), como por exemplo o nome dos campos.
- input : caixas de digitação, que  as pessoas escrevam no formulário.
- button : indica um botão. Ele pode ser de 2 tipos:
  Submit : Utilizado para enviar dados para outra tela ou para o banco de dados.
  button : faz ações normais.
- a : utilizado para criar elementos clicáveis/links.
- img : utilizada para inserir imagens e icones na página.
- video: utilizada para inserir videos dentro da página.
- p : utilizado para criar parágrafos.
- class : permite criar classes para as tags. Essas classes utilizamos para configurar o css daquele elemneto.
- header : utilizado para criar cabeçalhos.
- footer : utilizado para criar o rodapé.
- script : indica códigos do javascript/back-end
- alt : serve para adicionar um texto alternativo caso a imagem ou video não esteja disponível.
- placeholder : texto que desaparece ao digitar dentro de um input.
- nav : utilizada para criar barras/menus ou áreas de navegação 
- main : utilizada para informar os códigos principais do site.
- i : destinada a parte de inserção de icones
- li :  utilizado para criar listas.
- table : criação de tabelas:
- option : utilizados para menu de opções.
- selection :  utilizados para criar elementos selecionáveis.
- scr : utilizado para informar o caminho de um arquivo.

  ## Css
É uma folha de estilização dos elementos da página, aqui são configuradas as cores, tamanhos, espaços, etc.

  ### Elementos de estilos

- .nomedaclasse{} : esta parte é destinada a informar qual classe que vai receber as configurações de estilo,
    que ficam dentro das chaves.
- backgorund-color: utilizado para definir a cor de fundo do elemento.
- padding : utilizado para definir o espaço interno de um elemento (geralmente usado em divs, header, footer
  button, e outros elementos  que possuem uma área.
- color : utilizado para colocar cor no texto.
- align-items : utilizado para alinhar os elementos que estão dentro do elemento da classe.
- center : centralizar
- bottom : parte inferior/baixo.
- top : parte superior / encima.
- left : esquerda.
- right : direita.

- display : utilizado para redimensionar o tamanho dos elementos ( geralmente utilizamos o flez nele)
- justify-content: define a posição do elemento. (end - fim, start - inicio, center - meio, space-between - coloca os elementos.
  um ao lad do outro com espaços iguais os separando). 
- font-size: configura o tamanho da fonte do texto.
- font-weight : configura estilo da fonte ( bold - negrito, semibold - negrito mais fraco).
  
- width : define  a largura em px (pixels).
- heigth : define a altura em px (pixels).
- max-width : larrgura máxima.
- max-height : altura máxima.

- margin : define as margens ao redor do elemento.

- margin-top : define margem para o topo.
- margein-bottom : define margem para baixo.
- margin-left : define margem para esquerda.
- margin-right : define margm para direita.
- 
- border : define se o elemento vai ter borda.
- border-radius : define o arredondamento da borda.
- border-color : define a cor da borda.
- border-width: define as largura da borda em pixels.

- gap : define espaço entre elementos.
- cursor : define as configurações do cursor do mouse ao clicar/passar pelo elemento. Se vai aparecer ponteiro,  seta , etc.
- font-family : define o tipo da fonte.
- transition : define transições/ animações para os elementos.
- hidden : esconde/ oculta o elemento.
- box-shadow : aplica sombras sobre o elemento.
- text-align : alinhamento do texto. 
- outline: define configurações de linha.
- z-index : controla a ordem de sobreposição de elementos alinhados.
  Informa se o elemento vai ficar fixo no lugar, se ele é o primeiro, se
  ele fica atrás, etc.

## Bootstrap 
É um framework que já vem com várias classes estilizadas de css, prontyas para uso. 
Então ao invés de ficar configurando o arquivo css, você só prcisa chamar o nome das classes 
do  bootstrap dentro do html que ele já configura os elementos .

### Classes do Bootstrap 

- container :  deixa a div no centro da tela
- container-fluid : deixa a div se espandir junto com a tela
- row : faz com que os elementos dentro da div fiquem na mesma linha.
- col-1 até o 12 : define quais colunas o elemento ocupa
- w-100 : define que o elemento ocupa 100% da largura.
- h-100 : define que o elemento ocupa 100% da altura.
- bg-white : define cor de fundo branca.
- mb-1 : define margem para baixo.
- mt-1 taté o 5 : define margem para o topo. 



