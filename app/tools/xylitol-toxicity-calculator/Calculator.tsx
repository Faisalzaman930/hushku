"use client";

import { useState } from "react";
import { Field, Segmented, NumberInput, Result, ToolGrid, RiskBands, Emergency, toKg, fmt } from "../_ui/kit";

const BANDS = [
  { at: 0, label: "Below the known risk level" },
  { at: 0.1, label: "Risk of dangerously low blood sugar" },
  { at: 0.5, label: "Risk of liver failure" },
];

export default function Calculator() {
  const [wUnit, setWUnit] = useState<"kg" | "lb">("kg");
  const [weight, setWeight] = useState("10");
  const [mode, setMode] = useState<"gum" | "grams">("gum");
  const [pieces, setPieces] = useState("3");
  const [perPiece, setPerPiece] = useState("0.3");
  const [grams, setGrams] = useState("1");

  const kg = toKg(parseFloat(weight) || 0, wUnit);
  const g = mode === "gum" ? (parseFloat(pieces) || 0) * (parseFloat(perPiece) || 0) : parseFloat(grams) || 0;
  const dose = kg > 0 ? g / kg : 0;
  const band = [...BANDS].reverse().find((b) => dose >= b.at)!;

  return (
    <ToolGrid>
      <div className="flex flex-col gap-6">
        <Field label="Your dog's weight" htmlFor="xy-w">
          <NumberInput id="xy-w" value={weight} onChange={setWeight} min={0.5} unit={<Segmented label="Weight unit" value={wUnit} onChange={setWUnit} options={[{ value: "kg", label: "kg" }, { value: "lb", label: "lb" }]} />} />
        </Field>
        <Field label="What did they eat?">
          <Segmented label="What did they eat" value={mode} onChange={setMode} options={[{ value: "gum", label: "Gum or mints" }, { value: "grams", label: "I know the xylitol (g)" }]} />
        </Field>
        {mode === "gum" ? (
          <>
            <Field label="Number of pieces" htmlFor="xy-p">
              <NumberInput id="xy-p" value={pieces} onChange={setPieces} min={0} step={1} />
            </Field>
            <Field label="Xylitol per piece" htmlFor="xy-pp" hint="Often not on the label. 0.3 g a piece is the estimate vets use when xylitol isn't the first sweetener listed; if it is first, use the total sugar alcohols per piece.">
              <NumberInput id="xy-pp" value={perPiece} onChange={setPerPiece} min={0} unit={<span className="text-[15px] text-label-2">g</span>} />
            </Field>
          </>
        ) : (
          <Field label="Grams of xylitol eaten" htmlFor="xy-g" hint="From the nutrition label: xylitol per serving × servings eaten. Also listed as birch sugar or E967.">
            <NumberInput id="xy-g" value={grams} onChange={setGrams} min={0} unit={<span className="text-[15px] text-label-2">g</span>} />
          </Field>
        )}
      </div>
      <div className="flex flex-col gap-4 lg:sticky lg:top-24">
        <Result label="Estimated dose" value={kg > 0 ? fmt(dose, 2) : "–"} unit="g/kg" tone={dose >= 0.1 ? "bad" : "warn"}>
          <p className="text-[19px] font-semibold text-label">{band.label}</p>
          <p className="text-[15px] leading-[22px] text-label-2">About {fmt(g, 2)} g of xylitol for a {fmt(kg, 1)} kg dog.</p>
        </Result>
        <RiskBands value={dose} unit="g/kg" bands={BANDS} />
        <Emergency><strong>Any xylitol is worth a call to your vet, straight away.</strong> Blood sugar can drop within 10 to 60 minutes, and labels often don&apos;t say how much xylitol a product contains. Signs include vomiting, weakness, wobbliness, collapse and seizures. Don&apos;t wait for them.</Emergency>
      </div>
    </ToolGrid>
  );
}
