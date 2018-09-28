import React, { Component } from "react";
import classes from "./App.css";
import FunnyAnimated from "./components/FunnyAnimated/FunnyAnimated";


class App extends Component {
  state = {
    isNutella: true
  };

  onScrollHandler = () => {
    this.setState(prevState => {
      return {
        isNutella: !prevState.isNutella
      };
    });
  };

  componentDidMount() {
    setTimeout(() => {
      window.addEventListener("scroll", this.onScrollHandler);
    }, 50);
  }

  componentWillMount() {
    window.removeEventListener("scroll", this.onScrollHandler);
  }

  render() {
    const { isNutella } = this.state;
    let bgClasses = [classes.App]
    if(isNutella) {
      bgClasses.push(classes.NutellaBg)
    }else {
      bgClasses.push(classes.MinutaMadeBg)
    }

    return (
      <div className={bgClasses.join(' ')}>
        <FunnyAnimated
          isNutella={isNutella}
        />
      </div>
    );
  }
}

export default App;
