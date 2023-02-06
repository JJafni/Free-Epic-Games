const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'e40fc46289msh8788710fcd6587cp178c4bjsn8dac788abb61',
        'X-RapidAPI-Host': 'free-epic-games.p.rapidapi.com'
    }
};

fetch('https://free-epic-games.p.rapidapi.com/free', options)
    .then(response => response.json())
    .then(response => {
        console.log(response);

           //Trending Sale
        document.getElementById("card-1").innerHTML = response.freeGames.current[0].title;
        document.getElementById("card-1-img").src = response.freeGames.current[0].keyImages[0].url;
        document.getElementById("card-1-price").innerHTML = response.freeGames.current[0].price.totalPrices.fmtPrice.discountPrice;
        document.getElementById("card-1-original-price").innerHTML = response.freeGames.current[0].price.totalPrices.fmtPrice.originalPrice;


           //Current Free Games
        document.getElementById("card-2").innerHTML = response.freeGames.current[1].title;
        document.getElementById("card-2-img").src = response.freeGames.current[0].keyImages[0].url;
        document.getElementById("card-2-price").innerHTML = response.freeGames.current[0].price.totalPrices.fmtPrice.discountPrice;
        document.getElementById("card-2-original-price").innerHTML = response.freeGames.current[0].price.totalPrices.fmtPrice.originalPrice;

        document.getElementById("card-3").innerHTML = response.freeGames.current[2].title;
        document.getElementById("card-3-img").src = response.freeGames.current[0].keyImages[0].url;
        document.getElementById("card-3-price").innerHTML = response.freeGames.current[0].price.totalPrices.fmtPrice.discountPrice;
        document.getElementById("card-3-original-price").innerHTML = response.freeGames.current[0].price.totalPrices.fmtPrice.originalPrice;

        //Upcoming Games
        document.getElementById("card-4").innerHTML = response.freeGames.upcoming[0].title;
        document.getElementById("card-4-img").src = response.freeGames.current[0].keyImages[0].url;
        document.getElementById("card-4-price").innerHTML = response.freeGames.current[0].price.totalPrices.fmtPrice.discountPrice;
        document.getElementById("card-4-original-price").innerHTML = response.freeGames.current[0].price.totalPrices.fmtPrice.originalPrice;

        document.getElementById("card-5").innerHTML = response.freeGames.upcoming[1].title;
        document.getElementById("card-5-img").src = response.freeGames.current[0].keyImages[0].url;
        document.getElementById("card-5-price").innerHTML = response.freeGames.current[0].price.totalPrices.fmtPrice.discountPrice;
        document.getElementById("card-5-original-price").innerHTML = response.freeGames.current[0].price.totalPrices.fmtPrice.originalPrice;
    })
    .catch(err => console.error(err));