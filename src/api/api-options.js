const moviesApi = "https://api.themoviedb.org/3";
const apiKey = "b478c92757dbbca20a2698b3a7f33064"

const objToQueryParam = (obj) => {
  let queryParams = [`api_key=${apiKey}`];

  if (!Object.keys(obj).length) return queryParams[0];

  for (const param in obj) {
    if (!!obj[param] && obj.hasOwnProperty(param)) {
      queryParams.push(`${param}=${encodeURIComponent(obj[param])}`);
    }
  }

  return queryParams.join("&");
};

const getMoviesApi = async (endpoint, params) => {
  const response = await fetch(
    `${moviesApi}${endpoint}?${objToQueryParam(params)}`
  );

  return response.json();
}

export const getApiConfig = async () => {
  const endpoint= "/configuration";
  return getMoviesApi(endpoint, {});
};

export const getMedia = async (params) => {
  const endpoint = "/search/multi";
  
  return getMoviesApi(endpoint, params);
};
