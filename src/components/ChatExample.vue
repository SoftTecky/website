<template>
    <div class="chat">
        <div class="chat-window">
            <div v-for="message in messages" :key="message.id" class="message">
                <div class="message-content">{{ message.content }}</div>
                <div class="message-timestamp">{{ message.timestamp }}</div>
            </div>
        </div>
        <div class="chat-input">
            <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Escribe un mensaje..." />
            <button @click="sendMessage">Enviar</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ModuloChat",
    data() {
        return {
            messages: [
                { id: 1, content: "Hola", timestamp: "10:00 AM" },
                { id: 2, content: "¡Hola! ¿Cómo estás?", timestamp: "10:01 AM" },
                { id: 3, content: "Bien, ¿y tú?", timestamp: "10:02 AM" },
            ],
            newMessage: "",
        };
    },
    methods: {
        sendMessage() {
            if (this.newMessage.trim() !== "") {
                const newId = this.messages.length + 1;
                const newTimestamp = this.getCurrentTimestamp();
                this.messages.push({
                    id: newId,
                    content: this.newMessage,
                    timestamp: newTimestamp,
                });
                this.newMessage = "";
            }
        },
        getCurrentTimestamp() {
            const currentDate = new Date();
            const hours = String(currentDate.getHours()).padStart(2, "0");
            const minutes = String(currentDate.getMinutes()).padStart(2, "0");
            return `${hours}:${minutes}`;
        },
    },
};
</script>

<style scoped>
.chat {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.chat-window {
    flex-grow: 1;
    overflow-y: auto;
    border: 1px solid #ccc;
    padding: 10px;
}

.message {
    margin-bottom: 10px;
}

.message-content {
    background-color: #f0f0f0;
    padding: 8px;
    border-radius: 8px;
}

.message-timestamp {
    font-size: 0.8em;
    color: #888;
}

.chat-input {
    display: flex;
    align-items: center;
    padding: 10px;
    border-top: 1px solid #ccc;
}

input {
    flex-grow: 1;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 5px;
}

button {
    padding: 5px 10px;
    border: none;
    background-color: #007bff;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
}
</style>  