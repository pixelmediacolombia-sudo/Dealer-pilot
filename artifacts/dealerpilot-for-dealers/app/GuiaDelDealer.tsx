import Ficha from "./Ficha";
import { CONTACT, COPY, type Lang } from "./content";

/**
 * Dirección visual: la Guía del Comprador (Buyers Guide) pegada al vidrio.
 * Estructura de formulario impreso — barra de título, bloques cajeados,
 * casillas y renglón de firma. Sin tarjetas, sin numeración decorativa.
 */
export default function GuiaDelDealer({ lang }: { lang: Lang }) {
  const t = COPY[lang];
  const hrefs: Record<Lang, string> = { es: "/", en: "/en" };

  return (
    <div className="sheet" lang={t.htmlLang}>
      <a className="skip" href="#contenido">
        {t.skip}
      </a>

      <header className="masthead">
        <a className="wordmark" href="#contenido">
          <b>DP</b> DealerPilot
        </a>
        <p className="mastheadNote">{t.mastheadNote}</p>
        <nav className="langSwitch" aria-label={t.langLabel}>
          <a href={hrefs.es} lang="es" {...(lang === "es" ? { "aria-current": "page" as const } : {})}>
            ES
          </a>
          <a href={hrefs.en} lang="en" {...(lang === "en" ? { "aria-current": "page" as const } : {})}>
            EN
          </a>
        </nav>
      </header>

      <main id="contenido">
        <section className="titleBar">
          <span className="stripe" />
          <h1>
            {t.titleWhite} <em>{t.titleYellow}</em>
          </h1>
        </section>

        <section className="intro">
          <div>
            <p className="prose">{t.lead}</p>
            <p className="region prose">{t.region}</p>
          </div>
          <div className="actions">
            <a className="callButton" href={CONTACT.phoneHref}>
              <span>{t.callLabel}</span>
              <strong>{CONTACT.phone}</strong>
            </a>
            <a className="mailButton" href={`mailto:${CONTACT.email}`}>
              <span>{t.mailLabel}</span>
              <strong>{CONTACT.email}</strong>
            </a>
          </div>
        </section>

        <Ficha lang={lang} />

        <section className="block" aria-labelledby="hace">
          <div className="blockHead">
            <p className="label">{t.doesLabel}</p>
            <h2 className="blockTitle" id="hace">
              {t.doesTitle}
            </h2>
          </div>
          {t.does.map((row) => (
            <div className="doesRow" key={row.name}>
              <h3>{row.name}</h3>
              <div>
                <p>{row.text}</p>
                <dl className="rowMeta">
                  {row.meta.map(([term, value]) => (
                    <div key={term}>
                      <dt>{term}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          ))}
        </section>

        <section className="block" aria-labelledby="sistema">
          <div className="blockHead">
            <p className="label">{t.systemLabel}</p>
            <h2 className="blockTitle" id="sistema">
              {t.systemTitle}
            </h2>
            <p className="prose">{t.systemLead}</p>
          </div>
          {t.system.map((row) => (
            <div className="doesRow systemRow" key={row.name}>
              <h3>{row.name}</h3>
              <div>
                <p>{row.promise}</p>
                <ul className="rowItems">
                  {row.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        <section className="block" aria-labelledby="pone">
          <div className="blockHead">
            <p className="label">{t.rulesLabel}</p>
            <h2 className="blockTitle" id="pone">
              {t.rulesTitle}
            </h2>
            <p className="prose">{t.rulesLead}</p>
          </div>
          <dl className="fields">
            {t.rules.map(([term, value]) => (
              <div className="field" key={term}>
                <dt>{term}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="block notBlock" aria-labelledby="nohace">
          <div className="blockHead">
            <p className="label">{t.notLabel}</p>
            <h2 className="blockTitle" id="nohace">
              {t.notTitle}
            </h2>
          </div>
          <ul className="notList">
            {t.not.map((line) => (
              <li key={line}>
                <b aria-hidden="true" />
                <p>{line}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="closing" aria-labelledby="acceso">
          <h2 id="acceso">
            {t.closeTitleA}
            <em>{t.closeTitleB}</em>
          </h2>
          <p>{t.closeLead}</p>

          <div className="closingActions">
            <a className="callButton" href={CONTACT.phoneHref}>
              <span>{t.closeCall}</span>
              <strong>{CONTACT.phone}</strong>
            </a>
            <a className="mailButton" href={`mailto:${CONTACT.email}`}>
              <span>{t.closeMail}</span>
              <strong>{CONTACT.email}</strong>
            </a>
          </div>

          {/* renglón de firma del formulario: decorativo, no es un control */}
          <div className="signature" aria-hidden="true">
            {t.signature.map((line) => (
              <div key={line}>
                <p className="label">{line}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <a className="wordmark" href="#contenido">
          <b>DP</b> DealerPilot
        </a>
        <p>{t.footerNote}</p>
        <span>{t.footerTag}</span>
      </footer>
    </div>
  );
}
