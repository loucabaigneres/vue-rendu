<script>
export default {
    name: "Keyboard",
    data() {
        return {
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"],
        };
    },
    methods: {
        emitNumber(number) {
            this.$emit("call-number", number);
        },
        callNumber() {
            // this.$emit("call-number", this.value);
            this.$emit("call");
        },
    },
};
</script>

<template>
    <div class="numeric-keypad">
        <button
            v-for="number in numbers"
            :key="number"
            @click="emitNumber(number)"
        >
            {{ number }}
        </button>
        <button @click="callNumber">Appeler</button>
    </div>
</template>

<style scoped>
.numeric-keypad {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    justify-content: center;
    align-items: center;
}

.numeric-keypad button:last-child {
    grid-column-start: 2;
}
</style>
