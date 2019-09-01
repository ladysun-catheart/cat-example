import xml from 'xml';

const parseObjectToXml = (object) => xml(object);

const parseObjectToJson = (object) => JSON.stringify(object);

const downloadInfoText = (textToDownload, fileType, fileName) => {
  const blob = new File([textToDownload], { type: fileType });
  const a = document.createElement('a');
  a.download = fileName;
  a.href = URL.createObjectURL(blob);
  a.dataset.downloadurl = [fileType, a.download, a.href].join(':');
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(a.href);
};

export {
    parseObjectToXml,
    parseObjectToJson,
    downloadInfoText
};