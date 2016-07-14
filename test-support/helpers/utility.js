export function removeWhiteSpace(str) {
  return str.replace(/\s+/g, ' ');
}

export function elementsToTextArray($nodeList) {
  let result = [];
  $nodeList.map((i, node) => result.push($(node).text().trim()));

  return result;
}
