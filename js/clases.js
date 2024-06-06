class UsuarioComprador {
  constructor(
    unId,
    unNombre,
    unApellido,
    unNombreUsuario,
    unaClave,
    tarjetaCredito,
    cvc
  ) {
    this.id = unId;
    this.nombre = unNombre;
    this.apellido = unApellido;
    this.nombreUsuario = unNombreUsuario;
    this.contrasena = unaClave;
    this.tarjetaCredito = tarjetaCredito;
    this.cvc = cvc;
    this.saldo = 3000;
  }
}
