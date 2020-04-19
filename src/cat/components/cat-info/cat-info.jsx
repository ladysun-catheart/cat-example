import React from 'react';
import Detail from '../../../core/components/detail';

const infoCat = cat => (cat ? {
  title: <><span role="img" aria-label="Cat icon">🐱</span> {cat._id} - {cat.name}</>,
  subtitle: <>{getSexIcon(cat.sex)} {cat.birthday ? getLabelBirthday(cat.birthday) : ''}</>,
  description: cat.description
} : {
    title: '',
    subtitle: '',
    description: ''
  }
);

const infoEmpty = () => ({
  emptyTitle: 'Welcome to Super Neko Database!',
  emptytext: 'Select a cat to show its details'
});

const getSexIcon = sex => {
  switch (sex) {
    case 'male':
      return <span role="img" aria-label="male">♂️</span>
    case 'female':
      return <span role="img" aria-label="female">♀️</span>
    default:
      return '-'
  }
}

const getLabelBirthday = (ms) => {
  const date = new Date(ms);
  const locale = window.navigator.userLanguage || window.navigator.language;
  const dateString = Intl.DateTimeFormat(locale).format(date);
  return dateString;
};

const actionList = (cat) => ([
  { id: 'edit', name: 'Modificar', handlerClick: () => { } },
  { id: 'delete', name: 'Borrar', handlerClick: () => { } },
]);

const CatInfo = ({ cat, 'data-testid': dataTestid }) => (
  <Detail
    data-testid={dataTestid}
    isAvailable={!!cat}
    actionList={actionList(cat)}
    {...infoCat(cat)}
    {...infoEmpty()}
  />
);

export default CatInfo;