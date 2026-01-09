$("#btnDepositar").click(() => {
const monto = Number($("#monto").val());
const nuevoSaldo = getSaldo() + monto;
setSaldo(nuevoSaldo);
addTransaccion(`Depósito $${monto}`);
$("#msg").hide().text(`Nuevo saldo: $${nuevoSaldo}`).fadeIn();
});