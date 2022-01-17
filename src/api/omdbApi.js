import axios from "axios";

//axios object for handling requests to the omdb api
export default axios.create({
    baseURL:'https://www.omdbapi.com/',
    params:{apikey: "80cb8da6"}
})
