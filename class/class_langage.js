class Langage {

    constructor (nom, img, description) {
        this._nom = nom;
        this._img = img;
        this._description = description;
    }

    /* --- */
    get nom () { return this._nom; }
    get img () { return this._img; }
    get description () { return this._description; }
    
    /* --- */

    constr_langage () {
        let str = "";
        
        str +=  "<div class=\"langage\">"
            +       "<div class=\"langage-img\">"
            +           "<img src=\"../img/langage/" + this.img + "\" alt=\"\" class=\"langage-img\">"
            +       "</div>"
            
            +       "<div class=\"langage-main m-t-15\">"
            +           "<p>" + this.description + "</p>"
            +       "</div>"
            +   "</div>";

        return str;
    }

}