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

//Zwiększ wartość każdego elementu tablicy podnosząc go 
// do kwadratu.
//Policz ilość liczb parzystych i nieparzystych w tablicy.

//Podaj ile liczb zawartych w tablicy jest podzielna bez 
// reszty przez 3.

//Utwórz tablicę, która zawierać będzie 10 elementów.
//Wypełnij ją literami wprowadzonymi przez użytkownika
//Wypełnij ją 10 literowym wyrazem podanym przez użytkownika.
//Zamień wszystkie wielkie litery na małe i odwrotnie.
//Wypisz zawartość tablicy w losowej kolejności.
//Utwórz 100-elementową tablicę liczb całkowitych i wypełnij ją losowymi liczbami.
//Znajdź największą spośród liczb oraz wyświetl na ekranie informację mówiącą o tym, ile razy ta liczba znalazła się w tablicy.
//Wyświetl na ekran liczby nieparzyste.
//Wyświetl na ekran liczby znajdujące się w komórkach o nieparzystych indeksach.
//Program policzy ile liczb zawiera się w przedziale <5, 15) , po czym wypisze te liczby na ekran.
//Znajdź element najbliższy wartością wprowadzonej przez użytkownika liczbie „a”.
//Znajdź poprzednik i następnik najmniejszej wartości w tablicy (wartość komórki o numerze o jeden większym i o jeden mniejszym, niż indeks minimum tablicy).
//Przepisać do nowej tablicy te elementy, których wartość jest >10. Nowa tablica ma mieć rozmiar równy ilości tych elementów.
//Utwórz nową tablicę 100 elementową. Wypełnij ją w taki sposób, aby
//B[i] = A[1] + A[2] + A[3] + … + A[i],
//gdzie B to nasza nowa, a A, stara tablica.
//Posortuj tablicę malejąco.
//Wypisz na ekran elementy, które występują w tablicy przynajmniej 3 razy.
//Utwórz pustą tablicę 100 elementów.
//Wypełnij tablicę kolejnymi liczbami ciągu Fibonacciego.
//Wypełnij tablicę kolejnymi potęgami liczby 2.
//Wypełni tablicę ciągiem liczb: 3, 6, 9, 12, …
//Wypełni tablicę ciągiem liczb: 2, 4, 8, 16, 32, …