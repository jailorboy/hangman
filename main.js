//make an array of the words
var words = 'Asim Khanal is the greatest person in the world and nobody can dispute that'.split(' ');

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
for (var i =0; i < len; i++)
{
	canvas.innerHTML += "_&nbsp";
	actual.innerHTML += '*&nbsp';
}

//get the letter submitted
$('#letterForm').submit(function() {
  letter = ($(this).serialize())[7];
  checkWord(letter);
  return false;
});

//a function to check if the letter is in the word
function checkWord(letter)
{
	var position = word.indexOf(letter);
	if (position == -1)
	{
		alert("Wrong choice!!");
	}
	else
	{
		while (position != -1)
		{
			actual.innerHTML = actual.innerHTML.replaceAt(position*2,letter);
			word = word.replace(letter,'*');
			position = word.indexOf(letter);	
		}
	}
}

//a function to replace a character at a particular string
String.prototype.replaceAt=function(index, character) {
	var word = this.replace(/&nbsp;/g,'@');
    return (word.substr(0, index) + character + word.substr(index+character.length)).replace(/@/g,'&nbsp;');
}

