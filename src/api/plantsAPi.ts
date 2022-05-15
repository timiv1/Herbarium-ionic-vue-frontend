import axios from "axios";
const instance = axios.create({
    baseURL: 'http://88.200.36.115:8070/leaderboards/findAll?fbclid=IwAR31TR1oWDhUA4La8oi5BTj8CVAv5Be-NT0hQKf0mDevV_zBoe3NhWD3H48',
    timeout: 1000,
});

export default instance;





