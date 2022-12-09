import axios from "axios";

const instance = axios.create({baseURL:"https://jumpsuit-agouti.cyclic.app/v2/posts"})

export default instance
