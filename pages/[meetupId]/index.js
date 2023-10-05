import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
const mongoURI =
  "mongodb+srv://vohoangec:o48ErCHMi8m8v6YS@cluster0.jd01jtz.mongodb.net/meetups?retryWrites=true&w=majority";
const MeetupDetailPage = (props) => {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
};
export default MeetupDetailPage;

export async function getStaticPaths() {
  // tuong tac voi db de lay ds cac id chuan bi lam tahm so
  const client = await MongoClient.connect(mongoURI);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  // lay tat ca du lieu nhu chi chon cot _id de lay
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(mongoURI);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  // lay mêtup theo id
  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });
  client.close();
  console.log(selectedMeetup);
  return {
    props: {
      meetupData: {
        image: selectedMeetup.image,
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
}
