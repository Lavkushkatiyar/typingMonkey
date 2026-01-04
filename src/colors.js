export function black(text) {
  return "\x1B[30m" + text + "\x1B[0m";
}
export function red(text) {
  return "\x1B[31m" + text + "\x1B[0m";
}
export function green(text) {
  return "\x1B[32m" + text + "\x1B[0m";
}
export function yellow(text) {
  return "\x1B[33m" + text + "\x1B[0m";
}
export function blue(text) {
  return "\x1B[34m" + text + "\x1B[0m";
}
export function magenta(text) {
  return "\x1B[35m" + text + "\x1B[0m";
}
export function cyan(text) {
  return "\x1B[36m" + text + "\x1B[0m";
}
export function white(text) {
  return "\x1B[37m" + text + "\x1B[0m";
}
export function bold(text) {
  return "\x1B[1m" + text + "\x1B[0m";
}

export function dim(text) {
  return "\x1B[2m" + text + "\x1B[0m";
}

export function italic(text) {
  return "\x1B[3m" + text + "\x1B[0m";
}

export function underline(text) {
  return "\x1B[4m" + text + "\x1B[0m";
}

export function blink(text) {
  return "\x1B[5m" + text + "\x1B[0m";
}
