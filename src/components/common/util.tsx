export function formatDate(param: any): string {
  let date = new Date(parseInt(param));
  return date.toLocaleString("de-de");
}

export function formatSize(bytes: number): string {
  let number, unit, units;
  if (bytes <= 0 || !isFinite(bytes)) {
    return "0 MB";
  }
  units = ["B", "kB", "MB", "GB", "TB", "PB"];
  number = Math.floor(Math.log(bytes) / Math.log(1024));
  unit = " " + units[number];
  return (bytes / Math.pow(1024, Math.floor(number))).toFixed(2) + unit;
}
