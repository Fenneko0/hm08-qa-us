module.exports = {
  getPhoneNumber: function (countryCode) {
    const number = Math.floor(1000000000 + Math.random() * 9000000000);
    return `${countryCode}${number}`;
  },
  getElementByText: async function (obj) {
    return await $(`div=${obj.toString()}`);
  },
  getCreditCardCode: async function () {
    const cardNumber = Math.floor(100000000000 + Math.random() * 900000000000);
    // For some reason when I use const importing this function I recieve error
    // Tried using both `${}` and .toString options, neither worked, nor the number
    return cardNumber.toString();
  },
  // getCodeNumber: async function() {
  //   const cVCNumber = Math.floor(10 + Math.random() * 90);
  //   return `${cVCNumber}`;
  // }
};
