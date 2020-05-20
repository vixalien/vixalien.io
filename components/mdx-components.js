import CompCode from 'components/code';

const Code = (props) => (
  <CompCode code={props.children} language={props.language} />
);

const MDXComponents = {
  code: Code
};

export default MDXComponents;
