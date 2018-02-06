import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import Critters from './Critters.jsx';
import axios from 'axios';

/*

  Main.jsx is our main parent component for our app. For this tiny application, we will keep all our our state in Main.jsx. Our state should keep track of whether we are wanting to see our dog, cat, or snake critters and the critter data itself!

  Our Navbar component has our buttons that will control whether we are viewing dogs, cats, or snakes, and also a button to clear all the critters.

  The Critters component should take critters as a prop and then render out the list of critters.

  Take a stab at building out this app! If you need additional direction, see the step by step guide at the bottom of this file.

*/

export default class Main extends Component {

  constructor(){
    super();
    this.state = {
      critters: [],
    }
    this.selectCritters = this.selectCritters.bind(this)
  }

  selectCritters(critter){
    axios.get(`/api/${critter}`)
    .then(res => res.data)
    .then(critters => {
      this.setState({critters})
    })
  }

  render() {
    return (
      <div>
        <div id="header">
          <h1>Gallery of Cute</h1>
        </div>
        <Navbar selectCritters={this.selectCritters}/>
        <Critters critters={this.state.critters}/>
      </div>
    )
  }
}


/*

 Want more details? Don't blame ya. Here's a step by step list of instructions:

 1. First, we need a way to get our data! This means Ajax! Even before that though, we need a place to store our data. Build out a constructor for Main.jsx, and instantiate your state.

 2. Now we have some choices - how are we going to get our critter data? You have two options. We could use a single AJAX request to get ALL of the critter data and store it in our state once our component mounts, or we can do an individual AJAX request for each type of critter once one of our navbar buttons has been clicked. I'm not going to tell you which to do. Play with both! I think the first approach is more efficient for our app, but the second approach will probably be more straightforward.

 3. No matter which approach we took, we'll need to pass our critter data into <Critters />. Even if you don't have the data yet, give <Critters /> a critters attribute which will eventually be an array of objects. Flesh out the rendered jsx in Critters.jsx so that you can map over this array and show the name and image of each critter

 4. Now let's create a method in our Main component that will be in charge of updating the state with a) whether we want to see dogs, cats, or snakes and b) the actual data. How you decide to store/grab this data is heavily dependent on how you decided to use AJAX to get your data in #2.

 5. Bring it all together! Make sure your method is bound to Main, and then pass it to the Navbar component! In Navbar we can use an `onClick` property on our buttons to call this method, and pass in 'dogs', 'cats', or 'snakes' :)

 Good luck! And have fun.

*/
