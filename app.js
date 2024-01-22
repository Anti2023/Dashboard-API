import { obtenerDatos, nombresData, valoresData } from "./function.js";

const graphic = document.getElementById('graficoIndicadores');

async function createGraphic() {
    await obtenerDatos();
    
    
    const chart = new Chart(graphic, {
        type: 'bar',
        data: {
            labels: nombresData,
            datasets: [{
                data: valoresData,
                label: 'Indicadores diarios',
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                ],
                borderWidth: 1
            }]
        }
    });
}

createGraphic();





  
  // Llamar a la función
  

// const url = "https://mindicador.cl/api";
// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     // Utilizar Object.entries para obtener un array de pares clave-valor
//     const arrayDePares = Object.entries(data);

//     const arrayFiltrado = arrayDePares.filter(([clave]) => clave !== 'version' && clave !== 'autor' && clave !== 'fecha');

//     // Mapear el array de pares para obtener un array de objetos
//     const arrayDeObjetos = arrayFiltrado.map(([codigo, valor]) => ({ codigo, ...valor }));

//     console.log(arrayDeObjetos);

//     const nombres = arrayDeObjetos.map((x) => x.nombre)
//     console.log(nombres)

//     const valores = arrayDeObjetos.map((x) => x.valor)
//     console.log(valores)
    
//   })
  


