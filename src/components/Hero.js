import React from 'react'

export default function Hero({children,hero}) {
    return <header className={hero}>{children}</header>;
}

//set hero in the first time
Hero.defaultProps = {
    hero: 'defaultHero'
};