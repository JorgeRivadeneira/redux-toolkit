import { useDispatch } from 'react-redux'
import './app.css'
import { useEffect } from 'preact/hooks';
import { addUser } from './redux/userSlice';
import { Header } from './components/Header';
import { Email } from './components/Email';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((response) => response.json())
      .then((data) => dispatch(addUser(data)));
  }, []);

  return <div className="App">
    <Header/>
    <Email />
  </div>
}
