
async function getList() 
{
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
  let data = await response.json()
  console.log(response);
  return data;
}


async function getDetail(value) 
{
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`);
  let data = await response.json()
  console.log(response);
  return data;
}