import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    pageNumber: 1,
    // startsFrom: 1,
    employeeData: null,
  },
  getters: {},
  mutations: {
    increasePageNumber(state) {
      state.pageNumber += 1;
    },
    decreasePageNumber(state) {
      state.pageNumber -= 1;
    },
  },
  actions: {
    getEmployeeData(state) {
      axios
        .get(
          `https://620dfdda20ac3a4eedcf5a52.mockapi.io/api/employee?page=${this.state.pageNumber}&limit=10`
        )
        .then(
          (response) => (
            (this.state.employeeData = response.data),
            console.log("employeeData: ", this.state.employeeData)
          )
        );
    },
  },
  modules: {},
  getters: {
    status: (state) => state.pageNumber,
  },
});
