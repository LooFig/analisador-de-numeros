let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#flista');
let res = document.querySelector('div#res');
let adi = document.querySelector('input#adicionar');
adi.addEventListener('click', adicionar);
let fim = document.querySelector('input#finalizar');
fim.addEventListener('click', finalizar);
let valores = [];

function isNumero (n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) == -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    if (isNumero(num.value) && inLista(num.value, valores)) {
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado.`;
        lista.appendChild(item);
        res.innerHTML = '';
    } else {
        window.alert('Valor inválido ou já encontrado na lista.'); 
    }

    num.value = '';
    num.focus();
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar');
    } else {
        let totalElementos = valores.length;
        let maior = valores[0]; // posição 1 
        let menor = valores[0]; //posição 1
        let soma = 0;
        let média = 0;

        for (let i in valores) {
            soma += valores[i]

            if (valores[i] > maior)
            maior = valores[i];
             

            if (valores[i] < menor)
            menor = valores[i];
            
        }
        média = soma/valores.length; // ou pelo totalElementos

        res.innerHTML = ``;
        res.innerHTML += `<p>Ao todo, temos ${totalElementos} numeros cadastrados.`; // depois ver com <p>e</p>
        res.innerHTML += `<p>O maior valor informado foi ${maior}.`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}.`;
        res.innerHTML += `<p>A soma de todos valores é ${soma}.`; // Somando todos os valores, temos ${soma}.;
        res.innerHTML += `<p>A média dos valores é ${média}.`;
    }
    num.value = ``;
    num.focus();
}