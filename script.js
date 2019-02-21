$.getJSON("https://api.pokemontcg.io/v1/cards?supertype=pokemon", function(data){
var card,card2; //variables to save the card of the pokemon
var pokeName,pokeName2; //variables to save the name of the pokemon
var type,type2; //variables to save the type of the pokemon
var hp,hp2; //variables to save the health of the pokemon
var weaknesses,weaknesses2; //variables to save which type of pokemon it is weak against
var winner=""; //variable to tell which pokemon won
//i & j are variables to get a random number to get random pokemon everytime
var i = Math.floor(Math.random() * 100);
var j = Math.floor(Math.random() * 100);
card = data.cards[i].imageUrl;
card2 = data.cards[j].imageUrl;
pokeName = data.cards[i].name;	
pokeName2 = data.cards[j].name;	
type = data.cards[i].types[0];
type2 = data.cards[j].types[0];
weaknesses = data.cards[i].weaknesses[0].type;
weaknesses2 = data.cards[j].weaknesses[0].type;
hp = data.cards[i].hp;
hp2 = data.cards[j].hp;
$('.card').attr('src',card);
$('.name').append(pokeName);
$('.type').append(type);
$('.hp').append(hp);
$('.weakness').append(weaknesses);
//Same for second pokemon information
$('.card2').attr('src',card2);
$('.name2').append(pokeName2);
$('.type2').append(type2);
$('.hp2').append(hp2);
$('.weakness2').append(weaknesses2);

//conditions to check which pokemon one the battle
if((type=="Bug"||type2=="Bug")&&(type=="Fire"||type2=="Fire"))
{
	if(type=="Bug") 
	{
		console.log(pokeName2+" has won the battle.");
		winner=pokeName2+" has won the battle.";
	}
	else 
	{
		console.log(pokeName+" has won the battle.");
		winner=pokeName+" has won the battle.";
	}
}
else if((type=="Dark"||type2=="Dark")&&(type=="Bug"||type2=="Bug"))
{
	if(type=="Dark") 
	{
		console.log(pokeName2+" has won the battle.");
		winner=pokeName2+" has won the battle.";
	}
	else 
	{
		console.log(pokeName+" has won the battle.");
		winner=pokeName+" has won the battle.";
	}
}
else if(type=="Dragon"&&type2=="Dragon")
{
	{
		console.log("Can't tell who has won the battle.");
		winner=pokeName2+" has won the battle.";
	}
}
else if((type=="Lightning"||type2=="Lightning")&&(type=="Ground"||type2=="Ground"))
{
	if(type=="Lightning") 
	{
		console.log(pokeName2+" has won the battle.");
		winner=pokeName+" has won the battle.";
	}
	else 
	{
		console.log(pokeName+" has won the battle.");
		winner=pokeName+" has won the battle.";
	}
}
else if((type=="Fairy"||type2=="Fairy")&&(type=="Poison"||type2=="Poison"))
{
	if(type=="Fairy") 
	{
		console.log(pokeName2+" has won the battle.");
		winner=pokeName2+" has won the battle.";	
	}
	else 
	{	
		console.log(pokeName+" has won the battle.");
		winner=pokeName+" has won the battle.";
	}
}
else if((type=="Fighting"||type2=="Fighting")&&(type=="Fairy"||type2=="Fairy"))
{
	if(type=="Fighting") 
	{
		console.log(pokeName2+" has won the battle.");
		winner=pokeName2+" has won the battle.";
	}
	else 
	{
		console.log(pokeName+" has won the battle.");
		winner=pokeName+" has won the battle.";
	}
}
else if((type=="Fire"||type2=="Fire")&&(type=="Ground"||type2=="Ground"))
{
	if(type=="Fire") 
	{
		console.log(pokeName2+" has won the battle.");
		winner=pokeName2+" has won the battle.";
	}
	else 
	{
		console.log(pokeName+" has won the battle.");
		winner=pokeName+" has won the battle.";
	}
}
else if((type=="Flying"||type2=="Flying")&&(type=="Lightning"||type2=="Lightning"))
{
	if(type=="Flying") 
	{
		console.log(pokeName2+" has won the battle.");
		winner=pokeName2+" has won the battle.";
	}
	else 
	{
		console.log(pokeName+" has won the battle.");
		winner=pokeName+" has won the battle.";
	}
}
else if((type=="Ghost"||type2=="Ghost")&&(type=="Dark"||type2=="Dark"))
{
	if(type=="Ghost") 
	{
		console.log(pokeName2+" has won the battle.");
		winner=pokeName2+" has won the battle.";
	}
	else 
	{
		console.log(pokeName+" has won the battle.");
		winner=pokeName+" has won the battle.";
	}
}
else if((type=="Grass"||type2=="Grass")&&(type=="Bug"||type2=="Bug"))
{
	if(type=="Grass") 
	{
		console.log(pokeName2+" has won the battle.");
		winner=pokeName2+" has won the battle.";
	}
	else
	{
		console.log(pokeName+" has won the battle.");
		winner=pokeName+" has won the battle.";
	}
}
else if((type=="Ground"||type2=="Ground")&&(type=="bug"||type2=="Bug"))
{
	if(type=="Ground") 
	{
		console.log(pokeName2+" has won the battle.");
		winner=pokeName2+" has won the battle.";
	}
	else 
	{
		console.log(pokeName+" has won the battle.");
		winner=pokeName+" has won the battle.";}
	}
else if((type=="Ice"||type2=="Ice")&&(type=="Fight"||type2=="Fight"))
{
	if(type=="Ice") 
	{
		console.log(pokeName2+" has won the battle.");
		winner=pokeName2+" has won the battle.";
	}
	else 
	{
		console.log(pokeName+" has won the battle.");
		winner=pokeName+" has won the battle.";
	}
}
else if((type=="colorless"||type2=="colorless")&&(type=="Fight"||type2=="Fight"))
{
	if(type=="colorless") 
	{
		console.log(pokeName2+" has won the battle.");
		winner=pokeName2+" has won the battle.";
	}
	else 
	{
		console.log(pokeName+" has won the battle.");
		winner=pokeName+" has won the battle.";
	}
}
else if((type=="Poison"||type2=="Poison")&&(type1=="Ground"||type2=="Ground"))
{
	if(type=="Poison") 
	{
		console.log(pokeName2+" has won the battle.");
		winner=pokeName2+" has won the battle.";
	}
	else 
	{
		console.log(pokeName+" has won the battle.");
		winner=pokeName+" has won the battle.";
	}
}
else if((type=="Psychic"||type2=="Psychic")&&(type=="Bug"||type2=="Bug"))
{
	if(type=="Psychic") 
	{	
		console.log(pokeName2+" has won the battle.");
		winner=pokeName2+" has won the battle.";
	}
	else
	{
		console.log(pokeName+" has won the battle.");
		winner=pokeName+" has won the battle.";
	}
}
else if((type=="Rock"||type2=="Rock")&&(type=="Fight"||type2=="Fight"))
{
	if(type=="Rock") 
	{
		console.log(pokeName2+" has won the battle.");
		winner=pokeName2+" has won the battle.";
	}
	else 
	{
		console.log(pokeName+" has won the battle.");
		winner=pokeName+" has won the battle.";
	}
}
else if((type=="Metal"||type2=="Metal")&&(type=="Fight"||type2=="Fight"))
{
	if(type=="Metal") 
	{
		console.log(pokeName2+" has won the battle.");
		winner=pokeName2+" has won the battle.";
	}
	else 
	{
		console.log(pokeName+" has won the battle.");
		winner=pokeName+" has won the battle.";
	}
}
else if((type=="Water"||type2=="Water")&&(type="Lightning"||type2=="Lightning"))
{
	if(type=="Water") 
	{
		console.log(pokeName2+" has won the battle.");
		winner=pokeName2+" has won the battle.";
	}
	else 
	{
		console.log(pokeName+" has won the battle.");
		winner=pokeName+" has won the battle.";
	}
}
else
{
	console.log("Battle can't be determined.");
	 winner="Battle can't be determined.";
}
$('.winner').append(winner);
});
var info = document.getElementById('info');
function onYouTubePlayerAPIReady() {
  var player = new YT.Player('player', 
  {
      videoId: '5mRJ97eV7M4', // this is the id of the video at youtube (the stuff after "?v=")
      loop: true,
      events: 
	  {  
          onReady: function (e) 
		  {
              e.target.playVideo();
          }
      }
  }
  );
  
}