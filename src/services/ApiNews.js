import { useState } from "react";

const apiNews = async (url, setTodos) => {
  const response = await fetch(url);
  const data = await response.json();
  setTodos(data);
};

export default apiNews;
