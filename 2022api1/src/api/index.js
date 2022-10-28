import axios from "axios";

const config ={
    baseUrl:'https://jsonplaceholder.typicode.com'
}

function getPost(){
    return axios.get(config.baseUrl+'/posts')

}

function getPhoto(){
    return axios.get(config.baseUrl+'/photos')
}
export {
    getPost,
    getPhoto
}