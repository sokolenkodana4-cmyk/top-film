function sharePage() {
    const url = window.location.href;

    if (navigator.share) {
        navigator.share({
            title: document.title,
            text: 'Дивись цей добірку топ фільмів!',
            url: url
        })
        .then(() => console.log('Сторінку успішно поділено:', url))
        .catch((error) => console.error('Помилка при передачі:', error));
    } else {
        window.alert('Функція поділитися не підтримується вашим браузером. Скопіюйте посилання: ' + url);
    }
}