## DWIII_11 - Container IoC e Injeção de Dependências no Spring Framework:
Este documento explica como o Spring Framework facilita o desenvolvimento de aplicações Java através da Inversão de Controle (IoC) e Injeção de Dependência (DI).
###  Inversão de Controle (IoC):
É como se você tivesse um assistente que cuida da criação e organização dos objetos (componentes) da sua aplicação. Você não precisa se preocupar em como eles são feitos, apenas diz ao assistente o que você precisa e ele te entrega.

### Injeção de Dependência (DI):
É quando o Spring automaticamente conecta os componentes da sua aplicação, como peças de um quebra-cabeça. 
Por exemplo, se um componente precisa acessar um banco de dados, o Spring se encarrega de fornecer essa conexão.

**Anotações:** O documento detalha anotações como `@Configuration`, `@Component`, `@Bean`, `@Autowired`, que são como etiquetas que você coloca nos seus componentes para dizer ao Spring como eles devem se comportar e se conectar.

## DWIII_10 - Criando Projeto em Spring Boot:
Este documento é um guia passo a passo para criar um projeto Spring Boot do zero, sem usar a ferramenta Spring Initializr.

**Configuração manual:** Você aprenderá a configurar o arquivo `pom.xml` (para projetos Maven), que é como um mapa que lista todos os "ingredientes" (bibliotecas) que seu projeto precisa.

**Hello World:** O documento te guia na criação de uma aplicação web simples que exibe "Olá, Mundo!" quando acessada no navegador.

**Thymeleaf:** Você aprenderá a usar o Thymeleaf, uma ferramenta que permite criar páginas web dinâmicas, onde o conteúdo é gerado com base em dados do seu aplicativo.

## DWIII_09 - Spring Boot e Spring Framework - Introdução:
Este documento apresenta uma visão geral do Spring Framework e do Spring Boot.

**Spring Framework:** É como uma caixa de ferramentas com diversas funcionalidades para construir aplicações Java, desde acesso a banco de dados até desenvolvimento web.

**Spring Boot:** É uma extensão do Spring Framework que facilita ainda mais a criação de aplicações, com configurações automáticas e recursos prontos para uso.

**Spring Initializr:** É uma ferramenta online que te ajuda a criar um projeto Spring Boot com as configurações básicas e as bibliotecas que você precisa.
Serviços Web e Protocolos:

## DWIII_08 - Serviços Web - Fundamentos e Protocolos: 
Este documento aborda os conceitos básicos de serviços web e os protocolos `HTTP` e `HTTPS`.

**HTTP:** É como um idioma que seu navegador usa para conversar com servidores web. Quando você digita um endereço no navegador, ele envia uma mensagem HTTP para o servidor pedindo a página.

**Métodos HTTP:** São diferentes tipos de pedidos que você pode fazer ao servidor, como `GET` (para obter uma página), `POST` (para enviar dados), `PUT` (para atualizar dados) e `DELETE` (para apagar dados).

**HTTPS:** É uma versão mais segura do HTTP que usa criptografia para proteger seus dados de olhares curiosos. É como enviar uma carta lacrada em vez de um cartão postal.


## DWIII_07 - Introdução - Desenvolvimento Web III:
Este documento fornece uma visão geral da evolução da web, desde a Web 1.0 (estática) até a Web 3.0 (semântica e inteligente).

**Web 1.0:** Páginas estáticas, como panfletos online.

**Web 2.0:** Páginas interativas, com redes sociais e compartilhamento de conteúdo.

**Web 3.0:** Páginas que entendem o significado do conteúdo e podem se adaptar às suas preferências, como um site que te recomenda produtos com base no seu histórico de compras.

**Tecnologias:** O documento menciona tecnologias como `AJAX` (para atualizar partes de uma página sem recarregá-la) e `JavaScript` (a linguagem que dá vida às páginas web, permitindo interação e animações).

## DWIII_06 - Versionamento - Git - Trabalho em Equipe:
Este documento explica como usar o Git para controlar as versões do seu código e trabalhar em equipe.

**Git:** É como uma máquina do tempo para seu código. Você pode salvar diferentes versões do seu projeto e voltar para uma versão anterior se algo der errado.

**Branches (Ramificações):** São como linhas do tempo paralelas para seu projeto. Você pode criar um branch para experimentar novas ideias sem afetar a versão principal do seu projeto.

**Merge (Mesclagem):** É como juntar duas linhas do tempo. Você pode incorporar as mudanças de um branch em outro.

## DWIII_05 - Versionamento - Git - Introdução e Compartilhamento: 
Este documento apresenta os conceitos básicos do Git e como compartilhar seu projeto com outros desenvolvedores.

**Commits:** São como snapshots do seu projeto em um determinado momento. Você pode tirar um "retrato" do seu código sempre que fizer uma alteração importante.

**Repositórios:** São como álbuns de fotos para seus commits. Eles armazenam todo o histórico do seu projeto.

**GitHub:** É como um site de compartilhamento de fotos, mas para código. Você pode enviar seus repositórios para o GitHub para que outras pessoas possam ver e colaborar no seu projeto.
## DWIII_04 - Versionamento - GitHub, Git e GitLab: 
Este documento oferece uma visão geral do versionamento de código e apresenta as plataformas GitHub e GitLab.

**Versionamento:** É como ter um backup do seu código. Se algo der errado, você pode voltar para uma versão anterior.

**GitHub e GitLab:** São plataformas online que facilitam o trabalho em equipe, permitindo que várias pessoas colaborem no mesmo projeto ao mesmo tempo.

### Exemplos de comandos Git:

`git init`: Cria um novo repositório Git em um diretório.

`git add`: Adiciona arquivos ao próximo commit.

`git commit -m "mensagem"`: Cria um novo commit com uma mensagem que descreve as alterações.

`git log`: Mostra o histórico de commits.

`git branch`: Lista as branches existentes.

`git checkout <branch>`: Muda para a branch especificada.

`git merge <branch>`: Incorpora as mudanças de outra branch na branch atual.

`git push`: Envia os commits para um repositório remoto (como o GitHub).

`git pull`: Baixa as alterações de um repositório remoto.
