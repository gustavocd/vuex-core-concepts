export const fetchNumber = ({ commit }, { max, min }) => {
  setTimeout(commit('addRandomNumber', Math.floor(Math.random() * (max - min) + min)), 500);
};
