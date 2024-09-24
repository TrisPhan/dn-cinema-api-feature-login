import axios from "axios";

export const apiGetShowTimesByFilm = async (id) => {
  try {
    const result = await axios.get(
      `http://localhost:8080/api/public/showtime/${id}`
    );
    return result.data;
  } catch (e) {
    console.log(e);
  }
};
export const apiGetShowTimesByDate = async (filmId, date) => {
  try {
    const result = await axios.get(
      `http://localhost:8080/api/public/showtime/${filmId}/${date}`
    );
    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const findAllShowTime = async () => {
  try {
    const result = await axios.get(`http://localhost:8080/api/public/showTime`);
  } catch (e) {
    console.log(e);
  }
};

export const createShowTime = async (showTimeData) => {
  return await axios.post(
    "http://localhost:8080/api/public/showtime/create",
    showTimeData
  );
};

export const findShowTimeById = async (idShowTime) => {
  try {
    const result = await axios.get(
      `http://localhost:8080/api/public/showTime/${idShowTime}`
    );
    return result.data;
  } catch (e) {
    console.log(e);
  }
};
export const deleteShowTime = async (idShowTime) => {
  try {
    await axios.delete(
      `http://localhost:8080/api/public/showTime/${idShowTime}`
    );
  } catch (e) {
    console.log(e);
  }
};
export const updateShowTime = async (showTime) => {
  try {
    await axios.put(
      `http://localhost:8080/api/publicshowTime/${showTime.idShowTime}`,
      { ...showTime }
    );
  } catch (e) {
    console.log(e);
  }
};
export const createSeats = async (idShowTime) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/public/seat/create`,
        null,
        { params: { idShowTime } }
      );
      return response.data;
    } catch (error) {
      console.error("Error creating seats:", error);
      throw error;
    }
  };
export const deleteSeats = async (idShowTime) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/public/seat/close`,
        null,
        { params: { idShowTime } }
      );
      return response.data;
    } catch (error) {
      console.error("Error creating seats:", error);
      throw error;
    }
  };