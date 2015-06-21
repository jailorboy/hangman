//make an array of the words
var words = 'Asim Khanal Is The Greatest Person In The World And Nobody Can dispute That I need a lot of words to complete this dictionary for the hangman game but I am feeling too lazy so i am inserting some random word let me see if you can guess them i highly doubt your intellectual ability let me throw in some very weighty word along with these rubbish word fuzz jazz xerox rambunctious exonerate axiom zombie kayak nepal included my country because you can not forget your motherland can you i thought so star  wars pokemon sublime text editor is the text editor i used while coding this hangman game it is one of the best text editors in the market you know looks like my javascript skills are improving a lot nowadays anyways i think this much is enough for today i will continue later on if i can think of any more words thank you if you are reading this dictionary to solve the hangman puzzle then you are a lazy person you should try to guess the word by yourself instead of reading the dictionary anyways goodbye fuchsia latrogenic glyph jukebox onyx phlegm cough sneeze'.toLowerCase().split(' ');
var usedLetters = [];

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
var toTell = word;
len = word.length;
//assign an area as canvas
var canvas = document.getElementById("canvas");
var actual = document.getElementById('word');
var hangman = document.getElementById('hangman');
var warning = document.getElementById('warning');
var used = document.getElementById('used');
for (var i =0; i < len; i++)
{
	canvas.innerHTML += "_&nbsp";
	actual.innerHTML += '*&nbsp';
}

//get the letter submitted
$('#letterForm').submit(function() {
  letter = ($(this).serialize())[7].toLowerCase();
  var check = usedLetters.indexOf(letter);
  if (check == -1)
  {
  	checkWord(letter);
  	usedLetters.push(letter);
  	used.innerHTML = '<h3>'+usedLetters.toString()+'</h3>';
  }
  else
  {
  	warning.innerHTML = "<h2>You have entered that letter already!!</h2>";
  }
  $("#letterForm")[0].reset();
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
		alert("Game Over!! The correct word is '" + toTell+"'");
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