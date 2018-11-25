const axios = require('axios') ;

const  Users  = () =>{

    return axios.get('/data.json').then(resp => resp.data);

}



module.exports = {
    Users
}