import axios from "axios"
import { rootPath } from "./config";

export const GET = () => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${rootPath}`)
            .then((response) => resolve(response))
            .catch((error) => reject(error));
    })

    return promise;
}