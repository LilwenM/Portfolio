class Footer {

    constructor(information, picto, balise_deb, balise_fin, texte) {
        this._information = information;
        this._picto = picto;
        this._balise_deb = balise_deb;
        this._balise_fin = balise_fin;
        this._texte = texte;
    }

    /* --- */
    get information() { return this._information; }
    get picto() { return this._picto; }
    get baliseDeb() { return this._balise_deb; }
    get baliseFin() { return this._balise_fin; }
    get texte() { return this._texte; }

    /* --- */

    constr_footer() {
        let div = document.createElement("div");
        div.classList.add("information-footer");
        div.classList.add("color-white");
        div.classList.add("p-l-30");
        div.classList.add("p-r-30");
        div.classList.add("p-t-30");
        div.classList.add("p-b-30");

        let str = "";
        str +=  "<div class=\"m-r-15\">"
            +       "<img class=\"picto-max\" src=\"" + this.picto + "\">"
            +   "</div>";

        str +=  "<div>"
            +       "<h5>" + this.information + "</h5>"
            +       this.baliseDeb + this.texte + this.baliseFin
            +   "</div>";

        div.innerHTML = str;
        return div;
    }
}