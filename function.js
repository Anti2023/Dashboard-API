let nombresData = [];
let valoresData = [];

async function obtenerDatos() {
    try {
      const url = "https://mindicador.cl/api";
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error('Error al obtener datos de la API');
      }
  
      const data = await response.json();
  
      // Utilizar Object.entries para obtener un array
      const arrayDePares = Object.entries(data);
  
      const arrayFiltrado = arrayDePares.filter(([clave]) => clave !== 'ipc' && clave !== 'version' && clave !== 'autor' && clave !== 'fecha');
  
      // Mapear el array de pares para obtener un array de objetos
      const arrayDeObjetos = arrayFiltrado.map(([codigo, valor]) => ({ codigo, ...valor }));
  
      console.log(arrayDeObjetos);
  
      const nombres = arrayDeObjetos.map((x) => x.nombre)
      console.log(nombres)
  
      const valores = arrayDeObjetos.map((x) => x.valor)
      console.log(valores);

      nombresData = nombres;
      valoresData = valores;
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  export {nombresData, valoresData, obtenerDatos}