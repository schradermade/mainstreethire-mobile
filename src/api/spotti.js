import axios from "axios";

export default axios.create({
  baseURL:
    "http://a46bff1a1915845a3a36282d1412a327-1482339599.us-west-2.elb.amazonaws.com/spottis",
});
