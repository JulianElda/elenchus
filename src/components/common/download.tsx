export function downloadFromId(downloadId, csfr) {
  const url =
    "/uiapi/FileAPI/v1/rest/dnld?downloadId=" +
    downloadId +
    "&type=''&csfr=" +
    csfr;
  window.location.href = url;
};
