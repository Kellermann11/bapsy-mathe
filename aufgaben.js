// ===== Einstellungen, die du selbst ändern kannst =====
window.BAPSY_CONFIG = {
  // Welches Kapitel ist gerade dran? Es wird in der App hervorgehoben (1 bis 11).
  aktuellesKapitel: 1,
  // Offizielles Übungsmaterial der DGPs. Falls ein Link nicht mehr geht: auf der Übersichtsseite nachsehen.
  links: {
    uebersicht: "https://www.studieneignungstest-psychologie.de/vorbereitung#trainingsmaterialien",
    matheAufgaben: "https://www.studieneignungstest-psychologie.de/media/pdfs/Psychologieverstaendnis_DEM_OHNE_Loesungen.pdf?t=202608121326",
    matheLoesungen: "https://www.studieneignungstest-psychologie.de/media/pdfs/Psychologieverstaendnis_DEM_MIT_Loesungen.pdf?t=202608121326",
    numerisch: "https://www.studieneignungstest-psychologie.de/media/pdfs/Schlussfolgerndes_Denken_numerisch_ohne_Loesungen.pdf?t=202505211351",
    verbal: "https://www.studieneignungstest-psychologie.de/media/pdfs/Schlussfolgerndes_Denken_verbal_ohne_Loesungen.pdf?t=202608250922",
    figural: "https://www.studieneignungstest-psychologie.de/media/pdfs/Schlussfolgerndes_Denken_figural_ohne_Loesungen.pdf?t=202602121513",
    osa: "https://www.osa-psych.de/"
  },
  // Lösungsschlüssel des offiziellen Mathe-Übungssatzes (Aufgabe 1 bis 20), abgelesen aus dem Lösungs-PDF
  // in der Fassung vom 12.08.2026. Ändert die DGPs das PDF, hier anpassen oder auf "" setzen.
  offiziell: { stand: "12.08.2026", loesungen: "dacabcabaddacccdcbda" }
};

// ===== Aufgaben (automatisch erzeugt, nicht von Hand ändern) =====
window.BAPSY_DATA = {
 "kapitel": [
  {
   "nr": 1,
   "titel": "Rechnen ohne Taschenrechner"
  },
  {
   "nr": 2,
   "titel": "Terme und lineare Gleichungen"
  },
  {
   "nr": 3,
   "titel": "Potenzen, Wurzeln, quadratische Gleichungen"
  },
  {
   "nr": 4,
   "titel": "Funktionen"
  },
  {
   "nr": 5,
   "titel": "Ableiten"
  },
  {
   "nr": 6,
   "titel": "Kurven untersuchen"
  },
  {
   "nr": 7,
   "titel": "Integrieren, Ketten- und Produktregel"
  },
  {
   "nr": 8,
   "titel": "Wahrscheinlichkeit"
  },
  {
   "nr": 9,
   "titel": "Zählen, Erwartungswert, Binomialverteilung"
  },
  {
   "nr": 10,
   "titel": "Vektoren"
  },
  {
   "nr": 11,
   "titel": "Matrizen"
  }
 ],
 "aufgaben": [
  {
   "id": "A1",
   "kap": 2,
   "th": "Algebra",
   "q": "Vereinfache den Term $\\dfrac{x^2-9}{x+3}$ für $x\\neq -3$.",
   "o": [
    "$x-3$",
    "$x^2-3$",
    "$x+3$",
    "$x-9$"
   ],
   "a": 0,
   "e": "3. binomische Formel: $x^2-9=(x+3)(x-3)$, dann kürzen."
  },
  {
   "id": "A2",
   "kap": 3,
   "th": "Algebra",
   "q": "Berechne $2^5\\cdot 4^{-2}$.",
   "o": [
    "$2$",
    "$8$",
    "$\\tfrac12$",
    "$16$"
   ],
   "a": 0,
   "e": "$4^{-2}=\\tfrac1{16}$, also $32\\cdot\\tfrac1{16}=2$."
  },
  {
   "id": "A3",
   "kap": 2,
   "th": "Algebra",
   "q": "Löse die Gleichung $3x-7=2(x+4)$.",
   "o": [
    "$x=-15$",
    "$x=8$",
    "$x=1$",
    "$x=15$"
   ],
   "a": 3,
   "e": "$3x-7=2x+8 \\Rightarrow x=15$."
  },
  {
   "id": "A4",
   "kap": 3,
   "th": "Algebra",
   "q": "Welche Lösungen hat die Gleichung $x^2-5x+6=0$?",
   "o": [
    "$x=-1$ und $x=6$",
    "$x=2$ und $x=3$",
    "$x=-2$ und $x=-3$",
    "$x=1$ und $x=6$"
   ],
   "a": 1,
   "e": "Faktorisieren: $(x-2)(x-3)=0$ (oder $pq$-Formel)."
  },
  {
   "id": "A5",
   "kap": 3,
   "th": "Algebra",
   "q": "Löse das Gleichungssystem: $\\;x+y=7,\\;\\; 2x-y=5$.",
   "o": [
    "$x=2,\\ y=5$",
    "$x=4,\\ y=3$",
    "$x=3,\\ y=4$",
    "$x=5,\\ y=2$"
   ],
   "a": 1,
   "e": "Addieren: $3x=12\\Rightarrow x=4$, dann $y=3$."
  },
  {
   "id": "A6",
   "kap": 3,
   "th": "Algebra",
   "q": "Berechne $\\log_2 32-\\log_2 4$.",
   "o": [
    "$28$",
    "$5$",
    "$3$",
    "$8$"
   ],
   "a": 2,
   "e": "$\\log_2 32=5$, $\\log_2 4=2$; $5-2=3$ (oder $\\log_2\\tfrac{32}{4}=\\log_2 8$)."
  },
  {
   "id": "A7",
   "kap": 2,
   "th": "Algebra",
   "q": "Für welche $x$ gilt $-2x+4>10$?",
   "o": [
    "$x>7$",
    "$x>-3$",
    "$x<3$",
    "$x<-3$"
   ],
   "a": 3,
   "e": "$-2x>6$; beim Teilen durch $-2$ dreht sich das Zeichen: $x<-3$."
  },
  {
   "id": "A8",
   "kap": 4,
   "th": "Analysis",
   "q": "Berechne $e^{2\\ln 3}$.",
   "o": [
    "$e^6$",
    "$3e^2$",
    "$9$",
    "$6$"
   ],
   "a": 2,
   "e": "$e^{2\\ln 3}=\\left(e^{\\ln 3}\\right)^2=3^2=9$."
  },
  {
   "id": "A9",
   "kap": 5,
   "th": "Analysis",
   "q": "Bestimme die Ableitung von $f(x)=3x^4-2x^2+5$.",
   "o": [
    "$f'(x)=12x^3-4x+5$",
    "$f'(x)=12x^4-4x^2$",
    "$f'(x)=12x^3-4x$",
    "$f'(x)=3x^3-2x$"
   ],
   "a": 2,
   "e": "Potenzregel; die Konstante $5$ fällt weg."
  },
  {
   "id": "A10",
   "kap": 5,
   "th": "Analysis",
   "q": "Welche Steigung hat der Graph von $f(x)=x^3-2x$ an der Stelle $x=2$?",
   "o": [
    "$12$",
    "$6$",
    "$4$",
    "$10$"
   ],
   "a": 3,
   "e": "$f'(x)=3x^2-2$, $f'(2)=12-2=10$."
  },
  {
   "id": "A11",
   "kap": 5,
   "th": "Analysis",
   "q": "Wie lautet die Gleichung der Tangente an $f(x)=x^2$ im Punkt $P(1\\,|\\,1)$?",
   "o": [
    "$y=x+1$",
    "$y=2x+1$",
    "$y=2x-1$",
    "$y=2x$"
   ],
   "a": 2,
   "e": "$m=f'(1)=2$; $1=2\\cdot 1+b\\Rightarrow b=-1$."
  },
  {
   "id": "A12",
   "kap": 6,
   "th": "Analysis",
   "q": "An welcher Stelle hat $f(x)=x^3-3x$ ein lokales Minimum?",
   "o": [
    "$x=\\sqrt3$",
    "$x=0$",
    "$x=1$",
    "$x=-1$"
   ],
   "a": 2,
   "e": "$f'(x)=3x^2-3=0\\Rightarrow x=\\pm1$; $f''(1)=6>0$ (Minimum), $f''(-1)=-6<0$ (Maximum)."
  },
  {
   "id": "A13",
   "kap": 6,
   "th": "Analysis",
   "q": "Bestimme die Wendestelle von $f(x)=x^3-6x^2+2$.",
   "o": [
    "$x=0$",
    "$x=4$",
    "$x=2$",
    "$x=6$"
   ],
   "a": 2,
   "e": "$f''(x)=6x-12=0\\Rightarrow x=2$; $f'''(2)=6\\neq0$."
  },
  {
   "id": "A14",
   "kap": 7,
   "th": "Analysis",
   "q": "Bestimme die Ableitung von $f(x)=x\\cdot e^x$.",
   "o": [
    "$e^x+x$",
    "$(x+1)\\,e^x$",
    "$x\\,e^x$",
    "$e^x$"
   ],
   "a": 1,
   "e": "Produktregel: $1\\cdot e^x+x\\cdot e^x=(x+1)e^x$."
  },
  {
   "id": "A15",
   "kap": 7,
   "th": "Analysis",
   "q": "Bestimme die Ableitung von $f(x)=(2x+1)^3$.",
   "o": [
    "$6(2x+1)^2$",
    "$2(2x+1)^2$",
    "$3(2x+1)^2$",
    "$6(2x+1)^3$"
   ],
   "a": 0,
   "e": "Kettenregel: äußere Ableitung $3(2x+1)^2$ mal innere Ableitung $2$."
  },
  {
   "id": "A16",
   "kap": 7,
   "th": "Analysis",
   "q": "Welche Funktion ist eine Stammfunktion von $f(x)=6x^2-4x+1$?",
   "o": [
    "$F(x)=2x^3-2x^2+x+7$",
    "$F(x)=12x-4$",
    "$F(x)=2x^3-4x^2+x$",
    "$F(x)=3x^3-2x^2+x$"
   ],
   "a": 0,
   "e": "Exponent um 1 erhöhen, durch neuen Exponenten teilen; die Konstante $+7$ ist beliebig. Probe: $F'=f$."
  },
  {
   "id": "A17",
   "kap": 7,
   "th": "Analysis",
   "q": "Berechne $\\displaystyle\\int_0^2 \\left(3x^2+1\\right)dx$.",
   "o": [
    "$10$",
    "$14$",
    "$8$",
    "$12$"
   ],
   "a": 0,
   "e": "$\\left[x^3+x\\right]_0^2=8+2=10$."
  },
  {
   "id": "A18",
   "kap": 7,
   "th": "Analysis",
   "q": "Wie groß ist die Fläche zwischen dem Graphen von $f(x)=x^2$ und der $x$-Achse im Intervall $[0;3]$?",
   "o": [
    "$27$",
    "$6$",
    "$3$",
    "$9$"
   ],
   "a": 3,
   "e": "$\\int_0^3x^2\\,dx=\\left[\\tfrac{x^3}{3}\\right]_0^3=9$."
  },
  {
   "id": "A19",
   "kap": 6,
   "th": "Analysis",
   "q": "Welche Symmetrie hat der Graph von $f(x)=x^4-3x^2+1$?",
   "o": [
    "Punktsymmetrie zum Ursprung",
    "Achsensymmetrie zur $y$-Achse",
    "keine dieser Symmetrien",
    "beide Symmetrien"
   ],
   "a": 1,
   "e": "Nur gerade Exponenten $\\Rightarrow f(-x)=f(x)$."
  },
  {
   "id": "A20",
   "kap": 4,
   "th": "Analysis",
   "q": "Was ist der maximale Definitionsbereich von $f(x)=\\ln(x-2)$?",
   "o": [
    "$x>2$",
    "$x>0$",
    "alle $x\\in\\mathbb{R}$",
    "$x\\geq 2$"
   ],
   "a": 0,
   "e": "Das Argument des Logarithmus muss positiv sein: $x-2>0$."
  },
  {
   "id": "A21",
   "kap": 4,
   "th": "Analysis",
   "q": "Gegeben sind $f(x)=x^2$ und $g(x)=x+3$. Bestimme $f(g(x))$.",
   "o": [
    "$x^2+3$",
    "$x^2+9$",
    "$3x^2$",
    "$(x+3)^2$"
   ],
   "a": 3,
   "e": "$g(x)$ wird in $f$ eingesetzt: $f(x+3)=(x+3)^2$."
  },
  {
   "id": "A22",
   "kap": 6,
   "th": "Analysis",
   "q": "Wie verhält sich $f(x)=-2x^3+x$ für $x\\to+\\infty$?",
   "o": [
    "$f(x)\\to+\\infty$",
    "$f(x)\\to-\\infty$",
    "$f(x)\\to0$",
    "$f(x)\\to-2$"
   ],
   "a": 1,
   "e": "Der Term mit dem höchsten Exponenten entscheidet: $-2x^3\\to-\\infty$."
  },
  {
   "id": "A23",
   "kap": 4,
   "th": "Analysis",
   "q": "Der abgebildete Graph gehört zu einer der Funktionen. Zu welcher?",
   "o": [
    "$f(x)=(x+1)^2-2$",
    "$f(x)=(x-1)^2-2$",
    "$f(x)=(x-1)^2+2$",
    "$f(x)=-(x-1)^2-2$"
   ],
   "a": 1,
   "e": "Nach oben geöffnet, Scheitel bei $S(1\\,|\\,-2)$; Scheitelpunktform $(x-d)^2+e$.",
   "grafik": {
    "fn": "(x-1)**2-2",
    "xmin": -2,
    "xmax": 4,
    "ymin": -3,
    "ymax": 4
   }
  },
  {
   "id": "A24",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Wie lang ist der Vektor $\\vec v=\\begin{pmatrix}2\\\\-1\\\\2\\end{pmatrix}$?",
   "o": [
    "$3$",
    "$5$",
    "$9$",
    "$\\sqrt5$"
   ],
   "a": 0,
   "e": "$|\\vec v|=\\sqrt{4+1+4}=\\sqrt9=3$."
  },
  {
   "id": "A25",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Welcher Vektor ist orthogonal zu $\\begin{pmatrix}1\\\\2\\\\3\\end{pmatrix}$?",
   "o": [
    "$\\begin{pmatrix}2\\\\-1\\\\1\\end{pmatrix}$",
    "$\\begin{pmatrix}1\\\\1\\\\1\\end{pmatrix}$",
    "$\\begin{pmatrix}0\\\\1\\\\1\\end{pmatrix}$",
    "$\\begin{pmatrix}3\\\\0\\\\-1\\end{pmatrix}$"
   ],
   "a": 3,
   "e": "Orthogonal $\\Leftrightarrow$ Skalarprodukt $0$: $1\\cdot3+2\\cdot0+3\\cdot(-1)=0$."
  },
  {
   "id": "A26",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Welche Gleichung beschreibt die Gerade durch $A(1|2|0)$ und $B(3|1|4)$?",
   "o": [
    "$\\vec x=\\begin{pmatrix}3\\\\1\\\\4\\end{pmatrix}+t\\begin{pmatrix}1\\\\2\\\\0\\end{pmatrix}$",
    "$\\vec x=\\begin{pmatrix}1\\\\2\\\\0\\end{pmatrix}+t\\begin{pmatrix}3\\\\1\\\\4\\end{pmatrix}$",
    "$\\vec x=\\begin{pmatrix}1\\\\2\\\\0\\end{pmatrix}+t\\begin{pmatrix}4\\\\3\\\\4\\end{pmatrix}$",
    "$\\vec x=\\begin{pmatrix}1\\\\2\\\\0\\end{pmatrix}+t\\begin{pmatrix}2\\\\-1\\\\4\\end{pmatrix}$"
   ],
   "a": 3,
   "e": "Stützvektor $\\vec a$, Richtungsvektor $\\vec{AB}=\\vec b-\\vec a=(2,-1,4)$."
  },
  {
   "id": "A27",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Für welchen Parameter $t$ liegt $P(5|0|8)$ auf der Geraden $g:\\ \\vec x=\\begin{pmatrix}1\\\\2\\\\0\\end{pmatrix}+t\\begin{pmatrix}2\\\\-1\\\\4\\end{pmatrix}$?",
   "o": [
    "$t=1$",
    "$t=2$",
    "$t=3$",
    "$P$ liegt nicht auf $g$"
   ],
   "a": 1,
   "e": "Aus $1+2t=5$ folgt $t=2$; Probe: $2-2=0$ und $0+8=8$ passen."
  },
  {
   "id": "A28",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Bestimme den Mittelpunkt der Strecke zwischen $A(2|{-}4|6)$ und $B(4|0|{-}2)$.",
   "o": [
    "$M(2|4|{-}8)$",
    "$M(6|{-}4|4)$",
    "$M(3|{-}2|2)$",
    "$M(1|2|{-}4)$"
   ],
   "a": 2,
   "e": "Koordinatenweise Mittelwert: $\\tfrac12(\\vec a+\\vec b)$."
  },
  {
   "id": "A29",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Wie weit sind die Punkte $P(1|2|3)$ und $Q(3|5|9)$ voneinander entfernt?",
   "o": [
    "$7$",
    "$11$",
    "$5$",
    "$49$"
   ],
   "a": 0,
   "e": "$\\vec{PQ}=(2,3,6)$, $\\sqrt{4+9+36}=\\sqrt{49}=7$."
  },
  {
   "id": "A30",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Welchen Winkel schließen $\\vec a=\\begin{pmatrix}1\\\\1\\\\0\\end{pmatrix}$ und $\\vec b=\\begin{pmatrix}0\\\\1\\\\1\\end{pmatrix}$ ein?",
   "o": [
    "$60^\\circ$",
    "$45^\\circ$",
    "$90^\\circ$",
    "$30^\\circ$"
   ],
   "a": 0,
   "e": "$\\cos\\alpha=\\dfrac{\\vec a\\cdot\\vec b}{|\\vec a|\\,|\\vec b|}=\\dfrac{1}{\\sqrt2\\cdot\\sqrt2}=\\tfrac12\\Rightarrow\\alpha=60^\\circ$."
  },
  {
   "id": "A31",
   "kap": 11,
   "th": "Vektoren und Matrizen",
   "q": "Berechne $A\\cdot B$ für $A=\\begin{pmatrix}1&2\\\\0&1\\end{pmatrix}$ und $B=\\begin{pmatrix}3&0\\\\1&2\\end{pmatrix}$.",
   "o": [
    "$\\begin{pmatrix}3&6\\\\1&4\\end{pmatrix}$",
    "$\\begin{pmatrix}5&4\\\\1&2\\end{pmatrix}$",
    "$\\begin{pmatrix}3&0\\\\0&2\\end{pmatrix}$",
    "$\\begin{pmatrix}4&2\\\\1&3\\end{pmatrix}$"
   ],
   "a": 1,
   "e": "Zeile mal Spalte, z. B. oben links $1\\cdot3+2\\cdot1=5$. (Option mit $3,6,1,4$ ist $B\\cdot A$ – Reihenfolge zählt!)"
  },
  {
   "id": "A32",
   "kap": 11,
   "th": "Vektoren und Matrizen",
   "q": "$A$ ist eine $2\\times3$-Matrix, $B$ eine $3\\times4$-Matrix. Welches Format hat $A\\cdot B$?",
   "o": [
    "$3\\times3$",
    "$2\\times4$",
    "$2\\times3$",
    "nicht definiert"
   ],
   "a": 1,
   "e": "$(2\\times\\underline{3})\\cdot(\\underline{3}\\times4)$: innere Zahlen gleich, Ergebnis hat die äußeren: $2\\times4$."
  },
  {
   "id": "A33",
   "kap": 11,
   "th": "Vektoren und Matrizen",
   "q": "Zwei Tierpopulationen entwickeln sich jährlich gemäß $\\vec v_{\\text{neu}}=M\\cdot\\vec v$ mit $M=\\begin{pmatrix}0{,}8&0{,}3\\\\0{,}2&0{,}7\\end{pmatrix}$. Startbestand: $\\vec v=\\begin{pmatrix}100\\\\200\\end{pmatrix}$. Wie sieht der Bestand nach einem Jahr aus?",
   "o": [
    "$\\begin{pmatrix}160\\\\140\\end{pmatrix}$",
    "$\\begin{pmatrix}100\\\\200\\end{pmatrix}$",
    "$\\begin{pmatrix}140\\\\160\\end{pmatrix}$",
    "$\\begin{pmatrix}120\\\\180\\end{pmatrix}$"
   ],
   "a": 2,
   "e": "$0{,}8\\cdot100+0{,}3\\cdot200=140$ und $0{,}2\\cdot100+0{,}7\\cdot200=160$."
  },
  {
   "id": "A34",
   "kap": 8,
   "th": "Stochastik",
   "q": "Ein fairer Würfel wird einmal geworfen. Wie groß ist die Wahrscheinlichkeit für eine Primzahl?",
   "o": [
    "$\\tfrac16$",
    "$\\tfrac13$",
    "$\\tfrac12$",
    "$\\tfrac23$"
   ],
   "a": 2,
   "e": "Primzahlen: $2,3,5$ $\\Rightarrow \\tfrac36$. (Die $1$ ist keine Primzahl!)"
  },
  {
   "id": "A35",
   "kap": 8,
   "th": "Stochastik",
   "q": "Zwei faire Würfel werden geworfen. Wie wahrscheinlich ist die Augensumme $7$?",
   "o": [
    "$\\tfrac16$",
    "$\\tfrac7{36}$",
    "$\\tfrac1{36}$",
    "$\\tfrac1{12}$"
   ],
   "a": 0,
   "e": "$6$ günstige Paare $(1,6),\\dots,(6,1)$ von $36$."
  },
  {
   "id": "A36",
   "kap": 8,
   "th": "Stochastik",
   "q": "In einer Urne liegen $3$ rote und $2$ blaue Kugeln. Es werden zwei Kugeln <em>ohne</em> Zurücklegen gezogen. Wie wahrscheinlich sind beide rot?",
   "o": [
    "$\\tfrac3{10}$",
    "$\\tfrac6{25}$",
    "$\\tfrac9{25}$",
    "$\\tfrac12$"
   ],
   "a": 0,
   "e": "Pfadregel: $\\tfrac35\\cdot\\tfrac24=\\tfrac{6}{20}$. ($\\tfrac9{25}$ wäre <em>mit</em> Zurücklegen.)"
  },
  {
   "id": "A37",
   "kap": 8,
   "th": "Stochastik",
   "q": "Eine faire Münze wird viermal geworfen. Wie wahrscheinlich ist <em>mindestens einmal</em> Kopf?",
   "o": [
    "$\\tfrac34$",
    "$\\tfrac1{16}$",
    "$\\tfrac{15}{16}$",
    "$\\tfrac12$"
   ],
   "a": 2,
   "e": "Gegenereignis „nie Kopf“: $\\left(\\tfrac12\\right)^4=\\tfrac1{16}$; $1-\\tfrac1{16}$."
  },
  {
   "id": "A38",
   "kap": 9,
   "th": "Stochastik",
   "q": "Aus $6$ Personen soll eine Zweiergruppe gebildet werden. Wie viele Möglichkeiten gibt es?",
   "o": [
    "$30$",
    "$36$",
    "$15$",
    "$12$"
   ],
   "a": 2,
   "e": "Reihenfolge egal: $\\binom62=\\tfrac{6\\cdot5}{2}=15$."
  },
  {
   "id": "A39",
   "kap": 9,
   "th": "Stochastik",
   "q": "Auf wie viele Arten kann man $4$ verschiedene Bücher nebeneinander ins Regal stellen?",
   "o": [
    "$16$",
    "$24$",
    "$12$",
    "$4$"
   ],
   "a": 1,
   "e": "$4!=4\\cdot3\\cdot2\\cdot1=24$."
  },
  {
   "id": "A40",
   "kap": 9,
   "th": "Stochastik",
   "q": "Wie viele dreistellige Zahlencodes aus den Ziffern $0$–$9$ gibt es, wenn Ziffern mehrfach vorkommen dürfen?",
   "o": [
    "$999$",
    "$1000$",
    "$30$",
    "$720$"
   ],
   "a": 1,
   "e": "$10\\cdot10\\cdot10=10^3$. (Ohne Wiederholung wären es $10\\cdot9\\cdot8=720$.)"
  },
  {
   "id": "A41",
   "kap": 9,
   "th": "Stochastik",
   "q": "Ein Glücksrad kostet $2\\,$€ Einsatz. Mit Wahrscheinlichkeit $0{,}1$ erhält man $10\\,$€, mit $0{,}3$ erhält man $2\\,$€, sonst nichts. Wie hoch ist der zu erwartende Gewinn pro Spiel?",
   "o": [
    "$0{,}40\\,$€ Verlust",
    "$0{,}40\\,$€ Gewinn",
    "$1{,}60\\,$€ Gewinn",
    "$0\\,$€ (faires Spiel)"
   ],
   "a": 0,
   "e": "Erwartete Auszahlung $0{,}1\\cdot10+0{,}3\\cdot2=1{,}60$; minus Einsatz $2$: $-0{,}40$."
  },
  {
   "id": "A42",
   "kap": 9,
   "th": "Stochastik",
   "q": "Eine faire Münze wird dreimal geworfen. Wie wahrscheinlich ist <em>genau</em> zweimal Kopf?",
   "o": [
    "$\\tfrac12$",
    "$\\tfrac38$",
    "$\\tfrac23$",
    "$\\tfrac14$"
   ],
   "a": 1,
   "e": "Binomial: $\\binom32\\left(\\tfrac12\\right)^2\\tfrac12=\\tfrac38$ (KKZ, KZK, ZKK)."
  },
  {
   "id": "A43",
   "kap": 9,
   "th": "Stochastik",
   "q": "$X$ ist binomialverteilt mit $n=50$ und $p=0{,}2$. Welche Werte haben Erwartungswert $\\mu$ und Standardabweichung $\\sigma$?",
   "o": [
    "$\\mu=2{,}5,\\ \\sigma=2$",
    "$\\mu=10,\\ \\sigma=4$",
    "$\\mu=10,\\ \\sigma=8$",
    "$\\mu=10,\\ \\sigma=2\\sqrt2$"
   ],
   "a": 3,
   "e": "$\\mu=np=10$, $\\sigma^2=np(1-p)=8$, also $\\sigma=\\sqrt8=2\\sqrt2$."
  },
  {
   "id": "A44",
   "kap": 8,
   "th": "Stochastik",
   "q": "In einem Jahrgang gilt die Tabelle. Eine Person mit Brille wird zufällig ausgewählt. Wie wahrscheinlich ist es ein Mädchen?",
   "o": [
    "$\\tfrac3{20}$",
    "$\\tfrac12$",
    "$\\tfrac14$",
    "$\\tfrac35$"
   ],
   "a": 3,
   "e": "Bedingte Wahrscheinlichkeit: nur die Spalte „Brille“ zählt: $\\tfrac{30}{50}$.",
   "tabelle": [
    [
     "",
     "Brille",
     "keine Brille",
     "gesamt"
    ],
    [
     "Mädchen",
     "30",
     "90",
     "120"
    ],
    [
     "Jungen",
     "20",
     "60",
     "80"
    ],
    [
     "gesamt",
     "50",
     "150",
     "200"
    ]
   ]
  },
  {
   "id": "A45",
   "kap": 8,
   "th": "Stochastik",
   "q": "$A$ und $B$ sind unabhängige Ereignisse mit $P(A)=0{,}4$ und $P(B)=0{,}5$. Berechne $P(A\\cap B)$.",
   "o": [
    "$0{,}9$",
    "$0{,}1$",
    "$0{,}45$",
    "$0{,}2$"
   ],
   "a": 3,
   "e": "Unabhängig: $P(A\\cap B)=P(A)\\cdot P(B)=0{,}2$."
  },
  {
   "id": "B1",
   "kap": null,
   "th": "Analysis",
   "q": "Gegeben sind $f(x)=2x-1$ und $g(x)=x^2+1$. Bestimme $g(f(x))$.",
   "o": [
    "$4x^2-4x$",
    "$4x^2-4x+2$",
    "$4x^2+2$",
    "$2x^2+1$"
   ],
   "a": 1,
   "e": "$(2x-1)^2+1=4x^2-4x+1+1$."
  },
  {
   "id": "B2",
   "kap": null,
   "th": "Stochastik",
   "q": "Aus $7$ Bewerbern werden $3$ für ein Team ausgewählt (ohne Rollen). Wie viele Möglichkeiten gibt es?",
   "o": [
    "$210$",
    "$343$",
    "$21$",
    "$35$"
   ],
   "a": 3,
   "e": "$\\binom73=\\tfrac{7\\cdot6\\cdot5}{3\\cdot2\\cdot1}=35$. ($210$ wäre mit Reihenfolge.)"
  },
  {
   "id": "B3",
   "kap": null,
   "th": "Analysis",
   "q": "Welche Steigung hat $f(x)=(x^2-1)^2$ an der Stelle $x=2$?",
   "o": [
    "$18$",
    "$36$",
    "$12$",
    "$24$"
   ],
   "a": 3,
   "e": "Kettenregel: $f'(x)=2(x^2-1)\\cdot2x$; $f'(2)=2\\cdot3\\cdot4=24$."
  },
  {
   "id": "B4",
   "kap": null,
   "th": "Stochastik",
   "q": "Aus den Zahlen $1$ bis $30$ wird eine zufällig gezogen. Wie wahrscheinlich ist sie durch $3$ oder durch $5$ teilbar?",
   "o": [
    "$\\tfrac8{15}$",
    "$\\tfrac12$",
    "$\\tfrac7{15}$",
    "$\\tfrac25$"
   ],
   "a": 2,
   "e": "$10$ Vielfache von $3$, $6$ von $5$, doppelt gezählt: $15,30$. $\\tfrac{10+6-2}{30}=\\tfrac{14}{30}$."
  },
  {
   "id": "B5",
   "kap": null,
   "th": "Analysis",
   "q": "Berechne $\\displaystyle\\int_1^3(2x+3)\\,dx$.",
   "o": [
    "$18$",
    "$10$",
    "$12$",
    "$14$"
   ],
   "a": 3,
   "e": "$\\left[x^2+3x\\right]_1^3=18-4=14$."
  },
  {
   "id": "B6",
   "kap": null,
   "th": "Vektoren und Matrizen",
   "q": "Welcher Vektor ist <em>kein</em> Richtungsvektor der Geraden $\\vec x=\\begin{pmatrix}1\\\\0\\\\2\\end{pmatrix}+t\\begin{pmatrix}2\\\\-1\\\\3\\end{pmatrix}$?",
   "o": [
    "$\\begin{pmatrix}4\\\\-2\\\\6\\end{pmatrix}$",
    "$\\begin{pmatrix}6\\\\-3\\\\9\\end{pmatrix}$",
    "$\\begin{pmatrix}2\\\\1\\\\3\\end{pmatrix}$",
    "$\\begin{pmatrix}-2\\\\1\\\\-3\\end{pmatrix}$"
   ],
   "a": 2,
   "e": "Richtungsvektoren sind Vielfache von $(2,-1,3)$; bei $(2,1,3)$ passt das Vorzeichen der 2. Komponente nicht."
  },
  {
   "id": "B7",
   "kap": null,
   "th": "Vektoren und Matrizen",
   "q": "Die Punkte $A(1|1)$, $B(5|2)$ und $C(6|5)$ sind Eckpunkte des Parallelogramms $ABCD$. Wo liegt $D$?",
   "o": [
    "$D(10|6)$",
    "$D(2|3)$",
    "$D(0|{-}2)$",
    "$D(2|4)$"
   ],
   "a": 3,
   "e": "$\\vec d=\\vec a+\\vec{BC}=(1,1)+(1,3)=(2,4)$."
  },
  {
   "id": "B8",
   "kap": null,
   "th": "Analysis",
   "q": "Bestimme die Wendestelle von $f(x)=x^3-3x^2+4x$.",
   "o": [
    "$x=2$",
    "$x=3$",
    "$x=0$",
    "$x=1$"
   ],
   "a": 3,
   "e": "$f''(x)=6x-6=0\\Rightarrow x=1$."
  },
  {
   "id": "B9",
   "kap": null,
   "th": "Stochastik",
   "q": "Urne 1 enthält $2$ rote und $3$ weiße Kugeln, Urne 2 enthält $4$ rote und $1$ weiße. Aus jeder Urne wird eine Kugel gezogen. Wie wahrscheinlich haben beide verschiedene Farben?",
   "o": [
    "$\\tfrac{11}{25}$",
    "$\\tfrac12$",
    "$\\tfrac{14}{25}$",
    "$\\tfrac{12}{25}$"
   ],
   "a": 2,
   "e": "rot–weiß $+$ weiß–rot: $\\tfrac25\\cdot\\tfrac15+\\tfrac35\\cdot\\tfrac45=\\tfrac2{25}+\\tfrac{12}{25}$."
  },
  {
   "id": "B10",
   "kap": null,
   "th": "Algebra",
   "q": "Bestimme die Lösungsmenge von $x^3-4x=0$.",
   "o": [
    "$\\{-2;\\,0;\\,2\\}$",
    "$\\{-2;\\,2\\}$",
    "$\\{0;\\,4\\}$",
    "$\\{0;\\,2\\}$"
   ],
   "a": 0,
   "e": "$x$ ausklammern: $x(x^2-4)=0$. Die Lösung $x=0$ nicht vergessen!"
  },
  {
   "id": "B11",
   "kap": null,
   "th": "Analysis",
   "q": "Was ist der maximale Definitionsbereich von $f(x)=\\sqrt{6-2x}$?",
   "o": [
    "$x\\geq3$",
    "$x\\leq3$",
    "$x\\leq6$",
    "$x<3$"
   ],
   "a": 1,
   "e": "Radikand $\\geq0$: $6-2x\\geq0\\Rightarrow x\\leq3$ (Wurzel aus $0$ ist erlaubt)."
  },
  {
   "id": "B12",
   "kap": null,
   "th": "Vektoren und Matrizen",
   "q": "$A$ ist eine $3\\times2$-, $B$ eine $2\\times2$- und $C$ eine $2\\times3$-Matrix. Welches Produkt ist definiert?",
   "o": [
    "$C\\cdot B$",
    "$A\\cdot B$",
    "$B\\cdot A$",
    "$A\\cdot A$"
   ],
   "a": 1,
   "e": "Spaltenzahl des linken $=$ Zeilenzahl des rechten Faktors: $(3\\times2)\\cdot(2\\times2)$."
  },
  {
   "id": "B13",
   "kap": null,
   "th": "Analysis",
   "q": "Bestimme den Hochpunkt von $f(x)=-x^2+6x-5$.",
   "o": [
    "$H(3|4)$",
    "$H(-3|4)$",
    "$H(3|{-}4)$",
    "$H(6|{-}5)$"
   ],
   "a": 0,
   "e": "$f'(x)=-2x+6=0\\Rightarrow x=3$; $f(3)=-9+18-5=4$."
  },
  {
   "id": "B14",
   "kap": null,
   "th": "Stochastik",
   "q": "Ein Spiel kostet $1\\,$€ Einsatz. Ein Würfel wird geworfen: Bei einer $6$ werden $4\\,$€ ausgezahlt, bei einer $5$ wird $1\\,$€ ausgezahlt, sonst nichts. Was gilt für den zu erwartenden Gewinn pro Spiel?",
   "o": [
    "ca. $0{,}17\\,$€ Verlust",
    "ca. $0{,}50\\,$€ Verlust",
    "ca. $0{,}17\\,$€ Gewinn",
    "$0\\,$€ (faires Spiel)"
   ],
   "a": 0,
   "e": "$E(\\text{Auszahlung})=\\tfrac16\\cdot4+\\tfrac16\\cdot1=\\tfrac56$; minus $1$: $-\\tfrac16\\approx-0{,}17$."
  },
  {
   "id": "B15",
   "kap": null,
   "th": "Vektoren und Matrizen",
   "q": "Wie weit ist der Punkt $P(3|4|12)$ vom Ursprung entfernt?",
   "o": [
    "$12$",
    "$13$",
    "$19$",
    "$\\sqrt{19}$"
   ],
   "a": 1,
   "e": "$\\sqrt{9+16+144}=\\sqrt{169}=13$."
  },
  {
   "id": "B16",
   "kap": null,
   "th": "Analysis",
   "q": "Welche Symmetrie hat der Graph von $f(x)=x\\cdot e^{x^2}$?",
   "o": [
    "Achsensymmetrie zur $y$-Achse",
    "keine dieser Symmetrien",
    "Punktsymmetrie zum Ursprung",
    "beide Symmetrien"
   ],
   "a": 2,
   "e": "$f(-x)=-x\\cdot e^{x^2}=-f(x)$ (ungerade mal gerade $=$ ungerade)."
  },
  {
   "id": "B17",
   "kap": null,
   "th": "Stochastik",
   "q": "Ein Basketballer trifft mit Wahrscheinlichkeit $0{,}5$. Wie oft muss er mindestens werfen, damit er mit über $95\\,\\%$ Wahrscheinlichkeit mindestens einmal trifft?",
   "o": [
    "$4$",
    "$5$",
    "$10$",
    "$6$"
   ],
   "a": 1,
   "e": "$1-0{,}5^n>0{,}95\\Leftrightarrow0{,}5^n<0{,}05$. $0{,}5^4=0{,}0625$ (zu groß), $0{,}5^5=0{,}03125$ (passt)."
  },
  {
   "id": "B18",
   "kap": null,
   "th": "Algebra",
   "q": "Löse die Gleichung $e^{2x}-3e^x+2=0$.",
   "o": [
    "$x=0$ oder $x=\\ln2$",
    "$x=1$ oder $x=2$",
    "nur $x=0$",
    "nur $x=\\ln2$"
   ],
   "a": 0,
   "e": "Substitution $u=e^x$: $u^2-3u+2=0\\Rightarrow u=1$ oder $u=2$, also $x=\\ln1=0$ oder $x=\\ln2$."
  },
  {
   "id": "B19",
   "kap": null,
   "th": "Analysis",
   "q": "Wie groß ist die Fläche zwischen den Graphen von $f(x)=x^2$ und $g(x)=2x$?",
   "o": [
    "$\\tfrac43$",
    "$\\tfrac83$",
    "$\\tfrac23$",
    "$4$"
   ],
   "a": 0,
   "e": "Schnittstellen $x=0$, $x=2$; $\\int_0^2(2x-x^2)\\,dx=4-\\tfrac83=\\tfrac43$."
  },
  {
   "id": "B20",
   "kap": null,
   "th": "Vektoren und Matrizen",
   "q": "Für welches $a$ sind $\\begin{pmatrix}2\\\\a\\\\1\\end{pmatrix}$ und $\\begin{pmatrix}a\\\\3\\\\-10\\end{pmatrix}$ orthogonal?",
   "o": [
    "$a=5$",
    "$a=10$",
    "$a=2$",
    "$a=-2$"
   ],
   "a": 2,
   "e": "Skalarprodukt: $2a+3a-10=0\\Rightarrow a=2$."
  },
  {
   "id": "S1.8",
   "kap": 1,
   "th": "Algebra",
   "q": "Berechne $\\left(\\dfrac12+\\dfrac14\\right):\\dfrac38$.",
   "o": [
    "$2$",
    "$\\dfrac{9}{32}$",
    "$\\dfrac12$",
    "$4$"
   ],
   "a": 0,
   "e": "$\\tfrac12+\\tfrac14=\\tfrac34$, dann $\\tfrac34\\cdot\\tfrac83=2$."
  },
  {
   "id": "S1.9",
   "kap": 1,
   "th": "Algebra",
   "q": "Welche der vier Zahlen ist am größten?",
   "o": [
    "$\\dfrac35$",
    "$\\dfrac58$",
    "$0{,}58$",
    "$61\\,\\%$"
   ],
   "a": 1,
   "e": "Alles als Kommazahl: $\\tfrac35=0{,}6$; $\\;0{,}58$; $\\;\\tfrac58=0{,}625$; $\\;0{,}61$. Am größten ist $\\tfrac58$."
  },
  {
   "id": "S1.10",
   "kap": 1,
   "th": "Algebra",
   "q": "Ein Preis von 80 € wird zuerst um 25 % gesenkt und danach um 25 % erhöht. Wie hoch ist der Preis am Ende?",
   "o": [
    "75 €",
    "60 €",
    "70 €",
    "80 €"
   ],
   "a": 0,
   "e": "$80\\cdot0{,}75=60$, dann $60\\cdot1{,}25=75$."
  },
  {
   "id": "S2.9",
   "kap": 2,
   "th": "Algebra",
   "q": "Vereinfache $\\dfrac{x^2-25}{x+5}$ für $x\\ne-5$.",
   "o": [
    "$x-25$",
    "$x^2-5$",
    "$x-5$",
    "$x+5$"
   ],
   "a": 2,
   "e": "$x^2-25=(x+5)(x-5)$, dann kürzen: $x-5$."
  },
  {
   "id": "S2.10",
   "kap": 2,
   "th": "Algebra",
   "q": "Löse die Gleichung $2(3x-1)=4x+10$.",
   "o": [
    "$x=4$",
    "$x=12$",
    "$x=6$",
    "$x=\\dfrac{11}{2}$"
   ],
   "a": 2,
   "e": "$6x-2=4x+10\\Rightarrow2x=12\\Rightarrow x=6$."
  },
  {
   "id": "S2.11",
   "kap": 2,
   "th": "Algebra",
   "q": "Für welche $x$ gilt $7-2x\\le1$?",
   "o": [
    "$x\\le4$",
    "$x\\le3$",
    "$x\\ge-3$",
    "$x\\ge3$"
   ],
   "a": 3,
   "e": "$-2x\\le-6$. Teilen durch $-2$ dreht das Zeichen: $x\\ge3$."
  },
  {
   "id": "S2.12",
   "kap": 2,
   "th": "Algebra",
   "q": "Vereinfache $(a+b)^2-(a-b)^2$.",
   "o": [
    "$2b^2$",
    "$4ab$",
    "$0$",
    "$2a^2+2b^2$"
   ],
   "a": 1,
   "e": "$(a^2+2ab+b^2)-(a^2-2ab+b^2)=4ab$."
  },
  {
   "id": "S3.9",
   "kap": 3,
   "th": "Algebra",
   "q": "Berechne $2^4\\cdot8^{-1}$.",
   "o": [
    "$\\dfrac12$",
    "$4$",
    "$128$",
    "$2$"
   ],
   "a": 3,
   "e": "$16\\cdot\\tfrac18=2$."
  },
  {
   "id": "S3.10",
   "kap": 3,
   "th": "Algebra",
   "q": "Welche Lösungen hat $x^2-2x-15=0$?",
   "o": [
    "$x=-5$ und $x=3$",
    "$x=3$ und $x=5$",
    "$x=-3$ und $x=-5$",
    "$x=5$ und $x=-3$"
   ],
   "a": 3,
   "e": "Gesucht sind zwei Zahlen mit Produkt $-15$ und Summe $2$: $5$ und $-3$."
  },
  {
   "id": "S3.11",
   "kap": 3,
   "th": "Algebra",
   "q": "Bestimme die Lösungsmenge von $x^3=16x$.",
   "o": [
    "$\\{4\\}$",
    "$\\{-4;\\,0;\\,4\\}$",
    "$\\{0;\\,4\\}$",
    "$\\{-4;\\,4\\}$"
   ],
   "a": 1,
   "e": "$x^3-16x=0\\Rightarrow x(x^2-16)=0\\Rightarrow x=0$, $x=4$, $x=-4$."
  },
  {
   "id": "S3.12",
   "kap": 3,
   "th": "Algebra",
   "q": "Berechne $\\log_2 8+\\log_2 4$.",
   "o": [
    "$5$",
    "$12$",
    "$6$",
    "$32$"
   ],
   "a": 0,
   "e": "$3+2=5$ (oder $\\log_2 32=5$)."
  },
  {
   "id": "S3.13",
   "kap": 3,
   "th": "Algebra",
   "q": "Gegeben ist $2x+3y=13$ und $x-y=-1$. Welchen Wert hat $x$?",
   "o": [
    "$x=4$",
    "$x=2$",
    "$x=1$",
    "$x=3$"
   ],
   "a": 1,
   "e": "Aus der zweiten Gleichung $x=y-1$. Einsetzen: $2(y-1)+3y=13\\Rightarrow y=3$, $x=2$."
  },
  {
   "id": "S4.11",
   "kap": 4,
   "th": "Analysis",
   "q": "Der Graph gehört zu einer der vier Funktionen. Zu welcher?",
   "o": [
    "$f(x)=-(x+1)^2-3$",
    "$f(x)=-(x+1)^2+3$",
    "$f(x)=-(x-1)^2+3$",
    "$f(x)=(x+1)^2+3$"
   ],
   "a": 1,
   "e": "Nach unten geöffnet (Minus davor), Scheitel bei $(-1\\,|\\,3)$.",
   "grafik": {
    "fn": "-((x+1)**2)+3",
    "xmin": -4,
    "xmax": 2,
    "ymin": -2,
    "ymax": 4
   }
  },
  {
   "id": "S4.12",
   "kap": 4,
   "th": "Analysis",
   "q": "Gegeben sind $f(x)=3x-2$ und $g(x)=x^2+1$. Berechne $f(g(2))$.",
   "o": [
    "$9$",
    "$20$",
    "$17$",
    "$13$"
   ],
   "a": 3,
   "e": "Von innen nach außen: $g(2)=5$, dann $f(5)=13$."
  },
  {
   "id": "S4.13",
   "kap": 4,
   "th": "Analysis",
   "q": "Was ist der größtmögliche Definitionsbereich von $f(x)=\\sqrt{10-5x}$?",
   "o": [
    "$x\\ge2$",
    "$x\\le2$",
    "$x<2$",
    "$x\\le10$"
   ],
   "a": 1,
   "e": "$10-5x\\ge0\\Rightarrow x\\le2$."
  },
  {
   "id": "S4.14",
   "kap": 4,
   "th": "Analysis",
   "q": "Welche Gerade geht durch $A(0\\,|\\,4)$ und $B(2\\,|\\,0)$?",
   "o": [
    "$y=-2x+2$",
    "$y=-2x+4$",
    "$y=2x+4$",
    "$y=-\\tfrac12x+4$"
   ],
   "a": 1,
   "e": "$b=4$ (Punkt $A$), $m=\\tfrac{0-4}{2-0}=-2$."
  },
  {
   "id": "S4.15",
   "kap": 4,
   "th": "Analysis",
   "q": "Löse die Gleichung $e^{2x}=9$.",
   "o": [
    "$x=\\ln9$",
    "$x=3$",
    "$x=\\ln3$",
    "$x=\\dfrac92$"
   ],
   "a": 2,
   "e": "$2x=\\ln9\\Rightarrow x=\\tfrac12\\ln9=\\ln3$, denn $3^2=9$."
  },
  {
   "id": "S5.9",
   "kap": 5,
   "th": "Analysis",
   "q": "Bestimme die Ableitung von $f(x)=4x^3-6x+2$.",
   "o": [
    "$f'(x)=12x^3-6$",
    "$f'(x)=4x^2-6$",
    "$f'(x)=12x^2-6x$",
    "$f'(x)=12x^2-6$"
   ],
   "a": 3,
   "e": "Potenzregel, die 2 fällt weg."
  },
  {
   "id": "S5.10",
   "kap": 5,
   "th": "Analysis",
   "q": "Welche Steigung hat der Graph von $f(x)=x^4-2x^2$ an der Stelle $x=-1$?",
   "o": [
    "$8$",
    "$0$",
    "$-1$",
    "$-8$"
   ],
   "a": 1,
   "e": "$f'(x)=4x^3-4x$, $f'(-1)=-4+4=0$."
  },
  {
   "id": "S5.11",
   "kap": 5,
   "th": "Analysis",
   "q": "Wie lautet die Gleichung der Tangente an $f(x)=x^2+1$ an der Stelle $x=1$?",
   "o": [
    "$y=2x+1$",
    "$y=x+1$",
    "$y=2x+2$",
    "$y=2x$"
   ],
   "a": 3,
   "e": "$m=f'(1)=2$. Punkt $(1\\,|\\,2)$: $2=2+b\\Rightarrow b=0$."
  },
  {
   "id": "S5.12",
   "kap": 5,
   "th": "Analysis",
   "q": "Gegeben ist $f(x)=2\\sqrt x$. Berechne $f'(4)$.",
   "o": [
    "$\\dfrac14$",
    "$4$",
    "$\\dfrac12$",
    "$1$"
   ],
   "a": 2,
   "e": "$f(x)=2x^{\\frac12}\\Rightarrow f'(x)=x^{-\\frac12}=\\dfrac1{\\sqrt x}$, $f'(4)=\\tfrac12$."
  },
  {
   "id": "S6.10",
   "kap": 6,
   "th": "Analysis",
   "q": "An welcher Stelle hat $f(x)=x^3-27x$ ein lokales Maximum (einen Hochpunkt)?",
   "o": [
    "$x=-3$",
    "$x=0$",
    "$x=3$",
    "$x=-9$"
   ],
   "a": 0,
   "e": "$f'(x)=3x^2-27=0\\Rightarrow x=\\pm3$. $f''(x)=6x$, $f''(-3)=-18<0$: Hochpunkt bei $x=-3$."
  },
  {
   "id": "S6.11",
   "kap": 6,
   "th": "Analysis",
   "q": "Bestimme den Tiefpunkt von $f(x)=x^2+8x+10$.",
   "o": [
    "$T(4\\,|\\,58)$",
    "$T(-4\\,|\\,10)$",
    "$T(-4\\,|\\,-6)$",
    "$T(-8\\,|\\,10)$"
   ],
   "a": 2,
   "e": "$f'(x)=2x+8=0\\Rightarrow x=-4$; $f(-4)=16-32+10=-6$."
  },
  {
   "id": "S6.12",
   "kap": 6,
   "th": "Analysis",
   "q": "Bestimme die Wendestelle von $f(x)=x^3+3x^2-5$.",
   "o": [
    "$x=-2$",
    "$x=-1$",
    "$x=1$",
    "$x=0$"
   ],
   "a": 1,
   "e": "$f''(x)=6x+6=0\\Rightarrow x=-1$."
  },
  {
   "id": "S6.13",
   "kap": 6,
   "th": "Analysis",
   "q": "Welche Symmetrie hat der Graph von $f(x)=x^3\\cdot(x^2+1)$?",
   "o": [
    "beide Symmetrien",
    "Punktsymmetrie zum Ursprung",
    "Achsensymmetrie zur $y$-Achse",
    "keine dieser Symmetrien"
   ],
   "a": 1,
   "e": "Ausmultipliziert: $x^5+x^3$, nur ungerade Hochzahlen."
  },
  {
   "id": "S6.14",
   "kap": 6,
   "th": "Analysis",
   "q": "Wie verhält sich $f(x)=-x^4+2x^2$ für $x\\to-\\infty$?",
   "o": [
    "$f(x)\\to+\\infty$",
    "$f(x)\\to0$",
    "$f(x)\\to-\\infty$",
    "$f(x)\\to2$"
   ],
   "a": 2,
   "e": "$-x^4$ entscheidet. $x^4$ ist immer positiv, mit Minus davor geht es nach $-\\infty$."
  },
  {
   "id": "S7.8",
   "kap": 7,
   "th": "Analysis",
   "q": "Welche Funktion ist eine Stammfunktion von $f(x)=3x^2-2x+4$?",
   "o": [
    "$F(x)=3x^3-x^2+4x$",
    "$F(x)=x^3-x^2+4x+1$",
    "$F(x)=x^3-2x^2+4x$",
    "$F(x)=6x-2$"
   ],
   "a": 1,
   "e": "Ableiten der Antwort ergibt $3x^2-2x+4$. Die $+1$ fällt weg."
  },
  {
   "id": "S7.9",
   "kap": 7,
   "th": "Analysis",
   "q": "Berechne $\\displaystyle\\int_0^2(x^2+2x)\\,dx$.",
   "o": [
    "$\\dfrac{16}{3}$",
    "$8$",
    "$6$",
    "$\\dfrac{20}{3}$"
   ],
   "a": 3,
   "e": "$[\\tfrac13x^3+x^2]_0^2=\\tfrac83+4=\\tfrac{20}3$."
  },
  {
   "id": "S7.10",
   "kap": 7,
   "th": "Analysis",
   "q": "Gegeben ist $f(x)=(x^2+3)^2$. Berechne $f'(1)$.",
   "o": [
    "$8$",
    "$32$",
    "$16$",
    "$4$"
   ],
   "a": 2,
   "e": "Kettenregel: $f'(x)=2(x^2+3)\\cdot2x$, $f'(1)=2\\cdot4\\cdot2=16$."
  },
  {
   "id": "S7.11",
   "kap": 7,
   "th": "Analysis",
   "q": "Wie groß ist die Fläche, die der Graph von $f(x)=x^2$ mit der Geraden $g(x)=9$ einschließt?",
   "o": [
    "$18$",
    "$36$",
    "$54$",
    "$27$"
   ],
   "a": 1,
   "e": "Schnittstellen $x=\\pm3$. $\\int_{-3}^3(9-x^2)\\,dx=[9x-\\tfrac13x^3]_{-3}^3=18-(-18)=36$."
  },
  {
   "id": "S7.12",
   "kap": 7,
   "th": "Analysis",
   "q": "Bestimme die Ableitung von $f(x)=x\\cdot e^{2x}$.",
   "o": [
    "$f'(x)=(1+2x)\\,e^{2x}$",
    "$f'(x)=(1+x)\\,e^{2x}$",
    "$f'(x)=2x\\,e^{2x}$",
    "$f'(x)=2e^{2x}$"
   ],
   "a": 0,
   "e": "Produktregel mit Kettenregel: $1\\cdot e^{2x}+x\\cdot2e^{2x}=(1+2x)\\,e^{2x}$."
  },
  {
   "id": "S8.10",
   "kap": 8,
   "th": "Stochastik",
   "q": "Zwei Würfel werden geworfen. Wie wahrscheinlich ist die Augensumme 8?",
   "o": [
    "$\\dfrac29$",
    "$\\dfrac19$",
    "$\\dfrac16$",
    "$\\dfrac{5}{36}$"
   ],
   "a": 3,
   "e": "Paare $(2,6),(3,5),(4,4),(5,3),(6,2)$: 5 von 36."
  },
  {
   "id": "S8.11",
   "kap": 8,
   "th": "Stochastik",
   "q": "In einer Urne liegen 5 weiße und 3 schwarze Kugeln. Es werden zwei Kugeln ohne Zurücklegen gezogen. Wie wahrscheinlich sind beide schwarz?",
   "o": [
    "$\\dfrac{3}{32}$",
    "$\\dfrac38$",
    "$\\dfrac{3}{28}$",
    "$\\dfrac{9}{64}$"
   ],
   "a": 2,
   "e": "$\\tfrac38\\cdot\\tfrac27=\\tfrac6{56}=\\tfrac3{28}$."
  },
  {
   "id": "S8.12",
   "kap": 8,
   "th": "Stochastik",
   "q": "Eine Münze wird fünfmal geworfen. Wie wahrscheinlich ist mindestens einmal Zahl?",
   "o": [
    "$\\dfrac{1}{32}$",
    "$\\dfrac12$",
    "$\\dfrac{31}{32}$",
    "$\\dfrac{5}{32}$"
   ],
   "a": 2,
   "e": "Gegenteil „nie Zahl“: $\\left(\\tfrac12\\right)^5=\\tfrac1{32}$, also $1-\\tfrac1{32}$."
  },
  {
   "id": "S8.13",
   "kap": 8,
   "th": "Stochastik",
   "q": "Aus den Zahlen 1 bis 40 wird eine zufällig gezogen. Wie wahrscheinlich ist sie durch 4 oder durch 6 teilbar?",
   "o": [
    "$\\dfrac{3}{8}$",
    "$\\dfrac{13}{40}$",
    "$\\dfrac14$",
    "$\\dfrac25$"
   ],
   "a": 1,
   "e": "10 Viererzahlen, 6 Sechserzahlen, doppelt gezählt sind 12, 24, 36: $\\tfrac{10+6-3}{40}$."
  },
  {
   "id": "S8.14",
   "kap": 8,
   "th": "Stochastik",
   "q": "200 Studierende haben eine Klausur geschrieben (siehe Tabelle). Eine Person, die <em>bestanden</em> hat, wird zufällig ausgewählt. Wie wahrscheinlich war sie in einer Lerngruppe?",
   "o": [
    "$\\dfrac78$",
    "$\\dfrac{7}{20}$",
    "$\\dfrac25$",
    "$\\dfrac{7}{16}$"
   ],
   "a": 3,
   "e": "Nur die Spalte „bestanden“ zählt: $\\tfrac{70}{160}=\\tfrac7{16}$.",
   "tabelle": [
    [
     "",
     "bestanden",
     "nicht bestanden",
     "gesamt"
    ],
    [
     "mit Lerngruppe",
     "70",
     "10",
     "80"
    ],
    [
     "ohne Lerngruppe",
     "90",
     "30",
     "120"
    ],
    [
     "gesamt",
     "160",
     "40",
     "200"
    ]
   ]
  },
  {
   "id": "S9.10",
   "kap": 9,
   "th": "Stochastik",
   "q": "Aus 9 Spielern werden 2 für ein Doppel ausgewählt. Wie viele Möglichkeiten gibt es?",
   "o": [
    "$81$",
    "$36$",
    "$72$",
    "$18$"
   ],
   "a": 1,
   "e": "Reihenfolge egal: $\\binom92=\\tfrac{9\\cdot8}2=36$."
  },
  {
   "id": "S9.11",
   "kap": 9,
   "th": "Stochastik",
   "q": "Wie viele Buchstabenfolgen mit drei <em>verschiedenen</em> Buchstaben kann man aus A, B, C, D, E bilden?",
   "o": [
    "$60$",
    "$15$",
    "$125$",
    "$10$"
   ],
   "a": 0,
   "e": "Reihenfolge zählt, keine Wiederholung: $5\\cdot4\\cdot3=60$."
  },
  {
   "id": "S9.12",
   "kap": 9,
   "th": "Stochastik",
   "q": "Ein Spiel kostet 3 € Einsatz. Ein Würfel wird geworfen: Bei einer 1 oder 2 werden 6 € ausgezahlt, sonst 1,50 €. Was gilt für den erwarteten Gewinn pro Spiel?",
   "o": [
    "1 € Gewinn",
    "1 € Verlust",
    "0,50 € Verlust",
    "0 € (faires Spiel)"
   ],
   "a": 3,
   "e": "Erwartete Auszahlung: $\\tfrac26\\cdot6+\\tfrac46\\cdot1{,}5=2+1=3$ €. Minus 3 € Einsatz ergibt 0."
  },
  {
   "id": "S9.13",
   "kap": 9,
   "th": "Stochastik",
   "q": "$X$ ist binomialverteilt mit $n=25$ und $p=0{,}2$. Welche Werte haben $\\mu$ und $\\sigma$?",
   "o": [
    "$\\mu=12{,}5,\\;\\sigma=2$",
    "$\\mu=5,\\;\\sigma=2$",
    "$\\mu=5,\\;\\sigma=\\sqrt5$",
    "$\\mu=5,\\;\\sigma=4$"
   ],
   "a": 1,
   "e": "$\\mu=25\\cdot0{,}2=5$; $\\sigma^2=25\\cdot0{,}2\\cdot0{,}8=4$, also $\\sigma=2$."
  },
  {
   "id": "S9.14",
   "kap": 9,
   "th": "Stochastik",
   "q": "Ein Würfel wird zweimal geworfen. Wie wahrscheinlich ist <em>genau</em> eine 6?",
   "o": [
    "$\\dfrac{5}{36}$",
    "$\\dfrac13$",
    "$\\dfrac{11}{36}$",
    "$\\dfrac{5}{18}$"
   ],
   "a": 3,
   "e": "Erst 6, dann keine, oder umgekehrt: $2\\cdot\\tfrac16\\cdot\\tfrac56=\\tfrac{10}{36}=\\tfrac5{18}$."
  },
  {
   "id": "S10.12",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Wie lang ist der Vektor $\\vec v=\\begin{pmatrix}4\\\\-4\\\\2\\end{pmatrix}$?",
   "o": [
    "$6$",
    "$2$",
    "$10$",
    "$36$"
   ],
   "a": 0,
   "e": "$\\sqrt{16+16+4}=\\sqrt{36}=6$."
  },
  {
   "id": "S10.13",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Welcher Vektor ist orthogonal zu $\\begin{pmatrix}2\\\\1\\\\-2\\end{pmatrix}$?",
   "o": [
    "$\\begin{pmatrix}1\\\\2\\\\2\\end{pmatrix}$",
    "$\\begin{pmatrix}-2\\\\-1\\\\2\\end{pmatrix}$",
    "$\\begin{pmatrix}1\\\\-2\\\\1\\end{pmatrix}$",
    "$\\begin{pmatrix}2\\\\1\\\\2\\end{pmatrix}$"
   ],
   "a": 0,
   "e": "Skalarprodukt mit $\\begin{pmatrix}1\\\\2\\\\2\\end{pmatrix}$: $2+2-4=0$."
  },
  {
   "id": "S10.14",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Welche Gleichung beschreibt die Gerade durch $A(3\\,|\\,1\\,|\\,-2)$ und $B(1\\,|\\,4\\,|\\,0)$?",
   "o": [
    "$\\vec x=\\begin{pmatrix}3\\\\1\\\\-2\\end{pmatrix}+t\\begin{pmatrix}4\\\\5\\\\-2\\end{pmatrix}$",
    "$\\vec x=\\begin{pmatrix}3\\\\1\\\\-2\\end{pmatrix}+t\\begin{pmatrix}-2\\\\3\\\\2\\end{pmatrix}$",
    "$\\vec x=\\begin{pmatrix}1\\\\4\\\\0\\end{pmatrix}+t\\begin{pmatrix}3\\\\1\\\\-2\\end{pmatrix}$",
    "$\\vec x=\\begin{pmatrix}3\\\\1\\\\-2\\end{pmatrix}+t\\begin{pmatrix}1\\\\4\\\\0\\end{pmatrix}$"
   ],
   "a": 1,
   "e": "Stützvektor $A$, Richtungsvektor $B-A=\\begin{pmatrix}-2\\\\3\\\\2\\end{pmatrix}$."
  },
  {
   "id": "S10.15",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Für welchen Wert von $t$ liegt $P(7\\,|\\,-2\\,|\\,5)$ auf $g:\\;\\vec x=\\begin{pmatrix}1\\\\1\\\\-1\\end{pmatrix}+t\\begin{pmatrix}2\\\\-1\\\\2\\end{pmatrix}$?",
   "o": [
    "$t=6$",
    "$t=3$",
    "$P$ liegt nicht auf $g$",
    "$t=2$"
   ],
   "a": 1,
   "e": "$1+2t=7\\Rightarrow t=3$. Probe: $1-3=-2$ und $-1+6=5$ passen."
  },
  {
   "id": "S10.16",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Bestimme den Mittelpunkt der Strecke zwischen $A(-2\\,|\\,6\\,|\\,1)$ und $B(4\\,|\\,0\\,|\\,5)$.",
   "o": [
    "$M(6\\,|\\,-6\\,|\\,4)$",
    "$M(1\\,|\\,3\\,|\\,3)$",
    "$M(3\\,|\\,-3\\,|\\,2)$",
    "$M(2\\,|\\,6\\,|\\,6)$"
   ],
   "a": 1,
   "e": "Durchschnitt je Koordinate: $\\tfrac{-2+4}2=1$, $\\tfrac{6+0}2=3$, $\\tfrac{1+5}2=3$."
  },
  {
   "id": "S11.8",
   "kap": 11,
   "th": "Vektoren und Matrizen",
   "q": "$A$ ist eine $4\\times2$-Matrix, $B$ eine $2\\times5$-Matrix. Welches Format hat $A\\cdot B$?",
   "o": [
    "nicht definiert",
    "$4\\times5$",
    "$5\\times4$",
    "$2\\times2$"
   ],
   "a": 1,
   "e": "Innere Zahlen $2$ und $2$ passen, außen stehen $4$ und $5$."
  },
  {
   "id": "S11.9",
   "kap": 11,
   "th": "Vektoren und Matrizen",
   "q": "Berechne $\\begin{pmatrix}2&1\\\\0&3\\end{pmatrix}\\cdot\\begin{pmatrix}1&4\\\\2&0\\end{pmatrix}$.",
   "o": [
    "$\\begin{pmatrix}2&13\\\\4&2\\end{pmatrix}$",
    "$\\begin{pmatrix}4&8\\\\6&0\\end{pmatrix}$",
    "$\\begin{pmatrix}2&4\\\\0&0\\end{pmatrix}$",
    "$\\begin{pmatrix}3&5\\\\2&3\\end{pmatrix}$"
   ],
   "a": 1,
   "e": "Oben links $2\\cdot1+1\\cdot2=4$, oben rechts $2\\cdot4+1\\cdot0=8$, unten links $0\\cdot1+3\\cdot2=6$, unten rechts $0$."
  },
  {
   "id": "S11.10",
   "kap": 11,
   "th": "Vektoren und Matrizen",
   "q": "Berechne $\\begin{pmatrix}1&2\\\\3&0\\end{pmatrix}+2\\cdot\\begin{pmatrix}0&1\\\\1&1\\end{pmatrix}$.",
   "o": [
    "$\\begin{pmatrix}1&3\\\\4&1\\end{pmatrix}$",
    "$\\begin{pmatrix}2&6\\\\8&2\\end{pmatrix}$",
    "$\\begin{pmatrix}1&4\\\\5&2\\end{pmatrix}$",
    "$\\begin{pmatrix}1&4\\\\5&1\\end{pmatrix}$"
   ],
   "a": 2,
   "e": "Erst verdoppeln: $\\begin{pmatrix}0&2\\\\2&2\\end{pmatrix}$, dann Feld für Feld addieren."
  },
  {
   "id": "S11.11",
   "kap": 11,
   "th": "Vektoren und Matrizen",
   "q": "$A$ ist eine $2\\times3$-, $B$ eine $3\\times3$- und $C$ eine $3\\times2$-Matrix. Welches Produkt ist <em>nicht</em> definiert?",
   "o": [
    "$B\\cdot C$",
    "$A\\cdot B$",
    "$C\\cdot A$",
    "$A\\cdot A$"
   ],
   "a": 3,
   "e": "$(2\\times3)\\cdot(2\\times3)$: Die inneren Zahlen 3 und 2 sind verschieden."
  },
  {
   "id": "S11.12",
   "kap": 11,
   "th": "Vektoren und Matrizen",
   "q": "Zwei Gruppen entwickeln sich pro Jahr gemäß $\\vec v_{\\text{neu}}=M\\cdot\\vec v$ mit $M=\\begin{pmatrix}0{,}5&0{,}4\\\\0{,}5&0{,}6\\end{pmatrix}$ und Startbestand $\\vec v=\\begin{pmatrix}100\\\\50\\end{pmatrix}$. Wie sieht der Bestand nach einem Jahr aus?",
   "o": [
    "$\\begin{pmatrix}70\\\\80\\end{pmatrix}$",
    "$\\begin{pmatrix}50\\\\30\\end{pmatrix}$",
    "$\\begin{pmatrix}75\\\\75\\end{pmatrix}$",
    "$\\begin{pmatrix}80\\\\70\\end{pmatrix}$"
   ],
   "a": 0,
   "e": "$0{,}5\\cdot100+0{,}4\\cdot50=70$ und $0{,}5\\cdot100+0{,}6\\cdot50=80$."
  },
  {
   "id": "G1.1",
   "kap": 1,
   "th": "Algebra",
   "q": "Berechne $-7-5$.",
   "o": [
    "$-12$",
    "$2$",
    "$-2$",
    "$12$"
   ],
   "a": 0,
   "e": "Auf dem Zahlenstrahl von $-7$ aus 5 Schritte nach links: $-12$.",
   "typ": "Vorzeichen"
  },
  {
   "id": "G1.2",
   "kap": 1,
   "th": "Algebra",
   "q": "Berechne $4-9$.",
   "o": [
    "$13$",
    "$-5$",
    "$-13$",
    "$5$"
   ],
   "a": 1,
   "e": "Auf dem Zahlenstrahl von $4$ aus 9 Schritte nach links: $-5$.",
   "typ": "Vorzeichen"
  },
  {
   "id": "G1.3",
   "kap": 1,
   "th": "Algebra",
   "q": "Berechne $-3-(-8)$.",
   "o": [
    "$-11$",
    "$-5$",
    "$11$",
    "$5$"
   ],
   "a": 3,
   "e": "Minus und Minus ergibt Plus: $-3-(-8)=-3+8=5$.",
   "typ": "Vorzeichen"
  },
  {
   "id": "G1.4",
   "kap": 1,
   "th": "Algebra",
   "q": "Berechne $(-6)\\cdot(-7)$.",
   "o": [
    "$-42$",
    "$42$",
    "$-13$",
    "$13$"
   ],
   "a": 1,
   "e": "Erst die Zahlen: $6\\cdot7=42$. Gleiche Vorzeichen ergeben Plus.",
   "typ": "Vorzeichen"
  },
  {
   "id": "G1.5",
   "kap": 1,
   "th": "Algebra",
   "q": "Berechne $(-9)\\cdot4$.",
   "o": [
    "$36$",
    "$5$",
    "$-36$",
    "$-5$"
   ],
   "a": 2,
   "e": "Erst die Zahlen: $9\\cdot4=36$. Verschiedene Vorzeichen ergeben Minus.",
   "typ": "Vorzeichen"
  },
  {
   "id": "G1.6",
   "kap": 1,
   "th": "Algebra",
   "q": "Berechne $(-48):6$.",
   "o": [
    "$-42$",
    "$8$",
    "$-54$",
    "$-8$"
   ],
   "a": 3,
   "e": "Erst die Zahlen: $48:6=8$. Verschiedene Vorzeichen ergeben Minus.",
   "typ": "Vorzeichen"
  },
  {
   "id": "G1.7",
   "kap": 1,
   "th": "Algebra",
   "q": "Berechne $(-56):(-8)$.",
   "o": [
    "$-64$",
    "$7$",
    "$-7$",
    "$-48$"
   ],
   "a": 1,
   "e": "Erst die Zahlen: $56:8=7$. Gleiche Vorzeichen ergeben Plus.",
   "typ": "Vorzeichen"
  },
  {
   "id": "G1.8",
   "kap": 1,
   "th": "Algebra",
   "q": "Berechne $2+3\\cdot4$.",
   "o": [
    "$20$",
    "$24$",
    "$9$",
    "$14$"
   ],
   "a": 3,
   "e": "Punkt vor Strich: erst $3\\cdot4=12$, dann $2+12=14$.",
   "typ": "Rechenreihenfolge"
  },
  {
   "id": "G1.9",
   "kap": 1,
   "th": "Algebra",
   "q": "Berechne $18-2\\cdot3^2$.",
   "o": [
    "$12$",
    "$0$",
    "$144$",
    "$-18$"
   ],
   "a": 1,
   "e": "Erst die Hochzahl: $3^2=9$. Dann mal: $2\\cdot9=18$. Dann minus: $18-18=0$.",
   "typ": "Rechenreihenfolge"
  },
  {
   "id": "G1.10",
   "kap": 1,
   "th": "Algebra",
   "q": "Berechne $(4+2)\\cdot5-3$.",
   "o": [
    "$12$",
    "$33$",
    "$11$",
    "$27$"
   ],
   "a": 3,
   "e": "Erst die Klammer: $6\\cdot5=30$. Dann $30-3=27$.",
   "typ": "Rechenreihenfolge"
  },
  {
   "id": "G1.11",
   "kap": 1,
   "th": "Algebra",
   "q": "Berechne $20-12:4+1$.",
   "o": [
    "$16$",
    "$18$",
    "$3$",
    "$2$"
   ],
   "a": 1,
   "e": "Punkt vor Strich: erst $12:4=3$. Dann von links nach rechts: $20-3+1=18$.",
   "typ": "Rechenreihenfolge"
  },
  {
   "id": "G1.12",
   "kap": 1,
   "th": "Algebra",
   "q": "Berechne $-2^2+(-2)^2$.",
   "o": [
    "$-8$",
    "$8$",
    "$4$",
    "$0$"
   ],
   "a": 3,
   "e": "Ohne Klammer gehört das Minus nicht zur Hochzahl: $-2^2=-4$. Mit Klammer: $(-2)^2=4$. Zusammen $0$.",
   "typ": "Rechenreihenfolge"
  },
  {
   "id": "G1.13",
   "kap": 1,
   "th": "Algebra",
   "q": "Berechne $\\dfrac{1}{3}+\\dfrac{1}{4}$.",
   "o": [
    "$\\dfrac{7}{12}$",
    "$\\dfrac{2}{7}$",
    "$1$",
    "$\\dfrac{1}{6}$"
   ],
   "a": 0,
   "e": "Hauptnenner 12: $\\tfrac{4}{12}+\\tfrac{3}{12}=\\tfrac{7}{12}$. Nur die Zähler werden verrechnet, der Nenner bleibt.",
   "typ": "Brüche addieren"
  },
  {
   "id": "G1.14",
   "kap": 1,
   "th": "Algebra",
   "q": "Berechne $\\dfrac{3}{4}-\\dfrac{1}{3}$.",
   "o": [
    "$\\dfrac{2}{7}$",
    "$\\dfrac{1}{6}$",
    "$\\dfrac{5}{7}$",
    "$\\dfrac{5}{12}$"
   ],
   "a": 3,
   "e": "Hauptnenner 12: $\\tfrac{9}{12}-\\tfrac{4}{12}=\\tfrac{5}{12}$. Nur die Zähler werden verrechnet, der Nenner bleibt.",
   "typ": "Brüche addieren"
  },
  {
   "id": "G1.15",
   "kap": 1,
   "th": "Algebra",
   "q": "Berechne $\\dfrac{1}{2}+\\dfrac{2}{5}$.",
   "o": [
    "$\\dfrac{3}{10}$",
    "$\\dfrac{3}{7}$",
    "$\\dfrac{9}{10}$",
    "$\\dfrac{9}{7}$"
   ],
   "a": 2,
   "e": "Hauptnenner 10: $\\tfrac{5}{10}+\\tfrac{4}{10}=\\tfrac{9}{10}$. Nur die Zähler werden verrechnet, der Nenner bleibt.",
   "typ": "Brüche addieren"
  },
  {
   "id": "G1.16",
   "kap": 1,
   "th": "Algebra",
   "q": "Berechne $\\dfrac{5}{6}-\\dfrac{1}{2}$.",
   "o": [
    "$\\dfrac{1}{2}$",
    "$\\dfrac{2}{3}$",
    "$\\dfrac{1}{3}$",
    "$\\dfrac{5}{6}$"
   ],
   "a": 2,
   "e": "Hauptnenner 6: $\\tfrac{5}{6}-\\tfrac{3}{6}=\\tfrac{2}{6}=\\tfrac{1}{3}$. Nur die Zähler werden verrechnet, der Nenner bleibt.",
   "typ": "Brüche addieren"
  },
  {
   "id": "G1.17",
   "kap": 1,
   "th": "Algebra",
   "q": "Berechne $\\dfrac{2}{3}+\\dfrac{1}{6}$.",
   "o": [
    "$\\dfrac{5}{3}$",
    "$\\dfrac{1}{6}$",
    "$\\dfrac{1}{3}$",
    "$\\dfrac{5}{6}$"
   ],
   "a": 3,
   "e": "Hauptnenner 6: $\\tfrac{4}{6}+\\tfrac{1}{6}=\\tfrac{5}{6}$. Nur die Zähler werden verrechnet, der Nenner bleibt.",
   "typ": "Brüche addieren"
  },
  {
   "id": "G1.18",
   "kap": 1,
   "th": "Algebra",
   "q": "Berechne $\\dfrac{3}{4}\\cdot\\dfrac{2}{9}$ und kürze.",
   "o": [
    "$\\dfrac{27}{8}$",
    "$\\dfrac{6}{13}$",
    "$\\dfrac{5}{13}$",
    "$\\dfrac{1}{6}$"
   ],
   "a": 3,
   "e": "Zähler mal Zähler, Nenner mal Nenner: $\\tfrac{6}{36}=\\tfrac{1}{6}$.",
   "typ": "Brüche malnehmen"
  },
  {
   "id": "G1.19",
   "kap": 1,
   "th": "Algebra",
   "q": "Berechne $\\dfrac{2}{5}\\cdot\\dfrac{5}{6}$ und kürze.",
   "o": [
    "$\\dfrac{10}{11}$",
    "$\\dfrac{1}{3}$",
    "$\\dfrac{12}{25}$",
    "$\\dfrac{7}{11}$"
   ],
   "a": 1,
   "e": "Zähler mal Zähler, Nenner mal Nenner: $\\tfrac{10}{30}=\\tfrac{1}{3}$.",
   "typ": "Brüche malnehmen"
  },
  {
   "id": "G1.20",
   "kap": 1,
   "th": "Algebra",
   "q": "Berechne $\\dfrac{4}{7}\\cdot\\dfrac{7}{8}$ und kürze.",
   "o": [
    "$\\dfrac{11}{15}$",
    "$\\dfrac{32}{49}$",
    "$\\dfrac{1}{2}$",
    "$\\dfrac{28}{15}$"
   ],
   "a": 2,
   "e": "Zähler mal Zähler, Nenner mal Nenner: $\\tfrac{28}{56}=\\tfrac{1}{2}$.",
   "typ": "Brüche malnehmen"
  },
  {
   "id": "G1.21",
   "kap": 1,
   "th": "Algebra",
   "q": "Berechne $\\dfrac{2}{3}:\\dfrac{4}{5}$ und kürze.",
   "o": [
    "$\\dfrac{6}{5}$",
    "$1$",
    "$\\dfrac{8}{15}$",
    "$\\dfrac{5}{6}$"
   ],
   "a": 3,
   "e": "Mit dem Kehrwert malnehmen: $\\tfrac{2}{3}\\cdot\\tfrac{5}{4}=\\tfrac{10}{12}=\\tfrac{5}{6}$.",
   "typ": "Brüche teilen"
  },
  {
   "id": "G1.22",
   "kap": 1,
   "th": "Algebra",
   "q": "Berechne $\\dfrac{3}{8}:\\dfrac{3}{4}$ und kürze.",
   "o": [
    "$2$",
    "$\\dfrac{1}{2}$",
    "$\\dfrac{9}{32}$",
    "$\\dfrac{7}{11}$"
   ],
   "a": 1,
   "e": "Mit dem Kehrwert malnehmen: $\\tfrac{3}{8}\\cdot\\tfrac{4}{3}=\\tfrac{12}{24}=\\tfrac{1}{2}$.",
   "typ": "Brüche teilen"
  },
  {
   "id": "G1.23",
   "kap": 1,
   "th": "Algebra",
   "q": "Berechne $\\dfrac{5}{6}:\\dfrac{10}{3}$ und kürze.",
   "o": [
    "$\\dfrac{25}{9}$",
    "$4$",
    "$\\dfrac{1}{2}$",
    "$\\dfrac{1}{4}$"
   ],
   "a": 3,
   "e": "Mit dem Kehrwert malnehmen: $\\tfrac{5}{6}\\cdot\\tfrac{3}{10}=\\tfrac{15}{60}=\\tfrac{1}{4}$.",
   "typ": "Brüche teilen"
  },
  {
   "id": "G1.24",
   "kap": 1,
   "th": "Algebra",
   "q": "Wie viel sind $15\\,\\%$ von $80$?",
   "o": [
    "$6$",
    "$65$",
    "$120$",
    "$12$"
   ],
   "a": 3,
   "e": "$15\\,\\%$ heißt $\\tfrac{15}{100}$. Also $\\tfrac{15}{100}\\cdot80=12$. Schneller: 1 % von 80 sind $0{,}8$, mal 15.",
   "typ": "Prozent"
  },
  {
   "id": "G1.25",
   "kap": 1,
   "th": "Algebra",
   "q": "Wie viel sind $30\\,\\%$ von $250$?",
   "o": [
    "$75$",
    "$\\dfrac{75}{2}$",
    "$750$",
    "$220$"
   ],
   "a": 0,
   "e": "$30\\,\\%$ heißt $\\tfrac{30}{100}$. Also $\\tfrac{30}{100}\\cdot250=75$. Schneller: 1 % von 250 sind $2{,}5$, mal 30.",
   "typ": "Prozent"
  },
  {
   "id": "G1.26",
   "kap": 1,
   "th": "Algebra",
   "q": "Wie viel sind $5\\,\\%$ von $640$?",
   "o": [
    "$635$",
    "$32$",
    "$320$",
    "$16$"
   ],
   "a": 1,
   "e": "$5\\,\\%$ heißt $\\tfrac{5}{100}$. Also $\\tfrac{5}{100}\\cdot640=32$. Schneller: 1 % von 640 sind $6{,}4$, mal 5.",
   "typ": "Prozent"
  },
  {
   "id": "G1.27",
   "kap": 1,
   "th": "Algebra",
   "q": "Wie viel Prozent sind $30$ von $120$?",
   "o": [
    "$75\\,\\%$",
    "$40\\,\\%$",
    "$30\\,\\%$",
    "$25\\,\\%$"
   ],
   "a": 3,
   "e": "Anteil als Bruch: $\\tfrac{30}{120}=\\tfrac{1}{4}=25\\,\\%$.",
   "typ": "Prozent"
  },
  {
   "id": "G1.28",
   "kap": 1,
   "th": "Algebra",
   "q": "Wie viel Prozent sind $18$ von $60$?",
   "o": [
    "$18\\,\\%$",
    "$70\\,\\%$",
    "$30\\,\\%$",
    "$\\tfrac{100}{3}\\,\\%$"
   ],
   "a": 2,
   "e": "Anteil als Bruch: $\\tfrac{18}{60}=\\tfrac{3}{10}=30\\,\\%$.",
   "typ": "Prozent"
  },
  {
   "id": "G1.29",
   "kap": 1,
   "th": "Algebra",
   "q": "Wie viel Prozent sind $45$ von $180$?",
   "o": [
    "$40\\,\\%$",
    "$75\\,\\%$",
    "$45\\,\\%$",
    "$25\\,\\%$"
   ],
   "a": 3,
   "e": "Anteil als Bruch: $\\tfrac{45}{180}=\\tfrac{1}{4}=25\\,\\%$.",
   "typ": "Prozent"
  },
  {
   "id": "G1.30",
   "kap": 1,
   "th": "Algebra",
   "q": "Ein Preis von 60 € wird um 20 % erhöht. Wie hoch ist der neue Preis?",
   "o": [
    "12 €",
    "80 €",
    "72 €",
    "48 €"
   ],
   "a": 2,
   "e": "Erhöhung um 20 % heißt mal $1{,}2$: $60\\cdot1{,}2=72$. Oder: 20 % von 60 sind $12$, das wird dazugezählt.",
   "typ": "Prozent"
  },
  {
   "id": "G1.31",
   "kap": 1,
   "th": "Algebra",
   "q": "Ein Preis von 80 € wird um 25 % gesenkt. Wie hoch ist der neue Preis?",
   "o": [
    "55 €",
    "20 €",
    "60 €",
    "100 €"
   ],
   "a": 2,
   "e": "Senkung um 25 % heißt mal $0{,}75$: $80\\cdot0{,}75=60$. Oder: 25 % von 80 sind $20$, das wird abgezogen.",
   "typ": "Prozent"
  },
  {
   "id": "G1.32",
   "kap": 1,
   "th": "Algebra",
   "q": "Ein Preis von 150 € wird um 10 % erhöht. Wie hoch ist der neue Preis?",
   "o": [
    "165 €",
    "135 €",
    "15 €",
    "160 €"
   ],
   "a": 0,
   "e": "Erhöhung um 10 % heißt mal $1{,}1$: $150\\cdot1{,}1=165$. Oder: 10 % von 150 sind $15$, das wird dazugezählt.",
   "typ": "Prozent"
  },
  {
   "id": "G1.33",
   "kap": 1,
   "th": "Algebra",
   "q": "Ein Preis von 40 € wird um 5 % gesenkt. Wie hoch ist der neue Preis?",
   "o": [
    "42 €",
    "35 €",
    "38 €",
    "2 €"
   ],
   "a": 2,
   "e": "Senkung um 5 % heißt mal $0{,}95$: $40\\cdot0{,}95=38$. Oder: 5 % von 40 sind $2$, das wird abgezogen.",
   "typ": "Prozent"
  },
  {
   "id": "G1.34",
   "kap": 1,
   "th": "Algebra",
   "q": "Schreibe $\\dfrac{1}{8}$ als Kommazahl.",
   "o": [
    "$0{,}125$",
    "$0{,}18$",
    "$0{,}8$",
    "$1{,}8$"
   ],
   "a": 0,
   "e": "Auf Hundertstel oder Tausendstel erweitern: $\\tfrac{1}{8}=0{,}125$.",
   "typ": "Brüche und Kommazahlen"
  },
  {
   "id": "G1.35",
   "kap": 1,
   "th": "Algebra",
   "q": "Schreibe $\\dfrac{3}{20}$ als Kommazahl.",
   "o": [
    "$0{,}15$",
    "$1{,}5$",
    "$0{,}32$",
    "$0{,}6$"
   ],
   "a": 0,
   "e": "Auf Hundertstel oder Tausendstel erweitern: $\\tfrac{3}{20}=0{,}15$.",
   "typ": "Brüche und Kommazahlen"
  },
  {
   "id": "G1.36",
   "kap": 1,
   "th": "Algebra",
   "q": "Schreibe $\\dfrac{7}{25}$ als Kommazahl.",
   "o": [
    "$0{,}35$",
    "$2{,}8$",
    "$0{,}28$",
    "$0{,}725$"
   ],
   "a": 2,
   "e": "Auf Hundertstel oder Tausendstel erweitern: $\\tfrac{7}{25}=0{,}28$.",
   "typ": "Brüche und Kommazahlen"
  },
  {
   "id": "G1.37",
   "kap": 1,
   "th": "Algebra",
   "q": "Welche der vier Zahlen ist am größten?",
   "o": [
    "$\\dfrac23$",
    "$65\\,\\%$",
    "$\\dfrac59$",
    "$0{,}6$"
   ],
   "a": 0,
   "e": "Alles als Kommazahl: $\\tfrac23\\approx0{,}667$; $0{,}6$; $\\tfrac59\\approx0{,}556$; $0{,}65$. Am größten ist $\\tfrac23$.",
   "typ": "Zahlen vergleichen"
  },
  {
   "id": "G1.38",
   "kap": 1,
   "th": "Algebra",
   "q": "Welche der vier Zahlen ist am kleinsten?",
   "o": [
    "$\\dfrac25$",
    "$35\\,\\%$",
    "$0{,}3$",
    "$\\dfrac13$"
   ],
   "a": 2,
   "e": "Alles als Kommazahl: $\\tfrac13\\approx0{,}333$; $0{,}3$; $0{,}35$; $\\tfrac25=0{,}4$. Am kleinsten ist $0{,}3$.",
   "typ": "Zahlen vergleichen"
  },
  {
   "id": "G1.39",
   "kap": 1,
   "th": "Algebra",
   "q": "Welche der vier Zahlen ist am größten?",
   "o": [
    "$0{,}7$",
    "$\\dfrac45$",
    "$\\dfrac34$",
    "$78\\,\\%$"
   ],
   "a": 1,
   "e": "Alles als Kommazahl: $\\tfrac34=0{,}75$; $0{,}7$; $\\tfrac45=0{,}8$; $0{,}78$. Am größten ist $\\tfrac45$.",
   "typ": "Zahlen vergleichen"
  },
  {
   "id": "G2.1",
   "kap": 2,
   "th": "Algebra",
   "q": "Fasse zusammen: $5x-2+3x+7$.",
   "o": [
    "$2x+5$",
    "$13x$",
    "$8x-9$",
    "$8x+5$"
   ],
   "a": 3,
   "e": "Nur Gleichartiges zusammen. Die $x$: $5x+3x=8x$. Die Zahlen: $-2+7=5$.",
   "typ": "Terme zusammenfassen"
  },
  {
   "id": "G2.2",
   "kap": 2,
   "th": "Algebra",
   "q": "Fasse zusammen: $4x+6-7x-1$.",
   "o": [
    "$2x$",
    "$11x+5$",
    "$-3x+7$",
    "$-3x+5$"
   ],
   "a": 3,
   "e": "Nur Gleichartiges zusammen. Die $x$: $4x-7x=-3x$. Die Zahlen: $6-1=5$.",
   "typ": "Terme zusammenfassen"
  },
  {
   "id": "G2.3",
   "kap": 2,
   "th": "Algebra",
   "q": "Fasse zusammen: $-2x+5+6x-8$.",
   "o": [
    "$x$",
    "$4x+13$",
    "$4x-3$",
    "$-8x-3$"
   ],
   "a": 2,
   "e": "Nur Gleichartiges zusammen. Die $x$: $-2x+6x=4x$. Die Zahlen: $5-8=-3$.",
   "typ": "Terme zusammenfassen"
  },
  {
   "id": "G2.4",
   "kap": 2,
   "th": "Algebra",
   "q": "Multipliziere aus: $3(2x-5)$.",
   "o": [
    "$6x-15$",
    "$6x-5$",
    "$2x-15$",
    "$6x+15$"
   ],
   "a": 0,
   "e": "Die $3$ mit jedem Teil der Klammer malnehmen: $3\\cdot2x=6x$ und $3\\cdot(-5)=-15$.",
   "typ": "Ausmultiplizieren"
  },
  {
   "id": "G2.5",
   "kap": 2,
   "th": "Algebra",
   "q": "Multipliziere aus: $-4(x+3)$.",
   "o": [
    "$-4x-12$",
    "$-4x+3$",
    "$-4x+12$",
    "$x-12$"
   ],
   "a": 0,
   "e": "Die $-4$ mit jedem Teil der Klammer malnehmen: $-4\\cdot1x=-4x$ und $-4\\cdot3=-12$.",
   "typ": "Ausmultiplizieren"
  },
  {
   "id": "G2.6",
   "kap": 2,
   "th": "Algebra",
   "q": "Multipliziere aus: $5(-2x+1)$.",
   "o": [
    "$-10x+1$",
    "$-10x-5$",
    "$-10x+5$",
    "$-2x+5$"
   ],
   "a": 2,
   "e": "Die $5$ mit jedem Teil der Klammer malnehmen: $5\\cdot(-2)x=-10x$ und $5\\cdot1=5$.",
   "typ": "Ausmultiplizieren"
  },
  {
   "id": "G2.7",
   "kap": 2,
   "th": "Algebra",
   "q": "Löse die Klammer auf und fasse zusammen: $7x+2-(3x-5)$.",
   "o": [
    "$4x-3$",
    "$4x+7$",
    "$10x-3$",
    "$10x+7$"
   ],
   "a": 1,
   "e": "Das Minus vor der Klammer dreht jedes Vorzeichen darin um: $7x+2-3x+5=4x+7$.",
   "typ": "Minusklammer"
  },
  {
   "id": "G2.8",
   "kap": 2,
   "th": "Algebra",
   "q": "Löse die Klammer auf und fasse zusammen: $4x-1-(6x+2)$.",
   "o": [
    "$-2x-3$",
    "$-2x+1$",
    "$10x+1$",
    "$10x-3$"
   ],
   "a": 0,
   "e": "Das Minus vor der Klammer dreht jedes Vorzeichen darin um: $4x-1-6x-2=-2x-3$.",
   "typ": "Minusklammer"
  },
  {
   "id": "G2.9",
   "kap": 2,
   "th": "Algebra",
   "q": "Multipliziere aus: $(x+5)^2$.",
   "o": [
    "$x^{2}+25$",
    "$x^{2}+10x+25$",
    "$x^{2}+10x-25$",
    "$x^{2}+5x+25$"
   ],
   "a": 1,
   "e": "Binomische Formel: $a^2+2ab+b^2$ mit $a=x$ und $b=5$. Der Mittelteil ist $2\\cdot x\\cdot5=10x$.",
   "typ": "Binomische Formeln"
  },
  {
   "id": "G2.10",
   "kap": 2,
   "th": "Algebra",
   "q": "Multipliziere aus: $(x+7)^2$.",
   "o": [
    "$x^{2}+14x+49$",
    "$x^{2}+7x+49$",
    "$x^{2}+14x-49$",
    "$x^{2}+49$"
   ],
   "a": 0,
   "e": "Binomische Formel: $a^2+2ab+b^2$ mit $a=x$ und $b=7$. Der Mittelteil ist $2\\cdot x\\cdot7=14x$.",
   "typ": "Binomische Formeln"
  },
  {
   "id": "G2.11",
   "kap": 2,
   "th": "Algebra",
   "q": "Multipliziere aus: $(x-3)^2$.",
   "o": [
    "$x^{2}-3x+9$",
    "$x^{2}-6x-9$",
    "$x^{2}-6x+9$",
    "$x^{2}-9$"
   ],
   "a": 2,
   "e": "Binomische Formel: $a^2-2ab+b^2$ mit $a=x$ und $b=3$. Der Mittelteil ist $2\\cdot x\\cdot3=6x$.",
   "typ": "Binomische Formeln"
  },
  {
   "id": "G2.12",
   "kap": 2,
   "th": "Algebra",
   "q": "Multipliziere aus: $(x-6)^2$.",
   "o": [
    "$x^{2}-12x-36$",
    "$x^{2}-6x+36$",
    "$x^{2}-12x+36$",
    "$x^{2}-36$"
   ],
   "a": 2,
   "e": "Binomische Formel: $a^2-2ab+b^2$ mit $a=x$ und $b=6$. Der Mittelteil ist $2\\cdot x\\cdot6=12x$.",
   "typ": "Binomische Formeln"
  },
  {
   "id": "G2.13",
   "kap": 2,
   "th": "Algebra",
   "q": "Multipliziere aus: $(x+4)(x-4)$.",
   "o": [
    "$x^{2}-8x+16$",
    "$x^{2}-4$",
    "$x^{2}+16$",
    "$x^{2}-16$"
   ],
   "a": 3,
   "e": "Dritte binomische Formel: $(a+b)(a-b)=a^2-b^2$, also $x^2-16$. Die Mittelteile heben sich auf.",
   "typ": "Binomische Formeln"
  },
  {
   "id": "G2.14",
   "kap": 2,
   "th": "Algebra",
   "q": "Multipliziere aus: $(x+9)(x-9)$.",
   "o": [
    "$x^{2}+81$",
    "$x^{2}-9$",
    "$x^{2}-81$",
    "$x^{2}-18x+81$"
   ],
   "a": 2,
   "e": "Dritte binomische Formel: $(a+b)(a-b)=a^2-b^2$, also $x^2-81$. Die Mittelteile heben sich auf.",
   "typ": "Binomische Formeln"
  },
  {
   "id": "G2.15",
   "kap": 2,
   "th": "Algebra",
   "q": "Multipliziere aus: $(x+3)(x-5)$.",
   "o": [
    "$x^{2}-2x-15$",
    "$x^{2}-2x+15$",
    "$x^{2}-15$",
    "$x^{2}-15x-2$"
   ],
   "a": 0,
   "e": "Jeder Teil mit jedem: $x^2-5x+3x-15$. Zusammengefasst: $x^{2}-2x-15$.",
   "typ": "Ausmultiplizieren"
  },
  {
   "id": "G2.16",
   "kap": 2,
   "th": "Algebra",
   "q": "Multipliziere aus: $(x-2)(x-6)$.",
   "o": [
    "$x^{2}+12$",
    "$x^{2}-8x+12$",
    "$x^{2}-8x-12$",
    "$x^{2}+12x-8$"
   ],
   "a": 1,
   "e": "Jeder Teil mit jedem: $x^2-6x-2x+12$. Zusammengefasst: $x^{2}-8x+12$.",
   "typ": "Ausmultiplizieren"
  },
  {
   "id": "G2.17",
   "kap": 2,
   "th": "Algebra",
   "q": "Löse die Gleichung $5x-3=2x+9$.",
   "o": [
    "$x=2$",
    "$x=4$",
    "$x=\\dfrac{12}{7}$",
    "$x=-4$"
   ],
   "a": 1,
   "e": "Alle $x$ nach links, alle Zahlen nach rechts: $3x=12$. Dann durch $3$ teilen: $x=4$. Probe: links $17$, rechts $17$.",
   "typ": "Lineare Gleichungen"
  },
  {
   "id": "G2.18",
   "kap": 2,
   "th": "Algebra",
   "q": "Löse die Gleichung $7x+4=3x-8$.",
   "o": [
    "$x=-\\dfrac{6}{5}$",
    "$x=3$",
    "$x=-3$",
    "$x=-1$"
   ],
   "a": 2,
   "e": "Alle $x$ nach links, alle Zahlen nach rechts: $4x=-12$. Dann durch $4$ teilen: $x=-3$. Probe: links $-17$, rechts $-17$.",
   "typ": "Lineare Gleichungen"
  },
  {
   "id": "G2.19",
   "kap": 2,
   "th": "Algebra",
   "q": "Löse die Gleichung $2x+9=6x+1$.",
   "o": [
    "$x=-\\dfrac{5}{2}$",
    "$x=2$",
    "$x=-2$",
    "$x=-1$"
   ],
   "a": 1,
   "e": "Alle $x$ nach links, alle Zahlen nach rechts: $-4x=-8$. Dann durch $-4$ teilen: $x=2$. Probe: links $13$, rechts $13$.",
   "typ": "Lineare Gleichungen"
  },
  {
   "id": "G2.20",
   "kap": 2,
   "th": "Algebra",
   "q": "Löse die Gleichung $9x-5=4x+10$.",
   "o": [
    "$x=1$",
    "$x=3$",
    "$x=\\dfrac{15}{13}$",
    "$x=-3$"
   ],
   "a": 1,
   "e": "Alle $x$ nach links, alle Zahlen nach rechts: $5x=15$. Dann durch $5$ teilen: $x=3$. Probe: links $22$, rechts $22$.",
   "typ": "Lineare Gleichungen"
  },
  {
   "id": "G2.21",
   "kap": 2,
   "th": "Algebra",
   "q": "Löse die Gleichung $3(x-2)=12$.",
   "o": [
    "$x=-6$",
    "$x=2$",
    "$x=\\dfrac{14}{3}$",
    "$x=6$"
   ],
   "a": 3,
   "e": "Beide Seiten durch $3$ teilen: $x-2=4$. Dann plus 2 rechnen: $x=6$.",
   "typ": "Lineare Gleichungen"
  },
  {
   "id": "G2.22",
   "kap": 2,
   "th": "Algebra",
   "q": "Löse die Gleichung $4(x+5)=-8$.",
   "o": [
    "$x=-7$",
    "$x=3$",
    "$x=7$",
    "$x=-\\dfrac{13}{4}$"
   ],
   "a": 0,
   "e": "Beide Seiten durch $4$ teilen: $x+5=-2$. Dann minus 5 rechnen: $x=-7$.",
   "typ": "Lineare Gleichungen"
  },
  {
   "id": "G2.23",
   "kap": 2,
   "th": "Algebra",
   "q": "Löse die Gleichung $-2(x-1)=10$.",
   "o": [
    "$x=4$",
    "$x=-4$",
    "$x=-6$",
    "$x=-\\dfrac{11}{2}$"
   ],
   "a": 1,
   "e": "Beide Seiten durch $-2$ teilen: $x-1=-5$. Dann plus 1 rechnen: $x=-4$.",
   "typ": "Lineare Gleichungen"
  },
  {
   "id": "G2.24",
   "kap": 2,
   "th": "Algebra",
   "q": "Löse die Gleichung $\\dfrac{x}{4}+3=8$.",
   "o": [
    "$x=20$",
    "$x=\\dfrac{5}{4}$",
    "$x=44$",
    "$x=29$"
   ],
   "a": 0,
   "e": "Erst die Zahl wegbringen: $\\tfrac{x}{4}=5$. Dann mal $4$: $x=20$.",
   "typ": "Lineare Gleichungen"
  },
  {
   "id": "G2.25",
   "kap": 2,
   "th": "Algebra",
   "q": "Löse die Gleichung $\\dfrac{x}{5}-2=1$.",
   "o": [
    "$x=-5$",
    "$x=15$",
    "$x=\\dfrac{3}{5}$",
    "$x=7$"
   ],
   "a": 1,
   "e": "Erst die Zahl wegbringen: $\\tfrac{x}{5}=3$. Dann mal $5$: $x=15$.",
   "typ": "Lineare Gleichungen"
  },
  {
   "id": "G2.26",
   "kap": 2,
   "th": "Algebra",
   "q": "Für welche $x$ gilt $-3x+6<-9$?",
   "o": [
    "$x<5$",
    "$x<-5$",
    "$x>-5$",
    "$x>5$"
   ],
   "a": 3,
   "e": "Erst die Zahl wegbringen: $-3x<-15$. Dann durch $-3$ teilen. Weil -3 negativ ist, dreht sich das Zeichen um: $x>5$.",
   "typ": "Ungleichungen"
  },
  {
   "id": "G2.27",
   "kap": 2,
   "th": "Algebra",
   "q": "Für welche $x$ gilt $-2x-4\\ge10$?",
   "o": [
    "$x\\le7$",
    "$x\\ge7$",
    "$x\\le-7$",
    "$x\\ge-7$"
   ],
   "a": 2,
   "e": "Erst die Zahl wegbringen: $-2x\\ge14$. Dann durch $-2$ teilen. Weil -2 negativ ist, dreht sich das Zeichen um: $x\\le-7$.",
   "typ": "Ungleichungen"
  },
  {
   "id": "G2.28",
   "kap": 2,
   "th": "Algebra",
   "q": "Für welche $x$ gilt $-5x+10>0$?",
   "o": [
    "$x>-2$",
    "$x<-2$",
    "$x>2$",
    "$x<2$"
   ],
   "a": 3,
   "e": "Erst die Zahl wegbringen: $-5x>-10$. Dann durch $-5$ teilen. Weil -5 negativ ist, dreht sich das Zeichen um: $x<2$.",
   "typ": "Ungleichungen"
  },
  {
   "id": "G2.29",
   "kap": 2,
   "th": "Algebra",
   "q": "Für welche $x$ gilt $4x-3\\le13$?",
   "o": [
    "$x\\ge4$",
    "$x\\le4$",
    "$x\\ge-4$",
    "$x\\le-4$"
   ],
   "a": 1,
   "e": "Erst die Zahl wegbringen: $4x\\le16$. Dann durch $4$ teilen: $x\\le4$.",
   "typ": "Ungleichungen"
  },
  {
   "id": "G2.30",
   "kap": 2,
   "th": "Algebra",
   "q": "Kürze: $\\dfrac{x^2-49}{x+7}$.",
   "o": [
    "$x+7$",
    "$x-7$",
    "$x^2-7$",
    "$x-49$"
   ],
   "a": 1,
   "e": "Binomische Formel rückwärts: $x^2-49=(x+7)(x-7)$. Dann $x+7$ kürzen.",
   "typ": "Bruchterme kürzen"
  },
  {
   "id": "G2.31",
   "kap": 2,
   "th": "Algebra",
   "q": "Kürze: $\\dfrac{4x+12}{4}$.",
   "o": [
    "$x+8$",
    "$4x+3$",
    "$x+12$",
    "$x+3$"
   ],
   "a": 3,
   "e": "Oben 4 ausklammern: $4(x+3)$. Dann die 4 kürzen. Beide Teile oben müssen geteilt werden.",
   "typ": "Bruchterme kürzen"
  },
  {
   "id": "G2.32",
   "kap": 2,
   "th": "Algebra",
   "q": "Kürze: $\\dfrac{x^2-5x}{x}$.",
   "o": [
    "$x-5$",
    "$-5$",
    "$x^2-5$",
    "$-4x$"
   ],
   "a": 0,
   "e": "Oben $x$ ausklammern: $x(x-5)$. Dann $x$ kürzen.",
   "typ": "Bruchterme kürzen"
  },
  {
   "id": "G2.33",
   "kap": 2,
   "th": "Algebra",
   "q": "Kürze: $\\dfrac{x^2+6x+9}{x+3}$.",
   "o": [
    "$x+6$",
    "$x+9$",
    "$x^2+3$",
    "$x+3$"
   ],
   "a": 3,
   "e": "Binomische Formel rückwärts: $x^2+6x+9=(x+3)^2$. Einmal $x+3$ kürzen.",
   "typ": "Bruchterme kürzen"
  },
  {
   "id": "G3.1",
   "kap": 3,
   "th": "Algebra",
   "q": "Vereinfache $2^{3}\\cdot 2^{4}$.",
   "o": [
    "$2^{12}$",
    "$4^{7}$",
    "$2^{7}$",
    "$4^{12}$"
   ],
   "a": 2,
   "e": "Gleiche Basis beim Malnehmen: Hochzahlen addieren. $3+4=7$, also $2^{7}$.",
   "typ": "Potenzgesetze"
  },
  {
   "id": "G3.2",
   "kap": 3,
   "th": "Algebra",
   "q": "Vereinfache $3^{2}\\cdot 3^{5}$.",
   "o": [
    "$3^{10}$",
    "$3^{7}$",
    "$9^{10}$",
    "$9^{7}$"
   ],
   "a": 1,
   "e": "Gleiche Basis beim Malnehmen: Hochzahlen addieren. $2+5=7$, also $3^{7}$.",
   "typ": "Potenzgesetze"
  },
  {
   "id": "G3.3",
   "kap": 3,
   "th": "Algebra",
   "q": "Vereinfache $5^{4}\\cdot 5^{2}$.",
   "o": [
    "$25^{6}$",
    "$5^{8}$",
    "$5^{6}$",
    "$25^{8}$"
   ],
   "a": 2,
   "e": "Gleiche Basis beim Malnehmen: Hochzahlen addieren. $4+2=6$, also $5^{6}$.",
   "typ": "Potenzgesetze"
  },
  {
   "id": "G3.4",
   "kap": 3,
   "th": "Algebra",
   "q": "Vereinfache $\\dfrac{x^{7}}{x^{3}}$.",
   "o": [
    "$x^{10}$",
    "$x^{4}$",
    "$x^{\\tfrac{7}{3}}$",
    "$1$"
   ],
   "a": 1,
   "e": "Gleiche Basis beim Teilen: Hochzahlen abziehen. $7-3=4$, also $x^{4}$.",
   "typ": "Potenzgesetze"
  },
  {
   "id": "G3.5",
   "kap": 3,
   "th": "Algebra",
   "q": "Vereinfache $\\dfrac{x^{9}}{x^{4}}$.",
   "o": [
    "$x^{5}$",
    "$x^{\\tfrac{9}{4}}$",
    "$1$",
    "$x^{13}$"
   ],
   "a": 0,
   "e": "Gleiche Basis beim Teilen: Hochzahlen abziehen. $9-4=5$, also $x^{5}$.",
   "typ": "Potenzgesetze"
  },
  {
   "id": "G3.6",
   "kap": 3,
   "th": "Algebra",
   "q": "Vereinfache $\\left(x^{3}\\right)^{4}$.",
   "o": [
    "$x^{12}$",
    "$4x^{3}$",
    "$x^{81}$",
    "$x^{7}$"
   ],
   "a": 0,
   "e": "Potenz einer Potenz: Hochzahlen malnehmen. $3\\cdot4=12$, also $x^{12}$.",
   "typ": "Potenzgesetze"
  },
  {
   "id": "G3.7",
   "kap": 3,
   "th": "Algebra",
   "q": "Vereinfache $\\left(x^{2}\\right)^{5}$.",
   "o": [
    "$x^{10}$",
    "$x^{7}$",
    "$5x^{2}$",
    "$x^{32}$"
   ],
   "a": 0,
   "e": "Potenz einer Potenz: Hochzahlen malnehmen. $2\\cdot5=10$, also $x^{10}$.",
   "typ": "Potenzgesetze"
  },
  {
   "id": "G3.8",
   "kap": 3,
   "th": "Algebra",
   "q": "Vereinfache $(2x)^{3}$.",
   "o": [
    "$6x^{3}$",
    "$8x^{3}$",
    "$8x$",
    "$2x^{3}$"
   ],
   "a": 1,
   "e": "Die Hochzahl gilt für beide Faktoren in der Klammer: $2^{3}\\cdot x^{3}=8x^{3}$.",
   "typ": "Potenzgesetze"
  },
  {
   "id": "G3.9",
   "kap": 3,
   "th": "Algebra",
   "q": "Vereinfache $(3x)^{2}$.",
   "o": [
    "$9x^{2}$",
    "$3x^{2}$",
    "$9x$",
    "$6x^{2}$"
   ],
   "a": 0,
   "e": "Die Hochzahl gilt für beide Faktoren in der Klammer: $3^{2}\\cdot x^{2}=9x^{2}$.",
   "typ": "Potenzgesetze"
  },
  {
   "id": "G3.10",
   "kap": 3,
   "th": "Algebra",
   "q": "Vereinfache $(-2x)^{3}$.",
   "o": [
    "$-6x^{3}$",
    "$-8x^{3}$",
    "$-8x$",
    "$-2x^{3}$"
   ],
   "a": 1,
   "e": "Die Hochzahl gilt für beide Faktoren in der Klammer: $(-2)^{3}\\cdot x^{3}=-8x^{3}$.",
   "typ": "Potenzgesetze"
  },
  {
   "id": "G3.11",
   "kap": 3,
   "th": "Algebra",
   "q": "Berechne $2^{-4}$.",
   "o": [
    "$\\dfrac{1}{8}$",
    "$-16$",
    "$-8$",
    "$\\dfrac{1}{16}$"
   ],
   "a": 3,
   "e": "Negative Hochzahl heißt Kehrwert: $2^{-4}=\\tfrac{1}{2^{4}}=\\tfrac{1}{16}$. Das Ergebnis ist nicht negativ.",
   "typ": "Negative Hochzahlen"
  },
  {
   "id": "G3.12",
   "kap": 3,
   "th": "Algebra",
   "q": "Berechne $3^{-2}$.",
   "o": [
    "$-9$",
    "$\\dfrac{1}{6}$",
    "$-6$",
    "$\\dfrac{1}{9}$"
   ],
   "a": 3,
   "e": "Negative Hochzahl heißt Kehrwert: $3^{-2}=\\tfrac{1}{3^{2}}=\\tfrac{1}{9}$. Das Ergebnis ist nicht negativ.",
   "typ": "Negative Hochzahlen"
  },
  {
   "id": "G3.13",
   "kap": 3,
   "th": "Algebra",
   "q": "Berechne $5^{-2}$.",
   "o": [
    "$-25$",
    "$\\dfrac{1}{25}$",
    "$-10$",
    "$\\dfrac{1}{10}$"
   ],
   "a": 1,
   "e": "Negative Hochzahl heißt Kehrwert: $5^{-2}=\\tfrac{1}{5^{2}}=\\tfrac{1}{25}$. Das Ergebnis ist nicht negativ.",
   "typ": "Negative Hochzahlen"
  },
  {
   "id": "G3.14",
   "kap": 3,
   "th": "Algebra",
   "q": "Berechne $10^{-3}$.",
   "o": [
    "$-1000$",
    "$-30$",
    "$\\dfrac{1}{1000}$",
    "$\\dfrac{1}{30}$"
   ],
   "a": 2,
   "e": "Negative Hochzahl heißt Kehrwert: $10^{-3}=\\tfrac{1}{10^{3}}=\\tfrac{1}{1000}$. Das Ergebnis ist nicht negativ.",
   "typ": "Negative Hochzahlen"
  },
  {
   "id": "G3.15",
   "kap": 3,
   "th": "Algebra",
   "q": "Berechne $4^{-1}$.",
   "o": [
    "$4$",
    "$-4$",
    "$-\\dfrac{1}{4}$",
    "$\\dfrac{1}{4}$"
   ],
   "a": 3,
   "e": "Negative Hochzahl heißt Kehrwert: $4^{-1}=\\tfrac{1}{4^{1}}=\\tfrac{1}{4}$. Das Ergebnis ist nicht negativ.",
   "typ": "Negative Hochzahlen"
  },
  {
   "id": "G3.16",
   "kap": 3,
   "th": "Algebra",
   "q": "Berechne $25^{\\frac{1}{2}}$.",
   "o": [
    "$5$",
    "$\\dfrac{1}{5}$",
    "$\\dfrac{25}{2}$",
    "$23$"
   ],
   "a": 0,
   "e": "Hoch $\\tfrac12$ ist die 2. Wurzel: Welche Zahl ergibt hoch 2 genau 25? Antwort: $5$, denn $5^{2}=25$.",
   "typ": "Wurzeln"
  },
  {
   "id": "G3.17",
   "kap": 3,
   "th": "Algebra",
   "q": "Berechne $27^{\\frac{1}{3}}$.",
   "o": [
    "$3$",
    "$\\dfrac{1}{3}$",
    "$24$",
    "$9$"
   ],
   "a": 0,
   "e": "Hoch $\\tfrac13$ ist die 3. Wurzel: Welche Zahl ergibt hoch 3 genau 27? Antwort: $3$, denn $3^{3}=27$.",
   "typ": "Wurzeln"
  },
  {
   "id": "G3.18",
   "kap": 3,
   "th": "Algebra",
   "q": "Berechne $64^{\\frac{1}{2}}$.",
   "o": [
    "$8$",
    "$\\dfrac{1}{8}$",
    "$62$",
    "$32$"
   ],
   "a": 0,
   "e": "Hoch $\\tfrac12$ ist die 2. Wurzel: Welche Zahl ergibt hoch 2 genau 64? Antwort: $8$, denn $8^{2}=64$.",
   "typ": "Wurzeln"
  },
  {
   "id": "G3.19",
   "kap": 3,
   "th": "Algebra",
   "q": "Berechne $16^{\\frac{1}{4}}$.",
   "o": [
    "$2$",
    "$4$",
    "$\\dfrac{1}{2}$",
    "$12$"
   ],
   "a": 0,
   "e": "Hoch $\\tfrac14$ ist die 4. Wurzel: Welche Zahl ergibt hoch 4 genau 16? Antwort: $2$, denn $2^{4}=16$.",
   "typ": "Wurzeln"
  },
  {
   "id": "G3.20",
   "kap": 3,
   "th": "Algebra",
   "q": "Vereinfache $\\sqrt{12}$ so weit wie möglich.",
   "o": [
    "$4\\sqrt{3}$",
    "$3\\sqrt{2}$",
    "$6$",
    "$2\\sqrt{3}$"
   ],
   "a": 3,
   "e": "Eine Quadratzahl abspalten: $\\sqrt{12}=\\sqrt{4\\cdot3}=\\sqrt{4}\\cdot\\sqrt{3}=2\\sqrt{3}$.",
   "typ": "Wurzeln"
  },
  {
   "id": "G3.21",
   "kap": 3,
   "th": "Algebra",
   "q": "Vereinfache $\\sqrt{18}$ so weit wie möglich.",
   "o": [
    "$9\\sqrt{2}$",
    "$6$",
    "$2\\sqrt{3}$",
    "$3\\sqrt{2}$"
   ],
   "a": 3,
   "e": "Eine Quadratzahl abspalten: $\\sqrt{18}=\\sqrt{9\\cdot2}=\\sqrt{9}\\cdot\\sqrt{2}=3\\sqrt{2}$.",
   "typ": "Wurzeln"
  },
  {
   "id": "G3.22",
   "kap": 3,
   "th": "Algebra",
   "q": "Vereinfache $\\sqrt{75}$ so weit wie möglich.",
   "o": [
    "$3\\sqrt{5}$",
    "$25\\sqrt{3}$",
    "$15$",
    "$5\\sqrt{3}$"
   ],
   "a": 3,
   "e": "Eine Quadratzahl abspalten: $\\sqrt{75}=\\sqrt{25\\cdot3}=\\sqrt{25}\\cdot\\sqrt{3}=5\\sqrt{3}$.",
   "typ": "Wurzeln"
  },
  {
   "id": "G3.23",
   "kap": 3,
   "th": "Algebra",
   "q": "Vereinfache $\\sqrt{32}$ so weit wie möglich.",
   "o": [
    "$8$",
    "$16\\sqrt{2}$",
    "$4\\sqrt{2}$",
    "$2\\sqrt{4}$"
   ],
   "a": 2,
   "e": "Eine Quadratzahl abspalten: $\\sqrt{32}=\\sqrt{16\\cdot2}=\\sqrt{16}\\cdot\\sqrt{2}=4\\sqrt{2}$.",
   "typ": "Wurzeln"
  },
  {
   "id": "G3.24",
   "kap": 3,
   "th": "Algebra",
   "q": "Welche Lösungen hat $x^{2}-9x+14=0$?",
   "o": [
    "$x=2$ und $x=7$",
    "$x=-2$ und $x=7$",
    "$x=-7$ und $x=-2$",
    "$x=-7$ und $x=2$"
   ],
   "a": 0,
   "e": "Gesucht sind zwei Zahlen mit Produkt $14$ und Summe $9$: $2$ und $7$. Mit der pq-Formel: $x=\\tfrac{9}{2}\\pm\\sqrt{\\tfrac{25}{4}}$.",
   "typ": "Quadratische Gleichungen"
  },
  {
   "id": "G3.25",
   "kap": 3,
   "th": "Algebra",
   "q": "Welche Lösungen hat $x^{2}-2x-15=0$?",
   "o": [
    "$x=-3$ und $x=5$",
    "$x=3$ und $x=5$",
    "$x=-5$ und $x=-3$",
    "$x=-5$ und $x=3$"
   ],
   "a": 0,
   "e": "Gesucht sind zwei Zahlen mit Produkt $-15$ und Summe $2$: $-3$ und $5$. Mit der pq-Formel: $x=1\\pm\\sqrt{16}$.",
   "typ": "Quadratische Gleichungen"
  },
  {
   "id": "G3.26",
   "kap": 3,
   "th": "Algebra",
   "q": "Welche Lösungen hat $x^{2}+10x+24=0$?",
   "o": [
    "$x=-4$ und $x=6$",
    "$x=-6$ und $x=4$",
    "$x=4$ und $x=6$",
    "$x=-6$ und $x=-4$"
   ],
   "a": 3,
   "e": "Gesucht sind zwei Zahlen mit Produkt $24$ und Summe $-10$: $-4$ und $-6$. Mit der pq-Formel: $x=-5\\pm\\sqrt{1}$.",
   "typ": "Quadratische Gleichungen"
  },
  {
   "id": "G3.27",
   "kap": 3,
   "th": "Algebra",
   "q": "Welche Lösungen hat $x^{2}+7x-8=0$?",
   "o": [
    "$x=-1$ und $x=8$",
    "$x=-8$ und $x=1$",
    "$x=-8$ und $x=-1$",
    "$x=1$ und $x=8$"
   ],
   "a": 1,
   "e": "Gesucht sind zwei Zahlen mit Produkt $-8$ und Summe $-7$: $1$ und $-8$. Mit der pq-Formel: $x=-\\tfrac{7}{2}\\pm\\sqrt{\\tfrac{81}{4}}$.",
   "typ": "Quadratische Gleichungen"
  },
  {
   "id": "G3.28",
   "kap": 3,
   "th": "Algebra",
   "q": "Welche Lösungen hat $2x^{2}-12x+10=0$?",
   "o": [
    "$x=-5$ und $x=1$",
    "$x=-5$ und $x=-1$",
    "$x=1$ und $x=5$",
    "$x=-1$ und $x=5$"
   ],
   "a": 2,
   "e": "Erst durch 2 teilen: $x^{2}-6x+5=0$. Gesucht sind zwei Zahlen mit Produkt $5$ und Summe $6$: $1$ und $5$. Mit der pq-Formel: $x=3\\pm\\sqrt{4}$.",
   "typ": "Quadratische Gleichungen"
  },
  {
   "id": "G3.29",
   "kap": 3,
   "th": "Algebra",
   "q": "Welche Lösungen hat $3x^{2}-9x-12=0$?",
   "o": [
    "$x=-4$ und $x=1$",
    "$x=-1$ und $x=4$",
    "$x=-4$ und $x=-1$",
    "$x=1$ und $x=4$"
   ],
   "a": 1,
   "e": "Erst durch 3 teilen: $x^{2}-3x-4=0$. Gesucht sind zwei Zahlen mit Produkt $-4$ und Summe $3$: $-1$ und $4$. Mit der pq-Formel: $x=\\tfrac{3}{2}\\pm\\sqrt{\\tfrac{25}{4}}$.",
   "typ": "Quadratische Gleichungen"
  },
  {
   "id": "G3.30",
   "kap": 3,
   "th": "Algebra",
   "q": "Bestimme die Lösungsmenge von $x^2-7x=0$.",
   "o": [
    "$\\{-7;\\,0\\}$",
    "$\\{0;\\,7\\}$",
    "$\\{-7;\\,7\\}$",
    "$\\{7\\}$"
   ],
   "a": 1,
   "e": "$x$ ausklammern: $x(x-7)=0$. Ein Produkt ist null, wenn ein Faktor null ist: $x=0$ oder $x=7$. Nicht durch $x$ teilen, sonst geht $x=0$ verloren.",
   "typ": "Quadratische Gleichungen"
  },
  {
   "id": "G3.31",
   "kap": 3,
   "th": "Algebra",
   "q": "Bestimme die Lösungsmenge von $x^2+4x=0$.",
   "o": [
    "$\\{0;\\,4\\}$",
    "$\\{-4;\\,0\\}$",
    "$\\{-4;\\,4\\}$",
    "$\\{-4\\}$"
   ],
   "a": 1,
   "e": "$x$ ausklammern: $x(x+4)=0$. Ein Produkt ist null, wenn ein Faktor null ist: $x=0$ oder $x=-4$. Nicht durch $x$ teilen, sonst geht $x=0$ verloren.",
   "typ": "Quadratische Gleichungen"
  },
  {
   "id": "G3.32",
   "kap": 3,
   "th": "Algebra",
   "q": "Bestimme die Lösungsmenge von $x^2-9x=0$.",
   "o": [
    "$\\{0;\\,9\\}$",
    "$\\{-9;\\,0\\}$",
    "$\\{-9;\\,9\\}$",
    "$\\{9\\}$"
   ],
   "a": 0,
   "e": "$x$ ausklammern: $x(x-9)=0$. Ein Produkt ist null, wenn ein Faktor null ist: $x=0$ oder $x=9$. Nicht durch $x$ teilen, sonst geht $x=0$ verloren.",
   "typ": "Quadratische Gleichungen"
  },
  {
   "id": "G3.33",
   "kap": 3,
   "th": "Algebra",
   "q": "Löse die Gleichung $3x^{2}=48$.",
   "o": [
    "$x=4$ oder $x=-4$",
    "$x=8$ oder $x=-8$",
    "nur $x=16$",
    "nur $x=4$"
   ],
   "a": 0,
   "e": "Durch 3 teilen: $x^2=16$. Wurzel ziehen, Plus und Minus nicht vergessen: $x=4$ oder $x=-4$.",
   "typ": "Quadratische Gleichungen"
  },
  {
   "id": "G3.34",
   "kap": 3,
   "th": "Algebra",
   "q": "Löse die Gleichung $x^{2}=81$.",
   "o": [
    "nur $x=81$",
    "$x=\\tfrac{81}{2}$ oder $x=-\\tfrac{81}{2}$",
    "$x=9$ oder $x=-9$",
    "nur $x=9$"
   ],
   "a": 2,
   "e": "Wurzel ziehen, Plus und Minus nicht vergessen: $x=9$ oder $x=-9$.",
   "typ": "Quadratische Gleichungen"
  },
  {
   "id": "G3.35",
   "kap": 3,
   "th": "Algebra",
   "q": "Löse die Gleichung $2x^{2}=50$.",
   "o": [
    "nur $x=5$",
    "$x=\\tfrac{25}{2}$ oder $x=-\\tfrac{25}{2}$",
    "nur $x=25$",
    "$x=5$ oder $x=-5$"
   ],
   "a": 3,
   "e": "Durch 2 teilen: $x^2=25$. Wurzel ziehen, Plus und Minus nicht vergessen: $x=5$ oder $x=-5$.",
   "typ": "Quadratische Gleichungen"
  },
  {
   "id": "G3.36",
   "kap": 3,
   "th": "Algebra",
   "q": "Löse das Gleichungssystem: $x+y=5$ und $x-y=1$.",
   "o": [
    "$x=-3,\\ y=2$",
    "$x=3,\\ y=2$",
    "$x=3,\\ y=-2$",
    "$x=2,\\ y=3$"
   ],
   "a": 1,
   "e": "Im Test am schnellsten: die Antworten in beide Gleichungen einsetzen. Mit $x=3$ und $y=2$: $1\\cdot3+1\\cdot2=5$ und $1\\cdot3-1\\cdot2=1$. Beide stimmen.",
   "typ": "Gleichungssysteme"
  },
  {
   "id": "G3.37",
   "kap": 3,
   "th": "Algebra",
   "q": "Löse das Gleichungssystem: $2x+y=7$ und $x+3y=1$.",
   "o": [
    "$x=-4,\\ y=-1$",
    "$x=4,\\ y=-1$",
    "$x=-1,\\ y=4$",
    "$x=4,\\ y=1$"
   ],
   "a": 1,
   "e": "Im Test am schnellsten: die Antworten in beide Gleichungen einsetzen. Mit $x=4$ und $y=-1$: $2\\cdot4+1\\cdot(-1)=7$ und $1\\cdot4+3\\cdot(-1)=1$. Beide stimmen.",
   "typ": "Gleichungssysteme"
  },
  {
   "id": "G3.38",
   "kap": 3,
   "th": "Algebra",
   "q": "Löse das Gleichungssystem: $3x-y=1$ und $x+2y=12$.",
   "o": [
    "$x=2,\\ y=-5$",
    "$x=2,\\ y=5$",
    "$x=5,\\ y=2$",
    "$x=-2,\\ y=5$"
   ],
   "a": 1,
   "e": "Im Test am schnellsten: die Antworten in beide Gleichungen einsetzen. Mit $x=2$ und $y=5$: $3\\cdot2-1\\cdot5=1$ und $1\\cdot2+2\\cdot5=12$. Beide stimmen.",
   "typ": "Gleichungssysteme"
  },
  {
   "id": "G3.39",
   "kap": 3,
   "th": "Algebra",
   "q": "Löse das Gleichungssystem: $x+2y=4$ und $3x+y=-3$.",
   "o": [
    "$x=-2,\\ y=-3$",
    "$x=-2,\\ y=3$",
    "$x=2,\\ y=3$",
    "$x=3,\\ y=-2$"
   ],
   "a": 1,
   "e": "Im Test am schnellsten: die Antworten in beide Gleichungen einsetzen. Mit $x=-2$ und $y=3$: $1\\cdot(-2)+2\\cdot3=4$ und $3\\cdot(-2)+1\\cdot3=-3$. Beide stimmen.",
   "typ": "Gleichungssysteme"
  },
  {
   "id": "G3.40",
   "kap": 3,
   "th": "Algebra",
   "q": "Berechne $\\log_{2}32$.",
   "o": [
    "$6$",
    "$16$",
    "$10$",
    "$5$"
   ],
   "a": 3,
   "e": "Der Logarithmus fragt: $2$ hoch wie viel ist $32$? Antwort: $5$, denn $2^{5}=32$.",
   "typ": "Logarithmus"
  },
  {
   "id": "G3.41",
   "kap": 3,
   "th": "Algebra",
   "q": "Berechne $\\log_{3}81$.",
   "o": [
    "$12$",
    "$27$",
    "$4$",
    "$5$"
   ],
   "a": 2,
   "e": "Der Logarithmus fragt: $3$ hoch wie viel ist $81$? Antwort: $4$, denn $3^{4}=81$.",
   "typ": "Logarithmus"
  },
  {
   "id": "G3.42",
   "kap": 3,
   "th": "Algebra",
   "q": "Berechne $\\log_{10}10000$.",
   "o": [
    "$5$",
    "$40$",
    "$4$",
    "$1000$"
   ],
   "a": 2,
   "e": "Der Logarithmus fragt: $10$ hoch wie viel ist $10000$? Antwort: $4$, denn $10^{4}=10000$.",
   "typ": "Logarithmus"
  },
  {
   "id": "G3.43",
   "kap": 3,
   "th": "Algebra",
   "q": "Berechne $\\log_{5}125$.",
   "o": [
    "$25$",
    "$4$",
    "$15$",
    "$3$"
   ],
   "a": 3,
   "e": "Der Logarithmus fragt: $5$ hoch wie viel ist $125$? Antwort: $3$, denn $5^{3}=125$.",
   "typ": "Logarithmus"
  },
  {
   "id": "G3.44",
   "kap": 3,
   "th": "Algebra",
   "q": "Berechne $\\log_{2}8+\\log_{2}16$.",
   "o": [
    "$12$",
    "$128$",
    "$7$",
    "$8$"
   ],
   "a": 2,
   "e": "Einzeln ausrechnen: $\\log_{2}8=3$ und $\\log_{2}16=4$. Dann $3+4=7$.",
   "typ": "Logarithmus"
  },
  {
   "id": "G3.45",
   "kap": 3,
   "th": "Algebra",
   "q": "Berechne $\\log_{3}3+\\log_{3}9$.",
   "o": [
    "$4$",
    "$27$",
    "$3$",
    "$2$"
   ],
   "a": 2,
   "e": "Einzeln ausrechnen: $\\log_{3}3=1$ und $\\log_{3}9=2$. Dann $1+2=3$.",
   "typ": "Logarithmus"
  },
  {
   "id": "G3.46",
   "kap": 3,
   "th": "Algebra",
   "q": "Berechne $\\log_{2}64-\\log_{2}4$.",
   "o": [
    "$16$",
    "$5$",
    "$4$",
    "$3$"
   ],
   "a": 2,
   "e": "Einzeln ausrechnen: $\\log_{2}64=6$ und $\\log_{2}4=2$. Dann $6-2=4$.",
   "typ": "Logarithmus"
  },
  {
   "id": "G3.47",
   "kap": 3,
   "th": "Algebra",
   "q": "Löse die Gleichung $2^x=64$.",
   "o": [
    "$x=32$",
    "$x=7$",
    "$x=62$",
    "$x=6$"
   ],
   "a": 3,
   "e": "Gesucht ist die Hochzahl: $2$ hoch wie viel ist $64$? $2^{6}=64$, also $x=6$.",
   "typ": "Exponentialgleichungen"
  },
  {
   "id": "G3.48",
   "kap": 3,
   "th": "Algebra",
   "q": "Löse die Gleichung $3^x=27$.",
   "o": [
    "$x=3$",
    "$x=4$",
    "$x=24$",
    "$x=9$"
   ],
   "a": 0,
   "e": "Gesucht ist die Hochzahl: $3$ hoch wie viel ist $27$? $3^{3}=27$, also $x=3$.",
   "typ": "Exponentialgleichungen"
  },
  {
   "id": "G3.49",
   "kap": 3,
   "th": "Algebra",
   "q": "Löse die Gleichung $5^x=25$.",
   "o": [
    "$x=20$",
    "$x=5$",
    "$x=3$",
    "$x=2$"
   ],
   "a": 3,
   "e": "Gesucht ist die Hochzahl: $5$ hoch wie viel ist $25$? $5^{2}=25$, also $x=2$.",
   "typ": "Exponentialgleichungen"
  },
  {
   "id": "G3.50",
   "kap": 3,
   "th": "Algebra",
   "q": "Löse die Gleichung $4^x=64$.",
   "o": [
    "$x=3$",
    "$x=60$",
    "$x=16$",
    "$x=4$"
   ],
   "a": 0,
   "e": "Gesucht ist die Hochzahl: $4$ hoch wie viel ist $64$? $4^{3}=64$, also $x=3$.",
   "typ": "Exponentialgleichungen"
  },
  {
   "id": "G4.1",
   "kap": 4,
   "th": "Analysis",
   "q": "Gegeben ist $f(x)=x^{2}-3x+2$. Berechne $f(-2)$.",
   "o": [
    "$13$",
    "$12$",
    "$4$",
    "$0$"
   ],
   "a": 1,
   "e": "Für jedes $x$ die Zahl einsetzen, negative Zahlen in Klammern: $(-2)^2-3\\cdot(-2)+2=4+6+2=12$.",
   "typ": "Funktionswerte"
  },
  {
   "id": "G4.2",
   "kap": 4,
   "th": "Analysis",
   "q": "Gegeben ist $f(x)=2x^{2}+x-5$. Berechne $f(-1)$.",
   "o": [
    "$-8$",
    "$-10$",
    "$-4$",
    "$-2$"
   ],
   "a": 2,
   "e": "Für jedes $x$ die Zahl einsetzen, negative Zahlen in Klammern: $2\\cdot(-1)^2+1\\cdot(-1)-5=2-1-5=-4$.",
   "typ": "Funktionswerte"
  },
  {
   "id": "G4.3",
   "kap": 4,
   "th": "Analysis",
   "q": "Gegeben ist $f(x)=-x^{2}+4x$. Berechne $f(3)$.",
   "o": [
    "$-21$",
    "$6$",
    "$3$",
    "$21$"
   ],
   "a": 2,
   "e": "Für jedes $x$ die Zahl einsetzen, negative Zahlen in Klammern: $-3^2+4\\cdot3+0=-9+12+0=3$.",
   "typ": "Funktionswerte"
  },
  {
   "id": "G4.4",
   "kap": 4,
   "th": "Analysis",
   "q": "Bestimme die Nullstelle von $f(x)=2x-8$.",
   "o": [
    "$x=4$",
    "$x=\\dfrac{1}{4}$",
    "$x=-4$",
    "$x=-8$"
   ],
   "a": 0,
   "e": "Nullstelle heißt $f(x)=0$: $2x-8=0$, also $2x=8$ und $x=4$.",
   "typ": "Geraden"
  },
  {
   "id": "G4.5",
   "kap": 4,
   "th": "Analysis",
   "q": "Bestimme die Nullstelle von $f(x)=3x+6$.",
   "o": [
    "$x=2$",
    "$x=-\\dfrac{1}{2}$",
    "$x=-2$",
    "$x=6$"
   ],
   "a": 2,
   "e": "Nullstelle heißt $f(x)=0$: $3x+6=0$, also $3x=-6$ und $x=-2$.",
   "typ": "Geraden"
  },
  {
   "id": "G4.6",
   "kap": 4,
   "th": "Analysis",
   "q": "Bestimme die Nullstelle von $f(x)=-4x+10$.",
   "o": [
    "$x=-\\dfrac{5}{2}$",
    "$x=10$",
    "$x=\\dfrac{2}{5}$",
    "$x=\\dfrac{5}{2}$"
   ],
   "a": 3,
   "e": "Nullstelle heißt $f(x)=0$: $-4x+10=0$, also $-4x=-10$ und $x=\\tfrac{5}{2}$.",
   "typ": "Geraden"
  },
  {
   "id": "G4.7",
   "kap": 4,
   "th": "Analysis",
   "q": "Welche Steigung hat die Gerade durch $P(1\\,|\\,3)$ und $Q(3\\,|\\,11)$?",
   "o": [
    "$5$",
    "$-4$",
    "$4$",
    "$\\dfrac{1}{4}$"
   ],
   "a": 2,
   "e": "Steigung ist Höhenunterschied durch Seitenunterschied: $m=\\tfrac{11-3}{3-1}=\\tfrac{8}{2}=4$.",
   "typ": "Geraden"
  },
  {
   "id": "G4.8",
   "kap": 4,
   "th": "Analysis",
   "q": "Welche Steigung hat die Gerade durch $P(-2\\,|\\,5)$ und $Q(2\\,|\\,-3)$?",
   "o": [
    "$-2$",
    "$-1$",
    "$-\\dfrac{1}{2}$",
    "$2$"
   ],
   "a": 0,
   "e": "Steigung ist Höhenunterschied durch Seitenunterschied: $m=\\tfrac{-3-5}{2-(-2)}=\\tfrac{-8}{4}=-2$.",
   "typ": "Geraden"
  },
  {
   "id": "G4.9",
   "kap": 4,
   "th": "Analysis",
   "q": "Welche Gerade geht durch $P(2\\,|\\,1)$ und $Q(4\\,|\\,7)$?",
   "o": [
    "$y=\\tfrac{1}{3}x-5$",
    "$y=3x-5$",
    "$y=-3x-5$",
    "$y=3x+5$"
   ],
   "a": 1,
   "e": "Steigung: $m=\\tfrac{6}{2}=3$. Punkt $P$ einsetzen: $1=3\\cdot2+b$, also $b=-5$. Im Test geht auch: beide Punkte in die Antworten einsetzen.",
   "typ": "Geraden"
  },
  {
   "id": "G4.10",
   "kap": 4,
   "th": "Analysis",
   "q": "Welche Gerade geht durch $P(-1\\,|\\,4)$ und $Q(1\\,|\\,0)$?",
   "o": [
    "$y=-2x-2$",
    "$y=-2x+2$",
    "$y=-\\tfrac{1}{2}x+2$",
    "$y=2x+2$"
   ],
   "a": 1,
   "e": "Steigung: $m=\\tfrac{-4}{2}=-2$. Punkt $P$ einsetzen: $4=-2\\cdot(-1)+b$, also $b=2$. Im Test geht auch: beide Punkte in die Antworten einsetzen.",
   "typ": "Geraden"
  },
  {
   "id": "G4.11",
   "kap": 4,
   "th": "Analysis",
   "q": "Welche Gerade geht durch $P(0\\,|\\,3)$ und $Q(6\\,|\\,6)$?",
   "o": [
    "$y=\\tfrac{1}{2}x+3$",
    "$y=-\\tfrac{1}{2}x+3$",
    "$y=2x+3$",
    "$y=\\tfrac{1}{2}x-3$"
   ],
   "a": 0,
   "e": "Steigung: $m=\\tfrac{3}{6}=\\tfrac{1}{2}$. Punkt $P$ einsetzen: $3=\\tfrac{1}{2}\\cdot0+b$, also $b=3$. Im Test geht auch: beide Punkte in die Antworten einsetzen.",
   "typ": "Geraden"
  },
  {
   "id": "G4.12",
   "kap": 4,
   "th": "Analysis",
   "q": "Gegeben ist $f(x)=(x-4)^2-3$. Wo liegt der Scheitel, und wie ist die Parabel geöffnet?",
   "o": [
    "$S(4\\,|\\,-3)$, nach unten geöffnet",
    "$S(-4\\,|\\,-3)$, nach oben geöffnet",
    "$S(4\\,|\\,-3)$, nach oben geöffnet",
    "$S(4\\,|\\,3)$, nach oben geöffnet"
   ],
   "a": 2,
   "e": "Scheitelpunktform $a(x-d)^2+e$ mit Scheitel $S(d\\,|\\,e)$. Hier steht $(x-4)$, also $d=4$, und $e=-3$. Der Faktor vor der Klammer ist positiv: nach oben geöffnet.",
   "typ": "Parabeln"
  },
  {
   "id": "G4.13",
   "kap": 4,
   "th": "Analysis",
   "q": "Gegeben ist $f(x)=-(x+2)^2+5$. Wo liegt der Scheitel, und wie ist die Parabel geöffnet?",
   "o": [
    "$S(-2\\,|\\,-5)$, nach unten geöffnet",
    "$S(-2\\,|\\,5)$, nach unten geöffnet",
    "$S(-2\\,|\\,5)$, nach oben geöffnet",
    "$S(2\\,|\\,5)$, nach unten geöffnet"
   ],
   "a": 1,
   "e": "Scheitelpunktform $a(x-d)^2+e$ mit Scheitel $S(d\\,|\\,e)$. Hier steht $(x+2)$, also $d=-2$, und $e=5$. Der Faktor vor der Klammer ist negativ: nach unten geöffnet.",
   "typ": "Parabeln"
  },
  {
   "id": "G4.14",
   "kap": 4,
   "th": "Analysis",
   "q": "Gegeben ist $f(x)=2(x+1)^2-6$. Wo liegt der Scheitel, und wie ist die Parabel geöffnet?",
   "o": [
    "$S(-1\\,|\\,6)$, nach oben geöffnet",
    "$S(-1\\,|\\,-6)$, nach unten geöffnet",
    "$S(1\\,|\\,-6)$, nach oben geöffnet",
    "$S(-1\\,|\\,-6)$, nach oben geöffnet"
   ],
   "a": 3,
   "e": "Scheitelpunktform $a(x-d)^2+e$ mit Scheitel $S(d\\,|\\,e)$. Hier steht $(x+1)$, also $d=-1$, und $e=-6$. Der Faktor vor der Klammer ist positiv: nach oben geöffnet.",
   "typ": "Parabeln"
  },
  {
   "id": "G4.15",
   "kap": 4,
   "th": "Analysis",
   "q": "Gegeben ist $f(x)=-3(x-5)^2+2$. Wo liegt der Scheitel, und wie ist die Parabel geöffnet?",
   "o": [
    "$S(-5\\,|\\,2)$, nach unten geöffnet",
    "$S(5\\,|\\,2)$, nach oben geöffnet",
    "$S(5\\,|\\,2)$, nach unten geöffnet",
    "$S(5\\,|\\,-2)$, nach unten geöffnet"
   ],
   "a": 2,
   "e": "Scheitelpunktform $a(x-d)^2+e$ mit Scheitel $S(d\\,|\\,e)$. Hier steht $(x-5)$, also $d=5$, und $e=2$. Der Faktor vor der Klammer ist negativ: nach unten geöffnet.",
   "typ": "Parabeln"
  },
  {
   "id": "G4.16",
   "kap": 4,
   "th": "Analysis",
   "q": "Welche Funktion gehört zum abgebildeten Graphen?",
   "o": [
    "$f(x)=-2x-1$",
    "$f(x)=2x-1$",
    "$f(x)=\\tfrac{1}{2}x-1$",
    "$f(x)=2x+1$"
   ],
   "a": 1,
   "e": "Schnitt mit der $y$-Achse ablesen: $b=-1$. Steigung: ein Schritt nach rechts, $2$ nach oben, also $m=2$.",
   "grafik": {
    "fn": "(2.0)*x+(-1)",
    "xmin": -5,
    "xmax": 5,
    "ymin": -5,
    "ymax": 5
   },
   "typ": "Graphen lesen"
  },
  {
   "id": "G4.17",
   "kap": 4,
   "th": "Analysis",
   "q": "Welche Funktion gehört zum abgebildeten Graphen?",
   "o": [
    "$f(x)=-x+3$",
    "$f(x)=-x-3$",
    "$f(x)=3x-1$",
    "$f(x)=x+3$"
   ],
   "a": 0,
   "e": "Schnitt mit der $y$-Achse ablesen: $b=3$. Steigung: ein Schritt nach rechts, $-1$ nach unten, also $m=-1$.",
   "grafik": {
    "fn": "(-1.0)*x+(3)",
    "xmin": -5,
    "xmax": 5,
    "ymin": -5,
    "ymax": 5
   },
   "typ": "Graphen lesen"
  },
  {
   "id": "G4.18",
   "kap": 4,
   "th": "Analysis",
   "q": "Welche Funktion gehört zum abgebildeten Graphen?",
   "o": [
    "$f(x)=2x+1$",
    "$f(x)=-\\tfrac{1}{2}x+1$",
    "$f(x)=\\tfrac{1}{2}x+1$",
    "$f(x)=\\tfrac{1}{2}x-1$"
   ],
   "a": 2,
   "e": "Schnitt mit der $y$-Achse ablesen: $b=1$. Steigung: ein Schritt nach rechts, $\\tfrac{1}{2}$ nach oben, also $m=\\tfrac{1}{2}$.",
   "grafik": {
    "fn": "(0.5)*x+(1)",
    "xmin": -5,
    "xmax": 5,
    "ymin": -5,
    "ymax": 5
   },
   "typ": "Graphen lesen"
  },
  {
   "id": "G4.19",
   "kap": 4,
   "th": "Analysis",
   "q": "Welche Funktion gehört zum abgebildeten Graphen?",
   "o": [
    "$f(x)=-(x-2)^2-3$",
    "$f(x)=(x-2)^2-3$",
    "$f(x)=(x-2)^2+3$",
    "$f(x)=(x+2)^2-3$"
   ],
   "a": 1,
   "e": "Scheitel ablesen: $S(2\\,|\\,-3)$. Die Parabel ist nach oben geöffnet. In der Scheitelpunktform steht dann $(x-2)^2-3$.",
   "grafik": {
    "fn": "(1)*(x-(2))**2+(-3)",
    "xmin": -5,
    "xmax": 5,
    "ymin": -5,
    "ymax": 5
   },
   "typ": "Graphen lesen"
  },
  {
   "id": "G4.20",
   "kap": 4,
   "th": "Analysis",
   "q": "Welche Funktion gehört zum abgebildeten Graphen?",
   "o": [
    "$f(x)=-(x-1)^2+2$",
    "$f(x)=-(x+1)^2+2$",
    "$f(x)=-(x-1)^2-2$",
    "$f(x)=(x-1)^2+2$"
   ],
   "a": 0,
   "e": "Scheitel ablesen: $S(1\\,|\\,2)$. Die Parabel ist nach unten geöffnet. In der Scheitelpunktform steht dann $(x-1)^2+2$ mit Minus davor.",
   "grafik": {
    "fn": "(-1)*(x-(1))**2+(2)",
    "xmin": -5,
    "xmax": 5,
    "ymin": -5,
    "ymax": 5
   },
   "typ": "Graphen lesen"
  },
  {
   "id": "G4.21",
   "kap": 4,
   "th": "Analysis",
   "q": "Welche Funktion gehört zum abgebildeten Graphen?",
   "o": [
    "$f(x)=-(x+2)^2+1$",
    "$f(x)=(x+2)^2+1$",
    "$f(x)=(x+2)^2-1$",
    "$f(x)=(x-2)^2+1$"
   ],
   "a": 1,
   "e": "Scheitel ablesen: $S(-2\\,|\\,1)$. Die Parabel ist nach oben geöffnet. In der Scheitelpunktform steht dann $(x+2)^2+1$.",
   "grafik": {
    "fn": "(1)*(x-(-2))**2+(1)",
    "xmin": -5,
    "xmax": 5,
    "ymin": -5,
    "ymax": 5
   },
   "typ": "Graphen lesen"
  },
  {
   "id": "G4.22",
   "kap": 4,
   "th": "Analysis",
   "q": "Gegeben sind $f(x)=2x-1$ und $g(x)=x^{2}+1$. Berechne $f(g(3))$.",
   "o": [
    "$26$",
    "$19$",
    "$50$",
    "$15$"
   ],
   "a": 1,
   "e": "Von innen nach außen. Erst $g(3)=3^2+1=10$. Dann $f(10)=2\\cdot10-1=19$.",
   "typ": "Verkettung"
  },
  {
   "id": "G4.23",
   "kap": 4,
   "th": "Analysis",
   "q": "Gegeben sind $f(x)=3x+2$ und $g(x)=x^{2}-4$. Berechne $f(g(2))$.",
   "o": [
    "$60$",
    "$8$",
    "$0$",
    "$2$"
   ],
   "a": 3,
   "e": "Von innen nach außen. Erst $g(2)=2^2-4=0$. Dann $f(0)=3\\cdot0+2=2$.",
   "typ": "Verkettung"
  },
  {
   "id": "G4.24",
   "kap": 4,
   "th": "Analysis",
   "q": "Gegeben sind $f(x)=-x+5$ und $g(x)=x^{2}+2$. Berechne $f(g(-2))$.",
   "o": [
    "$-1$",
    "$42$",
    "$13$",
    "$51$"
   ],
   "a": 0,
   "e": "Von innen nach außen. Erst $g(-2)=(-2)^2+2=6$. Dann $f(6)=-1\\cdot6+5=-1$.",
   "typ": "Verkettung"
  },
  {
   "id": "G4.25",
   "kap": 4,
   "th": "Analysis",
   "q": "Gegeben sind $f(x)=x^2$ und $g(x)=x+2$. Bestimme $f(g(x))$.",
   "o": [
    "$x^2+2$",
    "$(x+2)^2$",
    "$x^2+4$",
    "$2x^2$"
   ],
   "a": 1,
   "e": "$g(x)$ wird als Ganzes in $f$ eingesetzt: $f(x+2)=(x+2)^2$.",
   "typ": "Verkettung"
  },
  {
   "id": "G4.26",
   "kap": 4,
   "th": "Analysis",
   "q": "Gegeben sind $f(x)=x^2$ und $g(x)=x-5$. Bestimme $f(g(x))$.",
   "o": [
    "$(x-5)^2$",
    "$-5x^2$",
    "$x^2+25$",
    "$x^2-5$"
   ],
   "a": 0,
   "e": "$g(x)$ wird als Ganzes in $f$ eingesetzt: $f(x-5)=(x-5)^2$.",
   "typ": "Verkettung"
  },
  {
   "id": "G4.27",
   "kap": 4,
   "th": "Analysis",
   "q": "Gegeben sind $f(x)=x^2$ und $g(x)=x+4$. Bestimme $g(f(x))$.",
   "o": [
    "$x^2+16$",
    "$(x+4)^2$",
    "$4x^2$",
    "$x^2+4$"
   ],
   "a": 3,
   "e": "Jetzt wird $f(x)=x^2$ in $g$ eingesetzt: $g(x^2)=x^2+4$. Die Reihenfolge macht einen Unterschied.",
   "typ": "Verkettung"
  },
  {
   "id": "G4.28",
   "kap": 4,
   "th": "Analysis",
   "q": "Was ist der größtmögliche Definitionsbereich von $f(x)=\\sqrt{2x-6}$?",
   "o": [
    "$x\\ge3$",
    "$x>3$",
    "$x\\le3$",
    "$x\\ge-3$"
   ],
   "a": 0,
   "e": "Unter der Wurzel darf nichts Negatives stehen: $2x-6\\ge0$, also $2x\\ge6$: $x\\ge3$.",
   "typ": "Definitionsbereich"
  },
  {
   "id": "G4.29",
   "kap": 4,
   "th": "Analysis",
   "q": "Was ist der größtmögliche Definitionsbereich von $f(x)=\\sqrt{-3x+12}$?",
   "o": [
    "$x\\ge4$",
    "$x\\le4$",
    "$x\\le-4$",
    "$x<4$"
   ],
   "a": 1,
   "e": "Unter der Wurzel darf nichts Negatives stehen: $-3x+12\\ge0$, also $-3x\\ge-12$, und beim Teilen durch die negative Zahl dreht sich das Zeichen: $x\\le4$.",
   "typ": "Definitionsbereich"
  },
  {
   "id": "G4.30",
   "kap": 4,
   "th": "Analysis",
   "q": "Was ist der größtmögliche Definitionsbereich von $f(x)=\\sqrt{x+5}$?",
   "o": [
    "$x\\le-5$",
    "$x\\ge-5$",
    "$x\\ge5$",
    "$x>-5$"
   ],
   "a": 1,
   "e": "Unter der Wurzel darf nichts Negatives stehen: $x+5\\ge0$, also $1x\\ge-5$: $x\\ge-5$.",
   "typ": "Definitionsbereich"
  },
  {
   "id": "G4.31",
   "kap": 4,
   "th": "Analysis",
   "q": "Was ist der größtmögliche Definitionsbereich von $f(x)=\\ln(3x-12)$?",
   "o": [
    "$x<4$",
    "$x>-4$",
    "$x\\ge4$",
    "$x>4$"
   ],
   "a": 3,
   "e": "Im Logarithmus muss etwas Positives stehen, null ist nicht erlaubt: $3x-12>0$, also $x>4$.",
   "typ": "Definitionsbereich"
  },
  {
   "id": "G4.32",
   "kap": 4,
   "th": "Analysis",
   "q": "Was ist der größtmögliche Definitionsbereich von $f(x)=\\ln(-2x+8)$?",
   "o": [
    "$x>4$",
    "$x<4$",
    "$x\\le4$",
    "$x<-4$"
   ],
   "a": 1,
   "e": "Im Logarithmus muss etwas Positives stehen, null ist nicht erlaubt: $-2x+8>0$, also $x<4$.",
   "typ": "Definitionsbereich"
  },
  {
   "id": "G4.33",
   "kap": 4,
   "th": "Analysis",
   "q": "Welche Zahlen darf man in $f(x)=\\dfrac{1}{x^2-16}$ nicht einsetzen?",
   "o": [
    "nur $x=4$",
    "$x=4$ und $x=-4$",
    "nur $x=16$",
    "$x=0$"
   ],
   "a": 1,
   "e": "Der Nenner darf nicht null werden: $x^2-16=0$ gilt für $x=4$ und für $x=-4$.",
   "typ": "Definitionsbereich"
  },
  {
   "id": "G4.34",
   "kap": 4,
   "th": "Analysis",
   "q": "Welche Zahl darf man in $f(x)=\\dfrac{3}{2x-10}$ nicht einsetzen?",
   "o": [
    "$x=5$",
    "$x=-5$",
    "$x=10$",
    "$x=0$"
   ],
   "a": 0,
   "e": "Der Nenner darf nicht null werden: $2x-10=0$ gilt für $x=5$.",
   "typ": "Definitionsbereich"
  },
  {
   "id": "G4.35",
   "kap": 4,
   "th": "Analysis",
   "q": "Vereinfache $e^{2\\ln5}$.",
   "o": [
    "$25$",
    "$10$",
    "$5e^2$",
    "$e^{10}$"
   ],
   "a": 0,
   "e": "$e^{2\\ln5}=\\left(e^{\\ln5}\\right)^2=5^2=25$. $e$ und $\\ln$ heben sich auf.",
   "typ": "e und ln"
  },
  {
   "id": "G4.36",
   "kap": 4,
   "th": "Analysis",
   "q": "Vereinfache $e^{3\\ln2}$.",
   "o": [
    "$8$",
    "$9$",
    "$6$",
    "$e^6$"
   ],
   "a": 0,
   "e": "$e^{3\\ln2}=\\left(e^{\\ln2}\\right)^3=2^3=8$.",
   "typ": "e und ln"
  },
  {
   "id": "G4.37",
   "kap": 4,
   "th": "Analysis",
   "q": "Vereinfache $\\ln(e^4)$.",
   "o": [
    "$4$",
    "$e^4$",
    "$4e$",
    "$1$"
   ],
   "a": 0,
   "e": "$\\ln$ und $e$ heben sich auf: $\\ln(e^4)=4$.",
   "typ": "e und ln"
  },
  {
   "id": "G4.38",
   "kap": 4,
   "th": "Analysis",
   "q": "Berechne $\\ln1+e^0$.",
   "o": [
    "$1$",
    "$0$",
    "$e$",
    "$2$"
   ],
   "a": 0,
   "e": "$\\ln1=0$ und $e^0=1$. Zusammen $1$.",
   "typ": "e und ln"
  },
  {
   "id": "G4.39",
   "kap": 4,
   "th": "Analysis",
   "q": "Löse die Gleichung $e^x=20$.",
   "o": [
    "$x=\\dfrac{20}{e}$",
    "$x=e^{20}$",
    "$x=20$",
    "$x=\\ln20$"
   ],
   "a": 3,
   "e": "Auf beiden Seiten den $\\ln$ anwenden: $x=\\ln20$.",
   "typ": "e und ln"
  },
  {
   "id": "G4.40",
   "kap": 4,
   "th": "Analysis",
   "q": "Löse die Gleichung $\\ln x=3$.",
   "o": [
    "$x=3e$",
    "$x=3$",
    "$x=\\ln3$",
    "$x=e^3$"
   ],
   "a": 3,
   "e": "Auf beiden Seiten $e$ hoch: $x=e^3$.",
   "typ": "e und ln"
  },
  {
   "id": "G4.41",
   "kap": 4,
   "th": "Analysis",
   "q": "In welchem Punkt schneiden sich $f(x)=3x-2$ und $g(x)=x+4$?",
   "o": [
    "$S(3\\,|\\,7)$",
    "$S(7\\,|\\,3)$",
    "$S(-3\\,|\\,7)$",
    "$S(3\\,|\\,-7)$"
   ],
   "a": 0,
   "e": "Gleichsetzen: $3x-2=x+4$, also $2x=6$ und $x=3$. Einsetzen: $y=7$.",
   "typ": "Geraden"
  },
  {
   "id": "G4.42",
   "kap": 4,
   "th": "Analysis",
   "q": "In welchem Punkt schneiden sich $f(x)=-x+6$ und $g(x)=2x$?",
   "o": [
    "$S(2\\,|\\,-4)$",
    "$S(-2\\,|\\,4)$",
    "$S(4\\,|\\,2)$",
    "$S(2\\,|\\,4)$"
   ],
   "a": 3,
   "e": "Gleichsetzen: $-x+6=2x$, also $-3x=-6$ und $x=2$. Einsetzen: $y=4$.",
   "typ": "Geraden"
  },
  {
   "id": "G4.43",
   "kap": 4,
   "th": "Analysis",
   "q": "In welchem Punkt schneiden sich $f(x)=2x+5$ und $g(x)=-x-1$?",
   "o": [
    "$S(-2\\,|\\,-1)$",
    "$S(1\\,|\\,-2)$",
    "$S(2\\,|\\,1)$",
    "$S(-2\\,|\\,1)$"
   ],
   "a": 3,
   "e": "Gleichsetzen: $2x+5=-x-1$, also $3x=-6$ und $x=-2$. Einsetzen: $y=1$.",
   "typ": "Geraden"
  },
  {
   "id": "G5.1",
   "kap": 5,
   "th": "Analysis",
   "q": "Bestimme die Ableitung von $f(x)=2x^{3}-5x+4$.",
   "o": [
    "$f'(x)=6x^{2}-1$",
    "$f'(x)=6x^{3}-5x$",
    "$f'(x)=2x^{2}-5$",
    "$f'(x)=6x^{2}-5$"
   ],
   "a": 3,
   "e": "Bei jedem Teil: Hochzahl als Faktor nach vorn, Hochzahl um 1 kleiner. Die einzelne Zahl fällt weg. Ergebnis: $f'(x)=6x^{2}-5$.",
   "typ": "Potenzregel"
  },
  {
   "id": "G5.2",
   "kap": 5,
   "th": "Analysis",
   "q": "Bestimme die Ableitung von $f(x)=x^{4}-3x^{2}+x$.",
   "o": [
    "$f'(x)=4x^{3}-6x+2$",
    "$f'(x)=4x^{3}-6x+1$",
    "$f'(x)=4x^{4}-6x^{2}+x$",
    "$f'(x)=x^{3}-3x+1$"
   ],
   "a": 1,
   "e": "Bei jedem Teil: Hochzahl als Faktor nach vorn, Hochzahl um 1 kleiner. Ergebnis: $f'(x)=4x^{3}-6x+1$.",
   "typ": "Potenzregel"
  },
  {
   "id": "G5.3",
   "kap": 5,
   "th": "Analysis",
   "q": "Bestimme die Ableitung von $f(x)=-x^{5}+2x^{3}-7$.",
   "o": [
    "$f'(x)=-5x^{5}+6x^{3}$",
    "$f'(x)=-x^{4}+2x^{2}$",
    "$f'(x)=-5x^{4}+6x^{2}-7$",
    "$f'(x)=-5x^{4}+6x^{2}$"
   ],
   "a": 3,
   "e": "Bei jedem Teil: Hochzahl als Faktor nach vorn, Hochzahl um 1 kleiner. Die einzelne Zahl fällt weg. Ergebnis: $f'(x)=-5x^{4}+6x^{2}$.",
   "typ": "Potenzregel"
  },
  {
   "id": "G5.4",
   "kap": 5,
   "th": "Analysis",
   "q": "Bestimme die Ableitung von $f(x)=\\tfrac{1}{3}x^{3}+\\tfrac{1}{2}x^{2}-x$.",
   "o": [
    "$f'(x)=x^{3}+x^{2}-x$",
    "$f'(x)=x^{2}+x$",
    "$f'(x)=x^{2}+x-1$",
    "$f'(x)=\\tfrac{1}{3}x^{2}+\\tfrac{1}{2}x-1$"
   ],
   "a": 2,
   "e": "Bei jedem Teil: Hochzahl als Faktor nach vorn, Hochzahl um 1 kleiner. Ergebnis: $f'(x)=x^{2}+x-1$.",
   "typ": "Potenzregel"
  },
  {
   "id": "G5.5",
   "kap": 5,
   "th": "Analysis",
   "q": "Bestimme die Ableitung von $f(x)=6x^{2}-9x+2$.",
   "o": [
    "$f'(x)=12x-7$",
    "$f'(x)=12x^{2}-9x$",
    "$f'(x)=6x-9$",
    "$f'(x)=12x-9$"
   ],
   "a": 3,
   "e": "Bei jedem Teil: Hochzahl als Faktor nach vorn, Hochzahl um 1 kleiner. Die einzelne Zahl fällt weg. Ergebnis: $f'(x)=12x-9$.",
   "typ": "Potenzregel"
  },
  {
   "id": "G5.6",
   "kap": 5,
   "th": "Analysis",
   "q": "Welche Steigung hat der Graph von $f(x)=x^{3}-5x$ an der Stelle $x=2$?",
   "o": [
    "$-2$",
    "$12$",
    "$7$",
    "$8$"
   ],
   "a": 2,
   "e": "Steigung heißt ableiten: $f'(x)=3x^{2}-5$. Einsetzen: $f'(2)=7$. Nicht in $f$ einsetzen.",
   "typ": "Steigung an einer Stelle"
  },
  {
   "id": "G5.7",
   "kap": 5,
   "th": "Analysis",
   "q": "Welche Steigung hat der Graph von $f(x)=3x^{2}-4x+1$ an der Stelle $x=-1$?",
   "o": [
    "$6$",
    "$2$",
    "$8$",
    "$-10$"
   ],
   "a": 3,
   "e": "Steigung heißt ableiten: $f'(x)=6x-4$. Einsetzen: $f'(-1)=-10$. Nicht in $f$ einsetzen.",
   "typ": "Steigung an einer Stelle"
  },
  {
   "id": "G5.8",
   "kap": 5,
   "th": "Analysis",
   "q": "Welche Steigung hat der Graph von $f(x)=x^{4}-2x^{2}$ an der Stelle $x=2$?",
   "o": [
    "$-24$",
    "$44$",
    "$8$",
    "$24$"
   ],
   "a": 3,
   "e": "Steigung heißt ableiten: $f'(x)=4x^{3}-4x$. Einsetzen: $f'(2)=24$. Nicht in $f$ einsetzen.",
   "typ": "Steigung an einer Stelle"
  },
  {
   "id": "G5.9",
   "kap": 5,
   "th": "Analysis",
   "q": "Welche Steigung hat der Graph von $f(x)=-2x^{3}+x^{2}$ an der Stelle $x=1$?",
   "o": [
    "$-4$",
    "$-8$",
    "$-10$",
    "$-1$"
   ],
   "a": 0,
   "e": "Steigung heißt ableiten: $f'(x)=-6x^{2}+2x$. Einsetzen: $f'(1)=-4$. Nicht in $f$ einsetzen.",
   "typ": "Steigung an einer Stelle"
  },
  {
   "id": "G5.10",
   "kap": 5,
   "th": "Analysis",
   "q": "An welcher Stelle hat der Graph von $f(x)=x^{2}-4x$ die Steigung $2$?",
   "o": [
    "$x=3$",
    "$x=-1$",
    "$x=6$",
    "$x=-3$"
   ],
   "a": 0,
   "e": "Ableiten und gleichsetzen: $f'(x)=2x-4=2$, also $2x=6$ und $x=3$.",
   "typ": "Steigung an einer Stelle"
  },
  {
   "id": "G5.11",
   "kap": 5,
   "th": "Analysis",
   "q": "An welcher Stelle hat der Graph von $f(x)=x^{2}+6x$ die Steigung $0$?",
   "o": [
    "$x=-6$",
    "$x=-3$",
    "$x=3$",
    "$x=-2$"
   ],
   "a": 1,
   "e": "Ableiten und gleichsetzen: $f'(x)=2x+6=0$, also $2x=-6$ und $x=-3$.",
   "typ": "Steigung an einer Stelle"
  },
  {
   "id": "G5.12",
   "kap": 5,
   "th": "Analysis",
   "q": "An welcher Stelle hat der Graph von $f(x)=x^{2}+2x$ die Steigung $-6$?",
   "o": [
    "$x=-2$",
    "$x=-4$",
    "$x=4$",
    "$x=-8$"
   ],
   "a": 1,
   "e": "Ableiten und gleichsetzen: $f'(x)=2x+2=-6$, also $2x=-8$ und $x=-4$.",
   "typ": "Steigung an einer Stelle"
  },
  {
   "id": "G5.13",
   "kap": 5,
   "th": "Analysis",
   "q": "Wie lautet die Gleichung der Tangente an $f(x)=x^{2}-3$ an der Stelle $x=2$?",
   "o": [
    "$y=4x$",
    "$y=4x-7$",
    "$y=x-7$",
    "$y=4x+1$"
   ],
   "a": 1,
   "e": "Steigung: $f'(x)=2x$, also $m=f'(2)=4$. Punkt: $f(2)=1$. Einsetzen in $y=mx+b$: $1=4\\cdot2+b$, also $b=-7$.",
   "typ": "Tangente"
  },
  {
   "id": "G5.14",
   "kap": 5,
   "th": "Analysis",
   "q": "Wie lautet die Gleichung der Tangente an $f(x)=2x^{2}$ an der Stelle $x=1$?",
   "o": [
    "$y=4x-2$",
    "$y=4x+2$",
    "$y=2x-2$",
    "$y=4x$"
   ],
   "a": 0,
   "e": "Steigung: $f'(x)=4x$, also $m=f'(1)=4$. Punkt: $f(1)=2$. Einsetzen in $y=mx+b$: $2=4\\cdot1+b$, also $b=-2$.",
   "typ": "Tangente"
  },
  {
   "id": "G5.15",
   "kap": 5,
   "th": "Analysis",
   "q": "Wie lautet die Gleichung der Tangente an $f(x)=x^{3}$ an der Stelle $x=-1$?",
   "o": [
    "$y=-x+2$",
    "$y=3x+2$",
    "$y=3x-1$",
    "$y=3x$"
   ],
   "a": 1,
   "e": "Steigung: $f'(x)=3x^{2}$, also $m=f'(-1)=3$. Punkt: $f(-1)=-1$. Einsetzen in $y=mx+b$: $-1=3\\cdot(-1)+b$, also $b=2$.",
   "typ": "Tangente"
  },
  {
   "id": "G5.16",
   "kap": 5,
   "th": "Analysis",
   "q": "Wie lautet die Gleichung der Tangente an $f(x)=-x^{2}+4x$ an der Stelle $x=1$?",
   "o": [
    "$y=2x+3$",
    "$y=3x+1$",
    "$y=2x+1$",
    "$y=2x$"
   ],
   "a": 2,
   "e": "Steigung: $f'(x)=-2x+4$, also $m=f'(1)=2$. Punkt: $f(1)=3$. Einsetzen in $y=mx+b$: $3=2\\cdot1+b$, also $b=1$.",
   "typ": "Tangente"
  },
  {
   "id": "G5.17",
   "kap": 5,
   "th": "Analysis",
   "q": "Bestimme die Ableitung von $f(x)=\\dfrac{4}{x}$.",
   "o": [
    "$f'(x)=4$",
    "$f'(x)=-\\dfrac{4}{x^2}$",
    "$f'(x)=-\\dfrac{4}{x}$",
    "$f'(x)=\\dfrac{4}{x^2}$"
   ],
   "a": 1,
   "e": "Umschreiben: $4x^{-1}$. Potenzregel: $-4x^{-2}=-\\tfrac{4}{x^2}$.",
   "typ": "Besondere Ableitungen"
  },
  {
   "id": "G5.18",
   "kap": 5,
   "th": "Analysis",
   "q": "Bestimme die Ableitung von $f(x)=6\\sqrt{x}$.",
   "o": [
    "$f'(x)=\\dfrac{6}{\\sqrt{x}}$",
    "$f'(x)=\\dfrac{3}{x}$",
    "$f'(x)=3\\sqrt{x}$",
    "$f'(x)=\\dfrac{3}{\\sqrt{x}}$"
   ],
   "a": 3,
   "e": "Umschreiben: $6x^{\\frac12}$. Potenzregel: $6\\cdot\\tfrac12x^{-\\frac12}=\\tfrac{3}{\\sqrt x}$.",
   "typ": "Besondere Ableitungen"
  },
  {
   "id": "G5.19",
   "kap": 5,
   "th": "Analysis",
   "q": "Bestimme die Ableitung von $f(x)=\\dfrac{1}{x^3}$.",
   "o": [
    "$f'(x)=-\\dfrac{1}{3x^2}$",
    "$f'(x)=-\\dfrac{3}{x^2}$",
    "$f'(x)=\\dfrac{3}{x^4}$",
    "$f'(x)=-\\dfrac{3}{x^4}$"
   ],
   "a": 3,
   "e": "Umschreiben: $x^{-3}$. Potenzregel: $-3x^{-4}=-\\tfrac{3}{x^4}$.",
   "typ": "Besondere Ableitungen"
  },
  {
   "id": "G5.20",
   "kap": 5,
   "th": "Analysis",
   "q": "Bestimme die Ableitung von $f(x)=2e^x-x^3$.",
   "o": [
    "$f'(x)=2e^x-x^2$",
    "$f'(x)=2xe^{x-1}-3x^2$",
    "$f'(x)=2e^x-3x^2$",
    "$f'(x)=e^x-3x^2$"
   ],
   "a": 2,
   "e": "$e^x$ bleibt beim Ableiten $e^x$, der Faktor 2 bleibt stehen. Aus $x^3$ wird $3x^2$.",
   "typ": "Besondere Ableitungen"
  },
  {
   "id": "G5.21",
   "kap": 5,
   "th": "Analysis",
   "q": "Bestimme die Ableitung von $f(x)=5\\ln x$.",
   "o": [
    "$f'(x)=\\dfrac{1}{5x}$",
    "$f'(x)=5$",
    "$f'(x)=5\\ln x$",
    "$f'(x)=\\dfrac{5}{x}$"
   ],
   "a": 3,
   "e": "Aus $\\ln x$ wird $\\tfrac1x$, der Faktor 5 bleibt stehen.",
   "typ": "Besondere Ableitungen"
  },
  {
   "id": "G5.22",
   "kap": 5,
   "th": "Analysis",
   "q": "Bestimme die Ableitung von $f(x)=\\sin x+2\\cos x$.",
   "o": [
    "$f'(x)=\\cos x+2\\sin x$",
    "$f'(x)=-\\cos x+2\\sin x$",
    "$f'(x)=\\cos x-2\\cos x$",
    "$f'(x)=\\cos x-2\\sin x$"
   ],
   "a": 3,
   "e": "Aus $\\sin x$ wird $\\cos x$, aus $\\cos x$ wird $-\\sin x$.",
   "typ": "Besondere Ableitungen"
  },
  {
   "id": "G5.23",
   "kap": 5,
   "th": "Analysis",
   "q": "Bestimme die zweite Ableitung $f''(x)$ von $f(x)=x^{4}-6x^{2}$.",
   "o": [
    "$f''(x)=12x^{2}-12$",
    "$f''(x)=4x^{2}-12$",
    "$f''(x)=24x$",
    "$f''(x)=4x^{3}-12x$"
   ],
   "a": 0,
   "e": "Zweimal ableiten. Erst $f'(x)=4x^{3}-12x$, dann $f''(x)=12x^{2}-12$.",
   "typ": "Zweite Ableitung"
  },
  {
   "id": "G5.24",
   "kap": 5,
   "th": "Analysis",
   "q": "Bestimme die zweite Ableitung $f''(x)$ von $f(x)=2x^{3}-3x^{2}+5x$.",
   "o": [
    "$f''(x)=12x-6$",
    "$f''(x)=12$",
    "$f''(x)=6x^{2}-6x+5$",
    "$f''(x)=6x-6$"
   ],
   "a": 0,
   "e": "Zweimal ableiten. Erst $f'(x)=6x^{2}-6x+5$, dann $f''(x)=12x-6$.",
   "typ": "Zweite Ableitung"
  },
  {
   "id": "G6.1",
   "kap": 6,
   "th": "Analysis",
   "q": "Bestimme den Extrempunkt von $f(x)=x^{2}-6x+5$.",
   "o": [
    "$T(3\\,|\\,-4)$",
    "$T(3\\,|\\,5)$",
    "$H(3\\,|\\,-4)$",
    "$T(-3\\,|\\,-4)$"
   ],
   "a": 0,
   "e": "$f'(x)=2x-6=0$ ergibt $x=3$. $f''(x)=2$ ist positiv: Tiefpunkt. $y$-Wert mit $f$: $f(3)=-4$.",
   "typ": "Hoch- und Tiefpunkte"
  },
  {
   "id": "G6.2",
   "kap": 6,
   "th": "Analysis",
   "q": "Bestimme den Extrempunkt von $f(x)=-x^{2}+4x+1$.",
   "o": [
    "$H(-2\\,|\\,5)$",
    "$H(2\\,|\\,5)$",
    "$H(2\\,|\\,1)$",
    "$T(2\\,|\\,5)$"
   ],
   "a": 1,
   "e": "$f'(x)=-2x+4=0$ ergibt $x=2$. $f''(x)=-2$ ist negativ: Hochpunkt. $y$-Wert mit $f$: $f(2)=5$.",
   "typ": "Hoch- und Tiefpunkte"
  },
  {
   "id": "G6.3",
   "kap": 6,
   "th": "Analysis",
   "q": "Bestimme den Extrempunkt von $f(x)=2x^{2}+8x+3$.",
   "o": [
    "$T(-2\\,|\\,3)$",
    "$T(2\\,|\\,-5)$",
    "$H(-2\\,|\\,-5)$",
    "$T(-2\\,|\\,-5)$"
   ],
   "a": 3,
   "e": "$f'(x)=4x+8=0$ ergibt $x=-2$. $f''(x)=4$ ist positiv: Tiefpunkt. $y$-Wert mit $f$: $f(-2)=-5$.",
   "typ": "Hoch- und Tiefpunkte"
  },
  {
   "id": "G6.4",
   "kap": 6,
   "th": "Analysis",
   "q": "Bestimme den Extrempunkt von $f(x)=-2x^{2}+4x-1$.",
   "o": [
    "$H(1\\,|\\,1)$",
    "$H(1\\,|\\,-1)$",
    "$T(1\\,|\\,1)$",
    "$H(-1\\,|\\,1)$"
   ],
   "a": 0,
   "e": "$f'(x)=-4x+4=0$ ergibt $x=1$. $f''(x)=-4$ ist negativ: Hochpunkt. $y$-Wert mit $f$: $f(1)=1$.",
   "typ": "Hoch- und Tiefpunkte"
  },
  {
   "id": "G6.5",
   "kap": 6,
   "th": "Analysis",
   "q": "Bestimme den Extrempunkt von $f(x)=x^{2}+2x-8$.",
   "o": [
    "$H(-1\\,|\\,-9)$",
    "$T(-1\\,|\\,-9)$",
    "$T(1\\,|\\,-9)$",
    "$T(-1\\,|\\,-8)$"
   ],
   "a": 1,
   "e": "$f'(x)=2x+2=0$ ergibt $x=-1$. $f''(x)=2$ ist positiv: Tiefpunkt. $y$-Wert mit $f$: $f(-1)=-9$.",
   "typ": "Hoch- und Tiefpunkte"
  },
  {
   "id": "G6.6",
   "kap": 6,
   "th": "Analysis",
   "q": "An welcher Stelle hat $f(x)=x^{3}-12x$ ein lokales Minimum (Tiefpunkt)?",
   "o": [
    "$x=6$",
    "$x=-2$",
    "$x=2$",
    "$x=0$"
   ],
   "a": 2,
   "e": "$f'(x)=3x^{2}-12=0$ ergibt $x=-2$ und $x=2$. Einsetzen in $f''(x)=6x$: $f''(2)=12$ ist positiv, also Tiefpunkt.",
   "typ": "Hoch- und Tiefpunkte"
  },
  {
   "id": "G6.7",
   "kap": 6,
   "th": "Analysis",
   "q": "An welcher Stelle hat $f(x)=x^{3}-27x$ ein lokales Maximum (Hochpunkt)?",
   "o": [
    "$x=3$",
    "$x=-3$",
    "$x=-9$",
    "$x=0$"
   ],
   "a": 1,
   "e": "$f'(x)=3x^{2}-27=0$ ergibt $x=-3$ und $x=3$. Einsetzen in $f''(x)=6x$: $f''(-3)=-18$ ist negativ, also Hochpunkt.",
   "typ": "Hoch- und Tiefpunkte"
  },
  {
   "id": "G6.8",
   "kap": 6,
   "th": "Analysis",
   "q": "An welcher Stelle hat $f(x)=x^{3}-6x^{2}$ ein lokales Minimum (Tiefpunkt)?",
   "o": [
    "$x=4$",
    "$x=0$",
    "$x=2$",
    "$x=-4$"
   ],
   "a": 0,
   "e": "$f'(x)=3x^{2}-12x=0$ ergibt $x=0$ und $x=4$. Einsetzen in $f''(x)=6x-12$: $f''(4)=12$ ist positiv, also Tiefpunkt.",
   "typ": "Hoch- und Tiefpunkte"
  },
  {
   "id": "G6.9",
   "kap": 6,
   "th": "Analysis",
   "q": "An welcher Stelle hat $f(x)=x^{3}-9x^{2}$ ein lokales Maximum (Hochpunkt)?",
   "o": [
    "$x=1$",
    "$x=3$",
    "$x=6$",
    "$x=0$"
   ],
   "a": 3,
   "e": "$f'(x)=3x^{2}-18x=0$ ergibt $x=0$ und $x=6$. Einsetzen in $f''(x)=6x-18$: $f''(0)=-18$ ist negativ, also Hochpunkt.",
   "typ": "Hoch- und Tiefpunkte"
  },
  {
   "id": "G6.10",
   "kap": 6,
   "th": "Analysis",
   "q": "An welcher Stelle hat $f(x)=2x^{3}-3x^{2}-12x$ ein lokales Minimum (Tiefpunkt)?",
   "o": [
    "$x=-1$",
    "$x=5$",
    "$x=-2$",
    "$x=2$"
   ],
   "a": 3,
   "e": "$f'(x)=6x^{2}-6x-12=0$ ergibt $x=-1$ und $x=2$. Einsetzen in $f''(x)=12x-6$: $f''(2)=18$ ist positiv, also Tiefpunkt.",
   "typ": "Hoch- und Tiefpunkte"
  },
  {
   "id": "G6.11",
   "kap": 6,
   "th": "Analysis",
   "q": "Bestimme die Wendestelle von $f(x)=x^{3}-9x^{2}+2x$.",
   "o": [
    "$x=3$",
    "$x=-3$",
    "$x=9$",
    "$x=6$"
   ],
   "a": 0,
   "e": "Zweimal ableiten: $f'(x)=3x^{2}-18x+2$ und $f''(x)=6x-18$. Null setzen: $6x-18=0$ ergibt $x=3$.",
   "typ": "Wendepunkte"
  },
  {
   "id": "G6.12",
   "kap": 6,
   "th": "Analysis",
   "q": "Bestimme die Wendestelle von $f(x)=x^{3}+6x^{2}-x$.",
   "o": [
    "$x=-6$",
    "$x=-2$",
    "$x=2$",
    "$x=-4$"
   ],
   "a": 1,
   "e": "Zweimal ableiten: $f'(x)=3x^{2}+12x-1$ und $f''(x)=6x+12$. Null setzen: $6x+12=0$ ergibt $x=-2$.",
   "typ": "Wendepunkte"
  },
  {
   "id": "G6.13",
   "kap": 6,
   "th": "Analysis",
   "q": "Bestimme die Wendestelle von $f(x)=x^{3}-3x^{2}+7x$.",
   "o": [
    "$x=3$",
    "$x=2$",
    "$x=-1$",
    "$x=1$"
   ],
   "a": 3,
   "e": "Zweimal ableiten: $f'(x)=3x^{2}-6x+7$ und $f''(x)=6x-6$. Null setzen: $6x-6=0$ ergibt $x=1$.",
   "typ": "Wendepunkte"
  },
  {
   "id": "G6.14",
   "kap": 6,
   "th": "Analysis",
   "q": "Bestimme die Wendestelle von $f(x)=x^{3}+12x^{2}$.",
   "o": [
    "$x=-8$",
    "$x=4$",
    "$x=-12$",
    "$x=-4$"
   ],
   "a": 3,
   "e": "Zweimal ableiten: $f'(x)=3x^{2}+24x$ und $f''(x)=6x+24$. Null setzen: $6x+24=0$ ergibt $x=-4$.",
   "typ": "Wendepunkte"
  },
  {
   "id": "G6.15",
   "kap": 6,
   "th": "Analysis",
   "q": "Bestimme den Wendepunkt von $f(x)=x^{3}-3x^{2}+2$.",
   "o": [
    "$W(1\\,|\\,0)$",
    "$W(1\\,|\\,-3)$",
    "$W(-1\\,|\\,-2)$",
    "$W(0\\,|\\,2)$"
   ],
   "a": 0,
   "e": "$f''(x)=6x-6=0$ ergibt $x=1$. Den $y$-Wert liefert $f$ selbst: $f(1)=0$.",
   "typ": "Wendepunkte"
  },
  {
   "id": "G6.16",
   "kap": 6,
   "th": "Analysis",
   "q": "Bestimme den Wendepunkt von $f(x)=x^{3}+3x^{2}-4x$.",
   "o": [
    "$W(-1\\,|\\,-7)$",
    "$W(-1\\,|\\,0)$",
    "$W(-1\\,|\\,6)$",
    "$W(1\\,|\\,0)$"
   ],
   "a": 2,
   "e": "$f''(x)=6x+6=0$ ergibt $x=-1$. Den $y$-Wert liefert $f$ selbst: $f(-1)=6$.",
   "typ": "Wendepunkte"
  },
  {
   "id": "G6.17",
   "kap": 6,
   "th": "Analysis",
   "q": "Bestimme den Wendepunkt von $f(x)=-x^{3}+6x^{2}$.",
   "o": [
    "$W(2\\,|\\,16)$",
    "$W(2\\,|\\,12)$",
    "$W(2\\,|\\,0)$",
    "$W(-2\\,|\\,32)$"
   ],
   "a": 0,
   "e": "$f''(x)=-6x+12=0$ ergibt $x=2$. Den $y$-Wert liefert $f$ selbst: $f(2)=16$.",
   "typ": "Wendepunkte"
  },
  {
   "id": "G6.18",
   "kap": 6,
   "th": "Analysis",
   "q": "Welche Symmetrie hat der Graph von $f(x)=x^{4}-5x^{2}+3$?",
   "o": [
    "beide Symmetrien",
    "Punktsymmetrie zum Ursprung",
    "Achsensymmetrie zur $y$-Achse",
    "keine dieser Symmetrien"
   ],
   "a": 2,
   "e": "Nur gerade Hochzahlen (eine einzelne Zahl zählt als gerade): Achsensymmetrie.",
   "typ": "Symmetrie"
  },
  {
   "id": "G6.19",
   "kap": 6,
   "th": "Analysis",
   "q": "Welche Symmetrie hat der Graph von $f(x)=x^{5}-2x^{3}+x$?",
   "o": [
    "Punktsymmetrie zum Ursprung",
    "Achsensymmetrie zur $y$-Achse",
    "keine dieser Symmetrien",
    "beide Symmetrien"
   ],
   "a": 0,
   "e": "Nur ungerade Hochzahlen: Punktsymmetrie.",
   "typ": "Symmetrie"
  },
  {
   "id": "G6.20",
   "kap": 6,
   "th": "Analysis",
   "q": "Welche Symmetrie hat der Graph von $f(x)=x^{3}+2$?",
   "o": [
    "keine dieser Symmetrien",
    "Achsensymmetrie zur $y$-Achse",
    "Punktsymmetrie zum Ursprung",
    "beide Symmetrien"
   ],
   "a": 0,
   "e": "Gerade und ungerade Hochzahlen gemischt: keine der beiden Symmetrien.",
   "typ": "Symmetrie"
  },
  {
   "id": "G6.21",
   "kap": 6,
   "th": "Analysis",
   "q": "Welche Symmetrie hat der Graph von $f(x)=-x^{6}+4x^{2}$?",
   "o": [
    "keine dieser Symmetrien",
    "Achsensymmetrie zur $y$-Achse",
    "Punktsymmetrie zum Ursprung",
    "beide Symmetrien"
   ],
   "a": 1,
   "e": "Nur gerade Hochzahlen (eine einzelne Zahl zählt als gerade): Achsensymmetrie.",
   "typ": "Symmetrie"
  },
  {
   "id": "G6.22",
   "kap": 6,
   "th": "Analysis",
   "q": "Welche Symmetrie hat der Graph von $f(x)=2x^{3}-x$?",
   "o": [
    "Achsensymmetrie zur $y$-Achse",
    "Punktsymmetrie zum Ursprung",
    "keine dieser Symmetrien",
    "beide Symmetrien"
   ],
   "a": 1,
   "e": "Nur ungerade Hochzahlen: Punktsymmetrie.",
   "typ": "Symmetrie"
  },
  {
   "id": "G6.23",
   "kap": 6,
   "th": "Analysis",
   "q": "Welche Symmetrie hat der Graph von $f(x)=x^{4}+x^{3}$?",
   "o": [
    "beide Symmetrien",
    "Punktsymmetrie zum Ursprung",
    "Achsensymmetrie zur $y$-Achse",
    "keine dieser Symmetrien"
   ],
   "a": 3,
   "e": "Gerade und ungerade Hochzahlen gemischt: keine der beiden Symmetrien.",
   "typ": "Symmetrie"
  },
  {
   "id": "G6.24",
   "kap": 6,
   "th": "Analysis",
   "q": "Wie verhält sich $f(x)=-x^{3}+5x^{2}$ für $x\\to+\\infty$?",
   "o": [
    "$f(x)\\to-1$",
    "$f(x)\\to0$",
    "$f(x)\\to+\\infty$",
    "$f(x)\\to-\\infty$"
   ],
   "a": 3,
   "e": "Es entscheidet der Teil mit der höchsten Hochzahl: $-x^{3}$. Mit dem Faktor $-1$ geht es nach $-\\infty$.",
   "typ": "Verhalten im Unendlichen"
  },
  {
   "id": "G6.25",
   "kap": 6,
   "th": "Analysis",
   "q": "Wie verhält sich $f(x)=2x^{4}-7x$ für $x\\to-\\infty$?",
   "o": [
    "$f(x)\\to0$",
    "$f(x)\\to-\\infty$",
    "$f(x)\\to+\\infty$",
    "$f(x)\\to2$"
   ],
   "a": 2,
   "e": "Es entscheidet der Teil mit der höchsten Hochzahl: $2x^{4}$. Für sehr große negative $x$ ist $x^4$ positiv. Mit dem Faktor $2$ geht es nach $+\\infty$.",
   "typ": "Verhalten im Unendlichen"
  },
  {
   "id": "G6.26",
   "kap": 6,
   "th": "Analysis",
   "q": "Wie verhält sich $f(x)=x^{5}-3x^{2}$ für $x\\to-\\infty$?",
   "o": [
    "$f(x)\\to+\\infty$",
    "$f(x)\\to-\\infty$",
    "$f(x)\\to0$",
    "$f(x)\\to1$"
   ],
   "a": 1,
   "e": "Es entscheidet der Teil mit der höchsten Hochzahl: $x^{5}$. Für sehr große negative $x$ ist $x^5$ negativ. Mit dem Faktor $1$ geht es nach $-\\infty$.",
   "typ": "Verhalten im Unendlichen"
  },
  {
   "id": "G6.27",
   "kap": 6,
   "th": "Analysis",
   "q": "Wie verhält sich $f(x)=-3x^{2}+8x$ für $x\\to+\\infty$?",
   "o": [
    "$f(x)\\to-3$",
    "$f(x)\\to0$",
    "$f(x)\\to-\\infty$",
    "$f(x)\\to+\\infty$"
   ],
   "a": 2,
   "e": "Es entscheidet der Teil mit der höchsten Hochzahl: $-3x^{2}$. Mit dem Faktor $-3$ geht es nach $-\\infty$.",
   "typ": "Verhalten im Unendlichen"
  },
  {
   "id": "G6.28",
   "kap": 6,
   "th": "Analysis",
   "q": "Wie verhält sich $f(x)=x^{3}+9x^{2}$ für $x\\to-\\infty$?",
   "o": [
    "$f(x)\\to0$",
    "$f(x)\\to-\\infty$",
    "$f(x)\\to+\\infty$",
    "$f(x)\\to1$"
   ],
   "a": 1,
   "e": "Es entscheidet der Teil mit der höchsten Hochzahl: $x^{3}$. Für sehr große negative $x$ ist $x^3$ negativ. Mit dem Faktor $1$ geht es nach $-\\infty$.",
   "typ": "Verhalten im Unendlichen"
  },
  {
   "id": "G6.29",
   "kap": 6,
   "th": "Analysis",
   "q": "In welchem Bereich steigt der Graph von $f(x)=x^{2}-8x$?",
   "o": [
    "für alle $x$",
    "für $x>4$",
    "für $x>-4$",
    "für $x<4$"
   ],
   "a": 1,
   "e": "Der Graph steigt, wo $f'(x)>0$ ist: $f'(x)=2x-8>0$, also $x>4$.",
   "typ": "Steigen und Fallen"
  },
  {
   "id": "G6.30",
   "kap": 6,
   "th": "Analysis",
   "q": "In welchem Bereich steigt der Graph von $f(x)=x^{2}+6x$?",
   "o": [
    "für $x>-3$",
    "für alle $x$",
    "für $x>3$",
    "für $x<-3$"
   ],
   "a": 0,
   "e": "Der Graph steigt, wo $f'(x)>0$ ist: $f'(x)=2x+6>0$, also $x>-3$.",
   "typ": "Steigen und Fallen"
  },
  {
   "id": "G6.31",
   "kap": 6,
   "th": "Analysis",
   "q": "In welchem Bereich steigt der Graph von $f(x)=-x^{2}+4x$?",
   "o": [
    "für alle $x$",
    "für $x>2$",
    "für $x<-2$",
    "für $x<2$"
   ],
   "a": 3,
   "e": "Der Graph steigt, wo $f'(x)>0$ ist: $f'(x)=-2x+4>0$, beim Teilen durch die negative Zahl dreht sich das Zeichen, also $x<2$.",
   "typ": "Steigen und Fallen"
  },
  {
   "id": "G6.32",
   "kap": 6,
   "th": "Analysis",
   "q": "Gegeben sind $f(x)=(x-3)^2$ und $g(x)=x^2-5$. Welche Symmetrie hat $f(g(x))$?",
   "o": [
    "beide Symmetrien",
    "Punktsymmetrie zum Ursprung",
    "keine dieser Symmetrien",
    "Achsensymmetrie zur $y$-Achse"
   ],
   "a": 3,
   "e": "Die innere Funktion $g$ enthält nur $x^2$, also ist $g(-x)=g(x)$. Dann ist auch $f(g(-x))=f(g(x))$: achsensymmetrisch, egal wie $f$ aussieht. Dass $f$ allein nicht symmetrisch ist, spielt keine Rolle.",
   "typ": "Symmetrie"
  },
  {
   "id": "G6.33",
   "kap": 6,
   "th": "Analysis",
   "q": "Gegeben sind $f(x)=x^3+1$ und $g(x)=2x^4+1$. Welche Symmetrie hat $f(g(x))$?",
   "o": [
    "keine dieser Symmetrien",
    "beide Symmetrien",
    "Punktsymmetrie zum Ursprung",
    "Achsensymmetrie zur $y$-Achse"
   ],
   "a": 3,
   "e": "Die innere Funktion $g$ hat nur gerade Hochzahlen, also $g(-x)=g(x)$. Damit ist die ganze Verkettung achsensymmetrisch.",
   "typ": "Symmetrie"
  },
  {
   "id": "G6.34",
   "kap": 6,
   "th": "Analysis",
   "q": "Gegeben sind $f(x)=x^3$ und $g(x)=x^3-x$. Welche Symmetrie hat $f(g(x))$?",
   "o": [
    "Achsensymmetrie zur $y$-Achse",
    "Punktsymmetrie zum Ursprung",
    "beide Symmetrien",
    "keine dieser Symmetrien"
   ],
   "a": 1,
   "e": "Beide Funktionen sind punktsymmetrisch (nur ungerade Hochzahlen). Dann gilt $f(g(-x))=f(-g(x))=-f(g(x))$: punktsymmetrisch.",
   "typ": "Symmetrie"
  },
  {
   "id": "G6.35",
   "kap": 6,
   "th": "Analysis",
   "q": "Gegeben sind $f(x)=x^2+1$ und $g(x)=2x+3$. Welche Symmetrie hat $f(g(x))$?",
   "o": [
    "Achsensymmetrie zur $y$-Achse",
    "beide Symmetrien",
    "keine dieser Symmetrien",
    "Punktsymmetrie zum Ursprung"
   ],
   "a": 2,
   "e": "Die innere Funktion $2x+3$ ist weder achsen- noch punktsymmetrisch. Ausgerechnet: $f(g(x))=(2x+3)^2+1=4x^2+12x+10$, gemischte Hochzahlen, also keine dieser Symmetrien.",
   "typ": "Symmetrie"
  },
  {
   "id": "G6.36",
   "kap": 6,
   "th": "Analysis",
   "q": "Welche Symmetrie hat der Graph von $f(x)=x^2\\cdot\\sin x$?",
   "o": [
    "keine dieser Symmetrien",
    "beide Symmetrien",
    "Punktsymmetrie zum Ursprung",
    "Achsensymmetrie zur $y$-Achse"
   ],
   "a": 2,
   "e": "$x^2$ ist gerade, $\\sin x$ ist ungerade. Gerade mal ungerade ergibt ungerade, also punktsymmetrisch.",
   "typ": "Symmetrie"
  },
  {
   "id": "G6.37",
   "kap": 6,
   "th": "Analysis",
   "q": "Welche Symmetrie hat der Graph von $f(x)=x\\cdot\\sin x$?",
   "o": [
    "beide Symmetrien",
    "Achsensymmetrie zur $y$-Achse",
    "keine dieser Symmetrien",
    "Punktsymmetrie zum Ursprung"
   ],
   "a": 1,
   "e": "Beide Faktoren sind ungerade. Ungerade mal ungerade ergibt gerade, also achsensymmetrisch, wie Minus mal Minus.",
   "typ": "Symmetrie"
  },
  {
   "id": "G6.38",
   "kap": 6,
   "th": "Analysis",
   "q": "Welche Symmetrie hat der Graph von $f(x)=\\cos x+x^2$?",
   "o": [
    "Achsensymmetrie zur $y$-Achse",
    "Punktsymmetrie zum Ursprung",
    "keine dieser Symmetrien",
    "beide Symmetrien"
   ],
   "a": 0,
   "e": "$\\cos x$ und $x^2$ sind beide gerade. Die Summe zweier gerader Funktionen ist gerade, also achsensymmetrisch.",
   "typ": "Symmetrie"
  },
  {
   "id": "G6.39",
   "kap": 6,
   "th": "Analysis",
   "q": "Welche Symmetrie hat der Graph von $f(x)=e^x$?",
   "o": [
    "keine dieser Symmetrien",
    "Punktsymmetrie zum Ursprung",
    "Achsensymmetrie zur $y$-Achse",
    "beide Symmetrien"
   ],
   "a": 0,
   "e": "$e^{-x}$ ist weder $e^x$ noch $-e^x$. Die e-Funktion hat keine dieser Symmetrien.",
   "typ": "Symmetrie"
  },
  {
   "id": "G6.40",
   "kap": 6,
   "th": "Analysis",
   "q": "Welche Symmetrie hat der Graph von $f(x)=|x|-4$?",
   "o": [
    "beide Symmetrien",
    "Achsensymmetrie zur $y$-Achse",
    "Punktsymmetrie zum Ursprung",
    "keine dieser Symmetrien"
   ],
   "a": 1,
   "e": "Der Betrag macht $x$ und $-x$ gleich: $|-x|=|x|$. Die $-4$ verschiebt nur nach unten. Achsensymmetrisch.",
   "typ": "Symmetrie"
  },
  {
   "id": "G6.41",
   "kap": 6,
   "th": "Analysis",
   "q": "Welche Symmetrie hat der Graph von $f(x)=\\dfrac{1}{x}+x^3$?",
   "o": [
    "keine dieser Symmetrien",
    "Punktsymmetrie zum Ursprung",
    "Achsensymmetrie zur $y$-Achse",
    "beide Symmetrien"
   ],
   "a": 1,
   "e": "$\\tfrac1x$ und $x^3$ sind beide ungerade. Die Summe zweier ungerader Funktionen ist ungerade, also punktsymmetrisch.",
   "typ": "Symmetrie"
  },
  {
   "id": "G6.42",
   "kap": 6,
   "th": "Analysis",
   "q": "Welche Symmetrie hat der Graph von $f(x)=(x+2)^2$?",
   "o": [
    "beide Symmetrien",
    "Punktsymmetrie zum Ursprung",
    "Achsensymmetrie zur $y$-Achse",
    "keine dieser Symmetrien"
   ],
   "a": 3,
   "e": "Ausmultipliziert $x^2+4x+4$: gemischte Hochzahlen. Die Parabel ist zwar symmetrisch, aber zur Linie $x=-2$ durch ihren Scheitel, nicht zur $y$-Achse.",
   "typ": "Symmetrie"
  },
  {
   "id": "G6.43",
   "kap": 6,
   "th": "Analysis",
   "q": "Zu welcher Linie ist der Graph von $f(x)=(x-4)^2+1$ symmetrisch?",
   "o": [
    "zur $y$-Achse",
    "zur waagerechten Linie $y=1$",
    "zur senkrechten Linie $x=-4$",
    "zur senkrechten Linie $x=4$"
   ],
   "a": 3,
   "e": "Jede Parabel ist symmetrisch zur senkrechten Linie durch ihren Scheitel. Der Scheitel ist $S(4\\,|\\,1)$, also ist die Symmetrieachse $x=4$.",
   "typ": "Symmetrie"
  },
  {
   "id": "G6.44",
   "kap": 6,
   "th": "Analysis",
   "q": "Welche Funktion ist eine gerade Funktion, also achsensymmetrisch zur $y$-Achse?",
   "o": [
    "$f(x)=x^3-2x$",
    "$f(x)=x^4-2x^2$",
    "$f(x)=x^4-2x$",
    "$f(x)=(x-2)^2$"
   ],
   "a": 1,
   "e": "Gerade heißt $f(-x)=f(x)$. Bei Polynomen: nur gerade Hochzahlen. $x^4-2x$ ist gemischt, $(x-2)^2=x^2-4x+4$ auch.",
   "typ": "Symmetrie"
  },
  {
   "id": "G6.45",
   "kap": 6,
   "th": "Analysis",
   "q": "Für eine Funktion gilt $f'(2)=0$ und $f''(2)=-3$. Was hat der Graph bei $x=2$?",
   "o": [
    "Tiefpunkt bei $x=2$",
    "Hochpunkt bei $x=2$",
    "Nullstelle bei $x=2$",
    "Wendepunkt bei $x=2$"
   ],
   "a": 1,
   "e": "$f'(2)=0$: der Graph ist dort waagerecht. $f''(2)$ ist negativ: Hochpunkt.",
   "typ": "Hoch- und Tiefpunkte"
  },
  {
   "id": "G6.46",
   "kap": 6,
   "th": "Analysis",
   "q": "Für eine Funktion gilt $f'(2)=0$ und $f''(2)=5$. Was hat der Graph bei $x=2$?",
   "o": [
    "Nullstelle bei $x=2$",
    "Wendepunkt bei $x=2$",
    "Hochpunkt bei $x=2$",
    "Tiefpunkt bei $x=2$"
   ],
   "a": 3,
   "e": "$f'(2)=0$: der Graph ist dort waagerecht. $f''(2)$ ist positiv: Tiefpunkt.",
   "typ": "Hoch- und Tiefpunkte"
  },
  {
   "id": "G6.47",
   "kap": 6,
   "th": "Analysis",
   "q": "Die Ableitung einer Funktion ist $f'(x)=2x-6$. Was hat der Graph von $f$ bei $x=3$?",
   "o": [
    "einen Wendepunkt",
    "eine Nullstelle",
    "einen Tiefpunkt",
    "einen Hochpunkt"
   ],
   "a": 2,
   "e": "$f'(3)=0$, und $f''(x)=2$ ist positiv: Tiefpunkt.",
   "typ": "Hoch- und Tiefpunkte"
  },
  {
   "id": "G7.1",
   "kap": 7,
   "th": "Analysis",
   "q": "Welche Funktion ist eine Stammfunktion von $f(x)=9x^{2}-4x+5$?",
   "o": [
    "$F(x)=18x-4$",
    "$F(x)=3x^{3}-2x^{2}+5x$",
    "$F(x)=9x^{3}-4x^{2}+5x$",
    "$F(x)=27x^{3}-8x^{2}+5x$"
   ],
   "a": 1,
   "e": "Bei jedem Teil: Hochzahl um 1 größer, durch die neue Hochzahl teilen. Probe: Die Antwort ableiten muss wieder $f$ ergeben.",
   "typ": "Stammfunktion"
  },
  {
   "id": "G7.2",
   "kap": 7,
   "th": "Analysis",
   "q": "Welche Funktion ist eine Stammfunktion von $f(x)=8x^{3}-6x$?",
   "o": [
    "$F(x)=32x^{4}-12x^{2}$",
    "$F(x)=24x^{2}-6$",
    "$F(x)=2x^{4}-3x^{2}$",
    "$F(x)=8x^{4}-6x^{2}$"
   ],
   "a": 2,
   "e": "Bei jedem Teil: Hochzahl um 1 größer, durch die neue Hochzahl teilen. Probe: Die Antwort ableiten muss wieder $f$ ergeben.",
   "typ": "Stammfunktion"
  },
  {
   "id": "G7.3",
   "kap": 7,
   "th": "Analysis",
   "q": "Welche Funktion ist eine Stammfunktion von $f(x)=5x^{4}+3x^{2}-2$?",
   "o": [
    "$F(x)=x^{5}+x^{3}-2x$",
    "$F(x)=20x^{3}+6x$",
    "$F(x)=5x^{5}+3x^{3}-2x$",
    "$F(x)=25x^{5}+9x^{3}-2x$"
   ],
   "a": 0,
   "e": "Bei jedem Teil: Hochzahl um 1 größer, durch die neue Hochzahl teilen. Probe: Die Antwort ableiten muss wieder $f$ ergeben.",
   "typ": "Stammfunktion"
  },
  {
   "id": "G7.4",
   "kap": 7,
   "th": "Analysis",
   "q": "Welche Funktion ist eine Stammfunktion von $f(x)=10x-7$?",
   "o": [
    "$F(x)=20x^{2}-7x$",
    "$F(x)=10$",
    "$F(x)=5x^{2}-7x$",
    "$F(x)=10x^{2}-7x$"
   ],
   "a": 2,
   "e": "Bei jedem Teil: Hochzahl um 1 größer, durch die neue Hochzahl teilen. Probe: Die Antwort ableiten muss wieder $f$ ergeben.",
   "typ": "Stammfunktion"
  },
  {
   "id": "G7.5",
   "kap": 7,
   "th": "Analysis",
   "q": "Berechne $\\displaystyle\\int_{1}^{3}\\left(4x\\right)dx$.",
   "o": [
    "$-16$",
    "$16$",
    "$20$",
    "$8$"
   ],
   "a": 1,
   "e": "Stammfunktion: $F(x)=2x^{2}$. Obere Grenze minus untere Grenze: $F(3)-F(1)=18-2=16$.",
   "typ": "Integral"
  },
  {
   "id": "G7.6",
   "kap": 7,
   "th": "Analysis",
   "q": "Berechne $\\displaystyle\\int_{0}^{2}\\left(3x^{2}+2\\right)dx$.",
   "o": [
    "$-12$",
    "$12$",
    "$11$",
    "$14$"
   ],
   "a": 1,
   "e": "Stammfunktion: $F(x)=x^{3}+2x$. Obere Grenze minus untere Grenze: $F(2)-F(0)=12-0=12$.",
   "typ": "Integral"
  },
  {
   "id": "G7.7",
   "kap": 7,
   "th": "Analysis",
   "q": "Berechne $\\displaystyle\\int_{2}^{5}\\left(2x-3\\right)dx$.",
   "o": [
    "$6$",
    "$8$",
    "$12$",
    "$-12$"
   ],
   "a": 2,
   "e": "Stammfunktion: $F(x)=x^{2}-3x$. Obere Grenze minus untere Grenze: $F(5)-F(2)=10-(-2)=12$.",
   "typ": "Integral"
  },
  {
   "id": "G7.8",
   "kap": 7,
   "th": "Analysis",
   "q": "Berechne $\\displaystyle\\int_{-1}^{1}\\left(6x^{2}\\right)dx$.",
   "o": [
    "$2$",
    "$-4$",
    "$0$",
    "$4$"
   ],
   "a": 3,
   "e": "Stammfunktion: $F(x)=2x^{3}$. Obere Grenze minus untere Grenze: $F(1)-F(-1)=2-(-2)=4$.",
   "typ": "Integral"
  },
  {
   "id": "G7.9",
   "kap": 7,
   "th": "Analysis",
   "q": "Berechne $\\displaystyle\\int_{0}^{2}\\left(4x^{3}\\right)dx$.",
   "o": [
    "$32$",
    "$18$",
    "$-16$",
    "$16$"
   ],
   "a": 3,
   "e": "Stammfunktion: $F(x)=x^{4}$. Obere Grenze minus untere Grenze: $F(2)-F(0)=16-0=16$.",
   "typ": "Integral"
  },
  {
   "id": "G7.10",
   "kap": 7,
   "th": "Analysis",
   "q": "Berechne $\\displaystyle\\int_{0}^{3}\\left(-2x+6\\right)dx$.",
   "o": [
    "$-6$",
    "$11$",
    "$9$",
    "$-9$"
   ],
   "a": 2,
   "e": "Stammfunktion: $F(x)=-x^{2}+6x$. Obere Grenze minus untere Grenze: $F(3)-F(0)=9-0=9$.",
   "typ": "Integral"
  },
  {
   "id": "G7.11",
   "kap": 7,
   "th": "Analysis",
   "q": "Wie groß ist die Fläche, die der Graph von $f(x)=-x^{2}+3x$ mit der $x$-Achse einschließt?",
   "o": [
    "$\\dfrac{11}{2}$",
    "$\\dfrac{9}{2}$",
    "$\\dfrac{27}{2}$",
    "$9$"
   ],
   "a": 1,
   "e": "Nullstellen: $x(-x+3)=0$, also $x=0$ und $x=3$. Integral: $\\left[-\\tfrac13x^3+\\tfrac{3}{2}x^2\\right]_0^{3}=-9+\\tfrac{27}{2}=\\tfrac{9}{2}$.",
   "typ": "Fläche"
  },
  {
   "id": "G7.12",
   "kap": 7,
   "th": "Analysis",
   "q": "Wie groß ist die Fläche, die der Graph von $f(x)=-x^{2}+6x$ mit der $x$-Achse einschließt?",
   "o": [
    "$72$",
    "$36$",
    "$108$",
    "$18$"
   ],
   "a": 1,
   "e": "Nullstellen: $x(-x+6)=0$, also $x=0$ und $x=6$. Integral: $\\left[-\\tfrac13x^3+3x^2\\right]_0^{6}=-72+108=36$.",
   "typ": "Fläche"
  },
  {
   "id": "G7.13",
   "kap": 7,
   "th": "Analysis",
   "q": "Wie groß ist die Fläche zwischen den Graphen von $f(x)=x^2$ und $g(x)=3x$?",
   "o": [
    "$\\dfrac{27}{2}$",
    "$9$",
    "$\\dfrac{9}{2}$",
    "$\\dfrac{11}{2}$"
   ],
   "a": 2,
   "e": "Schnittstellen: $x^2=3x$ gilt für $x=0$ und $x=3$. Obere minus untere Funktion: $\\int_0^{3}(3x-x^2)\\,dx=\\tfrac{27}{2}-9=\\tfrac{9}{2}$.",
   "typ": "Fläche"
  },
  {
   "id": "G7.14",
   "kap": 7,
   "th": "Analysis",
   "q": "Wie groß ist die Fläche zwischen den Graphen von $f(x)=x^2$ und $g(x)=6x$?",
   "o": [
    "$108$",
    "$72$",
    "$36$",
    "$37$"
   ],
   "a": 2,
   "e": "Schnittstellen: $x^2=6x$ gilt für $x=0$ und $x=6$. Obere minus untere Funktion: $\\int_0^{6}(6x-x^2)\\,dx=108-72=36$.",
   "typ": "Fläche"
  },
  {
   "id": "G7.15",
   "kap": 7,
   "th": "Analysis",
   "q": "Bestimme die Ableitung von $f(x)=(2x-3)^{4}$.",
   "o": [
    "$f'(x)=8(2x-3)^{3}$",
    "$f'(x)=2(2x-3)^{3}$",
    "$f'(x)=4(2x-3)^{3}$",
    "$f'(x)=8(2x-3)^{4}$"
   ],
   "a": 0,
   "e": "Kettenregel: äußere mal innere Ableitung. Außen: $4(2x-3)^{3}$. Innen: $2x-3$ abgeleitet ist $2$. Zusammen $4\\cdot2=8$ als Faktor.",
   "typ": "Kettenregel"
  },
  {
   "id": "G7.16",
   "kap": 7,
   "th": "Analysis",
   "q": "Bestimme die Ableitung von $f(x)=(5x+1)^{3}$.",
   "o": [
    "$f'(x)=5(5x+1)^{2}$",
    "$f'(x)=15(5x+1)^{2}$",
    "$f'(x)=3(5x+1)^{2}$",
    "$f'(x)=15(5x+1)^{3}$"
   ],
   "a": 1,
   "e": "Kettenregel: äußere mal innere Ableitung. Außen: $3(5x+1)^{2}$. Innen: $5x+1$ abgeleitet ist $5$. Zusammen $3\\cdot5=15$ als Faktor.",
   "typ": "Kettenregel"
  },
  {
   "id": "G7.17",
   "kap": 7,
   "th": "Analysis",
   "q": "Bestimme die Ableitung von $f(x)=(-x+4)^{5}$.",
   "o": [
    "$f'(x)=-(-x+4)^{4}$",
    "$f'(x)=5(-x+4)^{4}$",
    "$f'(x)=-5(-x+4)^{4}$",
    "$f'(x)=-5(-x+4)^{5}$"
   ],
   "a": 2,
   "e": "Kettenregel: äußere mal innere Ableitung. Außen: $5(-x+4)^{4}$. Innen: $-x+4$ abgeleitet ist $-1$. Zusammen $5\\cdot(-1)=-5$ als Faktor.",
   "typ": "Kettenregel"
  },
  {
   "id": "G7.18",
   "kap": 7,
   "th": "Analysis",
   "q": "Bestimme die Ableitung von $f(x)=(3x+2)^{2}$.",
   "o": [
    "$f'(x)=2(3x+2)$",
    "$f'(x)=3(3x+2)$",
    "$f'(x)=6(3x+2)^{2}$",
    "$f'(x)=6(3x+2)$"
   ],
   "a": 3,
   "e": "Kettenregel: äußere mal innere Ableitung. Außen: $2(3x+2)$. Innen: $3x+2$ abgeleitet ist $3$. Zusammen $2\\cdot3=6$ als Faktor.",
   "typ": "Kettenregel"
  },
  {
   "id": "G7.19",
   "kap": 7,
   "th": "Analysis",
   "q": "Bestimme die Ableitung von $f(x)=e^{3x}$.",
   "o": [
    "$f'(x)=3e^{3x}$",
    "$f'(x)=e^{3x}$",
    "$f'(x)=3xe^{3x}$",
    "$f'(x)=3e^{x}$"
   ],
   "a": 0,
   "e": "Kettenregel: $e^{\\ldots}$ bleibt stehen, mal die Ableitung der Hochzahl. $3x$ abgeleitet ist $3$.",
   "typ": "Kettenregel"
  },
  {
   "id": "G7.20",
   "kap": 7,
   "th": "Analysis",
   "q": "Bestimme die Ableitung von $f(x)=e^{-2x}$.",
   "o": [
    "$f'(x)=e^{-2x}$",
    "$f'(x)=-2e^{x}$",
    "$f'(x)=-2xe^{-2x}$",
    "$f'(x)=-2e^{-2x}$"
   ],
   "a": 3,
   "e": "Kettenregel: $e^{\\ldots}$ bleibt stehen, mal die Ableitung der Hochzahl. $-2x$ abgeleitet ist $-2$.",
   "typ": "Kettenregel"
  },
  {
   "id": "G7.21",
   "kap": 7,
   "th": "Analysis",
   "q": "Bestimme die Ableitung von $f(x)=e^{5x}$.",
   "o": [
    "$f'(x)=5e^{x}$",
    "$f'(x)=5xe^{5x}$",
    "$f'(x)=e^{5x}$",
    "$f'(x)=5e^{5x}$"
   ],
   "a": 3,
   "e": "Kettenregel: $e^{\\ldots}$ bleibt stehen, mal die Ableitung der Hochzahl. $5x$ abgeleitet ist $5$.",
   "typ": "Kettenregel"
  },
  {
   "id": "G7.22",
   "kap": 7,
   "th": "Analysis",
   "q": "Gegeben ist $f(x)=(x^2+1)^3$. Berechne $f'(1)$.",
   "o": [
    "$8$",
    "$12$",
    "$24$",
    "$48$"
   ],
   "a": 2,
   "e": "Kettenregel: $f'(x)=3(x^2+1)^2\\cdot2x$. Einsetzen: $3\\cdot2^2\\cdot2=24$.",
   "typ": "Kettenregel"
  },
  {
   "id": "G7.23",
   "kap": 7,
   "th": "Analysis",
   "q": "Gegeben ist $f(x)=(x^2+2)^3$. Berechne $f'(1)$.",
   "o": [
    "$162$",
    "$54$",
    "$60$",
    "$27$"
   ],
   "a": 1,
   "e": "Kettenregel: $f'(x)=3(x^2+2)^2\\cdot2x$. Einsetzen: $3\\cdot3^2\\cdot2=54$.",
   "typ": "Kettenregel"
  },
  {
   "id": "G7.24",
   "kap": 7,
   "th": "Analysis",
   "q": "Bestimme die Ableitung von $f(x)=e^{x^2}$.",
   "o": [
    "$f'(x)=2e^{x^2}$",
    "$f'(x)=e^{x^2}$",
    "$f'(x)=2xe^{x^2}$",
    "$f'(x)=x^2e^{x^2-1}$"
   ],
   "a": 2,
   "e": "Kettenregel: $e^{\\ldots}$ bleibt stehen, mal die Ableitung der Hochzahl. $x^2$ abgeleitet ist $2x$.",
   "typ": "Kettenregel"
  },
  {
   "id": "G7.25",
   "kap": 7,
   "th": "Analysis",
   "q": "Bestimme die Ableitung von $f(x)=\\sqrt{4x+1}$.",
   "o": [
    "$f'(x)=\\dfrac{2}{\\sqrt{4x+1}}$",
    "$f'(x)=2\\sqrt{4x+1}$",
    "$f'(x)=\\dfrac{4}{\\sqrt{4x+1}}$",
    "$f'(x)=\\dfrac{1}{2\\sqrt{4x+1}}$"
   ],
   "a": 0,
   "e": "Kettenregel: außen $\\tfrac{1}{2\\sqrt{\\ldots}}$, innen ist die Ableitung 4. Zusammen $\\tfrac{4}{2\\sqrt{4x+1}}=\\tfrac{2}{\\sqrt{4x+1}}$.",
   "typ": "Kettenregel"
  },
  {
   "id": "G7.26",
   "kap": 7,
   "th": "Analysis",
   "q": "Bestimme die Ableitung von $f(x)=x^3\\cdot e^x$.",
   "o": [
    "$f'(x)=3x^2e^x$",
    "$f'(x)=x^3e^x$",
    "$f'(x)=3x^2+e^x$",
    "$f'(x)=(3x^2+x^3)\\,e^x$"
   ],
   "a": 3,
   "e": "Produktregel $u'v+uv'$ mit $u=x^3$ und $v=e^x$: $3x^2e^x+x^3e^x$.",
   "typ": "Produktregel"
  },
  {
   "id": "G7.27",
   "kap": 7,
   "th": "Analysis",
   "q": "Bestimme die Ableitung von $f(x)=(2x+1)\\cdot e^x$.",
   "o": [
    "$f'(x)=2e^x$",
    "$f'(x)=(2x+1)\\,e^x$",
    "$f'(x)=(2x+2)\\,e^x$",
    "$f'(x)=(2x+3)\\,e^x$"
   ],
   "a": 3,
   "e": "Produktregel $u'v+uv'$ mit $u=2x+1$ und $v=e^x$: $2e^x+(2x+1)e^x=(2x+3)e^x$.",
   "typ": "Produktregel"
  },
  {
   "id": "G7.28",
   "kap": 7,
   "th": "Analysis",
   "q": "Bestimme die Ableitung von $f(x)=x^2\\cdot\\ln x$.",
   "o": [
    "$f'(x)=2$",
    "$f'(x)=2x\\ln x+x^2$",
    "$f'(x)=2x\\ln x+x$",
    "$f'(x)=2x\\ln x$"
   ],
   "a": 2,
   "e": "Produktregel $u'v+uv'$ mit $u=x^2$ und $v=\\ln x$: $2x\\ln x+x^2\\cdot\\tfrac1x=2x\\ln x+x$.",
   "typ": "Produktregel"
  },
  {
   "id": "G8.1",
   "kap": 8,
   "th": "Stochastik",
   "q": "Zwei Würfel werden geworfen. Wie wahrscheinlich ist die Augensumme 4?",
   "o": [
    "$\\dfrac{1}{9}$",
    "$\\dfrac{1}{12}$",
    "$\\dfrac{1}{6}$",
    "$\\dfrac{1}{18}$"
   ],
   "a": 1,
   "e": "Passende Paare zählen: $(1,3),(2,2),(3,1)$. Das sind 3 von 36, also $\\tfrac{1}{12}$.",
   "typ": "Zwei Würfel"
  },
  {
   "id": "G8.2",
   "kap": 8,
   "th": "Stochastik",
   "q": "Zwei Würfel werden geworfen. Wie wahrscheinlich ist die Augensumme 6?",
   "o": [
    "$\\dfrac{5}{36}$",
    "$\\dfrac{1}{6}$",
    "$\\dfrac{1}{9}$",
    "$\\dfrac{1}{12}$"
   ],
   "a": 0,
   "e": "Passende Paare zählen: $(1,5),(2,4),(3,3),(4,2),(5,1)$. Das sind 5 von 36, also $\\tfrac{5}{36}$.",
   "typ": "Zwei Würfel"
  },
  {
   "id": "G8.3",
   "kap": 8,
   "th": "Stochastik",
   "q": "Zwei Würfel werden geworfen. Wie wahrscheinlich ist die Augensumme 9?",
   "o": [
    "$\\dfrac{1}{4}$",
    "$\\dfrac{5}{36}$",
    "$\\dfrac{1}{12}$",
    "$\\dfrac{1}{9}$"
   ],
   "a": 3,
   "e": "Passende Paare zählen: $(3,6),(4,5),(5,4),(6,3)$. Das sind 4 von 36, also $\\tfrac{1}{9}$.",
   "typ": "Zwei Würfel"
  },
  {
   "id": "G8.4",
   "kap": 8,
   "th": "Stochastik",
   "q": "Zwei Würfel werden geworfen. Wie wahrscheinlich ist die Augensumme 10?",
   "o": [
    "$\\dfrac{1}{18}$",
    "$\\dfrac{1}{9}$",
    "$\\dfrac{5}{18}$",
    "$\\dfrac{1}{12}$"
   ],
   "a": 3,
   "e": "Passende Paare zählen: $(4,6),(5,5),(6,4)$. Das sind 3 von 36, also $\\tfrac{1}{12}$.",
   "typ": "Zwei Würfel"
  },
  {
   "id": "G8.5",
   "kap": 8,
   "th": "Stochastik",
   "q": "Zwei Würfel werden geworfen. Wie wahrscheinlich ist die Augensumme 3?",
   "o": [
    "$\\dfrac{1}{6}$",
    "$\\dfrac{1}{18}$",
    "$\\dfrac{1}{36}$",
    "$\\dfrac{1}{12}$"
   ],
   "a": 1,
   "e": "Passende Paare zählen: $(1,2),(2,1)$. Das sind 2 von 36, also $\\tfrac{1}{18}$.",
   "typ": "Zwei Würfel"
  },
  {
   "id": "G8.6",
   "kap": 8,
   "th": "Stochastik",
   "q": "Zwei Würfel werden geworfen. Wie wahrscheinlich ist mindestens eine 6?",
   "o": [
    "$\\dfrac{1}{3}$",
    "$\\dfrac{1}{36}$",
    "$\\dfrac{11}{36}$",
    "$\\dfrac{25}{36}$"
   ],
   "a": 2,
   "e": "Gegenteil: keine 6 bei beiden Würfeln: $\\tfrac56\\cdot\\tfrac56=\\tfrac{25}{36}$. Also $1-\\tfrac{25}{36}=\\tfrac{11}{36}$.",
   "typ": "Zwei Würfel"
  },
  {
   "id": "G8.7",
   "kap": 8,
   "th": "Stochastik",
   "q": "Zwei Würfel werden geworfen. Wie wahrscheinlich ist zwei gerade Zahlen?",
   "o": [
    "$\\dfrac{1}{4}$",
    "$\\dfrac{1}{2}$",
    "$\\dfrac{1}{3}$",
    "$\\dfrac{1}{6}$"
   ],
   "a": 0,
   "e": "Jeder Würfel zeigt mit $\\tfrac12$ eine gerade Zahl. Beide: $\\tfrac12\\cdot\\tfrac12=\\tfrac{1}{4}$.",
   "typ": "Zwei Würfel"
  },
  {
   "id": "G8.8",
   "kap": 8,
   "th": "Stochastik",
   "q": "Zwei Würfel werden geworfen. Wie wahrscheinlich ist das Produkt 12?",
   "o": [
    "$\\dfrac{1}{9}$",
    "$\\dfrac{1}{18}$",
    "$\\dfrac{1}{6}$",
    "$\\dfrac{1}{12}$"
   ],
   "a": 0,
   "e": "Passende Paare: $(2,6),(3,4),(4,3),(6,2)$. Das sind 4 von 36, also $\\tfrac{1}{9}$.",
   "typ": "Zwei Würfel"
  },
  {
   "id": "G8.9",
   "kap": 8,
   "th": "Stochastik",
   "q": "In einer Urne liegen 4 rote und 6 blaue Kugeln. Es werden zwei Kugeln ohne Zurücklegen gezogen. Wie wahrscheinlich sind beide rot?",
   "o": [
    "$\\dfrac{8}{45}$",
    "$\\dfrac{2}{15}$",
    "$\\dfrac{4}{25}$",
    "$\\dfrac{2}{5}$"
   ],
   "a": 1,
   "e": "Entlang des Weges malnehmen. Erste Kugel rot: $\\tfrac{4}{10}$. Dann fehlt eine rote Kugel: $\\tfrac{3}{9}$. Zusammen $\\tfrac{4}{10}\\cdot\\tfrac{3}{9}=\\tfrac{2}{15}$.",
   "typ": "Urne"
  },
  {
   "id": "G8.10",
   "kap": 8,
   "th": "Stochastik",
   "q": "In einer Urne liegen 5 rote und 3 blaue Kugeln. Es werden zwei Kugeln ohne Zurücklegen gezogen. Wie wahrscheinlich sind beide rot?",
   "o": [
    "$\\dfrac{25}{56}$",
    "$\\dfrac{5}{14}$",
    "$\\dfrac{25}{64}$",
    "$\\dfrac{5}{8}$"
   ],
   "a": 1,
   "e": "Entlang des Weges malnehmen. Erste Kugel rot: $\\tfrac{5}{8}$. Dann fehlt eine rote Kugel: $\\tfrac{4}{7}$. Zusammen $\\tfrac{5}{8}\\cdot\\tfrac{4}{7}=\\tfrac{5}{14}$.",
   "typ": "Urne"
  },
  {
   "id": "G8.11",
   "kap": 8,
   "th": "Stochastik",
   "q": "In einer Urne liegen 2 rote und 8 blaue Kugeln. Es werden zwei Kugeln ohne Zurücklegen gezogen. Wie wahrscheinlich sind beide rot?",
   "o": [
    "$\\dfrac{1}{25}$",
    "$\\dfrac{2}{45}$",
    "$\\dfrac{1}{45}$",
    "$\\dfrac{1}{5}$"
   ],
   "a": 2,
   "e": "Entlang des Weges malnehmen. Erste Kugel rot: $\\tfrac{2}{10}$. Dann fehlt eine rote Kugel: $\\tfrac{1}{9}$. Zusammen $\\tfrac{2}{10}\\cdot\\tfrac{1}{9}=\\tfrac{1}{45}$.",
   "typ": "Urne"
  },
  {
   "id": "G8.12",
   "kap": 8,
   "th": "Stochastik",
   "q": "In einer Urne liegen 4 rote und 6 blaue Kugeln. Es wird zweimal ohne Zurücklegen gezogen. Wie wahrscheinlich haben die beiden Kugeln verschiedene Farben?",
   "o": [
    "$\\dfrac{6}{25}$",
    "$\\dfrac{4}{15}$",
    "$\\dfrac{12}{25}$",
    "$\\dfrac{8}{15}$"
   ],
   "a": 3,
   "e": "Zwei Wege passen: erst rot, dann blau, oder erst blau, dann rot. Beide sind gleich wahrscheinlich: $2\\cdot\\tfrac{4}{10}\\cdot\\tfrac{6}{9}=\\tfrac{8}{15}$.",
   "typ": "Urne"
  },
  {
   "id": "G8.13",
   "kap": 8,
   "th": "Stochastik",
   "q": "In einer Urne liegen 2 rote und 3 blaue Kugeln. Es wird zweimal mit Zurücklegen gezogen. Wie wahrscheinlich haben die beiden Kugeln verschiedene Farben?",
   "o": [
    "$\\dfrac{6}{25}$",
    "$\\dfrac{12}{25}$",
    "$\\dfrac{3}{5}$",
    "$\\dfrac{13}{25}$"
   ],
   "a": 1,
   "e": "Zwei Wege passen: erst rot, dann blau, oder erst blau, dann rot. Beide sind gleich wahrscheinlich: $2\\cdot\\tfrac{2}{5}\\cdot\\tfrac{3}{5}=\\tfrac{12}{25}$.",
   "typ": "Urne"
  },
  {
   "id": "G8.14",
   "kap": 8,
   "th": "Stochastik",
   "q": "In einer Urne liegen 5 rote und 5 blaue Kugeln. Es wird zweimal ohne Zurücklegen gezogen. Wie wahrscheinlich haben die beiden Kugeln verschiedene Farben?",
   "o": [
    "$\\dfrac{1}{2}$",
    "$\\dfrac{5}{18}$",
    "$\\dfrac{5}{9}$",
    "$\\dfrac{1}{4}$"
   ],
   "a": 2,
   "e": "Zwei Wege passen: erst rot, dann blau, oder erst blau, dann rot. Beide sind gleich wahrscheinlich: $2\\cdot\\tfrac{5}{10}\\cdot\\tfrac{5}{9}=\\tfrac{5}{9}$.",
   "typ": "Urne"
  },
  {
   "id": "G8.15",
   "kap": 8,
   "th": "Stochastik",
   "q": "In einer Urne liegen 3 rote und 5 blaue Kugeln. Es werden zwei Kugeln ohne Zurücklegen gezogen. Wie wahrscheinlich ist mindestens eine rot?",
   "o": [
    "$\\dfrac{15}{28}$",
    "$\\dfrac{5}{14}$",
    "$\\dfrac{9}{14}$",
    "$\\dfrac{3}{8}$"
   ],
   "a": 2,
   "e": "Gegenteil: keine rote, also zweimal blau: $\\tfrac{5}{8}\\cdot\\tfrac{4}{7}=\\tfrac{5}{14}$. Also $1-\\tfrac{5}{14}=\\tfrac{9}{14}$.",
   "typ": "Gegenereignis"
  },
  {
   "id": "G8.16",
   "kap": 8,
   "th": "Stochastik",
   "q": "In einer Urne liegen 2 rote und 4 blaue Kugeln. Es werden zwei Kugeln ohne Zurücklegen gezogen. Wie wahrscheinlich ist mindestens eine rot?",
   "o": [
    "$\\dfrac{8}{15}$",
    "$\\dfrac{1}{3}$",
    "$\\dfrac{2}{5}$",
    "$\\dfrac{3}{5}$"
   ],
   "a": 3,
   "e": "Gegenteil: keine rote, also zweimal blau: $\\tfrac{4}{6}\\cdot\\tfrac{3}{5}=\\tfrac{2}{5}$. Also $1-\\tfrac{2}{5}=\\tfrac{3}{5}$.",
   "typ": "Gegenereignis"
  },
  {
   "id": "G8.17",
   "kap": 8,
   "th": "Stochastik",
   "q": "Eine Münze wird dreimal geworfen. Wie wahrscheinlich ist mindestens einmal Kopf?",
   "o": [
    "$\\dfrac{1}{2}$",
    "$\\dfrac{7}{8}$",
    "$\\dfrac{3}{8}$",
    "$\\dfrac{1}{8}$"
   ],
   "a": 1,
   "e": "Gegenteil: nie Kopf, also nur Zahl: $\\left(\\tfrac12\\right)^{3}=\\tfrac{1}{8}$. Also $1-\\tfrac{1}{8}=\\tfrac{7}{8}$.",
   "typ": "Gegenereignis"
  },
  {
   "id": "G8.18",
   "kap": 8,
   "th": "Stochastik",
   "q": "Eine Münze wird sechsmal geworfen. Wie wahrscheinlich ist mindestens einmal Kopf?",
   "o": [
    "$\\dfrac{63}{64}$",
    "$\\dfrac{1}{64}$",
    "$\\dfrac{1}{2}$",
    "$\\dfrac{3}{32}$"
   ],
   "a": 0,
   "e": "Gegenteil: nie Kopf, also nur Zahl: $\\left(\\tfrac12\\right)^{6}=\\tfrac{1}{64}$. Also $1-\\tfrac{1}{64}=\\tfrac{63}{64}$.",
   "typ": "Gegenereignis"
  },
  {
   "id": "G8.19",
   "kap": 8,
   "th": "Stochastik",
   "q": "Aus den Zahlen 1 bis 30 wird eine zufällig gezogen. Wie wahrscheinlich ist sie durch 2 oder durch 5 teilbar?",
   "o": [
    "$\\dfrac{3}{5}$",
    "$\\dfrac{1}{10}$",
    "$\\dfrac{7}{10}$",
    "$\\dfrac{1}{2}$"
   ],
   "a": 0,
   "e": "15 Zahlen sind durch 2 teilbar, 6 durch 5. Doppelt gezählt sind die 3 Zahlen, die durch beides teilbar sind. Also $\\tfrac{15+6-3}{30}=\\tfrac{3}{5}$.",
   "typ": "Oder-Regel"
  },
  {
   "id": "G8.20",
   "kap": 8,
   "th": "Stochastik",
   "q": "Aus den Zahlen 1 bis 24 wird eine zufällig gezogen. Wie wahrscheinlich ist sie durch 3 oder durch 4 teilbar?",
   "o": [
    "$\\dfrac{5}{12}$",
    "$\\dfrac{1}{12}$",
    "$\\dfrac{7}{12}$",
    "$\\dfrac{1}{2}$"
   ],
   "a": 3,
   "e": "8 Zahlen sind durch 3 teilbar, 6 durch 4. Doppelt gezählt sind die 2 Zahlen, die durch beides teilbar sind. Also $\\tfrac{8+6-2}{24}=\\tfrac{1}{2}$.",
   "typ": "Oder-Regel"
  },
  {
   "id": "G8.21",
   "kap": 8,
   "th": "Stochastik",
   "q": "Aus den Zahlen 1 bis 60 wird eine zufällig gezogen. Wie wahrscheinlich ist sie durch 4 oder durch 6 teilbar?",
   "o": [
    "$\\dfrac{1}{4}$",
    "$\\dfrac{1}{3}$",
    "$\\dfrac{1}{12}$",
    "$\\dfrac{5}{12}$"
   ],
   "a": 1,
   "e": "15 Zahlen sind durch 4 teilbar, 10 durch 6. Doppelt gezählt sind die 5 Zahlen, die durch beides teilbar sind. Also $\\tfrac{15+10-5}{60}=\\tfrac{1}{3}$.",
   "typ": "Oder-Regel"
  },
  {
   "id": "G8.22",
   "kap": 8,
   "th": "Stochastik",
   "q": "$A$ und $B$ sind unabhängig mit $P(A)=0{,}5$ und $P(B)=0{,}2$. Berechne $P(A\\text{ und }B)$.",
   "o": [
    "$0{,}1$",
    "$0{,}3$",
    "$0{,}7$",
    "$0{,}6$"
   ],
   "a": 0,
   "e": "Unabhängig heißt malnehmen: $0{,}5\\cdot0{,}2=0{,}1$.",
   "typ": "Unabhängige Ereignisse"
  },
  {
   "id": "G8.23",
   "kap": 8,
   "th": "Stochastik",
   "q": "$A$ und $B$ sind unabhängig mit $P(A)=0{,}3$ und $P(B)=0{,}4$. Berechne $P(A\\text{ oder }B)$.",
   "o": [
    "$0{,}58$",
    "$0{,}7$",
    "$0{,}12$",
    "$0{,}1$"
   ],
   "a": 0,
   "e": "Addieren und das doppelt Gezählte abziehen: $0{,}3+0{,}4-0{,}3\\cdot0{,}4=0{,}58$.",
   "typ": "Unabhängige Ereignisse"
  },
  {
   "id": "G8.24",
   "kap": 8,
   "th": "Stochastik",
   "q": "$A$ und $B$ sind unabhängig mit $P(A)=0{,}25$ und $P(B)=0{,}4$. Berechne $P(A\\text{ und }B)$.",
   "o": [
    "$0{,}55$",
    "$0{,}1$",
    "$0{,}65$",
    "$0{,}15$"
   ],
   "a": 1,
   "e": "Unabhängig heißt malnehmen: $0{,}25\\cdot0{,}4=0{,}1$.",
   "typ": "Unabhängige Ereignisse"
  },
  {
   "id": "G8.25",
   "kap": 8,
   "th": "Stochastik",
   "q": "$A$ und $B$ sind unabhängig mit $P(A)=0{,}2$ und $P(B)=0{,}5$. Berechne $P(A\\text{ oder }B)$.",
   "o": [
    "$0{,}7$",
    "$0{,}1$",
    "$0{,}3$",
    "$0{,}6$"
   ],
   "a": 3,
   "e": "Addieren und das doppelt Gezählte abziehen: $0{,}2+0{,}5-0{,}2\\cdot0{,}5=0{,}6$.",
   "typ": "Unabhängige Ereignisse"
  },
  {
   "id": "G8.26",
   "kap": 8,
   "th": "Stochastik",
   "q": "In einer Umfrage wurden 100 Personen nach Wohnort und Auto gefragt (siehe Tabelle). Eine Person aus der Gruppe „Auto“ wird zufällig ausgewählt. Wie wahrscheinlich gehört sie zur Gruppe „Stadt“?",
   "o": [
    "$\\dfrac{14}{25}$",
    "$\\dfrac{3}{7}$",
    "$\\dfrac{2}{5}$",
    "$\\dfrac{6}{25}$"
   ],
   "a": 1,
   "e": "Die Grundmenge ist jetzt nur die Spalte „Auto“ mit 56 Personen. Davon sind 24 „Stadt“: $\\tfrac{24}{56}=\\tfrac{3}{7}$.",
   "tabelle": [
    [
     "",
     "Auto",
     "kein Auto",
     "gesamt"
    ],
    [
     "Stadt",
     "24",
     "36",
     "60"
    ],
    [
     "Land",
     "32",
     "8",
     "40"
    ],
    [
     "gesamt",
     "56",
     "44",
     "100"
    ]
   ],
   "typ": "Vierfeldertafel"
  },
  {
   "id": "G8.27",
   "kap": 8,
   "th": "Stochastik",
   "q": "In einer Umfrage wurden 100 Personen nach Wohnort und Auto gefragt (siehe Tabelle). Eine Person aus der Gruppe „Stadt“ wird zufällig ausgewählt. Wie wahrscheinlich gehört sie zur Gruppe „Auto“?",
   "o": [
    "$\\dfrac{3}{7}$",
    "$\\dfrac{3}{5}$",
    "$\\dfrac{2}{5}$",
    "$\\dfrac{6}{25}$"
   ],
   "a": 2,
   "e": "Die Grundmenge ist jetzt nur die Zeile „Stadt“ mit 60 Personen. Davon sind 24 „Auto“: $\\tfrac{24}{60}=\\tfrac{2}{5}$.",
   "tabelle": [
    [
     "",
     "Auto",
     "kein Auto",
     "gesamt"
    ],
    [
     "Stadt",
     "24",
     "36",
     "60"
    ],
    [
     "Land",
     "32",
     "8",
     "40"
    ],
    [
     "gesamt",
     "56",
     "44",
     "100"
    ]
   ],
   "typ": "Vierfeldertafel"
  },
  {
   "id": "G8.28",
   "kap": 8,
   "th": "Stochastik",
   "q": "80 Studierende wurden gefragt, ob sie morgens oder abends lernen und ob sie eine Lerngruppe haben (siehe Tabelle). Eine der 80 Personen wird zufällig ausgewählt. Wie wahrscheinlich gehört sie zu „morgens“ und zugleich zu „Lerngruppe“?",
   "o": [
    "$\\dfrac{3}{8}$",
    "$\\dfrac{3}{20}$",
    "$\\dfrac{3}{5}$",
    "$\\dfrac{9}{40}$"
   ],
   "a": 3,
   "e": "Hier zählen alle 80 Personen als Grundmenge. Im passenden Feld stehen 18: $\\tfrac{18}{80}=\\tfrac{9}{40}$.",
   "tabelle": [
    [
     "",
     "Lerngruppe",
     "allein",
     "gesamt"
    ],
    [
     "morgens",
     "18",
     "12",
     "30"
    ],
    [
     "abends",
     "30",
     "20",
     "50"
    ],
    [
     "gesamt",
     "48",
     "32",
     "80"
    ]
   ],
   "typ": "Vierfeldertafel"
  },
  {
   "id": "G8.29",
   "kap": 8,
   "th": "Stochastik",
   "q": "80 Studierende wurden gefragt, ob sie morgens oder abends lernen und ob sie eine Lerngruppe haben (siehe Tabelle). Eine Person aus der Gruppe „Lerngruppe“ wird zufällig ausgewählt. Wie wahrscheinlich gehört sie zur Gruppe „morgens“?",
   "o": [
    "$\\dfrac{9}{40}$",
    "$\\dfrac{3}{5}$",
    "$\\dfrac{3}{20}$",
    "$\\dfrac{3}{8}$"
   ],
   "a": 3,
   "e": "Die Grundmenge ist jetzt nur die Spalte „Lerngruppe“ mit 48 Personen. Davon sind 18 „morgens“: $\\tfrac{18}{48}=\\tfrac{3}{8}$.",
   "tabelle": [
    [
     "",
     "Lerngruppe",
     "allein",
     "gesamt"
    ],
    [
     "morgens",
     "18",
     "12",
     "30"
    ],
    [
     "abends",
     "30",
     "20",
     "50"
    ],
    [
     "gesamt",
     "48",
     "32",
     "80"
    ]
   ],
   "typ": "Vierfeldertafel"
  },
  {
   "id": "G8.30",
   "kap": 8,
   "th": "Stochastik",
   "q": "Aus einem Kartenspiel mit 32 Karten (4 Farben mit je 8 Karten, darunter je ein König) wird eine Karte gezogen. Wie wahrscheinlich ist ein König?",
   "o": [
    "$\\dfrac{1}{32}$",
    "$\\dfrac{1}{16}$",
    "$\\dfrac{1}{8}$",
    "$\\dfrac{1}{4}$"
   ],
   "a": 2,
   "e": "Es gibt 4 Könige unter 32 Karten: $\\tfrac4{32}=\\tfrac18$.",
   "typ": "Grundformel"
  },
  {
   "id": "G8.31",
   "kap": 8,
   "th": "Stochastik",
   "q": "Aus einem Kartenspiel mit 32 Karten (4 Farben mit je 8 Karten, darunter je ein König) wird eine Karte gezogen. Wie wahrscheinlich ist eine Herz-Karte?",
   "o": [
    "$\\dfrac{1}{32}$",
    "$\\dfrac{1}{8}$",
    "$\\dfrac{1}{4}$",
    "$\\dfrac{1}{2}$"
   ],
   "a": 2,
   "e": "Es gibt 8 Herz-Karten unter 32 Karten: $\\tfrac8{32}=\\tfrac14$.",
   "typ": "Grundformel"
  },
  {
   "id": "G8.32",
   "kap": 8,
   "th": "Stochastik",
   "q": "Aus einem Kartenspiel mit 32 Karten (4 Farben mit je 8 Karten, darunter je ein König) wird eine Karte gezogen. Wie wahrscheinlich ist ein König oder eine Herz-Karte?",
   "o": [
    "$\\dfrac{3}{8}$",
    "$\\dfrac{11}{32}$",
    "$\\dfrac{1}{32}$",
    "$\\dfrac{1}{4}$"
   ],
   "a": 1,
   "e": "4 Könige plus 8 Herz-Karten, aber der Herz-König ist doppelt gezählt: $\\tfrac{4+8-1}{32}=\\tfrac{11}{32}$.",
   "typ": "Grundformel"
  },
  {
   "id": "G9.1",
   "kap": 9,
   "th": "Stochastik",
   "q": "Aus 8 Personen werden 2 für den Tischdienst ausgewählt. Wie viele Möglichkeiten gibt es?",
   "o": [
    "$64$",
    "$16$",
    "$28$",
    "$56$"
   ],
   "a": 2,
   "e": "Die Reihenfolge ist egal: $\\binom{8}{2}=\\dfrac{8\\cdot7}{2\\cdot1}=28$. Mit Reihenfolge wären es $56$.",
   "typ": "Auswahl ohne Reihenfolge"
  },
  {
   "id": "G9.2",
   "kap": 9,
   "th": "Stochastik",
   "q": "Aus 10 Büchern nimmst du 3 mit in den Urlaub. Wie viele Möglichkeiten gibt es?",
   "o": [
    "$120$",
    "$1000$",
    "$720$",
    "$30$"
   ],
   "a": 0,
   "e": "Die Reihenfolge ist egal: $\\binom{10}{3}=\\dfrac{10\\cdot9\\cdot8}{3\\cdot2\\cdot1}=120$. Mit Reihenfolge wären es $720$.",
   "typ": "Auswahl ohne Reihenfolge"
  },
  {
   "id": "G9.3",
   "kap": 9,
   "th": "Stochastik",
   "q": "Aus 6 Farben werden 4 für ein Logo ausgewählt. Wie viele Möglichkeiten gibt es?",
   "o": [
    "$24$",
    "$360$",
    "$1296$",
    "$15$"
   ],
   "a": 3,
   "e": "Die Reihenfolge ist egal: $\\binom{6}{4}=\\dfrac{6\\cdot5\\cdot4\\cdot3}{4\\cdot3\\cdot2\\cdot1}=15$. Mit Reihenfolge wären es $360$.",
   "typ": "Auswahl ohne Reihenfolge"
  },
  {
   "id": "G9.4",
   "kap": 9,
   "th": "Stochastik",
   "q": "12 Personen stoßen an, jede mit jeder genau einmal. Gezählt werden die Paare. Wie viele Möglichkeiten gibt es?",
   "o": [
    "$132$",
    "$24$",
    "$66$",
    "$144$"
   ],
   "a": 2,
   "e": "Die Reihenfolge ist egal: $\\binom{12}{2}=\\dfrac{12\\cdot11}{2\\cdot1}=66$. Mit Reihenfolge wären es $132$.",
   "typ": "Auswahl ohne Reihenfolge"
  },
  {
   "id": "G9.5",
   "kap": 9,
   "th": "Stochastik",
   "q": "Bei einem Rennen mit 6 Läufern werden Platz 1, 2 und 3 vergeben. Wie viele Möglichkeiten gibt es?",
   "o": [
    "$18$",
    "$120$",
    "$20$",
    "$216$"
   ],
   "a": 1,
   "e": "Die Reihenfolge zählt, und niemand kommt doppelt vor: $6\\cdot5\\cdot4=120$.",
   "typ": "Auswahl mit Reihenfolge"
  },
  {
   "id": "G9.6",
   "kap": 9,
   "th": "Stochastik",
   "q": "Aus 10 Mitgliedern werden eine Vorsitzende und ein Kassenwart gewählt. Wie viele Möglichkeiten gibt es?",
   "o": [
    "$90$",
    "$20$",
    "$45$",
    "$100$"
   ],
   "a": 0,
   "e": "Die Reihenfolge zählt, und niemand kommt doppelt vor: $10\\cdot9=90$.",
   "typ": "Auswahl mit Reihenfolge"
  },
  {
   "id": "G9.7",
   "kap": 9,
   "th": "Stochastik",
   "q": "Von 7 verschiedenen Bildern werden 3 nebeneinander aufgehängt. Wie viele Möglichkeiten gibt es?",
   "o": [
    "$21$",
    "$35$",
    "$343$",
    "$210$"
   ],
   "a": 3,
   "e": "Die Reihenfolge zählt, und niemand kommt doppelt vor: $7\\cdot6\\cdot5=210$.",
   "typ": "Auswahl mit Reihenfolge"
  },
  {
   "id": "G9.8",
   "kap": 9,
   "th": "Stochastik",
   "q": "5 Freunde setzen sich nebeneinander auf eine Bank. Wie viele Reihenfolgen gibt es?",
   "o": [
    "$120$",
    "$15$",
    "$32$",
    "$25$"
   ],
   "a": 0,
   "e": "Alle 5 anordnen: $5!=5\\cdot4\\cdot3\\cdot2\\cdot1=120$. Für den ersten Platz gibt es 5 Möglichkeiten, für den zweiten noch 4 und so weiter.",
   "typ": "Anordnen"
  },
  {
   "id": "G9.9",
   "kap": 9,
   "th": "Stochastik",
   "q": "6 verschiedene Lieder werden in einer Playlist angeordnet. Wie viele Reihenfolgen gibt es?",
   "o": [
    "$36$",
    "$21$",
    "$720$",
    "$64$"
   ],
   "a": 2,
   "e": "Alle 6 anordnen: $6!=6\\cdot5\\cdot4\\cdot3\\cdot2\\cdot1=720$. Für den ersten Platz gibt es 6 Möglichkeiten, für den zweiten noch 5 und so weiter.",
   "typ": "Anordnen"
  },
  {
   "id": "G9.10",
   "kap": 9,
   "th": "Stochastik",
   "q": "Die Buchstaben A, B und C werden angeordnet. Wie viele Reihenfolgen gibt es?",
   "o": [
    "$6$",
    "$9$",
    "$27$",
    "$8$"
   ],
   "a": 0,
   "e": "Alle 3 anordnen: $3!=3\\cdot2\\cdot1=6$. Für den ersten Platz gibt es 3 Möglichkeiten, für den zweiten noch 2 und so weiter.",
   "typ": "Anordnen"
  },
  {
   "id": "G9.11",
   "kap": 9,
   "th": "Stochastik",
   "q": "Ein Würfel wird dreimal geworfen. Wie viele verschiedene Ergebnisfolgen gibt es?",
   "o": [
    "$729$",
    "$216$",
    "$84$",
    "$18$"
   ],
   "a": 1,
   "e": "Jeder der 3 Schritte hat 6 Möglichkeiten, Wiederholung ist erlaubt: $6^{3}=216$.",
   "typ": "Mit Wiederholung"
  },
  {
   "id": "G9.12",
   "kap": 9,
   "th": "Stochastik",
   "q": "Eine Münze wird fünfmal geworfen. Wie viele verschiedene Folgen aus Kopf und Zahl gibt es?",
   "o": [
    "$21$",
    "$32$",
    "$25$",
    "$10$"
   ],
   "a": 1,
   "e": "Jeder der 5 Schritte hat 2 Möglichkeiten, Wiederholung ist erlaubt: $2^{5}=32$.",
   "typ": "Mit Wiederholung"
  },
  {
   "id": "G9.13",
   "kap": 9,
   "th": "Stochastik",
   "q": "Ein Kürzel besteht aus 2 Buchstaben (26 stehen zur Wahl, Wiederholung erlaubt). Wie viele Kürzel gibt es?",
   "o": [
    "$52$",
    "$378$",
    "$67108864$",
    "$676$"
   ],
   "a": 3,
   "e": "Jeder der 2 Schritte hat 26 Möglichkeiten, Wiederholung ist erlaubt: $26^{2}=676$.",
   "typ": "Mit Wiederholung"
  },
  {
   "id": "G9.14",
   "kap": 9,
   "th": "Stochastik",
   "q": "Berechne $\\dfrac{7!}{5!}$.",
   "o": [
    "$2$",
    "$\\dfrac{7}{5}$",
    "$35$",
    "$42$"
   ],
   "a": 3,
   "e": "Ausschreiben und kürzen: Von $7!$ bleibt nur $7\\cdot6=42$ übrig.",
   "typ": "Anordnen"
  },
  {
   "id": "G9.15",
   "kap": 9,
   "th": "Stochastik",
   "q": "Berechne $\\dfrac{8!}{6!}$.",
   "o": [
    "$56$",
    "$2$",
    "$\\dfrac{4}{3}$",
    "$48$"
   ],
   "a": 0,
   "e": "Ausschreiben und kürzen: Von $8!$ bleibt nur $8\\cdot7=56$ übrig.",
   "typ": "Anordnen"
  },
  {
   "id": "G9.16",
   "kap": 9,
   "th": "Stochastik",
   "q": "Berechne $\\dfrac{5!}{3!}$.",
   "o": [
    "$15$",
    "$20$",
    "$2$",
    "$\\dfrac{5}{3}$"
   ],
   "a": 1,
   "e": "Ausschreiben und kürzen: Von $5!$ bleibt nur $5\\cdot4=20$ übrig.",
   "typ": "Anordnen"
  },
  {
   "id": "G9.17",
   "kap": 9,
   "th": "Stochastik",
   "q": "Ein Spiel kostet 2 € Einsatz. Dann gilt: mit Wahrscheinlichkeit $0{,}25$ werden 4 € ausgezahlt, mit Wahrscheinlichkeit $0{,}25$ werden 2 € ausgezahlt, sonst nichts. Was gilt für den erwarteten Gewinn pro Spiel?",
   "o": [
    "0,50 € Verlust",
    "0 € (faires Spiel)",
    "1,50 € Gewinn",
    "0,50 € Gewinn"
   ],
   "a": 0,
   "e": "Erwartete Auszahlung: $0{,}25\\cdot4+0{,}25\\cdot2=1{,}5$ €. Minus 2 € Einsatz ergibt $-0{,}5$ €.",
   "typ": "Erwartungswert"
  },
  {
   "id": "G9.18",
   "kap": 9,
   "th": "Stochastik",
   "q": "Ein Spiel kostet 3 € Einsatz. Dann gilt: mit Wahrscheinlichkeit $0{,}5$ werden 5 € ausgezahlt, mit Wahrscheinlichkeit $0{,}1$ werden 10 € ausgezahlt, sonst nichts. Was gilt für den erwarteten Gewinn pro Spiel?",
   "o": [
    "0,50 € Verlust",
    "0 € (faires Spiel)",
    "3,50 € Gewinn",
    "0,50 € Gewinn"
   ],
   "a": 3,
   "e": "Erwartete Auszahlung: $0{,}5\\cdot5+0{,}1\\cdot10=3{,}5$ €. Minus 3 € Einsatz ergibt $0{,}5$ €.",
   "typ": "Erwartungswert"
  },
  {
   "id": "G9.19",
   "kap": 9,
   "th": "Stochastik",
   "q": "Ein Spiel kostet 5 € Einsatz. Dann gilt: mit Wahrscheinlichkeit $0{,}2$ werden 20 € ausgezahlt, sonst nichts. Was gilt für den erwarteten Gewinn pro Spiel?",
   "o": [
    "0 € (faires Spiel)",
    "1 € Verlust",
    "1 € Gewinn",
    "4 € Gewinn"
   ],
   "a": 1,
   "e": "Erwartete Auszahlung: $0{,}2\\cdot20=4$ €. Minus 5 € Einsatz ergibt $-1$ €.",
   "typ": "Erwartungswert"
  },
  {
   "id": "G9.20",
   "kap": 9,
   "th": "Stochastik",
   "q": "Ein Spiel kostet 1 € Einsatz. Dann gilt: mit Wahrscheinlichkeit $0{,}1$ werden 10 € ausgezahlt, sonst nichts. Was gilt für den erwarteten Gewinn pro Spiel?",
   "o": [
    "2 € Gewinn",
    "1 € Gewinn",
    "0 € (faires Spiel)",
    "1 € Verlust"
   ],
   "a": 2,
   "e": "Erwartete Auszahlung: $0{,}1\\cdot10=1$ €. Minus 1 € Einsatz ergibt $0$ €.",
   "typ": "Erwartungswert"
  },
  {
   "id": "G9.21",
   "kap": 9,
   "th": "Stochastik",
   "q": "Eine Zufallsgröße $X$ nimmt die Werte aus der Tabelle an. Wie groß ist der Erwartungswert von $X$?",
   "o": [
    "$3$",
    "$0$",
    "$0{,}7$",
    "$1$"
   ],
   "a": 2,
   "e": "Jeden Wert mit seiner Wahrscheinlichkeit malnehmen und alles addieren: $0\\cdot0{,}5+1\\cdot0{,}3+2\\cdot0{,}2=0{,}7$.",
   "tabelle": [
    [
     "Wert",
     "0",
     "1",
     "2"
    ],
    [
     "Wahrscheinlichkeit",
     "0,5",
     "0,3",
     "0,2"
    ]
   ],
   "typ": "Erwartungswert"
  },
  {
   "id": "G9.22",
   "kap": 9,
   "th": "Stochastik",
   "q": "Eine Zufallsgröße $X$ nimmt die Werte aus der Tabelle an. Wie groß ist der Erwartungswert von $X$?",
   "o": [
    "$3$",
    "$2{,}5$",
    "$10$",
    "$4$"
   ],
   "a": 0,
   "e": "Jeden Wert mit seiner Wahrscheinlichkeit malnehmen und alles addieren: $1\\cdot0{,}1+2\\cdot0{,}2+3\\cdot0{,}3+4\\cdot0{,}4=3$.",
   "tabelle": [
    [
     "Wert",
     "1",
     "2",
     "3",
     "4"
    ],
    [
     "Wahrscheinlichkeit",
     "0,1",
     "0,2",
     "0,3",
     "0,4"
    ]
   ],
   "typ": "Erwartungswert"
  },
  {
   "id": "G9.23",
   "kap": 9,
   "th": "Stochastik",
   "q": "Eine Münze wird viermal geworfen. Wie wahrscheinlich ist genau einmal Kopf?",
   "o": [
    "$\\dfrac{1}{4}$",
    "$\\dfrac{3}{8}$",
    "$\\dfrac{1}{2}$",
    "$\\dfrac{1}{16}$"
   ],
   "a": 0,
   "e": "$n=4$, $k=1$, $p=\\tfrac12$: $\\binom{4}{1}\\cdot\\left(\\tfrac12\\right)^{4}=4\\cdot\\tfrac{1}{16}=\\tfrac{1}{4}$. Die $4$ zählt, an welchen Stellen Kopf fallen kann.",
   "typ": "Binomialverteilung"
  },
  {
   "id": "G9.24",
   "kap": 9,
   "th": "Stochastik",
   "q": "Eine Münze wird viermal geworfen. Wie wahrscheinlich ist genau dreimal Kopf?",
   "o": [
    "$\\dfrac{1}{2}$",
    "$\\dfrac{3}{4}$",
    "$\\dfrac{1}{4}$",
    "$\\dfrac{1}{16}$"
   ],
   "a": 2,
   "e": "$n=4$, $k=3$, $p=\\tfrac12$: $\\binom{4}{3}\\cdot\\left(\\tfrac12\\right)^{4}=4\\cdot\\tfrac{1}{16}=\\tfrac{1}{4}$. Die $4$ zählt, an welchen Stellen Kopf fallen kann.",
   "typ": "Binomialverteilung"
  },
  {
   "id": "G9.25",
   "kap": 9,
   "th": "Stochastik",
   "q": "Eine Münze wird fünfmal geworfen. Wie wahrscheinlich ist genau zweimal Kopf?",
   "o": [
    "$\\dfrac{2}{5}$",
    "$\\dfrac{1}{32}$",
    "$\\dfrac{5}{16}$",
    "$\\dfrac{5}{32}$"
   ],
   "a": 2,
   "e": "$n=5$, $k=2$, $p=\\tfrac12$: $\\binom{5}{2}\\cdot\\left(\\tfrac12\\right)^{5}=10\\cdot\\tfrac{1}{32}=\\tfrac{5}{16}$. Die $10$ zählt, an welchen Stellen Kopf fallen kann.",
   "typ": "Binomialverteilung"
  },
  {
   "id": "G9.26",
   "kap": 9,
   "th": "Stochastik",
   "q": "Eine Münze wird sechsmal geworfen. Wie wahrscheinlich ist genau dreimal Kopf?",
   "o": [
    "$\\dfrac{3}{32}$",
    "$\\dfrac{5}{16}$",
    "$\\dfrac{1}{2}$",
    "$\\dfrac{1}{64}$"
   ],
   "a": 1,
   "e": "$n=6$, $k=3$, $p=\\tfrac12$: $\\binom{6}{3}\\cdot\\left(\\tfrac12\\right)^{6}=20\\cdot\\tfrac{1}{64}=\\tfrac{5}{16}$. Die $20$ zählt, an welchen Stellen Kopf fallen kann.",
   "typ": "Binomialverteilung"
  },
  {
   "id": "G9.27",
   "kap": 9,
   "th": "Stochastik",
   "q": "Ein Glücksrad hat drei gleich große Felder, eines davon gewinnt. Es wird dreimal gedreht. Wie wahrscheinlich ist genau einmal Gewinn?",
   "o": [
    "$\\dfrac{4}{9}$",
    "$\\dfrac{4}{27}$",
    "$1$",
    "$\\dfrac{1}{3}$"
   ],
   "a": 0,
   "e": "$n=3$, $k=1$, $p=\\tfrac13$: $\\binom{3}{1}\\cdot\\left(\\tfrac13\\right)^{1}\\cdot\\left(\\tfrac23\\right)^{2}=\\tfrac{4}{9}$.",
   "typ": "Binomialverteilung"
  },
  {
   "id": "G9.28",
   "kap": 9,
   "th": "Stochastik",
   "q": "Ein Glücksrad hat drei gleich große Felder, eines davon gewinnt. Es wird dreimal gedreht. Wie wahrscheinlich ist genau zweimal Gewinn?",
   "o": [
    "$\\dfrac{2}{27}$",
    "$\\dfrac{2}{3}$",
    "$\\dfrac{1}{3}$",
    "$\\dfrac{2}{9}$"
   ],
   "a": 3,
   "e": "$n=3$, $k=2$, $p=\\tfrac13$: $\\binom{3}{2}\\cdot\\left(\\tfrac13\\right)^{2}\\cdot\\left(\\tfrac23\\right)^{1}=\\tfrac{2}{9}$.",
   "typ": "Binomialverteilung"
  },
  {
   "id": "G9.29",
   "kap": 9,
   "th": "Stochastik",
   "q": "Ein Glücksrad hat drei gleich große Felder, eines davon gewinnt. Es wird viermal gedreht. Wie wahrscheinlich ist genau keinmal Gewinn?",
   "o": [
    "$1$",
    "$\\dfrac{16}{81}$",
    "$0$",
    "$\\dfrac{65}{81}$"
   ],
   "a": 1,
   "e": "$n=4$, $k=0$, $p=\\tfrac13$: $\\binom{4}{0}\\cdot\\left(\\tfrac13\\right)^{0}\\cdot\\left(\\tfrac23\\right)^{4}=\\tfrac{16}{81}$.",
   "typ": "Binomialverteilung"
  },
  {
   "id": "G9.30",
   "kap": 9,
   "th": "Stochastik",
   "q": "$X$ ist binomialverteilt mit $n=64$ und $p=0{,}5$. Welche Werte haben $\\mu$ und $\\sigma$?",
   "o": [
    "$\\mu=32,\\;\\sigma=4$",
    "$\\mu=32,\\;\\sigma=6$",
    "$\\mu=32,\\;\\sigma=8$",
    "$\\mu=32,\\;\\sigma=16$"
   ],
   "a": 0,
   "e": "$\\mu=n\\cdot p=32$. $\\sigma^2=n\\cdot p\\cdot(1-p)=16$, am Ende noch die Wurzel: $\\sigma=4$.",
   "typ": "Binomialverteilung"
  },
  {
   "id": "G9.31",
   "kap": 9,
   "th": "Stochastik",
   "q": "$X$ ist binomialverteilt mit $n=100$ und $p=0{,}1$. Welche Werte haben $\\mu$ und $\\sigma$?",
   "o": [
    "$\\mu=10,\\;\\sigma=6$",
    "$\\mu=10,\\;\\sigma=9$",
    "$\\mu=90,\\;\\sigma=3$",
    "$\\mu=10,\\;\\sigma=3$"
   ],
   "a": 3,
   "e": "$\\mu=n\\cdot p=10$. $\\sigma^2=n\\cdot p\\cdot(1-p)=9$, am Ende noch die Wurzel: $\\sigma=3$.",
   "typ": "Binomialverteilung"
  },
  {
   "id": "G9.32",
   "kap": 9,
   "th": "Stochastik",
   "q": "$X$ ist binomialverteilt mit $n=400$ und $p=0{,}5$. Welche Werte haben $\\mu$ und $\\sigma$?",
   "o": [
    "$\\mu=200,\\;\\sigma=20$",
    "$\\mu=200,\\;\\sigma=10$",
    "$\\mu=200,\\;\\sigma=12$",
    "$\\mu=200,\\;\\sigma=100$"
   ],
   "a": 1,
   "e": "$\\mu=n\\cdot p=200$. $\\sigma^2=n\\cdot p\\cdot(1-p)=100$, am Ende noch die Wurzel: $\\sigma=10$.",
   "typ": "Binomialverteilung"
  },
  {
   "id": "G9.33",
   "kap": 9,
   "th": "Stochastik",
   "q": "$X$ ist binomialverteilt mit $n=225$ und $p=0{,}2$. Welche Werte haben $\\mu$ und $\\sigma$?",
   "o": [
    "$\\mu=45,\\;\\sigma=12$",
    "$\\mu=45,\\;\\sigma=36$",
    "$\\mu=45,\\;\\sigma=6$",
    "$\\mu=180,\\;\\sigma=6$"
   ],
   "a": 2,
   "e": "$\\mu=n\\cdot p=45$. $\\sigma^2=n\\cdot p\\cdot(1-p)=36$, am Ende noch die Wurzel: $\\sigma=6$.",
   "typ": "Binomialverteilung"
  },
  {
   "id": "G9.34",
   "kap": 9,
   "th": "Stochastik",
   "q": "$X$ ist binomialverteilt mit $n=150$ und $p=0{,}4$. Welche Werte haben $\\mu$ und $\\sigma$?",
   "o": [
    "$\\mu=60,\\;\\sigma=36$",
    "$\\mu=60,\\;\\sigma=12$",
    "$\\mu=90,\\;\\sigma=6$",
    "$\\mu=60,\\;\\sigma=6$"
   ],
   "a": 3,
   "e": "$\\mu=n\\cdot p=60$. $\\sigma^2=n\\cdot p\\cdot(1-p)=36$, am Ende noch die Wurzel: $\\sigma=6$.",
   "typ": "Binomialverteilung"
  },
  {
   "id": "G9.35",
   "kap": 9,
   "th": "Stochastik",
   "q": "Ein Test hat 40 Fragen mit je 4 Antworten, von denen eine stimmt. Jemand rät bei allen Fragen. Wie viele richtige Antworten sind zu erwarten?",
   "o": [
    "$10$",
    "$4$",
    "$30$",
    "$20$"
   ],
   "a": 0,
   "e": "Erwartungswert $\\mu=n\\cdot p=40\\cdot\\tfrac1{4}=10$.",
   "typ": "Binomialverteilung"
  },
  {
   "id": "G9.36",
   "kap": 9,
   "th": "Stochastik",
   "q": "Ein Würfel wird 30-mal geworfen. Wie oft ist die 6 zu erwarten?",
   "o": [
    "$25$",
    "$6$",
    "$15$",
    "$5$"
   ],
   "a": 3,
   "e": "Erwartungswert $\\mu=n\\cdot p=30\\cdot\\tfrac1{6}=5$.",
   "typ": "Binomialverteilung"
  },
  {
   "id": "G10.1",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Wie lang ist der Vektor $\\vec v=\\begin{pmatrix}1\\\\-2\\\\2\\end{pmatrix}$?",
   "o": [
    "$3$",
    "$5$",
    "$9$",
    "$\\sqrt{5}$"
   ],
   "a": 0,
   "e": "Alle Zahlen quadrieren, addieren, Wurzel ziehen: $\\sqrt{1+4+4}=\\sqrt{9}=3$. Das Minus verschwindet beim Quadrieren.",
   "typ": "Länge und Abstand"
  },
  {
   "id": "G10.2",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Wie lang ist der Vektor $\\vec v=\\begin{pmatrix}2\\\\3\\\\-6\\end{pmatrix}$?",
   "o": [
    "$7$",
    "$\\sqrt{11}$",
    "$11$",
    "$49$"
   ],
   "a": 0,
   "e": "Alle Zahlen quadrieren, addieren, Wurzel ziehen: $\\sqrt{4+9+36}=\\sqrt{49}=7$. Das Minus verschwindet beim Quadrieren.",
   "typ": "Länge und Abstand"
  },
  {
   "id": "G10.3",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Wie lang ist der Vektor $\\vec v=\\begin{pmatrix}4\\\\-4\\\\7\\end{pmatrix}$?",
   "o": [
    "$81$",
    "$9$",
    "$15$",
    "$\\sqrt{15}$"
   ],
   "a": 1,
   "e": "Alle Zahlen quadrieren, addieren, Wurzel ziehen: $\\sqrt{16+16+49}=\\sqrt{81}=9$. Das Minus verschwindet beim Quadrieren.",
   "typ": "Länge und Abstand"
  },
  {
   "id": "G10.4",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Wie lang ist der Vektor $\\vec v=\\begin{pmatrix}2\\\\6\\\\9\\end{pmatrix}$?",
   "o": [
    "$\\sqrt{17}$",
    "$17$",
    "$121$",
    "$11$"
   ],
   "a": 3,
   "e": "Alle Zahlen quadrieren, addieren, Wurzel ziehen: $\\sqrt{4+36+81}=\\sqrt{121}=11$. Das Minus verschwindet beim Quadrieren.",
   "typ": "Länge und Abstand"
  },
  {
   "id": "G10.5",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Wie lang ist der Vektor $\\vec v=\\begin{pmatrix}-1\\\\4\\\\8\\end{pmatrix}$?",
   "o": [
    "$81$",
    "$9$",
    "$13$",
    "$\\sqrt{13}$"
   ],
   "a": 1,
   "e": "Alle Zahlen quadrieren, addieren, Wurzel ziehen: $\\sqrt{1+16+64}=\\sqrt{81}=9$. Das Minus verschwindet beim Quadrieren.",
   "typ": "Länge und Abstand"
  },
  {
   "id": "G10.6",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Bestimme den Vektor $\\overrightarrow{AB}$ für $A(2\\,|\\,1\\,|\\,4)$ und $B(5\\,|\\,-3\\,|\\,6)$.",
   "o": [
    "$\\begin{pmatrix}\\tfrac{7}{2}\\\\-1\\\\5\\end{pmatrix}$",
    "$\\begin{pmatrix}-3\\\\4\\\\-2\\end{pmatrix}$",
    "$\\begin{pmatrix}3\\\\-4\\\\2\\end{pmatrix}$",
    "$\\begin{pmatrix}7\\\\-2\\\\10\\end{pmatrix}$"
   ],
   "a": 2,
   "e": "Spitze minus Fuß, also $B$ minus $A$, Zeile für Zeile: $5-2=3,\\ -3-1=-4,\\ 6-4=2$.",
   "typ": "Verbindungsvektor"
  },
  {
   "id": "G10.7",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Bestimme den Vektor $\\overrightarrow{AB}$ für $A(-1\\,|\\,0\\,|\\,3)$ und $B(2\\,|\\,2\\,|\\,-1)$.",
   "o": [
    "$\\begin{pmatrix}3\\\\2\\\\-4\\end{pmatrix}$",
    "$\\begin{pmatrix}-3\\\\-2\\\\4\\end{pmatrix}$",
    "$\\begin{pmatrix}1\\\\2\\\\2\\end{pmatrix}$",
    "$\\begin{pmatrix}\\tfrac{1}{2}\\\\1\\\\1\\end{pmatrix}$"
   ],
   "a": 0,
   "e": "Spitze minus Fuß, also $B$ minus $A$, Zeile für Zeile: $2-(-1)=3,\\ 2-0=2,\\ -1-3=-4$.",
   "typ": "Verbindungsvektor"
  },
  {
   "id": "G10.8",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Bestimme den Vektor $\\overrightarrow{AB}$ für $A(4\\,|\\,-2\\,|\\,0)$ und $B(1\\,|\\,3\\,|\\,5)$.",
   "o": [
    "$\\begin{pmatrix}\\tfrac{5}{2}\\\\\\tfrac{1}{2}\\\\\\tfrac{5}{2}\\end{pmatrix}$",
    "$\\begin{pmatrix}-3\\\\5\\\\5\\end{pmatrix}$",
    "$\\begin{pmatrix}3\\\\-5\\\\-5\\end{pmatrix}$",
    "$\\begin{pmatrix}5\\\\1\\\\5\\end{pmatrix}$"
   ],
   "a": 1,
   "e": "Spitze minus Fuß, also $B$ minus $A$, Zeile für Zeile: $1-4=-3,\\ 3-(-2)=5,\\ 5-0=5$.",
   "typ": "Verbindungsvektor"
  },
  {
   "id": "G10.9",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Wie weit sind $P(1\\,|\\,1\\,|\\,1)$ und $Q(3\\,|\\,4\\,|\\,7)$ voneinander entfernt?",
   "o": [
    "$49$",
    "$\\sqrt{11}$",
    "$7$",
    "$11$"
   ],
   "a": 2,
   "e": "Erst der Vektor dazwischen: $\\overrightarrow{PQ}=\\begin{pmatrix}2\\\\3\\\\6\\end{pmatrix}$. Dann seine Länge: $\\sqrt{4+9+36}=\\sqrt{49}=7$.",
   "typ": "Länge und Abstand"
  },
  {
   "id": "G10.10",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Wie weit sind $P(0\\,|\\,2\\,|\\,-1)$ und $Q(4\\,|\\,6\\,|\\,6)$ voneinander entfernt?",
   "o": [
    "$9$",
    "$\\sqrt{15}$",
    "$81$",
    "$15$"
   ],
   "a": 0,
   "e": "Erst der Vektor dazwischen: $\\overrightarrow{PQ}=\\begin{pmatrix}4\\\\4\\\\7\\end{pmatrix}$. Dann seine Länge: $\\sqrt{16+16+49}=\\sqrt{81}=9$.",
   "typ": "Länge und Abstand"
  },
  {
   "id": "G10.11",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Wie weit sind $P(2\\,|\\,-1\\,|\\,3)$ und $Q(4\\,|\\,5\\,|\\,12)$ voneinander entfernt?",
   "o": [
    "$121$",
    "$\\sqrt{17}$",
    "$17$",
    "$11$"
   ],
   "a": 3,
   "e": "Erst der Vektor dazwischen: $\\overrightarrow{PQ}=\\begin{pmatrix}2\\\\6\\\\9\\end{pmatrix}$. Dann seine Länge: $\\sqrt{4+36+81}=\\sqrt{121}=11$.",
   "typ": "Länge und Abstand"
  },
  {
   "id": "G10.12",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Bestimme den Mittelpunkt der Strecke zwischen $A(1\\,|\\,5\\,|\\,-2)$ und $B(3\\,|\\,-1\\,|\\,6)$.",
   "o": [
    "$M(2\\,|\\,2\\,|\\,2)$",
    "$M(1\\,|\\,-3\\,|\\,4)$",
    "$M(4\\,|\\,4\\,|\\,4)$",
    "$M(2\\,|\\,-6\\,|\\,8)$"
   ],
   "a": 0,
   "e": "Bei jeder Koordinate den Durchschnitt bilden: $\\tfrac{1+3}{2}=2,\\ \\tfrac{5+(-1)}{2}=2,\\ \\tfrac{-2+6}{2}=2$.",
   "typ": "Mittelpunkt"
  },
  {
   "id": "G10.13",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Bestimme den Mittelpunkt der Strecke zwischen $A(-4\\,|\\,2\\,|\\,0)$ und $B(2\\,|\\,8\\,|\\,4)$.",
   "o": [
    "$M(6\\,|\\,6\\,|\\,4)$",
    "$M(-2\\,|\\,10\\,|\\,4)$",
    "$M(-1\\,|\\,5\\,|\\,2)$",
    "$M(3\\,|\\,3\\,|\\,2)$"
   ],
   "a": 2,
   "e": "Bei jeder Koordinate den Durchschnitt bilden: $\\tfrac{-4+2}{2}=-1,\\ \\tfrac{2+8}{2}=5,\\ \\tfrac{0+4}{2}=2$.",
   "typ": "Mittelpunkt"
  },
  {
   "id": "G10.14",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Bestimme den Mittelpunkt der Strecke zwischen $A(0\\,|\\,0\\,|\\,6)$ und $B(8\\,|\\,-4\\,|\\,2)$.",
   "o": [
    "$M(4\\,|\\,-2\\,|\\,4)$",
    "$M(8\\,|\\,-4\\,|\\,-4)$",
    "$M(4\\,|\\,-2\\,|\\,-2)$",
    "$M(8\\,|\\,-4\\,|\\,8)$"
   ],
   "a": 0,
   "e": "Bei jeder Koordinate den Durchschnitt bilden: $\\tfrac{0+8}{2}=4,\\ \\tfrac{0+(-4)}{2}=-2,\\ \\tfrac{6+2}{2}=4$.",
   "typ": "Mittelpunkt"
  },
  {
   "id": "G10.15",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Berechne das Skalarprodukt $\\begin{pmatrix}1\\\\3\\\\-2\\end{pmatrix}\\cdot\\begin{pmatrix}4\\\\0\\\\5\\end{pmatrix}$.",
   "o": [
    "$18$",
    "$-4$",
    "$-6$",
    "$14$"
   ],
   "a": 2,
   "e": "Zeile für Zeile malnehmen und addieren: $4+0+(-10)=-6$. Das Ergebnis ist eine Zahl, kein Vektor.",
   "typ": "Skalarprodukt"
  },
  {
   "id": "G10.16",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Berechne das Skalarprodukt $\\begin{pmatrix}2\\\\-1\\\\4\\end{pmatrix}\\cdot\\begin{pmatrix}3\\\\2\\\\1\\end{pmatrix}$.",
   "o": [
    "$12$",
    "$0$",
    "$30$",
    "$8$"
   ],
   "a": 3,
   "e": "Zeile für Zeile malnehmen und addieren: $6+(-2)+4=8$. Das Ergebnis ist eine Zahl, kein Vektor.",
   "typ": "Skalarprodukt"
  },
  {
   "id": "G10.17",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Berechne das Skalarprodukt $\\begin{pmatrix}3\\\\-2\\\\2\\end{pmatrix}\\cdot\\begin{pmatrix}1\\\\4\\\\-1\\end{pmatrix}$.",
   "o": [
    "$-3$",
    "$12$",
    "$-7$",
    "$13$"
   ],
   "a": 2,
   "e": "Zeile für Zeile malnehmen und addieren: $3+(-8)+(-2)=-7$. Das Ergebnis ist eine Zahl, kein Vektor.",
   "typ": "Skalarprodukt"
  },
  {
   "id": "G10.18",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Für welches $a$ stehen $\\begin{pmatrix}a\\\\3\\\\4\\end{pmatrix}$ und $\\begin{pmatrix}1\\\\a\\\\-3\\end{pmatrix}$ senkrecht aufeinander?",
   "o": [
    "$a=4$",
    "$a=12$",
    "$a=-3$",
    "$a=3$"
   ],
   "a": 3,
   "e": "Senkrecht heißt Skalarprodukt null: $a+3a-12=0$, also $4a=12$ und $a=3$.",
   "typ": "Rechter Winkel"
  },
  {
   "id": "G10.19",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Für welches $a$ stehen $\\begin{pmatrix}a\\\\1\\\\5\\end{pmatrix}$ und $\\begin{pmatrix}4\\\\a\\\\1\\end{pmatrix}$ senkrecht aufeinander?",
   "o": [
    "$a=-5$",
    "$a=1$",
    "$a=-1$",
    "$a=0$"
   ],
   "a": 2,
   "e": "Senkrecht heißt Skalarprodukt null: $4a+a+5=0$, also $5a=-5$ und $a=-1$.",
   "typ": "Rechter Winkel"
  },
  {
   "id": "G10.20",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Für welches $a$ stehen $\\begin{pmatrix}a\\\\2\\\\4\\end{pmatrix}$ und $\\begin{pmatrix}2\\\\a\\\\-5\\end{pmatrix}$ senkrecht aufeinander?",
   "o": [
    "$a=6$",
    "$a=20$",
    "$a=5$",
    "$a=-5$"
   ],
   "a": 2,
   "e": "Senkrecht heißt Skalarprodukt null: $2a+2a-20=0$, also $4a=20$ und $a=5$.",
   "typ": "Rechter Winkel"
  },
  {
   "id": "G10.21",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Welcher Vektor ist orthogonal zu $\\begin{pmatrix}1\\\\-2\\\\3\\end{pmatrix}$?",
   "o": [
    "$\\begin{pmatrix}4\\\\-1\\\\-2\\end{pmatrix}$",
    "$\\begin{pmatrix}1\\\\2\\\\3\\end{pmatrix}$",
    "$\\begin{pmatrix}3\\\\0\\\\1\\end{pmatrix}$",
    "$\\begin{pmatrix}2\\\\1\\\\1\\end{pmatrix}$"
   ],
   "a": 0,
   "e": "Orthogonal heißt Skalarprodukt null. Für $\\begin{pmatrix}4\\\\-1\\\\-2\\end{pmatrix}$: $4+2+(-6)=0$. Bei den anderen kommt nicht null heraus.",
   "typ": "Rechter Winkel"
  },
  {
   "id": "G10.22",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Welcher Vektor ist orthogonal zu $\\begin{pmatrix}2\\\\2\\\\-1\\end{pmatrix}$?",
   "o": [
    "$\\begin{pmatrix}2\\\\-2\\\\1\\end{pmatrix}$",
    "$\\begin{pmatrix}1\\\\1\\\\4\\end{pmatrix}$",
    "$\\begin{pmatrix}-1\\\\2\\\\1\\end{pmatrix}$",
    "$\\begin{pmatrix}1\\\\1\\\\1\\end{pmatrix}$"
   ],
   "a": 1,
   "e": "Orthogonal heißt Skalarprodukt null. Für $\\begin{pmatrix}1\\\\1\\\\4\\end{pmatrix}$: $2+2+(-4)=0$. Bei den anderen kommt nicht null heraus.",
   "typ": "Rechter Winkel"
  },
  {
   "id": "G10.23",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Gegeben ist $g:\\ \\vec x=\\begin{pmatrix}1\\\\0\\\\2\\end{pmatrix}+t\\begin{pmatrix}2\\\\1\\\\-1\\end{pmatrix}$. Welcher Punkt gehört zu $t=3$?",
   "o": [
    "$(5\\,|\\,2\\,|\\,0)$",
    "$(5\\,|\\,1\\,|\\,5)$",
    "$(9\\,|\\,4\\,|\\,-2)$",
    "$(7\\,|\\,3\\,|\\,-1)$"
   ],
   "a": 3,
   "e": "$t=3$ einsetzen, Zeile für Zeile: $1+3\\cdot2=7,\\ 0+3\\cdot1=3,\\ 2+3\\cdot(-1)=-1$.",
   "typ": "Geraden im Raum"
  },
  {
   "id": "G10.24",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Gegeben ist $g:\\ \\vec x=\\begin{pmatrix}-2\\\\4\\\\1\\end{pmatrix}+t\\begin{pmatrix}1\\\\-2\\\\3\\end{pmatrix}$. Welcher Punkt gehört zu $t=2$?",
   "o": [
    "$(0\\,|\\,0\\,|\\,7)$",
    "$(-1\\,|\\,2\\,|\\,4)$",
    "$(1\\,|\\,-2\\,|\\,10)$",
    "$(-3\\,|\\,6\\,|\\,5)$"
   ],
   "a": 0,
   "e": "$t=2$ einsetzen, Zeile für Zeile: $-2+2\\cdot1=0,\\ 4+2\\cdot(-2)=0,\\ 1+2\\cdot3=7$.",
   "typ": "Geraden im Raum"
  },
  {
   "id": "G10.25",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Gegeben ist $g:\\ \\vec x=\\begin{pmatrix}3\\\\3\\\\0\\end{pmatrix}+t\\begin{pmatrix}-1\\\\2\\\\2\\end{pmatrix}$. Welcher Punkt gehört zu $t=-2$?",
   "o": [
    "$(-7\\,|\\,-4\\,|\\,2)$",
    "$(5\\,|\\,-1\\,|\\,-4)$",
    "$(4\\,|\\,1\\,|\\,-2)$",
    "$(6\\,|\\,-3\\,|\\,-6)$"
   ],
   "a": 1,
   "e": "$t=-2$ einsetzen, Zeile für Zeile: $3-2\\cdot(-1)=5,\\ 3-2\\cdot2=-1,\\ 0-2\\cdot2=-4$.",
   "typ": "Geraden im Raum"
  },
  {
   "id": "G10.26",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Für welchen Wert von $t$ liegt $P(6\\,|\\,-3\\,|\\,12)$ auf $g:\\ \\vec x=\\begin{pmatrix}2\\\\1\\\\0\\end{pmatrix}+t\\begin{pmatrix}1\\\\-1\\\\3\\end{pmatrix}$?",
   "o": [
    "$t=5$",
    "$t=3$",
    "$t=4$",
    "$P$ liegt nicht auf $g$"
   ],
   "a": 2,
   "e": "Erste Zeile: $2+t=6$ ergibt $t=4$. Probe: zweite Zeile $-3$, dritte Zeile $12$. Beides passt.",
   "typ": "Geraden im Raum"
  },
  {
   "id": "G10.27",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Für welchen Wert von $t$ liegt $P(6\\,|\\,2\\,|\\,1)$ auf $g:\\ \\vec x=\\begin{pmatrix}0\\\\5\\\\-2\\end{pmatrix}+t\\begin{pmatrix}2\\\\-1\\\\1\\end{pmatrix}$?",
   "o": [
    "$t=4$",
    "$t=3$",
    "$P$ liegt nicht auf $g$",
    "$t=2$"
   ],
   "a": 1,
   "e": "Erste Zeile: $0+2t=6$ ergibt $t=3$. Probe: zweite Zeile $2$, dritte Zeile $1$. Beides passt.",
   "typ": "Geraden im Raum"
  },
  {
   "id": "G10.28",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Für welchen Wert von $t$ liegt $P(5\\,|\\,4\\,|\\,2)$ auf $g:\\ \\vec x=\\begin{pmatrix}1\\\\2\\\\3\\end{pmatrix}+t\\begin{pmatrix}2\\\\1\\\\-1\\end{pmatrix}$?",
   "o": [
    "$P$ liegt nicht auf $g$",
    "$t=3$",
    "$t=1$",
    "$t=2$"
   ],
   "a": 0,
   "e": "Erste Zeile: $1+2t=5$ ergibt $t=2$. Probe in der dritten Zeile: $3+2\\cdot(-1)=1$, das ist nicht $2$. Der Punkt liegt nicht auf der Geraden.",
   "typ": "Geraden im Raum"
  },
  {
   "id": "G10.29",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Welche Gleichung beschreibt die Gerade durch $A(1\\,|\\,2\\,|\\,3)$ und $B(4\\,|\\,0\\,|\\,5)$?",
   "o": [
    "$\\vec x=\\begin{pmatrix}1\\\\2\\\\3\\end{pmatrix}+t\\begin{pmatrix}4\\\\0\\\\5\\end{pmatrix}$",
    "$\\vec x=\\begin{pmatrix}4\\\\0\\\\5\\end{pmatrix}+t\\begin{pmatrix}1\\\\2\\\\3\\end{pmatrix}$",
    "$\\vec x=\\begin{pmatrix}1\\\\2\\\\3\\end{pmatrix}+t\\begin{pmatrix}3\\\\-2\\\\2\\end{pmatrix}$",
    "$\\vec x=\\begin{pmatrix}1\\\\2\\\\3\\end{pmatrix}+t\\begin{pmatrix}5\\\\2\\\\8\\end{pmatrix}$"
   ],
   "a": 2,
   "e": "Stützvektor ist $A$. Richtungsvektor ist $B$ minus $A$: $\\begin{pmatrix}3\\\\-2\\\\2\\end{pmatrix}$. Der Punkt $B$ selbst ist kein Richtungsvektor.",
   "typ": "Geraden im Raum"
  },
  {
   "id": "G10.30",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Welche Gleichung beschreibt die Gerade durch $A(0\\,|\\,-1\\,|\\,2)$ und $B(3\\,|\\,3\\,|\\,3)$?",
   "o": [
    "$\\vec x=\\begin{pmatrix}0\\\\-1\\\\2\\end{pmatrix}+t\\begin{pmatrix}3\\\\2\\\\5\\end{pmatrix}$",
    "$\\vec x=\\begin{pmatrix}0\\\\-1\\\\2\\end{pmatrix}+t\\begin{pmatrix}3\\\\4\\\\1\\end{pmatrix}$",
    "$\\vec x=\\begin{pmatrix}3\\\\3\\\\3\\end{pmatrix}+t\\begin{pmatrix}0\\\\-1\\\\2\\end{pmatrix}$",
    "$\\vec x=\\begin{pmatrix}0\\\\-1\\\\2\\end{pmatrix}+t\\begin{pmatrix}3\\\\3\\\\3\\end{pmatrix}$"
   ],
   "a": 1,
   "e": "Stützvektor ist $A$. Richtungsvektor ist $B$ minus $A$: $\\begin{pmatrix}3\\\\4\\\\1\\end{pmatrix}$. Der Punkt $B$ selbst ist kein Richtungsvektor.",
   "typ": "Geraden im Raum"
  },
  {
   "id": "G10.31",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Welcher Vektor ist parallel zu $\\begin{pmatrix}1\\\\-2\\\\3\\end{pmatrix}$?",
   "o": [
    "$\\begin{pmatrix}3\\\\-2\\\\1\\end{pmatrix}$",
    "$\\begin{pmatrix}1\\\\2\\\\3\\end{pmatrix}$",
    "$\\begin{pmatrix}-2\\\\4\\\\-6\\end{pmatrix}$",
    "$\\begin{pmatrix}2\\\\4\\\\6\\end{pmatrix}$"
   ],
   "a": 2,
   "e": "Parallel heißt: ein Vielfaches. $\\begin{pmatrix}-2\\\\4\\\\-6\\end{pmatrix}$ ist $-2$ mal $\\begin{pmatrix}1\\\\-2\\\\3\\end{pmatrix}$, in allen drei Zeilen. Bei den anderen stimmt mindestens ein Vorzeichen nicht.",
   "typ": "Geraden im Raum"
  },
  {
   "id": "G10.32",
   "kap": 10,
   "th": "Vektoren und Matrizen",
   "q": "Welcher Vektor ist parallel zu $\\begin{pmatrix}4\\\\2\\\\-6\\end{pmatrix}$?",
   "o": [
    "$\\begin{pmatrix}2\\\\1\\\\-3\\end{pmatrix}$",
    "$\\begin{pmatrix}2\\\\1\\\\3\\end{pmatrix}$",
    "$\\begin{pmatrix}4\\\\2\\\\6\\end{pmatrix}$",
    "$\\begin{pmatrix}-4\\\\2\\\\6\\end{pmatrix}$"
   ],
   "a": 0,
   "e": "Parallel heißt: ein Vielfaches. $\\begin{pmatrix}2\\\\1\\\\-3\\end{pmatrix}$ ist $\\tfrac{1}{2}$ mal $\\begin{pmatrix}4\\\\2\\\\-6\\end{pmatrix}$, in allen drei Zeilen. Bei den anderen stimmt mindestens ein Vorzeichen nicht.",
   "typ": "Geraden im Raum"
  },
  {
   "id": "G11.1",
   "kap": 11,
   "th": "Vektoren und Matrizen",
   "q": "$A$ ist eine $3\\times2$-Matrix, $B$ eine $2\\times4$-Matrix. Welches Format hat $A\\cdot B$?",
   "o": [
    "$3\\times2$",
    "$3\\times4$",
    "$4\\times3$",
    "$2\\times2$"
   ],
   "a": 1,
   "e": "$(3\\times2)\\cdot(2\\times4)$: Die inneren Zahlen sind gleich (2), also geht es. Das Ergebnis hat die äußeren Zahlen: $3\\times4$.",
   "typ": "Format"
  },
  {
   "id": "G11.2",
   "kap": 11,
   "th": "Vektoren und Matrizen",
   "q": "$A$ ist eine $2\\times5$-Matrix, $B$ eine $5\\times3$-Matrix. Welches Format hat $A\\cdot B$?",
   "o": [
    "$2\\times3$",
    "$3\\times2$",
    "$2\\times5$",
    "$5\\times5$"
   ],
   "a": 0,
   "e": "$(2\\times5)\\cdot(5\\times3)$: Die inneren Zahlen sind gleich (5), also geht es. Das Ergebnis hat die äußeren Zahlen: $2\\times3$.",
   "typ": "Format"
  },
  {
   "id": "G11.3",
   "kap": 11,
   "th": "Vektoren und Matrizen",
   "q": "$A$ ist eine $1\\times3$-Matrix, $B$ eine $3\\times3$-Matrix. Welches Format hat $A\\cdot B$?",
   "o": [
    "$3\\times1$",
    "$3\\times3$",
    "$1\\times3$",
    "nicht definiert"
   ],
   "a": 2,
   "e": "$(1\\times3)\\cdot(3\\times3)$: Die inneren Zahlen sind gleich (3), also geht es. Das Ergebnis hat die äußeren Zahlen: $1\\times3$.",
   "typ": "Format"
  },
  {
   "id": "G11.4",
   "kap": 11,
   "th": "Vektoren und Matrizen",
   "q": "$A$ ist eine $4\\times1$-Matrix, $B$ eine $1\\times2$-Matrix. Welches Format hat $A\\cdot B$?",
   "o": [
    "$1\\times1$",
    "$4\\times2$",
    "$4\\times1$",
    "$2\\times4$"
   ],
   "a": 1,
   "e": "$(4\\times1)\\cdot(1\\times2)$: Die inneren Zahlen sind gleich (1), also geht es. Das Ergebnis hat die äußeren Zahlen: $4\\times2$.",
   "typ": "Format"
  },
  {
   "id": "G11.5",
   "kap": 11,
   "th": "Vektoren und Matrizen",
   "q": "$A$ ist eine $2\\times3$-Matrix, $B$ eine $2\\times3$-Matrix. Welches Format hat $A\\cdot B$?",
   "o": [
    "$3\\times2$",
    "nicht definiert",
    "$2\\times2$",
    "$2\\times3$"
   ],
   "a": 1,
   "e": "$(2\\times3)\\cdot(2\\times3)$: Die inneren Zahlen 3 und 2 sind verschieden. Das Produkt gibt es nicht.",
   "typ": "Format"
  },
  {
   "id": "G11.6",
   "kap": 11,
   "th": "Vektoren und Matrizen",
   "q": "$A$ ist eine $3\\times2$-Matrix, $B$ eine $3\\times3$-Matrix. Welches Format hat $A\\cdot B$?",
   "o": [
    "nicht definiert",
    "$3\\times2$",
    "$2\\times3$",
    "$3\\times3$"
   ],
   "a": 0,
   "e": "$(3\\times2)\\cdot(3\\times3)$: Die inneren Zahlen 2 und 3 sind verschieden. Das Produkt gibt es nicht.",
   "typ": "Format"
  },
  {
   "id": "G11.7",
   "kap": 11,
   "th": "Vektoren und Matrizen",
   "q": "Berechne $\\begin{pmatrix}2&1\\\\0&3\\end{pmatrix}\\cdot\\begin{pmatrix}1\\\\4\\end{pmatrix}$.",
   "o": [
    "$\\begin{pmatrix}3\\\\3\\end{pmatrix}$",
    "$\\begin{pmatrix}6\\\\12\\end{pmatrix}$",
    "$\\begin{pmatrix}2\\\\13\\end{pmatrix}$",
    "$\\begin{pmatrix}2\\\\12\\end{pmatrix}$"
   ],
   "a": 1,
   "e": "Zeile mal Spalte: oben $2\\cdot1+1\\cdot4=6$, unten $0\\cdot1+3\\cdot4=12$.",
   "typ": "Matrix mal Vektor"
  },
  {
   "id": "G11.8",
   "kap": 11,
   "th": "Vektoren und Matrizen",
   "q": "Berechne $\\begin{pmatrix}1&-2\\\\3&1\\end{pmatrix}\\cdot\\begin{pmatrix}2\\\\1\\end{pmatrix}$.",
   "o": [
    "$\\begin{pmatrix}2\\\\1\\end{pmatrix}$",
    "$\\begin{pmatrix}0\\\\7\\end{pmatrix}$",
    "$\\begin{pmatrix}-1\\\\4\\end{pmatrix}$",
    "$\\begin{pmatrix}5\\\\-3\\end{pmatrix}$"
   ],
   "a": 1,
   "e": "Zeile mal Spalte: oben $1\\cdot2+(-2)\\cdot1=0$, unten $3\\cdot2+1\\cdot1=7$.",
   "typ": "Matrix mal Vektor"
  },
  {
   "id": "G11.9",
   "kap": 11,
   "th": "Vektoren und Matrizen",
   "q": "Berechne $\\begin{pmatrix}0&5\\\\2&-1\\end{pmatrix}\\cdot\\begin{pmatrix}3\\\\2\\end{pmatrix}$.",
   "o": [
    "$\\begin{pmatrix}0\\\\-2\\end{pmatrix}$",
    "$\\begin{pmatrix}10\\\\4\\end{pmatrix}$",
    "$\\begin{pmatrix}5\\\\1\\end{pmatrix}$",
    "$\\begin{pmatrix}4\\\\13\\end{pmatrix}$"
   ],
   "a": 1,
   "e": "Zeile mal Spalte: oben $0\\cdot3+5\\cdot2=10$, unten $2\\cdot3+(-1)\\cdot2=4$.",
   "typ": "Matrix mal Vektor"
  },
  {
   "id": "G11.10",
   "kap": 11,
   "th": "Vektoren und Matrizen",
   "q": "Berechne $\\begin{pmatrix}4&0\\\\1&2\\end{pmatrix}\\cdot\\begin{pmatrix}-1\\\\3\\end{pmatrix}$.",
   "o": [
    "$\\begin{pmatrix}-4\\\\6\\end{pmatrix}$",
    "$\\begin{pmatrix}4\\\\3\\end{pmatrix}$",
    "$\\begin{pmatrix}-1\\\\6\\end{pmatrix}$",
    "$\\begin{pmatrix}-4\\\\5\\end{pmatrix}$"
   ],
   "a": 3,
   "e": "Zeile mal Spalte: oben $4\\cdot(-1)+0\\cdot3=-4$, unten $1\\cdot(-1)+2\\cdot3=5$.",
   "typ": "Matrix mal Vektor"
  },
  {
   "id": "G11.11",
   "kap": 11,
   "th": "Vektoren und Matrizen",
   "q": "Berechne $\\begin{pmatrix}1&2\\\\3&0\\end{pmatrix}\\cdot\\begin{pmatrix}2&1\\\\1&4\\end{pmatrix}$.",
   "o": [
    "$\\begin{pmatrix}5&4\\\\13&2\\end{pmatrix}$",
    "$\\begin{pmatrix}4&9\\\\6&3\\end{pmatrix}$",
    "$\\begin{pmatrix}2&2\\\\3&0\\end{pmatrix}$",
    "$\\begin{pmatrix}3&3\\\\4&4\\end{pmatrix}$"
   ],
   "a": 1,
   "e": "Zeile mal Spalte. Oben links: $1\\cdot2+2\\cdot1=4$. Unten rechts: $3\\cdot1+0\\cdot4=3$. Feld für Feld malnehmen wäre falsch.",
   "typ": "Matrix mal Matrix"
  },
  {
   "id": "G11.12",
   "kap": 11,
   "th": "Vektoren und Matrizen",
   "q": "Berechne $\\begin{pmatrix}2&0\\\\1&1\\end{pmatrix}\\cdot\\begin{pmatrix}1&3\\\\0&2\\end{pmatrix}$.",
   "o": [
    "$\\begin{pmatrix}2&0\\\\0&2\\end{pmatrix}$",
    "$\\begin{pmatrix}5&3\\\\2&2\\end{pmatrix}$",
    "$\\begin{pmatrix}3&3\\\\1&3\\end{pmatrix}$",
    "$\\begin{pmatrix}2&6\\\\1&5\\end{pmatrix}$"
   ],
   "a": 3,
   "e": "Zeile mal Spalte. Oben links: $2\\cdot1+0\\cdot0=2$. Unten rechts: $1\\cdot3+1\\cdot2=5$. Feld für Feld malnehmen wäre falsch.",
   "typ": "Matrix mal Matrix"
  },
  {
   "id": "G11.13",
   "kap": 11,
   "th": "Vektoren und Matrizen",
   "q": "Berechne $\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}\\cdot\\begin{pmatrix}5&6\\\\7&8\\end{pmatrix}$.",
   "o": [
    "$\\begin{pmatrix}5&7\\\\8&8\\end{pmatrix}$",
    "$\\begin{pmatrix}7&8\\\\5&6\\end{pmatrix}$",
    "$\\begin{pmatrix}6&5\\\\8&7\\end{pmatrix}$",
    "$\\begin{pmatrix}0&6\\\\7&0\\end{pmatrix}$"
   ],
   "a": 1,
   "e": "Zeile mal Spalte. Oben links: $0\\cdot5+1\\cdot7=7$. Unten rechts: $1\\cdot6+0\\cdot8=6$. Feld für Feld malnehmen wäre falsch.",
   "typ": "Matrix mal Matrix"
  },
  {
   "id": "G11.14",
   "kap": 11,
   "th": "Vektoren und Matrizen",
   "q": "Berechne $\\begin{pmatrix}1&-1\\\\2&3\\end{pmatrix}\\cdot\\begin{pmatrix}4&0\\\\1&2\\end{pmatrix}$.",
   "o": [
    "$\\begin{pmatrix}4&0\\\\2&6\\end{pmatrix}$",
    "$\\begin{pmatrix}3&-2\\\\11&6\\end{pmatrix}$",
    "$\\begin{pmatrix}5&-1\\\\3&5\\end{pmatrix}$",
    "$\\begin{pmatrix}4&-4\\\\5&5\\end{pmatrix}$"
   ],
   "a": 1,
   "e": "Zeile mal Spalte. Oben links: $1\\cdot4+(-1)\\cdot1=3$. Unten rechts: $2\\cdot0+3\\cdot2=6$. Feld für Feld malnehmen wäre falsch.",
   "typ": "Matrix mal Matrix"
  },
  {
   "id": "G11.15",
   "kap": 11,
   "th": "Vektoren und Matrizen",
   "q": "Berechne $\\begin{pmatrix}1&0\\\\2&3\\end{pmatrix}+3\\cdot\\begin{pmatrix}2&1\\\\0&1\\end{pmatrix}$.",
   "o": [
    "$\\begin{pmatrix}9&3\\\\6&12\\end{pmatrix}$",
    "$\\begin{pmatrix}5&1\\\\6&10\\end{pmatrix}$",
    "$\\begin{pmatrix}7&3\\\\2&6\\end{pmatrix}$",
    "$\\begin{pmatrix}3&1\\\\2&4\\end{pmatrix}$"
   ],
   "a": 2,
   "e": "Erst vervielfachen: $3\\cdot\\begin{pmatrix}2&1\\\\0&1\\end{pmatrix}=\\begin{pmatrix}6&3\\\\0&3\\end{pmatrix}$. Dann Feld für Feld addieren.",
   "typ": "Addieren und Vervielfachen"
  },
  {
   "id": "G11.16",
   "kap": 11,
   "th": "Vektoren und Matrizen",
   "q": "Berechne $\\begin{pmatrix}4&-2\\\\1&5\\end{pmatrix}+2\\cdot\\begin{pmatrix}1&1\\\\-1&2\\end{pmatrix}$.",
   "o": [
    "$\\begin{pmatrix}5&-1\\\\0&7\\end{pmatrix}$",
    "$\\begin{pmatrix}10&-2\\\\0&14\\end{pmatrix}$",
    "$\\begin{pmatrix}9&-3\\\\1&12\\end{pmatrix}$",
    "$\\begin{pmatrix}6&0\\\\-1&9\\end{pmatrix}$"
   ],
   "a": 3,
   "e": "Erst vervielfachen: $2\\cdot\\begin{pmatrix}1&1\\\\-1&2\\end{pmatrix}=\\begin{pmatrix}2&2\\\\-2&4\\end{pmatrix}$. Dann Feld für Feld addieren.",
   "typ": "Addieren und Vervielfachen"
  },
  {
   "id": "G11.17",
   "kap": 11,
   "th": "Vektoren und Matrizen",
   "q": "Berechne $\\begin{pmatrix}5&4\\\\3&6\\end{pmatrix}-2\\cdot\\begin{pmatrix}1&2\\\\0&3\\end{pmatrix}$.",
   "o": [
    "$\\begin{pmatrix}9&6\\\\6&9\\end{pmatrix}$",
    "$\\begin{pmatrix}4&2\\\\3&3\\end{pmatrix}$",
    "$\\begin{pmatrix}8&4\\\\6&6\\end{pmatrix}$",
    "$\\begin{pmatrix}3&0\\\\3&0\\end{pmatrix}$"
   ],
   "a": 3,
   "e": "Erst vervielfachen: $2\\cdot\\begin{pmatrix}1&2\\\\0&3\\end{pmatrix}=\\begin{pmatrix}2&4\\\\0&6\\end{pmatrix}$. Dann Feld für Feld abziehen.",
   "typ": "Addieren und Vervielfachen"
  },
  {
   "id": "G11.18",
   "kap": 11,
   "th": "Vektoren und Matrizen",
   "q": "Welche Zahl steht in Zeile 2, Spalte 1 von $\\begin{pmatrix}2&1\\\\3&4\\end{pmatrix}\\cdot\\begin{pmatrix}1&5\\\\2&0\\end{pmatrix}$?",
   "o": [
    "$4$",
    "$10$",
    "$11$",
    "$6$"
   ],
   "a": 2,
   "e": "Zeile 2 der linken Matrix mal Spalte 1 der rechten: $3\\cdot1+4\\cdot2=11$.",
   "typ": "Matrix mal Matrix"
  },
  {
   "id": "G11.19",
   "kap": 11,
   "th": "Vektoren und Matrizen",
   "q": "Welche Zahl steht in Zeile 2, Spalte 1 von $\\begin{pmatrix}1&0\\\\-2&3\\end{pmatrix}\\cdot\\begin{pmatrix}4&1\\\\2&2\\end{pmatrix}$?",
   "o": [
    "$1$",
    "$-4$",
    "$4$",
    "$-2$"
   ],
   "a": 3,
   "e": "Zeile 2 der linken Matrix mal Spalte 1 der rechten: $(-2)\\cdot4+3\\cdot2=-2$.",
   "typ": "Matrix mal Matrix"
  },
  {
   "id": "G11.20",
   "kap": 11,
   "th": "Vektoren und Matrizen",
   "q": "Zwei Gruppen entwickeln sich pro Jahr gemäß $\\vec v_{\\text{neu}}=M\\cdot\\vec v$ mit $M=\\begin{pmatrix}0{,}7&0{,}2\\\\0{,}3&0{,}8\\end{pmatrix}$ und Startbestand $\\vec v=\\begin{pmatrix}100\\\\400\\end{pmatrix}$. Wie sieht der Bestand nach einem Jahr aus?",
   "o": [
    "$\\begin{pmatrix}150\\\\350\\end{pmatrix}$",
    "$\\begin{pmatrix}100\\\\400\\end{pmatrix}$",
    "$\\begin{pmatrix}190\\\\340\\end{pmatrix}$",
    "$\\begin{pmatrix}350\\\\150\\end{pmatrix}$"
   ],
   "a": 0,
   "e": "Matrix mal Vektor, Zeile mal Spalte: oben $0{,}7\\cdot100+0{,}2\\cdot400=150$, unten $0{,}3\\cdot100+0{,}8\\cdot400=350$.",
   "typ": "Übergangsmatrix"
  },
  {
   "id": "G11.21",
   "kap": 11,
   "th": "Vektoren und Matrizen",
   "q": "Zwei Gruppen entwickeln sich pro Jahr gemäß $\\vec v_{\\text{neu}}=M\\cdot\\vec v$ mit $M=\\begin{pmatrix}0{,}6&0{,}1\\\\0{,}4&0{,}9\\end{pmatrix}$ und Startbestand $\\vec v=\\begin{pmatrix}500\\\\200\\end{pmatrix}$. Wie sieht der Bestand nach einem Jahr aus?",
   "o": [
    "$\\begin{pmatrix}500\\\\200\\end{pmatrix}$",
    "$\\begin{pmatrix}380\\\\230\\end{pmatrix}$",
    "$\\begin{pmatrix}380\\\\320\\end{pmatrix}$",
    "$\\begin{pmatrix}320\\\\380\\end{pmatrix}$"
   ],
   "a": 3,
   "e": "Matrix mal Vektor, Zeile mal Spalte: oben $0{,}6\\cdot500+0{,}1\\cdot200=320$, unten $0{,}4\\cdot500+0{,}9\\cdot200=380$.",
   "typ": "Übergangsmatrix"
  },
  {
   "id": "G11.22",
   "kap": 11,
   "th": "Vektoren und Matrizen",
   "q": "Ein Bestand $\\vec v$ verändert sich erst eine Woche nach Matrix $A$ und danach eine Woche nach Matrix $B$. Welcher Ausdruck beschreibt den Bestand am Ende?",
   "o": [
    "$(B-A)\\cdot\\vec v$",
    "$B\\cdot A\\cdot\\vec v$",
    "$(A+B)\\cdot\\vec v$",
    "$A\\cdot B\\cdot\\vec v$"
   ],
   "a": 1,
   "e": "Nacheinander heißt malnehmen. Gelesen wird von rechts nach links: Zuerst wirkt $A$ auf $\\vec v$, dann $B$ auf das Ergebnis. Also $B\\cdot(A\\cdot\\vec v)$.",
   "typ": "Bedeutung der Operationen"
  },
  {
   "id": "G11.23",
   "kap": 11,
   "th": "Vektoren und Matrizen",
   "q": "Was beschreibt der Ausdruck $P_2\\cdot P_1\\cdot\\vec v$?",
   "o": [
    "den Unterschied zwischen $P_1$ und $P_2$",
    "erst die Veränderung $P_2$, danach $P_1$",
    "beide Veränderungen gleichzeitig nebeneinander",
    "erst die Veränderung $P_1$, danach $P_2$"
   ],
   "a": 3,
   "e": "Matrixprodukte liest man von rechts nach links. Die Matrix direkt vor $\\vec v$ wirkt zuerst, also $P_1$, danach $P_2$.",
   "typ": "Bedeutung der Operationen"
  },
  {
   "id": "G11.24",
   "kap": 11,
   "th": "Vektoren und Matrizen",
   "q": "Ein Bestand $\\vec v$ entwickelt sich jedes Jahr nach derselben Matrix $M$. Welcher Ausdruck beschreibt den Bestand nach 3 Jahren?",
   "o": [
    "$M^3\\cdot\\vec v$",
    "$(M+3)\\cdot\\vec v$",
    "$M\\cdot\\vec v+3$",
    "$3\\cdot M\\cdot\\vec v$"
   ],
   "a": 0,
   "e": "Jedes Jahr wird $M$ einmal angewendet, dreimal hintereinander: $M\\cdot M\\cdot M\\cdot\\vec v=M^3\\cdot\\vec v$. Das Dreifache $3M$ wäre etwas anderes.",
   "typ": "Bedeutung der Operationen"
  },
  {
   "id": "G11.25",
   "kap": 11,
   "th": "Vektoren und Matrizen",
   "q": "Zwei Pflanzenarten mit demselben Startbestand $\\vec v$ entwickeln sich gleichzeitig und unabhängig voneinander, Art 1 nach Matrix $A$, Art 2 nach Matrix $B$. Was beschreibt den Gesamtbestand beider Arten nach einem Schritt?",
   "o": [
    "$A\\cdot B\\cdot\\vec v$",
    "$(A+B)\\cdot\\vec v$",
    "$(A-B)\\cdot\\vec v$",
    "$B\\cdot A\\cdot\\vec v$"
   ],
   "a": 1,
   "e": "Gleichzeitig und nebeneinander heißt: beide Ergebnisse addieren. $A\\cdot\\vec v+B\\cdot\\vec v=(A+B)\\cdot\\vec v$. Ein Produkt wäre nacheinander.",
   "typ": "Bedeutung der Operationen"
  },
  {
   "id": "G11.26",
   "kap": 11,
   "th": "Vektoren und Matrizen",
   "q": "Zwei Maßnahmen wirken auf denselben Bestand $\\vec v$, beschrieben durch $A$ und $B$. Welcher Ausdruck gibt an, um wie viel das Ergebnis von $A$ größer ist als das von $B$?",
   "o": [
    "$(B-A)\\cdot\\vec v$",
    "$(A-B)\\cdot\\vec v$",
    "$(A+B)\\cdot\\vec v$",
    "$A\\cdot B\\cdot\\vec v$"
   ],
   "a": 1,
   "e": "Unterschied heißt abziehen: $A\\cdot\\vec v-B\\cdot\\vec v=(A-B)\\cdot\\vec v$. Die Reihenfolge beim Minus zählt: Ergebnis von $A$ minus Ergebnis von $B$.",
   "typ": "Bedeutung der Operationen"
  },
  {
   "id": "G11.27",
   "kap": 11,
   "th": "Vektoren und Matrizen",
   "q": "$E$ ist die Einheitsmatrix, zum Beispiel $\\begin{pmatrix}1&0\\\\0&1\\end{pmatrix}$. Was gilt für $E\\cdot\\vec v$?",
   "o": [
    "$E\\cdot\\vec v=2\\vec v$",
    "$E\\cdot\\vec v=\\vec v$",
    "$E\\cdot\\vec v=\\vec 0$",
    "$E\\cdot\\vec v$ ist nicht definiert"
   ],
   "a": 1,
   "e": "Die Einheitsmatrix ändert nichts, sie wirkt wie die Zahl 1 beim Malnehmen.",
   "typ": "Bedeutung der Operationen"
  },
  {
   "id": "G11.28",
   "kap": 11,
   "th": "Vektoren und Matrizen",
   "q": "$M$ beschreibt die Veränderung eines Bestands von einem Jahr zum nächsten. Heute ist der Bestand $\\vec w$. Wie erhält man den Bestand des Vorjahres?",
   "o": [
    "$\\vec w-M$",
    "$M^{-1}\\cdot\\vec w$",
    "$-M\\cdot\\vec w$",
    "$M\\cdot\\vec w$"
   ],
   "a": 1,
   "e": "Die inverse Matrix $M^{-1}$ macht die Veränderung rückgängig, also einen Schritt zurück. $M\\cdot\\vec w$ wäre ein Jahr weiter in die Zukunft.",
   "typ": "Bedeutung der Operationen"
  },
  {
   "id": "G11.29",
   "kap": 11,
   "th": "Vektoren und Matrizen",
   "q": "Welche Aussage über Matrizen $A$ und $B$ ist richtig?",
   "o": [
    "$A\\cdot B=B\\cdot A$ gilt immer, wenn beide Produkte definiert sind",
    "$A\\cdot B=B\\cdot A$ gilt immer",
    "$A\\cdot B$ und $B\\cdot A$ sind meistens verschieden",
    "$A+B$ und $B+A$ sind meistens verschieden"
   ],
   "a": 2,
   "e": "Beim Malnehmen zählt die Reihenfolge: erst $A$, dann $B$ ist etwas anderes als umgekehrt. Beim Addieren ist die Reihenfolge dagegen egal.",
   "typ": "Bedeutung der Operationen"
  },
  {
   "id": "G11.30",
   "kap": 11,
   "th": "Vektoren und Matrizen",
   "q": "Wie verändert sich der Bestand $M\\cdot\\vec v$, wenn man statt $M$ die Matrix $2\\cdot M$ verwendet?",
   "o": [
    "Das Ergebnis ändert sich nicht",
    "Jeder Eintrag des Ergebnisses verdoppelt sich",
    "Nur der erste Eintrag verdoppelt sich",
    "Die Veränderung wird zweimal hintereinander ausgeführt"
   ],
   "a": 1,
   "e": "$(2M)\\cdot\\vec v=2\\cdot(M\\cdot\\vec v)$: Alles wird doppelt so groß. Zweimal hintereinander wäre $M^2\\cdot\\vec v$.",
   "typ": "Bedeutung der Operationen"
  },
  {
   "id": "G11.31",
   "kap": 11,
   "th": "Vektoren und Matrizen",
   "q": "Ein Bestand $\\vec v=\\begin{pmatrix}1\\\\2\\end{pmatrix}$ entwickelt sich pro Jahr nach $M=\\begin{pmatrix}2&0\\\\1&1\\end{pmatrix}$. Wie sieht der Bestand nach 2 Jahren aus?",
   "o": [
    "$\\begin{pmatrix}4\\\\5\\end{pmatrix}$",
    "$\\begin{pmatrix}4\\\\3\\end{pmatrix}$",
    "$\\begin{pmatrix}2\\\\3\\end{pmatrix}$",
    "$\\begin{pmatrix}4\\\\6\\end{pmatrix}$"
   ],
   "a": 0,
   "e": "Zwei Schritte nacheinander. Erst $M\\cdot\\vec v=\\begin{pmatrix}2\\\\3\\end{pmatrix}$, dann noch einmal $M$ darauf anwenden: $\\begin{pmatrix}2&0\\\\1&1\\end{pmatrix}\\cdot\\begin{pmatrix}2\\\\3\\end{pmatrix}=\\begin{pmatrix}4\\\\5\\end{pmatrix}$.",
   "typ": "Bedeutung der Operationen"
  },
  {
   "id": "G11.32",
   "kap": 11,
   "th": "Vektoren und Matrizen",
   "q": "Auf $\\vec v=\\begin{pmatrix}1\\\\1\\end{pmatrix}$ wird erst $A=\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$ und danach $B=\\begin{pmatrix}2&0\\\\0&1\\end{pmatrix}$ angewendet. Was kommt heraus?",
   "o": [
    "$\\begin{pmatrix}3\\\\1\\end{pmatrix}$",
    "$\\begin{pmatrix}4\\\\2\\end{pmatrix}$",
    "$\\begin{pmatrix}4\\\\1\\end{pmatrix}$",
    "$\\begin{pmatrix}2\\\\1\\end{pmatrix}$"
   ],
   "a": 2,
   "e": "Erst $A\\cdot\\vec v=\\begin{pmatrix}2\\\\1\\end{pmatrix}$, dann $B$ darauf: $\\begin{pmatrix}4\\\\1\\end{pmatrix}$. In der umgekehrten Reihenfolge käme $\\begin{pmatrix}3\\\\1\\end{pmatrix}$ heraus.",
   "typ": "Bedeutung der Operationen"
  },
  {
   "id": "C1",
   "kap": null,
   "th": "Analysis",
   "q": "Gegeben sind $f(x)=2x+3$ und $g(x)=x^{2}-1$. Berechne $f(g(4))$.",
   "o": [
    "$120$",
    "$165$",
    "$26$",
    "$33$"
   ],
   "a": 3,
   "e": "Von innen nach außen. Erst $g(4)=4^2-1=15$. Dann $f(15)=2\\cdot15+3=33$.",
   "typ": "Verkettung"
  },
  {
   "id": "C2",
   "kap": null,
   "th": "Analysis",
   "q": "Was ist der größtmögliche Definitionsbereich von $f(x)=\\sqrt{-2x+14}$?",
   "o": [
    "$x\\le-7$",
    "$x<7$",
    "$x\\le7$",
    "$x\\ge7$"
   ],
   "a": 2,
   "e": "Unter der Wurzel darf nichts Negatives stehen: $-2x+14\\ge0$, also $-2x\\ge-14$, und beim Teilen durch die negative Zahl dreht sich das Zeichen: $x\\le7$.",
   "typ": "Definitionsbereich"
  },
  {
   "id": "C3",
   "kap": null,
   "th": "Analysis",
   "q": "Welche Steigung hat der Graph von $f(x)=x^{3}-2x^{2}+x$ an der Stelle $x=3$?",
   "o": [
    "$14$",
    "$12$",
    "$16$",
    "$40$"
   ],
   "a": 2,
   "e": "Steigung heißt ableiten: $f'(x)=3x^{2}-4x+1$. Einsetzen: $f'(3)=16$. Nicht in $f$ einsetzen.",
   "typ": "Steigung an einer Stelle"
  },
  {
   "id": "C4",
   "kap": null,
   "th": "Analysis",
   "q": "Wie lautet die Gleichung der Tangente an $f(x)=x^{2}+2x$ an der Stelle $x=1$?",
   "o": [
    "$y=4x-1$",
    "$y=4x+3$",
    "$y=3x-1$",
    "$y=4x$"
   ],
   "a": 0,
   "e": "Steigung: $f'(x)=2x+2$, also $m=f'(1)=4$. Punkt: $f(1)=3$. Einsetzen in $y=mx+b$: $3=4\\cdot1+b$, also $b=-1$.",
   "typ": "Tangente"
  },
  {
   "id": "C5",
   "kap": null,
   "th": "Analysis",
   "q": "Bestimme den Extrempunkt von $f(x)=-x^{2}+8x-9$.",
   "o": [
    "$H(-4\\,|\\,7)$",
    "$T(4\\,|\\,7)$",
    "$H(4\\,|\\,-9)$",
    "$H(4\\,|\\,7)$"
   ],
   "a": 3,
   "e": "$f'(x)=-2x+8=0$ ergibt $x=4$. $f''(x)=-2$ ist negativ: Hochpunkt. $y$-Wert mit $f$: $f(4)=7$.",
   "typ": "Hoch- und Tiefpunkte"
  },
  {
   "id": "C6",
   "kap": null,
   "th": "Analysis",
   "q": "Bestimme die Wendestelle von $f(x)=x^{3}-6x^{2}+5x$.",
   "o": [
    "$x=6$",
    "$x=2$",
    "$x=-2$",
    "$x=4$"
   ],
   "a": 1,
   "e": "Zweimal ableiten: $f'(x)=3x^{2}-12x+5$ und $f''(x)=6x-12$. Null setzen: $6x-12=0$ ergibt $x=2$.",
   "typ": "Wendepunkte"
  },
  {
   "id": "C7",
   "kap": null,
   "th": "Analysis",
   "q": "Berechne $\\displaystyle\\int_{1}^{3}\\left(3x^{2}-2x\\right)dx$.",
   "o": [
    "$18$",
    "$20$",
    "$17$",
    "$-18$"
   ],
   "a": 0,
   "e": "Stammfunktion: $F(x)=x^{3}-x^{2}$. Obere Grenze minus untere Grenze: $F(3)-F(1)=18-0=18$.",
   "typ": "Integral"
  },
  {
   "id": "C8",
   "kap": null,
   "th": "Analysis",
   "q": "Welche Symmetrie hat der Graph von $f(x)=3x^{5}-4x$?",
   "o": [
    "beide Symmetrien",
    "keine dieser Symmetrien",
    "Achsensymmetrie zur $y$-Achse",
    "Punktsymmetrie zum Ursprung"
   ],
   "a": 3,
   "e": "Nur ungerade Hochzahlen: Punktsymmetrie.",
   "typ": "Symmetrie"
  },
  {
   "id": "C9",
   "kap": null,
   "th": "Stochastik",
   "q": "Zwei Würfel werden geworfen. Wie wahrscheinlich ist die Augensumme 5?",
   "o": [
    "$\\dfrac{1}{12}$",
    "$\\dfrac{1}{9}$",
    "$\\dfrac{5}{36}$",
    "$\\dfrac{1}{6}$"
   ],
   "a": 1,
   "e": "Passende Paare zählen: $(1,4),(2,3),(3,2),(4,1)$. Das sind 4 von 36, also $\\tfrac{1}{9}$.",
   "typ": "Zwei Würfel"
  },
  {
   "id": "C10",
   "kap": null,
   "th": "Stochastik",
   "q": "In einer Urne liegen 3 rote und 7 blaue Kugeln. Es werden zwei Kugeln ohne Zurücklegen gezogen. Wie wahrscheinlich sind beide rot?",
   "o": [
    "$\\dfrac{3}{10}$",
    "$\\dfrac{9}{100}$",
    "$\\dfrac{1}{10}$",
    "$\\dfrac{1}{15}$"
   ],
   "a": 3,
   "e": "Entlang des Weges malnehmen. Erste Kugel rot: $\\tfrac{3}{10}$. Dann fehlt eine rote Kugel: $\\tfrac{2}{9}$. Zusammen $\\tfrac{3}{10}\\cdot\\tfrac{2}{9}=\\tfrac{1}{15}$.",
   "typ": "Urne"
  },
  {
   "id": "C11",
   "kap": null,
   "th": "Stochastik",
   "q": "Aus 9 Bewerberinnen werden 3 für ein Gespräch eingeladen. Wie viele Möglichkeiten gibt es?",
   "o": [
    "$729$",
    "$27$",
    "$84$",
    "$504$"
   ],
   "a": 2,
   "e": "Die Reihenfolge ist egal: $\\binom{9}{3}=\\dfrac{9\\cdot8\\cdot7}{3\\cdot2\\cdot1}=84$. Mit Reihenfolge wären es $504$.",
   "typ": "Auswahl ohne Reihenfolge"
  },
  {
   "id": "C12",
   "kap": null,
   "th": "Stochastik",
   "q": "Bei 8 Teams werden ein Sieger und ein Zweiter ermittelt. Wie viele Möglichkeiten gibt es?",
   "o": [
    "$28$",
    "$64$",
    "$16$",
    "$56$"
   ],
   "a": 3,
   "e": "Die Reihenfolge zählt, und niemand kommt doppelt vor: $8\\cdot7=56$.",
   "typ": "Auswahl mit Reihenfolge"
  },
  {
   "id": "C13",
   "kap": null,
   "th": "Stochastik",
   "q": "Ein Spiel kostet 4 € Einsatz. Dann gilt: mit Wahrscheinlichkeit $0{,}25$ werden 8 € ausgezahlt, mit Wahrscheinlichkeit $0{,}5$ werden 2 € ausgezahlt, sonst nichts. Was gilt für den erwarteten Gewinn pro Spiel?",
   "o": [
    "3 € Gewinn",
    "1 € Verlust",
    "1 € Gewinn",
    "0 € (faires Spiel)"
   ],
   "a": 1,
   "e": "Erwartete Auszahlung: $0{,}25\\cdot8+0{,}5\\cdot2=3$ €. Minus 4 € Einsatz ergibt $-1$ €.",
   "typ": "Erwartungswert"
  },
  {
   "id": "C14",
   "kap": null,
   "th": "Stochastik",
   "q": "Eine Münze wird fünfmal geworfen. Wie wahrscheinlich ist genau dreimal Kopf?",
   "o": [
    "$\\dfrac{5}{32}$",
    "$\\dfrac{3}{5}$",
    "$\\dfrac{1}{32}$",
    "$\\dfrac{5}{16}$"
   ],
   "a": 3,
   "e": "$n=5$, $k=3$, $p=\\tfrac12$: $\\binom{5}{3}\\cdot\\left(\\tfrac12\\right)^{5}=10\\cdot\\tfrac{1}{32}=\\tfrac{5}{16}$. Die $10$ zählt, an welchen Stellen Kopf fallen kann.",
   "typ": "Binomialverteilung"
  },
  {
   "id": "C15",
   "kap": null,
   "th": "Stochastik",
   "q": "Aus den Zahlen 1 bis 40 wird eine zufällig gezogen. Wie wahrscheinlich ist sie durch 5 oder durch 8 teilbar?",
   "o": [
    "$\\dfrac{11}{40}$",
    "$\\dfrac{3}{10}$",
    "$\\dfrac{13}{40}$",
    "$\\dfrac{1}{40}$"
   ],
   "a": 1,
   "e": "8 Zahlen sind durch 5 teilbar, 5 durch 8. Doppelt gezählt ist die eine Zahl, die durch beides teilbar ist. Also $\\tfrac{8+5-1}{40}=\\tfrac{3}{10}$.",
   "typ": "Oder-Regel"
  },
  {
   "id": "C16",
   "kap": null,
   "th": "Vektoren und Matrizen",
   "q": "Wie weit sind $P(3\\,|\\,0\\,|\\,-2)$ und $Q(4\\,|\\,4\\,|\\,6)$ voneinander entfernt?",
   "o": [
    "$13$",
    "$\\sqrt{13}$",
    "$81$",
    "$9$"
   ],
   "a": 3,
   "e": "Erst der Vektor dazwischen: $\\overrightarrow{PQ}=\\begin{pmatrix}1\\\\4\\\\8\\end{pmatrix}$. Dann seine Länge: $\\sqrt{1+16+64}=\\sqrt{81}=9$.",
   "typ": "Länge und Abstand"
  },
  {
   "id": "C17",
   "kap": null,
   "th": "Vektoren und Matrizen",
   "q": "Für welches $a$ stehen $\\begin{pmatrix}a\\\\2\\\\3\\end{pmatrix}$ und $\\begin{pmatrix}1\\\\a\\\\-4\\end{pmatrix}$ senkrecht aufeinander?",
   "o": [
    "$a=12$",
    "$a=4$",
    "$a=-4$",
    "$a=5$"
   ],
   "a": 1,
   "e": "Senkrecht heißt Skalarprodukt null: $a+2a-12=0$, also $3a=12$ und $a=4$.",
   "typ": "Rechter Winkel"
  },
  {
   "id": "C18",
   "kap": null,
   "th": "Vektoren und Matrizen",
   "q": "Für welchen Wert von $t$ liegt $P(7\\,|\\,5\\,|\\,-4)$ auf $g:\\ \\vec x=\\begin{pmatrix}4\\\\-1\\\\2\\end{pmatrix}+t\\begin{pmatrix}1\\\\2\\\\-2\\end{pmatrix}$?",
   "o": [
    "$t=3$",
    "$t=2$",
    "$P$ liegt nicht auf $g$",
    "$t=4$"
   ],
   "a": 0,
   "e": "Erste Zeile: $4+t=7$ ergibt $t=3$. Probe: zweite Zeile $5$, dritte Zeile $-4$. Beides passt.",
   "typ": "Geraden im Raum"
  },
  {
   "id": "C19",
   "kap": null,
   "th": "Vektoren und Matrizen",
   "q": "$A$ ist eine $5\\times2$-Matrix, $B$ eine $2\\times3$-Matrix. Welches Format hat $A\\cdot B$?",
   "o": [
    "$2\\times2$",
    "$3\\times5$",
    "$5\\times2$",
    "$5\\times3$"
   ],
   "a": 3,
   "e": "$(5\\times2)\\cdot(2\\times3)$: Die inneren Zahlen sind gleich (2), also geht es. Das Ergebnis hat die äußeren Zahlen: $5\\times3$.",
   "typ": "Format"
  },
  {
   "id": "C20",
   "kap": null,
   "th": "Vektoren und Matrizen",
   "q": "Berechne $\\begin{pmatrix}3&1\\\\0&2\\end{pmatrix}\\cdot\\begin{pmatrix}1&2\\\\4&0\\end{pmatrix}$.",
   "o": [
    "$\\begin{pmatrix}4&3\\\\4&2\\end{pmatrix}$",
    "$\\begin{pmatrix}7&6\\\\8&0\\end{pmatrix}$",
    "$\\begin{pmatrix}3&5\\\\12&4\\end{pmatrix}$",
    "$\\begin{pmatrix}3&2\\\\0&0\\end{pmatrix}$"
   ],
   "a": 1,
   "e": "Zeile mal Spalte. Oben links: $3\\cdot1+1\\cdot4=7$. Unten rechts: $0\\cdot2+2\\cdot0=0$. Feld für Feld malnehmen wäre falsch.",
   "typ": "Matrix mal Matrix"
  }
 ],
 "probetests": [
  {
   "id": "pt1",
   "titel": "Probetest 1",
   "minuten": 23,
   "ids": [
    "B1",
    "B2",
    "B3",
    "B4",
    "B5",
    "B6",
    "B7",
    "B8",
    "B9",
    "B10",
    "B11",
    "B12",
    "B13",
    "B14",
    "B15",
    "B16",
    "B17",
    "B18",
    "B19",
    "B20"
   ]
  },
  {
   "id": "pt2",
   "titel": "Probetest 2",
   "minuten": 23,
   "ids": [
    "C14",
    "C19",
    "C5",
    "C16",
    "C17",
    "C1",
    "C9",
    "C18",
    "C4",
    "C7",
    "C8",
    "C3",
    "C15",
    "C12",
    "C10",
    "C11",
    "C20",
    "C13",
    "C6",
    "C2"
   ]
  }
 ]
};
