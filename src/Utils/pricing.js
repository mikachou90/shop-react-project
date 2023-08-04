const getFormattedPrice = (price) => {
  if (typeof price === "number" && price > 0) {
    return new Intl.NumberFormat("zh-TW", {
      style: "currency",
      currency: "NTD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  } else {
    return null;
  }
};

export { getFormattedPrice };
