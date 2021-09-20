<template>
    <div class="home">
        <Navbar class="absolute top-0 left-0 right-0" />
        <AboutBody class="min-h-screen pt-24 bg-gray-100" />
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import AboutBody from "@/components/About/AboutBody.vue";

export default {
    name: "About",
    components: {
        Navbar,
        AboutBody,
    },
};
</script>
