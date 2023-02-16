import "./Article.css"
export type article = {
    "title": string,
    "subtitle": string,
    "body": string,
    "imgurl": string,
    "date": string
}
export default function Article(props: article) {
    return (
        <section className={"article"}>
            <h2>
                {props.title}
            </h2>
            <h3>
                {props.subtitle}
            </h3>
            <p>
                {props.body}
            </p>
            <p>
                <img src={props.imgurl} alt={"img not found"}/>
            </p>
            <p>
                {props.date}
            </p>
        </section>
    )
}