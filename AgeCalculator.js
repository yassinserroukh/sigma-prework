function getAge(dateStr) {
  let today = new Date();
  let birthDate = new Date(dateStr);
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

console.log(getAge("2002/11/01"));
