import Header from "./components/Header";
import FirstCard from "./components/FirstCard";

import { useEffect, useState } from "react";
import "./App.css";
import apiNews from "./services/ApiNews";

const url = "https://jsonplaceholder.typicode.com/todos";
const news = [
  {
    title:
      "Mis primeras señas proyecto único en Chile que busca apoyar a la infancia sorda desde el audiovisual",
    author: "Cristiano Ronaldo",
    img: "https://fakeimg.pl/400x300/009578/fff/",
    date: "Hace una hora",
  },
  {
    title:
      "Proyecto de ley incorpora en el Plan de Formación Ciudadana la educación financiera, el fomento de lenguaje de señas y la promoción de la protección animal y tenencia responsable de mascotas.",
    author: "El bicho",
    img: "https://fakeimg.pl/400x300/ed0e0e/fff/",
    date: "Hace un dia",
  },
  {
    title:
      "Lecturas accesibles: lanzan colección de literatura infantil en Lengua de Señas Chilena",
    author: "Lionel Messi",
    img: "https://fakeimg.pl/400x300/0b07eb/fff/",
    date: "Hace tres dias",
  },
  {
    title:
      "Buscan mejorar atención de personas sordas con lengua de señas a través de videollamadas",
    author: "Lep",
    img: "https://fakeimg.pl/400x300/ed4ea6/fff/",
    date: "Hace una semana",
  },
  {
    title: "Lenguaje de señas desde una mirada fonoaudiológica",
    author: "Gabriel Boric",
    img: "https://fakeimg.pl/400x300/32fabe/fff/",
    date: "Hace un mes",
  },
];
const App = () => {
  const [todos, setTodos] = useState();
  console.log(news[0].title);
  useEffect(() => {
    apiNews(url, setTodos);
  }, []);
  return (
    <div>
      <Header />
      <div className="container">
        Ultima Noticia
        <FirstCard />
        Otras Noticias
        <div className="grid-container">
          {news.map((n) => (
            <div className="card">
              <img src={n.img} alt="asd" className="card-image" />
              <div className="card-content">
                <p>{n.title}</p>
              </div>
              <div className="card-info">
                <div>{n.date}</div>
                <div>{n.author}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
