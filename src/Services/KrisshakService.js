// <!-- Made By - Asmita Kumari -->

import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

// const apiUrl = "/choreo-apis/awbo/backend/rest-api-be2/v1.0";

const api = axios.create({
  // baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
  baseURL:"https://e-krisshak-backend.vercel.app/",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default api;

export function getKrisshaks(){
    return api.get('/api/krisshaks/')
    .then(response => response.data);
}

export function deleteKrisshak(krisshakId) {
    return api.delete('/api/krisshaks/' + krisshakId + '/', {
     method: 'DELETE',
     headers: {
       'Accept':'application/json',
       'Content-Type':'application/json'
     }
    })
    .then(response => response.data)
  }
  
  export function addKrisshak(krisshak){
    return api.post('/api/krisshaks/', {
      krisshakId:null,
      FirstName:krisshak.FirstName.value,
      LastName:krisshak.LastName.value,
      RegistrationNo:krisshak.RegistrationNo.value,
      Email:krisshak.Email.value,
      Age:krisshak.Age.value,
      Address:krisshak.Address.value,
      Experience:krisshak.Experience.value,
      MasteryGrow:krisshak.MasteryGrow.value,
      HighestEducation:krisshak.HighestEducation.value
    })
      .then(response=>response.data)
  }
  
  export function updateKrisshak(kriid, krisshak) {
    return api.put('/api/krisshaks/' + kriid + '/', {
      FirstName:krisshak.FirstName.value,
      LastName:krisshak.LastName.value,
      RegistrationNo:krisshak.RegistrationNo.value,
      Email:krisshak.Email.value,
      Age:krisshak.Age.value,
      Address:krisshak.Address.value,
      Experience:krisshak.Experience.value,
      MasteryGrow:krisshak.MasteryGrow.value,
      HighestEducation:krisshak.HighestEducation.value,
    })
     .then(response => response.data)
  }