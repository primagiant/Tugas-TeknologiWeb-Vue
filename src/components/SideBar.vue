<template>
  <div class="h-screen w-24 md:w-72 bg-indigo-500 text-white">
    <div class="flex justify-center items-center">
      <h1 class="font-pacifico text-sm md:text-2xl my-12">My App</h1>
    </div>
    <ul
      class="flex flex-col items-center justify-center font-quicksand text-lg"
    >
      <SideBarLink namaLink="Home" link="/" linkLogo="home-solid.svg" />
      <SideBarLink
        namaLink="Kasir"
        link="/kasir"
        linkLogo="calculator-solid.svg"
      />
    </ul>
  </div>
</template>

<script>
import SideBarLink from "@/components/SidebarComp/SideBarLink.vue";
export default {
  name: "Sidebar",
  components: {
    SideBarLink,
  },
};
</script>