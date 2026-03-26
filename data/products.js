export const menProducts = Array.from({ length: 20 }, (_, i) => ({
  id: `men-${i + 1}`,
  name:
    i % 2 === 0
      ? "JUSTTOPRINT T-Shirt"
      : "Quiet Confidence Hoodie",
  price: i % 2 === 0 ? 19.99 + (i % 5) : 34.99 + (i % 5),
  subtitle:
    i % 2 === 0
      ? "Essential minimal tee"
      : "Heavyweight premium hoodie",
  category: i % 2 === 0 ? "T-Shirt" : "Hoodie",
}));

export const womenProducts = Array.from({ length: 20 }, (_, i) => ({
  id: `women-${i + 1}`,
  name:
    i % 2 === 0
      ? "JUSTTOPRINT T-Shirt"
      : "Quiet Confidence Hoodie",
  price: i % 2 === 0 ? 19.99 + (i % 5) : 34.99 + (i % 5),
  subtitle:
    i % 2 === 0
      ? "Essential minimal tee"
      : "Heavyweight premium hoodie",
  category: i % 2 === 0 ? "T-Shirt" : "Hoodie",
}));
