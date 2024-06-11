import axios from "axios";

const generate = async (event) => {
  event.preventDefault();

  const [name, setName] = useState("Name will be populated here");
  const [lastName, setLastName] = useState("Last name will be populated here");
  const [email, setEmail] = useState("Email will be populated here");
  const [gender, setGender] = useState("Gender will be populate here");
  const [address, setAddress] = useState("Address will be populate here");
  const [country, setCountry] = useState("Country will be populate here");

  const emails = [
    {
      id: 1,
      domain: "icloud.com",
    },
    {
      id: 2,
      domain: "gmail.com",
    },
    {
      id: 3,
      domain: "yahoo.com",
    },
    {
      id: 4,
      domain: "hotmail.com",
    },
  ];

  const options = {
    method: "POST",
    url: "https://fakerpro.p.rapidapi.com/schema",
    params: { amount: "1" },
    headers: {
      "x-rapidapi-key": "46e4600040msh2fc1496a0ac3011p147823jsn2ca935ec8b45",
      "x-rapidapi-host": "fakerpro.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    data: {
      full_name: "name",
      person_age: "age",
      person_gender: "gender",
      person_address: "address",
      postal_code: "postal",
      country_code: "country",
    },
  };

  await axios
    .request(options)
    .then((response) => {
      console.log(response.data);
      setName(response.data.full_name.split(" ")[0]);
      setLastName(response.data.full_name.split(" ")[1]);
      setEmail(
        response.data.full_name.replace(" ", ".") +
          "@" +
          emails[Math.floor(Math.random() * emails.length)].domain
      );
      setGender(response.data.person_gender);
      setAddress(response.data.person_address);
      setCountry(response.data.country_code);
    })
    .catch((error) => {
      console.error(error);
    });
};

export { generate };
