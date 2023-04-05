import throttle from 'lodash.throttle';
import { save, load, remove } from './storage';

const filterForm = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

const handleSubmit = evt => {
  evt.preventDefault();

  const {
    elements: { email, message },
  } = evt.currentTarget;

  console.log({ email: email.value, message: message.value });
  evt.currentTarget.reset();
  remove(LOCAL_STORAGE_KEY);
};

filterForm.addEventListener('submit', handleSubmit);

// initForm();
(function initForm() {
  const saveData = load(LOCAL_STORAGE_KEY);
  //   console.log(saveData);

  if (!saveData) {
    return;
  }
  //   Object.entries(saveData).forEach(([name, value]) => {
  //     filterForm.elements[name].value = value;
  //   });
  filterForm.email.value = saveData.email;
  filterForm.message.value = saveData.message;
})();

const onFormInput = evt => {
  const { name = '', value = '' } = evt.target;

  let saveData = load(LOCAL_STORAGE_KEY);
  saveData = saveData ? saveData : {};

  saveData[name] = value;

  save(LOCAL_STORAGE_KEY, saveData);
};

const throttleOnFormInput = throttle(onFormInput, 500);
filterForm.addEventListener('input', throttleOnFormInput);
