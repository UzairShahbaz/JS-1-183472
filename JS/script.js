
// Clear Original Statement
document.getElementById("ClearInput").onclick = function () {
    document.getElementById("Input").innerHTML = ""
}
//  Clear Output
document.getElementById("ClearOutput").onclick = function () {
    document.getElementById("Output").innerHTML = ""
}


// concatenate
document.getElementById("concatenate").onclick = function () {
    let first =prompt("Enter Ist String")
    let second =prompt("Enter 2nd String")
    let concatenation = first +  second
    document.getElementById("Input").innerHTML = "let first = "+ first +" </br> let second = "+ second +" </br>  concatenation = " + first +  " + " + second;
    document.getElementById("Output").innerHTML = concatenation;
}

// name
document.getElementById("name").onclick = function () {
    let Name =prompt("Enter Your Good Name")
    document.getElementById("Input").innerHTML = "let Name = "+ Name +
    document.getElementById("Output").innerHTML =  Name
    
}
// Variable Name
document.getElementById("VariableName").onclick = function () {
       document.getElementById("Output").innerHTML = "<ul class='text-start'><li>A variable name can't contain spaces.</li><li>A variable name can contain only letters, numbers, dollar signs, and underscores.</li><li>A variable name can't be any of JavaScript's keywords such as <code>if</code> or <code>const</code> but <code>myAlert</code> and <code>myVar</code> are legal.</li><li>Capital letters are fine, but be careful. Variable names are case sensitive. A <code>rose</code> is not a <code>Rose</code>. If you assign the string 'Uzair' to the variable <code>rose</code>, and then ask JavaScript for the value assigned to <code>Rose</code>, you'll come up empty.</li></ul>";
}

// camelCase
document.getElementById("camelCase").onclick = function () {
             document.getElementById("Output").innerHTML = "<ul class='text-start'><li>myName</li><li>myNameIs</li><li>myNameIsUzair</li><li>myNameIsUzairShahbaz</li></ul>";
}

// Sum
document.getElementById("Sum").onclick = function () {
    let a=20;
    let b=10; 
    document.getElementById("Input").innerHTML = "let a = "+ a +" </br> let b = "+ b +" </br>  Sum = " + a +  " + " + b;
    document.getElementById("Output").innerHTML = a + b;
}
// Subtract
document.getElementById("Subtract").onclick = function () {
    let a=20;
    let b=10; 
    document.getElementById("Input").innerHTML = "let a = "+ a +" </br> let b = "+ b +" </br>  Subtract = " + a +  " - " + b;
    document.getElementById("Output").innerHTML = a - b;
}
// Multiply
document.getElementById("Multiply").onclick = function () {
    let a=20;
    let b=10; 
    document.getElementById("Input").innerHTML = "let a = "+ a +" </br> let b = "+ b +" </br>  Multiply = " + a +  " * " + b;
    document.getElementById("Output").innerHTML = a * b;
}
// Divide
document.getElementById("Divide").onclick = function () {
    let a=20;
    let b=10; 
    document.getElementById("Input").innerHTML = "let a = "+ a +" </br> let b = "+ b +" </br>  Divide = " + a +  "/ " + b;
    document.getElementById("Output").innerHTML = a / b;
}
// Calculation
document.getElementById("Calculation").onclick = function () {
    let Calculation= 10 *2 + (3**3)-120/60;
    document.getElementById("Input").innerHTML = "let Calculation= 10 *2 + (3**3)-120/60";
    document.getElementById("Output").innerHTML =  10 *2 + (3**3)-120/60;
}