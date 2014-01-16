var shoe = []
, playerHand = []
, dealerHand = []
, playerCount
, dealerCount;

function getShoe(){
  //Add desired number of decks to the shoe
  var deck = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11]
  , numDecks = 2;//prompt("How many decks would you like to play with? ");
  for(var i = 1; i <= numDecks; i++){
    shoe = shoe.concat(deck);   
  }
  return shoe;
}
  
function shuffle(){  
  var m = shoe.length, t, i;
  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = shoe[m];
    shoe[m] = shoe[i];
    shoe[i] = t;
    }
  return shoe;
}

function deal(){
  playerHand = [];
  dealerHand = [];
  playerHand.push(shoe.shift());
  dealerHand.push(shoe.shift());
  playerHand.push(shoe.shift());
  playerCount = playerHand[0]+playerHand[1];
  dealerCount = dealerHand[0];
  $("#playerHand .cardArea").text(playerCount);
  $("#dealerHand .cardArea").text(dealerCount);
  $("#bust","#playerLose","#playerWin").css({"display": "none"})
}

function hit(){
  playerHand.push(shoe.shift());
  playerCount += playerHand[playerHand.length - 1];
  if(playerCount > 21){
    $("#bust").css({"display": "block"});
  }
  $("#playerHand .cardArea").text(playerCount);
}

function sum(x){
  var y, z = 0;
  for (var i = 0; i<x.length; i++){
    y = parseInt(playerHand[i]);
    z += y;
  }
  return z;
}

function dealerTurn(){
  dealerHand.push(shoe.shift());
  dealerCount += dealerHand[dealerHand.length - 1];
  $("#dealerHand .cardArea").text(dealerCount);
  /*while (dealerCount < 17){
    if (dealerCount > 21){
      $("#playerWin").css({"display": "block"});
    } else if(dealerCount < 17){
      dealerHand.push(shoe.shift());
      dealerCount = sum(dealerHand);
    } else if(dealerCount => 17 && dealerCount <= 21){
      compareScore();
    }
  }*/
}
/*function compareScore(playerCount, dealerCount){
  if(playerCount > dealerCount){
    $("#playerWin").css({"display": "block"});
  } else {
    $("#playerLose").css({"display": "block"})
  }
}*/
