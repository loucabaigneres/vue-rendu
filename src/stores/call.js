import { defineStore } from "pinia";

export const useCallStore = defineStore("call", {
    state: () => ({
        calls: [],
    }),
    actions: {
        addCall(call) {
            this.calls.push(call);
        },
    },
});
