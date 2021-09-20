<template>
    <div class="home">
        <Navbar class="absolute top-0 left-0 right-0" />
        <HomeBody class="min-h-screen pt-24 bg-gray-100" />
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import HomeBody from "@/components/Home/HomeBody.vue";

export default {
    name: "Home",
    components: {
        Navbar,
        HomeBody,
    },
};
</script>
