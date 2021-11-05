import React from 'react';

import './MoviesCardList.scss';
import image1 from '../../../images/cards/card1.png';
import image2 from '../../../images/cards/card2.png';
import image3 from '../../../images/cards/card3.png';
import image4 from '../../../images/cards/card4.png';
import image5 from '../../../images/cards/card5.png';
import image6 from '../../../images/cards/card6.png';
import image7 from '../../../images/cards/card7.png';
import image8 from '../../../images/cards/card8.png';
import image9 from '../../../images/cards/card9.png';
import image10 from '../../../images/cards/card10.png';
import image11 from '../../../images/cards/card11.png';
import image12 from '../../../images/cards/card12.png';

import MoviesCard from './MoviesCard/MoviesCard';

function MoviesCardList() {
    return (
        <section className='card-list'>
            <MoviesCard img={image1} />
            <MoviesCard img={image2} />
            <MoviesCard img={image3} />
            <MoviesCard img={image4} />
            <MoviesCard img={image5} />
            <MoviesCard img={image6} />
            <MoviesCard img={image7} />
            <MoviesCard img={image8} />
            <MoviesCard img={image9} />
            <MoviesCard img={image10} />
            <MoviesCard img={image11} />
            <MoviesCard img={image12} />
        </section>
    );
}

export default MoviesCardList;
