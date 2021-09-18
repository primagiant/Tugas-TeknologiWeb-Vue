<template>
    <div class="font-quicksand">
        <div class="m-8">
            <h1 class="text-2xl md:text-3xl">Kasir App</h1>
        </div>

        <div class="grid grid-rows-auto md:grid-cols-2 gap-4 mx-8 bg-indigo-50 shadow-md rounded-xl text-sm">
            <div class="w-full p-6">
                <p class="my-2 text-lg font-bold">Input Items</p>
                <div class="mb-3">
                    <div class="mb-2">
                        <label class="block text-sm font-medium text-gray-700" for="namaBarang">Nama Barang</label>
                        <div class="mt-1">
                            <input type="text" id="namaBarang" placeholder="" />
                            <span class="ml-2 text-xs opacity-80">Contoh: Aqua</span>
                        </div>
                    </div>
                    <div class="mb-2">
                        <label class="block text-sm font-medium text-gray-700" for="namaBarang">Type Barang</label>
                        <div class="mt-1">
                            <select name="type" id="type">
                                <option value="" hidden>Pilih Type Barang</option>
                                <option value="">Test</option>
                                <option value="">Test</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="md:hidden" />
            <div class="w-full p-6">
                <p class="my-2 text-lg font-bold">List Items</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "KasirBody",
};
</script>