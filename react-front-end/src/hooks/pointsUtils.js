// import { plantLevel, currentMonth, getMonthName } from '../hooks/pointsUtils';

import first_level from "../img/level01.png";
import second_level from "../img/level02.png";
import third_level from "../img/level03.png";
import forth_level from "../img/level04.png";
import fifth_level from "../img/level05.png";


export const plantLevel = (points) => {
  if (points >= 0 && points <= 4) {
    return first_level;
  } else if (points >= 5 && points <= 20) {
    return second_level;
  } else if (points >= 21 && points <= 50) {
    return third_level;
  } else if (points >= 51 && points <= 100) {
    return forth_level;
  } else if (points >= 101) {
    return fifth_level;
  }
  return first_level; 
};

export const getCitySymbol = (cityNumber) => {
  if (cityNumber === 1) return "http://localhost:8080/symbol/vancouver.jpg";
  else if (cityNumber === 2) return  "http://localhost:8080/symbol/burnaby.jpg";
  else if (cityNumber === 3) return "http://localhost:8080/symbol/northvan.jpg";
  else if (cityNumber === 4) return "http://localhost:8080/symbol/coquitlam.jpg";
  else if (cityNumber === 5) return "http://localhost:8080/symbol/richmond.jpg";
  else if (cityNumber === 6) return  "http://localhost:8080/symbol/langley.jpg";
  else return 'Invalid Month';
}

export const currentMonth = new Date().getMonth() + 1;

export const getMonthName = (monthNumber) => {
  if (monthNumber === 1) return 'January';
  else if (monthNumber === 2) return 'February';
  else if (monthNumber === 3) return 'March';
  else if (monthNumber === 4) return 'April';
  else if (monthNumber === 5) return 'May';
  else if (monthNumber === 6) return 'June';
  else if (monthNumber === 7) return 'July';
  else if (monthNumber === 8) return 'August';
  else if (monthNumber === 9) return 'September';
  else if (monthNumber === 10) return 'October';
  else if (monthNumber === 11) return 'November';
  else if (monthNumber === 12) return 'December';
  else return 'Invalid Month';
}