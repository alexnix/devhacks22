import './App.css';
import ModalProvider from 'react-modal-pirate';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import MuseumsList from './pages/museums_list';
import MuseumSingle from './pages/museum_single';
import { useAuthStore } from './authStore';
import { useEffect } from 'react';

function MyRouter() {
  return (
    <Router>
    <div>
      <div className='container mx-auto'>
        <div className='bg-blue-500 text-white p-5 text-lg'>
          NGNT: Smart Museums for Smart Cities
        </div>
        <div className='p-5'>
        <Switch>
          <Route path="/museum/:id">
            <MuseumSingle/>
          </Route>
          <Route path="/users">
            <p>users page</p>
          </Route>
          <Route path="/">
            <MuseumsList/>
          </Route>
          </Switch>
        </div>
      </div>
      
    </div>
  </Router>
  )
}

function App() {
  const MP: any = ModalProvider as any;
  const {loading, doAuth} = useAuthStore();

  useEffect(() => {
    doAuth();
  }, [doAuth]);

  if(loading) {
    return <p>Loading</p>;
  }

  return (
    <MP styles={{}}>
      <MyRouter/>
    </MP>
  );
}

export default App;
