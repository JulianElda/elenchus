/*
export enum FileEntryMime {
  GENERIC = "gen",
  PDF = "pdf",
  DOC = "doc",
  PPT = "ppt",
  XLS = "xls",
  ODX = "odx",
  ZIP = "zip",
  VIDEO = "vid",
  IMAGE = "img",
  AUDIO = "aud",
}
*/
export const mimes = {
  vid: ["mp4", "mov", "mkv", "webm", "avi"],
  aud: ["mp3", "wav", "flac", "ogg"],
  img: ["png", "jpg", "jpeg", "bmp", "gif", "svg"],
  pdf: ["pdf"],
  txt: ["txt"],
  src: ["conf", "js", "java", "css", "html", "src", "class", "c", "sh", "php"],
  doc: ["doc", "docx", "dotx"],
  xls: ["xls", "xlsx", "xlsm"],
  ppt: ["ppt", "pptx", "pps", "ppsx"],
  odx: ["odt", "odp", "ods"],
  zip: ["zip", "7z", "rar"]
}
