<template>
    <div class="font-quicksand">
        <div class="m-8">
            <div class="mb-6">
                <h1 class="text-2xl md:text-3xl">About Me</h1>
            </div>

            <div class="grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 gap-3">
                <div class="">
                    <div class="bg-indigo-100 p-4 grid grid-cols-3 gap-3 items-center justify-between rounded-xl">
                        <div class="h-32">
                            <img class="h-full" src="../../assets/avatar.svg" alt="Profile" />
                        </div>
                        <div class="col-span-2">
                            <h3 class="text-lg mb-2">Profile Singkat</h3>
                            <div>
                                <p class="text-sm">Kadek Prima Giant Marta Dinata</p>
                                <p class="text-sm">Mahasiswa</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-indigo-100 p-4 grid grid-rows-2 gap-3 rounded-xl">
                    <div class="max-h-48 w-full flex items-center justify-center">
                        <img class="h-full" src="../../assets/pic3.svg" alt="Profile" />
                    </div>
                    <div class="px-8 pb-4">
                        <h3 class="text-lg mb-2">Skill</h3>
                        <div class="">
                            <p class="text-sm mb-1">Html</p>
                            <div class="w-full bg-white h-3 rounded-full mb-2">
                                <div class="w-10/12 bg-indigo-400 h-full rounded-full"></div>
                            </div>
                            <p class="text-sm mb-1">Css</p>
                            <div class="w-full bg-white h-3 rounded-full mb-2">
                                <div class="w-11/12 bg-indigo-400 h-full rounded-full"></div>
                            </div>
                            <p class="text-sm mb-1">Javascript</p>
                            <div class="w-full bg-white h-3 rounded-full mb-2">
                                <div class="w-5/12 bg-indigo-400 h-full rounded-full"></div>
                            </div>
                            <p class="text-sm mb-1">PHP</p>
                            <div class="w-full bg-white h-3 rounded-full mb-2">
                                <div class="w-6/12 bg-indigo-400 h-full rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "About",
};
</script>