function takeANumber(line, name) {
  line.push(name);
  var position = line.length;
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var currentCustomer = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${currentCustomer}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if (line.length === 0) {
  var newLineMessage = "The line is currently empty."
  }
  else {
    var i;
    var lineMessage = "The line is currently:";
    for (i = 0; i < line.length; i++) {
      if (line.length === 1) {
      newLineMessage = `${lineMessage} ${i + 1}. ${line[0]}`
      }
      else {
        newLineMessage += `${lineMessage}, ${i + 1}. ${line[i]}`
      }
    }
  }
  return newLineMessage
}