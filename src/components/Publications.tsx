import React, { useState } from "react";
import clsx from "clsx";
import styles from "./Publications.module.css";
import groupedPapers from "../data/publications-list.build";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import CodeBlock from "@theme/CodeBlock";
import { faDatabase, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import TOCInline from "@theme/TOCInline";

export function shortName(firstName) {
  return firstName
    .split(" ")
    .map((name) => name[0] + ".")
    .join(" ");
}

function Authors({ list }) {
  const lastIndex = list.length - 1;

  return (
    <p className={styles.authors}>
      {list.map(
        ({ given, family }, index) =>
          `${
            index > 0 ? (index === lastIndex ? ", and " : ", ") : ""
          }${shortName(given)} ${family}`
      )}
    </p>
  );
}

function Paper(paper) {
  const [isBibtexOpen, setBibtexState] = useState(false);

  return (
    <div className="card">
      <div className={clsx("card__header", styles.paperHeader)}>
        <h4>{paper.title}</h4>
      </div>
      <div className="card__body">
        <Authors list={paper.authors} />
        {paper.venue}
        <div className={clsx("button-group", styles.floatButtons)}>
          <button
            onClick={() => setBibtexState(!isBibtexOpen)}
            className={clsx(
              "button button--outline button--sm button--secondary",
              { "button--active": isBibtexOpen }
            )}
          >
            <FontAwesomeIcon icon={faQuoteLeft} /> BibTeX
          </button>
          {paper.data && (
            <a
              className="button button--outline button--sm button--secondary"
              target="_blank"
              href={paper.data}
            >
              <FontAwesomeIcon icon={faDatabase} /> Data
            </a>
          )}
          {paper.has_pdf && (
            <a
              className="button button--outline button--sm button--secondary"
              target="_blank"
              href={`/pdf/${paper.id}.pdf`}
            >
              <FontAwesomeIcon icon={faFilePdf} /> PDF
            </a>
          )}
        </div>
      </div>
      {isBibtexOpen && (
        <div className="card__footer">
          <CodeBlock>{paper.bibtex}</CodeBlock>
        </div>
      )}
    </div>
  );
}

function PublicationTypeList({ title, papers }) {
  if (!papers?.length) return null;
  return (
    <>
      <div className="row">
        <div className="col col--12">
          <h3 className={styles.type}>{title}</h3>
        </div>
      </div>
      <div className="row">
        {papers.map((paper) => (
          <div key={paper.id} className="col col--12 margin-bottom--lg">
            <Paper {...paper} />
          </div>
        ))}
      </div>
    </>
  );
}

function PublicationYearList({ papers }) {
  return (
    <section>
      <div className="container">
        {papers.map((yearPapers) => (
          <div key={yearPapers.year}>
            <div className="row">
              <div className="col col--12">
                <h2 className={styles.year}>{yearPapers.year}</h2>
              </div>
            </div>
            <PublicationTypeList
              title="Journals"
              papers={yearPapers["article-journal"]}
            />
            <PublicationTypeList
              title="Conferences"
              papers={yearPapers["paper-conference"]}
            />
            <PublicationTypeList title="Theses" papers={yearPapers.thesis} />
          </div>
        ))}
      </div>
    </section>
  );
}

export function AllPublications() {
  return <PublicationYearList papers={groupedPapers} />;
}
