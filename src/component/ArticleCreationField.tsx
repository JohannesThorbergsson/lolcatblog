import {ChangeEvent} from "react";
import "./ArticleCreationField.css"
type ArticleCreationProps = {
    handlePostButtonClick(): void
    handleInputTitle(title: string): void
    handleInputSubtitle(subtitle: string): void
    handleInputBody(body: string): void
    handleInputImgurl(imgurl: string): void
}

export default function ArticleCreationField(Props: ArticleCreationProps) {
    function handlePostButtonClick() {
        Props.handlePostButtonClick()
    }
    function handleInputTitle(event: ChangeEvent<HTMLInputElement>) {
        Props.handleInputTitle(event.target.value)
    }
    function handleInputSubtitle(event: ChangeEvent<HTMLInputElement>) {
        Props.handleInputSubtitle(event.target.value)
    }
    function handleInputBody(event: ChangeEvent<HTMLInputElement>) {
       Props.handleInputBody(event.target.value)
    }
    function handleInputImgurl(event: ChangeEvent<HTMLInputElement>) {
        Props.handleInputImgurl(event.target.value)
    }

    return (
        <>
            <div className={"ArticleCreationField"}>
            New Article creator
                <p>
                    Type in title
                    <input onChange={handleInputTitle} type={"text"}/>
                </p>
                <p>
                    Type in subtitle
                    <input onChange={handleInputSubtitle} type={"text"}/>
                </p>
                <p>
                    Type your post
                    <input onChange={handleInputBody} type={"text"}/>
                </p>
                <p>
                    Paste an image url here
                    <input onChange={handleInputImgurl} type={"text"}/>
                </p>
                <button onClick={handlePostButtonClick}>Post Article</button>
            </div>
        </>
    )
}