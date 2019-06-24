import React, {Component} from 'react';
import Images from './images.json'
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import './App.css'


//global array of images 
const images = [...Images]
console.log('images:', images)



class App extends Component {
  state = {
      Images,
      score: 0,
      topScore: 0,
    
  }

  componentDidMount() {
    alert(
      "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tHow To Play\n\r Click on the different vegetables, but try not to click on the same vegetable more than once \n\n If your current score is higher than the current top score then you'll have the new top score \n\n If you get a score of 16 then you're a memory master!!"
      )
  }

  //function that resets the game 
  gameOver = () => {

    /* at the end of the game if the score saved in state is larger than the topScore saved in state
    set the topScore to be the score */

    if (this.state.score > this.state.topScore) {
      this.setState({topScore: this.state.score}, 
        function() {
        console.log(this.state.topScore);
      });
    }
    //reset the images count to 0
    this.state.Images.forEach(images => {
      images.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);

    //reset the score to 0
    this.setState({score: 0});
    return true;
  }
  
  //function that handles the clicks for each image, it takes in an id
  clickCount = id => {
    this.state.Images.find((Image, i) => {
      // if an image with the id matches one in the JSON file full of images
      if (Image.id === id) {

        //if the image count is === 0 when it is clicked increase it 
        if(Images[i].count === 0){
          Images[i].count += 
          //and set the score state + 1
          this.setState(
            {score : this.state.score + 1}, 
            
            function(){
            console.log(this.state.score);
          });


          this.state.Images.sort(() => Math.random() - 0.5)
          return true; 

        } else {

          this.gameOver();
        }
      }
    });
  }

  //fisher-yates shuffle 
shuffle = (array) => {
  var m = array.length, t, i;
  
      // While there remain elements to shuffle…
      while (m) {
    
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
    
        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }
  const domArray = array.map((item) => {
      let url =process.env.PUBLIC_URL + item.src;
      return <Card key={item.id} id={item.id} src={url} clickCount={this.clickCount}/>
  });    
  return domArray;
}
  render () {
    return (
      <div>
        <Header score={this.state.score} topScore={this.state.topScore} />
        <div className="wrapper">
        {this.shuffle(Images)}
        </div>
      </div>
    );
  }

}

export default App;