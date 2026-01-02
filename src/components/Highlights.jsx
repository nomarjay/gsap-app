import { useGSAP } from '@gsap/react';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import gsap from 'gsap';

const Highlights = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })
  
  useGSAP(() => {
    gsap.to(['.left-column', '.right-column'], {
      scrollTrigger: {
        trigger: '#highlights',
        start: isMobile ? 'bottom bottom' : 'top top'
      },
      y: 0,
      opacity: 1,
      stagger: 0.5, 
      duration: 1,
      ease: 'power1.inOut'
    })
  })

    return (
        <section id="highlights">
            <h3>There’s never been a better time to upgrade.</h3>
            <h2>Here’s what you get with the new MacBook Pro.</h2>

            <div className="masonry">
                <div className="left-column">
                    <div>
                        <img src="/laptop.png" alt="Laptop" />
                        <p>
                            Fly through
                            <br /> demanding tasks
                            <br /> up to 9.8x faster.
                        </p>
                    </div>
                    <div>
                        <img src="/sun.png" alt="Sun" />
                        <p>
                            A stunning
                            <br /> <span>Liquid Retina XDR</span>
                            <br />
                            <span> display.</span>
                        </p>
                    </div>
                </div>

                <div className="right-column">
                    <div className="apple-gradient">
                        <img src="/ai.png" alt="Ai" />
                        <p>
                            Built for
                            <br /> <span>Apple Intelligence</span>
                        </p>
                    </div>
                    <div>
                        <img src="/battery.png" alt="battery" />
                        <p>
                            <span className="green-gradient">
                                {' '}
                                Up to 14 more hours{' '}
                            </span>
                            <br /> <span>battery life.</span>
                            <span className="text-dark">
                                {' '}
                                (Up to 24ours total.).{' '}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Highlights;
