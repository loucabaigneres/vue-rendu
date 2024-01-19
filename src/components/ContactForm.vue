<script>
import { useContactStore } from "@/stores/contact";

export default {
    name: "ContactForm",
    props: ["onSubmit"],
    data() {
        return {
            formContact: {
                name: "",
                number: "",
            },
        };
    },
    setup() {
        const contactStore = useContactStore();
        return {
            contactStore,
        };
    },
    methods: {
        addContact() {
            this.contactStore.addContact(this.formContact);
            this.formContact = {
                name: "",
                number: "",
            };
            if (this.onSubmit) {
                this.onSubmit();
            }
            console.log(this.formContact);
        },
        resetForm() {
            this.formContact = {
                name: "",
                number: "",
            };
        },
    },
};
</script>

<template>
    <main>
        <form @submit.prevent="addContact()">
            <div>
                <label for="name">Nom:</label>
                <input
                    id="name"
                    v-model="formContact.name"
                    type="text"
                    required
                />
            </div>
            <div>
                <label for="number">Numéro de téléphone:</label>
                <input
                    id="number"
                    v-model="formContact.number"
                    type="tel"
                    required
                />
            </div>
            <div>
                <button type="reset" @click="resetForm">Annuler</button>
                <button type="submit">Confirmer</button>
            </div>
        </form>
    </main>
</template>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>
