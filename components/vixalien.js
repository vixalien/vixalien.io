const Logo = (props) => {
  return (
    <svg
      viewBox="12.5 50 200 150"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      style={{ borderRadius: '50%' }}
      {...props}
    >
      <desc>Saint Alien's Logo'</desc>

      {/* backdrop or body */}
      {/*<path d="m 0,0 L 225,0 L 225,200 L 0,200 z" fill="url(#body)" />*/}

      {/*the body */}
      <g>
        {/* head */}
        <path
          d="m 60,100 a 50 50 0 0 1 100 0 l 0,100 l -100,0"
          fill="url(#head)"
        />

        {/* eyes */}

        {/* eyes back drop */}
        <circle cx="75" cy="100" r="25" fill="white" filter="url(#shadow)" />
        <circle cx="140" cy="100" r="25" fill="white" filter="url(#shadow)" />
        {/* eyes */}
        <circle cx="75" cy="100" r="15" fill="url(#eyes)" />
        <circle cx="140" cy="100" r="15" fill="url(#eyes)" />
        {/* inner irises */}
        <circle cx="75" cy="100" r="7.5" fill="url(#iris)" />
        <circle cx="140" cy="100" r="7.5" fill="url(#iris)" />
        {/* retina */}
        <circle cx="72" cy="97" r="3.5" fill="white" />
        <circle cx="137" cy="97" r="3.5" fill="white" />

        {/* mouth */}

        {/* upper lip */}
        <path
          d="M 82.5 135 c 20 10, 30 10, 50 0"
          stroke="url(#lips)"
          fill="transparent"
          strokeWidth="7"
          strokeLinecap="round"
        />
        {/*tooth*/}
        <path
          d="M 115, 142 l 10,-3 l0,13 l -10,0 z"
          fill="url(#teeth)"
          stroke="url(#teeth)"
          strokeWidth="1"
        />
      </g>

      <defs>
        {/* gradients */}

        {/* body */}
        <linearGradient id="body" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#e0e7fa" />
          <stop offset="50%" stopColor="#c7abff" />
          <stop offset="100%" stopColor="#b65dd3" />
        </linearGradient>

        {/* head */}
        <linearGradient id="head" x1="0" x2="1" y1="0" y2="0.3">
          <stop offset="0%" stopColor="#f9fdec" />
          <stop offset="50%" stopColor="#a1debd" />
          <stop offset="100%" stopColor="#094e39" />
        </linearGradient>

        {/*lips*/}
        <linearGradient id="lips" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#9eceb8" />
          <stop offset="50%" stopColor="#6aa68d" />
          <stop offset="100%" stopColor="#246d4f" />
        </linearGradient>

        {/* eyes */}
        <linearGradient id="eyes" x1="0" x2="1" y1="0" y2="0.5">
          <stop offset="0%" stopColor="#f3cbee" />
          <stop offset="50%" stopColor="#ac72bf" />
          <stop offset="100%" stopColor="#5d1d8f" />
        </linearGradient>

        {/* inner iris */}
        <radialGradient id="iris" cx="0" cy="0" r="1">
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </radialGradient>

        {/* teeth */}
        <linearGradient id="teeth" x1="0" x2="0.8" y1="0" y2="1">
          <stop offset="0%" stopColor="#effffc" />
          <stop offset="100%" stopColor="#a0cfbd" />
        </linearGradient>

        {/*shadow*/}
        <filter id="shadow" x="0" y="0" width="200%" height="200%">
          <feDropShadow
            dx="5"
            dy="5"
            stdDeviation="3"
            floodColor="black"
            floodOpacity="0.5"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Logo;
