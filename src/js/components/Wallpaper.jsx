import React, { Component } from 'react';
import Typed from 'typed.js';

let timeoutInMiliseconds = 10000;
let timeoutId;
let run_once = false;
let wallpaper = false;
let setup = [];
let punchline = [];

class Header extends Component {
  componentDidMount() {
    //startIdleTimer
    this.setupTimers();
  }

  setupTimers() {
    document.addEventListener("mousemove", this.resetTimer, false);
    document.addEventListener("mousedown", this.resetTimer, false);
    document.addEventListener("keypress", this.resetTimer, false);
    document.addEventListener("touchmove", this.resetTimer, false);

    timeoutId = setTimeout(() => {
      document.querySelector('.ur_idle__bitch').style.display = 'block';
      wallpaper = true;
      this.getJoke();
    }, timeoutInMiliseconds);
  }

  resetTimer() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      document.querySelector('.ur_idle__bitch').style.display = 'block';
      wallpaper = true;
      this.getJoke();
    }, timeoutInMiliseconds);

    document.querySelector('.ur_idle__bitch').style.display = 'none';
    if(wallpaper === true) {
      setup.destroy();
      punchline.destroy();
      wallpaper === false;
    }
  }

  getJoke() {
    let joke = [];
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
      joke = data;
    })

    .catch(function (err) {
        console.log("Something went wrong!", err);
    });

    setTimeout(() => {
      //give the fetch some time.. please
      this.showJoke(joke);
    }, 3000);
  }

  showJoke(joke) {
    let t1, t2, t3, t4;
    if(run_once == false) {
      let urInactive_one = {
        strings: ["Seems like you're away... "],
        typeSpeed: 50,
        showCursor: false
      };
      t1 = new Typed('.ur_idle__bitch .sentence_one', urInactive_one);

      let urInactive_two = {
        strings: ['time for a joke.'],
        typeSpeed: 50,
        showCursor: false
      };

      setup = {
        strings: [joke.setup],
        typeSpeed: 60,
        showCursor: false
      };

      punchline = {
        strings: [joke.punchline],
        typeSpeed: 40,
        showCursor: false
      };

      setTimeout(() => {
        t2 = new Typed('.ur_idle__bitch .sentence_two', urInactive_two);
      }, 3000);

      setTimeout(() => {
        t3 = new Typed('.random_joke__setup', setup);
      }, 7000);

      setTimeout(() => {
        t4 = new Typed('.random_joke__reply', punchline);
      }, 14000);

      setTimeout(() => {
        this.resetJoke(t1, t2, t3, t4);
        run_once = true;
      }, 20000);
    }

    if(run_once) {
      setup = {
        strings: [joke.setup],
        typeSpeed: 60,
        showCursor: false
      };

      punchline = {
        strings: [joke.punchline],
        typeSpeed: 30,
        showCursor: false
      };

      t3 = new Typed('.random_joke__setup', setup);


      setTimeout(() => {
        t4 = new Typed('.random_joke__reply', punchline);
      }, 7000);

      setTimeout(() => {
        this.resetJoke(t1, t2, t3, t4);
        run_once = true;
      }, 13000);
    }

  }

  resetJoke(urInactive_one, urInactive_two, setup, punchline) {
    setup.destroy();
    punchline.destroy();
    if(wallpaper) {
      this.getJoke();
    }
  }


  render() {
    return (
      <section className="ur_idle__bitch">
        <article className="random_joke">
          <header>
            <p className="sentence_one"></p>
            <p className="sentence_two"></p>
          </header>
          <span className="random_joke__setup"></span>
          <span className="random_joke__reply"></span>
        </article>
      </section>
    );
  }
}

export default Header;
