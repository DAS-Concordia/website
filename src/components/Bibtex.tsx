import React from "react";
import CodeBlock from '@theme-original/CodeBlock';
const Cite = require('citation-js')
require("@citation-js/plugin-bibtex");

const Bibtex = ({ data }) => {
  const bibtexOutput = new Cite(data)
  console.log(bibtexOutput);
  
  return (
    <div>
      <CodeBlock>44</CodeBlock>
    </div>
  );
};

export default Bibtex;
