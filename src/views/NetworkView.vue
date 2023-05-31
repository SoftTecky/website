<template>
        <div class="row">
            <div class="col-md-2 custom-margin-right">
                <div class="user-list">
                    <ul class="user">
                        <a class="nav-link btn">
                            <i class="fs-4 bi-people"></i>
                            <span class="ms-1">Usuario 1</span>
                        </a>
                        <a class="nav-link btn">
                            <i class="fs-4 bi-people"></i>
                            <span class="ms-1">Usuario 2</span>
                        </a>
                        <a class="nav-link btn">
                            <i class="fs-4 bi-people"></i>
                            <span class="ms-1">Usuario 3</span>
                        </a>
                        <a class="nav-link btn">
                            <i class="fs-4 bi-people"></i>
                            <span class="ms-1">Usuario 4</span>
                        </a>
                    </ul>
                </div>
            </div>
            <div class="col-md-6 custom-margin-left">
                <div class="chat-window">
                    <!-- componente -->
                    <chat></chat>
                </div>
            </div>
        </div>
</template>

<script>
import ModuloChat from "@/components/ChatExample.vue";

export default {
    name: "MiRed",
    components: {
        chat: ModuloChat,
    },
};
</script>

<style scoped>
/* * {
    border: solid red 1px;
} */

.row {
    padding: 3vh;
    margin: 2vh 0 0 2vh;
}

.custom-margin-right {
    margin-right: 5vh;
}

.user-list {
    width: 12vw;
    height: 100%;
    padding: 10px;
    background: burlywood;
}
div.user-list {
    border: 1px solid #ff0000;
}
.chat-window {
    flex-grow: 1;
    overflow-y: auto;
    border: 1px solid #12be4b;
    padding: 10px;
    background: burlywood;
}
</style>