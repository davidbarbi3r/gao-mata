export default function Highlight (props){
    return (
        <div className="Highlight-img"
            style={{
                backgroundImage: `url(${props.backgroundImage})`}}>
            <h1 className="Highlight-quote">
                {props.text}
            </h1>
        </div>
    )
}