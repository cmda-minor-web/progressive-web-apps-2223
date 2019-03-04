# Opdrachten Week 1
Minor Web Development - Performance Matters

## Intentie
Deze week gaan we de client side OBA app ombouwen naar een server side versie. Hiervoor gebruiken we Node.js & Express. Daarnaast gaan we npm gebruiken als build tool en met CommonJS en Browserify optimalisatie doen voor performance.

## Werkwijze
Er is 12 uur ingeroosterd om deze week zelfstandig aan de opdrachten van dit vaak te werken. Probeer je werk goed te plannen! Tussentijds wordt in standup meetings en klassikale bijeenkomsten de voortgang gemonitord. Aan het eind van de week wordt je op theoretische kennis getoetst en op het begrip van de code die je volgens de opdrachten schrijft.

## Opdrachten
1. [Bouw de OBA App om naar een server side versie met Node.js & Express](https://github.com/cmda-minor-web/performance-matters-1819/blob/master/opdrachten-week-1.md#opdracht-1)
2. [Tooling: NPM, CommonJS & Browserify](https://github.com/cmda-minor-web/performance-matters-1819/blob/master/opdrachten-week-1.md#opdracht-2)
3. [Universal / Isomorphic app (extra)](https://github.com/cmda-minor-web/performance-matters-1819/blob/master/opdrachten-week-1.md#opdracht-3)

### Opdracht 1
Pas de Adamnet app aan naar een server side versie met Node.js & Express
Denk bij het aanpassen goed na over wat de MVP is van de Adamnet app. Over het algemeen is dat een overview page, met een lijstje met items die elk door linken naar een detail page. Zorg ervoor dat je eerst de HTML genereert vanaf de server, vervolgens kijk je in hoeverre je de CSS kan aanpassen, en tenslotte probeer je de app zoveel mogelijk te verbeteren met client side JavaScript. 
Fork deze repo, en werk daar je server side app uit: [...](...)
Documenteer in je readme.md hoe je de server draaiend krijgt; git clone && npm start  

Voorbeeld: 
[Express simpel server with api call example](https://github.com/wooorm/dictionary)

### Opdracht 2
Tooling; NPM scripts, CommonJS & Browserify
Installeer en implementeer de tooling voor je app. We kiezen hierbij voor een workflow met NPM, CommonJS en Browserify. Voor dit vak werk je met deze toolbox, waarmee je taken kan automatiseren en scripts / modules kan bundelen. 
Documenteer in je readme.md hoe jij de build heb geïmplementeerd

### Opdracht 3
Universal / Isomorphic app (extra)
Met de komst van Node.js is het mogelijk om JavaScript op de server te runnen. Een Universal of Isomorphic app is een app waarvan (een gedeelte van) de code zowel op de client als op de server kan worden gebruikt. Probeer van jouw app een universal app te maken.
