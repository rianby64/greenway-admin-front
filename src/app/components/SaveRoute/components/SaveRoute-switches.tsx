import React from 'react';
import { Switch } from 'react-materialize';
import { SaveSwitches } from '../../../../types/Types';

export const SaveRouteSwitches: React.FunctionComponent<SaveSwitches> = ({ saveForm, setSaveForm }) => {
  const switchHandler = (e) => {
    switch (e.target.id) {
      case 'children':
        setSaveForm({
          ...saveForm,
          children: !saveForm.children
        });
        break;
      case 'disabilities':
        setSaveForm({
          ...saveForm,
          disabilities: !saveForm.disabilities
        });
        break;
      case 'approved':
        setSaveForm({
          ...saveForm,
          approved: !saveForm.approved
        })
        break;
      case 'animals':
        setSaveForm({
          ...saveForm,
          animals: !saveForm.animals
        })
        break;
      default:
        break;
    }
  }

  return (
    <>
      <Switch id='animals' onChange={switchHandler} onLabel='С животными' offLabel='Без животных' />
      <Switch id='children' onChange={switchHandler} onLabel='С детьми' offLabel='Без детей' />
      <Switch id='disabilities' onChange={switchHandler} onLabel='Подходит инвалидам' offLabel='Не подходит инвалидам' />
      <Switch id='approved' onChange={switchHandler} onLabel='Проверен' offLabel='Не проверен' />
    </>
  )
}