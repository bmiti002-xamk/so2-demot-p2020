const http = require("http"); //näistä ei ole tavallaan enää mitään käryä
const url = require("url"); //eikä näistä

const portti = 3001; //portin määrittely 

const serveri = http.createServer((req, res) => { //luodaan serveri

    if (req.url != "/favicon.ico") { 

        let tiedot = url.parse(req.url, true).query; //muuttuja tiedot
    
        let nimi = (tiedot.nimi) ? tiedot.nimi : "tuntematon"; //muuttuja nimi
    
        res.writeHead(200, { "Content-type" : "text/html; charset=utf-8" }); //hmtl sivun headin määritykset eli tekstiä ja merkistökoodi
        res.write(`<h1>Demo 1: Node.js -palvelinohjelmoinnin perusteita</h1>`); //
        res.write(`<h2>Heippa, ${nimi}!</h2>`); //pyydetään serveriltä että vastaa kirjoittalla heippa ja nimen jonka saa nimi-muuttujasta
        res.end(); //tällä lopetettiin jotain... 

    }

});
//käynnistetään serveri
serveri.listen(portti, () => {
    console.log(`Palvelin käynnistyi porttiin ${portti}`);   //konsoli ilmoitus mustaan ruutuun
});
