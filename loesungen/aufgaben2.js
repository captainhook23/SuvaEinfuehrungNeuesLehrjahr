/*
    Erstelle eine Funktion, die zwei Zahlen addiert und das Ergebnis zurückgibt. Funktionsname = addiere
*/
function addiere(a, b) {
  return a + b;
}






/*
    Schreibe eine Funktion, die überprüft, ob eine Zahl gerade oder ungerade ist. Funktionsname = istGerade
*/
function istGerade(zahl) {
  if (zahl % 2 === 0) {
    return true;
  } else {
    return false;
  }
}




/*
    Erstelle ein Array mit verschiedenen Zahlen. Schreibe eine Funktion, die die Summe aller Zahlen im Array berechnet. Funktionsname = summiereArray
*/
function summiereArray(zahlen) {
  let summe = 0;
  for (let zahl of zahlen) {
    summe += zahl;
  }
  return summe;
}




/*
    Schreibe eine Funktion, die prüft, ob ein gegebenes Wort ein Palindrom ist (d.h., ob es vorwärts und rückwärts gelesen dasselbe ergibt). Funktionsname = istPalindrom
*/
function istPalindrom(wort) {
  const umgedreht = wort.split("").reverse().join("");
  return wort === umgedreht;
}




/*
    Erstelle eine Funktion, die das größte Element in einem Array von Zahlen findet. Funktionsname = findeGroesstesElement
*/
function findeGroesstesElement(zahlen) {
  let groesstesElement = zahlen[0];
  for (let zahl of zahlen) {
    if (zahl > groesstesElement) {
      groesstesElement = zahl;
    }
  }
  return groesstesElement;
}



/*
    Schreibe eine Funktion, die den Umfang eines Kreises berechnet, wenn der Radius gegeben ist. Funktionsname = berechneUmfangKreis
*/
function berechneUmfangKreis(radius) {
  return 2 * Math.PI * radius;
}




/*
    Erstelle ein Array von Wörtern. Schreibe eine Funktion, die das längste Wort im Array findet. Funktionsname = findeLaengstesWort
*/
function findeLaengstesWort(woerter) {
  let laengstesWort = "";
  for (let wort of woerter) {
    if (wort.length > laengstesWort.length) {
      laengstesWort = wort;
    }
  }
  return laengstesWort;
}

