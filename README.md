# Assignment 6: jQuery

This is a small multi-page website for Assignment 6. It demonstrates jQuery selectors, effects, DOM manipulation, animations, and an accordion mini project. No build tool is needed.

**Student:** Khloptsev Artem  
**Group:** SE-2525

## Pages and tasks

| Page | Tasks | What to try |
| --- | --- | --- |
| `index.html` | 0–1 | Open the console; change content and styles with ID, class, and tag selectors. |
| `effects.html` | 2–4 | Hide/show/toggle text, fade an image, slide a panel. |
| `dom.html` | 5–7 | Add/remove list items, change image/link attributes, type in the form. |
| `animations.html` | 8–10 | Run basic, sequential, and combined square animations. |
| `project.html` | 11 | Expand and collapse accordion sections. |

## Run

Open `index.html` in a browser and use the navigation bar. An internet connection is needed because jQuery 3.7.1 loads from the [official jQuery CDN](https://releases.jquery.com/). For local development, you can also serve this folder with any static server, such as `python -m http.server 8000`, then open `http://localhost:8000/`.

## Defense notes

- `$(document).ready(...)` runs after the document is loaded; Task 0 logs `jQuery is ready!`.
- `#id`, `.class`, and `tag` select different groups of elements. `.text()` inserts plain text; `.html()` inserts HTML from a fixed string; `.css()` changes style.
- `.hide()`, `.show()`, and `.toggle()` change visibility. Fade and slide methods animate that change.
- `.append()` adds at the end; `.prepend()` adds at the beginning; `.remove()` deletes an element. `.attr()` changes HTML attributes. `.val()` reads form values.
- `.animate()` changes numeric CSS properties. In Task 9, multiple calls run in order. In Task 10, one call changes several properties together.
- The accordion uses click events and slide effects, and updates `aria-expanded` so its state is clear to assistive technology.

The illustrations in `assets/` are local SVG files. All examples use plain HTML, CSS, JavaScript, and jQuery.

## Кратко для защиты

1. В каждом HTML-файле сначала подключается jQuery из CDN, затем свой JS-файл. `defer` сохраняет этот порядок. Внутри `$(document).ready(...)` код ждёт загрузки HTML.
2. На странице **Basics** кнопки выбирают элемент по ID (`#`), группе по классу (`.`) и тегу. `.text()` записывает обычный текст, `.html()` вставляет заранее заданную разметку, `.css()` меняет оформление.
3. На странице **Effects** `hide/show/toggle` меняют видимость сразу, `fade*` меняют прозрачность плавно, `slide*` плавно меняют высоту блока.
4. На странице **DOM** `.append()` добавляет элемент в конец списка, `.prepend()` в начало, `.remove()` удаляет. `.attr()` меняет `src` и `href`. `.val()` читает ввод, а `.text()` безопасно показывает его ниже формы.
5. На странице **Animations** первый квадрат меняет размер и положение, второй выполняет четыре шага подряд, третий меняет несколько свойств одновременно. Кнопка Reset останавливает очередь и возвращает исходные значения.
6. На странице **Mini project** аккордеон открывает один ответ за раз с помощью `slideToggle`; остальные закрываются через `slideUp`. `aria-expanded` показывает текущее состояние кнопки.

Для сдачи по заданию нужно опубликовать проект через GitHub Pages или Netlify и отправить ссылку на репозиторий. Локальные коммиты сами по себе сайт не публикуют.
