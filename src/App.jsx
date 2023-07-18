import './App.css'
import { Route, Routes } from "react-router-dom";
import EventCreate from './pages/EventCreate';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {

  return (
    <><Provider store={store}>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<EventCreate />} />
        <Route path={'/events'} element={<Home />} />
      </Routes>
    </Provider>
    </>
  )
}

export default App




