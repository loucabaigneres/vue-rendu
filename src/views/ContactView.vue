<script>
import ContactCard from "@/components/ContactCard.vue";
import ContactForm from "@/components/ContactForm.vue";
import { useContactStore } from "@/stores/contact";

export default {
    name: "ContactView",
    components: {
        ContactCard,
        ContactForm,
    },
    data() {
        return {
            contactList: [
                { id: 1, name: "John Doe", number: "1234567890" },
                { id: 2, name: "Jane Doe", number: "0987654321" },
                { id: 3, name: "Jean Doe", number: "0824648633" },
            ],
            showForm: false,
        };
    },
    methods: {
        closeForm() {
            this.showForm = false;
        },
    },
    setup() {
        const contactStore = useContactStore();
        return {
            contactStore,
        };
    },
    computed: {
        contacts() {
            return this.contactStore.contacts;
        },
    },
};
</script>

<template>
    <main>
        <div class="cards">
            <div class="add-contact" @click="showForm = true">
                <img src="../assets/add.png" alt="add" width="32px" />
            </div>
            <ContactForm v-if="showForm" :onSubmit="closeForm" />
            <div v-for="contact in contacts" :key="contact.name">
                <ContactCard :contact="contact" />
            </div>
        </div>
    </main>
</template>

<style scoped>
.add-contact {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 8px;
    background-color: #4b4351;
}

.add-contact > img {
    filter: invert(1);
}
</style>
