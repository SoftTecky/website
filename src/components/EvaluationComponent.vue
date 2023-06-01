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

        <p>{{ tituloTexto }}</p>

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
          <p>{{ florTexto }}</p>
          <p>{{ pandaTexto }}</p>
          <p>{{ canTexto }}</p>
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

    
    <div id="app">

      <button class="btn_continuar" @click="cambiarTexto">Continuar</button>
    </div>

  </div>
</template>

<script>
export default {


  data() {
  return {
    arreglo: ["Capacidad para expresarse claramente y de manera efectiva tanto verbalmente como por escrito."
    , "Habilidad para escuchar activamente y comprender las necesidades y requerimientos de los demás."
    , "Habilidad para transmitir información técnica de forma comprensible a diferentes audiencias."
    , "Habilidad para colaborar con otros miembros del equipo y contribuir con fortalezas individuales."
    , "Capacidad para trabajar en proyectos multidisciplinarios y participar activamente en la resolución de problemas en equipo."
    , "Habilidad para mantener relaciones profesionales y trabajar en armonía con los demás."
    , "Capacidad para analizar problemas complejos y encontrar soluciones adecuadas."
    , "Habilidad para evaluar situaciones desde diferentes perspectivas y tomar decisiones bien fundamentadas."
    , "Capacidad para analizar datos y evidencias de manera objetiva."
    , "Habilidad para aprender y actualizarse constantemente en nuevas tecnologías y metodologías."
    , "Capacidad para ajustarse a cambios en los requerimientos del proyecto y a diferentes situaciones laborales."
    , "Habilidad para enfrentar y manejar situaciones de cambio y ambigüedad de manera efectiva."
    , "Capacidad para identificar problemas y analizarlos de manera efectiva."
    , "Habilidad para encontrar soluciones creativas y eficientes a problemas técnicos y funcionales."
    , "Habilidad para implementar soluciones y evaluar su efectividad."
    , "Habilidad para trabajar con precisión y cuidado en los detalles."
    , "Capacidad para revisar y verificar el trabajo realizado para asegurar la calidad y confiabilidad del software y sistemas de TI."
    , "Habilidad para seguir procedimientos y estándares establecidos."],
    arregloTitulo: ["Comunicación Efectiva", "Trabajo en Equipo", "Pensamiento Crítico","Adaptabilidad","Resolución de Problemas","Orientación al Detalle"],
    florIndice: 0,
    pandaIndice: 1,
    canIndice: 2,
    tituloIndice: 0,
    florTexto: "",
    pandaTexto: "",
    canTexto: "",
    tituloTexto:""
  };
},
methods: {
  cambiarTexto() {
    this.florTexto = this.arreglo[this.florIndice];
    this.pandaTexto = this.arreglo[this.pandaIndice];
    this.canTexto = this.arreglo[this.canIndice];
    this.tituloTexto = this.arregloTitulo[this.tituloIndice];
    
    this.florIndice = (this.florIndice + 3) % this.arreglo.length;
    this.pandaIndice = (this.pandaIndice + 3) % this.arreglo.length;
    this.canIndice = (this.canIndice + 3) % this.arreglo.length;
    this.tituloIndice = (this.tituloIndice + 1) % this.arregloTitulo.length;


  }
}


}

</script>
  
<style>
.level {
  padding-left: 10%;
  padding-right: 10%;
}

.izq {
  text-align: left;
}

.com {
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

.preguntaLabel_pregunta {
  grid-column: 1 / 3;
}

.cuestionario {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  padding-left: 80px;
  padding-right: 80px;

}

.preguntas {
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

.respuesta {
  margin-bottom: 16px;
  height: 60px;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
}


.etab {
  background-color: #d9edff;
}

.btn_continuar {
  background-color: #37759c;
  color: #ffffff;
  border-radius: 20px;
  padding: 10px 20px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  width: 150px;
}

#app{
text-align: center;
}


</style>