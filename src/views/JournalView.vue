<script>
import { useCallStore } from "@/stores/call";

export default {
    setup() {
        const callStore = useCallStore();

        const calls = callStore.calls;

        const callBack = (number) => {
            console.log(`Calling back ${number}`);
        };

        return {
            calls,
            callBack,
        };
    },
};
</script>

<template>
    <main>
        <div class="call-history">
            <div
                v-for="call in calls"
                :key="call.date + call.time"
                class="call-item"
            >
                <div>{{ call.display }}</div>
                <div>{{ call.date }}</div>
                <div>{{ call.time }}</div>
                <button @click="callBack(call.number)">Rappeler</button>
            </div>
        </div>
    </main>
</template>

<style scoped>
.call-history {
    margin-top: 20px;
}

.call-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
}
</style>
