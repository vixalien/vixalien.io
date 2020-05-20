import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';

const Code = ({ code, language = 'jsx' }) => {
  return (
    <>
      <code
        dangerouslySetInnerHTML={{
          __html: Prism.highlight(code, Prism.languages[language])
        }}
      />

      <style jsx>{`
        code {
          display: block;
          padding: 0.8rem;
          line-height: 1.5;
          background: #f5f5f5;
          font-size: 0.75rem;
          border-radius: var(--radius);
          overflow: auto;
          color: #000;
          text-align: left;
          white-space: pre;
          word-spacing: normal;
          word-break: normal;
          tab-size: 2;
          hyphens: none;
        }
      `}</style>
      <style jsx global>{`
        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: #999;
        }
        .token.namespace {
          opacity: 0.7;
        }
        .token.string,
        .token.attr-value {
          color: #028265;
        }
        .token.punctuation,
        .token.operator {
          color: #000;
        }
        .token.url,
        .token.symbol,
        .token.boolean,
        .token.variable,
        .token.constant {
          color: #36acaa;
        }
        .token.atrule,
        .language-autohotkey .token.selector,
        .language-json .token.boolean,
        code[class*='language-css'] {
          font-weight: 600;
        }
        .language-json .token.boolean {
          color: var(--geist-success);
        }
        .token.keyword {
          color: #ff0078;
          font-weight: bolder;
        }
        .token.function,
        .token.tag,
        .token.class-name,
        .token.number,
        .token.tag .token.punctuation {
          font-weight: bold;
          color: var(--geist-success);
        }
        .language-autohotkey .token.tag {
          color: #9a050f;
        }
        .token.selector,
        .language-autohotkey .token.keyword {
          color: #00009f;
        }
        .token.important,
        .token.bold {
          font-weight: bold;
        }
        .token.italic {
          font-style: italic;
        }
        .token.deleted {
          color: red;
          font-weight: bolder;
        }
        .token.inserted {
          color: var(--geist-success);
          font-weight: bolder;
        }
        .language-json .token.property,
        .language-markdown .token.title {
          color: #000;
          font-weight: bolder;
        }
        .language-markdown .token.code {
          color: var(--geist-success);
          font-weight: normal;
        }
        .language-markdown .token.list,
        .language-markdown .token.hr {
          color: #999;
        }
        .language-markdown .token.url {
          color: #ff0078;
          font-weight: bolder;
        }
        .token.selector {
          color: #2b91af;
        }
        .token.property,
        .token.entity {
          color: #f00;
        }
        .token.attr-name,
        .token.regex {
          color: #d9931e;
        }
        .token.directive.tag .tag {
          background: #ff0;
          color: #393a34;
        }
        /* dark */
        pre.dark[class*='language-'] {
          color: #fafbfc;
        }
        .language-json .dark .token.boolean {
          color: var(--geist-success);
        }
        .dark .token.string {
          color: #50e3c2;
        }
        .dark .token.function,
        .dark .token.tag,
        .dark .token.class-name,
        .dark .token.number {
          color: #2ba8ff;
        }
        .dark .token.attr-value,
        .dark .token.punctuation,
        .dark .token.operator {
          color: #efefef;
        }
        .dark .token.attr-name,
        .dark .token.regex {
          color: #fac863;
        }
        .language-json .dark .token.property,
        .language-markdown .dark .token.title {
          color: #fff;
        }
        .language-markdown .dark .token.code {
          color: #50e3c2;
        }
      `}</style>
    </>
  );
};

export default Code;
