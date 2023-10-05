import { MongoClient } from "mongodb";
const mongoURI =
  "mongodb+srv://vohoangec:o48ErCHMi8m8v6YS@cluster0.jd01jtz.mongodb.net/meetups?retryWrites=true&w=majority";

const handler = async (req, res) => {
  // lay phuong thuc
  if (req.method === "POST") {
    // lay du lien tu client gui
    const data = req.body;
    try {
      // xu ly ket noi db va insert data
      const client = await MongoClient.connect(mongoURI);
      const db = client.db();
      const meetupsCollection = db.collection("meetups");
      const result = await meetupsCollection.insertOne(data);
      client.close();
      console.log(result);
      // tra vè client thong qua res
      res.status(201).json({ message: "them thanh cong", meetupData: result });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "loi ket noi db", error });
    }
  }
};
export default handler;
