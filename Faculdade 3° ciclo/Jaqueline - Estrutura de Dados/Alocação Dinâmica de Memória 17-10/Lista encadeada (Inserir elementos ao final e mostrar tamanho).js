function LinkedList(){
    let Node = function(element){
        this.element = element;
        this.next = null;
    }
    let length = 0;
    let head = null;

    // função que insere elementos
    this.append = function(element){
        let node = new Node(element), 
            atual;
        if(head === null){
            head = node;
        }
        else{
            atual = head;
            while(atual.next){
                atual = atual.next;
            }
        atual.next = node;
        }
        length++;
    }

    // função que mostra o tamanho da lista
    this.size = function(){
        return length;
    };
  
    // função que imprime os elementos da lista
    this.imprimir = function() { 
        let atual = head;
        console.log('os elementos da lista são: ')

        while (atual) {
            console.log(atual.element);
            atual = atual.next;
        }
    };
    // this.toString = function(){
    //     let atual = head, string = ''
    //     while(atual){
    //         string += atual.element + (atual.next ? '-> ' : '')
    //         atual = atual.next
    //     }
    //     return string
    // }
    this.removePrimeiro = function() {
        if(head === null){
            // a lista está vazia, não ha o que fazer
            return
        }
        head = head.next // atualiza a cabeça para o próximo nó
        length--; // tira 1 de comprimento da lista
    }
    this.inserirInicio = function(element) {
        let novoNó = new Node(element)

        novoNó.next = head
        head = novoNó
        length++
    }
    this.retornaPosi = function(element) {
        let indice = 0; let atual = head
        while(atual != null){
            if(atual.element === element){
                return indice
            }
            atual = atual.next
            indice++
        }
        return -1
    }
    this.removeAt = function(posicao) {
        if (posicao < 0 || posicao >= length) {
            return; // posicao inválida, não faz nada.
        }

        if (posicao === 0) {
            // Se a posicao for 0, remova o primeiro elemento.
            this.removePrimeiro();
        } else {
            let anterior = null;
            let atual = head;
            let indice = 0;

            while (indice < posicao) {
                anterior = atual;
                atual = atual.next;
                indice++;
            }

            // Conecta o nó anterior ao próximo nó, pulando o nó na posicao específica.
            anterior.next = atual.next;
            length--;
        }
    };
};

lista = new LinkedList(); // definindo que lista é igual a função LindedList
lista.append(5);
lista.append(7);
lista.append(10);
console.log('O tamanho da lista encadeada é: ' + lista.size());
lista.imprimir();

console.log(`\nInseri o Elemento "2"`)
lista.inserirInicio(2);
lista.imprimir();

console.log('\nA posição do elemento 7 na lista é: ' + lista.retornaPosi(7));

lista.removeAt(1); // Remove o elemento na posição 1 (7).
console.log(`\nRetirei o elemento da posição 1 (5)`)
lista.imprimir();


