export function checkIfAllCriteriaAreDone(criteriaMap) {
  let areAllCriteriaDone = true;
  Object.keys(criteriaMap).forEach(function (key) {
    if (!criteriaMap[key]) {
      areAllCriteriaDone = false;
    }
  });

  return areAllCriteriaDone;
}

