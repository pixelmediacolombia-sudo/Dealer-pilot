"use client";

import { useEffect, useRef, useState } from "react";
import type { Lang, Vehicle } from "./content";
import { COPY, VEHICLES } from "./content";

type Phase = 0 | 1 | 2 | 3 | 4;

const STEP_MS = [1100, 3100, 5600, 7600, 8500] as const;

function Cross() {
  return (
    <svg viewBox="0 0 20 20" focusable="false">
      <path d="M3 3 L17 17" />
      <path d="M17 3 L3 17" />
    </svg>
  );
}

export default function Ficha({ lang }: { lang: Lang }) {
  const t = COPY[lang];
  const fleet = VEHICLES[lang];

  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>(0);
  const [peeling, setPeeling] = useState(false);
  const [quiet, setQuiet] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setQuiet(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    // Sin movimiento: se muestra la ficha completa, sin ciclo.
    if (quiet) {
      setPhase(3);
      setPeeling(false);
      return;
    }

    setPhase(0);
    setPeeling(false);

    const at = (ms: number, fn: () => void) => {
      timers.current.push(setTimeout(fn, ms));
    };

    at(STEP_MS[0], () => setPhase(1));
    at(STEP_MS[1], () => setPhase(2));
    at(STEP_MS[2], () => setPhase(3));
    at(STEP_MS[3], () => setPeeling(true));
    at(STEP_MS[4], () => setIndex((i) => (i + 1) % fleet.length));

    const stop = () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
    return stop;
  }, [index, quiet, fleet.length]);

  const v: Vehicle = fleet[index];
  const on = (step: Phase) => (phase >= step ? " on" : "");
  const pulled = (key: "miles" | "price") =>
    phase >= 2 && v.pull.includes(key) ? " pulled" : "";

  return (
    <section className="stage" aria-labelledby="fichaTitulo">
      <div className="stageHead">
        <p className="label" id="fichaTitulo">
          {t.stageTitle}
        </p>
        <p className="label">{t.stageAside}</p>
      </div>

      <figure className="ticketFigure">
        <div
          className={
            "ticket" +
            (peeling ? " ticketPeeling" : "") +
            (!quiet && phase === 0 ? " ticketEntering" : "")
          }
          key={index}
          aria-hidden="true"
        >
          <div className="ticketVehicle">
            <p className="label">{t.ticketVehicle}</p>
            <h3>{v.name}</h3>
            <dl className="specs">
              <div>
                <dt>{t.ticketVin}</dt>
                <dd>{v.vin}</dd>
              </div>
              <div>
                <dt>{t.ticketMiles}</dt>
                <dd className={"" + pulled("miles").trim()}>{v.miles}</dd>
              </div>
              <div>
                <dt>{t.ticketPrice}</dt>
                <dd className={"" + pulled("price").trim()}>{v.price}</dd>
              </div>
            </dl>
          </div>

          <div className="ticketChecks">
            <div className={"checkRow" + on(1)}>
              <span className="box">
                <Cross />
              </span>
              <p>{t.check1}</p>
              <span className="when">{v.time}</span>
            </div>
            <div className={"checkRow" + on(2)}>
              <span className="box">
                <Cross />
              </span>
              <p>{t.check2(v.msgs)}</p>
              <span className="when">{t.when2}</span>
            </div>
            <div className={"checkRow" + on(3)}>
              <span className="box">
                <Cross />
              </span>
              <p>{t.check3}</p>
              <span className="when">{t.when3}</span>
            </div>
          </div>

          <div className={"thread" + on(2)}>
            <p className="q">“{v.question}”</p>
            <p className="a" dangerouslySetInnerHTML={{ __html: v.answer }} />
          </div>

          <div className="ticketFoot">
            <p className="label">
              {t.ticketStock} <span className="data">{v.stock}</span>
            </p>
            <p className="label">{v.lot}</p>
          </div>

          <span className={"stamp" + on(3)}>{t.stamp}</span>
        </div>

        <figcaption className="ticketCaption">{t.caption}</figcaption>
      </figure>

      <div className="queue" aria-hidden="true">
        {fleet.map((car, i) => (
          <span key={car.stock} className={i === index ? "now" : ""} />
        ))}
      </div>
    </section>
  );
}
