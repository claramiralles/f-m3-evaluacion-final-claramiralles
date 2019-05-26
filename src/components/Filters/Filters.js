import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Filters.scss'

class Filters extends Component {
    render(){
        const {onSearch, name}=this.props;
        return(
        <form>
            <fieldset className = "search-engine__container">
                <legend className = "invitation__title">Type your favorite character</legend>
                <input className = "input__container"
                type="text"
                name="search"
                id="search"
                value={name}
                onChange={onSearch}
                />
                <label htmlFor="search"></label>
            </fieldset>
        </form>
        )
    }
}
Filters.propTypes = {
    onSearch: PropTypes.func.isRequired
};

export default Filters;