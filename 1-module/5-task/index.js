function truncate(str, maxlength) {
  return str.length > maxlength ? str.slice(0, maxlength) + "\u2026" : str;
}
