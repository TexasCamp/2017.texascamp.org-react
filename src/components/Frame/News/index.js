import React from 'react';
import Skeleton from '../Skeleton';
import NewsletterForm from '../../NewsletterForm';
import background from './news-bg.jpg';
import ponyExpress from './pony-express.png';

function News() {
  let NewsletterImage = (<div className="image-wrapper">
    <img src={ponyExpress} alt="signup for news" />
    <NewsletterForm />
  </div>);

  let body = [
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum elit sed felis
    commodo, cursus ornare velit suscipit. Pellentesque risus enim, scelerisque quis tellus
    et, posuere bibendum libero. Cras tincidunt, risus sit amet sagittis facilisis, sem enim
    tincidunt dolor, ut ultrices sem metus sed augue. Sed accumsan libero ultricies magna
    pharetra ullamcorper eget a lorem. Quisque lobortis ipsum metus, sit amet interdum dolor
    pretium vel. Aliquam condimentum commodo massa, sed vestibulum massa laoreet id. In volutpat
    eleifend accumsan.</p>,
    <p>Praesent risus nibh, consequat accumsan tincidunt vitae, malesuada fringilla arcu. Praesent
    tristique, diam eget eleifend egestas, ex ex ultricies nisi, vitae volutpat diam est in quam.
    Aliquam aliquam turpis et magna pulvinar, sed dapibus sapien tincidunt. In sem elit, volutpat
    ut nibh a, aliquet molestie turpis. Phasellus congue quis magna id aliquet. In at aliquam
    metus. Cras suscipit convallis magna, ut hendrerit erat interdum et. Sed vel placerat elit.
    Duis tincidunt, urna nec commodo vehicula, eros lorem dignissim ex, vel cursus sapien ipsum
    eget ex.</p>,
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ac felis id
    sollicitudin. Donec interdum vitae purus nec varius. Morbi rhoncus ullamcorper purus, quis
    commodo ipsum aliquam in. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
    per inceptos himenaeos. Proin tempor nisl sed ante pulvinar finibus. Morbi nec nulla a turpis
    ultrices molestie. Mauris sed erat eu nisi faucibus posuere. Vestibulum porta nec purus sit
    amet imperdiet.</p>,
    <p>Etiam hendrerit sit amet lorem eget lacinia. Cras scelerisque sollicitudin magna, quis
    aliquet nulla. Donec auctor dapibus lorem. Interdum et malesuada fames ac ante ipsum primis
    in faucibus. Donec rutrum purus id tellus tincidunt placerat. Vestibulum blandit faucibus
    velit, vitae sodales leo aliquam sed. Pellentesque habitant morbi tristique senectus et netus
    et malesuada fames ac turpis egestas. Morbi aliquam nisl sed augue consectetur, nec posuere
    orci volutpat.</p>,
    <p>Praesent tempor felis est, a sagittis neque aliquam id. Sed metus urna, consectetur vel
    magna quis, viverra vehicula lectus. Pellentesque eu consequat libero. Nunc malesuada, tellus
    vel lobortis vestibulum, nisi metus convallis odio, eget bibendum erat sapien quis purus. Sed
    tellus metus, porta sed nulla sit amet, commodo rutrum est. Cras gravida sem vitae tellus
    posuere pulvinar. Duis non dictum ligula, mollis placerat enim. Nunc a felis est. Nunc magna
    libero, luctus nec aliquam nec, varius sed urna. Pellentesque malesuada nec lacus dignissim
    interdum. Sed luctus turpis non porttitor maximus.</p>,
  ];

  return (
    <Skeleton
      class="news"
      backgroundSrc={background}
      backgroundAlt="texas camp news background"
      title="Submission deadline fast approaching"
      body={body}
      rightElement={NewsletterImage}
    />
  );
}

export default News;
