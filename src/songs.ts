export const isTitleEmpty = (songTitle: string): boolean => {
  return songTitle.length === 0;
};

export const doesTitleExist = (
  songTitle: string,
  songTitles: string[]
): boolean => {
  return songTitles.includes(songTitle);
};

export const isTitleShort = (songTitle: string): boolean => {
  return songTitle.length < 3;
};

export const isPlaylistFull = (songTitles: string[]): boolean => {
  return songTitles.length >= 5;
};

export const addSong = (songTitle: string, songTitles: string[]): void => {
  let title = songTitles.push(songTitle);
};

export const sortSongs = (songTitles: string[]): void => {
  songTitles.sort();
};

export const getSongsCount = (songTitles: string[]): number => {
  return songTitles.length;
};

export const removeSongByPosition = (
  songTitles: string[],
  position: number
): void => {
  if (position < 0) {
    position = 0;
  }
  songTitles.splice(position, 1);
};

export const getErrorMessage = (errorCode: string): string => {
  switch (errorCode) {
    case "required":
      return "No has introducido ningún título";
    case "exists":
      return "La canción ya existe";
    case "too-short":
      return "El título es demasiado corto";
    case "limit":
      return "La playlist está llena";
    default:
      return "Código de error desconocido";
  }
};
