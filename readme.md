# Инструкция запуска и работы

Суть этого репозитория в том что бы насадить готовый html шаблон и отправить в продакшен.

## Разработка и деплой

При запуске jekyll у нас есть несколько важных ключей

1. ```--config _name-config.yml``` Запустит jekyll c *кастомным конфигурационным файлом*
2. ```--livereload``` Автоматическая перезагрузка в браузере при изменениях в коде

### Разработка

Конфигурационный файл ```_dev.yml``` нужен для запуска режима разработки. Сам режим запускает при помощи ключа ```--config _dev.yml```

#### Пример команды

```jekyll serve --config _dev.yml --livereload```

### Деплой

## Структура папок

В папкке `index-pagination-pages`  лежат индексные страницы пагинации колекций и категорий



     <a class="telegram" rel="nofollow" href="https://t.me/share/url?url={{ shareUrl }}&text={{ shareTitle | replace: ' ', "%20"}}">
        <span>Telegram</span>
      </a>


    {% if paginator.page_trail %}
                    {% for trail in paginator.page_trail %}
    
                    {% capture Trurl %}
                    /{{ trail.num }}/
                    {% endcapture %}
    
                    {% capture purl %}
                    {{ page.url | remove: "index.html"}}
                    {% endcapture %}
    
                    <li>
                        <a class="pagination__link
                        {% if Trurl == purl %}
                        active
                        {% elsif trail.num == 1 and  page.url == "/index.html"  %}
                        active
                        {% endif %}
                        " href="{{ trail.path | prepend: site.baseurl | replace: '//', '/' | remove_first: "/index.html"}}">
                        <span itemprop="name">{{ trail.num }}</span>
                        </a>
                    </li>
                    {% endfor %}
                    {% endif %}