import DesktopConeImage from '../../assets/images/desktop/image-gallery-cone.jpg'
import DesktopMilkImage from '../../assets/images/desktop/image-gallery-milkbottles.jpg'
import DesktopOrangeImage from '../../assets/images/desktop/image-gallery-orange.jpg'
import DesktopSugarImage from '../../assets/images/desktop/image-gallery-sugarcubes.jpg'

import MobileConeImage from '../../assets/images/mobile/image-gallery-cone.jpg'
import MobileMilkImage from '../../assets/images/mobile/image-gallery-milkbottles.jpg'
import MobileOrangeImage from '../../assets/images/mobile/image-gallery-orange.jpg'
import MobileSugarImage from '../../assets/images/mobile/image-gallery-sugar-cubes.jpg'

import ImageContainer from "../../components/ImageContainer";







export default function DisplayImages() {

    return (
        <div className="display-images">
            <ImageContainer
                fieldName="milk-bottle"
                urlDesktop={DesktopMilkImage}
                urlMobile={MobileMilkImage}
            />
            <ImageContainer
                fieldName="orange-image"
                urlDesktop={DesktopOrangeImage}
                urlMobile={MobileOrangeImage}
            />
            <ImageContainer
                fieldName="cone-image"
                urlDesktop={DesktopConeImage}
                urlMobile={MobileConeImage}
            />
            <ImageContainer
                fieldName="sugar-cubes"
                urlDesktop={DesktopSugarImage}
                urlMobile={MobileSugarImage}
            />
        </div>
    )
}