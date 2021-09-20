<template>
    <div class="h-screen w-screen grid justify-center items-center">
        <div class="h-3/5 w-full">
            <img class="h-full" src="../assets/404.svg" alt="Page Not Found" />
            <div class="text-center w-full mt-5 animate-bounce">
                <router-link class="font-quicksand font-xl px-3 py-2 bg-indigo-400 hover:bg-indigo-500 text-white rounded-full" to="/">Go Back to Website</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "404",
};
</script>