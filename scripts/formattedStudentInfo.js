import {
  studentInfo
} from "./studentInfo.js";

// Alphabet Array - formattedStudentInfo
const sortItem = (arr) => {
  const copyItem = [...arr];
  const sortedByName = copyItem.sort((a, b) => {
    if (a.firstName > b.firstName) return 1;
    if (a.firstName < b.firstName) return -1;
  });
  return sortedByName;
};
const formattedStudentInfo = sortItem(studentInfo);

export { formattedStudentInfo };