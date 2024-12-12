// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }




//Oppgave 1

// let a = 1;
// while (a <= 10) {
//   // document.write(a, "<br>")
//   document.write(`<p style="color: red;">${a}</p> <br>`);
//   a++;
// }

//Oppgave 2

// let i = 2;
// while (i <= 20) {
//     document.write("<br>")
//     // document.write(i)
//     i += 2
//     document.write(`<p style="background-color: blue; color: white; ">${i}</p> <br>`);
// }


//Oppgave 3

// var s = 0
// var sum = 0

// while (s <= 10) {
//   sum += s;
//   s++
// }
// document.write(`<p>Summer er mellom 1-10 er${sum}</p>`)


//Oppgave 4


// let tekst = "";
// let teller = 0;


// while (teller < 10) {
//     tekst += "#";
//     document.write(tekst + "<br>") 
//     teller++;
//   }


  //Oppgave 5

  // let tall = 20;

  // while (tall >= 0) {
  //   document.write(tall + "<br>")
  //   tall--;
    
  // }

  //oppgave 6

  const riktigTall = 56;
let gjetning = null;

while (gjetning !== riktigTall) {
  gjetning = parseInt(prompt("Gjett et tall mellom 1 og 100:"));

  if (gjetning < riktigTall) {
      alert("For lavt! Prøv igjen.");
  } else if (gjetning > riktigTall) {
      alert("For høyt! Prøv igjen.");
  } else if (gjetning === riktigTall) {
      alert("Gratulerer! Du gjettet riktig.");
  } else {
      alert("Ugyldig input! Skriv inn et tall mellom 1 og 100.");
  }
}



