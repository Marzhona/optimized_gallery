export const getImages = async () => { // Исправленное имя функции
    try {
      const response = await fetch('https://dog.ceo/api/breed/hound/images');
      const data = await response.json();
      return data.message;
    } catch (error) {
      throw new Error('Error fetching images:', error);
    }
  };