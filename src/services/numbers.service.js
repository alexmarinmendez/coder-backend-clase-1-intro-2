export const isReverseIntService = (int, revInt) => {
    const revString = int.toString().split('').reverse().join('')
    return (parseInt(revString) * Math.sign(int)) === revInt
}