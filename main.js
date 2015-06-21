//make an array of the words
var words = 'Asim Khanal Is The Greatest Person In The World And Nobody Can dispute That'.toLowerCase().split(' ');

//initialize the no. of wrong & right choices
var wrongs = 0;
var rights = 0;

//get a random word from the array
function getWord()
{
	var num = parseInt(Math.random()*words.length);
	return words[num];
}
var word = getWord();
len = word.length;
//assign an area as canvas
var canvas = document.getElementById("canvas");
var actual = document.getElementById('word');
var hangman = document.getElementById('hangman');
var warning = document.getElementById('warning');
for (var i =0; i < len; i++)
{
	canvas.innerHTML += "_&nbsp";
	actual.innerHTML += '*&nbsp';
}

//get the letter submitted
$('#letterForm').submit(function() {
  letter = ($(this).serialize())[7].toLowerCase();
  checkWord(letter);
  return false;
});

//a function to check if the letter is in the word
function checkWord(letter)
{
	var position = word.indexOf(letter);
	if (position == -1)
	{
		hang();
		gameOver();	
	}
	else
	{
		while (position != -1)
		{
			actual.innerHTML = actual.innerHTML.replaceAt(position*2,letter);
			word = word.replace(letter,'*');
			position = word.indexOf(letter);
			rights++;	
		}
		checkWin();
	}
}

//a function to replace a character at a particular string
String.prototype.replaceAt=function(index, character) {
	var word = this.replace(/&nbsp;/g,'@');
    return (word.substr(0, index) + character + word.substr(index+character.length)).replace(/@/g,'&nbsp;');
}

//function if the wrong letter
function hang()
{	
	wrongs++;
	var letter = hangman.innerHTML[hangman.innerHTML.indexOf('.')-1];
	hangman.innerHTML = hangman.innerHTML.replace(letter,wrongs);
}

//check if game over
function gameOver()
{
	if (wrongs >= 6)
	{
		alert("Game Over!!");
		location.reload();
	}
	else
	{
		warning.innerHTML = "<h2>Wrong choice!!</h2>";	
	}
}

//check if you win the game
function checkWin()
{
	if (rights >= word.length)
	{
		alert("You win!!");
		location.reload();
	}
}