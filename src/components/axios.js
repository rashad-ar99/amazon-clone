import axios from "axios";

const instance = axios.create({
	baseURL: "https://us-central1-clone-35a89.cloudfunctions.net/api",
	// "http://127.0.0.1:5001/clone-35a89/us-central1/api",
});

export default instance;
