import axios from "axios";

// export const firebase = 'http://localhost:3000/';
export const firebase = '/api/';

export const getAllRoutes = async () => {
  try {
    return await axios.get(`${firebase}routes`).then((response) => {
      response.data.forEach((route) => {
        route.dots = route.dots.filter((dot) => {
          return dot != null
        })
      })
      return response.data
    })
  } catch (e) {
    console.log(e);
  }
}

export const getCategories = async () => {
  try {
    return await axios.get(`${firebase}dot_types`).then((response) => {
      return response.data;
    });
  } catch (e) {
    console.log(e);
  }
}

export const getDistricts = async () => {
  try {
    return await axios.get(`${firebase}districts`).then((response) => {
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
    return await axios.get(`${firebase}route_categories`).then((response) => {
      return response.data;
    });
  } catch (e) {
    console.log(e);
  }
}

export const postRoute = async (
  approved: boolean,
  animals: boolean,
  children: boolean,
  wheelChair: boolean,
  visuallyImpaired: boolean,
  minutes: number,
  title: string,
  description: string,
  type: Array<{ title: string, rus: string }>,
  category: Array<string>,
  districts: Array<string>,
  difficulty: string,
  durations: Array<{
    name: string,
    number: number
  }>,
  distance: number,
  update: boolean = false,
  id: string = '') => {
  if (!update) {
    const responseWithId = await axios.post(`${firebase}routes`, {
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
      difficulty: difficulty
    })
    return responseWithId.data.id
  } else {
    await axios.put(`${firebase}routes/${id}`, {
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
      difficulty: difficulty
    })
  }
}

export const postLinesIntoRoute = async (arrOfLines: Array<Object>, id: string) => {
  await axios.put(`${firebase}routes/${id}/lines`, arrOfLines)
}

export const deleteDots = async (before, after) => {
  const beforeIds = before.map((el) => {
    return el.id
  })
  const afterIds = after.map((el) => {
    return el.id
  }).filter((el) => el != '')
  if (beforeIds.length != 0) {
    beforeIds.forEach(async (idToCheck) => {
      console.log(idToCheck);

      if (afterIds.indexOf(idToCheck) === -1) await axios.delete(`${firebase}/dot/${idToCheck}`)
    })

  }
}

export const postDotsIntoRoute = async (arrOfPoints: Array<Object>, id: string) => {
  await axios.post(`${firebase}routes/${id}/dots`, arrOfPoints)
}
