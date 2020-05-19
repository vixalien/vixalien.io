import Button from './button';

export default () => (
  <>
    <div className="buttons">
      <Button
        text="Home"
        href="/"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 512 512"
          >
            <path
              d="M80,212V448a16,16,0,0,0,16,16h96V328a24,24,0,0,1,24-24h80a24,24,0,0,1,24,24V464h96a16,16,0,0,0,16-16V212"
              style={{
                fill: 'none',
                stroke: '#000',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '32px'
              }}
            />
            <path
              d="M480,256,266.89,52c-5-5.28-16.69-5.34-21.78,0L32,256"
              style={{
                fill: 'none',
                stroke: '#000',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '32px'
              }}
            />
            <polyline
              points="400 179 400 64 352 64 352 133"
              style={{
                fill: 'none',
                stroke: '#000',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '32px'
              }}
            />
          </svg>
        }
      />
      <Button
        text="Articles"
        href="/blog"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 512 512"
          >
            <path
              d="M256,160c16-63.16,76.43-95.41,208-96a15.94,15.94,0,0,1,16,16V368a16,16,0,0,1-16,16c-128,0-177.45,25.81-208,64-30.37-38-80-64-208-64-9.88,0-16-8.05-16-17.93V80A15.94,15.94,0,0,1,48,64C179.57,64.59,240,96.84,256,160Z"
              style={{
                fill: 'none',
                stroke: '#000',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '32px'
              }}
            />
            <line
              x1="256"
              y1="160"
              x2="256"
              y2="448"
              style={{
                fill: 'none',
                stroke: '#000',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '32px'
              }}
            />
          </svg>
        }
      />
      <Button
        text="About"
        href="/about"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 512 512"
          >
            <title>ionicons-v5-e</title>
            <path
              d="M248,64C146.39,64,64,146.39,64,248s82.39,184,184,184,184-82.39,184-184S349.61,64,248,64Z"
              style={{
                fill: 'none',
                stroke: '#000',
                strokeMiterlimit: 10,
                strokeWidth: '32px'
              }}
            />
            <polyline
              points="220 220 252 220 252 336"
              style={{
                fill: 'none',
                stroke: '#000',
                strokeLinecap: 'round',
                strokeMiterlimit: 'round',
                strokeWidth: '32px'
              }}
            />
            <line
              x1="208"
              y1="340"
              x2="296"
              y2="340"
              style={{
                fill: 'none',
                stroke: '#000',
                strokeLinecap: 'round',
                strokeMiterlimit: 10,
                strokeWidth: '32px'
              }}
            />
            <path d="M248,130a26,26,0,1,0,26,26A26,26,0,0,0,248,130Z" />
          </svg>
        }
      />
      <Button
        text="Newsletta"
        href="/letters"
        icon={
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            shapeRendering="geometricPrecision"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
        }
      />
    </div>
    <style jsx>{`
      .buttons {
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;
        width: auto;
        max-width: calc(100vw - var(--gap-double));
        margin: 2rem;
      }

      /* Anim */
      body.animate .buttons {
        opacity: 0;
        animation: fadeIn 0.5s ease-in-out forwards;
        animation-delay: 2s;
      }
    `}</style>
  </>
);
