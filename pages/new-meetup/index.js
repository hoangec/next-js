import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
const NewMeetupPage = () => {
    const router = useRouter()
    const  addMeetupHandler = async (newMeetupData) => {
        const result = await fetch('/api/new-meetup',{
            method: 'POST',
            body: JSON.stringify(newMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        })  
        console.log(result)
        router.push('/')
    }

    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    )
};
export default NewMeetupPage;
