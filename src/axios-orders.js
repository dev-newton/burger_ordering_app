import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-d6c87.firebaseio.com/'
});

export default instance;