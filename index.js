function writeCards(names, giftType) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${giftType} gift!`;
      messages.push(message);
    }
    return messages;
  }
  const names = ["Guadalupe", "Ollie", "Aki"];
  const giftType = "surprise";
  const messages = writeCards(names, giftType);
  console.log(messages);

  function countDown(num) {
    for (let i = num; i >= 0; i--) {
      console.log(i);
    }
  }