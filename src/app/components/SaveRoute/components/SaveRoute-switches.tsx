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
    <div className='switches_handler' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '95%' }}>
      <div className='switches_pair' style={{ display: 'flex', flexFlow: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Switch id='animals' checked={saveForm.animals}  onChange={switchHandler} onLabel='С животными' offLabel='Без животных' />
        <Switch id='children' checked={saveForm.children} onChange={switchHandler} onLabel='С детьми' offLabel='Без детей' />
      </div>
      <div className='switches_pair' style={{ display: 'flex', flexFlow: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Switch id='disabilities' checked={saveForm.disabilities} onChange={switchHandler} onLabel='Подходит инвалидам' offLabel='Не подходит инвалидам' />
        <Switch id='approved' checked={saveForm.approved} onChange={switchHandler} onLabel='Проверен' offLabel='Не проверен' />
      </div>
    </div>
  )
}