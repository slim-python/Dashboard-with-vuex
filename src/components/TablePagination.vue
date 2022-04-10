<template>
  <div>
    <nav aria-label="Page navigation example ">
      <ul class="inline-flex -space-x-px">
        <li>
          <a
            @click="$store.commit('decreasePageNumber')"
            href="#"
            class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >Previous</a
          >
        </li>

        <li>
          <a
            @click="$store.commit('increasePageNumber')"
            href="#"
            class="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >Next</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "TablePagination",
  data() {
    return {
      pageNumber: 0,
    };
  },
};
</script>
