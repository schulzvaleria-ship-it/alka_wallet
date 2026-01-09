$("#btnEnviar").click(() => {
const monto = Number($("#monto").val());
let saldo = getSaldo();


if (monto > saldo) {
$("#msg").text("Saldo insuficiente");
return;
}


saldo -= monto;
setSaldo(saldo);
addTransaccion(`Envío $${monto}`);
$("#msg").text("Transferencia realizada");
});