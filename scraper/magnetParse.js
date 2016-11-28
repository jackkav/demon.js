export default (input) => {
  const e = input.match(/S\d\dE\d\d/g)
  return {episode: e ? e.toString() : ''}
}
