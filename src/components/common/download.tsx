import axios from "api/axios";

export function downloadFromId(downloadId, csfr) {
  const url =
    "/uiapi/FileAPI/v1/rest/dnld?downloadId=" +
    downloadId +
    "&type=''&csfr=" +
    csfr;
  window.location.href = url;
};

export function getDownloadId(payload, override) {
  return axios.post(
    "/uiapi/FileAPI/v1/rest/gdid?" +
      (override == null ? "" : "&override=" + encodeURIComponent(override)),
    payload
  );
};