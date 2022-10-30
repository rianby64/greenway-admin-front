import GpxParser from "gpxparser";

export const interpretateKmlText = (
  text: string
): { lat: number; lng: number }[] => {
  console.log(text);
  return text
    .split("<coordinates>")[1]
    .split("</coordinates>")[0]
    .split("\r\n")
    .map((el) => el.split(",").slice(0, 2).join(","))
    .map((el) => {
      const coordsArray = el.split(",");
      return {
        lat: parseFloat(coordsArray[1]),
        lng: parseFloat(coordsArray[0]),
      };
    });
};

export const interpretateGpxText = (
  text: string
): { lat: number; lng: number }[] => {
  console.log(text);
  const gpx = new GpxParser();
  gpx.parse(`<xml>${text}</xml>`);
  return gpx.tracks[0].points.map((el) => {
    return {
      lat: el.lat,
      lng: el.lon,
    };
  });
};
