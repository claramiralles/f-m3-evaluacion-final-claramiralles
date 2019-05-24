const URL = 'http://hp-api.herokuapp.com/api/characters';

const fetchPeople = () => {
    return fetch(URL)
    .then (res => res.json())
}
export default fetchPeople;