import axios from "axios";

export default {
  getEmployees: function(query) {
    return axios.get("https://randomuser.me/api/?results=250&nat=us&inc=name,email,phone,id,picture,dob")
     ;
  }
};

