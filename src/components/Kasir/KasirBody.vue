<template>
    <div class="font-quicksand">
        <div class="m-8">
            <h1 class="text-2xl md:text-3xl">Kasir App</h1>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 mx-8 bg-indigo-50 shadow-md rounded-xl text-sm">
            <!-- Input Items -->
            <div class="w-full p-6">
                <p class="my-2 text-lg font-bold">Input Items</p>

                <form @submit.prevent="addNewList" class="mb-3">
                    <!-- Kode Barang -->
                    <div class="mb-2">
                        <label class="block text-sm font-medium text-gray-700" for="namaBarang">Kode Barang</label>
                        <div class="mt-1">
                            <input v-model="input.kodeBarang" type="text" placeholder="Masukkan kode barang" />
                            <span class="ml-2 text-xs opacity-80">Contoh: AM01</span>
                        </div>
                    </div>
                    <!-- End Kode Barang -->

                    <!-- Nama Barang -->
                    <div class="mb-2">
                        <label class="block text-sm font-medium text-gray-700" for="namaBarang">Nama Barang</label>
                        <div class="mt-1">
                            <input v-model="input.namaBarang" type="text" placeholder="Masukkan nama barang" />
                            <span class="ml-2 text-xs opacity-80">Contoh: Aqua</span>
                        </div>
                    </div>
                    <!-- End Nama Barang -->

                    <!-- Type barang -->
                    <div class="mb-2">
                        <label class="block text-sm font-medium text-gray-700" for="namaBarang">Type Barang</label>
                        <div class="mt-1">
                            <select v-model="input.typeId" name="type" id="type">
                                <option v-for="type in types" :key="type.id" :value="type.id">{{ type.namaType }}</option>
                            </select>
                        </div>
                    </div>
                    <!-- End Type barang -->

                    <!-- Harga Barang-->
                    <div class="mb-2">
                        <label class="block text-sm font-medium text-gray-700" for="namaBarang">Harga Barang</label>
                        <div class="mt-1">
                            <input v-model="input.harga" type="number" placeholder="Masukkan harga barang" />
                            <span class="ml-2 text-xs opacity-80">Contoh: 5000</span>
                        </div>
                    </div>
                    <!-- End Harga Barang -->

                    <button class="py-2 px-3 rounded-md bg-yellow-500 text-white hover:bg-yellow-400">Save</button>
                </form>
            </div>
            <!-- End Input Items -->

            <!-- List Items -->
            <div class="w-full p-6 col-span-2">
                <p class="my-2 text-lg font-bold">List Items</p>
                <div class="w-full overflow-x-auto">
                    <table class="table-auto shadow-lg bg-white">
                        <thead>
                            <tr>
                                <th class="bg-blue-100 border text-center px-6 py-2">Kode</th>
                                <th class="bg-blue-100 border text-center px-6 py-2">Nama Barang</th>
                                <th class="bg-blue-100 border text-center px-6 py-2">Type</th>
                                <th class="bg-blue-100 border text-center px-6 py-2">Harga</th>
                                <th class="bg-blue-100 border text-center px-6 py-2">Quantity</th>
                                <th class="bg-blue-100 border text-center px-6 py-2">Total Harga</th>
                                <th class="bg-blue-100 border text-center px-6 py-2">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(list, index) in lists" :key="index">
                                <td class="border text-center px-6 py-2">{{ list.kodeBarang }}</td>
                                <td class="border text-center px-6 py-2">{{ list.namaBarang }}</td>
                                <td class="border text-center px-6 py-2">{{ getType(list.typeId) }}</td>
                                <td class="border text-center px-6 py-2">{{ list.harga }}</td>
                                <td class="border text-center px-6 py-2 w-28 flex items-center justify-center">
                                    <button class="px-2 py-1 rounded-full bg-red-600 text-white hover:bg-red-500" @click="handleMinButton(list.kodeBarang)" type="button">-</button>
                                    <span class="mx-2">
                                        {{ list.qtyVal }}
                                    </span>
                                    <button class="px-2 py-1 rounded-full bg-blue-600 text-white hover:bg-blue-500" @click="handlePlusButton(list.kodeBarang)" type="button">+</button>
                                </td>
                                <td class="border text-center px-6 py-2">{{ getHarga(list.kodeBarang) }}</td>
                                <td class="border text-center px-6 py-2 w-32 flex items-center justify-center">
                                    <button class="px-2 py-1 rounded-full bg-red-500 text-white hover:bg-red-600" @click="lists.splice(index, 1)" type="button">Hapus</button>
                                    <button class="px-2 py-1 rounded-full bg-yellow-400 text-white hover:bg-yellow-500" @click="handleEditButton(index, list)" type="button">Edit</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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
            lists: [],
            input: {
                qtyVal: 1,
            },
            tmp: null,
        };
    },
    methods: {
        getList: function (id) {
            let res = this.lists.filter((e) => {
                if (e.kodeBarang == id) return e;
            });
            return res;
        },
        getType: function (id) {
            let res = this.types.filter(function (e) {
                if (e.id == id) return e;
            });
            return res[0].namaType;
        },
        getHarga: function (id) {
            let res = this.getList(id);
            return res[0].qtyVal * res[0].harga;
        },
        handlePlusButton: function (id) {
            this.getList(id)[0].qtyVal++;
        },
        handleMinButton: function (id) {
            if (this.getList(id)[0].qtyVal != 1) this.getList(id)[0].qtyVal--;
        },
        handleEditButton: function (index, list) {
            this.tmp = index;
            this.input.kodeBarang = list.kodeBarang;
            this.input.namaBarang = list.namaBarang;
            this.input.typeId = list.typeId;
            this.input.harga = list.harga;
            this.input.qtyVal = list.qtyVal;
        },
        addNewList: function () {
            if (this.tmp != null) {
                Object.assign(this.lists[this.tmp], {
                    kodeBarang: this.input.kodeBarang,
                    namaBarang: this.input.namaBarang,
                    typeId: this.input.typeId,
                    harga: this.input.harga,
                    qtyVal: this.input.qtyVal,
                });
            } else {
                this.lists.push({
                    kodeBarang: this.input.kodeBarang,
                    namaBarang: this.input.namaBarang,
                    typeId: this.input.typeId,
                    harga: this.input.harga,
                    qtyVal: this.input.qtyVal,
                });
            }
            this.input.kodeBarang = "";
            this.input.namaBarang = "";
            this.input.typeId = "";
            this.input.harga = "";
            this.input.qtyVal = 1;
            this.tmp = null;
        },
    },
};
</script>