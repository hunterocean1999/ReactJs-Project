import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import RoomContainer from '../components/RoomContainer';

export default function Rooms() {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Our Rooms">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </>
  );
}
