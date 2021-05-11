import {Carousel} from "react-bootstrap";
import "./caurosal.css";

const CaurosalHomepage = () => {
    return (
        <Carousel className="caurosal-view">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1579532536935-619928decd08?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt="First slide"
                    style={{ width: 100, height: 800 }}
                />
                <Carousel.Caption>
                    <h3>Business News</h3>
                    <p>Always be ahead of your competitors by know the what's going on in an instant.</p>
                </Carousel.Caption>
            </Carousel.Item>
            {/*<Carousel.Item>*/}
            {/*    <img*/}
            {/*        className="d-block w-100"*/}
            {/*        src="https://source.unsplash.com/random"*/}
            {/*        alt="Second slide"*/}
            {/*        style={{ width: 100, height: 800 }}*/}
            {/*    />*/}

            {/*    <Carousel.Caption>*/}
            {/*        <h3>Second slide label</h3>*/}
            {/*        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
            {/*    </Carousel.Caption>*/}
            {/*</Carousel.Item>*/}
            {/*<Carousel.Item>*/}
            {/*    <img*/}
            {/*        className="d-block w-100"*/}
            {/*        src="https://source.unsplash.com/random"*/}
            {/*        alt="Third slide"*/}
            {/*        style={{ width: 100, height: 800 }}*/}
            {/*    />*/}

            {/*    <Carousel.Caption>*/}
            {/*        <h3>Third slide label</h3>*/}
            {/*        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>*/}
            {/*    </Carousel.Caption>*/}
            {/*</Carousel.Item>*/}
        </Carousel>
    )
}

export default CaurosalHomepage;
