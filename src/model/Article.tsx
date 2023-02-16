export type article = {
    "title": string,
    "subtitle": string,
    "body": string,
    "imgurl": string,
    "date": string
}
export default function Article(props: article) {
    return (
        <section>
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
                {props.imgurl}
            </p>
            <p>
                {props.date}
            </p>
        </section>
    )
}