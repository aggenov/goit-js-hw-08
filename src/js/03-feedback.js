import throttle from 'lodash.throttle';
import { save, load, remove } from './storage';

const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;
const LOCAL_STORAGE_KEY = 'feedback-form-state';

// опрос хранилища при загрузке и внесение данных в поля формы // initForm();

(function initForm() {
  const saveData = load(LOCAL_STORAGE_KEY);

  if (!saveData) {
    return;
  }
  form.email.value = saveData.email;
  form.message.value = saveData.message;
})();

// вывод в консоль объекта + очистка полей формы и хранилища
const handleSubmit = evt => {
  evt.preventDefault();
  // проверка пустые поля
  if (email.value === '' || message.value === '') {
    return alert('All fields must be filled!');
  }
  console.log({ email: email.value, message: message.value });
  evt.currentTarget.reset(); // очистка полей формы
  remove(LOCAL_STORAGE_KEY); // очистка хранилища
};

// обновление хранилища при вводе в поле формы
const onFormInput = evt => {
  const saveData = {
    email: form.email.value,
    message: form.message.value,
  };

  save(LOCAL_STORAGE_KEY, saveData);
};

form.addEventListener('submit', handleSubmit); // слушатель отправки формы
form.addEventListener('input', throttle(onFormInput, 500)); //слушатель ввода в поля формы с задержкой в 500мс на обновление хранилища
