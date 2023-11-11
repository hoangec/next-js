import classes from './MeetupDetail.module.css';

function MeetupDetail(props) {
  return (
    <section className={classes.detail}>
      <h1>Nội dung chi tiết meetup</h1>
      <p>các thong tin ve mêtup</p>
      <img
        src={props.image}
        alt={props.title}
      />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
      <p>ket thuc noi dung</p>
    </section>
  );
}

export default MeetupDetail;
