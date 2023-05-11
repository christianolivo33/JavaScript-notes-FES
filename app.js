    //   ``````````````````````````           JAVASCRIPT CRASH COURSE OVERVIEW          ``````````````````````````````````````
    //   ---------we will be learning and discussing in detail on these topics------
    //  I---------Data types & variables 
    //  II--------Conditionals      
    //  III-------Loops      
    //  IV--------Functions
    //  V---------Arrays    
    //  VI--------Objects       
    //  VII-------DOM
    // 
    // 
    // 
    // -------------------Part I: DATA TYPES AND VARIABLES-------------
    // ----------------------------------------------------------------
    // 
    // 
    // ~~~~~~~~~~~~~~~~~~~~DATA TYPES
    // What are data types in JavaSccript?
    // data types help us organize data for example
    // 
    //  . STRING------->  "100"  "Frontend Simplified is amazing" "Hello World"
    // if we want a specific character inside of a string like for the name DAVID we want the first letter only to show. 
    //                  ~~~~~ D=0  A=1  V=2  I=3  D4 ~~~~~~
    // Just put the number of the letter inside the bracket->[] after the string for example:   
    // console.log('david' [0]) ---> will output the leter "D"
    //  console.log('Hello World'[10]) ---> will output the leter "d"
    // you can also figure out the string length by inputing .length after your strings for example:
    // console.log('Hello World'.length) ---> will output 11 
    // 
    // . NUMBER--------> basically, any number you see is of the number data type here are some examples of data type numbers
    //       2,   10.5, and  -5 are all examples of number data type entrys
    //  when programming, these are the things you need to know concerning data type numbers: 
    // * = Multiplication, / = Divide, + = Add, - = minus, 
    // programing also respects the order of operation which means if you-- 100 / (4 * 5) you are going to get the answer in the paranthesis first then the outer equation after whci you wll 
    // get the outcome of 5 as your answer for this equation.
    // programming also gives us an operation that will calculate the remainder for us which is this symbol --> % <-- so for example
    // 15 % 5 = 0 because 5 is perfectly divisible to 15 so there is no remainder.
    // but if we do 16 % 5 = 1 we get 1 because it leaves us with a remainder of 1.
    // and this is pretty much all the math you will need to know in frontend Developement
    // 
    //  . BOOLEAN--------> a Boolean data type is literally just TRUE and FALSE for example:
    //  heading back to the console if you wanted to check if 5 < 10 the output will come out as true
    //  if we wanted to check if 5 > 10 the outcome will come out as false
    // 
    //  . UNDEFINED --------> means the value was never set in the first place. Basiclly, it never existed.
    // uncommon to have around and very similar to the NULL data type
    // 
    //      ~~~~~~~it is a common interview question to know the difference between UNDEFINED and NULL~~~~~
    // 
    //  . NULL --------> refers to the value of nothing and if you see NULL in your code it means the developer 
    //  specifically set the variable to NULL or nothing
    // 
    //  . NaN --------> stands for Not a Number and you pretty much never want to see this because it means there was an error when a programmer was inputing numbers for example:
    //  if we go over to our console and input 'Christian' /5 the output will say NaN because you cant divide a string by a number
    // 
    // ~~~~~~~~~~~~~~~~~~VARIABLES 
    // what are variables used for? They are used to store data
    //  all values are stored in variables
    //   variables are used very often
    //   how do you define a variable? here are 3 ways to:
    //   ~~~~~~~ it is a common interview quetion to know the diference between all three ~~~~~
    //   the only two that you really need to learn are LET and CONST
    // 
    // . VAR ----> is super outdated, and if your'e in a top tech company they actually don't let you use this and wil most likely pop up as an error
    //
    // . LET -----> we use the LET to store strings, numbers and booleans in a variable 
    //  here's an example of all three:
    // LET example using a boolean -  let isRaining = true  
    // LET example using a string - let planet = 'Earth'
    // LET example using  a number - let temperature = 20
    // because we initialized the variable with the key word LET means we can change the value for example:
    // 
    // 1 let isRaining = true      **side note** --> since we can't use spaces in variables we capitalize the next wordInstead as used in line 1, and this is called camel case.
    // 2 let planet = 'Earth'
    // 3 let temperature = 20
    // 4 
    // 5 temperature = 22  OR  temperature = temperature + 22  OR  temperature = temperature + 2 -----> the output will make the temperature 22 now because we used a LET variable
    // here's a let excercise/example for reference:
    // 
    //  let celsius = 10
    // let farenheit  = celsius * 1.8 + 32
    // console.log(farenheit)   ----->>>output on console = 50

    // . CONST -----> is almost the exact same as let but the only difference is that you cannot change or reassign anything for example:
    //  1 const isRaining = true  
    //  2 const planet = 'Earth'
    //  3 const temperature = 20
    //  4
    //  5 temperature = temerature + 2 
    //  6 console.log(temperature) ---------> the output on the console will show an error because of line 5, since the const variable can't be changed 
    // once you define a const variable you cannot change it. you cannot ressign another value to it.
    // CONST is a really hard concept for beginners to understand.
    // 
    // ~~~~~~~~~~~~~~EQUALITY
    // 
    // " == " -----------> Checks the values on the left and right and if both values match the output on the console will come back as true 
    // here's an example using " == ":
    // let bool = '1' == 1
    //  console.log(bool) console---> true only because == checks if the left and right values are equal
    // 
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~ Common interview question is knowing the differernce between the two
    // 
    // " === " ---------------> Compares the values AND types with eachother
    //  let bool = '1' === 1
    //  console.log(bool)  console-----> false because the " === " checks the types as well and it's going to see that the variable isn't true
    // 
    //  **Very rarely do you want to use " == " you almost always want to use " === " because it adds a bit more type safety into your code**
    // 
    //  " !== " --------> is to see if values and types are NOT equal
    //  " != " ---------> is to see if both values are equal to eachother
    // 
    // 
    // ----------------------------------------Part II: CONDITIONALS
    // -------------------------------------------------------------------------
    // For example on the FES page if you are subscribed then they will show you all the videos and content, and if you arent subscribed the videos won't show.
    // this process is called the IF and ELSE condition here are some examples:
    // 
    // IF and ELSE condition -------------------------->
    // 
    // **the else statement only runs when the IF statement does NOT run and is false so 
    //  ** Console Output ---> 'show the video' **
    // let subscribed = true
    // 
    // if (subscribed === true) {
    //     console.log('show the video')
    // }
    //                                  
    // else {
    //     console.log('tell user to log into account')
    // }
    // ```````````````````````````````````````````````````````````````````
    //  Here's an example of what the ELSE statement will do if the IF statement is false:
    //      ** Console Output ----> ' tell user to log into account '
    // IF and ELSE condition ------> let subscribed = true
    // 
    // if (subscribed === true) {
    //     console.log('show the video')
    // }
    // else {
    //     console.log('tell user to log into account')
    // }
    // you can't just have an ELSE statement by itself you NEED to have am IF statement in order to use an ELSE statement.
    // `````````````````````````````````````````````````````````````````````
    // 
    // ELSE IF condition -------------> for example and in reference to the other examples what if the user logs in but isn't subscribed how would we tell them 
    // to become a subscriber? well that's what the ELSE IF condition is used for.
    // for example:
    // 
    // let subscribed = false 
    // let loggedIn = true
    // 
    // if (subscribed === true) {
    //     console.log('show the video')
    // }
    // else if (loggedIn === true) {
    //     console.log('tell user to upgrade their subscription')
    // }
    // else {
    //     console.log('do not show the video')
    // }
    // 
    // LOGICAL OPERATORS ------->
    // & & ---> checks if the left AND right side of the comparisons are true.
    // for example: true && true --> true
    //              true && false --> false         ** looking for BOTH values to be true **        
    //              false && true --> false
    //              false && false --> false
    //  here is a coded example of using && :
    // 
    // 
    // | | ---> checks if the left OR the right side of the comparisons are true.
    // for example:  true || true --> true
    //               true || false --> true         ** looking for ONE value to be true **        
    //              false || true --> true
    //              false || false --> false
    // 
    // 
    // TERNARY OPERATORS -------------> A shortcut for an IF ELSE condition and is like an IF ELSE condition except you can do it on line and is super easy which is why develpoers love doing it.
    // 
    // here is a coded example of using TERNARY OPERATORS and im gonna break down what each section in the line represent below:
    // hot ? ----> represents the condition kinda like the IF statement. It's on the left hand side
    // console.log('weather is hot outside') ----> is the truthy value
    //  console.log('weather is cold') ----> is the falsy value
    // CODE BELOW:
    // let hot = true
    // 
    // hot ? console.log('weather is hot outside') : console.log('weather is cold')            **output will say, 'weather is hot outside'**
    // let hot = false
    // 
    // hot ? console.log('weather is hot outside') : console.log('weather is cold')            **output will say, 'weather is cold'**
    // 
    // now let's combine TURNARY OPERATORS and LOGICAL OPERATORS   using FES as a reference:
    // 
    // let subscribed = true                ** output will say 'show the video' **
    // let loggedIn = true
    // 
    // let str = subscribed && loggedIn ? 'show the video' : 'hide the video'
    // console.log(str)
    // 
    //  ** but if we use the same equation and change let subscribe to false the out put will say  'hide the video' **
    // ** you only want to use TURNARY OPERATORS when the line of code you want to execute is just ONE line of code **
    // ** however, if you want to execute multiple logic based on your condition, 
    // that's when IF statements come in
    // and you can actually write a lot of code inside those blocks **
    // 
    // another TURNARY OPERATOR coded below:
    //     let cash = 50 
    //     let price = 40 
    //     let isStoreOpen = true
    // 
    //    let str =  cash >= price && isStoreOpen ? 'give receipt' : 'do not give receipt'
    //     console.log(str)

