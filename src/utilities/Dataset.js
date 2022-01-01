import axios from "axios";

const getData = async (url) => {
    return new Promise((resolve, reject) => {
        axios
            .get(url)
            .then(response => resolve(response))
            .catch(err => console.error(err))
    })
}

const postData = async (url, data) => {
    return new Promise((resolve, reject) => {
        axios
            .post(url, data)
            .then(response => resolve(response))
            .catch(err => console.error(err))
    })
}

const updateData = async (url, id,  data) => {
    return new Promise((resolve, reject) => {
        axios
            .patch(`${url}${id}`, data)
            .then(response => resolve(response))
            .catch(err => console.error(err))
    })
}

const deleteData = async (url, id) => {
    return new Promise((resolve, reject) => {
        axios
            .delete(`${url}${id}`)
            .then(response => resolve(response))
            .catch(err => console.error(err))
    })
}

export {
    getData,
    postData,
    updateData,
    deleteData
}
