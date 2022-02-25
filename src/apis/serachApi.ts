import axios from 'axios';

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoibHVjYXNjaWFwcGEiLCJhIjoiY2txdTR5aDZrMDEzajJudGZhM3NzbjV5dCJ9.0inYkSNy8uieljKjEjMxYg'
    }
})

export default searchApi;