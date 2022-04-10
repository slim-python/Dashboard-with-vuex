<template>
  <div class="">
    <div class="text-white">PAGE: {{ $store.state.pageNumber }}</div>
    <div class="flex flex-col p-10">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div
            class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
          >
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Select
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-l-100 border-black"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    department
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Phone
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Country
                  </th>
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody
                class="bg-white divide-y divide-gray-200"
                v-for="(item, index) in $store.state.employeeData"
                :key="index"
              >
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-left">
                    <label class="inline-flex items-center">
                      <input type="checkbox" class="w-5 h-5" />
                    </label>
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-left border-l-[0.7px] border-gray-500"
                  >
                    {{ item.id }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <img
                          class="h-10 w-10 rounded-full"
                          :src="item.avatar"
                        />
                      </div>
                      <div class="ml-4 text-left">
                        <div class="text-md font-medium text-gray-900">
                          {{ item.name }}
                        </div>
                        <div class="text-sm text-gray-500">
                          {{ item.email }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-left">
                    <div class="text-sm text-gray-900 font-bold">
                      <li
                        v-for="singleDepartment in item.department"
                        :key="singleDepartment"
                      >
                        {{ singleDepartment.toUpperCase() }}
                      </li>
                    </div>

                    <!-- needs improvement -->
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-left">
                    <span
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                    >
                      {{ item.phone }}
                    </span>
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-left"
                  >
                    {{ item.country.split(" ")[0] }}
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                  >
                    <a
                      v-bind:href="`https://620dfdda20ac3a4eedcf5a52.mockapi.io/api/employee/${item.id}`"
                      class="text-indigo-600 hover:text-indigo-900"
                      >View Details</a
                    >
                  </td>
                </tr>

                <!-- More people... -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  async mounted() {
    //to show api data on the first load
    this.$store.dispatch("getEmployeeData");
  },
  watch: {
    "$store.state.pageNumber"(val) {
      this.$store.dispatch("getEmployeeData");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.bb {
  border: 1px solid black;
}
</style>
