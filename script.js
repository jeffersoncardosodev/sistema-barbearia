// script.js
document.getElementById("booking-form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Captura os dados do formulário
    const name = document.getElementById("name").value;
    const service = document.getElementById("service").value;
    const barber = document.getElementById("barber").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const payment = document.getElementById("payment").value;
  
    // Monta a notificação
    const notification = `
      Cliente: ${name}
      Serviço: ${service}
      Barbeiro: ${barber}
      Data: ${date}
      Horário: ${time}
      Pagamento: ${payment}
    `;

    // Telefones dos barbeiros
    const barberPhones = {
      "Jefferson": "5521974088061", // Substitua pelo número real
      "Pedro": "5511888888888" // Substitua pelo número real
    };

    // Monta a mensagem para o WhatsApp
    const message = `
      Olá ${barber}, você tem um novo agendamento:
      - Cliente: ${name}
      - Serviço: ${service}
      - Data: ${date}
      - Horário: ${time}
      - Forma de pagamento: ${payment}
    `;

  
    // Adiciona a notificação à lista
    const notificationList = document.getElementById("notifications");
    const listItem = document.createElement("li");
    listItem.textContent = notification;
    notificationList.appendChild(listItem);
  
    // Limpa o formulário
    document.getElementById("booking-form").reset();
  
    // Simula envio da notificação ao barbeiro
    alert(`Agendamento enviado para ${barber}:\n${notification}`);
  });
  