const SongAPI = async () => {
  let data = await fetch("http://localhost:8080/songs/random");
  let json = await data.json();
  return json;
};

export default SongAPI;
