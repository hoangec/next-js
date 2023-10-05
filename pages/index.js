import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";
const mongoURI =
  "mongodb+srv://vohoangec:o48ErCHMi8m8v6YS@cluster0.jd01jtz.mongodb.net/meetups?retryWrites=true&w=majority";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup!",
  },
];

const HomePage = (props) => {
  return (
    <>
      <Head>
        <meta name="description" content="Free Web tutorials" />
        <title>Meetups Application </title>
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

export default HomePage;

export async function getStaticProps(context) {
  const client = await MongoClient.connect(mongoURI);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  console.log(meetups);
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(), // voi monggodb dinh dang _id hoi khac nen ta can chinh lai id
      })),
    },
    revalidate: 10,
  };
}

// export async function getServerSideProps(context) {
//     const request = context.req
//     const response = context.res
//     console.log(request)
//     return {
//       props: {
//         meetups: DUMMY_MEETUPS,
//       }
//     };
// }
