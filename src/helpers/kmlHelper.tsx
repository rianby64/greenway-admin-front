export const interpretateKmlText = (
  text: string
): { lat: number; lng: number }[] => {
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
