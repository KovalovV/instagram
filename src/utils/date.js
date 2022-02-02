export const formatDate = (date) => {
  const timestamp = new Date(date);

  let dd = timestamp.getDate();
  if (dd < 10) {
    dd = `0${dd}`;
  }

  let mm = timestamp.getMonth() + 1;
  if (mm < 10) {
    mm = `0${mm}`;
  }

  let yy = timestamp.getFullYear() % 100;
  if (yy < 10) {
    yy = `0${yy}`;
  }

  return `${dd}.${mm}.20${yy}`;
};
