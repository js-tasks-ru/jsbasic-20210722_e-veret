function namify(users) {
  if (!Array.isArray(users)) {
    return;
  }
  return users.map((obj) => obj.name);
}
