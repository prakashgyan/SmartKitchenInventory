import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://8000-idx-inventorymanager-1718303015598.cluster-3g4scxt2njdd6uovkqyfcabgo6.cloudworkstations.dev/',
});

export default instance;
