import axios from '../plugins/axios'

const users = {
    list() {
        return new Promise((resolve, reject) => {
            axios.setToken();
            axios
                .get('Users/GetUsers')
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(({ response }) => {
                    reject(response);
                });
        });
    },
};
export default users;