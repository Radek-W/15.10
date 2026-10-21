//Utwórz tablicę o nazwie tab1, zawierającą następujące liczby 
//całkowite: 7, 3, 1, 6, 9, 5, 4, 10, 2, 2.
var tab1 = [7,3,1,6,9,5,4,10,2,2];

//Wypisz zawartość 5 komórki tablicy na ekran. 
document.write(tab1[4] + "<br>");

// Zmień zawartość 7 komórki tablicy, wprowadzając do niej wartość 12.
tab1[6]=12;
document.write(tab1 + "<br>");
//Utwórz drugą tablicę o nazwie tab2, o tej samej wielkości 
// co tab1. Przepisz zawartość tab1 do tab2.
var tab2 = [];
for(var i=0; i < tab1.length; i++){
    tab2[i]=tab1[i];
};
document.write(tab2 + "<br>");
//Utwórz trzecią tablicę o nazwie tab3, o tej samej wielkości 
// co dwie poprzednie. Zawartością komórek tablicy tab3 
// jest suma komórek o tych samych indeksach tablic tab1 i tab2.
var tab3=[];
for(var i=0; i < tab1.length; i++){
    tab3[i] = tab1[i] + tab2[i];
};
document.write(tab3 + "<br>");
//Przepisz ponownie zawartość tablicy tab1 do tablicy tab2, 
// jednak w odwrotnej kolejności.
var tab2 = [];
var tab2 = tab1.reverse();
document.write(tab2 + "<br>");
//Utwórz tablicę, a następnie:
//Wypełnij tablicę wartościami podanymi przez użytkownika.
var tab = [];
var n = parseInt(prompt("Ile liczb chcesz wprowadzic?"));
for(var i=0; i<n; i++){
    tab[i]=parseInt(prompt("Podaj liczbe:"));
}
document.write(tab)
//Znajdź najmniejszy i największy element w tablicy.
var min = tab[0];
var max = tab[0];
for (var i=1; i < tab.length; i++){
    if(tab[i] < min) {
        min = tab[i];
    }
    if(tab[i] > max){
        max = tab[i];
    }
}
document.write("<br>Min: " + min +"<br>" 
    + "Max: " + max + "<br>");
//Oblicz średnią wartość elementów tablicy.
var suma = 0;
for(var i=0; i<tab.length; i++){
    suma += tab[i];
}
var srednia=(suma/tab.length);
document.write("Srednia: "+ srednia + "<br>");
//Wylicz ilość wystąpień cyfry 3 w tablicy.
var licznik = 0;
for(var i = 0; i < tab.length; i++) {
    if(tab[i] == 3){
        licznik++;
    }
};

document.write("Liczba trójek = " + licznik + "<br>");
//Dowolnym sposobem posortuj elementy tablicy w 
// porządku rosnącym.
tab.sort(function(a, b) {
    return a - b;
});
document.write(tab + "<br>");

//Znajdź medianę elementów tablicy.
tab.sort(function(a, b) {
    return a - b;
});

var mediana;

if(tab.length % 2 == 0) {
    mediana = (tab[tab.length/2 - 1] + tab[tab.length/2]) / 2;
} else {
    mediana = tab[Math.floor(tab.length/2)];
};

document.write("Mediana = " + mediana + "<br>");
//Wypisz 3 najmniejsze i trzy największe elementy tablicy.
tab.sort(function(a, b){
    return a - b;
})
document.write ("3 Najmniejsze: ");
for (var i = 0; i < 3; i++){
    document.write(tab[i] + " | ");
}

document.write ("<br>3 Największe: ");
for(var i = tab.length - 3; i < tab.length; i++){
    document.write(tab[i]+ " | ");
}
document.write("<br>");

//Zwiększ wartość każdego elementu tablicy podnosząc go 
// do kwadratu.
for(var i = 0; i < tab.length; i++){
    tab[i] = Math.pow(tab[i], 2);
}
document.write("Po podniesieniu do kwadratu: " + tab + "<br>");

//Policz ilość liczb parzystych i nieparzystych w tablicy.
var parzyste = 0;
var nieparzyste = 0;

for (var i = 0; i < tab.length; i++){
    if(tab[i] % 2 == 0){
        parzyste++;
    }
    else {
        nieparzyste++;
    }
}
document.write("Parzyste: " + parzyste + "<br>");
document.write("Nieparzyste: " + nieparzyste + "<br>");

//Podaj ile liczb zawartych w tablicy jest podzielna bez 
// reszty przez 3.
var ile3 = 0;
for(var i = 0; i < tab.length; i++){
    if(tab[i] % 3 == 0){
        ile3++;
    }
}
document.write("Ilosc liczb podzielnych przez 3 to: " + ile3 + "<br>");

//Utwórz tablicę, która zawierać będzie 10 elementów.
//Wypełnij ją literami wprowadzonymi przez użytkownika
var tab2 = [];

for(var i = 0; i < 10; i++){
    tab2[i] = prompt("Podaj litere:");
}

document.write(tab2 + "<br>");


//Wypełnij ją 10 literowym wyrazem podanym przez użytkownika.
var wyraz = prompt("Podaj wyraz 10 literowy:");
var tab2 = [];
for(var i = 0; i < 10; i++){
    tab2[i] = wyraz[i];
}
document.write(tab2 + "<br>");
//Zamień wszystkie wielkie litery na małe i odwrotnie.
for(var i = 0; i < tab2.length; i++){
    if(tab2[i] == tab2[i].toUpperCase()){
        tab2[i] = tab2[i].toLowerCase();
    }
    else{
        tab2[i] = tab2[i].toUpperCase();
    }
}
document.write(tab2 + "<br>");

