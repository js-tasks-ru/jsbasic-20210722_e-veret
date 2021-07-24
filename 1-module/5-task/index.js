function truncate(str, maxlength) {
  return str.length > maxlength ? str.substr(0, 19) + "\u2026" : str;
}
