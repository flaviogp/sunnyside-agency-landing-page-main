
interface ImageContainerProps {
    fieldName: string;
    urlDesktop: string;
    urlMobile: string;
    description?: {title: string, text: string}
}

export default function ImageContainer({ fieldName, urlDesktop, urlMobile, description }: ImageContainerProps) {

    return (
        <div className="image" id={fieldName}>
            <picture>
                <source media="(max-width: 400px)" srcSet={urlMobile} />
                <img src={urlDesktop} alt={`Image ${fieldName}`} />
            </picture>
            {
                description &&
            
                <div className="desc-image">
                    <h3>{description.title}</h3>
                    <p>{description.text}</p>
                </div>
      
            }
        </div>

    )
}