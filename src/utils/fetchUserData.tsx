export const fetchUserData = () => {
  try {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user && user.name) {
      return user.name;
    } else {
      console.error('No username found in localStorage');
    }
  } catch (error) {
    console.error('Error parsing user from localStorage', error);
  }
};
