export const colorAccToIndex = (index: number) => {
  if (index % 2 === 1) {
    return ['#F69C3F', '#E96949', '#DB2F54'];
  } else if (index % 2 === 0) {
    return ['#9E3AB2', '#746DC9', '#5790D9'];
  } else {
    return ['#36D29B', '#3994BC', '#3B58DC'];
  }
};
