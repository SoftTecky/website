<template>
  <div class="etab">

    <div class="label izq">
      Puntuacion del 1 a 5
    </div>
    <div class="level izq">

      <div class="list">
        <p>1 Necesita mejorar</p>
        <p>2 En Desacuerdo</p>
        <p>3 Competente</p>
        <p>4 Bueno</p>
        <p>5 Exelente</p>
      </div>
    </div>

    <div class="unodedoce">
      <div class="num">1</div>
      <div>Seccion de</div>
      <div class="num">12</div>
    </div>

    <div class="SeccionPreguntas">
      <div class="izq com">
        
        comunicacion efectiva
      
      </div>

      <div class="preguntaLabel">
        <div class="preguntaLabel_pregunta">
          <p>Pregunta</p>
        </div>
        <div class="preguntaLabel_puntuacion">
          <p>Puntuacion</p>
        </div>

      </div>

      <div class="cuestionario">

        <div class="preguntas">
          <p>capacidad para expresarse claramente y de manera efectiva tanto verbalmente como por escrito</p>
          <p>habilidades para escuchar activamente y comprender lasnecesidades y requerimientos de los demas</p>
          <p>habilidad para trasmitir infirmacion tecnica de forma comprensible a diferentes audiencias  </p>
        </div>
        <div class="puntuacion">
          <div class="respuesta">
            <input type="radio" id="one" value="One" />
            <label for="one">1</label>

            <input type="radio" id="two" value="Two" />
            <label for="two">2</label>

            <input type="radio" id="tree" value="tree" />
            <label for="tree">3</label>


            <input type="radio" id="four" value="four" />
            <label for="four">4</label>


            <input type="radio" id="five" value="five" />
            <label for="five">5</label>

          </div>
          <div class="respuesta">
            <input type="radio" id="one" value="One" />
            <label for="one">1</label>

            <input type="radio" id="two" value="Two" />
            <label for="two">2</label>

            <input type="radio" id="tree" value="tree" />
            <label for="tree">3</label>


            <input type="radio" id="four" value="four" />
            <label for="four">4</label>


            <input type="radio" id="five" value="five" />
            <label for="five">5</label>
          </div>
          <div class="respuesta">
            <input type="radio" id="one" value="One" />
            <label for="one">1</label>

            <input type="radio" id="two" value="Two" />
            <label for="two">2</label>

            <input type="radio" id="tree" value="tree" />
            <label for="tree">3</label>


            <input type="radio" id="four" value="four" />
            <label for="four">4</label>


            <input type="radio" id="five" value="five" />
            <label for="five">5</label>
          </div>

        </div>
      </div>


    </div>
     
    <button class="btn_continuar">Continuar</button>

    
  </div>
</template>


  
<style>
.level {
  padding-left: 10%;
  padding-right: 10%;
}

.izq {
  text-align: left;
}
.com{
  border-bottom-color: #37759c;
  border: solid 1px;
  border-top: none;
  border-left: none;
  border-right: none;
  margin-left: 5%;
  margin-right: 5%;
  padding-left: 5%;
  padding-right: 5%;

}

.etab {
  border: solid 1px beige;
}

.label {
  padding-left: 10%;
  margin-bottom: 1.8rem;
  margin-top: 1rem;
}


.list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  /* Definir tres columnas de igual tamaño */
  grid-gap: 10px;
  /* Espacio entre las celdas */

}

.list p {
  background: #ffffff;
  text-align: center;
}

.unodedoce {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  padding-left: 45%;
  padding-right: 45%;
  margin-bottom: 0px;
}
.unodedoce .num {
background-color: #37759c;
width: 50px;
height: 50px;
padding: 15px;
text-align: center;
color: #ffffff;
}

.preguntaLabel {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  padding-left: 80px;
  padding-right: 80px;



}
.preguntaLabel_pregunta{
  grid-column: 1 / 3;
}

.cuestionario {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  padding-left: 80px;
  padding-right: 80px;
 
}
.preguntas{
  grid-column: 1 / 3;
}

.preguntas p {
  text-align: left;
  background-image: linear-gradient(to bottom right, #ffffff, #37759c);
  border-radius: 15px;
  padding-left: 10px;
  height: 60px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.respuesta{
  margin-bottom: 16px;
  height: 60px;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
}


.etab {
  background-color: #d9edff;
}

.btn_continuar{
background-color: #37759c;
color: #ffffff;
border-radius: 20px;
padding: 10px 20px;
border: none;
font-size: 16px;
cursor: pointer;
width: 150px;
}

</style>