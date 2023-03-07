// треба зробити перевірку чи вибрана дата.
import createmarkup from './js/news-card';
import NewsFetchApi from './js/newsApi';
import onSearchClick from './js/header';
import { ThemeSwitcher } from './js/themeSwitcher';
import createWidget from './js/weatherApi';
import calendar from './js/calendar';
import PaginationLogicPopular from './js/paginationLogicPopular';
import PaginationLogicCategory from './js/paginationLogicCategory';
import PaginationLogicSearch from './js/paginationLogicSearch';
import { onPaginationPopularNextClick } from './js/paginationPopular';
import { onPaginationPopularPrevClick } from './js/paginationPopular';
import { onPaginationCategoryPrevClick } from './js/paginationCategory';
import { onPaginationCategoryNextClick } from './js/paginationCategory';
import { onPaginationSearchPrevClick } from './js/paginationSearch';
import { onPaginationSearchNextClick } from './js/paginationSearch';
// import publishedDateFormatter from './js/publishedDateFormatter';

const pagRefs = {
  prev: document.querySelector('.pag-arrow--prev'),
  next: document.querySelector('.pag-arrow--next'),
};

const newsContainerRef = document.querySelector('.news_container');
const body = document.querySelector('body');
const searchInput = document.querySelector('.search_form');

export const newsFetchApi = new NewsFetchApi();
export const popularNewsPagination = new PaginationLogicPopular();
export const categoryNewsPagination = new PaginationLogicCategory();
export const searchNewsPagination = new PaginationLogicSearch();

const STORAGE_FAVORITES_KEY = 'favorites';
let resultsArr = [];

// приносить список тем
function getSectionList(e) {
  e.preventDefault();
  newsFetchApi.fetchSectionList().then(({ data: { results } }) => {
    results.forEach(({ section, display_name }) => {
      // деструктурував необхідні данні для розмітки.
      const sectionName = section;
      const displayName = display_name;
    });
  });
}

getPopularNews();

// приносить дані популярних новин
function getPopularNews() {
  newsFetchApi
    .fetchPopularNews()
    .then(({ data }) => {
      //   загальна кількість знайдених новин
      const totalNews = data.num_results;
      // это нужно для избранного
      resultsArr = data.results;
      // проверка если нету новостей.
      if (resultsArr.length === 0) {
        newsContainerRef.innerHTML = '';
        document.querySelector('.without-news_container').style.display =
          'block';
      } else {
        pagRefs.prev.removeEventListener(
          'click',
          onPaginationCategoryPrevClick
        );
        pagRefs.next.removeEventListener(
          'click',
          onPaginationCategoryNextClick
        );
        pagRefs.prev.removeEventListener('click', onPaginationSearchPrevClick);
        pagRefs.next.removeEventListener('click', onPaginationSearchNextClick);
        pagRefs.prev.addEventListener('click', onPaginationPopularPrevClick);
        pagRefs.next.addEventListener('click', onPaginationPopularNextClick);

        popularNewsPagination.resultsArr = resultsArr;
        const markupAllPopular = popularNewsPagination.getMarkupAll();
        populateNews(markupAllPopular);
      }
    })
    .catch(error => console.log(error));
}

document.querySelector('.test').removeEventListener('click', onCategoryClick);

document.querySelector('.test').addEventListener('click', onCategoryClick);

// приносить дані новин по категоріям
function onCategoryClick(evt) {
  newsFetchApi.offset = 0;
  categoryNewsPagination.resetPage();

  // evt.preventDefault();
  // тут треба записати значення обраної категорії з події на яку кнопку клацнули
  newsFetchApi.searchSection = 'business';

  newsFetchApi
    .fetchBySection()
    .then(({ data }) => {
      pagRefs.prev.removeEventListener('click', onPaginationCategoryPrevClick);
      pagRefs.next.removeEventListener('click', onPaginationCategoryNextClick);
      //   загальна кількість знайдених новин, тут она врёт, на самом деле приходит меньше чем есть.
      const totalNews = data.num_results;
      // это нужно для избранного
      resultsArr = data.results;

      // проверка если нету новостей.
      if (data.results === null) {
        newsContainerRef.innerHTML = '';
        document.querySelector('.without-news_container').style.display =
          'block';
      } else {
        categoryNewsPagination.resultsArr = [];
        pagRefs.prev.removeEventListener('click', onPaginationPopularPrevClick);
        pagRefs.next.removeEventListener('click', onPaginationPopularNextClick);
        pagRefs.prev.removeEventListener('click', onPaginationSearchPrevClick);
        pagRefs.next.removeEventListener('click', onPaginationSearchNextClick);
        pagRefs.prev.addEventListener('click', onPaginationCategoryPrevClick);
        pagRefs.next.addEventListener('click', onPaginationCategoryNextClick);
        categoryNewsPagination.resultsArr = resultsArr;
        const markupAllCategory = categoryNewsPagination.getMarkupAll();
        populateNews(markupAllCategory);
      }
    })
    .catch(error => console.log(error.response.statusText));
}

