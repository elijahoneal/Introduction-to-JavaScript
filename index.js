/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votingAge = 18;
let age = 105;
if( age >= 18){
    console.log(true);
} else {
    console.log(false);
}



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let driverLicense;
let driverAge = 21

if (driverAge < 18){
    driverLicense = 'Permit';
    console.log(driverLicense);
} else if(driverAge >= 18){
    driverLicense = "Standard License";
    console.log(driverLicense);
}


//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
Number('1999');




//Task d: Write a function to multiply a*b 
const multiply = (a,b) => a * b;




/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
const dogYears = (humanAge) => {
 return humanAge * 7;

} 

console.log(dogYears(25));


/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
const dogFeeder = (dogWeight, dogAge) => {
    if(dogWeight <= 5 && dogAge >= 1){
        return dogWeight * .05;
    } else if((dogWeight >= 6 && dogWeight <= 10) && dogAge >= 1 ){
        return dogWeight * .04;
    } else if((dogWeight >= 11 && dogWeight <= 15) && dogAge >= 1 ){
        return dogWeight * .03;
    } else if(dogWeight > 15 && dogAge >= 1) {
        return dogWeight * .02;
    } else if(dogAge >= .2 && dogAge <= .4){
        return dogWeight * .1;
    } else if(dogAge > .4 && dogAge <= .7 ){
        return dogWeight * .05;
    } else if(dogAge > .7 && dogAge < 1 ){
        return dogWeight * .04;
    } 

    
}

console.log(dogFeeder(15,1));



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
const rpsGame = userInput => {
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
        console.log('You chose ' +  userInput);
    } else {
        console.log('Not Valid');
    };

    computerChoice = ['rock', 'paper', 'scissors'];
    randomNum = Math.floor(Math.random() * 3 );
    computerInput = computerChoice[randomNum];
    console.log('Computer chose ' + computerInput);

    if(userInput === computerInput ){
        console.log('Tie Game')
        return 'No Winners';
        };

    if(userInput === 'rock' ){
        if(computerInput === 'scissors'){
            console.log('You win');
        } else {
            console.log('Computer wins');
        }
    };

    if(userInput === 'paper' ){
        if(computerInput === 'rock'){
            console.log('You win');
        } else {
            console.log('Computer wins');
        }
    };

    if(userInput === 'scissors' ){
        if(computerInput === 'paper'){
            console.log('You win');
        } else {
            console.log('Computer wins');
        }
    };

   

};
rpsGame('paper');

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

const metricConverterKM = km =>{
    let mileConversion = km / 1.609;
    console.log(mileConversion + ' miles'); 
};
metricConverterKM(10)



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
const metricConverterFT = ft =>{
    let footConversion = ft * 30.48;
    console.log(footConversion + ' centimeters'); 
};  
metricConverterFT(5);




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
//   let bottles;

for (let i = 99; i >= 90; i-- ){
    console.log(`${i} bottles of soda on the wall, ${i} bottles of soda, take one down pass it around ${i -1} bottles of soda on the wall`);
}



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
const gradeCalculator = grade => {
    if(grade >= 90){
        console.log('A');
    } else if(grade < 90 && grade >= 80){
        console.log('B');
    } else if(grade < 80 && grade >= 70){
        console.log('C');
    } else if(grade < 70 && grade >= 60){
        console.log('D');
    } else {
        console.log('F');
    };
};
gradeCalculator(10);
  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





