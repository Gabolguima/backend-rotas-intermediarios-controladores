const somar = ((req, res) => {
  const {
    num1,
    num2
  } = req.query;

  if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
    return res.send(`${Number(num1) + Number(num2)}`);
  }

  return res.send("Os números são inválidos!");
});

const subtrair = ((req, res) => {
  const {
    num1,
    num2
  } = req.query;

  if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
    return res.send(`${num1 - num2}`);
  }

  return res.send("Os números são inválidos!");
});

const multiplicar = ((req, res) => {
  const {
    num1,
    num2
  } = req.query;

  if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
    return res.send(`${num1 * num2}`);
  }

  return res.send("Os números são inválidos!");
});

const dividir = ((req, res) => {
  const {
    num1,
    num2
  } = req.query;

  if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
    return res.send(`${num1 / num2}`);
  }

  return res.send("Os números são inválidos!");
});

module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir,
}