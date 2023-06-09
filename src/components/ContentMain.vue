<template>
    <div class="rounded">
        <div class="profile-coment bg-white h-50">
            <!--  -->
            <div class="profile-header">
                <div class="d-flex align-items-center">
                    <div class="profile-avatar"></div>
                    <div class="flex-column">
                        <div class="col">
                            <div class="item-name rounded">
                                <span>Usuario 1</span>
                            </div>
                        </div>
                        <div class="col">
                            <input type="text" class="item-coment rounded h-50 w-100"
                                placeholder="¿En que estas pensando?" />
                        </div>
                    </div>
                </div>
            </div>
            <!--  -->
        </div>
    </div>
</template>

<script>
export default {
    name: "ModuloComentario",
};
</script>

<style scoped>
.profile-coment {
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 39vw;
    padding: 3vh;
    margin: 2vh 0 0 2vh;
    border-radius: 15px;
}

.profile-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #d1d1d1;
    margin: 0 1vw 0 0vw;
}

.item-name {
    padding: 0 25vw 0 0;
    margin: 0 0 1vh 0;
}

.item-coment {
    color: #2b2b2b;
    padding: 1vh 16vw 5vh 1vw;
    border: #d1d1d1 solid 1px;
    outline: none;
}
</style>
