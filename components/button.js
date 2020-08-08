import Link from 'next/link';

const Button = ({ text, icon, href = null }) => {
  return (
    <div>
      <Link href={href}>
        <a>
          {icon}
          <span>{text}</span>
        </a>
      </Link>

      <style jsx>{`
        div {
          /*flex: 0 0 25%;*/
          align-items: center;
          display: inline-flex;
          padding: 0.5rem;
          margin: 0 auto;
          max-width: inherit;
          place-item: flex-start;
          cursor: pointer;
          border-radius: var(--radius);
        }

        a {
          display: flex;
          color: inherit;
        }

        span {
          margin: auto 0.5rem;
          font-weight: 700;
          font-size: 0.95rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          flex: 1;
          display: inline;
          display: flex;
        }

        @media (max-width: 600px) {
          div {
            flex-basis: auto;
            padding: 0.25rem;
            padding-left: 0.5rem;
          }

          span {
            font-size: 0.75rem;
          }
        }

        div:hover {
          background-color: var(--accents-4);
        }
      `}</style>
    </div>
  );
};

export default Button;
