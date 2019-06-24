# Vegetable Memory Game 

When you load the page you're greeted by a javascript alert with instructions for game play, it is launched by a `componentDidMount()`

<img width="444" alt="Screen Shot 2019-06-24 at 3 56 03 PM" src="https://user-images.githubusercontent.com/46004362/60047829-ab05f300-9698-11e9-9808-8253453209f5.png">

The game is powered by React.js.  The `app.js` page where all the logic is kept is a stateful component.  The stateful items are the score, the topscore, and the images.

<img width="239" alt="Screen Shot 2019-06-24 at 4 00 52 PM" src="https://user-images.githubusercontent.com/46004362/60048077-4b5c1780-9699-11e9-99ab-0ea5add95373.png">

The game is mainly run by a fisher/yates shuffle 
<img width="679" alt="Screen Shot 2019-06-24 at 3 58 32 PM" src="https://user-images.githubusercontent.com/46004362/60048153-82322d80-9699-11e9-8bfa-33e95abbf5be.png">

This function takes in the array which is kept in a json file, and shuffles the array into a different order each time its called in the `render()` section.  
<img width="239" alt="Screen Shot 2019-06-24 at 4 00 52 PM" src="https://user-images.githubusercontent.com/46004362/60048241-b9084380-9699-11e9-910f-960e8c2494e9.png">

Then, `array.map()` is used to loop through the newly shuffled array and apply the json files contents to the `Card` component

The `Card` component gets called in the `render()` function by `this.shuffle(Images)`. Images in this case being the contents of the json file which are spread into an array at the global leve.  Along with this, the `Header` component which uses the stateful `score` and  `topScore` information is also rendered here

<img width="564" alt="Screen Shot 2019-06-24 at 4 07 58 PM" src="https://user-images.githubusercontent.com/46004362/60048501-4186e400-969a-11e9-95a1-5434220e0e6f.png">

# Components
The components are very simple for this app.  

## Card 

The `Card` is passed the properties in the `.map()` from the `shuffle` function.  It is passed the `src`, `id`, `clickCount()`, and `score` 

<img width="496" alt="Screen Shot 2019-06-24 at 4 12 40 PM" src="https://user-images.githubusercontent.com/46004362/60048770-e7d2e980-969a-11e9-8592-433c0d4e5858.png">

The onClick component of this card uses the `Images state` to find the count in the image.  If it finds based on the images id that the count is 0, it sets it to 1, and if the count isn't 0 when the image is clicked, the game is over

<img width="558" alt="Screen Shot 2019-06-24 at 4 18 46 PM" src="https://user-images.githubusercontent.com/46004362/60049188-c1fa1480-969b-11e9-8ba8-362690c9f515.png">

## Header 

The props for the `Header` are the `score` and `topScore`, and it just simply lives at the top of the page 

<img width="614" alt="Screen Shot 2019-06-24 at 4 19 37 PM" src="https://user-images.githubusercontent.com/46004362/60049303-071e4680-969c-11e9-8d27-cf00741a65f9.png">


# Game Over

The game ends when the same image is clicked twice, at that point the `gameOver()` function is called

<img width="718" alt="Screen Shot 2019-06-24 at 4 21 46 PM" src="https://user-images.githubusercontent.com/46004362/60049473-56647700-969c-11e9-8ef7-f5bd608d6ab9.png">

If the current `score` is greater than the current `topScore`, the state of the `topScore` is set to the current `score`.  The images array is looped through and the count on each image is set back to 0.  An alert that says game over and your score is presented to you, and then the `score` state is set back to 0 and the game starts again.
