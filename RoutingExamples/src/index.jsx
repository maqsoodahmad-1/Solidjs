/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';
import { Router, Routes ,Route} from '@solidjs/router';
import { lazy } from 'solid-js';
// import About from './About';
// import Contacts from './Contacts';

// lazy loding -->Components are loaded only when the route is matched
const About = lazy(() => import("./About"));
const Contacts = lazy(() => import("./Contacts"));


const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(
  () =>(
    <Router>
     <Routes>
      <Route path="/" component={App}/>
      <Route path="/about" component={About}/>
      <Route path="/user/:id" component={User}/>
      <Route path="/contacts" component={Contacts}/>
     </Routes>
    </Router>

) , root);
