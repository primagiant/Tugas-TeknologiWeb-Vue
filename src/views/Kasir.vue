<template>
    <div class="kasir">
        <Navbar class="absolute top-0 left-0 right-0" />
        <SideBar class="hidden md:block absolute top-0" />
        <KasirBody class="min-h-screen md:pl-72 pt-24 bg-gray-100" />
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import SideBar from "@/components/SideBar.vue";
import KasirBody from "@/components/Kasir/KasirBody.vue";

export default {
    name: "Kasir",
    components: {
        Navbar,
        SideBar,
        KasirBody,
    },
};
</script>