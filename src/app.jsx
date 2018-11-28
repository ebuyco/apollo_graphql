import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Post from './Posts/Post';
import Posts from './Posts/Posts';
import NewPost from './Posts/NewPost';
import logo from "./logo.svg";
import './App.css';

const client = new ApolloClient({
    uri: ''
})

class App extends Component{
    render(){
        return(
            <ApolloProvider client={client}>
                <Router>
                <div className="App">
                <header className="App-header">
                    <Link to="/">
                      <img src={logo} className="App-logo" alt="logo" />
                      <h1 className="App-title">Graphql is Great</h1>
                    </Link>            
                 </header>
                 <Link to={'/post/new'}> New Post!</Link>
                       <Switch>
                          <Route exact path="/" component={Posts} />
                          <Route exact path="/post/new" component={NewPost} />
                          <Route path="/post/:id" component={Post} />
                        </Switch>
                    </div>    
               </Router>
            </ApolloProvider>
           
        )
    }
}

export default App;