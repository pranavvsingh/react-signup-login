import axios from "axios";

export  async function getServices(data) {
  let res = await axios.get(data);
  return res;
}

export async function postServices(data) {
    try {
        let res = await axios.post(data.url, data.params);
        return res;
    }catch(err){
        return err;
    }
}

  