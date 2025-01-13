class Information {

    constructor(image, orientation, titre, texte) {
        this._image = image;
        this._orientation = orientation;
        this._titre = titre;
        this._texte = texte;
    }

    /* --- */
    get image() { return this._image; }
    get orientation() { return this._orientation; }
    get titre() { return this._titre; }
    get texte() { return this._texte; }

    /* --- */

    constr_information() {
        let div = document.createElement("div");
        div.classList.add("information");
        div.classList.add("m-b-60");

        let str = "";
        let image = "";
        let information = "";
        
        image += "<div ";
             if (this.orientation === "R") { image += "class=\"m-r-30\""; }
        else if (this.orientation === "L") { image += "class=\"m-l-30\""; }
        image += "><img class=\"information-image\" src=\"../img/" + this.image + "\"></div>";

        information += "<div>"
            +   "<h5 class=\"m-b-15\">" + this.titre + "</h5>"
            +   "<p>" + this.texte + "</p></div>";

             if (this.orientation === "R") { str += image + information; } 
        else if (this.orientation === "L") { str += information + image; }

        div.innerHTML = str;
        return div;
    }
}