module.exports = {
  random: function(min, max) {
    var multiplier = max - min + 1
    console.log("Multiplier ", multiplier)
    return Math.floor(Math.random() * multiplier) + min; 
  }
}