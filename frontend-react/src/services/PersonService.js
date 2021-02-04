import axios from 'axios';


const PERSONNES_REST_API_URL = 'http://localhost:8080/api/personnes/';

class PersonService {

    getPersonnes(pageNo, pageSize) {
        return axios.get(PERSONNES_REST_API_URL + pageNo + '/' + pageSize, { crossdomain: true });

    }


}

export default new PersonService()
