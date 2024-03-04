import { useEffect, useState } from "react";

function App() {
  // 로딩을 위한 state
  const [loading, setLoading] = useState(true);
  // 코인 리스트를 App 컴포넌트에서 보여주기 위한 새로운 State 생성
  const [coins, setCoins] = useState([])
  
  // useEffect에 빈배열을 넣으면 아래 코드는 한번만 작동
  // json = coins
  // coins얻기를 끝냈다면 loading을 false로 바꿈
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then(response => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);  
    });
  }, [])

    // 만약 로딩 중이라면 Loading...메시지를 보여주고, 그렇지 않으면 아무것도 안보여줌
    // coin이라는 변수는 coins라는 배열안에 있는 각각의 coin을 의미
    // coins라는 변수에 코인들의 배열이 담겨있으므로 map()함수를 사용해서 각 코인들을 보여줄 것
    // map함수는 첫번째 인자로 데이터, 두번째 인자로 index(key)를 받는데, 이미 json 데이터 구성 상 id값이 존재하므로 index를 안받음. id값을 key로 사용
    return (
    <div>
      <h1>The Coins! { loading ? "" : `(${coins.length})` }</h1>
      {loading ? <strong>Loading...</strong> : null }
      <ul>
        {coins.map((coin) => (
          <li>
            {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
          </li>
        ))}
      </ul>
    </div>
  );
  };
export default App;