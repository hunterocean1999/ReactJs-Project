import React from 'react';
import { RoomContext, RoomProvider } from '../context';
import Banner from '../components/Banner';
import { Link, useHistory } from 'react-router-dom';
import StyledHero from '../components/StyledHero';

const contextType = RoomContext;

const SingleRoom1 = (props) => {
  const [defaultBcg, setDefaultBcg] = React.useState('');
  const [slug, setSlug] = React.useState(props.match.params.slug);
  const [room, setRoom] = React.useState('');

  React.useEffect(() => {
    if (slug) {
      const room = RoomProvider.getInstance().getRoom(slug);
      setRoom(room);
    }
  }, [slug]);

  React.useEffect(() => {
    if (props.match.params.slug) setSlug(props.match.params.slug);
  }, [props.match.params.slug]);

  if (!room) {
    return (
      <div className="error">
        <h3>no such room could be found...</h3>
        <Link to="/rooms" className="btn-primary">
          back to rooms
        </Link>
      </div>
    );
  } else {
    const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;
    const [mainImg, ...defaultImg] = images;

    return (
      <>
        <StyledHero img={images[0] || defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((image, index) => {
              return <img key={index} src={image} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : ${size} SQFT</h6>
              <h6>
                max capacity : {''}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? 'pets allowed' : 'no pets allowed'}</h6>
              <h6>{breakfast && 'free breakfast include'}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>Extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
};

export default SingleRoom1;
