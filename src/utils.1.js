module.exports = {
  random: function(min, max) {
    var multiplier = max - min + 1
    return Math.floor(Math.random() * multiplier) + min; 
  }
}