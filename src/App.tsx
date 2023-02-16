import React, {useState} from 'react';
import './App.css';
import BlogHeader from "./component/BlogHeader";
import BlogArticleContainer from "./component/BlogArticleContainer";
import ArticleCreationField from "./component/ArticleCreationField";
import {article} from "./model/Article";

function App() {
    const [title, setTitle] = useState<string>("")
    const [subtitle, setSubtitle] = useState<string>("")
    const [body, setBody] = useState<string>("")
    const [imgurl, setUrl] = useState<string>("")
    const [articles, setArticles] = useState<article[]>([])

    function handlePostButtonClick() {
        setArticles([...articles, {title, subtitle, body, imgurl, date: (new Date().toDateString())}])
        console.log(articles)
    }
    function handleInputTitle(title: string) {
        setTitle(title)
    }
    function handleInputSubtitle(subtitle: string) {
        setSubtitle(subtitle)
    }
    function handleInputBody(body: string) {
        setBody(body)
    }
    function handleInputImgurl(imgurl: string) {
        setUrl(imgurl)
    }
  return (
    <div className="App">
        <BlogHeader/>
        <BlogArticleContainer articles={articles}/>
        <ArticleCreationField handlePostButtonClick={handlePostButtonClick} handleInputBody={handleInputBody}
                              handleInputImgurl={handleInputImgurl} handleInputSubtitle={handleInputSubtitle}
                              handleInputTitle={handleInputTitle}/>
    </div>
  );
}

export default App;
