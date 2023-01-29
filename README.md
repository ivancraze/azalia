First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Тестовое задание на должность Frontend-developer

**Цель работы:**

Заверстать и адаптировать сетку с товарами без использования UI библиотек

**Материалы:**

1. Макет - [https://www.figma.com/file/62d5foEih048PTMLQccdC2/AzaliaNow---%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-Frontend-developer?node-id=0%3A1&t=EPTKIFoe6LZ4uus5-1](https://www.figma.com/file/62d5foEih048PTMLQccdC2/AzaliaNow---%25D1%2582%25D0%25B5%25D1%2581%25D1%2582%25D0%25BE%25D0%25B2%25D0%25BE%25D0%25B5-%25D0%25B7%25D0%25B0%25D0%25B4%25D0%25B0%25D0%25BD%25D0%25B8%25D0%25B5-Frontend-developer?node-id=0:1&t=EPTKIFoe6LZ4uus5-1)
2. Сервис с данными - [https://fakestoreapi.com/docs](https://fakestoreapi.com/docs)

**Обязательные условия:**

1. Вся разработка должна быть на TypeScript + NextJS - [https://nextjs.org/docs/basic-features/typescript](https://nextjs.org/docs/basic-features/typescript)
2. Карточку товара максимально, насколько это возможно в рамках дедлайна, разбивать на компоненты и типизировать
3. Для всех фотографий использовать next/image
4. Не использовать готовые библиотеки с компонентами (писать исключительно на модульном scss)
5. Подготовить самый простой адаптив под мобильные устройства (достаточно пустить карточки по 1 штуке в ряд). Брейкпоинты любые
6. Реализовать добавление в корзину и в избранное (можно добавлять в local storage, можно в state manager, можно просто в локальный стейт, тут на усмотрение кандидата)
7. Конвертировать цену, которая приходит с сервиса в рубли (по курсу 1 единица в данных = 70 рублей)
8. После завершения задания предоставить код на Github + задеплоенную ветку на Vercel
9. Лейбл “Хит” должна появляться только на товарах, где количество отзывов > 300

**Что можно использовать:**

1. React-query для запросов - [https://react-query-v3.tanstack.com/](https://react-query-v3.tanstack.com/) (или RTK Query, если будете подключать redux-toolkit)
2. Axios - [https://axios-http.com/ru/docs/intro](https://axios-http.com/ru/docs/intro)
3. Google Fonts
