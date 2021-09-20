<template>
    <div class="home">
        <Navbar class="absolute top-0 left-0 right-0" />
        <SideBar class="hidden md:block md:absolute top-0" />
        <HomeBody class="min-h-screen md:pl-72 pt-24 bg-gray-100" />
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import SideBar from "@/components/SideBar.vue";
import HomeBody from "@/components/Home/HomeBody.vue";

export default {
    name: "Home",
    components: {
        Navbar,
        SideBar,
        HomeBody,
    },
};
</script>
