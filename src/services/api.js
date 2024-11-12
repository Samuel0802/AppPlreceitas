import axios from "axios"; //requisição htpp
/**
 Rodar com IPV4: json-server --watch -d 180 --host 192.168.100.13 db.json

 json-server --watch db.json --host 192.168.102.245 --port 3000

 Lembrando que IP pode ser relativo!!
**/

const api = axios.create({
    baseURL: 'http://192.168.100.2:3000' //porta 3000 pra acessar api no navegador
})

export default api; 