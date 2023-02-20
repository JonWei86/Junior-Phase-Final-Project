import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import { selectCampus, fetchAllCampuses } from "../reducers/campusesSlice";
import { selectStudent, fetchAllStudents } from "../reducers/studentsSlice";
import { AllStudents, SingleStudent , AllCampuses, SingleCampus } from './index'
/*
    This is you entry point for your routes
*/


const Main = () => {
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(fetchAllStudents())
    dispatch(fetchAllCampuses())
  }, [dispatch])

    return (
        <div id="main">
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>HOME PAGE</h1>} />
          <Route path="/campus" element={<AllCampuses />} />
          <Route path="/campus/:campusId" element={<SingleCampus />} />
          <Route path="/students" element={<AllStudents />} />
          <Route path="/students/:studentId" element={<SingleStudent />} />
        </Routes>
      </div>
    );
};

export default Main;
