 // This is a function that alerts the user with a "Hello World"
 function showAlert()
 {
   alert("Hello World");
 }
 
 // This is a function that alerts the user whenever they hover over a button
 function hoverButton()
 {
   alert("You hovered over this button!");
 }

 // This is a function that gathers info and determines whether the user is an adult
 function determineAge()
 {
   let x = document.getElementById("age").value;
   let y = document.getElementById("name").value;
   let returnString = "Hello " + y + " Age: " + x;

   if(x >= 18)
   {
      alert(returnString + " You are an adult!")
   }
   else
   {
      let notAdult = 18 - x;
      alert(returnString + " You are NOT an adult >:(")
      alert("Please return after " + notAdult + " years!")
   }
 }


// This is a function that increments a number by 1 while simutanelously changing a text's colour depending if the number is odd or even
 let count = 0;
 function increment()
 {
   count = count + 1;
   document.getElementById("valueIncrement").value = count;

   if (count % 2 == 0)
   {
      // Even
      document.getElementById("changingText").style.color = "blue";
   }
   else
   {
      // Odd
      document.getElementById("changingText").style.color = "red";
   }

 }


 // This function uses a for loop to repeat a user's inputted message by a declared number
function repeatMessage()
{
   let repeatNumber = document.getElementById("repeatNumber").value;
   let repeatMessage = document.getElementById("repeatMessage").value;

   for (let i = 0; i <= repeatNumber; i++)
   {
      document.getElementById("repeatFinal").append(repeatMessage + " ");
   }

}

// This function will change the background colour of a section whenever that colour is hovered over.
 function changeCSS(colour)
 {
   switch (colour)
   {
      case ("pink"):
         document.getElementById("changeCSS").style.backgroundColor = "pink";
         break;
      case ("blue"):
         document.getElementById("changeCSS").style.backgroundColor = "blue";
         break;
      case ("yellow"):
         document.getElementById("changeCSS").style.backgroundColor = "yellow";
         break;
      case ("green"):
         document.getElementById("changeCSS").style.backgroundColor = "green";
         break;
      default:
         document.getElementById("changeCSS").style.backgroundColor = "white";
   }
 }

 // This function switches two images between each other
 function pictureSwitch()
 {
   let source = document.getElementById("pictureSwitch").getAttribute("src");

   if(!source.match("./res/poster.png"))
   {
      document.getElementById("pictureSwitch").src = "./res/poster.png";
   }
   else
   {
      document.getElementById("pictureSwitch").src = "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=2488&auto=format&fit=cropixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   }
 }
 