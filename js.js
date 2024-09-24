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




const ProductData3 = [
    {
        img: './img/top__img1.png',
        icon: './img/top__icon1.png',
        name: 'Tung Tran <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.1667 9L17.1333 6.675L17.4167 3.6L14.4083 2.91667L12.8333 0.25L10 1.46667L7.16668 0.25L5.59168 2.90833L2.58334 3.58333L2.86668 6.66667L0.833344 9L2.86668 11.325L2.58334 14.4083L5.59168 15.0917L7.16668 17.75L10 16.525L12.8333 17.7417L14.4083 15.0833L17.4167 14.4L17.1333 11.325L19.1667 9ZM8.40834 12.9333L5.24168 9.75833L6.47501 8.525L8.40834 10.4667L13.2833 5.575L14.5167 6.80833L8.40834 12.9333Z" fill="#007AFF"/></svg>',
        text: 'Bad Artist, NFT Enthusiast, <br> Metaverse Innovator <br> Supporting #bitcoin since <br> 2012.',
        followers: '3K Followers',
        btn: 'Follow'
    },
    {
        img: './img/top__img2.png',
        icon: './img/top__icon2.png',
        name: 'Wade Warren <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.1667 9L17.1333 6.675L17.4167 3.6L14.4083 2.91667L12.8333 0.25L10 1.46667L7.16668 0.25L5.59168 2.90833L2.58334 3.58333L2.86668 6.66667L0.833344 9L2.86668 11.325L2.58334 14.4083L5.59168 15.0917L7.16668 17.75L10 16.525L12.8333 17.7417L14.4083 15.0833L17.4167 14.4L17.1333 11.325L19.1667 9ZM8.40834 12.9333L5.24168 9.75833L6.47501 8.525L8.40834 10.4667L13.2833 5.575L14.5167 6.80833L8.40834 12.9333Z" fill="#007AFF"/></svg>',
        text: 'Bad Artist, NFT Enthusiast, <br> Metaverse Innovator <br> Supporting #bitcoin since <br> 2012.',
        followers: '8k Followers',
        btn: 'Follow'
    },
    {
        img: './img/top__img3.png',
        icon: './img/top__icon3.png',
        name: 'Arlene McCoy <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.1667 9L17.1333 6.675L17.4167 3.6L14.4083 2.91667L12.8333 0.25L10 1.46667L7.16668 0.25L5.59168 2.90833L2.58334 3.58333L2.86668 6.66667L0.833344 9L2.86668 11.325L2.58334 14.4083L5.59168 15.0917L7.16668 17.75L10 16.525L12.8333 17.7417L14.4083 15.0833L17.4167 14.4L17.1333 11.325L19.1667 9ZM8.40834 12.9333L5.24168 9.75833L6.47501 8.525L8.40834 10.4667L13.2833 5.575L14.5167 6.80833L8.40834 12.9333Z" fill="#007AFF"/></svg>',
        text: 'Bad Artist, NFT Enthusiast, <br> Metaverse Innovator <br> Supporting #bitcoin since <br> 2012.',
        followers: '650 Followers',
        btn: 'Follow'
    },
    {
        img: './img/top__img4.png',
        icon: './img/top__icon4.png',
        name: 'Dianne Russell <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.1667 9L17.1333 6.675L17.4167 3.6L14.4083 2.91667L12.8333 0.25L10 1.46667L7.16668 0.25L5.59168 2.90833L2.58334 3.58333L2.86668 6.66667L0.833344 9L2.86668 11.325L2.58334 14.4083L5.59168 15.0917L7.16668 17.75L10 16.525L12.8333 17.7417L14.4083 15.0833L17.4167 14.4L17.1333 11.325L19.1667 9ZM8.40834 12.9333L5.24168 9.75833L6.47501 8.525L8.40834 10.4667L13.2833 5.575L14.5167 6.80833L8.40834 12.9333Z" fill="#007AFF"/></svg>',
        text: 'Bad Artist, NFT Enthusiast, <br> Metaverse Innovator <br> Supporting #bitcoin since <br> 2012.',
        followers: '1K Followers',
        btn: 'Follow'
    },
    {
        img: './img/top__img1.png',
        icon: './img/top__icon5.png',
        name: 'Savannah Nguyen <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.1667 9L17.1333 6.675L17.4167 3.6L14.4083 2.91667L12.8333 0.25L10 1.46667L7.16668 0.25L5.59168 2.90833L2.58334 3.58333L2.86668 6.66667L0.833344 9L2.86668 11.325L2.58334 14.4083L5.59168 15.0917L7.16668 17.75L10 16.525L12.8333 17.7417L14.4083 15.0833L17.4167 14.4L17.1333 11.325L19.1667 9ZM8.40834 12.9333L5.24168 9.75833L6.47501 8.525L8.40834 10.4667L13.2833 5.575L14.5167 6.80833L8.40834 12.9333Z" fill="#007AFF"/></svg>',
        text: 'Bad Artist, NFT Enthusiast, <br> Metaverse Innovator <br> Supporting #bitcoin since <br> 2012.',
        followers: '238 Followers',
        btn: 'Follow'
    },
    {
        img: './img/top__img2.png',
        icon: './img/top__icon6.png',
        name: 'Jenny Wilson <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.1667 9L17.1333 6.675L17.4167 3.6L14.4083 2.91667L12.8333 0.25L10 1.46667L7.16668 0.25L5.59168 2.90833L2.58334 3.58333L2.86668 6.66667L0.833344 9L2.86668 11.325L2.58334 14.4083L5.59168 15.0917L7.16668 17.75L10 16.525L12.8333 17.7417L14.4083 15.0833L17.4167 14.4L17.1333 11.325L19.1667 9ZM8.40834 12.9333L5.24168 9.75833L6.47501 8.525L8.40834 10.4667L13.2833 5.575L14.5167 6.80833L8.40834 12.9333Z" fill="#007AFF"/></svg>',
        text: 'Bad Artist, NFT Enthusiast, <br> Metaverse Innovator <br> Supporting #bitcoin since <br> 2012.',
        followers: '64 Followers',
        btn: 'Follow'
    },
    {
        img: './img/top__img3.png',
        icon: './img/top__icon7.png',
        name: 'Brooklyn Simmons <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.1667 9L17.1333 6.675L17.4167 3.6L14.4083 2.91667L12.8333 0.25L10 1.46667L7.16668 0.25L5.59168 2.90833L2.58334 3.58333L2.86668 6.66667L0.833344 9L2.86668 11.325L2.58334 14.4083L5.59168 15.0917L7.16668 17.75L10 16.525L12.8333 17.7417L14.4083 15.0833L17.4167 14.4L17.1333 11.325L19.1667 9ZM8.40834 12.9333L5.24168 9.75833L6.47501 8.525L8.40834 10.4667L13.2833 5.575L14.5167 6.80833L8.40834 12.9333Z" fill="#007AFF"/></svg>',
        text: 'Bad Artist, NFT Enthusiast, <br> Metaverse Innovator <br> Supporting #bitcoin since <br> 2012.',
        followers: '2K Followers',
        btn: 'Follow'
    },
    {
        img: './img/top__img4.png',
        icon: './img/top__icon8.png',
        name: 'Theresa Webb <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.1667 9L17.1333 6.675L17.4167 3.6L14.4083 2.91667L12.8333 0.25L10 1.46667L7.16668 0.25L5.59168 2.90833L2.58334 3.58333L2.86668 6.66667L0.833344 9L2.86668 11.325L2.58334 14.4083L5.59168 15.0917L7.16668 17.75L10 16.525L12.8333 17.7417L14.4083 15.0833L17.4167 14.4L17.1333 11.325L19.1667 9ZM8.40834 12.9333L5.24168 9.75833L6.47501 8.525L8.40834 10.4667L13.2833 5.575L14.5167 6.80833L8.40834 12.9333Z" fill="#007AFF"/></svg>',
        text: 'Bad Artist, NFT Enthusiast, <br> Metaverse Innovator <br> Supporting #bitcoin since <br> 2012.',
        followers: '127 Followers',
        btn: 'Follow'
    }
]
const wrapper3 = document.querySelector('.top__wrapper')
const cards3 = ProductData3.map(card => {
    return `
        <div class="top__card">
              <div class="top__box">
                <img class="top__img" src=${card.img} alt="">
                <div class="top__row">
                 <div class="top__content">
                   
                    <img src=${card.icon} alt="" class="top__icon">
                    <div class="top__wrap">
                    <h6>${card.name}</h6>
                    <p>${card.text}</p>
                    </div>
                    
                </div>
                   <div class="top__info">
                        <p>${card.followers}</p>
                        <button>${card.btn}</button>
                    </div>
             </div>
               
                </div>
               </div>
                
                 
    `
}).join('')
wrapper3.innerHTML = cards3


const modal = document.querySelector('.modal')
const openModal = document.querySelector('#open-btn')
const closeModal = document.querySelector('.close')

openModal.onclick = () => {
    modal.classList.add('active')
}
closeModal.onclick = () => {
    modal.classList.remove('active')
}

document.getElementById('telegramForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const token = '7211606098:AAFT4-OJc0oC8fUTzP79aIr3qZaGryuAdq4';  // Замените на ваш токен
    const chat_id = '-4588952049';  // Замените на ваш chat_id
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    // Формируем сообщение
    const message = `Name: ${name}\nPhone: ${phone}`;

    const data = {
      chat_id: chat_id,
      text: message
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        alert("Message sent!");
        location.reload()
      } else {
        alert("Error sending message.");
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert("Error sending message.");
    });
  });



const theme = document.querySelector('#theme')
const body = document.querySelector('body')

theme.onclick = () => {
    body.classList.toggle('dark')
}

