export function isValidEmail(email: string): boolean {
  const value = email.trim();
  // Базовая проверка по задаче: e-mail должен содержать @.
  return /^[^\s@]+@[^\s@]+$/.test(value);
}

export function isValidRussianPhone(phone: string): boolean {
  const normalized = phone.trim().replace(/[\s()-]/g, "");
  // Принимаем только форматы РФ: +7XXXXXXXXXX или 8XXXXXXXXXX (ровно 11 цифр).
  return /^\+7\d{10}$/.test(normalized) || /^8\d{10}$/.test(normalized);
}
