let all_titre = new Map();
const all_liste = new Array();
const all_etiquette = new Map();
const all_informations = new Array();
const all_langages = new Array();
const all_footer = new Array();

function import_titre () {
    all_titre = json_titre[0];
}

function import_liste () {

    for (let i = 0; i < json_liste.length; i++) {
        all_liste.push(
            new Liste (
                json_liste[i].liste,
                json_liste[i].lien
            )
        );
    }

}

function import_etiquette () {

    for (let i = 0; i < json_etiquette.length; i++) {
        all_etiquette.set(
            i, 
            new Etiquette (
                i, 
                json_etiquette[i].ref, 
                json_etiquette[i].titre,
                json_etiquette[i].img, 
                json_etiquette[i].head, 
                json_etiquette[i].date_deb, 
                json_etiquette[i].date_fin, 
                json_etiquette[i].description,
                json_etiquette[i].langages
            )
        );
    }

}


function import_infomation () {

    for (let i = 0; i < json_infomation.length; i++) {
        all_informations.push(
            new Information (
                json_infomation[i].image,
                json_infomation[i].orientation,
                json_infomation[i].titre,
                json_infomation[i].texte
            )
        );
    }

}

function import_langage () {

    for (let i = 0; i < json_langage.length; i++) {
        all_langages.push(
            new Langage (
                json_langage[i].nom,
                json_langage[i].img,
                json_langage[i].description
            )
        );
    }

}


function import_footer () {

    for (let i = 0; i < json_footer.length; i++) {
        all_footer.push(
            new Footer (
                json_footer[i].information,
                json_footer[i].picto,
                json_footer[i].balise_deb,
                json_footer[i].balise_fin,
                json_footer[i].texte
            )
        );
    }

}

import_langage();
import_titre();
import_liste();
import_etiquette();
import_infomation();
import_footer();

document.addEventListener('DOMContentLoaded', (event) => {

    // Générer les titres
    const titre_principal = document.getElementById('titre_principal');
    const sous_titre = document.getElementById('sous_titre');
    const btn_menu = document.getElementById('btn_menu');
    const btn_header = document.getElementById('btn_header');
    const bandeau_menu = document.getElementById('bandeau_menu');
    const bandeau_transition = document.getElementById('bandeau_transition');
    const section_1 = document.getElementById('section_1');
    const section_2 = document.getElementById('section_2');
    const section_3 = document.getElementById('section_3'); 

    titre_principal.innerHTML = all_titre.titre_principal;
    sous_titre.innerHTML = all_titre.sous_titre;
    btn_menu.innerHTML = "<a href=\"mailto:lilwen.malestroit@gmail.com?subject=Portfolio%20-%20\" class=\"color-white\">" + all_titre.btn_menu + "</a>";
    btn_header.innerHTML = "<a href=\"../document/CV.pdf\" target=\"_blank\" class=\"color-white\">" + all_titre.btn_header + "</a>";
    bandeau_menu.innerHTML = all_titre.bandeau_menu;
    bandeau_transition.innerHTML = all_titre.bandeau_transition;
    section_1.innerHTML = all_titre.section_1;
    section_2.innerHTML = all_titre.section_2;
    section_3.innerHTML = all_titre.section_3;


    // Générer les listes
    const lien_liste = document.getElementById('lien-liste');
    lien_liste.innerHTML = "";
    for (let liste of all_liste) {
        lien_liste.appendChild(liste.constr_liste());
    }

    // Générer les informations
    const div_informations = document.getElementById('informations');
    div_informations.innerHTML = "";
    for (let information of all_informations) {
        div_informations.appendChild(information.constr_information());
    }

    // Générer les langages
    const div_langages = document.getElementById('langages');
    div_langages.innerHTML = "";
    for (let langage of all_langages) {
        div_langages.innerHTML += langage.constr_langage();
    }

    // Générer les pieds de page
    const div_footer = document.getElementById('div_footer');
    div_footer.innerHTML = "";
    let first = true;

    for (let footer of all_footer) {
        if (!first) { 
            let div = document.createElement('div');
            div.classList.add("vertical-line");
            div_footer.appendChild(div);
        }
        div_footer.appendChild(footer.constr_footer());
        first = false;
    }

});