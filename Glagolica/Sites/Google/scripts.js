"use strict";

function changeBgColor(){
    alert("rgb color");
    var colorRed=prompt("Red (0-255) :");
    var colorGreen=prompt("Green (0-255) :");
    var colorBlue=prompt("Blue (0-255) :");

    document.body.style.backgroundColor="rgb("+colorRed+", "+colorGreen+", "+colorBlue+")";

    /*if(colorRed-30>=0){
        colorRed=colorRed-30;
    }
    if(colorGreen+40<=255){
        colorGreen=colorGreen+40;
    }
    if(colorBlue-50>=0){
        colorBlue=colorBlue-50;
    }
    else{
        colorRed=colorRed+30;
        colorGreen=colorGreen-40;
        colorBlue=colorBlue+50;
    }

    document.getElementsByClassName("p").style.backgroundColor=rgb("+colorRed+", "+colorGreen+", "+colorBlue+")";*/
}

function findWeb(){

    var firstName=document.getElementById("fname").value;
    var lastName=document.getElementById("lname").value;
    var age=document.getElementById("years").value;

    if(firstName!=""){
        if(lastName!=""){
            if(age>=16){
                var searchValue=document.getElementById("search").value;
                if(searchValue.search("glagolitic")>-1 || searchValue.search("glagolica")>-1 || searchValue.search("Glagolitic")>-1){
                    document.getElementById("profile").innerHTML="Profile - "+String(firstName)+" "+String(lastName)+" "+String(age);
                    window.open("../Glagolica/glagolitic.html");
                }
                else{
                    window.open("https://www.google.bg/search?q="+searchValue);
                }
            }
        }
    }
    else{
        alert("Not everything is filled in!");
    }
}

const { spawn } = require('child_process');

// Run a Python script and return output
/*function runPythonScript(scriptPath, args) {

  // Use child_process.spawn method from 
  // child_process module and assign it to variable
  const pyProg = spawn('python', [scriptPath].concat(args));

  // Collect data from script and print to console
  let data = '';
  pyProg.stdout.on('data', (stdout) => {
    data += stdout.toString();
  });

  // Print errors to console, if any
  pyProg.stderr.on('data', (stderr) => {
    console.log(`stderr: ${stderr}`);
  });

  // When script is finished, print collected data
  pyProg.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
    console.log(data);
  });
}

// Run the Python file
runPythonScript('python.py', [5, 1]);*/