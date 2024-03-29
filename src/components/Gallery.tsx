import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import "../index.css";
import "../Slider.css";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
//import { LazyLoadImage } from "react-lazy-load-image-component";

interface Photo {
  title: string;
  slug: string;
  mainImage: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
  };
  description: string;
}

function Gallery() {
  const [photoData, setPhoto] = useState<Photo[] | null>(null);
  const [slideIndex, setSlideIndex] = useState(1);
  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index: number) => {
    setSlideIndex(index);
  };

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "gallery"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            },
            description,
        }`)
      .then((data) => setPhoto(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <div className="container-slider">
        {photoData &&
          photoData.map((photo, index) => {
            return (
              <div
                //key={photo}
                className={
                  slideIndex === index + 1
                    ? "slide active-anim"
                    : "slide"
                }
              >
                <img
                  loading="lazy"
                  src={photo.mainImage.asset.url}
                  //alt={photo.mainImage}
                />
              </div>
            );
          })}
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
        <div className="container-dots">
          {Array.from({ length: 5 }).map((photo, index) => (
            <div
              onClick={() => moveDot(index + 1)}
              className={
                slideIndex === index + 1 ? "dot active" : "dot"
              }
            ></div>
            ))}
            </div>
          </div>
    
          <SimpleReactLightbox>
            <SRLWrapper>
              <div className="min-h-screen p-12 text-white">
                <section className="container mx-auto">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {photoData &&
                      photoData.map((photo, index) => (
                        <span
                          className="block h-64 relative rounded shadow leading-snug "
                          key={index}
                        >
                          <div className="snip1577">
                            <img
                              loading="lazy" //less photo loading res
                              src={photo.mainImage.asset.url}
                              alt={photo.description}
                              className="w-full h-full rounded-r object-cover absolute"
                            />
                            <figcaption>
                              <h3>{photo.title}</h3>
                            </figcaption>
                          </div>
                        </span>
                      ))}
                  </div>
                </section>
              </div>
            </SRLWrapper>
          </SimpleReactLightbox>
        </>
      );
    }
    
    export default Gallery;
    