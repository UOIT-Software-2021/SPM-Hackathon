import React, {Component} from 'react';
import './App.css';

import {Jumbotron, Container, Button} from 'react-bootstrap';



// const cocktailByName = (name: string) => {
//   console.log("hello");
// }

// const ingredientByName = (name: string) => {

// }

// const cocktailById = (id: number) => {

// }

// const randomCoctail = () => {

// }





//removing this for now so I can put it in the component and use props to hold the input value
// const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   console.log(e.target.value);
// }

interface Drink  {
  name: string ;
  id: string;
  random:string;
  ingrediant: string;
  ingrediantName:string;
} 

interface AppProps {

}

interface AppState {
  nameValue: string;
  drinks: Drink[];

}

class App extends Component<AppProps, AppState> {
  
  private onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({nameValue: e.target.value});
    console.log("here");
  }

  private cocktailByName= (name: string) => {
    fetch (`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`).then(response=>response.json()).then(data=>{
    let drinks: Drink[] = [];
    for (let drink of data["drinks"]) {
      drinks.push({
        id: drink["idDrinks"],
        ingrediant: drink["strIngredient1"],
        ingrediantName: "",
        name: drink["strDrink"],
        random: "",
      } as Drink);
    }
    this.setState({
      drinks: drinks,
    })
  }
    
    )
    
  }
  
  private searchCocktailByIngrediantName= (ingredient: string) => {
    fetch (`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredient}`).then(response=>response.json()).then(data=> {
      
      let drinks: Drink[] = [];
      for (let drink of data["ingredients"]) {
        drinks.push({
          id: drink["idDrinks"],
          ingrediant: drink["strIngredient1"],
          ingrediantName: "",
          name: drink["strDrink"],
          random: "",
        } as Drink);
      }
      this.setState({
        drinks: drinks,
      })
    }
    // this.setState({
    //   name: data["drinks"][0]["strDrink"],
    // }
    
    )
   
  }
  private searchCocktailByIngrediant= (ingredient: string) => {
    fetch (`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`).then(response=>response.json()).then(data=>{}
    // this.setState({
    //   name: data["drinks"][0]["strDrink"],
    // })
    
    )
  
  }
  
  
  private searchCocktailById= (id: string) => {
    fetch (`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${id}`).then(response=>response.json()).then(data=>{}
    // this.setState({
    //   name: data["drinks"][0]["strDrink"],
    // })
    
    )
    
  }
  
  private searchRandom= () => {
    fetch (`https://www.thecocktaildb.com/api/json/v1/1/random.php`).then(response=>response.json()).then(data=>{}
    // this.setState({
    //   name: data["drinks"][0]["strDrink"],
    // })
    
    )
    
  }
  
  render() {
    

    const {drinks} = this.state;

    let drinkDiv = drinks.map((v) => <div>
      <p>Name: {v.name}</p>
       <p>ID: {v.id}</p>
    </div>)

    return (
 
      <div className="App">
        
        <Jumbotron fluid>
          <Container>
            <h1>Explore thousands of cocktails!</h1> 
            <Button variant="primary">Start Mixing Now!</Button>
          </Container>
        </Jumbotron>



        <input type="text" onChange={(e: any) => this.onInputChange(e)}/>
        <button type="button" onClick={() => this.searchCocktailByIngrediantName(this.state.nameValue)}>hello</button>
        <drinkDiv/>
        
      </div>
    );
  }
}

export default App;
	
	
