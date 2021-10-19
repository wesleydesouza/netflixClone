const imagens = [
    lista1 = [
        imagem1 = {
            nome: "Anjos da Noite",
            imagem: "../img/card_1.png"
        },
        imagem2 = {
            nome: "VanHelsing",
            imagem: "../img/card_2.png"
        },
        imagem3 = {
            nome: "Padre",
            imagem: "../img/card_3.png"
        },
        imagem4 = {
            nome: "IT",
            imagem: "../img/card_4.png"
        },
        imagem5 = {
            nome: "Guerra Mundial Z",
            imagem: "../img/card_5.png"
        }
    ],

    lista2 = [
        imagem1 = {
            nome: "Anjos da Noite",
            imagem: "../img/card_6.png"
        },
        imagem2 = {
            nome: "VanHelsing",
            imagem: "../img/card_7.png"
        },
        imagem3 = {
            nome: "Padre",
            imagem: "../img/card_8.png"
        },
        imagem4 = {
            nome: "IT",
            imagem: "../img/card_9.png"
        },
        imagem5 = {
            nome: "Guerra Mundial Z",
            imagem: "../img/card_10.jpg"
        }
    ]

];

function exibirCards(){
    const divCards = document.querySelectorAll(".figure-group");

    for(i = 0; i < lista1.length; i++){

        divCards[0].innerHTML += `<img src="${lista1[i].imagem}" alt"img ${lista1[i].nome}">`
    };
    for(i = 0; i < lista2.length; i++){

        divCards[1].innerHTML += `<img src="${lista2[i].imagem}" alt"img ${lista2[i].nome}">`
    }
};
exibirCards();
