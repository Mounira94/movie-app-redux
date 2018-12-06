import React, { Component } from 'react';
import Movies from './Components/Movies';
import Search from './Components/Search';
import Add from './Components/Add'
import './App.css';
import { createStore } from 'redux'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux'
library.add(faStroopwafel);
let movie = [{ name: 'Les quatre cents coups 1959', rating: 6 },
{ name: 'La haine 1995', rating: 5 },
{ name: 'Le parrain 1972', rating: 4 },
{ name: 'C`est arrivé près de chez vous 1992', rating: 3 },
{ name: 'Apprendre à aimer 2018', rating: 1 },
]
class App extends Component {
  constructor(props) {
    super(props)
    //   this.state = {
    //     movie: [{ name: 'Les quatre cents coups 1959', rating: 6 },
    //     { name: 'La haine 1995', rating: 5 },
    //     { name: 'Le parrain 1972', rating: 4 },
    //     { name: 'C`est arrivé près de chez vous 1992', rating: 3 },
    //     { name: 'Apprendre à aimer 2018', rating: 1 },
    //     ],
    //     search: '',
    //     minRate: 0,
    //     modal: false,
    //     name: '',
    //     rating: 0,
    //     editOrSave: 'save'
    //   }
    // }
    // searchMovie = (event) => {
    //   this.setState({ search: event.target.value })
    // }
    // ratingFilter = (minRate) => {
    //   this.setState({
    //     minRate,
    //   })
    // }
    // edit = () => {

    //   let { name, rating } = this.state

    //   this.setState({
    //     movie: this.state.movie.map(x => {
    //       if (x.name === name) {
    //         return { name, rating }
    //       }
    //       return x
    //     })
    //     ,
    //     modal: !this.state.modal,
    //     editOrSave: 'save',
    //     name: '',
    //     rating: ''
    //   })
    // }
    // openModal = (name, rating) => {
    //   this.setState({
    //     name,
    //     rating,
    //     modal: !this.state.modal,
    //     editOrSave: 'edit'
    //   })
    // }
    // remove = (name) => {
    //   if (window.confirm('do you delete this one ?')) {
    //     this.setState({
    //       movie: this.state.movie.filter(x => x.name != name)
    //     })
    //   }
    // }
    // toggleModal = () => {
    //   this.setState({ modal: !this.state.modal });
    // };
    // hundleChange = e => {
    //   this.setState({
    //     [e.target.id]: e.target.value
    //   });
    // };
    // addMovie = () => {
    //   let { name, rating } = this.state;
    //   this.setState({
    //     movie: [...this.state.movie, { name, rating }]
    //   });
    //   this.toggleModal();
  };
  componentDidMount() {
    this.props.addMovieList(movie)
  }
  render() {
    return (
      <div className="App">
        <Search />
        <Movies />
        <Add />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {}
}
const mapDispatchToProps = (dispatch) => {
  return {
    addMovieList: (arr) => {
      dispatch({ type: 'INIT_MOVIE', movieList: arr })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
