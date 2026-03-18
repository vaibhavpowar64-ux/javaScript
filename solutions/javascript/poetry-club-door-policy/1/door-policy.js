// 1. Front door response → first character
export function frontDoorResponse(line) {
  return line[0];
}

// 2. Front door password → capitalize first letter
export function frontDoorPassword(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

// 3. Back door response → last non-space character
export function backDoorResponse(line) {
  return line.trim().slice(-1);
}

// 4. Back door password → same as front + ", please"
export function backDoorPassword(word) {
  const formatted =
    word[0].toUpperCase() + word.slice(1).toLowerCase();

  return formatted + ", please";
}