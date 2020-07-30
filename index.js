import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/test', (req, res) => {
  const { string_to_cut: stringToCut } = req.body;
  const splitStrArray = stringToCut.split('');
  let returnString = '';
  for (let i = 2; i < splitStrArray.length - 1; i += 3) {
    returnString += splitStrArray[i];
  }
  return res.send({ return_string: returnString });
});

app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));

export default app;
