function getSaldo() {
return Number(localStorage.getItem("saldo")) || 1000;
}


function setSaldo(valor) {
localStorage.setItem("saldo", valor);
}


function getTransacciones() {
return JSON.parse(localStorage.getItem("tx")) || [];
}


function addTransaccion(texto) {
const tx = getTransacciones();
tx.unshift(texto);
localStorage.setItem("tx", JSON.stringify(tx));
}