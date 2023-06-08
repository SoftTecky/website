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
            <div class="Cuadro-inferior">
                <div class="Cuadro-Grafico"> GRAFICO DE TELARANIA </div>
                <div class="Primer-Cuadro"></div>
                <div class="Segundo-Cuadro"></div>
                <div class="Tercer-Cuadro"></div>
                <div class="Cuarto-Cuadro"></div>
                <div class="Quinto-Cuadro"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProfileUser",
}

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

/* * { border: 1px solid red; } */

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
    margin: 2vh 0 0 2vh;
}

.Cuadro-Grafico {
    width: 300px;
    height: 238px;
    background-color: hsl(180, 3%, 57%);

    padding: 3vh;
    margin: -0.5vh 0 0 1vh;
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

    margin-left: 51vh;
}

.Primer-Cuadro {
    padding: 3vh;
    margin-top: -37vh;
}

.Segundo-Cuadro {
    padding: 3vh;
    margin-top: 1vh;
}

.Tercer-Cuadro {
    padding: 3vh;
    margin-top: 1vh;
}

.Cuarto-Cuadro {
    padding: 3vh;
    margin-top: 1vh;
}

.Quinto-Cuadro {
    padding: 3vh;
    margin-top: 1vh;
}

/* ------------------------------------------------------------------ */

@media screen and (min-width: 1920px) {
    .container {
    padding: 2vh;
    margin: 0;
}

.Cuadrado-Principal {
    width: 90vw;
    max-width: 900px;
    height: 300px;
    background-color: hsl(180, 38%, 41%);
    margin: 0 auto;
    padding: 3vh;
    box-sizing: border-box;
}

.Editar {
    width: 230px;
    height: 70px;
    background-color: hsl(180, 3%, 57%);
    padding: 3vh;
    margin: 0 auto;
    margin-top: 2vh;
    border-radius: 10px;
}

.Cuadro-foto {
    width: 300px;
    height: 250px;
    background-color: hsl(180, 3%, 57%);
    padding: 3vh;
    margin: 2vh auto;
    border-radius: 15px;
}

.Cuadro-nombre {
    width: 455px;
    height: 70px;
    background-color: hsl(180, 3%, 57%);
    padding: 3vh;
    margin: 2vh auto;
    border-radius: 8px;
}

.Cuadro-info {
    width: 90vw;
    max-width: 700px;
    height: 165px;
    background-color: hsl(180, 3%, 57%);
    padding: 3vh;
    margin: 2vh auto;
    border-radius: 5px;
}

.Cuadro-inferior {
    width: 90vw;
    max-width: 900px;
    height: 274px;
    background-color: hsl(180, 38%, 41%);
    margin: 2vh auto;
    padding: 3vh;
    box-sizing: border-box;
}

.Cuadro-Grafico {
    width: 300px;
    height: 238px;
    background-color: hsl(180, 3%, 57%);
    padding: 3vh;
    margin: -0.5vh auto;
    border-radius: 15px;
}

.Primer-Cuadro,
.Segundo-Cuadro,
.Tercer-Cuadro,
.Cuarto-Cuadro,
.Quinto-Cuadro {
    width: 90vw;
    max-width: 706px;
    height: 37px;
    background-color: hsl(180, 3%, 57%);
    margin: 1vh auto;
}

.Primer-Cuadro,
.Segundo-Cuadro,
.Tercer-Cuadro,
.Cuarto-Cuadro,
.Quinto-Cuadro {
    padding: 3vh;
}

}

</style>