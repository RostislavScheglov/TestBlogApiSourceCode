import ComponentsWrapper from "./components/ComponentsWrapper";
import {HashRouter, Route} from 'react-router-dom'
import SpecificPost from '../src/components/SpecificPost';


function App() {
  return (
    <HashRouter basename='rostislavscheglov.github.io/TestBlog/'>
      <div className="App">
        <Route  exact path="/" component={ComponentsWrapper}/>
        <Route path="/SpecificPost" component={SpecificPost}/>
      </div>
    </HashRouter>
  );
}

export default App;
