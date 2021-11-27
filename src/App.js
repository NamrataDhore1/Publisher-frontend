import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Publishers from './components/publisher';
import AddPublisher from './components/addpublisher';
import UpdatePublisher from './components/updatepublishers';
import MenuAppBar from './components/nav';
import Home from './components/home';
import Author from './components/author';
import AuthorAdd from './components/addauthor';
import UpdateAuthor from './components/updateauthor';

function App() {
  return (
    <div className="App">
     <MenuAppBar/>
       <Switch>
       <Route path="/author/add" component ={AuthorAdd}/>
       <Route path="/authors/update/:authorId" component={UpdateAuthor}/>
       <Route path="/publisher/add" component={AddPublisher}/>
      <Route path="/publishers/update/:id" component={UpdatePublisher}/>
      <Route path="/home" component={Home}/>
      <Route path="/publisher" component={Publishers}/>
      <Route path="/author" component ={Author}/>
      <Publishers/>
      </Switch>
    </div>
  );
}

export default App;
