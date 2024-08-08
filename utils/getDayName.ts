export const getDayName = (dateString: string): string => {
  const days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];

  const date = new Date(dateString);
  const dayIndex = date.getDay();

  return days[dayIndex];
};
