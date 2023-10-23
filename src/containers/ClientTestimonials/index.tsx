import EmilyImage from '../../assets/images/image-emily.jpg'
import ThomasImage from '../../assets/images/image-thomas.jpg'
import JennieImage from '../../assets/images/image-jennie.jpg'

import Client from "../../components/Client";

export default function ClientTestimonials() {

    return (
        <div className="client-testimonials">
            <h2>Client Testimonials</h2>
            <div className="clients">
                <Client
                    clientImage={EmilyImage}
                    bio="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
                    clientName="Emily R."
                    clientRole="Marketing Director"
                />
                <Client
                    clientImage={ThomasImage}
                    bio="Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience."
                    clientName="Thomas S."
                    clientRole="Chief Operating Officer"
                />
                <Client
                    clientImage={JennieImage}
                    bio="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Higth recommended!"
                    clientName="Jennie F."
                    clientRole="Business Owner"
                />
            </div>
        </div>
    )
}