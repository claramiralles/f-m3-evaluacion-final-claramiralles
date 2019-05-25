import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Filters extends Component {
    render(){
        const {onInputChange, nameValue}=this.props;
        return(
        <form>
            <fieldset>
                <legend>Write the name of any character</legend>
                <input
                type="text"
                name="search"
                id="search"
                value={nameValue}
                onChange={onInputChange}
                />
                <label htmlFor="search"></label>
            </fieldset>
        </form>
        )
    }
}
Filters.propTypes = {
    onInputChange: PropTypes.func.isRequired
};

export default Filters;