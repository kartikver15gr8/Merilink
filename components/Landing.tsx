import DemoBanner from './DemoBanner';
import FeaturedIn from './FeaturedIn';
import Features from './Features';
import Footer from './Footer';
import Leftpane from './Leftpane';
import Maintitle from './Maintitle';
import Reveal from './Reveal';
import ReviewsTile from './ReviewsTile';
import Rightpane from './Rightpane';

export default function Landing() {
    return (
        <Reveal>
            <div>
                <div className="flex justify-center h-[100vh]">
                    <Leftpane />
                    <Maintitle />
                    <Rightpane />
                </div>
                <DemoBanner />
                <Features />
                <FeaturedIn />
                <ReviewsTile />
                <Footer />
            </div>
        </Reveal>
    );
}
