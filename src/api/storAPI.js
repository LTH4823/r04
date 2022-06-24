import axios from "axios";

export const getStoreListAjax = async () => {
    const res = await axios.get("http://localhost/store")
    return res.data
}