import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Grid from "@mui/material/Grid"; // Grid version 1

// 검색어 scarch를 받아와서
const SearchResult = ({ search }) => {
  const [loading, setLoding] = useState(true);
  const [movies, setMovies] = useState([]);
  //우선 콘솔에 입력이 됨
  console.log(search);
  //그 후 searchMovies에서, 해당 검색어에 관련된 영화 리스트를 불러오는 api를 가져온다.
  //fetch함수는 첫번째 인자로 URL, 두번째 인자로 옵션 객체를 받고, Promise 타입의 객체를 반환
  //그 후 서버로부터 받아온 검색 결과를 
  //.json()이라는 함수를 통해 fetch()에서 가져온 데이터를 const json에 저장함 
  const searchMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?limit=50&query_term=${search}`)
    ).json();
    //await가 두번 쓰인 이유 : fetch(url) 함수로부터 반환된 Promise 객체가 처리될 때까지 기다린 이후(첫번째 await)
    //Promise 객체가 처리되면 Response 객체가 반환(서버로부터 받아온 HTTP 응답에 대한 정보같은 이상한데이터들이 있음)
    //response 객체의 데이터를 적절하게 이용하기 위해 .json()메소드를 사용
    //.json() 메서드를 호출하여, 서버로부터 받아온 JSON 데이터를 자바스크립트 객체로 변환하는 
    //Promise 객체가 생성, 이 Promise 객체가 처리될 때까지 기다린 이후(두번째 await)
    //JSON 데이터를 자바스크립트 객체로 변환한 결과를 반환
    setMovies(json.data);
    setLoding(false);
    console.log("json ====", json);
  };
  useEffect(() => {
    searchMovies();
  }, [search]);
  //search가 변경될 때 마다 리렌더링되어 함수가 실행됨
  return (
    <div>
      {loading ? (
        <div style={{ marginTop: "100px" }}>Searching...</div>
      ) : (
        <div style={{ marginTop: "100px" }}>
          <Grid container spacing={2}>
            {movies.movie_count === 0 ? (
              <div>검색결과가 존재하지 않습니다!</div>
            ) : (
              movies.movies.map((movie) => (
                <Grid item xs={2} key={movie.id}>
                  <Movie
                    id={movie.id}
                    medium_cover_image={movie.medium_cover_image}
                    title={movie.title}
                    summary={movie.summary}
                    genres={movie.genres}
                  />
                </Grid>
              ))
            )}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default SearchResult;
