

## Padrões Criacionais:
> **AVISO:** os codigos estão em JavaScript, para melhor entendimento recomendo ver os codigos da pizzaria desenvolvido em sala de aula

### Singleton: 
Imagine um sistema de login em um site. O padrão Singleton garante que apenas um objeto de usuário esteja logado por vez, evitando conflitos e acessos não autorizados. Ele cria uma única instância da classe de usuário e permite que todas as partes do sistema a acessem, garantindo que todos vejam e modifiquem as mesmas informações do usuário.

```javascript
class SingletonUser {
    static instance;

    constructor() {
        if (SingletonUser.instance) {
            return SingletonUser.instance;
        }

        SingletonUser.instance = this;
    }
}
```


## Padrões Estruturais:
> **AVISO:** os codigos estão em JavaScript, para melhor entendimento recomendo ver os codigos da pizzaria desenvolvido em sala de aula

### Adapter (Adaptador): 
Imagine que você tem um carregador de celular com entrada USB-C, mas seu notebook só tem entradas USB-A. O adaptador permite que você conecte o carregador ao notebook, convertendo a interface USB-C em USB-A. No software, o Adapter permite que classes com interfaces incompatíveis trabalhem juntas, traduzindo as chamadas de uma interface para outra.
```javascript
class UsbCCharger {
    connect() {
        return 'Connected with USB-C';
    }
}

class UsbAAdapter {
    constructor(usbCCharger) {
        this.usbCCharger = usbCCharger;
    }

    connect() {
        return this.usbCCharger.connect().replace('USB-C', 'USB-A');
    }
}
```
### Bridge (Ponte): 
Imagine uma ponte que liga duas ilhas. A ponte permite que você viaje entre as ilhas sem precisar construir um caminho completamente novo para cada uma. No software, o Bridge separa a abstração de um objeto de sua implementação, permitindo que ambos variem independentemente. Isso facilita a manutenção e a extensão do código, pois você pode modificar a implementação sem afetar a abstração.
```javascript
class Bridge {
    constructor(implementation) {
        this.implementation = implementation;
    }

    operation() {
        return this.implementation.operationImplementation();
    }
}
Código 
```
### Composite (Composto): 
Imagine uma árvore genealógica. Cada pessoa é um objeto, e a árvore é composta por pais, filhos, netos, etc. O Composite permite que você trate objetos individuais e composições de objetos de forma uniforme. No software, isso significa que você pode realizar operações em um único objeto ou em um grupo de objetos como se fossem a mesma coisa, simplificando o código.
```javascript
class Person {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(child) {
        this.children.push(child);
    }
}
```
### Decorator (Decorador): 
Imagine um café que você pode personalizar com diferentes ingredientes, como leite, açúcar e chantilly. Cada ingrediente adiciona algo novo ao café sem alterar sua essência. No software, o Decorator permite adicionar novas funcionalidades a um objeto dinamicamente, sem modificar sua estrutura original. Isso promove a flexibilidade e a reutilização de código.
```javascript
class Coffee {
    cost() {
        return 1;
    }
}

class Milk {
    constructor(coffee) {
        this.coffee = coffee;
    }

    cost() {
        return this.coffee.cost() + 0.5;
    }
}
```
### Facade (Fachada): 
Imagine um painel de controle de um carro. Ele possui botões e mostradores simples para controlar diversas funções complexas do veículo. Você não precisa entender a mecânica do carro para usá-lo. No software, o Facade fornece uma interface simplificada para um sistema complexo, ocultando sua complexidade interna e facilitando seu uso.
```javascript
class CarControlPanel {
    startEngine() {
        // complex operations to start the engine
    }

    stopEngine() {
        // complex operations to stop the engine
    }
}
```
### Flyweight (Peso Mosca): 
Imagine um jogo de xadrez com muitas peças. Em vez de criar um objeto separado para cada peça, o Flyweight reutiliza objetos com características comuns, como cor e tipo. Isso economiza memória e melhora o desempenho do jogo.
```javascript
class ChessPiece {
    constructor(color, type) {
        this.color = color;
        this.type = type;
    }
}

class ChessPieceFactory {
    constructor() {
        this.pieces = {};
    }

    getChessPiece(color, type) {
        let key = color + type;
        if (!this.pieces[key]) {
            this.pieces[key] = new ChessPiece(color, type);
        }
        return this.pieces[key];
    }
}
```
### Proxy (Proxy):
Imagine um intermediário que compra ingressos para um show para você. Você não precisa lidar diretamente com a bilheteria; o intermediário faz isso por você. No software, o Proxy controla o acesso a um objeto, adicionando uma camada extra de segurança ou funcionalidade.
```javascript
class TicketSeller {
    sell() {
        return 'Ticket sold';
    }
}

class TicketSellerProxy {
    constructor(seller) {
        this.seller = seller;
    }

    sell() {
        // additional operations
        return this.seller.sell();
    }
}
```
## Padrões Comportamentais:
> **AVISO:** os codigos estão em JavaScript, para melhor entendimento recomendo ver os codigos da pizzaria desenvolvido em sala de aula
### Chain of Responsibility (Cadeia de Responsabilidade): 
Imagine um pedido de reembolso que passa por diferentes departamentos de uma empresa. Cada departamento analisa o pedido e decide se pode aprová-lo ou se deve passá-lo para o próximo departamento. No software, a Chain of Responsibility permite que uma solicitação seja tratada por uma série de objetos até que um deles a resolva.
```javascript
class Handler {
    setNext(handler) {
        this.next = handler;
    }

    handle(request) {
        if (this.next) {
            return this.next.handle(request);
        }
        return null;
    }
}
```
### Interpreter (Intérprete): 
O padrão Interpreter é utilizado para interpretar e executar expressões em uma determinada linguagem ou gramática. Ele define uma representação para a gramática da linguagem e um interpretador que usa essa representação para interpretar sentenças na linguagem.
```javascript
class Interpreter {
    constructor(grammar) {
        this.grammar = grammar;
    }

    interpret(sentence) {
        // interpret the sentence based on the grammar
    }
}
```
