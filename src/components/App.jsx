import React from "react";

import FeedbackForm from "././FeedbackForm/FeedbackForm";
import StaticRange from "././StaticRange/StaticRange";

export const App = () => {
  return (
    <div >
      <FeedbackForm />
      <StaticRange />
    </div>
  );
};


export default App;

// Шаг 1
// Приложение должно отображать количество собранных отзывов для каждой категории. 
// Приложение не должно сохранять статистику отзывов между разными сессиями(обновление страницы).

// Состояние приложения обязательно должно быть следующего вида, добавлять новые свойства нельзя.



