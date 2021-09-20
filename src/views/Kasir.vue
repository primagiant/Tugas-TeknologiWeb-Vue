<template>
    <div class="kasir">
        <Navbar class="absolute top-0 left-0 right-0" />
        <KasirBody class="min-h-screen pt-24 bg-gray-100" />
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import KasirBody from "@/components/Kasir/KasirBody.vue";

export default {
    name: "Kasir",
    components: {
        Navbar,
        KasirBody,
    },
};
</script>