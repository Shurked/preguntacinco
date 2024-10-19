class cuentaBancaria {
    constructor(saldoInicial) {
        this.saldo = saldoInicial;
        this.ITF = 0.00005;
    }

    depositar(monto) {
        const impuesto = monto * this.ITF;
        const montoConITF = monto - impuesto;
        this.saldo += montoConITF;
        return `Depósito: S/${monto}, ITF aplicado: S/${impuesto}, Nuevo saldo: S/${this.saldo}`;
    }

    retirar(monto) {
        if (monto > this.saldo) {
            return 'Fondos insuficientes';
        }
        const impuesto = monto * this.ITF;
        const montoConITF = monto + impuesto;
        this.saldo -= montoConITF;
        return `Retiro: S/${monto}, ITF aplicado: S/${impuesto}, Nuevo saldo: S/${this.saldo}`;
    }

    showSaldo() {
        return `Saldo actual: S/${this.saldo}`;
    }
}

const cuenta = new cuentaBancaria(1000);
document.getElementById("saldo").innerText = cuenta.showSaldo();

function depositar() {
    const monto = parseFloat(document.getElementById('monto').value);
    if (isNaN(monto) || monto <= 0) {
        document.getElementById("resultado").innerText = "Ingrese un monto válido para depositar.";
        return;
    }
    const resultado = cuenta.depositar(monto);
    document.getElementById("resultado").innerText = resultado;
    document.getElementById("saldo").innerText = cuenta.showSaldo();
}

function retirar() {
    const monto = parseFloat(document.getElementById('monto').value);
    if (isNaN(monto) || monto <= 0) {
        document.getElementById("resultado").innerText = "Ingrese un monto válido para retirar.";
        return;
    }
    const resultado = cuenta.retirar(monto);
    document.getElementById("resultado").innerText = resultado;
    document.getElementById("saldo").innerText = cuenta.showSaldo();
}
