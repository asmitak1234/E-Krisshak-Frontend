// <!-- Made By - Asmita Kumari -->

import axios from 'axios'

export function getKrisshaks(){
    return axios.get('http://127.0.0.1:8000/krisshaks/')
    .then(response => response.data);
}

export function deleteKrisshak(krisshakId) {
    return axios.delete('http://127.0.0.1:8000/krisshaks/' + krisshakId + '/', {
     method: 'DELETE',
     headers: {
       'Accept':'application/json',
       'Content-Type':'application/json'
     }
    })
    .then(response => response.data)
  }
  
  export function addKrisshak(krisshak){
    return axios.post('http://127.0.0.1:8000/krisshaks/', {
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
    return axios.put('http://127.0.0.1:8000/krisshaks/' + kriid + '/', {
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