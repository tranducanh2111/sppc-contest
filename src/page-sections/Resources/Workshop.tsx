import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const Workshop = () => {
	// Array of image URLs
	const imageURLs = [
		'/banner-1.jpg',
		'/banner-2.jpg',
        '/banner-3.jpg',
        '/banner-4.jpg',
        '/banner-5.jpg',
        '/timeline-1.png',
        '/timeline-2.png',
        '/timeline-3.png',
	];

	// State to store the selected image index
	const [selectedImageIndex, setSelectedImageIndex] = useState(0);

	// State to store whether the main image should transition
	const [shouldTransition, setShouldTransition] = useState(false);

    // Create a ref for the selected photo's DOM element
    const selectedPhotoRef = useRef<HTMLDivElement | null>(null);

	// Function to handle image change
	const changeImage = () => {
		// Trigger transition
		setShouldTransition(true);

		// After a brief delay, change the image and reset transition
		setTimeout(() => {
            setShouldTransition(false);
            setSelectedImageIndex((prevIndex) => (prevIndex + 1) % imageURLs.length);
		}, 1000);
	};

    // Scroll to the selected photo when it changes
    useEffect(() => {
        if (selectedPhotoRef.current) {
        selectedPhotoRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center', // Scroll to the center of the container
            inline: 'start', // Scroll horizontally to the start of the container
        });
        }
    }, [selectedImageIndex]);

    useEffect(() => {
		// Set up an interval to change the image every  seconds
		const intervalId = setInterval(changeImage, 6000);
        return () => {
			clearInterval(intervalId); // Clear the interval when the component unmounts
		};
	}, []);

	return (
		<main className="h-[390px] md:h-[594px] max-w-[1160px] w-full flex flex-col items-center justify-center mx-auto md:py-[32px] space-y-5">
            {/* Heading */}
            <section className='space-y-[4px] w-full max-w-[518px]'>
                <h2 className="text-h3 md:text-h2 text-center">SPPC Workshop</h2>
                <p className="text-grey text-center text-sm leading-6">
                    Don&apos;t miss this exciting opportunity — register now for our workshop and take your coding skills to the next level!
                </p>
            </section>
           
           {/* Workshop Banner */}
            <section className="h-[390px] md:h-[430px] w-full md:grid md:grid-cols-7 md:gap-3 space-y-3 md:space-y-0 md:px-[40px]">
                {/* Main photo on the left on desktop view, on the top on the mobile view */}
                <div
                    className="h-[210px] md:h-full relative md:col-span-5"
                    id="main-photo-container"
                    style={{
                        opacity: shouldTransition ? 0 : 1, // Start with opacity 0, then change to 1 when loaded
                        transition: 'opacity 1s ease-in-out', // Transition effect for opacity
                    }}
                >
                    <Image src={imageURLs[selectedImageIndex]} alt="" loading='lazy' fill className="w-full h-full rounded-[1rem] object-cover custom"/>
                </div>
                {/* Sub-photo container on the right, on the bottom on the mobile view */}
                <div className={`h-[65px] md:h-full md:max-h-content flex md:flex-col overflow-x-auto relative rounded-[1rem] md:col-span-2 hide-scrollbar gap-3`} id="sub-photo-container">
                    {imageURLs.map((imageUrl, index) => (
                        <figure
                            key={index}
                            onClick={() => setSelectedImageIndex(index)}
                            className={`flex-grow-0 flex-shrink-0 md:flex-grow md:flex-shrink rounded-[1rem] object-cover ${selectedImageIndex === index ? 'relative border-4 md:border-8 border-primary bg-primary' : ''}`}
                        >
                            <div className="flex items-stretch h-full  hover:opacity-80">
                                <Image
                                    src={imageUrl}
                                    alt=""
                                    layout="responsive"
                                    loading='lazy'
                                    width={400}
                                    height={300}
                                    className={`h-full w-full rounded-[0.75rem] object-cover`}
                                    style={{
                                        opacity: selectedImageIndex === index ? 1 : 0.8, // Adjust opacity for non-selected images
                                        transition: 'opacity 1s ease-in-out', // Transition effect
                                    }}
                                />
                            </div>
                            {selectedImageIndex === index && (
                                <div className="absolute inset-0 bg-secondary opacity-40"></div>
                            )}
                        </figure>
                    ))}
                </div>
            </section>
		</main>
	);
};

export default Workshop;