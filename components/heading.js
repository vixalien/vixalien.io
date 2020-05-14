export default ({ children }) => {
  const hash = children
    .trim()
    .toLowerCase()
    .replace(/ /g, '-')
  return (
    <a href={'#' + hash} id={hash}>
      <h3>{children}</h3>
      <style jsx>{`
        a {
          color: inherit;
          text-decoration: none;
        }
      `}</style>
    </a>
  )
}
