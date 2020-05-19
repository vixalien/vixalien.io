export default ({ icon, ...props }) => {
  return (
    <>
      <div>
        {icon}
        <input type="search" placeholder="Search /regex/" {...props} />
      </div>

      <style jsx>{`
        input {
          /*flex: 0 0 25%;*/
          align-items: center;
          display: inline-flex;
          padding: 0.5rem;
          margin: 0 auto;
          max-width: inherit;
          place-item: flex-start;
          width: 100%;
          border: 0;
          background-color: transparent;
          outline: none;
          font-size: 1rem;
          color: var(--fg);
        }

        input::-webkit-search-cancel-button {
          display: none;
        }

        a {
          display: flex;
          color: inherit;
        }

        div {
          margin: 0 0 2rem;
          font-weight: 700;
          font-size: 0.95rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          flex: 1;
          display: flex;
          border: 1px solid transparent;
          background-color: var(--accents-4);
          border-radius: var(--radius);
        }

        @media (max-width: 600px) {
          div {
            flex-basis: auto;
          }

          input {
            font-size: 0.75rem;
          }
        }

        div:focus-within,
        div:active {
          border: 1px solid var(--fg);
        }
      `}</style>
    </>
  );
};
