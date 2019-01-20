var express = require('express');
var app = module.exports = express();
app.start = function() {
    app.get('/quotes', app.__getQuotes);
    app.get('/quote', app.__getQuote);
    const port = process.env.PORT || 3000;
    app.listen(port);
    console.log('Papy quotes server started on port ' + port);
}

app.__getQuotes = function(request, response) {
    return response.send(quotes);
};

app.__getQuote = function(request, response) {
    var quote = quotes[Math.floor(Math.random() * quotes.length - 1)];
    console.log("selected quote : " + quote.quote);
    return response.send(quote);
};

var quotes = [
    { quote: "Mais, qu'est-ce-que je fais là ?\nJe me fous de l\'argent et des femmes." },
    { quote: "J'encule le peuple, et il me le rend bien." },
    { quote: "Avec la solitude comme seul apôtre,<br />Puisque paraît-il, l'enfer c'est les autres." },
    { quote: "J’ai joué ton cœur à pile ou face, la pièce est tombée sur le côté." },
    { quote: "Oublier de bar en bar, arborer un sourire et boire du 'sky.<br />Montrer ses dents aux pauvres glands pour combattre le mal par l'émail." },
    { quote: "Le présent se profile et ma seule option : m'y retrouver dans les carrefours pour devenir un champion." },
    { quote: "Qu'importent les coups de pieds et qu'importent les coups de tête... Se plier : niet, j'pianote sur ma planète." },
    { quote: "Dans l'théâtre de ma tête se mélangent les branches et les racines." },
    { quote: "Cracher sur le pouvoir et sur tous ceux qui courent après. Allons enfants de la patrie, le jour de glaire est arrivé." },
    { quote: "J't'invite à rejoindre ma constellation, à contempler les étoiles, même si celles-ci n'ont plus la cote à la télévision." },
    { quote: "Le seul défaut des petits hommes verts, c'est qu'ils n'existent pas." },
    { quote: "Les gens disent que je suis bizarre." },
    { quote: "J'arrive en mode Rambo, ma mitraillette fait clic-clic.<br />Pour vous, bande de tapettes, j'vais ramener toute ma clique-clique." },
    { quote: "Si sucer faisait grandir, comme Goliath tu serais un géant." },
    { quote: "Hipster, ta chatte est sèche mais je la check avec du beurre.\nJ'culbute ta go dans ma gova mais elle vaut pas ta sœur." },
    { quote: "J'me torche dans ta be-bar, j'chie sur ton art et sur ton mouvement." },
    { quote: "J'crois qu'il sait pas qui j'suis." },
    { quote: "Dans ma cave, t'as été élu client du mois." },
    { quote: "Ta gueule redonnerait le sourire à un moine Tibétain." },
    { quote: "Tu dis ça parce que t'es en colère." },
    { quote: "Tu dis ça parce que je suis beau." },
    { quote: "L'important, c'est d'écouter son cœur." },
    { quote: "Pk ?" },
    { quote: "Pck." },
    { quote: "Chips." },
    { quote: "Tu auras de plus ample informations quand tu en auras besoin et que le monde sera prêt." },
    { quote: "Ma voiture m'a quitté et ma femme ne démarre plus." },
    { quote: "Me prend pas pour un rustre, j'suis romantique, j'te baiserai sous la lune." },
    { quote: "Que les bitchs se rhabillent, des paparazzis je serai la seule cible !" },
    { quote: "J'ai deux têtes de plus que toi, appelle-moi cerbère !" },
    { quote: "Génération finie de fanés fainéants, autant en emporte le divan." },
    { quote: "C'est pas que je sois particulièrement inquiet pour ma santé,<br />Je veux juste pas finir légume alors qu'on me force à en manger." },
    { quote: "Même à bicyclette, j'souffle dans les alcotests." },
    { quote: "J'aurais l'meilleur flow même en faisant de la pop espagnole." },
    { quote: "Verse du whisky dans mes glaçons." },
    { quote: "J'suis trop bien pour vous,<br />J'vous regarderais de haut si seulement je tenais debout." }
];