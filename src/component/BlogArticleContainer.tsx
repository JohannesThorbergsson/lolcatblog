import Article, {article} from "../model/Article";

type BAContainerProps = {
    "articles": article[]
}

export default function BlogArticleContainer(Props: BAContainerProps) {
    return (
        <div>
            {Props.articles.length<1? <Article title={"Nothing here"} subtitle={"Nothing here"} body={""} imgurl={""} date={""}/>:
            Props.articles.map(a => <Article title={a.title} subtitle={a.subtitle} body={a.body} imgurl={a.imgurl} date={a.date}/>)}
        </div>
    )
}