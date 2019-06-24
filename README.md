# Vegetable Memory Game 

When you load the page you're greeted by a javascript alert with instructions for game play, it is launched by a `componentDidMount()`

<img width="444" alt="Screen Shot 2019-06-24 at 3 56 03 PM" src="https://user-images.githubusercontent.com/46004362/60047829-ab05f300-9698-11e9-9808-8253453209f5.png">

The game is powered by React.js.  The `app.js` page where all the logic is kept is a stateful component.  The stateful items are the score, the topscore, and the images.

<img width="239" alt="Screen Shot 2019-06-24 at 4 00 52 PM" src="https://user-images.githubusercontent.com/46004362/60048077-4b5c1780-9699-11e9-99ab-0ea5add95373.png">

The game is mainly run by a fisher/yates shuffle 
<img width="679" alt="Screen Shot 2019-06-24 at 3 58 32 PM" src="https://user-images.githubusercontent.com/46004362/60048153-82322d80-9699-11e9-8bfa-33e95abbf5be.png">

This function takes in the array which is kept in a json file, and shuffles the array into a different order each time its called in the `render()` section.  
<img width="239" alt="Screen Shot 2019-06-24 at 4 00 52 PM" src="https://user-images.githubusercontent.com/46004362/60048241-b9084380-9699-11e9-910f-960e8c2494e9.png">

Then... `array.map()` is used to loop through the newly shuffled array and apply the json files contents to the `Card` component

The `Card` component gets called in the `render()` function by `this.shuffle(Images)`. Images in this case being the contents of the json file which are spread into an array at the global leve.  Along with this, the `Header` component which uses the stateful `score` and  `topScore` information is also rendered here

<img width="564" alt="Screen Shot 2019-06-24 at 4 07 58 PM" src="https://user-images.githubusercontent.com/46004362/60048501-4186e400-969a-11e9-95a1-5434220e0e6f.png">
