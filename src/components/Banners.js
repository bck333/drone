import { ChevronDown } from 'lucide-react';
import image from '../assets/agronex.png'
export default function Banner() {
    return (
        <div className="relative h-screen">
            <div className="absolute inset-0 pt-5">
                <img
                    src={image}
                    //   alt={slide.title}
                    className="w-full h-full object-contain"
                />
                {/* <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          src="https://player.vimeo.com/external/538728827.sd.mp4?s=7368c4137ef86d1cdb8686ce6f6901c45fb5c945&profile_id=164&oauth2_token_id=57447761"
        /> */}
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.13)]" />
            </div>
            <div className="relative h-full flex items-end justify-center text-center">
                <div className="max-w-4xl px-4">
                    <p className="text-xl text-gray-200 mb-[10%]">
                        <b>Empowering agriculture, disaster management, mining, and renewable energy sectors with cutting-edge drone solutions</b>
                    </p>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <ChevronDown className="w-8 h-8 text-white" />
            </div>
        </div>
    );
}