<template>

    <div class="box h-100 w-100">
        <span> Perfil de usuario </span>
    </div>
    <div class= "Cuadrado-Principal"> </div>
    <div class="Cuadro-foto"></div>
    <div class="Cuadro-nombre"></div>
    <div class="Cuadro-info"></div>
    <div class="Cuadro-inferior"></div>
    <div class="Primer-Cuadro"></div>
    <div class="Segundo-Cuadro"></div>
    <div class="Tercer-Cuadro"></div>
    <div class="Cuarto-Cuadro"></div>
    <div class="Quinto-Cuadro"></div>

    <button class="Editar">  Editar </button>


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
.Cuadrado-Principal {
width: 1250px;
height: 300px;
background-color: hsl(180, 38%, 41%);
position: absolute;
left: 10px;
top: 110px;
}
.Cuadro-foto {
width: 300px;
height: 250px;
background-color: hsl(180, 3%, 57%);
position: absolute;
left: 30px;
top: 135px;
}
.Cuadro-nombre{
width: 600px;
height: 70px;
background-color: hsl(180, 3%, 57%);
position: absolute;
left: 350px;
top: 135px;
}
.Cuadro-info {
width: 850px;
height: 165px;
background-color: hsl(180, 3%, 57%);
position: absolute;
left: 350px;
top: 220px;
}
.Cuadro-inferior{
width: 1250px;
height: 300px;
background-color: hsl(180, 38%, 41%);
position: absolute;
left: 10px;
top: 450px; 
}
.Primer-Cuadro{
width: 850px;
height: 37px;
background-color: hsl(180, 3%, 57%);
position: absolute;
left: 350px;
top: 470px;
}
.Segundo-Cuadro{
width: 850px;
height: 37px;
background-color: hsl(180, 3%, 57%);
position: absolute;
left: 350px;
top: 527px;
}
.Tercer-Cuadro{
width: 850px;
height: 37px;
background-color: hsl(180, 3%, 57%);
position: absolute;
left: 350px;
top: 583px;
}
.Cuarto-Cuadro{
width: 850px;
height: 37px;
background-color: hsl(180, 3%, 57%);
position: absolute;
left: 350px;
top: 643px;
}
.Quinto-Cuadro{
width: 850px;
height: 37px;
background-color: hsl(180, 3%, 57%);
position: absolute;
left: 350px;
top: 699px;
}

.Editar{
width: 230px;
height: 70px;
background-color: hsl(180, 3%, 57%);
position: absolute;
left: 970px;
top: 135px;
}
</style>