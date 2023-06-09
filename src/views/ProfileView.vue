<template>
    <div class="container">

        <div class="contentMain flex-column bg-white rounded">
            <!--  -->
            <div class="row col">
                <div class="profile-avatar col order-1">
                    <img src=" " alt="imagen de usuario" style="width: 100%; height: 100%;">
                </div>
                <div class="content-user col order-2">
                    <!-- p-3 -->
                    <div class="user-edit row ">
                        <div class="username col order-1 rounded">
                            <span>
                                @user
                            </span>
                        </div>
                        <!--  -->
                        <div class="btnEdit col order-2 rounded">
                            <button class="btn">
                                <span>
                                    Editar
                                </span>
                            </button>
                        </div>
                    </div>
                    <!-- p-3 -->
                    <div class="userdesc col order-3 rounded">
                        <span>
                            ¡Hola soy {@user}! Mis amigos me dicen ' ',
                            mis padres accidente y cuando estornudo todos
                            me dicen salud
                        </span>
                    </div>
                </div>
            </div>
            <!--  -->
        </div>
    </div>
    <!--  -->
    <div class="container2">
        <!--  -->
        <div class="contentGraph flex-column bg-white rounded">
            <!--  -->
            <div class="row">
                <div class="graphDisplay">
                    <div class="rounded">
                        <!-- aqui se muestra una vista previa del grafico [es solo un ejemplo visual] -->
                        GRAFICO DE TELARANIA
                    </div>
                </div>
                <div class="infoGarph">
                    <!-- aqui va unformacion del grafico, el porcentage y el nombre de la habilidad blanda evaluada -->
                    <!-- 1 -->
                    <div class="descGarph rounded">

                    </div>
                    <!-- 2 -->
                    <div class="descGarph rounded">

                    </div>
                    <!-- 3 -->
                    <div class="descGarph rounded">

                    </div>
                    <!-- 4 -->
                    <div class="descGarph rounded">

                    </div>
                    <!-- 5 -->
                    <div class="descGarph rounded">

                    </div>
                </div>
            </div>
            <!--  -->
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
.container2 {
    padding: 2vh 0 0 2vw;
    margin: 0.5vh 0 0 -2vh;
}
/* ------------------------------------------------------------------------------------------- */
.contentMain {
    width: 78vw;
    height: 43vh;
    padding: 3vh;
    margin: 2vh 0 0 2vh;
    border-radius: 15px;
    border: solid 1px #D9D9D9;
}

.profile-avatar {
    flex: 0 0 200px;
    /* Establece una anchura fija de 100px */
    height: 200px;
    border-radius: 10%;
    background-color: #d1d1d1;
    margin: 0 0 0 1vw;
    border: solid 1px #D9D9D9;
}

.content-user {
    width: 150vw;
    height: auto;
    /* background-color: #00ffc8; */
    flex: 1;
    /* Utiliza el espacio restante */
    /* top vh, right vw, bottom vh, left vw */
    margin: 0 0 0 0;
    padding: 0;
    /* border: solid 1px #D9D9D9; */

}

.user-edit {
    width: auto;
    height: auto;
    /* background-color: #0ee00e; */
    margin: 2vh 5vh 2vh 1vh;
    padding: 0;
}

.username {
    /* background-color: #9900ff; */
    padding: 2vh .5vh 1vh 0vh;
    border: solid 1px #D9D9D9;
}

.username span {
    text-align: justify;
    margin: 0 85vh 0 2vh;
    /* border: solid 1px red; */
}

.btnEdit {
    font-size: 12px;
    width: calc(30px / (100vh / 100));
    /* background-color: #e9586b; */
}

.btn {
    background-color: hsl(180, 3%, 57%);
    /* top vh, right vw, bottom vh, left vw */
    padding: 2vh 5vw 2vh 5vw;
    border-radius: 10px;
}

.userdesc {
    width: calc(100px / (100vh / 100));
    height: calc(50px / (100vh / 100));
    /* background-color: #ce1791; */
    border: solid 1px #D9D9D9;
    margin: 2vh 5vh 2vh 1vh;
    padding: 2vh 2vh 11vh 2vh;
    text-align: justify;
}

/* ------------------------------------------------------------------------------------------- */

/* * {
    border: solid 1px red;
} */

.contentGraph {
    width: 78vw;
    height: 50vh;
    padding: 1vh 0 1vh 0;
    margin: 0 0 0 0;
    border-radius: 15px;
    border: solid 1px #D9D9D9;
}

.graphDisplay {
    /* Establece una anchura fija de 100px */
    flex: 0 0 200px;
    height: 200px;
    border-radius: 10%;
    margin: 5vh 1vw 5vh 2vw;
    border: solid 1px #D9D9D9;
}

.infoGarph {
    width: 100vw;
    height: auto;
    /* Utiliza el espacio restante */
    flex: 1;
    /* top vh, right vw, bottom vh, left vw */
    margin: 0 0 0 0;
    padding: 0;
}

.descGarph {
    width: 59vw;
    height: 7vh;
    background-color: hsl(0, 0%, 85%);
    margin: 2vh 0 2vh 0;
}
</style>