import React from 'react'
import { Carousel, Button } from 'react-bootstrap'

function HomeCarousel(props) {
    const allSlides = props.carouselData.items.map(slide => {
        return(<Carousel.Item key={slide.id} style={{height: "400px"}}>
            <img
              className="d-block w-100"
              src={slide.img}
              alt={slide.alt}
            />
            <Carousel.Caption>
              <h3>{slide.title}</h3>
              <p className="mb-5">{slide.subtitle}</p>
              <Button href={slide.link} variant="light" size="lg" className="mb-5">{slide.cta}</Button>
            </Carousel.Caption>
          </Carousel.Item>)
    })
    return (
        <div>
            <Carousel>
                {allSlides}
            </Carousel>
        </div>
    )
}

export default HomeCarousel
