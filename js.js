const ProductsData = [
    {
        img: "./img/card-1.png",
        name: '3D Soft Curves',
        user: '💩 Esther Howard',
        text: 'Current Bid',
        price: '0.85 ETH', 
    },
    {
        img: "./img/card-2.png",
        name: 'The mystery of the black square',
        user: '💀 Jenny Wilson',
        text: 'Current Bid',
        price: '0.24 ETH', 
    },
    {
        img: "./img/card-3.png",
        name: 'Pink Cloud 🌥',
        user: '👩‍🍼 Floyd Miles',
        text: 'Current Bid',
        price: '0.3 ETH', 
    },
    {
        img: "./img/card-4.png",
        name: '3D Ethereum',
        user: '😒 Jane Cooper',
        text: 'Current Bid',
        price: '0.12 ETH', 
    },
]
const ProductsData2 = [
    {
        img: "./img/card__1.png",
        name: '3D Soft Curves',
        user: '😒 Jane Cooper',
        text: 'Current Bid',
        price: '0.12 ETH', 
    },
    {
        img: "./img/card__2.png",
        name: '3D Soft Curves',
        user: '😒 Jane Cooper',
        text: 'Current Bid',
        price: '0.12 ETH', 
    },
    {
        img: "./img/card__3.png",
        name: '3D Soft Curves',
        user: '😒 Jane Cooper',
        text: 'Current Bid',
        price: '0.12 ETH', 
    },
    {
        img: "./img/card__4.png",
        name: '3D Soft Curves',
        user: '😒 Jane Cooper',
        text: 'Current Bid',
        price: '0.12 ETH', 
    },
    {
        img: "./img/card__5.png",
        name: '3D Soft Curves',
        user: '😒 Jane Cooper',
        text: 'Current Bid',
        price: '0.12 ETH', 
    },
    {
        img: "./img/card__6.png",
        name: '3D Soft Curves',
        user: '😒 Jane Cooper',
        text: 'Current Bid',
        price: '0.12 ETH', 
    },
    {
        img: "./img/card__7.png",
        name: '3D Soft Curves',
        user: '😒 Jane Cooper',
        text: 'Current Bid',
        price: '0.12 ETH', 
    },
    {
        img: "./img/card__8.png",
        name: '3D Soft Curves',
        user: '😒 Jane Cooper',
        text: 'Current Bid',
        price: '0.12 ETH', 
    },
    {
        img: "./img/card__9.png",
        name: '3D Soft Curves',
        user: '😒 Jane Cooper',
        text: 'Current Bid',
        price: '0.12 ETH', 
    },
    {
        img: "./img/card__10.png",
        name: '3D Soft Curves',
        user: '😒 Jane Cooper',
        text: 'Current Bid',
        price: '0.12 ETH', 
    },
    {
        img: "./img/card__11.png",
        name: '3D Soft Curves',
        user: '😒 Jane Cooper',
        text: 'Current Bid',
        price: '0.12 ETH', 
    },
    {
        img: "./img/card-1.png",
        name: '3D Soft Curves',
        user: '😒 Jane Cooper',
        text: 'Current Bid',
        price: '0.12 ETH', 
    },



]



const wrapper1 = document.querySelector('.live__cards1')
const cards = ProductsData.map(card => {
    return `
         <div class="live__card">
                    <img class="live__img" src=${card.img} alt="">
                    <div class="live__box">
                        <h4>${card.name}</h4>
                        <div class="live__info">
                            <p class="live__text">${card.user}</p>
                            <div class="live__price">
                                <p class="live__text">${card.text}</p>
                                <p>${card.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
    `
}).join('')
wrapper1.innerHTML = cards





const wrapper2 = document.querySelector('.live__cards2')
const cards2 = ProductsData2.map(card => {
    return `
         <div class="live__card">
                    <img class="live__img" src=${card.img} alt="">
                    <div class="live__box">
                        <h4>${card.name}</h4>
                        <div class="live__info">
                            <p class="live__text">${card.user}</p>
                            <div class="live__price">
                                <p class="live__text">${card.text}</p>
                                <p>${card.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
    `
}).join('')
wrapper2.innerHTML = cards2
