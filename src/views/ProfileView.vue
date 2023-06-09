<template>
    <div class="container">
        <div class="contentProfil">
            <div class="Cuadrado-Principal">
                <button class="Editar"> Editar </button>
                <div class="Cuadro-foto"> IMAGEN USUARIO</div>
                <div class="Cuadro-nombre">@usuario</div>
                <div class="Cuadro-info"> informacion de un usuario generico</div>
            </div>
        </div>
        <div class="conetntGraph">
            <div class="Cuadro-inferior"></div>
            <div class="Cuadro-Grafico"> GRAFICO DE TELARANIA </div>
            <div class="Primer-Cuadro"></div>
            <div class="Segundo-Cuadro"></div>
            <div class="Tercer-Cuadro"></div>
            <div class="Cuarto-Cuadro"></div>
            <div class="Quinto-Cuadro"></div>
        </div>
    </div>
    <Radar :data="data" :options="options"/>
</template>

<script lang="js">
export default {
    name: "ProfileUser",
}
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js'
import { Radar } from 'vue-chartjs'
import * as chartConfig from './Information.js'

ChartJS.register(
  RadialLinearScale,
  PointElement, 
  LineElement,
  Filler,
  Tooltip,
  Legend
)
</script>

<style scoped>
.container {
    padding: -2vh;
    margin: 0.5vh 0 0 -2vh;
}

.Cuadrado-Principal {
    width: 78vw;
    height: 300px;
    background-color: hsl(180, 38%, 41%);

    padding: 3vh;
    margin: 2vh 0 0 2vh;
}

* {
    border: 1px solid red;
}
.Editar {
    width: 230px;
    height: 70px;
    background-color: hsl(180, 3%, 57%);
    padding: 3vh;
    /* top vh, right vw, bottom vh, left vw */
    margin: 0 0 0 124vh;
    border-radius: 10px;
}
.Cuadro-foto {
    width: 300px;
    height: 250px;
    background-color: hsl(180, 3%, 57%);
    padding: 3vh;
    margin: -11vh 0 0 1vh;
    border-radius: 15px;
}
.Cuadro-nombre {
    width: 455px;
    height: 70px;
    background-color: hsl(180, 3%, 57%);
    padding: 3vh;
    margin: -40vh 0 0 51vh;
    border-radius: 8px;
}
.Cuadro-info {
    width: 700px;
    height: 165px;
    background-color: hsl(180, 3%, 57%);
    padding: 3vh;
    margin: 2vh 0 0 51vh;
    border-radius: 5px;
}
/* ------------------------------------------------------------------ */
.Cuadro-inferior {
    width: 78vw;
    height: 274px;
    background-color: hsl(180, 38%, 41%);

    padding: 3vh;
    margin: 53vh 0 0 2vh;
}

.Cuadro-Grafico {
    width: 300px;
    height: 238px;
    background-color: hsl(180, 3%, 57%);

    padding: 3vh;
    margin: 56vh 0 0 5vh;
    border-radius: 15px;
}

.Primer-Cuadro,
.Segundo-Cuadro,
.Tercer-Cuadro,
.Cuarto-Cuadro,
.Quinto-Cuadro {
    width: 706px;
    height: 37px;
    background-color: hsl(180, 3%, 57%);

    margin-left: 55vh;
}

.Primer-Cuadro {
    padding: 3vh;
    margin-top: 56vh;
}

.Segundo-Cuadro {
    padding: 3vh;
    margin-top: 64vh;
}

.Tercer-Cuadro {
    padding: 3vh;
    margin-top: 72vh;
}

.Cuarto-Cuadro {
    padding: 3vh;
    margin-top: 80vh;
}

.Quinto-Cuadro {
    padding: 3vh;
    margin-top: 88vh;
}</style>