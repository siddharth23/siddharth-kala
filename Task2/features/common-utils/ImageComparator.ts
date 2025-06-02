import {getImageOccurrence} from '@appium/opencv';
import {fs} from '@appium/support';

class ImageLocator {
    public async getImageCoordinates(fullImage,iconToFind) {
        const image1 = await fs.readFile(fullImage)
        const image2 = await fs.readFile(iconToFind)
        const {rect, score} = await getImageOccurrence(image1, image2,{threshold:0.01});
        console.log({rect, score})
        return {rect, score}
    }
    
}

export default new ImageLocator();