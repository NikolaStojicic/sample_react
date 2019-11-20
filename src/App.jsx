import React from 'react'
import Button from './components/Button';


// function App(props) {
//   return (
//     <div className="className">
//       Hello world!!! ja sam {props.ime}
//     </div>
//   )
// }
// Onda se pravi Button

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      brojac: 0,
      trenutniKorisnik: ''
    }
  }

  povecajBrojac() {
    /*asinhrona funkcija, ne znamo kad ce se izvrsiti,
   ne bi trebalo da koristimo state 
   odmah nakon mutacije, jer ne znamo da li ce biti izvrsen*/
    // this.setState({
    //   brojac: 2
    // });

    /*Pokazi im i ovu direktnu mutaciju koja nije dobra*/
    // this.setState({ brojac: this.state.brojac + 1 });

    /*Ovako se mutira state, bez da se desi greska*/
    this.setState(state => ({
      brojac: ++state.brojac
    }), () => {
      console.log(this.state.brojac);
    });
  }

  render() {
    return (
      <div className="App">
        Hello world! ja sam {this.props.ime}
        brojac: {this.state.brojac}
        <Button izvrsiOvo={this.povecajBrojac.bind(this)} />
      </div>
    )
  }
}
export default App;