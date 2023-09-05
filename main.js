axios
  .get(`https://webdev.alphacamp.io/api/movies`)
  .then((response) => {
    console.log(response)
    console.log(response.data)
    console.log(response.data.results)
  })
  .catch((err) => console.log(err))