# Структура файла

## Структура продукта и поля:

1. imgSmallPath - выступает как маленькое изображение. Отображается только в TopSwiper
2. imgPath - ыступает как качественное изображение. Отображается почти во всех компонентах

# Задачи:
- ## Основа:

  - Добавить страйп TODO: Остановился здесь https://www.youtube.com/watch?v=YTc0Zi70AjM&t=9691s

    - Калькуляция amount для продукта 1 вариант:

      1. Забираем из url:
         - год гарантии (по умолчанию 0)
         - цвет (по умолчанию 0)
      2. Забираем цену
      3. Перемножаем
      4. Добавляем / обновляем amount для продукта

    - Калькуляция amount для продукта 2 вариант:
      1. Забираем из url
         - год гарантии (по умолчанию 0) Если гарантия пустая, то priceId дефолтное Если гарантия есть, то priceId забираем из гарантии

  - Доработать заголовок аксессуаров в корзине  
    Для страницы с корзинок и модального окна разные заголовки

- ## SEO

https://docs.affirm.com/developers/docs/transactions-web https://docs.affirm.com/developers/docs/create-a-checkout-object https://docs.affirm.com/developers/reference/the-item-object

extend

Может ли человек оформлять заказ через extend без гарантии для сегвея? Например выбран ks-max-white без гарантии.

1. Импорт каталога через API
2. СОздание контракта

I'm attaching a technical presentation and some notes in this email. We can discuss more on Thursday. Focusing mainly on the third slide in this presentation, at a high level the integration steps
should look as below:

1. Product Sync - We would like to get your product catalog (Simar included a template in his previous email). This will help us make sure all warrantable products in your catalog have appropriate
   warranty plans mapped to them on our end. This is important to successfully render offers in step 2.

2. Offers - You can leverage the offers API to fetch offers on your website, using your store id (available on the merchant portal) and product reference id (unique product identifier in your product
   catalog. Again, to reiterate, we do need to make sure whichever product you are initially testing with, is actually set up in our system and marked as "warrantable" with plans so you can see
   offers.
3. Contracts - Once a customer makes a purchase with a warranty with a product, you can leverage our contract creation API to send over the order information so that we can create a contract in our
   system and begin coverage for the product. We will also send the customer email with our terms and conditions so please include customer email in this API call. It will be useful to create
   contracts once a product is fulfilled (the customer actually has it in hand) so that we don't begin warranty coverage too early. We can talk about options for doing this in our next call.

4. Refunds/Cancellations - If a customer would like to return a warranty they purchased, you will process it as a regular cancellation per your store policy and let us know through our contracts
   refund endpoint so that we can terminate the contract on our end and make necessary adjustments to the monthly invoice we send you. We will email the customer letting them know their contract is
   cancelled, so please include customer email in this API call as well.

Let me know if you have any questions as you go through the API documentation as well as this deck.

1.  Пользователь посылает запрос на синхронизацию продуктов. Посылается запрос с продуктом(ами) При успехе, в ответ приходит тот же самый массив

Ребята с extend пока не создали чат, но вот личная почта нашего тех спеца ankita.gupta@extend.com

Можешь написать, что ты от cherry Wheel LLC, и задавать любые вопросы(можно и через Гугл переводчик) думаю поймут все

Flow в идеале сохранить наш, можешь в принципе уточнить насколько возможно, что обязательно к использованию, а что нет, ответят на все вопросы

Т.е. мне нужно вначале узнать как устроен flow на simplyev, чтобы понимать что на клиенте нужно отображать? Т.к. на simplyev я заметил что extended можно отдельно приобретать для

Hi. I'm John from cherry Wheel LLC as web developer for segway.vercel.app. Now we are now integrating your 'extend' system for our products. We want to make a choice of warranty for the product like
on this website: https://simplyev.com. This website has custom flow to choise warranty for products.

Пришел ответ:

You should be able to use the Offer API to recreate that modal functionality from simplyev site. Ideally, once we have your product catalog, we map warranty plans to your products so that you can see
those offers appear for your products. For development purposes, please see this SDK document in case it's easier for you to use this approach along with API.

https://helloextend.github.io/extend-sdk-client/

Так же назначили в четверг(сегодня уже) созвон с их тех спецом

Планы Запомнить какой алн выбран КОнтракт Вся сумма

Человек нажимает опата через extended

Получаем актуальную цену за гарантию НЕТ Запоминаем какой план выран НЕТ Заполняем план в json ДА

Оплачивем через stripe Формируем контракт(ы) Куда отправлять контракт?

В страйп не отправляется метаданные? Да, не отправляем. Создаем новый товар? Да для контракта Что такое лид? Человек который не выбрал гарантию при покупке. Отпраляем запрос.

Работаеют с 9 утра по 9 вечера по Лос Анджелес.

Оплата, если есть модели с гарантией

1. Человек нажимает 'Pay now' (paypay или stripe и т.п.)
2. Формируем контракт на основе планов. Работа с API extended'а Например выбраны модели:

- ks-max 3 year warranty
- ks-es4 1 year warranty
- ks-e-22 Формируем 2 контракта

3. Проводим оплату, при успехе создаем 2 товара-контракта для страйпа

1. Формируем обект для extended и stripe Если у нас ks-max-3-year, то у нас 2 продукта

- ks-max
- ks-max-3-year-warranty И т.д. (У ks-max в страйп попадает продукт без гарантии)

2. Создаем продукт в страйпе через API
3. Проводим оплату При успехе, в страйп попадает продукт-контракт Иначе продукт-контракт удаляем

Team vercel.com/segway/segway

Project prj_8JH1vIUopgBpMeFZmYYgyHHz6Dei

<!-- ------------------------ZING C8------------------------ -->

# ZING C8

1. ZING C8

- desktop  
  Brand-new Electric <br/> Operation – Even </br> More Fun to Ride

- mobile

2. ZING C8

- desktop
- mobile

3. ZING C8

- desktop
- mobile

4. ZING C8

- desktop
- mobile

5. ZING C8

- desktop
- mobile

6. ZING C8

- desktop
- mobile

<!-- ------------------------E25A------------------------ -->

# E25A

1. E25A

- desktop
- mobile

2. E25A

- desktop
- mobile

3. E25A

- desktop
- mobile

4. E25A

- desktop
- mobile

5. E25A

- desktop
- mobile

6. E25A

- desktop
- mobile

<!-- ------------------------P65------------------------ -->

# P65

1. P65

- desktop
- mobile

2. P65

- desktop
- mobile

3. P65

- desktop
- mobile

4. P65

- desktop
- mobile

5. P65

- desktop
- mobile

6. P65

- desktop
- mobile

<!-- ------------------------P100------------------------ -->

# P100

1. P100

- desktop
- mobile

2. P100

- desktop
- mobile

3. P100

- desktop
- mobile

4. P100

- desktop
- mobile

5. P100

- desktop
- mobile

6. P100

- desktop
- mobile

<!-- ------------------------GT1------------------------ -->

# GT1

1. GT1

- desktop
- mobile

2. GT1

- desktop
- mobile

3. GT1

- desktop
- mobile

4. GT1

- desktop
- mobile

5. GT1

- desktop
- mobile

6. GT1

- desktop
- mobile

<!-- ------------------------GT2------------------------ -->

# GT2

1. GT2

- desktop
- mobile

2. GT2

- desktop
- mobile

3. GT2

- desktop
- mobile

4. GT2

- desktop
- mobile

5. GT2

- desktop
- mobile

6. GT2

- desktop
- mobile
