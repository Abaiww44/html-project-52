// 1. Переключение тёмной темы
const themeBtn = document.getElementById('theme-toggle');
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-theme');
    themeBtn.textContent = isDark ? '☀️ Light' : '🌙 Dark';
  });
}

// 2. Кнопка возврата «Наверх»
const topBtn = document.getElementById('back-to-top');
if (topBtn) {
  window.addEventListener('scroll', () => {
    topBtn.classList.toggle('show', window.scrollY > 250);
  });

  topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// 3. Проверка формы контактов
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const successMsg = document.getElementById('form-success');

    // Проверяем каждое поле и выводим ошибки
    document.getElementById('name-error').textContent = name.length < 2 ? 'Введите имя (от 2 букв)' : '';
    document.getElementById('email-error').textContent = !email.includes('@') ? 'Введите корректный email' : '';
    document.getElementById('message-error').textContent = message.length < 5 ? 'Сообщение от 5 символов' : '';

    // Если всё заполнено верно — показываем успех и очищаем форму
    if (name.length >= 2 && email.includes('@') && message.length >= 5) {
      successMsg.textContent = '✓ Сообщение успешно отправлено!';
      successMsg.classList.add('visible');
      form.reset();
    }
  });
}
// 4. Закрытие блока хобби по нажатию Escape
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && location.hash === '#hobbies') {
    location.hash = '#top';
  }
});
