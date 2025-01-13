class Liste {

    constructor(liste, lien) {
        this._liste = liste;
        this._lien = lien;
    }

    /* --- */
    get liste() { return this._liste; }
    get lien() { return this._lien; }

    /* --- */

    constr_liste() {
        let a = document.createElement("a");
        a.href = "#" + this.lien;
        a.classList.add("a-liste");
        a.classList.add("color-white");
        a.innerHTML = this.liste;

        return a;
    }
}