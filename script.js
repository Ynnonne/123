// Проверка реферера для блокировки прямых переходов  
if (document.referrer.indexOf("t.me") === -1) {  
  window.location.href = "https://cdek.ru"; // редирект для всех, кроме трафика из Telegram  
}  