//--------------------------------------- Part III: LOOPING
// --------------------------------------------------------------------
// 
// LOOPS -----> Repeat the same code over and over againg
// 
// in programming theres a principle called DRY
// ~~~~ DRY = don't repeat yourself
// 
// what are the types of loops in javaScript?
// FOR LOOP ----> is the prefered way of loopig
// EXAMPLE OF FOR LOOPING
// for (let i = 0; i < 100; i = ++i) {
//     console.log(i + 1);
// }
//  
//  * to land a job as a frontend developer all you need to know is the FOR LOOP *
// 
// WHILE LOOP ----> heres an example in code:
// 
//  let count = 1 ;
// 
// while (count <= 100) {
//     console.log(count)
//     count = count + 1;
// }
// 
// here is an example of making a list of 1-100 using the while loop:
// let count = 1;

// while (count <= 100 ) {
//     console.log(count)
//     count = count + 1
// }
// `````````````````````````````````````````````````````````` MAINLY USE ````````````````````````````````
// ----> EXAMPLE PRACTICE FOR for-loops
// ~~~~~~ this is the famous Fizz Buzz interview question they may ask ~~~~~~~
// write a for-loop that loops through 1 to 20 
// if the number is divisible by 3, print"Frontend"
// if the number is divisible by 5, print "simplified"
// if the number is divisible by 3 and 5, print "Frontend Simplified"
// if the number is NOT divisible by 3 and 5, print the number
// CODED EXAMPLE OF HOW WE CAN USE A FOR LOOP
// OPEN IN LIVE SERVER AND CLICK CONSOLE IN THE INSPECT 
// THIS IS A COMMON INTERVIEW EQUATION 
// % IS THE SYMBOL TO SEE IF THE NUMBER IS DIVISIBLE BY SOMETHING
// 
//  for (let i = 1; i <= 20; i = ++i) {
//     if (i % 3 === 0 && i % 5 === 0) {
//     console.log(`${i} -> Frontend Simplified`)}
//   else  if (i % 3 === 0) {
//         console.log (`${i} -> Frontend`)
//      }
//    else if (i % 5 === 0) {
//     console.log(`${i} -> Simplified`)
// }
//     else {
//         console.log(`${i} -> ${i}`)
//     }
// }
// ````````````````````````````````````````````````````````````
//                    ANOTHER EXAMPLE OF A FOR-LOOP
//      ** print out every character from the string: "Frontend Simplified" **
// to loop over every single index in the string all you have to do is loop until i (index)
// is <= str.length as shown below
// const str = "Frontend Simplified" 
// for (let i = 0; i < str.length; ++i) {
//    console.log(str[i])
// }
// 
// 
// ---------------------------------FUNCTIONS--------------------------
// ----------------------------------------------------------------------
// 
//  FUNCTION DEFINIION 
// * this is where you actually set the code you want to run
// * inside of the function definition we need to accept something called a parameter for example the perameter below is NAME
// * so if we ever wanted to change the welcome, we only need to change it in one place and that is the magic of re-usable code. 
// 
// function welcomePersonToFES (firstName, lastName) {        ---> inside of the function definition we can accept as many perameters as we want for example: function welcomePersonToFES (firstName, lastName)
// console.log(`Welcome to Frontend Simplified, ${firstName} ${lastName}`) ---> in this functio we want to greet the user to FES
// }
// 
// 
// CALL THE FUNCTION
// * in order to pass a function a value from when you call the function. All we need to do is write the value in the parenthesis
// * the name for whats inside the parenthesis is called an argument
// * you need to make sure that the arguments are equal and in the same order as the parameter of the arguments in function definition----> ** 2 arguments here(firstName, lastName) and here ('Christian', 'Olivo'); **
// 
// welcomePersonToFES ('Christian', 'Olivo');
// welcomePersonToFES ('Megan', 'Olivo');
// welcomePersonToFES ('Kaiden','Olivo');
// welcomePersonToFES ('Jordan', 'Olivo');
// 
//below is the first way to declare a function, using the function keyword:
// Create a function that converts celsius to Fahrenheit 
// EXAMPLE:
// function convertCelsiusToFahrenheit (celsius) {
//    return celsius * 1.8 + 32
// }
// 
// console.log (convertCelsiusToFahrenheit (0)) 
// console.log (convertCelsiusToFahrenheit (10)) 
// console.log (convertCelsiusToFahrenheit (30)) 
// 
// 
// below is the second way to declare a function, using const and an arrow function
// 
// const convertCelsiusToFahrenheit = (celsius) => {
//     return celsius * 1.8 + 32
// }
// 
// console.log (convertCelsiusToFahrenheit (0))
// console.log (convertCelsiusToFahrenheit (10))
// console.log (convertCelsiusToFahrenheit (30))
// 
// 
// ---------------------------------------ARRAYS----------------------------
// ---------------------------------------------------------------------------------------
// 
// what are ARRAYS? Data structure that can hold multiple data values in one variable
// heres a coded example of using an ARRAY:
// 
// instead of writing each let item down like this and writing each one in a variable
// let item1 = 20
// let item2 = 30
// let item3 = 40
// let item4 = 50
// let item5 = 100
// 
// ARRAYS-----> let us put these items in ONE variable like this
// and as you can see we now have 5 items cut down into one variable
// the amazing thing about ARRAYS in JavaScript is that you not only can use numbers but you can put strings and booleans 
// but most of all you'll be using ARRAYS of just one data type
// ** CHECK WRITTEN NOTES FOR MORE INFO **
// -----> let arr = [20, 30, 40, 50, 100]
// 
// 
// 
// let's say we wanted to access the first element i n this ARRAY how would we access it?
// first element of array:
// 
// console.log(arr[0])
// 
// last element of array: also preferebly arr.length - 1 or you could hard code it and put 100
// console.log(arr[arr.length - 1])
// 
// 
// 
// ARR.PUSH METHOD -----> let's see how we can ADD elements to an ARRAY and you need to know this one because using this method is almost a gurantee if you are using ARRAYS
// JavaScript executes line by line whch is why the output shows 200 on the end of the array 
// heres a coded example below of what this means:
// arr.push(200)
// console.log(arr);
// 
// 
// ARR.FILTER METHOD -----> arr.filter(() => {})
// let arr = [20, 30, 40, 50, 100]
// [20, 30, 40]
// let newArr = arr.filter((element) => {
//     console.log(element)
//     if (element < 50) {
//    return true;
//    }
// })
// console.log(newArr)
// 
// here is the same arr.filter method but shortened up to one line of code:
// [20, 30, 40]
// let arr = [20, 30, 40, 50, 100]
// 
// let newArr = arr.filter((element) => element < 50)
// 
// console.log(newArr)
// 
// 
// 
// lets filter out the 'FAIL' elements in array
//  let grades = ['A+', 'A', 'FAIL']
// 
//  let goodGrades = grades.filter((element => element !== 'FAIL'))
// console.log(goodGrades)
// 
// now let's see how we can LOOP over every single element in this array:
// ** the index of arrays are very similar to strings **
//  in order to acces each element in this array is very similar to strings --> grades[i] for this example
// 
// let grades = ['A+', 'A', 'FAIL']
// 
// for (let i = 0; i < grades.length; ++i ) {
//     console.log(grades[i]);
// }
//  filter out all of the 'FAIL' elements in an array 
// without using the ARRAY FILTER methd
// 
// let grades = ['A+', 'A', 'FAIL']
// let goodGrades = []

