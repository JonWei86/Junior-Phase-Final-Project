/* Here is where you will configure the store

*/
import studentsSlice from "../reducers/studentsSlice";
import singleStudentSlice from "../reducers/singleStudentSlice";
import campusesSlice from "../reducers/campusesSlice";
import singleCampusSlice from "../reducers/singleCampusSlice";

import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
  reducer: {
    campuses: campusesSlice,
    singleCampus: singleCampusSlice,
    students: studentsSlice,
    singleStudent: singleStudentSlice,
  }
});

export default store;
