import React, { Component } from 'react';
import Movies from './Movies';
class Search extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="search">
                <input type="text" placeholder="Type movie name to search" onChange={this.props.searchMovie} className="search-text" />
                <div className="rating">
                    <p className="rating-text">Minimuim rating</p>
                    <div className="rating-stars" >
                       { '******'.split('').map((x,i)=><i onClick={()=>this.props.filterRate(i)} className={this.props.minRate<i?'far fa-star':"fas fa-star yellow" } ></i>
                    )  }
                    </div>
                </div>
            </div>
        )
    }
}
export default Search;