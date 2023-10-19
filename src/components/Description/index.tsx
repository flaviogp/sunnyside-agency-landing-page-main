
interface DescriptionProps {
    fieldName: string;
    title: string;
    text: string;
}

export default function Description({ fieldName, text, title }: DescriptionProps) {

    return (
        <div className="description" id={fieldName} >
            <div className="description-content">

                <h2>{title}</h2>
                <p>{text}</p>
                <a href="#">LEARN MORE</a>

            </div>
        </div>
    )
}