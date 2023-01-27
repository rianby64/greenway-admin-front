import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  DescriptionProps,
  PointForm,
  PointRouteObj,
} from "../../../types/Types";
import { addPoint } from "../../../redux/useRoutesReducer";
import {
  hideSettings,
  setCurrentFeature,
} from "../../../redux/useSettingsreducer";
import { useTypedSelector } from "../../../redux/useTypedSelector.hook";
import { getCategories } from "../../../axios/requests";
import { DescriptionInputs } from "./components/DescriptionInputs";
import { DescriptionsSelect } from "./components/DescriptionSelect";
import * as Styled from "./styled";

export const DescriptionComponent: React.FunctionComponent<
  DescriptionProps
> = ({ currentFeature }: DescriptionProps) => {
  const { points } = useTypedSelector((store) => store.route);
  const dispatch = useDispatch();
  const isSettingsShawn = useTypedSelector(
    (store) => store.settings.isSettingsShawn
  );
  const [isShawn, setIsShawn] = useState(isSettingsShawn);
  const [form, setForm] = useState<PointForm>({
    id: "",
    name: "",
    description: "",
    categories: "",
    images: [""],
  });
  const [dotTypes, setDotTypes] = useState<Array<any>>([]);

  const editedPointArray = (newPoint: PointRouteObj) => {
    const filteredArrayOfPoints = points.filter((el) => {
      if (
        el.position.lat === newPoint.position.lat &&
        el.position.lng === newPoint.position.lng
      )
        return false;
      else return true;
    });
    filteredArrayOfPoints.push(newPoint);
    return filteredArrayOfPoints;
  };

  const submitHandler = () => {
    if (form.categories != "") {
      const pointToAdd: PointRouteObj = {
        id: form.id,
        position: {
          lat: currentFeature.lat,
          lng: currentFeature.lng,
        },
        title: form.name,
        description: form.description,
        type: form.categories,
        images: form.images,
      };
      dispatch(hideSettings());
      dispatch(setCurrentFeature({}));
      dispatch(addPoint(editedPointArray(pointToAdd)));
      setForm({
        id: "",
        name: "",
        description: "",
        categories: "",
        images: [""],
      });
    } else {
      alert("Выберите категорию точки");
    }
  };

  const imagesInputChange = (e, ind) => {
    const editedImages = form.images;
    editedImages[ind] = e.target.value;
    setForm({
      ...form,
      images: editedImages,
    });
  };

  const addImageElem = (e) => {
    e.preventDefault();
    if (form.images.length < 3) {
      const newImages = form.images;
      newImages.push("");
      setForm({
        ...form,
        images: newImages,
      });
    }
  };

  const fetchDottype = async () => {
    const fetched = await getCategories();
    setDotTypes(fetched);
  };

  useEffect(() => {
    setIsShawn(isSettingsShawn);
    fetchDottype();
    let isPointFind: boolean = false;
    points.map((el) => {
      if (currentFeature.lat === el.position.lat) {
        isPointFind = true;
        setForm({
          id: el.id,
          name: el.title.toString(),
          description: el.description.toString(),
          categories: el.type,
          images: el.images && el.images.length ? el.images : [""],
        });
      }
    });
    if (!isPointFind) {
      setForm({
        id: "",
        name: "",
        description: "",
        categories: "",
        images: [""],
      });
    }
  }, [isSettingsShawn]);

  return (
      <Styled.styledDivWrapper>
        <Styled.Wrapper
            onClick={() => dispatch(hideSettings())}
            style={isShawn ? {} : { display: "none"}}
            className="shadow"
        >
          <Styled.StyledHandlers
              onClick={(e) => e.stopPropagation()}
              style={isShawn ? {} : { display: "none" }}
          >
            <Styled.StyledForm className="form save-dot-form ">
              <DescriptionInputs form={form} setForm={setForm} />
              <DescriptionsSelect
                  form={form}
                  setForm={setForm}
                  dotTypes={dotTypes}
              />
              <Styled.StyledImageHandler className="images-dots">
                {form.images.map((el, index) => {
                  console.log(el, index);
                  return (


                      <Styled.styledDiv className="inputs">
                        <Styled.styledInput
                            className="image-input"
                            type="text"
                            placeholder="Вставьте ссылку на фотографию"
                            value={el}
                            onChange={(e) => imagesInputChange(e, index)}
                        />

                          <Styled.styledButton onClick={addImageElem}>Добавить ещё фото</Styled.styledButton>



                      </Styled.styledDiv>

                  );
                })}
              </Styled.StyledImageHandler>
              <Styled.styledButton
                  className="btn red"
                  type="button"
                  value="сохранить"
                  onClick={submitHandler}
              >
                Сохранить
              </Styled.styledButton>
            </Styled.StyledForm>
          </Styled.StyledHandlers>
        </Styled.Wrapper>
      </Styled.styledDivWrapper>

  );
};