searchInput.addEventListener('submit', onSearchInputClick);

// приносить дані за пошуковим запитом
function onSearchInputClick(evt) {
  evt.preventDefault();
  //  значення пошукового запиту
  newsFetchApi.searchQuery = evt.target.elements.searchQuery.value;
  newsFetchApi.resetPage();

  newsFetchApi
    .fetchBySearchQuery()
    .then(({ data: { response } }) => {
      pagRefs.prev.removeEventListener('click', onPaginationSearchPrevClick);
      pagRefs.next.removeEventListener('click', onPaginationSearchNextClick);

      //   загальна кількість знайдених новин
      totalNews = response.meta.hits;
      // это нужно для избранного
      resultsArr = response.docs;

      // проверка если нету новостей.
      if (resultsArr.length === 0) {
        newsContainerRef.innerHTML = '';
        document.querySelector('.without-news_container').style.display =
          'block';
      } else {
        searchNewsPagination.resultsArr = [];
        pagRefs.prev.removeEventListener('click', onPaginationPopularPrevClick);
        pagRefs.next.removeEventListener('click', onPaginationPopularNextClick);
        pagRefs.prev.removeEventListener(
          'click',
          onPaginationCategoryPrevClick
        );
        pagRefs.next.removeEventListener(
          'click',
          onPaginationCategoryNextClick
        );
        pagRefs.prev.addEventListener('click', onPaginationSearchPrevClick);
        pagRefs.next.addEventListener('click', onPaginationSearchNextClick);

        searchNewsPagination.resultsArr = resultsArr;
        const markupAllSearch = searchNewsPagination.getMarkupAll();
        populateNews(markupAllSearch);
      }
    })
    .catch(error => console.log(error));
}

//===добавляет избранное в локальное хранилище ==========
function setFavoritesInLocalStor({ resultsArr, clickedArticleId }) {
  resultsArr.forEach(article => {
    if (
      article.id == clickedArticleId ||
      article.slug_name == clickedArticleId ||
      article._id == clickedArticleId
    ) {
      let savedData = localStorage.getItem(STORAGE_FAVORITES_KEY);

      // проверка или есть уже обьект
      savedData = savedData ? JSON.parse(savedData) : {};

      if (savedData[clickedArticleId]) {
        delete savedData[`${clickedArticleId}`];

        localStorage.setItem(STORAGE_FAVORITES_KEY, JSON.stringify(savedData));
        return;
      } else {
        savedData[clickedArticleId] = article;

        localStorage.setItem(STORAGE_FAVORITES_KEY, JSON.stringify(savedData));
      }
    }
  });
}
//== добавляет избранное в локальное хранилище. конец ==========

//============= перемикач теми початок ==========

const themeSwitcherEl = document.querySelector('.switch_input');
const mobileSwitcherEl = document.querySelector('.switch_input--mobile');

const themeSwitcher = new ThemeSwitcher(themeSwitcherEl, mobileSwitcherEl);

mobileSwitcherEl.addEventListener('change', themeSwitcher.onThemeToggle);
themeSwitcherEl.addEventListener('change', themeSwitcher.onThemeToggle);

themeSwitcher.renderTheme();
//============= перемикач теми кінець ============

// Начало. Проверка на клик по Добавить в избранное
function onAddToFavoritesClick(evt) {
  if (evt.target.className === 'card__btn') {
    const clickedArticleId =
      evt.target.closest('.card')?.id ||
      evt.target.closest('.card')?.slug_name ||
      evt.target.closest('.card')?._id;
    setFavoritesInLocalStor({
      resultsArr,
      clickedArticleId,
    });
  }
}

// Конец. Проверка на клик по Добавить в избранное

//=== Подчеркивание активной ссылки на страницу -- начало

import './js/currentPage';

//=== Подчеркивание активной ссылки на страницу -- конец

// Рендеринг всех карточек на странице с календарём. начало
export function populateNews(markupAllPopular) {
  newsContainerRef.innerHTML = markupAllPopular;

  // Блок добавления погоды
  const weatherWidgetContainer = document.querySelector('.weatherWidget');

  createWidget(weatherWidgetContainer);

  // Слушатель на клик по Добавить в избранное
  body.addEventListener('click', onAddToFavoritesClick);
}
// Рендеринг всех карточек на странице с календарём. конец
