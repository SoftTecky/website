<template>
    <div class="container">
        <div class="contentProfil">
            <div class="Cuadrado-Principal"> 
                <div class="Cuadro-foto"> IMAGEN USUARIO</div>
                <div class="Cuadro-nombre">@usuario</div>
                <div class="Cuadro-info"> informacion de un usuario generico</div>
                <button class="Editar"> Editar </button>
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
.box {
    background-color: aqua;
}

.container {
    padding: -2vh;
    margin: 0.5vh 0 0 -2vh;
}

.Cuadrado-Principal {
    width: 78vw;
    height: 300px;
    background-color: hsl(180, 38%, 41%);
    position: relative;
    padding: 3vh;
    margin: 2vh 0 0 2vh;
}

.Cuadro-foto {
    width: 300px;
    height: 250px;
    background-color: hsl(180, 3%, 57%);
    position: relative;
    padding: 3vh;
    margin: 0vh 0 0 0vh;
    border-radius: 15px;
}

.Cuadro-nombre {
    width: 465px;
    height: 70px;
    background-color: hsl(180, 3%, 57%);
    position: relative;
    padding: 3vh;
    margin: -31vh 0 0 39vh;
    border-radius: 8px;
}

.Editar {
    width: 230px;
    height: 70px;
    background-color: hsl(180, 3%, 57%);
    border: 1px solid red;
    padding: 3vh;
    margin: -50vh 0 0 129vh;
    border-radius: 10px;
}

.Cuadro-info {
    width: 706px;
    height: 165px;
    background-color: hsl(180, 3%, 57%);
    position: relative;
    padding: 3vh;
    margin: 1vh 0 0 39vh;
    border-radius: 5px;
}

.Cuadro-inferior {
    width: 78vw;
    height: 274px;
    background-color: hsl(180, 38%, 41%);
    position: relative;
    padding: 3vh;
    margin: 53vh 0 0 2vh;
}

.Cuadro-Grafico {
    width: 300px;
    height: 238px;
    background-color: hsl(180, 3%, 57%);
    position: relative;
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
    position: relative;
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
}
</style>