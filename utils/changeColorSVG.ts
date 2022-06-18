function replaceAll(str: string, searchStr: string, replaceStr: string) {
  return str.split(searchStr).join(replaceStr);
}

export default function changeColorSVG(svg: string, fill = '#2946BE') {
  const color = fill.replace('#', '');

  return replaceAll(svg, '$fill', color);
}
