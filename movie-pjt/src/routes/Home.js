import { useEffect, useState } from "react";
// 자식 컴포넌트인 Movie를 불러온다.(자식에게 줄 속성을 정의하기 위해)
// 이때 경로가 components폴더 안에 있는 Movie.js 파일임을 명시
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
						// 자식 컴포넌트인 Movie에게 줄 속성들 정의
						// 속성 명들은 prop이므로 원하는대로 이름 지을 수 있음
						// key값을 꼭 넣어줘야 함. 리액트에서는 map안에서 컴포넌트 render할 때 꼭 key를 필요로함
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;