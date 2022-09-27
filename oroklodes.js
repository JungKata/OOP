class Allat{
    #labakSzama;
    #nev

    constructor(nev, labakSzama){
        this.#nev = nev;
        this.#labakSzama = labakSzama;
    }

    hangotAd()
    {
        throw new Error("A hangotAd fuggveny absztrakt")
    }
}
class Aranyhal extends Allat
{
    constructor(nev){
        super(nev, 0);
    }
    hangotAd()
    {
        console.log('blugy')
    }
}

class Kutya extends Allat
{
    constructor(nev){
        super(nev, 4);
    }
    hangotAd(){
        console.log('Vau');
    }
}
let kutya = new Kutya('Bodri');
let hal = new Aranyhal('Nemo');
kutya.hangotAd();
hal.hangotAd();