
async function getList() {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
    let data = await response.json()
    return data;
}

async function getDetail(url) {
    let response = await fetch(`${url}`);
    let data = await response.json()
    return data;
}

function showDetail(url) {
    getDetail(url).then(res => {
        document.getElementById("name").innerHTML = res.name;
        document.getElementById("weight").innerHTML = res.weight;
        document.getElementById("height").innerHTML = res.height;
    });
}