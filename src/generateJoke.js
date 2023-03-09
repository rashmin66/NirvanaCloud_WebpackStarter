
const BASE_URL="https://747m2gle3f.execute-api.eu-north-1.amazonaws.com/proxy";
async function getData(name,city) {
    const endpoint=`${BASE_URL}/samplegetapi_r?name=${name}&city=${city}`;
try{
    const response = await fetch(endpoint);
    let data = await response.json();
    document.getElementById('joke').innerHTML=data.message;
    console.log(data.message);
    }

catch(error){
    console.log(error);
    }   
}

export default  getData
