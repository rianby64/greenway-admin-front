import axios from "axios";

// export const firebase = 'http://localhost:3000/';
export const firebase = '/api/';



export const getCategories = async () => {
  try {
    return await axios.get(`${firebase}dot_types`).then((response) => {
      return response.data;
    });
  } catch (e) {
    console.log(e);
  }
}


export const getRouteTypes = async () => {
  try {
    return await axios.get(`${firebase}route_types`).then((response) => {
      return response.data;
    });
  } catch (e) {
    console.log(e);
  }
}

export const getRouteDifficulty = async () => {
  try {
    return await axios.get(`${firebase}route_difficulties`).then((response) => {
      return response.data;
    });
  } catch (e) {
    console.log(e);
  }
}

export const getRouteCategories = async () => {
  try {
    return await axios.get(`${firebase}route_types`).then((response) => {
      return response.data;
    });
  } catch (e) {
    console.log(e);
  }
}

export const postRoute = async (approved: boolean, animals: boolean, children: boolean, disabilities: boolean, minutes: number, title: string, description: string, type: Array<String>, difficulty: string, distance: number) => {
  const responseWithId = await axios.post(`${firebase}routes`, {
    approved: approved,
    animals: animals,
    children: children,
    disabilities: disabilities,
    minutes: minutes,
    title: title,
    description: description,
    distance: distance,
    type: type,
    difficulty: difficulty
  })
  return responseWithId.data.id
}

export const putLinesIntoRoute = async (arrOfLines: Array<Object>, id: string) => {
  await axios.put(`${firebase}routes/${id}/lines`, arrOfLines)
}

export const putDotsIntoRoute = async (arrOfPoints: Array<Object>, id: string) => {
  await axios.post(`${firebase}routes/${id}/dots`, arrOfPoints)
}