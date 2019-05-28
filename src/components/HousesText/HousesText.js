import React, {Component} from 'react';

class HousesText extends Component {
    render () {
        return (
            <form>
                <fieldset>  
                    <legend> Type in a house to see its house members</legend>
                        <input 
                        type="text"
                        name="search-houses-text"
                        id="search-houses-text"
                        value={this.props.housesText}
                        onClick={this.props.onSearchHousesText}
                        />
                        <label htmlFor="search-houses-text"></label>
                </fieldset>
            </form>
        )
    }
}

export default HousesText;