'use strict';
// save keystrokes
const $ = function (foo) { 
    return document.getElementById(foo);
}
const ce = function (foo) { 
    return document.createElement(foo);
}

let i;

let FKArray = [
    "HTML & CSS","JavaScript", "Node.Js", "Magento", "SharePoint", "Adobe", "Git", "mongoDB", "WordPress"
];
let PKArray = [
    "Imødekommende","Gå-på-mod", "Ambitiøs", "Snaksaglig", "Pligtopfyldende", "Smilende", "Struktureret"
];
let languagesArray = [
    "Dansk ", "Modersmål", "Engelsk ", "Moderat", "Tysk ", "Moderat"
];
let freetimeArray = [
    "Familie", "Brætspil", "Venner", "Bøger"
];
let shapes = [
    "Strategisk", "Researchende", "Sammenhængs-søgende", "Koordinerende", "Fremtids-orienteret", "Iderig", "Indlevende", "Detalje-fokuseret",  "Principfast",  "Anderkendelses orienteret"
];


let kompentencerButton = $("kompentencer-button"); //knappen


function kompentencer(){
    //faglig kompentencer
    let fagligKompentencer = ce("article"); 
    fagligKompentencer.setAttribute("class", "faglige");
    let FKH3 = ce("h3");
    FKH3.innerHTML = "Faglige kompetencer";
    fagligKompentencer.append(FKH3);

    for(i = 0; i < FKArray.length; i++){
        let p = ce("p");
        p.innerHTML = FKArray[i];
        fagligKompentencer.append(p);
    }
    document.getElementsByTagName("main")[0].appendChild(fagligKompentencer);

    //Personlige kompentencer
    let pKompentencer = ce("article"); 
    pKompentencer.setAttribute("class", "personlige");
    let PKH3 = ce("h3");
    PKH3.innerHTML = "Personlige kompetencer";
    pKompentencer.append(PKH3);

    for(i = 0; i < PKArray.length; i++){
        let p = ce("p");
        p.innerHTML = PKArray[i];
        pKompentencer.append(p);
    }
    document.getElementsByTagName("main")[0].appendChild(pKompentencer);


    //Sproglige kompentencer
    let languange = ce("article"); 
    languange.setAttribute("class", "languange");
    let langH3 = ce("h3");
    langH3.innerHTML = "Sprog";
    languange.append(langH3);

    for(i = 0; i < languagesArray.length; i++){
        let p = ce("p");
        p.innerHTML = languagesArray[i];
        languange.append(p);
    }
    document.getElementsByTagName("main")[0].appendChild(languange);

    //Sproglige kompentencer
    let pri = ce("article"); 
    pri.setAttribute("class", "freetime");
    let priH3 = ce("h3");
    priH3.innerHTML = "Fritid";
    pri.append(priH3);

    for(i = 0; i < freetimeArray.length; i++){
        let p = ce("p");
        p.innerHTML = freetimeArray[i];
        pri.append(p);
    }
    document.getElementsByTagName("main")[0].appendChild(pri);

    
    //knappen
    kompentencerButton.removeEventListener("click", kompentencer);

}
kompentencerButton.addEventListener("click", kompentencer);