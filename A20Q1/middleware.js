module.exports = (req, res, next) => {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  console.log(`${year}-${month}-${day} ${hours}:${minutes}:${seconds} | ${req.method} from ${req.url}`)
  next()
}