PROBLEMA: scrivere un programma che chieda all'utente la sua mail per permettere l'accesso solamente se presente in una lista. Se è presente farlo partecipare ad un gioco di dadi nel quale uno è dello user, e l'altro del computer. Vince chi fa il numero più alto

Soluzione:
1 - eseguire un prompt o un imput che richieda all'utente la usa mail per entrare
2 - settare dei controlli per verificare che ciò che è stato inserito sia valido come mail, altrimenti fargliela reinseriere
3 - se supera il passaggio 2, verificare che la mail sia nella lista di quelle che hanno l'accesso. Notificare con un allert
4 - Permettere l'accesso al gioco dei dadi nel caso in cui i passaggi precedenti risultino veri
5 - Creare due variabili MathFloor((MathRandom() * 6) +1), una per use una per pc
6 - settare un allert di vittoria nel caso in cui il numero dello user sia più alto
6.1 - settare un allert di sconfitta nel caso in cui il numero dello user sia più basso