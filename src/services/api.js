import axios from "axios"; //requisição htpp
/**
 Rodar com IPV4: json-server --watch -d 180 --host 192.168.100.9 db.json

 Lembrando que IP pode ser relativo!!
**/

const api = axios.create({
    baseURL: 'http://192.168.100.9:3000' //porta 3000 pra acessar api no navegador
})

export default api;