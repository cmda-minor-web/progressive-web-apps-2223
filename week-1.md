# Opdrachten Week 1
Minor Web Development - Performance Matters

## Intentie
Deze week gaan we de client side OBA app ombouwen naar een server side versie. Hiervoor gebruiken we Node.js & Express. Daarnaast gaan we npm gebruiken als build tool en met CommonJS en Browserify optimalisatie doen voor performance.

## Werkwijze
Er is 12 uur ingeroosterd om deze week zelfstandig aan de opdrachten van dit vaak te werken. Probeer je werk goed te plannen! Tussentijds wordt in standup meetings en klassikale bijeenkomsten de voortgang gemonitord. Aan het eind van de week wordt je op theoretische kennis getoetst en op het begrip van de code die je volgens de opdrachten schrijft.

## Opdrachten
1. [Bouw de OBA App om naar een server side versie met Node.js & Express][opdracht1]
2. [Tooling][opdracht2]
3. [Universal / Isomorphic app (extra)][opdracht3]

### Opdracht 1: Pas de OBA app aan naar een server side versie met Node.js & Express

Denk bij het aanpassen goed na over wat de MVP (of core functionaliteit) is van de OBA app. Over het algemeen is dat een overview page, met een lijstje met items die elk door linken naar een detail page. Zorg ervoor dat je eerst de HTML genereert vanaf de server, vervolgens kijk je in hoeverre je de CSS kan aanpassen, en tenslotte probeer je de app zoveel mogelijk te enhancen met client side JavaScript. 

Fork deze repo, en werk daar je server side app uit: [Performance Matters 1819](https://github.com/cmda-minor-web/performance-matters-1819)

Documenteer in je readme.md hoe je de server draaiend krijgt; git clone && npm start 

#### Resources
* [Introduction to Node.js](https://egghead.io/courses/introduction-to-node-the-fundamentals)
* [Getting started with Express.js](https://egghead.io/courses/getting-started-with-express-js)
* [Export modules with Node.js](https://egghead.io/lessons/node-js-export-modules-in-node-js)


### Opdracht 2: Tooling

Installeer en implementeer de tooling voor je app. Je kan hierbij kiezen hierbij voor bijvoorbeeld een workflow met NPM scripts, CommonJS en Browserify.

Documenteer in je readme.md hoe jij de build heb geïmplementeerd

#### Resources
[Introduction to NPM scripts](https://medium.freecodecamp.org/introduction-to-npm-scripts-1dbb2ae01633)

### Opdracht 3: Universal / Isomorphic app (extra) 

Met de komst van Node.js is het mogelijk om JavaScript op de server te runnen. Een Universal of Isomorphic app is een app waarvan (een gedeelte van) de code zowel op de client als op de server kan worden gebruikt. Probeer van jouw app een universal app te maken.


#### Resources
[https://github.com/wooorm/dictionary](https://github.com/wooorm/dictionary)

<!-- Bindings -->
[opdracht1]: https://github.com/cmda-minor-web/performance-matters-1819/blob/master/week-1.md#opdracht-1-pas-de-adamnet-app-aan-naar-een-server-side-versie-met-nodejs--express
[opdracht2]: https://github.com/cmda-minor-web/performance-matters-1819/blob/master/week-1.md#opdracht-2-tooling-npm-scripts-commonjs--browserify
[opdracht3]: https://github.com/cmda-minor-web/performance-matters-1819/blob/master/week-1.md#opdracht-3-universal--isomorphic-app-extra
