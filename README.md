# Задачи:
- ## Основа:
  - Добавить страйп
    TODO: Остановился здесь https://www.youtube.com/watch?v=YTc0Zi70AjM&t=9691s

    - Калькуляция amount для продукта 1 вариант:
      1. Забираем из url:     
          * год гарантии (по умолчанию 0)
          * цвет (по умолчанию 0)
      2. Забираем цену
      3. Перемножаем
      4. Добавляем / обновляем amount для продукта

    - Калькуляция amount для продукта 2 вариант:
      1. Забираем из url    
          * год гарантии (по умолчанию 0)
          Если гарантия пустая, то priceId дефолтное
          Если гарантия есть, то priceId забираем из гарантии

  - Доработать заголовок аксессуаров в корзине    
    Для страницы с корзинок и модального окна разные заголовки

- ## SEO
  - Добавить метатег в head
  - Добавить h1
  - Провести необходимое сео
  - Создать sitemap.json и снерерировать на сервере sitemap.xml
  - Создать robots.txt
  - Добавить хк на весь сайт
  
https://docs.affirm.com/developers/docs/transactions-web
https://docs.affirm.com/developers/docs/create-a-checkout-object
https://docs.affirm.com/developers/reference/the-item-object
Закончил на подготовке объекта для affirm