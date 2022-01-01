import {deleteData} from "./Dataset"

const URL = "http://localhost:3000/"
export const API = `${URL}api/v1/`

export const destroyHandler = (url, id, location) => {
    return deleteData(url, id).finally(()=> window.location =  location?location:"/")
}
