<script>
import { useCallStore } from "@/stores/call";

export default {
    props: {
        contact: {
            type: Object,
            required: true,
        },
    },
    setup() {
        const callStore = useCallStore();
        return {
            callStore,
        };
    },
    methods: {
        callContact() {
            const now = new Date();
            const call = {
                display: this.contact.name,
                number: this.contact.number,
                date: now.toLocaleDateString(),
                time: now.toLocaleTimeString(),
            };
            this.callStore.addCall(call);
        },
    },
};
</script>

<template>
    <div class="contact-card">
        <div>{{ contact.name }}</div>
        <div>{{ contact.number }}</div>
        <button @click="callContact">Appeler</button>
    </div>
</template>

<style scoped>
.contact-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
}
</style>
