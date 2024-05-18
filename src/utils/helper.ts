/**
 * This function will convert given number into hours and minutes
 * @param num - will take a number as input
 * @returns will return string like "2 Hour 11 Min"
 */
export function numberToTime(num: number) {
  let coppiedNum = num
  let hour = Math.floor(num / 60)
  let minute = coppiedNum - hour * 60
  return `${hour} ${hour > 1 ? `hours` : `hour`} ${minute} Min `
}
