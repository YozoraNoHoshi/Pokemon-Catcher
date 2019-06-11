/**
 * Pulls a CSS value from props based on the mapping object. Used with a helper function that takes a StyledComponent's props as its only argument.
 * styleObj and defaultValue should be defined/provided in the helper function
 * @param {Object} props Props passed to component.
 * @param {Object} styleObj Mapping object for possible styles. By convention, they live in ../config/styles.js
 * @param {*} defaultValue Fallback value if nothing found in mapping object. By convention, they live in ../config/styles/DEFAULTS
 * @returns {*} The actual CSS value
 * */
export default function getCSSProperties(
  props: { [prop: string]: any },
  styleObj: { [prop: string]: any },
  defaultValue: any
): string | number {
  let values: any[] = [defaultValue];
  for (let key in props) {
    if (props[key] && styleObj[key]) values.push(styleObj[key]);
  }
  // The last match in props will be the CSS value selected in cases of multiple matches.
  return values[values.length - 1];
}

export function width({ cWidth }: { [prop: string]: any }) {
  if (typeof cWidth === 'number') return `width: ${cWidth}%;`;
  if (typeof cWidth === 'string') return `width: ${cWidth};`;
  return null;
}

export function fontWeight(props: { [prop: string]: any }) {
  let cssProp = getCSSProperties(
    props,
    { bold: 'bold', normal: 'normal', thin: 'thin' },
    'normal'
  );
  if (cssProp) return `font-weight: ${cssProp};`;
  return null;
}

export function fontSize(props: { [prop: string]: any }) {
  let cssProp = getCSSProperties(
    props,
    { large: '2em', small: '.75em', medium: '1.5em' },
    false
  );
  if (cssProp) return `font-size: ${cssProp};`;
  return null;
}

export function justifyContent(props: { [prop: string]: any }) {
  let cssProp = getCSSProperties(
    props,
    {
      jCenter: 'center',
      jStart: 'flex-start',
      jEnd: 'flex-end',
      jAround: 'space-around',
      jBetween: 'space-between'
    },
    false
  );
  if (cssProp) return `justify-content: ${cssProp};`;
  return null;
}

export function alignItems(props: { [prop: string]: any }) {
  let cssProp = getCSSProperties(
    props,
    { alCenter: 'center', alStart: 'flex-start', alEnd: 'flex-end' },
    false
  );
  if (cssProp) return `align-items: ${cssProp};`;
  return null;
}

export function flexWrap(props: { [prop: string]: any }) {
  let cssProp = getCSSProperties(
    props,
    { fWrap: 'wrap', noFWrap: 'no-wrap' },
    false
  );
  if (cssProp) return `flex-wrap: ${cssProp};`;
  return null;
}

export function textAlign(props: { [prop: string]: any }) {
  let cssProp = getCSSProperties(
    props,
    { txCenter: 'center', txRight: 'right', txLeft: 'left' },
    false
  );
  if (cssProp) return `text-align: ${cssProp};`;
  return null;
}

export function fontStyle(props: { [prop: string]: any }) {
  let cssProp = getCSSProperties(props, { italic: 'italic' }, false);
  return cssProp ? `font-style: ${cssProp}` : null;
}
