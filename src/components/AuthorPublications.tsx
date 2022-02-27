import React, { useState } from "react";
import clsx from "clsx";
import groupedPapers from "../data/publications-list.build";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import CodeBlock from "@theme/CodeBlock";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { shortName } from "./Publications";

function HighlightedAuthors({ list }) {
  const lastIndex = list.length - 1;
  const highlightIndex = list.index;

  return (
    <>
      {list.map(({ given, family }, index) => (
        <span key={index}>
          {index > 0 ? (index === lastIndex ? ", and " : ", ") : ""}
          {index == highlightIndex ? (
            <b>
              {shortName(given)} {family}
            </b>
          ) : (
            `${shortName(given)} ${family}`
          )}
        </span>
      ))}
    </>
  );
}

function AuthorPaper(paper) {
  const [isBibtexOpen, setBibtexState] = useState(false);

  return (
    <li className="margin-bottom--md">
      <HighlightedAuthors list={paper.authors} />, <i>"{paper.title},"</i> in{" "}
      {paper.venue}, {paper.year}
      <div className="button-group">
        {paper.has_pdf && (
          <a
            className="button button--sm button--link"
            target="_blank"
            href={`/pdf/${paper.id}.pdf`}
          >
            <FontAwesomeIcon icon={faFilePdf} /> PDF
          </a>
        )}
        <button
          onClick={() => setBibtexState(!isBibtexOpen)}
          className={clsx("button button--sm button--link", {
            "button--active": isBibtexOpen,
          })}
        >
          <FontAwesomeIcon icon={faQuoteLeft} /> BibTeX
        </button>
      </div>
      {isBibtexOpen && <CodeBlock>{paper.bibtex}</CodeBlock>}
    </li>
  );
}

function AuthorPublicationTypeList({ title, papers }) {
  if (!papers?.length) return null;
  return (
    <>
      <h3 id={title}>{title}</h3>
      <ul>
        {papers.map((paper) => (
          <AuthorPaper key={paper.id} {...paper} />
        ))}
      </ul>
    </>
  );
}

export function AuthorPublications({ firstname, lastname }) {
  const journals = [];
  const conferences = [];
  const theses = [];

  function selectPapers({ authors }) {
    const authorIndex = authors.findIndex(
      ({ given, family }) => given.startsWith(firstname) && family === lastname
    );

    if (authorIndex < 0) {
      return false;
    }

    authors.index = authorIndex;

    return true;
  }

  groupedPapers.forEach((year) => {
    journals.push(...(year["article-journal"]?.filter(selectPapers) || []));
    conferences.push(...(year["paper-conference"]?.filter(selectPapers) || []));
    theses.push(...(year["thesis"]?.filter(selectPapers) || []));
  });

  return (
    <>
      <AuthorPublicationTypeList title="Journals" papers={journals} />
      <AuthorPublicationTypeList title="Conferences" papers={conferences} />
      <AuthorPublicationTypeList title="Theses" papers={theses} />
    </>
  );
}
