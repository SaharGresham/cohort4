
class Community {

    constructor() {

        this.cities = [];
        this.counter = 1;
    }

    nextKey() {
        return `${this.counter++}`;
    }

    findCity(key) {
        return this.cities.find(city => city.key === key);
    }

    whichSphere(key) {
        const thisCity = this.findCity(key);
        if (thisCity.latitude > 0) {
            return "Northern";
        }
        else if (thisCity.latitude < 0) {
            return "Southern";
        }
        else if (thisCity.latitude === 0) {
            return "Equator";
        }
        else return "NotValid"
    }

    getMostNorthen() {
        const sumNorthen = [];
        const allLatitudes = this.cities.map(temp => ({ "key": temp.key, "latitude": temp.latitude }));
        // console.log (allLatitudes)
        const Latitudes = allLatitudes.map(c => c.latitude);
        // console.log(Latitudes);
        const maxLatitude = Math.max.apply(Math, Latitudes);
        const MNorthenCity = this.cities.find(x => x.latitude === maxLatitude);
        sumNorthen[0] = maxLatitude;
        sumNorthen[1] = MNorthenCity.name;
        // console.log (sumNorthen);
        return sumNorthen;
    }
    getMostSouthern() {
        const sumSouthern = [];
        console.log(this.cities);
        const southLatitudes = this.cities.map(tempSouth => ({ "key": tempSouth.key, "latitude": tempSouth.latitude }));
        console.log(southLatitudes)
        const sLatitudes = southLatitudes.map(d => d.latitude);
        console.log(sLatitudes);
        const minLatitude = Math.min.apply(Math, sLatitudes);
        const MSouthernCity = this.cities.find(y => y.latitude === minLatitude);
        console.log(MSouthernCity)
        sumSouthern[0] = minLatitude;
        sumSouthern[1] = MSouthernCity.name;
        console.log(sumSouthern);
        return sumSouthern;
    }

    getPopulation() {
        const totalCities = [];
        const allPop = this.cities.map(tempall => ({ "key": tempall.key, "population": tempall.population }));
        const pops = allPop.map(f => f.population);
        totalCities[0] = pops.reduce((total, num) => total + num, 0);
        // allSummeries[0] = allBalances.reduce((total, num) => total + num, 0);
        totalCities[1] = this.cities.length;
        return totalCities;
    }

   async createCityfromWebPage(name, longitude, latitude, population) {

        let key = String(this.nextKey());


        const newCity = new City(key, name, longitude, latitude, population);
        console.log(key);
        this.cities.push(newCity);
        await fetchCities.postData (fetchCities.url+'add', newCity);

        return key;
    }

    deleteCity(key, node) {
        const deletedCity = this.cities.find(x => x.key === key);
        const deletedIndex = this.cities.indexOf(this.cities.find(x => x.key === key));
        // const deleteKey = this.cities.find(x => x.accountName === name).key;
        const deleteddiv = deletedCity.divCard;

        deleteddiv.parentNode.removeChild(deleteddiv);

        this.cities.splice(deletedIndex, 1);
    }
    async getCitiesfromServer() {
        //  const thisnode=node;
        let newData = await fetchCities.postData(fetchCities.url + 'all')
        console.log(newData);

        this.cities = newData.map(city => new City(city.key, city.name, city.longitude, city.latitude, city.population))
        console.log(this.cities);
        this.counter = (this.cities.length) + 1;
        console.log(this.counter)
        // newdata.forEach(element => {

        // });
        // let newC =  new City(city.key, city.name, city.longitude, city.latitude, city.population)
        // // this.createCity(thiscity.name,thiscity.latitude,thiscity.longitude, thiscity.latitude, thiscity.population,thisnode,thiscity.key)// this.cities.push(thiscity)
        // // node.appendChild(thiscity.show());
        // this.cities.push(newC);
        //  this.counter++;



        //  console.log(this.counter)
        return this;
    }
    // findMaxKey() {
    //     const thekeys = this.cities.map(tempmax => (tempmax.key));
    //     console.log(thekeys);
    //     const maxKey = Math.max.apply(Math, thekeys);
    //     return maxKey;
    // }
    updateDisplay() {
       let summeries=[];
      summeries[0]  =this.getPopulation()[0];
      summeries[1]  =this.getPopulation()[1];
      summeries[2]  =this.getMostNorthen()[0];
      summeries[3]  =this.getMostNorthen()[1];
      summeries[4]  =this.getPopulation()[0];
      summeries[5]  =this.getPopulation()[1];
      return summeries;

    }
    
}

class City {

    constructor(key, name, latitude, longitude, population) {

        this.name = String(name);
        this.latitude = parseFloat(latitude);
        this.longitude = parseFloat(longitude);
        this.population = Number(population);
        this.key = String(key);
    }
    show() {
        const divCardkey = this.key;
        const divCard = document.createElement("div");
        this.divCard = divCard;
        divCard.setAttribute("class", "leftCard");
        divCard.setAttribute("key", divCardkey);
        divCard.innerText = "City: " + this.name + '\n' + 'Latitude: ' + this.latitude + '\n' + 'Longitude: ' + this.longitude + '\n' + 'Population: ' + this.population;
        return divCard;
    }

    moveIn(num) {

        return (this.population += num);
    }
    moveOut(num) {
        return (this.population -= num);
    }

    howBig() {
        const thepopulation = this.population;
        if (thepopulation > 1 && thepopulation < 100) {
            return "Hamlet"
        }
        if (thepopulation >= 100 && thepopulation < 1000) {
            return "Village";
        }
        if (thepopulation >= 1000 && thepopulation < 20000) {
            return "Town";
        }
        if (thepopulation >= 20000 && thepopulation <= 100000) {
            return " Large Town";
        }
        if (thepopulation > 100000) {
            return "City";
        }
    }

}
const fetchCities = {

    url: 'http://localhost:5000/',

    async postData(url = '', data = {}) {
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

        const json = await response.json();    // parses JSON response into native JavaScript objects
        json.status = response.status;
        json.statusText = response.statusText;
        // console.log(json, typeof(json));
        return json;
    },
    // async updateDatafromServer (){
    //     let data;
    //     try {
    //         data =await fetchCities.postData (url+'all');
    //         return data;}
    //         catch (error){
    //             console.error ('Error:', error)
    //         }

    //     }
}
export default { Community, City, fetchCities }