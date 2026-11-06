
const usuario = {
  nombre: "david",
  apellido: "lopez",
  edad: 17,
  direccion: {
    calle: "Calle 17",
    ciudad: "tame",
    pais: "Colombia"
  },

  presentarse() {
   
    const { nombre, apellido, edad, direccion: { ciudad, pais } } = this;

    return ("Hola, soy ${nombre} ${apellido}, tengo ${edad} años y vivo en ${ciudad}, ${pais}")
  }
};


console.log(usuario.presentarse());