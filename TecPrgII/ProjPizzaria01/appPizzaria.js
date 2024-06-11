document.addEventListener('DOMContentLoaded', function(){

    // ESTRUTURA DO PROJETO:
    class Pizza{
        constructor(){
            this.descricao = "Pizza";
        }

        getDescricao(){
            return this.descricao;
        }

        custo(){
            return 0;
        }
    }

    // Implementação concreta das interface Componente para Pizza Personalizada
    class PizzaPersonalizada extends Pizza{
        constructor(sabor, tamanho, borda){
            super();
            this.descricao =`Sabor:<br> -   ${sabor}<br><br>Tamanho:<br> -   ${tamanho}<br><br>Borda:<br> -   ${borda}<br><br>Itens Extra / Opcionais: `;
            this.sabor = sabor;
            this.tamanho = tamanho;
            this.borda = borda;
        }

        custo(){
            let preco = 0;

            if(this.sabor === "Margherita"){
                if(this.tamanho === "Brotinho"){
                    preco = 18.75;
                }else if (this.tamanho == "Padrao"){
                    preco = 25.00;
                }else if (this.tamanho == "Grande"){
                    preco = 31.25;
                }
            }
            
            if(this.sabor === "Calabresa"){
                if(this.tamanho === "Brotinho"){
                    preco = 21.00;
                }else if (this.tamanho == "Padrao"){
                    preco = 28.00;
                }else if (this.tamanho == "Grande"){
                    preco = 35.00;
                }   
            }

            if(this.sabor === "Frango com Catupiry"){
                if(this.tamanho === "Brotinho"){
                    preco = 22.50;
                }else if (this.tamanho == "Padrao"){
                    preco = 30.00;
                }else if (this.tamanho == "Grande"){
                    preco = 37.50;
                }   
            }

            if(this.sabor === "Portuguesa"){
                if(this.tamanho === "Brotinho"){
                    preco = 24.00;
                }else if (this.tamanho == "Padrao"){
                    preco = 32.00;
                }else if (this.tamanho == "Grande"){
                    preco = 40.00;
                }   
            }

            if(this.sabor === "Quatro Queijos"){
                if(this.tamanho === "Brotinho"){
                    preco = 26.25;
                }else if (this.tamanho == "Padrao"){
                    preco = 35.00;
                }else if (this.tamanho == "Grande"){
                    preco = 43.75;
                }   
            }

            return preco.toFixed(2);
        }
    }

    // Decorator Abstrato:
    class Decorator extends Pizza{
        constructor(pizza){
            super();
            this.pizza = pizza;
        }

        getDescricao(){
            return this.pizza.getDescricao();
        }

        custo(){
            return this.pizza.custo();
        }
    }

    // Decorator Concretos para adicionar ingredientes extras:
    class QueijoExtra extends Decorator{
        constructor(pizza){
            super(pizza);
        }

        getDescricao(){
            return `${this.pizza.getDescricao()}<br> -   Queijo Extra`;
        }

        custo(){
            return (parseFloat(this.pizza.custo()) + 2.00).toFixed(2);
        }
    }

    class CheddarExtra extends Decorator{
        constructor(pizza){
            super(pizza);
        }

        getDescricao(){
            return `${this.pizza.getDescricao()}<br> -   Cheddar Extra`;
        }

        custo(){
            return (parseFloat(this.pizza.custo()) + 5.00).toFixed(2);
        }
    }

    class BaconExtra extends Decorator{
        constructor(pizza){
            super(pizza);
        }

        getDescricao(){
            return `${this.pizza.getDescricao()}<br> -   Bacon Extra`;
        }

        custo(){
            return (parseFloat(this.pizza.custo()) + 3.00).toFixed(2);
        }
    }

    class PepperoniExtra extends Decorator{
        constructor(pizza){
            super(pizza);
        }

        getDescricao(){
            return `${this.pizza.getDescricao()}<br> -   Pepperoni Extra`;
        }

        custo(){
            return (parseFloat(this.pizza.custo()) + 4.00).toFixed(2);
        }
    }

    class AzeitonaOpcional extends Decorator{
        constructor(pizza){
            super(pizza);
        }

        getDescricao(){
            return `${this.pizza.getDescricao()}<br> -   Azeitona Opcional`;
        }

        custo(){
            return (parseFloat(this.pizza.custo()) + 0.00).toFixed(2);
        }
    }

    class AzeiteOpcional extends Decorator{
        constructor(pizza){
            super(pizza);
        }

        getDescricao(){
            return `${this.pizza.getDescricao()}<br> -   Azeite Opcional`;
        }

        custo(){
            return (parseFloat(this.pizza.custo()) + 0.00).toFixed(2);
        }
    }

    class OreganoOpcional extends Decorator{
        constructor(pizza){
            super(pizza);
        }

        getDescricao(){
            return `${this.pizza.getDescricao()}<br> -   Oregano Opcional`;
        }

        custo(){
            return (parseFloat(this.pizza.custo()) + 0.00).toFixed(2);
        }
    }

    class PimentaOpcional extends Decorator{
        constructor(pizza){
            super(pizza);
        }

        getDescricao(){
            return `${this.pizza.getDescricao()}<br> -   Pimenta do Reino Opcional`;
        }

        custo(){
            return (parseFloat(this.pizza.custo()) + 0.00).toFixed(2);
        }
    }

    //Construção do Proxy para validação na montagem da pizza:
    class ProxyPizza {
        constructor(pizza) {
            this.pizza = pizza;
        }

        getDescricao() {
            this.validarSelecoes();
            return this.pizza.getDescricao();
        }

        custo() {
            this.validarSelecoes();
            return this.pizza.custo();
        }

        validarSelecoes() {
            let saborSelecionado = document.querySelector('input[name="sabor"]:checked');
            let tamanhoSelecionado = document.querySelector('input[name="tamanho"]:checked');
            let bordaSelecionado = document.querySelector('input[name="borda"]:checked');

            if (!saborSelecionado || !tamanhoSelecionado || !bordaSelecionado) {
                alert("Por favor, selecione o sabor, tamanho e borda da pizza antes de adicionar ingredientes extras.");
                throw new Error("Seleções inválidas");
            }
            montarPizza(saborSelecionado, tamanhoSelecionado, bordaSelecionado);
        }
    }

    // SIMULAÇÃO DA INTERFACE DE UTILIZAÇÃO DO PROJETO ----------------------------------
    function montarPizza(saborSelecionado, tamanhoSelecionado, bordaSelecionado){

        // Obtem Sabor selecionado:
        //let saborSelecionado = document.querySelector('input[name="sabor"]:checked');
        let sabor = saborSelecionado ? saborSelecionado.value : '';

        // Obtem Tamanho selecionado:
        //let tamanhoSelecionado = document.querySelector('input[name="tamanho"]:checked');
        let tamanho = tamanhoSelecionado ? tamanhoSelecionado.value : '';     

        // Obtem Borda selecinado:
        //let bordaSelecionado = document.querySelector('input[name="borda"]:checked');
        let borda = bordaSelecionado ? bordaSelecionado.value : '';

        /*if (!sabor || !tamanho || !borda) {
            alert("Por favor, selecione o sabor, tamanho e borda da pizza antes de adicionar ingredientes extras.");
            return;
        }*/
        // Criando Objeto PizzaPersonalizada com base nas seleções do Usuarios:
        let pizzaPersonalizada = new PizzaPersonalizada(sabor, tamanho, borda);
       


        // Aplicação decorador para ingredientes extras e opcionais selecionados:
        let queijoExtraCheckbox = document.querySelector('input[name="extra-queijo"]:checked');
        if(queijoExtraCheckbox){
            pizzaPersonalizada = new QueijoExtra(pizzaPersonalizada);
        }

        let cheddarExtraCheckbox = document.querySelector('input[name="extra-cheddar"]:checked');
        if(cheddarExtraCheckbox){
            pizzaPersonalizada = new CheddarExtra(pizzaPersonalizada);
        }
        
        let baconExtraCheckbox = document.querySelector('input[name="extra-bacon"]:checked');
        if(baconExtraCheckbox){
            pizzaPersonalizada = new BaconExtra(pizzaPersonalizada);
        }

        let pepperoniExtraCheckbox = document.querySelector('input[name="extra-pepperoni"]:checked');
        if(pepperoniExtraCheckbox){
            pizzaPersonalizada = new PepperoniExtra(pizzaPersonalizada);
        }

         // Igredientes Opcionais:
         let azeitonaOpcionaisCheckbox = document.querySelector('input[name="opcionais-azeitona"]:checked');
         if(azeitonaOpcionaisCheckbox){
            pizzaPersonalizada = new AzeitonaOpcional(pizzaPersonalizada);
        }
 
         let azeiteOpcionaisCheckbox = document.querySelector('input[name="opcionais-azeite"]:checked');
         if(azeiteOpcionaisCheckbox){
            pizzaPersonalizada = new AzeiteOpcional(pizzaPersonalizada);
        }
         
         let oreganoOpcionaisCheckbox = document.querySelector('input[name="opcionais-oregano"]:checked');
         if(oreganoOpcionaisCheckbox){
            pizzaPersonalizada = new OreganoOpcional(pizzaPersonalizada);
        }
 
         let pimentaExtraCheckbox = document.querySelector('input[name="opcionais-pimenta"]:checked');
         if(pimentaExtraCheckbox){
            pizzaPersonalizada = new PimentaOpcional(pizzaPersonalizada);
        }

        // Aplicação do Proxy para validação na montagem da pizza:
        //pizzaPersonalizada = new ProxyPizza(pizzaPersonalizada);
        
        // Obter custo total e descrição da Pizza Personalizada
        let custoTotal = parseFloat(pizzaPersonalizada.custo());
        let pedidoTotal = pizzaPersonalizada.getDescricao();

        // Exibir as informações da Pizza Personalizada:
        let totalPedidoElement = document.getElementById("total-pedido");
        totalPedidoElement.textContent = "R$ " + custoTotal.toFixed(2);

        let descricaoPedidoElement = document.getElementById("descricao-pedido");
        descricaoPedidoElement.innerHTML = pedidoTotal;
    }
    
    // Chama a função montarPizza quando o botão é clicado
    /*const button = document.querySelector('button');
    button.addEventListener('click', montarPizza);*/

    const button = document.querySelector('button');
button.addEventListener('click', () => {
    let proxyPizza = new ProxyPizza();
    proxyPizza.validarSelecoes();
     
});
});
