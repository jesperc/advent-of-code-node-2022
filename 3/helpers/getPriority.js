const isUpperCase = require("../../helpers/isUpperCase");

const lowerCaseScoreAdjustment = 96; // a-z score starts on 1 (a gives score 1)
const upperCaseScoreAdjustment = 38; // A-Z score starts on 27 (A gives score 27)

const getPriority = (char) => {
  const code = char.charCodeAt(0);
  return isUpperCase(char, 0)
    ? code - upperCaseScoreAdjustment
    : code - lowerCaseScoreAdjustment;
};

// for debugging...
// 1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20-21-22-23-24-25-26
// a-b-c-d-e-f-g-h-i- j- k- l- m- n- o- p- q- r- s- t- u- v- w- x- y- z
// 27-28-29-30-31-32-33-34-35-36-37-38-39-40-41-42-43-44-45-46-47-48-49-50-51-52
// A -B -C -D -E -F -G -H -I -J -K -L -M -N -O -P -Q -R -S -T -U -V -W -X -Y -Z

module.exports = getPriority;
