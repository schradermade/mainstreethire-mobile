import { Share } from 'react-native';

export const shareSpottiLink = async (id, name) => {
  try {
    const link = `hotspotti-mobile://spotti/${id}`; // Generate the deep link
    await Share.share({
      message: `Check out this Spotti on HotSpotti: ${name}\n${link}`,
    });
  } catch (error) {
    console.error('Error sharing:', error.message);
  }
};
