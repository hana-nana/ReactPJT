import { useState } from "react";
function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    // input창이 비어있을 경우, 그냥 return해서 onSubmit함수가 작동하지 않도록
    if(toDo === "") {
      return;
    }
    // <array를 직접적으로 수정하지 않으면서 setToDos로 array에 element를 추가하는 방법>
    // 1) 값을 직접 수정 : toDo를 추가, 그리고 input 비우기
    setToDo("");
    // 2) 함수를 넣기 : 첫번째 인자로 현재 state받아오고, 누적해서 새로운 toDo붙인 새로운 배열 받아오기
    setToDos((currentArray) => [toDo, ...currentArray]);
  };

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
        onChange={onChange} 
        value={toDo} 
        type="text" 
        placeholder="Write your to do..." 
        
        />
        <button>Add To Do</button>
      </form>

      <hr />
      {/* todo list의 모든 내용이 한 배열에 다 들어가 있었으므로
      1) toDos 배열을 가져와서 
      2) 그 배열의 item들이 각각의 li태그가 되도록 하기위해 map함수 사용
      - map함수 : 기존 배열 내부 요소에 각각 접근해서 함수 내부명령 실행하고 새로운 배열로 반환, 첫번째 인자는 value, 두번째 인자는 index 
      - 아래에서 map함수의 용도 : 함수 안에 item을 넣어서 그냥 각 item자체를 return*/}
      <ul>
        {toDos.map((item, index) => (
        <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
