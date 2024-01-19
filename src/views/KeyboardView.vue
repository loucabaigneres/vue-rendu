<script>
import Keyboard from "@/components/Keyboard.vue";
import ContactCard from "@/components/ContactCard.vue";
import { useCallStore } from "@/stores/call";
import { useContactStore } from "@/stores/contact";

export default {
    components: {
        Keyboard,
        ContactCard,
    },
    data() {
        return {
            dialedNumber: "",
            matchingContacts: [],
        };
    },
    setup() {
        const callStore = useCallStore();
        const contactStore = useContactStore();
        return {
            callStore,
            contactStore,
        };
    },
    methods: {
        onCallNumber(number) {
            if (number !== undefined) {
                this.dialedNumber += number;
                this.findContact();
            }
        },
        onCall() {
            const now = new Date();
            const matchingContact = this.contactStore.contacts.find(
                (contact) => contact.number === this.dialedNumber
            );
            const call = {
                display: matchingContact
                    ? matchingContact.name
                    : this.dialedNumber,
                date: now.toLocaleDateString(),
                time: now.toLocaleTimeString(),
            };
            this.callStore.addCall(call);
            this.dialedNumber = "";
            this.matchingContacts = [];
        },
        findContact() {
            this.matchingContacts = this.contactStore.contacts.filter(
                (contact) => contact.number.startsWith(this.dialedNumber)
            );
        },
    },
};
</script>

<template>
    <main>
        <div class="display-container">
            <div class="number-display">{{ dialedNumber }}</div>
            <Keyboard @call-number="onCallNumber" @call="onCall" />
            <ContactCard
                v-for="contact in matchingContacts"
                :key="contact.number"
                :contact="contact"
            />
        </div>
    </main>
</template>

<style scoped>
.display-container {
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    min-height: 50px;
}

.number-display {
    font-size: 2em;
    text-align: center;
    margin-bottom: 20px;
}

.contact-card {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 20px;
}
</style>
