var tables, bigTables, smallTables, people, base, remainder, result;

function assign(){
  people = prompt("How many people are attending the wedding?");
  tables = prompt("How many tables are there?");
  if (tables <= 0 || people <= 0 || isNaN(tables) || isNaN(people)){
    alert("Invalid Input!");
    return;
  }

  base = Math.floor(people/tables);
  remainder = people % tables;

  bigTables = remainder;
  smallTables = tables - bigTables;

  result = bigTables + " tables have " + (base + 1) + " guests, " + smallTables + " tables has " + base + " guests";
  document.querySelector("p").innerHTML = result;
}

function reset(){
  document.querySelector("p").innerHTML = "";
}