import {
    parseObjectToXml,
    parseObjectToJson,
    downloadInfoText
  } from '../../core/utils/file';
  import CatApi from '../../core/apis/cat-api';

const typeParseInfo = {
    xml: { 
        fileType: 'application/xml', 
        parseTo: parseObjectToXml  
    },
    json: { 
        fileType: 'application/json', 
        parseTo: parseObjectToJson  
    }
};
  
const downloadInfoCat = (info, fileName, typeToParse) => {
    const { fileType, parseTo } = typeParseInfo[typeToParse];
    const textToDownload = parseTo(info);
    downloadInfoText(textToDownload, fileType, fileName);
};
  
const getAllcats = (selectedType) => {
    CatApi.fetchAllCatList()
        .then(res => downloadInfoCat(res.data, `catlist.${selectedType}`, selectedType));
};

export {
    downloadInfoCat,
    getAllcats
};