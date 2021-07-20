import React, { FunctionComponent } from 'react';
import Helmet from 'react-helmet';
// import ImageGallery from 'react-image-gallery';
import { Container, Row, Col } from 'reactstrap';
import RemainingUntilChristmas from 'src/components/RemainingUntilChristmas/RemainingUntilChristmas';

// import ProjectGroup from '../../components/Project/Group';
import './Home.css';

// const images = [
//     { original: '', thumbnail: '', originalAlt: '', thumbnailAlt: '' },
//     // {
//     //     original:
//     //         'https://res.cloudinary.com/rusticsanta/image/upload/v1626026884/IMG_2537_j7gvu1.jpg',
//     //     thumbnail:
//     //         'https://res.cloudinary.com/rusticsanta/image/upload/t_media_lib_thumb/v1626026884/IMG_2537_j7gvu1.jpg',
//     //     originalAlt: 'Beautiful tile work done by Wilmac Flooring.',
//     //     thumbnailAlt: 'Beautiful tile work done by Wilmac Flooring.',
//     // },
//     // {
//     //     original: 'https://res.cloudinary.com/rusticsanta/image/upload/v1626026835/IMG_0077_elmomg.jpg',
//     //     thumbnail:
//     //         'https://res.cloudinary.com/rusticsanta/image/upload/t_media_lib_thumb/v1626026835/IMG_0077_elmomg.jpg',
//     //     originalAlt: 'Incredible Entryway with custom centered tile.',
//     //     thumbnailAlt: 'Incredible Entryway with custom centered tile.',
//     // },
//     // {
//     //     original:
//     //         'https://res.cloudinary.com/rusticsanta/image/upload/v1626026835/IMG_0078_zhbwky.jpg',
//     //     thumbnail:
//     //         'https://res.cloudinary.com/rusticsanta/image/upload/t_media_lib_thumb/v1626026835/IMG_0078_zhbwky.jpg',
//     //     originalAlt: 'Beautiful wood floors and tile combined together. Work by Wilmac Flooring.',
//     //     thumbnailAlt: 'Beautiful wood floors and tile combined together. Work by Wilmac Flooring.',
//     // },
//     // {
//     //     original:
//     //         'https://res.cloudinary.com/rusticsanta/image/upload/v1626026835/IMG_0073_f3wyeq.jpg',
//     //     thumbnail:
//     //         'https://res.cloudinary.com/rusticsanta/image/upload/t_media_lib_thumb/v1626026835/IMG_0073_f3wyeq.jpg',
//     //     originalAlt: 'Beautiful wood floors and tile combined together. Work by Wilmac Flooring.',
//     //     thumbnailAlt: 'Beautiful wood floors and tile combined together. Work by Wilmac Flooring.',
//     // }
// ];

/* eslint-disable react/no-multi-comp */
/* Heads up! ScreensHome uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 * @TODO: Remove the inline styling everywhere
 */
const ScreensHome: FunctionComponent = () => (
    <div>
        {/* Defining the Page title, meta, description */}
        <Helmet>
            <title>Rustic Santa - Home</title>
            <meta name="description" content="Contains the featured projects of Rustic Santa." />
            {/* TODO: Add subject content for SEO. */}
            <meta name="subject" content="Rustic Santa Claus" />
        </Helmet>
        <RemainingUntilChristmas />
        {/* <h1>Latest WoodWorking Projects</h1> */}
        <div className="Home">
            <Container>
                <Row>
                    <Col>{/* <ImageGallery items={images} showBullets={true} /> */}</Col>
                </Row>
            </Container>
        </div>
        {/* <div>
            <h2>
                <a>Visit our Photo Gallery</a>
            </h2>
        </div> */}
    </div>
);

export default ScreensHome;
