import { useEffect } from "react";
import { useParams } from "react-router-dom";
function Detail() {
	// 여기 중괄호 안의 id라는 변수명은 App.js의 Route 경로 마지막에 정의해서 작성한 변수명
	// useParams를 사용하면 id 변수에 해당하는 값 추출가능
	// id값을 통해 API요청을 보낼 수 있게 됨
	const { id } = useParams();
  // fetch()안의 url 주소 마지막의 id가 들어갈 부분에 동적할당
	// fetch()로 가져오는 json 데이터는 각 영화의 상세데이터임
	const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };

	// getMovie함수를 위에 따로 만들어놓고, 여기 아래에는 간단히 넣음
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}
export default Detail;