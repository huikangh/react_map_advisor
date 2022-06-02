import axios from "axios"

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
  

export const getPlacesData = async (sw, ne) => {
    try {
        const { data: { data } }= await axios.get(URL, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
              'X-RapidAPI-Key': 'a1100655ffmshe6f243cfcef8555p15d37ajsn82fba2a1be42'
            }
        })
        return data
    } catch (error) {
        console.log(error)
    }
}