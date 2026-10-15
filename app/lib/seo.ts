/**
 * Meta descriptions Google shows whole: at most `max` characters, cut at the end of a
 * sentence when one fits, otherwise at a word boundary with an ellipsis.
 */
export function metaDesc(text: string, max = 155): string {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  const head = t.slice(0, max);
  const sentence = head.lastIndexOf(". ");
  if (sentence >= 90) return head.slice(0, sentence + 1);
  const cut = head.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,:;—–-]\s*$/, "") + "…";
}

/**
 * Titles Google shows whole. Drops year tags and trailing subtitles ("— …", "| …", "(…)")
 * until the title fits in `max` characters (51 leaves room for " | Hushku").
 */
export function shortTitle(text: string, max = 51): string {
  let t = text.replace(/\s*\((?:\d{4}(?: Guide)?|Updated \d{4})\)\s*$/i, "").replace(/\s+\d{4}$/, "").trim();
  const cuts = [" — ", " | ", " – ", " (", ": "];
  for (const sep of cuts) {
    while (t.length > max && t.includes(sep)) {
      const i = t.lastIndexOf(sep);
      if (i < 12) break;
      t = t.slice(0, i).trim();
    }
  }
  return t;
}

/**
 * A page <title> that Google shows whole. The root layout appends " | Hushku" (9 characters), so
 * titles up to 51 characters keep the brand; longer ones (up to 60) drop it rather than get cut off.
 */
export function searchTitle(text: string): string | { absolute: string } {
  const t = shortTitle(text, 60);
  return t.length <= 51 ? t : { absolute: t };
}
