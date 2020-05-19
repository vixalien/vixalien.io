import GitHub from '../components/github';
import Vixalien from '../components/vixalien';
import Head from 'next/head';

export default function Header({ title, description, text }) {
  return (
    <>
      <div className="landing">
        <div className="title">
          <h1>
            <span className="slice">{title}</span>
          </h1>
          <h2>
            <span className="slice">{description}</span>
          </h2>
          <div className="text">
            <span className="slice">{text}</span>
          </div>
        </div>

        <div className="links">
          <a href="/" aria-label="Vixalien Home">
            <Vixalien width="40" />
          </a>
          <a
            href="https://github.com/vixalien"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Page"
          >
            <GitHub />
          </a>
        </div>
      </div>
      <style jsx>{`
        h1 {
          margin: var(--gap-double) 0;
        }
        h2 {
          margin: 0;
          font-weight: 300;
          font-size: 1.25rem;
          letter-spacing: -0.02rem;
          color: var(--accents-3);
        }
        .landing {
          min-height: 350px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          overflow-x: hidden;
        }

        body.animate .slice {
          position: relative;
        }

        body.animate .slice::after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 130%;
          background: #fff;
          transform: skew(-20deg);
        }

        .title {
          text-align: center;
        }

        .links {
          display: flex;
          text-align: center;
          justify-content: center;
          align-items: center;
        }

        .links {
          margin-top: var(--gap);
        }

        .text {
          color: var(--accents-2);
          margin: 0.5em 0;
        }

        /* Anim */
        body:not(.animate) .slice::after {
          content: unset;
        }

        body.animate .slice {
          animation: fadeIn 1.8s ease-in-out forwards;
        }

        body.animate .slice::after {
          animation: slideRight 1.5s cubic-bezier(0.645, 0.045, 0.355, 1)
            forwards;
          animation-delay: 0.8s;
        }

        body.animate .links {
          opacity: 0;
          animation: fadeIn 0.5s ease-in-out forwards;
          animation-delay: 2s;
        }

        body.animate h1 .slice::after {
          width: 105%;
          left: -1%;
          animation-delay: 0.5s;
          animation-duration: 0.5s;
        }
      `}</style>
    </>
  );
}
