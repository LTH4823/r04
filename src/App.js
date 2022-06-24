import logo from './logo.svg';
import './App.css';
import {useSelector} from "react-redux";
import Counter from "./components/counter";
import Posts from "./components/posts";
import Todos from "./components/todos";

function App() {

    const {num}= useSelector(state => state.count)
    //앱 하나에 Store 에 모든 State가 있는데 내가 필요한거만 ㅁ받아야하니까
    //컴포넌트가 보기엔 그냥 전역 state입니다

    return (
        <div>
            <h1>APP {num}</h1>
            {/*<Posts/>*/}
            {/*<Counter/>*/}
            <Todos/>
        </div>
    );
}

export default App;
