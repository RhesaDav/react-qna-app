import {Routes, Route} from 'react-router-dom' 
import Home from './pages/Home';
import Question from './pages/Question';
import Result from './pages/Result';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/question'element={<Question/>}/>
        <Route path='/result' element={<Result/>}/>
      </Routes>
    </div>
  );
}

export default App;
