import React, { useState, useRef,useEffect } from 'react';
import Hero from '../components/Hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStop } from '@fortawesome/free-solid-svg-icons';
import ProductSection from '../components/ProductSection';
import Banner from '../components/Banners';
import Products from '../components/Products';
import UseCases from '../components/UseCases';
import Footer from '../components/Footer';
import { products } from '../data/Products'; // Ensure the 'P' is capitalized
import ProductCard from '../components/ProductCard';
import agrone from '../assets/long.mp4'
const Home = () => {
    const [playbackRate, setPlaybackRate] = useState(1); // Default playback rate
    const [volume, setVolume] = useState(1); // Default volume (1 is full)
    const videoRef = useRef(null); // Reference to the video element
    useEffect(() => {
        handleStart()
        console.log('Component is about to enter or mounted');
        // Perform actions like fetching data or triggering logic here
    
        return () => {
          console.log('Component will unmount');
          // Cleanup logic can go here
        };
      }, []);


    const handlePlaybackRateChange = (event) => {
        const newRate = event.target.value;
        setPlaybackRate(newRate);
        videoRef.current.playbackRate = newRate; // Apply playback rate to the video
    };

    const handleVolumeChange = (event) => {
        const newVolume = event.target.value;
        setVolume(newVolume);
        videoRef.current.volume = newVolume; // Apply volume to the video
    };

    const handleStart = () => {
        // videoRef.current.play(); // Start the video
    };

    const handlePause = () => {
        videoRef.current.pause(); // Pause the video
    };

    const handleStop = () => {
        videoRef.current.pause(); // Stop the video
        videoRef.current.currentTime = 0; // Reset the video to the beginning
    };
    return (
        <div>
            <div className="min-h-screen bg-gray-900">
                <Banner />
                {/* <Products /> */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-white text-center mb-12">Our Products</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {products.map((product) => (
                                <ProductCard key={product.name} {...product} />
                            ))}
                        </div>
                    </div>
                </section>
                <section className="py-20 bg-black">
                    <div className="container mx-auto px-4">
                        <div className="aspect-w-16 aspect-h-9">
                            <video
                                ref={videoRef}
                                className="w-full rounded-2xl shadow-2xl"
                                src={agrone}
                                muted={volume === 0} // Muted based on volume
                                autoPlay
                                loop
                                style={{ width: '100%', borderRadius: '1rem' }}
                                playbackRate={playbackRate}
                                volume={volume}
                            />
                        </div>
                        <div className="mt-4 text-white">
                            {/* Playback Controls */}
                            <div>
                                <label htmlFor="playbackRate">Playback Speed:</label>
                                <select
                                    id="playbackRate"
                                    value={playbackRate}
                                    onChange={handlePlaybackRateChange}
                                    className="ml-2 p-1 bg-gray-700 rounded">
                                    <option value={0.5}>0.5x</option>
                                    <option value={1}>1x (Normal)</option>
                                    <option value={1.5}>1.5x</option>
                                    <option value={2}>2x</option>
                                </select>
                            </div>
                            <div className="mt-2">
                                <label htmlFor="volume">Volume:</label>
                                <input
                                    id="volume"
                                    type="range"
                                    min="0"
                                    max="1"
                                    step="0.1"
                                    value={volume}
                                    onChange={handleVolumeChange}
                                    className="ml-2"
                                />
                            </div>

                            {/* Start, Pause, and Stop Buttons */}
                            <div className="mt-4 space-x-4">
                                <button
                                    onClick={handleStart}
                                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                                >
                                    <FontAwesomeIcon icon={faPlay} />
                                </button>
                                <button
                                    onClick={handlePause}
                                    className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
                                >
                                    <FontAwesomeIcon icon={faPause} />
                                </button>
                                <button
                                    onClick={handleStop}
                                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                                >
                                    <FontAwesomeIcon icon={faStop} />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <UseCases />
                <Footer />
            </div>
            {/* <Hero /> */}
            {/* <ProductSection /> */}
        </div>
    );
};

export default Home;