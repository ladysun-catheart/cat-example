import React from 'react';
import Detail from '../../../core/components/detail';

const infoCat = cat => (cat ? {
  title: <><span role="img" aria-label="Cat icon">🐱</span> {cat._id} - {cat.name}</>,
  subtitle: <>{cat.sex.icon} {cat.birthday ? getLabelBirthday(cat.birthday) : ''}</>,
  description: cat.description
} : {});

const infoEmpty = () => ({
  emptyTitle: 'Welcome to Super Neko Database!',
  emptytext: 'Select a cat to show its details'
});

const getLabelBirthday = (ms) => {
  const date = new Date(ms);
  const locale = window.navigator.userLanguage || window.navigator.language;
  const dateString = Intl.DateTimeFormat(locale).format(date);
  return dateString;
};

const actionList = (cat) => ([
  {name: 'Modificar', handlerClick: () => {}},
  {name: 'Borrar', handlerClick: () => {}},
]);

const CatInfo = ({ cat, 'data-testid': dataTestid }) => (
  <Detail
    data-testid={dataTestid}
    isAvailable={Boolean(cat)}
    actionList={actionList(cat)}
    {...infoCat(cat)}
    {...infoEmpty()}
  />
);

export default CatInfo;