// for (let i = 0; i < grades.length; ++i ) {
//     if (grades[i] !== 'FAIL') {
//         goodGrades.push(grades[i]);
//     }
// }
// console.log(goodGrades)
// 
// ARR.MAP 
// let arr =[ 1, 4, 9, 16]

// let newArray = arr.map((element) => {
//     console.log(element)
//     return undefined;
// })
// console.log(newArray)
// 
// 
// -----------------------OBJECTS---------------
// -----------------------------------------------------
//  here's a coded example of using objects:
// 
// let userFirstName = 'David'
// let userlastName = 'Bragg'
// let userDiscordId = 'David Brag#001'
// let userSubscriptionStatus = 'VIP'
// 
// 
// to define an object variable. all we need to do is use curly braces {}, so similar to arrays [] but instead objects are {}
// don't forget we can store multiple properties in one variable
// look how much cleaner the code on the bottom is versus the top one and all we did was take all the variables on the top and made them into one variable
// 
// 
// 
// let user = {
    // username: 'David',
    // email: 'david@frontendsimplified.com',
    // subscriptionStatus: 'VIP',
    // discordId: 'David Bragg#001',
// }
// now that this is all in one variable we can access any property super easy now for example if we wanted the username
// here is a coded example of what I mean:
// console.log(user.username[0]);
// 
// and just like strings we can access the first index with [0] and the output will say 'D'
// 
// and to output the user status we:
// console.log(user.subscriptionStatus)

 
// ----------------------DOM (document object model) ------------
// ----------------------------------------------------------------
// 
// 
// the first way of accessing an element:
// this is the ,most used one 
//  you want to access it just like CSS so if it has a class you want to add a ( . ), an ID ( # ) in the query selector
// -------> console.log(document.querySelector('#title')); 
// 
// you will get null but that doesnt mean it's wrong the reason why is because the JS on html is loading before we load the HTML 
// the console.log that runs our JS is looking for a query selector and there isn't one yet
// ** we need to make sure our JS is loading after the HTML finishes loading ** so how do we do that?
// there is two ways of making sure your JS loads after you finish loading your HTML: 1.) using a defer in the script tag      2.) dragging your script tag all the way at the end of your body tag


// second way of accessing an element:
// this method is prefered if your elements have an ID and also better practice
// this only works if the element has an ID 
// ----------> console.log(document.getElementById('title'))
// 
// 
// Change HTML 
// document.querySelector('#title').innerHTML += 'Frontend Simplified'

// Change CSS
// document.querySelector('#title').style.fontSize = '24px'

// 
// creating a click listener
//  go to your HTML and add onclick="changeTitleToRed()" in your button element
// function changeTitleToRed() {
//     document.querySelector('#title').style.color = 'red'
// }
// function toggleDarkMode() {
//   document.querySelector('body').classList.toggle("dark-theme")
// }


