import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Service from '../components/Service';
import FeaturedRoom from '../components/FeaturedRoom';

export default function Home() {
  return (
    <>
      <Hero>
        <Banner title="luxurious rooms" subtitle="deluxe rooms staring at $299">
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Service />
      <FeaturedRoom />
    </>
  );
}
