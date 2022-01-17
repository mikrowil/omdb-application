import './App.css';
import {Route, Routes} from 'react-router-dom'
import SearchScreen from './screens/SearchScreen/SearchScreen';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<SearchScreen/>}/>
            </Routes>
        </div>
    );
}

export default App;
