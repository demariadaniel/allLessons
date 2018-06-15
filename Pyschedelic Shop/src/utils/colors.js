const theme1 = {
  name: "Blacklight",
  colors: {
    "--color1" : "#E6F5F7",
    "--color0" : "#222",
    "--color000": "#000",
    "--colorA" : "magenta",
    "--colorB" : "darkblue",
    "--colorC" : "#51BFB5",
    "--colorD" : "#9FE3DD",
    "--colorE" : "darkmagenta",
    "--colorF" : "#E3FEBE",
    "--colorG" : "deeppink"
  }
}

const theme2 = {
  name: "Water",
  colors: {
    "--color1" : "#E6F5F7",
    "--color0" : "#222",
    "--color000": "#000",
    "--colorA" : "magenta",
    "--colorB" : "blue",
    "--colorC" : "#51BFB5",
    "--colorD" : "#9FE3DD",
    "--colorE" : "teal",
    "--colorF" : "#E3FEBE",
    "--colorG" : "darkblue"
  }
}

const theme3 = {
  name: 'Heat',
  colors: {
    "--color1" : "#fff",
    "--color0" : "#222",
    "--color000": "#000",
    "--colorA" : "magenta",
    "--colorB" : "darkred",
    "--colorC" : "royalblue",
    "--colorD" : "lightskyblue",
    "--colorE" : "gold",
    "--colorF" : "#E3FEBE",
    "--colorG" : "#FF530D"
  }
}

const HTML     =()=> getComputedStyle(document.getElementsByTagName('html')[0]);
const color1   =()=> HTML().getPropertyValue('--color1');
const color0   =()=> HTML().getPropertyValue('--color0');
const color000 =()=> HTML().getPropertyValue('--color000');
const colorA   =()=> HTML().getPropertyValue('--colorA');
const colorB   =()=> HTML().getPropertyValue('--colorB');
const colorC   =()=> HTML().getPropertyValue('--colorC');
const colorD   =()=> HTML().getPropertyValue('--colorD');
const colorE   =()=> HTML().getPropertyValue('--colorE');
const colorF   =()=> HTML().getPropertyValue('--colorF');
const colorG   =()=> HTML().getPropertyValue('--colorG');

export {
  HTML, 
  colorA, 
  colorB, 
  colorC, 
  colorD,
  colorE, 
  colorF,
  colorG, 
  color0,
  color1,
  color000,
  theme1, 
  theme2, 
  theme3
};