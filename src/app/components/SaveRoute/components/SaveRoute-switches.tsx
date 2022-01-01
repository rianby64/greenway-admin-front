import React from "react";
import { Switch } from "react-materialize";
import { SaveSwitches } from "../../../../types/Types";

export const SaveRouteSwitches: React.FunctionComponent<SaveSwitches> = ({
  saveForm,
  setSaveForm,
}) => {
  const switchHandler = (e) => {
    switch (e.target.id) {
      case "children":
        setSaveForm({
          ...saveForm,
          children: !saveForm.children,
        });
        break;
      case "wheelChair":
        setSaveForm({
          ...saveForm,
          wheelChair: !saveForm.wheelChair,
        });
        break;
      case "visuallyImpaired":
        setSaveForm({
          ...saveForm,
          visuallyImpaired: !saveForm.visuallyImpaired,
        });
        break;
      case "approved":
        setSaveForm({
          ...saveForm,
          approved: !saveForm.approved,
        });
        break;
      case "animals":
        setSaveForm({
          ...saveForm,
          animals: !saveForm.animals,
        });
        break;
      default:
        break;
    }
  };

  return (
    <div
      className="switches_handler"
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "95%",
        marginBottom: "10px",
      }}
    >
      <div
        className="switches_pair"
        style={{
          display: "flex",
          flexFlow: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Switch
          id="animals"
          checked={saveForm.animals}
          onChange={switchHandler}
          onLabel="С животными"
          offLabel="Без животных"
        />
        <Switch
          id="children"
          checked={saveForm.children}
          onChange={switchHandler}
          onLabel="С детьми"
          offLabel="Без детей"
        />
      </div>
      <div
        className="switches_pair"
        style={{
          display: "flex",
          flexFlow: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Switch
          id="wheelChair"
          checked={saveForm.wheelChair}
          onChange={switchHandler}
          onLabel="Подходит людям на коляске"
          offLabel="Не подходит людям на коляске"
        />
        <Switch
          id="visuallyImpaired"
          checked={saveForm.visuallyImpaired}
          onChange={switchHandler}
          onLabel="Доступно с нарушенем зрения"
          offLabel="Не доступно с нарушенем зрения"
        />
      </div>
      {/* <div className='switches_pair' style={{ display: 'flex', flexFlow: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Switch id='approved' checked={saveForm.approved} onChange={switchHandler} onLabel='Проверен' offLabel='Не проверен' />
      </div> */}
    </div>
  );
};
