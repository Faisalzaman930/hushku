/**
 * Small markdown → HTML renderer for article content. Outputs plain semantic HTML (h2/h3/p/ul/ol/
 * table/blockquote); all styling comes from `.article-body` in globals.css.
 *
 * Supports: ## / ### / #### headings, paragraphs, - or * lists, 1. lists, > quotes, pipe tables,
 * **bold**, *italic*, [links](url), and "**Label:** text" lead-ins.
 */
export function md(text: string): string {
  if (!text) return "";
  return text
    .replace(/\r\n?/g, "\n")
    .split(/\n\n+/)
    .map(block)
    .filter(Boolean)
    .join("\n");
}

function block(raw: string): string {
  const t = raw.trim();
  if (!t) return "";
  const h = t.match(/^(#{2,4})\s+(.*)$/);
  if (h && !t.includes("\n")) {
    const level = Math.min(4, h[1].length + 1); // "##" in content sits under the page's section h2
    return `<h${level}>${inline(h[2])}</h${level}>`;
  }
  if (h) {
    const [first, ...rest] = t.split("\n");
    return block(first) + block(rest.join("\n"));
  }
  if (t.startsWith("> ")) return `<blockquote><p>${inline(t.replace(/^> ?/gm, "").replace(/\n/g, " "))}</p></blockquote>`;

  const lines = t.split("\n").map((l) => l.trim());
  if (lines.length >= 2 && lines.every((l) => l.startsWith("|"))) return table(lines);

  const out: string[] = [];
  let i = 0;
  while (i < lines.length) {
    if (/^[-*] /.test(lines[i])) {
      const items: string[] = [];
      while (i < lines.length && /^[-*] /.test(lines[i])) items.push(lines[i++].slice(2));
      out.push(`<ul>${items.map((x) => `<li>${inline(x)}</li>`).join("")}</ul>`);
    } else if (/^\d+[.)] /.test(lines[i])) {
      const items: string[] = [];
      while (i < lines.length && /^\d+[.)] /.test(lines[i])) items.push(lines[i++].replace(/^\d+[.)] /, ""));
      out.push(`<ol>${items.map((x) => `<li>${inline(x)}</li>`).join("")}</ol>`);
    } else {
      const prose: string[] = [];
      while (i < lines.length && !/^[-*] /.test(lines[i]) && !/^\d+[.)] /.test(lines[i])) prose.push(lines[i++]);
      out.push(`<p>${inline(prose.join(" "))}</p>`);
    }
  }
  return out.join("\n");
}

function table(lines: string[]): string {
  const rows = lines.filter((l) => !/^[|\s:-]+$/.test(l));
  const cells = (l: string) => l.replace(/^\||\|$/g, "").split("|").map((c) => inline(c.trim()));
  const [head, ...body] = rows;
  return `<div class="table-wrap"><table><thead><tr>${cells(head).map((c) => `<th>${c}</th>`).join("")}</tr></thead><tbody>${body
    .map((r) => `<tr>${cells(r).map((c) => `<td>${c}</td>`).join("")}</tr>`)
    .join("")}</tbody></table></div>`;
}

export function inline(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, '<a href="$2" rel="noopener" target="_blank">$1</a>')
    .replace(/\[([^\]]+)\]\((\/[^)\s]*)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[\s(])\*(?!\s)(.+?)\*(?=[\s).,;:!?]|$)/g, "$1<em>$2</em>");
}
