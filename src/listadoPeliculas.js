import './App.css';

import Pelicula from './pelicula';
import PageWrapper from './pagewrapper';
import Paginacion from './paginacion';
import { useEffect, useState } from 'react';

function ListadoPeliculas() {
  
  const [paginaActual, setPaginaActual] = useState(1);
  const [peliculas, setPeliculas] = useState([]);
  let total_x_pagina = 6;

  useEffect(() => {
    fetch('https://lucasmoy.dev/data/react/peliculas.json')
      .then((response) => {
        return response.json()
      })
      .then((peliculas) => {
        setPeliculas(peliculas)
      })
  }, []);
 







const getTotalPaginas = () => {
    let cantidadPeliculas = peliculas.length;
   return Math.ceil(cantidadPeliculas / total_x_pagina);
}




let peliculas_x_pagina = peliculas.slice((paginaActual - 1) * total_x_pagina,
paginaActual * total_x_pagina);

  return (


    <PageWrapper>
        
      {peliculas_x_pagina.map(pelicula => 
       <Pelicula titulo={pelicula.titulo} rate={pelicula.calificacion} director= {pelicula.director}
        actores= {pelicula.actores}  
        duracion= {pelicula.duracion} fecha= {pelicula.fecha} img = {pelicula.img}>
          {pelicula.descripcion}
       </Pelicula>
      )}
       
        <Paginacion pagina = {paginaActual} total = {getTotalPaginas()} onChange = {(pagina)=> {
          setPaginaActual(pagina);
        }}/>

    </PageWrapper>
  );
 
}

export default ListadoPeliculas;