//Wypisz zawartość tablicy w losowej kolejności.
tab2.sort(function(){
    return Math.random() - 0.5;
});
document.write(tab2 + "<br>");

//Utwórz 100-elementową tablicę liczb całkowitych i wypełnij ją losowymi liczbami.
var A = [];

for(var i = 0; i < 100; i++){
    A[i] = Math.floor(Math.random() * 100);
}

document.write(A + "<br>");

//Znajdź największą spośród liczb oraz wyświetl na ekranie informację mówiącą o tym, ile razy ta liczba znalazła się w tablicy.
var max = A[0];

for(var i = 1; i < A.length; i++){
    if(A[i] > max){
        max = A[i];
    }
}

var licznik = 0;

for(var i = 0; i < A.length; i++){
    if(A[i] == max){
        licznik++;
    }
}
document.write("Max = " + max + "<br>");
document.write("Występuje " + licznik + " razy<br>");

//Wyświetl na ekran liczby nieparzyste.
for(var i = 0; i < A.length; i++){
    if(A[i] % 2 != 0){
        document.write(A[i] + " ");
    }
}
document.write("<br>");

//Wyświetl na ekran liczby znajdujące się w komórkach o nieparzystych indeksach.
for(var i = 1; i < A.length; i += 2){
    document.write(A[i] + " ");
}
document.write("<br>");

//Program policzy ile liczb zawiera się w przedziale <5, 15) , po czym wypisze te liczby na ekran.
var licznik = 0;

for(var i = 0; i < A.length; i++){

    if(A[i] >= 5 && A[i] < 15){
        licznik++;
        document.write(A[i] + " ");
    }

}

document.write("<br>Ilość = " + licznik + "<br>");

//Znajdź element najbliższy wartością wprowadzonej przez użytkownika liczbie „a”.
var a = parseInt(prompt("Podaj a"));

var najblizszy = A[0];
var roznica = Math.abs(a - A[0]);

for(var i = 1; i < A.length; i++){

    if(Math.abs(a - A[i]) < roznica){
        roznica = Math.abs(a - A[i]);
        najblizszy = A[i];
    }

}

document.write("Najbliższy element: " + najblizszy + "<br>");

//Znajdź poprzednik i następnik najmniejszej wartości w tablicy (wartość komórki o numerze o jeden większym i o jeden mniejszym, niż indeks minimum tablicy).
var min = A[0];
var indeks = 0;

for(var i = 1; i < A.length; i++){
    if(A[i] < min){
        min = A[i];
        indeks = i;
    }
}

document.write("Minimum = " + min + "<br>");

if(indeks > 0){
    document.write("Poprzednik = " + A[indeks-1] + "<br>");
}

if(indeks < A.length-1){
    document.write("Następnik = " + A[indeks+1] + "<br>");
}

//Przepisać do nowej tablicy te elementy, których wartość jest >10. Nowa tablica ma mieć rozmiar równy ilości tych elementów.
var B = [];

for(var i = 0; i < A.length; i++){
    if(A[i] > 10){
        B.push(A[i]);
    }
}

document.write(B + "<br>");

//Utwórz nową tablicę 100 elementową. Wypełnij ją w taki sposób, aby
//B[i] = A[1] + A[2] + A[3] + … + A[i],
var B = [];
var suma = 0;

for(var i = 0; i < A.length; i++){
    suma += A[i];
    B[i] = suma;
}

document.write(B + "<br>");

//gdzie B to nasza nowa, a A, stara tablica.
var B = new Array(100);
//Posortuj tablicę malejąco.
A.sort(function(a, b){
    return b - a;
});

document.write(A + "<br>");
//Wypisz na ekran elementy, które występują w tablicy przynajmniej 3 razy.
for(var i = 0; i < A.length; i++){

    var licznik = 0;

    for(var j = 0; j < A.length; j++){
        if(A[i] == A[j]){
            licznik++;
        }
    }

    if(licznik >= 3){
        document.write(A[i] + " ");
    }
}

document.write("<br>");

//Utwórz pustą tablicę 100 elementów.
var tab = new Array(100);

//Wypełnij tablicę kolejnymi liczbami ciągu Fibonacciego.
var fib = [];

fib[0] = 0;
fib[1] = 1;

for(var i = 2; i < 100; i++){
    fib[i] = fib[i - 1] + fib[i - 2];
}

document.write(fib + "<br>");

//Wypełnij tablicę kolejnymi potęgami liczby 2.
var potegi = [];

for(var i = 0; i < 100; i++){
    potegi[i] = Math.pow(2, i);
}

document.write(potegi + "<br>");

//Wypełni tablicę ciągiem liczb: 3, 6, 9, 12, …
var tab1 = [];

for(var i = 0; i < 100; i++){
    tab1[i] = (i + 1) * 3;
}

document.write(tab1 + "<br>");
//Wypełni tablicę ciągiem liczb: 2, 4, 8, 16, 32, …
var tab2 = [];

tab2[0] = 2;

for(var i = 1; i < 100; i++){
    tab2[i] = tab2[i - 1] * 2;
}

document.write(tab2 + "<br>");
