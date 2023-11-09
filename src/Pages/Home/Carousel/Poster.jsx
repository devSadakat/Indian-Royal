import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// import image1 from '../../../../assets/home/01.jpg'
import image1 from '../../../assets/home/01.jpg'
import image2 from '../../../assets/home/02.jpg'
import image3 from '../../../assets/home/03.jpg'
import image4 from '../../../assets/home/04.jpg'
import image5 from '../../../assets/home/05.png'
import image6 from '../../../assets/home/06.jpg'
import image7 from '../../../assets/home/07.jpg'
import image8 from '../../../assets/home/08.png'

const Poster = () => {
    return (
        <Carousel
        className=""
            autoPlay={true}
            infiniteLoop={true}
            interval = {3000}
            >
            <div className="h-96">
                <img src={image1} />
                <p className="legend">Legend 1</p>
            </div>
            <div className="h-96">
                <img src={image2} />
                <p className="legend">Legend 2</p>
            </div>
            <div className="h-96">
                <img src={image3} />
                <p className="legend">Legend 3</p>
            </div>
            <div className="h-96">
                <img src={image4} />
                <p className="legend">Legend 3</p>
            </div>
            <div className="h-96">
                <img src={image5} />
                <p className="legend">Legend 3</p>
            </div>
            <div className="h-96">
                <img src={image6} />
                <p className="legend">Legend 3</p>
            </div>
            <div className="h-96">
                <img src={image7} />
                <p className="legend">Legend 3</p>
            </div>
            <div className="h-96">
                <img src={image8} />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
};

export default Poster;