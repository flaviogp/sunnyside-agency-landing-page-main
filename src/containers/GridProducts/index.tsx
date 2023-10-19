import PhotographyDesktopImage from '../../assets/images/desktop/image-photography.jpg'
import PhotographyMobileImage from '../../assets/images/mobile/image-photography.jpg'
import StandOutDesktopImage from '../../assets/images/desktop/image-stand-out.jpg'
import StandOutMobileImage from '../../assets/images/mobile/image-stand-out.jpg'
import TransformDesktopImage from '../../assets/images/desktop/image-transform.jpg'
import TransformMobileImage from '../../assets/images/mobile/image-transform.jpg'
import GraphicDesktopImage from '../../assets/images/desktop/image-graphic-design.jpg'
import GraphicMobileImage from '../../assets/images/mobile/image-graphic-design.jpg'


import Description from "../../components/Description";
import ImageContainer from "../../components/ImageContainer";

export default function GridProducts() {

    return (
        <div className="grid-descriptions">
            <ImageContainer 
                fieldName="egg"
                urlDesktop={TransformDesktopImage}
                urlMobile={TransformMobileImage}
            />
            <Description 
                fieldName="transform"
                title="Transform your brand"
                text="we are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
            />
            <ImageContainer
                fieldName="cup"
                urlDesktop={StandOutDesktopImage}
                urlMobile={StandOutMobileImage}
            />
            <Description
                fieldName="standout"
                title="Stand out to the right audience"
                text="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we´ll build and extend your brand in digital places"
            />
            <ImageContainer 
                fieldName="graphic"
                urlDesktop={GraphicDesktopImage}
                urlMobile={GraphicMobileImage}
                description={
                    {
                        title: 'Graphic Design',
                        text: 'Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients´ attention',
                    }
                }
            />
            <ImageContainer
                fieldName="photography"
                urlDesktop={PhotographyDesktopImage}
                urlMobile={PhotographyMobileImage}
                description={
                    {
                        title: 'Photography',
                        text: 'Increase your credibility by getting the most stunning, high-quality phots that improve your business image',
                    }
                }
            />
        </div>
    )
}