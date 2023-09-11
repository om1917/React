import axios from 'axios';

export function storeLoginRecords(records){
    axios.post('http://localhost:5100/api/v1/jobs/login',records);
}

