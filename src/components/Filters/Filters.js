import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Filters extends Component {
    render(){
        const {onSearch, name}=this.props;
        return(
        <form>
            <fieldset>
                <legend>Write the name of any character</legend>
                <input
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