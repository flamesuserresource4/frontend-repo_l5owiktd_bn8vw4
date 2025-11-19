import Hero from '../components/Hero';
import Calculator from '../components/Calculator';
import Gallery from '../components/Gallery';

export default function Home() {
  return (
    <div className="bg-[#F7F4EE]">
      <Hero />
      <Calculator />
      <Gallery />
    </div>
  );
}
