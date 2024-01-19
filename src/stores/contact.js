import { defineStore } from "pinia";

export const useContactStore = defineStore("contact", {
    state: () => ({
        contacts: [
            {
                name: "John Doe",
                number: "1234567890",
            },
            {
                name: "Jane Doe",
                number: "0987654321",
            },
            {
                name: "Jean Doe",
                number: "0824648633",
            },
        ],
    }),
    actions: {
        addContact(contact) {
            this.contacts.push(contact);
        },
    },
});
