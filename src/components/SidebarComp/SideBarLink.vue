<template>
  <router-link :to="link" class="w-full py-4 hover:bg-indigo-300">
    <span class="flex justify-start items-center">
      <img
        class="ml-7 md:ml-12 w-10 h-10"
        :src="require(`@/assets/${linkLogo}`)"
        alt="Logo Not Found"
      />
      <span class="ml-4 invisible md:visible"> {{ namaLink }} </span>
    </span>
  </router-link>
</template>

<script>
export default {
  name: "SideBarLink",
  props: ["namaLink", "link", "linkLogo"],
};
</script>