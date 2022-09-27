let valami = {
    nev: "Username",
    eletkor: 23,
};

class User {
    constructor (nev, eletkor){
        this.nev = nev,
        this.eletkor = eletkor;
    }

    get eletkor(){
        return this._eletkor;
    }
    set eletkor(eletkor){
        if(typeof eletkor === 'number' && eletkor >= 0){
            this._eletkor = eletkor;  
        } 
        else{
                throw new Error("Eletkornak nem negativ egesznek kell, hogy legyen")
            }
    }
    kiir()
    {
        console.log(this.nev, this.eletkor);
    }
    login(usernev, pass){
        return false;
    }
}

let user = new User("User2", -19);
console.log(valami instanceof User)
console.log(user instanceof User)

user._eletkor("kutya");
user.kiir()

