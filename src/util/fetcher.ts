import axios from "axios";

export const fetcherPost = (url: string, body: any) => axios.post(url, body).then((res) => res.data);