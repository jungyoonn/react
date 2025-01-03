import React from 'react';

const styles ={
  wrapper : {
    border: "1px solid grey",
    display: "inline-block",
    margin: 30,
    padding: 8,
    flexDirection: "row",
    justifyContent: "center"
  },
  card : {
    width: 300,
    height: 500,
    background: "#de3151"
  },
  image : {
    width: 300,
    height: 250
  },
  commentText : {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 0,
    marginLeft: 10
  },
  discriptText : {
    color: "white",
    fontSize: 18,
    marginTop: 10,
    marginBottom: 0,
    marginLeft: 10
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column"
  }
};

const AirBnb = (props) => {

  return (
    <div style={styles.wrapper}>
      <div style={styles.contentContainer}>
        <div style={{...styles.card, background: props.color}}>
          <img 
            src='https://placehold.co/300x250'
            style={styles.image}
          />
          <p style={styles.commentText}>{props.text}</p>
          <p style={styles.discriptText}>{props.discript}</p>
        </div>
      </div>
    </div>
  );
}

export default AirBnb;
