import throttle from 'lodash.throttle';
import { save, load, remove } from './storage';

const filterForm = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

// опрос хранилища при загрузке и внесение данных в поля формы // initForm();

(function initForm() {
  const saveData = load(LOCAL_STORAGE_KEY);

  if (!saveData) {
    const obj = { email: '', message: '' }; // создание объекта полей с пустыми значениями для записи в хранилище
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(obj));
    return;
  }
  filterForm.email.value = saveData.email;
  filterForm.message.value = saveData.message;
})();

// вывод в консоль объекта + очистка полей формы и хранилища
const handleSubmit = evt => {
  evt.preventDefault();
  const {
    elements: { email, message },
  } = evt.currentTarget;
  console.log({ email: email.value, message: message.value });
  evt.currentTarget.reset(); // очистка полей формы
  remove(LOCAL_STORAGE_KEY); // очистка хранилища
  location.reload(); // перезагрузка страницы
};

// обновление хранилища
const onFormInput = evt => {
  const { name, value } = evt.target;

  let saveData = load(LOCAL_STORAGE_KEY);
  saveData = saveData ? saveData : {};

  saveData[name] = value;

  save(LOCAL_STORAGE_KEY, saveData);
};

filterForm.addEventListener('submit', handleSubmit);

const throttleOnFormInput = throttle(onFormInput, 500); // задержка в 500мс на обновление хранилища
filterForm.addEventListener('input', throttleOnFormInput); //слушатель ввода в поля формы
