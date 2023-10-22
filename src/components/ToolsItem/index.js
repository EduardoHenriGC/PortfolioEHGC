export default function ToolsItem({ src, name }) {

    return (

        <li>
            <img src={src} />
            <span>{name}</span>
        </li>
    )
}