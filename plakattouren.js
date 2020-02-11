// kundendaten als object

const customer = {
    name        : "",// Firmen-/Personenname
    adresse     : "",// adresse (als block oder einzelsätze str, hnr etc?)
    promoArt    : "",// hier definieren ob Szene oder Kultur? oder besser in der 
                     // promo selber, weil ein szene kunde z.B. auch mal eine 
                     // Kulturpromo bekommen kann?


};

// ungefähr so würde eine Object constructor aussehen:

function Kunde(name, adresse, promoArt) {
    this.kundenName = name;
    this.adressDaten = adresse;
    this.promoArt = promoArt;
}

// aber da bin ich noch nicht im Kurs, deshalb wäre im moment die einzige möglicheit 
// Kudnendaten zu speichern in einem Array, bestehend aus vielen Objekten (ein Objekt pro
// Kunde) etwa so:

const kundenDaten = [
    {
        name        : "Janke",
        strasse     : "Teichweg 4",
        plz         : 22769,  
        ort         : "Hamburg",
        kundenArt   : "szene"
    },
    {
        name        : "FKP",
        strasse     : "Deichweg 8",
        plz         : 22767,  
        ort         : "Hamburg",
        kundenArt   : "szene"
    },
    {
        name        : "Mojo",
        strasse     : "Reeperbahn 111",
        plz         : 22569,  
        ort         : "Hamburg",
        kundenArt   : "kultur"
    },
    {
        name        : "Risiko",
        strasse     : "Jägerplatz 3",
        plz         : 21453,  
        ort         : "Hamburg",
        kundenArt   : "kultur"
    }
]

console.log(kundenDaten);


// plakatierung als object bestehend aus kundendaten und motiv, tourdaten, anzahl etc.

const promo = {
    kunde       : "",// hier der zugriff auf das kundendaten object
    motiv       : "",// hier variable für den name der tour/motiv (bsp. Rollerskate Jam)
    pStart      : "",// hier start der promo
    pEnde       : "",// hier Promoende
    format      : "",// Format des Plakats
    anzahl      : "",// Gesamtanzahl Plakate 
    anzahlProTag: "",// hier die anzahl plakate, die pro tag gehängt werden soll (was tun
                     // wenn Anzahl der Plakate pro Tag unterschiedlich ist)
};

// plakattour als array das mit objecten gefüllt ist

const plakattour = ["promo1, promo2, promo3, etc"]; // wie lassen sich mehrere objekte
                                                    // gleicher art abbilden?




