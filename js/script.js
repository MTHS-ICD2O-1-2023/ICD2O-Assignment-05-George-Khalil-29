// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

   function calculatePi(numIterations) {
     let pi = 0
     for (let i = 1; i <= numIterations; i++) {
       pi += Math.pow(-1, i + 1) / (2 * i - 1)
     }
     pi *= 4
     return pi
   }

   function calculateAndDisplayPi() {
     const numIterations = parseInt(
       document.getElementById("numIterations").value
     )
     if (isNaN(numIterations) || numIterations <= 0) {
       alert("Please enter a positive integer.")
       return
     }

     const piValue = calculatePi(numIterations)
     document.getElementById(
       "output"
     ).innerText = `Value of PI after ${numIterations} iterations: ${piValue}`
   }