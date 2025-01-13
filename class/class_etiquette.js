class Etiquette {

    constructor (id, ref, titre, img, head, date_deb, date_fin, description, langages) {
        this._id = id;
        this._ref = ref;
        this._titre = titre;
        this._img = img;
        this._head = head;
        this._date_deb = date_deb;
        this._date_fin = date_fin;
        this._description = description;
        this._langages = langages;
    }

    /* --- */
    get id() { return this._id; }
    get ref() { return this._ref; }
    get titre() { return this._titre; }
    get img() { return this._img; }
    get head() { return this._head; }
    get date_deb() { return this._date_deb; }
    get date_fin() { return this._date_fin; }
    get description() { return this._description; }
    get langages() { return this._langages; }
    
    /* --- */

    constr_etiquette () {
        let str = "";
        
        str +=  "<div id=\"etiquette-id-" + this.id + "\" class=\"etiquette color-black";
        if (this.head === false) {str += " item-pointer etiquette-opacity"; }
        str +=  "\">"
            +       "<div class=\"etiquette-top\">"
            +           "<p class=\"size-1-5\">¤</p>"
            +           "<p>ref " + this.ref + "</p>"
            +       "</div>"

            +       "<div class=\"etiquette-main\" style=\"background-image: url(./img/etiquette/" + this.img + ");\"></div>"
            
            +       "<div class=\"etiquette-bottom\">"
            +           "<h5>" + this.titre + "</h5>"
            +       "</div>"
            +   "</div>";

        return str;
    }

    constr_etiquette_developpement () {    
        let str = "";
        
        str +=  "<div id=\"developpement-etiquette-id-" + this.id + "\" class=\"developpement-etiquette m-t-60\" style=\"display: none\">"
            +       "<div class=\"developpement-etiquette-top\">"
            +           "<div class=\"developpement-etiquette-img\"><img class=\"information-image\" src=\"./img/etiquette/" + this.img + "\"></div>"

            +           "<div class=\"developpement-etiquette-information m-l-30\">"
            +               "<div class=\"developpement-etiquette-titre m-b-60\">"
            +                   "<h5>ref " + this.ref + "</h5>"
            +                   "<h4 class=\"m-l-60 m-r-60\">" + this.titre + "</h4>"
            +                   "<h6>" + this.date_deb;
            if (this.date_fin !== undefined) { str += " – " + this.date_fin; }
            str +=              "</h6>"
            +               "</div>"    

            +               "<div class=\"developpement-etiquette-main\">"
            +                   "<div class=\"developpement-etiquette-description\">"
            +                       "<p>" + this.description + "</p>"
            +                   "</div>"
            +               "</div>"
            +           "</div>"
            +       "</div>"

            +       "<div class=\"developpement-etiquette-bottom m-t-60\">";
            
            for (let langage of all_langages) {
                if (this.langages.includes(langage._nom)) {
                    str += langage.constr_langage();
                }
            }
            
            str +=  "</div>"
            +   "</div>";
        
        return str;
    }

}