import http from "./http-common";

class MoviesDataService {

  constructor (currentSerachParams) {

    this.searchQuery = currentSerachParams.length > 0 
      ? `?${currentSerachParams}&sortOrder=asc&limit=10`
      : '?sortBy=release_date&sortOrder=asc&limit=10';
  }


  getAll() {
    return http.get(`/movies${this.searchQuery}`);
  }

  get(id) {

    console.log(id)
    return http.get(`/movies/${id}${this.searchQuery}`);
  }

  create(data) {
    return http.post("/movies", data);
  }

  update(data) {
    return http.put(`/movies/`, data);``
  }

  delete(id) {
    return http.delete(`/movies/${id}`);
  }
}

export default MoviesDataService;