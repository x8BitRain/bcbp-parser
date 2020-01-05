"use strict";

var julian = {
  dayInMs: 1000 * 60 * 60 * 24,
  julian1970: 2440588,
  julian2000: 2451545
};

var getJulianDate = function getJulianDate(jd) {
  var dayInMs = julian.dayInMs,
      julian1970 = julian.julian1970;

  return jd
};

var julianDays = function julianDays(jdays) {
  return jdays
};

module.exports = {
  getJulianDate: getJulianDate,
  julianDays: julianDays
};