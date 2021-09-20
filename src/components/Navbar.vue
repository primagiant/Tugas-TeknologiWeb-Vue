<template>
    <nav class="h-24 bg-indigo-50 flex justify-between items-center shadow-lg px-12">
        <div class="flex justify-center items-center">
            <h1 class="text-xl md:text-2xl font-pacifico">My Apps</h1>
            <router-link class="font-quicksand font-xl ml-8 p-4 hover:bg-white" to="/">Home</router-link>
            <router-link class="font-quicksand font-xl ml-4 p-4 hover:bg-white" to="/kasir">Kasir</router-link>
            <router-link class="font-quicksand font-xl ml-4 p-4 hover:bg-white" to="/about">About</router-link>
            <router-link class="font-quicksand font-xl ml-4 p-4 hover:bg-white" to="/contact">Contact</router-link>
        </div>
        <div class="h-10 w-10 rounded-full bg-white flex justify-center items-center mr-12">
            <img class="h-6" src="../assets/logo.png" alt="image not found" />
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
};
</script>
