import React from 'react';
import logo from './logo.svg';
import './App.css';
import BlogHeader from "./component/BlogHeader";
import BlogArticleContainer from "./component/BlogArticleContainer";
import ArticleCreationField from "./component/ArticleCreationField";

function App() {
  return (
    <div className="App">
        <BlogHeader/>
        <BlogArticleContainer articles={[]}/>
        <ArticleCreationField/>
    </div>
  );
}

export default App;
