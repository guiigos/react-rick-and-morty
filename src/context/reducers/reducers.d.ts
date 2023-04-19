declare type ResponseApiInfoType = {
  count: number,
  pages: number,
  next?: string,
  prev?: string,
};

declare type ResponseApiAllCharactersType = {
  info: ResponseApiInfoType,
  results: CharacterType[],
}

declare type CharacterType = {
  id: number,
  name: string,
  status: string,
  species: string,
  gender: string,
  image: string,
};

declare type CharacterDetailType = {
  location: {
    name: string,
  },
  origin: {
    name: string,
  },
  episode: string[],
};




declare type EpisodesType = {
  id: number,
  name: string,
  episode: string,
  created: string,
  characters: string[],
};
