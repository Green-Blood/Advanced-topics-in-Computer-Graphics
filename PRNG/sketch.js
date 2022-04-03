let distribution = new Array(360);
let customDistribution = new Array(360);
function setup() {
   createCanvas(640, 480);
   for (let i = 0; i < distribution.length; i++) {
     distribution[i] = floor(randomGaussian(30, 80));
    
   }
     for (let i = 0; i < customDistribution.length; i++) {
     customDistribution[i] = customRNG();
   }
 }
function draw() {
   background(204);
  translate(width / 2, height / 2);
  stroke('red');
  paint(distribution);
  stroke('black');
  paint(customDistribution);
 }

function customRNG()
{
  let u1 = 0;
  let u2 = 0;
  while (u1 === 0) u1 = random();
  while (u2 === 0) u2 = random();
  
  let r = sqrt(-2.0 * log(u1));
  let tetha = 2.0 * PI * u2;
  let result = [r * cos(tetha), r * sin(tetha)];
  return result[0] * 100;
}

function paint(numberDistribution)
{
   for (let i = 0; i < numberDistribution.length; i++) {
     rotate(TWO_PI / numberDistribution.length);
     
     let dist = abs(numberDistribution[i]);
     line(0, 0, dist, 0);
   }
}