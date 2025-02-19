### ინსტრუქცია

1. თითოეული დავალებისთვის `src` ფოლდერში შექმენით ახალი ფოლდერი, მაგ. `hw-7`
2. კონკრეტული დავალების CSS, JSX და სხვა ფაილები დაამატეთ შესაბამისი დავალების ფოლდერში, მაგ. `hw-7`-ში
3. დავალების ფოლდერში დაამატეთ `App.jsx`, რომელიც დაარენდერებს კონკრეტული დავალების კოდს, მაგ. `hw-7/App.jsx`
4. ყოველი ახალი დავალების დამატებისას, შესაბამისი დავალების `App.jsx` დააიმპორტეთ `main.jsx`-ში და ძველი იმპორტები დააკომენტარეთ. მაგ.:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
// import { FigurineCreator } from "./hw-7/App";
import { OneWayChat } from "./hw-8/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <FigurineCreator /> */}
    <OneWayChat />
  </React.StrictMode>
);
```
