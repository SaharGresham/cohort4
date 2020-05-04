
const fetchfunctions = {

    url: 'https://jsonplaceholder.typicode.com/users',


    getFirstName(data) {
        let name= data[0]["name"];
        let firstname=name.split(' ');
            return firstname[0];
        },
    
    getAllFirstNames(data){
        
           const names =data.map (temp => ({"name": temp["name"]}));
        //    console.log(names);
           const firstnames=names.map(y=> y["name"].replace ('Mrs. ','').split(' ')[0])
        //    console.log (firstnames);
           return firstnames;
},

    showDelayProblem() {
        console.log('One');
        setTimeout(() => {          // Simulates a fetch
            console.log("Two");
        }, 1 * 1000);
        console.log('Three');       // We have a problem Huston
    },

    async showDelaySolution() {
        try {
            console.log('One');
            const value = await                 // Simulate fetch
                new Promise(
                    (resolve, reject) =>
                        setTimeout(() => resolve("Two"),
                            1 * 2000));
            // Now that we have the value we can use it.
            console.log(value);
            console.log('Three');
        } catch (error) {
            console.log(error);
        }
    },

    async getUsers() {
        try {
            const response = await fetch(fetchfunctions.url);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw (error);
        }
    },

    async workWithData() {
        const data = await fetchfunctions.getUsers();
        console.log(fetchfunctions.getFirstName(data));
        console.log(fetchfunctions.getAllFirstNames(data));
    },

    async postData (url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST',     // *GET, POST, PUT, DELETE, etc.
            mode: 'cors',       // no-cors, *cors, same-origin
            cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow',         // manual, *follow, error
            referrer: 'no-referrer',    // no-referrer, *client
            body: JSON.stringify(data)  // body data type must match "Content-Type" header
        });
        return await response.json();   // parses JSON response into native JavaScript objects
    },
    


};

    
    
export default fetchfunctions;
