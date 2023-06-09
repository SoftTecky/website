<script setup>
import {ref} from "vue"

import { INSERT_ONE_EVALUATION } from "@/graphql-operations";
import { useMutation } from "@vue/apollo-composable";
import {useRoute} from "vue-router";
import {useAuthStore} from "@/stores/auth";

const effective_communication = ["Comunicación Efectiva",
  "Capacidad para expresarse claramente y de manera efectiva tanto verbalmente como por escrito.",
  "Habilidad para escuchar activamente y comprender las necesidades y requerimientos de los demás.",
  "Habilidad para transmitir información técnica de forma comprensible a diferentes audiencias."]
const teamwork = ["Trabajo en Equipo",
  "Habilidad para colaborar con otros miembros del equipo y contribuir con fortalezas individuales.",
  "Capacidad para trabajar en proyectos multidisciplinarios y participar activamente en la resolución de problemas en equipo.",
  "Habilidad para mantener relaciones profesionales y trabajar en armonía con los demás."]
const critical_thinking = ["Pensamiento Crítico",
  "Capacidad para analizar problemas complejos y encontrar soluciones adecuadas.",
  "Habilidad para evaluar situaciones desde diferentes perspectivas y tomar decisiones bien fundamentadas.",
  "Capacidad para analizar datos y evidencias de manera objetiva."]
const adaptability = ["Adaptabilidad",
  "Capacidad para ajustarse a cambios en los requerimientos del proyecto y a diferentes situaciones laborales.",
  "Habilidad para enfrentar y manejar situaciones de cambio y ambigüedad de manera efectiva.",
  "Capacidad para identificar problemas y analizarlos de manera efectiva."]
const problem_solving = ["Resolución de Problemas",
  "Capacidad para identificar problemas y analizarlos de manera efectiva.",
  "Habilidad para encontrar soluciones creativas y eficientes a problemas técnicos y funcionales.",
  "Habilidad para implementar soluciones y evaluar su efectividad."]
const detail_attention = [
  "Orientación al Detalle",
  "Habilidad para trabajar con precisión y cuidado en los detalles.",
  "Capacidad para revisar y verificar el trabajo realizado para asegurar la calidad y confiabilidad del software y sistemas de TI.",
  "Habilidad para seguir procedimientos y estándares establecidos."]

const softskills = [
  effective_communication,
  teamwork,
  critical_thinking,
  adaptability,
  problem_solving,
  detail_attention
]

const currentSkill = ref(0)

const skill1 = ref(0)
const skill2 = ref(0)
const skill3 = ref(0)
const terminated = ref(false)

const route = useRoute()

const insertOneEvaluation = useMutation(INSERT_ONE_EVALUATION)

insertOneEvaluation.onDone(() => {
  skill1.value = 0
  skill2.value = 0
  skill3.value = 0

  if (currentSkill.value < 5) {
    currentSkill.value++
  } else {
    terminated.value = true
    alert("Evaluacion completada, gracias por su tiempo")
  }
})

const nextSkill = async () => {
  const value = parseInt(((skill1.value + skill2.value + skill3.value) / 3).toString());

  await insertOneEvaluation.mutate({
    date: new Date().toISOString(),
    evaluated_user_id: route.params.id,
    evaluating_user_id: useAuthStore().getId,
    result: value,
    softskill_id: currentSkill.value + 1
  })
}
</script>

<template>
  <div class="evaluation">
    <div class="label izq"> <!-- label de puntuacion alineado ala izquierda -->
      Puntuacion del 1 a 5
    </div>
    <div class="level izq">
      <div class="list"> <!-- label de las puntuaciones   -->
        <p>1 Necesita mejorar</p>
        <p>2 En Desacuerdo</p>
        <p>3 Competente</p>
        <p>4 Bueno</p>
        <p>5 Exelente</p>
      </div>
    </div>
    <div class="unodedoce"> <!-- numero de la seccion  -->
      <div class="num">1</div>
      <div>Seccion de</div>
      <div class="num">12</div>
    </div>
    <div class="SeccionPreguntas">
      <div class="izq com">
        <p>{{ softskills[currentSkill][0] }}</p> <!-- titulo de la seccion  -->
      </div>
      <div class="preguntaLabel">
        <div class="preguntaLabel_pregunta">
          <p>Pregunta</p> <!-- label para la pregunta  -->
        </div>
        <div class="preguntaLabel_puntuacion">
          <p>Puntuacion</p> <!-- label para la puntuacion  -->
        </div>
      </div>
      <div class="cuestionario">
        <div class="preguntas">
          <p>{{ softskills[currentSkill][1] }}</p>
          <p>{{ softskills[currentSkill][2] }}</p> <!-- preguntas que se mostraran -->
          <p>{{ softskills[currentSkill][3] }}</p>
        </div>
        <div class="puntuacion">
          <div class="respuesta"> <!-- radio buttons para responder las preguntas -->
            <div>
              <input type="radio" v-model="skill1" name="skill1" :value="1" id="one"/>
              <label for="one">1</label>

              <input type="radio" v-model="skill1" name="skill1" :value="2" id="two"/>
              <label for="two">2</label>

              <input type="radio" v-model="skill1" name="skill1" :value="3" id="tree"/>
              <label for="tree">3</label>


              <input type="radio" v-model="skill1" name="skill1" :value="4" id="four"/>
              <label for="four">4</label>


              <input type="radio" v-model="skill1" name="skill1" :value="5" id="five"/>
              <label for="five">5</label>
            </div>
          </div>
          <div class="respuesta">
            <div>
              <input type="radio" v-model="skill2" name="skill2" :value="1" id="one"/>
              <label for="one">1</label>

              <input type="radio" v-model="skill2" name="skill2" :value="2" id="two"/>
              <label for="two">2</label>

              <input type="radio" v-model="skill2" name="skill2" :value="3" id="tree"/>
              <label for="tree">3</label>

              <input type="radio" v-model="skill2" name="skill2" :value="4" id="four"/>
              <label for="four">4</label>

              <input type="radio" v-model="skill2" name="skill2" :value="5" id="five"/>
              <label for="five">5</label>
            </div>
          </div>
          <div class="respuesta">
            <div>
              <input type="radio" v-model="skill3" name="skill3" :value="1" id="one"/>
              <label for="one">1</label>

              <input type="radio" v-model="skill3" name="skill3" :value="2" id="two"/>
              <label for="two">2</label>

              <input type="radio" v-model="skill3" name="skill3" :value="3" id="tree"/>
              <label for="tree">3</label>

              <input type="radio" v-model="skill3" name="skill3" :value="4" id="four"/>
              <label for="four">4</label>

              <input type="radio" v-model="skill3" name="skill3" :value="5" id="five"/>
              <label for="five">5</label>
            </div>
          </div> <!-- fin de radio button para responder las preguntas -->
        </div>
      </div>
    </div>

    <div id="continuar">
      <button v-if="!terminated" class="btn_continuar" @click="nextSkill">Continuar</button> <!-- accion del boton continuar -->
      <router-link v-else class="btn_continuar" to="/">Terminar</router-link> <!-- accion del boton continuar -->
    </div>
  </div>
</template>

<style scoped>
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

.evaluation {
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
  margin-bottom: 0;
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


.evaluation {
  background-color: #d9edff;
}

#continuar {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
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
</style>