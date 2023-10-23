
interface ClientTestimonialProps {
    clientImage: string;
    bio: string;
    clientName: string;
    clientRole: string;
}

export default function Client({bio, clientName, clientRole, clientImage}: ClientTestimonialProps) {

    return (
        <div className="client">
            <img src={clientImage} alt="" />
            <p className="client-bio">{bio}</p>
            <div className="client-info">
                <p className="client-name">{clientName}</p>
                <span className="client-role">{clientRole}</span>
            </div>
        </div>
    )
}