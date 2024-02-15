function intercalar(vet1, vet2) {
    var vetor3 = []

    for (var i = 0; i < vet1.length; i++) {
        vetor3.push(vet1[i]);
        vetor3.push(vet2[i]);
    }
    console.log(vetor3);
}
function exe1() {
    let vet1 = [];
    let vet2 = [];

    for (let i = 0; i < 3; i++) {
        vet1[i] = prompt('Digite o numero do vetor 1');
        vet2[i] = prompt('Digite o numero do vetor 2');
    }
    intercalar(vet1, vet2);
    for (let i = 0; i < vet1.length; i++) {
        console.log(`Vetor 1: ${vet1[i]} e Vetor 2: ${vet2[i]}`);
    }
}
