# PS 11 - 16.06.2024 Zadanie zaliczeniowe (sem2) - "Zakupownik "Online" "

Maksymalna ilość punktów: 5

Punkty  | Ocena
------------- | -------------
3  | 3
3.5  | 3.5
4  | 4
4.5  | 4.5
5  | 5


# Uruchomienie

Instalacja productsApi - `npm install - wewnątrz folderu API`

Uruchomienie productsApi - `npm run start - wewnątrz folderu API`

Uruchomienie gównej aplikacji - `npm install / npm run dev`

# Uwagi dotyczące zaliczenia

Zadanie 1 jest zadaniem obowiązkowym i jego zrobienie w całości gwarantuje zaliczenie na minimalną ocenę.
Pozostałe zadania są opcjonalne i można je wykonywać niezależnie w celu podniesienia ilości punktów do zaliczenia

Dokumentacja API (swagger) będzie dostępny pod http://localhost:4000/swagger po uruchomieniu aplikacji API

**Uwaga:** Wszystkie zapytania z API zwracają / modyfikują dane po czasie 3-ch sekund, zatem w czasie wykonywania operacji należy pokazać dla użytkownika stosowny komunikat (np LinearProgress z biblioteki material UI używany na zajęciach https://mui.com/material-ui/react-progress/#linear-indeterminate)

# Zadanie 1 (3 pkt) - Product list - API Integration / React Context

Adresy API:
- pobieranie listy produktów GET - http://localhost:4000/api/productsList

- Po wciśnięciu przycisku "Załaduj", pobierz listę produktów z api, zapisz ją w **React Context**, następnie odczytaj  i wyświetl na ekranie w lewej kolumnie (nienumerowana lista samych nazwami nazw) - komponent ProductsList

- Kliknięcie na przycisk powinno wywołać zapytanie od API, wyniki zwrócone z zapytania powinny zostać zapisane w R.context, a następnie wyświetlone w komponencie productsList.

# Zadanie 2 (0.5 pkt) - Shopping list Add / Remove Product

Adresy API
- pobieranie listy zakupów - GET http://localhost:4000/api/shoppingList
- dodawanie produktu do listy zakupowej - POST http://localhost:4000/api/shoppingList - jako request body wysyłamy cały produkt (obiekt)
- usuwanie elementu z listy zakupowej DEL - http://localhost:4000/api/shoppingList/:id

- Kliknięcie lewym przyciskiem myszy na produkt z komponentu ProductsList (lewa kolumna) powinno dodać go do listy zakupowej (shoppingList)
	- kliknięcie powinno wywołać 2 zapytania API tj. dodanie do listy shoppingList oraz wczytanie tej listy

- Kliknięcie lewym przyciskiem myszy w ShoppingList (prawa kolumna) powinno usunąć produkt z listy zakupowej
	- w tym przypadku możemy wywołać 2 lub tyko 1 zapytanie (**podpowiedź:** metoda DELETE zwraca usuwany obiekt)

Spawdzenie zadania:
- dodaj 3 różne produkty do shopping list
- odśwież stronę
	- lista shopping list powinna zawierać dodane elementy

# Zadanie 3 (0.5 pkt) - Filtrowanie w React Context

Użyj elementów formularza z sekcji "Filters" aby filtrować produkty [lewa kolumna] (takie same filtrowanie jak w zadaniu zaliczeniowym sem.1) z tą różnicą, że filtrowanie powinno się odbywać wewnątrz ReactContext.
**Podpowiedź:** Utwórz w R.Context metodę która będzie miała za zadanie filtrowanie produktów, wywołasz tą metodę w Header, a zmiana stanu będzie widoczna w ProductsList

# Zadanie 4a (0.5 pkt) - Logowanie - Prodected Route

Nowy routing: localhost:3000/signIn

Na wyżej wymienionej stronie powinien znajdować się formularz logowania (podobnie jak to było na zajęciach), zalogowanie użytkownika powinno polegać na dodaniu go do localStorage co będzie reprezentowało sesję użytkownika:
- po zalogowaniu użytkownik zostaje przeniesiony na dashboard (widok z zadań 1-3)
- imie zalogowanego użytkownika powinno zostać wypisane w Headerz'e w formie "Jesteś zalogowany jako ..."
- Header powinien zawierać przycisk wyloguj, który wyczyści sesję i przeniesie użytkownika do ekranu logowania
- jeżeli użytkownik nie jest zalogowany wpisanie do pasku adresu url "http://localhost:3000/dashboard" powinno przenieść użytkownika na stronę logowania

Sprawdzenie zadania:
- Logujemy się dowolnymi danymi
- przenosimy się na dashboard i widzimy imie w Headerze
- wylogowujemy się
- próbujemy wpisać http://localhost:3000/dashboard - zostajemy przeniesieni do logowania

# Zadanie 4b (0.5 pkt) - Rejestracja -

Nowy routing: localhost:3000/signOut

Pod nowym adresem url powinien być widoczny ten  sam komponent (formularz), co w zadaniu 4, ale z przyciskiem "Zarejestruj i zaloguj" oraz przyciskiem "Przejdź do logowania".
Zarejestrowanie użytkownika polega na:
- dodaniu nowego użytkownika do listy availableUsers zapisanej w l.storage
- automatycznym zalogowaniu użytkownika (tak jak w zadaniu 4)

Dodatkowo tylko użytkownicy, którzy są dodani do availableUsers w l.storage mogą zalogować się w standardowy sposób, w innym wypadku dostają komunikat o braku użytkownika w systemie.

Sprawdzenie zadania:
- czyścimy l.storage
- rejestrujemy użytkownika, zostajemy przeniesiesi na dashboard, widzimy imie
- wylogowujemy się
- próbujemy się zalogować na innego użytkownika, który nie istnieje lub podajemy złe hasło, widzimy błąd - można wyśwletlić dowolny tekst lub użyć https://mui.com/material-ui/react-snackbar/ z materialUI
- logujemy się na użytkownika którego zarejestrowaliśmy, przechodzimy do dashboard
- odświeżamy strone i pozostajemy zalogowani
