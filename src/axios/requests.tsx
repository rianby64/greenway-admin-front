import axios from "axios";

// export const firebase = 'http://localhost:3000/';
export const firebase = "/api/";
export const api = axios.create({
  withCredentials: true,
})
api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config;
})

export const getAllRoutes = async () => {
  try {
    return await api.get(`${firebase}routes`).then((response) => {
      response.data.forEach((route) => {
        route.dots = route.dots.filter((dot) => {
          return dot != null;
        });
      });
      return response.data;
    });
  } catch (e) {
    console.log(e);
  }
};

export const getAllUsersRoutes = async () => {
  try {
    return await api.get(`${firebase}routes/users`).then((response) => {
      response.data.forEach((route) => {
        route.dots = route.dots.filter((dot) => {
          return dot != null;
        });
      });
      return response.data;
    });
  } catch (e) {
    console.log(e);
  }
};

export const getCategories = async () => {
  try {
    return await api.get(`${firebase}dot_types`).then((response) => {
      return response.data;
    });
  } catch (e) {
    console.log(e);
  }
};

export const getDistricts = async () => {
  try {
    return await api.get(`${firebase}districts`).then((response) => {
      return response.data;
    });
  } catch (e) {
    console.log(e);
  }
};

export const getRouteTypes = async () => {
  try {
    return await api.get(`${firebase}route_types`).then((response) => {
      return response.data;
    });
  } catch (e) {
    console.log(e);
  }
};

export const getRouteDifficulty = async () => {
  try {
    return await api.get(`${firebase}route_difficulties`).then((response) => {
      return response.data;
    });
  } catch (e) {
    console.log(e);
  }
};

export const getRouteCategories = async () => {
  try {
    return await api.get(`${firebase}route_categories`).then((response) => {
      return response.data;
    });
  } catch (e) {
    console.log(e);
  }
};

export const postRoute = async (
  approved: boolean,
  animals: boolean,
  children: boolean,
  wheelChair: boolean,
  visuallyImpaired: boolean,
  minutes: number,
  title: string,
  description: string,
  type: Array<{ title: string; rus: string }>,
  category: Array<string>,
  districts: Array<string>,
  difficulty: string,
  durations: Array<{
    name: string;
    number: number;
  }>,
  distance: number,
  images: Array<any>,
  creator: {
    email: string;
    logo: string;
    name: string;
    phone: string;
    url: string;
  },
  update: boolean = false,
  isUsers: boolean = false,
  id: string = ""
) => {
  if (!update || isUsers) {
    const responseWithId = await api.post(`${firebase}routes`, {
      approved: approved,
      animals: animals,
      children: children,
      wheelChair: wheelChair,
      visuallyImpaired: visuallyImpaired,
      minutes: minutes,
      title: title,
      description: description,
      distance: distance,
      type: type,
      categories: category,
      districts: districts,
      durations: durations,
      difficulty: difficulty,
      images: images,
      creator: creator,
    });
    return responseWithId.data.id;
  } else {
    await api.put(`${firebase}routes/${id}`, {
      approved: approved,
      animals: animals,
      children: children,
      wheelChair: wheelChair,
      visuallyImpaired: visuallyImpaired,
      minutes: minutes,
      title: title,
      description: description,
      distance: distance,
      type: type,
      categories: category,
      districts: districts,
      durations: durations,
      difficulty: difficulty,
      images: images,
      creator: creator,
    });
  }
};

export const postUsersRoute = async (
  approved: boolean,
  animals: boolean,
  children: boolean,
  wheelChair: boolean,
  visuallyImpaired: boolean,
  minutes: number,
  title: string,
  description: string,
  type: Array<{ title: string; rus: string }>,
  category: Array<string>,
  districts: Array<string>,
  difficulty: string,
  durations: Array<{
    name: string;
    number: number;
  }>,
  distance: number,
  images: Array<any>,
  creator: {
    email: string;
    logo: string;
    name: string;
    phone: string;
    url: string;
  },
  update: boolean = false,
  id: string = ""
) => {
  if (!update) {
    const responseWithId = await api.post(`${firebase}routes/users`, {
      approved: approved,
      animals: animals,
      children: children,
      wheelChair: wheelChair,
      visuallyImpaired: visuallyImpaired,
      minutes: minutes,
      title: title,
      description: description,
      distance: distance,
      type: type,
      categories: category,
      districts: districts,
      durations: durations,
      difficulty: difficulty,
      images: images,
      creator: creator,
    });
    return responseWithId.data.id;
  } else {
    await api.put(`${firebase}routes/users/${id}`, {
      approved: approved,
      animals: animals,
      children: children,
      wheelChair: wheelChair,
      visuallyImpaired: visuallyImpaired,
      minutes: minutes,
      title: title,
      description: description,
      distance: distance,
      type: type,
      categories: category,
      districts: districts,
      durations: durations,
      difficulty: difficulty,
      images: images,
      creator: creator,
    });
  }
};

export const postLinesIntoRoute = async (
  arrOfLines: Array<Object>,
  id: string
) => {
  await api.put(`${firebase}routes/${id}/lines`, arrOfLines);
};

export const postLinesIntoUserRoute = async (
  arrOfLines: Array<Object>,
  id: string
) => {
  await api.put(`${firebase}routes/users/${id}/lines`, arrOfLines);
};

export const deleteDots = async (before, after) => {
  const beforeIds = before.map((el) => {
    return el.id;
  });
  const afterIds = after
    .map((el) => {
      return el.id;
    })
    .filter((el) => el != "");
  if (beforeIds.length != 0) {
    beforeIds.forEach(async (idToCheck) => {
      console.log(idToCheck);

      if (afterIds.indexOf(idToCheck) === -1)
        await api.delete(`${firebase}/dot/${idToCheck}`);
    });
  }
};

export const postDotsIntoRoute = async (
  arrOfPoints: Array<Object>,
  id: string
) => {
  await api.post(`${firebase}routes/${id}/dots`, arrOfPoints);
};

export const postDotsIntoUsersRoute = async (
  arrOfPoints: Array<Object>,
  id: string
) => {
  await api.post(`${firebase}routes/users/${id}/dots`, arrOfPoints);
};

export const deleteFromUsersRoutes = async (id) => {
  await api.delete(`${firebase}user/route/${id}`);
};
