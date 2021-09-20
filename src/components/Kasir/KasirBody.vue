<template>
    <div class="font-quicksand">
        <div class="m-8">
            <h1 class="text-2xl md:text-3xl">Kasir App</h1>
        </div>

        <div class="grid grid-rows-auto md:grid-cols-2 gap-4 mx-8 bg-indigo-50 shadow-md rounded-xl text-sm">
            <!-- Input Items -->
            <div class="w-full p-6">
                <p class="my-2 text-lg font-bold">Input Items</p>

                <form class="mb-3">
                    <!-- Kode Barang -->
                    <div class="mb-2">
                        <label class="block text-sm font-medium text-gray-700" for="namaBarang">Kode Barang</label>
                        <div class="mt-1">
                            <input type="text" id="namaBarang" placeholder="Masukkan kode barang" />
                            <span class="ml-2 text-xs opacity-80">Contoh: AM01</span>
                        </div>
                    </div>
                    <!-- End Kode Barang -->

                    <!-- Nama Barang -->
                    <div class="mb-2">
                        <label class="block text-sm font-medium text-gray-700" for="namaBarang">Nama Barang</label>
                        <div class="mt-1">
                            <input type="text" id="namaBarang" placeholder="Masukkan nama barang" />
                            <span class="ml-2 text-xs opacity-80">Contoh: Aqua</span>
                        </div>
                    </div>
                    <!-- End Nama Barang -->

                    <!-- Type barang -->
                    <div class="mb-2">
                        <label class="block text-sm font-medium text-gray-700" for="namaBarang">Type Barang</label>
                        <div class="mt-1">
                            <select name="type" id="type">
                                <option hidden>Pilih Type</option>
                                <option v-for="type in types" :key="type.id" :value="type.id">{{ type.namaType }}</option>
                            </select>
                        </div>
                    </div>
                    <!-- End Type barang -->

                    <!-- Harga Barang dan Quantity-->
                    <div class="mb-2 flex gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700" for="namaBarang">Harga Barang</label>
                            <div class="mt-1">
                                <input type="number" id="namaBarang" placeholder="Masukkan harga barang" />
                                <span class="ml-2 text-xs opacity-80">Contoh: 5000</span>
                            </div>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700" for="namaBarang">Quantity</label>
                            <div class="mt-1 flex items-center justify-center gap-3">
                                <button class="px-4 py-2 rounded-full bg-red-600 text-white hover:bg-red-500" @click.prevent="handleMinButton" type="button">-</button>
                                <input class="w-12 text-center" type="text" id="namaBarang" :value="qtyVal" />
                                <button class="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-500" @click.prevent="handlePlusButton" type="button">+</button>
                            </div>
                        </div>
                    </div>
                    <!-- End Harga Barang dan Quantity -->

                    <button type="button" class="py-2 px-3 rounded-md bg-yellow-500 text-white hover:bg-yellow-400">Save</button>
                </form>
            </div>
            <!-- End Input Items -->

            <hr class="md:hidden" />

            <!-- List Items -->
            <div class="w-full p-6">
                <p class="my-2 text-lg font-bold">List Items</p>
                <table class="table-auto shadow-lg bg-white w-full">
                    <thead>
                        <tr>
                            <th class="bg-blue-100 border text-left px-6 py-2">Nama Barang</th>
                            <th class="bg-blue-100 border text-left px-6 py-2">Tipe</th>
                            <th class="bg-blue-100 border text-left px-6 py-2">Kode</th>
                            <th class="bg-blue-100 border text-left px-6 py-2">Harga</th>
                            <th class="bg-blue-100 border text-left px-6 py-2">Qty</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border px-6 py-2">Nama Barang</td>
                            <td class="border px-6 py-2">Tipe</td>
                            <td class="border px-6 py-2">Kode</td>
                            <td class="border px-6 py-2">Harga</td>
                            <td class="border px-6 py-2">Qty</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- End List Items -->
        </div>
    </div>
</template>

<script>
import typesData from "../../data/types.json";

export default {
    name: "KasirBody",
    data() {
        return {
            types: typesData,
            qtyVal: 1,
            lists: [],
        };
    },
    methods: {
        handlePlusButton: function () {
            this.qtyVal++;
        },
        handleMinButton: function () {
            if (this.qtyVal != 0) this.qtyVal--;
        },
        handleSaveButton: function () {
            return;
        },
    },
};
</script>