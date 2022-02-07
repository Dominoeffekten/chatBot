'use strict';
// save keystrokes
const $ = function (foo) { 
    return document.getElementById(foo);
}
const query = function (foo) { 
    return document.querySelector(foo);
}
const ce = function (foo) { 
    return document.createElement(foo);
}

//get elements
let chatFunction = query(".chatFunction"); //div with all information
let chatBox = query(".chatBox"); //the box with a ll information
let chatBoxTalk = query(".chatBox-talk");
let icon = query(".fa-angle-down");


//kontakt
function end(){
    console.log("kontakt");

    chatBoxTalk.innerHTML = " ";
    icon.style.display = "none";
    let p = ce("p");
    p.innerHTML = `Tak fordi du gad at lytte til mig. Jeg håber at det har været spændende. <br> 
    Rikke kan kontaktes på <a href="mailto:rikkedomino@gmail.com</a>`;
    chatBoxTalk.append(p);
};

//personlighed
function question4(){
    deleteButton();
    let p = ce("p");
    p.innerHTML = `personlighed`;
    chatBoxTalk.append(p);

    function nextThing(){
        let div = ce("div");
        let fagButton = ce("button");
        let contactButton = ce("button");
        fagButton.setAttribute("class", "chatbot-button");
        contactButton.setAttribute("class", "chatbot-button");
        fagButton.innerHTML = "Faglighed?";
        contactButton.innerHTML = "Kontakt hende i dag";
        div.append(fagButton);
        div.append(contactButton);
        chatBoxTalk.append(div);
    
        fagButton.addEventListener("click", question5);
        contactButton.addEventListener("click", end);
    };
    setTimeout(nextThing, 2000);
};
//faglighed
function question5(){
    deleteButton();
    let p = ce("p");
    p.innerHTML = `Rikke har en PB. i Webudvikling, som hun tog ved IBA erhvervsakademi Kolding i 2019 - 2021. <br>
    Men hun har også en uddannelse som multimediedesigner. Det betyder, at hun kan programmere og designe elementer.`;
    chatBoxTalk.append(p);

    function nextThing(){
        let div = ce("div");
        let perButton = ce("button");
        let contactButton = ce("button");
        perButton.setAttribute("class", "chatbot-button");
        contactButton.setAttribute("class", "chatbot-button");
        perButton.innerHTML = "Personlighed?";
        contactButton.innerHTML = "Kontakt hende i dag";
        div.append(perButton);
        div.append(contactButton);
        chatBoxTalk.append(div);

        perButton.addEventListener("click", question4);
        contactButton.addEventListener("click", end);
    };
    setTimeout(nextThing, 2000);
};
//personlig eller faglighed
function question3(){
    deleteButton();
    let p = ce("p");
    p.innerHTML = `Hvad vil du gerne høre? <br> Jeg har så meget at fortælle!`;
    chatBoxTalk.append(p);

    let div = ce("div");
    let perButton = ce("button");
    let fagButton = ce("button");
    perButton.setAttribute("class", "chatbot-button");
    fagButton.setAttribute("class", "chatbot-button");
    perButton.innerHTML = "Personlighed?";
    fagButton.innerHTML = "Faglighed?";
    div.append(perButton);
    div.append(fagButton);
    chatBoxTalk.append(div);

    perButton.addEventListener("click", question4);
    fagButton.addEventListener("click", question5);
}

//intro who are this person?
function question2(){
    deleteButton();
    let p = ce("p");
    p.innerHTML = `Hvor fedt! <br> Nu skal jeg fortælle lidt`;
    chatBoxTalk.append(p);

    function intro(){
        let p = ce("p");
        p.innerHTML = `Jeg er lavet af Rikke Domino Isaksen i 2022`;
        chatBoxTalk.append(p);
        setTimeout(who, 2000);
    }
    function who(){
        let p = ce("p");
        p.innerHTML = `Rikke er en empatiske og ansvarsfuld person. 
        Hun elsker at spille brætspil, især partners eller catan, 
        men Mario Kart er nu hellere ikke dårligt. 
        Hun bruger også meget tid på at programmering.
        Hendes interesse for programmering er stor og kombineret med hendes nysgerrighed, så skal hun hives væk fra computeren. `;
        chatBoxTalk.append(p);

        let div = ce("div");
        let p2 = ce("p");
        let yesButton = ce("button");
        let noButton = ce("button");
        yesButton.setAttribute("class", "chatbot-button");
        noButton.setAttribute("class", "chatbot-button");
        yesButton.innerHTML = "Ja";
        noButton.innerHTML = "Nej";
        p2.innerHTML = `Vil du høre mere?`;
        icon.style.display = "block";
        chatBoxTalk.append(p2);
        div.append(yesButton);
        div.append(noButton);
        chatBoxTalk.append(div);

        noButton.addEventListener("click", close);
        yesButton.addEventListener("click", question3);
    };
    setTimeout(intro, 2000);
    //setTimeout(myGreeting, 5000);
};
//start it
function question1(){
    let div = ce("div");
    let p = ce("p");
    let yesButton = ce("button");
    let noButton = ce("button");
    yesButton.setAttribute("class", "chatbot-button");
    noButton.setAttribute("class", "chatbot-button");
    yesButton.innerHTML = "Hjælp af dig";
    noButton.innerHTML = "Udforsk selv";
    p.innerHTML = `Hej med dig <br> Velkommen til denne side. Vil du lære noget af mig eller vil udforske selv?`;
    chatBoxTalk.append(p);
    div.append(yesButton);
    div.append(noButton);
    chatBoxTalk.append(div);

    noButton.addEventListener("click", close);
    yesButton.addEventListener("click", question2);
};
//close chatbox
function close(){
    chatBoxTalk.innerHTML = " ";
    icon.style.display = "none";
    let p = ce("p");
    p.innerHTML = `Det er i orden. Vi ses senere`;
    chatBoxTalk.append(p);

    setTimeout(function(){
        chatBox.style.display = "none";
    }, 5000);
    
    
    query(".close").removeEventListener("click", close);
};
//start chat box
function startChat(){
    chatBox.style.display = "grid";
    chatBoxTalk.innerHTML = " ";
    
    question1();

    query(".close").addEventListener("click", close);


};
//Scroll down
function scrollDown(){
    window.setInterval(function() {
        chatBoxTalk.scrollTop = chatBoxTalk.scrollHeight;
    }, 100);
};



//disable buttons
function deleteButton(e){
    let buttons = document.getElementsByClassName("chatbot-button");
    for(var i = 0; i <= buttons.length-1; i++){
        buttons[i].disabled = true;
    };
};




//start chat funktion
$("chatButton").addEventListener("click", startChat);